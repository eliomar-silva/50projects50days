const insert = document.getElementById('insert');

console.log(insert);
window.addEventListener('keydown', (event) => {
  return insert.innerHTML = `
  <div class="card">
    ${event.key === ' ' ? 'Space' : event.key}
    <small>event.Key</small>
  </div>

  <div class="card">
    ${event.keyCode}
  <small>event.KeyCode</small>
  </div>

  <div class="card">
    ${event.code}
    <small>event.code</small>
  </div>
  `;
})