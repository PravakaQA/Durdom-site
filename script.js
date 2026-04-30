(function () {
  'use strict';
  const TELEGRAM_URL = 'https://t.me/durdomcore';

  const products = {
    animator21: {
      id: 'animator21', category: 'WORKFLOW / VIDEO', title: 'Animator V2.1', cardTitle: 'ANIMATOR V2.1',
      price: 100, oldPrice: 200, badges: ['HIT', 'NEW', 'SALE'],
      short: 'Обновлённый workflow для реалистичных видео до 30 секунд в ComfyUI. Lipsync, мимика, image-to-video, motion и NSFW без ограничений.',
      coverLabel: 'ANIMATOR\nV2.1', coverImage: 'cover-animator.png',
      tags: ['Video animation', 'Lipsync', 'Dance', 'Image-to-Video', 'ComfyUI', 'Vast.ai'],
      description: 'Animator V2.1 — обновлённый workflow для генерации реалистичных видео в ComfyUI. Видео до 30 секунд, натуральная мимика, точный lipsync, image-to-video и стабильная генерация — всё внутри готовой template-системы, оптимизированной под Vast.ai.',
      features: ['Видео до 30 секунд с высокой стабильностью','Фотореализм: кожа, волосы, одежда, свет, отражения','Lipsync и мимика лица','Image-to-Video','Танцы, динамика, разговорные сцены','Работает без обязательного LoRA','NSFW без ограничений','Template-система без ручной сборки'],
      runs: 'Vast.ai — RTX PRO 6000 / RTX 6000 Ada / 48+ GB VRAM',
      forWhom: 'Reels / TikTok / Shorts, AI-персонажи, SMM и бренды, NSFW-креаторы',
      access: 'Доступ выдаётся через токены. Workflow встроен внутрь системы и не передаётся как JSON. Вместе с доступом идут мануалы.'
    },
    animator1: {
      id: 'animator1', category: 'WORKFLOW / VIDEO', title: 'Animator 1.8', cardTitle: 'ANIMATOR 1.8',
      price: 70, oldPrice: 100, badges: ['SALE'],
      short: 'Стабильная базовая версия для старта в генерации видео. Подходит новичкам.',
      coverLabel: 'ANIMATOR\n1.8', coverImage: 'cover-animator.png',
      tags: ['Video', 'Lipsync', 'I2V', 'Basic motion', 'ComfyUI'],
      description: 'Animator V1 — стабильный базовый workflow для генерации видео в ComfyUI. Стартовая версия для тех, кто хочет попробовать систему и получить рабочий результат без сложной настройки.',
      features: ['Базовая генерация видео','Хорошая стабильность','Lipsync и мимика','Image-to-Video','Простые сцены и движения','NSFW без ограничений','Подходит для старта'],
      runs: 'Vast.ai — RTX 3090 / RTX 4090 / A5000 / 24+ GB VRAM',
      forWhom: 'Новички, пользователи с ограниченным бюджетом, те кто хочет перейти на V2.1 позже',
      access: 'Workflow встроен внутрь template и не передаётся в виде JSON.'
    },
    xmode: {
      id: 'xmode', category: 'WORKFLOW / IMAGE', title: 'X-MODE V2.1', cardTitle: 'X-MODE V2.1',
      price: 100, oldPrice: 200, badges: ['HIT', 'NEW', 'SALE'],
      short: 'Локальная система генерации фотореалистичных изображений на базе Z-Image. Text-to-image, image-to-image, LoRA, апскейл.',
      coverLabel: 'X-MODE\nV2.1', coverImage: 'cover-xmode.png',
      tags: ['Image', 'NSFW', 'Z-Image Turbo', 'T2I', 'I2I', 'LoRA', 'Upscaling'],
      description: 'X-MODE V2.1 — система для создания фотореалистичных изображений без ограничений. Локальный генератор на базе Z-Image: уровень близкий к топовым закрытым image-моделям, но без подписок и цензуры.',
      features: ['Фотореализм: кожа, глаза, волосы, текстуры, свет','Высокая точность относительно референса','Работа через LoRA','Text-to-Image','Image-to-Image','Улучшенные глаза и детализация','Апскейл и постобработка','Контроль позы, света и композиции','NSFW без ограничений'],
      runs: 'Vast.ai — RTX 5090 / L40S / 48+ GB VRAM',
      forWhom: 'Instagram / TikTok / Telegram, AI-персонажи, Fanvue / Fansly, NSFW-креаторы',
      access: 'Система встроена в template. Пользователь получает готовый инструмент, а не исходники.'
    },
    community: {
      id: 'community', category: 'COMMUNITY / ACCESS', title: 'Private Community', cardTitle: 'PRIVATE COMMUNITY',
      price: 190, oldPrice: 400, badges: ['CORE', 'SALE'],
      short: 'Закрытое комьюнити с доступом к инструментам, гайдам, обновлениям, поддержке и материалам.',
      coverLabel: 'CORE\nACCESS', coverImage: 'cover-community.png',
      tags: ['Community', 'Workflows', 'Guides', 'Support', 'AI OFM', 'Updates'],
      description: 'PRIVATE COMMUNITY — закрытое комьюнити с доступом к инструментам, обучению, обновлениям и поддержке. Единая точка входа в экосистему DURDOM OFM.',
      features: ['Доступ к Animator V2.1','Доступ к X-MODE V2.1','Гайды по LoRA','Гайды по AI OFM','Гайды по Fanvue / Fansly / чаттингу','Разборы кейсов','Инструкции по VPN и инфраструктуре','Обновления','Закрытый чат','Поддержка по ключевым вопросам'],
      runs: 'Приватный Telegram-канал + закрытый чат',
      forWhom: 'Все, кто хочет полный доступ к системе',
      access: 'PRIVATE COMMUNITY — это не один файл, а доступ к системе целиком.'
    },
    higgsfield: {
      id: 'higgsfield', category: 'COURSE / VIDEO', title: 'Higgsfield AI Video Course', cardTitle: 'HIGGSFIELD COURSE',
      price: 50, oldPrice: 70, badges: ['COURSE', 'NEW'],
      short: 'Практический курс по Higgsfield: генерация AI-видео, сцены, движение, промпты, референсы.',
      coverLabel: 'HIGGSFIELD\nCOURSE', coverImage: 'cover-higgsfield.png',
      tags: ['Higgsfield', 'AI video', 'Motion', 'Prompts', 'Reels', 'TikTok'],
      description: 'Практический курс по Higgsfield для создания AI-видео под Reels, TikTok, Shorts и AI-персонажей.',
      features: ['Основы Higgsfield','Генерация видео по референсам','Управление движением','Сцены и композиция','Промпты под разные форматы','Ошибки новичков','Пайплайн под AI-контент','Примеры под коммерческое использование'],
      runs: 'Higgsfield платформа',
      forWhom: 'AI-креаторы, Reels/TikTok creators, SMM, AI OFM projects',
      access: 'Доступ к видео-урокам после оплаты.'
    },
    freeguide: {
      id: 'freeguide', category: 'GUIDE / START', title: 'Free AI Guide', cardTitle: 'FREE AI GUIDE',
      price: 0, oldPrice: null, badges: ['FREE'],
      short: 'Бесплатный гайд для входа в нишу: база по AI-персонажам, инструментам, контенту и ошибкам новичков.',
      coverLabel: 'FREE\nGUIDE', coverImage: 'cover-freeguide.png',
      tags: ['Free guide', 'AI basics', 'Content system', 'Funnel', 'Beginner'],
      description: 'Бесплатный гайд для входа в AI-контент и AI-персонажей. Объясняет базовую логику: инструменты, контент-система, воронка и ошибки новичков.',
      features: ['База по AI-персонажам','Обзор инструментов','Логика контента','Базовая воронка','Ошибки новичков','Как не утонуть в хаосе моделей и сервисов'],
      runs: null,
      forWhom: 'Новички, все кто хочет понять нишу',
      access: 'Гайд даёт стартовую карту, но не раскрывает приватные workflow.'
    }
  };

  const productOrder = ['animator21', 'xmode', 'community', 'animator1', 'higgsfield', 'freeguide'];
  function initCanvas() {
    const canvas = document.getElementById('global-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = 0, h = 0, lines = [], raf;
    let mx = -9999, my = -9999;
    const PUSH_RADIUS = 180, PUSH_STRENGTH = 45;
    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = document.documentElement.scrollHeight;
      lines = Array.from({ length: 18 }, (_, i) => ({
        y: h * (0.04 + i * 0.055), amp: 14 + Math.random() * 28,
        freq: 0.0015 + Math.random() * 0.002, phase: Math.random() * Math.PI * 2,
        red: Math.random() > .6
      }));
    };
    window.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY + window.scrollY; });
    window.addEventListener('scroll', () => { canvas.style.transform = 'translateY(' + (-window.scrollY) + 'px)'; });
    const draw = (time) => {
      ctx.clearRect(0, 0, w, h);
      const scrollY = window.scrollY;
      lines.forEach((line) => {
        const grad = ctx.createLinearGradient(0, 0, w, 0);
        const a = .025 + .045 * (0.5 + Math.sin(time * .0008 + line.phase) * .5);
        const color = line.red ? '226,32,32' : '255,255,255';
        grad.addColorStop(0, 'rgba('+color+',0)');
        grad.addColorStop(.5, 'rgba('+color+','+a+')');
        grad.addColorStop(1, 'rgba('+color+',0)');
        ctx.beginPath(); ctx.strokeStyle = grad; ctx.lineWidth = 1;
        for (let x = -50; x <= w + 50; x += 16) {
          let y = line.y + Math.sin(x * line.freq + time * .0003 + line.phase) * line.amp;
          const dx = x - mx, dy = y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < PUSH_RADIUS) {
            const force = (1 - dist / PUSH_RADIUS) * PUSH_STRENGTH;
            y += (dy / (dist || 1)) * force;
          }
          x === -50 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      });
      raf = requestAnimationFrame(draw);
    };
    window.addEventListener('resize', resize); resize(); raf = requestAnimationFrame(draw);
  }

  function initMenu() {
    const nav = document.getElementById('nav');
    const trigger = document.getElementById('nav-trigger');
    if (!nav || !trigger) return;
    trigger.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      trigger.setAttribute('aria-expanded', open);
      document.getElementById('nav-panel').setAttribute('aria-hidden', !open);
    });
    document.querySelectorAll('[data-nav]').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('is-open');
      trigger.setAttribute('aria-expanded', 'false');
      document.getElementById('nav-panel').setAttribute('aria-hidden', 'true');
    }));
  }

  function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    grid.innerHTML = productOrder.map((id) => {
      const p = products[id];
      const badges = p.badges.map(b => '<span class="badge ' + (b === 'SALE' ? 'badge--red' : b === 'NEW' || b === 'COURSE' ? 'badge--cyan' : b === 'FREE' ? 'badge--green' : b === 'HIT' || b === 'CORE' ? 'badge--red' : '') + '">' + b + '</span>').join('');
      const tags = p.tags.slice(0, 4).map(t => '<span class="tag">' + t + '</span>').join('');
      const coverImg = p.coverImage ? '<img src="' + p.coverImage + '" alt="' + p.cardTitle + '" class="product-card__cover-img" />' : '';
      return '<article class="product-card reveal" data-product-open="' + p.id + '"><div class="product-card__cover">' + coverImg + '<div class="product-card__badges">' + badges + '</div></div><div class="product-card__body"><div class="product-card__meta"><div><span class="price">' + (p.price === 0 ? '$0' : '$' + p.price) + '</span>' + (p.oldPrice ? '<span class="old-price">$' + p.oldPrice + '</span>' : '') + '</div></div><p>' + p.short + '</p><button class="btn btn--glass btn--full" type="button">Подробнее →</button><div class="product-card__tags">' + tags + '</div></div></article>';
    }).join('');
  }

  function initModal() {
    const modal = document.getElementById('product-modal');
    if (!modal) return;
    const title = document.getElementById('modal-title');
    const category = document.getElementById('modal-category');
    const price = document.getElementById('modal-price');
    const oldPrice = document.getElementById('modal-old-price');
    const discount = document.getElementById('modal-discount');
    const desc = document.getElementById('modal-description');
    const features = document.getElementById('modal-features');
    const tags = document.getElementById('modal-tags');
    const coverLabel = document.getElementById('modal-cover-label');
    const thumbs = document.getElementById('modal-thumbs');
    const buyBtn = document.getElementById('modal-buy');
    const modalRuns = document.getElementById('modal-runs');
    const modalFor = document.getElementById('modal-for');
    const modalAccess = document.getElementById('modal-access');
    const runsSection = document.getElementById('modal-runs-section');
    const forSection = document.getElementById('modal-for-section');
    const accessSection = document.getElementById('modal-access-section');
    let currentProduct = null;

    function openProduct(id) {
      const p = products[id]; if (!p) return; currentProduct = p;
      title.textContent = p.title;
      category.textContent = p.category;
      price.textContent = p.price === 0 ? '$0' : '$' + p.price;
      oldPrice.textContent = p.oldPrice ? '$' + p.oldPrice : '';
      discount.textContent = p.price === 0 ? 'Бесплатный доступ' : 'Акция активна';
      desc.textContent = p.description;
      features.innerHTML = p.features.map(f => '<li>' + f + '</li>').join('');
      tags.innerHTML = p.tags.map(t => '<span class="tag">' + t + '</span>').join('');
      coverLabel.innerHTML = p.coverLabel.replace('\n', '<br>');
      var modalImg = document.getElementById('modal-cover-img');
      if (modalImg) { modalImg.src = p.coverImage || ''; modalImg.alt = p.cardTitle; modalImg.style.display = p.coverImage ? 'block' : 'none'; }
      thumbs.innerHTML = ['PREVIEW','CASE','RESULT','GUIDE','SETUP'].map(t => '<span>' + t + '</span>').join('');
      if (modalRuns) { modalRuns.textContent = p.runs || ''; runsSection.style.display = p.runs ? '' : 'none'; }
      if (modalFor) { modalFor.textContent = p.forWhom || ''; forSection.style.display = p.forWhom ? '' : 'none'; }
      if (modalAccess) { modalAccess.textContent = p.access || ''; accessSection.style.display = p.access ? '' : 'none'; }
      buyBtn.textContent = p.price === 0 ? 'Получить бесплатно →' : 'Купить / получить доступ →';
      modal.classList.add('is-open'); modal.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden';
    }
    document.addEventListener('click', (e) => { const trigger = e.target.closest('[data-product-open]'); if (trigger) openProduct(trigger.dataset.productOpen); if (e.target.closest('[data-modal-close]')) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
    function closeModal() { modal.classList.remove('is-open'); modal.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; }

    buyBtn.addEventListener('click', async () => {
      if (!currentProduct) return;
      if (currentProduct.price === 0) { closeModal(); document.getElementById('inq-product').value = 'Free AI Guide'; document.getElementById('inquiry').scrollIntoView({ behavior: 'smooth' }); return; }
      buyBtn.disabled = true; const original = buyBtn.textContent; buyBtn.textContent = 'Создаём оплату...';
      try {
        const response = await fetch('/api/cryptomus/create-payment', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ productId: currentProduct.id, product: currentProduct.title, amount: currentProduct.price, currency: 'USD' }) });
        const data = await response.json();
        if (response.ok && data.success && data.url) { window.location.href = data.url; } else { throw new Error(data.message || 'Не удалось создать оплату'); }
      } catch (err) { alert('Оплата пока не создана: ' + err.message + '. Можешь оставить заявку.'); closeModal(); document.getElementById('inq-product').value = currentProduct.title; document.getElementById('inquiry').scrollIntoView({ behavior: 'smooth' }); }
      finally { buyBtn.disabled = false; buyBtn.textContent = original; }
    });
  }
  function initLeadForm() {
    const form = document.getElementById('inquiry-form'); if (!form) return;
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = document.getElementById('inquiry-submit'); const text = document.getElementById('submit-text'); const status = document.getElementById('form-status');
      const payload = { name: form.name.value.trim(), telegram: form.telegram.value.trim(), product: form.product.value, message: form.message.value.trim() };
      text.textContent = 'Отправляем...'; btn.disabled = true; status.textContent = '';
      try { const res = await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }); const data = await res.json(); if (!res.ok || !data.ok) throw new Error(data.message || 'Ошибка'); status.style.color = '#18d66b'; status.textContent = 'Заявка отправлена. Мы свяжемся в Telegram.'; form.reset(); }
      catch (err) { status.style.color = '#ff4a4a'; status.textContent = 'Не получилось: ' + err.message; }
      finally { text.textContent = 'Отправить заявку'; btn.disabled = false; }
    });
  }

  function initReveal() {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); } }); }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
  }

  function initPortfolioTabs() {
    const tabs = document.querySelectorAll('.portfolio-tab');
    const cards = document.querySelectorAll('#portfolio-grid .portfolio-card');
    if (!tabs.length) return;
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('is-active'));
        tab.classList.add('is-active');
        const filter = tab.dataset.filter;
        cards.forEach(card => {
          if (filter === 'all' || card.dataset.category === filter) { card.style.display = ''; } else { card.style.display = 'none'; }
        });
      });
    });
  }

  function initPersonaSlider() {
    const slides = document.querySelectorAll('.persona-slide');
    const prev = document.getElementById('persona-prev');
    const next = document.getElementById('persona-next');
    if (!slides.length || !prev || !next) return;
    let idx = 0;
    function show(i) { slides.forEach((s, j) => { s.classList.toggle('is-active', j === i); }); }
    prev.addEventListener('click', () => { idx = (idx - 1 + slides.length) % slides.length; show(idx); });
    next.addEventListener('click', () => { idx = (idx + 1) % slides.length; show(idx); });
  }

  function initReviewsSlider() {
    const slider = document.getElementById('reviews-slider');
    const prev = document.getElementById('reviews-prev');
    const next = document.getElementById('reviews-next');
    if (!slider || !prev || !next) return;
    const card = slider.querySelector('.review-card');
    if (!card) return;
    const scrollAmt = () => card.offsetWidth + 22;
    prev.addEventListener('click', () => { slider.scrollBy({ left: -scrollAmt(), behavior: 'smooth' }); });
    next.addEventListener('click', () => { slider.scrollBy({ left: scrollAmt(), behavior: 'smooth' }); });
  }

  function initFAQ() {
    document.querySelectorAll('.faq-q').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const isOpen = item.classList.contains('is-open');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('is-open'));
        if (!isOpen) item.classList.add('is-open');
      });
    });
  }

  function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.desktop-nav a, .mobile-menu a');
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(s => { if (window.scrollY >= s.offsetTop - 200) current = s.id; });
      navLinks.forEach(a => { a.classList.toggle('is-active', a.getAttribute('href') === '#' + current); });
    });
  }
  function initPortfolioMedia() {
    const lb = document.getElementById('photo-lightbox');
    const lbImg = lb ? lb.querySelector('img') : null;
    const lbClose = lb ? lb.querySelector('.photo-lightbox__close') : null;
    function openLightbox(src, isVideo) {
      if (!lb) return;
      if (isVideo) {
        lbImg.style.display = 'none';
        let vid = lb.querySelector('video');
        if (!vid) { vid = document.createElement('video'); vid.className = 'lightbox-video'; vid.controls = true; vid.autoplay = true; vid.playsInline = true; lb.insertBefore(vid, lbClose.nextSibling); }
        vid.src = src; vid.style.display = 'block'; vid.play().catch(() => {});
      } else {
        let vid = lb.querySelector('video'); if (vid) { vid.pause(); vid.style.display = 'none'; }
        lbImg.src = src; lbImg.style.display = 'block';
      }
      lb.classList.add('is-open'); document.body.style.overflow = 'hidden';
    }
    function closeLightbox() {
      if (!lb) return; lb.classList.remove('is-open'); document.body.style.overflow = '';
      let vid = lb.querySelector('video'); if (vid) { vid.pause(); vid.style.display = 'none'; }
    }
    if (lbClose) lbClose.addEventListener('click', closeLightbox);
    if (lb) lb.addEventListener('click', (e) => { if (e.target === lb) closeLightbox(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
    /* NSFW click: first click reveals, second click opens lightbox */
    document.querySelectorAll('.nsfw-blur').forEach(card => {
      card.addEventListener('click', () => {
        if (!card.classList.contains('revealed')) { card.classList.add('revealed'); return; }
        const img = card.querySelector('img');
        if (img) openLightbox(img.src, false);
      });
    });
    /* Video hover play + click opens 9:16 lightbox */
    document.querySelectorAll('.video-card').forEach(card => {
      const video = card.querySelector('video');
      if (!video) return;
      card.addEventListener('mouseenter', () => { video.play().catch(() => {}); card.classList.add('is-playing'); });
      card.addEventListener('mouseleave', () => { video.pause(); card.classList.remove('is-playing'); });
      card.addEventListener('click', () => { openLightbox(video.src, true); });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initCanvas(); initMenu(); renderProducts(); initModal(); initLeadForm(); initReveal();
    initPortfolioTabs(); initPersonaSlider(); initReviewsSlider(); initFAQ(); initActiveNav(); initPortfolioMedia();
  });
})();