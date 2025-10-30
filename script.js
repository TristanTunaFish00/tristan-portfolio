// Theme toggle
const toggleBtn = document.querySelector('.toggle-mode');
const htmlEl = document.documentElement;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') htmlEl.classList.add('dark');
else if (savedTheme === 'light') htmlEl.classList.remove('dark');
else if (window.matchMedia('(prefers-color-scheme: dark)').matches) htmlEl.classList.add('dark');

toggleBtn.addEventListener('click', () => {
  htmlEl.classList.toggle('dark');
  localStorage.setItem('theme', htmlEl.classList.contains('dark') ? 'dark' : 'light');
});

// Fade-in animation
const sections = document.querySelectorAll('.fade-section');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach(section => observer.observe(section));
