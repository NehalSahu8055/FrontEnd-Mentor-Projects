const hamBtn = document.querySelector(".nav-hamburger");
const menu = document.querySelector(".menu");

// onClick hamburger menu handle
hamBtn.addEventListener("click", (e) => {
    const isExpanded = e.currentTarget.getAttribute("aria-expanded") === "true";
    e.currentTarget.setAttribute("aria-expanded", !isExpanded);

    e.currentTarget.firstElementChild.src = !isExpanded ? "/icon-close.svg" : "/icon-hamburger.svg";
})

// offClick menu close handle
document.addEventListener("click", (e) => {
    const isClickOutsideMenu = !menu.contains(e.target);
    const isClickOnHamburger = hamBtn.contains(e.target);

    if (isClickOutsideMenu && !isClickOnHamburger) {
        hamBtn.setAttribute("aria-expanded", "false");
        hamBtn.firstElementChild.src = "/icon-hamburger.svg";
    }
})
