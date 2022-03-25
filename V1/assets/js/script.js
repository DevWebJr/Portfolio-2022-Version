const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");

function displayToggle() {
    navList.classList.toggle('show');
}

hamburger.addEventListener('click', displayToggle);