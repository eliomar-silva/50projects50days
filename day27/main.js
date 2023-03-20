const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
  'Message One',
  'Message Two',
  'Message three',
  'Message Four',
];

const types = ['info', 'success', 'error'];

button.addEventListener('click', () => {
  const notif = document.createElement('div');
  notif.classList.add('toast');
  notif.classList.add(randomType());
 

  notif.innerText = randomMessage();
  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove()
  }, 3000);
})


function randomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
const randomType = () => {
  return types[Math.floor(Math.random() * types.length)];
}
