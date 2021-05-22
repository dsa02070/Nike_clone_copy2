$(function () {
  // main swiper script

  let swiper = new Swiper(".shoesSlider", {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
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

  // 640px section img change
  $(window).resize(function () {
    let wWidth = $(window).width()
    if (wWidth <= 640) {
      $('section:nth-child(1) img').attr('src', "./img/main/mobile_main_banner.gif")
      $('section:nth-child(2) video').attr('src', "./img/main/mobile_section2_banner.mp4")
      $('section:nth-child(3) img').attr('src', "./img/main/mobile_section3_img.gif")
      $('section:nth-child(4) img').attr('src', "./img/main/mobile_section4_img.jpg")
      $('section:nth-child(5) img').attr('src', "./img/main/mobile_section5_img.jpg")
    } else {
      $('section:nth-child(1) img').attr('src', "./img/main/main_banner.gif");
      $('section:nth-child(2) video').attr('src', "./img/main/section2_banner.mp4")
      $('section:nth-child(3) img').attr('src', "./img/main/section3_img.gif")
      $('section:nth-child(4) img').attr('src', "./img/main/section4_img.jpg")
      $('section:nth-child(5) img').attr('src', "./img/main/section5_img.jpg")
    }
  }).resize();



}) // document ready