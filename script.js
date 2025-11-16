document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("musica");

    // Toca mutado primeiro (Chrome/Safari permitem)
    audio.play().then(() => {
        setTimeout(() => {
            audio.muted = false;
            audio.volume = 1.0;
            audio.play().catch(() => {
                document.body.addEventListener("click", () => {
                    audio.muted = false;
                    audio.volume = 1.0;
                    audio.play();
                }, { once: true });
            });
        }, 1000);
    }).catch(() => {
        document.body.addEventListener("click", () => {
            audio.muted = false;
            audio.volume = 1.0;
            audio.play();
        }, { once: true });
    });
});