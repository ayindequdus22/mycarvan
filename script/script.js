$(document).ready(function(){
   
   $('.nav .icons .fa-bars').click(function(){
    $(this).toggleClass("fa-times ")
    $('nav .LinkContainer').toggleClass('active')
   })
   
   
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $('.nav').addClass('active')
        }
    else{
 $('.nav').removeClass('active')
    }
    $('nav .LinkContainer').removeClass('active')
    $('.nav .icons .fa-bars').removeClass("fa-times ")
    
         
        
    })
})