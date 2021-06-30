$(function () {
    // men script
    // main_banner swiper
    let swiper1 = new Swiper(".main_banner", {
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    //btn_sub addClass event
    $('.first_btn').mouseenter(function () {
        $('.btn_sub a').addClass("visible")
    })
    $('.btn_sub').mouseleave(function () {
        $('.btn_sub a').removeClass('visible')
    })
    $('.btn_sub a').mouseenter(function () {
        $(this).css('opacity', '0.7')
    }).mouseleave(function () {
        $(this).css('opacity', '1')
    })

    // main_banner hover autoplay stop
    $('.main_banner').mouseenter(function () {
        swiper1.autoplay.stop();
    }).mouseleave(function () {
        swiper1.autoplay.start();
    })

    // section 9th 11th swiper
    let swiper2 = new Swiper(".sectionSlider", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        clickable: true,
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        breakpoints: {
            960: {
                slidesPerView: 3,
            },
            640: {
                slidesPerView: 2.2,
            },
            0: {
                slidesPerView: 1.2,
            }
        }
    });

    // section 10th swiper
    let swiper3 = new Swiper(".section2Slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        clickable: true,
        breakpoints: {
            960: {
                slidesPerView: 3,
            },
            640: {
                slidesPerView: 2.2,
            },
            0: {
                slidesPerView: 1.2,
            }
        }
    });

    // 640px section img change
    $(window).resize(function () {
        let wWidth = $(window).width()
        if (wWidth <= 640) {
            $('.main_banner .swiper-slide:nth-child(1) img').attr('src', "../img/men/mobile_main_banner1.png");
            $('.main_banner .swiper-slide:nth-child(2) img').attr('src', "../img/men/mobile_main_banner2.png");
            $('section:nth-of-type(2) img').attr('src', "../img/men/mobile_section2_img.gif")
            $('section:nth-of-type(3) img').attr('src', "../img/men/mobile_section3_img.jpg")
            $('section:nth-of-type(4) img').attr('src', "../img/men/mobile_section4_img.jpg")
            $('section:nth-of-type(5) img').attr('src', "../img/men/mobile_section5_img.jpg")
            $('section:nth-of-type(6) img').attr('src', "../img/men/mobile_section6_img.jpg")
            $('section:nth-of-type(7) video').attr('src', "../img/men/mobile_section7_img.mp4")
            $('section:nth-of-type(8) video').attr('src', "../img/men/mobile_section8_img.mp4")
        } else {
            $('.main_banner .swiper-slide:nth-child(1) img').attr('src', "../img/men/main_banner1.png")
            $('.main_banner .swiper-slide:nth-child(2) img').attr('src', "../img/men/main_banner2.png")
            $('section:nth-of-type(2) img').attr('src', "../img/men/section2_img.gif")
            $('section:nth-of-type(3) img').attr('src', "../img/men/section3_img.jpg")
            $('section:nth-of-type(4) img').attr('src', "../img/men/section4_img.jpg")
            $('section:nth-of-type(5) img').attr('src', "../img/men/section5_img.jpg")
            $('section:nth-of-type(6) img').attr('src', "../img/men/section6_img.jpg")
            $('section:nth-of-type(7) video').attr('src', "../img/men/section7_img.mp4")
            $('section:nth-of-type(8) video').attr('src', "../img/men/section8_img.mp4")
        }
    }).resize();

}) // document ready