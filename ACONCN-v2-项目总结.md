# ACONCN v2 网站项目总结

## 项目概述

ACONCN v2 是欣东井盖厂（ACONCN）的品牌官方网站 + 管理后台重写项目。网站定位为 B2B 工业井盖制造商官网，面向全球基础设施项目客户，展示复合材料井盖产品及企业实力。

**域名**: aconcn.com  
**本地地址**: http://localhost:8001  
**后台地址**: http://localhost:8001/admin/index.html  
**默认账号**: admin / admin123

---

## 目录结构

```
aconcn-website-v2/
├── index.html              # 首页（Hero + 产品展示 + 企业优势）
├── about.html              # 关于我们
├── products.html           # 产品列表页
├── product-detail.html     # 产品详情页
├── certifications.html     # 认证资质
├── comparison.html         # 产品对比分析
├── news.html               # 新闻动态
├── contact.html            # 联系我们
│
├── admin/                  # 管理后台
│   ├── index.html          # 后台主页面（SPA 架构）
│   ├── login.html          # 后台登录页
│   ├── products.html       # 产品管理
│   ├── orders.html         # 订单管理
│   ├── customers.html      # 客户管理
│   ├── certifications.html # 证书管理
│   ├── news.html           # 新闻管理
│   ├── comparison.html     # 对比分析管理
│   ├── messages.html       # 留言管理
│   └── assets/
│       ├── css/admin.css   # 后台样式
│       └── js/admin.js     # 后台核心逻辑（~150KB）
│
├── assets/
│   ├── css/styles.css      # 前端样式
│   ├── js/site-data.js     # 前端数据加载
│   └── uploads/            # 上传文件存储
│
├── scripts/
│   └── import-products.js  # 产品批量导入脚本
│
├── server.js               # Node.js 本地服务器
├── start.bat               # 一键启动脚本
└── supabase-schema.sql     # 数据库建表脚本
```

---

## 技术栈

| 层级 | 技术 |
|------|------|
| 前端 | 原生 HTML + CSS + JavaScript（无框架） |
| 后端 | Node.js HTTP 静态文件服务器 |
| 数据库 | Supabase（PostgreSQL，RLS 行级安全策略） |
| 字体 | Inter（正文）、Oswald（标题） |
| 图标 | Font Awesome 6 |
| 进程管理 | PM2（开机自启守护） |
| 服务器端口 | 8001 |

---

## 功能模块

### 前端网站（7 个页面）

1. **首页** — Hero 大图、产品分类展示、企业数据统计、优势介绍、CTA 引导
2. **产品中心** — 产品网格展示，包含分类、承重等级筛选
3. **产品详情** — 单产品详细规格、参数、图片
4. **关于我们** — 公司简介、历史、工厂实力
5. **认证资质** — EN 124 等国际认证展示
6. **对比分析** — 复合材料 vs 铸铁井盖多维度对比
7. **新闻动态** — 企业新闻、行业资讯
8. **联系我们** — 联系表单 + 联系方式

### 管理后台（8 个模块）

- **仪表盘** — 数据概览、订单统计、最近活动
- **产品管理** — CRUD、分页（79 条示例数据）、搜索、图片上传
- **订单管理** — 订单列表、状态追踪
- **客户管理** — 客户信息管理
- **证书管理** — 认证证书维护
- **新闻管理** — 新闻文章发布
- **对比管理** — 对比分析内容维护
- **留言管理** — 访客留言查看

后台特性：
- **中英文切换**（i18n 翻译系统，不刷新页面即时切换）
- **响应式侧边栏**（移动端可折叠）
- **分页功能**（每页 10 条，支持 Range 头解析）
- **Supabase 云端同步** + 内置示例数据降级方案

---

## 数据存储

### 方案一：Supabase 云端（主方案）
- 数据库地址：`https://nutgspxepoguoxdicjqh.supabase.co`
- 表结构：`products`、`orders`、`customers`、`certifications`、`news`、`comparisons`、`messages`
- 行级安全策略（RLS）：公开读、管理员写
- 建表脚本：`supabase-schema.sql`

### 方案二：内置示例数据（降级方案）
- 后台内置 79 个产品、12 个订单等示例数据
- 网络请求失败时自动降级，保证功能可用

---

## 服务器运维

### 启动方式
1. **双击 `start.bat`** — 自动清理旧进程后启动
2. **PM2 进程守护** — `pm2 start server.js --name aconcn`
3. **开机自启** — 已配置 Windows 开机启动脚本（`shell:startup` 目录下的 `aconcn-pm2.vbs`）

### PM2 常用命令
```bash
pm2 list                 # 查看进程列表
pm2 logs aconcn          # 查看日志
pm2 restart aconcn       # 重启
pm2 stop aconcn          # 停止
pm2 resurrect            # 恢复所有进程（开机时自动执行）
```

---

## 产品体系

核心产品：**SMC/BMC 复合材料井盖**

| 承重等级 | 标准 | 适用范围 |
|---------|------|---------|
| D400 | EN 124 | 40吨，行车道 |
| E600 | EN 124 | 60吨，重型道路 |
| A15 | EN 124 | 15吨，人行道 |
| B125 | EN 124 | 12.5吨，人行道/小区 |

产品优势：比铸铁轻 70%、防盗（无回收价值）、防滑 Class 3、耐腐蚀、可定制颜色/LOGO

---

## 联系信息

- **电话**: +86 136 0303 8913
- **邮箱**: victor@aconcn.com
- **地址**: 中国广东省深圳市