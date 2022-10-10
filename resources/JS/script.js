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
