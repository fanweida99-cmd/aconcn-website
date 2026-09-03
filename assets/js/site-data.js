/* ============================================================
   ACONCN v2 — Site Data (Supabase-first with local fallback)
   Data model: products / certifications / comparisons / news / site_content
   2026-08-31 rebuild: real catalog (56 SKUs), 6 real certificates,
   8 authored articles, real comparison photos.
   ============================================================ */

const Config = {
  SUPABASE_URL: 'https://nhlqxhvyuqsdqhzfvvkp.supabase.co',
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5obHF4aHZ5dXFzZHFoemZ2dmtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI4MDc4MjYsImV4cCI6MjA5ODM4MzgyNn0.3QUn05yA0T8r9wqXBcI4sP1c2oZ6xN7yK8fW3bV0sMc',
  ADMIN_PASSWORD: 'Aconcn2026Admin',
  // 本地权威数据开关：true = 直接使用下方 DEFAULT_* 数据（离线可用、内容已完善）；
  // 执行 supabase-sync-2026-08-31.sql 同步线上后，可改回 false 走 Supabase。
  USE_LOCAL_DATA: true
};

let supabaseClient = null;

function getSupabase() {
  if (supabaseClient) return supabaseClient;
  if (typeof supabase === 'undefined' || !supabase.createClient) return null;
  supabaseClient = supabase.createClient(Config.SUPABASE_URL, Config.SUPABASE_ANON_KEY);
  return supabaseClient;
}

/* ============================================================
   DEFAULT PRODUCTS — 56 real SKUs
   categories: manhole | repair-clamps | rollers | outdoor
   specs sourced from 产品参数表_图册1-5; unknown dims marked on request.
   ============================================================ */
