/* ============================================
   AL-NOOR PIZZA & BAKERS — JAVASCRIPT
   Full Cart, WhatsApp, Animations, Particles
   ============================================ */

'use strict';

// ===== MENU DATA =====
const MENU = {
  deals: [
    { badge: 'Deal #1',  items: ['1 Zinger Burger', '1 Regular Fries', '1 NR Drink'],     price: 500,  emoji: '🍔' },
    { badge: 'Deal #2',  items: ['3 Zinger Burger', '1 L Drink'],                          price: 1000, emoji: '🍔' },
    { badge: 'Deal #3',  items: ['3 Chicken Shawarma', '1 NR Drink'],                      price: 500,  emoji: '🌯' },
    { badge: 'Deal #4',  items: ['1 Small Pizza', '2 Zinger Burger', '1 L Drink'],         price: 1200, emoji: '🍕' },
    { badge: 'Deal #5',  items: ['2 Small Pizza', '1 L Drink'],                            price: 1150, emoji: '🍕' },
    { badge: 'Deal #6',  items: ['5 Chicken Shawarma', '1 L Drink'],                       price: 850,  emoji: '🌯' },
    { badge: 'Deal #7',  items: ['5 Zinger Burger', '1.5 L Drink'],                        price: 1600, emoji: '🍔' },
    { badge: 'Deal #8',  items: ['1 Medium Pizza', '1 Small Pizza', '1 L Drink'],          price: 1550, emoji: '🍕' },
    { badge: 'Deal #9',  items: ['3 Patty Burger', '1 L Drink'],                           price: 800,  emoji: '🍔' },
    { badge: 'Deal #10', items: ['5 Hot Wings', '5 Nuggets', '1 L Drink', '1 Zinger Burger'], price: 900, emoji: '🍗' },
    { badge: 'Deal #11', items: ['2 Medium Pizza', '1.5 L Drink'],                         price: 2050, emoji: '🍕' },
    { badge: 'Deal #12', items: ['1 Large Pizza', '1 Medium Pizza', '1.5 L Drink'],        price: 2500, emoji: '🍕' },
  ],
  burgers: [
    { name: 'Special Al-Noor Burger', desc: 'Our signature masterpiece — loaded with premium toppings and secret sauce',    price: 400, emoji: '🍔' },
    { name: 'Zinger Burger',          desc: 'Crispy golden chicken fillet with jalapeño sauce and fresh veggies',            price: 300, emoji: '🍔' },
    { name: 'Grill Burger',           desc: 'Flame-grilled patty with smoky BBQ glaze and crunchy slaw',                    price: 350, emoji: '🍔' },
    { name: 'Chapli Burger',          desc: 'Spiced minced beef chapli patty with fresh tomato and green chutney',           price: 280, emoji: '🍔' },
    { name: 'Patty Burger',           desc: 'Classic beef patty stacked with lettuce, tomato, and tangy mayo',              price: 250, emoji: '🍔' },
    { name: 'Pizza Burger',           desc: 'A pizza-inspired burger with mozzarella, marinara, and pepperoni toppings',    price: 500, emoji: '🍔' },
    { name: 'Double Maza Burger',     desc: 'Double patties, double cheese, double satisfaction — the ultimate stack',      price: 500, emoji: '🍔' },
  ],
  pizza: [
    { name: 'Al-Noor Special Pizza',  desc: 'Loaded with our signature toppings — the ultimate pizza experience',   sizes: { S: 650, M: 1300, L: 1900, F: 2300 }, emoji: '🍕' },
    { name: 'Chicken Tikka Pizza',    desc: 'Marinated tikka chicken chunks on creamy white sauce base',             sizes: { S: 550, M: 1000, L: 1500, F: 2000 }, emoji: '🍕' },
    { name: 'Fajita Pizza',           desc: 'Sizzling fajita chicken with capsicum and onion medley',                sizes: { S: 550, M: 1000, L: 1500, F: 2000 }, emoji: '🍕' },
    { name: 'Malai Boti Creamy Pizza',desc: 'Creamy malai boti chicken on a rich white cream sauce',                 sizes: { S: 600, M: 1100, L: 1600, F: 2200 }, emoji: '🍕' },
    { name: 'BBQ Pizza',              desc: 'Smoky BBQ sauce base with tender chicken and caramelized onions',       sizes: { S: 600, M: 1100, L: 1600, F: 2200 }, emoji: '🍕' },
    { name: 'Kabab Stuffer Pizza',    desc: 'Stuffed with juicy seekh kabab filling — a desi twist on classic pizza', sizes: { S: 600, M: 1200, L: 1800, F: 2300 }, emoji: '🍕' },
  ],
  shawarma: [
    { name: 'Chicken Shawarma', desc: 'Classic marinated chicken, garlic sauce, pickles in soft wrap', sizes: { S: 150, L: 220 }, emoji: '🌯' },
    { name: 'Zinger Shawarma', desc: 'Crispy zinger chicken with our spicy sauce in warm tortilla',    sizes: { S: 200, L: 300 }, emoji: '🌯' },
    { name: 'Malai Boti Shawarma', desc: 'Tender malai boti chicken pieces with creamy garlic sauce',  sizes: { S: null, L: 250 }, emoji: '🌯' },
    { name: 'Kabab Shawarma', desc: 'Seekh kabab wrapped with fresh veggies and dipping sauce',        sizes: { S: null, L: 200 }, emoji: '🌯' },
    { name: 'Open Shawarma', desc: '2 breads, chicken, fresh vegetables with signature dip sauce',     price: 450, emoji: '🌯' },
  ],
  fries: [
    { name: 'Simple Fries',     desc: 'Golden crispy fries seasoned to perfection',                           sizes: { S: 150, L: 250 }, emoji: '🍟' },
    { name: 'Loaded Fries',     desc: 'Crispy fries topped with cheese sauce, jalapeños, and toppings',       sizes: { S: 350, L: 650 }, emoji: '🍟' },
    { name: 'Mayo Garlic Fries',desc: 'Crispy fries drizzled with creamy mayo garlic sauce',                  sizes: { S: 300, L: 600 }, emoji: '🍟' },
  ],
  pasta: [
    { name: 'Special Al-Noor Pasta', desc: 'Our signature pasta with a rich, creamy chicken sauce and herbs', sizes: { S: 450, L: 850 }, emoji: '🍝' },
    { name: 'Malai Boti Pasta',      desc: 'Creamy malai boti pieces tossed in white sauce pasta',             sizes: { S: 350, L: 700 }, emoji: '🍝' },
    { name: 'Crunch Pasta',          desc: 'Pasta with crispy chicken pieces in a tangy crunch sauce',         sizes: { S: 400, L: 800 }, emoji: '🍝' },
    { name: 'Flaming Pasta',         desc: 'Fiery spiced pasta with chicken — for the bold and brave!',        sizes: { S: 300, L: 600 }, emoji: '🍝' },
  ],
  rolls: [
    { name: 'Zinger Roll',  desc: 'Crispy zinger chicken in a warm roll with garlic sauce',        price: 400, emoji: '🌮' },
    { name: 'Chicken Roll', desc: 'Tender chicken pieces with fresh veggies in a soft roll',       price: 300, emoji: '🌮' },
    { name: 'Spin Roll',    desc: 'Layered spin roll with chicken, veggies, and special dressing', price: 450, emoji: '🌮' },
  ],
  sandwiches: [
    { name: 'Club Sandwich',      desc: 'Triple-layered club with grilled chicken, lettuce, tomato, and mayo', price: 550, emoji: '🥪' },
    { name: 'Breast Sandwich',    desc: 'Grilled chicken breast on toasted bread with fresh greens',            price: 400, emoji: '🥪' },
    { name: 'Peri Peri Sandwich', desc: 'Tangy peri peri glazed chicken in toasted sandwich',                   price: 400, emoji: '🥪' },
  ],
  friedfood: [
    { name: 'Hot Wings (10p)',     desc: 'Ten crispy hot wings with spicy glaze — finger-licking good',      price: 550, emoji: '🍗' },
    { name: 'Hot Wings (5p)',      desc: 'Five crispy hot wings with fiery dipping sauce',                   price: 300, emoji: '🍗' },
    { name: 'Nuggets (10p)',       desc: 'Ten golden crunchy nuggets with your choice of dip',               price: 500, emoji: '🍗' },
    { name: 'Nuggets (5p)',        desc: 'Five golden crunchy nuggets — great snack bite',                   price: 250, emoji: '🍗' },
    { name: 'Oven Bake Wings (10p)', desc: 'Oven-baked wings — crispy outside, juicy inside',               price: 550, emoji: '🍗' },
    { name: 'Oven Bake Wings (5p)', desc: 'Five oven-baked wings with premium seasoning',                   price: 300, emoji: '🍗' },
    { name: 'Broast (Half)',       desc: 'Classic broasted chicken — crispy coating, tender juicy meat',     price: 800, emoji: '🍗' },
    { name: 'Broast (Full)',       desc: 'Full broasted chicken — the ultimate sharing platter',             price: 1600, emoji: '🍗' },
  ],
  platters: [
    { name: 'Bihari Platter',         desc: '4 Spin Rolls, 5 Oven Wings, Small Fries, Dip Sauce — feast for the family', price: 800, emoji: '🍱' },
    { name: 'Open Shawarma Platter',  desc: '2 Bread, Chicken, Vegetables, Dip Sauce — sharing plate delight',           price: 450, emoji: '🍱' },
  ],
  drinks: [
    { name: 'Mint Margarita', desc: 'Refreshing mint and lime blended smoothie — cool and zingy',     price: 200, emoji: '🥤' },
    { name: 'Pina Colada',    desc: 'Tropical pineapple and coconut blend — taste of paradise',        price: 250, emoji: '🥤' },
  ],
};

