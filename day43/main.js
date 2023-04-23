const options = document.querySelectorAll('.option');
const container = document.getElementById('container')
const sendReview = document.getElementById('send-review')

let choice = 'Satisfied';

options.forEach(item => {
  item.addEventListener('click', () => {
    options.forEach(item => item.classList.remove('active'));
    item.classList.add('active');
    choice = item.innerText; 
    console.log(choice);     
  })
});

sendReview.addEventListener('click',() => {
  container.innerHTML = `
  <i class="fas fa-heart"></i>
  <h2 class="thank">Thank You!</h2>
  <h2>Feedback: ${choice}</h2>
  <p>We'll use your feedback to improve our customer support</p>
  `;
})