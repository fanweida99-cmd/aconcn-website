-- ============================================================
-- 修复: customers 表缺失
-- 症状: admin 后台添加客户显示"成功"但实际没入库
-- 根因: POST /customers 返回 404 PGRST205 "Could not find the table 'public.customers' in the schema cache"
-- 做法: Supabase Dashboard -> SQL Editor 跑这段
-- 直达: https://supabase.com/dashboard/project/nutgspxepoguoxdicjqh/sql
-- ============================================================

CREATE TABLE IF NOT EXISTS public.customers (
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

ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;

-- 用 authenticated 策略 (只要已登录就能读写), 避开 JWT 里 role 字段缺失导致的 401/403 坑
DROP POLICY IF EXISTS "customers_admin_all" ON public.customers;
DROP POLICY IF EXISTS "customers_authenticated_all" ON public.customers;
CREATE POLICY "customers_authenticated_all" ON public.customers
  FOR ALL TO authenticated
  USING (true)
  WITH CHECK (true);

-- 跑完后回到 admin -> 客户管理 -> 添加客户, 即可真正入库