const DEFAULT_PRODUCTS = [
/* ---------- 1–28 Manhole Covers & Gratings ---------- */
{
  id: 1, name: 'AR-900H Heavy-Duty Round Manhole Cover (60T / F900)',
  category: 'manhole', standard: 'EN 124 F900 · GB/T 23858', load_class: 'F900 (60T)',
  price: null,
  description: 'Our highest-capacity phenolic composite round cover, SMQ type-tested to 60 tonnes. Built for ports, airfields, container yards and main arterial roads. Flush-mount anti-settlement frame eliminates the "dark ring" around the frame.',
  specs: { Model:'AR-900H', Type:'Heavy-duty round cover & frame', 'Clear Opening':'Ø900 mm', 'Overall Size':'Ø1100 mm', Height:'120 mm', Weight:'83 kg', 'Load Rating':'60 tonnes (F900)', Material:'Glass-fiber reinforced phenolic composite', Options:'With / without outer frame; custom cover markings' },
  image: 'assets/images/products/refined/ar-900h.jpg', featured: true, sort_order: 1, created_at: '2026-08-31T00:00:00'
},
{
  id: 2, name: 'AR-700H Heavy-Duty Round Manhole Cover (40T / D400–E600)',
  category: 'manhole', standard: 'EN 124 D400–E600 · GB/T 23858', load_class: 'D400–E600 (40T)',
  price: null,
  description: 'Flagship main-road cover, SMQ type-tested to 40 tonnes. The reinforced "heavy" version of the AR-700 line with a 100 mm deep frame — the standard choice for municipal arterial roads and heavy truck lanes.',
  specs: { Model:'AR-700H', Type:'Heavy-duty round cover & frame', 'Clear Opening':'Ø700 mm', 'Overall Size':'Ø900 mm', Height:'100 mm', Weight:'47 kg', 'Load Rating':'40 tonnes (D400–E600)', Material:'Glass-fiber reinforced phenolic composite', Options:'With / without outer frame; custom cover markings' },
  image: 'assets/images/products/refined/ar-700h.jpg', featured: true, sort_order: 2, created_at: '2026-08-31T00:00:00'
},
{
  id: 3, name: 'AR-750H Heavy-Duty Round Manhole Cover (30T / D400)',
  category: 'manhole', standard: 'EN 124 D400 · GB/T 23858', load_class: 'D400 (30T)',
  price: null,
  description: 'Heavy-duty 750 mm round cover rated to 30 tonnes, widely used by telecom and information-network utilities on urban roads with mixed traffic.',
  specs: { Model:'AR-750H', Type:'Heavy-duty round cover & frame', 'Clear Opening':'Ø750 mm', 'Overall Size':'Ø950 mm', Height:'80 mm', Weight:'34 kg', 'Load Rating':'30 tonnes (D400)', Material:'Glass-fiber reinforced phenolic composite', Options:'Custom utility markings (telecom / power / water)' },
  image: 'assets/images/products/refined/ar-750h.jpg', featured: false, sort_order: 3, created_at: '2026-08-31T00:00:00'
},
{
  id: 4, name: 'AR-700B Round Manhole Cover with Frame (20T / C250)',
  category: 'manhole', standard: 'EN 124 C250 · GB/T 23858', load_class: 'C250 (20T)',
  price: null,
  description: 'B-version round cover supplied complete with a 60 mm frame, rated to 20 tonnes for curb-side lanes, parking areas and residential distributor roads.',
  specs: { Model:'AR-700B', Type:'Round cover with frame', 'Clear Opening':'Ø700 mm', 'Overall Size':'Ø850 mm', Height:'60 mm', Weight:'27 kg', 'Load Rating':'20 tonnes (C250)', Material:'Glass-fiber reinforced phenolic composite', Options:'Locking options; anti-slip surface' },
  image: 'assets/images/products/refined/ar-700b.jpg', featured: false, sort_order: 4, created_at: '2026-08-31T00:00:00'
},
{
  id: 5, name: 'AR-700A Standard Round Manhole Cover (10T / B125)',
  category: 'manhole', standard: 'EN 124 B125 · GB/T 23858', load_class: 'B125 (10T)',
  price: null,
  description: 'Light-frame 700 mm round cover for footways, pedestrian zones and light-vehicle areas. Same phenolic formulation as the heavy range in a slim 40 mm frame.',
  specs: { Model:'AR-700A', Type:'Standard round cover & frame', 'Clear Opening':'Ø700 mm', 'Overall Size':'Ø850 mm', Height:'40 mm', Weight:'22 kg', 'Load Rating':'10 tonnes (B125)', Material:'Glass-fiber reinforced phenolic composite', Options:'Custom colors and embossed logos' },
  image: 'assets/images/products/refined/ar-700a.jpg', featured: false, sort_order: 5, created_at: '2026-08-31T00:00:00'
},
{
  id: 6, name: 'AR-500 Compact Round Manhole Cover (5T / A15)',
  category: 'manhole', standard: 'EN 124 A15 · GB/T 23858', load_class: 'A15 (5T)',
  price: null,
  description: 'Compact 500 mm inspection cover for valve chambers, garden drains and pedestrian areas where a small, lightweight cover is required.',
  specs: { Model:'AR-500', Type:'Compact round cover & frame', 'Clear Opening':'Ø500 mm', 'Overall Size':'Ø700 mm', Height:'60 mm', Weight:'13 kg', 'Load Rating':'5 tonnes (A15)', Material:'Glass-fiber reinforced phenolic composite', Options:'Lift keys included' },
  image: 'assets/images/products/refined/ar-500.jpg', featured: false, sort_order: 6, created_at: '2026-08-31T00:00:00'
},
{
  id: 7, name: 'AW-630 Round Gully Grating (20T / C250)',
  category: 'manhole', standard: 'EN 124 C250 · GB/T 23858', load_class: 'C250 (20T)',
  price: null,
  description: '630 mm round gully top with anti-slip slot pattern, designed for road drainage connections. Balanced open area and wheel-load strength.',
  specs: { Model:'AW-630', Type:'Round gully grating', 'Clear Opening':'Ø630 mm', 'Overall Size':'Ø780 mm', Height:'60 mm', Weight:'22 kg', 'Load Rating':'20 tonnes (C250)', Material:'Glass-fiber reinforced phenolic composite', Options:'Matching sump / bucket available' },
  image: 'assets/images/products/refined/aw-630.jpg', featured: true, sort_order: 7, created_at: '2026-08-31T00:00:00'
},
{
  id: 8, name: 'AW-527 Round Gully Grating (5T / A15)',
  category: 'manhole', standard: 'EN 124 A15 · GB/T 23858', load_class: 'A15 (5T)',
  price: null,
  description: '527 mm round gully grating for footways and light-duty drainage points.',
  specs: { Model:'AW-527', Type:'Round gully grating', 'Clear Opening':'Ø527 mm', 'Overall Size':'Ø700 mm', Height:'40 mm', Weight:'13 kg', 'Load Rating':'5 tonnes (A15)', Material:'Glass-fiber reinforced phenolic composite', Options:'Custom slot layout' },
  image: 'assets/images/products/refined/aw-527.jpg', featured: false, sort_order: 8, created_at: '2026-08-31T00:00:00'
},
{
  id: 9, name: 'AW-450H Heavy-Duty Round Gully Grating (5T)',
  category: 'manhole', standard: 'EN 124 A15–B125 · GB/T 23858', load_class: 'A15–B125 (5T)',
  price: null,
  description: 'Reinforced 450 mm gully grating with deeper frame for small drainage catch points.',
  specs: { Model:'AW-450H', Type:'Heavy-duty round gully grating', 'Clear Opening':'Ø450 mm', 'Overall Size':'Ø600 mm', Height:'40 mm', Weight:'10 kg', 'Load Rating':'5 tonnes', Material:'Glass-fiber reinforced phenolic composite', Options:'Anti-slip finish' },
  image: 'assets/images/products/refined/aw-450h.jpg', featured: false, sort_order: 9, created_at: '2026-08-31T00:00:00'
},
{
  id: 10, name: 'AW-630R Round-Frame Gully Top with Square Insert',
  category: 'manhole', standard: 'GB/T 23858', load_class: 'C250',
  price: null,
  description: 'Round outer frame with a square insert cover — a retrofit-friendly profile that matches existing round excavations while accepting square gully hardware.',
  specs: { Model:'AW-630R', Type:'Round frame / square insert gully top', 'Clear Opening':'Ø630 mm', Material:'Glass-fiber reinforced phenolic composite', 'Load Rating':'C250 class', Options:'Custom frame heights' },
  image: 'assets/images/products/refined/aw-630r.jpg', featured: false, sort_order: 10, created_at: '2026-08-31T00:00:00'
},
{
  id: 11, name: 'AW-625F Square Gully Grating',
  category: 'manhole', standard: 'GB/T 23858', load_class: 'B125–C250',
  price: null,
  description: 'Square-format gully grating for linear and point drainage in paved areas.',
  specs: { Model:'AW-625F', Type:'Square gully grating', Material:'Glass-fiber reinforced phenolic composite', 'Load Rating':'B125–C250 class', Options:'Custom open-area ratio' },
  image: 'assets/images/products/refined/aw-625f.jpg', featured: false, sort_order: 11, created_at: '2026-08-31T00:00:00'
},
{
  id: 12, name: 'AW-633F Square Gully Grating',
  category: 'manhole', standard: 'GB/T 23858', load_class: 'B125–C250',
  price: null,
  description: '633 mm square gully grating with reinforced rib structure for urban drainage.',
  specs: { Model:'AW-633F', Type:'Square gully grating', Material:'Glass-fiber reinforced phenolic composite', 'Load Rating':'B125–C250 class', Options:'Frame and sump options' },
  image: 'assets/images/products/refined/aw-633f.jpg', featured: false, sort_order: 12, created_at: '2026-08-31T00:00:00'
},
{
  id: 13, name: 'AW-635L Channel Gully Grating',
  category: 'manhole', standard: 'GB/T 23858', load_class: 'B125–C250',
  price: null,
  description: 'Linear channel grating profile for continuous drainage runs along curbs and portals.',
  specs: { Model:'AW-635L', Type:'Channel / linear gully grating', Material:'Glass-fiber reinforced phenolic composite', 'Load Rating':'B125–C250 class', Options:'Custom lengths' },
  image: 'assets/images/products/refined/aw-635l.jpg', featured: false, sort_order: 13, created_at: '2026-08-31T00:00:00'
},
{
  id: 14, name: 'AW-640 Round Gully Grating',
  category: 'manhole', standard: 'GB/T 23858', load_class: 'C250',
  price: null,
  description: '640 mm round gully grating, a common retrofit size for legacy municipal catch basins.',
  specs: { Model:'AW-640', Type:'Round gully grating', Material:'Glass-fiber reinforced phenolic composite', 'Load Rating':'C250 class', Options:'Matching frame' },
  image: 'assets/images/products/refined/aw-640.jpg', featured: false, sort_order: 14, created_at: '2026-08-31T00:00:00'
},
{
  id: 15, name: 'AW-644F Square Gully Grating',
  category: 'manhole', standard: 'GB/T 23858', load_class: 'C250',
  price: null,
  description: 'Heavy square gully grating for high-flow drainage points in parking decks and plazas.',
  specs: { Model:'AW-644F', Type:'Square gully grating', Material:'Glass-fiber reinforced phenolic composite', 'Load Rating':'C250 class', Options:'Anti-slip slots' },
  image: 'assets/images/products/refined/aw-644f.jpg', featured: false, sort_order: 15, created_at: '2026-08-31T00:00:00'
},
{
  id: 16, name: 'AW-645L Channel Gully Grating',
  category: 'manhole', standard: 'GB/T 23858', load_class: 'C250',
  price: null,
  description: 'Wide linear grating for trench drains and port-area surface water control.',
  specs: { Model:'AW-645L', Type:'Channel / linear gully grating', Material:'Glass-fiber reinforced phenolic composite', 'Load Rating':'C250 class', Options:'Custom lengths and frames' },
  image: 'assets/images/products/refined/aw-645l.jpg', featured: false, sort_order: 16, created_at: '2026-08-31T00:00:00'
},
{
  id: 17, name: 'AW-655 Round Gully Grating',
  category: 'manhole', standard: 'GB/T 23858', load_class: 'C250',
  price: null,
  description: '655 mm round gully top for oversized catch basins and high-rainfall regions.',
  specs: { Model:'AW-655', Type:'Round gully grating', Material:'Glass-fiber reinforced phenolic composite', 'Load Rating':'C250 class', Options:'Sump bucket' },
  image: 'assets/images/products/refined/aw-655.jpg', featured: false, sort_order: 17, created_at: '2026-08-31T00:00:00'
},
{
  id: 18, name: 'AW-740 Heavy-Duty Round Gully Grating',
  category: 'manhole', standard: 'GB/T 23858', load_class: 'D400',
  price: null,
  description: 'Large 740 mm gully grating engineered for main-road carriageway drainage.',
  specs: { Model:'AW-740', Type:'Heavy-duty round gully grating', Material:'Glass-fiber reinforced phenolic composite', 'Load Rating':'D400 class', Options:'Bolted frame option' },
  image: 'assets/images/products/refined/aw-740.jpg', featured: false, sort_order: 18, created_at: '2026-08-31T00:00:00'
},
{
  id: 19, name: 'AW-8380 Long Linear Gully Grating (380×800, 20T)',
  category: 'manhole', standard: 'EN 124 C250 · GB/T 23858', load_class: 'C250 (20T)',
  price: null,
  description: 'Rectangular 380×800 mm longitudinal grating for curb-line channel drains, rated to 20 tonnes.',
  specs: { Model:'AW-8380', Type:'Linear gully grating', 'Overall Size':'380 × 800 mm', Height:'60 mm', Weight:'22 kg', 'Load Rating':'20 tonnes (C250)', Material:'Glass-fiber reinforced phenolic composite', Options:'Interlocking sections' },
  image: 'assets/images/products/refined/aw-8380.jpg', featured: false, sort_order: 19, created_at: '2026-08-31T00:00:00'
},
{
  id: 20, name: 'AW-20B Compact Gully Grating',
  category: 'manhole', standard: 'GB/T 23858', load_class: 'A15–B125',
  price: null,
  description: 'Small B-series gully grating for balcony drains, utility trenches and light-traffic zones.',
  specs: { Model:'AW-20B', Type:'Compact gully grating', Material:'Glass-fiber reinforced phenolic composite', 'Load Rating':'A15–B125 class', Options:'Custom colors' },
  image: 'assets/images/products/refined/aw-20b.jpg', featured: false, sort_order: 20, created_at: '2026-08-31T00:00:00'
},
{
  id: 21, name: 'AA-1314 Large Square Access Cover (1300×1400, 10T)',
  category: 'manhole', standard: 'EN 124 B125 · GB/T 23858', load_class: 'B125 (10T)',
  price: null,
  description: 'Oversized double-leaf square cover for large valve halls, pump stations and utility chambers that need personnel and equipment access.',
  specs: { Model:'AA-1314', Type:'Large square access cover', 'Overall Size':'1300 × 1400 mm', Height:'40 mm', Weight:'65 kg', 'Load Rating':'10 tonnes (B125)', Material:'Glass-fiber reinforced phenolic composite', Options:'Gas-spring assist; multi-leaf' },
  image: 'assets/images/products/refined/aa-1314.jpg', featured: true, sort_order: 21, created_at: '2026-08-31T00:00:00'
},
{
  id: 22, name: 'AA-178 Hong Kong Lands Department Pattern Cover',
  category: 'manhole', standard: 'HK Lands Dept spec · GB/T 23858', load_class: 'B125–C250',
  price: null,
  description: 'Square cover produced to the Hong Kong Lands Department pattern — part of ACONCN\'s long-running supply record for Hong Kong public works.',
  specs: { Model:'AA-178', Type:'Square utility cover (HK pattern)', Material:'Glass-fiber reinforced phenolic composite', 'Load Rating':'B125–C250 class', Options:'HK-standard embossed markings' },
  image: 'assets/images/products/refined/aa-178.jpg', featured: false, sort_order: 22, created_at: '2026-08-31T00:00:00'
},
{
  id: 23, name: 'AA-380 Buried Gas Valve Protection Box',
  category: 'manhole', standard: 'GB/T 23858', load_class: 'A15',
  price: null,
  description: 'Surface-mounted composite valve box protecting buried gas valves and cocks. Non-sparking, corrosion-proof and marked for gas utility identification.',
  specs: { Model:'AA-380', Type:'Buried gas valve box', Material:'Glass-fiber reinforced phenolic composite', 'Load Rating':'A15 class (pedestrian / verge)', Options:'Custom utility markings and colors' },
  image: 'assets/images/products/refined/aa-380-gas.jpg', featured: false, sort_order: 23, created_at: '2026-08-31T00:00:00'
},
{
  id: 24, name: 'AA-8A Round Tree Grate',
  category: 'manhole', standard: 'GB/T 23858', load_class: 'Pedestrian',
  price: null,
  description: 'Segmental round tree grate protecting tree pits on sidewalks and plazas. Opens for tree growth, keeps heels and wheels from catching, and never rots or rusts.',
  specs: { Model:'AA-8A', Type:'Round tree grate (segmented)', Material:'Glass-fiber reinforced phenolic composite', Finish:'Anti-slip, UV-stable', Options:'Adjustable inner opening; custom colors' },
  image: 'assets/images/products/refined/aa-8a-tree-grate-round.jpg', featured: false, sort_order: 24, created_at: '2026-08-31T00:00:00'
},
{
  id: 25, name: 'AA-8B Square Tree Grate',
  category: 'manhole', standard: 'GB/T 23858', load_class: 'Pedestrian',
  price: null,
  description: 'Segmental square tree grate for formal street-tree planting grids. Bolted segments ship flat and assemble on site.',
  specs: { Model:'AA-8B', Type:'Square tree grate (segmented)', Material:'Glass-fiber reinforced phenolic composite', Finish:'Anti-slip, UV-stable', Options:'Custom dimensions and logos' },
  image: 'assets/images/products/refined/aa-8b-tree-grate-square.jpg', featured: false, sort_order: 25, created_at: '2026-08-31T00:00:00'
},
{
  id: 26, name: 'AB-750A Split-Type Water Meter Box (750×500)',
  category: 'manhole', standard: 'GB/T 23858', load_class: 'A15–B125',
  price: null,
  description: 'Two-piece (A/B split) water meter chamber cover giving meter readers full access without lifting a single heavy slab.',
  specs: { Model:'AB-750A', Type:'Split water meter box', 'Overall Size':'750 × 500 mm', Material:'Glass-fiber reinforced phenolic composite', 'Load Rating':'A15–B125 class', Options:'Hinged leaf; locking latch' },
  image: 'assets/images/products/refined/ab-750a.jpg', featured: false, sort_order: 26, created_at: '2026-08-31T00:00:00'
},
{
  id: 27, name: 'AF-535 Square Recessed Access Cover',
  category: 'manhole', standard: 'GB/T 23858', load_class: 'B125',
  price: null,
  description: '535 mm square recessed cover designed to be paved or tiled over for an invisible finish in premium pavements and indoor plant rooms.',
  specs: { Model:'AF-535', Type:'Square recessed access cover', Material:'Glass-fiber reinforced phenolic composite', 'Load Rating':'B125 class', Options:'Tile-in / paving-in finish' },
  image: 'assets/images/products/refined/af-535.jpg', featured: false, sort_order: 27, created_at: '2026-08-31T00:00:00'
},
{
  id: 28, name: 'AA-165 Small Square Utility Cover',
  category: 'manhole', standard: 'GB/T 23858', load_class: 'A15',
  price: null,
  description: 'Small 165 mm square access cover for stop-taps, cable junctions and clean-out points.',
  specs: { Model:'AA-165', Type:'Small square utility cover', Material:'Glass-fiber reinforced phenolic composite', 'Load Rating':'A15 class', Options:'Custom markings' },
  image: 'assets/images/products/refined/aa-165.jpg', featured: false, sort_order: 28, created_at: '2026-08-31T00:00:00'
},
/* ---------- 29–40 Pipe Repair Clamps ---------- */
/* ---------- 29–40 Pipe Repair Clamps (ductile-iron full-seal couplings) ---------- */
{
  id: 29, name: 'DN25 Pipe Repair Clamp (1″ Full-Seal Coupling)',
  category: 'repair-clamps', standard: 'ISO / EN pipeline fitting', load_class: 'PN16',
  price: null,
  description: 'Full-seal bolted repair clamp for burst and leaking DN25 (1 inch) pipes. Ductile-iron body, EPDM sealing gasket and stainless bolts — installs under pressure without cutting the main.',
  specs: { Model:'DN25', 'Nominal Bore':'DN25 (1″)', Type:'Straight full-seal repair clamp', 'Working Pressure':'PN16', Body:'Ductile cast iron, epoxy coated', Gasket:'EPDM (NBR on request)', Bolts:'Stainless steel 304', 'Pipe Compatibility':'Steel / ductile iron / PVC / PE' },
  image: 'assets/images/products/repair-clamps/dn25.gif', featured: false, sort_order: 29, created_at: '2026-08-31T00:00:00'
},
{
  id: 30, name: 'DN32 Pipe Repair Clamp (1¼″ Full-Seal Coupling)',
  category: 'repair-clamps', standard: 'ISO / EN pipeline fitting', load_class: 'PN16',
  price: null,
  description: 'Full-seal repair clamp for DN32 (1¼ inch) service lines. Restores pipe integrity in minutes with no hot work.',
  specs: { Model:'DN32', 'Nominal Bore':'DN32 (1¼″)', Type:'Straight full-seal repair clamp', 'Working Pressure':'PN16', Body:'Ductile cast iron, epoxy coated', Gasket:'EPDM (NBR on request)', Bolts:'Stainless steel 304', 'Pipe Compatibility':'Steel / ductile iron / PVC / PE' },
  image: 'assets/images/products/repair-clamps/dn32.gif', featured: false, sort_order: 30, created_at: '2026-08-31T00:00:00'
},
{
  id: 31, name: 'DN40 Pipe Repair Clamp (1½″ Full-Seal Coupling)',
  category: 'repair-clamps', standard: 'ISO / EN pipeline fitting', load_class: 'PN16',
  price: null,
  description: 'Full-seal repair clamp for DN40 (1½ inch) distribution pipes. 360° gasket wrap gives a positive seal even on pitted, out-of-round pipe.',
  specs: { Model:'DN40', 'Nominal Bore':'DN40 (1½″)', Type:'Straight full-seal repair clamp', 'Working Pressure':'PN16', Body:'Ductile cast iron, epoxy coated', Gasket:'EPDM (NBR on request)', Bolts:'Stainless steel 304', 'Pipe Compatibility':'Steel / ductile iron / PVC / PE' },
  image: 'assets/images/products/repair-clamps/dn40.gif', featured: false, sort_order: 31, created_at: '2026-08-31T00:00:00'
},
{
  id: 32, name: 'DN50 Pipe Repair Clamp (2″ Full-Seal Coupling)',
  category: 'repair-clamps', standard: 'ISO / EN pipeline fitting', load_class: 'PN16',
  price: null,
  description: 'Our most frequently ordered size — full-seal clamp for DN50 (2 inch) building service and industrial piping.',
  specs: { Model:'DN50', 'Nominal Bore':'DN50 (2″)', Type:'Straight full-seal repair clamp', 'Working Pressure':'PN16', Body:'Ductile cast iron, epoxy coated', Gasket:'EPDM (NBR on request)', Bolts:'Stainless steel 304', 'Pipe Compatibility':'Steel / ductile iron / PVC / PE' },
  image: 'assets/images/products/repair-clamps/dn50.gif', featured: false, sort_order: 32, created_at: '2026-08-31T00:00:00'
},
{
  id: 33, name: 'DN65 Pipe Repair Clamp (2½″ Full-Seal Coupling)',
  category: 'repair-clamps', standard: 'ISO / EN pipeline fitting', load_class: 'PN16',
  price: null,
  description: 'Full-seal clamp for DN65 (2½ inch) pipes — a common size in process cooling and fire-service laterals.',
  specs: { Model:'DN65', 'Nominal Bore':'DN65 (2½″)', Type:'Straight full-seal repair clamp', 'Working Pressure':'PN16', Body:'Ductile cast iron, epoxy coated', Gasket:'EPDM (NBR on request)', Bolts:'Stainless steel 304', 'Pipe Compatibility':'Steel / ductile iron / PVC / PE' },
  image: 'assets/images/products/repair-clamps/dn65.gif', featured: false, sort_order: 33, created_at: '2026-08-31T00:00:00'
},
{
  id: 34, name: 'DN80 Pipe Repair Clamp (3″ Full-Seal Coupling)',
  category: 'repair-clamps', standard: 'ISO / EN pipeline fitting', load_class: 'PN16',
  price: null,
  description: 'Full-seal repair clamp for DN80 (3 inch) distribution mains. Two-piece shell allows fitting without pipe disassembly.',
  specs: { Model:'DN80', 'Nominal Bore':'DN80 (3″)', Type:'Straight full-seal repair clamp', 'Working Pressure':'PN16', Body:'Ductile cast iron, epoxy coated', Gasket:'EPDM (NBR on request)', Bolts:'Stainless steel 304', 'Pipe Compatibility':'Steel / ductile iron / PVC / PE' },
  image: 'assets/images/products/repair-clamps/dn80.gif', featured: false, sort_order: 34, created_at: '2026-08-31T00:00:00'
},
{
  id: 35, name: 'DN100 Pipe Repair Clamp (4″ Full-Seal Coupling)',
  category: 'repair-clamps', standard: 'ISO / EN pipeline fitting', load_class: 'PN16',
  price: null,
  description: 'Workhorse clamp for DN100 (4 inch) municipal and industrial water lines. Tapped / tee versions available for branch connections.',
  specs: { Model:'DN100', 'Nominal Bore':'DN100 (4″)', Type:'Straight full-seal repair clamp (tee version on request)', 'Working Pressure':'PN16', Body:'Ductile cast iron, epoxy coated', Gasket:'EPDM (NBR on request)', Bolts:'Stainless steel 304', 'Pipe Compatibility':'Steel / ductile iron / PVC / PE' },
  image: 'assets/images/products/repair-clamps/dn100.gif', featured: false, sort_order: 35, created_at: '2026-08-31T00:00:00'
},
{
  id: 36, name: 'DN150 Pipe Repair Clamp (6″ Full-Seal Coupling)',
  category: 'repair-clamps', standard: 'ISO / EN pipeline fitting', load_class: 'PN10–PN16',
  price: null,
  description: 'Heavy full-seal clamp for DN150 (6 inch) trunk mains. Reinforced lugs and double-row bolts keep the seal under surge pressure.',
  specs: { Model:'DN150', 'Nominal Bore':'DN150 (6″)', Type:'Straight full-seal repair clamp (tee version on request)', 'Working Pressure':'PN10–PN16', Body:'Ductile cast iron, epoxy coated', Gasket:'EPDM (NBR on request)', Bolts:'Stainless steel 304', 'Pipe Compatibility':'Steel / ductile iron / PVC / PE' },
  image: 'assets/images/products/repair-clamps/dn150.gif', featured: false, sort_order: 36, created_at: '2026-08-31T00:00:00'
},
{
  id: 37, name: 'DN200 Pipe Repair Clamp (8″ Full-Seal Coupling)',
  category: 'repair-clamps', standard: 'ISO / EN pipeline fitting', load_class: 'PN10–PN16',
  price: null,
  description: 'Large-bore full-seal clamp for DN200 (8 inch) transmission mains. The hinged two-shell design lets a two-man crew close a burst main without lifting equipment.',
  specs: { Model:'DN200', 'Nominal Bore':'DN200 (8″)', Type:'Straight full-seal repair clamp (tee version on request)', 'Working Pressure':'PN10–PN16', Body:'Ductile cast iron, epoxy coated', Gasket:'EPDM (NBR on request)', Bolts:'Stainless steel 304', 'Pipe Compatibility':'Steel / ductile iron / PVC / PE' },
  image: 'assets/images/products/repair-clamps/dn200.gif', featured: true, sort_order: 37, created_at: '2026-08-31T00:00:00'
},
{
  id: 38, name: 'DN250 Pipe Repair Clamp (10″ Full-Seal Coupling)',
  category: 'repair-clamps', standard: 'ISO / EN pipeline fitting', load_class: 'PN10',
  price: null,
  description: 'Full-seal clamp for DN250 (10 inch) water and wastewater mains. Wide gasket bridges corroded sections up to the clamp length.',
  specs: { Model:'DN250', 'Nominal Bore':'DN250 (10″)', Type:'Straight full-seal repair clamp (tee version on request)', 'Working Pressure':'PN10', Body:'Ductile cast iron, epoxy coated', Gasket:'EPDM (NBR on request)', Bolts:'Stainless steel 304', 'Pipe Compatibility':'Steel / ductile iron / PVC / PE' },
  image: 'assets/images/products/repair-clamps/dn250.gif', featured: false, sort_order: 38, created_at: '2026-08-31T00:00:00'
},
{
  id: 39, name: 'DN300 Pipe Repair Clamp (12″ Full-Seal Coupling)',
  category: 'repair-clamps', standard: 'ISO / EN pipeline fitting', load_class: 'PN10',
  price: null,
  description: 'Full-seal clamp for DN300 (12 inch) major transmission pipelines. Triple bolt rows and bridge plates available for long split sections.',
  specs: { Model:'DN300', 'Nominal Bore':'DN300 (12″)', Type:'Straight full-seal repair clamp (tee version on request)', 'Working Pressure':'PN10', Body:'Ductile cast iron, epoxy coated', Gasket:'EPDM (NBR on request)', Bolts:'Stainless steel 304', 'Pipe Compatibility':'Steel / ductile iron / PVC / PE' },
  image: 'assets/images/products/repair-clamps/dn300.gif', featured: false, sort_order: 39, created_at: '2026-08-31T00:00:00'
},
{
  id: 40, name: 'DN400 Pipe Repair Clamp (16″ Full-Seal Coupling)',
  category: 'repair-clamps', standard: 'ISO / EN pipeline fitting', load_class: 'PN10',
  price: null,
  description: 'Largest standard full-seal clamp for DN400 (16 inch) trunk mains and industrial headers. Engineered for emergency response teams that need a permanent, pressure-rated repair.',
  specs: { Model:'DN400', 'Nominal Bore':'DN400 (16″)', Type:'Straight full-seal repair clamp (tee version on request)', 'Working Pressure':'PN10', Body:'Ductile cast iron, epoxy coated', Gasket:'EPDM (NBR on request)', Bolts:'Stainless steel 304', 'Pipe Compatibility':'Steel / ductile iron / PVC / PE' },
  image: 'assets/images/products/repair-clamps/dn400.gif', featured: false, sort_order: 40, created_at: '2026-08-31T00:00:00'
},
/* ---------- 41–50 Conveyor Idler Rollers ---------- */
{
  id: 41, name: 'AC-089300P Belt Conveyor Carrier Roller (Ø89×300, P-Seal)',
  category: 'rollers', standard: 'GB/T 10595 · DIN 22107 compatible', load_class: 'Heavy-duty',
  price: null,
  description: 'Precision steel carrier idler roller, Ø89 mm tube × 300 mm face width with the P-series labyrinth seal configuration. Low runout, low rotation resistance and long bearing life for bulk-material belt conveyors.',
  specs: { Model:'AC-089300P', 'Tube Diameter':'Ø89 mm', 'Roller Length':'300 mm', Tube:'Precision welded steel tube, anti-corrosion coated', 'Bearing Housing':'Cold-pressed steel, triple labyrinth seal', Bearings:'Deep-groove ball bearings (sealed)', Configuration:'P-series seal; carry / return idler', 'Runout Tolerance':'≤ 0.5 mm' },
  image: 'assets/images/products/rollers/ac-089300p.jpg', featured: false, sort_order: 41, created_at: '2026-08-31T00:00:00'
},
{
  id: 42, name: 'AC-089750 Belt Conveyor Return Roller (Ø89×750)',
  category: 'rollers', standard: 'GB/T 10595 · DIN 22107 compatible', load_class: 'Heavy-duty',
  price: null,
  description: 'Ø89 × 750 mm long-face roller typically deployed as a return (lower) idler on wide belt conveyors. Balanced tube and concentric bearing seats prevent belt wander.',
  specs: { Model:'AC-089750', 'Tube Diameter':'Ø89 mm', 'Roller Length':'750 mm', Tube:'Precision welded steel tube, anti-corrosion coated', 'Bearing Housing':'Cold-pressed steel, labyrinth seal', Bearings:'Deep-groove ball bearings (sealed)', Configuration:'Return / parallel idler', 'Runout Tolerance':'≤ 0.5 mm' },
  image: 'assets/images/products/rollers/ac-089750.jpg', featured: false, sort_order: 42, created_at: '2026-08-31T00:00:00'
},
{
  id: 43, name: 'AC-089945 Belt Conveyor Return Roller (Ø89×945)',
  category: 'rollers', standard: 'GB/T 10595 · DIN 22107 compatible', load_class: 'Heavy-duty',
  price: null,
  description: 'Ø89 × 945 mm return roller for high-capacity, wide-belt conveyor lines in ports, power plants and aggregate yards.',
  specs: { Model:'AC-089945', 'Tube Diameter':'Ø89 mm', 'Roller Length':'945 mm', Tube:'Precision welded steel tube, anti-corrosion coated', 'Bearing Housing':'Cold-pressed steel, labyrinth seal', Bearings:'Deep-groove ball bearings (sealed)', Configuration:'Return / parallel idler', 'Runout Tolerance':'≤ 0.5 mm' },
  image: 'assets/images/products/rollers/ac-089945.jpg', featured: false, sort_order: 43, created_at: '2026-08-31T00:00:00'
},
{
  id: 44, name: 'AC-108300E Belt Conveyor Carrier Roller (Ø108×300, E-Bearing)',
  category: 'rollers', standard: 'GB/T 10595 · DIN 22107 compatible', load_class: 'Heavy-duty',
  price: null,
  description: 'Ø108 mm heavy-gauge carrier roller with the E-series bearing configuration for troughing sets on medium and heavy belt conveyors.',
  specs: { Model:'AC-108300E', 'Tube Diameter':'Ø108 mm', 'Roller Length':'300 mm', Tube:'Precision welded steel tube, anti-corrosion coated', 'Bearing Housing':'Cold-pressed steel, multi-stage labyrinth seal', Bearings:'E-series sealed deep-groove ball bearings', Configuration:'Troughing carry idler', 'Runout Tolerance':'≤ 0.5 mm' },
  image: 'assets/images/products/rollers/ac-108300e.jpg', featured: false, sort_order: 44, created_at: '2026-08-31T00:00:00'
},
{
  id: 45, name: 'AC-108380 Belt Conveyor Carrier Roller (Ø108×380)',
  category: 'rollers', standard: 'GB/T 10595 · DIN 22107 compatible', load_class: 'Heavy-duty',
  price: null,
  description: 'Our standard Ø108 × 380 mm troughing carrier — the workhorse roller for B1000-class belt conveyors in mining and bulk handling.',
  specs: { Model:'AC-108380', 'Tube Diameter':'Ø108 mm', 'Roller Length':'380 mm', Tube:'Precision welded steel tube, anti-corrosion coated', 'Bearing Housing':'Cold-pressed steel, labyrinth seal', Bearings:'Deep-groove ball bearings (sealed)', Configuration:'Troughing carry idler (35° / 45° sets)', 'Runout Tolerance':'≤ 0.5 mm' },
  image: 'assets/images/products/rollers/ac-108380.jpg', featured: true, sort_order: 45, created_at: '2026-08-31T00:00:00'
},
{
  id: 46, name: 'AC-108740 Belt Conveyor Return Roller (Ø108×740)',
  category: 'rollers', standard: 'GB/T 10595 · DIN 22107 compatible', load_class: 'Heavy-duty',
  price: null,
  description: 'Ø108 × 740 mm return roller with reinforced shaft for long-span return idler frames.',
  specs: { Model:'AC-108740', 'Tube Diameter':'Ø108 mm', 'Roller Length':'740 mm', Tube:'Precision welded steel tube, anti-corrosion coated', 'Bearing Housing':'Cold-pressed steel, labyrinth seal', Bearings:'Deep-groove ball bearings (sealed)', Configuration:'Return / parallel idler', 'Runout Tolerance':'≤ 0.5 mm' },
  image: 'assets/images/products/rollers/ac-108740.jpg', featured: false, sort_order: 46, created_at: '2026-08-31T00:00:00'
},
{
  id: 47, name: 'AC-108110P Belt Conveyor Return Roller (Ø108×1100, P-Seal)',
  category: 'rollers', standard: 'GB/T 10595 · DIN 22107 compatible', load_class: 'Heavy-duty',
  price: null,
  description: 'Long Ø108 × 1100 mm return roller with P-series dust- and water-proof seal train, built for outdoor, abrasive environments.',
  specs: { Model:'AC-108110P', 'Tube Diameter':'Ø108 mm', 'Roller Length':'1100 mm', Tube:'Precision welded steel tube, anti-corrosion coated', 'Bearing Housing':'Cold-pressed steel, P-series labyrinth seal', Bearings:'Deep-groove ball bearings (sealed)', Configuration:'Return / parallel idler', 'Runout Tolerance':'≤ 0.5 mm' },
  image: 'assets/images/products/rollers/ac-108110p.jpg', featured: false, sort_order: 47, created_at: '2026-08-31T00:00:00'
},
{
  id: 48, name: 'AC-133380P Heavy Belt Conveyor Carrier Roller (Ø133×380, P-Seal)',
  category: 'rollers', standard: 'GB/T 10595 · DIN 22107 compatible', load_class: 'Extra heavy-duty',
  price: null,
  description: 'Ø133 mm thick-wall carrier roller for heavy-load, high-tonnage conveyor systems — crushers, stockyards and ship loaders.',
  specs: { Model:'AC-133380P', 'Tube Diameter':'Ø133 mm', 'Roller Length':'380 mm', Tube:'Thick-wall precision steel tube', 'Bearing Housing':'Cold-pressed steel, P-series labyrinth seal', Bearings:'Oversized sealed deep-groove bearings', Configuration:'Troughing carry idler', 'Runout Tolerance':'≤ 0.5 mm' },
  image: 'assets/images/products/rollers/ac-133380p.jpg', featured: false, sort_order: 48, created_at: '2026-08-31T00:00:00'
},
{
  id: 49, name: 'AC-1331600T Extra-Long Conveyor Roller (Ø133×1600, T-Config)',
  category: 'rollers', standard: 'GB/T 10595 · DIN 22107 compatible', load_class: 'Extra heavy-duty',
  price: null,
  description: 'Extra-long Ø133 × 1600 mm roller in the T-series configuration, for ultra-wide belts and special impact / garland stations.',
  specs: { Model:'AC-1331600T', 'Tube Diameter':'Ø133 mm', 'Roller Length':'1600 mm', Tube:'Thick-wall precision steel tube', 'Bearing Housing':'Cold-pressed steel, multi-stage seal', Bearings:'Oversized sealed deep-groove bearings', Configuration:'T-series; return / garland idler', 'Runout Tolerance':'≤ 0.6 mm' },
  image: 'assets/images/products/rollers/ac-1331600t.jpg', featured: false, sort_order: 49, created_at: '2026-08-31T00:00:00'
},
{
  id: 50, name: 'AC-159740 Extra-Heavy Conveyor Carrier Roller (Ø159×740)',
  category: 'rollers', standard: 'GB/T 10595 · DIN 22107 compatible', load_class: 'Extra heavy-duty',
  price: null,
  description: 'Largest Ø159 mm carrier roller for the heaviest mining and port conveyor duties, absorbing high impact at loading points.',
  specs: { Model:'AC-159740', 'Tube Diameter':'Ø159 mm', 'Roller Length':'740 mm', Tube:'Extra thick-wall precision steel tube', 'Bearing Housing':'Heavy pressed steel, labyrinth seal', Bearings:'Large sealed deep-groove bearings', Configuration:'Impact / troughing carry idler', 'Runout Tolerance':'≤ 0.6 mm' },
  image: 'assets/images/products/rollers/ac-159740.jpg', featured: false, sort_order: 50, created_at: '2026-08-31T00:00:00'
},
/* ---------- 51–56 Outdoor FRP Planters & Bins ---------- */
{
  id: 51, name: 'AF-500 FRP Sloped-Lid Waste Bin',
  category: 'outdoor', standard: 'Municipal street furniture', load_class: 'Weatherproof',
  price: null,
  description: 'One-piece glass-fiber reinforced waste bin with a self-closing sloped lid — rain runs off, waste stays hidden, graffiti cleans off. Deployed in parks, promenades and transit plazas.',
  specs: { Model:'AF-500', Type:'Sloped-lid outdoor waste bin', Material:'Fiberglass reinforced composite (FRP/SMC)', Finish:'UV-stable gelcoat, custom RAL colors', Features:'Rust-proof, waterproof lid, lift-out inner liner', Mounting:'Free-standing or bolt-down', Customization:'Embossed / printed logo' },
  image: 'assets/images/products/outdoor/af-500-bin.jpg', featured: true, sort_order: 51, created_at: '2026-08-31T00:00:00'
},
{
  id: 52, name: 'AL-700 Large FRP Sloped-Lid Waste Bin',
  category: 'outdoor', standard: 'Municipal street furniture', load_class: 'Weatherproof',
  price: null,
  description: 'Larger-capacity 700-class sloped-lid bin for high-traffic locations. Proven ACONCN Happy-Orient pattern supplied to waterfront and theme-park operators.',
  specs: { Model:'AL-700', Type:'Large sloped-lid outdoor waste bin', Material:'Fiberglass reinforced composite (FRP/SMC)', Finish:'UV-stable gelcoat, custom RAL colors', Features:'High capacity, rain-shedding lid, replaceable liner', Mounting:'Free-standing or bolt-down', Customization:'Full customer branding' },
  image: 'assets/images/products/outdoor/al-700-bin.gif', featured: false, sort_order: 52, created_at: '2026-08-31T00:00:00'
},
{
  id: 53, name: 'Three-Stream FRP Sorting Bin (Custom EASTECH Build)',
  category: 'outdoor', standard: 'Municipal street furniture', load_class: 'Weatherproof',
  price: null,
  description: 'Stacked three-compartment recycling / sorting bin for source-separated waste streams. Delivered as a custom-branded build; compartment layout and labeling are fully configurable.',
  specs: { Model:'3-Tier Sorting Bin', Type:'Three-stream sorting / recycling bin', Material:'Fiberglass reinforced composite (FRP/SMC)', Streams:'3 compartments (configurable)', Finish:'UV-stable gelcoat, custom colors & labels', Mounting:'Free-standing or bolt-down', Customization:'Logo, stream labels, aperture shapes' },
  image: 'assets/images/products/outdoor/bin-3tier.gif', featured: false, sort_order: 53, created_at: '2026-08-31T00:00:00'
},
{
  id: 54, name: 'Square FRP Street Planter 500 (Lotus Series)',
  category: 'outdoor', standard: 'Municipal street furniture', load_class: 'Weatherproof',
  price: null,
  description: 'One-piece molded square planter with rolled safety rim, raised feet for drainage and hand-painted finish. Lightweight versus concrete, will not crack, rot or rust — the ACONCN lotus-decor classic.',
  specs: { Model:'Planter-500', Type:'Square outdoor planter', Material:'Fiberglass reinforced composite (FRP/SMC)', Finish:'Hand-finished gelcoat, custom artwork', Features:'Drainage feet, frost-proof, UV-stable', Mounting:'Free-standing', Customization:'Color, relief artwork, logo' },
  image: 'assets/images/products/outdoor/planter-500.jpg', featured: false, sort_order: 54, created_at: '2026-08-31T00:00:00'
},
{
  id: 55, name: 'Custom Theme-Park Planter — Ocean Park Hong Kong Case',
  category: 'outdoor', standard: 'Custom project build', load_class: 'Weatherproof',
  price: null,
  description: 'Custom-molded branded planter series manufactured for Ocean Park Hong Kong — customer-specified color, embossed bilingual park name and integrated planting liner. A reference for custom theme-park and municipal programs.',
  specs: { Model:'Custom (Ocean Park reference)', Type:'Branded square planter', Material:'Fiberglass reinforced composite (FRP/SMC)', Finish:'Custom green gelcoat, embossed logo', Features:'Integrated liner, weatherproof, low maintenance', MOQ:'Custom projects from 30 pcs', Customization:'Shape, color, embossed / printed branding' },
  image: 'assets/images/products/outdoor/planter-ocean-park.png', featured: false, sort_order: 55, created_at: '2026-08-31T00:00:00'
},
{
  id: 56, name: 'Custom Theme-Park Planter — Hong Kong Disneyland Case',
  category: 'outdoor', standard: 'Custom project build', load_class: 'Weatherproof',
  price: null,
  description: 'Custom-molded planter produced for the Hong Kong Disneyland program, showing the depth of bespoke branding available — themed colors, embossed wordmarks and durable outdoor gelcoat that stays vivid for years.',
  specs: { Model:'Custom (Disneyland reference)', Type:'Branded square planter', Material:'Fiberglass reinforced composite (FRP/SMC)', Finish:'Custom themed gelcoat, embossed wordmark', Features:'Integrated liner, weatherproof, impact-resistant', MOQ:'Custom projects from 30 pcs', Customization:'Shape, color, themed artwork and branding' },
  image: 'assets/images/products/outdoor/planter-disney.png', featured: false, sort_order: 56, created_at: '2026-08-31T00:00:00'
}
];

