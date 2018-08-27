$(document).ready(function(){
    
    $('.menu').click(function(){
        
        $('.menu').toggleClass('active');
        $('.menu-bar').toggleClass('active');
    });
    
    
    $(window).scroll(function(){
    var scroll = $(window).scrollTop();
      if (scroll > 1) {
        $(".menu-bar").css("background" , "white");
      }

  })
    
    
    $(".close").click(function(){
        
        $(".overlay").hide();
        
    })
    
    
    $(window).scroll(function(){
    var scroll = $(window).scrollTop();
      if (scroll > 1) {
        $(".overlay").show();
      } 
  })
    
    
});
