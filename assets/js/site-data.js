/* ============================================================
   ACONCN v2 — Site Data Loader
   Fetches data from Supabase and renders on frontend pages.
   ============================================================ */

/* ---------- Supabase Config ---------- */
const SUPABASE_URL = 'https://nutgspxepoguoxdicjqh.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_nJOFhl2P0vu_UlVchzDhMQ__dk7nJgM';

/* ---------- Supabase Fetch Helper ---------- */
async function sbGet(table, options) {
  options = options || {};
  var params = [];
  if (options.select) params.push('select=' + encodeURIComponent(options.select));
  if (options.order) params.push('order=' + encodeURIComponent(options.order));
  if (options.limit) params.push('limit=' + encodeURIComponent(options.limit));
  if (options.status) params.push('status=eq.' + encodeURIComponent(options.status));

  var queryString = params.length > 0 ? '?' + params.join('&') : '';
  var url = SUPABASE_URL + '/rest/v1/' + table + queryString;

  try {
    var res = await fetch(url, {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': 'Bearer ' + SUPABASE_ANON_KEY
      }
    });
    if (!res.ok) return null;
    return res.json();
  } catch (e) {
    return null;
  }
}

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

/* ---------- Default Data ---------- */
var DEFAULT_PRODUCTS = [
  {
    id: 1,
    name: 'D400 Composite Manhole Cover',
    category: 'Manhole Covers',
    load_class: 'D400',
    price: 45.00,
    image: 'assets/images/products/d400.svg',
    description: 'EN 124 D400 rated composite manhole cover suitable for roadways and pedestrian areas. 70% lighter than cast iron with superior durability.',
    specs: [
      { name: 'Standard', value: 'EN 124' },
      { name: 'Load Class', value: 'D400 (40 tons)' },
      { name: 'Material', value: 'SMC / BMC Composite' },
      { name: 'Clear Opening', value: '600 x 600 mm' },
      { name: 'Weight', value: '~35 kg' },
      { name: 'Color', value: 'Black / Custom' },
      { name: 'Anti-Slip', value: 'Yes — Class 3' },
      { name: 'Anti-Theft', value: 'Yes (No Scrap Value)' }
    ]
  },
  {
    id: 2,
    name: 'E600 Heavy-Duty Cover',
    category: 'Manhole Covers',
    load_class: 'E600',
    price: 68.00,
    image: 'assets/images/products/e600.svg',
    description: 'EN 124 E600 rated heavy-duty composite cover for main roads and highways. Maximum load capacity with minimal weight.',
    specs: [
      { name: 'Standard', value: 'EN 124' },
      { name: 'Load Class', value: 'E600 (60 tons)' },
      { name: 'Material', value: 'SMC / BMC Composite' },
      { name: 'Clear Opening', value: '600 x 600 mm' },
      { name: 'Weight', value: '~42 kg' },
      { name: 'Color', value: 'Black / Custom' },
      { name: 'Anti-Slip', value: 'Yes — Class 3' },
      { name: 'Anti-Theft', value: 'Yes (No Scrap Value)' }
    ]
  },
  {
    id: 3,
    name: 'F900 Airport-Grade Cover',
    category: 'Manhole Covers',
    load_class: 'F900',
    price: 120.00,
    image: 'assets/images/products/f900.svg',
    description: 'EN 124 F900 rated composite cover for airports, ports, and heavy industrial zones. The highest load class available.',
    specs: [
      { name: 'Standard', value: 'EN 124' },
      { name: 'Load Class', value: 'F900 (90 tons)' },
      { name: 'Material', value: 'SMC / BMC Composite' },
      { name: 'Clear Opening', value: '600 x 600 mm' },
      { name: 'Weight', value: '~55 kg' },
      { name: 'Color', value: 'Black / Custom' },
      { name: 'Anti-Slip', value: 'Yes — Class 4' },
      { name: 'Anti-Theft', value: 'Yes (No Scrap Value)' }
    ]
  },
  {
    id: 4,
    name: 'B125 Pedestrian Cover',
    category: 'Outdoor Products',
    load_class: 'B125',
    price: 28.00,
    image: 'assets/images/products/b125.svg',
    description: 'EN 124 B125 rated composite cover for pedestrian areas, parks, and sidewalks. Lightweight and easy to install.',
    specs: [
      { name: 'Standard', value: 'EN 124' },
      { name: 'Load Class', value: 'B125 (12.5 tons)' },
      { name: 'Material', value: 'SMC / BMC Composite' },
      { name: 'Clear Opening', value: '600 x 600 mm' },
      { name: 'Weight', value: '~22 kg' },
      { name: 'Color', value: 'Black / Green / Custom' },
      { name: 'Anti-Slip', value: 'Yes — Class 2' },
      { name: 'Anti-Theft', value: 'Yes (No Scrap Value)' }
    ]
  },
  {
    id: 5,
    name: 'C250 Residential Cover',
    category: 'Outdoor Products',
    load_class: 'C250',
    price: 36.00,
    image: 'assets/images/products/c250.svg',
    description: 'EN 124 C250 rated composite cover for residential areas, driveways, and car parks. Reliable and cost-effective.',
    specs: [
      { name: 'Standard', value: 'EN 124' },
      { name: 'Load Class', value: 'C250 (25 tons)' },
      { name: 'Material', value: 'SMC / BMC Composite' },
      { name: 'Clear Opening', value: '600 x 600 mm' },
      { name: 'Weight', value: '~28 kg' },
      { name: 'Color', value: 'Black / Custom' },
      { name: 'Anti-Slip', value: 'Yes — Class 2' },
      { name: 'Anti-Theft', value: 'Yes (No Scrap Value)' }
    ]
  }
];

