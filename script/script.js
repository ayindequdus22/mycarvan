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
    // countdown  sect
let daysItem = document.querySelector("#day");
let hoursItem = document.querySelector("#hour");
    let minItem = document.querySelector("#minute");
    let secItem = document.querySelector("#second");
   
   
    let countDown = () => {
      let ComingDate = new Date("1 April 2023");
      let PresentDate = new Date();
      let myDate = ComingDate - PresentDate;
      //console.log(myDate);
   
      let Futuredays = Math.floor(myDate / 1000 / 60 / 60 / 24);
   
      let Futurehours = Math.floor(myDate / 1000 / 60 / 60) % 24;
   
      let Futuremins = Math.floor(myDate / 1000 / 60) % 60;
   
      let Futuresecs = Math.floor(myDate / 1000) % 60;
   
      daysItem.textContent = Futuredays;
      hoursItem.textContent = Futurehours;
      minItem.textContent = Futuremins;
      secItem.textContent = Futuresecs;
    }
    countDown()   
    setInterval(countDown, 1000)

// countdown sect

})