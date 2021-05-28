$(function () {

    // 추천순 arrow image change
    $('.recomend_item').click(function () {
        $('.recomend_item_menu').toggleClass('display_on');
        if ($('.recomend_item > img').attr('src') == '../img/NewReleases/arrow_down.png') {
            $('.recomend_item > img').attr('src', '../img/NewReleases/arrow_up.png')
        } else {
            $('.recomend_item > img').attr('src', '../img/NewReleases/arrow_down.png')
        }
    })

    // sale_select click event
    $('.sale_select>ul>li').click(function () {
        // men, women kids tab btn event
        $('.sale_select>ul>li').removeClass('on');
        $(this).addClass('on');

        // tab btn submenu event
        $('.sale_select>ul>li>.sale_submenu').removeClass('sub_on');
        $(this).find('.sale_submenu').addClass('sub_on');

        // tab 버튼을 클릭할 때 컨텐츠가 교체되는 이벤트
        if ($('.sale_select>ul>li:nth-child(2)').hasClass('on') == true) {
            $('.content_list ul li:nth-of-type(odd)').addClass('display_off');
        } else {
            $('.content_list ul li:nth-child(odd)').removeClass('display_off');
        }
        if ($('.sale_select>ul>li:nth-child(3)').hasClass('on') == true) {
            $('.content_list ul li:nth-child(1), .content_list ul li:nth-child(even)').addClass('display_off');
        } else {
            $('.content_list ul li:nth-child(even)').removeClass('display_off');
        }
    })

    //recomend_item_menu ul li click event
    $('.recomend_item_menu ul li').click(function () {
        $('.recomend_item_menu ul li').removeClass('active')
        $(this).addClass('active');
    })

    // content_list li image change event
    $('.content_list li').each(function () {
        let indexNum = $(this).index()
        $('.content_list li:eq("' + indexNum + '") .thumb_img img').on('mouseenter', function () {
            let imgSrc = $(this).attr('src');
            $('.change_src' + indexNum).attr('src', imgSrc);
        })
    })
}) // document ready