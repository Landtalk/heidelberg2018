const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

const closeMenu = () => {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
  menuButton.querySelector('.sr-only').textContent = '메뉴 열기';
};

menuButton.addEventListener('click', () => {
  const willOpen = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(willOpen));
  navigation.classList.toggle('is-open', willOpen);
  menuButton.querySelector('.sr-only').textContent = willOpen ? '메뉴 닫기' : '메뉴 열기';
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu();
    menuButton.focus();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 800) closeMenu();
});

const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });
