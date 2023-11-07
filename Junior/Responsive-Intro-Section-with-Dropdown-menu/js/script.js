"use strict";

const hamburger = document.querySelector("#open-btn"),
  closeBtn = document.querySelector("#close-btn"),
  navList = document.querySelector(".menu"),
  listItems = document.querySelectorAll(".li-item"),
  heading = document.querySelectorAll(".heading"),
  dropDown = document.querySelectorAll(".drop-down"),
  wrapper__dropDown = document.querySelectorAll(".wrapper__dropdown-head"),
  arrow = document.querySelectorAll(".arrow"),
  body = document.body;

/* 
-------------------------Nav toggler-------------------------------
*/

// Open toggle
hamburger.addEventListener("click", () => {
  navList.classList.toggle("hidden");
  hamburger.classList.toggle("hidden");
  body.classList.toggle("disable-scroll");
});

// Close toggle
closeBtn.addEventListener("click", () => {
  navList.classList.toggle("hidden");
  hamburger.classList.toggle("hidden");
  body.classList.toggle("disable-scroll");
});

/* 
-------------------------Dropdown Handling-------------------------------
*/
for (let i = 0; i < wrapper__dropDown.length; i++) {
  wrapper__dropDown[i].addEventListener("click", function () {
    dropDown[i].classList.toggle("active");
    arrow[i].classList.toggle("active");
    listItems[i].classList.toggle("active");
    heading[i].classList.toggle("active");
  });
}
