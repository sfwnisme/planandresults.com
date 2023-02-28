"use strict";
AOS.init();

/* IMPORT */
import cursor from "./assets/extensions/cursor.js";
cursor();

import slider from "./assets/extensions/slider.js";
slider();

let nav = document.querySelector("nav");
let navIcon = document.querySelector(".nav-icon");
let navPath = document.querySelector(".nav-icon svg path:last-of-type");
let navCont = document.querySelector("nav ul");
let navSocial = document.querySelector("nav ul li.nav-social");
let logo = document.querySelector("nav figure img");
// console.log(navCont);

navIcon.addEventListener("click", (e) => {
  navCont.classList.toggle("active");
  nav.classList.toggle("active");
  navIcon.firstElementChild.classList.toggle("active");
  // logo.src = "./assets/images/logo-white.png";
  logo.src = "./assets/images/logo-white.png";
  navPath.setAttribute("d", "M4 16l16 0");
  if (!navCont.classList.contains("active")) {
    logo.src = "./assets/images/logo-white.png";
    navPath.setAttribute("d", "M4 16l07 0");
  }
  navSocial.classList.toggle("nav-social-active");
});

//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

// let cloneNav = navCont
// console.log(cloneNav)
let shortLinks = document.querySelector(".short-links")
let cloned = navCont.cloneNode(true);
shortLinks.append(cloned)

window.addEventListener("load", () => {
  console.log(cloned)
  if (shortLinks !== '') {
    shortLinks.append(cloned)
  }
})
