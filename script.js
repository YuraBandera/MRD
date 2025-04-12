// Перемикач теми
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Анімація для вкладок
document.querySelectorAll('.animated-link').forEach(link => {
  link.addEventListener('mouseover', () => {
    link.classList.add('animated');
  });
  link.addEventListener('mouseout', () => {
    link.classList.remove('animated');
  });
});
