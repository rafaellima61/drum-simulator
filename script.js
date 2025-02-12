const botaow = document.getElementById('w');
const botaoa = document.getElementById('a');
const botaos = document.getElementById('s');
const botaod = document.getElementById('d');
const botaoj = document.getElementById('j');
const botaok = document.getElementById('k');
const botaol = document.getElementById('l');


// tocar audio
const audioMap = {
  'w': '/sounds/tom-1.mp3',
  'a': '/sounds/tom-2.mp3',
  's': '/sounds/tom-3.mp3',
  'd': '/sounds/tom-4.mp3',
  'j': '/sounds/snare.mp3',
  'k': '/sounds/crash.mp3',
  'l': '/sounds/kick-bass.mp3'
};

function tocarAudio(audioPath) {
  const audio = new Audio(audioPath);
  audio.play().catch(error => {
    console.error("erro ao reproduzir audio", error);
  })
}

// evento ao pressionar teclas
document.addEventListener('keydown', function(event) {
  const key = event.key.toLocaleLowerCase();
  if(audioMap[key]) {
    tocarAudio(audioMap[key])
  }
})