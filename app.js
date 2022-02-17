
const btnMenu2 = document.querySelector(".btn-rond-menu2");
const nav = document.querySelector(".nav-restaurant");
const allItemNav = document.querySelectorAll(".nav-menu-item");
const ligne = document.querySelector(".cont-ligne");

btnMenu2.addEventListener("click", () => {
    console.log('click');
    ligne.classList.toggle("active");
    nav.classList.toggle("menu-visible2");
});


if (window.matchMedia("max-width:1300px")) {
    allItemNav.forEach((item) => {
      item.addEventListener("click", () => {
        console.log(item);
        nav.classList.toggle("menu-visible2");
        ligne.classList.toggle("active");
      });
    });
  }