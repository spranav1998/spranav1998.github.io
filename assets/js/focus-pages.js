document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();

  const button = document.getElementById('focus-menu-button');
  const menu = document.getElementById('focus-mobile-menu');
  if (button && menu) {
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      menu.classList.toggle('hidden');
    });
  }

  const elements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  elements.forEach(element => observer.observe(element));
});
