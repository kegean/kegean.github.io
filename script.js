document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll("p, h2");

    elements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.5}s`;
    });
});
