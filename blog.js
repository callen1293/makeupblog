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
        
        $(".overlay").remove();
        
    })
    
    
    $(window).scroll(function(){
    var scroll = $(window).scrollTop();
      if (scroll > 6) {
        $(".overlay").show();
      } 
  })
    
  
    
    
});
