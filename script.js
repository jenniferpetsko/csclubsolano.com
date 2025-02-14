document.addEventListener("DOMContentLoaded", function () {
    const squareContainer = document.querySelector(".bg-bubbles");

    for (let i = 0; i < 20; i++) {
        let li = document.createElement("li");
        li.style.setProperty("--x", Math.random());
        li.style.setProperty("--d", Math.random());
        li.style.setProperty("--s", Math.random());
        setTimeout(() => {
            squareContainer.appendChild(li);
        }, Math.random() * 5000);
    }
});