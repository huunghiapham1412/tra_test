const weddingDate = new Date(2026, 12, 15, 12, 30, 0).getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days") && (document.getElementById("days").innerText = days.toString().padStart(2, '0'));
    document.getElementById("hours") && (document.getElementById("hours").innerText = hours.toString().padStart(2, '0'));
    document.getElementById("minutes") && (document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0'));
    document.getElementById("seconds") && (document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0'));

    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "<p class='text-2xl'>Lễ Phong Chức Đang Diễn Ra</p>";
    }
};

const interval = setInterval(updateCountdown, 1000);
updateCountdown();
