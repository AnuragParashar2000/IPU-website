$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".navbar").css("background" , "#041E54");
          $(".nav-link").css("color", "#FFCB04");
        }
        else{
            $(".navbar").css("background" , "");
            $(".nav-link").css("color", "white");  	
        }
    });
  });