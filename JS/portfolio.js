// Burger Menu 

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger && navMenu) {

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

// Closing Munu 
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

// Dropdon Menu 

    const dropdownToggles =
        document.querySelectorAll(".has-dropdown > a");


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


            /* Open / Close current dropdown */

            parentLi.classList.toggle("active");

        });

    });


//   Closing Dropdown 
    document.addEventListener("click", function (event) {

        document
            .querySelectorAll(".has-dropdown.active")
            .forEach(function (li) {

                if (!li.contains(event.target)) {

                    li.classList.remove("active");

                }

            });

    });

// Close menu after clicking any link
    const normalNavLinks =
        navMenu.querySelectorAll(
            "#nav-menu > ul > li:not(.has-dropdown) > a"
        );


    normalNavLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");

            const icon = hamburger.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}


// Portfolio Boxes 

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


const portfolioContainer =
    document.querySelector("#portfolio-container");

const portfolioButtons =
    document.querySelectorAll(".portfolio-buttons button");


let filteredProjects = [];

let currentImage = 0;

// Display Projects 

function displayProjects(category) {

    if (!portfolioContainer) {
        return;
    }


   // Clear old cards 

    portfolioContainer.innerHTML = "";


    // Filter projects 

    if (category === "All") {

        filteredProjects = projects;

    } else {

        filteredProjects = projects.filter(function (project) {

            return project.category === category;

        });

    }


    // Create cards 

    filteredProjects.forEach(function (project, index) {

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

            </div>

        `;

    });


  // Add click event to cards 

    const portfolioCards =
        document.querySelectorAll(".portfolio-card");


    portfolioCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const index =
                Number(card.dataset.index);

            openLightbox(index);

        });

    });

}

// Portofolio Buttons 

portfolioButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const category =
            button.dataset.category;


       // Display selected projects

        displayProjects(category);


      // Remove active from all buttons 

        portfolioButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });


        // Add active to clicked button 

        button.classList.add("active");

    });

});


// Show all projects when page starts 

if (portfolioContainer) {

    displayProjects("All");

}

// Creating light boxes 

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

// Light Box's elements

const lightboxImage =
    document.querySelector(".lightbox-image");

const lightboxTitle =
    document.querySelector(".lightbox-title");

const closeButton =
    document.querySelector(".lightbox-close");

const previousButton =
    document.querySelector(".lightbox-prev");

const nextButton =
    document.querySelector(".lightbox-next");

const zoomInButton =
    document.querySelector(".zoom-in");

const zoomOutButton =
    document.querySelector(".zoom-out");

const zoomValue =
    document.querySelector(".zoom-value");


let zoomLevel = 1;

// Open 

function openLightbox(index) {

    currentImage = index;

    zoomLevel = 1;

    updateLightbox();

    lightbox.classList.add("active");

}

// Update 

function updateLightbox() {

    if (filteredProjects.length === 0) {
        return;
    }


    const project =
        filteredProjects[currentImage];


    lightboxImage.src =
        project.image;

    lightboxImage.alt =
        project.title;

    lightboxTitle.textContent =
        project.title;

    lightboxImage.style.transform =
        `scale(${zoomLevel})`;

    zoomValue.textContent =
        `${Math.round(zoomLevel * 100)}%`;

}

// Clos  
closeButton.addEventListener("click", function () {

    lightbox.classList.remove("active");

});



// Previous  

previousButton.addEventListener("click", function () {

    currentImage--;


    if (currentImage < 0) {

        currentImage =
            filteredProjects.length - 1;

    }
    zoomLevel = 1;
    updateLightbox();

});
// Next Image 

nextButton.addEventListener("click", function () {

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

zoomInButton.addEventListener("click", function () {

    if (zoomLevel < 2) {
        zoomLevel += 0.2;

    }
    updateLightbox();

});

// Zoom out 
zoomOutButton.addEventListener("click", function () {

    if (zoomLevel > 0.6) {

        zoomLevel -= 0.2;

    }

    updateLightbox();

});

// Close

lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {

        lightbox.classList.remove("active");

    }

});

// Control with the kayboard kays 

document.addEventListener("keydown", function (event) {

    if (!lightbox.classList.contains("active")) {
        return;

    }


    // Escape 

    if (event.key === "Escape") {

        lightbox.classList.remove("active");

    }


    // Left Arrow 

    if (event.key === "ArrowLeft") {
        previousButton.click();

    }


    // Right Arrow 

    if (event.key === "ArrowRight") {
        nextButton.click();

    }

});


// Statistics 

let started = false;


window.addEventListener("scroll", function () {
    const section =  document.querySelector("#statistic");


    // If statistic section does not exist 

    if (!section) {
        return;

    }


    const boxes = document.querySelectorAll(".clients");
    const numbers = document.querySelectorAll(".num-clints");

    if (
        window.scrollY + window.innerHeight >
        section.offsetTop &&
        started === false
    ) {

        started = true;


        // Show boxes 

        boxes.forEach(function (box) {
            box.classList.add("show");

        });


        // Count numbers 

        numbers.forEach(function (number) {

            const target =
                Number(number.textContent);

            let count = 0;


            const timer =
                setInterval(function () {

                    count++;

                    number.textContent =
                        count;


                    if (count >= target) {

                        clearInterval(timer);

                    }

                }, 10);

        });

    }

});

// Dark mode Section 
function darkThem() {

    document.body.classList.toggle("dark");
    document.getElementById("portfolio").classList.toggle("dark");
    document.getElementById("dark").classList.toggle("dark");
    const icon = document.getElementById("them-icon");
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");
}


// LOADING ANIMATION
 

window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    if (preloader) {

        setTimeout(function () {
            preloader.classList.add("hide");
        }, 1500);

    }

});
