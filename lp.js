$(document).ready(function(){
    $(".signup-btn").click(function(){
    	$(".signup").toggleClass("hide");
    	$(".login").addClass("hide");

    });
});

$(document).ready(function(){
    $(".login-btn").click(function(){
    	$(".login").toggleClass("hide");
    	$(".signup").addClass("hide");
    	
    });
});

    $(document).ready(function() {
        // Transition effect for navbar 
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 200) { 
              $('.navbar').addClass('solid');
             
          } else {
              $('.navbar').removeClass('solid');
             
          }
        });
});

    $(document).ready(function(){
      $(window).resize(function(){
          if ($(window).width() < 768) {
           $(".cc").removeClass("big-btnC");
        }
      else {
            $(".cc").addClass("big-btnC");
        }
    });
      })
    