document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("nav ul li a");
    let navItems = document.querySelectorAll("nav ul li");
    let projectSlides = document.querySelectorAll(".project-slide");
    let sectionIds = Array.from(sections).map(sec => sec.id);
    let currentSection = 0;
    let currentProject = 0;
    let isScrolling = false;

    function showSection(index) {
        sections.forEach((section, i) => {
            section.style.opacity = i === index ? "1" : "0";
            section.style.visibility = i === index ? "visible" : "hidden";
            section.style.position = "absolute";
            section.style.top = "0";
            section.style.left = "0";
            section.style.width = "100vw";
            section.style.height = "100vh";
            section.style.display = "flex";
            section.style.justifyContent = "center";
            section.style.alignItems = "center";
        });

        document.body.classList.toggle("section-active", index !== 0);

     if (index === 0) {
            navItems.forEach(item => item.style.display = "block");
        } else {
            navItems.forEach(item => item.style.display = "none");

            let activeSection = sections[index].dataset.section;
            let activeLink = document.querySelector(`nav ul li[data-section='${activeSection}']`);
            if (activeLink) activeLink.style.display = "block";
        }

        navLinks.forEach(link => link.classList.remove("active"));
        let activeNav = document.querySelector(`nav ul li[data-section='${sections[index].dataset.section}'] a`);
        if (activeNav) activeNav.classList.add("active");

        isScrolling = true;
        setTimeout(() => { isScrolling = false; }, 1200);
    }

    function showNextProject() {
        projectSlides.forEach((slide, i) => {
            slide.style.opacity = i === currentProject ? "1" : "0";
            slide.style.visibility = i === currentProject ? "visible" : "hidden";
        });
    }

    window.addEventListener("wheel", (event) => {
        if (isScrolling) return;

        if (sections[currentSection].dataset.section === "projects") {
            if (event.deltaY > 0) {
                currentProject = Math.min(currentProject + 1, projectSlides.length - 1);
            } else {
                currentProject = Math.max(currentProject - 1, 0);
            }
            showNextProject();
        } else {
            if (event.deltaY > 0) {
                currentSection = Math.min(currentSection + 1, sections.length - 1);
            } else {
                currentSection = Math.max(currentSection - 1, 0);
            }
            showSection(currentSection);
        }
    });

    showSection(currentSection);
    showNextProject();
});

    showSection(currentSection);

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    let scrollIndicator = document.querySelector("#scroll-indicator");
    scrollIndicator.style.position = "absolute";
    scrollIndicator.style.bottom = "50px";
    scrollIndicator.style.left = "50%";
    scrollIndicator.style.transform = "translateX(-50%)";
    scrollIndicator.style.fontSize = "32px";
    scrollIndicator.style.color = "white";
    scrollIndicator.style.opacity = "0.8";
    scrollIndicator.style.animation = "bounce 1.5s infinite";
    scrollIndicator.style.cursor = "pointer";

    scrollIndicator.addEventListener("click", () => {
        if (currentSection < sections.length - 1) {
            currentSection++;
            showSection(currentSection);
        }
    });

    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            let targetId = link.parentElement.dataset.section;
            let targetIndex = sectionIds.indexOf(targetId);
            if (targetIndex !== -1) {
                currentSection = targetIndex;
                showSection(currentSection);
            }
        });
    });

    let projectsButton = document.querySelector("nav ul li.projects a");
    if (projectsButton) {
        projectsButton.addEventListener("click", (event) => {
            event.preventDefault();
            let projectSections = document.querySelectorAll("[data-section='projects']");
            if (projectSections.length > 0) {
                let firstProjectIndex = sectionIds.indexOf(projectSections[0].id);
                if (firstProjectIndex !== -1) {
                    currentSection = firstProjectIndex;
                    showSection(currentSection);
                    showProject(0);
                }
            }
        });
    }

    let projectSlides = document.querySelectorAll(".project-slide");
    let currentProject = 0;

    function showProject(index) {
        projectSlides.forEach((slide, i) => {
            slide.style.opacity = i === index ? "1" : "0";
            slide.style.visibility = i === index ? "visible" : "hidden";
        });
    }

    document.addEventListener("keydown", (event) => {
        if (currentSection !== sectionIds.indexOf("projects")) return;

        if (event.key === "ArrowRight") {
            currentProject = (currentProject + 1) % projectSlides.length;
            showProject(currentProject);
        } else if (event.key === "ArrowLeft") {
            currentProject = (currentProject - 1 + projectSlides.length) % projectSlides.length;
            showProject(currentProject);
        }
    });
});