/* ============================================================
   DEFAULT CERTIFICATIONS — 6 real documents
   ============================================================ */
const DEFAULT_CERTS = [
  {
    id: 1, title: 'SMQ Type-Test Report — 60 Tonne Load (AR-900H)',
    issuer: 'Shenzhen Academy of Metrology & Quality Inspection (SMQ)',
    cert_number: 'WT201032210664SWT1', issue_date: '2022-07-01',
    description: 'Independent laboratory type test verifying the AR-900H phenolic composite cover assembly to a 60-tonne proof load — the F900 performance class used on ports, airfields and the heaviest arterial roads.',
    image: 'assets/images/certs/smq-60t.jpg', sort_order: 1
  },
  {
    id: 2, title: 'SMQ Type-Test Report — 40 Tonne Load (AR-700H)',
    issuer: 'Shenzhen Academy of Metrology & Quality Inspection (SMQ)',
    cert_number: 'WT20103221066480WT1', issue_date: '2022-07-01',
    description: 'Independent type test of the AR-700H main-road cover assembly to a 40-tonne proof load, covering D400–E600 carriageway duty with permanent-set and crack criteria recorded.',
    image: 'assets/images/certs/smq-40t.jpg', sort_order: 2
  },
  {
    id: 3, title: 'ISO 9001 Quality Management Certification',
    issuer: 'QA International Certification Ltd.',
    cert_number: 'QA-IQMS-0213', issue_date: '2013-02-18',
    description: 'Quality management system certification covering the design and manufacture of composite manhole covers, drain gratings and access covers, audited against ISO 9001.',
    image: 'assets/images/certs/qa-iso9001.jpg', sort_order: 3
  },
  {
    id: 4, title: 'ISO 14001 Environmental Management Certification',
    issuer: 'QA International Certification Ltd.',
    cert_number: 'QA-IEMS-0213', issue_date: '2013-02-18',
    description: 'Environmental management system certification — evidence of controlled, low-waste production and the recycled-material content of our phenolic composite line.',
    image: 'assets/images/certs/qa-iso14001.jpg', sort_order: 4
  },
  {
    id: 5, title: 'Hong Kong Green Label Certificate',
    issuer: 'Hong Kong Green Label Scheme (GL-HK)',
    cert_number: 'HK GL-03184', issue_date: '2016-08-01',
    description: 'Hong Kong eco-label recognition for environmental steel-fiberglass products, supporting green-procurement requirements in Hong Kong public works.',
    image: 'assets/images/certs/hk-green-label.jpg', sort_order: 5
  },
  {
    id: 6, title: 'ISO 9001 Quality System Certificate (UCS)',
    issuer: 'Universal Certification Systems (UCS)',
    cert_number: '00121Q12345R0M', issue_date: '2014-12-09',
    description: 'Quality management system certificate for manhole cover and gully grate production, issued under the GB/T 19001 (idt ISO 9001) scheme.',
    image: 'assets/images/certs/ucs-iso9001.jpg', sort_order: 6
  }
];

