(() => {
  const widget = document.querySelector('.hero-google-rating');
  if (!widget) return;
  const review = widget.querySelector('.hero-review-rotation');
  const quote = widget.querySelector('.hero-review-quote');
  const author = widget.querySelector('.hero-review-author');
  const reviews = [
    ['Professional, proactive, prompt, friendly service.', 'Move Well Reformer Pilates'],
    ['What pleasant people, thankyou so much the job is amazing', 'Jenny Kiwikiwi'],
    ['Great service & the workmanship was brilliant!', 'Brenda Woolly'],
    ['Amazing crew, very fast, trustworthy, very good team.', 'Rob Ludlow'],
    ['Very pleased with your workmanship.', 'Colin Winde'],
    ['Great price', 'Kathy Hendry']
  ];
  let index = 0;
  let paused = false;
  let timer;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const update = () => {
    index = (index + 1) % reviews.length;
    quote.textContent = `“${reviews[index][0]}”`;
    author.textContent = reviews[index][1];
    review.classList.remove('is-changing');
  };
  const start = () => {
    clearInterval(timer);
    if (reducedMotion.matches) return;
    timer = setInterval(() => {
      if (paused || document.hidden) return;
      review.classList.add('is-changing');
      setTimeout(update, 250);
    }, 6000);
  };
  widget.addEventListener('mouseenter', () => { paused = true; });
  widget.addEventListener('mouseleave', () => { paused = false; });
  widget.addEventListener('focusin', () => { paused = true; });
  widget.addEventListener('focusout', () => { paused = false; });
  reducedMotion.addEventListener('change', start);
  start();
})();
