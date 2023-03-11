const photo = document.querySelector('.photo');
const frames = document.querySelectorAll('.frames');
console.log(frames);

photo.addEventListener('dragstart', () => {
  photo.className += ' hold';
  setTimeout(() => {
    photo.className = 'invisible'
  }, 0);
})
photo.addEventListener('dragend', () => {
  photo.className = 'photo';
})


const dragDrop = (frame) => {
  frame.className = 'frames';
  frame.append(photo);
}

for (const frame of frames) {
  frame.addEventListener('dragover', (e)=> {
    e.preventDefault();
  })
  frame.addEventListener('dragenter', () => {   
    frame.className += ' hovered';
  })
  frame.addEventListener('dragleave', () => {
    frame.className = 'frames';
  })
  frame.addEventListener('drop',() => {
    frame.className = 'frames';
    frame.append(photo);
  })
}
