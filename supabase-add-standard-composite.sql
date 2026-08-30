-- ============================================================
-- 对比分析栏升级：增加「普通复合井盖」第三对比项
-- 1. comparisons 表加 standard_composite 列
-- 2. 为现有对比项填充普通复合井盖数据
-- 3. 清理测试脏数据（中文测试残留）
-- 执行：Supabase Dashboard -> SQL Editor（幂等）
-- 地址：https://supabase.com/dashboard/project/nutgspxepoguoxdicjqh/sql
-- ============================================================

-- 1. 加列（已存在则跳过）
ALTER TABLE public.comparisons
  ADD COLUMN IF NOT EXISTS standard_composite TEXT DEFAULT '';

-- 2. 填充「普通复合井盖」对比数据（按 feature 精确匹配）
UPDATE public.comparisons
  SET standard_composite = 'Lighter than iron — ~55 kg for D400'
  WHERE feature = 'Weight';

UPDATE public.comparisons
  SET standard_composite = 'Moderate — resists rust but degrades under UV/chemicals'
  WHERE feature = 'Corrosion Resistance';

UPDATE public.comparisons
  SET standard_composite = 'Low scrap value, but low-grade covers can be vandalized'
  WHERE feature = 'Anti-Theft';

UPDATE public.comparisons
  SET standard_composite = '15–20 years, quality varies by manufacturer'
  WHERE feature = 'Lifespan';

UPDATE public.comparisons
  SET standard_composite = '2-person crew, but heavier and less ergonomic'
  WHERE feature = 'Installation';

UPDATE public.comparisons
  SET standard_composite = 'Moderate TCO — occasional replacement needed'
  WHERE feature = 'Cost Over Lifetime';

-- 3. 清理测试脏数据（中文测试残留）
DELETE FROM public.comparisons WHERE feature = '超强承重';
