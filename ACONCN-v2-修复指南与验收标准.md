# ACONCN v2 网站修复指南与验收标准

> **用途**：将此文档发给 AI 开发助手，按阶段顺序执行修复。每个问题包含「问题描述」「涉及文件」「修复步骤」「验收标准」四部分。
>
> **项目技术栈**：纯 HTML/CSS/JS（无框架）+ Supabase（数据库/Auth）+ Node.js 本地开发服务器
>
> **Supabase 项目地址**：`https://nutgspxepoguoxdicjqh.supabase.co`
>
> **Supabase Anon Key**：`sb_publishable_nJOFhl2P0vu_UlVchzDhMQ__dk7nJgM`

---

## 修复优先级总表

| 阶段 | 编号 | 问题 | 严重度 | 难度 |
|------|------|------|--------|------|
| 一 | V2-P1 | 前端不读 Supabase，读静态 JS 文件 | 致命 | 中 |
| 一 | V2-P2 | JWT 验证机制损坏，RLS 永远拒绝写操作 | 致命 | 中 |
| 一 | V2-P3 | contact_submissions 表缺失 + 密码明文存储 | 致命 | 小 |
| 二 | V2-P4 | 任何人可伪造订单（公开 INSERT 策略） | 高危 | 小 |
| 二 | V2-P5 | XSS 跨站脚本漏洞（innerHTML 不转义） | 高危 | 小 |
| 二 | V2-P6 | Supabase 密钥配置有占位符 fallback | 高危 | 小 |
| 三 | V2-P7 | 新闻详情页不存在 | 高危 | 中 |
| 三 | V2-P8 | 地址信息矛盾（河北 vs 深圳） | 中危 | 小 |
| 三 | V2-P9 | 地图是占位符 | 中危 | 小 |
| 三 | V2-P10 | 多语言切换是假的 | 中危 | 中 |
| 四 | V2-P11 | 导航/页脚代码重复 8 次 | 中危 | 中 |
| 四 | V2-P12 | 内联样式泛滥 | 中危 | 大 |
| 四 | V2-P13 | product-detail siteData 加载时序问题 | 低危 | 小 |
| 四 | V2-P14 | 服务器端口冲突处理仅限 Windows | 低危 | 小 |
| 五 | V2-P15 | Google Fonts CDN 未本地化 | 中危 | 小 |
| 五 | V2-P16 | 缺少 SEO 基础设施 | 中危 | 中 |
| 五 | V2-P17 | 缓存策略不合理 | 低危 | 小 |
| 五 | V2-P18 | 社交链接指向 # | 低危 | 小 |

---

# 第一阶段：接通数据流（致命问题）

> 不完成此阶段，其他所有修复都是表面功夫。这是整个项目的核心问题。

---

## V2-P1：前端数据源是静态 JS 文件，不是 Supabase

### 问题描述
前端 6 个页面全部从 `site-data.js` 中的静态 JavaScript 对象读取数据，不从 Supabase API 获取。后台管理员在 Supabase 中增删改数据后，前端看不到任何变化。

### 涉及文件
- `assets/js/site-data.js`（已改为 Supabase fetch，但部分页面仍直接引用 `siteData.xxx`）
- `index.html`
- `products.html`
- `product-detail.html`
- `certifications.html`
- `comparison.html`
- `news.html`

### 修复步骤

#### 步骤 1：确认 site-data.js 已正确连接 Supabase

`site-data.js` 已包含 `sbGet()` 函数和 `loadSiteData()` 函数，会从 Supabase API 获取数据并在失败时降级到 `DEFAULT_*` 静态数据。确认以下配置正确：

```javascript
const SUPABASE_URL = 'https://nutgspxepoguoxdicjqh.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_nJOFhl2P0vu_UlVchzDhMQ__dk7nJgM';
```

#### 步骤 2：修改 index.html

找到首页中直接引用 `siteData.products` 的代码，改为等待 `loadSiteData()` 完成后再渲染。

当前 `site-data.js` 已在 `DOMContentLoaded` 时自动调用 `loadSiteData().then(initPage)`，`initPage()` 会根据页面调用对应的渲染函数。确认每个 HTML 页面**不要**再有独立的 `siteData.products` 读取逻辑。

具体操作：
1. 在 `index.html` 中搜索 `siteData`，找到所有直接引用 `siteData.products` 的代码块
2. 删除这些独立的渲染逻辑，改为依赖 `site-data.js` 中的 `renderFeaturedProducts()` 函数
3. 确保 `index.html` 中有一个 `<div id="featured-products-grid">` 或 `class="featured-grid"` 的容器供渲染函数挂载

**示例修改前**（index.html 中的内联脚本）：
```javascript
// 删除这类直接读静态对象的代码
if (typeof siteData !== 'undefined' && siteData.products) {
    var featured = siteData.products.slice(0, 4);
    // ... 手动渲染
}
```

**修改后**：
```html
<!-- 只需要保留容器，渲染逻辑由 site-data.js 的 renderFeaturedProducts() 处理 -->
<div class="featured-grid" id="featured-products-grid"></div>
<!-- site-data.js 在 DOMContentLoaded 时自动加载并渲染 -->
```

#### 步骤 3：对 products.html 执行同样操作

1. 搜索 `siteData.products`，删除独立的读取和渲染逻辑
2. 确保有 `<div class="products-grid" id="products-grid"></div>` 容器
3. 确保有 `<div id="pagination"></div>` 容器
4. 渲染由 `site-data.js` 的 `renderProducts()` 处理

#### 步骤 4：对 product-detail.html 执行同样操作

1. 搜索 `siteData.products`，删除轮询逻辑（`setInterval` / `setTimeout` 检查 `siteData` 是否就绪的代码）
2. 确保有以下容器元素：
   - `id="loading-spinner"`（加载中状态）
   - `id="product-not-found"`（未找到状态）
   - `id="product-content"`（产品内容容器）
   - `id="product-title"`, `id="product-image"`, `id="product-name"`, `id="product-description"`, `id="product-price"`, `id="specs-body"`, `id="related-products-grid"` 等
3. 渲染由 `site-data.js` 的 `renderProductDetail()` 处理

#### 步骤 5：对 certifications.html 执行同样操作

1. 删除独立的 `siteData.certifications.forEach(...)` 渲染逻辑
2. 确保有 `<div class="certs-grid" id="certifications-grid"></div>` 容器
3. 渲染由 `site-data.js` 的 `renderCertifications()` 处理

#### 步骤 6：对 comparison.html 执行同样操作

1. 删除独立的 `siteData.comparisons` 渲染逻辑
2. 确保有 `<table id="comparison-table"><tbody></tbody></table>` 容器
3. 渲染由 `site-data.js` 的 `renderComparisons()` 处理

#### 步骤 7：对 news.html 执行同样操作

1. 删除独立的 `siteData.news` 渲染逻辑
2. 确保有 `<div class="news-grid" id="news-grid"></div>` 容器和 `<div id="news-pagination"></div>` 容器
3. 渲染由 `site-data.js` 的 `renderNews()` 处理