var DEFAULT_CERTIFICATIONS = [
  {
    id: 1,
    name: 'EN 124 Certification',
    description: 'Our products fully comply with EN 124 European standard for manhole covers and gully tops, tested for load-bearing capacity, durability, and safety.',
    image: 'assets/images/certs/en124.svg',
    category: 'EN 124'
  },
  {
    id: 2,
    name: 'ISO 9001:2015',
    description: 'Our quality management system is ISO 9001:2015 certified, ensuring consistent product quality, process control, and continuous improvement.',
    image: 'assets/images/certs/iso9001.svg',
    category: 'ISO'
  },
  {
    id: 3,
    name: 'SGS Product Verification',
    description: 'SGS verified product quality and performance. Our products undergo independent testing for material composition, load capacity, and dimensional accuracy.',
    image: 'assets/images/certs/sgs.svg',
    category: 'SGS'
  }
];

var DEFAULT_NEWS = [
  {
    id: 1,
    title: 'ACONCN Expands Composite Manhole Cover Production Capacity',
    date: '2026-06-15',
    summary: 'New state-of-the-art production line increases annual capacity by 40%, ensuring faster delivery times for our global customers.',
    image: 'assets/images/news/expansion.svg',
    category: 'Company'
  },
  {
    id: 2,
    title: 'Composite vs Cast Iron: Why Cities Are Making the Switch',
    date: '2026-05-22',
    summary: 'Municipalities worldwide are transitioning from traditional cast iron to composite manhole covers. Discover the key factors driving this change.',
    image: 'assets/images/news/composite-vs-cast.svg',
    category: 'Industry'
  },
  {
    id: 3,
    title: 'New F900 Airport-Grade Cover Now Available',
    date: '2026-04-10',
    summary: 'ACONCN launches its latest F900 rated composite manhole cover, designed for the most demanding infrastructure applications including airports and ports.',
    image: 'assets/images/news/f900-launch.svg',
    category: 'Product'
  }
];

var DEFAULT_COMPARISONS = [
  {
    id: 1,
    feature: 'Weight',
    composite: '70% lighter — ~35 kg for D400',
    cast_iron: 'Heavy — ~120 kg for D400'
  },
  {
    id: 2,
    feature: 'Corrosion Resistance',
    composite: 'Excellent — zero corrosion, impervious to chemicals',
    cast_iron: 'Poor — rusts over time, requires coating'
  },
  {
    id: 3,
    feature: 'Anti-Theft',
    composite: 'No scrap value — theft-proof by design',
    cast_iron: 'High scrap value — frequent theft target'
  },
  {
    id: 4,
    feature: 'Lifespan',
    composite: '30+ years with minimal maintenance',
    cast_iron: '10–15 years before corrosion damage'
  },
  {
    id: 5,
    feature: 'Installation',
    composite: '2-person crew, no heavy machinery needed',
    cast_iron: 'Requires crane or lifting equipment'
  }
];

