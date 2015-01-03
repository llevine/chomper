// TODO: delete all of this and remove references to it

// game timer that loads when the document page is ready

$(document).ready(function() {
    var maxWidth = 880;
    var duration = 60000;
    var timer;
    var $bar = $('#bar');
      Horloge(maxWidth);
      timer = setInterval('Horloge('+maxWidth+')', 10);

      $bar.animate({
          width: maxWidth
      }, duration, function() {
          $(this).css('background-color', 'red');
          clearInterval(timer);    
    });
});

function Horloge(maxWidth) {
    var w = $('#bar').width();
    var percent = parseInt((w * 100) / maxWidth);
}