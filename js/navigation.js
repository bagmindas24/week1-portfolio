const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

if (burger && navLinks) {
    burger.addEventListener("click", () => {
        navLinks.classList.toggle("nav-active");

        const expanded = burger.getAttribute("aria-expanded") === "true";
        burger.setAttribute("aria-expanded", !expanded);
    });
}