// ===== CART STATE =====
let cart = [];

// ===== LOADER =====
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hide');
    // Show discount bar
    const bar = document.getElementById('discountBar');
    if (bar) {
      bar.style.opacity = '1';
      bar.style.transform = 'translateY(0)';
    }
    initReveal();
    animateStats();
  }, 2200);
});

// ===== PARTICLE CANVAS =====
(function initParticles() {
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function Particle() {
    this.x = Math.random() * W;
    this.y = Math.random() * H;
    this.r = Math.random() * 2 + 0.5;
    this.dx = (Math.random() - 0.5) * 0.4;
    this.dy = (Math.random() - 0.5) * 0.4;
    this.opacity = Math.random() * 0.4 + 0.1;
    this.color = Math.random() > 0.5 ? '232,184,75' : '192,57,43';
  }

  function createParticles() {
    particles = [];
    const count = Math.min(100, Math.floor(W * H / 12000));
    for (let i = 0; i < count; i++) particles.push(new Particle());
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.dx; p.y += p.dy;
      if (p.x < 0 || p.x > W) p.dx *= -1;
      if (p.y < 0 || p.y > H) p.dy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color},${p.opacity})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();
  window.addEventListener('resize', () => { resize(); createParticles(); });
})();

// ===== TYPING EFFECT =====
(function initTyping() {
  const texts = [
    'Real Taste • Fresh Bites',
    'Hot & Tasty Every Time',
    'Simply Delicious!'
  ];
  let tIdx = 0, cIdx = 0, deleting = false;
  const el = document.getElementById('typeText');
  if (!el) return;

  function type() {
    const current = texts[tIdx];
    if (!deleting) {
      el.textContent = current.slice(0, ++cIdx);
      if (cIdx === current.length) {
        deleting = true;
        setTimeout(type, 2000);
        return;
      }
    } else {
      el.textContent = current.slice(0, --cIdx);
      if (cIdx === 0) {
        deleting = false;
        tIdx = (tIdx + 1) % texts.length;
      }
    }
    setTimeout(type, deleting ? 60 : 90);
  }
  setTimeout(type, 2400);
})();

