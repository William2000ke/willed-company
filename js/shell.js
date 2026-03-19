// ── Shared NAV + FOOTER injected on every page ──
(function injectShell() {
  const isRoot = !window.location.pathname.includes('/pages/');
  const base = isRoot ? '' : '../';

  // NAV
  const navHTML = `
<nav id="nav">
  <a href="${base}index.html" class="nav-logo">
    <svg class="nav-logo-svg" viewBox="0 0 42 42" fill="none">
      <path d="M5 5 L37 5 L37 28 Q37 40 21 43 Q5 40 5 28 Z" fill="#1E3A5F" stroke="#C9A84C" stroke-width="1.6"/>
      <line x1="13" y1="19" x2="29" y2="19" stroke="white" stroke-width="2.2" stroke-linecap="round"/>
      <line x1="21" y1="11" x2="21" y2="27" stroke="white" stroke-width="2.2" stroke-linecap="round"/>
      <rect x="12" y="30" width="3.5" height="5.5" rx="1" fill="#C9A84C" opacity="0.65"/>
      <rect x="18.5" y="27" width="3.5" height="8.5" rx="1" fill="#C9A84C" opacity="0.85"/>
      <rect x="25" y="29" width="3.5" height="6.5" rx="1" fill="#C9A84C"/>
    </svg>
    <div class="nav-logo-text">
      <strong>Willed</strong>
      <small>Company Limited</small>
    </div>
  </a>
  <div class="nav-links">
    <a href="${base}index.html">Home</a>
    <a href="${base}pages/about.html">About</a>
    <a href="${base}pages/services.html">Services</a>
    <a href="${base}pages/market.html">Market</a>
    <a href="${base}pages/partnership.html">Partnership</a>
    <a href="${base}pages/financials.html">Financials</a>
    <a href="${base}pages/roadmap.html">Roadmap</a>
    <a href="${base}pages/contact.html" class="nav-cta-btn">Get In Touch</a>
  </div>
  <button class="hamburger" onclick="toggleNav()" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="mobile-drawer" id="mobileDrawer">
  <a href="${base}index.html">Home</a>
  <a href="${base}pages/about.html">About</a>
  <a href="${base}pages/services.html">Services</a>
  <a href="${base}pages/market.html">Market</a>
  <a href="${base}pages/partnership.html">Partnership</a>
  <a href="${base}pages/financials.html">Financials</a>
  <a href="${base}pages/roadmap.html">Roadmap</a>
  <a href="${base}pages/contact.html" class="mob-cta">Get In Touch</a>
</div>`;

  // FOOTER
  const footerHTML = `
<footer>
  <div class="footer-main">
    <div>
      <div class="footer-brand-name">Willed Company Limited</div>
      <div class="footer-tagline">"Seeing further, delivering better."</div>
      <div class="footer-est">Est. 2026 · Nairobi, Kenya</div>
    </div>
    <div class="footer-col">
      <h5>Company</h5>
      <a href="${base}index.html">Home</a>
      <a href="${base}pages/about.html">About Us</a>
      <a href="${base}pages/services.html">Services</a>
      <a href="${base}pages/market.html">Market</a>
    </div>
    <div class="footer-col">
      <h5>Business Plan</h5>
      <a href="${base}pages/partnership.html">Partnership</a>
      <a href="${base}pages/financials.html">Financials</a>
      <a href="${base}pages/roadmap.html">Roadmap</a>
      <a href="${base}pages/contact.html">Contact</a>
    </div>
    <div class="footer-col">
      <h5>Founded By</h5>
      <span>Edwin William Otieno</span>
      <span>Managing Director</span>
      <span>Nairobi, Kenya</span>
      <a href="${base}pages/contact.html" class="footer-gold" style="margin-top:0.5rem">Send a Message →</a>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2026 Willed Company Limited. All rights reserved.</span>
    <span>Confidential — For Authorised Parties Only</span>
  </div>
</footer>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);
})();
