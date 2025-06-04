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