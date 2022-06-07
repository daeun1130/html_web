$(document).ready(function(){
    var ht=$(window).height();
    $('section').height(ht);
    
    $(window).on('resize',function(){
        var ht=$(window).height();
        $('section').height(ht);
    });
    
    $('#menu li').on('click',function(e){
        e.preventDefault();
        
        var a=$(this).index();
    $('html,body').animate({'scrollTop':ht*a})    
    })//li클릭 해당 섹션 스크롤
  
    $('section').on('mousewheel',function(e,d){
        if(d>0){
            var prv=$(this).prev().offset().top;
            $('html,body').stop().animate({'scrollTop':prv},1400,'easeOutBounce');
        }else if(d<0){
            var nxt=$(this).next().offset().top;
            $('html,body').stop().animate({'scrollTop':nxt},1400,'easeOutBounce');
        }
    });//mousewheel
    
    $(window).on('scroll',function(){
    var a=$(window).scrollTop();
        
   for(i=0; i<$('section').length; i++){
        if(a>=ht*i && a<ht*(i+1)){
            $('#menu li').eq(i).addClass('on').siblings().removeClass('on');
        }
    }
    })//해당 스크롤 on붙이기
    
    
    $('section').on('mousemove',function(e){
               var x =e.pageX;
               var y =e.pageY;
        console.log(x,y);
    
   $('.p11').css({
        'right':20+x/40,
        'bottom':20+y/40
    })//p11
        
    $('.p12').css({'right':130+x/40,'bottom':-40+y/40});
    $('.p13').css({'right':60+x/40,'bottom':140+y/40});
        
    $('.p21').css({'right':-180+x/40,'bottom':-480+y/40});
    $('.p22').css({'right':130+x/40,'bottom':-40+y/40});
        
    $('.p31').css({'right':180+x/40,'bottom':30+y/40});
    $('.p32').css({'right':110+x/40,'bottom':-270+y/40});
    $('.p33').css({'right':-70+x/40,'bottom':-130+y/40});
        
    $('.p41').css({'right':20+x/40,'bottom':-120+y/40});
    $('.p42').css({'right':0+x/40,'bottom':-180+y/40});
    
               })//mousemove
    
    
    
    
    
    
    
    
})//오프닝 구문