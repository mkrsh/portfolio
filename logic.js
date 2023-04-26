/**
 * Filename: logic.js
 * Project: Simple Portfolio Site
 * Purpose: Implements website logic for interactive viewing modes, specifically the light-mode to dark-mode.
 * Author: Mahendirakumar Krishnakumar
 * Date: April 22, 2023
 * Version: 1.3
 */

// Controls website color scheme for light and dark modes.
function modeToggle(){
    var light = true;
    var dark = true;

    // If dark-mode is hidden, light mode is active.
    if ( document.getElementById("dark-mode").classList.contains('is-hidden') ) {
        dark = false;
    }
    // If light-mode is hidden, dark mode is active.
    if ( document.getElementById("light-mode").classList.contains('is-hidden') ) {
        light = false;
    }

    // Light mode to dark mode switch
    if (light == false) {
        document.getElementById("light-mode").classList.remove('is-hidden');
        document.getElementById("dark-mode").classList.add('is-hidden');

        document.getElementById("root-nav").classList.remove('light-hover');
        document.getElementById("root-nav").classList.add('dark-hover');

        document.getElementById("root-body").classList.remove('light-gradient');
        document.getElementById("root-body").classList.add('dark-gradient');

        document.getElementById("ctitle").classList.remove('black-title');
        document.getElementById("ctitle").classList.add('light-title');
        /*
        swapManyCSS("body dark-body-text", "dark-body-text", "light-body-text"); */
    }

    // Dark mode to light mode switch
    if (dark == false) {
        document.getElementById("light-mode").classList.add('is-hidden');
        document.getElementById("dark-mode").classList.remove('is-hidden');

        document.getElementById("root-nav").classList.remove('dark-hover');
        document.getElementById("root-nav").classList.add('light-hover');

        document.getElementById("root-body").classList.remove('dark-gradient');
        document.getElementById("root-body").classList.add('light-gradient');

        document.getElementById("ctitle").classList.remove('light-title');
        document.getElementById("ctitle").classList.add('black-title');

        /* 
        swapManyCSS("body light-body-text", "light-body-text", "dark-body-text"); */
    }
}

// Attempts to swap CSS classes of HTML elements to achieve light-mode and dark-mode transitions.
function swapManyCSS(selectorCSS, removeCSS, addCSS) {
    var arr = document.getElementsByClassName(removeCSS);
    for (var i = 0; i < arr.length; i++) {
        elem = arr[i];
        elem.classList.remove(removeCSS);
        elem.classList.add(addCSS);
    }
}

// Implements the HTML onmouseover logic to display image captions
function displayImgText(id) {
    document.getElementById(id).classList.remove('is-hidden');
}

// Implements the HTML onmouseout logic to hide the image captions once cursor is outside the image area.
function hideImgText(id) {
    document.getElementById(id).classList.add('is-hidden');
}