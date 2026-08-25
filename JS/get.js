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

// Text Codes 
const message = document.querySelector("#message");
const counter = document.querySelector("#counter");

message.addEventListener("input", () => {

    const feedbackValue = message.value.length;

    if (feedbackValue <= 200) {
        counter.textContent = `${feedbackValue}`;
    } else {
        message.value = message.value.slice(0, 200);
        counter.textContent = "200";
    }

});

// Dark Mode Section

const icon = document.querySelector("#them-icon");
function darkThem() {
    document.body.classList.toggle("dark");
    document.querySelectorAll("#blog h1").forEach(function(h1) {
        h1.classList.toggle("dark-text");
    });
    document.querySelectorAll("#blog h2").forEach(function(h2) {
        h2.classList.toggle("dark-text");
    });
    document.querySelectorAll("#blog h3").forEach(function(h3) {
        h3.classList.toggle("dark-text");
    });
    document.querySelectorAll("#blog p").forEach(function(p) {
        p.classList.toggle("dark-text");
    });
    document.querySelectorAll("#blog .blog-date").forEach(function(date) {
        date.classList.toggle("dark-text");
    });
    document.querySelectorAll("#blog .posts button a").forEach(function(link) {
        link.classList.toggle("dark-text");
    });

    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");
}

