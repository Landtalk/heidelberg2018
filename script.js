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
  if (window.innerWidth > 900) closeMenu();
});

const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

// 실제 이미지는 표준 img로 직접 로드하고, 실패한 경우에만 fallback을 표시합니다.
document.querySelectorAll('.project-visual').forEach((figure) => {
  const projectImage = figure.querySelector('img');
  const fallback = figure.querySelector('.visual-placeholder');
  if (!projectImage || !fallback) return;

  const showImage = () => figure.classList.add('has-image');
  const showFallback = () => {
    projectImage.hidden = true;
    fallback.hidden = false;
    figure.classList.remove('has-image');
  };

  projectImage.addEventListener('load', showImage, { once: true });
  projectImage.addEventListener('error', showFallback, { once: true });

  if (projectImage.complete) {
    projectImage.naturalWidth > 0 ? showImage() : showFallback();
  }
});
