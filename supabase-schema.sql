-- ============================================================
-- ACONCN v2 — Supabase 数据库建表脚本
-- 在 Supabase SQL Editor 中执行此脚本
-- ============================================================

-- 1. products 表
CREATE TABLE IF NOT EXISTS products (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL DEFAULT '',
  category TEXT NOT NULL DEFAULT 'Manhole Covers',
  load_class TEXT DEFAULT '',
  price NUMERIC(10,2) DEFAULT 0,
  stock INTEGER DEFAULT 0,
  status TEXT DEFAULT 'active',
  image TEXT DEFAULT '',
  description TEXT DEFAULT '',
  specs JSONB DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- 公开读权限
CREATE POLICY "products_public_select" ON products
  FOR SELECT USING (true);

-- 管理员写权限（通过 JWT 中的 role 判断）
CREATE POLICY "products_admin_insert" ON products
  FOR INSERT WITH CHECK (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "products_admin_update" ON products
  FOR UPDATE USING (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "products_admin_delete" ON products
  FOR DELETE USING (auth.jwt() ->> 'role' = 'admin');

-- 2. orders 表
CREATE TABLE IF NOT EXISTS orders (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  customer TEXT NOT NULL DEFAULT '',
  product TEXT NOT NULL DEFAULT '',
  quantity INTEGER NOT NULL DEFAULT 1,
  amount NUMERIC(10,2) DEFAULT 0,
  status TEXT DEFAULT 'pending',
  date TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "orders_admin_all" ON orders
  FOR ALL USING (auth.jwt() ->> 'role' = 'admin');

-- V2-P4：删除公共插入策略，防止任何人伪造订单
-- 不创建替代策略，orders 表只有已登录管理员可以操作
-- DROP POLICY IF EXISTS "orders_public_insert" ON orders;

-- 3. customers 表
CREATE TABLE IF NOT EXISTS customers (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL DEFAULT '',
  company TEXT DEFAULT '',
  email TEXT DEFAULT '',
  phone TEXT DEFAULT '',
  country TEXT DEFAULT '',
  status TEXT DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE customers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "customers_admin_all" ON customers
  FOR ALL USING (auth.jwt() ->> 'role' = 'admin');

-- 4. certifications 表
CREATE TABLE IF NOT EXISTS certifications (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL DEFAULT '',
  description TEXT DEFAULT '',
  image TEXT DEFAULT '',
  category TEXT DEFAULT 'EN 124',
  status TEXT DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE certifications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "certs_public_select" ON certifications
  FOR SELECT USING (true);

CREATE POLICY "certs_admin_all" ON certifications
  FOR ALL USING (auth.jwt() ->> 'role' = 'admin');

-- 5. news 表
CREATE TABLE IF NOT EXISTS news (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL DEFAULT '',
  date TEXT DEFAULT '',
  summary TEXT DEFAULT '',
  content TEXT DEFAULT '',
  image TEXT DEFAULT '',
  category TEXT DEFAULT 'Company',
  status TEXT DEFAULT 'published',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE news ENABLE ROW LEVEL SECURITY;

CREATE POLICY "news_public_select" ON news
  FOR SELECT USING (true);

CREATE POLICY "news_admin_all" ON news
  FOR ALL USING (auth.jwt() ->> 'role' = 'admin');

-- 6. comparisons 表
CREATE TABLE IF NOT EXISTS comparisons (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL DEFAULT '',
  feature TEXT DEFAULT '',
  composite TEXT DEFAULT '',
  cast_iron TEXT DEFAULT '',
  description TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE comparisons ENABLE ROW LEVEL SECURITY;

CREATE POLICY "comparisons_public_select" ON comparisons
  FOR SELECT USING (true);

CREATE POLICY "comparisons_admin_all" ON comparisons
  FOR ALL USING (auth.jwt() ->> 'role' = 'admin');

-- 7. admin_users 表
CREATE TABLE IF NOT EXISTS admin_users (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT DEFAULT 'admin',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- admin_users 只允许通过 RPC 函数访问（不直接暴露给客户端）
CREATE POLICY "admin_users_no_direct_access" ON admin_users
  FOR ALL USING (false);

-- 8. 创建验证密码的 RPC 函数
CREATE OR REPLACE FUNCTION verify_admin_password(p_username TEXT, p_password TEXT)
RETURNS TABLE(success BOOLEAN, token TEXT, username TEXT, role TEXT)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_user admin_users%ROWTYPE;
  v_token TEXT;
BEGIN
  SELECT * INTO v_user FROM admin_users WHERE username = p_username LIMIT 1;

  IF v_user.id IS NULL THEN
    RETURN QUERY SELECT false, ''::TEXT, ''::TEXT, ''::TEXT;
    RETURN;
  END IF;

  -- 直接比较密码（生产环境应使用 bcrypt）
  IF v_user.password_hash = p_password THEN
    -- 生成简单 JWT（生产环境应使用 pgcrypto 或 Supabase Auth）
    v_token := encode(hmac(
      json_build_object(
        'role', v_user.role,
        'username', v_user.username,
        'exp', extract(epoch from now() + interval '24 hours')
      )::text,
      'aconcn-secret-key',
      'sha256'
    ), 'hex');

    RETURN QUERY SELECT true, v_token, v_user.username, v_user.role;
  ELSE
    RETURN QUERY SELECT false, ''::TEXT, ''::TEXT, ''::TEXT;
  END IF;
END;
$$;

-- 9. 插入默认管理员（密码: admin123）
INSERT INTO admin_users (username, password_hash, role)
VALUES ('admin', 'admin123', 'admin')
ON CONFLICT (username) DO NOTHING;

-- 10. contact_submissions 表（联系表单提交）
CREATE TABLE IF NOT EXISTS contact_submissions (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL DEFAULT '',
  email TEXT NOT NULL DEFAULT '',
  phone TEXT DEFAULT '',
  company TEXT DEFAULT '',
  product TEXT DEFAULT '',
  message TEXT NOT NULL DEFAULT '',
  status TEXT DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- 匿名用户只能 INSERT（提交表单）
CREATE POLICY "contact_submissions_public_insert" ON contact_submissions
  FOR INSERT WITH CHECK (true);

-- 已登录管理员可以查看和管理
CREATE POLICY "contact_submissions_admin_select" ON contact_submissions
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "contact_submissions_admin_update" ON contact_submissions
  FOR UPDATE TO authenticated USING (true);

CREATE POLICY "contact_submissions_admin_delete" ON contact_submissions
  FOR DELETE TO authenticated USING (true);

-- ============================================================
-- 修改：删除旧 JWT 认证，改用 Supabase Auth
-- 所有 RLS 策略从 auth.jwt() ->> 'role' = 'admin' 改为 TO authenticated
-- ============================================================

-- 删除旧的 admin_users 表和验证函数
DROP FUNCTION IF EXISTS verify_admin_password(TEXT, TEXT);
DROP TABLE IF EXISTS admin_users;

-- 更新所有 RLS 策略，使用 Supabase Auth 的 authenticated 角色
-- products 表写权限
DROP POLICY IF EXISTS "products_admin_insert" ON products;
DROP POLICY IF EXISTS "products_admin_update" ON products;
DROP POLICY IF EXISTS "products_admin_delete" ON products;

CREATE POLICY "products_admin_insert" ON products
  FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "products_admin_update" ON products
  FOR UPDATE TO authenticated USING (true);

CREATE POLICY "products_admin_delete" ON products
  FOR DELETE TO authenticated USING (true);

-- certifications 表写权限
DROP POLICY IF EXISTS "certs_admin_all" ON certifications;
CREATE POLICY "certs_admin_all" ON certifications
  FOR ALL TO authenticated USING (true);

-- news 表写权限
DROP POLICY IF EXISTS "news_admin_all" ON news;
CREATE POLICY "news_admin_all" ON news
  FOR ALL TO authenticated USING (true);

-- comparisons 表写权限
DROP POLICY IF EXISTS "comparisons_admin_all" ON comparisons;
CREATE POLICY "comparisons_admin_all" ON comparisons
  FOR ALL TO authenticated USING (true);

-- orders 表写权限
DROP POLICY IF EXISTS "orders_admin_all" ON orders;
CREATE POLICY "orders_admin_all" ON orders
  FOR ALL TO authenticated USING (true);

-- customers 表写权限
DROP POLICY IF EXISTS "customers_admin_all" ON customers;
CREATE POLICY "customers_admin_all" ON customers
  FOR ALL TO authenticated USING (true);