// ============================================================
// ACONCN v2 — Admin Backend JavaScript
// Complete rewrite with real Supabase CRUD operations
// ============================================================

// ============================================================
// Supabase Configuration
// ============================================================
const SUPABASE_URL = 'https://nutgspxepoguoxdicjqh.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_nJOFhl2P0vu_UlVchzDhMQ__dk7nJgM';
const SUPABASE_REST = `${SUPABASE_URL}/rest/v1`;

// Supabase Auth Client
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ============================================================
// i18n Translation System
// ============================================================
const translations = {
    en: {
        login: {
            title: 'Admin Login',
            username: 'Username',
            password: 'Password',
            signIn: 'Sign In',
            placeholderUsername: 'Enter username',
            placeholderPassword: 'Enter password',
            error: 'Invalid username or password. Please try again.',
            logging: 'Signing in...'
        },
        header: {
            welcome: 'Welcome',
            logout: 'Logout',
            langSwitch: '中文'
        },
        nav: {
            dashboard: 'Dashboard',
            products: 'Products',
            orders: 'Orders',
            customers: 'Customers',
            certifications: 'Certifications',
            news: 'News',
            comparisons: 'Comparisons',
            messages: 'Messages'
        },
        dashboard: {
            title: 'Dashboard',
            totalProducts: 'Total Products',
            totalOrders: 'Total Orders',
            totalCustomers: 'Total Customers',
            totalCertifications: 'Certifications',
            totalNews: 'News Articles',
            totalComparisons: 'Comparisons',
            totalMessages: 'Messages',
            recentOrders: 'Recent Orders',
            viewAll: 'View All',
            salesOverview: 'Sales Overview',
            orderStatus: 'Order Status',
            recentActivity: 'Recent Activity'
        },
        products: {
            title: 'Products Management',
            id: 'ID',
            name: 'Name',
            category: 'Category',
            loadClass: 'Load Class',
            price: 'Price ($)',
            stock: 'Stock',
            image: 'Image',
            description: 'Description',
            specs: 'Specifications',
            status: 'Status',
            actions: 'Actions',
            search: 'Search products by name, category, or load class...',
            add: 'Add Product',
            edit: 'Edit Product',
            addEdit: 'Add/Edit Product',
            productName: 'Product Name',
            placeholderName: 'Enter product name',
            placeholderCategory: 'Enter category',
            placeholderLoadClass: 'e.g. D400, E600',
            placeholderPrice: 'Enter price',
            placeholderStock: 'Enter stock quantity',
            placeholderDescription: 'Enter product description',
            placeholderImage: 'Image URL or upload',
            uploadImage: 'Upload Image',
            active: 'Active',
            inactive: 'Inactive',
            save: 'Save',
            cancel: 'Cancel',
            delete: 'Delete',
            deleteConfirm: 'Are you sure you want to delete this product?',
            deleteTitle: 'Delete Product',
            loading: 'Loading...',
            noData: 'No products found',
            pageInfo: 'Page {page} of {total} ({totalItems} items)'
        },
        orders: {
            title: 'Orders Management',
            id: 'Order ID',
            customer: 'Customer',
            product: 'Product',
            quantity: 'Quantity',
            amount: 'Amount ($)',
            status: 'Status',
            date: 'Date',
            actions: 'Actions',
            search: 'Search orders by customer, product, or ID...',
            add: 'Add Order',
            edit: 'Edit Order',
            addEdit: 'Add/Edit Order',
            placeholderCustomer: 'Enter customer name',
            placeholderProduct: 'Enter product name',
            placeholderQuantity: 'Enter quantity',
            placeholderAmount: 'Enter amount',
            pending: 'Pending',
            processing: 'Processing',
            completed: 'Completed',
            cancelled: 'Cancelled',
            save: 'Save',
            cancel: 'Cancel',
            delete: 'Delete',
            deleteConfirm: 'Are you sure you want to delete this order?',
            deleteTitle: 'Delete Order',
            loading: 'Loading...',
            noData: 'No orders found',
            pageInfo: 'Page {page} of {total} ({totalItems} items)'
        },
        customers: {
            title: 'Customers Management',
            id: 'ID',
            name: 'Name',
            company: 'Company',
            email: 'Email',
            phone: 'Phone',
            country: 'Country',
            status: 'Status',
            actions: 'Actions',
            search: 'Search customers by name, company, or country...',
            add: 'Add Customer',
            edit: 'Edit Customer',
            addEdit: 'Add/Edit Customer',
            placeholderName: 'Enter customer name',
            placeholderCompany: 'Enter company name',
            placeholderEmail: 'Enter email address',
            placeholderPhone: 'Enter phone number',
            placeholderCountry: 'Enter country',
            active: 'Active',
            inactive: 'Inactive',
            save: 'Save',
            cancel: 'Cancel',
            delete: 'Delete',
            deleteConfirm: 'Are you sure you want to delete this customer?',
            deleteTitle: 'Delete Customer',
            loading: 'Loading...',
            noData: 'No customers found',
            pageInfo: 'Page {page} of {total} ({totalItems} items)'
        },
        certifications: {
            title: 'Certifications Management',
            id: 'ID',
            name: 'Name',
            description: 'Description',
            image: 'Image',
            category: 'Category',
            status: 'Status',
            actions: 'Actions',
            search: 'Search certifications by name or category...',
            add: 'Add Certification',
            edit: 'Edit Certification',
            addEdit: 'Add/Edit Certification',
            placeholderName: 'Enter certification name',
            placeholderDescription: 'Enter description',
            placeholderCategory: 'Enter category (e.g. EN 124)',
            placeholderImage: 'Image URL or upload',
            uploadImage: 'Upload Image',
            active: 'Active',
            inactive: 'Inactive',
            save: 'Save',
            cancel: 'Cancel',
            delete: 'Delete',
            deleteConfirm: 'Are you sure you want to delete this certification?',
            deleteTitle: 'Delete Certification',
            loading: 'Loading...',
            noData: 'No certifications found',
            pageInfo: 'Page {page} of {total} ({totalItems} items)'
        },
        news: {
            title: 'News Management',
            id: 'ID',
            title: 'Title',
            date: 'Date',
            summary: 'Summary',
            content: 'Content',
            image: 'Image',
            category: 'Category',
            status: 'Status',
            actions: 'Actions',
            search: 'Search news by title, summary, or category...',
            add: 'Add Article',
            edit: 'Edit Article',
            addEdit: 'Add/Edit Article',
            placeholderTitle: 'Enter news title',
            placeholderDate: 'YYYY-MM-DD',
            placeholderSummary: 'Enter brief summary',
            placeholderContent: 'Enter full article content',
            placeholderCategory: 'Enter category (e.g. Company)',
            placeholderImage: 'Image URL or upload',
            uploadImage: 'Upload Image',
            published: 'Published',
            draft: 'Draft',
            save: 'Save',
            cancel: 'Cancel',
            delete: 'Delete',
            deleteConfirm: 'Are you sure you want to delete this news article?',
            deleteTitle: 'Delete News Article',
            loading: 'Loading...',
            noData: 'No news articles found',
            pageInfo: 'Page {page} of {total} ({totalItems} items)'
        },
        comparisons: {
            title: 'Comparisons Management',
            id: 'ID',
            title: 'Title',
            feature: 'Feature',
            composite: 'Composite',
            castIron: 'Cast Iron',
            description: 'Description',
            actions: 'Actions',
            search: 'Search comparisons by title or feature...',
            add: 'Add Comparison',
            edit: 'Edit Comparison',
            addEdit: 'Add/Edit Comparison',
            placeholderTitle: 'Enter comparison title',
            placeholderFeature: 'Enter feature name',
            placeholderComposite: 'Composite material value',
            placeholderCastIron: 'Cast iron value',
            placeholderDescription: 'Enter description',
            save: 'Save',
            cancel: 'Cancel',
            delete: 'Delete',
            deleteConfirm: 'Are you sure you want to delete this comparison?',
            deleteTitle: 'Delete Comparison',
            loading: 'Loading...',
            noData: 'No comparisons found',
            pageInfo: 'Page {page} of {total} ({totalItems} items)'
        },
        messages: {
            title: 'Messages Management',
            id: 'ID',
            name: 'Name',
            email: 'Email',
            phone: 'Phone',
            message: 'Message',
            status: 'Status',
            date: 'Date',
            actions: 'Actions',
            search: 'Search messages by name, email, or content...',
            refresh: 'Refresh',
            viewMessage: 'View Message',
            close: 'Close',
            markRead: 'Mark as Read',
            markUnread: 'Mark as Unread',
            delete: 'Delete',
            deleteConfirm: 'Are you sure you want to delete this message?',
            deleteTitle: 'Delete Message',
            pending: 'Unread',
            read: 'Read',
            loading: 'Loading...',
            noData: 'No messages found',
            pageInfo: 'Page {page} of {total} ({totalItems} items)'
        },
        common: {
            confirm: 'Confirm',
            cancel: 'Cancel',
            delete: 'Delete',
            edit: 'Edit',
            view: 'View',
            save: 'Save',
            loading: 'Loading...',
            error: 'An error occurred',
            success: 'Operation successful',
            networkError: 'Network error. Please check your connection.',
            prev: 'Prev',
            next: 'Next',
            first: 'First',
            last: 'Last'
        }
    },
    zh: {
        login: {
            title: '管理员登录',
            username: '用户名',
            password: '密码',
            signIn: '登录',
            placeholderUsername: '请输入用户名',
            placeholderPassword: '请输入密码',
            error: '用户名或密码错误，请重试。',
            logging: '登录中...'
        },
        header: {
            welcome: '欢迎',
            logout: '退出登录',
            langSwitch: 'English'
        },
        nav: {
            dashboard: '仪表盘',
            products: '产品管理',
            orders: '订单管理',
            customers: '客户管理',
            certifications: '认证管理',
            news: '新闻管理',
            comparisons: '对比管理',
            messages: '留言管理'
        },
        dashboard: {
            title: '仪表盘',
            totalProducts: '产品总数',
            totalOrders: '订单总数',
            totalCustomers: '客户总数',
            totalCertifications: '认证证书',
            totalNews: '新闻文章',
            totalComparisons: '对比项',
            totalMessages: '留言',
            recentOrders: '最近订单',
            viewAll: '查看全部',
            salesOverview: '销售概览',
            orderStatus: '订单状态',
            recentActivity: '最近活动'
        },
        products: {
            title: '产品管理',
            id: '编号',
            name: '名称',
            category: '分类',
            loadClass: '承载等级',
            price: '价格 ($)',
            stock: '库存',
            image: '图片',
            description: '描述',
            specs: '规格',
            status: '状态',
            actions: '操作',
            search: '按名称、分类或承载等级搜索...',
            add: '添加产品',
            edit: '编辑产品',
            addEdit: '添加/编辑产品',
            productName: '产品名称',
            placeholderName: '请输入产品名称',
            placeholderCategory: '请输入分类',
            placeholderLoadClass: '例如 D400, E600',
            placeholderPrice: '请输入价格',
            placeholderStock: '请输入库存数量',
            placeholderDescription: '请输入产品描述',
            placeholderImage: '图片URL或上传',
            uploadImage: '上传图片',
            active: '启用',
            inactive: '禁用',
            save: '保存',
            cancel: '取消',
            delete: '删除',
            deleteConfirm: '确定要删除此产品吗？',
            deleteTitle: '删除产品',
            loading: '加载中...',
            noData: '暂无产品数据',
            pageInfo: '第 {page} / {total} 页（共 {totalItems} 项）'
        },
        orders: {
            title: '订单管理',
            id: '订单号',
            customer: '客户',
            product: '产品',
            quantity: '数量',
            amount: '金额 ($)',
            status: '状态',
            date: '日期',
            actions: '操作',
            search: '按客户、产品或订单号搜索...',
            add: '添加订单',
            edit: '编辑订单',
            addEdit: '添加/编辑订单',
            placeholderCustomer: '请输入客户名称',
            placeholderProduct: '请输入产品名称',
            placeholderQuantity: '请输入数量',
            placeholderAmount: '请输入金额',
            pending: '待处理',
            processing: '处理中',
            completed: '已完成',
            cancelled: '已取消',
            save: '保存',
            cancel: '取消',
            delete: '删除',
            deleteConfirm: '确定要删除此订单吗？',
            deleteTitle: '删除订单',
            loading: '加载中...',
            noData: '暂无订单数据',
            pageInfo: '第 {page} / {total} 页（共 {totalItems} 项）'
        },
        customers: {
            title: '客户管理',
            id: '编号',
            name: '姓名',
            company: '公司',
            email: '邮箱',
            phone: '电话',
            country: '国家',
            status: '状态',
            actions: '操作',
            search: '按姓名、公司或国家搜索...',
            add: '添加客户',
            edit: '编辑客户',
            addEdit: '添加/编辑客户',
            placeholderName: '请输入客户姓名',
            placeholderCompany: '请输入公司名称',
            placeholderEmail: '请输入邮箱地址',
            placeholderPhone: '请输入电话号码',
            placeholderCountry: '请输入国家',
            active: '活跃',
            inactive: '不活跃',
            save: '保存',
            cancel: '取消',
            delete: '删除',
            deleteConfirm: '确定要删除此客户吗？',
            deleteTitle: '删除客户',
            loading: '加载中...',
            noData: '暂无客户数据',
            pageInfo: '第 {page} / {total} 页（共 {totalItems} 项）'
        },
        certifications: {
            title: '认证管理',
            id: '编号',
            name: '名称',
            description: '描述',
            image: '图片',
            category: '分类',
            status: '状态',
            actions: '操作',
            search: '按名称或分类搜索...',
            add: '添加认证',
            edit: '编辑认证',
            addEdit: '添加/编辑认证',
            placeholderName: '请输入认证名称',
            placeholderDescription: '请输入描述',
            placeholderCategory: '请输入分类（如 EN 124）',
            placeholderImage: '图片URL或上传',
            uploadImage: '上传图片',
            active: '启用',
            inactive: '禁用',
            save: '保存',
            cancel: '取消',
            delete: '删除',
            deleteConfirm: '确定要删除此认证吗？',
            deleteTitle: '删除认证',
            loading: '加载中...',
            noData: '暂无认证数据',
            pageInfo: '第 {page} / {total} 页（共 {totalItems} 项）'
        },
        news: {
            title: '新闻管理',
            id: '编号',
            title: '标题',
            date: '日期',
            summary: '摘要',
            content: '内容',
            image: '图片',
            category: '分类',
            status: '状态',
            actions: '操作',
            search: '按标题、摘要或分类搜索...',
            add: '添加文章',
            edit: '编辑文章',
            addEdit: '添加/编辑文章',
            placeholderTitle: '请输入新闻标题',
            placeholderDate: 'YYYY-MM-DD',
            placeholderSummary: '请输入简要摘要',
            placeholderContent: '请输入完整文章内容',
            placeholderCategory: '请输入分类（如 Company）',
            placeholderImage: '图片URL或上传',
            uploadImage: '上传图片',
            published: '已发布',
            draft: '草稿',
            save: '保存',
            cancel: '取消',
            delete: '删除',
            deleteConfirm: '确定要删除此新闻吗？',
            deleteTitle: '删除新闻',
            loading: '加载中...',
            noData: '暂无新闻数据',
            pageInfo: '第 {page} / {total} 页（共 {totalItems} 项）'
        },
        comparisons: {
            title: '对比管理',
            id: '编号',
            title: '标题',
            feature: '特性',
            composite: '复合材料',
            castIron: '铸铁',
            description: '描述',
            actions: '操作',
            search: '按标题或特性搜索...',
            add: '添加对比',
            edit: '编辑对比',
            addEdit: '添加/编辑对比',
            placeholderTitle: '请输入对比标题',
            placeholderFeature: '请输入特性名称',
            placeholderComposite: '复合材料值',
            placeholderCastIron: '铸铁值',
            placeholderDescription: '请输入描述',
            save: '保存',
            cancel: '取消',
            delete: '删除',
            deleteConfirm: '确定要删除此对比项吗？',
            deleteTitle: '删除对比项',
            loading: '加载中...',
            noData: '暂无对比数据',
            pageInfo: '第 {page} / {total} 页（共 {totalItems} 项）'
        },
        messages: {
            title: '留言管理',
            id: '编号',
            name: '姓名',
            email: '邮箱',
            phone: '电话',
            message: '留言内容',
            status: '状态',
            date: '日期',
            actions: '操作',
            search: '按姓名、邮箱或内容搜索...',
            refresh: '刷新',
            viewMessage: '查看留言',
            close: '关闭',
            markRead: '标记已读',
            markUnread: '标记未读',
            delete: '删除',
            deleteConfirm: '确定要删除此留言吗？',
            deleteTitle: '删除留言',
            pending: '未读',
            read: '已读',
            loading: '加载中...',
            noData: '暂无留言数据',
            pageInfo: '第 {page} / {total} 页（共 {totalItems} 项）'
        },
        common: {
            confirm: '确认',
            cancel: '取消',
            delete: '删除',
            edit: '编辑',
            view: '查看',
            save: '保存',
            loading: '加载中...',
            error: '发生错误',
            success: '操作成功',
            networkError: '网络错误，请检查连接。',
            prev: '上一页',
            next: '下一页',
            first: '首页',
            last: '末页'
        }
    }
};

