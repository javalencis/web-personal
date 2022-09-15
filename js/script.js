
const menu = document.querySelector('.menu-burger');
const nav_menu = document.querySelector('.nav-menu');



menu.addEventListener('click',animateBars);


let linea1 =  document.querySelector('.line1__menu');
let linea2 =  document.querySelector('.line2__menu');
let linea3 =  document.querySelector('.line3__menu');


function animateBars(){
    linea1.classList.toggle('line1__menuActivate');
    linea2.classList.toggle('line2__menuActivate');
    linea3.classList.toggle('line3__menuActivate');
   
}

