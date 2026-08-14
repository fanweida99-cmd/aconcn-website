/**
 * ACONCN v2 — 产品数据导入脚本
 * 从旧版 admin.js 的 DEFAULT_DATA 导入产品到 Supabase
 *
 * 使用方法：
 * 1. 先在 Supabase SQL Editor 中执行 supabase-schema.sql 建表
 * 2. 运行: node scripts/import-products.js
 */
const SUPABASE_URL = 'https://nutgspxepoguoxdicjqh.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_nJOFhl2P0vu_UlVchzDhMQ__dk7nJgM';

// 从旧版 admin.js 提取的 79 个产品数据
const PRODUCTS = [
  // ── Manhole Covers ──
  { name: 'D400 Road Manhole Cover', category: 'Manhole Covers', load_class: 'D400', price: 150, stock: 500, status: 'active', image: '', description: 'EN 124 D400 certified composite manhole cover for road applications.' },
  { name: 'E600 Heavy Duty Cover', category: 'Manhole Covers', load_class: 'E600', price: 250, stock: 300, status: 'active', image: '', description: 'Heavy-duty E600 cover for industrial areas and ports.' },
  { name: 'F900 Airport Cover', category: 'Manhole Covers', load_class: 'F900', price: 450, stock: 150, status: 'active', image: '', description: 'Maximum load F900 cover for airports and heavy-load zones.' },
  { name: 'B125 Pedestrian Cover', category: 'Manhole Covers', load_class: 'B125', price: 80, stock: 800, status: 'active', image: '', description: 'B125 cover for pedestrian areas and parks.' },
  { name: 'C250 Light Traffic', category: 'Manhole Covers', load_class: 'C250', price: 120, stock: 600, status: 'active', image: '', description: 'C250 cover for sidewalks and light traffic areas.' },
  { name: '102AR-700H', category: 'Manhole Covers', load_class: 'D400', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AA-1314黑', category: 'Manhole Covers', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AA-165', category: 'Manhole Covers', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AA-178地政署', category: 'Manhole Covers', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AA-380燃气', category: 'Manhole Covers', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AA-44', category: 'Manhole Covers', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AA-77', category: 'Manhole Covers', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AR-700H给加重', category: 'Manhole Covers', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AR500', category: 'Manhole Covers', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AA-350', category: 'Manhole Covers', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AF-500粉色', category: 'Manhole Covers', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AL-500', category: 'Manhole Covers', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AL700', category: 'Manhole Covers', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  // ── Outdoor Products ──
  { name: 'AW-20B', category: 'Outdoor Products', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AW-450H', category: 'Outdoor Products', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AW-533', category: 'Outdoor Products', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AW-625F', category: 'Outdoor Products', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AW-627', category: 'Outdoor Products', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AW-630', category: 'Outdoor Products', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AW-630R', category: 'Outdoor Products', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AW-633F', category: 'Outdoor Products', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AW-635L', category: 'Outdoor Products', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AW-640', category: 'Outdoor Products', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AW-644F', category: 'Outdoor Products', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AW-645L', category: 'Outdoor Products', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AW-740', category: 'Outdoor Products', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AW-8525', category: 'Outdoor Products', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AW325F', category: 'Outdoor Products', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AW500', category: 'Outdoor Products', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AW614', category: 'Outdoor Products', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AW637R', category: 'Outdoor Products', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AW655', category: 'Outdoor Products', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AW8380', category: 'Outdoor Products', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'Composite Drainage Grating', category: 'Outdoor Products', load_class: 'C250', price: 40, stock: 1000, status: 'active', image: '', description: 'Composite drainage grating for pedestrian and light traffic.' },
  // ── Conveyor Rollers ──
  { name: 'AC-089300P', category: 'Conveyor Rollers', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AC-089750', category: 'Conveyor Rollers', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AC-089945', category: 'Conveyor Rollers', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AC-108110P', category: 'Conveyor Rollers', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AC-108300E', category: 'Conveyor Rollers', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AC-108380', category: 'Conveyor Rollers', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AC-108380B', category: 'Conveyor Rollers', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AC-108740', category: 'Conveyor Rollers', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AC-1331600T', category: 'Conveyor Rollers', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AC-133380P', category: 'Conveyor Rollers', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AC-133450', category: 'Conveyor Rollers', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AC-133750', category: 'Conveyor Rollers', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AC-134500', category: 'Conveyor Rollers', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AC-159500', category: 'Conveyor Rollers', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AC-2025', category: 'Conveyor Rollers', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AC-214500', category: 'Conveyor Rollers', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  // ── Pipe Repair ──
  { name: 'AR-400', category: 'Pipe Repair', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AR-500', category: 'Pipe Repair', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AR-600', category: 'Pipe Repair', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AR-700', category: 'Pipe Repair', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AR-800', category: 'Pipe Repair', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AR-900', category: 'Pipe Repair', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  { name: 'AR-1000', category: 'Pipe Repair', load_class: '', price: 0, stock: 0, status: 'active', image: '', description: '' },
  // ── Other Products ──
  { name: 'D400 Square Cover 600x600', category: 'Other Products', load_class: 'D400', price: 180, stock: 200, status: 'active', image: '', description: 'D400 square composite cover 600x600mm for urban roads.' },
  { name: 'E600 Square Cover 700x700', category: 'Other Products', load_class: 'E600', price: 280, stock: 150, status: 'active', image: '', description: 'E600 square cover 700x700mm for heavy traffic areas.' },
  { name: 'C250 Trench Cover', category: 'Other Products', load_class: 'C250', price: 95, stock: 400, status: 'active', image: '', description: 'C250 composite trench cover for sidewalks.' },
  { name: 'D400 Trench Cover', category: 'Other Products', load_class: 'D400', price: 160, stock: 300, status: 'active', image: '', description: 'D400 trench cover for road applications.' },
  { name: 'B125 Inspection Cover', category: 'Other Products', load_class: 'B125', price: 65, stock: 500, status: 'active', image: '', description: 'B125 inspection cover for garden and pedestrian use.' },
  { name: 'Custom Logo Cover', category: 'Other Products', load_class: 'D400', price: 200, stock: 100, status: 'active', image: '', description: 'Custom logo manhole cover with company branding.' },
  { name: 'Anti-Slip Cover', category: 'Other Products', load_class: 'E600', price: 300, stock: 120, status: 'active', image: '', description: 'Anti-slip surface cover for wet environments.' },
  { name: 'Lockable Cover', category: 'Other Products', load_class: 'D400', price: 220, stock: 80, status: 'active', image: '', description: 'Lockable manhole cover with security key system.' },
  { name: 'ADA Compliant Cover', category: 'Other Products', load_class: 'B125', price: 130, stock: 250, status: 'active', image: '', description: 'ADA compliant cover for accessibility requirements.' },
  { name: 'Circular Cover 600mm', category: 'Other Products', load_class: 'D400', price: 155, stock: 350, status: 'active', image: '', description: 'Circular composite cover 600mm diameter.' },
  { name: 'Circular Cover 800mm', category: 'Other Products', load_class: 'E600', price: 260, stock: 180, status: 'active', image: '', description: 'Circular composite cover 800mm diameter.' },
];

async function importProducts() {
  console.log('开始在 Supabase 中导入产品数据...\n');

  let success = 0;
  let failed = 0;

  for (let i = 0; i < PRODUCTS.length; i++) {
    const p = PRODUCTS[i];
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify(p)
      });

      if (res.ok) {
        success++;
        process.stdout.write(`\r✓ 已导入 ${i + 1}/${PRODUCTS.length}: ${p.name}`);
      } else {
        failed++;
        console.error(`\n✗ 导入失败: ${p.name} — ${res.status} ${res.statusText}`);
      }
    } catch (e) {
      failed++;
      console.error(`\n✗ 请求错误: ${p.name} — ${e.message}`);
    }
  }

  console.log(`\n\n导入完成！`);
  console.log(`✓ 成功: ${success}`);
  console.log(`✗ 失败: ${failed}`);
}

importProducts().catch(console.error);