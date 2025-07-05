const countdownDate = new Date("2025-12-31T23:59:59").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {
    const now = new Date().getTime();
    const gap = countdownDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour   = minute * 60;
    const day    = hour * 24;

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    daysEl.textContent = d.toString().padStart(2, '0');
    hoursEl.textContent = h.toString().padStart(2, '0');
    minutesEl.textContent = m.toString().padStart(2, '0');
    secondsEl.textContent = s.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();
