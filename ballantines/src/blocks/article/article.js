$('.article__header').click(function(e) {
  e.preventDefault();
  $(this).addClass('article__header--active');
  $(this).parents('.article').find('.article__content').fadeIn('fast');
});