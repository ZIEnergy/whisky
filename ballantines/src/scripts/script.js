$('a[href*=#]:not(.fancybox):not(.close):not(.article__header):not(.age__button)').click(function () {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});

$('.fancybox').click(function(e) {
  e.preventDefault();
})