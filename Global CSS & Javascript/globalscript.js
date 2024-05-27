//-----TOGGLE MENU VISIBILITY-----//
//-----TOGGLE MENU VISIBILITY-----//

function toggleMenu() {
    var menuList = document.getElementById("menu-container");
    var hamburgerBtn = document.getElementById("menu-btn");
    var overflowX = document.querySelector("body");
    if (menuList.style.display === "none") {
        menuList.style.display = "flex";
        hamburgerBtn.style.zIndex = "5";
        overflowX.style.overflow = "hidden";
    } else {
        menuList.style.display = "none";
    }
}

//-----CUSTOM CURSOR CREATION-----//
//-----CUSTOM CURSOR ANIMATION-----//

// Creates a div element
const cursorShape = document.createElement('div');

// Adds a class named cursor
cursorShape.classList.add('cursor');

// Adds the cursor div in the html document
document.body.appendChild(cursorShape);

// Custom cursor follows the mouse cursor
document.addEventListener('mousemove', (e) => {
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
    cursorShape.style.left = (e.pageX - scrollX) + 'px';
    cursorShape.style.top = (e.pageY - scrollY) + 'px';
})