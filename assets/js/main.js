/* ═══════════════════════════════════════════ */
/* MAIN JS — Pranav Sankar Portfolio           */
/* ═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  lucide.createIcons();

  // ── Typed.js ──
  const typedOutput = document.getElementById('typed-output');
  if (typedOutput && typeof Typed !== 'undefined') {
    new Typed('#typed-output', {
    strings: [
      'AI/ML Engineer',
      'LLM &amp; RAG Systems Builder',
      'Cloud Infrastructure Architect',
      '0→1 Product Builder',
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,
      smartBackspace: true,
    });
  }

  // ── Navbar Scroll ──
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    navbar.classList.toggle('navbar-scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ── Mobile Menu ──
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
  });

  // ── Active Nav Highlight ──
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observerNav = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { rootMargin: '-40% 0px -60% 0px' }
  );
  sections.forEach(section => observerNav.observe(section));

  // ── Scroll Fade-In ──
  const fadeEls = document.querySelectorAll('.fade-in');
  const observerFade = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observerFade.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  fadeEls.forEach(el => observerFade.observe(el));

  // ── Counter Animation ──
  const statNumbers = document.querySelectorAll('.stat-number');
  const observerCounter = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.getAttribute('data-target'));
          animateCounter(el, target);
          observerCounter.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );
  statNumbers.forEach(el => observerCounter.observe(el));

  function animateCounter(el, target) {
    const duration = 1500;
    const start = performance.now();
    const isDecimal = target % 1 !== 0;

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = eased * target;

      if (target >= 1000) {
        el.textContent = Math.floor(current).toLocaleString() + '+';
      } else if (isDecimal) {
        el.textContent = current.toFixed(1) + '+';
      } else {
        el.textContent = Math.floor(current) + '+';
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }
    requestAnimationFrame(update);
  }

  // ── Contact Form ──
  const form = document.getElementById('contact-form');
  const toast = document.getElementById('form-toast');
  const submitBtn = document.getElementById('submit-btn');

  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending... <span class="animate-spin inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"></span>';

      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        });
        const data = await res.json();

        if (data.success) {
          showToast('Message sent! I\'ll get back to you soon.', 'success');
          form.reset();
        } else {
          showToast(data.message || 'Something went wrong. Please try again.', 'error');
        }
      } catch {
        showToast('Network error. Please try again later.', 'error');
      }

      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Send Message <i data-lucide="send" class="w-4 h-4"></i>';
      lucide.createIcons();
    });
  }

  function showToast(message, type) {
    toast.textContent = message;
    toast.className = `mt-4 px-4 py-3 rounded-lg text-sm font-medium toast-${type}`;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 5000);
  }
});
