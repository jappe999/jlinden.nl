const menu = document.getElementById('menu');
const menuContent = menu.firstChild;
const menuToggle = document.getElementById('menu-toggle');

menuToggle.addEventListener('click', (e) => {
    menu.classList.toggle('max-h-96');
    menu.classList.toggle('opacity-0');
});