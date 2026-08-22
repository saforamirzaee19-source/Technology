/* =====================================
   LOADING ANIMATION
===================================== */

window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");

    // small minimum delay so the animation is visible even on fast loads
    setTimeout(function () {
        preloader.classList.add("hide");
    }, 500);
});

// Burger Menu 
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");


hamburger.addEventListener("click", function (event) {
    event.stopPropagation();
    navMenu.classList.toggle("active");
    const icon = hamburger.querySelector("i");

    if (navMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});

// Close Menu 

document.addEventListener("click", function (event) {

    if (
        !navMenu.contains(event.target) &&
        !hamburger.contains(event.target)
    ) {
        navMenu.classList.remove("active");
        const icon = hamburger.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

// Dropdown Menu 

const dropdownToggles = document.querySelectorAll(".has-dropdown > a");
dropdownToggles.forEach(function (toggle) {
    toggle.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();


        const parentLi = toggle.parentElement;


        /* Close other dropdowns */

        document
            .querySelectorAll(".has-dropdown.active")
            .forEach(function (item) {
                if (item !== parentLi) {

                    item.classList.remove("active");

                }

            });


        /* Toggle current dropdown */

        parentLi.classList.toggle("active");

    });

});


/* =====================================
   CLOSE DROPDOWN
===================================== */

document.addEventListener("click", function (event) {

    document
        .querySelectorAll(".has-dropdown.active")
        .forEach(function (li) {

            if (!li.contains(event.target)) {

                li.classList.remove("active");

            }

        });

});


/* =====================================
   CLOSE MOBILE MENU
   WHEN NORMAL LINK IS CLICKED
===================================== */

const normalNavLinks =
    navMenu.querySelectorAll("a:not(.has-dropdown > a)");


normalNavLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");


        const icon = hamburger.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});

/* =====================================
   DARK / LIGHT MODE
===================================== */

const darkBtn = document.getElementById("dark");
const body = document.body;


/* =====================================
   CHECK SAVED THEME
===================================== */

const savedTheme = localStorage.getItem("theme");


if (savedTheme === "light") {

    // Add light mode
    body.classList.add("light-mode");

    // Moon icon
    darkBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

} else {

    // Dark mode
    body.classList.remove("light-mode");

    // Sun icon
    darkBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

}


/* =====================================
   CHANGE THEME
===================================== */

darkBtn.addEventListener("click", function () {

    // Toggle light mode
    body.classList.toggle("light-mode");


    /* ================================
       CHECK CURRENT MODE
    ================================= */

    if (body.classList.contains("light-mode")) {

        // Light Mode

        darkBtn.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

        localStorage.setItem("theme", "light");


    } else {

        // Dark Mode

        darkBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

        localStorage.setItem("theme", "dark");

    }

});
// Services Section 

const services = [
    {
        title: "Application Design",
        description: "We craft stunning, user-friendly applications that make your vision come to life.",
        icon: `<svg viewBox="0 0 64 64" fill="none" stroke="#14b8a6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M32 6c-9 0-16 7-16 16 0 6 3 9 5 12 2 2 3 4 3 7h16c0-3 1-5 3-7 2-3 5-6 5-12 0-9-7-16-16-16z"/>
            <line x1="24" y1="45" x2="40" y2="45"/>
            <line x1="26" y1="51" x2="38" y2="51"/>
            <line x1="28" y1="57" x2="36" y2="57"/>
            <path d="M27 26c1-2 3-4 5-4"/>
        </svg>`
    },
    {
        title: "Web Hosting",
        description: "Powerful, secure hosting services that ensure your site runs smoothly, 24/7.",
        icon: `<svg viewBox="0 0 64 64" fill="none" stroke="#14b8a6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="8" y="12" width="48" height="34" rx="2"/>
            <line x1="8" y1="20" x2="56" y2="20"/>
            <circle cx="13" cy="16" r="1"/>
            <circle cx="17" cy="16" r="1"/>
            <circle cx="21" cy="16" r="1"/>
            <circle cx="34" cy="33" r="7"/>
            <line x1="39" y1="38" x2="44" y2="43"/>
            <path d="M14 52h36l-4-6H18z"/>
        </svg>`
    },
    {
        title: "SEO Optimization",
        description: "Enhance your online presence and drive traffic with our expert SEO strategies.",
        icon: `<svg viewBox="0 0 64 64" fill="none" stroke="#14b8a6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="10" y1="54" x2="54" y2="54"/>
            <rect x="14" y="40" width="8" height="14"/>
            <rect x="26" y="32" width="8" height="22"/>
            <rect x="38" y="22" width="8" height="32"/>
            <polyline points="14,26 26,18 38,22 50,10"/>
            <circle cx="14" cy="26" r="2"/>
            <circle cx="26" cy="18" r="2"/>
            <circle cx="38" cy="22" r="2"/>
            <circle cx="50" cy="10" r="2"/>
        </svg>`
    },
    {
        title: "Cloud Hosting",
        description: "Reliable cloud hosting solutions designed for speed, security, and scalability.",
        icon: `<svg viewBox="0 0 64 64" fill="none" stroke="#14b8a6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 40a10 10 0 010-20 13 13 0 0125-4 9 9 0 01-3 24H20z"/>
            <line x1="24" y1="46" x2="24" y2="58"/>
            <polyline points="20,50 24,46 28,50"/>
            <line x1="38" y1="46" x2="38" y2="58"/>
            <polyline points="34,54 38,58 42,54"/>
        </svg>`
    },
    {
        title: "Data Security",
        description: "Protect your valuable data with our advanced security solutions.",
        icon: `<svg viewBox="0 0 64 64" fill="none" stroke="#14b8a6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M10 18h16l4 5h24v28a2 2 0 01-2 2H12a2 2 0 01-2-2V18z"/>
            <circle cx="34" cy="36" r="9"/>
            <circle cx="34" cy="36" r="4"/>
            <line x1="34" y1="27" x2="34" y2="30"/>
            <line x1="34" y1="42" x2="34" y2="45"/>
            <line x1="25" y1="36" x2="28" y2="36"/>
            <line x1="40" y1="36" x2="43" y2="36"/>
        </svg>`
    },
    {
        title: "Social Media",
        description: "Grow your brand and connect with your audience through social media.",
        icon: `<svg viewBox="0 0 64 64" fill="none" stroke="#14b8a6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="30" cy="34" r="18"/>
            <circle cx="30" cy="34" r="11"/>
            <circle cx="30" cy="34" r="4"/>
            <line x1="42" y1="22" x2="54" y2="10"/>
            <polyline points="46,10 54,10 54,18"/>
        </svg>`
    }
];

const container = document.querySelector("#services-container");

services.forEach(function(service, index) {

    container.innerHTML += `
        <div class="service-card" style="transition-delay: ${index * 0.12}s">
            <div class="icon-circle">${service.icon}</div>
            <h2>${service.title}</h2>
            <p>${service.description}</p>
            <button>EXPLORE</button>
        </div>
    `;

});

/* =====================================
   SCROLL REVEAL FOR SERVICE CARDS
===================================== */

const revealObserver = new IntersectionObserver(function (entries, observer) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
            observer.unobserve(entry.target);
        }

    });

}, { threshold: 0.15 });

document.querySelectorAll(".service-card").forEach(function (card) {
    revealObserver.observe(card);
});