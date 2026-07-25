// i18n Translation System
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
            default: 'Default: admin / admin123'
        },
        header: {
            welcome: 'Welcome, Admin',
            logout: 'Logout'
        },
        dashboard: {
            title: 'Dashboard',
            totalOrders: 'Total Orders',
            totalRevenue: 'Total Revenue',
            totalCustomers: 'Total Customers',
            totalProducts: 'Total Products',
            salesOverview: 'Sales Overview',
            orderStatus: 'Order Status',
            recentOrders: 'Recent Orders',
            viewAll: 'View All'
        },
        orders: {
            title: 'Orders Management',
            id: 'ID',
            customer: 'Customer',
            product: 'Product',
            quantity: 'Quantity',
            amount: 'Amount',
            status: 'Status',
            date: 'Date',
            actions: 'Actions',
            search: 'Search orders by ID, customer, or product...',
            add: 'Add Order',
            addEdit: 'Add/Edit Order',
            pending: 'Pending',
            processing: 'Processing',
            completed: 'Completed',
            cancelled: 'Cancelled',
            cancel: 'Cancel',
            save: 'Save'
        },
        products: {
            title: 'Products Management',
            id: 'ID',
            name: 'Name',
            category: 'Category',
            loadClass: 'Load Class',
            price: 'Price ($)',
            stock: 'Stock',
            status: 'Status',
            actions: 'Actions',
            search: 'Search products by name, category, or load class...',
            add: 'Add Product',
            addEdit: 'Add/Edit Product',
            productName: 'Product Name',
            placeholderName: 'Enter product name',
            active: 'Active',
            inactive: 'Inactive'
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
            addEdit: 'Add/Edit Customer',
            fullName: 'Full Name',
            placeholderName: 'Enter customer name',
            placeholderCompany: 'Enter company name',
            placeholderEmail: 'Enter email address',
            placeholderPhone: 'Enter phone number',
            placeholderCountry: 'Enter country',
            active: 'Active',
            inactive: 'Inactive'
        },
        nav: {
            dashboard: 'Dashboard',
            orders: 'Orders',
            products: 'Products',
            customers: 'Customers',
            messages: 'Messages'
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
            pending: 'Pending',
            read: 'Read'
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
            default: '默认: admin / admin123'
        },
        header: {
            welcome: '欢迎, 管理员',
            logout: '退出登录'
        },
        dashboard: {
            title: '仪表盘',
            totalOrders: '总订单数',
            totalRevenue: '总收入',
            totalCustomers: '总客户数',
            totalProducts: '总产品数',
            salesOverview: '销售概览',
            orderStatus: '订单状态',
            recentOrders: '最近订单',
            viewAll: '查看全部'
        },
        orders: {
            title: '订单管理',
            id: '订单号',
            customer: '客户',
            product: '产品',
            quantity: '数量',
            amount: '金额',
            status: '状态',
            date: '日期',
            actions: '操作',
            search: '按订单号、客户或产品搜索...',
            add: '添加订单',
            addEdit: '添加/编辑订单',
            pending: '待处理',
            processing: '处理中',
            completed: '已完成',
            cancelled: '已取消',
            cancel: '取消',
            save: '保存'
        },
        products: {
            title: '产品管理',
            id: '编号',
            name: '名称',
            category: '分类',
            loadClass: '承载等级',
            price: '价格 ($)',
            stock: '库存',
            status: '状态',
            actions: '操作',
            search: '按名称、分类或承载等级搜索...',
            add: '添加产品',
            addEdit: '添加/编辑产品',
            productName: '产品名称',
            placeholderName: '请输入产品名称',
            active: '启用',
            inactive: '禁用'
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
            addEdit: '添加/编辑客户',
            fullName: '全名',
            placeholderName: '请输入客户姓名',
            placeholderCompany: '请输入公司名称',
            placeholderEmail: '请输入邮箱地址',
            placeholderPhone: '请输入电话号码',
            placeholderCountry: '请输入国家',
            active: '活跃',
            inactive: '不活跃'
        },
        nav: {
            dashboard: '仪表盘',
            orders: '订单',
            products: '产品',
            customers: '客户',
            messages: '留言'
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
            pending: '未读',
            read: '已读'
        }
    }
};