// ===== NAVBAR =====
const navbar  = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close nav on link click
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// Scroll effects
window.addEventListener('scroll', () => {
  // Navbar shrink
  navbar.classList.toggle('scrolled', window.scrollY > 80);

  // Back to top
  document.getElementById('backTop').classList.toggle('show', window.scrollY > 400);

  // Active nav highlighting
  const sections = document.querySelectorAll('section[id]');
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

// ===== BACK TO TOP =====
document.getElementById('backTop').addEventListener('click', () =>
  window.scrollTo({ top: 0, behavior: 'smooth' })
);

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
    }
  });
});

// ===== ANIMATED STATS COUNTER =====
function animateStats() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = parseInt(el.dataset.target);
    let current = 0;
    const inc = target / 60;
    const timer = setInterval(() => {
      current += inc;
      if (current >= target) { el.textContent = target; clearInterval(timer); }
      else el.textContent = Math.floor(current);
    }, 25);
  });
}

// ===== SCROLL REVEAL =====
function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal, .food-card, .deal-card, .review-card').forEach(el => {
    observer.observe(el);
  });
}

// ===== RENDER MENU ITEMS =====
function createFoodCard(item, section) {
  const card = document.createElement('div');
  card.className = 'food-card';

  let priceHTML = '';
  let sizeHTML  = '';

  if (item.sizes) {
    const sizeKeys = Object.keys(item.sizes).filter(k => item.sizes[k]);
    const firstKey = sizeKeys[0];
    priceHTML = `<div class="card-price" id="price-${section}-${item.name.replace(/\s+/g, '-')}">
      Rs. ${item.sizes[firstKey]} <span>${firstKey}</span>
    </div>`;
    sizeHTML = `<select class="size-select" data-name="${item.name}" data-section="${section}">
      ${sizeKeys.map(k => `<option value="${k}" data-price="${item.sizes[k]}">${k} — Rs. ${item.sizes[k]}</option>`).join('')}
    </select>`;
  } else {
    priceHTML = `<div class="card-price">Rs. ${item.price}</div>`;
  }

  card.innerHTML = `
    <div class="card-emoji">${item.emoji}</div>
    <div class="card-body">
      <div class="card-name">${item.name}</div>
      <div class="card-desc">${item.desc}</div>
      ${sizeHTML}
      <div class="card-footer">
        ${priceHTML}
        <button class="add-btn" data-name="${item.name}" data-section="${section}">+ Add</button>
      </div>
    </div>`;

  // Size change updates price display
  const sel = card.querySelector('.size-select');
  if (sel) {
    sel.addEventListener('change', () => {
      const opt = sel.options[sel.selectedIndex];
      const priceEl = card.querySelector('.card-price');
      priceEl.innerHTML = `Rs. ${opt.dataset.price} <span>${sel.value}</span>`;
    });
  }

  // Add to cart
  card.querySelector('.add-btn').addEventListener('click', () => {
    let price, displayName;
    if (item.sizes) {
      const sel2 = card.querySelector('.size-select');
      const opt  = sel2.options[sel2.selectedIndex];
      price = parseInt(opt.dataset.price);
      displayName = `${item.name} (${sel2.value})`;
    } else {
      price = item.price;
      displayName = item.name;
    }
    addToCart({ name: displayName, price, emoji: item.emoji });
    animateAddBtn(card.querySelector('.add-btn'));
  });

  return card;
}