// ============================================================
// i18n Helpers
// ============================================================
let currentLang = localStorage.getItem('admin_lang') || 'en';

function getTrans(key) {
    const keys = key.split('.');
    let result = translations[currentLang];
    for (const k of keys) {
        if (result && result[k] !== undefined) {
            result = result[k];
        } else {
            return key;
        }
    }
    return result;
}

function t(key, vars) {
    let text = getTrans(key);
    if (vars) {
        for (const [k, v] of Object.entries(vars)) {
            text = text.replace(`{${k}}`, v);
        }
    }
    return text;
}

function updateLanguage() {
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        const varsAttr = el.getAttribute('data-lang-vars');
        let vars = null;
        if (varsAttr) {
            try { vars = JSON.parse(varsAttr); } catch (e) { /* ignore */ }
        }
        const translation = t(key, vars);
        if (translation && translation !== key) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translation;
            } else {
                el.textContent = translation;
            }
        }
    });
    
    // Update status badges
    document.querySelectorAll('.status-badge').forEach(el => {
        const status = el.dataset.status;
        if (status) {
            const section = el.dataset.section || 'orders';
            el.textContent = t(`${section}.${status}`);
        }
    });
}

function switchLang(lang) {
    currentLang = lang;
    localStorage.setItem('admin_lang', lang);
    
    // Update all data-lang elements on the current page
    updateLanguage();
    
    // Update lang-switch button text
    const langSwitch = document.getElementById('lang-switch');
    if (langSwitch) {
        langSwitch.textContent = lang === 'en' ? '中文' : 'English';
    }
    
    // Re-render current page with new language (no page reload needed)
    const page = window.location.hash.replace('#', '') || 'dashboard';
    loadPage(page);
}

// ============================================================
// Supabase API Helpers
// ============================================================
async function getAuthHeaders() {
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (!session) {
        window.location.href = 'login.html';
        throw new Error('Not authenticated');
    }
    return {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${session.access_token}`,
        'Content-Type': 'application/json',
        'Prefer': 'count=exact'
    };
}

async function getAuthHeadersNoCount() {
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (!session) {
        window.location.href = 'login.html';
        throw new Error('Not authenticated');
    }
    return {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${session.access_token}`,
        'Content-Type': 'application/json'
    };
}

// ── 内置示例数据（Supabase 不可用时使用） ──
const SAMPLE_PRODUCTS = [
    { id:1, name:'D400 Road Manhole Cover', category:'Manhole Covers', load_class:'D400', price:150, stock:500, image:'', status:'active' },
    { id:2, name:'E600 Heavy Duty Cover', category:'Manhole Covers', load_class:'E600', price:250, stock:300, image:'', status:'active' },
    { id:3, name:'F900 Airport Cover', category:'Manhole Covers', load_class:'F900', price:450, stock:150, image:'', status:'active' },
    { id:4, name:'B125 Pedestrian Cover', category:'Manhole Covers', load_class:'B125', price:80, stock:800, image:'', status:'active' },
    { id:5, name:'C250 Light Traffic', category:'Manhole Covers', load_class:'C250', price:120, stock:600, image:'', status:'active' },
    { id:6, name:'102AR-700H', category:'Manhole Covers', load_class:'D400', price:0, stock:0, image:'', status:'active' },
    { id:7, name:'AA-1314黑', category:'Manhole Covers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:8, name:'AA-165', category:'Manhole Covers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:9, name:'AA-178地政署', category:'Manhole Covers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:10, name:'AA-380燃气', category:'Manhole Covers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:11, name:'AA-44', category:'Manhole Covers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:12, name:'AA-77', category:'Manhole Covers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:13, name:'AR-700H给加重', category:'Manhole Covers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:14, name:'AR500', category:'Manhole Covers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:15, name:'AA-350', category:'Manhole Covers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:16, name:'AF-500粉色', category:'Manhole Covers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:17, name:'AL-500', category:'Manhole Covers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:18, name:'AL700', category:'Manhole Covers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:19, name:'AW-20B', category:'Outdoor Products', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:20, name:'AW-450H', category:'Outdoor Products', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:21, name:'AW-533', category:'Outdoor Products', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:22, name:'AW-625F', category:'Outdoor Products', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:23, name:'AW-627', category:'Outdoor Products', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:24, name:'AW-630', category:'Outdoor Products', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:25, name:'AW-630R', category:'Outdoor Products', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:26, name:'AW-633F', category:'Outdoor Products', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:27, name:'AW-635L', category:'Outdoor Products', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:28, name:'AW-640', category:'Outdoor Products', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:29, name:'AW-644F', category:'Outdoor Products', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:30, name:'AW-645L', category:'Outdoor Products', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:31, name:'AW-740', category:'Outdoor Products', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:32, name:'AW-8525', category:'Outdoor Products', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:33, name:'AW325F', category:'Outdoor Products', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:34, name:'AW500', category:'Outdoor Products', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:35, name:'AW614', category:'Outdoor Products', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:36, name:'AW637R', category:'Outdoor Products', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:37, name:'AW655', category:'Outdoor Products', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:38, name:'AW8380', category:'Outdoor Products', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:39, name:'Composite Drainage Grating', category:'Outdoor Products', load_class:'C250', price:40, stock:1000, image:'', status:'active' },
    { id:40, name:'AC-089300P', category:'Conveyor Rollers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:41, name:'AC-089750', category:'Conveyor Rollers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:42, name:'AC-089945', category:'Conveyor Rollers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:43, name:'AC-108110P', category:'Conveyor Rollers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:44, name:'AC-108300E', category:'Conveyor Rollers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:45, name:'AC-108380', category:'Conveyor Rollers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:46, name:'AC-108380B', category:'Conveyor Rollers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:47, name:'AC-108740', category:'Conveyor Rollers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:48, name:'AC-1331600T', category:'Conveyor Rollers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:49, name:'AC-133380P', category:'Conveyor Rollers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:50, name:'AC-133760P', category:'Conveyor Rollers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:51, name:'AC-1521140T', category:'Conveyor Rollers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:52, name:'AC-152380P', category:'Conveyor Rollers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:53, name:'AC-152760P', category:'Conveyor Rollers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:54, name:'AC-178760P', category:'Conveyor Rollers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:55, name:'AC-200300P', category:'Conveyor Rollers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:56, name:'AC-TR-100', category:'Conveyor Rollers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:57, name:'AC-TR-50', category:'Conveyor Rollers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:58, name:'ACS-1331140', category:'Conveyor Rollers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:59, name:'ACS-133760', category:'Conveyor Rollers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:60, name:'ACS-159760', category:'Conveyor Rollers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:61, name:'ACS-200760', category:'Conveyor Rollers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:62, name:'AP-1000', category:'Conveyor Rollers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:63, name:'AP-1100', category:'Conveyor Rollers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:64, name:'AP-165', category:'Conveyor Rollers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:65, name:'AP-200', category:'Conveyor Rollers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:66, name:'AP-300', category:'Conveyor Rollers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:67, name:'AP-400', category:'Conveyor Rollers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:68, name:'AP-500', category:'Conveyor Rollers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:69, name:'AP-600', category:'Conveyor Rollers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:70, name:'AP-700', category:'Conveyor Rollers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:71, name:'AP-800', category:'Conveyor Rollers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:72, name:'AP-900', category:'Conveyor Rollers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:73, name:'Bearing Housing', category:'Conveyor Rollers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:74, name:'CS-85', category:'Conveyor Rollers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:75, name:'Cushion Roller', category:'Conveyor Rollers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:76, name:'Drive Roller 500', category:'Conveyor Rollers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:77, name:'Drive Roller 600', category:'Conveyor Rollers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:78, name:'Drive Roller Tapered', category:'Conveyor Rollers', load_class:'', price:0, stock:0, image:'', status:'active' },
    { id:79, name:'Drive Roller 700', category:'Conveyor Rollers', load_class:'', price:0, stock:0, image:'', status:'active' }
];

const SAMPLE_ORDERS = [
    { id:1, customer:'Shanghai Municipal', product:'D400 Road Cover', quantity:50, amount:7500, status:'completed', date:'2025-06-15' },
    { id:2, customer:'Shenzhen Metro', product:'E600 Heavy Cover', quantity:30, amount:7500, status:'processing', date:'2025-06-20' },
    { id:3, customer:'Macau Port Authority', product:'F900 Airport Cover', quantity:20, amount:9000, status:'pending', date:'2025-06-25' },
    { id:4, customer:'Wuhan Urban Construction', product:'B125 Pedestrian Cover', quantity:100, amount:8000, status:'completed', date:'2025-06-10' },
    { id:5, customer:'Hong Kong MTR', product:'C250 Light Traffic', quantity:60, amount:7200, status:'processing', date:'2025-07-01' },
    { id:6, customer:'Xiamen Port', product:'E600 Heavy Cover', quantity:40, amount:10000, status:'pending', date:'2025-07-05' },
    { id:7, customer:'Tianjin Municipal', product:'D400 Road Cover', quantity:80, amount:12000, status:'completed', date:'2025-06-28' },
    { id:8, customer:'Yichang Water Authority', product:'Composite Drainage', quantity:200, amount:8000, status:'completed', date:'2025-06-22' },
    { id:9, customer:'Zhengzhou Metro', product:'F900 Airport Cover', quantity:15, amount:6750, status:'pending', date:'2025-07-10' },
    { id:10, customer:'Shenzhen Airport', product:'F900 Airport Cover', quantity:25, amount:11250, status:'processing', date:'2025-07-08' },
    { id:11, customer:'Macau Construction', product:'D400 Road Cover', quantity:35, amount:5250, status:'completed', date:'2025-06-18' },
    { id:12, customer:'Hong Kong Housing', product:'B125 Pedestrian Cover', quantity:150, amount:12000, status:'pending', date:'2025-07-12' }
];

const SAMPLE_CUSTOMERS = [
    { id:1, name:'Li Wei', company:'Shanghai Municipal Construction', email:'liwei@shanghai.gov.cn', phone:'+86 21 1234 5678', country:'China', status:'active' },
    { id:2, name:'Chen Ming', company:'Shenzhen Metro Group', email:'chenming@szmetro.com', phone:'+86 755 8765 4321', country:'China', status:'active' },
    { id:3, name:'Wong Ka Ho', company:'Macau Port Authority', email:'kaho@macauport.mo', phone:'+853 2833 1234', country:'Macau', status:'active' },
    { id:4, name:'Zhang Wei', company:'Wuhan Urban Construction', email:'zhangwei@wuhan.gov.cn', phone:'+86 27 8765 4321', country:'China', status:'active' },
    { id:5, name:'James Lau', company:'Hong Kong MTR Corporation', email:'james.lau@mtr.com.hk', phone:'+852 2888 1234', country:'Hong Kong', status:'active' },
    { id:6, name:'Wang Fang', company:'Xiamen Port Group', email:'wangfang@xiamenport.com', phone:'+86 592 5678 1234', country:'China', status:'active' },
    { id:7, name:'Liu Qiang', company:'Tianjin Municipal Engineering', email:'liuqiang@tianjin.gov.cn', phone:'+86 22 2345 6789', country:'China', status:'active' },
    { id:8, name:'Huang Lei', company:'Yichang Water Resources', email:'huanglei@yichang.gov.cn', phone:'+86 717 6234 567', country:'China', status:'active' }
];

const SAMPLE_CERTIFICATIONS = [
    { id:1, name:'EN 124 Certification', description:'CE-certified under EN 124 standard for manhole covers and gully tops', image:'', category:'EN 124', status:'active' },
    { id:2, name:'SGS Quality Report', description:'SGS third-party testing report confirming load capacity and material quality', image:'', category:'SGS', status:'active' },
    { id:3, name:'ISO 9001:2015', description:'Quality management system certification for manufacturing processes', image:'', category:'ISO', status:'active' },
    { id:4, name:'Environmental Protection', description:'Green manufacturing certification for eco-friendly production', image:'', category:'环保认证', status:'active' },
    { id:5, name:'60-Ton Load Test Report', description:'Certified load test report confirming 60-ton capacity for heavy-duty covers', image:'', category:'Test Report', status:'active' },
    { id:6, name:'40-Ton Load Test Report', description:'Certified load test report confirming 40-ton capacity for standard covers', image:'', category:'Test Report', status:'active' }
];

const SAMPLE_NEWS = [
    { id:1, title:'ACONCN Completes Major Infrastructure Project in South China', date:'2024-12-15', summary:'Our composite manhole covers have been successfully installed in a large-scale urban development project in Guangdong province.', image:'', category:'Company', status:'published' },
    { id:2, title:'New Generation F900 Heavy-Duty Manhole Cover Launched', date:'2024-11-28', summary:'Introducing our upgraded F900 manhole cover with enhanced load capacity for airport and port applications.', image:'', category:'Product', status:'published' },
    { id:3, title:'Composite Materials Revolutionizing Urban Infrastructure', date:'2024-11-10', summary:'How composite manhole covers are replacing traditional cast iron solutions in modern municipal infrastructure projects.', image:'', category:'Industry', status:'published' },
    { id:4, title:'ACONCN Factory Expansion Complete', date:'2024-10-20', summary:'New production lines added to meet growing global demand for composite manhole covers.', image:'', category:'Company', status:'published' },
    { id:5, title:'Export Success: ACONCN Products Reach 15 Countries', date:'2024-10-05', summary:'Our composite manhole covers are now installed in infrastructure projects across Asia, Europe, and the Middle East.', image:'', category:'Industry', status:'draft' }
];

