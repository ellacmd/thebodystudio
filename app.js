const menu = document.getElementById('menuicon');
const close = document.getElementById('closeicon');
const mobileNav = document.querySelector('.mobile-nav');
menu.addEventListener('click', showNav);
close.addEventListener('click', closeNav);
function showNav(){
mobileNav.classList.add('show')
}
function closeNav(){
    mobileNav.classList.remove('show')
    }