/* ---------- Global Data Store ---------- */
window.siteData = window.siteData || {};

/* ---------- loadSiteData ---------- */
async function loadSiteData() {
  var data = {
    products: null,
    certifications: null,
    news: null,
    comparisons: null
  };

  // Fetch from Supabase in parallel
  var results = await Promise.allSettled([
    sbGet('products', { select: '*', order: 'id.asc', status: 'active' }),
    sbGet('certifications', { select: '*', order: 'id.asc', status: 'active' }),
    sbGet('news', { select: '*', order: 'id.desc', status: 'published' }),
    sbGet('comparisons', { select: '*', order: 'id.asc' })
  ]);

  // Products
  if (results[0].status === 'fulfilled' && results[0].value && Array.isArray(results[0].value) && results[0].value.length > 0) {
    data.products = results[0].value;
  } else {
    data.products = DEFAULT_PRODUCTS;
  }

  // Certifications
  if (results[1].status === 'fulfilled' && results[1].value && Array.isArray(results[1].value) && results[1].value.length > 0) {
    data.certifications = results[1].value;
  } else {
    data.certifications = DEFAULT_CERTIFICATIONS;
  }

  // News
  if (results[2].status === 'fulfilled' && results[2].value && Array.isArray(results[2].value) && results[2].value.length > 0) {
    data.news = results[2].value;
  } else {
    data.news = DEFAULT_NEWS;
  }

  // Comparisons
  if (results[3].status === 'fulfilled' && results[3].value && Array.isArray(results[3].value) && results[3].value.length > 0) {
    data.comparisons = results[3].value;
  } else {
    data.comparisons = DEFAULT_COMPARISONS;
  }

  window.siteData = data;
  return data;
}

/* ---------- Utility: Get URL parameter ---------- */
function getUrlParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

/* ---------- Utility: Get current page name ---------- */
function getCurrentPage() {
  var path = window.location.pathname;
  var page = path.split('/').pop();
  if (!page || page === '' || page === 'index.html') page = 'index.html';
  return page;
}

