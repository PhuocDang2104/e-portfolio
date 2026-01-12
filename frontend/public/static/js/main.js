// main.js - small scripts: hamburger toggle, smooth scroll, contact form handler, year
function init() {
  // year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();


  // scroll reveal (pop up effect)
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-show');
        observer.unobserve(entry.target); // chỉ animate lần đầu
      }
    });
  }, { threshold: 0.2 }); // 20% hiện trong màn hình thì trigger

  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });
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

  // navbar hide on scroll down, reveal on scroll up
  (function setupNavScroll() {
    const navWrap = document.querySelector('.nav-wrap');
    if (!navWrap) return;

    let lastY = window.pageYOffset;
    let ticking = false;
    const threshold = 120;

    const update = () => {
      ticking = false;
      const currentY = window.pageYOffset;
      const delta = currentY - lastY;
      const scrollingDown = delta > 4;
      const scrollingUp = delta < -4;

      if (currentY <= 20) {
        navWrap.classList.remove('nav-hidden');
        navWrap.classList.add('nav-visible');
      } else if (scrollingDown && currentY > threshold) {
        navWrap.classList.add('nav-hidden');
        navWrap.classList.remove('nav-visible');
      } else if (scrollingUp) {
        navWrap.classList.remove('nav-hidden');
        navWrap.classList.add('nav-visible');
      }

      lastY = currentY;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
  })();

  // hero scroll out animation
  (function setupHeroScroll() {
    const hero = document.querySelector('.home-hero');
    if (!hero) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      const rect = hero.getBoundingClientRect();
      const height = hero.offsetHeight || window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), height);
      const progress = Math.min(scrolled / height, 1);

      const shift = -140 * progress;
      const blur = 4 * progress;
      const opacity = 1 - progress * 0.9;
      const scale = 1 - progress * 0.1;
      const visualShift = -120 * progress;
      const visualOpacity = 0.9 - progress * 0.6;
      const cueOpacity = 1 - progress * 1.2;
      const cueShift = 12 * progress;
      const imageShift = Math.min(scrolled * 1.1, height * 0.65);
      const imageScale = 1 + progress * 0.35;
      const imageOpacity = 1 - progress * 0.35;
      const visualTwoX = 220 * progress;
      const visualTwoY = -200 * progress;
      const visualThreeX = -260 * progress;
      const visualThreeY = -220 * progress;
      const visualFourX = 240 * progress;
      const visualFourY = 200 * progress;

      hero.style.setProperty('--hero-shift', `${shift}px`);
      hero.style.setProperty('--hero-blur', `${blur}px`);
      hero.style.setProperty('--hero-opacity', `${Math.max(opacity, 0)}`);
      hero.style.setProperty('--hero-scale', `${Math.max(scale, 0.9)}`);
      hero.style.setProperty('--hero-visual-shift', `${visualShift}px`);
      hero.style.setProperty('--hero-visual-opacity', `${Math.max(visualOpacity, 0)}`);
      hero.style.setProperty('--hero-visual-two-x', `${visualTwoX}px`);
      hero.style.setProperty('--hero-visual-two-y', `${visualTwoY}px`);
      hero.style.setProperty('--hero-visual-three-x', `${visualThreeX}px`);
      hero.style.setProperty('--hero-visual-three-y', `${visualThreeY}px`);
      hero.style.setProperty('--hero-visual-four-x', `${visualFourX}px`);
      hero.style.setProperty('--hero-visual-four-y', `${visualFourY}px`);
      hero.style.setProperty('--hero-cue-shift', `${cueShift}px`);
      hero.style.setProperty('--hero-cue-opacity', `${Math.max(cueOpacity, 0)}`);
      hero.style.setProperty('--hero-image-shift', `${imageShift}px`);
      hero.style.setProperty('--hero-image-scale', `${imageScale}`);
      hero.style.setProperty('--hero-image-opacity', `${Math.max(imageOpacity, 0)}`);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
  })();

  (function setupScrollMedia() {
    const anchor = document.querySelector('.home-hero-scroll-anchor');
    const target = document.querySelector('.about-media');
    const floating = document.querySelector('.scroll-media');
    if (!anchor || !target || !floating) return;

    const speed = 0.05;
    const startScale = 0.86;
    let startRect = null;
    let endRect = null;
    let endScroll = 0;
    let ticking = false;

    const measure = () => {
      const scrollY = window.pageYOffset;
      const scrollX = window.pageXOffset;
      const anchorRect = anchor.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      const baseRadius = parseFloat(getComputedStyle(anchor).borderRadius) || 24;
      const scaledWidth = anchorRect.width * startScale;
      const scaledHeight = anchorRect.height * startScale;
      const scaledTop = anchorRect.top + (anchorRect.height - scaledHeight) / 2;
      const scaledLeft = anchorRect.left + (anchorRect.width - scaledWidth) / 2;

      startRect = {
        top: scaledTop,
        left: scaledLeft,
        width: scaledWidth,
        height: scaledHeight,
        radius: baseRadius * startScale
      };

      const startDocTop = startRect.top + scrollY;

      endRect = {
        top: targetRect.top + scrollY,
        left: targetRect.left + scrollX,
        width: targetRect.width,
        height: targetRect.height,
        radius: parseFloat(getComputedStyle(target).borderRadius) || 18
      };

      const distance = endRect.top - startDocTop;
      endScroll = Math.max(1, distance / (1 + speed));
    };

    const update = () => {
      ticking = false;
      if (!startRect || !endRect) return;

      const scrollY = window.pageYOffset;
      const scrollX = window.pageXOffset;
      const progressRaw = scrollY / endScroll;
      const progress = Math.min(Math.max(progressRaw, 0), 1);
      const blur = Math.max(0, 0.5 * (1 - progress));

      const targetTop = endRect.top - scrollY;
      const targetLeft = endRect.left - scrollX;
      const currentTop = progress >= 1 ? targetTop : startRect.top + scrollY * speed;
      const currentLeft = startRect.left + (targetLeft - startRect.left) * progress;
      const currentWidth = startRect.width + (endRect.width - startRect.width) * progress;
      const currentHeight = startRect.height + (endRect.height - startRect.height) * progress;
      const currentRadius = startRect.radius + (endRect.radius - startRect.radius) * progress;

      floating.style.opacity = '1';
      floating.style.filter = `blur(${blur}px)`;
      floating.style.top = `${currentTop}px`;
      floating.style.left = `${currentLeft}px`;
      floating.style.width = `${currentWidth}px`;
      floating.style.height = `${currentHeight}px`;
      floating.style.borderRadius = `${currentRadius}px`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    measure();
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', () => {
      measure();
      update();
    });
  })();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
