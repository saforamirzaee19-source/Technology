// Header Section

window.addEventListener("scroll", () => {

    const header = document.querySelector("#header");
    const logo = document.querySelector("#logo > h1");
    const links = document.querySelectorAll("#nav-menu a");
    const hamburger = document.querySelector("#hamburger");
    const hamburgerIcon = document.querySelector("#hamburger i");

    if (window.scrollY > 150) {

        header.style.backgroundColor = "white";

        logo.style.color = "#0d9488";

        links.forEach(link => {
            link.style.color = "#0d9488";
        });

        hamburger.style.color = "#0d9488";
        hamburgerIcon.style.color = "#0d9488";

    } else {

        header.style.backgroundColor = "black";

        logo.style.color = "";

        links.forEach(link => {
            link.style.color = "";
        });

        hamburger.style.color = "";
        hamburgerIcon.style.color = "";
    }
});

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


// Dark Mode Section
function darkThem() {
    document.body.classList.toggle("dark");
    document.getElementById("testimonials").classList.toggle("dark");
    const icon = document.getElementById("them-icon");
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");
}