/* ---------- renderProducts ---------- */
function renderProducts(products) {
  var grid = document.querySelector('.products-grid') || document.getElementById('products-grid');
  if (!grid) return;

  var categoryFilter = getUrlParam('category');
  var filtered = products;

  if (categoryFilter) {
    filtered = products.filter(function(p) {
      return p.category === categoryFilter;
    });
  }

  var pagination = document.getElementById('pagination');
  var itemsPerPage = 9;
  var currentPage = 1;

  function showPage(page) {
    currentPage = page;
    var totalPages = Math.ceil(filtered.length / itemsPerPage) || 1;
    var start = (page - 1) * itemsPerPage;
    var pageItems = filtered.slice(start, start + itemsPerPage);

    grid.innerHTML = '';
    if (pageItems.length === 0) {
      grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--color-text-muted)"><h3>' + (typeof t !== 'undefined' ? t('products.noProducts') : 'No products found in this category.') + '</h3><p style="margin-top:12px">' + (typeof t !== 'undefined' ? t('products.noProductsHint') : 'Please try another category.') + '</p></div>';
      if (pagination) pagination.innerHTML = '';
      return;
    }

    pageItems.forEach(function(product) {
      var priceText = product.price ? '$' + parseFloat(product.price).toFixed(2) : (typeof t !== 'undefined' ? t('products.contactPrice') : 'Contact for Price');
      var card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML =
        '<div class="product-card__image">' +
          '<img src="' + (product.image || 'assets/images/placeholder.svg') + '" alt="' + escapeHtml(product.name) + '" loading="lazy">' +
          '<span class="product-card__category">' + escapeHtml(product.category || 'Product') + '</span>' +
        '</div>' +
        '<div class="product-card__body">' +
          '<h3 class="product-card__name">' + escapeHtml(product.name) + '</h3>' +
          '<p class="product-card__spec">' + escapeHtml(product.load_class || '') + (product.description ? ' — ' + escapeHtml(product.description.substring(0, 60)) : '') + '</p>' +
          '<div class="product-card__price">' + priceText + ' <small>' + (product.price ? (typeof t !== 'undefined' ? t('products.priceUnit') : '/ unit') : '') + '</small></div>' +
          '<div class="product-card__actions">' +
            '<a href="product-detail.html?id=' + product.id + '" class="btn btn-outline btn-sm">' + (typeof t !== 'undefined' ? t('products.detailsBtn') : 'Details') + '</a>' +
            '<a href="contact.html?product=' + encodeURIComponent(product.name) + '" class="btn btn-primary btn-sm">' + (typeof t !== 'undefined' ? t('products.inquiryBtn') : 'Inquiry') + '</a>' +
          '</div>' +
        '</div>';
      grid.appendChild(card);
    });

    // Render pagination
    if (pagination) {
      pagination.innerHTML = '';
      if (totalPages <= 1) return;

      var prev = document.createElement('a');
      prev.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>';
      prev.href = '#';
      if (page === 1) prev.className = 'disabled';
      prev.addEventListener('click', function(e) {
        e.preventDefault();
        if (currentPage > 1) showPage(currentPage - 1);
      });
      pagination.appendChild(prev);

      for (var i = 1; i <= totalPages; i++) {
        (function(p) {
          var link = document.createElement('a');
          link.textContent = p;
          link.href = '#';
          if (p === currentPage) link.className = 'active';
          link.addEventListener('click', function(e) {
            e.preventDefault();
            showPage(p);
          });
          pagination.appendChild(link);
        })(i);
      }

      var next = document.createElement('a');
      next.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>';
      next.href = '#';
      if (page === totalPages) next.className = 'disabled';
      next.addEventListener('click', function(e) {
        e.preventDefault();
        if (currentPage < totalPages) showPage(currentPage + 1);
      });
      pagination.appendChild(next);
    }
  }

  // Update filter tab active state
  var filterTabs = document.getElementById('filter-tabs');
  if (filterTabs && categoryFilter) {
    var buttons = filterTabs.querySelectorAll('.btn');
    buttons.forEach(function(btn) {
      btn.className = 'btn btn-outline btn-sm';
      if (btn.getAttribute('data-filter') === categoryFilter) {
        btn.className = 'btn btn-primary btn-sm';
      }
    });
  }

  showPage(1);
}

