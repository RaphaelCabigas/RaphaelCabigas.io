//-----ROTATING TEXT ANIMATION-----//
//-----ROTATING TEXT ANIMATION-----//

const circleText = document.querySelector(".circle-txt");
// The text content from the selected element will split into an array of characters

circleText.innerHTML = circleText.innerText.split('').map((char, i) => {
    // For each character, a span element will be created with a transform rotation style
    return `<span style="transform:rotate(${i * 9}deg)">${char}</span>`
    // The rotation degree will increase for each character which will be evenly spread around the circle
    // And then all of the span elements will return into a single concatenated string that will create the rotating text animation
}).join('');

//-----TEXT ENTER ANIMATION-----//
//-----TEXT ENTER ANIMATION-----//

const waveHeading = (heading, className) => {
    const word = document.querySelector(heading);
    word.innerHTML = word.innerText.split('').map((char, i) => { return `<span class=${className}>${char}</span>` }).join('');
}

// Specify which heading should have the corresponding class for span elements
waveHeading("#heading-1st", "letter-head1");
waveHeading("#heading-2nd", "letter-head2");

// HEADING 1 ANIMATION
gsap.set(".letter-head1", { display: "inline-block" });
gsap.fromTo(".letter-head1", { y: 150 }, { y: 0, delay: 1, duration: 1.2, ease: "back.out(3)", stagger: 0.05 });

// HEADING 2 ANIMATION
gsap.set(".letter-head2", { display: "inline-block" });
gsap.fromTo(".letter-head2", { y: 150 }, { y: 0, delay: 1.2, duration: 1.2, ease: "back.out(3)", stagger: -0.05 });

// CONTACT TEXT ANIMATION
gsap.fromTo('#contact-txt', { y: 100 }, { y: 0, delay: 0.5, duration: 1, ease: 'ease' });