let currentLang = localStorage.getItem('admin_lang') || 'en';

function getTrans(key) {
    const keys = key.split('.');
    let result = translations[currentLang];
    for (const k of keys) {
        if (result && result[k]) {
            result = result[k];
        } else {
            return key;
        }
    }
    return result;
}

function updateLanguage() {
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        const translation = getTrans(key);
        if (translation) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translation;
            } else {
                el.textContent = translation;
            }
        }
    });
    
    // Update status badges
    document.querySelectorAll('.status-badge.pending').forEach(el => {
        el.textContent = getTrans('orders.pending');
    });
    document.querySelectorAll('.status-badge.processing').forEach(el => {
        el.textContent = getTrans('orders.processing');
    });
    document.querySelectorAll('.status-badge.completed').forEach(el => {
        el.textContent = getTrans('orders.completed');
    });
    document.querySelectorAll('.status-badge.cancelled').forEach(el => {
        el.textContent = getTrans('orders.cancelled');
    });
}

function switchLang(lang) {
    currentLang = lang;
    localStorage.setItem('admin_lang', lang);
    updateLanguage();
}

// Authentication
function checkAuth() {
    if (!localStorage.getItem('admin_logged_in')) {
        window.location.href = 'login.html';
    }
}

function logout() {
    localStorage.removeItem('admin_logged_in');
    window.location.href = 'login.html';
}

// Login
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const logoutBtn = document.getElementById('logout-btn');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Simple authentication
            if (username === 'admin' && password === 'admin123') {
                localStorage.setItem('admin_logged_in', 'true');
                window.location.href = 'index.html';
            } else {
                document.getElementById('error-message').style.display = 'block';
            }
        });
    }
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logout);
    }
});

// Dashboard Data
const dashboardData = {
    totalOrders: 128,
    totalRevenue: 285000,
    totalCustomers: 56,
    totalProducts: 12,
    ordersChange: '+12.5%',
    revenueChange: '+8.3%',
    customersChange: '+5.2%',
    productsChange: '+16.7%'
};

// Orders Data
let ordersData = [
    { id: 'ORD-001', customer: 'John Smith', product: 'D400 Manhole Cover', quantity: 100, amount: 15000, status: 'completed', date: '2026-07-25' },
    { id: 'ORD-002', customer: 'ABC Construction', product: 'E600 Heavy Duty', quantity: 50, amount: 12500, status: 'processing', date: '2026-07-24' },
    { id: 'ORD-003', customer: 'Euro Infrastructure', product: 'F900 Airport', quantity: 30, amount: 13500, status: 'pending', date: '2026-07-23' },
    { id: 'ORD-004', customer: 'Port Authority', product: 'Drainage Grating', quantity: 200, amount: 8000, status: 'completed', date: '2026-07-22' },
    { id: 'ORD-005', customer: 'Urban Developers', product: 'D400 Manhole Cover', quantity: 150, amount: 22500, status: 'processing', date: '2026-07-21' },
    { id: 'ORD-006', customer: 'Industrial Corp', product: 'E600 Heavy Duty', quantity: 80, amount: 20000, status: 'pending', date: '2026-07-20' },
    { id: 'ORD-007', customer: 'Municipal Works', product: 'D400 Manhole Cover', quantity: 300, amount: 45000, status: 'completed', date: '2026-07-19' },
    { id: 'ORD-008', customer: 'Railway Company', product: 'F900 Airport', quantity: 40, amount: 18000, status: 'cancelled', date: '2026-07-18' }
];

