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

function animateTitle(text, delay = 1000) {
  let currentIndex = 0;
  let isDeleting = false;
  let displayedText = '';

  function updateTitle() {
    document.title = displayedText;

    if (!isDeleting && currentIndex < text.length) {
      // Печатаем текст
      displayedText = text.substring(0, currentIndex + 1);
      currentIndex++;
    } else if (isDeleting && currentIndex > 0) {
      // Удаляем текст
      displayedText = text.substring(0, currentIndex - 1);
      currentIndex--;
    }

    if (currentIndex === text.length) {
      isDeleting = true;
      setTimeout(updateTitle, delay * 2); 
    } else if (currentIndex === 0 && isDeleting) {
      isDeleting = false;
      setTimeout(updateTitle, delay / 2); 
    } else {
      setTimeout(updateTitle, delay); 
    }
  }

  updateTitle();
}

animateTitle("@REKVISINOV");