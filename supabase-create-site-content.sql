-- ============================================================
-- ACONCN v2 — 网站内容表（主页"我的故事"后台管理）
-- 在 Supabase SQL Editor 中执行一次即可
-- ============================================================

CREATE TABLE IF NOT EXISTS public.site_content (
  id integer PRIMARY KEY DEFAULT 1,
  about_image text,
  about_badge_en text, about_badge_zh text,
  about_label_en text, about_label_zh text,
  about_title_en text, about_title_zh text,
  about_text_en text, about_text_zh text,
  about_stat1_num text, about_stat1_label_en text, about_stat1_label_zh text,
  about_stat2_num text, about_stat2_label_en text, about_stat2_label_zh text,
  about_stat3_num text, about_stat3_label_en text, about_stat3_label_zh text,
  updated_at timestamptz DEFAULT now()
);

-- 开启行级安全
ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;

-- 公开可读（前端页面匿名读取）
DROP POLICY IF EXISTS "site_content_public_read" ON public.site_content;
CREATE POLICY "site_content_public_read" ON public.site_content
  FOR SELECT USING (true);

-- 登录后台可增删改（authenticated 角色）
DROP POLICY IF EXISTS "site_content_admin_all" ON public.site_content;
CREATE POLICY "site_content_admin_all" ON public.site_content
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- 初始数据（当前硬编码内容作为默认值）
INSERT INTO public.site_content (
  id, about_image,
  about_badge_en, about_badge_zh,
  about_label_en, about_label_zh,
  about_title_en, about_title_zh,
  about_text_en, about_text_zh,
  about_stat1_num, about_stat1_label_en, about_stat1_label_zh,
  about_stat2_num, about_stat2_label_en, about_stat2_label_zh,
  about_stat3_num, about_stat3_label_en, about_stat3_label_zh
) VALUES (
  1,
  'assets/images/about-repair-cover.jpeg',
  'Our Story', '我们的故事',
  'Designed for the Main Road', '為重載而生',
  'Too Often Installed Where<br>There Is <span class="text-accent">No Traffic</span>',
  '被裝在沒有車流的地方<br>實在<span class="text-accent">太可惜了</span>',
  'ACONCN phenolic composite manhole covers are engineered for heavy-load traffic environments — E600 (60T) main roads, F900 (90T) ports and airfields. With 25 years of proven performance in Yichang''s municipal road network and a failure rate below 0.05%, our covers deliver where it matters most.',
  'ACONCN 酚醛複合材料人孔蓋，專為重載交通環境設計 — E600 (60T) 主幹道、F900 (90T) 港口及機場。在宜昌市政道路網絡中歷經 25 年驗證，故障率低於 0.05%，我們的井蓋在真正需要的地方發揮價值。',
  '25+', 'Years in Service', '年道路服役',
  '25K+', 'Installed', '已安裝',
  '<0.05%', 'Failure Rate', '故障率'
)
ON CONFLICT (id) DO NOTHING;
