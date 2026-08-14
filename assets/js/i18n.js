/* ============================================================
   ACONCN v2 — Frontend i18n Translation System
   ============================================================ */

const i18nData = {
    en: {
        nav: {
            home: 'Home',
            products: 'Products',
            about: 'About Us',
            comparison: 'Comparison',
            certifications: 'Certifications',
            news: 'News',
            contact: 'Contact'
        },
        hero: {
            subtitle: 'EN 124 Certified',
            title: 'Composite Manhole Covers<br>Engineered for <span>Infrastructure</span>',
            description: 'ACONCN delivers premium composite manhole covers and access solutions trusted by infrastructure projects across 50+ countries. Engineered for durability, safety, and compliance with international standards.',
            getQuote: 'Get Quote',
            viewProducts: 'View Products'
        },
        stats: {
            years: 'Years of Excellence',
            units: 'Units Installed',
            countries: 'Countries Served',
            quality: 'Quality Rate'
        },
        footer: {
            description: 'ACONCN is a leading manufacturer of composite manhole covers, dedicated to providing high-quality infrastructure solutions worldwide since 2000.',
            products: 'Products',
            manholeCovers: 'Manhole Covers',
            outdoorProducts: 'Outdoor Products',
            gratings: 'Gratings',
            viewAll: 'View All',
            support: 'Support',
            aboutUs: 'About Us',
            certifications: 'Certifications',
            comparison: 'Comparison',
            newsBlog: 'News & Blog',
            contact: 'Contact',
            phone: '+86 136 0303 8913',
            email: 'victor@aconcn.com',
            getInTouch: 'Get in Touch',
            requestQuote: 'Request Quote',
            copyright: '© 2026 ACONCN. All rights reserved.',
            privacyPolicy: 'Privacy Policy',
            termsOfService: 'Terms of Service'
        },
        common: {
            days: 'Years',
            installed: 'Installed',
            served: 'Served',
            rate: 'Rate'
        }
    },
    zh: {
        nav: {
            home: '首页',
            products: '产品中心',
            about: '关于我们',
            comparison: '对比分析',
            certifications: '认证资质',
            news: '新闻动态',
            contact: '联系我们'
        },
        hero: {
            subtitle: 'EN 124 认证',
            title: '复合材料井盖<br>为<span>基础设施</span>而生',
            description: 'ACONCN 提供优质复合材料井盖及检修解决方案，受到全球 50 多个国家基础设施项目的信赖。工程设计的耐久性、安全性和国际标准合规性。',
            getQuote: '获取报价',
            viewProducts: '查看产品'
        },
        stats: {
            years: '年行业经验',
            units: '套已安装',
            countries: '个国家',
            quality: '品质合格率'
        },
        footer: {
            description: 'ACONCN 是复合材料井盖的领先制造商，自 2000 年以来致力于为全球提供高质量的基础设施解决方案。',
            products: '产品',
            manholeCovers: '井盖',
            outdoorProducts: '户外产品',
            gratings: '格栅',
            viewAll: '查看全部',
            support: '支持',
            aboutUs: '关于我们',
            certifications: '认证资质',
            comparison: '对比分析',
            newsBlog: '新闻动态',
            contact: '联系方式',
            phone: '+86 136 0303 8913',
            email: 'victor@aconcn.com',
            getInTouch: '联系我们',
            requestQuote: '获取报价',
            copyright: '© 2026 ACONCN。保留所有权利。',
            privacyPolicy: '隐私政策',
            termsOfService: '服务条款'
        },
        common: {
            days: '年',
            installed: '已安装',
            served: '服务国家',
            rate: '合格率'
        }
    }
};

var currentLang = localStorage.getItem('frontend_lang') || 'en';

function t(path) {
    var keys = path.split('.');
    var obj = i18nData[currentLang] || i18nData.en;
    for (var i = 0; i < keys.length; i++) {
        if (obj && obj[keys[i]] !== undefined) {
            obj = obj[keys[i]];
        } else {
            // Fallback to English
            obj = i18nData.en;
            for (var j = 0; j < keys.length; j++) {
                if (obj && obj[keys[j]] !== undefined) {
                    obj = obj[keys[j]];
                } else {
                    return path;
                }
            }
            return obj;
        }
    }
    return obj;
}

function switchLang(lang) {
    if (lang === currentLang) return;
    currentLang = lang;
    localStorage.setItem('frontend_lang', lang);
    applyTranslations();
}

function applyTranslations() {
    // Update all data-lang elements
    document.querySelectorAll('[data-lang]').forEach(function(el) {
        var key = el.getAttribute('data-lang');
        var text = t(key);
        if (text && text !== key) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = text;
            } else {
                el.innerHTML = text;
            }
        }
    });

    // Update lang switcher buttons
    var langSwitch = document.getElementById('lang-switch');
    if (langSwitch) {
        langSwitch.textContent = currentLang === 'en' ? '中' : 'English';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    applyTranslations();
});