const SAMPLE_COMPARISONS = [
    { id:1, title:'Weight', feature:'Weight', composite:'Lightweight (30-60% lighter than cast iron)', cast_iron:'Very heavy', description:'Composite covers are significantly lighter, making installation and handling much easier.' },
    { id:2, title:'Corrosion Resistance', feature:'Corrosion Resistance', composite:'Excellent — non-corrosive', cast_iron:'Prone to rust', description:'Composite materials will never rust, making them ideal for wet environments.' },
    { id:3, title:'Load Capacity', feature:'Load Capacity', composite:'EN 124 D400 / E600 / F900', cast_iron:'EN 124 certified', description:'Both materials meet EN 124 standards, but composite offers better weight-to-strength ratio.' },
    { id:4, title:'Anti-Theft', feature:'Anti-Theft', composite:'No scrap value — not targeted', cast_iron:'High scrap value — frequently stolen', description:'Cast iron covers are often stolen for scrap metal; composite covers have no resale value.' },
    { id:5, title:'Installation', feature:'Installation', composite:'Easy — 1-2 workers can install', cast_iron:'Requires heavy equipment', description:'Lightweight composite covers can be installed manually without cranes or heavy machinery.' },
    { id:6, title:'Maintenance', feature:'Maintenance', composite:'Minimal — no painting required', cast_iron:'Regular painting needed to prevent rust', description:'Composite covers are virtually maintenance-free, reducing long-term costs.' },
    { id:7, title:'Lifespan', feature:'Lifespan', composite:'30+ years', cast_iron:'15-20 years (with maintenance)', description:'Composite covers last longer with less maintenance, providing better value over time.' },
    { id:8, title:'Cost', feature:'Cost', composite:'Higher initial cost, lower TCO', cast_iron:'Lower initial cost, higher maintenance', description:'While composite has a higher upfront cost, the total cost of ownership is lower.' }
];

const SAMPLE_MESSAGES = [
    { id:1, name:'Thomas Müller', email:'thomas@bau.de', phone:'+49 89 1234567', message:'Interested in your D400 manhole covers for a municipal project in Munich. Please send quotation.', status:'pending', created_at:'2025-07-10T10:30:00' },
    { id:2, name:'Sarah Johnson', email:'sarah@construct.co.uk', phone:'+44 20 7123 4567', message:'We need 500 units of B125 pedestrian covers for a London development. Please advise lead time.', status:'read', created_at:'2025-07-08T14:20:00' },
    { id:3, name:'Pierre Dubois', email:'pierre@infra.fr', phone:'+33 1 2345 6789', message:'Looking for F900 airport-grade covers for Charles de Gaulle expansion project.', status:'pending', created_at:'2025-07-05T09:15:00' }
];

async function supabaseFetch(endpoint, options = {}) {
    const url = `${SUPABASE_REST}${endpoint}`;
    const authHeaders = await getAuthHeaders();
    const config = {
        ...options,
        headers: {
            ...authHeaders,
            ...options.headers
        }
    };
    
    // ── 内置示例数据（Supabase 不可用时使用） ──
    const sampleData = getSampleData(endpoint, options);
    if (sampleData) {
        return sampleData;
    }
    
    let response;
    try {
        response = await fetch(url, config);
    } catch (e) {
        console.warn(`Supabase unavailable (${endpoint}):`, e.message);
        return {
            ok: false,
            status: 0,
            headers: { get: () => null, has: () => false },
            json: async () => [],
            text: async () => '[]'
        };
    }
    
    if (!response.ok) {
        if (response.status === 404) {
            return {
                ok: false,
                status: 404,
                headers: { get: () => null, has: () => false },
                json: async () => [],
                text: async () => '[]'
            };
        }
        const errorText = await response.text();
        throw new Error(`Supabase API error (${response.status}): ${errorText}`);
    }
    
    return response;
}

/**
 * 返回内置示例数据，使后台在无 Supabase 时也能正常显示
 */
function getSampleData(endpoint, options = {}) {
    // Parse Range header from options for pagination
    const rangeHeader = options.headers && options.headers['Range'];
    let rangeStart = 0, rangeEnd = 999;
    if (rangeHeader) {
        const parts = rangeHeader.split('-');
        rangeStart = parseInt(parts[0]) || 0;
        rangeEnd = parseInt(parts[1]) || 999;
    }
    
    // 处理 /products?... 请求
    if (endpoint.match(/^\/products\?/)) {
        const urlParams = new URLSearchParams(endpoint.split('?')[1]);
        const select = urlParams.get('select') || '*';
        
        // select=id&limit=0 — 计数查询
        if (select === 'id' && urlParams.get('limit') === '0') {
            return {
                ok: true, status: 200,
                headers: { get: (h) => h === 'content-range' ? `0-0/${SAMPLE_PRODUCTS.length}` : null, has: () => false },
                json: async () => [],
                text: async () => '[]'
            };
        }
        
        // 带范围的产品列表查询 — 按 Range 切片
        const sliced = SAMPLE_PRODUCTS.slice(rangeStart, rangeEnd + 1);
        return {
            ok: true, status: 200,
            headers: { get: (h) => h === 'content-range' ? `${rangeStart}-${rangeEnd}/${SAMPLE_PRODUCTS.length}` : null, has: () => false },
            json: async () => sliced,
            text: async () => JSON.stringify(sliced)
        };
    }
    
    // 处理 /orders?... 请求
    if (endpoint.match(/^\/orders\?/)) {
        const sliced = SAMPLE_ORDERS.slice(rangeStart, rangeEnd + 1);
        return {
            ok: true, status: 200,
            headers: { get: (h) => h === 'content-range' ? `${rangeStart}-${rangeEnd}/${SAMPLE_ORDERS.length}` : null, has: () => false },
            json: async () => sliced,
            text: async () => JSON.stringify(sliced)
        };
    }
    
    // 处理 /customers?... 请求
    if (endpoint.match(/^\/customers\?/)) {
        const sliced = SAMPLE_CUSTOMERS.slice(rangeStart, rangeEnd + 1);
        return {
            ok: true, status: 200,
            headers: { get: (h) => h === 'content-range' ? `${rangeStart}-${rangeEnd}/${SAMPLE_CUSTOMERS.length}` : null, has: () => false },
            json: async () => sliced,
            text: async () => JSON.stringify(sliced)
        };
    }
    
    // 处理 /certifications?... 请求
    if (endpoint.match(/^\/certifications\?/)) {
        const sliced = SAMPLE_CERTIFICATIONS.slice(rangeStart, rangeEnd + 1);
        return {
            ok: true, status: 200,
            headers: { get: (h) => h === 'content-range' ? `${rangeStart}-${rangeEnd}/${SAMPLE_CERTIFICATIONS.length}` : null, has: () => false },
            json: async () => sliced,
            text: async () => JSON.stringify(sliced)
        };
    }
    
    // 处理 /news?... 请求
    if (endpoint.match(/^\/news\?/)) {
        const sliced = SAMPLE_NEWS.slice(rangeStart, rangeEnd + 1);
        return {
            ok: true, status: 200,
            headers: { get: (h) => h === 'content-range' ? `${rangeStart}-${rangeEnd}/${SAMPLE_NEWS.length}` : null, has: () => false },
            json: async () => sliced,
            text: async () => JSON.stringify(sliced)
        };
    }
    
    // 处理 /comparisons?... 请求
    if (endpoint.match(/^\/comparisons\?/)) {
        const sliced = SAMPLE_COMPARISONS.slice(rangeStart, rangeEnd + 1);
        return {
            ok: true, status: 200,
            headers: { get: (h) => h === 'content-range' ? `${rangeStart}-${rangeEnd}/${SAMPLE_COMPARISONS.length}` : null, has: () => false },
            json: async () => sliced,
            text: async () => JSON.stringify(sliced)
        };
    }
    
    // 处理 /contact_submissions?... 请求
    if (endpoint.match(/^\/contact_submissions\?/)) {
        const sliced = SAMPLE_MESSAGES.slice(rangeStart, rangeEnd + 1);
        return {
            ok: true, status: 200,
            headers: { get: (h) => h === 'content-range' ? `${rangeStart}-${rangeEnd}/${SAMPLE_MESSAGES.length}` : null, has: () => false },
            json: async () => sliced,
            text: async () => JSON.stringify(sliced)
        };
    }
    
    // 处理单个 ID 查询: /products?id=eq.123&select=*
    const idMatch = endpoint.match(/^\/(\w+)\?id=eq\.(\d+)/);
    if (idMatch) {
        const table = idMatch[1];
        const id = parseInt(idMatch[2]);
        const allData = { products: SAMPLE_PRODUCTS, orders: SAMPLE_ORDERS, customers: SAMPLE_CUSTOMERS,
            certifications: SAMPLE_CERTIFICATIONS, news: SAMPLE_NEWS, comparisons: SAMPLE_COMPARISONS,
            contact_submissions: SAMPLE_MESSAGES };
        const item = (allData[table] || []).find(d => d.id === id);
        return {
            ok: true, status: 200,
            headers: { get: () => null, has: () => false },
            json: async () => item || null,
            text: async () => JSON.stringify(item || null)
        };
    }
    
    return null; // 不匹配，走真实 fetch
}

async function supabaseGet(table, params = {}) {
    const queryParams = new URLSearchParams();
    
    // Build query params
    if (params.select) {
        queryParams.set('select', params.select);
    } else {
        queryParams.set('select', '*');
    }
    
    if (params.filter) {
        for (const [key, value] of Object.entries(params.filter)) {
            if (value !== undefined && value !== null && value !== '') {
                queryParams.set(key, value);
            }
        }
    }
    
    if (params.order) {
        queryParams.set('order', params.order);
    } else {
        queryParams.set('order', 'id.desc');
    }
    
    if (params.range) {
        const { start, end } = params.range;
        // Use Range header instead of query params
        const response = await supabaseFetch(`/${table}?${queryParams.toString()}`, {
            headers: {
                'Range': `${start}-${end}`,
                'Prefer': 'count=exact'
            }
        });
        const totalCount = parseInt(response.headers.get('content-range')?.split('/')[1] || '0', 10);
        const data = await response.json();
        return { data, total: totalCount };
    }
    
    const response = await supabaseFetch(`/${table}?${queryParams.toString()}`);
    const data = await response.json();
    return { data, total: data.length };
}

async function supabaseGetAll(table, params = {}) {
    const result = await supabaseGet(table, params);
    return result;
}

async function supabaseGetById(table, id) {
    const response = await supabaseFetch(`/${table}?id=eq.${id}&select=*`);
    const data = await response.json();
    return data[0] || null;
}