### 验收标准

1. **[数据连通测试]** 在 Supabase Dashboard 中修改一条产品的 `name` 字段（如把 "D400 Composite Manhole Cover" 改为 "D400 Composite Manhole Cover - Updated"），刷新前端 products.html，产品名称必须显示修改后的值
2. **[首页测试]** index.html 的 Featured Products 区域显示的是 Supabase `products` 表中的前 4 条数据
3. **[详情页测试]** 在 products.html 点击 "Details" 跳转到 product-detail.html?id=X，页面正确显示该产品的详细信息（名称、图片、描述、价格、规格表、相关产品）
4. **[认证页测试]** certifications.html 显示 Supabase `certifications` 表中的所有 `status='active'` 记录
5. **[对比页测试]** comparison.html 的表格行数等于 Supabase `comparisons` 表中的记录数
6. **[新闻页测试]** news.html 显示 Supabase `news` 表中 `status='published'` 的记录，按 `date` 降序排列
7. **[降级测试]** 断网或 Supabase 不可达时，页面仍能显示 `site-data.js` 中的 `DEFAULT_*` 默认数据，不出现空白或报错
8. **[无重复逻辑]** 6 个 HTML 文件中不再包含独立的 `siteData.xxx` 读取和渲染代码，所有渲染统一由 `site-data.js` 的 `initPage()` 分发

---

## V2-P2：Supabase JWT 验证机制损坏

### 问题描述
`supabase-schema.sql` 中的 `verify_admin_password()` 函数生成的 "JWT" 是一个纯 hex 哈希字符串，不是合法的 JWT 格式（`header.payload.signature`）。Supabase 的 `auth.jwt()` 无法解析它，导致所有 RLS 策略中 `auth.jwt() ->> 'role' = 'admin'` 永远返回 false，后台所有写操作被拒绝。

### 涉及文件
- `supabase-schema.sql`
- `admin/login.html`（登录页面）
- `admin/assets/js/admin.js`（后台管理逻辑，未上传但需改造）

### 修复步骤

#### 步骤 1：在 Supabase Dashboard 中创建管理员用户

1. 登录 Supabase Dashboard → Authentication → Users
2. 点击 "Add user" → "Create new user"
3. 填入管理员邮箱（如 `admin@aconcn.com`）和密码（替换原来的 `admin123`）
4. 勾选 "Auto Confirm User"（自动确认邮箱）
5. 记录邮箱和密码

#### 步骤 2：修改 supabase-schema.sql

删除 `admin_users` 表和 `verify_admin_password` 函数，改为使用 Supabase Auth：

```sql
-- 删除旧的 admin_users 表和验证函数
DROP FUNCTION IF EXISTS verify_admin_password(TEXT, TEXT);
DROP TABLE IF EXISTS admin_users;

-- 更新所有 RLS 策略，使用 Supabase Auth 的标准 JWT
-- auth.jwt() 在用户通过 Supabase Auth 登录后会自动包含用户信息
-- 用 auth.uid() IS NOT NULL 判断是否已登录

-- products 表写权限（已登录用户）
DROP POLICY IF EXISTS "products_admin_insert" ON products;
DROP POLICY IF EXISTS "products_admin_update" ON products;
DROP POLICY IF EXISTS "products_admin_delete" ON products;

CREATE POLICY "products_admin_insert" ON products
  FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "products_admin_update" ON products
  FOR UPDATE TO authenticated USING (true);

CREATE POLICY "products_admin_delete" ON products
  FOR DELETE TO authenticated USING (true);

-- certifications 表写权限
DROP POLICY IF EXISTS "certs_admin_all" ON certifications;
CREATE POLICY "certs_admin_all" ON certifications
  FOR ALL TO authenticated USING (true);

-- news 表写权限
DROP POLICY IF EXISTS "news_admin_all" ON news;
CREATE POLICY "news_admin_all" ON news
  FOR ALL TO authenticated USING (true);

-- comparisons 表写权限
DROP POLICY IF EXISTS "comparisons_admin_all" ON comparisons;
CREATE POLICY "comparisons_admin_all" ON comparisons
  FOR ALL TO authenticated USING (true);

-- orders 表写权限
DROP POLICY IF EXISTS "orders_admin_all" ON orders;
CREATE POLICY "orders_admin_all" ON orders
  FOR ALL TO authenticated USING (true);

-- customers 表写权限
DROP POLICY IF EXISTS "customers_admin_all" ON customers;
CREATE POLICY "customers_admin_all" ON customers
  FOR ALL TO authenticated USING (true);
```

> **说明**：用 `TO authenticated` 替代 `auth.jwt() ->> 'role' = 'admin'`。Supabase Auth 的 `authenticated` 角色表示用户已登录，其 JWT 能被 `auth.jwt()` 正确解析。

#### 步骤 3：修改 admin/login.html 的登录逻辑

将登录表单的处理逻辑改为使用 Supabase Auth SDK：

```javascript
// 登录页面引入 Supabase JS SDK（已有）
// <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

// 创建 Supabase 客户端
const supabaseClient = supabase.createClient(
  'https://nutgspxepoguoxdicjqh.supabase.co',
  'sb_publishable_nJOFhl2P0vu_UlVchzDhMQ__dk7nJgM'
);

// 登录表单提交
document.getElementById('login-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  var username = document.getElementById('username').value.trim();
  var password = document.getElementById('password').value.trim();

  // 如果 username 不是邮箱格式，自动补充邮箱后缀
  if (!username.includes('@')) {
    username = username + '@aconcn.com';
  }

  var { data, error } = await supabaseClient.auth.signInWithPassword({
    email: username,
    password: password
  });

  if (error) {
    document.getElementById('error-message').style.display = 'block';
    return;
  }

  // 登录成功，存储 session
  localStorage.setItem('sb_session', JSON.stringify(data.session));
  window.location.href = 'dashboard.html';
});
```

#### 步骤 4：修改后台所有页面的认证检查

在后台每个页面的 JS 中，添加认证检查：

```javascript
// 检查登录状态
async function checkAuth() {
  const { data: { session } } = await supabaseClient.auth.getSession();
  if (!session) {
    window.location.href = 'login.html';
    return null;
  }
  return session;
}

// 在页面加载时调用
checkAuth().then(function(session) {
  if (session) {
    // 初始化后台页面
    initAdmin();
  }
});

// 登出功能
async function logout() {
  await supabaseClient.auth.signOut();
  localStorage.removeItem('sb_session');
  window.location.href = 'login.html';
}
```

#### 步骤 5：修改后台 CRUD 操作的请求头

所有对 Supabase 的写操作请求，Authorization 头使用当前 session 的 access_token：

