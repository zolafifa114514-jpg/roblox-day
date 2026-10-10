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

const signupForm = document.querySelector('#signup-form');
const formStatus = document.querySelector('#form-status');
signupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = new FormData(signupForm).get('email');
  formStatus.textContent = `Thanks — ${email} is on the Build Day list.`;
  signupForm.reset();
});

const dayCards = document.querySelectorAll('.day-card');
dayCards.forEach((card) => {
  card.addEventListener('mouseenter', () => {
    dayCards.forEach((item) => item.classList.remove('active'));
    card.classList.add('active');
  });
});