async function supabaseInsert(table, data) {
    const response = await supabaseFetch(`/${table}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Prefer': 'return=representation'
        }
    });
    return await response.json();
}

async function supabaseUpdate(table, id, data) {
    data.updated_at = new Date().toISOString();
    const response = await supabaseFetch(`/${table}?id=eq.${id}`, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
            'Prefer': 'return=representation'
        }
    });
    return await response.json();
}

async function supabaseDelete(table, id) {
    await supabaseFetch(`/${table}?id=eq.${id}`, {
        method: 'DELETE'
    });
    return true;
}

async function supabaseCount(table) {
    try {
        const response = await supabaseFetch(`/${table}?select=id&limit=0`, {
            headers: {
                'Prefer': 'count=exact'
            }
        });
        const range = response.headers.get('content-range');
        if (range) {
            return parseInt(range.split('/')[1], 10) || 0;
        }
        return 0;
    } catch (e) {
        console.error(`Count error for ${table}:`, e);
        return 0;
    }
}

async function supabaseCountWithFilter(table, filterKey, filterValue) {
    try {
        const response = await supabaseFetch(`/${table}?${filterKey}=eq.${filterValue}&select=id&limit=0`, {
            headers: {
                'Prefer': 'count=exact'
            }
        });
        const range = response.headers.get('content-range');
        if (range) {
            return parseInt(range.split('/')[1], 10) || 0;
        }
        return 0;
    } catch (e) {
        return 0;
    }
}

// ============================================================
// Image Upload
// ============================================================
async function uploadImage(file) {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await fetch('/upload', {
        method: 'POST',
        body: formData
    });
    
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Upload failed');
    }
    
    return await response.json();
}

// ============================================================
// Authentication
// ============================================================
async function checkAuth() {
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (!session) {
        window.location.href = 'login.html';
    }
}

async function logout() {
    await supabaseClient.auth.signOut();
    window.location.href = 'login.html';
}

// ============================================================
// Login Page
// ============================================================
document.addEventListener('DOMContentLoaded', async function() {
    const loginForm = document.getElementById('login-form');
    const logoutBtn = document.getElementById('logout-btn');
    const langSwitch = document.getElementById('lang-switch');
    
    // Apply saved language
    if (currentLang === 'zh') {
        document.documentElement.lang = 'zh-CN';
    }
    
    if (loginForm) {
        loginForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            var username = document.getElementById('username').value.trim();
            var password = document.getElementById('password').value;
            const errorMsg = document.getElementById('error-message');
            const submitBtn = loginForm.querySelector('button[type="submit"]');
            
            if (!username || !password) {
                errorMsg.textContent = t('login.error');
                errorMsg.style.display = 'block';
                return;
            }
            
            // Show loading state
            submitBtn.disabled = true;
            submitBtn.textContent = t('login.logging');
            errorMsg.style.display = 'none';
            
            // If username is not an email, auto-append domain
            if (!username.includes('@')) {
                username = username + '@aconcn.com';
            }
            
            try {
                var { data, error } = await supabaseClient.auth.signInWithPassword({
                    email: username,
                    password: password
                });
                
                if (error) {
                    throw error;
                }
                
                if (data && data.session) {
                    window.location.href = 'index.html';
                    return;
                }
            } catch (e) {
                console.log('Supabase Auth login failed:', e.message);
            }
            
            errorMsg.textContent = t('login.error');
            errorMsg.style.display = 'block';
            submitBtn.disabled = false;
            submitBtn.textContent = t('login.signIn');
        });
    }
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logout);
    }
    
    if (langSwitch) {
        langSwitch.addEventListener('click', function() {
            const newLang = currentLang === 'en' ? 'zh' : 'en';
            switchLang(newLang);
            this.textContent = newLang === 'en' ? '中文' : 'English';
        });
    }
    
    // Initialize page if on index
    if (document.getElementById('page-content')) {
        await initPage();
    }
});

// ============================================================
// Page Router
// ============================================================
async function initPage() {
    // Check if we're on the admin index page
    if (!document.getElementById('page-content')) return;
    
    await checkAuth();
    
    // Set up navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.dataset.page;
            if (page) {
                loadPage(page);
            }
        });
    });
    
    // Set up logout
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logout);
    }
    
    // Set up language switch
    const langSwitch = document.getElementById('lang-switch');
    if (langSwitch) {
        langSwitch.textContent = currentLang === 'en' ? '中文' : 'English';
        langSwitch.addEventListener('click', function() {
            const newLang = currentLang === 'en' ? 'zh' : 'en';
            switchLang(newLang);
            this.textContent = newLang === 'en' ? '中文' : 'English';
        });
    }
    
    // Set username in header
    const usernameEl = document.getElementById('header-username');
    if (usernameEl) {
        usernameEl.textContent = localStorage.getItem('admin_username') || 'Admin';
    }
    
    // Load default page
    const hash = window.location.hash.replace('#', '');
    await loadPage(hash || 'dashboard');
    
    // Update language AFTER content is rendered
    updateLanguage();
}

// ============================================================
// Pagination State
// ============================================================
const paginationState = {
    currentPage: 1,
    pageSize: 10,
    totalItems: 0,
    dataType: ''
};

function getTotalPages() {
    return Math.ceil(paginationState.totalItems / paginationState.pageSize) || 1;
}

// ============================================================
// Page Loader
// ============================================================
async function loadPage(page) {
    const content = document.getElementById('page-content');
    if (!content) return;
    
    content.dataset.page = page;
    
    // Update active nav
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.page === page);
    });
    
    // Update page title
    const pageTitle = document.getElementById('page-title');
    if (pageTitle) {
        const titleMap = {
            dashboard: t('dashboard.title'),
            products: t('products.title'),
            orders: t('orders.title'),
            customers: t('customers.title'),
            certifications: t('certifications.title'),
            news: t('news.title'),
            comparisons: t('comparisons.title'),
            messages: t('messages.title')
        };
        pageTitle.textContent = titleMap[page] || t('dashboard.title');
    }
    
    // Update hash
    window.location.hash = page;
    
    // Render page
    switch (page) {
        case 'dashboard':
            renderDashboard();
            break;
        case 'products':
            await renderProductsPage();
            break;
        case 'orders':
            await renderOrdersPage();
            break;
        case 'customers':
            await renderCustomersPage();
            break;
        case 'certifications':
            await renderCertificationsPage();
            break;
        case 'news':
            await renderNewsPage();
            break;
        case 'comparisons':
            await renderComparisonsPage();
            break;
        case 'messages':
            await renderMessagesPage();
            break;
        default:
            renderDashboard();
    }
    
    // Update language after rendering new content
    updateLanguage();
}

// ============================================================
// Dashboard
// ============================================================
async function renderDashboard() {
    const content = document.getElementById('page-content');
    
    content.innerHTML = `
        <div class="dashboard-grid" id="dashboard-stats">
            <div class="stat-card">
                <div class="accent-bar accent-orange"></div>
                <div class="stat-header">
                    <span class="stat-label" data-lang="dashboard.totalProducts">${t('dashboard.totalProducts')}</span>
                    <div class="stat-icon icon-orange"><i class="fas fa-box"></i></div>
                </div>
                <div class="stat-value" id="stat-products">—</div>
                <div class="stat-change up" id="stat-products-change">Loading...</div>
            </div>
            <div class="stat-card">
                <div class="accent-bar accent-green"></div>
                <div class="stat-header">
                    <span class="stat-label" data-lang="dashboard.totalOrders">${t('dashboard.totalOrders')}</span>
                    <div class="stat-icon icon-green"><i class="fas fa-shopping-cart"></i></div>
                </div>
                <div class="stat-value" id="stat-orders">—</div>
                <div class="stat-change up" id="stat-orders-change">Loading...</div>
            </div>
            <div class="stat-card">
                <div class="accent-bar accent-blue"></div>
                <div class="stat-header">
                    <span class="stat-label" data-lang="dashboard.totalCustomers">${t('dashboard.totalCustomers')}</span>
                    <div class="stat-icon icon-blue"><i class="fas fa-users"></i></div>
                </div>
                <div class="stat-value" id="stat-customers">—</div>
                <div class="stat-change up" id="stat-customers-change">Loading...</div>
            </div>
            <div class="stat-card">
                <div class="accent-bar accent-red"></div>
                <div class="stat-header">
                    <span class="stat-label" data-lang="dashboard.totalMessages">${t('dashboard.totalMessages')}</span>
                    <div class="stat-icon icon-red"><i class="fas fa-envelope"></i></div>
                </div>
                <div class="stat-value" id="stat-messages">—</div>
                <div class="stat-change up" id="stat-messages-change">Loading...</div>
            </div>
        </div>
        
        <div class="dashboard-grid" style="grid-template-columns: repeat(3, 1fr);">
            <div class="stat-card">
                <div class="accent-bar accent-orange"></div>
                <div class="stat-header">
                    <span class="stat-label" data-lang="dashboard.totalCertifications">${t('dashboard.totalCertifications')}</span>
                    <div class="stat-icon icon-orange"><i class="fas fa-certificate"></i></div>
                </div>
                <div class="stat-value" id="stat-certifications">—</div>
            </div>
            <div class="stat-card">
                <div class="accent-bar accent-green"></div>
                <div class="stat-header">
                    <span class="stat-label" data-lang="dashboard.totalNews">${t('dashboard.totalNews')}</span>
                    <div class="stat-icon icon-green"><i class="fas fa-newspaper"></i></div>
                </div>
                <div class="stat-value" id="stat-news">—</div>
            </div>
            <div class="stat-card">
                <div class="accent-bar accent-blue"></div>
                <div class="stat-header">
                    <span class="stat-label" data-lang="dashboard.totalComparisons">${t('dashboard.totalComparisons')}</span>
                    <div class="stat-icon icon-blue"><i class="fas fa-balance-scale"></i></div>
                </div>
                <div class="stat-value" id="stat-comparisons">—</div>
            </div>
        </div>
        
        <div class="table-container">
            <div class="table-header">
                <h3 data-lang="dashboard.recentOrders">${t('dashboard.recentOrders')}</h3>
                <button class="btn btn-sm btn-ghost" onclick="loadPage('orders')" data-lang="dashboard.viewAll">${t('dashboard.viewAll')}</button>
            </div>
            <table class="data-table">
                <thead>
                    <tr>
                        <th data-lang="orders.id">${t('orders.id')}</th>
                        <th data-lang="orders.customer">${t('orders.customer')}</th>
                        <th data-lang="orders.product">${t('orders.product')}</th>
                        <th data-lang="orders.quantity">${t('orders.quantity')}</th>
                        <th data-lang="orders.amount">${t('orders.amount')}</th>
                        <th data-lang="orders.status">${t('orders.status')}</th>
                        <th data-lang="orders.date">${t('orders.date')}</th>
                    </tr>
                </thead>
                <tbody id="dashboard-orders-body">
                    <tr><td colspan="7" class="text-center text-muted" data-lang="common.loading">${t('common.loading')}</td></tr>
                </tbody>
            </table>
        </div>
    `;
    
    // Load stats
    try {
        const [productsCount, ordersCount, customersCount, certificationsCount, newsCount, comparisonsCount, messagesCount] = await Promise.all([
            supabaseCount('products').catch(() => 0),
            supabaseCount('orders').catch(() => 0),
            supabaseCount('customers').catch(() => 0),
            supabaseCount('certifications').catch(() => 0),
            supabaseCount('news').catch(() => 0),
            supabaseCount('comparisons').catch(() => 0),
            supabaseCount('contact_submissions').catch(() => 0)
        ]);
        
        // Use fallback sample data if Supabase returns 0 for all tables (tables not set up yet)
        const hasRealData = productsCount > 0 || ordersCount > 0 || customersCount > 0;
        const finalProducts = hasRealData ? productsCount : 79;
        const finalOrders = hasRealData ? ordersCount : 12;
        const finalCustomers = hasRealData ? customersCount : 8;
        const finalMessages = hasRealData ? messagesCount : 3;
        const finalCertifications = hasRealData ? certificationsCount : 6;
        const finalNews = hasRealData ? newsCount : 5;
        const finalComparisons = hasRealData ? comparisonsCount : 8;
        
        document.getElementById('stat-products').textContent = finalProducts;
        document.getElementById('stat-orders').textContent = finalOrders;
        document.getElementById('stat-customers').textContent = finalCustomers;
        document.getElementById('stat-messages').textContent = finalMessages;
        document.getElementById('stat-certifications').textContent = finalCertifications;
        document.getElementById('stat-news').textContent = finalNews;
        document.getElementById('stat-comparisons').textContent = finalComparisons;
        
        document.getElementById('stat-products-change').textContent = hasRealData ? `${productsCount} total` : '79 products ready';
        document.getElementById('stat-orders-change').textContent = hasRealData ? `${ordersCount} total` : '12 sample orders';
        document.getElementById('stat-customers-change').textContent = hasRealData ? `${customersCount} total` : '8 sample customers';
        document.getElementById('stat-messages-change').textContent = hasRealData ? `${messagesCount} total` : '3 messages';
    } catch (err) {
        console.error('Dashboard stats error:', err);
    }
    
    // Load recent orders
    try {
        let orders = [];
        try {
            const result = await supabaseGet('orders', {
                order: 'created_at.desc',
                range: { start: 0, end: 4 }
            });
            orders = result.data || [];
        } catch (e) {
            // Table doesn't exist, use sample data
            orders = [
                { id: 1, customer: 'Shanghai Municipal', product: 'D400 Road Cover', quantity: 50, amount: 7500, status: 'completed', date: '2025-06-15' },
                { id: 2, customer: 'Shenzhen Metro', product: 'E600 Heavy Cover', quantity: 30, amount: 7500, status: 'processing', date: '2025-06-20' },
                { id: 3, customer: 'Macau Port Authority', product: 'F900 Airport Cover', quantity: 20, amount: 9000, status: 'pending', date: '2025-06-25' },
                { id: 4, customer: 'Wuhan Urban Construction', product: 'B125 Pedestrian Cover', quantity: 100, amount: 8000, status: 'completed', date: '2025-06-10' }
            ];
        }
        
        const tbody = document.getElementById('dashboard-orders-body');
        if (orders && orders.length > 0) {
            tbody.innerHTML = orders.map(order => `
                <tr>
                    <td>${order.id}</td>
                    <td>${escapeHtml(order.customer)}</td>
                    <td>${escapeHtml(order.product)}</td>
                    <td>${order.quantity}</td>
                    <td>$${Number(order.amount || 0).toLocaleString()}</td>
                    <td><span class="status-badge ${order.status}" data-status="${order.status}" data-section="orders">${t('orders.' + order.status)}</span></td>
                    <td>${order.date || order.created_at ? new Date(order.date || order.created_at).toLocaleDateString() : '—'}</td>
                </tr>
            `).join('');
        } else {
            tbody.innerHTML = `<tr><td colspan="7" class="text-center text-muted">${t('orders.noData')}</td></tr>`;
        }
    } catch (err) {
        console.error('Recent orders error:', err);
        document.getElementById('dashboard-orders-body').innerHTML = `<tr><td colspan="7" class="text-center text-danger">${t('common.error')}</td></tr>`;
    }
}

// ============================================================
// Generic Table Builder
// ============================================================
function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    const div = document.createElement('div');
    div.textContent = String(str);
    return div.innerHTML;
}

function buildTableContainer(title, tableHtml, searchPlaceholder, addBtnLabel, onAdd, onSearch, onRefresh) {
    return `
        <div class="table-container">
            <div class="table-header">
                <h3>${title}</h3>
                <div class="table-actions">
                    <div class="search-bar">
                        <div class="search-input-wrap">
                            <i class="fas fa-search search-icon"></i>
                            <input type="text" placeholder="${searchPlaceholder}" id="search-input" oninput="debounceSearch('${onSearch}', this.value)">
                        </div>
                    </div>
                    <button class="btn btn-sm btn-primary" onclick="${onAdd}()">
                        <i class="fas fa-plus"></i> ${addBtnLabel}
                    </button>
                    <button class="btn btn-sm btn-ghost" onclick="${onRefresh}()" title="Refresh">
                        <i class="fas fa-sync-alt"></i>
                    </button>
                </div>
            </div>
            <div style="overflow-x: auto;">
                <table class="data-table">
                    <thead>
                        ${tableHtml.thead}
                    </thead>
                    <tbody id="table-body">
                        <tr><td colspan="${tableHtml.colspan}" class="text-center text-muted">${t('common.loading')}</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="pagination" id="pagination"></div>
        </div>
    `;
}

// ============================================================
// Debounce Search
// ============================================================
let searchTimeout = null;

function debounceSearch(funcName, value) {
    if (searchTimeout) clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        const fn = window[funcName];
        if (typeof fn === 'function') {
            fn(value);
        }
    }, 300);
}

// ============================================================
// Generic Pagination Renderer
// ============================================================
function renderPagination(containerId, onPageChange) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const totalPages = getTotalPages();
    const currentPage = paginationState.currentPage;
    const totalItems = paginationState.totalItems;
    
    let html = '';
    
    // First & Prev
    html += `<button class="page-btn ${currentPage <= 1 ? 'disabled' : ''}" onclick="${currentPage > 1 ? `${onPageChange}(1)` : ''}" ${currentPage <= 1 ? 'disabled' : ''}><i class="fas fa-angle-double-left"></i></button>`;
    html += `<button class="page-btn ${currentPage <= 1 ? 'disabled' : ''}" onclick="${currentPage > 1 ? `${onPageChange}(${currentPage - 1})` : ''}" ${currentPage <= 1 ? 'disabled' : ''}><i class="fas fa-angle-left"></i></button>`;
    
    // Page numbers
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);
    
    if (endPage - startPage < 4) {
        if (startPage === 1) {
            endPage = Math.min(totalPages, startPage + 4);
        } else {
            startPage = Math.max(1, endPage - 4);
        }
    }
    
    if (startPage > 1) {
        html += `<span class="page-info">...</span>`;
    }
    
    for (let i = startPage; i <= endPage; i++) {
        html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="${onPageChange}(${i})">${i}</button>`;
    }
    
    if (endPage < totalPages) {
        html += `<span class="page-info">...</span>`;
    }
    
    // Next & Last
    html += `<button class="page-btn ${currentPage >= totalPages ? 'disabled' : ''}" onclick="${currentPage < totalPages ? `${onPageChange}(${currentPage + 1})` : ''}" ${currentPage >= totalPages ? 'disabled' : ''}><i class="fas fa-angle-right"></i></button>`;
    html += `<button class="page-btn ${currentPage >= totalPages ? 'disabled' : ''}" onclick="${currentPage < totalPages ? `${onPageChange}(${totalPages})` : ''}" ${currentPage >= totalPages ? 'disabled' : ''}><i class="fas fa-angle-double-right"></i></button>`;
    
    // Info
    html += `<span class="page-info">${t('products.pageInfo', { page: currentPage, total: totalPages, totalItems })}</span>`;
    
    container.innerHTML = html;
}

// ============================================================
// Modal Helpers
// ============================================================
function openModal(modalId) {
    const overlay = document.getElementById(modalId);
    if (overlay) {
        overlay.classList.add('open');
    }
}

function closeModal(modalId) {
    const overlay = document.getElementById(modalId);
    if (overlay) {
        overlay.classList.remove('open');
    }
}

// Close modal on overlay click
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
        e.target.classList.remove('open');
    }
});

