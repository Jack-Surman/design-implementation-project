import "./style.scss";
const hamburgerMenuIcon = document.getElementById('header-icon');
const headerMenu = document.getElementById('header-nav');
const contactButton = document.getElementById('header-button');
hamburgerMenuIcon.addEventListener('click', () => {
    headerMenu.classList.toggle('hamburgerToggle');
})
