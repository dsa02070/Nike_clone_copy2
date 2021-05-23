$(function () {
    $('.check_menu_title').click(function () {
        if ($('+ul', this).css('display') == 'none') {
            $('+ul', this).slideDown(200)
        } else {
            $('+ul', this).slideUp(200)
        }
        $(this).toggleClass('img_change');
    })

    $(window).scroll(function () {
        let scTop = $(this).scrollTop();
        if (scTop > 66) {
            $('.lnb').addClass('fixed_on')
        } else if (scTop <= 66) {
            $('.lnb').removeClass('fixed_on')
        }
    })

})