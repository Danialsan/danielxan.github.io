const navbarNav = document.querySelector("nav .navbar-nav");
const menu = document.getElementById("humberger-menu");
menu.addEventListener("click", function () {
  navbarNav.classList.toggle("active");
});
