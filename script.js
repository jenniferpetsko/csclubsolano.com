document.addEventListener("DOMContentLoaded", function () {
    const squareContainer = document.querySelector(".bg-bubbles");

    for (let i = 0; i < 20; i++) {
        let li = document.createElement("li");
        li.style.setProperty("--x", Math.random());
        li.style.setProperty("--d", Math.random());
        li.style.setProperty("--s", Math.random());

        li.style.pointerEvents = "none";

        setTimeout(() => {
            squareContainer.appendChild(li);
        }, Math.random() * 5000);
    }

    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function () {
            console.log(`Clicked: ${this.href}`);
        });
    });
});