-- ============================================================
-- ACONCN v2 — Supabase Image Path Fix Migration
-- Fixes .jpg → .svg image path mismatch in all tables
-- Run this in Supabase SQL Editor:
-- https://supabase.com/dashboard/project/nutgspxepoguoxdicjqh
-- ============================================================

-- 1. Fix products table image paths
UPDATE products 
SET image = REPLACE(image, '.jpg', '.svg') 
WHERE image LIKE '%.jpg';

UPDATE products 
SET image = REPLACE(image, '.jpeg', '.svg') 
WHERE image LIKE '%.jpeg';

UPDATE products 
SET image = REPLACE(image, '.png', '.svg') 
WHERE image LIKE '%.png';

-- 2. Fix certifications table image paths
UPDATE certifications 
SET image = REPLACE(image, '.jpg', '.svg') 
WHERE image LIKE '%.jpg';

UPDATE certifications 
SET image = REPLACE(image, '.jpeg', '.svg') 
WHERE image LIKE '%.jpeg';

UPDATE certifications 
SET image = REPLACE(image, '.png', '.svg') 
WHERE image LIKE '%.png';

-- 3. Fix news table image paths
UPDATE news 
SET image = REPLACE(image, '.jpg', '.svg') 
WHERE image LIKE '%.jpg';

UPDATE news 
SET image = REPLACE(image, '.jpeg', '.svg') 
WHERE image LIKE '%.jpeg';

UPDATE news 
SET image = REPLACE(image, '.png', '.svg') 
WHERE image LIKE '%.png';

-- 4. Verify the changes
SELECT 'products' AS table_name, COUNT(*) AS fixed_count
FROM products 
WHERE image LIKE '%.svg';

SELECT 'certifications' AS table_name, COUNT(*) AS fixed_count
FROM certifications 
WHERE image LIKE '%.svg';

SELECT 'news' AS table_name, COUNT(*) AS fixed_count
FROM news 
WHERE image LIKE '%.svg';