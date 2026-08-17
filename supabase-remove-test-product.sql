-- ============================================================
-- ACONCN — 删除 TEST 测试产品
-- 在 Supabase SQL Editor 中执行
-- ============================================================

-- 删除 TEST-UPLOAD-D400 测试产品
DELETE FROM products WHERE name LIKE '%TEST%';

-- 验证
SELECT COUNT(*) AS total_products FROM products;
SELECT id, name, image FROM products ORDER BY id;