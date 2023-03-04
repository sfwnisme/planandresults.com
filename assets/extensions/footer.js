export default footer;
function footer() {
  let navCont = document.querySelector("nav ul");
  // let cloneNav = navCont
  // console.log(cloneNav)
  let shortLinks = document.querySelector(".short-links")
  let cloned = navCont.cloneNode(true);
  shortLinks.append(cloned)
  let footerLinks = cloned.querySelectorAll("ul li a")
  console.log(cloned.querySelectorAll(" ul li a"))
  window.addEventListener("load", () => {
    if (shortLinks !== '') {
      shortLinks.append(cloned)
    }
  })



  smoothScroll(footerLinks)
  // smoothScroll(navData)

}
let navData = document.querySelectorAll("nav ul li a");


function smoothScroll(element) {
  element.forEach((ele) => {
    // ele.preventDefault();
    ele.addEventListener('click', (e) => {
      e.preventDefault();

      // if the short link element equal the navigation element 
      // remove all active elements and add it to the same element you clicked
      navData.forEach((nav) => {
        let active = nav.parentElement.parentElement.querySelectorAll(".active")
        if (nav.textContent == e.target.textContent) {
          active.forEach((n) => {
            n.classList.remove('active')
          })
          nav.classList.add('active')
        }
      })

      // scroll to the section 
      let data = document.querySelector(e.currentTarget.dataset.nav);
      console.log(data)
      data.scrollIntoView({
        behavior: 'smooth',
      })
    })
  })
}