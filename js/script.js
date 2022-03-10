$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        dots: true,
        arrows: false,
        responsive: [
            {
              breakpoint: 1100,
              settings: {
                dots: true,
                arrows: false,
                
              }
            }
          ]
      });
    });