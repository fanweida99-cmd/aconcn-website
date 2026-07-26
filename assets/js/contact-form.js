// Contact Form Handler
// This file is separate to avoid any variable conflicts with script.js

var currentLang = 'en';

var translations = {
    en: {
        nav: {
            home: 'Home',
            about: 'About Us',
            products: 'Products',
            comparison: 'Comparison',
            certifications: 'Certifications',
            contact: 'Contact'
        },
        contact: {
            title: 'Contact Us',
            subtitle: 'Get in touch with our team',
            name: 'Name',
            email: 'Email',
            phone: 'Phone',
            message: 'Message',
            send: 'Send Message',
            companyName: 'Hong Kong Xindong Industrial Co., Ltd.',
            companyTagline: 'ACONCN Composite Infrastructure Solutions',
            whatsapp: 'WhatsApp',
            linkedin: 'LinkedIn',
            businessHours: 'Business Hours',
            businessHoursDesc: 'Monday - Friday: 9:00 - 18:00 (UTC+8)',
            yourNamePlaceholder: 'Your name',
            emailPlaceholder: 'your@email.com',
            phonePlaceholder: '+86 xxx xxxx xxxx',
            messagePlaceholder: 'Tell us about your project requirements...',
            success: 'Thank you! Your email client will open shortly. We will contact you within 24 hours.',
            error: 'Oops! Something went wrong. Please try again later.',
            invalidEmail: 'Please enter a valid email address.'
        },
        common: {
            address: 'Address'
        },
        footer: {
            products: 'Products',
            services: 'Services',
            company: 'Company',
            contact: 'Contact',
            phone: 'Phone:',
            email: 'Email:',
            address: 'Address:',
            manholeCovers: 'Manhole Covers',
            drainageGrates: 'Drainage Grates',
            customSolutions: 'Custom Solutions',
            aboutUs: 'About Us',
            caseStudies: 'Case Studies',
            certifications: 'Certifications',
            companyDesc: 'High-performance composite infrastructure solutions for global markets.',
            copyright: '&copy; 2024 Hong Kong Xindong Industrial Co., Ltd. All rights reserved.',
            followUs: 'Follow Us'
        }
    },
    zh: {
        nav: {
            home: '首页',
            about: '关于我们',
            products: '产品',
            comparison: '对比分析',
            certifications: '认证资质',
            contact: '联系我们'
        },
        contact: {
            title: '联系我们',
            subtitle: '与我们的团队联系',
            name: '姓名',
            email: '邮箱',
            phone: '电话',
            message: '留言',
            send: '发送消息',
            companyName: '香港欣东实业有限公司',
            companyTagline: 'ACONCN复合材料基础设施解决方案',
            whatsapp: 'WhatsApp',
            linkedin: '领英',
            businessHours: '营业时间',
            businessHoursDesc: '周一至周五: 9:00 - 18:00 (UTC+8)',
            yourNamePlaceholder: '您的姓名',
            emailPlaceholder: 'your@email.com',
            phonePlaceholder: '+86 xxx xxxx xxxx',
            messagePlaceholder: '请告诉我们您的项目需求...',
            success: '感谢您的留言！您的邮件客户端将立即打开。我们将在24小时内与您联系。',
            error: '发送失败！请稍后重试。',
            invalidEmail: '请输入有效的邮箱地址。'
        },
        common: {
            address: '地址'
        },
        footer: {
            products: '产品',
            services: '服务',
            company: '公司',
            contact: '联系',
            phone: '电话:',
            email: '邮箱:',
            address: '地址:',
            manholeCovers: '井盖',
            drainageGrates: '排水格栅',
            customSolutions: '定制方案',
            aboutUs: '关于我们',
            caseStudies: '工程案例',
            certifications: '认证资质',
            companyDesc: '高性能复合材料基础设施解决方案，服务全球市场。',
            copyright: '&copy; 2024 香港欣东实业有限公司 版权所有。',
            followUs: '关注我们'
        }
    },
    de: {
        nav: {
            home: 'Startseite',
            about: 'Über Uns',
            products: 'Produkte',
            comparison: 'Vergleich',
            certifications: 'Zertifizierungen',
            contact: 'Kontakt'
        },
        contact: {
            title: 'Kontakt',
            subtitle: 'Kontaktieren Sie unser Team',
            name: 'Name',
            email: 'E-Mail',
            phone: 'Telefon',
            message: 'Nachricht',
            send: 'Nachricht senden',
            companyName: 'Hong Kong Xindong Industrial Co., Ltd.',
            companyTagline: 'ACONCN Verbundwerkstoff-Infrastrukturlösungen',
            whatsapp: 'WhatsApp',
            linkedin: 'LinkedIn',
            businessHours: 'Geschäftszeiten',
            businessHoursDesc: 'Montag - Freitag: 9:00 - 18:00 (UTC+8)',
            yourNamePlaceholder: 'Ihr Name',
            emailPlaceholder: 'Ihre E-Mail',
            phonePlaceholder: '+86 xxx xxxx xxxx',
            messagePlaceholder: 'Beschreiben Sie Ihre Projektanforderungen...',
            success: 'Vielen Dank! Ihr E-Mail-Client wird bald geöffnet. Wir kontaktieren Sie innerhalb von 24 Stunden.',
            error: 'Oops! Etwas ist schiefgelaufen. Bitte versuchen Sie es später erneut.',
            invalidEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
        },
        common: {
            address: 'Adresse'
        },
        footer: {
            products: 'Produkte',
            services: 'Dienste',
            company: 'Firma',
            contact: 'Kontakt',
            phone: 'Telefon:',
            email: 'E-Mail:',
            address: 'Adresse:',
            manholeCovers: 'Deckel',
            drainageGrates: 'Entwässerungsgitter',
            customSolutions: 'Maßanfertigungen',
            aboutUs: 'Über Uns',
            caseStudies: 'Fallstudien',
            certifications: 'Zertifizierungen',
            companyDesc: 'Hochleistungs-Verbundwerkstoff-Infrastrukturlösungen für globale Märkte.',
            copyright: '&copy; 2024 Hong Kong Xindong Industrial Co., Ltd. Alle Rechte vorbehalten.',
            followUs: 'Folgen Sie uns'
        }
    },
    fr: {
        nav: {
            home: 'Accueil',
            about: 'À Propos',
            products: 'Produits',
            comparison: 'Comparaison',
            certifications: 'Certifications',
            contact: 'Contact'
        },
        contact: {
            title: 'Contact',
            subtitle: 'Contactez notre équipe',
            name: 'Nom',
            email: 'Email',
            phone: 'Téléphone',
            message: 'Message',
            send: 'Envoyer le message',
            companyName: 'Hong Kong Xindong Industrial Co., Ltd.',
            companyTagline: 'ACONCN Solutions d\'infrastructure en composites',
            whatsapp: 'WhatsApp',
            linkedin: 'LinkedIn',
            businessHours: 'Heures d\'ouverture',
            businessHoursDesc: 'Lundi - Vendredi: 9:00 - 18:00 (UTC+8)',
            yourNamePlaceholder: 'Votre nom',
            emailPlaceholder: 'votre@email.com',
            phonePlaceholder: '+86 xxx xxxx xxxx',
            messagePlaceholder: 'Décrivez vos exigences de projet...',
            success: 'Merci ! Votre client de messagerie va s\'ouvrir bientôt. Nous vous contacterons dans les 24 heures.',
            error: 'Oups ! Quelque chose a mal fonctionné. Veuillez réessayer plus tard.',
            invalidEmail: 'Veuillez entrer une adresse e-mail valide.'
        },
        common: {
            address: 'Adresse'
        },
        footer: {
            products: 'Produits',
            services: 'Services',
            company: 'Entreprise',
            contact: 'Contact',
            phone: 'Téléphone:',
            email: 'Email:',
            address: 'Adresse:',
            manholeCovers: 'Couvercles',
            drainageGrates: 'Grilles de drainage',
            customSolutions: 'Solutions sur mesure',
            aboutUs: 'À Propos',
            caseStudies: 'Études de Cas',
            certifications: 'Certifications',
            companyDesc: 'Solutions d\'infrastructure en matériaux composites de haute performance pour les marchés mondiaux.',
            copyright: '&copy; 2024 Hong Kong Xindong Industrial Co., Ltd. Tous droits réservés.',
            followUs: 'Suivez-nous'
        }
    }
};

