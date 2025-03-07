document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll("section");
    let currentSection = 0;
    let isScrolling = false;

    function showSection(index) {
        sections.forEach((section, i) => {
            section.style.transition = "transform 1s ease-in-out, opacity 1s ease-in-out";
            section.style.opacity = i === index ? "1" : "0";
            section.style.transform = `translateY(${(i - index) * 100}vh)`;
            section.style.position = "absolute";
            section.style.top = "0";
            section.style.left = "0";
            section.style.width = "100%";
            section.style.height = "100vh";
            section.style.display = "flex";
            section.style.justifyContent = "center";
            section.style.alignItems = "center";
        });
        isScrolling = true;
        setTimeout(() => { isScrolling = false; }, 1200); // Защита от быстрого скролла
    }

    window.addEventListener("wheel", (event) => {
        if (isScrolling) return;
        if (event.deltaY > 0) {
            currentSection = Math.min(currentSection + 1, sections.length - 1);
        } else {
            currentSection = Math.max(currentSection - 1, 0);
        }
        showSection(currentSection);
    });

    showSection(currentSection);

    // Мобильное меню
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("mobile-visible");
    });
});
