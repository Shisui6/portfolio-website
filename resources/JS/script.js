//Declare Variables
let menuButton = document.getElementById("menu-button");
let menu = document.getElementById("menu-id");
let closeButton = document.getElementById("close");

//Create event listener functions
function showMenu () {
    menu.classList.replace("hide", "show");
}

function hideMenu () {
    menu.classList.replace("show", "hide");
}

//Add event listeners to html elements
menuButton.addEventListener("click", showMenu);
closeButton.addEventListener("click", hideMenu)

let menuItems = document.getElementsByClassName("menu-item");
for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", hideMenu)
}

//Highligh visible section of webpage on window scroll
const sections = document.querySelectorAll("section");
console.log(sections);
const navLi = document.getElementsByClassName("nav-item");
console.log(navLi);
window.onscroll = () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id"); 
    }
  });

  for (let i = 0; i < navLi.length; i++) {
    navLi[i].classList.remove("active");
    if (navLi[i].classList.contains(current)) {
      navLi[i].classList.add("active");
    }
  }
};
