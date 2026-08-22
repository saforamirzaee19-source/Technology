particlesJS('particles-js', {
    particles: {
        number: { value: 60, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#2dd4bf",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out"
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: false }
        },
        modes: {
            grab: { distance: 140, line_linked: { opacity: 0.6 } }
        }
    },
    retina_detect: true
});

// Hamburger Menu Toggle 
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('active');

    const icon = hamburger.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});

//Closing Menu
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        navMenu.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});


// Dropdown (Menu) Toggle 
const dropdownToggles = document.querySelectorAll('.has-dropdown > a');

dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const parentLi = toggle.parentElement;
        parentLi.classList.toggle('active');
    });
});

document.addEventListener('click', (e) => {
    document.querySelectorAll('.has-dropdown.active').forEach(li => {
        if (!li.contains(e.target)) {
            li.classList.remove('active');
        }
    });
});

const navLinks = navMenu.querySelectorAll('a:not(.has-dropdown > a)');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    });
});


// ===== Dark / Light Mode Toggle =====
const darkBtn = document.getElementById('dark');
const body = document.body;

if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    darkBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
} else {
    darkBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

darkBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        darkBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    } else {
        darkBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
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

services.forEach(function(service) {

    container.innerHTML += `
        <div class="service-card">
            <div class="icon-circle">${service.icon}</div>
            <h2>${service.title}</h2>
            <p>${service.description}</p>
            <button>EXPLORE</button>
        </div>
    `;

});


//  Portfolio Section 


const projects = [

    {
        image: "images/product-1.webp",
        category: "Design",
        title: "Creative Design"
    },

    {
        image: "images/product-2.webp",
        category: "Development",
        title: "Web Development"
    },

    {
        image: "images/product-3.webp",
        category: "Branding",
        title: "Brand Identity"
    },

    {
        image: "images/product-4.webp",
        category: "It Solutions",
        title: "IT Solution"
    },

    {
        image: "images/product-5.webp",
        category: "Design",
        title: "Graphic Design"
    },

    {
        image: "images/product-6.webp",
        category: "Branding",
        title: "Brand Strategy"
    }

];


// Portfolio Containers
const portfolioContainer =
    document.querySelector("#portfolio-container");

// Portfolio Buttons
const portfolioButtons =
    document.querySelectorAll(".portfolio-buttons button");


// This stores the projects of the currently selected category

let filteredProjects = [];

// Current image inside Lightbox

let currentImage = 0;


// Display Projects

function displayProjects(category) {

    // Clear old cards

    portfolioContainer.innerHTML = "";


    // Filter projects

    if (category === "All") {

        filteredProjects = projects;

    } else {

        filteredProjects = projects.filter(function(project) {

            return project.category === category;

        });

    }

    // Create cards

    filteredProjects.forEach(function(project, index) {

        portfolioContainer.innerHTML += `
            <div 
                class="portfolio-card"
                data-index="${index}"
            >
                <img
                    src="${project.image}"
                    alt="${project.title}"
                >

                <div class="portfolio-overlay">
                    <span>
                        ${project.title}
                    </span>
                </div>
            </div>`;

    });


    // Add Click Event To Cards
    const portfolioCards =
        document.querySelectorAll(".portfolio-card");


    portfolioCards.forEach(function(card) {

        card.addEventListener("click", function() {

            const index =
                Number(card.dataset.index);

            openLightbox(index);

        });

    });

}


// Portfolio Button Click
portfolioButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const category =
            button.dataset.category;


        // Display selected projects
        displayProjects(category);


        // Remove active from all buttons
        portfolioButtons.forEach(function(btn) {
            btn.classList.remove("active");

        });

        // Add active to clicked button
        button.classList.add("active");
    });
});


// Create Lightbox

const lightbox = document.createElement("div");
lightbox.classList.add("lightbox");

