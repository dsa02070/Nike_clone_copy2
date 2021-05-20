$(function () {
    let hbHeight = $('.hbottom').outerHeight();
    $('#gnb>ul>li').mouseenter(function () {
        let a = $(this).find('.view');
        let subHeight = $(this).find('.submenu').innerHeight();
        a.stop().animate({ height: hbHeight + subHeight + 110 + 'px', }, 300);
        setTimeout(function () { a.slideDown(300) }, 300)

    }).mouseleave(function () {
        let a = $(this).find('.view');
        // $('.hbottom').stop().animate({ height: hbHeight + 'px' }, 300);

        setTimeout(function () { a.slideUp(300) }, 300)
    })
})