```javascript
async function sbAuthFetch(table, method, body) {
  const { data: { session } } = await supabaseClient.auth.getSession();
  if (!session) {
    window.location.href = 'login.html';
    return null;
  }

  var res = await fetch(SUPABASE_URL + '/rest/v1/' + table, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'apikey': SUPABASE_ANON_KEY,
      'Authorization': 'Bearer ' + session.access_token,
      'Prefer': method === 'POST' ? 'return=minimal' : 'return=representation'
    },
    body: body ? JSON.stringify(body) : undefined
  });

  return res;
}
```

### 验收标准

1. **[登录测试]** 在 admin/login.html 输入 Supabase Auth 中创建的管理员邮箱和密码，能成功登录并跳转到 dashboard.html
2. **[错误密码测试]** 输入错误密码时，显示错误提示信息，不跳转
3. **[写操作测试]** 登录后在后台添加一条新产品，Supabase Dashboard 中 products 表出现新记录
4. **[RLS 测试]** 未登录状态下，直接用 curl 或 Postman 向 Supabase API 发送 POST 请求创建产品，返回 401 或 403 错误
5. **[Session 持久化测试]** 登录后关闭浏览器标签页，重新打开后台页面，不需要重新登录（session 仍在有效期内）
6. **[登出测试]** 点击登出按钮后，再次访问后台页面会被重定向到 login.html
7. **[无旧代码]** `supabase-schema.sql` 中不再包含 `admin_users` 表和 `verify_admin_password` 函数

---

## V2-P3：contact_submissions 表缺失 + 密码明文存储

### 问题描述
**问题 A**：前端 `contact.html` 向 `/rest/v1/contact_submissions` POST 数据，但 `supabase-schema.sql` 中没有建这张表，提交会报 404。
**问题 B**：管理员密码 `admin123` 以明文存储在 `admin_users` 表中。

### 涉及文件
- `supabase-schema.sql`
- `contact.html`（第 336-377 行的表单提交逻辑）

### 修复步骤

#### 步骤 1：在 supabase-schema.sql 中添加 contact_submissions 表

```sql
-- 10. contact_submissions 表（联系表单提交）
CREATE TABLE IF NOT EXISTS contact_submissions (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL DEFAULT '',
  email TEXT NOT NULL DEFAULT '',
  phone TEXT DEFAULT '',
  company TEXT DEFAULT '',
  product TEXT DEFAULT '',
  message TEXT NOT NULL DEFAULT '',
  status TEXT DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- 匿名用户只能 INSERT（提交表单）
CREATE POLICY "contact_submissions_public_insert" ON contact_submissions
  FOR INSERT WITH CHECK (true);

-- 已登录管理员可以查看和管理
CREATE POLICY "contact_submissions_admin_select" ON contact_submissions
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "contact_submissions_admin_update" ON contact_submissions
  FOR UPDATE TO authenticated USING (true);

CREATE POLICY "contact_submissions_admin_delete" ON contact_submissions
  FOR DELETE TO authenticated USING (true);
```

#### 步骤 2：修复 contact.html 中的 Supabase 配置

将第 336-337 行的占位符 fallback 改为直接使用配置值：

```javascript
// 修改前
var supabaseUrl = (typeof siteData !== 'undefined' && siteData.supabaseUrl)
    ? siteData.supabaseUrl : 'https://your-project.supabase.co';
var supabaseKey = (typeof siteData !== 'undefined' && siteData.supabaseKey)
    ? siteData.supabaseKey : '';

// 修改后
var supabaseUrl = 'https://nutgspxepoguoxdicjqh.supabase.co';
var supabaseKey = 'sb_publishable_nJOFhl2P0vu_UlVchzDhMQ__dk7nJgM';

if (!supabaseUrl || !supabaseKey) {
  document.getElementById('form-error-msg').style.display = 'block';
  document.getElementById('form-error-msg').textContent = 'Configuration error. Please contact us directly.';
  return;
}
```

#### 步骤 3：密码明文问题已在 V2-P2 中解决

通过使用 Supabase Auth 替代手写密码验证，`admin_users` 表被删除，不再有明文密码存储问题。

### 验收标准

1. **[建表测试]** 在 Supabase SQL Editor 中执行更新后的 `supabase-schema.sql`，无报错，`contact_submissions` 表出现在 Table Editor 中
2. **[表单提交测试]** 在 contact.html 填写表单并提交，Supabase Dashboard 中 `contact_submissions` 表出现新记录，字段值与表单输入一致
3. **[字段完整性测试]** 提交的记录包含以下字段：`name`, `email`, `phone`, `company`, `product`, `message`, `created_at`，无 null 或缺失
4. **[成功提示测试]** 表单提交成功后，页面显示成功提示信息（`form-success` 元素可见），表单重置
5. **[失败提示测试]** 模拟网络错误或 Supabase 不可达时，页面显示错误提示信息（`form-error-msg` 元素可见）
6. **[无明文密码]** `supabase-schema.sql` 中不再包含 `admin_users` 表和明文密码 `admin123`

---

# 第二阶段：修补安全漏洞（高危问题）

---

## V2-P4：任何人可伪造订单

### 问题描述
`supabase-schema.sql` 第 56-57 行的 `orders_public_insert` 策略允许任何匿名用户向 orders 表插入任意数据。

### 涉及文件
- `supabase-schema.sql`

### 修复步骤

在 `supabase-schema.sql` 中删除公开 INSERT 策略：

```sql
-- 删除这行
DROP POLICY IF EXISTS "orders_public_insert" ON orders;
-- 不创建替代策略，orders 表只有已登录管理员可以操作（orders_admin_all 策略已覆盖）
```

### 验收标准

1. **[RLS 测试]** 未登录状态下，用 curl 向 `POST /rest/v1/orders` 发送请求，返回 401 或 403
2. **[管理员测试]** 登录后，后台可以正常创建、查看、修改、删除订单
3. **[SQL 验证]** `supabase-schema.sql` 中不存在 `orders_public_insert` 策略

---

## V2-P5：XSS 跨站脚本漏洞

### 问题描述
所有页面通过 `innerHTML` 插入数据库读取的文本（产品名称、描述、新闻标题等），未做 HTML 转义。攻击者在后台输入 `<script>alert('xss')</script>` 作为产品名，前端会执行该脚本。

### 涉及文件
- `assets/js/site-data.js`（所有 `renderXxx` 函数中的 `innerHTML` 赋值）
- 各 HTML 页面中的内联渲染脚本（如果第一阶段已完成，这些应已被删除）

### 修复步骤

#### 步骤 1：在 site-data.js 顶部添加 escapeHtml 工具函数

```javascript
/* ---------- Utility: Escape HTML ---------- */
function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
```

#### 步骤 2：在所有 innerHTML 拼接处对动态数据调用 escapeHtml

修改 `site-data.js` 中所有 `renderXxx` 函数。以下是需要修改的关键位置：

