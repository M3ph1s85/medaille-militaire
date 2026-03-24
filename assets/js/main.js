// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const nav = document.getElementById('siteNav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

// News filter
const filterBtns = document.querySelectorAll('.filter-btn');
const newsCards = document.querySelectorAll('.news-card[data-category]');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    newsCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Scroll reveal - simple version
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.style.opacity = '1';
      el.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.value-card, .news-card, .content-block').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
