const btnEl = document.querySelectorAll('.btn');


btnEl.forEach(button => {
  button.addEventListener('click', (e) => {
    const x = e.pageX;
    const y = e.pageY;

    const btnTop = e.target.offsetTop;
    const btnLeft = e.target.offsetLeft;

    const cir = document.createElement('div');
    cir.classList.add('circle');
    cir.style.top = (y - btnTop)+ 'px';
    cir.style.left = (x - btnLeft) + 'px';

    button.appendChild(cir);

    setTimeout(() => {
      cir.remove()
    }, 500);
  })
})