// Products Data
let productsData = [
    { id: 1, name: 'D400 Road Manhole Cover', category: 'Manhole Covers', loadClass: 'D400', price: 150, stock: 500, status: 'active' },
    { id: 2, name: 'E600 Heavy Duty Cover', category: 'Manhole Covers', loadClass: 'E600', price: 250, stock: 300, status: 'active' },
    { id: 3, name: 'F900 Airport Cover', category: 'Manhole Covers', loadClass: 'F900', price: 450, stock: 150, status: 'active' },
    { id: 4, name: 'Composite Drainage Grating', category: 'Drainage', loadClass: 'C250', price: 40, stock: 1000, status: 'active' },
    { id: 5, name: 'B125 Pedestrian Cover', category: 'Manhole Covers', loadClass: 'B125', price: 80, stock: 800, status: 'active' },
    { id: 6, name: 'C250 Light Traffic', category: 'Manhole Covers', loadClass: 'C250', price: 120, stock: 600, status: 'active' },
    { id: 7, name: 'Custom Size Cover', category: 'Custom', loadClass: 'Custom', price: 0, stock: 0, status: 'active' },
    { id: 8, name: 'Frame & Cover Set', category: 'Accessories', loadClass: 'D400', price: 180, stock: 400, status: 'active' }
];

// Customers Data
let customersData = [
    { id: 1, name: 'John Smith', company: 'ABC Construction', email: 'john@abc.com', phone: '+1 555 0123', country: 'USA', status: 'active' },
    { id: 2, name: 'Peter Müller', company: 'Euro Infrastructure', email: 'peter@euro.de', phone: '+49 170 123456', country: 'Germany', status: 'active' },
    { id: 3, name: 'Jean Dupont', company: 'French Drainage', email: 'jean@french.fr', phone: '+33 1 2345 6789', country: 'France', status: 'active' },
    { id: 4, name: 'Port Authority', company: 'Harbour Management', email: 'contact@port.com', phone: '+852 2812 3456', country: 'Hong Kong', status: 'active' },
    { id: 5, name: 'Municipal Works', company: 'City Council', email: 'procurement@city.gov', phone: '+86 10 1234 5678', country: 'China', status: 'active' },
    { id: 6, name: 'Industrial Corp', company: 'Manufacturing', email: 'purchasing@industrial.com', phone: '+44 20 7946 0958', country: 'UK', status: 'inactive' },
    { id: 7, name: 'Railway Company', company: 'National Rail', email: 'supply@railway.co.uk', phone: '+44 121 234 5678', country: 'UK', status: 'active' },
    { id: 8, name: 'Urban Developers', company: 'Real Estate', email: 'dev@urban.com', phone: '+61 2 9876 5432', country: 'Australia', status: 'active' }
];

// Render Dashboard
function renderDashboard() {
    document.getElementById('total-orders').textContent = dashboardData.totalOrders;
    document.getElementById('orders-change').textContent = dashboardData.ordersChange;
    document.getElementById('orders-change').className = 'stat-change ' + (dashboardData.ordersChange.includes('+') ? 'positive' : 'negative');
    
    document.getElementById('total-revenue').textContent = '$' + dashboardData.totalRevenue.toLocaleString();
    document.getElementById('revenue-change').textContent = dashboardData.revenueChange;
    document.getElementById('revenue-change').className = 'stat-change ' + (dashboardData.revenueChange.includes('+') ? 'positive' : 'negative');
    
    document.getElementById('total-customers').textContent = dashboardData.totalCustomers;
    document.getElementById('customers-change').textContent = dashboardData.customersChange;
    document.getElementById('customers-change').className = 'stat-change ' + (dashboardData.customersChange.includes('+') ? 'positive' : 'negative');
    
    document.getElementById('total-products').textContent = dashboardData.totalProducts;
    document.getElementById('products-change').textContent = dashboardData.productsChange;
    document.getElementById('products-change').className = 'stat-change ' + (dashboardData.productsChange.includes('+') ? 'positive' : 'negative');
    
    renderOrdersTable(ordersData.slice(0, 5));
}

// Render Orders Table
function renderOrdersTable(data) {
    const tableBody = document.getElementById('orders-table-body');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    data.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.id}</td>
            <td>${order.customer}</td>
            <td>${order.product}</td>
            <td>${order.quantity}</td>
            <td>$${order.amount.toLocaleString()}</td>
            <td><span class="status-badge ${order.status}" data-lang="orders.${order.status}">${getStatusText(order.status)}</span></td>
            <td>${order.date}</td>
            <td>
                <div class="actions">
                    <button class="action-btn view" onclick="viewOrder('${order.id}')"><i class="fas fa-eye"></i></button>
                    <button class="action-btn edit" onclick="editOrder('${order.id}')"><i class="fas fa-edit"></i></button>
                    <button class="action-btn delete" onclick="deleteOrder('${order.id}')"><i class="fas fa-trash"></i></button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });
    updateLanguage();
}

