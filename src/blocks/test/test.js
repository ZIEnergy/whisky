$('.test__button').click(function(e) {
  e.preventDefault();
  $(this).parents('.test__item').hide();
  $('.test__item--result').fadeIn('fast').css('display', 'flex').css('display', '-webkit-flex');
});