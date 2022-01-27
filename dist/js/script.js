$(document).ready(function(){
    $('.help-block').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false
      });

      $('.partners-block').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"></img></button>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                  arrows: true,
                slidesToShow: 1
              }
            }
        ]
      });
  });