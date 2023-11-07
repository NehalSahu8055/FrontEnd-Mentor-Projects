const submit = document.querySelector(".btn"),
  thnku = document.querySelector(".thnk-u"),
  rate_card = document.querySelector(".rate-card"),
  rstar = document.querySelectorAll(".r-star"),
  add = document.querySelector(".add"),
  disabledColor = "var(--clr-trans)";

var rate = 0;
for (let i = 0; i < rstar.length; i++) {
  rstar[i].addEventListener("click", function () {

    // set the selected rating and update the message
    rate = rstar[i].textContent;
    add.textContent = "You selected " + rate + " out of 5";

    // disable the other rating buttons
    for (let j = 0; j < rstar.length; j++) {
      if (j !== i) {
        rstar[j].setAttribute("disabled", true);
        rstar[j].style.backgroundColor = disabledColor;
        rstar[j].style.borderColor = disabledColor;
        rstar[j].style.color = "var(--clr-mg)";
      } 
      else {
        rstar[j].style.backgroundColor = "var(--clr-o)";
        rstar[j].style.border = "none";
        rstar[j].style.color = "var(--clr-w)";
      }
    }
  });
}

// disable the submit button and all rating buttons on page load

submit.addEventListener("click", function () {
  if (rate == 0) alert("Please rate us");
  else {
    thnku.classList.remove("hidden");
    rate_card.classList.add("hidden");
  }
});
