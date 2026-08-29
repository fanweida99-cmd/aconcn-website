-- ACONCN: persist featured products and restrict write access to the site admin.
-- Run this once in the Supabase SQL Editor while signed in as the project owner.

ALTER TABLE products
  ADD COLUMN IF NOT EXISTS featured BOOLEAN NOT NULL DEFAULT false;

CREATE INDEX IF NOT EXISTS products_featured_active_idx
  ON products (featured, status)
  WHERE featured = true;

-- Preserve the current homepage behaviour after migration.
UPDATE products
SET featured = true
WHERE id IN (1, 2, 3, 4)
  AND featured = false
  AND NOT EXISTS (SELECT 1 FROM products WHERE featured = true);

CREATE OR REPLACE FUNCTION public.is_aconcn_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT COALESCE(auth.jwt() ->> 'email', '') = 'admin@aconcn.com';
$$;

REVOKE ALL ON FUNCTION public.is_aconcn_admin() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.is_aconcn_admin() TO authenticated;

-- The public site remains readable. Only the named admin may change content.
DROP POLICY IF EXISTS "products_admin_insert" ON products;
DROP POLICY IF EXISTS "products_admin_update" ON products;
DROP POLICY IF EXISTS "products_admin_delete" ON products;
CREATE POLICY "products_admin_insert" ON products
  FOR INSERT TO authenticated WITH CHECK (public.is_aconcn_admin());
CREATE POLICY "products_admin_update" ON products
  FOR UPDATE TO authenticated
  USING (public.is_aconcn_admin()) WITH CHECK (public.is_aconcn_admin());
CREATE POLICY "products_admin_delete" ON products
  FOR DELETE TO authenticated USING (public.is_aconcn_admin());

DROP POLICY IF EXISTS "certs_admin_all" ON certifications;
CREATE POLICY "certs_admin_all" ON certifications
  FOR ALL TO authenticated
  USING (public.is_aconcn_admin()) WITH CHECK (public.is_aconcn_admin());

DROP POLICY IF EXISTS "news_admin_all" ON news;
CREATE POLICY "news_admin_all" ON news
  FOR ALL TO authenticated
  USING (public.is_aconcn_admin()) WITH CHECK (public.is_aconcn_admin());

DROP POLICY IF EXISTS "comparisons_admin_all" ON comparisons;
CREATE POLICY "comparisons_admin_all" ON comparisons
  FOR ALL TO authenticated
  USING (public.is_aconcn_admin()) WITH CHECK (public.is_aconcn_admin());

DROP POLICY IF EXISTS "orders_admin_all" ON orders;
CREATE POLICY "orders_admin_all" ON orders
  FOR ALL TO authenticated
  USING (public.is_aconcn_admin()) WITH CHECK (public.is_aconcn_admin());

DROP POLICY IF EXISTS "customers_admin_all" ON customers;
CREATE POLICY "customers_admin_all" ON customers
  FOR ALL TO authenticated
  USING (public.is_aconcn_admin()) WITH CHECK (public.is_aconcn_admin());

DROP POLICY IF EXISTS "contact_submissions_admin_select" ON contact_submissions;
DROP POLICY IF EXISTS "contact_submissions_admin_update" ON contact_submissions;
DROP POLICY IF EXISTS "contact_submissions_admin_delete" ON contact_submissions;
CREATE POLICY "contact_submissions_admin_select" ON contact_submissions
  FOR SELECT TO authenticated USING (public.is_aconcn_admin());
CREATE POLICY "contact_submissions_admin_update" ON contact_submissions
  FOR UPDATE TO authenticated
  USING (public.is_aconcn_admin()) WITH CHECK (public.is_aconcn_admin());
CREATE POLICY "contact_submissions_admin_delete" ON contact_submissions
  FOR DELETE TO authenticated USING (public.is_aconcn_admin());
