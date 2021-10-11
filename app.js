let menu_open = false;

function open_menu () {
    if(!menu_open) {
        document.getElementById("header-mobile-menu-button").textContent="menu_open";
        document.getElementById("header-mobile-menu-content").style.display = "block";
        document.getElementById("header-mobile-menu-content").style.left = "0px";
        menu_open = true;
    }
    else {
        document.getElementById("header-mobile-menu-button").textContent="menu";
        document.getElementById("header-mobile-menu-content").style.left = "100%";
        document.getElementById("header-mobile-menu-content").style.display = "none";
        menu_open = false;
    }
}