function initLanguage() {
    var savedLang = localStorage.getItem('lang') || 'en';
    currentLang = savedLang;
    updateLanguage();
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    updateLanguage();
}

function updateLanguage() {
    var langData = translations[currentLang];
    
    document.querySelectorAll('[data-lang]').forEach(function(el) {
        var key = el.getAttribute('data-lang');
        var value = getNestedValue(langData, key);
        if (value !== null && value !== undefined) {
            el.textContent = value;
        }
    });

    document.querySelectorAll('[data-lang-placeholder]').forEach(function(el) {
        var key = el.getAttribute('data-lang-placeholder');
        var value = getNestedValue(langData, key);
        if (value) {
            el.setAttribute('placeholder', value);
        }
    });

    document.querySelectorAll('.lang-btn').forEach(function(btn) {
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function getNestedValue(obj, key) {
    return key.split('.').reduce(function(o, k) {
        return (o && o[k]) ? o[k] : null;
    }, obj);
}

function getTranslation(key) {
    var langData = translations[currentLang];
    return getNestedValue(langData, key);
}

function toggleMobileMenu() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

function handleScroll() {
    var nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}

function handleContactForm(event) {
    event.preventDefault();
    
    var form = event.target;
    var messageDiv = document.getElementById('form-message');
    var submitBtn = form.querySelector('button[type="submit"]');
    
    if (messageDiv) messageDiv.style.display = 'none';
    
    var name = form.querySelector('input[name="name"]').value;
    var email = form.querySelector('input[name="email"]').value;
    var phone = form.querySelector('input[name="phone"]').value || '';
    var message = form.querySelector('textarea[name="message"]').value;
    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showFormMessage(getTranslation('contact.invalidEmail'), 'error');
        return;
    }
    
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    }
    
    var sbUrl = 'https://nutgspxepoguoxdicjqh.supabase.co';
    var sbKey = 'sb_publishable_nJOFhl2P0vu_UlVchzDhMQ__dk7nJgM';
    
    var subject = encodeURIComponent('Contact Form Submission - ACONCN Website');
    var body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\nPhone: ' + phone + '\n\nMessage:\n' + message);
    var mailtoLink = 'mailto:victor@aconcn.com?subject=' + subject + '&body=' + body + '&reply-to=' + email;
    
    fetch(sbUrl + '/rest/v1/contact_submissions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'apikey': sbKey,
            'Authorization': 'Bearer ' + sbKey
        },
        body: JSON.stringify({ name: name, email: email, phone: phone, message: message, status: 'pending' })
    })
    .then(function(response) {
        if (!response.ok) {
            return response.json().then(function(errorData) {
                throw new Error(errorData.message || 'Failed to submit');
            });
        }
        return response.json();
    })
    .then(function() {
        showFormMessage(getTranslation('contact.success'), 'success');
        form.reset();
        setTimeout(function() {
            window.location.href = mailtoLink;
        }, 2000);
    })
    .catch(function(error) {
        console.error('Form submission error:', error);
        showFormMessage(getTranslation('contact.error'), 'error');
        setTimeout(function() {
            window.location.href = mailtoLink;
        }, 2000);
    })
    .finally(function() {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = getTranslation('contact.send');
        }
    });
}

function showFormMessage(message, type) {
    var messageDiv = document.getElementById('form-message');
    if (!messageDiv) return;
    
    messageDiv.textContent = message;
    messageDiv.style.display = 'block';
    
    if (type === 'success') {
        messageDiv.style.backgroundColor = '#DCFCE7';
        messageDiv.style.color = '#16A34A';
        messageDiv.style.border = '1px solid #BBF7D0';
    } else {
        messageDiv.style.backgroundColor = '#FEE2E2';
        messageDiv.style.color = '#DC2626';
        messageDiv.style.border = '1px solid #FECACA';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initLanguage();
    
    window.addEventListener('scroll', handleScroll);
    
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            setLanguage(btn.dataset.lang);
        });
    });
    
    document.querySelector('.hamburger')?.addEventListener('click', toggleMobileMenu);
    
    document.querySelectorAll('.nav-links a').forEach(function(link) {
        link.addEventListener('click', function(e) {
            var href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
            }
        });
    });
});