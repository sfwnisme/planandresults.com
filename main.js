let nav = document.querySelector("nav");
let navIcon = document.querySelector(".nav-icon");
let navCont = document.querySelector("nav ul");
let navSocial = document.querySelector("nav ul li.nav-social");
let logo = document.querySelector("nav figure img");
console.log(navCont);

navIcon.addEventListener("click", (e) => {
  navCont.classList.toggle("active");
  nav.classList.toggle("active");
  navIcon.firstElementChild.classList.toggle("active");
  // logo.src = "./assets/images/logo-white.png";
  logo.src = "./assets/images/logo.png";
  if (!navCont.classList.contains("active")) {
    logo.src = "./assets/images/logo-white.png";
  }
  navSocial.classList.toggle("nav-social-active")
});

console.log(logo);