**renderProducts() 中：**
```javascript
// 修改前
'<h3 class="product-card__name">' + product.name + '</h3>' +
'<p class="product-card__spec">' + (product.load_class || '') + (product.description ? ' — ' + product.description.substring(0, 60) : '') + '</p>' +

// 修改后
'<h3 class="product-card__name">' + escapeHtml(product.name) + '</h3>' +
'<p class="product-card__spec">' + escapeHtml(product.load_class || '') + (product.description ? ' — ' + escapeHtml(product.description.substring(0, 60)) : '') + '</p>' +
```

**renderFeaturedProducts() 中：** 同上处理

**renderProductDetail() 中：**
```javascript
// 所有通过 textContent 赋值的地方不需要转义（textContent 自动转义）
// 但通过 innerHTML 赋值的地方需要转义，例如：
if (title) title.innerHTML = escapeHtml(product.name) + ' <span>Detail</span>';

// specs 表格
tr.innerHTML = '<td style="font-weight:600">' + escapeHtml(key) + '</td><td>' + escapeHtml(val) + '</td>';

// 相关产品卡片中的 name、load_class 等也需要转义
```

**renderCertifications() 中：**
```javascript
'<h3 class="cert-card__title">' + escapeHtml(cert.name) + '</h3>' +
'<p class="cert-card__desc">' + escapeHtml(cert.description || '') + '</p>' +
```

**renderNews() 中：**
```javascript
'<h3 class="news-card__title">' + escapeHtml(article.title) + '</h3>' +
'<p class="news-card__summary">' + escapeHtml(article.summary || '') + '</p>' +
```

**renderComparisons() 中：**
```javascript
'<td>' + escapeHtml(item.feature) + '</td>' +
'<td>' + escapeHtml(item.composite) + '</td>' +
'<td>' + escapeHtml(item.cast_iron) + '</td>' +
```

#### 步骤 3：img src 和 a href 中的动态值也需要处理

```javascript
// img 标签的 alt 属性需要转义
'<img src="' + escapeHtml(product.image || 'assets/images/placeholder.jpg') + '" alt="' + escapeHtml(product.name) + '" loading="lazy">' +

// a 标签的 href 中用 encodeURIComponent 处理
'<a href="contact.html?product=' + encodeURIComponent(product.name) + '" class="btn btn-primary btn-sm">Inquiry</a>' +
```

### 验收标准

1. **[XSS 测试]** 在 Supabase Dashboard 中将一个产品的 `name` 字段改为 `<script>alert('xss')</script>`，刷新前端 products.html，页面不弹出 alert 框，产品名称显示为纯文本 `<script>alert('xss')</script>`
2. **[HTML 注入测试]** 将一个新闻的 `title` 改为 `<img src=x onerror=alert(1)>`，刷新 news.html，不触发 onerror 事件
3. **[正常显示测试]** 正常的产品名称、描述、新闻标题等仍然正确显示，特殊字符（如 `&`, `<`, `>`, `"`, `'`）显示为实体而非被解析为 HTML
4. **[代码检查]** `site-data.js` 中所有 `innerHTML` 拼接的动态变量都被 `escapeHtml()` 包裹

---

## V2-P6：Supabase 密钥配置有占位符 fallback

### 问题描述
`contact.html` 中 Supabase URL 和 Key 的 fallback 值是占位符（`your-project.supabase.co` 和空字符串），配置缺失时会静默失败而非报错。

### 涉及文件
- `contact.html`（第 336-337 行）
- `assets/js/site-data.js`（已正确配置，但需确认一致性）

### 修复步骤

此问题已在 V2-P3 步骤 2 中修复。确认所有使用 Supabase 配置的地方都直接使用正确值，不依赖 `siteData.supabaseUrl` 或 `siteData.supabaseKey`。

建议将 Supabase 配置统一放在 `site-data.js` 顶部的常量中，其他文件引用同一来源。

### 验收标准

1. **[配置检查]** 全局搜索 `your-project.supabase.co`，结果为 0
2. **[配置检查]** 全局搜索 `supabaseKey`，确认所有引用都指向 `site-data.js` 中的 `SUPABASE_ANON_KEY` 或直接使用该常量
3. **[一致性检查]** `contact.html` 和 `site-data.js` 中的 Supabase URL 和 Key 完全一致

---

# 第三阶段：功能补全

---

## V2-P7：新闻详情页不存在

### 问题描述
`news.html` 中 "Read More" 链接指向 `news.html?article=ID`，但页面上没有文章详情视图的代码，点击后只是重新加载列表页。

### 涉及文件
- `news.html`
- `assets/js/site-data.js`（添加 `renderNewsDetail()` 函数）

### 修复步骤

#### 步骤 1：在 news.html 中添加详情视图容器

在新闻列表容器之前或之后，添加一个默认隐藏的详情容器：

```html
<!-- 新闻列表视图 -->
<div id="news-list-view">
  <div class="news-grid" id="news-grid"></div>
  <div id="news-pagination"></div>
</div>

<!-- 新闻详情视图（默认隐藏）-->
<div id="news-detail-view" style="display:none;">
  <a href="news.html" class="btn btn-outline btn-sm" id="back-to-news">← Back to News</a>
  <article class="news-detail">
    <h1 id="news-detail-title"></h1>
    <div class="news-detail__meta">
      <span id="news-detail-date"></span>
      <span id="news-detail-category"></span>
    </div>
    <img id="news-detail-image" src="" alt="" style="max-width:100%;border-radius:12px;margin:24px 0;">
    <div id="news-detail-content" class="news-detail__content"></div>
  </article>
</div>
```

#### 步骤 2：在 site-data.js 中添加 renderNewsDetail() 函数

```javascript
/* ---------- renderNewsDetail ---------- */
function renderNewsDetail() {
  var articleId = getUrlParam('article');
  if (!articleId || !window.siteData.news) return false;

  var article = null;
  for (var i = 0; i < window.siteData.news.length; i++) {
    if (String(window.siteData.news[i].id) === String(articleId)) {
      article = window.siteData.news[i];
      break;
    }
  }

  if (!article) return false;

  // 隐藏列表视图，显示详情视图
  var listView = document.getElementById('news-list-view');
  var detailView = document.getElementById('news-detail-view');
  if (listView) listView.style.display = 'none';
  if (detailView) detailView.style.display = 'block';

  // 填充详情
  var titleEl = document.getElementById('news-detail-title');
  if (titleEl) titleEl.textContent = article.title;

  var dateEl = document.getElementById('news-detail-date');
  if (dateEl) dateEl.textContent = article.date || '';

  var catEl = document.getElementById('news-detail-category');
  if (catEl) catEl.textContent = article.category || '';

  var imgEl = document.getElementById('news-detail-image');
  if (imgEl) {
    imgEl.src = article.image || 'assets/images/placeholder.jpg';
    imgEl.alt = escapeHtml(article.title);
  }

  var contentEl = document.getElementById('news-detail-content');
  if (contentEl) {
    // 优先使用 content 字段，没有则用 summary
    contentEl.textContent = article.content || article.summary || '';
  }

  // 更新页面标题
  document.title = article.title + ' — ACONCN';

  return true;
}
```