lightbox.innerHTML = `

    <button class="lightbox-close">
        &times;
    </button>


    <button class="lightbox-prev">
        &#10094;
    </button>

    <div class="lightbox-content">

        <img
            class="lightbox-image"
            src=""
            alt=""
        >

        <h2 class="lightbox-title"></h2>


        <div class="zoom-controls">

            <button class="zoom-out">
                −
            </button>

            <span class="zoom-value">
                100%
            </span>
            <button class="zoom-in">
                +
            </button>
        </div>
    </div>
    <button class="lightbox-next">
        &#10095;
    </button>

`;

document.body.appendChild(lightbox);


// Get Lightbox Elements

const lightboxImage = document.querySelector(".lightbox-image");
const lightboxTitle = document.querySelector(".lightbox-title");
const closeButton = document.querySelector(".lightbox-close");
const previousButton = document.querySelector(".lightbox-prev");
const nextButton = document.querySelector(".lightbox-next");
const zoomInButton = document.querySelector(".zoom-in");
const zoomOutButton = document.querySelector(".zoom-out");
const zoomValue = document.querySelector(".zoom-value");


// Zoom Variable
let zoomLevel = 1;


// Open Lightbox

function openLightbox(index) {
    currentImage = index;
    zoomLevel = 1;
    updateLightbox();
    lightbox.classList.add("active");

}


// Update Lightbox

function updateLightbox() {
    const project = filteredProjects[currentImage];

    lightboxImage.src = project.image;
    lightboxImage.alt = project.title;
    lightboxTitle.textContent = project.title;
    lightboxImage.style.transform = `scale(${zoomLevel})`;
    zoomValue.textContent = `${Math.round(zoomLevel * 100)}%`;

}


// Close Lightbox

closeButton.addEventListener("click", function() {
    lightbox.classList.remove("active");

});


// Previous Image
previousButton.addEventListener("click", function() {
    currentImage--;
    if (currentImage < 0) {
        currentImage = filteredProjects.length - 1;
    }
    zoomLevel = 1;
    updateLightbox();

});


// Next Image

nextButton.addEventListener("click", function() {
    currentImage++;

    if (
        currentImage >=
        filteredProjects.length
    ) {
        currentImage = 0;

    }

    zoomLevel = 1;
    updateLightbox();

});


// Zoom In
zoomInButton.addEventListener("click", function() {
    if (zoomLevel < 2) {
        zoomLevel += 0.2;
    }
    updateLightbox();

});


// Zoom Out

zoomOutButton.addEventListener("click", function() {
    if (zoomLevel > 0.6) {
        zoomLevel -= 0.2;
    }
    updateLightbox();

});


// Close Lightbox By Clicking Background

lightbox.addEventListener("click", function(event) {
    if (event.target === lightbox) {

        lightbox.classList.remove("active");
    }

});


// Keyboard Controls

document.addEventListener("keydown", function(event) {

    if (!lightbox.classList.contains("active")) {
        return;
    }
    if (event.key === "Escape") {
        lightbox.classList.remove("active");
    }


    // Left Arrow → Previous
    if (event.key === "ArrowLeft") {
        previousButton.click();
    }


    // Right Arrow → Next
    if (event.key === "ArrowRight") {
        nextButton.click();
    }

});

// Show All Projects At Start
let started = false;

window.addEventListener("scroll", function () {

    let section = document.querySelector("#statistic");
    let boxes = document.querySelectorAll(".clients");
    let numbers = document.querySelectorAll(".num-clints");

    if (window.scrollY + window.innerHeight > section.offsetTop && started == false) {

        started = true;

        boxes.forEach(function (box) {
            box.classList.add("show");
        });

        numbers.forEach(function (number) {

            let target = Number(number.textContent);
            let count = 0;

            let timer = setInterval(function () {

                count++;

                number.textContent = count;

                if (count >= target) {
                    clearInterval(timer);
                }

            }, 10);

        });

    }

});