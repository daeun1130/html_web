$(document).ready(function(){
 
  
$('.a').on('click',function(){
    $(this).siblings('.sub').slideDown();
    $(this).parent().siblings().find('.sub').slideUp();
})
    

$('section .box').on('mouseenter',function(){
    var wdt = $(this).find('p span').width();
    
    $(this).find('.border').stop().animate({'width':wdt+'px'},500)
})

$('section .box').on('mouseleave',function(){
    $(this).find('.border').stop().animate({'width':0},500)
})

    
    
$('section').find('.box1').addClass('on');
$('section').find('.box2').addClass('on');
$('section').find('.box3').addClass('on');
 $(window).on('scroll',function(){
    
        var sc = $(window).scrollTop(); 
        //스크롤의 높이값을 구하는 속성 (지금은 변수에 저장한상태)
        if(sc>=100){
            $('section').find('.box4').addClass('on');
        }else{
            $('section').find('.box4').removeClass('on')
        }
     
        if(sc>=350){
            $('section').find('.box5').addClass('on');
        }else{
            $('section').find('.box5').removeClass('on')
        }
        if(sc>=650){
            $('section').find('.box6').addClass('on');
        }else{
            $('section').find('.box6').removeClass('on')
        }
        if(sc>=850){
            $('section').find('.box7').addClass('on');
        }else{
            $('section').find('.box7').removeClass('on')
        }
        
    })
    
    
    
});//오픈