function renderDeals() {
  const grid = document.getElementById('dealsGrid');
  MENU.deals.forEach(deal => {
    const card = document.createElement('div');
    card.className = 'deal-card';
    card.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.5rem">
        <span class="deal-badge">${deal.badge}</span>
        <span class="deal-emoji">${deal.emoji}</span>
      </div>
      <ul class="deal-items">${deal.items.map(i => `<li>${i}</li>`).join('')}</ul>
      <div class="deal-footer">
        <div class="deal-price">Rs. ${deal.price}</div>
        <button class="add-btn" style="font-size:.8rem">+ Add Deal</button>
      </div>`;
    card.querySelector('.add-btn').addEventListener('click', () => {
      addToCart({ name: deal.badge + ' — ' + deal.items.join(' + '), price: deal.price, emoji: deal.emoji });
      animateAddBtn(card.querySelector('.add-btn'));
    });
    grid.appendChild(card);
  });
}

function renderSection(key, gridId) {
  const grid = document.getElementById(gridId);
  MENU[key].forEach(item => grid.appendChild(createFoodCard(item, key)));
}

// Render all sections
renderDeals();
renderSection('burgers',     'burgersGrid');
renderSection('pizza',       'pizzaGrid');
renderSection('shawarma',    'shawarmaGrid');
renderSection('fries',       'friesGrid');
renderSection('pasta',       'pastaGrid');
renderSection('rolls',       'rollsGrid');
renderSection('sandwiches',  'sandwichesGrid');
renderSection('friedfood',   'friedGrid');
renderSection('platters',    'plattersGrid');
renderSection('drinks',      'drinksGrid');

// Re-run observer for newly created cards
setTimeout(initReveal, 100);

// ===== BUTTON ANIMATION =====
function animateAddBtn(btn) {
  btn.textContent = '✓ Added!';
  btn.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';
  setTimeout(() => {
    btn.textContent = '+ Add';
    btn.style.background = '';
  }, 1000);
}

// ===== CART FUNCTIONS =====
function addToCart(item) {
  const existing = cart.find(c => c.name === item.name);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  updateCartUI();
  showCartNotification(item.name);
}

function removeFromCart(name) {
  cart = cart.filter(c => c.name !== name);
  updateCartUI();
}

function changeQty(name, delta) {
  const item = cart.find(c => c.name === name);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(name);
  else updateCartUI();
}

function updateCartUI() {
  const total   = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const count   = cart.reduce((s, c) => s + c.qty, 0);
  const counter = document.getElementById('cartCount');
  const items   = document.getElementById('cartItems');
  const footer  = document.getElementById('cartFooter');
  const totalEl = document.getElementById('totalPrice');

  counter.textContent = count;
  counter.style.transform = 'scale(1.3)';
  setTimeout(() => counter.style.transform = 'scale(1)', 200);

  totalEl.textContent = `Rs. ${total}`;
  footer.style.display = cart.length ? 'block' : 'none';

  if (cart.length === 0) {
    items.innerHTML = '<div class="cart-empty">Your cart is empty<br><small>Add items to get started!</small></div>';
    return;
  }

  items.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-emoji">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">Rs. ${item.price} × ${item.qty} = Rs. ${item.price * item.qty}</div>
      </div>
      <div class="cart-item-qty">
        <button class="qty-btn" data-action="dec" data-name="${item.name}">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" data-action="inc" data-name="${item.name}">+</button>
      </div>
      <button class="remove-item" data-name="${item.name}">🗑</button>
    </div>
  `).join('');

  items.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const delta = btn.dataset.action === 'inc' ? 1 : -1;
      changeQty(btn.dataset.name, delta);
    });
  });
  items.querySelectorAll('.remove-item').forEach(btn => {
    btn.addEventListener('click', () => removeFromCart(btn.dataset.name));
  });
}

