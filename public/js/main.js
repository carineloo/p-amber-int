//jQuery to link nav and footer
$(function() {
  $('#nav').load('../assets/nav.html');
});

$(function() {
  $('#footer').load('../assets/footer.html');
});

//fade-in effect
$("#fade").delay(110).animate({"opacity": "1"}, 1000);

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "0.5%";
  } else {
    document.getElementById("navbar").style.padding = "2%";
  }
}

// nav-links
$(function(){
  var str = '#len'; //increment by 1 up to 1-nelemnts
  $(document).ready(function(){
    var i, stop;
    i = 1;
    stop = 4; //num elements
    setInterval(function(){
      if (i > stop){
        return;
      }
      $('#len'+(i++)).toggleClass('bounce');
    }, 500)
  });
});

//fade-in links
$(window).on("load",function() {
  function fade() {
      var animation_height = $(window).innerHeight() * 0.25;
      var ratio = Math.round( (1 / animation_height) * 10000 ) / 10000;

      $('.fall').each(function() {

          var objectTop = $(this).offset().top;
          var windowBottom = $(window).scrollTop() + $(window).innerHeight();

          if ( objectTop < windowBottom ) {
              if ( objectTop < windowBottom - animation_height ) {
                  $(this).css( {
                      transition: 'opacity 0.1s linear',
                      opacity: 1
                  } );

              } else {
                  $(this).css( {
                      transition: 'opacity 0.25s linear',
                      opacity: (windowBottom - objectTop) * ratio
                  } );
              }
          } else {
              $(this).css( 'opacity', 0 );
          }
      });
  }
  $('.fall').css( 'opacity', 0 );
  fade();
  $(window).scroll(function() {fade();});
});

//scroll button
$(function() {
  $('.scroll-to-contact').click (function() {
    $('html, body').animate({scrollTop: $('div.contact').offset().top }, 'slow');
    return false;
  });
});
