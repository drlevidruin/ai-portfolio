(function () {
  const slides = document.querySelectorAll('.slide');
  const total = slides.length;
  const progressFill = document.getElementById('progressFill');
  const counter = document.getElementById('counter');
  const totalEl = document.getElementById('total');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const hint = document.querySelector('.hint');
  let current = 0;
  let hintDismissed = false;

  if (!slides.length) return;
  totalEl.textContent = total;

  function go(i) {
    const next = Math.max(0, Math.min(total - 1, i));
    if (next === current) return;
    slides[current].classList.remove('active');
    slides[next].classList.add('active');
    slides[next].scrollTop = 0;
    current = next;
    counter.textContent = current + 1;
    progressFill.style.width = ((current + 1) / total * 100) + '%';
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === total - 1;
    if (!hintDismissed && hint) { hint.style.opacity = '0'; hintDismissed = true; }
  }

  document.addEventListener('keydown', (e) => {
    const tag = (e.target && e.target.tagName) || '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
    if (e.key === 'ArrowRight' || e.key === 'PageDown') { go(current + 1); e.preventDefault(); }
    else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { go(current - 1); e.preventDefault(); }
    else if (e.key === ' ') { go(current + 1); e.preventDefault(); }
    else if (e.key === 'Home') { go(0); e.preventDefault(); }
    else if (e.key === 'End') { go(total - 1); e.preventDefault(); }
  });

  prevBtn.addEventListener('click', () => go(current - 1));
  nextBtn.addEventListener('click', () => go(current + 1));

  progressFill.style.width = (1 / total * 100) + '%';
  prevBtn.disabled = true;
})();