// ===== CART NOTIFICATION =====
function showCartNotification(name) {
  const notif = document.createElement('div');
  notif.style.cssText = `
    position:fixed; top:80px; right:1rem; z-index:2000;
    background:linear-gradient(135deg,#27ae60,#2ecc71);
    color:#fff; padding:.75rem 1.5rem; border-radius:12px;
    font-family:'Raleway',sans-serif; font-weight:700; font-size:.85rem;
    box-shadow:0 8px 30px rgba(39,174,96,0.4);
    transform:translateX(110%); transition:transform 0.4s cubic-bezier(0.23,1,0.32,1);
    max-width:250px; word-break:break-word;
  `;
  notif.textContent = `✓ ${name.split('(')[0].trim()} added to cart!`;
  document.body.appendChild(notif);
  requestAnimationFrame(() => { notif.style.transform = 'translateX(0)'; });
  setTimeout(() => {
    notif.style.transform = 'translateX(110%)';
    setTimeout(() => notif.remove(), 400);
  }, 2000);
}

// ===== CART TOGGLE =====
const cartToggle  = document.getElementById('cartToggle');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart   = document.getElementById('closeCart');

function openCart()  { cartSidebar.classList.add('open'); cartOverlay.classList.add('open'); }
function closeCartFn(){ cartSidebar.classList.remove('open'); cartOverlay.classList.remove('open'); }

cartToggle.addEventListener('click', openCart);
closeCart.addEventListener('click', closeCartFn);
cartOverlay.addEventListener('click', closeCartFn);

// ===== WHATSAPP ORDER =====
const placeOrderBtn = document.getElementById('placeOrderBtn');
const modalOverlay  = document.getElementById('modalOverlay');
const closeModal    = document.getElementById('closeModal');
const sendWhatsApp  = document.getElementById('sendWhatsApp');

placeOrderBtn.addEventListener('click', () => {
  if (cart.length === 0) return;
  closeCartFn();
  modalOverlay.classList.add('open');
});

closeModal.addEventListener('click', () => modalOverlay.classList.remove('open'));
modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) modalOverlay.classList.remove('open');
});

sendWhatsApp.addEventListener('click', () => {
  const name    = document.getElementById('custName').value.trim();
  const phone   = document.getElementById('custPhone').value.trim();
  const address = document.getElementById('custAddress').value.trim();

  if (!name || !phone || !address) {
    alert('Please fill in all fields to place your order.');
    return;
  }

  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const itemList = cart.map(c => `  - ${c.name} × ${c.qty} = Rs. ${c.price * c.qty}`).join('\n');

  const msg = `🍕 *AL-NOOR PIZZA & BAKERS — New Order!*

👤 *Customer Name:* ${name}
📞 *Phone:* ${phone}

📍 *Delivery Address:*
${address}

🛒 *Ordered Items:*
${itemList}

💰 *Total Price:* Rs. ${total}

✅ Please confirm my order. Thank you!`;

  const waURL = `https://wa.me/923010013909?text=${encodeURIComponent(msg)}`;
  window.open(waURL, '_blank');

  // Reset
  cart = [];
  updateCartUI();
  modalOverlay.classList.remove('open');
  document.getElementById('custName').value = '';
  document.getElementById('custPhone').value = '';
  document.getElementById('custAddress').value = '';
});