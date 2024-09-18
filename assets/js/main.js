const navbar = document.querySelector(".js-nav");
const navbarOverlay = document.querySelector(".js-nav-overlay");
const navTogglers = document.querySelectorAll(".js-nav-toggler");

Array.from(navTogglers).forEach((btn) => {
  addClickEvent(btn, function () {
    console.log("click");
    navbar.classList.toggle("is-open");
    navbarOverlay.classList.toggle("is-open");
  });
});

/*
---> 
    #Click Event Handler
-->
*/
function addClickEvent(target, handler) {
  target.addEventListener("click", handler);
}
