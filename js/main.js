$(document).ready(function() {
    $('.slider').slick({
        dots: true,
        arrows:false,
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  // Обработчик клика на кнопку "Назад"
  $('.prev-button').on('click', function() {
    $('.slider').slick('slickPrev');
  });

  // Обработчик клика на кнопку "Вперед"
  $('.next-button').on('click', function() {
    $('.slider').slick('slickNext');
  });

  // Инициализация индикаторов
  $('.slider').on('afterChange', function(event, slick, currentSlide) {
    $('.dot').removeClass('active');
    $('.dot').eq(currentSlide).addClass('active');
  });

  // Обработчик клика на слайд
  $('.slider__box').on('click', function() {
    $('.slider__box').removeClass('active');
    $(this).addClass('active');
  });
});
  document.querySelector('.burger').addEventListener('click', function () {
      this.classList.toggle('active');
      document.querySelector('.menu__list').classList.toggle('open');
    }) 