/* ============================================================
   DEFAULT COMPARISONS — ACONCN vs standard composite vs cast iron
   ============================================================ */
const DEFAULT_COMPARISONS = [
  { id: 1, feature: 'Weight', composite: '70% lighter — D400 ~35 kg, two-person install', standard_composite: 'Heavier low-grade mix — D400 ~55 kg', cast_iron: 'Very heavy — D400 ~120 kg, lifting gear needed', sort_order: 1 },
  { id: 2, feature: 'Load Performance', composite: 'SMQ-verified 40T / 60T proof loads (D400–F900)', standard_composite: 'Variable batch quality; ratings often unverified', cast_iron: 'High nominal strength but brittle fracture on impact', sort_order: 2 },
  { id: 3, feature: 'Settlement / "Dark Ring"', composite: 'Flush anti-settlement frame — stays level with the road', standard_composite: 'Thin frame sinks under repeated wheel loads', cast_iron: 'Heavy rocking frame fractures surrounding asphalt', sort_order: 3 },
  { id: 4, feature: 'Corrosion Resistance', composite: 'Zero rust; resistant to salts, acids and UV', standard_composite: 'No rust, but poor UV / chemical resistance over time', cast_iron: 'Rusts continuously; protective coating wears off', sort_order: 4 },
  { id: 5, feature: 'Anti-Theft', composite: 'No scrap value — inherently theft-proof', standard_composite: 'Low scrap value, but cheap units are easily smashed', cast_iron: 'High scrap value — routinely stolen worldwide', sort_order: 5 },
  { id: 6, feature: 'Anti-Skid Surface', composite: 'Molded anti-slip tread pattern, wet or dry', standard_composite: 'Smooth wear surface polishes slippery', cast_iron: 'Aggressive when new, wears smooth as it rusts', sort_order: 6 },
  { id: 7, feature: 'Lifespan', composite: '30+ years with near-zero maintenance', standard_composite: '15–20 years, highly manufacturer-dependent', cast_iron: '10–15 years before corrosion failure', sort_order: 7 },
  { id: 8, feature: 'Cost Over Lifetime', composite: 'Lowest TCO — virtually no replacement cycles', standard_composite: 'Medium TCO — periodic replacement', cast_iron: 'Highest TCO — repeated replacement & roadworks', sort_order: 8 }
];

/* ============================================================
   DEFAULT NEWS — 8 authored articles (full HTML content)
   ============================================================ */
