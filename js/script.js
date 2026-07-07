// ================= NAVBAR =================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

// ================= MOBILE MENU =================
// Previously nav{display:none} below 768px had no alternative way in —
// on mobile the Gallery/About/Contact links were completely unreachable.

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("header nav");

if (navToggle && nav) {

    navToggle.addEventListener("click", () => {

        const isOpen = header.classList.toggle("nav-open");
        navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");

    });

    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            header.classList.remove("nav-open");
            navToggle.setAttribute("aria-expanded", "false");

        });

    });

    window.addEventListener("resize", () => {

        if (window.innerWidth > 768) {

            header.classList.remove("nav-open");
            navToggle.setAttribute("aria-expanded", "false");

        }

    });

}

// ================= FADE ANIMATION =================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


// ================= SCROLL BAR =================

const progress = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progressHeight =
        (window.scrollY / totalHeight) * 100;

    progress.style.width = progressHeight + "%";

});