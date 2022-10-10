let hamgurger=document.getElementById("hamgurger-icon");
let menu = document.getElementById("menu-id");
let cross = document.getElementById("cross");

function showMenu () {
menu.classList.replace("hide", "show");
document.body.style.overflow = "hidden"
}

hamgurger.addEventListener("click", showMenu);

function hideMenu () {
    menu.classList.replace("show", "hide");
    document.body.style.overflow = ""
    }

cross.addEventListener("click",hideMenu)

