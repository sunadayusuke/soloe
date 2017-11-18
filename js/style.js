$(function() {
  var w = $(window).width();
  var x = 480;
  var images = [
    'img01.jpg',
    'img02.jpg',
    'img03.jpg',
    'img04.jpg',
    'img05.jpg',
    'img06.jpg',
    'img07.jpg',
    'img08.jpg',
    'img09.jpg',
    'img10.jpg',
    'img11.jpg',
    'img12.jpg',
  ];
  var images_sp = [
    'img01_sp.jpg',
    'img02_sp.jpg',
    'img03_sp.jpg',
    'img04_sp.jpg',
    'img05_sp.jpg',
    'img06_sp.jpg',
    'img07_sp.jpg',
    'img08_sp.jpg',
    'img09_sp.jpg',
    'img10_sp.jpg',
    'img11_sp.jpg',
    'img12_sp.jpg',
  ];
  var randImg = images[Math.floor(Math.random() * images.length)];
  var randImg_sp = images_sp[Math.floor(Math.random() * images.length)];
  if (w < x) {
    $('.mainVisual__img').attr('src', "./img/" + randImg_sp);
  } else {
    $('.mainVisual__img').attr('src', "./img/" + randImg);
  }

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
  }, 4100);



  setTimeout(function() {
    $('.logoAnimation').fadeOut("slow");
  }, 6100);



  var count = 0;
  var buttonRotate = 20;
  var buttonMargin = -40;
  var headerRotate = -10;
  var headerY = 200;
  var headerX = -4;
  var logo = 60;
  var footer = 20;
  var mainVisual = 1;
  $(".randomButton").click(function() {
    count++;
    var w = $(window).width();
    var x = 480;
    var randImg = images[Math.floor(Math.random() * images.length)];
    var randImg_sp = images_sp[Math.floor(Math.random() * images.length)];
    // var min = -2;
    // var max = 2;
    // var margin1 = Math.floor(Math.random() * (max + 1 - min)) + min;
    // var margin2 = Math.floor(Math.random() * (max + 1 - min)) + min;
    // var margin3 = Math.floor(Math.random() * (max + 1 - min)) + min;
    // var margin4 = Math.floor(Math.random() * (max + 1 - min)) + min;
    // $(this).css('margin-left', margin1 + 'px' );
    // $(".header__link").css('margin-right', margin2 + 'px' );
    // $(".header__logo").css('margin-left', margin3 + 'px' );
    // $(".copy").css('margin-top', margin3 + 'px' );
    if (count < 21) {
      buttonRotate--;
      buttonMargin += 2;
      headerRotate += 0.5;
      headerY -= 10;
      headerX += 0.2;
      logo -= 3;
      footer--;
      mainVisual -= 0.05;
      $(this).css({
        'transform': 'translateY(0%) translateX(-50%) rotate(' + buttonRotate + 'deg)',
        'margin-left': buttonMargin + "%"
      });
      $(".header").css({
        'transform': 'rotate(' + headerRotate + 'deg) translateY(' + headerY + '%) translateX(' + headerX + '%)',
      });
      $(".header__logoBox").css({
        'transform': 'rotate(' + logo + 'deg)'
      });
      $(".footer").css({
        'margin-top': footer + "%"
      });
      $(".mainVisual__img").css({
        'transform': 'rotateZ(' + mainVisual + 'deg)'
      });
    }
    if (count == 6) {
      $(".randomButton").css({
        'text-decoration': 'none',
        'border-style': 'none',
        'background-color': '#fff'
      });
    } else if (count == 11) {
      $(".randomButton").css({
        'outline': 'none',
        'border': '2px solid #444'
      });
    } else if (count == 16) {
      $(".randomButton").css({
        'padding': '6px 16px'
      });

    } else if (count == 21) {
      $(".randomButton").css({
      'border-radius': '6px'
      });
    }


    if (w < x) {
      $('.mainVisual__img').attr('src', "./img/" + randImg_sp);
    } else {
      $('.mainVisual__img').attr('src', "./img/" + randImg);
    }
  });


});
