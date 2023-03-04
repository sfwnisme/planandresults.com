function navigation() {
  console.log("navigation function")
  let nav = document.querySelector("nav");
  let navIcon = document.querySelector(".nav-icon");
  let navPath = document.querySelector(".nav-icon svg path:last-of-type");
  let navCont = document.querySelector("nav ul");
  let navSocial = document.querySelector("nav ul li.nav-social");
  let logo = document.querySelector("nav figure img");
  console.log(logo);

  navIcon.addEventListener("click", (e) => {
    e.stopPropagation()
    nav.classList.toggle("active");
    navCont.classList.toggle("active");
    navIcon.firstElementChild.classList.toggle("active");
    navPath.setAttribute("d", "M4 16l16 0");
    if (!navCont.classList.contains("active")) {
      navPath.setAttribute("d", "M4 16l07 0");
    }
    navSocial.classList.toggle("nav-social-active");
  });

  document.addEventListener("click", (e) => {
    if (e.currentTarget !== navIcon)
      navCont.classList.remove('active')
    navPath.setAttribute("d", "M4 16l07 0");
    nav.classList.remove("active");
    console.log('not nav icon')
  })

  //,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  let navData = document.querySelectorAll("nav ul li a");
  // let contactUs = document.querySelector(".get-in-touch a")
  // console.log(contactUs)
  smoothScroll(navData)
  function smoothScroll(element) {
    element.forEach((ele) => {
      // ele.preventDefault();
      ele.addEventListener('click', (e) => {
        e.preventDefault();

        // remove active from section view
        let activeList = e.target.parentElement.parentElement.querySelectorAll('.active');
        activeList.forEach(li => li.classList.remove('active'))
        console.log(activeList)

        // add active class to section view
        e.target.classList.add("active");
        // this variable will target the class of the section not the dataset of the navigation elements(links)
        let data = document.querySelector(e.currentTarget.dataset.nav);

        console.log(data)
        data.scrollIntoView({
          behavior: 'smooth',
        })
      })
    })
  }


}

export default navigation;