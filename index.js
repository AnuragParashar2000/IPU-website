$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300 && scroll<1000) {
          $(".navbar").css("background" , "#041d54a9");
          $(".nav-link").css("color", "#FFCB04");
        }
        else if(scroll > 1000){
          $(".navbar").css("background" ,  "#041d54");
        }
        else{
            $(".navbar").css("background" , "");

            $(".nav-link").css("color", "white");  	
        }
    });
  });