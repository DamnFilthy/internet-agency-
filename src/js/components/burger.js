$( document ).ready(function() {
    let burgerBtn = $('.js-burger'),
        mobileMenu = $('.mobile-menu'),
        logo = $('.logo');

    burgerBtn.on('click tap', function () {
        $(this).toggleClass('burger-on')
        mobileMenu.toggleClass('menu-show')
        logo.toggleClass('mobile-logo')
        $('body').toggleClass('overflow')
    })
})
