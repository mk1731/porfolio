// ================= TYPING ANIMATION =================

const words = [
"Data Analysis",
"Software Development",
"Web Development",
"Research",
"Problem Solving"
];

let wordIndex = 0;
let charIndex = 0;

const typingText = document.querySelector(".typing-text");

function typeEffect() {


if (charIndex < words[wordIndex].length) {

    typingText.textContent += words[wordIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeEffect, 100);

} else {

    setTimeout(eraseEffect, 1500);
}


}

function eraseEffect() {


if (charIndex > 0) {

    typingText.textContent =
        words[wordIndex].substring(0, charIndex - 1);

    charIndex--;

    setTimeout(eraseEffect, 50);

} else {

    wordIndex++;

    if (wordIndex >= words.length) {
        wordIndex = 0;
    }

    setTimeout(typeEffect, 300);
}


}

document.addEventListener("DOMContentLoaded", () => {


if (words.length) {
    typeEffect();
}


});

// ================= DARK MODE TOGGLE =================

const darkModeToggle =
document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener("click", () => {


document.body.classList.toggle("dark-mode");

const icon =
    darkModeToggle.querySelector("i");

if (document.body.classList.contains("dark-mode")) {

    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");

} else {

    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
}


});
