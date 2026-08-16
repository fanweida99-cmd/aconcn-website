-- ============================================================
-- ACONCN v4 — 全量建表 + 数据初始化
-- 数据库暂停恢复后表被清空，需重建所有业务表
-- ============================================================

-- ============================================================
-- 第1步：创建 products 表
-- ============================================================
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    load_class VARCHAR(20),
    price DECIMAL(10,2) DEFAULT 0,
    stock INTEGER DEFAULT 0,
    description TEXT,
    image TEXT,
    status VARCHAR(20) DEFAULT 'active',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- 第2步：创建 certifications 表
-- ============================================================
CREATE TABLE IF NOT EXISTS certifications (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image TEXT,
    description TEXT,
    status VARCHAR(20) DEFAULT 'active',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- 第3步：创建 news 表
-- ============================================================
CREATE TABLE IF NOT EXISTS news (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    image TEXT,
    content TEXT,
    summary TEXT,
    category VARCHAR(50),
    status VARCHAR(20) DEFAULT 'published',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- 第4步：创建 comparisons 表
-- ============================================================
CREATE TABLE IF NOT EXISTS comparisons (
    id SERIAL PRIMARY KEY,
    feature VARCHAR(255) NOT NULL,
    composite TEXT,
    cast_iron TEXT
);

-- ============================================================
-- 第5步：插入 products 默认数据
-- ============================================================
INSERT INTO products (name, category, load_class, price, stock, description, image, status) VALUES
('D400 Composite Manhole Cover', 'Manhole Covers', 'D400', 45.00, 500, 'EN 124 D400 rated composite manhole cover suitable for roadways and pedestrian areas. 70% lighter than cast iron with superior durability.', 'assets/images/products/d400.svg', 'active'),
('E600 Heavy-Duty Cover', 'Manhole Covers', 'E600', 68.00, 300, 'EN 124 E600 rated heavy-duty composite cover for main roads and highways. Maximum load capacity with minimal weight.', 'assets/images/products/e600.svg', 'active'),
('F900 Airport-Grade Cover', 'Manhole Covers', 'F900', 120.00, 150, 'EN 124 F900 rated composite cover for airports, ports, and heavy industrial zones. The highest load class available.', 'assets/images/products/f900.svg', 'active'),
('B125 Light-Duty Cover', 'Manhole Covers', 'B125', 28.00, 800, 'EN 124 B125 rated composite cover for pedestrian areas, sidewalks, and light traffic zones.', 'assets/images/products/b125.svg', 'active'),
('C250 Medium-Duty Cover', 'Manhole Covers', 'C250', 35.00, 600, 'EN 124 C250 rated composite cover for parking areas, residential streets, and commercial zones.', 'assets/images/products/c250.svg', 'active');

-- ============================================================
-- 第6步：插入 certifications 默认数据
-- ============================================================
INSERT INTO certifications (name, image, description, status) VALUES
('EN 124 Certification', 'assets/images/certs/en124.svg', 'European Standard EN 124 certification for gully tops and manhole tops for vehicular and pedestrian areas. Covers load classes A15 through F900.', 'active'),
('ISO 9001:2015', 'assets/images/certs/iso9001.svg', 'ISO 9001:2015 Quality Management System certification. ACONCN maintains rigorous quality control throughout the manufacturing process.', 'active'),
('SGS Test Report', 'assets/images/certs/sgs.svg', 'Third-party SGS testing and verification reports for load bearing capacity, material composition, and durability testing.', 'active');

-- ============================================================
-- 第7步：插入 news 默认数据
-- ============================================================
INSERT INTO news (title, image, summary, category, status) VALUES
('ACONCN Factory Expansion Completed', 'assets/images/news/expansion.svg', 'Our new 5000㎡ production facility is now fully operational, increasing annual capacity to 200,000 units.', 'Company', 'published'),
('Composite vs Cast Iron: The Complete Guide', 'assets/images/news/composite-vs-cast.svg', 'A comprehensive comparison of composite and cast iron manhole covers across weight, durability, safety, and cost.', 'Industry', 'published'),
('F900 Series Launch — Airport-Grade Covers', 'assets/images/news/f900-launch.svg', 'ACONCN launches its latest F900 rated composite manhole cover, designed for the most demanding infrastructure applications including airports and ports.', 'Product', 'published');

-- ============================================================
-- 第8步：插入 comparisons 默认数据
-- ============================================================
INSERT INTO comparisons (feature, composite, cast_iron) VALUES
('Weight', '70% lighter — ~35 kg for D400', 'Heavy — ~120 kg for D400'),
('Corrosion Resistance', 'Excellent — zero corrosion, impervious to chemicals', 'Poor — rusts over time, requires coating'),
('Anti-Theft', 'No scrap value — theft-proof by design', 'High scrap value — frequent theft target'),
('Lifespan', '30+ years with minimal maintenance', '10–15 years before corrosion damage'),
('Installation', '2-person crew, no heavy machinery needed', 'Requires crane or lifting equipment'),
('Cost Over Lifetime', 'Lower TCO — no replacement, no maintenance', 'Higher TCO — frequent replacement needed');

-- ============================================================
-- 第9步：刷新 Schema Cache
-- ============================================================
NOTIFY pgrst, 'reload schema';

-- ============================================================
-- 第10步：验证
-- ============================================================
SELECT 'products' AS tbl, COUNT(*) FROM products
UNION ALL
SELECT 'certifications', COUNT(*) FROM certifications
UNION ALL
SELECT 'news', COUNT(*) FROM news
UNION ALL
SELECT 'comparisons', COUNT(*) FROM comparisons;