const header = document.querySelector(".js-header");
const navbar = document.querySelector(".js-nav");
const navbarOverlay = document.querySelector(".js-nav-overlay");
const navTogglers = document.querySelectorAll(".js-nav-toggler, .js-nav-link");
const page = document.getElementsByTagName("body");

// Reset scroll position
function resetScrollPos() {
  window.scrollTo(0, 0);
}

addEventToElem("load", window, resetScrollPos);

// Sticky navbar
function stickyHeader() {
  const currentScrollY = window.scrollY;

  if (currentScrollY === 0) {
    header.classList.remove("is-active");
  } else if (currentScrollY < lastScrollY) {
    header.classList.add("is-active");
  } else {
    header.classList.remove("is-active");
  }

  lastScrollY = currentScrollY;
}

addEventToElem("scroll", window, stickyHeader);

// navbar toggler
function navToggler() {
  navbar.classList.toggle("is-open");
  navbarOverlay.classList.toggle("is-open");
  page.classList.toggle("has-no-overflow");
}

Array.from(navTogglers).forEach((btn) => {
  addEventToElem("click", btn, navToggler);
});

// click event
function addEventToElem(eventType, target, handler) {
  target.addEventListener(eventType, handler);
}