/* ---------- renderProductDetail ---------- */
function renderProductDetail() {
  var productId = getUrlParam('id');
  var spinner = document.getElementById('loading-spinner');
  var notFound = document.getElementById('product-not-found');
  var content = document.getElementById('product-content');

  if (!productId || !window.siteData.products) {
    if (spinner) spinner.style.display = 'none';
    if (notFound) notFound.style.display = 'block';
    return;
  }

  var product = null;
  for (var i = 0; i < window.siteData.products.length; i++) {
    if (String(window.siteData.products[i].id) === String(productId)) {
      product = window.siteData.products[i];
      break;
    }
  }

  if (!product) {
    if (spinner) spinner.style.display = 'none';
    if (notFound) notFound.style.display = 'block';
    return;
  }

  // Populate breadcrumb
  var breadcrumb = document.getElementById('breadcrumb-product');
  if (breadcrumb) breadcrumb.textContent = product.name;

  // Populate title
  var title = document.getElementById('product-title');
  if (title) title.innerHTML = escapeHtml(product.name) + ' <span>Detail</span>';

  // Populate image
  var img = document.getElementById('product-image');
  if (img) {
    img.src = product.image || 'assets/images/placeholder.svg';
    img.alt = product.name;
  }

  // Populate category badge
  var badge = document.getElementById('product-category-badge');
  if (badge) badge.textContent = product.category || 'Product';

  // Populate load class tag
  var loadClass = document.getElementById('product-load-class');
  if (loadClass) loadClass.textContent = product.load_class || 'Standard';

  // Populate name
  var nameEl = document.getElementById('product-name');
  if (nameEl) nameEl.textContent = product.name;

  // Populate description
  var desc = document.getElementById('product-description');
  if (desc) desc.textContent = product.description || (typeof t !== 'undefined' ? t('productDetail.noDescription') : 'No description available.');

  // Populate quick specs
  var quickLoad = document.getElementById('quick-load-class');
  if (quickLoad) quickLoad.textContent = product.load_class || 'Standard';
  var quickCat = document.getElementById('quick-category');
  if (quickCat) quickCat.textContent = product.category || 'Product';

  // Populate price
  var priceEl = document.getElementById('product-price');
  if (priceEl) {
    if (product.price) {
      priceEl.textContent = '$' + parseFloat(product.price).toFixed(2);
    } else {
      priceEl.textContent = typeof t !== 'undefined' ? t('products.contactPrice') : 'Contact for Price';
    }
  }

  // Inquiry button
  var inquiryBtn = document.getElementById('inquiry-btn');
  if (inquiryBtn) {
    inquiryBtn.href = 'contact.html?product=' + encodeURIComponent(product.name);
  }

  // Specifications table
  var specsBody = document.getElementById('specs-body');
  if (specsBody) {
    specsBody.innerHTML = '';
    var specsList = product.specs || [];
    if (Array.isArray(specsList) && specsList.length > 0) {
      specsList.forEach(function(spec) {
        var tr = document.createElement('tr');
        var key = spec.name || spec.label || spec.specification || '';
        var val = spec.value || spec.detail || '';
        tr.innerHTML = '<td style="font-weight:600;color:var(--color-white)">' + escapeHtml(key) + '</td><td style="color:var(--color-text-secondary)">' + escapeHtml(val) + '</td>';
        specsBody.appendChild(tr);
      });
    } else {
      var defaultSpecs = [
        { name: 'Standard', value: 'EN 124' },
        { name: 'Material', value: 'SMC / BMC Composite' },
        { name: 'Load Class', value: product.load_class || 'D400' },
        { name: 'Category', value: product.category || 'Manhole Cover' },
        { name: 'Color', value: 'Black / Custom' },
        { name: 'Anti-Slip', value: 'Yes' },
        { name: 'Anti-Theft', value: 'Yes (No Scrap Value)' }
      ];
      defaultSpecs.forEach(function(spec) {
        var tr = document.createElement('tr');
        tr.innerHTML = '<td style="font-weight:600;color:var(--color-white)">' + escapeHtml(spec.name) + '</td><td style="color:var(--color-text-secondary)">' + escapeHtml(spec.value) + '</td>';
        specsBody.appendChild(tr);
      });
    }
  }

  // Related products
  var relatedGrid = document.getElementById('related-products-grid');
  if (relatedGrid) {
    relatedGrid.innerHTML = '';
    var related = window.siteData.products.filter(function(p) {
      return p.category === product.category && String(p.id) !== String(product.id);
    });
    related = related.slice(0, 3);
    if (related.length === 0) {
      related = window.siteData.products.filter(function(p) {
        return String(p.id) !== String(product.id);
      }).slice(0, 3);
    }
    related.forEach(function(p) {
      var priceText = p.price ? '$' + parseFloat(p.price).toFixed(2) : (typeof t !== 'undefined' ? t('products.contactPrice') : 'Contact for Price');
      var card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML =
        '<div class="product-card__image">' +
          '<img src="' + (p.image || 'assets/images/placeholder.svg') + '" alt="' + escapeHtml(p.name) + '" loading="lazy">' +
          '<span class="product-card__category">' + escapeHtml(p.category || 'Product') + '</span>' +
        '</div>' +
        '<div class="product-card__body">' +
          '<h3 class="product-card__name">' + escapeHtml(p.name) + '</h3>' +
          '<p class="product-card__spec">' + escapeHtml(p.load_class || '') + '</p>' +
          '<div class="product-card__price">' + priceText + ' <small>' + (p.price ? (typeof t !== 'undefined' ? t('products.priceUnit') : '/ unit') : '') + '</small></div>' +
          '<div class="product-card__actions">' +
            '<a href="product-detail.html?id=' + p.id + '" class="btn btn-outline btn-sm">' + (typeof t !== 'undefined' ? t('products.detailsBtn') : 'Details') + '</a>' +
            '<a href="contact.html?product=' + encodeURIComponent(p.name) + '" class="btn btn-primary btn-sm">' + (typeof t !== 'undefined' ? t('products.inquiryBtn') : 'Inquiry') + '</a>' +
          '</div>' +
        '</div>';
      relatedGrid.appendChild(card);
    });
  }

  // Show content, hide spinner
  if (spinner) spinner.style.display = 'none';
  if (content) content.style.display = 'block';
}

