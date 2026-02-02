// Unobtrusive scrolling behavior for elements with `data-scroll-to` attribute
const scrollers = document.querySelectorAll('[data-scroll-to]');
scrollers.forEach(el => {
  el.addEventListener('click', (e) => {
    const targetId = el.getAttribute('data-scroll-to');
    if (!targetId) return;
    const target = document.getElementById(targetId);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Improve keyboard accessibility for card links (space/enter)
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      card.click();
      e.preventDefault();
    }
  });
});
