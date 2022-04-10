const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");

function displayToggle() {
    navList.classList.toggle('show');
}

hamburger.addEventListener('click', displayToggle);

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)