/* ---------- renderCertifications ---------- */
function renderCertifications(certs) {
  var grid = document.querySelector('.certs-grid') || document.getElementById('certifications-grid');
  if (!grid || !certs) return;

  grid.innerHTML = '';
  certs.forEach(function(cert) {
    var card = document.createElement('div');
    card.className = 'cert-card';
    card.innerHTML =
      '<img src="' + (cert.image || 'assets/images/placeholder.svg') + '" alt="' + escapeHtml(cert.name) + '" loading="lazy">' +
      '<div class="cert-card__overlay">' +
        '<h3 class="cert-card__title">' + escapeHtml(cert.name) + '</h3>' +
        '<p class="cert-card__desc">' + escapeHtml(cert.description || '') + '</p>' +
      '</div>';
    grid.appendChild(card);
  });
}

/* ---------- renderNews ---------- */
function renderNews(news) {
  var grid = document.querySelector('.news-grid') || document.getElementById('news-grid');
  if (!grid || !news) return;

  var categoryFilter = getUrlParam('category');
  var filtered = news;

  if (categoryFilter) {
    filtered = news.filter(function(n) {
      return n.category === categoryFilter;
    });
  }

  var pagination = document.getElementById('news-pagination');
  var itemsPerPage = 6;
  var currentPage = 1;

  function showPage(page) {
    currentPage = page;
    var totalPages = Math.ceil(filtered.length / itemsPerPage) || 1;
    var start = (page - 1) * itemsPerPage;
    var pageItems = filtered.slice(start, start + itemsPerPage);

    grid.innerHTML = '';
    if (pageItems.length === 0) {
      grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--color-text-muted)"><h3>' + (typeof t !== 'undefined' ? t('news.noArticles') : 'No articles found.') + '</h3></div>';
      if (pagination) pagination.innerHTML = '';
      return;
    }

    pageItems.forEach(function(article) {
      var card = document.createElement('article');
      card.className = 'news-card';
      card.innerHTML =
        '<div class="news-card__image">' +
          '<img src="' + (article.image || 'assets/images/placeholder.svg') + '" alt="' + escapeHtml(article.title) + '" loading="lazy">' +
          '<span class="news-card__tag">' + escapeHtml(article.category || 'Company') + '</span>' +
        '</div>' +
        '<div class="news-card__body">' +
          '<div class="news-card__date">' +
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>' +
            (article.date || '') +
          '</div>' +
          '<h3 class="news-card__title">' + escapeHtml(article.title) + '</h3>' +
          '<p class="news-card__summary">' + escapeHtml(article.summary || '') + '</p>' +
          '<a href="?article=' + article.id + '" class="news-card__link">' + (typeof t !== 'undefined' ? t('news.readMore') : 'Read More') + ' ' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>' +
          '</a>' +
        '</div>';
      grid.appendChild(card);
    });

    // Pagination
    if (pagination) {
      pagination.innerHTML = '';
      if (totalPages <= 1) return;

      var prev = document.createElement('a');
      prev.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>';
      prev.href = '#';
      if (page === 1) prev.className = 'disabled';
      prev.addEventListener('click', function(e) {
        e.preventDefault();
        if (currentPage > 1) showPage(currentPage - 1);
      });
      pagination.appendChild(prev);

      for (var i = 1; i <= totalPages; i++) {
        (function(p) {
          var link = document.createElement('a');
          link.textContent = p;
          link.href = '#';
          if (p === currentPage) link.className = 'active';
          link.addEventListener('click', function(e) {
            e.preventDefault();
            showPage(p);
          });
          pagination.appendChild(link);
        })(i);
      }

      var next = document.createElement('a');
      next.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>';
      next.href = '#';
      if (page === totalPages) next.className = 'disabled';
      next.addEventListener('click', function(e) {
        e.preventDefault();
        if (currentPage < totalPages) showPage(currentPage + 1);
      });
      pagination.appendChild(next);
    }
  }

  // Update filter tab active state
  var filterTabs = document.getElementById('news-filters');
  if (filterTabs && categoryFilter) {
    var buttons = filterTabs.querySelectorAll('.btn');
    buttons.forEach(function(btn) {
      btn.className = 'btn btn-outline btn-sm';
      if (btn.getAttribute('data-filter') === categoryFilter) {
        btn.className = 'btn btn-primary btn-sm';
      }
    });
  }

  showPage(1);
}

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
    imgEl.src = article.image || 'assets/images/placeholder.svg';
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

