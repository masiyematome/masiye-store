
const navbar = document.querySelector(".nav-bar");
const navbarLinks = document.querySelector(".navbar-links");
const mainMenu = document.querySelector("#main-menu");

navbar.addEventListener("click" , (event) => {

    document.body.style.overflow = "scroll";

    if(event.target.classList.contains("navbar-toggler")){
        navbarLinks.classList.add("displaying");
        mainMenu.classList.add("displaying");
        document.body.style.overflow = "hidden";
    }

    else if(event.target.classList.contains("close-button")){
        navbarLinks.classList.remove("displaying");
        mainMenu.classList.remove("displaying");
    }
})

