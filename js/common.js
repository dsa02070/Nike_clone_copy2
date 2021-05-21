$(function () {
    $('#gnb>ul>li').mouseenter(function () {
        $(this).find('.view').css('display','block')
        $(this).find('.view').stop().animate({opacity : '1'},200)

    }).mouseleave(function () {
        $(this).find('.view').css({
            'display':'none',
            'opacity':'0',
    });

    })
})