const DEFAULT_NEWS = [
  {
    id: 1, category: 'company', title: '14 Years and Counting: A 2012 ACONCN Cover Still Flush on a Shenzhen Main Road',
    excerpt: 'Dated December 2012 and still perfectly level with the asphalt — one Shenzhen drainage cover is a 14-year field test our competitors would rather not talk about.',
    content: '<p>Most marketing claims about product lifespan are extrapolated in a laboratory. Ours are driving over them every day.</p><p>In December 2012, ACONCN (Happy Orient Industrial) phenolic composite drainage covers were installed on a Shenzhen municipal carriageway. The cover in the photograph still carries mixed urban traffic — buses, trucks and passenger cars — fourteen years later. Three things are worth noting for engineers who specify access covers:</p><ul><li><strong>It is still flush.</strong> There is no settlement ring, no exposed frame lip and no asphalt fracture around the frame — the classic "dark ring" that signals a failing cover installation.</li><li><strong>There is no corrosion.</strong> A cast-iron cover at the same age would show active rust bleeding through the surrounding pavement. The phenolic composite surface is chemically inert.</li><li><strong>The anti-skid tread is still legible</strong>, including the original standard marking GB/T 23858 and the installation date cast into the cover.</li></ul><p>This is the field evidence behind our 10-year replacement guarantee: a cover that holds its frame geometry does not transmit impact loads into the surrounding asphalt, and that single fact removes the single most common failure mode of municipal access covers.</p><p>Specifiers comparing cover systems for main-road duty are welcome to request the location, the SMQ load-test reports, and sample units for their own evaluation.</p>',
    image: 'assets/images/comparison/aconcn-flush.jpg', author: 'ACONCN Engineering', sort_order: 1, created_at: '2026-08-20T09:00:00'
  },
  {
    id: 2, category: 'product', title: 'Anti-Settlement Flush Installation: How ACONCN Covers Eliminate the "Dark Ring"',
    excerpt: 'The ugly black patch around a manhole is not a paving problem — it is a cover-frame problem. Here is the mechanics, and how a flush frame design stops it.',
    content: '<p>Drive any urban road and you will see them: dark circular scars cut into the asphalt around manhole covers. Maintenance crews patch them; they always come back. The reason is structural, and it starts below the surface.</p><h5>Why the dark ring forms</h5><p>A conventional cover sits in a narrow rigid frame. When a wheel crosses, the cover deflects and rocks inside its seating; every rocking cycle pumps the frame against the asphalt. Water enters the fracture plane, traffic compresses it, and within months a ring of fatigued asphalt — the "dark ring" — breaks down around the frame.</p><h5>The flush-mount fix</h5><p>ACONCN covers use a deep, wide-flange anti-settlement frame that transfers wheel loads into the structural course rather than the surface course:</p><ul><li>Deep frame skirts (100 mm on the AR-700H, 120 mm on the AR-900H) lock into the road build-up</li><li>A broad load-spreading flange removes the stress concentration at the frame edge</li><li>A machined cover-to-frame seat eliminates rocking, so there is no pumping action</li><li>The finished cover sits flush within 1–2 mm of the road surface</li></ul><p>The photograph shows the result on a live carriageway: no ring, no lip, no patch — years after installation.</p><h5>What to ask your supplier</h5><p>Request frame depth, flange width and a cover-seat tolerance. If a supplier cannot quantify them, the dark ring is already scheduled into your maintenance budget.</p>',
    image: 'assets/images/story/story-flush-cover.jpg', author: 'ACONCN Engineering', sort_order: 2, created_at: '2026-08-12T09:00:00'
  },
  {
    id: 3, category: 'industry', title: 'EN 124 Load Classes A15 to F900: A No-Nonsense Selection Guide',
    excerpt: 'Picking a cover by price instead of load class is how main roads end up with footway-grade covers. Here is exactly what A15 through F900 mean — and where each belongs.',
    content: '<p>EN 124 groups gully tops and manhole tops into six load classes according to their place of installation. Choosing one class above what you need wastes money; one class below generates replacement cycles and liability.</p><h5>The six classes</h5><ul><li><strong>A15 (15 kN)</strong> — areas exclusively for pedestrians and cyclists: garden paths, verges, indoor plant rooms.</li><li><strong>B125 (125 kN)</strong> — footways, pedestrian zones and car parks accessible only to light vehicles.</li><li><strong>C250 (250 kN)</strong> — gutter-side areas and curb zones, residential distributor roads, parking decks.</li><li><strong>D400 (400 kN)</strong> — carriageways, hard shoulders and most urban roads open to all traffic.</li><li><strong>E600 (600 kN)</strong> — areas imposing large wheel loads: ports, docks, heavy haul roads.</li><li><strong>F900 (900 kN)</strong> — exceptionally heavy-duty areas: aircraft pavements, container terminals, heavy industrial floors.</li></ul><h5>Common specification mistakes</h5><p>The most frequent error is fitting B125 or C250 covers on a D400 carriageway to save unit cost — a decision that typically reverses itself within two to three years through cover fracture and frame settlement. The second is ignoring the frame: a D400 cover in a thin frame still fails at the frame-to-road interface.</p><h5>How ACONCN maps to EN 124</h5><p>Our phenolic range spans A15 through F900 equivalents, with independent SMQ proof-load testing at 40 and 60 tonnes. Tell us the installation zone and traffic mix and we will specify the smallest class that does the job safely — not the largest class we can sell you.</p>',
    image: 'assets/images/products/refined/ar-900h.jpg', author: 'ACONCN Engineering', sort_order: 3, created_at: '2026-07-28T09:00:00'
  },
  {
    id: 4, category: 'product', title: 'Three-Way Showdown: ACONCN Phenolic vs Standard Composite vs Cast Iron',
    excerpt: 'Not all composite covers are the same material, and "cheaper than iron" is not a specification. A field-level comparison across the metrics that actually fail.',
    content: '<p>"Composite" covers now compete at every price point, but the word spans everything from glass-filled phenolic engineered for carriageways to low-grade resin-and-sand mixes that belong on a footway. Buyers comparing quotes line-by-line are often comparing three different products.</p><h5>Material hierarchy</h5><p><strong>Cast iron</strong> is strong but heavy, corrosive and theft-prone. <strong>Standard composite</strong> (cheap BMC/resin mixes) removes rust and scrap value but varies wildly in fiber content and load endurance. <strong>Glass-fiber reinforced phenolic</strong> — the ACONCN material — adds high-temperature compression molding and long glass-fiber reinforcement, producing a cover that is light, non-brittle and dimensionally stable for decades.</p><h5>Where the differences show up first</h5><ul><li><strong>At the frame:</strong> thin-framed cheap composites and rocking iron frames both generate settlement rings; the deep phenolic flush frame does not.</li><li><strong>Under repeated loading:</strong> low-grade composites creep and crack; iron fractures on impact after corrosion; phenolic holds its rated class.</li><li><strong>At year 10:</strong> iron is rusting, cheap composite is UV-chalked, and the phenolic cover looks essentially unchanged.</li></ul><h5>The honest comparison table</h5><p>Our full eight-row comparison — weight, load, settlement, corrosion, theft, grip, lifespan and lifecycle cost — is on the Comparison page, alongside unretouched field photographs of each material in service. Specifiers are invited to challenge any row.</p>',
    image: 'assets/images/comparison/cast-iron-dark-ring.jpg', author: 'ACONCN Engineering', sort_order: 4, created_at: '2026-07-15T09:00:00'
  },
  {
    id: 5, category: 'company', title: 'SMQ Verifies 40-Tonne and 60-Tonne Proof Loads for AR-700H / AR-900H',
    excerpt: 'Independent type-test reports from the Shenzhen Academy of Metrology & Quality Inspection document the load performance behind our main-road and port-duty covers.',
    content: '<p>Load-class labels are only as credible as the test behind them. ACONCN\'s two flagship round covers — the AR-700H and AR-900H — have been independently type-tested by the Shenzhen Academy of Metrology & Quality Inspection (SMQ), a CMA/CNAS-accredited laboratory.</p><h5>What was tested</h5><ul><li><strong>AR-700H assembly</strong> — 700 mm clear opening in a 100 mm deep frame — verified to a 40-tonne proof load, covering D400–E600 main-road duty.</li><li><strong>AR-900H assembly</strong> — 900 mm clear opening in a 120 mm deep frame — verified to a 60-tonne proof load, the performance demanded by F900 port and airfield zones.</li></ul><h5>Why proof load matters more than a brochure number</h5><p>A type test applies the load through the standard contact block, holds it, and records residual deflection and visible cracking. A cover that merely survives a single press without measuring permanent set tells the specifier nothing. The SMQ reports record both load and deformation behavior — the data a civil engineer can actually design against.</p><h5>Request the documents</h5><p>Full reports, together with the ISO 9001, ISO 14001 and Hong Kong Green Label documents, are available on request through our Certifications page or by email. We encourage tenders and municipal procurement teams to make these reports a mandatory line item.</p>',
    image: 'assets/images/certs/smq-60t.jpg', author: 'ACONCN Quality', sort_order: 5, created_at: '2026-06-30T09:00:00'
  },
  {
    id: 6, category: 'industry', title: 'Why Manhole Covers Sink: Root Causes and the Flush-Mount Fix',
    excerpt: 'Cover settlement is usually diagnosed as bad compaction. The real cause is often the cover-frame assembly itself — and the fix belongs at the design stage.',
    content: '<p>A sunken manhole is one of the most expensive small defects in a road network: every patch requires traffic management, cutting, reinstatement and compaction, and most patches fail again within two years. Understanding the actual failure mechanism is the first step to stopping the cycle.</p><h5>Four root causes</h5><ol><li><strong>Load transfer through the surface course.</strong> A narrow frame concentrates wheel loads onto the asphalt right at the frame edge, where the pavement is weakest.</li><li><strong>Cover rocking.</strong> Loose manufacturing tolerances let the cover move on its seat; each wheel strike hammers the frame downward.</li><li><strong>Insufficient frame embedment.</strong> Shallow frames sit in the wearing course instead of interlocking with the base course.</li><li><strong>Compaction shadow.</strong> Compaction equipment cannot reach the wedge of material immediately around a frame, leaving a soft ring that settles first.</li></ol><h5>Designing settlement out</h5><p>The ACONCN approach attacks all four: deep skirted frames reach the structural layer; wide flanges spread loads away from the edge; machined seats stop rocking; and the flange geometry gives compaction equipment a flat target. The result is an installation that remains flush — the absence of the familiar dark ring is the visible proof.</p><h5>For asset owners</h5><p>If your reinstatement cycle around covers is shorter than five years, the frame specification — not your paving crew — is the first place to look. We are happy to review your standard detail drawing at no cost.</p>',
    image: 'assets/images/comparison/standard-composite.jpg', author: 'ACONCN Engineering', sort_order: 6, created_at: '2026-06-10T09:00:00'
  },
  {
    id: 7, category: 'product', title: 'Pipe Repair Clamps DN25–DN400: A Selection Guide for Burst Mains',
    excerpt: 'When a main bursts, the clock starts. This guide explains how a full-seal bolted clamp restores pressure-rated service — and how to size one in under five minutes.',
    content: '<p>A full-seal pipe repair clamp (also called a split coupling or "Haff" coupling) wraps 360° around a damaged pipe and compresses an elastomeric gasket over the defect — no cutting, no welding, no system drain-down in most cases.</p><h5>Sizing in three steps</h5><ol><li><strong>Measure the actual outside diameter</strong> of the pipe, not just its DN designation: older steel and PVC pipes of the same DN can differ in OD.</li><li><strong>Define the defect length:</strong> the clamp must overhang the crack or hole by at least 50–75 mm on each side.</li><li><strong>Match the pressure class:</strong> DN25–DN100 clamps are rated PN16; DN150 and above PN10–PN16 depending on wall build.</li></ol><h5>The ACONCN range</h5><p>Twelve standard bores from DN25 (1″) to DN400 (16″), with ductile-iron epoxy-coated shells, EPDM gaskets (NBR for hydrocarbons on request) and 304 stainless bolts. Tee (tapped) versions can be ordered on DN100 and above for live branch connections. The clamp works across steel, ductile iron, PVC and PE substrates.</p><h5>Field tips</h5><p>Clean the pipe to bright metal or smooth plastic under the gasket; torque bolts in a diagonal sequence to the values printed on the plate; and always carry one size above and below your most common main — the clamp you have at 2 a.m. is the only one that matters.</p>',
    image: 'assets/images/products/repair-clamps/dn200.gif', author: 'ACONCN Pipeline', sort_order: 7, created_at: '2026-05-22T09:00:00'
  },
  {
    id: 8, category: 'industry', title: 'SMC, BMC or Phenolic? Choosing the Right Composite for Heavy-Traffic Covers',
    excerpt: 'Three composite families, three very different service envelopes. A materials primer for engineers who need the cover to outlive the road.',
    content: '<p>"Fiberglass composite" covers at least three distinct material systems. Confusing them is the fastest way to buy a carriageway-rated label on a footway-grade product.</p><h5>BMC — bulk molding compound</h5><p>Short fibers (often under 6 mm) in a polyester resin paste. Cheap to mold, good surface finish, but the short fiber length limits structural toughness. BMC covers are appropriate for A15–B125 duty; specified higher, they creep and crack under repeated wheel load.</p><h5>SMC — sheet molding compound</h5><p>Longer chopped fibers (25–50 mm) impregnated as a sheet before hot-press molding. SMC delivers a genuine step up in strength and is the workhorse for C250–D400 composite covers when fiber content and press cycle are controlled.</p><h5>Phenolic — glass-fiber reinforced phenolic resin</h5><p>Phenolic resins cure into a rigid, heat-resistant, chemically stable network; combined with long glass-fiber reinforcement under high-temperature compression molding, the result is the highest-performance composite cover family — low creep, excellent fatigue behavior and the material basis of ACONCN\'s D400–F900 range.</p><h5>How to tell what you are actually being quoted</h5><p>Ask four questions: resin family, fiber length and content, molding process, and the independent load-test standard. A supplier who can answer all four with documents is selling engineered product; a supplier who answers only "fiberglass" is usually selling BMC at an SMC price.</p><p>The ACONCN line uses glass-fiber reinforced phenolic precisely because our target market — main roads, ports and heavy industry — punishes the gap between a label and a material.</p>',
    image: 'assets/images/products/refined/ar-700h.jpg', author: 'ACONCN Materials', sort_order: 8, created_at: '2026-05-08T09:00:00'
  }
];

/* ============================================================
   DEFAULT SITE CONTENT — real company story
   ============================================================ */
const DEFAULT_SITE_CONTENT = [{
  id: 1,
  hero_video_url: '',
  about_title: 'Flush with the road — 14 years, zero settlement',
  about_text: 'In December 2012, ACONCN phenolic composite drainage covers were installed on a Shenzhen municipal carriageway. They remain flush with the asphalt today — no settlement "dark ring", no rust, no replacement. That real-world record is why we build deep-flange anti-settlement frames and verify every heavy-duty class with independent SMQ proof-load tests to 40 and 60 tonnes.',
  about_image: 'assets/images/story/story-flush-cover.jpg',
  contact_title: 'Contact ACONCN',
  contact_text: 'Send us your load class, clear opening and installation zone — engineering replies within 24 hours with a specification and FOB quotation.',
  contact_email: 'victor@aconcn.com',
  contact_phone: '+86 136 0303 8913',
  contact_whatsapp: '+86 136 0303 8913'
}];
/* ============================================================
   Data loading — local-authoritative mode or Supabase fallback
   ============================================================ */