#### 步骤 3：修改 initPage() 中的 news.html 分支

```javascript
// 在 site-data.js 的 initPage() 函数中
case 'news.html':
  // 先检查是否是详情视图
  if (!renderNewsDetail()) {
    // 不是详情视图，渲染列表
    renderNews(data.news);
  }
  break;
```

#### 步骤 4：确保 news 表有 content 字段

确认 `supabase-schema.sql` 中 `news` 表已有 `content TEXT DEFAULT ''` 字段（已有）。在后台管理中添加新闻时，应能编辑完整的 `content` 字段。

### 验收标准

1. **[详情页测试]** 在 news.html 点击任意新闻的 "Read More"，URL 变为 `news.html?article=X`，页面切换到详情视图，显示该新闻的标题、日期、分类、图片、内容
2. **[返回测试]** 在详情视图中点击 "Back to News"，URL 变回 `news.html`，页面切换回列表视图
3. **[无效 ID 测试]** 访问 `news.html?article=99999`（不存在的 ID），页面显示列表视图（详情视图不显示）
4. **[无参数测试]** 访问 `news.html`（无 article 参数），页面显示列表视图
5. **[内容显示测试]** 如果新闻记录有 `content` 字段，详情页显示完整 content；如果没有 content，则显示 summary

---

## V2-P8：地址信息矛盾

### 问题描述
`contact.html` 中地址是 "No. 188, Industrial Zone, Hebei Province, China"，项目总结中写的是 "中国广东省深圳市"。两处不一致。

### 涉及文件
- `contact.html`
- `about.html`（如有地址信息）
- `index.html`（footer 中如有地址信息）
- 所有包含地址信息的页面

### 修复步骤

1. 确认真实地址（需用户确认）
2. 全站统一为同一个地址
3. 如果工厂和办事处在不同地方，分别标注：如 "Factory: Hebei, China" / "Office: Shenzhen, China"

### 验收标准

1. **[一致性测试]** 全局搜索地址关键词（Hebei, Shenzhen, Industrial Zone），所有出现的地方信息一致
2. **[无矛盾]** 不存在两个不同的地址表述

---

## V2-P9：地图是占位符

### 问题描述
`contact.html` 的地图区域只有一个图标和文字，没有实际的地图嵌入。

### 涉及文件
- `contact.html`（地图区域，约第 177-189 行）

### 修复步骤

用 Google Maps iframe 替换占位符（面向海外客户）：

```html
<!-- 替换占位符地图区域 -->
<div class="contact-map" style="border-radius:12px;overflow:hidden;">
  <iframe
    src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
    width="100%"
    height="400"
    style="border:0;border-radius:12px;"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade">
  </iframe>
</div>
```

> **注意**：需要用户提供实际地址的 Google Maps embed 代码。在 Google Maps 中搜索地址 → Share → Embed a map → 复制 HTML 代码中的 `src` URL。

### 验收标准

1. **[地图显示测试]** contact.html 的地图区域显示可交互的 Google Maps（或百度地图），不是占位符图标
2. **[响应式测试]** 地图在手机端（375px 宽度）正常显示，不溢出
3. **[加载性能]** 地图 iframe 设置了 `loading="lazy"`

---

## V2-P10：多语言切换是假的

### 问题描述
所有页面的语言切换器 "EN | 中" 中的 "中" 链接指向 `href="#"`，点击无反应。没有中文翻译数据，没有语言切换逻辑。

### 涉及文件
- 所有 HTML 页面的导航栏
- `assets/js/site-data.js`（或新建 `assets/js/i18n.js`）

### 修复步骤

#### 方案 A：删除语言切换器（推荐，快速解决）

如果暂时不需要中文版，直接删除语言切换器，避免给用户错误的预期。

在所有 HTML 页面中找到以下代码并删除：

```html
<!-- 删除这类代码 -->
<div class="lang-switcher">
  <a href="#" class="active">EN</a>
  <span class="separator">|</span>
  <a href="#">中</a>
</div>
```

#### 方案 B：实现真正的多语言（工作量大）

1. 创建 `assets/js/i18n.js` 文件
2. 准备中英翻译数据对象
3. 所有带 `data-lang` 属性的元素根据语言切换更新文本
4. 用 `localStorage` 存储语言偏好
5. 语言切换器链接改为 `onclick="switchLang('zh')"` 和 `onclick="switchLang('en')"`

### 验收标准

**方案 A：**
1. **[删除检查]** 所有页面中不存在 `lang-switcher` 元素
2. **[无空链接]** 全局搜索 `href="#"`，结果为 0（或仅剩锚点链接）

**方案 B：**
1. **[切换测试]** 点击 "中"，页面文本切换为中文；点击 "EN"，切换回英文
2. **[持久化测试]** 切换语言后刷新页面，语言保持不变
3. **[data-lang 覆盖测试]** 所有带 `data-lang` 属性的元素都有对应的中英文翻译

---

# 第四阶段：代码质量优化

---

## V2-P11：导航/页脚代码重复 8 次

### 问题描述
Top bar + Navigation + Footer 的 HTML 代码（约 104 行）在每个页面完全重复。修改导航链接需要手动改 8 个文件。

### 涉及文件
- 所有 HTML 页面（index.html, products.html, about.html, news.html, certifications.html, comparison.html, contact.html, product-detail.html）
- 新建 `assets/js/common.js`

### 修复步骤

#### 步骤 1：创建 assets/js/common.js

```javascript
/* ---------- ACONCN v2 — Common Components ---------- */

// 注入 Top Bar
function injectTopBar() {
  var topBars = document.querySelectorAll('[data-include="top-bar"]');
  topBars.forEach(function(el) {
    el.innerHTML = `
      <div class="top-bar">
        <div class="container">
          <div class="top-bar__info">
            <a href="mailto:info@aconcn.com">
              <svg ...><!-- email icon --></svg>
              info@aconcn.com
            </a>
            <a href="tel:+86-xxx-xxxx-xxxx">
              <svg ...><!-- phone icon --></svg>
              +86 xxx xxxx xxxx
            </a>
          </div>
          <span class="top-bar__tagline">Industrial Composite Manhole Cover Manufacturer</span>
        </div>
      </div>
    `;
  });
}

// 注入 Navigation
function injectNav() {
  var navs = document.querySelectorAll('[data-include="nav"]');
  navs.forEach(function(el) {
    el.innerHTML = `
      <nav class="nav">
        <div class="container">
          <a href="index.html" class="nav__logo">
            <img src="assets/images/logo.png" alt="ACONCN" onerror="this.style.display='none'">
            <span class="nav__logo-text">ACON<span>CN</span></span>
          </a>
          <button class="nav__toggle" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
          <div class="nav__links">
            <a href="index.html">Home</a>
            <a href="products.html">Products</a>
            <a href="about.html">About</a>
            <a href="comparison.html">Comparison</a>
            <a href="certifications.html">Certifications</a>
            <a href="news.html">News</a>
            <a href="contact.html">Contact</a>
          </div>
        </div>
      </nav>
    `;
  });
}

// 注入 Footer
function injectFooter() {
  var footers = document.querySelectorAll('[data-include="footer"]');
  footers.forEach(function(el) {
    el.innerHTML = `
      <footer class="footer">
        <!-- 完整的 footer HTML -->
      </footer>
    `;
  });
}

// 初始化移动端菜单
function initMobileMenu() {
  var toggle = document.querySelector('.nav__toggle');
  var links = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', function() {
      toggle.classList.toggle('active');
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        toggle.classList.remove('active');
        links.classList.remove('open');
      });
    });
  }
}

// 初始化滚动揭示动画
function initScrollReveal() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('[data-reveal]').forEach(function(el) {
    observer.observe(el);
  });
}

// DOMContentLoaded 时初始化所有公共组件
document.addEventListener('DOMContentLoaded', function() {
  injectTopBar();
  injectNav();
  injectFooter();
  initMobileMenu();
  initScrollReveal();
});
```

