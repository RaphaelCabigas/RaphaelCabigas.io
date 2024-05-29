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

//-----DARK MODE & LIGHT MODE-----//
//-----DARK MODE & LIGHT MODE-----//

const content = document.body;
const light = document.getElementById('light-mode');
const dark = document.getElementById('dark-mode');


// Light Mode Function which adds the light-mode class from the body 
// which will change all the colors with their corresponding theme
function lightMode() {
    content.classList.add('light-mode');
    // This line of code helps with forcing the styles to be applied first before loaded
    // I used this to remove theme mode transitions so any other theme applied before will not transition first
    void content.offsetWidth
    document.body.style.transition = '1s cubic-bezier(0.19, 1, 0.22, 1)';
    localStorage.setItem('theme', 'light');
}

// Dark Mode Function which removes the light-mode class from the body
// and will revert back to the original starting theme
function darkMode() {
    content.classList.remove('light-mode');
    // I used this to remove theme mode transitions so any other theme applied before will not transition first
    void content.offsetWidth
    document.body.style.transition = ' 1s cubic-bezier(0.19, 1, 0.22, 1)';
    localStorage.setItem('theme', 'dark');
}

// Checks for user's last saved theme preference in the local storage 
// which acts like a save point which will affect all of the other pages
const lastSavedTheme = localStorage.getItem('theme');
if (lastSavedTheme === 'dark') {
    darkMode();
} else {
    lightMode();
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



//-----ROTATING TEXT ANIMATION-----//
//-----ROTATING TEXT ANIMATION-----//

const circleText = document.querySelector(".circle-txt");
circleText.innerHTML = circleText.innerText.split('').map((char, i) => `<span style="transform:rotate(${i * 10.6}deg)">${char}</span>`).join('');