function getStatusText(status) {
    const texts = {
        'pending': 'Pending',
        'processing': 'Processing',
        'completed': 'Completed',
        'cancelled': 'Cancelled'
    };
    return texts[status] || status;
}

// Render Products Table
function renderProductsTable(data) {
    const tableBody = document.getElementById('products-table-body');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    data.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>${product.loadClass}</td>
            <td>$${product.price}</td>
            <td>${product.stock}</td>
            <td><span class="status-badge ${product.status === 'active' ? 'completed' : 'pending'}" data-lang="products.${product.status}">${product.status === 'active' ? 'Active' : 'Inactive'}</span></td>
            <td>
                <div class="actions">
                    <button class="action-btn edit" onclick="editProduct(${product.id})"><i class="fas fa-edit"></i></button>
                    <button class="action-btn delete" onclick="deleteProduct(${product.id})"><i class="fas fa-trash"></i></button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });
    updateLanguage();
}

// Render Customers Table
function renderCustomersTable(data) {
    const tableBody = document.getElementById('customers-table-body');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    data.forEach(customer => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.company}</td>
            <td>${customer.email}</td>
            <td>${customer.phone}</td>
            <td>${customer.country}</td>
            <td><span class="status-badge ${customer.status === 'active' ? 'completed' : 'cancelled'}" data-lang="customers.${customer.status}">${customer.status === 'active' ? 'Active' : 'Inactive'}</span></td>
            <td>
                <div class="actions">
                    <button class="action-btn view" onclick="viewCustomer(${customer.id})"><i class="fas fa-eye"></i></button>
                    <button class="action-btn edit" onclick="editCustomer(${customer.id})"><i class="fas fa-edit"></i></button>
                    <button class="action-btn delete" onclick="deleteCustomer(${customer.id})"><i class="fas fa-trash"></i></button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });
    updateLanguage();
}

// Modal Functions
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Order Functions
function viewOrder(orderId) {
    const order = ordersData.find(o => o.id === orderId);
    if (order) {
        alert(`Order Details:\nID: ${order.id}\nCustomer: ${order.customer}\nProduct: ${order.product}\nAmount: $${order.amount}`);
    }
}

function editOrder(orderId) {
    openModal('order-modal');
    const order = ordersData.find(o => o.id === orderId);
    if (order) {
        document.getElementById('order-id').value = order.id;
        document.getElementById('order-customer').value = order.customer;
        document.getElementById('order-product').value = order.product;
        document.getElementById('order-quantity').value = order.quantity;
        document.getElementById('order-amount').value = order.amount;
        document.getElementById('order-status').value = order.status;
    }
}

function deleteOrder(orderId) {
    if (confirm('Are you sure you want to delete this order?')) {
        ordersData = ordersData.filter(o => o.id !== orderId);
        renderOrdersTable(ordersData);
    }
}

// Product Functions
function addProduct() {
    openModal('product-modal');
    document.getElementById('product-form').reset();
    document.getElementById('product-id').value = '';
}

function editProduct(productId) {
    openModal('product-modal');
    const product = productsData.find(p => p.id === productId);
    if (product) {
        document.getElementById('product-id').value = product.id;
        document.getElementById('product-name').value = product.name;
        document.getElementById('product-category').value = product.category;
        document.getElementById('product-loadclass').value = product.loadClass;
        document.getElementById('product-price').value = product.price;
        document.getElementById('product-stock').value = product.stock;
        document.getElementById('product-status').value = product.status;
    }
}

function deleteProduct(productId) {
    if (confirm('Are you sure you want to delete this product?')) {
        productsData = productsData.filter(p => p.id !== productId);
        renderProductsTable(productsData);
    }
}

