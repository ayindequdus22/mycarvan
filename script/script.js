$(document).ready(function(){
  
    
// filter
$('.rangeContainer .buttons .filter-btn').click(function(){
    const value = $(this).attr(`data-filter`);
     $(this).addClass('active').siblings().removeClass('active');
    if(value == 'all'){
      $('.rangeCarContainer .rangeCar').show(10).addClass('active');
    }
    else{
      $('.rangeCarContainer .rangeCar').not('.'+value).hide(10).removeClass('active');
      $('.rangeCarContainer .rangeCar').filter('.'+value).show(10).addClass('active');
     }
   
    })
// filter
$('.brandContainer .buttons .filter-btn').click(function(){
    const value = $(this).attr(`data-filter`);
     $(this).addClass('active').siblings().removeClass('active');
    if(value == 'all'){
      $('.brandCarContainer .brandCar').show(10).addClass('active');
    }
    else{
      $('.brandCarContainer .brandCar').not('.'+value).hide(10).removeClass('active');
      $('.brandCarContainer .brandCar').filter('.'+value).show(10).addClass('active');
     }
   
    })




   $('.nav .icons .fa-bars').click(function(){
    $(this).toggleClass("fa-times ")
    $('nav .LinkContainer').toggleClass('active')
   })
   
   $('.UpBtn').click(function(){
    window.scrollTo({top:0,left:0,behavior:'smooth'})
     });
     $('.DownBtn').click(function(){
        window.scrollTo({top:document.documentElement.scrollHeight,behavior:'smooth'})
     })
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $('.nav').addClass('active')
        }
    else{
 $('.nav').removeClass('active')
    }
    if(scrollY > 50){
        $('.topCar div').addClass('active');
        }
         else{
            $('.topCar div').removeClass('active');
             };
              
    $('nav .LinkContainer').removeClass('active')
    $('.nav .icons .fa-bars').removeClass("fa-times ")
    
         
        
    })
    // countdown  sect
let daysItem = document.querySelector("#day");
let hoursItem = document.querySelector("#hour");
    let minItem = document.querySelector("#minute");
    let secItem = document.querySelector("#second");
   
   
    let countDown = () => {
      let ComingDate = new Date("1 May 2023");
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


})