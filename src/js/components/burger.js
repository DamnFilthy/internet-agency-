$( document ).ready(function() {
    let burgerBtn = $('.js-burger'),
        mobileMenu = $('.mobile-menu'),
        logo = $('.logo');

    burgerBtn.on('click tap', function () {
        $(this).toggleClass('burger-on')
        $(this).closest('.header__top').toggleClass('header-on')
        mobileMenu.toggleClass('menu-show')
        logo.toggleClass('mobile-logo')
        $('body').toggleClass('overflow')
    })
})
