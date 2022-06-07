$(document).ready(function(){
    
    
$('.slider').bxSlider({
    'pagerCustom':'.pager',
    'auto':true,
    'pause':5000
                      });
$('.v_box').on('click',function(){
    
    $(this).find('video').show();
    
});//click
 
    $('.v_box').on('click',function(){

        $(this).find('video').stop().animate({'opacity':'0.9'},1200);
        
        var vid=$(this).find('video').get(0);
        
        vid.currentTime=0
        //마우스를 올릴때 마다 플레이타임이 0으로 리셋이됨
        vid.play();
//        $(this).stop().animate({'left':'-525px'},700);
        $(this).find('video').stop().animate({'opacity':'1'},2000);
    })
    
    
    $('.v_box1').on('click',function () {
        $('.v_box1 video').stop().animate({width: 700 ,'height':'100%'});
        $('.v_box2 video').stop().animate({width: 0});
        $('.v_box3 video').stop().animate({width: 0});
        $('.v_box4 video').stop().animate({width: 0});
        $('.v_box5 video').stop().animate({width: 0});
        
        $('.v_box1').stop().animate({width: 700});
        $('.v_box2').stop().animate({width: 175});
        $('.v_box3').stop().animate({width: 175});
        $('.v_box4').stop().animate({width: 175});
        $('.v_box5').stop().animate({width: 175});
        
        $('.v_box1 img').stop().animate({width: 0});
        $('.v_box2 img').stop().animate({width: 175});
        $('.v_box3 img').stop().animate({width: 175});
        $('.v_box4 img').stop().animate({width: 175});
        $('.v_box5 img').stop().animate({width: 175});
    });
    
    $('.v_box2').on('click',function () {
        $('.v_box2 video').stop().animate({width: 700 ,'height':'100%'});
        $('.v_box1 video').stop().animate({width: 0});
        $('.v_box3 video').stop().animate({width: 0});
        $('.v_box4 video').stop().animate({width: 0});
        $('.v_box5 video').stop().animate({width: 0});
        
        $('.v_box2').stop().animate({width: 700});
        $('.v_box1').stop().animate({width: 175});
        $('.v_box3').stop().animate({width: 175});
        $('.v_box4').stop().animate({width: 175});
        $('.v_box5').stop().animate({width: 175});
        
        $('.v_box2 img').stop().animate({width: 0});
        $('.v_box1 img').stop().animate({width: 175});
        $('.v_box3 img').stop().animate({width: 175});
        $('.v_box4 img').stop().animate({width: 175});
        $('.v_box5 img').stop().animate({width: 175});
    });
    
    $('.v_box3').on('click',function () {
        $('.v_box3 video').stop().animate({width: 700 ,'height':'100%'});
        $('.v_box1 video').stop().animate({width: 0});
        $('.v_box2 video').stop().animate({width: 0});
        $('.v_box4 video').stop().animate({width: 0});
        $('.v_box5 video').stop().animate({width: 0});
        
        $('.v_box3').stop().animate({width: 700});
        $('.v_box1').stop().animate({width: 175});
        $('.v_box2').stop().animate({width: 175});
        $('.v_box4').stop().animate({width: 175});
        $('.v_box5').stop().animate({width: 175});
        
        $('.v_box3 img').stop().animate({width: 0});
        $('.v_box1 img').stop().animate({width: 175});
        $('.v_box2 img').stop().animate({width: 175});
        $('.v_box4 img').stop().animate({width: 175});
        $('.v_box5 img').stop().animate({width: 175});
    });
    
    $('.v_box4').on('click',function () {
        $('.v_box4 video').stop().animate({width: 700 ,'height':'100%'});
        $('.v_box1 video').stop().animate({width: 0});
        $('.v_box2 video').stop().animate({width: 0});
        $('.v_box3 video').stop().animate({width: 0});
        $('.v_box5 video').stop().animate({width: 0});
        
        $('.v_box4').stop().animate({width: 700});
        $('.v_box1').stop().animate({width: 175});
        $('.v_box2').stop().animate({width: 175});
        $('.v_box3').stop().animate({width: 175});
        $('.v_box5').stop().animate({width: 175});
        
        $('.v_box4 img').stop().animate({width: 0});
        $('.v_box1 img').stop().animate({width: 175});
        $('.v_box2 img').stop().animate({width: 175});
        $('.v_box3 img').stop().animate({width: 175});
        $('.v_box5 img').stop().animate({width: 175});
    });
    
    $('.v_box5').on('click',function () {
        $('.v_box5 video').stop().animate({width: 700 ,'height':'100%'});
        $('.v_box1 video').stop().animate({width: 0});
        $('.v_box2 video').stop().animate({width: 0});
        $('.v_box3 video').stop().animate({width: 0});
        $('.v_box4 video').stop().animate({width: 0});
        
        $('.v_box5').stop().animate({width: 700});
        $('.v_box1').stop().animate({width: 175});
        $('.v_box2').stop().animate({width: 175});
        $('.v_box3').stop().animate({width: 175});
        $('.v_box4').stop().animate({width: 175});
        
        $('.v_box5 img').stop().animate({width: 0});
        $('.v_box1 img').stop().animate({width: 175});
        $('.v_box2 img').stop().animate({width: 175});
        $('.v_box3 img').stop().animate({width: 175});
        $('.v_box4 img').stop().animate({width: 175});
    });
    
    
     $('.row1_wrap ul').bxSlider({
        'slideWidth' : 240,
        'slideMargin':20,
        'minSlides':5,
        'maxSlides' : 5,
        'moveSlides':1,
        
        'touchEnabled' : false
        });
    
    $('.row4 ul').bxSlider({
        'slideWidth' : 240,
        'slideMargin':20,
        'minSlides':5,
        'maxSlides' : 5,
        'moveSlides':1,
        
        'touchEnabled' : false
        });
    
    
    
})//오프닝구문





















          












