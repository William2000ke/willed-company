// ═══════════════════════════════════════════════════
//  WILLED COMPANY LIMITED — Global JS
// ═══════════════════════════════════════════════════

// Scroll-based nav compact
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (nav) nav.classList.toggle('compact', window.scrollY > 60);
});

// Intersection observer for .anim elements
const animObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.1 });
document.querySelectorAll('.anim').forEach(el => animObs.observe(el));

// Animated bars
const barObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('[data-w]').forEach(bar => {
        bar.style.transition = 'width 1.4s cubic-bezier(0.25,0.8,0.25,1)';
        bar.style.width = bar.dataset.w;
      });
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.bars-container').forEach(el => barObs.observe(el));

// Mobile menu toggle
function toggleNav() {
  const d = document.getElementById('mobileDrawer');
  if (d) d.classList.toggle('open');
}

// Set active nav link
(function setActive() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-drawer a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href.includes(path) && path !== '') a.classList.add('active');
  });
})();

// Counter animation
function countUp(el, target, suffix) {
  let n = 0; const step = target / 60;
  const t = setInterval(() => {
    n = Math.min(n + step, target);
    el.textContent = Math.floor(n) + (suffix || '');
    if (n >= target) clearInterval(t);
  }, 16);
}
