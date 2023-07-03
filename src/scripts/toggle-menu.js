const menuBt = document.querySelector('.hambt')
const nav = document.querySelector('header nav')
const navBts = document.querySelectorAll('header nav a')

let showingMenu = false;


function toggleNav() {
    if(showingMenu == false) {

        nav.classList.add('show')
        menuBt.classList.add('close')

        showingMenu = true;
    } else {

        nav.classList.remove('show')
        menuBt.classList.remove('close')

        showingMenu = false;
    }
}

menuBt.addEventListener('click', toggleNav)


for(i=0;i<navBts.length;i++) {
    navBts[i].addEventListener('click', toggleNav)
}