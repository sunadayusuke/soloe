$(function() {

  $('.js-bar').each(function(i) {
    $(this).delay(500 * i).animate({
      opacity: 1,
      marginTop: '0px'
    });
  });

  setTimeout(function() {
    $('.bar4').css({
      transform: 'rotate(3.5deg)'
    });
  }, 4000);


  setTimeout(function() {
    $('.logoAnimation').fadeOut("slow");
  }, 6000);

  $(window).on('load', function() {

    // fade-in
    $(window).on("scroll", function() {
      $('.container__item').each(function() {
        var POS = $(this).offset().top; //fade-inがついている要素の位置
        var scroll = $(window).scrollTop(); //スクロール一
        var windowHeight = $(window).height(); //ウィンドウの高さ

        if (scroll > POS - windowHeight + windowHeight / 5) {
          $(this).css("opacity", "1");
        } else {
          $(this).css("opacity", "0");
        }
      });
    });
  });


});
