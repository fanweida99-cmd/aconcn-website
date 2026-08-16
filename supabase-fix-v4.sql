-- ============================================================
-- ACONCN v4 — Supabase 全量修复脚本
-- 请在 Supabase SQL Editor 中逐段执行
-- ============================================================

-- ============================================================
-- 第1步：刷新 Schema Cache（强制重新加载表结构）
-- ============================================================
NOTIFY pgrst, 'reload schema';

-- 等几秒后执行后续语句

-- ============================================================
-- 第2步：创建 Storage Bucket（存储上传图片）
-- ============================================================
-- 在 Supabase Dashboard > Storage 中手动创建名为 'images' 的 bucket
-- 或执行以下 SQL：
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('images', 'images', true, 10485760, ARRAY['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'])
ON CONFLICT (id) DO UPDATE SET public = true;

-- ============================================================
-- 第3步：Storage RLS 策略 — 允许认证用户上传
-- ============================================================
-- 允许查看（公开读取）
DROP POLICY IF EXISTS "Public Read" ON storage.objects;
CREATE POLICY "Public Read" ON storage.objects
    FOR SELECT USING (bucket_id = 'images');

-- 允许认证用户上传
DROP POLICY IF EXISTS "Auth Insert" ON storage.objects;
CREATE POLICY "Auth Insert" ON storage.objects
    FOR INSERT WITH CHECK (bucket_id = 'images' AND auth.role() = 'authenticated');

-- 允许认证用户更新/删除自己的文件
DROP POLICY IF EXISTS "Auth Update" ON storage.objects;
CREATE POLICY "Auth Update" ON storage.objects
    FOR UPDATE USING (bucket_id = 'images' AND auth.role() = 'authenticated');

DROP POLICY IF EXISTS "Auth Delete" ON storage.objects;
CREATE POLICY "Auth Delete" ON storage.objects
    FOR DELETE USING (bucket_id = 'images' AND auth.role() = 'authenticated');

-- ============================================================
-- 第4步：修复 products 表 — 存量 .jpg 路径 → .svg
-- ============================================================
-- 只修复 assets/images/ 下的本地项目图片（存量数据），
-- 不修复 /assets/uploads/ 或 http 开头的上传图片
UPDATE products 
SET image = REPLACE(image, '.jpg', '.svg') 
WHERE image LIKE 'assets/images/%.jpg';

UPDATE products 
SET image = REPLACE(image, '.jpeg', '.svg') 
WHERE image LIKE 'assets/images/%.jpeg';

UPDATE products 
SET image = REPLACE(image, '.png', '.svg') 
WHERE image LIKE 'assets/images/%.png';

-- ============================================================
-- 第5步：修复 certifications 表
-- ============================================================
UPDATE certifications 
SET image = REPLACE(image, '.jpg', '.svg') 
WHERE image LIKE 'assets/images/%.jpg';

UPDATE certifications 
SET image = REPLACE(image, '.jpeg', '.svg') 
WHERE image LIKE 'assets/images/%.jpeg';

UPDATE certifications 
SET image = REPLACE(image, '.png', '.svg') 
WHERE image LIKE 'assets/images/%.png';

-- ============================================================
-- 第6步：修复 news 表
-- ============================================================
UPDATE news 
SET image = REPLACE(image, '.jpg', '.svg') 
WHERE image LIKE 'assets/images/%.jpg';

UPDATE news 
SET image = REPLACE(image, '.jpeg', '.svg') 
WHERE image LIKE 'assets/images/%.jpeg';

UPDATE news 
SET image = REPLACE(image, '.png', '.svg') 
WHERE image LIKE 'assets/images/%.png';

-- ============================================================
-- 第7步：验证修复结果
-- ============================================================
-- 检查是否还有 .jpg/.jpeg/.png 路径（应该在 assets/images/ 下）
SELECT 'products' AS table_name, COUNT(*) AS remaining_jpg_count
FROM products 
WHERE image LIKE 'assets/images/%.jpg' 
   OR image LIKE 'assets/images/%.jpeg' 
   OR image LIKE 'assets/images/%.png';

SELECT 'certifications' AS table_name, COUNT(*) AS remaining_jpg_count
FROM certifications 
WHERE image LIKE 'assets/images/%.jpg' 
   OR image LIKE 'assets/images/%.jpeg' 
   OR image LIKE 'assets/images/%.png';

SELECT 'news' AS table_name, COUNT(*) AS remaining_jpg_count
FROM news 
WHERE image LIKE 'assets/images/%.jpg' 
   OR image LIKE 'assets/images/%.jpeg' 
   OR image LIKE 'assets/images/%.png';

-- 检查所有表 image 字段的 NULL 和空值
SELECT 'products' AS tbl, COUNT(*) AS null_or_empty FROM products WHERE image IS NULL OR image = '';
SELECT 'certifications' AS tbl, COUNT(*) AS null_or_empty FROM certifications WHERE image IS NULL OR image = '';
SELECT 'news' AS tbl, COUNT(*) AS null_or_empty FROM news WHERE image IS NULL OR image = '';

-- ============================================================
-- 第8步：查看所有表 image 字段当前值（抽样）
-- ============================================================
SELECT 'products' AS source, id, name, image FROM products ORDER BY id LIMIT 10;
SELECT 'certifications' AS source, id, name, image FROM certifications ORDER BY id LIMIT 10;
SELECT 'news' AS source, id, title AS name, image FROM news ORDER BY id LIMIT 10;