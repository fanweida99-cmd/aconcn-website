-- ============================================================
-- ACONCN — 真实产品数据导入（从备份恢复）
-- 在 Supabase SQL Editor 中执行
-- ============================================================

-- 先删除旧的占位产品（保留 id 1-5 的默认产品，或全部删除重新导入）
-- DELETE FROM products WHERE id > 5;

INSERT INTO products (name, category, load_class, price, stock, description, image, status) VALUES
('AA-44 复合井盖', '井盖', 'D400', 38.00, 200, 'EN 124 标准复合井盖，适用于道路和人行道', 'assets/images/products/manhole-covers/AA-44.gif', 'active'),
('AA-77 复合井盖', '井盖', 'D400', 42.00, 150, 'EN 124 标准复合井盖，高强度复合材料', 'assets/images/products/manhole-covers/AA-77.gif', 'active'),
('AA-165 复合井盖', '井盖', 'D400', 45.00, 180, 'EN 124 标准复合井盖，适用于市政工程', 'assets/images/products/manhole-covers/AA-165.gif', 'active'),
('AA-350 复合井盖', '井盖', 'D400', 36.00, 220, 'EN 124 标准复合井盖', 'assets/images/products/manhole-covers/aa-350副本.gif', 'active'),
('AA-1314 黑色复合井盖', '井盖', 'D400', 40.00, 160, 'EN 124 标准黑色复合井盖', 'assets/images/products/manhole-covers/AA-1314黑.gif', 'active'),
('AA-178 地政署井盖', '井盖', 'D400', 55.00, 90, 'EN 124 地政署认证复合井盖', 'assets/images/products/manhole-covers/AA-178地政署.gif', 'active'),
('AA-380 燃气井盖', '井盖', 'D400', 50.00, 100, 'EN 124 燃气专用复合井盖', 'assets/images/products/manhole-covers/AA-380燃气.gif', 'active'),
('AR-500 重型井盖', '井盖', 'E600', 65.00, 100, 'EN 124 E600 重型复合井盖，适用于主干道', 'assets/images/products/manhole-covers/AR500.gif', 'active'),
('AR-700H 加重井盖', '井盖', 'E600', 78.00, 80, 'EN 124 E600 加重型复合井盖，高流量区域专用', 'assets/images/products/manhole-covers/AR-700H给加重.gif', 'active'),
('AW-20B 复合井盖', '井盖', 'D400', 32.00, 300, 'EN 124 B125 轻型复合井盖', 'assets/images/products/manhole-covers/AW-20B.gif', 'active'),
('AW-450H 复合井盖', '井盖', 'D400', 35.00, 250, 'EN 124 D400 标准复合井盖', 'assets/images/products/manhole-covers/AW-450H.gif', 'active'),
('AW-500 复合井盖', '井盖', 'D400', 38.00, 200, 'EN 124 D400 复合井盖', 'assets/images/products/manhole-covers/AW500副本.gif', 'active'),
('AW-533 复合井盖', '井盖', 'D400', 42.00, 170, 'EN 124 D400 复合井盖', 'assets/images/products/manhole-covers/AW-533副本.gif', 'active'),
('AW-614 复合井盖', '井盖', 'D400', 44.00, 150, 'EN 124 D400 复合井盖', 'assets/images/products/manhole-covers/AW614副本.gif', 'active'),
('AW-625F 方形井盖', '井盖', 'D400', 48.00, 120, 'EN 124 方形复合井盖，适用于检查井', 'assets/images/products/manhole-covers/AW-625F.gif', 'active'),
('AW-627 复合井盖', '井盖', 'D400', 40.00, 180, 'EN 124 D400 复合井盖', 'assets/images/products/manhole-covers/AW-627.gif', 'active'),
('AW-630 复合井盖', '井盖', 'D400', 45.00, 150, 'EN 124 D400 复合井盖', 'assets/images/products/manhole-covers/AW-630.gif', 'active'),
('AW-630R 圆形井盖', '井盖', 'D400', 46.00, 140, 'EN 124 圆形复合井盖', 'assets/images/products/manhole-covers/AW-630R.gif', 'active'),
('AW-633F 方形井盖', '井盖', 'D400', 49.00, 110, 'EN 124 方形复合井盖', 'assets/images/products/manhole-covers/AW-633F.gif', 'active'),
('AW-635L 复合井盖', '井盖', 'D400', 43.00, 160, 'EN 124 D400 复合井盖', 'assets/images/products/manhole-covers/AW-635L.gif', 'active'),
('AW-640 复合井盖', '井盖', 'D400', 47.00, 130, 'EN 124 D400 复合井盖', 'assets/images/products/manhole-covers/AW-640.gif', 'active'),
('AW-644F 方形井盖', '井盖', 'D400', 50.00, 100, 'EN 124 方形复合井盖', 'assets/images/products/manhole-covers/AW-644F.gif', 'active'),
('AW-645L 复合井盖', '井盖', 'D400', 44.00, 140, 'EN 124 D400 复合井盖', 'assets/images/products/manhole-covers/AW-645L.gif', 'active'),
('AW-655 复合井盖', '井盖', 'D400', 46.00, 120, 'EN 124 D400 复合井盖', 'assets/images/products/manhole-covers/AW655副本.gif', 'active'),
('AW-740 大型井盖', '井盖', 'D400', 55.00, 90, 'EN 124 大型复合井盖，适用于大口径井口', 'assets/images/products/manhole-covers/AW-740.gif', 'active'),
('AW-8380 重型井盖', '井盖', 'E600', 72.00, 60, 'EN 124 E600 重型复合井盖', 'assets/images/products/manhole-covers/AW8380.gif', 'active'),
('AW-8525 复合井盖', '井盖', 'D400', 52.00, 80, 'EN 124 D400 复合井盖', 'assets/images/products/manhole-covers/AW-8525副本.gif', 'active'),
('AW-325F 方形井盖', '井盖', 'D400', 41.00, 150, 'EN 124 方形复合井盖', 'assets/images/products/manhole-covers/AW325F副本.gif', 'active'),
('AW-637R 圆形井盖', '井盖', 'D400', 48.00, 110, 'EN 124 圆形复合井盖', 'assets/images/products/manhole-covers/AW637R副本.gif', 'active'),
('102AR-700H 加重井盖', '井盖', 'E600', 80.00, 70, 'EN 124 E600 加重型复合井盖', 'assets/images/products/manhole-covers/102AR-700H.gif', 'active');

-- 验证
SELECT COUNT(*) AS total_products FROM products;