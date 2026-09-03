// Generate supabase-sync SQL from the authoritative local data in site-data.js
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = __dirname;
const code = fs.readFileSync(path.join(root, 'assets/js/site-data.js'), 'utf8');
const sandbox = { window: {}, document: { addEventListener(){}, getElementById(){return null;} }, localStorage:{getItem(){return null;},setItem(){}}, console };
sandbox.window = sandbox;
vm.createContext(sandbox);
vm.runInContext(code, sandbox);
const P = vm.runInContext('DEFAULT_PRODUCTS', sandbox);
const C = vm.runInContext('DEFAULT_CERTS', sandbox);
const X = vm.runInContext('DEFAULT_COMPARISONS', sandbox);
const N = vm.runInContext('DEFAULT_NEWS', sandbox);
const SC = vm.runInContext('DEFAULT_SITE_CONTENT', sandbox);

const q = v => {
  if (v === null || v === undefined) return 'NULL';
  if (typeof v === 'number') return String(v);
  if (typeof v === 'boolean') return v ? 'true' : 'false';
  if (typeof v === 'object') return "'" + JSON.stringify(v).replace(/'/g, "''") + "'::jsonb";
  return "'" + String(v).replace(/'/g, "''") + "'";
};

let out = [];
out.push('-- ============================================================');
out.push('-- ACONCN v2 — Supabase full sync (generated ' + new Date().toISOString().slice(0,10) + ')');
out.push('-- Source of truth: assets/js/site-data.js (Config.USE_LOCAL_DATA = true)');
out.push('-- Run once inside Supabase SQL Editor. Safe to re-run (idempotent UPSERT).');
out.push('-- ============================================================');
out.push('begin;');
out.push('');
out.push('-- 1) Replace catalog tables with the authoritative local dataset');
out.push('truncate table products restart identity cascade;');
out.push('truncate table certifications restart identity cascade;');
out.push('truncate table comparisons restart identity cascade;');
out.push('truncate table news restart identity cascade;');
out.push('');

// products
out.push('-- ---------- products (' + P.length + ') ----------');
out.push('insert into products (id, name, category, standard, load_class, price, description, specs, image, gallery, featured, sort_order, created_at) values');
const pRows = P.map(p => '(' + [q(p.id),q(p.name),q(p.category),q(p.standard||null),q(p.load_class||null),q(p.price),q(p.description||''),q(p.specs||{}),q(p.image),q(p.gallery||[]),q(!!p.featured),q(p.sort_order||p.id),q(p.created_at||new Date().toISOString())].join(', ') + ')');
out.push(pRows.join(',\n') + ';');
out.push('');

// certifications
out.push('-- ---------- certifications (' + C.length + ') ----------');
out.push('insert into certifications (id, title, issuer, cert_number, issue_date, description, image, sort_order) values');
out.push(C.map(c => '(' + [q(c.id),q(c.title),q(c.issuer||''),q(c.cert_number||''),q(c.issue_date||''),q(c.description||''),q(c.image),q(c.sort_order||c.id)].join(', ') + ')').join(',\n') + ';');
out.push('');

// comparisons
out.push('-- ---------- comparisons (' + X.length + ') ----------');
out.push('insert into comparisons (id, feature, composite, standard_composite, cast_iron, sort_order) values');
out.push(X.map(x => '(' + [q(x.id),q(x.feature),q(x.composite),q(x.standard_composite),q(x.cast_iron),q(x.sort_order||x.id)].join(', ') + ')').join(',\n') + ';');
out.push('');

// news
out.push('-- ---------- news (' + N.length + ') ----------');
out.push('insert into news (id, category, title, excerpt, content, image, author, sort_order, created_at) values');
out.push(N.map(n => '(' + [q(n.id),q(n.category),q(n.title),q(n.excerpt||''),q(n.content||''),q(n.image),q(n.author||'ACONCN'),q(n.sort_order||n.id),q(n.created_at)].join(', ') + ')').join(',\n') + ';');
out.push('');

// site_content
out.push('-- ---------- site_content ----------');
const s = SC[0];
out.push(`insert into site_content (id, hero_video_url, about_title, about_text, about_image, contact_title, contact_text, contact_email, contact_phone) values
(${q(s.id)}, ${q(s.hero_video_url||'')}, ${q(s.about_title)}, ${q(s.about_text)}, ${q(s.about_image)}, ${q(s.contact_title)}, ${q(s.contact_text)}, ${q(s.contact_email)}, ${q(s.contact_phone)})
on conflict (id) do update set hero_video_url=excluded.hero_video_url, about_title=excluded.about_title, about_text=excluded.about_text, about_image=excluded.about_image, contact_title=excluded.contact_title, contact_text=excluded.contact_text, contact_email=excluded.contact_email, contact_phone=excluded.contact_phone;`);
out.push('');
out.push('-- Images are served locally (assets/...); keep base url empty');
out.push(`insert into site_settings (key, value) values ('image_base_url', '') on conflict (key) do update set value=excluded.value;`);
out.push('');
out.push('-- Fix product id sequence after explicit inserts');
out.push("select setval(pg_get_serial_sequence('products','id'), (select max(id) from products));");
out.push("select setval(pg_get_serial_sequence('certifications','id'), (select max(id) from certifications));");
out.push("select setval(pg_get_serial_sequence('comparisons','id'), (select max(id) from comparisons));");
out.push("select setval(pg_get_serial_sequence('news','id'), (select max(id) from news));");
out.push('');
out.push('commit;');
out.push('');
out.push('-- After this runs successfully, set Config.USE_LOCAL_DATA = false in assets/js/site-data.js to serve from Supabase.');

const sql = out.join('\n');
const target = path.join(root, 'supabase-sync-2026-08-31.sql');
fs.writeFileSync(target, sql, 'utf8');
console.log('SQL written:', target, (sql.length/1024).toFixed(1)+'KB');
console.log('counts:', P.length, 'products /', C.length, 'certs /', X.length, 'comparisons /', N.length, 'news');
