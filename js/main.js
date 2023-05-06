const btn = document.querySelector('.btn');
const audio = new Audio('../sound/new_message.mp3')

btn.addEventListener('click', () => {
    console.log('Hello world');
    audio.play();
    if ("vibrate" in navigator) {
        // Вибрируем на 100 миллисекунд
        navigator.vibrate(100);
    }
})

