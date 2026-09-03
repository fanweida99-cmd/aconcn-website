// Static integrity check for aconcn-website-v2
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = __dirname;
let errors = 0;
const fail = (m) => { console.log('FAIL: ' + m); errors++; };
const ok = (m) => console.log('OK:   ' + m);

// 1. Load site-data.js in a sandbox
const code = fs.readFileSync(path.join(root, 'assets/js/site-data.js'), 'utf8');
const sandbox = { window: {}, document: { addEventListener(){}, getElementById(){ return null; } }, localStorage: { getItem(){return null;}, setItem(){} }, console };
sandbox.window = sandbox;
vm.createContext(sandbox);
vm.runInContext(code, sandbox);
const summary = vm.runInContext('JSON.stringify({p:DEFAULT_PRODUCTS.length,c:DEFAULT_CERTS.length,n:DEFAULT_NEWS.length,x:DEFAULT_COMPARISONS.length})', sandbox);
const probe = JSON.parse(summary);
const P = vm.runInContext('DEFAULT_PRODUCTS', sandbox);
const C = vm.runInContext('DEFAULT_CERTS', sandbox);
const N = vm.runInContext('DEFAULT_NEWS', sandbox);
const X = vm.runInContext('DEFAULT_COMPARISONS', sandbox);
ok(`data loaded: ${probe.p} products, ${probe.c} certs, ${probe.n} news, ${probe.x} comparisons`);

// 2. Every referenced local image must exist
const checkImg = (rel, who) => {
  if (!rel) return;
  if (/^https?:\/\//.test(rel)) { fail('remote URL on ' + who + ': ' + rel); return; }
  const p = path.join(root, rel.replace(/^\//, ''));
  if (!fs.existsSync(p)) fail('missing image for ' + who + ': ' + rel);
};
P.forEach(p => checkImg(p.image, 'product #' + p.id + ' ' + p.name));
C.forEach(c => checkImg(c.image, 'cert ' + c.title));
N.forEach(n => checkImg(n.image, 'news ' + n.title));
ok('all data images checked');

// 3. Category distribution
const cats = {};
P.forEach(p => cats[p.category] = (cats[p.category] || 0) + 1);
console.log('categories:', JSON.stringify(cats));

// 4. specs completeness (no empty)
let noSpecs = P.filter(p => !p.specs || !Object.keys(p.specs).length);
if (noSpecs.length) fail(noSpecs.length + ' products without specs: ' + noSpecs.map(p=>p.id).join(',')); else ok('every product has specs');

// 5. HTML local asset references exist
const htmlFiles = fs.readdirSync(root).filter(f => f.endsWith('.html'));
const attrRe = /(?:src|href)="(assets\/[^"?#]+)/g;
let htmlRefs = 0;
htmlFiles.forEach(h => {
  const t = fs.readFileSync(path.join(root, h), 'utf8');
  let m;
  while ((m = attrRe.exec(t))) {
    htmlRefs++;
    const fp = path.join(root, m[1]);
    if (!fs.existsSync(fp)) fail(h + ' references missing file: ' + m[1]);
  }
});
ok(`checked ${htmlRefs} local asset refs across ${htmlFiles.length} html files`);

// 6. inline images injected by common.js
['assets/images/logo.svg','assets/images/hero-truck.jpg','assets/images/about-repair-cover.jpeg'].forEach(f=>{
  if(!fs.existsSync(path.join(root,f))) fail('missing common asset '+f);
});

// 7. comparison images
['aconcn-flush.jpg','standard-composite.jpg','cast-iron-dark-ring.jpg'].forEach(f=>{
  const fp=path.join(root,'assets/images/comparison',f);
  if(!fs.existsSync(fp)) fail('missing comparison '+f);
});

console.log(errors === 0 ? '\n=== ALL STATIC CHECKS PASSED ===' : `\n=== ${errors} PROBLEMS ===`);
process.exit(errors === 0 ? 0 : 1);