function localSiteData() {
  return {
    products: DEFAULT_PRODUCTS,
    certifications: DEFAULT_CERTS,
    comparisons: DEFAULT_COMPARISONS,
    news: DEFAULT_NEWS,
    siteContent: DEFAULT_SITE_CONTENT,
    image_base_url: ''
  };
}

async function loadSiteData() {
  if (Config.USE_LOCAL_DATA) {
    const data = localSiteData();
    window.siteData = data;
    document.dispatchEvent(new CustomEvent('site-data-loaded', { detail: data }));
    return data;
  }
  const sb = getSupabase();
  if (!sb) {
    const data = localSiteData();
    window.siteData = data;
    return data;
  }
  try {
    const [productsRes, certsRes, comparisonsRes, newsRes, contentRes, settingsRes] = await Promise.all([
      sb.from('products').select('*').order('sort_order', { ascending: true }),
      sb.from('certifications').select('*').order('sort_order', { ascending: true }),
      sb.from('comparisons').select('*').order('sort_order', { ascending: true }),
      sb.from('news').select('*').order('created_at', { ascending: false }),
      sb.from('site_content').select('*').order('id', { ascending: true }).limit(1),
      sb.from('site_settings').select('*').eq('key', 'image_base_url').single()
    ]);
    const data = {
      products: productsRes.data && productsRes.data.length ? productsRes.data : DEFAULT_PRODUCTS,
      certifications: certsRes.data && certsRes.data.length ? certsRes.data : DEFAULT_CERTS,
      comparisons: comparisonsRes.data && comparisonsRes.data.length ? comparisonsRes.data : DEFAULT_COMPARISONS,
      news: newsRes.data && newsRes.data.length ? newsRes.data : DEFAULT_NEWS,
      siteContent: contentRes.data && contentRes.data.length ? contentRes.data : DEFAULT_SITE_CONTENT,
      image_base_url: settingsRes.data ? settingsRes.data.value : ''
    };
    window.siteData = data;
    document.dispatchEvent(new CustomEvent('site-data-loaded', { detail: data }));
    return data;
  } catch (e) {
    console.warn('Supabase load failed, using local defaults:', e);
    const data = localSiteData();
    window.siteData = data;
    return data;
  }
}

