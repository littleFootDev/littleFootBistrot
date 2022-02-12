const btnMenu = document.querySelector(".btn-rond-menu");
const nav = document.querySelector(".nav");
const allItemNav = document.querySelectorAll(".nav-menu-item");
const ligne = document.querySelector(".cont-ligne");

btnMenu.addEventListener("click", () => {
    ligne.classList.toggle("active");
    nav.classList.toggle("menu-visible");
});

if (window.matchMedia("max-width:1300px")) {
    allItemNav.forEach((item) => {
      item.addEventListener("click", () => {
        console.log(item);
        nav.classList.toggle("menu-visible");
        ligne.classList.toggle("active");
      });
    });
  }