function showMessage() {

    const message = document.getElementById("message");

    message.classList.remove("hidden");

    createHearts();
}

function createHearts() {

    for (let i = 0; i < 25; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-30px";
        heart.style.fontSize = (15 + Math.random() * 25) + "px";

        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);

        const duration = 2000 + Math.random() * 2000;

        heart.animate(
            [
                {
                    transform: "translateY(0)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(-${window.innerHeight + 100}px)`,
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            heart.remove();
        }, duration);
    }
}