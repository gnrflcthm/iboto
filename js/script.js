$(document).ready(function() {
    $(this).scroll(function() {
        var nav = $("nav");
        var navBar = $('.nav-container');
        var brand = $('.navbar-brand');
        var links = $('.nav-link');
        var signIn = $('.sign-in-btn');
        navBar.toggleClass("navbar-dark", $(this).scrollTop() > navBar.height() / 2);
        navBar.toggleClass("scrolled-nav", $(this).scrollTop() > navBar.height() / 2);
        brand.toggleClass("scrolled-nav-item", $(this).scrollTop() > navBar.height() / 2);
        links.toggleClass("scrolled-nav-item", $(this).scrollTop() > navBar.height() / 2);
        signIn.toggleClass("scrolled-login", $(this).scrollTop() > navBar.height() / 2);
    });
});l