/* Local assets (assets/...) are served directly; remote keys join with base url */
function resolveImageUrl(imagePath, baseUrl) {
  if (!imagePath) return '';
  if (/^https?:\/\//i.test(imagePath) || imagePath.indexOf('assets/') === 0) return imagePath;
  return (baseUrl || '') + imagePath;
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}

function fmtDate(iso) {
  if (!iso) return '';
  try {
    return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  } catch (e) { return iso; }
}

function getProducts() { return (window.siteData && window.siteData.products) || DEFAULT_PRODUCTS; }
function getProduct(id) { return getProducts().find(p => String(p.id) === String(id)); }
function getNews() { return (window.siteData && window.siteData.news) || DEFAULT_NEWS; }
function getNewsItem(id) { return getNews().find(n => String(n.id) === String(id)); }

/* ============================================================
   Render: product cards (matches .product-card BEM styles)
   ============================================================ */
/* ============================================================
   V2 中文数据补丁（简体）：产品名/描述、证书、规格键值词典
   仅在 currentLang === 'zh' 时由渲染层取用，不影响英文原文
   ============================================================ */
const CATEGORY_ZH = {
  manhole: '井盖及格栅',
  'repair-clamps': '管道抢修器',
  rollers: '输送机托辊',
  outdoor: '花箱与垃圾箱'
};

const PRODUCT_ZH = {
  1: { n: 'AR-900H 重型圆形井盖（60吨 / F900）', d: '本公司承载等级最高的酚醛复合圆形井盖，经 SMQ 型式试验验证可达 60 吨。专为港口、机场、集装箱堆场及城市主干道打造；齐平式防沉降井框，彻底消除框周“黑眼圈”。' },
  2: { n: 'AR-700H 重型圆形井盖（40吨 / D400–E600）', d: '旗舰级主干道井盖，经 SMQ 型式试验验证 40 吨。AR-700 系列的加强“重型”版本，框深 100 mm，是市政主干道与重车道的标准之选。' },
  3: { n: 'AR-750H 重型圆形井盖（30吨 / D400）', d: '750 mm 重型圆形井盖，额定承载 30 吨，广泛用于通信、信息网络等市政单位的混合交通城市道路。' },
  4: { n: 'AR-700B 带框圆形井盖（20吨 / C250）', d: 'B 版圆形井盖，配套 60 mm 井框整体供货，额定 20 吨，适用于路缘车道、停车场及住宅小区集散道路。' },
  5: { n: 'AR-700A 标准圆形井盖（10吨 / B125）', d: '薄框 700 mm 圆形井盖，适用于人行道、步行区及轻型车辆区域。采用与重型系列相同的酚醛配方，框厚仅 40 mm，轻巧经济。' },
  6: { n: 'AR-500 小型圆形井盖（5吨 / A15）', d: '500 mm 紧凑型检修井盖，适用于阀门井、花园排水及需要小型轻质盖板的步行区域。' },
  7: { n: 'AW-630 圆形雨水箅子（20吨 / C250）', d: '630 mm 圆形雨水口箅子，防滑条孔设计，用于道路雨水收集接口；开孔面积与轮载强度兼顾平衡。' },
  8: { n: 'AW-527 圆形雨水箅子（5吨 / A15）', d: '527 mm 圆形雨水箅子，适用于人行道及轻型排水点位。' },
  9: { n: 'AW-450H 重型圆形雨水箅子（5吨）', d: '加强型 450 mm 雨水箅子，井框加深，适用于小型集水点。' },
  10: { n: 'AW-630R 圆框方芯雨水箅子', d: '外圆内方结构，便于改造翻新——既匹配既有圆形开挖坑位，又可安装方形雨水篦芯。' },
  11: { n: 'AW-625F 方形雨水箅子', d: '方形雨水箅子，适用于铺装区域的线性与点状排水。' },
  12: { n: 'AW-633F 方形雨水箅子', d: '633 mm 方形雨水箅子，加强筋结构，服务城市排水。' },
  13: { n: 'AW-635L 沟槽式雨水箅子', d: '线性沟槽箅型，适用于沿路缘、隧道口的连续排水带。' },
  14: { n: 'AW-640 圆形雨水箅子', d: '640 mm 圆形雨水箅子，是老旧市政集水井常见的改造替换尺寸。' },
  15: { n: 'AW-644F 方形雨水箅子', d: '加重方形雨水箅子，适用于停车楼、广场等大流量排水点。' },
  16: { n: 'AW-645L 沟槽式雨水箅子', d: '加宽线性箅子，用于排水沟及港口区域的地表水控制。' },
  17: { n: 'AW-655 圆形雨水箅子', d: '655 mm 圆形雨水口箅子，适用于超大集水井及强降雨地区。' },
  18: { n: 'AW-740 重型圆形雨水箅子', d: '740 mm 大型雨水箅子，为主干道车行道排水设计。' },
  19: { n: 'AW-8380 加长线性雨水箅子（380×800，20吨）', d: '380×800 mm 矩形纵向箅子，用于路缘线性排水沟，额定 20 吨。' },
  20: { n: 'AW-20B 紧凑型雨水箅子', d: '小型 B 系列箅子，适用于阳台地漏、管线沟及轻交通区域。' },
  21: { n: 'AA-1314 大型方形检修井盖（1300×1400，10吨）', d: '超大双开方形井盖，供大型阀门厅、泵站及管线舱人员与设备进出使用。' },
  22: { n: 'AA-178 香港地政总署样式井盖', d: '按香港地政总署样式生产的方形井盖，是 ACONCN 长期供应香港公共工程的实绩之一。' },
  23: { n: 'AA-380 埋地燃气阀门保护箱', d: '明装复合阀门箱，用于保护埋地燃气阀门与旋塞；无火花、耐腐蚀，并带燃气专用标识。' },
  24: { n: 'AA-8A 圆形树池篦子（拼装式）', d: '分块拼装的圆形树池篦子，保护人行道与广场树穴；随树木生长可张开，避免鞋跟、车轮卡陷，且永不腐烂生锈。' },
  25: { n: 'AA-8B 方形树池篦子（拼装式）', d: '分块拼装的方形树池篦子，用于规整的行道树种植格；螺栓连接的分块可平铺运输、现场拼装。' },
  26: { n: 'AB-750A 分体式水表箱（750×500）', d: 'A/B 两片分体式水表井盖板，抄表人员无需掀开沉重整板即可全面作业。' },
  27: { n: 'AF-535 方形下沉式检修井盖', d: '535 mm 方形下沉式盖板，可在上方铺砖或贴石材，在高端铺装与室内设备区实现“隐形”效果。' },
  28: { n: 'AA-165 小型方形管线井盖', d: '165 mm 小型方形检修盖，适用于止水阀、电缆接头及清通口。' },
  29: { n: 'DN25 管道抢修器（1″ 全密封抱箍）', d: '螺栓紧固全密封抢修器，用于 DN25（1 英寸）管道爆管与渗漏。球墨铸铁本体、EPDM 密封胶圈、不锈钢螺栓——带压即可安装，无需切割主管。' },
  30: { n: 'DN32 管道抢修器（1¼″ 全密封抱箍）', d: 'DN32（1¼ 英寸）供水支管全密封抢修器，无需动火，数分钟即可恢复管道完整。' },
  31: { n: 'DN40 管道抢修器（1½″ 全密封抱箍）', d: 'DN40（1½ 英寸）配水管全密封抢修器；360° 全包胶圈，即使管壁点蚀、失圆也能可靠密封。' },
  32: { n: 'DN50 管道抢修器（2″ 全密封抱箍）', d: '出货最频繁的规格——DN50（2 英寸）楼宇供水与工业管道全密封抢修器。' },
  33: { n: 'DN65 管道抢修器（2½″ 全密封抱箍）', d: 'DN65（2½ 英寸）管道全密封抢修器，是工艺冷却与消防支管的常用规格。' },
  34: { n: 'DN80 管道抢修器（3″ 全密封抱箍）', d: 'DN80（3 英寸）配水干管全密封抢修器；两片式壳体，无需拆卸管道即可安装。' },
  35: { n: 'DN100 管道抢修器（4″ 全密封抱箍）', d: 'DN100（4 英寸）市政与工业供水管线的主力抢修器，可定制丝口/三通版本用于支管接驳。' },
  36: { n: 'DN150 管道抢修器（6″ 全密封抱箍）', d: 'DN150（6 英寸）输水干管重型全密封抢修器；加强吊耳与双排螺栓，在水锤冲击压力下仍保持密封。' },
  37: { n: 'DN200 管道抢修器（8″ 全密封抱箍）', d: 'DN200（8 英寸）输水大干管大口径全密封抢修器；铰接双壳设计，两名作业人员无需起重设备即可封堵爆管。' },
  38: { n: 'DN250 管道抢修器（10″ 全密封抱箍）', d: 'DN250（10 英寸）给水与污水干管全密封抢修器；加宽胶圈可跨覆抢修器长度内的腐蚀段。' },
  39: { n: 'DN300 管道抢修器（12″ 全密封抱箍）', d: 'DN300（12 英寸）大型输水管道全密封抢修器；可配三排螺栓与跨接板处理长裂口。' },
  40: { n: 'DN400 管道抢修器（16″ 全密封抱箍）', d: '标准系列中最大规格全密封抢修器，用于 DN400（16 英寸）输水干管与工业母管；为需要永久性、承压级修复的应急抢修队伍设计。' },
  41: { n: 'AC-089300P 带式输送机承载托辊（Ø89×300，P型密封）', d: '精密钢制承载托辊，管径 Ø89 mm × 辊面长 300 mm，配 P 系列迷宫密封。径向跳动小、转动阻力低、轴承寿命长，服务散料带式输送机。' },
  42: { n: 'AC-089750 带式输送机回程托辊（Ø89×750）', d: 'Ø89×750 mm 长辊面托辊，通常作为宽带输送机的下回程托辊；管体动平衡与同心轴承座防止皮带跑偏。' },
  43: { n: 'AC-089945 带式输送机回程托辊（Ø89×945）', d: 'Ø89×945 mm 回程托辊，用于港口、电厂、骨料堆场的大带宽、高产能输送线。' },
  44: { n: 'AC-108300E 带式输送机承载托辊（Ø108×300，E型轴承）', d: 'Ø108 mm 加厚承载托辊，配 E 系列轴承结构，用于中重型带式输送机的槽形托辊组。' },
  45: { n: 'AC-108380 带式输送机承载托辊（Ø108×380）', d: '标准 Ø108×380 mm 槽形承载托辊，是矿山与散料输送 B1000 级带宽的主力辊型。' },
  46: { n: 'AC-108740 带式输送机回程托辊（Ø108×740）', d: 'Ø108×740 mm 回程托辊，轴径加强，适配大跨距回程托辊支架。' },
  47: { n: 'AC-108110P 带式输送机回程托辊（Ø108×1100，P型密封）', d: 'Ø108×1100 mm 加长回程托辊，配 P 系列防尘防水多重密封，专为户外磨蚀性环境打造。' },
  48: { n: 'AC-133380P 重型带式输送机承载托辊（Ø133×380，P型密封）', d: 'Ø133 mm 厚壁承载托辊，服务重载、高吨位输送系统——破碎机、料场与装船机。' },
  49: { n: 'AC-1331600T 超长输送机托辊（Ø133×1600，T型结构）', d: 'Ø133×1600 mm 超长托辊，T 系列结构，用于超宽皮带及特殊缓冲/吊挂托辊工位。' },
  50: { n: 'AC-159740 超重型输送机承载托辊（Ø159×740）', d: '最大 Ø159 mm 承载托辊，承担最严苛的矿山与港口输送工况，吸收落料点的强冲击。' },
  51: { n: 'AF-500 玻璃钢斜盖垃圾箱', d: '一体成型玻璃钢垃圾箱，配自闭式斜顶盖——雨水顺坡流走、垃圾不外露、涂鸦可擦洗；部署于公园、滨海步道与交通广场。' },
  52: { n: 'AL-700 大型玻璃钢斜盖垃圾箱', d: '700 级大容量斜盖垃圾箱，用于高人流量场所；成熟的 ACONCN 欣东样式，曾供应海滨及主题乐园运营方。' },
  53: { n: '三分类玻璃钢回收箱（EASTECH 定制）', d: '叠层三仓分类/回收箱，用于垃圾源头分类；按客户品牌定制，仓格布局与标识可完全配置。' },
  54: { n: '方形玻璃钢街道花箱 500（莲花系列）', d: '一体模压方形花箱，卷边安全沿、抬高排水脚、手绘饰面；比混凝土轻质，不开裂、不腐烂、不生锈——ACONCN 莲花纹饰经典款。' },
  55: { n: '定制主题乐园花箱——香港海洋公园案例', d: '为香港海洋公园定制模压的品牌花箱系列——客户指定颜色、双语园名浮雕及一体式种植内胆；可作为主题乐园与市政定制项目的参考案例。' },
  56: { n: '定制主题乐园花箱——香港迪士尼案例', d: '为香港迪士尼项目定制模压的花箱，展现深度定制能力——主题配色、浮雕字样、持久鲜亮的户外面漆，多年不褪色。' }
};

const CERT_ZH = {
  1: { t: 'SMQ 型式试验报告——60 吨载荷（AR-900H）', i: '深圳市计量质量检测研究院（SMQ）', d: '独立实验室型式试验，验证 AR-900H 酚醛复合井盖总成承受 60 吨验证载荷，达到用于港口、机场及最重载主干道的 F900 性能等级。' },
  2: { t: 'SMQ 型式试验报告——40 吨载荷（AR-700H）', i: '深圳市计量质量检测研究院（SMQ）', d: 'AR-700H 主干道井盖总成的独立型式试验，验证 40 吨验证载荷，覆盖 D400–E600 车行道工况，并记录永久变形与裂纹判定指标。' },
  3: { t: 'ISO 9001 质量管理体系认证', i: 'QA 国际认证有限公司', d: '质量管理体系认证，覆盖复合井盖、雨水箅子及检修盖板的设计与制造，依据 ISO 9001 审核。' },
  4: { t: 'ISO 14001 环境管理体系认证', i: 'QA 国际认证有限公司', d: '环境管理体系认证——证明酚醛复合产品线采用受控、低废生产并使用再生材料。' },
  5: { t: '香港绿色标签证书', i: '香港环保标签计划（GL-HK）', d: '钢-玻纤产品获香港环保标签认可，满足香港公共工程的绿色采购要求。' },
  6: { t: 'ISO 9001 质量体系证书（UCS）', i: '环球认证体系（UCS）', d: '井盖与雨水箅子生产的质量管理体系证书，依据 GB/T 19001（等同采用 ISO 9001）体系颁发。' }
};

const SPEC_LABEL_ZH = {
  Model: '型号', Type: '类型', 'Clear Opening': '净开口', 'Overall Size': '外形尺寸',
  Height: '框高', Weight: '重量', 'Load Rating': '荷载等级', Material: '材料',
  Options: '选配', Finish: '表面工艺', 'Nominal Bore': '公称通径', 'Working Pressure': '工作压力',
  Body: '壳体', Gasket: '胶圈', Bolts: '螺栓', 'Pipe Compatibility': '适用管材',
  'Tube Diameter': '管径', 'Roller Length': '辊长', Tube: '管体', 'Bearing Housing': '轴承座',
  Bearings: '轴承', Configuration: '结构形式', 'Runout Tolerance': '径向跳动公差',
  Features: '特性', Mounting: '安装方式', Customization: '定制', Streams: '分类仓', MOQ: '起订量'
};

const SPEC_VALUE_ZH = {
  // Type
  'Heavy-duty round cover & frame': '重型圆形井盖及井框',
  'Standard round cover & frame': '标准圆形井盖及井框',
  'Compact round cover & frame': '紧凑型圆形井盖及井框',
  'Round cover with frame': '带框圆形井盖',
  'Round gully grating': '圆形雨水箅子',
  'Heavy-duty round gully grating': '重型圆形雨水箅子',
  'Compact gully grating': '紧凑型雨水箅子',
  'Linear gully grating': '线性雨水箅子',
  'Round frame / square insert gully top': '圆框方芯雨水箅',
  'Square gully grating': '方形雨水箅子',
  'Channel / linear gully grating': '沟槽/线性雨水箅子',
  'Large square access cover': '大型方形检修井盖',
  'Small square utility cover': '小型方形管线井盖',
  'Square utility cover (HK pattern)': '方形管线井盖（香港样式）',
  'Square recessed access cover': '方形下沉式检修井盖',
  'Buried gas valve box': '埋地燃气阀门箱',
  'Round tree grate (segmented)': '圆形树池篦子（拼装式）',
  'Square tree grate (segmented)': '方形树池篦子（拼装式）',
  'Split water meter box': '分体式水表箱',
  'Sloped-lid outdoor waste bin': '斜盖户外垃圾箱',
  'Large sloped-lid outdoor waste bin': '大型斜盖户外垃圾箱',
  'Three-stream sorting / recycling bin': '三分类回收箱',
  'Square outdoor planter': '方形户外花箱',
  'Branded square planter': '品牌定制方形花箱',
  'Straight full-seal repair clamp': '直型全密封抢修器',
  'Straight full-seal repair clamp (tee version on request)': '直型全密封抢修器（可订三通版）',
  // Material
  'Glass-fiber reinforced phenolic composite': '玻璃纤维增强酚醛复合材料',
  'Fiberglass reinforced composite (FRP/SMC)': '玻璃纤维增强复合材料（FRP/SMC）',
  // Repair clamp parts
  'Ductile cast iron, epoxy coated': '球墨铸铁，环氧涂层',
  'EPDM (NBR on request)': 'EPDM 三元乙丙胶圈（可订 NBR 丁腈胶圈）',
  'Stainless steel 304': '304 不锈钢螺栓',
  'Steel / ductile iron / PVC / PE': '钢管 / 球墨铸铁管 / PVC / PE 管',
  // Rollers
  'Extra thick-wall precision steel tube': '特厚壁精密钢管',
  'Precision welded steel tube, anti-corrosion coated': '精密焊接钢管，防腐涂层',
  'Thick-wall precision steel tube': '厚壁精密钢管',
  'Cold-pressed steel, P-series labyrinth seal': '冷压钢轴承座，P 系列迷宫密封',
  'Cold-pressed steel, labyrinth seal': '冷压钢轴承座，迷宫密封',
  'Cold-pressed steel, multi-stage labyrinth seal': '冷压钢轴承座，多级迷宫密封',
  'Cold-pressed steel, multi-stage seal': '冷压钢轴承座，多级密封',
  'Cold-pressed steel, triple labyrinth seal': '冷压钢轴承座，三重迷宫密封',
  'Heavy pressed steel, labyrinth seal': '加重冲压钢轴承座，迷宫密封',
  'Deep-groove ball bearings (sealed)': '深沟球轴承（密封型）',
  'E-series sealed deep-groove ball bearings': 'E 系列密封深沟球轴承',
  'Large sealed deep-groove bearings': '大型密封深沟球轴承',
  'Oversized sealed deep-groove bearings': '加大密封深沟球轴承',
  'Impact / troughing carry idler': '缓冲/槽形承载托辊',
  'P-series seal; carry / return idler': 'P 系列密封；承载/回程托辊',
  'Return / parallel idler': '回程/平行托辊',
  'T-series; return / garland idler': 'T 系列；回程/吊挂托辊',
  'Troughing carry idler': '槽形承载托辊',
  'Troughing carry idler (35° / 45° sets)': '槽形承载托辊（35°/45° 槽角组）',
  // Options (manhole)
  'With / without outer frame; custom cover markings': '可选带/不带外框；盖板标识定制',
  'Custom utility markings (telecom / power / water)': '可定制市政标识（通信/电力/给水）',
  'Locking options; anti-slip surface': '可选锁具；防滑表面',
  'Custom colors and embossed logos': '颜色定制、浮雕 Logo',
  'Lift keys included': '配套开启拉钩',
  'Matching sump / bucket available': '可配套沉砂斗/集污桶',
  'Custom slot layout': '条孔排布定制',
  'Anti-slip finish': '防滑处理',
  'Custom frame heights': '框高定制',
  'Custom open-area ratio': '开孔率定制',
  'Frame and sump options': '井框与沉砂斗可选',
  'Custom lengths': '长度定制',
  'Matching frame': '配套井框',
  'Anti-slip slots': '防滑条孔',
  'Custom lengths and frames': '长度与井框定制',
  'Bolted frame option': '可选螺栓固定框',
  'Custom colors': '颜色定制',
  'Custom dimensions and logos': '尺寸与 Logo 定制',
  'Custom markings': '标识定制',
  'Custom utility markings and colors': '市政标识与颜色定制',
  'Sump bucket': '沉砂斗',
  'Hinged leaf; locking latch': '合页开启；带锁扣',
  'Gas-spring assist; multi-leaf': '气弹簧助力；多开页',
  'Interlocking sections': '分块互锁拼接',
  'HK-standard embossed markings': '香港标准浮雕标识',
  'Tile-in / paving-in finish': '可镶砖/铺装下沉饰面',
  'Adjustable inner opening; custom colors': '内口可调；颜色定制',
  // Finish
  'Anti-slip, UV-stable': '防滑、抗紫外线',
  'Custom green gelcoat, embossed logo': '绿色胶衣定制，浮雕 Logo',
  'Custom themed gelcoat, embossed wordmark': '主题胶衣定制，浮雕字样',
  'Hand-finished gelcoat, custom artwork': '手工胶衣饰面，图案定制',
  'UV-stable gelcoat, custom RAL colors': '抗紫外线胶衣，RAL 色定制',
  'UV-stable gelcoat, custom colors & labels': '抗紫外线胶衣，颜色与标签定制',
  // Features / customization / mounting
  'Drainage feet, frost-proof, UV-stable': '排水支脚、抗冻、抗紫外线',
  'High capacity, rain-shedding lid, replaceable liner': '大容量、挡雨盖、可更换内胆',
  'Integrated liner, weatherproof, impact-resistant': '一体内胆、耐候、抗冲击',
  'Integrated liner, weatherproof, low maintenance': '一体内胆、耐候、低维护',
  'Rust-proof, waterproof lid, lift-out inner liner': '不锈、防水盖、可提出内胆',
  'Color, relief artwork, logo': '颜色、浮雕图案、Logo',
  'Embossed / printed logo': '浮雕/印刷 Logo',
  'Full customer branding': '完整客户品牌定制',
  'Logo, stream labels, aperture shapes': 'Logo、分类标识、投料口造型',
  'Shape, color, embossed / printed branding': '造型、颜色、浮雕/印刷品牌',
  'Shape, color, themed artwork and branding': '造型、颜色、主题图案与品牌',
  'Free-standing': '落地独立式',
  'Free-standing or bolt-down': '落地或螺栓固定',
  '3 compartments (configurable)': '三仓（可配置）',
  'Custom projects from 30 pcs': '定制项目 30 件起订',
  // Load rating text values
  '10 tonnes (B125)': '10 吨（B125）',
  '20 tonnes (C250)': '20 吨（C250）',
  '30 tonnes (D400)': '30 吨（D400）',
  '40 tonnes (D400–E600)': '40 吨（D400–E600）',
  '5 tonnes': '5 吨',
  '5 tonnes (A15)': '5 吨（A15）',
  '60 tonnes (F900)': '60 吨（F900）',
  'A15 class': 'A15 级',
  'A15 class (pedestrian / verge)': 'A15 级（人行道/路肩）',
  'A15–B125 class': 'A15–B125 级',
  'B125 class': 'B125 级',
  'B125–C250 class': 'B125–C250 级',
  'C250 class': 'C250 级',
  'D400 class': 'D400 级',
  // Model special
  'Custom (Disneyland reference)': '定制（迪士尼参考案例）',
  'Custom (Ocean Park reference)': '定制（海洋公园参考案例）',
  '3-Tier Sorting Bin': '三分类回收箱'
};

// 挂载中文产品字段
DEFAULT_PRODUCTS.forEach(function (p) {
  var z = PRODUCT_ZH[p.id];
  if (z) { p.nameZh = z.n; p.descZh = z.d; }
});
DEFAULT_CERTS.forEach(function (c) {
  var z = CERT_ZH[c.id];
  if (z) { c.titleZh = z.t; c.issuerZh = z.i; c.descZh = z.d; }
});

// 语言/取值辅助函数（渲染层共用）
function isZhLang() { return (typeof currentLang !== 'undefined' && currentLang === 'zh'); }
function pName(p) { return (isZhLang() && p.nameZh) ? p.nameZh : p.name; }
function pDesc(p) { return (isZhLang() && p.descZh) ? p.descZh : (p.description || ''); }
function categoryLabelZh(cat) { return (isZhLang() && CATEGORY_ZH[cat]) ? CATEGORY_ZH[cat] : categoryLabel(cat); }
function specKeyZh(k) { return (isZhLang() && SPEC_LABEL_ZH[k]) ? SPEC_LABEL_ZH[k] : k; }
function specValZh(v) {
  if (!isZhLang()) return v;
  var s = String(v);
  if (SPEC_VALUE_ZH[s] !== undefined) return SPEC_VALUE_ZH[s];
  // 词级回退：tonnes→吨、class→级，其余数字/型号/标准原样保留
  return s.replace(/tonnes/g, '吨').replace(/\bclass\b/g, '级');
}
function certField(c, key) {
  if (isZhLang()) {
    if (key === 'title' && c.titleZh) return c.titleZh;
    if (key === 'issuer' && c.issuerZh) return c.issuerZh;
    if (key === 'desc' && c.descZh) return c.descZh;
  }
  return key === 'desc' ? (c.description || '') : (c[key] || '');
}

function productCardHtml(p, baseUrl) {
  const img = resolveImageUrl(p.image, baseUrl);
  const displayName = pName(p);
  const badge = p.load_class ? `<span class="product-card__category">${escapeHtml(p.load_class)}</span>` : '';
  const desc = pDesc(p);
  const short = desc.length > 110 ? desc.substring(0, 110) + '…' : desc;
  const inquire = 'contact.html?product=' + encodeURIComponent(p.name);
  return `
    <article class="product-card reveal visible" data-category="${escapeHtml(p.category)}">
      <a href="product-detail.html?id=${p.id}" class="product-card__image">
        <img src="${img}" alt="${escapeHtml(displayName)}" loading="lazy" onerror="this.onerror=null;this.src='assets/images/products/product-placeholder.svg'">
        ${badge}
      </a>
      <div class="product-card__body">
        <h3 class="product-card__name"><a href="product-detail.html?id=${p.id}">${escapeHtml(displayName)}</a></h3>
        <p class="product-card__spec">${escapeHtml(short)}</p>
        <div class="product-card__price" data-lang="products.contactPrice">Contact for Price</div>
        <div class="product-card__actions">
          <a href="product-detail.html?id=${p.id}" class="btn btn-primary btn-sm" data-lang="products.detailsBtn">Details</a>
          <a href="${inquire}" class="btn btn-outline btn-sm" data-lang="products.inquiryBtn">Inquiry</a>
        </div>
      </div>
    </article>`;
}

function renderProducts(products, containerId, baseUrl) {
  const container = document.getElementById(containerId);
  if (!container) return;
  if (!products || products.length === 0) {
    container.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:var(--space-xl)"><p class="text-muted" data-lang="products.noProducts">No products found in this category.</p></div>';
  } else {
    container.innerHTML = products.map(p => productCardHtml(p, baseUrl)).join('');
  }
  if (typeof applyTranslationsWithin === 'function') applyTranslationsWithin(container);
}

function categoryLabel(cat) {
  const map = {
    manhole: 'Manhole Covers & Gratings',
    'repair-clamps': 'Pipe Repair Clamps',
    rollers: 'Conveyor Rollers',
    outdoor: 'Outdoor Planters & Bins'
  };
  return map[cat] || cat || '';
}

/* ============================================================
   Render: product detail page (fills existing static skeleton)
   ============================================================ */
function fillProductDetail(data) {
  const content = document.getElementById('product-content');
  if (!content) return;
  const id = new URLSearchParams(window.location.search).get('id');
  const product = getProduct(id);
  const spinner = document.getElementById('loading-spinner');
  const notFound = document.getElementById('product-not-found');
  if (spinner) spinner.style.display = 'none';
  if (!product) {
    if (notFound) notFound.style.display = 'block';
    content.style.display = 'none';
    return;
  }
  if (notFound) notFound.style.display = 'none';
  content.style.display = 'block';

  const base = data.image_base_url;
  const setText = (id2, val) => { const el = document.getElementById(id2); if (el) el.textContent = val; };
  const img = document.getElementById('product-image');
  if (img) { img.src = resolveImageUrl(product.image, base); img.alt = pName(product); }
  setText('product-category-badge', categoryLabelZh(product.category));
  setText('product-load-class', product.load_class || 'Industrial');
  setText('product-name', pName(product));
  setText('product-description', pDesc(product));
  const priceEl = document.getElementById('product-price');
  const priceLabel = isZhLang() ? '请联系报价' : 'Contact for Price';
  if (priceEl) priceEl.textContent = (product.price !== null && product.price !== undefined && product.price !== '') ? '$' + product.price : priceLabel;
  setText('quick-load-class', product.load_class || '—');
  setText('quick-category', categoryLabelZh(product.category));
  const bc = document.getElementById('breadcrumb-product');
  if (bc) bc.textContent = pName(product);
  document.title = pName(product) + ' — ACONCN';
  const inq = document.getElementById('inquiry-btn');
  if (inq) inq.href = 'contact.html?product=' + encodeURIComponent(product.name);

  const specsBody = document.getElementById('specs-body');
  if (specsBody) {
    const specs = product.specs ? Object.entries(product.specs) : [];
    specsBody.innerHTML = specs.map(([k, v]) => `<tr><td style="font-weight:600;color:var(--color-white);white-space:nowrap">${escapeHtml(specKeyZh(k))}</td><td>${escapeHtml(specValZh(v))}</td></tr>`).join('');
  }
  const related = getProducts().filter(p => p.category === product.category && String(p.id) !== String(product.id)).slice(0, 3);
  renderProducts(related, 'related-products-grid', base);
}

/* ============================================================
   Render: certifications (document cards + click-to-zoom modal)
   ============================================================ */
function renderCerts(certs, containerId, baseUrl) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = certs.map(c => {
    const img = resolveImageUrl(c.image, baseUrl);
    const meta = [c.cert_number, c.issue_date].filter(Boolean).join(' · ');
    const cTitle = certField(c, 'title');
    const cIssuer = certField(c, 'issuer');
    const cDesc = certField(c, 'desc');
    return `
      <article class="cert-doc reveal visible" onclick="openCertModal('${img}','${escapeHtml(cTitle).replace(/'/g, "\\'")}')">
        <div class="cert-doc__image">
          <img src="${img}" alt="${escapeHtml(cTitle)}" loading="lazy">
        </div>
        <div class="cert-doc__body">
          <h3 class="cert-doc__title">${escapeHtml(cTitle)}</h3>
          <p class="cert-doc__issuer">${escapeHtml(cIssuer)}</p>
          <p class="cert-doc__meta">${escapeHtml(meta)}</p>
          <p class="cert-doc__desc">${escapeHtml(cDesc)}</p>
        </div>
      </article>`;
  }).join('');
  if (typeof applyTranslationsWithin === 'function') applyTranslationsWithin(container);
}

