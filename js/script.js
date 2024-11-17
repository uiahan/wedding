window.onscroll = function() {
    let navbar = document.querySelector('.navbar');
    let navbarBrand = document.querySelector('.navbar-brand');
    let navbarToggler = document.querySelector('.navbar-toggler-icon');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        navbarBrand.classList.add('scrolled');
        navbarToggler.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
        navbarBrand.classList.remove('scrolled');
        navbarToggler.classList.remove('scrolled');
    }
};