#### 步骤 2：修改所有 HTML 页面

将每个页面中的 Top Bar、Navigation、Footer 的完整 HTML 替换为占位符：

```html
<!-- 替换约 104 行的完整导航代码为 -->
<div data-include="top-bar"></div>
<div data-include="nav"></div>

<!-- 页面内容 -->

<div data-include="footer"></div>

<!-- 引入 common.js -->
<script src="assets/js/common.js"></script>
```

#### 步骤 3：删除各页面中重复的内联脚本

删除每个 HTML 页面中重复的移动端菜单初始化和 IntersectionObserver 代码，这些已由 `common.js` 统一处理。

### 验收标准

1. **[功能测试]** 所有页面的导航栏和页脚正常显示，链接正确
2. **[移动端菜单测试]** 手机端汉堡菜单可以正常展开和收起
3. **[滚动动画测试]** 页面元素滚动进入视口时有淡入动画
4. **[修改测试]** 在 `common.js` 中修改一个导航链接文本，所有 8 个页面同步更新
5. **[代码量测试]** 每个 HTML 文件减少约 100 行重复代码
6. **[加载顺序测试]** `common.js` 在 `site-data.js` 之前加载，或确保 `common.js` 的 DOMContentLoaded 不阻塞 `site-data.js` 的数据加载

---

## V2-P12：内联样式泛滥

### 问题描述
大量 HTML 元素使用 `style="..."` 内联样式，导致无法统一修改风格、HTML 可读性差、无法复用样式。

### 涉及文件
- 所有 HTML 页面
- `assets/css/styles.css`

### 修复步骤

#### 步骤 1：扫描所有内联样式

搜索所有 HTML 文件中的 `style="` 属性，记录每种的重复模式。

#### 步骤 2：在 styles.css 中创建工具类

将高频重复的内联样式提取为 CSS 类：

```css
/* ========== Utility Classes ========== */

/* Grid 布局 */
.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-md); }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-md); }
.grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-md); }

/* Flex 布局 */
.flex-center { display: flex; align-items: center; justify-content: center; }
.flex-between { display: flex; align-items: center; justify-content: space-between; }
.flex-col { display: flex; flex-direction: column; }

/* 间距 */
.mt-sm { margin-top: var(--space-sm); }
.mt-md { margin-top: var(--space-md); }
.mt-lg { margin-top: var(--space-lg); }
.mb-sm { margin-bottom: var(--space-sm); }
.mb-md { margin-bottom: var(--space-md); }
.mb-lg { margin-bottom: var(--space-lg); }

/* 文本 */
.text-center { text-align: center; }
.text-accent { color: var(--color-accent); }
.text-muted { color: var(--color-text-muted); }

/* 响应式 */
@media (max-width: 768px) {
  .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }
}
```

#### 步骤 3：逐页替换内联样式

渐进式替换，每次处理一个页面：

```html
<!-- 修改前 -->
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:var(--space-md);margin-top:var(--space-lg)">

<!-- 修改后 -->
<div class="grid-3 mt-lg">
```

### 验收标准

1. **[内联样式减少]** 每个页面的内联 `style="` 数量减少 70% 以上
2. **[视觉一致性测试]** 替换后页面视觉效果与替换前完全一致
3. **[响应式测试]** 手机端布局正常，grid 列数正确降级为 1 列
4. **[可维护性测试]** 在 `styles.css` 中修改 `.grid-3` 的 gap 值，所有使用该类的页面同步更新

---

## V2-P13：product-detail.html 的 siteData 加载时序问题

### 问题描述
`product-detail.html` 使用轮询（每 100ms 检查一次 `siteData` 是否就绪，5 秒超时）来等待数据加载，这是不可靠的 hack。

### 涉及文件
- `product-detail.html`
- `assets/js/site-data.js`（`initPage()` 函数已通过 `DOMContentLoaded` → `loadSiteData()` → `initPage()` 链式调用处理）

### 修复步骤

此问题在 V2-P1 修复后自动解决。`site-data.js` 的 `initPage()` 在 `loadSiteData()` 完成后调用 `renderProductDetail()`，不再需要轮询。

确认 `product-detail.html` 中不存在 `setInterval` 或 `setTimeout` 轮询 `siteData` 的代码。如果存在，删除它们。

### 验收标准

1. **[无轮询代码]** `product-detail.html` 中不存在 `setInterval` 或 `setTimeout` 检查 `siteData` 的代码
2. **[快速渲染测试]** 从 products.html 点击产品进入详情页，产品信息在 1 秒内显示（取决于网络速度）
3. **[可靠渲染测试]** 连续刷新 10 次详情页，每次都能正确显示产品信息，不出现 "Product Not Found"

---

## V2-P14：服务器端口冲突处理仅限 Windows

### 问题描述
`server.js` 第 207-210 行使用 Windows 命令（`netstat -ano`, `findstr`, `taskkill`），在 Linux 上会报错。

### 涉及文件
- `server.js`（第 202-220 行）

### 修复步骤

修改端口冲突处理逻辑，支持跨平台：

```javascript
// Port conflict handling
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`Port ${PORT} in use. Attempting to free...`);
    const { execSync } = require('child_process');

    try {
      if (process.platform === 'win32') {
        // Windows
        const out = execSync(`netstat -ano | findstr :${PORT} | findstr LISTENING`, { encoding: 'utf8' }).trim();
        const pid = out.split(/\s+/).pop();
        if (pid) {
          execSync(`taskkill /F /PID ${pid}`, { stdio: 'ignore' });
          console.log(`Killed PID ${pid}. Restarting in 2s...`);
          setTimeout(() => { server.close(); server.listen(PORT, '0.0.0.0'); }, 2000);
        }
      } else if (process.platform === 'linux' || process.platform === 'darwin') {
        // Linux / macOS
        const out = execSync(`lsof -ti :${PORT}`, { encoding: 'utf8' }).trim();
        if (out) {
          execSync(`kill -9 ${out}`, { stdio: 'ignore' });
          console.log(`Killed PID ${out}. Restarting in 2s...`);
          setTimeout(() => { server.close(); server.listen(PORT, '0.0.0.0'); }, 2000);
        }
      }
    } catch (e) {
      console.error(`Failed to free port ${PORT}. Please kill the process manually and retry.`);
      console.error(`On Windows: netstat -ano | findstr :${PORT} → taskkill /F /PID <pid>`);
      console.error(`On Linux/Mac: lsof -i :${PORT} → kill -9 <pid>`);
    }
  } else {
    console.error('Server error:', err);
  }
});
```

