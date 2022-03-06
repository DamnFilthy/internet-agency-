$( document ).ready(function() {
    $('.js-dropdown').on('click tap', function () {
        let arrow = $('.js-dropdown-svg'),
            list = $('.js-dropdown-list');

        arrow.removeClass('dropdown-rotate')
        list.removeClass('dropdown-list-show')

        $(this).find(arrow).addClass('dropdown-rotate')
        $(this).find(list).addClass('dropdown-list-show')

        let block = $(this);
        $(document).on('click tap', function (event) {
            console.log(block)
            if ( !block.is(event.target) && block.has(event.target).length === 0){
                block.find($('.js-dropdown-svg')).removeClass('dropdown-rotate')
                block.find($('.js-dropdown-list')).removeClass('dropdown-list-show')
            }
        })
    })
});
