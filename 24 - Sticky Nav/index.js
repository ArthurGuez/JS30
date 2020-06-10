var navBar = document.getElementById('main');
var offsetTopNav = navBar.offsetTop;
var logo = document.querySelector('.logo');

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled >= offsetTopNav) {
        document.body.style.paddingTop = navBar.offsetHeight + 'px';
        navBar.style.position = "fixed";
        logo.style.maxWidth = "100%";
    } else {
        document.body.style.paddingTop = 0;
        navBar.style.position = "";
        logo.style.maxWidth = "";
    }
})