### 验收标准

1. **[Windows 测试]** 在 Windows 上运行 server.js，端口被占用时能自动杀进程并重启
2. **[Linux 测试]** 在 Linux 上运行 server.js，端口被占用时能自动杀进程并重启（或至少不报错崩溃）
3. **[手动提示测试]** 自动杀进程失败时，控制台输出手动处理的方法提示

---

# 第五阶段：性能与 SEO

---

## V2-P15：Google Fonts CDN 未本地化

### 问题描述
所有页面从 Google Fonts CDN 加载 Inter + Oswald 字体，在中国大陆可能被墙或极慢。

### 涉及文件
- 所有 HTML 页面（`<head>` 中的字体加载标签）
- `assets/css/styles.css`（第 10 行的 `@import` 语句）
- 新建 `assets/fonts/` 目录

### 修复步骤

#### 步骤 1：下载字体文件

下载以下字体文件的 woff2 格式到 `assets/fonts/` 目录：
- Inter-Regular.woff2
- Inter-Medium.woff2
- Inter-SemiBold.woff2
- Inter-Bold.woff2
- Oswald-Regular.woff2
- Oswald-Medium.woff2
- Oswald-SemiBold.woff2
- Oswald-Bold.woff2

> 可以从 Google Fonts Helper (https://gwfh.mranftl.com/fonts) 下载。

#### 步骤 2：修改 styles.css

删除第 10 行的 `@import` 语句，替换为本地 `@font-face`：

```css
/* 删除这行 */
/* @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap'); */

/* 替换为 */
@font-face {
  font-family: 'Inter';
  src: url('../fonts/Inter-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Inter';
  src: url('../fonts/Inter-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Inter';
  src: url('../fonts/Inter-SemiBold.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Inter';
  src: url('../fonts/Inter-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Oswald';
  src: url('../fonts/Oswald-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Oswald';
  src: url('../fonts/Oswald-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Oswald';
  src: url('../fonts/Oswald-SemiBold.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Oswald';
  src: url('../fonts/Oswald-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

#### 步骤 3：修改所有 HTML 页面

删除 `<head>` 中的 Google Fonts 加载标签：

```html
<!-- 删除这类代码 -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap" media="print" onload="this.media='all'">
```

### 验收标准

1. **[无外部字体请求]** 打开浏览器开发者工具 → Network 标签，刷新页面，不存在对 `fonts.googleapis.com` 或 `fonts.gstatic.com` 的请求
2. **[字体显示测试]** 页面标题使用 Oswald 字体，正文使用 Inter 字体，视觉与之前一致
3. **[加载速度测试]** 页面首屏加载时间减少（对比修改前后的 Lighthouse Performance 分数）
4. **[离线测试]** 断网状态下页面字体正常显示（本地字体文件）

---

## V2-P16：缺少 SEO 基础设施

### 问题描述
所有页面缺少 Open Graph 标签、Twitter Card 标签、canonical 链接、JSON-LD 结构化数据。没有 sitemap.xml 和 robots.txt。

### 涉及文件
- 所有 HTML 页面的 `<head>` 部分
- 新建 `sitemap.xml`
- 新建 `robots.txt`

### 修复步骤

#### 步骤 1：为每个页面添加 SEO meta 标签

在每个 HTML 页面的 `<head>` 中添加（以 index.html 为例）：

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ACONCN — Industrial Composite Manhole Cover Manufacturer</title>
  <meta name="description" content="ACONCN manufactures EN 124 certified composite manhole covers, D400 to F900 load class. 70% lighter than cast iron, anti-theft, 30+ year lifespan.">
  <meta name="keywords" content="composite manhole cover, D400, E600, F900, EN 124, SMC, BMC, anti-theft, industrial cover">

  <!-- Canonical -->
  <link rel="canonical" href="https://aconcn.com/index.html">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="ACONCN — Industrial Composite Manhole Cover Manufacturer">
  <meta property="og:description" content="EN 124 certified composite manhole covers. 70% lighter than cast iron, anti-theft, 30+ year lifespan.">
  <meta property="og:image" content="https://aconcn.com/assets/images/og-cover.jpg">
  <meta property="og:url" content="https://aconcn.com/index.html">
  <meta property="og:site_name" content="ACONCN">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="ACONCN — Industrial Composite Manhole Cover Manufacturer">
  <meta name="twitter:description" content="EN 124 certified composite manhole covers. 70% lighter than cast iron, anti-theft, 30+ year lifespan.">
  <meta name="twitter:image" content="https://aconcn.com/assets/images/og-cover.jpg">
</head>
```

#### 步骤 2：在 index.html 中添加 JSON-LD 结构化数据

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ACONCN",
  "description": "Industrial composite manhole cover manufacturer",
  "url": "https://aconcn.com",
  "logo": "https://aconcn.com/assets/images/logo.png",
  "email": "info@aconcn.com",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "CN"
  }
}
</script>
```

在 products.html 中添加 Product 类型的 JSON-LD（可选，进阶）。

#### 步骤 3：创建 sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://aconcn.com/index.html</loc><priority>1.0</priority></url>
  <url><loc>https://aconcn.com/products.html</loc><priority>0.9</priority></url>
  <url><loc>https://aconcn.com/about.html</loc><priority>0.7</priority></url>
  <url><loc>https://aconcn.com/comparison.html</loc><priority>0.7</priority></url>
  <url><loc>https://aconcn.com/certifications.html</loc><priority>0.7</priority></url>
  <url><loc>https://aconcn.com/news.html</loc><priority>0.6</priority></url>
  <url><loc>https://aconcn.com/contact.html</loc><priority>0.8</priority></url>
</urlset>
```

#### 步骤 4：创建 robots.txt

```
User-agent: *
Allow: /
Sitemap: https://aconcn.com/sitemap.xml
```

### 验收标准

1. **[OG 测试]** 将页面 URL 粘贴到 Facebook 的 Sharing Debugger 或 opengraph.xyz，预览卡片正确显示标题、描述、图片
2. **[JSON-LD 测试]** 在 Google 的 Rich Results Test (search.google.com/test/rich-results) 中输入页面 URL，能识别 Organization 结构化数据
3. **[Canonical 测试]** 每个页面的 `<head>` 中有 `<link rel="canonical">` 标签，指向正确的 URL
4. **[Sitemap 测试]** 访问 `https://aconcn.com/sitemap.xml` 返回有效的 XML，包含所有 7 个页面 URL
5. **[Robots 测试]** 访问 `https://aconcn.com/robots.txt` 返回正确的 robots 文件，包含 sitemap 链接
6. **[Meta description 测试]** 每个页面都有唯一的 `<meta name="description">`，长度在 120-160 字符之间

