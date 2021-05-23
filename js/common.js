$(function () {
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

        // blur effect
        $('section').toggleClass('blur')

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

    //section click removeClass mgnb
    $('section').click(function () {
        // body scroll stop
        $('body').removeClass('body_scroll');

        // scroll bar width padding
        $('.hbottom.container').removeClass('hbottom_on');

        // blur effect
        $('section').removeClass('blur');

        // mobile btn span event 
        $('.mgnb_btn a span:nth-child(1)').removeClass('first_bar');
        $('.mgnb_btn a span:nth-child(2)').removeClass('opacity_zero');
        $('.mgnb_btn a span:nth-child(3)').removeClass('last_bar');

        // mobile gnb
        $('.mgnb').removeClass('mgnb_on');
        mNewReleases.removeClass('mNew_on');
    })

    // mobile NewReleases event
    $('.mgnb .mgnb_list > li:first-child a, .mNew_Releases button').click(function () {
        mNewReleases.toggleClass('mNew_on');
    })
})