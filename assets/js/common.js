/* ============================================================
   ACONCN v2 — Common Components (Top Bar, Nav, Footer)
   ============================================================ */

// Inject Top Bar
function injectTopBar() {
  document.querySelectorAll('[data-include="top-bar"]').forEach(function(el) {
    el.innerHTML =
      '<div class="top-bar">' +
        '<div class="container">' +
          '<div class="top-bar__info">' +
            '<a href="tel:+8613639038913">' +
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>' +
              '+86 136 0303 8913' +
            '</a>' +
            '<a href="mailto:victor@aconcn.com">' +
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>' +
              'victor@aconcn.com' +
            '</a>' +
          '</div>' +
          '<div class="top-bar__tagline" data-lang="topBar.tagline">B2B Industrial Manhole Cover Manufacturer</div>' +
        '</div>' +
      '</div>';
  });
}

// Inject Navigation
function injectNav() {
  document.querySelectorAll('[data-include="nav"]').forEach(function(el) {
    el.innerHTML =
      '<nav class="nav" role="navigation" aria-label="Main navigation">' +
        '<div class="container">' +
          '<a href="index.html" class="nav__logo">' +
            '<span class="nav__logo-text">ACON<span>CN</span></span>' +
          '</a>' +
          '<button class="nav__toggle" aria-label="Toggle menu" onclick="this.classList.toggle(\'active\');document.querySelector(\'.nav__links\').classList.toggle(\'open\')">' +
            '<span></span><span></span><span></span>' +
          '</button>' +
          '<div class="nav__links">' +
            '<a href="index.html" data-lang="nav.home">Home</a>' +
            '<a href="products.html" data-lang="nav.products">Products</a>' +
            '<a href="about.html" data-lang="nav.about">About Us</a>' +
            '<a href="comparison.html" data-lang="nav.comparison">Comparison</a>' +
            '<a href="certifications.html" data-lang="nav.certifications">Certifications</a>' +
            '<a href="news.html" data-lang="nav.news">News</a>' +
            '<a href="contact.html" data-lang="nav.contact">Contact</a>' +
            '<div class="nav__actions">' +
              '<div class="lang-switcher">' +
  '<a href="#" class="lang-switch-btn active" data-lang-target="en" onclick="switchLang(\'en\');return false;">EN</a>' +
  '<span class="separator">|</span>' +
  '<a href="#" class="lang-switch-btn" data-lang-target="zh" onclick="switchLang(\'zh\');return false;">中文</a>' +
'</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</nav>';
  });
}

// Inject Footer
function injectFooter() {
  document.querySelectorAll('[data-include="footer"]').forEach(function(el) {
    el.innerHTML =
      '<footer class="footer" role="contentinfo">' +
        '<div class="container">' +
          '<div class="footer__grid">' +
            '<div class="footer__brand">' +
              '<p class="footer__description" data-lang="footer.description">香港欣東實業有限公司 (Happy Orient Industrial Limited), brand ACONCN — a leading manufacturer of phenolic composite manhole covers, dedicated to providing high-quality infrastructure solutions worldwide since 2000.</p>' +
              '<div class="footer__social">' +
                '<a href="https://wa.me/8613639038913" target="_blank" rel="noopener" aria-label="WhatsApp"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></a>' +
              '<a href="https://www.linkedin.com/in/aconcn666victor" target="_blank" rel="noopener" aria-label="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>' +
              '</div>' +
            '</div>' +
            '<div>' +
              '<h4 class="footer__heading" data-lang="footer.products">Products</h4>' +
              '<div class="footer__links">' +
                '<a href="products.html?category=manhole" data-lang="footer.manholeCovers">Manhole Covers</a>' +
                '<a href="products.html?category=repair-clamps" data-lang="footer.repairClamps">Pipe Repair Clamps</a>' +
                '<a href="products.html?category=rollers" data-lang="footer.rollers">Conveyor Rollers</a>' +
                '<a href="products.html?category=outdoor" data-lang="footer.outdoorProducts">Planters &amp; Bins</a>' +
                '' +
                '<a href="products.html" data-lang="footer.viewAll">View All</a>' +
              '</div>' +
            '</div>' +
            '<div>' +
              '<h4 class="footer__heading" data-lang="footer.support">Support</h4>' +
              '<div class="footer__links">' +
                '<a href="about.html" data-lang="footer.aboutUs">About Us</a>' +
                '<a href="certifications.html" data-lang="footer.certifications">Certifications</a>' +
                '<a href="comparison.html" data-lang="footer.comparison">Comparison</a>' +
                '<a href="news.html" data-lang="footer.newsBlog">News & Blog</a>' +
              '</div>' +
            '</div>' +
            '<div>' +
              '<h4 class="footer__heading" data-lang="footer.contact">Contact</h4>' +
              '<div class="footer__links">' +
                '<a href="tel:+8613639038913">+86 136 0303 8913</a>' +
                '<a href="mailto:victor@aconcn.com">victor@aconcn.com</a>' +
                '<span style="color:var(--color-text-muted);font-size:0.85rem;line-height:1.5">Room 1502, 15/F, 168 Queen\'s Road Central, Hong Kong</span>' +
                '<a href="contact.html" data-lang="footer.getInTouch">Get in Touch</a>' +
                '<a href="contact.html" data-lang="footer.requestQuote">Request Quote</a>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<div class="footer__bottom">' +
            '<div class="footer__copyright" data-lang="footer.copyright">&copy; 2026 ACONCN. All rights reserved.</div>' +
            '<div class="footer__legal">' +
              '<a href="#" data-lang="footer.privacyPolicy">Privacy Policy</a>' +
              '<a href="#" data-lang="footer.termsOfService">Terms of Service</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</footer>';
  });
}

// Initialize mobile menu
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

// Initialize scroll reveal
function initScrollReveal() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(function(el) {
    observer.observe(el);
  });
}

// DOMContentLoaded: Initialize all common components
document.addEventListener('DOMContentLoaded', function() {
  injectTopBar();
  injectNav();
  injectFooter();
  initMobileMenu();
  initScrollReveal();
});

