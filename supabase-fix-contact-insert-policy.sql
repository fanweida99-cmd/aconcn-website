-- ============================================================
-- 修复：contact_submissions 匿名 INSERT 策略
-- 问题：联系表单提交返回 401
--       "new row violates row-level security policy for table contact_submissions"
-- 原因：security migration 只定义了 SELECT/UPDATE/DELETE（admin 后台用），
--       缺少公开的匿名 INSERT 策略，导致前台联系表单无法提交。
-- 执行：Supabase Dashboard -> SQL Editor 粘贴执行（幂等）
-- 地址：https://supabase.com/dashboard/project/nutgspxepoguoxdicjqh/sql
-- ============================================================

DROP POLICY IF EXISTS "contact_submissions_anon_insert" ON public.contact_submissions;

CREATE POLICY "contact_submissions_anon_insert" ON public.contact_submissions
  FOR INSERT TO anon
  WITH CHECK (true);
