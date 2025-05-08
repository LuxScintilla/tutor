document.addEventListener("DOMContentLoaded", function () {
  const mobileToggle = document.querySelector(".mobile-menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu-items");

  mobileToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
});
