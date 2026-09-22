(() => {
  const slides = [...document.querySelectorAll('.hero-slide')];
  if (slides.length < 2) return;
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let index = 0;
  let timer;
  const start = () => {
    clearInterval(timer);
    if (motion.matches) return;
    timer = setInterval(() => {
      if (document.hidden) return;
      const next = (index + 1) % slides.length;
      if (!slides[next].complete || !slides[next].naturalWidth) return;
      slides[index].classList.remove('is-active');
      slides[next].classList.add('is-active');
      index = next;
    }, 7000);
  };
  motion.addEventListener('change', start);
  start();
})();
