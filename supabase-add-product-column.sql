-- ============================================================
-- ACONCN v2 — 联系表单 product 字段迁移
-- 用途：contact_submissions 表新增 product 列，用于记录客户感兴趣的产品
-- 执行方式：Supabase Dashboard -> SQL Editor 粘贴执行（幂等，可重复执行）
-- 地址：https://supabase.com/dashboard/project/nutgspxepoguoxdicjqh/sql
-- ============================================================

ALTER TABLE public.contact_submissions ADD COLUMN IF NOT EXISTS product TEXT;