---

## V2-P17：缓存策略不合理

### 问题描述
`server.js` 对所有静态资源设置 `max-age=0, must-revalidate`，每次请求都重新下载。

### 涉及文件
- `server.js`（第 94 行）

### 修复步骤

修改 `sendFile()` 函数的缓存策略：

```javascript
function sendFile(res, data, mime, filePath) {
  // HTML 文件不缓存，静态资源缓存 1 天
  var cacheControl;
  if (mime === 'text/html') {
    cacheControl = 'no-cache';
  } else {
    cacheControl = 'max-age=86400'; // 1 day
  }

  // ... 其余 gzip 和发送逻辑不变
}
```

### 验收标准

1. **[缓存测试]** 用浏览器开发者工具 → Network 标签，首次加载页面后刷新，CSS/JS/图片资源的 Status 显示 `304 Not Modified` 或 `(disk cache)`，不是 `200`
2. **[HTML 不缓存测试]** HTML 文件始终返回 `200`，Status Code 不含 `(disk cache)`，响应头包含 `Cache-Control: no-cache`
3. **[静态资源缓存测试]** CSS/JS/图片响应头包含 `Cache-Control: max-age=86400`

---

## V2-P18：社交链接指向 #

### 问题描述
页脚中的社交媒体链接（Facebook、LinkedIn、Twitter 等）的 `href` 都是 `#`，是空链接。

### 涉及文件
- 所有 HTML 页面的页脚部分（或 `common.js` 中的 footer 模板）

### 修复步骤

将社交链接的 `href` 替换为真实的社交媒体 URL。如果暂时没有社交媒体账号，删除这些链接。

```html
<!-- 修改前 -->
<a href="#" aria-label="Facebook">...</a>
<a href="#" aria-label="LinkedIn">...</a>
<a href="#" aria-label="Twitter">...</a>

<!-- 修改后（如果有账号）-->
<a href="https://www.facebook.com/aconcn" target="_blank" rel="noopener" aria-label="Facebook">...</a>
<a href="https://www.linkedin.com/company/aconcn" target="_blank" rel="noopener" aria-label="LinkedIn">...</a>
<a href="https://twitter.com/aconcn" target="_blank" rel="noopener" aria-label="Twitter">...</a>

<!-- 或删除（如果没有账号）-->
```

### 验收标准

1. **[无空链接]** 全局搜索 `href="#"`，结果为 0（或仅剩页面内锚点）
2. **[新标签页测试]** 社交链接设置了 `target="_blank"` 和 `rel="noopener"`
3. **[链接有效性测试]** 点击社交链接能打开对应的社交媒体页面（或链接已被删除）

---

# 全局验收标准

完成所有修复后，执行以下端到端测试：

## 数据流端到端测试

1. **[后台 → 前端]** 在后台添加一条新产品 → 前端 products.html 立即显示新产品
2. **[后台 → 前端]** 在后台修改一条产品的价格 → 前端 product-detail.html 显示新价格
3. **[后台 → 前端]** 在后台删除一条新闻 → 前端 news.html 不再显示该新闻
4. **[前端 → 后台]** 在 contact.html 提交联系表单 → 后台 messages 页面显示新消息
5. **[降级]** 断开网络 → 前端仍显示默认数据，不报错

## 安全测试

6. **[未授权写测试]** 未登录状态下用 curl 向 Supabase API 发送 POST/PUT/DELETE 请求 → 返回 401/403
7. **[XSS 测试]** 在产品名称中注入 `<script>alert(1)</script>` → 前端不执行脚本
8. **[订单伪造测试]** 未登录状态下用 curl 向 orders 表 POST → 返回 401/403

## 性能测试

9. **[Lighthouse 测试]** 首页 Lighthouse Performance 分数 ≥ 80
10. **[字体加载测试]** 无对 Google Fonts CDN 的外部请求
11. **[缓存测试]** 静态资源在二次加载时使用浏览器缓存

## SEO 测试

12. **[OG 预览测试]** 页面 URL 在社交媒体分享时有预览卡片
13. **[结构化数据测试]** Google Rich Results Test 能识别 Organization 数据
14. **[Sitemap 测试]** sitemap.xml 可访问且包含所有页面 URL

## 代码质量测试

15. **[无重复导航代码]** 导航和页脚由 common.js 统一注入，各页面不含完整导航 HTML
16. **[内联样式减少]** 各页面内联 style 数量减少 70%+
17. **[跨平台服务器]** server.js 在 Windows 和 Linux 上都能正常运行

---

# 附录：修改文件清单

| 文件 | 涉及问题 | 操作 |
|------|----------|------|
| `assets/js/site-data.js` | V2-P1, V2-P5, V2-P7, V2-P13 | 修改 |
| `supabase-schema.sql` | V2-P2, V2-P3, V2-P4 | 修改 |
| `admin/login.html` | V2-P2 | 修改 |
| `admin/assets/js/admin.js` | V2-P2 | 修改 |
| `admin/*.html`（所有后台页面） | V2-P2 | 修改 |
| `contact.html` | V2-P3, V2-P6, V2-P8, V2-P9 | 修改 |
| `index.html` | V2-P1, V2-P11, V2-P12, V2-P15, V2-P16 | 修改 |
| `products.html` | V2-P1, V2-P11, V2-P12, V2-P15, V2-P16 | 修改 |
| `product-detail.html` | V2-P1, V2-P11, V2-P12, V2-P13, V2-P15, V2-P16 | 修改 |
| `certifications.html` | V2-P1, V2-P11, V2-P12, V2-P15, V2-P16 | 修改 |
| `comparison.html` | V2-P1, V2-P11, V2-P12, V2-P15, V2-P16 | 修改 |
| `news.html` | V2-P1, V2-P7, V2-P11, V2-P12, V2-P15, V2-P16 | 修改 |
| `about.html` | V2-P8, V2-P11, V2-P12, V2-P15, V2-P16 | 修改 |
| `assets/css/styles.css` | V2-P12, V2-P15 | 修改 |
| `server.js` | V2-P14, V2-P17 | 修改 |
| `assets/js/common.js` | V2-P11 | 新建 |
| `assets/fonts/*.woff2` | V2-P15 | 新建 |
| `sitemap.xml` | V2-P16 | 新建 |
| `robots.txt` | V2-P16 | 新建 |
| 所有 HTML 页面的页脚 | V2-P18 | 修改 |

---

> **执行建议**：按阶段顺序执行（一 → 二 → 三 → 四 → 五），每个阶段完成后进行验收测试再进入下一阶段。第一阶段是整个项目的命脉，必须优先完成。