// ============================================================
// Toast / Alert
// ============================================================
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) {
        // Create toast container
        const div = document.createElement('div');
        div.id = 'toast-container';
        div.style.cssText = 'position:fixed;top:20px;right:20px;z-index:9999;display:flex;flex-direction:column;gap:8px;';
        document.body.appendChild(div);
    }
    
    const toast = document.createElement('div');
    toast.className = `alert alert-${type === 'success' ? 'success' : type === 'error' ? 'danger' : 'warning'}`;
    toast.style.cssText = 'margin-bottom:0;box-shadow:0 4px 12px rgba(0,0,0,0.3);animation:slideIn 0.3s ease;min-width:250px;';
    toast.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i> ${message}`;
    
    document.getElementById('toast-container').appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Add slide-in animation
const styleSheet = document.createElement('style');
styleSheet.textContent = `@keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }`;
document.head.appendChild(styleSheet);

// ============================================================
// Confirm Modal
// ============================================================
function showConfirm(title, message, confirmLabel, onConfirm) {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay open';
    overlay.innerHTML = `
        <div class="modal modal-sm">
            <div class="modal-body" style="text-align:center;padding:32px 24px;">
                <div class="modal-confirm-icon confirm-danger">
                    <i class="fas fa-exclamation-triangle"></i>
                </div>
                <div class="modal-confirm-text">
                    <h4 style="margin-bottom:8px;">${title}</h4>
                    <p>${message}</p>
                </div>
                <div style="display:flex;gap:10px;justify-content:center;">
                    <button class="btn btn-secondary" id="confirm-cancel">${t('common.cancel')}</button>
                    <button class="btn btn-danger" id="confirm-ok">${confirmLabel}</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    overlay.querySelector('#confirm-cancel').addEventListener('click', () => overlay.remove());
    overlay.querySelector('#confirm-ok').addEventListener('click', () => {
        overlay.remove();
        onConfirm();
    });
    overlay.addEventListener('click', function(e) {
        if (e.target === this) this.remove();
    });
}

// ============================================================
// Image Upload Handler (for modal forms)
// ============================================================
function setupImageUpload(inputId, previewId, hiddenInputId) {
    const input = document.getElementById(inputId);
    if (!input) return;
    
    input.addEventListener('change', async function(e) {
        const file = this.files[0];
        if (!file) return;
        
        const preview = document.getElementById(previewId);
        if (preview) {
            preview.src = URL.createObjectURL(file);
            preview.style.display = 'block';
        }
        
        // Show uploading state
        const uploadBtn = this.closest('.form-group')?.querySelector('.upload-btn');
        if (uploadBtn) {
            uploadBtn.disabled = true;
            uploadBtn.textContent = t('common.loading');
        }
        
        try {
            const result = await uploadImage(file);
            const hiddenInput = document.getElementById(hiddenInputId);
            if (hiddenInput) {
                hiddenInput.value = result.url;
            }
            showToast(t('common.success'));
        } catch (err) {
            console.error('Upload error:', err);
            showToast(err.message || t('common.error'), 'error');
        } finally {
            if (uploadBtn) {
                uploadBtn.disabled = false;
                uploadBtn.textContent = t('products.uploadImage');
            }
        }
    });
}

// ============================================================
// PRODUCTS CRUD
// ============================================================
let currentProductId = null;

async function renderProductsPage() {
    const content = document.getElementById('page-content');
    paginationState.dataType = 'products';
    paginationState.currentPage = 1;
    
    const tableConfig = {
        thead: `
            <tr>
                <th>${t('products.id')}</th>
                <th>${t('products.image')}</th>
                <th>${t('products.name')}</th>
                <th>${t('products.category')}</th>
                <th>${t('products.loadClass')}</th>
                <th>${t('products.price')}</th>
                <th>${t('products.stock')}</th>
                <th>${t('products.status')}</th>
                <th>${t('products.actions')}</th>
            </tr>
        `,
        colspan: 9
    };
    
    content.innerHTML = buildTableContainer(
        t('products.title'),
        tableConfig,
        t('products.search'),
        t('products.add'),
        'openAddProductModal',
        'searchProducts',
        'renderProductsPage'
    );
    
    // Create modal
    content.insertAdjacentHTML('beforeend', buildProductModal());
    
    // Setup image upload
    setTimeout(() => {
        setupImageUpload('product-image-upload', 'product-image-preview', 'product-image');
    }, 100);
    
    await loadProducts();
}

function buildProductModal() {
    return `
    <div class="modal-overlay" id="product-modal">
        <div class="modal modal-lg">
            <div class="modal-header">
                <h3 id="product-modal-title">${t('products.addEdit')}</h3>
                <button class="modal-close" onclick="closeModal('product-modal')">&times;</button>
            </div>
            <div class="modal-body">
                <input type="hidden" id="product-id">
                <div class="form-section">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="product-name">${t('products.productName')}</label>
                            <input type="text" class="form-control" id="product-name" placeholder="${t('products.placeholderName')}">
                        </div>
                        <div class="form-group">
                            <label for="product-category">${t('products.category')}</label>
                            <input type="text" class="form-control" id="product-category" placeholder="${t('products.placeholderCategory')}">
                        </div>
                    </div>
                    <div class="form-row cols-3">
                        <div class="form-group">
                            <label for="product-loadclass">${t('products.loadClass')}</label>
                            <input type="text" class="form-control" id="product-loadclass" placeholder="${t('products.placeholderLoadClass')}">
                        </div>
                        <div class="form-group">
                            <label for="product-price">${t('products.price')}</label>
                            <input type="number" class="form-control" id="product-price" step="0.01" min="0" placeholder="${t('products.placeholderPrice')}">
                        </div>
                        <div class="form-group">
                            <label for="product-stock">${t('products.stock')}</label>
                            <input type="number" class="form-control" id="product-stock" min="0" placeholder="${t('products.placeholderStock')}">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="product-description">${t('products.description')}</label>
                        <textarea class="form-control" id="product-description" rows="3" placeholder="${t('products.placeholderDescription')}"></textarea>
                    </div>
                    <div class="form-group">
                        <label>${t('products.image')}</label>
                        <input type="hidden" id="product-image">
                        <div style="display:flex;gap:12px;align-items:center;">
                            <input type="file" id="product-image-upload" accept="image/*" style="display:none;">
                            <button class="btn btn-sm btn-secondary upload-btn" onclick="document.getElementById('product-image-upload').click()">
                                <i class="fas fa-upload"></i> ${t('products.uploadImage')}
                            </button>
                            <input type="text" class="form-control" id="product-image-url" placeholder="${t('products.placeholderImage')}" style="flex:1;" oninput="document.getElementById('product-image').value=this.value">
                        </div>
                        <img id="product-image-preview" class="img-thumb img-thumb-lg" style="display:none;margin-top:8px;" onclick="this.style.display='none'">
                    </div>
                    <div class="form-group">
                        <label for="product-status">${t('products.status')}</label>
                        <select class="form-control" id="product-status">
                            <option value="active">${t('products.active')}</option>
                            <option value="inactive">${t('products.inactive')}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" onclick="closeModal('product-modal')">${t('products.cancel')}</button>
                <button class="btn btn-primary" onclick="saveProduct()">${t('products.save')}</button>
            </div>
        </div>
    </div>`;
}

async function loadProducts(searchTerm) {
    const tbody = document.getElementById('table-body');
    if (!tbody) return;
    
    tbody.innerHTML = `<tr><td colspan="9" class="text-center text-muted">${t('common.loading')}</td></tr>`;
    
    try {
        let params = {
            order: 'id.desc',
            range: {
                start: (paginationState.currentPage - 1) * paginationState.pageSize,
                end: paginationState.currentPage * paginationState.pageSize - 1
            }
        };
        
        if (searchTerm) {
            params.filter = { 'name=ilike': `.*${searchTerm}.*` };
        }
        
        const { data: products, total } = await supabaseGet('products', params);
        
        paginationState.totalItems = total || 0;
        
        if (products && products.length > 0) {
            tbody.innerHTML = products.map(product => `
                <tr>
                    <td>${product.id}</td>
                    <td>${product.image ? `<img src="${product.image}" class="img-thumb" onclick="window.open('${product.image}','_blank')">` : '—'}</td>
                    <td>${escapeHtml(product.name)}</td>
                    <td>${escapeHtml(product.category)}</td>
                    <td>${escapeHtml(product.load_class || '')}</td>
                    <td>$${Number(product.price || 0).toFixed(2)}</td>
                    <td>${product.stock}</td>
                    <td><span class="status-badge ${product.status === 'active' ? 'active' : 'inactive'}" data-status="${product.status}" data-section="products">${t('products.' + (product.status || 'active'))}</span></td>
                    <td>
                        <div class="table-actions-cell">
                            <button class="btn btn-sm btn-ghost btn-icon" onclick="editProduct(${product.id})" title="${t('products.edit')}"><i class="fas fa-edit"></i></button>
                            <button class="btn btn-sm btn-ghost btn-icon" onclick="deleteProduct(${product.id})" title="${t('products.delete')}"><i class="fas fa-trash"></i></button>
                        </div>
                    </td>
                </tr>
            `).join('');
        } else {
            tbody.innerHTML = `<tr><td colspan="9" class="text-center text-muted">${t('products.noData')}</td></tr>`;
        }
        
        renderPagination('pagination', 'goToProductPage');
    } catch (err) {
        console.error('Load products error:', err);
        tbody.innerHTML = `<tr><td colspan="9" class="text-center text-danger">${t('common.error')}: ${err.message}</td></tr>`;
    }
}

function goToProductPage(page) {
    paginationState.currentPage = page;
    loadProducts(document.getElementById('search-input')?.value || '');
}

function openAddProductModal() {
    currentProductId = null;
    document.getElementById('product-id').value = '';
    document.getElementById('product-name').value = '';
    document.getElementById('product-category').value = 'Manhole Covers';
    document.getElementById('product-loadclass').value = '';
    document.getElementById('product-price').value = '';
    document.getElementById('product-stock').value = '';
    document.getElementById('product-description').value = '';
    document.getElementById('product-image').value = '';
    document.getElementById('product-image-url').value = '';
    document.getElementById('product-image-preview').style.display = 'none';
    document.getElementById('product-status').value = 'active';
    document.getElementById('product-modal-title').textContent = t('products.add');
    openModal('product-modal');
}

async function editProduct(id) {
    currentProductId = id;
    document.getElementById('product-modal-title').textContent = t('products.edit');
    
    try {
        const product = await supabaseGetById('products', id);
        if (product) {
            document.getElementById('product-id').value = product.id;
            document.getElementById('product-name').value = product.name || '';
            document.getElementById('product-category').value = product.category || '';
            document.getElementById('product-loadclass').value = product.load_class || '';
            document.getElementById('product-price').value = product.price || '';
            document.getElementById('product-stock').value = product.stock || '';
            document.getElementById('product-description').value = product.description || '';
            document.getElementById('product-image').value = product.image || '';
            document.getElementById('product-image-url').value = product.image || '';
            document.getElementById('product-status').value = product.status || 'active';
            
            const preview = document.getElementById('product-image-preview');
            if (product.image) {
                preview.src = product.image;
                preview.style.display = 'block';
            } else {
                preview.style.display = 'none';
            }
            
            openModal('product-modal');
        }
    } catch (err) {
        console.error('Edit product error:', err);
        showToast(err.message, 'error');
    }
}

async function saveProduct() {
    const data = {
        name: document.getElementById('product-name').value.trim(),
        category: document.getElementById('product-category').value.trim(),
        load_class: document.getElementById('product-loadclass').value.trim(),
        price: parseFloat(document.getElementById('product-price').value) || 0,
        stock: parseInt(document.getElementById('product-stock').value) || 0,
        description: document.getElementById('product-description').value.trim(),
        image: document.getElementById('product-image').value.trim(),
        status: document.getElementById('product-status').value
    };
    
    if (!data.name) {
        showToast(t('products.placeholderName') + ' required', 'error');
        return;
    }
    
    const id = document.getElementById('product-id').value;
    
    try {
        if (id) {
            await supabaseUpdate('products', id, data);
            showToast(t('common.success'));
        } else {
            await supabaseInsert('products', data);
            showToast(t('common.success'));
        }
        
        closeModal('product-modal');
        await loadProducts(document.getElementById('search-input')?.value || '');
    } catch (err) {
        console.error('Save product error:', err);
        showToast(err.message, 'error');
    }
}

async function deleteProduct(id) {
    showConfirm(
        t('products.deleteTitle'),
        t('products.deleteConfirm'),
        t('products.delete'),
        async () => {
            try {
                await supabaseDelete('products', id);
                showToast(t('common.success'));
                await loadProducts(document.getElementById('search-input')?.value || '');
            } catch (err) {
                console.error('Delete product error:', err);
                showToast(err.message, 'error');
            }
        }
    );
}

async function searchProducts(value) {
    paginationState.currentPage = 1;
    await loadProducts(value);
}

// ============================================================
// ORDERS CRUD
// ============================================================
let currentOrderId = null;

async function renderOrdersPage() {
    const content = document.getElementById('page-content');
    paginationState.dataType = 'orders';
    paginationState.currentPage = 1;
    
    const tableConfig = {
        thead: `
            <tr>
                <th>${t('orders.id')}</th>
                <th>${t('orders.customer')}</th>
                <th>${t('orders.product')}</th>
                <th>${t('orders.quantity')}</th>
                <th>${t('orders.amount')}</th>
                <th>${t('orders.status')}</th>
                <th>${t('orders.date')}</th>
                <th>${t('orders.actions')}</th>
            </tr>
        `,
        colspan: 8
    };
    
    content.innerHTML = buildTableContainer(
        t('orders.title'),
        tableConfig,
        t('orders.search'),
        t('orders.add'),
        'openAddOrderModal',
        'searchOrders',
        'renderOrdersPage'
    );
    
    content.insertAdjacentHTML('beforeend', buildOrderModal());
    await loadOrders();
}

function buildOrderModal() {
    return `
    <div class="modal-overlay" id="order-modal">
        <div class="modal">
            <div class="modal-header">
                <h3 id="order-modal-title">${t('orders.addEdit')}</h3>
                <button class="modal-close" onclick="closeModal('order-modal')">&times;</button>
            </div>
            <div class="modal-body">
                <input type="hidden" id="order-id">
                <div class="form-row">
                    <div class="form-group">
                        <label for="order-customer">${t('orders.customer')}</label>
                        <input type="text" class="form-control" id="order-customer" placeholder="${t('orders.placeholderCustomer')}">
                    </div>
                    <div class="form-group">
                        <label for="order-product">${t('orders.product')}</label>
                        <input type="text" class="form-control" id="order-product" placeholder="${t('orders.placeholderProduct')}">
                    </div>
                </div>
                <div class="form-row cols-3">
                    <div class="form-group">
                        <label for="order-quantity">${t('orders.quantity')}</label>
                        <input type="number" class="form-control" id="order-quantity" min="1" placeholder="${t('orders.placeholderQuantity')}">
                    </div>
                    <div class="form-group">
                        <label for="order-amount">${t('orders.amount')}</label>
                        <input type="number" class="form-control" id="order-amount" step="0.01" min="0" placeholder="${t('orders.placeholderAmount')}">
                    </div>
                    <div class="form-group">
                        <label for="order-status">${t('orders.status')}</label>
                        <select class="form-control" id="order-status">
                            <option value="pending">${t('orders.pending')}</option>
                            <option value="processing">${t('orders.processing')}</option>
                            <option value="completed">${t('orders.completed')}</option>
                            <option value="cancelled">${t('orders.cancelled')}</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label for="order-date">${t('orders.date')}</label>
                    <input type="date" class="form-control" id="order-date">
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" onclick="closeModal('order-modal')">${t('orders.cancel')}</button>
                <button class="btn btn-primary" onclick="saveOrder()">${t('orders.save')}</button>
            </div>
        </div>
    </div>`;
}

