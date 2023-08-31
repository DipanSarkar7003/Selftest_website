// "use strict";
// let menu = document.querySelector(".menu");
// let navbar = document.querySelector(".navbar");
// let isVisible = false;

// menu.addEventListener("click", showNav);

// function showNav() {
//   if (window.innerWidth <= 900) {
//     if (!isVisible) {
//       navbar.style.display = "block";
//       console.log("clickedff");
//       isVisible = true;
//     }
//   }
//   else{
//     navbar.style.display = "flex";
//   }
// }

// "use strict";
// let menu = document.querySelector(".menu");
// let navbar = document.querySelector(".navbar");
// let isVisible = false;

// menu.addEventListener('click', toggleNav);

// function toggleNav() {
//     if (window.innerWidth <= 900) {
//         if (!isVisible) {
//             navbar.style.display = "block";
//             isVisible = true;
//         } else {
//             navbar.style.display = "none";
//             isVisible = false;
//         }
//     }
// }

// // Additional event listener to hide the navbar when the window is resized above 900px
// window.addEventListener('resize', () => {
//     if (window.innerWidth > 900) {
//         navbar.style.display = "none";
//         isVisible = false;
//     }
// });

'use strict'

let menu = document.querySelector(".menu");
let navlist = document.querySelector(".navlist");
let showMenu = false ;

menu.addEventListener('click', toogleNav) ;

function toogleNav (){
    if(window.innerWidth<=900){
    if(showMenu===false){
        navlist.style.display="block";
        showMenu=true ;
    }
    else{
        navlist.style.display="none";
        showMenu=false ;
    }
}
else{
    navlist.style.display="flex"
    showMenu=true  ;
}
    
}