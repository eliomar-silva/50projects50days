const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory','wrong'];

sounds.forEach(sound => {
  const btn = document.createElement('button')
  btn.classList.add('button')
  btn.innerText = sound;
  document.getElementById('buttons').appendChild(btn);
  
  btn.addEventListener('click', () => {
    sounds.forEach(sound => {
      const song = document.getElementById(sound);
      song.pause();
      song.currentTime = 0;
    })

    document.getElementById(sound).play();
  })
})

