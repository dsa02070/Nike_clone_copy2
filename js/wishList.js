$(function () {
    // mobile lnb button
    $('.lnb_button').click(function () {
        $('.lnb').toggleClass('on')
    })

    $('.list_close').click(function () {
        $(this).parents('li').css("display", 'none');
    })

    let conList = $('.content_list ul li')
    conList.each(function () {
        let b = $(this).index() + 1;
        console.log(b)
        let c = $('.content_list h2 em').text(b)
    })
    let d = conList.index();
    console.log(d)

}) // ducument ready