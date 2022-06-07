$(document).ready(function(){
  
    $('article').on('mouseenter',function(){
        $(this).stop().animate({'width':'35%'},1000,function(){
            $(this).find('h3').stop().animate({'right':'10px'},400);
            $(this).find('p').stop().animate({'right':'10px'},800);
        });
        $(this).find('video').stop().animate({'opacity':'0.9'},1200);
        
        var vid=$(this).find('video').get(0);
        
        vid.currentTime=0
        //마우스를 올릴때 마다 플레이타임이 0으로 리셋이됨
        vid.play();
        
    });
        $('article').on('mouseleave',function(){
        $(this).stop().animate({'width':'12%'},700);
        $(this).find('video').stop().animate({'opacity':'0'},2000);
        $(this).find('h3').stop().animate({'right':'-310px'},700);
        $(this).find('p').stop().animate({'right':'-310px'},800);
    });
    
    
    
});//오프닝구문