$(document).ready(function(){
   var ht=$(window).height();
    $('section').height(ht);
    
    $(window).on('resize',function(){
        var ht=$(window).height();
        $('section').height(ht);
    });
    
    $('#menu li').on('click',function(){
        var a=$(this).index();
        
        $('html,body').animate({'scrollTop':ht*a})
    })//li클릭
    
    $('section').on('mousewheel',function(e,d){
        if(d>0){
            var prv=$(this).prev().offset().top;
            
            $('html,body').stop().animate({'scrollTop':prv},1400);
        }
        else if(d<0){
            var nxt=$(this).next().offset().top;
            $('html,body').stop().animate({'scrollTop':nxt},1400);
        }
    })//mousewheel

    $(window).on('scroll',function(){
    var a=$(window).scrollTop();
        
   for(i=0; i<$('section').length; i++){
        if(a>=ht*i && a<ht*(i+1)){
            $('#menu li').eq(i).addClass('on').siblings().removeClass('on');
        }
    }
    })//해당 스크롤 on붙이기
    
    
    $('.all_btn').on('click',function(){
        $('#menu').toggleClass('on');
    })
//    
    
})//오프닝구문