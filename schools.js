const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? '×' : '☰';
});

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
  });
});

const schoolForm = document.querySelector('#school-form');
const schoolStatus = document.querySelector('#school-status');
schoolForm.addEventListener('submit', (event) => {
  event.preventDefault();
  schoolStatus.textContent = 'Thanks — your school information request is ready to review.';
  schoolForm.reset();
});
