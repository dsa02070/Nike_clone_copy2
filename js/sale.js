$(function () {

    // 신상품 image change
    $('.recomend_item').click(function () {
        $('.recomend_item_menu').toggleClass('display_on');
        if ($('.recomend_item > img').attr('src') == '../img/NewReleases/arrow_down.png') {
            $('.recomend_item > img').attr('src', '../img/NewReleases/arrow_up.png')
        } else {
            $('.recomend_item > img').attr('src', '../img/NewReleases/arrow_down.png')
        }
    })

    //recomend_item_menu ul li click event
    $('.recomend_item_menu ul li').click(function () {
        $('.recomend_item_menu ul li').removeClass('active')
        $(this).addClass('active');
    })

    // hover 시 첫번째 리스트 img 교체 event
    $('.content_list li:nth-child(1) .thumb_img img').on('mouseenter', function () {
        let imgSrc = $(this).attr('src');
        $('.change_src1').attr('src', imgSrc);
    })

    // hover 시 두번째 리스트 img 교체 event
    $('.content_list li:nth-child(2) .thumb_img img').on('mouseenter', function () {
        let imgSrc = $(this).attr('src');
        $('.change_src2').attr('src', imgSrc);
    })

    // hover 시 세번째 리스트 img 교체 event
    $('.content_list li:nth-child(3) .thumb_img img').on('mouseenter', function () {
        let imgSrc = $(this).attr('src');
        $('.change_src3').attr('src', imgSrc);
    })

}) // document ready