$(document).ready(function(){$(".about__slider").slick({arrows:!0,dots:!0,vertical:!0});
$(".age__button--yes").click(function(){$(".age").fadeOut("fast")});
$(".article__header").click(function(e){e.preventDefault(),$(this).addClass("article__header--active"),$(this).parents(".article").find(".article__content").fadeIn("fast")});


$(".close").click(function(c){c.preventDefault(),parent.$.fancybox.close()});





$(window).scroll(function(){$(document).scrollTop()>0?$(".header").addClass("header--fixed"):$(".header").removeClass("header--fixed")});




$(".menu__button").click(function(){});
$(".fancybox").fancybox({});








$("a[href*=#]:not(.fancybox):not(.close)").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")||location.hostname==this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html,body").animate({scrollTop:t.offset().top},1e3),!1}});})