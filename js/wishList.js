$(function () {
    // mobile lnb button
    $('.lnb_button').click(function () {
        $('.lnb').toggleClass('on')
    })
    $('.list_close').click(function () {
        $(this).parents('li').css("display", 'none');
    })

    //lnb event
    $(window).scroll(function () {
        let scTop = $(this).scrollTop()
        console.log(scTop)
        if (scTop >= 33) {
            $('.lnb').addClass("Top_on")
        } else {
            $('.lnb').removeClass('Top_on')
        }
    })

}) // ducument ready