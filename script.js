// Preload alternate profile photo for faster swapping
const preloadSeal = new Image();
preloadSeal.src = 'seal.jpg';

// Toggle profile photo on click
const profilePhoto = document.getElementById('profile-photo');
profilePhoto.addEventListener('click', () => {
  if (profilePhoto.getAttribute('src') === 'pp.jpg') {
    profilePhoto.setAttribute('src', 'seal.jpg');
  } else {
    profilePhoto.setAttribute('src', 'pp.jpg');
  }
});

// Favorites dropdown: show the answer for the selected category
const dropdown = document.getElementById('favorite-dropdown');
const toggle = dropdown.querySelector('.dropdown-toggle');
const menu = dropdown.querySelector('.dropdown-menu');
const favoriteAnswer = document.getElementById('favorite-answer');

function closeMenu() {
  menu.hidden = true;
  toggle.setAttribute('aria-expanded', 'false');
}

toggle.addEventListener('click', (e) => {
  e.stopPropagation();
  const open = !menu.hidden;
  menu.hidden = open;
  toggle.setAttribute('aria-expanded', String(!open));
});

menu.addEventListener('click', (e) => {
  const option = e.target.closest('[role="option"]');
  if (!option) return;
  menu.querySelectorAll('[role="option"]').forEach(el => el.classList.remove('selected'));
  option.classList.add('selected');
  toggle.innerHTML = option.textContent + '<span class="caret">▾</span>';
  favoriteAnswer.textContent = option.dataset.value;
  closeMenu();
});

document.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target)) closeMenu();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});