function openCertModal(src, title) {
  let modal = document.getElementById('certModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'certModal';
    modal.className = 'cert-modal';
    modal.innerHTML = '<div class="cert-modal__backdrop" onclick="closeCertModal()"></div>' +
      '<figure class="cert-modal__figure">' +
        '<button class="cert-modal__close" onclick="closeCertModal()" aria-label="Close">&times;</button>' +
        '<img class="cert-modal__img" alt="">' +
        '<figcaption class="cert-modal__caption"></figcaption>' +
      '</figure>';
    document.body.appendChild(modal);
  }
  modal.querySelector('.cert-modal__img').src = src;
  modal.querySelector('.cert-modal__caption').textContent = title || '';
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeCertModal() {
  const modal = document.getElementById('certModal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCertModal(); });

/* ============================================================
   Render: comparison table (i18n-aware)
   ============================================================ */
function renderComparisons(rows) {
  const tbody = document.getElementById('comparisonTableBody');
  if (!tbody || !rows) return;
  const lang = (typeof currentLang !== 'undefined') ? currentLang : 'en';
  const zhRows = (typeof i18nData !== 'undefined' && i18nData.zh && i18nData.zh.comparison && i18nData.zh.comparison.rows) || {};
  tbody.innerHTML = rows.map(r => {
    const zh = zhRows[r.feature];
    const feature = (lang === 'zh' && zh) ? zh.feature : r.feature;
    const c = (lang === 'zh' && zh) ? zh.composite : r.composite;
    const s = (lang === 'zh' && zh) ? zh.standard_composite : r.standard_composite;
    const ci = (lang === 'zh' && zh) ? zh.cast_iron : r.cast_iron;
    return `<tr>
      <td style="font-weight:600;color:var(--color-white)">${escapeHtml(feature)}</td>
      <td class="comparison__highlight">${escapeHtml(c)}</td>
      <td>${escapeHtml(s)}</td>
      <td>${escapeHtml(ci)}</td>
    </tr>`;
  }).join('');
}

/* ============================================================
   Render: news list + inline detail (news.html?id=N)
   ============================================================ */
function newsCardHtml(n, baseUrl) {
  const img = resolveImageUrl(n.image, baseUrl);
  return `
    <article class="news-card reveal visible">
      <a href="news.html?id=${n.id}" class="news-card__image">
        <img src="${img}" alt="${escapeHtml(n.title)}" loading="lazy" onerror="this.style.display='none'">
        <span class="news-card__tag tag-${escapeHtml(n.category)}">${escapeHtml(n.category)}</span>
      </a>
      <div class="news-card__body">
        <div class="news-card__date">${fmtDate(n.created_at)}</div>
        <h3 class="news-card__title"><a href="news.html?id=${n.id}">${escapeHtml(n.title)}</a></h3>
        <p class="news-card__summary">${escapeHtml(n.excerpt || '')}</p>
        <a href="news.html?id=${n.id}" class="news-card__link" data-lang="news.readMore">Read More</a>
      </div>
    </article>`;
}

function renderNewsList(news, containerId, baseUrl) {
  const container = document.getElementById(containerId);
  if (!container) return;
  if (!news || news.length === 0) {
    container.innerHTML = '<p data-lang="news.noArticles">No articles found.</p>';
  } else {
    container.innerHTML = news.map(n => newsCardHtml(n, baseUrl)).join('');
  }
  if (typeof applyTranslationsWithin === 'function') applyTranslationsWithin(container);
}

function fillNewsDetail(data) {
  const listView = document.getElementById('news-list-view');
  const detailView = document.getElementById('news-detail-view');
  if (!detailView) return;
  const id = new URLSearchParams(window.location.search).get('id');
  if (!id) { if (listView) listView.style.display = ''; detailView.style.display = 'none'; return; }
  const item = getNewsItem(id);
  if (!item) { if (listView) listView.style.display = ''; detailView.style.display = 'none'; return; }
  if (listView) listView.style.display = 'none';
  detailView.style.display = 'block';
  const setText = (id2, val) => { const el = document.getElementById(id2); if (el) el.textContent = val; };
  setText('news-detail-title', item.title);
  setText('news-detail-date', fmtDate(item.created_at));
  setText('news-detail-category', item.category);
  const img = document.getElementById('news-detail-image');
  if (img) {
    if (item.image) { img.src = resolveImageUrl(item.image, data.image_base_url); img.style.display = ''; img.alt = item.title; }
    else img.style.display = 'none';
  }
  const body = document.getElementById('news-detail-content');
  if (body) body.innerHTML = item.content || '';
  document.title = item.title + ' — ACONCN';
  const filters = document.getElementById('news-filters');
  if (filters) filters.style.display = 'none';
  window.scrollTo(0, 0);
}

/* ============================================================
   Global filters (products.html / news.html)
   ============================================================ */
let _currentProductFilter = 'all';
function filterProducts(cat) {
  _currentProductFilter = cat;
  const all = getProducts();
  const list = cat === 'all' ? all : all.filter(p => p.category === cat);
  renderProducts(list, 'products-grid', (window.siteData && window.siteData.image_base_url) || '');
  document.querySelectorAll('#filter-tabs [data-filter]').forEach(btn => {
    const on = btn.getAttribute('data-filter') === cat;
    btn.classList.toggle('btn-primary', on);
    btn.classList.toggle('btn-outline', !on);
  });
}

let _currentNewsFilter = 'all';
function filterNews(cat) {
  _currentNewsFilter = cat;
  const all = getNews();
  const key = cat === 'all' ? 'all' : cat.toLowerCase();
  const list = key === 'all' ? all : all.filter(n => n.category === key);
  renderNewsList(list, 'news-grid', (window.siteData && window.siteData.image_base_url) || '');
  document.querySelectorAll('#news-filters [data-filter]').forEach(btn => {
    const on = btn.getAttribute('data-filter') === cat;
    btn.classList.toggle('btn-primary', on);
    btn.classList.toggle('btn-outline', !on);
  });
}

/* ============================================================
   Auto-bootstrap: wire data into whatever containers exist
   ============================================================ */
document.addEventListener('DOMContentLoaded', async function () {
  const data = await loadSiteData();
  const base = data.image_base_url;

  // Home: featured products
  if (document.getElementById('featured-products-grid')) {
    renderProducts(data.products.filter(p => p.featured), 'featured-products-grid', base);
  }
  // Products listing
  if (document.getElementById('products-grid')) {
    const paramCat = new URLSearchParams(window.location.search).get('category');
    // Back-compat: old footer links used display names
    const compat = { 'Manhole Covers': 'manhole', 'Outdoor Products': 'outdoor', 'Gratings': 'manhole', 'Accessories': 'manhole' };
    const initial = compat[paramCat] || paramCat || 'all';
    if (document.querySelector('#filter-tabs [data-filter="' + initial + '"]')) filterProducts(initial);
    else filterProducts('all');
  }
  // Product detail
  if (document.getElementById('product-content')) fillProductDetail(data);
  // Certifications
  if (document.getElementById('certifications-grid')) renderCerts(data.certifications, 'certifications-grid', base);
  // Comparison table
  if (document.getElementById('comparisonTableBody')) renderComparisons(data.comparisons);
  // News (list or inline detail)
  if (document.getElementById('news-grid')) {
    fillNewsDetail(data);
    if (!new URLSearchParams(window.location.search).get('id')) {
      renderNewsList(data.news, 'news-grid', base);
    }
  }
  // About / story content where elements exist
  renderAbout(data.siteContent);
});
