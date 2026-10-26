document.getElementById('year').textContent = new Date().getFullYear();

const themebutton = document.getElementById("theme-toggle")
const themeIcon = themebutton.querySelector("img");
const htmlElement = document.documentElement;


themebutton.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-theme");
    const nextTheme = currentTheme === "light" ? "dark" : "light";

    htmlElement.setAttribute("data-theme", nextTheme);
    themebutton.setAttribute("aria-label", `Switch to ${nextTheme === "light" ? "dark" : "light"} theme`);
    themeIcon.src = nextTheme === "light" ? "Sun.png" : "Moon.png";
    themeIcon.alt = nextTheme === "light" ? "Sun" : "Moon";

});


const menuButton = document.getElementById("menu-toggle");
const sideMenu = document.getElementById("side-menu");

menuButton.addEventListener("click", () => {
    sideMenu.classList.toggle("open");
});



const closeButton = document.getElementById("menu-close");

closeButton.addEventListener("click", () => {
    sideMenu.classList.remove("open");
});

sideMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        sideMenu.classList.remove("open");
    });
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        sideMenu.classList.remove("open");
    }
});