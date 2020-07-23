// Слайдер в шапке
$(document).ready(function () {
   $('.slider').slick({
      dots: true
   });
});
// Слайдер избранное
$(document).ready(function () {
   $('.slider_m').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: false
   });
});
// Плавный скролл по якорям
$(document).ready(function () {
   $("body").on('click', '[href*="#"]', function (e) {
      var fixed_offset = 60;
      $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
      e.preventDefault();
   });
});

$(document).ready(function () {
   $('.check-btn').click(function () {
      $(this).toggleClass('check-btn-active');
   });
});

$(document).ready(function () {
   $('.disable').click(function () {
      $('.disable-beer').toggleClass('disable-beer-active');
   });
});