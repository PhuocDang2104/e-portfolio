// iot_challenge_product.js
// Enhancements for SCENT project page (works in addition to your existing main.js).
// Features: reveal-on-scroll, header shrink effect, gallery lightbox, copy GitHub buttons, set year.

document.addEventListener('DOMContentLoaded', function () {
  // 1) Reveal on scroll using IntersectionObserver (only adds .show to .reveal)
  (function setupReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || reveals.length === 0) {
      // fallback: show immediately
      reveals.forEach(r => r.classList.add('show'));
      return;
    }
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(r => io.observe(r));
  })();

  // 2) Header shrink / subtle shadow on scroll (non-intrusive)
  (function headerShrink() {
    const nav = document.querySelector('nav.navbar');
    if (!nav) return;
    const basePad = 14;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        nav.style.padding = '8px 22px';
        nav.style.boxShadow = '0 6px 20px rgba(2,6,23,0.6)';
      } else {
        nav.style.padding = basePad + 'px 22px';
        nav.style.boxShadow = 'none';
      }
    }, { passive: true });
  })();

  // 3) Gallery lightbox
  (function galleryLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lbImg = document.getElementById('lbImg');
    const lbClose = document.getElementById('lbClose');

    if (!lightbox || !lbImg || !lbClose) return;

    document.querySelectorAll('.gallery-thumb').forEach(img => {
      img.addEventListener('click', (e) => {
        const src = img.dataset.large || img.src;
        lbImg.src = src;
        lightbox.style.display = 'flex';
        lightbox.setAttribute('aria-hidden', 'false');
      });
    });

    lbClose.addEventListener('click', () => {
      lightbox.style.display = 'none';
      lightbox.setAttribute('aria-hidden', 'true');
      lbImg.src = '';
    });

    // click outside image closes
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lbClose.click();
      }
    });
  })();

  // 4) Copy GitHub URL helper for two possible buttons
  (function copyGit() {
    const repoURL = 'https://github.https://github.com/PhuocDang2104/fptsoftware-iot-challenge-2025-SCENT-System/PhuocDang2104'; // change if needed
    const ids = ['copyGithub', 'copyGithub2'];
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      el.addEventListener('click', (ev) => {
        ev.preventDefault();
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(repoURL).then(() => {
            const orig = el.textContent;
            el.textContent = 'Copied ✓';
            setTimeout(()=> el.textContent = orig, 1500);
          }).catch(()=> window.open(repoURL, '_blank'));
        } else {
          window.open(repoURL, '_blank');
        }
      });
    });
  })();

  // 5) Set year in footer if present
  (function setYear() {
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  })();


  (function stackCarousel() {
  const track = document.getElementById('stackTrack');
  if (!track) return;

  const items = Array.from(track.querySelectorAll('.stack-item'));
  const prevBtn = document.getElementById('stackPrev');
  const nextBtn = document.getElementById('stackNext');
  const detailsTitle = document.getElementById('stackDetailsTitle');
  const detailsText = document.getElementById('stackDetailsText');
  const detailsImg = document.getElementById('stackDetailsImg');
  const carouselRoot = document.getElementById('stackCarousel');

  let current = 0;
  const total = items.length;
  const mod = (n, m) => ((n % m) + m) % m;

  function renderDetail(desc, raw) {
    let html = "";
    if (desc) html += `<p>${desc}</p>`;
    try {
      const arr = JSON.parse(raw);
      if (Array.isArray(arr)) {
        html += "<ul>" + arr.map(d => `<li>${d}</li>`).join("") + "</ul>";
        return html;
      }
    } catch (e) {
      if (raw) html += `<p>${raw}</p>`;
    }
    return html;
  }

  function applyPositions(centerIdx) {
    items.forEach((it, i) => {
      const rel = mod(i - centerIdx, total);
      let dist = rel;
      if (rel > total/2) dist = rel - total;
      it.classList.remove('pos-left2','pos-left1','pos-center','pos-right1','pos-right2','pos-hidden');
      if (dist === 0) it.classList.add('pos-center');
      else if (dist === -1) it.classList.add('pos-left1');
      else if (dist === -2) it.classList.add('pos-left2');
      else if (dist === 1) it.classList.add('pos-right1');
      else if (dist === 2) it.classList.add('pos-right2');
      else it.classList.add('pos-hidden');
    });

    const centerItem = items[centerIdx];
    if (centerItem) {
      const title = centerItem.dataset.title || '';
      const desc = centerItem.dataset.desc || '';
      const detail = centerItem.dataset.detail || '';
      const image = centerItem.dataset.image || '';
      if (detailsTitle) detailsTitle.textContent = title;
      if (detailsText) detailsText.innerHTML = renderDetail(desc, detail);
      if (detailsImg) {
        detailsImg.src = image;
        detailsImg.alt = title + " illustration";
      }
    }

    items.forEach((it, i) => it.setAttribute('aria-selected', String(i === centerIdx)));
  }

  function goTo(index) { current = mod(index, total); applyPositions(current); }
  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  applyPositions(current);

  items.forEach((it, idx) => {
    it.addEventListener('click', () => { goTo(idx); resetAutoRotate(); });
  });
  if (prevBtn) prevBtn.addEventListener('click', () => { prev(); resetAutoRotate(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { next(); resetAutoRotate(); });

  if (carouselRoot) {
    carouselRoot.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); resetAutoRotate(); }
      if (e.key === 'ArrowRight') { e.preventDefault(); next(); resetAutoRotate(); }
    });
  }

  // autoplay with pause on hover/focus
  let autoTimer = null;
  const AUTO_DELAY = 4000;
  function startAutoRotate() {
    stopAutoRotate();
    autoTimer = setInterval(() => { next(); }, AUTO_DELAY);
  }
  function stopAutoRotate() { if (autoTimer) { clearInterval(autoTimer); autoTimer = null; } }
  function resetAutoRotate() { stopAutoRotate(); startAutoRotate(); }

  if (carouselRoot) {
    carouselRoot.addEventListener('pointerenter', () => stopAutoRotate());
    carouselRoot.addEventListener('pointerleave', () => startAutoRotate());
    carouselRoot.addEventListener('focusin', () => stopAutoRotate());
    carouselRoot.addEventListener('focusout', () => startAutoRotate());
  }

  startAutoRotate();
})();



  // ---------- Gallery Lightbox (if present) ----------
  (function galleryLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lbImg = document.getElementById('lbImg');
    const lbClose = document.getElementById('lbClose');
    if (!lightbox || !lbImg || !lbClose) return;
    document.querySelectorAll('.gallery-thumb').forEach(img => {
      img.addEventListener('click', (e) => {
        const src = img.dataset.large || img.src;
        lbImg.src = src;
        lightbox.style.display = 'flex';
        lightbox.setAttribute('aria-hidden', 'false');
      });
    });
    lbClose.addEventListener('click', () => { lightbox.style.display = 'none'; lightbox.setAttribute('aria-hidden', 'true'); lbImg.src = ''; });
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lbClose.click(); });
  })();

  // ---------- Copy GitHub (reuse) ----------
  (function copyGit() {
    const repoURL = 'https://github.com/PhuocDang2104/fptsoftware-iot-challenge-2025-SCENT-System';
    ['copyGithub','copyGithub2'].forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      el.addEventListener('click', (ev) => {
        ev.preventDefault();
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(repoURL).then(() => {
            const orig = el.textContent;
            el.textContent = 'Copied ✓';
            setTimeout(()=> el.textContent = orig, 1500);
          }).catch(()=> window.open(repoURL,'_blank'));
        } else {
          window.open(repoURL,'_blank');
        }
      });
    });
  })();

  // ---------- Set year (if not handled in main.js) ----------
  (function setYear() {
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  })();
  // Note: the main.js you already have handles:
  //  - hamburger toggle & mobile menu
  //  - smooth scroll for internal anchors
  //  - contact form fallback mailto
  // So we intentionally do not duplicate those behaviors here.
});