// Customer Functions
function viewCustomer(customerId) {
    const customer = customersData.find(c => c.id === customerId);
    if (customer) {
        alert(`Customer Details:\nName: ${customer.name}\nCompany: ${customer.company}\nEmail: ${customer.email}\nCountry: ${customer.country}`);
    }
}

function editCustomer(customerId) {
    openModal('customer-modal');
    const customer = customersData.find(c => c.id === customerId);
    if (customer) {
        document.getElementById('customer-id').value = customer.id;
        document.getElementById('customer-name').value = customer.name;
        document.getElementById('customer-company').value = customer.company;
        document.getElementById('customer-email').value = customer.email;
        document.getElementById('customer-phone').value = customer.phone;
        document.getElementById('customer-country').value = customer.country;
        document.getElementById('customer-status').value = customer.status;
    }
}

function deleteCustomer(customerId) {
    if (confirm('Are you sure you want to delete this customer?')) {
        customersData = customersData.filter(c => c.id !== customerId);
        renderCustomersTable(customersData);
    }
}

// Save Functions
function saveOrder() {
    const id = document.getElementById('order-id').value;
    const order = {
        id: id,
        customer: document.getElementById('order-customer').value,
        product: document.getElementById('order-product').value,
        quantity: parseInt(document.getElementById('order-quantity').value),
        amount: parseInt(document.getElementById('order-amount').value),
        status: document.getElementById('order-status').value,
        date: new Date().toISOString().split('T')[0]
    };
    
    const index = ordersData.findIndex(o => o.id === id);
    if (index >= 0) {
        ordersData[index] = order;
    } else {
        order.id = 'ORD-' + String(ordersData.length + 1).padStart(3, '0');
        ordersData.unshift(order);
    }
    
    closeModal('order-modal');
    renderOrdersTable(ordersData);
}

function saveProduct() {
    const id = document.getElementById('product-id').value;
    const product = {
        id: id ? parseInt(id) : productsData.length + 1,
        name: document.getElementById('product-name').value,
        category: document.getElementById('product-category').value,
        loadClass: document.getElementById('product-loadclass').value,
        price: parseFloat(document.getElementById('product-price').value),
        stock: parseInt(document.getElementById('product-stock').value),
        status: document.getElementById('product-status').value
    };
    
    const index = productsData.findIndex(p => p.id === product.id);
    if (index >= 0) {
        productsData[index] = product;
    } else {
        productsData.push(product);
    }
    
    closeModal('product-modal');
    renderProductsTable(productsData);
}

function saveCustomer() {
    const id = document.getElementById('customer-id').value;
    const customer = {
        id: id ? parseInt(id) : customersData.length + 1,
        name: document.getElementById('customer-name').value,
        company: document.getElementById('customer-company').value,
        email: document.getElementById('customer-email').value,
        phone: document.getElementById('customer-phone').value,
        country: document.getElementById('customer-country').value,
        status: document.getElementById('customer-status').value
    };
    
    const index = customersData.findIndex(c => c.id === customer.id);
    if (index >= 0) {
        customersData[index] = customer;
    } else {
        customersData.push(customer);
    }
    
    closeModal('customer-modal');
    renderCustomersTable(customersData);
}

// Search Functions
function searchOrders() {
    const keyword = document.getElementById('search-orders').value.toLowerCase();
    const filtered = ordersData.filter(o => 
        o.id.toLowerCase().includes(keyword) ||
        o.customer.toLowerCase().includes(keyword) ||
        o.product.toLowerCase().includes(keyword)
    );
    renderOrdersTable(filtered);
}

function searchProducts() {
    const keyword = document.getElementById('search-products').value.toLowerCase();
    const filtered = productsData.filter(p => 
        p.name.toLowerCase().includes(keyword) ||
        p.category.toLowerCase().includes(keyword) ||
        p.loadClass.toLowerCase().includes(keyword)
    );
    renderProductsTable(filtered);
}

function searchCustomers() {
    const keyword = document.getElementById('search-customers').value.toLowerCase();
    const filtered = customersData.filter(c => 
        c.name.toLowerCase().includes(keyword) ||
        c.company.toLowerCase().includes(keyword) ||
        c.country.toLowerCase().includes(keyword)
    );
    renderCustomersTable(filtered);
}