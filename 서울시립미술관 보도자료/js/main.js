$(document).ready(function(){
 
  
$('li').on('mouseenter',function(){
    $(this).find('.sub').stop().slideDown();
})
$('li').on('mouseout',function(){
    $(this).find('.sub').stop().slideUp();
});
    

$('.s1 .box').on('mouseover',function(){
    var wdt = $(this).find('p span').width();
    
    $(this).find('.border').stop().animate({'width':wdt+'px'},500)
})

$('.s1 .box').on('mouseleave',function(){
    $(this).find('.border').stop().animate({'width':0},500)
})

 
    
    
    
});//오픈