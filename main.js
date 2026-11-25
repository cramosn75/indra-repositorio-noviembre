const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

const heroArt = document.querySelector('.hero-art');

heroArt.addEventListener('pointermove', (event) => {
  const rect = heroArt.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;

  heroArt.querySelectorAll('.shape').forEach((shape, index) => {
    const strength = (index + 1) * 7;
    shape.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  });
});

heroArt.addEventListener('pointerleave', () => {
  heroArt.querySelectorAll('.shape').forEach((shape) => {
    shape.style.transform = '';
  });
});
