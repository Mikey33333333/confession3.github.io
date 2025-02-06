function showConfession() {
   document.getElementById('confession').style.display = 'block';
   document.getElementById('imgs').style.display = 'block';
   
   createHearts();
}
function createHearts() {
   for (let i = 0; i < 10; i++) {
       let heart = document.createElement('div');
       heart.innerHTML = '❤️';
       heart.classList.add('heart');
       document.body.appendChild(heart);
       let x = Math.random() * window.innerWidth;
       let y = Math.random() * window.innerHeight;
       heart.style.left = `${x}px`;
       heart.style.top = `${y}px`;
       setTimeout(() => heart.remove(), 3000);
   }
}