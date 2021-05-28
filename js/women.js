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

    // section 11th, 12th swiper
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
        // $('section').each(function () {
        //     let indexNum = $(this).index()
        //     console.log(indexNum)
        //     $('section:eq("' + indexNum + '")').attr('src', "../img/men/mobile_section" + indexNum + "_img.jpg")
        // })
        let wWidth = $(window).width()
        if (wWidth <= 640) {
            $('.main_banner .swiper-slide:nth-child(1) img').attr('src', "../img/women/mobile_main_banner1.png");
            $('.main_banner .swiper-slide:nth-child(2) img').attr('src', "../img/women/mobile_main_banner2.png");
            $('section:nth-of-type(2) video').attr('src', "../img/women/mobile_section2_banner.mp4")
            $('section:nth-of-type(3) img').attr('src', "../img/women/mobile_section3_img.gif")
            $('section:nth-of-type(4) img').attr('src', "../img/women/mobile_section4_img.jpg")
            $('section:nth-of-type(5) img').attr('src', "../img/women/mobile_section5_img.jpg")
            $('section:nth-of-type(7) img').attr('src', "../img/women/mobile_section7_img.gif")
            $('section:nth-of-type(9) img').attr('src', "../img/women/mobile_section9_img.jpg")
        } else {
            $('.main_banner .swiper-slide:nth-child(1) img').attr('src', "../img/women/main_banner1.png")
            $('.main_banner .swiper-slide:nth-child(2) img').attr('src', "../img/women/main_banner2.png")
            $('section:nth-of-type(2) video').attr('src', "../img/women/section2_banner.mp4")
            $('section:nth-of-type(3) img').attr('src', "../img/women/section3_img.gif")
            $('section:nth-of-type(4) img').attr('src', "../img/women/section4_img.jpg")
            $('section:nth-of-type(5) img').attr('src', "../img/women/section5_img.jpg")
            $('section:nth-of-type(7) img').attr('src', "../img/women/section7_img.jpg")
            $('section:nth-of-type(9) img').attr('src', "../img/women/section9_img.jpg")
        }
    }).resize();

}) // document ready