/* ---------- renderComparisons ---------- */
function renderComparisons(comparisons) {
  var table = document.getElementById('comparison-table');
  if (!table || !comparisons) return;

  var tbody = table.querySelector('tbody');
  if (!tbody) return;

  tbody.innerHTML = '';
  comparisons.forEach(function(item) {
    var tr = document.createElement('tr');
    tr.innerHTML =
      '<td style="font-weight:600;color:var(--color-white)">' + escapeHtml(item.feature) + '</td>' +
      '<td style="color:var(--color-accent)">' + escapeHtml(item.composite) + '</td>' +
      '<td style="color:var(--color-text-muted)">' + escapeHtml(item.cast_iron) + '</td>';
    tbody.appendChild(tr);
  });
}

/* ---------- renderFeaturedProducts ---------- */
function renderFeaturedProducts(products) {
  var grid = document.querySelector('.featured-grid') || document.getElementById('featured-products-grid');
  if (!grid || !products) return;

  var featured = products.slice(0, 4);
  grid.innerHTML = '';

  featured.forEach(function(product) {
    var priceText = product.price ? '$' + parseFloat(product.price).toFixed(2) : (typeof t !== 'undefined' ? t('products.contactPrice') : 'Contact for Price');
    var card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML =
      '<div class="product-card__image">' +
        '<img src="' + (product.image || 'assets/images/placeholder.svg') + '" alt="' + escapeHtml(product.name) + '" loading="lazy">' +
        '<span class="product-card__category">' + escapeHtml(product.category || 'Product') + '</span>' +
      '</div>' +
      '<div class="product-card__body">' +
        '<h3 class="product-card__name">' + escapeHtml(product.name) + '</h3>' +
        '<p class="product-card__spec">' + escapeHtml(product.load_class || '') + (product.description ? ' — ' + escapeHtml(product.description.substring(0, 60)) : '') + '</p>' +
        '<div class="product-card__price">' + priceText + ' <small>' + (product.price ? (typeof t !== 'undefined' ? t('products.priceUnit') : '/ unit') : '') + '</small></div>' +
        '<div class="product-card__actions">' +
          '<a href="product-detail.html?id=' + product.id + '" class="btn btn-outline btn-sm">' + (typeof t !== 'undefined' ? t('products.detailsBtn') : 'Details') + '</a>' +
          '<a href="contact.html?product=' + encodeURIComponent(product.name) + '" class="btn btn-primary btn-sm">' + (typeof t !== 'undefined' ? t('products.inquiryBtn') : 'Inquiry') + '</a>' +
        '</div>' +
      '</div>';
    grid.appendChild(card);
  });
}

/* ---------- initPage ---------- */
function initPage() {
  var data = window.siteData;
  if (!data || !data.products) return;

  var page = getCurrentPage();

  switch (page) {
    case 'index.html':
      renderFeaturedProducts(data.products);
      break;
    case 'products.html':
      renderProducts(data.products);
      break;
    case 'product-detail.html':
      renderProductDetail();
      break;
    case 'certifications.html':
      renderCertifications(data.certifications);
      break;
    case 'news.html':
      // 先检查是否是详情视图
      if (!renderNewsDetail()) {
        // 不是详情视图，渲染列表
        renderNews(data.news);
      }
      break;
    case 'comparison.html':
      renderComparisons(data.comparisons);
      break;
    default:
      // Silent skip for pages without dynamic rendering
      break;
  }
}

/* ---------- Auto-Initialize ---------- */
document.addEventListener('DOMContentLoaded', function() {
  loadSiteData().then(function() {
    initPage();
  });
});