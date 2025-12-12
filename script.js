const enBtn = document.querySelector('.lang-en');
const zhBtn = document.querySelector('.lang-zh');
const enDescs = document.querySelectorAll('.description-en');
const zhDescs = document.querySelectorAll('.description-zh');
const nameEn = document.querySelector('.name-en');
const nameZh = document.querySelector('.name-zh');

enBtn.addEventListener('click', () => {
  enBtn.classList.add('active');
  zhBtn.classList.remove('active');
  enDescs.forEach(el => el.style.display = 'block');
  zhDescs.forEach(el => el.style.display = 'none');
  nameEn.style.display = 'inline';
  nameZh.style.display = 'none';
});

zhBtn.addEventListener('click', () => {
  zhBtn.classList.add('active');
  enBtn.classList.remove('active');
  zhDescs.forEach(el => el.style.display = 'block');
  enDescs.forEach(el => el.style.display = 'none');
  nameZh.style.display = 'inline';
  nameEn.style.display = 'none';
});

// Initialize default state
window.addEventListener('DOMContentLoaded', () => {
  enDescs.forEach(el => el.style.display = 'block');
  zhDescs.forEach(el => el.style.display = 'none');
  nameEn.style.display = 'inline';
  nameZh.style.display = 'none';
});

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