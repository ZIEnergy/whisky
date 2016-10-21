$(window).scroll(function () {
  if ($(document).scrollTop() > 0) {
    $('.header').addClass('header--fixed');
  }
  else {
    $('.header').removeClass('header--fixed');
  }
});