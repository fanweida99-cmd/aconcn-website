-- ============================================================
-- 修复：后台图片上传（创建 images Storage bucket + 权限）
-- 问题：admin 后台无法添加图片 —— 因为 images bucket 根本不存在
-- 执行：Supabase Dashboard -> SQL Editor（幂等）
-- ============================================================

-- 1. 创建 images bucket（public = 公开可读，前端 <img> 才能直接访问）
INSERT INTO storage.buckets (id, name, public)
VALUES ('images', 'images', true)
ON CONFLICT (id) DO NOTHING;

-- 2. 允许 authenticated（admin 后台）上传图片
DROP POLICY IF EXISTS "images_admin_upload" ON storage.objects;
CREATE POLICY "images_admin_upload" ON storage.objects
  FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'images');

-- 3. 允许 authenticated 更新 / 删除（admin 后台管理图片）
DROP POLICY IF EXISTS "images_admin_update" ON storage.objects;
CREATE POLICY "images_admin_update" ON storage.objects
  FOR UPDATE TO authenticated
  USING (bucket_id = 'images');

DROP POLICY IF EXISTS "images_admin_delete" ON storage.objects;
CREATE POLICY "images_admin_delete" ON storage.objects
  FOR DELETE TO authenticated
  USING (bucket_id = 'images');

-- 4. 公开读取（public bucket 自动公开，显式加更保险）
DROP POLICY IF EXISTS "images_public_read" ON storage.objects;
CREATE POLICY "images_public_read" ON storage.objects
  FOR SELECT TO anon
  USING (bucket_id = 'images');