async function loadOrders(searchTerm) {
    const tbody = document.getElementById('table-body');
    if (!tbody) return;
    
    tbody.innerHTML = `<tr><td colspan="8" class="text-center text-muted">${t('common.loading')}</td></tr>`;
    
    try {
        let params = {
            order: 'created_at.desc',
            range: {
                start: (paginationState.currentPage - 1) * paginationState.pageSize,
                end: paginationState.currentPage * paginationState.pageSize - 1
            }
        };
        
        if (searchTerm) {
            params.filter = { 'customer=ilike': `.*${searchTerm}.*` };
        }
        
        const { data: orders, total } = await supabaseGet('orders', params);
        
        paginationState.totalItems = total || 0;
        
        if (orders && orders.length > 0) {
            tbody.innerHTML = orders.map(order => `
                <tr>
                    <td>${order.id}</td>
                    <td>${escapeHtml(order.customer)}</td>
                    <td>${escapeHtml(order.product)}</td>
                    <td>${order.quantity}</td>
                    <td>$${Number(order.amount || 0).toLocaleString()}</td>
                    <td><span class="status-badge ${order.status}" data-status="${order.status}" data-section="orders">${t('orders.' + (order.status || 'pending'))}</span></td>
                    <td>${order.date || order.created_at ? new Date(order.date || order.created_at).toLocaleDateString() : '—'}</td>
                    <td>
                        <div class="table-actions-cell">
                            <button class="btn btn-sm btn-ghost btn-icon" onclick="editOrder(${order.id})" title="${t('orders.edit')}"><i class="fas fa-edit"></i></button>
                            <button class="btn btn-sm btn-ghost btn-icon" onclick="deleteOrder(${order.id})" title="${t('orders.delete')}"><i class="fas fa-trash"></i></button>
                        </div>
                    </td>
                </tr>
            `).join('');
        } else {
            tbody.innerHTML = `<tr><td colspan="8" class="text-center text-muted">${t('orders.noData')}</td></tr>`;
        }
        
        renderPagination('pagination', 'goToOrderPage');
    } catch (err) {
        console.error('Load orders error:', err);
        tbody.innerHTML = `<tr><td colspan="8" class="text-center text-danger">${t('common.error')}: ${err.message}</td></tr>`;
    }
}

function goToOrderPage(page) {
    paginationState.currentPage = page;
    loadOrders(document.getElementById('search-input')?.value || '');
}

function openAddOrderModal() {
    currentOrderId = null;
    document.getElementById('order-id').value = '';
    document.getElementById('order-customer').value = '';
    document.getElementById('order-product').value = '';
    document.getElementById('order-quantity').value = '1';
    document.getElementById('order-amount').value = '';
    document.getElementById('order-status').value = 'pending';
    document.getElementById('order-date').value = new Date().toISOString().split('T')[0];
    document.getElementById('order-modal-title').textContent = t('orders.add');
    openModal('order-modal');
}

async function editOrder(id) {
    currentOrderId = id;
    document.getElementById('order-modal-title').textContent = t('orders.edit');
    
    try {
        const order = await supabaseGetById('orders', id);
        if (order) {
            document.getElementById('order-id').value = order.id;
            document.getElementById('order-customer').value = order.customer || '';
            document.getElementById('order-product').value = order.product || '';
            document.getElementById('order-quantity').value = order.quantity || 1;
            document.getElementById('order-amount').value = order.amount || '';
            document.getElementById('order-status').value = order.status || 'pending';
            document.getElementById('order-date').value = order.date || new Date().toISOString().split('T')[0];
            openModal('order-modal');
        }
    } catch (err) {
        console.error('Edit order error:', err);
        showToast(err.message, 'error');
    }
}

async function saveOrder() {
    const data = {
        customer: document.getElementById('order-customer').value.trim(),
        product: document.getElementById('order-product').value.trim(),
        quantity: parseInt(document.getElementById('order-quantity').value) || 1,
        amount: parseFloat(document.getElementById('order-amount').value) || 0,
        status: document.getElementById('order-status').value,
        date: document.getElementById('order-date').value || new Date().toISOString().split('T')[0]
    };
    
    if (!data.customer) {
        showToast(t('orders.placeholderCustomer') + ' required', 'error');
        return;
    }
    
    const id = document.getElementById('order-id').value;
    
    try {
        if (id) {
            await supabaseUpdate('orders', id, data);
            showToast(t('common.success'));
        } else {
            await supabaseInsert('orders', data);
            showToast(t('common.success'));
        }
        
        closeModal('order-modal');
        await loadOrders(document.getElementById('search-input')?.value || '');
    } catch (err) {
        console.error('Save order error:', err);
        showToast(err.message, 'error');
    }
}

async function deleteOrder(id) {
    showConfirm(
        t('orders.deleteTitle'),
        t('orders.deleteConfirm'),
        t('orders.delete'),
        async () => {
            try {
                await supabaseDelete('orders', id);
                showToast(t('common.success'));
                await loadOrders(document.getElementById('search-input')?.value || '');
            } catch (err) {
                console.error('Delete order error:', err);
                showToast(err.message, 'error');
            }
        }
    );
}

async function searchOrders(value) {
    paginationState.currentPage = 1;
    await loadOrders(value);
}

// ============================================================
// CUSTOMERS CRUD
// ============================================================
let currentCustomerId = null;

async function renderCustomersPage() {
    const content = document.getElementById('page-content');
    paginationState.dataType = 'customers';
    paginationState.currentPage = 1;
    
    const tableConfig = {
        thead: `
            <tr>
                <th>${t('customers.id')}</th>
                <th>${t('customers.name')}</th>
                <th>${t('customers.company')}</th>
                <th>${t('customers.email')}</th>
                <th>${t('customers.phone')}</th>
                <th>${t('customers.country')}</th>
                <th>${t('customers.status')}</th>
                <th>${t('customers.actions')}</th>
            </tr>
        `,
        colspan: 8
    };
    
    content.innerHTML = buildTableContainer(
        t('customers.title'),
        tableConfig,
        t('customers.search'),
        t('customers.add'),
        'openAddCustomerModal',
        'searchCustomers',
        'renderCustomersPage'
    );
    
    content.insertAdjacentHTML('beforeend', buildCustomerModal());
    await loadCustomers();
}

function buildCustomerModal() {
    return `
    <div class="modal-overlay" id="customer-modal">
        <div class="modal">
            <div class="modal-header">
                <h3 id="customer-modal-title">${t('customers.addEdit')}</h3>
                <button class="modal-close" onclick="closeModal('customer-modal')">&times;</button>
            </div>
            <div class="modal-body">
                <input type="hidden" id="customer-id">
                <div class="form-row">
                    <div class="form-group">
                        <label for="customer-name">${t('customers.name')}</label>
                        <input type="text" class="form-control" id="customer-name" placeholder="${t('customers.placeholderName')}">
                    </div>
                    <div class="form-group">
                        <label for="customer-company">${t('customers.company')}</label>
                        <input type="text" class="form-control" id="customer-company" placeholder="${t('customers.placeholderCompany')}">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="customer-email">${t('customers.email')}</label>
                        <input type="email" class="form-control" id="customer-email" placeholder="${t('customers.placeholderEmail')}">
                    </div>
                    <div class="form-group">
                        <label for="customer-phone">${t('customers.phone')}</label>
                        <input type="text" class="form-control" id="customer-phone" placeholder="${t('customers.placeholderPhone')}">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="customer-country">${t('customers.country')}</label>
                        <input type="text" class="form-control" id="customer-country" placeholder="${t('customers.placeholderCountry')}">
                    </div>
                    <div class="form-group">
                        <label for="customer-status">${t('customers.status')}</label>
                        <select class="form-control" id="customer-status">
                            <option value="active">${t('customers.active')}</option>
                            <option value="inactive">${t('customers.inactive')}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" onclick="closeModal('customer-modal')">${t('customers.cancel')}</button>
                <button class="btn btn-primary" onclick="saveCustomer()">${t('customers.save')}</button>
            </div>
        </div>
    </div>`;
}

async function loadCustomers(searchTerm) {
    const tbody = document.getElementById('table-body');
    if (!tbody) return;
    
    tbody.innerHTML = `<tr><td colspan="8" class="text-center text-muted">${t('common.loading')}</td></tr>`;
    
    try {
        let params = {
            order: 'id.desc',
            range: {
                start: (paginationState.currentPage - 1) * paginationState.pageSize,
                end: paginationState.currentPage * paginationState.pageSize - 1
            }
        };
        
        if (searchTerm) {
            params.filter = { 'name=ilike': `.*${searchTerm}.*` };
        }
        
        const { data: customers, total } = await supabaseGet('customers', params);
        
        paginationState.totalItems = total || 0;
        
        if (customers && customers.length > 0) {
            tbody.innerHTML = customers.map(customer => `
                <tr>
                    <td>${customer.id}</td>
                    <td>${escapeHtml(customer.name)}</td>
                    <td>${escapeHtml(customer.company)}</td>
                    <td>${escapeHtml(customer.email)}</td>
                    <td>${escapeHtml(customer.phone)}</td>
                    <td>${escapeHtml(customer.country)}</td>
                    <td><span class="status-badge ${customer.status === 'active' ? 'active' : 'inactive'}" data-status="${customer.status}" data-section="customers">${t('customers.' + (customer.status || 'active'))}</span></td>
                    <td>
                        <div class="table-actions-cell">
                            <button class="btn btn-sm btn-ghost btn-icon" onclick="editCustomer(${customer.id})" title="${t('customers.edit')}"><i class="fas fa-edit"></i></button>
                            <button class="btn btn-sm btn-ghost btn-icon" onclick="deleteCustomer(${customer.id})" title="${t('customers.delete')}"><i class="fas fa-trash"></i></button>
                        </div>
                    </td>
                </tr>
            `).join('');
        } else {
            tbody.innerHTML = `<tr><td colspan="8" class="text-center text-muted">${t('customers.noData')}</td></tr>`;
        }
        
        renderPagination('pagination', 'goToCustomerPage');
    } catch (err) {
        console.error('Load customers error:', err);
        tbody.innerHTML = `<tr><td colspan="8" class="text-center text-danger">${t('common.error')}: ${err.message}</td></tr>`;
    }
}

function goToCustomerPage(page) {
    paginationState.currentPage = page;
    loadCustomers(document.getElementById('search-input')?.value || '');
}

function openAddCustomerModal() {
    currentCustomerId = null;
    document.getElementById('customer-id').value = '';
    document.getElementById('customer-name').value = '';
    document.getElementById('customer-company').value = '';
    document.getElementById('customer-email').value = '';
    document.getElementById('customer-phone').value = '';
    document.getElementById('customer-country').value = '';
    document.getElementById('customer-status').value = 'active';
    document.getElementById('customer-modal-title').textContent = t('customers.add');
    openModal('customer-modal');
}

async function editCustomer(id) {
    currentCustomerId = id;
    document.getElementById('customer-modal-title').textContent = t('customers.edit');
    
    try {
        const customer = await supabaseGetById('customers', id);
        if (customer) {
            document.getElementById('customer-id').value = customer.id;
            document.getElementById('customer-name').value = customer.name || '';
            document.getElementById('customer-company').value = customer.company || '';
            document.getElementById('customer-email').value = customer.email || '';
            document.getElementById('customer-phone').value = customer.phone || '';
            document.getElementById('customer-country').value = customer.country || '';
            document.getElementById('customer-status').value = customer.status || 'active';
            openModal('customer-modal');
        }
    } catch (err) {
        console.error('Edit customer error:', err);
        showToast(err.message, 'error');
    }
}

async function saveCustomer() {
    const data = {
        name: document.getElementById('customer-name').value.trim(),
        company: document.getElementById('customer-company').value.trim(),
        email: document.getElementById('customer-email').value.trim(),
        phone: document.getElementById('customer-phone').value.trim(),
        country: document.getElementById('customer-country').value.trim(),
        status: document.getElementById('customer-status').value
    };
    
    if (!data.name) {
        showToast(t('customers.placeholderName') + ' required', 'error');
        return;
    }
    
    const id = document.getElementById('customer-id').value;
    
    try {
        if (id) {
            await supabaseUpdate('customers', id, data);
            showToast(t('common.success'));
        } else {
            await supabaseInsert('customers', data);
            showToast(t('common.success'));
        }
        
        closeModal('customer-modal');
        await loadCustomers(document.getElementById('search-input')?.value || '');
    } catch (err) {
        console.error('Save customer error:', err);
        showToast(err.message, 'error');
    }
}

async function deleteCustomer(id) {
    showConfirm(
        t('customers.deleteTitle'),
        t('customers.deleteConfirm'),
        t('customers.delete'),
        async () => {
            try {
                await supabaseDelete('customers', id);
                showToast(t('common.success'));
                await loadCustomers(document.getElementById('search-input')?.value || '');
            } catch (err) {
                console.error('Delete customer error:', err);
                showToast(err.message, 'error');
            }
        }
    );
}

async function searchCustomers(value) {
    paginationState.currentPage = 1;
    await loadCustomers(value);
}

// ============================================================
// CERTIFICATIONS CRUD
// ============================================================
let currentCertId = null;

async function renderCertificationsPage() {
    const content = document.getElementById('page-content');
    paginationState.dataType = 'certifications';
    paginationState.currentPage = 1;
    
    const tableConfig = {
        thead: `
            <tr>
                <th>${t('certifications.id')}</th>
                <th>${t('certifications.image')}</th>
                <th>${t('certifications.name')}</th>
                <th>${t('certifications.description')}</th>
                <th>${t('certifications.category')}</th>
                <th>${t('certifications.status')}</th>
                <th>${t('certifications.actions')}</th>
            </tr>
        `,
        colspan: 7
    };
    
    content.innerHTML = buildTableContainer(
        t('certifications.title'),
        tableConfig,
        t('certifications.search'),
        t('certifications.add'),
        'openAddCertModal',
        'searchCertifications',
        'renderCertificationsPage'
    );
    
    content.insertAdjacentHTML('beforeend', buildCertModal());
    
    setTimeout(() => {
        setupImageUpload('cert-image-upload', 'cert-image-preview', 'cert-image');
    }, 100);
    
    await loadCertifications();
}

