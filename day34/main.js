const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const final = document.querySelector('.final');
const replay = document.getElementById('replay');

replay.addEventListener('click', () => {
  counter.classList.remove('hidden');
  final.classList.remove('show');
  final.classList.add('hidden');

    
  nums.forEach((num) => {
    num.classList.value = '';
  })

  nums[0].classList.add('in');
})


const runAnimation = () => {
  nums.forEach((num, idx) => {
    const nextLast = nums.length;

    num.addEventListener('animationend', (e) => {
      if(e.animationName === 'goIn') {
        num.classList.remove('in');
        num.classList.add('out');
      } else if(e.animationName === 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in');
      } else {
        counter.classList.add('hidden');
        final.classList.add('show');
        final.classList.remove('hidden');
      }
    })
  })
}


runAnimation();