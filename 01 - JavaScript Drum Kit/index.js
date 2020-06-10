document.addEventListener('keydown', (event) => {
    const myKey = document.querySelector(`div[data-key="${event.keyCode}"]`);
    const myAudio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    if (!myAudio) return;
    myKey.classList.add('playing');
    myAudio.play();
  })

  document.addEventListener('keyup', (event) => {
    const myKey = document.querySelector(`div[data-key="${event.keyCode}"]`);
    const myAudio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    if (!myAudio) return;
    myKey.classList.remove('playing');
  })