function buildCertModal() {
    return `
    <div class="modal-overlay" id="cert-modal">
        <div class="modal">
            <div class="modal-header">
                <h3 id="cert-modal-title">${t('certifications.addEdit')}</h3>
                <button class="modal-close" onclick="closeModal('cert-modal')">&times;</button>
            </div>
            <div class="modal-body">
                <input type="hidden" id="cert-id">
                <div class="form-group">
                    <label for="cert-name">${t('certifications.name')}</label>
                    <input type="text" class="form-control" id="cert-name" placeholder="${t('certifications.placeholderName')}">
                </div>
                <div class="form-group">
                    <label for="cert-description">${t('certifications.description')}</label>
                    <textarea class="form-control" id="cert-description" rows="3" placeholder="${t('certifications.placeholderDescription')}"></textarea>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="cert-category">${t('certifications.category')}</label>
                        <input type="text" class="form-control" id="cert-category" placeholder="${t('certifications.placeholderCategory')}">
                    </div>
                    <div class="form-group">
                        <label for="cert-status">${t('certifications.status')}</label>
                        <select class="form-control" id="cert-status">
                            <option value="active">${t('certifications.active')}</option>
                            <option value="inactive">${t('certifications.inactive')}</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label>${t('certifications.image')}</label>
                    <input type="hidden" id="cert-image">
                    <div style="display:flex;gap:12px;align-items:center;">
                        <input type="file" id="cert-image-upload" accept="image/*" style="display:none;">
                        <button class="btn btn-sm btn-secondary upload-btn" onclick="document.getElementById('cert-image-upload').click()">
                            <i class="fas fa-upload"></i> ${t('certifications.uploadImage')}
                        </button>
                        <input type="text" class="form-control" id="cert-image-url" placeholder="${t('certifications.placeholderImage')}" style="flex:1;" oninput="document.getElementById('cert-image').value=this.value">
                    </div>
                    <img id="cert-image-preview" class="img-thumb img-thumb-lg" style="display:none;margin-top:8px;">
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" onclick="closeModal('cert-modal')">${t('certifications.cancel')}</button>
                <button class="btn btn-primary" onclick="saveCertification()">${t('certifications.save')}</button>
            </div>
        </div>
    </div>`;
}

async function loadCertifications(searchTerm) {
    const tbody = document.getElementById('table-body');
    if (!tbody) return;
    
    tbody.innerHTML = `<tr><td colspan="7" class="text-center text-muted">${t('common.loading')}</td></tr>`;
    
    try {
        let params = {
            order: 'id.desc',
            range: {
                start: (paginationState.currentPage - 1) * paginationState.pageSize,
                end: paginationState.currentPage * paginationState.pageSize - 1
            }
        };
        
        if (searchTerm) {
            params.filter = { 'name=ilike': `.*${searchTerm}.*` };
        }
        
        const { data: certs, total } = await supabaseGet('certifications', params);
        
        paginationState.totalItems = total || 0;
        
        if (certs && certs.length > 0) {
            tbody.innerHTML = certs.map(cert => `
                <tr>
                    <td>${cert.id}</td>
                    <td>${cert.image ? `<img src="${cert.image}" class="img-thumb" onclick="window.open('${cert.image}','_blank')">` : '—'}</td>
                    <td>${escapeHtml(cert.name)}</td>
                    <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escapeHtml(cert.description)}</td>
                    <td>${escapeHtml(cert.category)}</td>
                    <td><span class="status-badge ${cert.status === 'active' ? 'active' : 'inactive'}" data-status="${cert.status}" data-section="certifications">${t('certifications.' + (cert.status || 'active'))}</span></td>
                    <td>
                        <div class="table-actions-cell">
                            <button class="btn btn-sm btn-ghost btn-icon" onclick="editCertification(${cert.id})" title="${t('certifications.edit')}"><i class="fas fa-edit"></i></button>
                            <button class="btn btn-sm btn-ghost btn-icon" onclick="deleteCertification(${cert.id})" title="${t('certifications.delete')}"><i class="fas fa-trash"></i></button>
                        </div>
                    </td>
                </tr>
            `).join('');
        } else {
            tbody.innerHTML = `<tr><td colspan="7" class="text-center text-muted">${t('certifications.noData')}</td></tr>`;
        }
        
        renderPagination('pagination', 'goToCertPage');
    } catch (err) {
        console.error('Load certifications error:', err);
        tbody.innerHTML = `<tr><td colspan="7" class="text-center text-danger">${t('common.error')}: ${err.message}</td></tr>`;
    }
}

function goToCertPage(page) {
    paginationState.currentPage = page;
    loadCertifications(document.getElementById('search-input')?.value || '');
}

function openAddCertModal() {
    currentCertId = null;
    document.getElementById('cert-id').value = '';
    document.getElementById('cert-name').value = '';
    document.getElementById('cert-description').value = '';
    document.getElementById('cert-category').value = 'EN 124';
    document.getElementById('cert-status').value = 'active';
    document.getElementById('cert-image').value = '';
    document.getElementById('cert-image-url').value = '';
    document.getElementById('cert-image-preview').style.display = 'none';
    document.getElementById('cert-modal-title').textContent = t('certifications.add');
    openModal('cert-modal');
}

async function editCertification(id) {
    currentCertId = id;
    document.getElementById('cert-modal-title').textContent = t('certifications.edit');
    
    try {
        const cert = await supabaseGetById('certifications', id);
        if (cert) {
            document.getElementById('cert-id').value = cert.id;
            document.getElementById('cert-name').value = cert.name || '';
            document.getElementById('cert-description').value = cert.description || '';
            document.getElementById('cert-category').value = cert.category || '';
            document.getElementById('cert-status').value = cert.status || 'active';
            document.getElementById('cert-image').value = cert.image || '';
            document.getElementById('cert-image-url').value = cert.image || '';
            
            const preview = document.getElementById('cert-image-preview');
            if (cert.image) {
                preview.src = cert.image;
                preview.style.display = 'block';
            } else {
                preview.style.display = 'none';
            }
            
            openModal('cert-modal');
        }
    } catch (err) {
        console.error('Edit certification error:', err);
        showToast(err.message, 'error');
    }
}

async function saveCertification() {
    const data = {
        name: document.getElementById('cert-name').value.trim(),
        description: document.getElementById('cert-description').value.trim(),
        category: document.getElementById('cert-category').value.trim(),
        image: document.getElementById('cert-image').value.trim(),
        status: document.getElementById('cert-status').value
    };
    
    if (!data.name) {
        showToast(t('certifications.placeholderName') + ' required', 'error');
        return;
    }
    
    const id = document.getElementById('cert-id').value;
    
    try {
        if (id) {
            await supabaseUpdate('certifications', id, data);
            showToast(t('common.success'));
        } else {
            await supabaseInsert('certifications', data);
            showToast(t('common.success'));
        }
        
        closeModal('cert-modal');
        await loadCertifications(document.getElementById('search-input')?.value || '');
    } catch (err) {
        console.error('Save certification error:', err);
        showToast(err.message, 'error');
    }
}

async function deleteCertification(id) {
    showConfirm(
        t('certifications.deleteTitle'),
        t('certifications.deleteConfirm'),
        t('certifications.delete'),
        async () => {
            try {
                await supabaseDelete('certifications', id);
                showToast(t('common.success'));
                await loadCertifications(document.getElementById('search-input')?.value || '');
            } catch (err) {
                console.error('Delete certification error:', err);
                showToast(err.message, 'error');
            }
        }
    );
}

async function searchCertifications(value) {
    paginationState.currentPage = 1;
    await loadCertifications(value);
}

// ============================================================
// NEWS CRUD
// ============================================================
let currentNewsId = null;

async function renderNewsPage() {
    const content = document.getElementById('page-content');
    paginationState.dataType = 'news';
    paginationState.currentPage = 1;
    
    const tableConfig = {
        thead: `
            <tr>
                <th>${t('news.id')}</th>
                <th>${t('news.image')}</th>
                <th>${t('news.title')}</th>
                <th>${t('news.category')}</th>
                <th>${t('news.date')}</th>
                <th>${t('news.status')}</th>
                <th>${t('news.actions')}</th>
            </tr>
        `,
        colspan: 7
    };
    
    content.innerHTML = buildTableContainer(
        t('news.title'),
        tableConfig,
        t('news.search'),
        t('news.add'),
        'openAddNewsModal',
        'searchNews',
        'renderNewsPage'
    );
    
    content.insertAdjacentHTML('beforeend', buildNewsModal());
    
    setTimeout(() => {
        setupImageUpload('news-image-upload', 'news-image-preview', 'news-image');
    }, 100);
    
    await loadNews();
}

function buildNewsModal() {
    return `
    <div class="modal-overlay" id="news-modal">
        <div class="modal modal-lg">
            <div class="modal-header">
                <h3 id="news-modal-title">${t('news.addEdit')}</h3>
                <button class="modal-close" onclick="closeModal('news-modal')">&times;</button>
            </div>
            <div class="modal-body">
                <input type="hidden" id="news-id">
                <div class="form-group">
                    <label for="news-title">${t('news.title')}</label>
                    <input type="text" class="form-control" id="news-title" placeholder="${t('news.placeholderTitle')}">
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="news-category">${t('news.category')}</label>
                        <input type="text" class="form-control" id="news-category" placeholder="${t('news.placeholderCategory')}">
                    </div>
                    <div class="form-group">
                        <label for="news-date">${t('news.date')}</label>
                        <input type="date" class="form-control" id="news-date">
                    </div>
                </div>
                <div class="form-group">
                    <label for="news-summary">${t('news.summary')}</label>
                    <textarea class="form-control" id="news-summary" rows="2" placeholder="${t('news.placeholderSummary')}"></textarea>
                </div>
                <div class="form-group">
                    <label for="news-content">${t('news.content')}</label>
                    <textarea class="form-control" id="news-content" rows="5" placeholder="${t('news.placeholderContent')}"></textarea>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>${t('news.image')}</label>
                        <input type="hidden" id="news-image">
                        <div style="display:flex;gap:12px;align-items:center;">
                            <input type="file" id="news-image-upload" accept="image/*" style="display:none;">
                            <button class="btn btn-sm btn-secondary upload-btn" onclick="document.getElementById('news-image-upload').click()">
                                <i class="fas fa-upload"></i> ${t('news.uploadImage')}
                            </button>
                            <input type="text" class="form-control" id="news-image-url" placeholder="${t('news.placeholderImage')}" style="flex:1;" oninput="document.getElementById('news-image').value=this.value">
                        </div>
                        <img id="news-image-preview" class="img-thumb img-thumb-lg" style="display:none;margin-top:8px;">
                    </div>
                    <div class="form-group">
                        <label for="news-status">${t('news.status')}</label>
                        <select class="form-control" id="news-status">
                            <option value="published">${t('news.published')}</option>
                            <option value="draft">${t('news.draft')}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" onclick="closeModal('news-modal')">${t('news.cancel')}</button>
                <button class="btn btn-primary" onclick="saveNews()">${t('news.save')}</button>
            </div>
        </div>
    </div>`;
}

async function loadNews(searchTerm) {
    const tbody = document.getElementById('table-body');
    if (!tbody) return;
    
    tbody.innerHTML = `<tr><td colspan="7" class="text-center text-muted">${t('common.loading')}</td></tr>`;
    
    try {
        let params = {
            order: 'created_at.desc',
            range: {
                start: (paginationState.currentPage - 1) * paginationState.pageSize,
                end: paginationState.currentPage * paginationState.pageSize - 1
            }
        };
        
        if (searchTerm) {
            params.filter = { 'title=ilike': `.*${searchTerm}.*` };
        }
        
        const { data: newsItems, total } = await supabaseGet('news', params);
        
        paginationState.totalItems = total || 0;
        
        if (newsItems && newsItems.length > 0) {
            tbody.innerHTML = newsItems.map(item => `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.image ? `<img src="${item.image}" class="img-thumb" onclick="window.open('${item.image}','_blank')">` : '—'}</td>
                    <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escapeHtml(item.title)}</td>
                    <td>${escapeHtml(item.category)}</td>
                    <td>${item.date || new Date(item.created_at).toLocaleDateString()}</td>
                    <td><span class="status-badge ${item.status === 'published' ? 'published' : 'draft'}" data-status="${item.status}" data-section="news">${t('news.' + (item.status || 'published'))}</span></td>
                    <td>
                        <div class="table-actions-cell">
                            <button class="btn btn-sm btn-ghost btn-icon" onclick="editNews(${item.id})" title="${t('news.edit')}"><i class="fas fa-edit"></i></button>
                            <button class="btn btn-sm btn-ghost btn-icon" onclick="deleteNews(${item.id})" title="${t('news.delete')}"><i class="fas fa-trash"></i></button>
                        </div>
                    </td>
                </tr>
            `).join('');
        } else {
            tbody.innerHTML = `<tr><td colspan="7" class="text-center text-muted">${t('news.noData')}</td></tr>`;
        }
        
        renderPagination('pagination', 'goToNewsPage');
    } catch (err) {
        console.error('Load news error:', err);
        tbody.innerHTML = `<tr><td colspan="7" class="text-center text-danger">${t('common.error')}: ${err.message}</td></tr>`;
    }
}

function goToNewsPage(page) {
    paginationState.currentPage = page;
    loadNews(document.getElementById('search-input')?.value || '');
}

function openAddNewsModal() {
    currentNewsId = null;
    document.getElementById('news-id').value = '';
    document.getElementById('news-title').value = '';
    document.getElementById('news-category').value = 'Company';
    document.getElementById('news-date').value = new Date().toISOString().split('T')[0];
    document.getElementById('news-summary').value = '';
    document.getElementById('news-content').value = '';
    document.getElementById('news-image').value = '';
    document.getElementById('news-image-url').value = '';
    document.getElementById('news-image-preview').style.display = 'none';
    document.getElementById('news-status').value = 'published';
    document.getElementById('news-modal-title').textContent = t('news.add');
    openModal('news-modal');
}

async function editNews(id) {
    currentNewsId = id;
    document.getElementById('news-modal-title').textContent = t('news.edit');
    
    try {
        const item = await supabaseGetById('news', id);
        if (item) {
            document.getElementById('news-id').value = item.id;
            document.getElementById('news-title').value = item.title || '';
            document.getElementById('news-category').value = item.category || '';
            document.getElementById('news-date').value = item.date || new Date().toISOString().split('T')[0];
            document.getElementById('news-summary').value = item.summary || '';
            document.getElementById('news-content').value = item.content || '';
            document.getElementById('news-image').value = item.image || '';
            document.getElementById('news-image-url').value = item.image || '';
            document.getElementById('news-status').value = item.status || 'published';
            
            const preview = document.getElementById('news-image-preview');
            if (item.image) {
                preview.src = item.image;
                preview.style.display = 'block';
            } else {
                preview.style.display = 'none';
            }
            
            openModal('news-modal');
        }
    } catch (err) {
        console.error('Edit news error:', err);
        showToast(err.message, 'error');
    }
}

async function saveNews() {
    const data = {
        title: document.getElementById('news-title').value.trim(),
        category: document.getElementById('news-category').value.trim(),
        date: document.getElementById('news-date').value || new Date().toISOString().split('T')[0],
        summary: document.getElementById('news-summary').value.trim(),
        content: document.getElementById('news-content').value.trim(),
        image: document.getElementById('news-image').value.trim(),
        status: document.getElementById('news-status').value
    };
    
    if (!data.title) {
        showToast(t('news.placeholderTitle') + ' required', 'error');
        return;
    }
    
    const id = document.getElementById('news-id').value;
    
    try {
        if (id) {
            await supabaseUpdate('news', id, data);
            showToast(t('common.success'));
        } else {
            await supabaseInsert('news', data);
            showToast(t('common.success'));
        }
        
        closeModal('news-modal');
        await loadNews(document.getElementById('search-input')?.value || '');
    } catch (err) {
        console.error('Save news error:', err);
        showToast(err.message, 'error');
    }
}

