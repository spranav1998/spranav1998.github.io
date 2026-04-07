/* ═══════════════════════════════════════════ */
/* PARTICLES CONFIG — Neural Network Style     */
/* ═══════════════════════════════════════════ */

(function () {
  function initParticles() {
    if (typeof tsParticles === 'undefined') return;

    tsParticles.load('tsparticles', {
      fullScreen: false,
      fpsLimit: 60,
      particles: {
        number: {
          value: 60,
          density: {
            enable: true,
            area: 900,
          },
        },
        color: {
          value: '#3b82f6',
        },
        shape: {
          type: 'circle',
        },
        opacity: {
          value: 0.3,
          random: { enable: true, minimumValue: 0.1 },
        },
        size: {
          value: 2.5,
          random: { enable: true, minimumValue: 1 },
        },
        links: {
          enable: true,
          distance: 160,
          color: '#3b82f6',
          opacity: 0.12,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.8,
          direction: 'none',
          random: true,
          straight: false,
          outModes: { default: 'out' },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'grab',
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 180,
            links: {
              opacity: 0.25,
            },
          },
        },
      },
      detectRetina: true,
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initParticles);
  } else {
    initParticles();
  }
})();
