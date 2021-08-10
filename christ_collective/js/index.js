// Header Menu Section
const headermenuToggle = document.querySelector(".header-menu-toggle");
const headermenuLinks = document.querySelectorAll(".header-menu-link");

headermenuToggle.addEventListener("click", () => {
  document.body.classList.toggle("header-menu-open");
});

headermenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("header-menu-open");
  });
});
