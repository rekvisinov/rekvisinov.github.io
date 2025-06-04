document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');
    const bgMusic = document.getElementById('bg-music');

    bgMusic.volume = 0.3;

    preloader.addEventListener('click', () => {
        preloader.style.display = 'none';
        content.style.opacity = '1';
        bgMusic.play().catch(e => console.log("Автовоспроизведение заблокировано"));
    });
});

document.addEventListener('DOMContentLoaded', function() {
  function animateTitle(text, delay = 1000) {
    let i = 0;
    let direction = 1;
    
    function update() {
      document.title = text.substring(0, i);
      i += direction;
      
      if (i > text.length) {
        direction = -1;
        setTimeout(update, delay * 2); // Пауза перед удалением
      } else if (i < 0) {
        direction = 1;
        setTimeout(update, delay / 2); // Пауза перед новой печатью
      } else {
        setTimeout(update, delay); 
      }
    }
    
    update();
  }

  animateTitle("@REKVISINOV");
});