// Initialize the urls
const preloadImageArray = [
    './images/chefgreen.png',
    './images/frieren.png',
    './images/sampler.png',
    './images/petrol.png',
    './images/bathspa-c.jpg',
    './images/bathspa-f.jpg',
    './images/bathspa-c.jpg',
    './images/plato.jpg',
    './images/orange.jpg',
    './images/audiovisual.jpg',
];

// Preload Image Function
function loadImage(loadurls) {
    loadurls.forEach(loadurl => {
        const image = new Image();
        image.src = loadurl;
    });
}

// Preloads the images based on the urls in the array
loadImage(preloadImageArray);

// Initialize the imageboxes and imagelinks
const imageBoxes = ['#wd-image', '#ux-image', '#cc-image'];
const imageLinks = ['.wd-link', '.ux-link', '.cc-link'];

imageBoxes.forEach((boxSelect, index) => {
    // selects all links with the corresponding name based on
    const links = document.querySelectorAll(imageLinks[index]);
    // selects the corresponding imageBox
    const imageBox = document.querySelector(boxSelect);

    // creates hovering conditions for each links
    links.forEach(link => {
        link.addEventListener('mouseenter', () => revealImage(imageBox, link));
        link.addEventListener('mouseleave', () => hideImage(imageBox));
    });
});

// reveal animation of images with the box and link parameters
function revealImage(imageBox, link) {
    // declare a constant value for getting images depending on what kind of link it is
    const getImages = getimageSources(link);
    // if link is appropriate for the imageBox it will reveal it
    if (link) {
        imageBox.src = getImages;
        imageBox.style.animation = 'revealImg 0.5s ease';
    }
}

// hiding animation with a imageBox parameter
function hideImage(imageBox) {
    imageBox.style.animation = 'hideImg 0.5s ease forwards';
}

// function that finds the corresponding links
function getimageSources(findLink) {
    // A dictionary that stores the ids with the corresponding image path
    const imgSrcs = {
        'chef-green': './images/chefgreen.png',
        'frieren': './images/frieren.png',
        'soundboard': './images/sampler.png',
        'petrol': './images/petrol.png',
        'bathspa-c': './images/bathspa-c.jpg',
        'bathspa-f': './images/bathspa-f.jpg',
        'tasikaso': './images/bathspa-c.jpg',
        'plato': './images/plato.jpg',
        'orange': './images/orange.jpg',
        'audiovisual': './images/audiovisual.jpg',
    };
    // returns the corresponding id's values or it will not return anything
    return imgSrcs[findLink.id] || null;
}

// Work Heading Animation
gsap.fromTo('#shapes', { x: -800, }, { x: 0, delay: 0.19, ease: 'ease' })
gsap.fromTo('.works-hero-text', { opacity: 0, }, { opacity: 1, delay: 0.2, ease: 'ease' })
gsap.fromTo('.works-heading', { x: -800, }, { x: 0, ease: 'back.Out' })
gsap.fromTo('#scroll-wrapper', { opacity: 0, }, { opacity: 1, delay: 0.5, ease: 'ease' })