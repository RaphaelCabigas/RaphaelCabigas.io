//-----SVG GRAIN FILTER-----//
//-----SVG GRAIN FILTER-----//

const svgGrain = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgGrain.setAttribute("style", "position: fixed;");

const filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
filter.setAttribute("id", "grainy");

const feTurbulence = document.createElementNS("http://www.w3.org/2000/svg", "feTurbulence");
feTurbulence.setAttribute("type", "turbulence");
feTurbulence.setAttribute("baseFrequency", "0.6");

filter.appendChild(feTurbulence);
svgGrain.appendChild(filter);
document.body.appendChild(svgGrain);

//-----TOGGLE MENU VISIBILITY-----//
//-----TOGGLE MENU VISIBILITY-----//

const menuList = document.getElementById("menu-container");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
// Initialize the menu container to not be displayed first in the screen
menuList.style.display = "none";

// Open function
function openMenu() {
    menuList.style.display = "flex";
    menuList.style.animation = "menuAnimationIn 1s ease forwards";
    gsap.fromTo(".menu-item>a", { y: 1700 }, { y: 0, duration: 0.4, stagger: 0.05 });

}

// Close function
function closeMenu() {
    gsap.fromTo(".menu-item>a", { y: 0 }, { y: 1000, stagger: 0.05 });
    menuList.style.animation = "menuAnimationOut 1s ease forwards";

}

menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

//-----DARK MODE & LIGHT MODE-----//
//-----DARK MODE & LIGHT MODE-----//

const content = document.body;
const light = document.getElementById('light-mode');
const dark = document.getElementById('dark-mode');


// Light Mode Function which adds the light-mode class from the body 
// which will change all the colors with their corresponding theme
function lightMode() {
    content.classList.remove('dark-mode');
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
    content.classList.add('dark-mode')
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
    cursorShape.style.left = (e.pageX - scrollX + -10) + 'px';
    cursorShape.style.top = (e.pageY - scrollY - 10) + 'px';
})

// selects all anchor tags and menu, close, cv, submit, light and dark mode button
const hoverableElements = document.querySelectorAll('a, h1, h2, #menu-btn, #close-btn, #cv-btn, #submit-btn, #light-mode, #dark-mode');

// Cursor Style condition function
function cursorCondition(size, color) {
    cursorShape.style.backgroundColor = color;
    cursorShape.style.transform = size;
}
hoverableElements.forEach(hoverableElements => {
    // For every hoverable element we add an event listener when the mouse enters it will scale up by 3 and add a background color
    hoverableElements.addEventListener('mouseenter', () => {
        cursorCondition('scale(4)', "#cac9c9");
    });
    // And when leaving the cursor will revert back and apply a transparent background color
    hoverableElements.addEventListener('mouseleave', () => {
        cursorCondition('scale(1)', 'transparent');
    });
});
