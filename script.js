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
