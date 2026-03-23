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
  const isHome = window.location.pathname === '/' || window.location.pathname === '';
  document.querySelectorAll('a[href^="#"], a[href^="/#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const href = a.getAttribute('href');
      if (!href || href === '#' || href === '/#') return;
      const isRootHash = href.startsWith('/#');
      if (isRootHash && !isHome) return;
      const selector = isRootHash ? href.slice(1) : href;
      if (selector === '#') return;
      const target = document.querySelector(selector);
      if (target) {
        if (target.classList.contains('saar-lightbox')) return;
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

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let ticking = false;

    const resetHeroState = () => {
      hero.style.setProperty('--hero-shift', '0px');
      hero.style.setProperty('--hero-blur', '0px');
      hero.style.setProperty('--hero-opacity', '1');
      hero.style.setProperty('--hero-scale', '1');
      hero.style.setProperty('--hero-visual-shift', '0px');
      hero.style.setProperty('--hero-visual-opacity', '0.9');
      hero.style.setProperty('--hero-visual-two-x', '0px');
      hero.style.setProperty('--hero-visual-two-y', '0px');
      hero.style.setProperty('--hero-visual-three-x', '0px');
      hero.style.setProperty('--hero-visual-three-y', '0px');
      hero.style.setProperty('--hero-visual-four-x', '0px');
      hero.style.setProperty('--hero-visual-four-y', '0px');
      hero.style.setProperty('--hero-cue-shift', '0px');
      hero.style.setProperty('--hero-cue-opacity', '1');
      hero.style.setProperty('--hero-image-shift', '0px');
      hero.style.setProperty('--hero-image-scale', '1');
      hero.style.setProperty('--hero-image-opacity', '1');
    };

    const update = () => {
      ticking = false;
      if (prefersReducedMotion.matches) {
        resetHeroState();
        return;
      }

      const rect = hero.getBoundingClientRect();
      const height = hero.offsetHeight || window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), height);
      const progress = Math.min(scrolled / height, 1);

      const eased = 1 - Math.pow(1 - progress, 2.4);
      const shift = -96 * eased;
      const blur = 2.2 * eased;
      const opacity = 1 - eased * 0.72;
      const scale = 1 - eased * 0.05;
      const visualShift = -78 * eased;
      const visualOpacity = 0.9 - eased * 0.34;
      const cueOpacity = 1 - eased * 0.95;
      const cueShift = 10 * eased;
      const imageShift = Math.min(scrolled * 0.16, 36);
      const imageScale = 1 - eased * 0.04;
      const imageOpacity = 1 - eased * 0.18;
      const visualTwoX = 150 * eased;
      const visualTwoY = -132 * eased;
      const visualThreeX = -168 * eased;
      const visualThreeY = -150 * eased;
      const visualFourX = 156 * eased;
      const visualFourY = 126 * eased;

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
    prefersReducedMotion.addEventListener?.('change', onScroll);
  })();

  (function setupScrollMedia() {
    const anchor = document.querySelector('.home-hero-scroll-anchor');
    const target = document.querySelector('.about-media');
    const floating = document.querySelector('.scroll-media');
    if (!anchor || !target || !floating) return;

    const floatingImage = floating.querySelector('.scroll-media-img');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const startScale = 0.88;
    let ticking = false;
    let anchorRadius = 24;
    let targetRadius = 18;

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
    const easeOutCubic = (value) => 1 - Math.pow(1 - value, 3);

    const measureStatic = () => {
      anchorRadius = parseFloat(getComputedStyle(anchor).borderRadius) || 24;
      targetRadius = parseFloat(getComputedStyle(target).borderRadius) || 18;
    };

    const update = () => {
      ticking = false;
      if (prefersReducedMotion.matches) {
        floating.style.opacity = '0';
        if (floatingImage) {
          floatingImage.style.transform = 'scale(1)';
        }
        return;
      }

      const scrollY = window.pageYOffset;
      const anchorRect = anchor.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      if (!anchorRect.width || !anchorRect.height || !targetRect.width || !targetRect.height) {
        floating.style.opacity = '0';
        return;
      }

      const startWidth = anchorRect.width * startScale;
      const startHeight = anchorRect.height * startScale;
      const startTop = anchorRect.top + (anchorRect.height - startHeight) / 2;
      const startLeft = anchorRect.left + (anchorRect.width - startWidth) / 2;
      const startDocTop = startTop + scrollY;
      const targetDocTop = targetRect.top + scrollY;
      const travelDistance = Math.max(targetDocTop - startDocTop, 1);
      const progress = clamp(scrollY / travelDistance, 0, 1);
      const eased = easeOutCubic(progress);
      const currentTop = startTop + (targetRect.top - startTop) * eased;
      const currentLeft = startLeft + (targetRect.left - startLeft) * eased;
      const nextWidth = startWidth + (targetRect.width - startWidth) * eased;
      const nextHeight = startHeight + (targetRect.height - startHeight) * eased;
      const scaleX = nextWidth / startWidth;
      const scaleY = nextHeight / startHeight;
      const currentRadius = anchorRadius * startScale + (targetRadius - anchorRadius * startScale) * eased;
      const blur = (1 - eased) * 0.45;
      const imageScale = 1.06 - eased * 0.06;

      floating.style.width = `${startWidth}px`;
      floating.style.height = `${startHeight}px`;
      floating.style.borderRadius = `${currentRadius}px`;
      floating.style.opacity = progress <= 0.08 ? '0' : '1';
      floating.style.filter = `blur(${blur}px)`;
      floating.style.transform = `translate3d(${currentLeft}px, ${currentTop}px, 0) scale(${scaleX}, ${scaleY})`;

      if (floatingImage) {
        floatingImage.style.transform = `scale(${imageScale})`;
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    measureStatic();
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', () => {
      measureStatic();
      update();
    });
    window.addEventListener('load', update);
    prefersReducedMotion.addEventListener?.('change', update);
  })();

  (function setupLightbox() {
    const getLightboxes = () => Array.from(document.querySelectorAll('.saar-lightbox'));

    const getLightboxFromHash = () => {
      const hash = window.location.hash;
      if (!hash || hash.length <= 1) return null;
      let target = null;
      try {
        target = document.querySelector(hash);
      } catch {
        return null;
      }
      if (target && target.classList.contains('saar-lightbox')) {
        return target;
      }
      return null;
    };

    const openLightbox = (box) => {
      if (!box) return;
      getLightboxes().forEach((item) => {
        const isActive = item === box;
        item.classList.toggle('is-open', isActive);
        item.setAttribute('aria-hidden', isActive ? 'false' : 'true');
      });
      document.body.classList.add('lightbox-open');
    };

    const closeLightbox = () => {
      getLightboxes().forEach((item) => {
        item.classList.remove('is-open');
        item.setAttribute('aria-hidden', 'true');
      });
      document.body.classList.remove('lightbox-open');

      const hash = window.location.hash;
      if (hash && hash.length > 1) {
        const target = getLightboxFromHash();
        if (target) {
          history.replaceState(null, document.title, window.location.pathname + window.location.search);
        }
      }
    };

    const syncFromHash = () => {
      const target = getLightboxFromHash();
      if (target) {
        openLightbox(target);
        return;
      }
      closeLightbox();
    };

    document.addEventListener('click', (event) => {
      const target = event.target instanceof Element ? event.target : event.target.parentElement;
      if (!target) return;

      const trigger = target.closest('a[href^="#saar-lightbox"], a[href^="#arch-lightbox"]');
      if (trigger) {
        const href = trigger.getAttribute('href');
        if (href) {
          const box = document.querySelector(href);
          if (box && box.classList.contains('saar-lightbox')) {
            event.preventDefault();
            openLightbox(box);
          }
        }
        return;
      }

      const closeTrigger = target.closest('[data-lightbox-close]');
      if (closeTrigger) {
        event.preventDefault();
        closeLightbox();
        return;
      }

      const lightbox = target.closest('.saar-lightbox');
      if (!lightbox) return;
      const inner = lightbox.querySelector('.saar-lightbox-inner');
      if (inner && inner.contains(target)) return;
      event.preventDefault();
      closeLightbox();
    });

    window.addEventListener('hashchange', syncFromHash);
    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      closeLightbox();
    });

    syncFromHash();
  })();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
