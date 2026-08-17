-- ============================================================
-- ACONCN — 删除 TEST 测试产品 + 移除重复产品
-- 在 Supabase SQL Editor 中执行
-- ============================================================

-- 删除 TEST-UPLOAD-D400 测试产品
DELETE FROM products WHERE name LIKE '%TEST%' OR name LIKE '%test%';

-- 删除重复的默认产品（保留 GIF 真实产品，删除旧的 SVG 占位产品）
-- 注意：如果 products 表同时有 Supabase 导入的 GIF 产品和默认 SVG 产品，
-- 删除那些使用 assets/images/products/*.svg 路径的旧占位产品
DELETE FROM products WHERE image LIKE 'assets/images/products/%.svg' AND id NOT IN (
  SELECT id FROM products WHERE image LIKE 'assets/images/products/manhole-covers/%'
);

-- 验证
SELECT COUNT(*) AS total_products FROM products;
SELECT id, name, image FROM products ORDER BY id;