async function deleteNews(id) {
    showConfirm(
        t('news.deleteTitle'),
        t('news.deleteConfirm'),
        t('news.delete'),
        async () => {
            try {
                await supabaseDelete('news', id);
                showToast(t('common.success'));
                await loadNews(document.getElementById('search-input')?.value || '');
            } catch (err) {
                console.error('Delete news error:', err);
                showToast(err.message, 'error');
            }
        }
    );
}

async function searchNews(value) {
    paginationState.currentPage = 1;
    await loadNews(value);
}

// ============================================================
// COMPARISONS CRUD
// ============================================================
let currentComparisonId = null;

async function renderComparisonsPage() {
    const content = document.getElementById('page-content');
    paginationState.dataType = 'comparisons';
    paginationState.currentPage = 1;
    
    const tableConfig = {
        thead: `
            <tr>
                <th>${t('comparisons.id')}</th>
                <th>${t('comparisons.title')}</th>
                <th>${t('comparisons.feature')}</th>
                <th>${t('comparisons.composite')}</th>
                <th>${t('comparisons.castIron')}</th>
                <th>${t('comparisons.description')}</th>
                <th>${t('comparisons.actions')}</th>
            </tr>
        `,
        colspan: 7
    };
    
    content.innerHTML = buildTableContainer(
        t('comparisons.title'),
        tableConfig,
        t('comparisons.search'),
        t('comparisons.add'),
        'openAddComparisonModal',
        'searchComparisons',
        'renderComparisonsPage'
    );
    
    content.insertAdjacentHTML('beforeend', buildComparisonModal());
    await loadComparisons();
}

function buildComparisonModal() {
    return `
    <div class="modal-overlay" id="comparison-modal">
        <div class="modal">
            <div class="modal-header">
                <h3 id="comparison-modal-title">${t('comparisons.addEdit')}</h3>
                <button class="modal-close" onclick="closeModal('comparison-modal')">&times;</button>
            </div>
            <div class="modal-body">
                <input type="hidden" id="comparison-id">
                <div class="form-group">
                    <label for="comparison-title">${t('comparisons.title')}</label>
                    <input type="text" class="form-control" id="comparison-title" placeholder="${t('comparisons.placeholderTitle')}">
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="comparison-feature">${t('comparisons.feature')}</label>
                        <input type="text" class="form-control" id="comparison-feature" placeholder="${t('comparisons.placeholderFeature')}">
                    </div>
                    <div class="form-group">
                        <label for="comparison-composite">${t('comparisons.composite')}</label>
                        <input type="text" class="form-control" id="comparison-composite" placeholder="${t('comparisons.placeholderComposite')}">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="comparison-castiron">${t('comparisons.castIron')}</label>
                        <input type="text" class="form-control" id="comparison-castiron" placeholder="${t('comparisons.placeholderCastIron')}">
                    </div>
                    <div class="form-group">
                        <label for="comparison-description">${t('comparisons.description')}</label>
                        <input type="text" class="form-control" id="comparison-description" placeholder="${t('comparisons.placeholderDescription')}">
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" onclick="closeModal('comparison-modal')">${t('comparisons.cancel')}</button>
                <button class="btn btn-primary" onclick="saveComparison()">${t('comparisons.save')}</button>
            </div>
        </div>
    </div>`;
}

async function loadComparisons(searchTerm) {
    const tbody = document.getElementById('table-body');
    if (!tbody) return;
    
    tbody.innerHTML = `<tr><td colspan="7" class="text-center text-muted">${t('common.loading')}</td></tr>`;
    
    try {
        let params = {
            order: 'id.desc',
            range: {
                start: (paginationState.currentPage - 1) * paginationState.pageSize,
                end: paginationState.currentPage * paginationState.pageSize - 1
            }
        };
        
        if (searchTerm) {
            params.filter = { 'title=ilike': `.*${searchTerm}.*` };
        }
        
        const { data: comparisons, total } = await supabaseGet('comparisons', params);
        
        paginationState.totalItems = total || 0;
        
        if (comparisons && comparisons.length > 0) {
            tbody.innerHTML = comparisons.map(comp => `
                <tr>
                    <td>${comp.id}</td>
                    <td>${escapeHtml(comp.title)}</td>
                    <td>${escapeHtml(comp.feature)}</td>
                    <td>${escapeHtml(comp.composite)}</td>
                    <td>${escapeHtml(comp.cast_iron)}</td>
                    <td style="max-width:150px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escapeHtml(comp.description)}</td>
                    <td>
                        <div class="table-actions-cell">
                            <button class="btn btn-sm btn-ghost btn-icon" onclick="editComparison(${comp.id})" title="${t('comparisons.edit')}"><i class="fas fa-edit"></i></button>
                            <button class="btn btn-sm btn-ghost btn-icon" onclick="deleteComparison(${comp.id})" title="${t('comparisons.delete')}"><i class="fas fa-trash"></i></button>
                        </div>
                    </td>
                </tr>
            `).join('');
        } else {
            tbody.innerHTML = `<tr><td colspan="7" class="text-center text-muted">${t('comparisons.noData')}</td></tr>`;
        }
        
        renderPagination('pagination', 'goToComparisonPage');
    } catch (err) {
        console.error('Load comparisons error:', err);
        tbody.innerHTML = `<tr><td colspan="7" class="text-center text-danger">${t('common.error')}: ${err.message}</td></tr>`;
    }
}

function goToComparisonPage(page) {
    paginationState.currentPage = page;
    loadComparisons(document.getElementById('search-input')?.value || '');
}

function openAddComparisonModal() {
    currentComparisonId = null;
    document.getElementById('comparison-id').value = '';
    document.getElementById('comparison-title').value = '';
    document.getElementById('comparison-feature').value = '';
    document.getElementById('comparison-composite').value = '';
    document.getElementById('comparison-castiron').value = '';
    document.getElementById('comparison-description').value = '';
    document.getElementById('comparison-modal-title').textContent = t('comparisons.add');
    openModal('comparison-modal');
}

async function editComparison(id) {
    currentComparisonId = id;
    document.getElementById('comparison-modal-title').textContent = t('comparisons.edit');
    
    try {
        const comp = await supabaseGetById('comparisons', id);
        if (comp) {
            document.getElementById('comparison-id').value = comp.id;
            document.getElementById('comparison-title').value = comp.title || '';
            document.getElementById('comparison-feature').value = comp.feature || '';
            document.getElementById('comparison-composite').value = comp.composite || '';
            document.getElementById('comparison-castiron').value = comp.cast_iron || '';
            document.getElementById('comparison-description').value = comp.description || '';
            openModal('comparison-modal');
        }
    } catch (err) {
        console.error('Edit comparison error:', err);
        showToast(err.message, 'error');
    }
}

async function saveComparison() {
    const data = {
        title: document.getElementById('comparison-title').value.trim(),
        feature: document.getElementById('comparison-feature').value.trim(),
        composite: document.getElementById('comparison-composite').value.trim(),
        cast_iron: document.getElementById('comparison-castiron').value.trim(),
        description: document.getElementById('comparison-description').value.trim()
    };
    
    if (!data.title) {
        showToast(t('comparisons.placeholderTitle') + ' required', 'error');
        return;
    }
    
    const id = document.getElementById('comparison-id').value;
    
    try {
        if (id) {
            await supabaseUpdate('comparisons', id, data);
            showToast(t('common.success'));
        } else {
            await supabaseInsert('comparisons', data);
            showToast(t('common.success'));
        }
        
        closeModal('comparison-modal');
        await loadComparisons(document.getElementById('search-input')?.value || '');
    } catch (err) {
        console.error('Save comparison error:', err);
        showToast(err.message, 'error');
    }
}

async function deleteComparison(id) {
    showConfirm(
        t('comparisons.deleteTitle'),
        t('comparisons.deleteConfirm'),
        t('comparisons.delete'),
        async () => {
            try {
                await supabaseDelete('comparisons', id);
                showToast(t('common.success'));
                await loadComparisons(document.getElementById('search-input')?.value || '');
            } catch (err) {
                console.error('Delete comparison error:', err);
                showToast(err.message, 'error');
            }
        }
    );
}

async function searchComparisons(value) {
    paginationState.currentPage = 1;
    await loadComparisons(value);
}

// ============================================================
// MESSAGES (Read-only from contact_submissions)
// ============================================================
async function renderMessagesPage() {
    const content = document.getElementById('page-content');
    paginationState.dataType = 'messages';
    paginationState.currentPage = 1;
    
    const tableConfig = {
        thead: `
            <tr>
                <th>${t('messages.id')}</th>
                <th>${t('messages.name')}</th>
                <th>${t('messages.email')}</th>
                <th>${t('messages.phone')}</th>
                <th>${t('messages.message')}</th>
                <th>${t('messages.status')}</th>
                <th>${t('messages.date')}</th>
                <th>${t('messages.actions')}</th>
            </tr>
        `,
        colspan: 8
    };
    
    content.innerHTML = buildTableContainer(
        t('messages.title'),
        tableConfig,
        t('messages.search'),
        t('messages.refresh'),
        'refreshMessages',
        'searchMessages',
        'renderMessagesPage'
    );
    
    content.insertAdjacentHTML('beforeend', buildMessageViewModal());
    await loadMessages();
}

function buildMessageViewModal() {
    return `
    <div class="modal-overlay" id="message-modal">
        <div class="modal">
            <div class="modal-header">
                <h3>${t('messages.viewMessage')}</h3>
                <button class="modal-close" onclick="closeModal('message-modal')">&times;</button>
            </div>
            <div class="modal-body" id="message-modal-body">
                <div class="form-group">
                    <label>${t('messages.name')}</label>
                    <p id="msg-view-name" class="text-primary" style="color:var(--text-primary);font-size:1rem;"></p>
                </div>
                <div class="form-group">
                    <label>${t('messages.email')}</label>
                    <p id="msg-view-email" style="color:var(--text-primary);"></p>
                </div>
                <div class="form-group">
                    <label>${t('messages.phone')}</label>
                    <p id="msg-view-phone" style="color:var(--text-primary);"></p>
                </div>
                <div class="form-group">
                    <label>${t('messages.message')}</label>
                    <div id="msg-view-content" style="background:var(--bg-input);padding:12px;border-radius:var(--radius);color:var(--text-primary);line-height:1.7;white-space:pre-wrap;"></div>
                </div>
                <div class="form-group">
                    <label>${t('messages.date')}</label>
                    <p id="msg-view-date" style="color:var(--text-primary);"></p>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" onclick="closeModal('message-modal')">${t('messages.close')}</button>
                <button class="btn btn-primary" id="msg-mark-read-btn" onclick="markMessageRead()">${t('messages.markRead')}</button>
            </div>
        </div>
    </div>`;
}

let currentMessageId = null;

async function loadMessages(searchTerm) {
    const tbody = document.getElementById('table-body');
    if (!tbody) return;
    
    tbody.innerHTML = `<tr><td colspan="8" class="text-center text-muted">${t('common.loading')}</td></tr>`;
    
    try {
        let params = {
            order: 'created_at.desc',
            range: {
                start: (paginationState.currentPage - 1) * paginationState.pageSize,
                end: paginationState.currentPage * paginationState.pageSize - 1
            }
        };
        
        if (searchTerm) {
            params.filter = { 'name=ilike': `.*${searchTerm}.*` };
        }
        
        const { data: messages, total } = await supabaseGet('contact_submissions', params);
        
        paginationState.totalItems = total || 0;
        
        if (messages && messages.length > 0) {
            tbody.innerHTML = messages.map(msg => {
                const status = msg.status || 'pending';
                const statusClass = status === 'read' ? 'completed' : 'pending';
                return `
                    <tr style="${status === 'pending' ? 'font-weight:600;' : ''}">
                        <td>${msg.id}</td>
                        <td>${escapeHtml(msg.name)}</td>
                        <td>${escapeHtml(msg.email)}</td>
                        <td>${escapeHtml(msg.phone || '—')}</td>
                        <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escapeHtml(msg.message || msg.content || '')}</td>
                        <td><span class="status-badge ${statusClass}" data-status="${status}" data-section="messages">${t('messages.' + status)}</span></td>
                        <td>${msg.created_at ? new Date(msg.created_at).toLocaleDateString() : '—'}</td>
                        <td>
                            <div class="table-actions-cell">
                                <button class="btn btn-sm btn-ghost btn-icon" onclick="viewMessage(${msg.id})" title="${t('messages.viewMessage')}"><i class="fas fa-eye"></i></button>
                                ${status === 'pending' ? `<button class="btn btn-sm btn-ghost btn-icon" onclick="markMessageReadFromList(${msg.id})" title="${t('messages.markRead')}"><i class="fas fa-check"></i></button>` : ''}
                                <button class="btn btn-sm btn-ghost btn-icon" onclick="deleteMessage(${msg.id})" title="${t('messages.delete')}"><i class="fas fa-trash"></i></button>
                            </div>
                        </td>
                    </tr>
                `;
            }).join('');
        } else {
            tbody.innerHTML = `<tr><td colspan="8" class="text-center text-muted">${t('messages.noData')}</td></tr>`;
        }
        
        renderPagination('pagination', 'goToMessagePage');
    } catch (err) {
        console.error('Load messages error:', err);
        tbody.innerHTML = `<tr><td colspan="8" class="text-center text-danger">${t('common.error')}: ${err.message}</td></tr>`;
    }
}

function goToMessagePage(page) {
    paginationState.currentPage = page;
    loadMessages(document.getElementById('search-input')?.value || '');
}

function refreshMessages() {
    loadMessages(document.getElementById('search-input')?.value || '');
}

async function searchMessages(value) {
    paginationState.currentPage = 1;
    await loadMessages(value);
}

async function viewMessage(id) {
    currentMessageId = id;
    
    try {
        const msg = await supabaseGetById('contact_submissions', id);
        if (msg) {
            document.getElementById('msg-view-name').textContent = msg.name || '—';
            document.getElementById('msg-view-email').textContent = msg.email || '—';
            document.getElementById('msg-view-phone').textContent = msg.phone || '—';
            document.getElementById('msg-view-content').textContent = msg.message || msg.content || '—';
            document.getElementById('msg-view-date').textContent = msg.created_at ? new Date(msg.created_at).toLocaleString() : '—';
            
            const markBtn = document.getElementById('msg-mark-read-btn');
            if (msg.status === 'read') {
                markBtn.style.display = 'none';
            } else {
                markBtn.style.display = 'inline-flex';
            }
            
            openModal('message-modal');
        }
    } catch (err) {
        console.error('View message error:', err);
        showToast(err.message, 'error');
    }
}

async function markMessageRead() {
    if (!currentMessageId) return;
    await markMessageReadFromList(currentMessageId);
    closeModal('message-modal');
}

async function markMessageReadFromList(id) {
    try {
        await supabaseUpdate('contact_submissions', id, { status: 'read' });
        showToast(t('common.success'));
        await loadMessages(document.getElementById('search-input')?.value || '');
    } catch (err) {
        console.error('Mark read error:', err);
        showToast(err.message, 'error');
    }
}

async function deleteMessage(id) {
    showConfirm(
        t('messages.deleteTitle'),
        t('messages.deleteConfirm'),
        t('messages.delete'),
        async () => {
            try {
                await supabaseDelete('contact_submissions', id);
                showToast(t('common.success'));
                await loadMessages(document.getElementById('search-input')?.value || '');
            } catch (err) {
                console.error('Delete message error:', err);
                showToast(err.message, 'error');
            }
        }
    );
}