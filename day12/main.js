const btns = document.querySelectorAll('.button');

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const parent = btn.parentElement;
    parent.classList.toggle('active')
  })
})