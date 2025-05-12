// Toggle hamburger mobile menu

document.addEventListener("DOMContentLoaded", function () {
  const mobileToggle = document.querySelector(".mobile-menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu-items");

  mobileToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
});

// Change navbar background on scroll

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("navbar-scroll");
  }
  if (window.scrollY === 0) {
    navbar.classList.remove("navbar-scroll");
  }
});
