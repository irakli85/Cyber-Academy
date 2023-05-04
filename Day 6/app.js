const burger = document.getElementById('burgers');
const navLinks = document.getElementById('main');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})