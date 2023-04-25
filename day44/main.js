const range = document.getElementById('range');

range.addEventListener('input', (e) => {
  const label = e.target.nextElementSibling;
  const value = +e.target.value;

  const label_width = getComputedStyle(label).getPropertyValue('width');
  const num_label_width = +label_width.substring(0, label_width.length - 2);
  
  label.style.left = `${12 - (num_label_width / 2) + (value * 2.75)}px`;  
  label.innerHTML = value;



})

