$(function () {

    //top button
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 700) {
            $('.top_btn').addClass('on');
        } else {
            $('.top_btn').removeClass('on');
        }
    });
    $('.top_btn').click(function () {
        $('html,body').animate({ scrollTop: '0' }, 500)
    })

    // scroll 에 따른 header 영역 hide, show
    let currentScroll = 0;
    let delta = 15;
    $(window).scroll(function () {
        let winScrollTop = $(this).scrollTop()
        if ((Math.abs(currentScroll - winScrollTop)) <= delta) return;
        if ((winScrollTop > currentScroll) && (currentScroll > 0)) {
            $('header').addClass('hide')
        } else {
            $('header').removeClass('hide')
        }
        currentScroll = winScrollTop;
    })


    // gnb event
    $('#gnb>ul>li').mouseenter(function () {
        $(this).find('.view').css('display', 'block')
        $(this).find('.view').stop().animate({ opacity: '1' }, 200)
    }).mouseleave(function () {
        $(this).find('.view').css({
            'display': 'none',
            'opacity': '0',
        });
    })

    // mobile event
    let mNewReleases = $('.mNew_Releases');
    $('.mgnb_btn').click(function () {
        // body scroll stop
        $('body').toggleClass('body_scroll');

        // scroll bar width padding
        $('.hbottom.container').toggleClass('hbottom_on');

        // mobile btn span event 
        $('.mgnb_btn a span:nth-child(1)').toggleClass('first_bar');
        $('.mgnb_btn a span:nth-child(2)').toggleClass('opacity_zero');
        $('.mgnb_btn a span:nth-child(3)').toggleClass('last_bar');

        // mobile gnb 
        if ($('.gnb').hasClass('mgnb_on') == true || $('.mNew_Releases').hasClass('mNew_on') == true) {
            $('.mgnb').toggleClass('mgnb_on');
            mNewReleases.toggleClass('mNew_on');
        } else {
            $('.mgnb').toggleClass('mgnb_on');
        }
    })

    // mobile NewReleases event
    $('.mgnb .mgnb_list > li:first-child a, .mNew_Releases button').click(function () {
        mNewReleases.toggleClass('mNew_on');
    })

    //search btn event
    $('.hbottom_btn input, .close, .mobile_btn_search').click(function () {
        $('.search_expand').slideToggle(300)
    })
})