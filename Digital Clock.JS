    const clock = document.querySelector('.clock');
setInterval(() => {
const now = new Date();
clock.textContent = now.toLocaleTimeString();
}, 1000);
