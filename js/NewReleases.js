$(function () {
    // lnb accordian event
    $('.check_menu_title').click(function () {
        if ($('+ul', this).css('display') == 'none') {
            $('+ul', this).slideDown(200)
        } else {
            $('+ul', this).slideUp(200)
        }
        $(this).toggleClass('img_change');
    })

    // content_title scroll event
    $(window).scroll(function () {
        let scTop = $(this).scrollTop();
        if (scTop > 66) {
            $('.lnb').addClass('fixed_on')
        } else if (scTop <= 66) {
            $('.lnb').removeClass('fixed_on')
        }
    })

    // filter lnb toggleClass
    $('.filter').click(function () {
        $('.lnb').toggleClass('display_off');
        $('.content_list').toggleClass('width_on')
    })

    // 신상품 image change
    $('.new_item').click(function () {
        $('.new_item_menu').toggleClass('display_on');
        if ($('.new_item > img').attr('src') == '../img/NewReleases/arrow_down.png') {
            $('.new_item > img').attr('src', '../img/NewReleases/arrow_up.png')
        } else {
            $('.new_item > img').attr('src', '../img/NewReleases/arrow_down.png')
        }
    })
    //recomend_item_menu ul li click event
    $('.new_item_menu ul li').click(function () {
        $('.new_item_menu ul li').removeClass('active')
        $(this).addClass('active');
    })

    // mobile_filter click event
    $('.mobile_filter').click(function () {
        $('.lnb').slideToggle()
        $('body').toggleClass('body_scroll') // 클릭 시 body영역 overflow:hidden
    })

    // content_list li mouseenter event
    $('.content_list li').each(function () {
        let indexNum = $(this).index()
        $('.content_list li:eq("' + indexNum + '") .thumb_img img').on('mouseenter', function () {
            let imgSrc = $(this).attr('src');
            $('.change_src' + indexNum).attr('src', imgSrc);
        })
    })
})