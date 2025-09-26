// main.js - small scripts: hamburger toggle, smooth scroll, contact form handler, year
document.addEventListener('DOMContentLoaded', function () {
  // year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // hamburger & mobile menu
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!expanded));
      if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
        mobileMenu.setAttribute('aria-hidden', 'true');
      } else {
        mobileMenu.style.display = 'block';
        mobileMenu.setAttribute('aria-hidden', 'false');
      }
    });

    // close on resize > mobile
    window.addEventListener('resize', () => {
      if (window.innerWidth > 720) {
        mobileMenu.style.display = 'none';
        mobileMenu.setAttribute('aria-hidden', 'true');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });

    // hide mobile menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
        mobileMenu.setAttribute('aria-hidden', 'true');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const href = a.getAttribute('href');
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offset = 72; // navbar
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // simple contact form handler - opens mail client as fallback
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const subject = encodeURIComponent(document.getElementById('subject').value || 'Contact from portfolio');
      const body = encodeURIComponent(document.getElementById('message').value || '');
      // fallback: open mail client
      window.location.href = `mailto:phuoc.dang2104@gmail.com?subject=${subject}&body=${body}`;
    });
  }
});
