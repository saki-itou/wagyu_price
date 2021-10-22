$ (function(){
  $('#page-top, a').click(function() {
    var position = 0;
    var speed = 700;
    $('html, body').animate({
      scrollTop: position
    }, speed);
  });
});