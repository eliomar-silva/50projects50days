const photos = document.querySelectorAll('.photo');
console.log(photos);

photos.forEach(photo => {
  photo.addEventListener('click', () => {
    removeActiveClass();
    photo.classList.add('active');
  })
})

function removeActiveClass() {
  photos.forEach(photo => {
    photo.classList.remove('active')
  })
}
