const markReadBtn = document.querySelector(".mark-read"),
    unreadNotify = document.querySelectorAll(".unread"),
    newNotify = document.querySelectorAll(".new-notify"),
    notifyCount = document.querySelector(".notify-count .count")


let isPressed;
const markReadHandle = (e) => {
    isPressed = !isPressed;
    if (isPressed) {
        e.currentTarget.setAttribute("aria-pressed", "true")
        e.currentTarget.classList.replace("text-[var(--darkGrayishBlue)]", "text-[var(--blue)]")
    }
    else {
        e.currentTarget.setAttribute("aria-pressed", "false");
    }

    for (let i = 0; i < unreadNotify.length; i++) {
        unreadNotify[i].classList.remove("unread-border");
        newNotify[i].classList.add("hidden");
        newNotify[i].nextElementSibling.classList.replace("unread-shadow", "read-shadow");
        notifyCount.textContent = "0";
    }
};

markReadBtn.addEventListener("click", markReadHandle);

