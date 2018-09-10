$(document).ready(function() {

  var main = $('.main');
  var i;

  //cog div creation
  for (i = 0; i < 20; i++) {
    main.append('<div class="fly"><img src="images/fly.svg"></div>');
  }

  var fly = $('.fly');


  // ----------- fly positioning function -----------
  (function position() {
    fly.each(function() {
      var x = Math.floor((Math.random() * 1220) + 1);
      var y = Math.floor((Math.random() * 400) + 1);

      $(this).css({
        "top": y,
        "left": x
      });

    });
  })();



  fly.each(function() {
    var b = Math.floor((Math.random() * 5) + 1);

    $(this).css({
      "animation-delay": b + "s"
    });
  });

  // -------------- control buttons --------------


}); //document ready function