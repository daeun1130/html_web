$(document).ready(function(){
$('.a').on('click',function(){
    $(this).siblings('.sub').slideDown();
    $(this).parent().siblings().find('.sub').slideUp();
})
    
    
$('.box').find('.ln_1').addClass('on');
$('.box').find('.ln_2').addClass('on');
 $(window).on('scroll',function(){
    
        var sc = $(window).scrollTop(); 
        //스크롤의 높이값을 구하는 속성 (지금은 변수에 저장한상태)
        if(sc>=300){
            $('.box').find('.ln_3').addClass('on');
        }else{
            $('.box').find('.ln_3').removeClass('on')
        }
        if(sc>=700){
            $('.box').find('.ln_4').addClass('on');
        }else{
            $('.box').find('.ln_4').removeClass('on')
        }
     
        if(sc>=1050){
            $('.box').find('.ln_5').addClass('on');
        }else{
            $('.box').find('.ln_5').removeClass('on')
        }
        if(sc>=1500){
            $('.box').find('.ln_6').addClass('on');
        }else{
            $('.box').find('.ln_6').removeClass('on')
        }
        if(sc>=1900){
            $('.box').find('.ln_7').addClass('on');
        }else{
            $('.box').find('.ln_7').removeClass('on')
        }
        if(sc>=2400){
            $('.box').find('.ln_8').addClass('on');
        }else{
            $('.box').find('.ln_8').removeClass('on');
        }
        if(sc>=2800){
            $('.box').find('.ln_9').addClass('on');
        }else{
            $('.box').find('.ln_9').removeClass('on');
        }
        
    })
    
});//오픈