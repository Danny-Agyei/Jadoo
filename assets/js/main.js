const header = document.querySelector(".js-header");
const navbar = document.querySelector(".js-nav");
const navbarOverlay = document.querySelector(".js-nav-overlay");
const navTogglers = document.querySelectorAll(".js-nav-toggler, .js-nav-link");

Array.from(navTogglers).forEach((btn) => {
  addEventToElem("click", btn, navToggler);
});

// scroll handler
function stickyHeader() {
  window.scrollY > 100
    ? header.classList.add("is-active")
    : header.classList.remove("is-active");
}

document.addEventListener("scroll", stickyHeader);

// navbar toggler
function navToggler() {
  navbar.classList.toggle("is-open");
  navbarOverlay.classList.toggle("is-open");
}

Array.from(navTogglers).forEach((btn) => {
  addEventToElem("click", btn, navToggler);
});
// click event
function addEventToElem(eventType, target, handler) {
  target.addEventListener(eventType, handler);
}
