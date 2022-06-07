$(document).ready(function(){
 
    $('.main_bn').bxSlider({
        'minSlides':7,
        'maxSlides':7,
        'moveSlides':1,
        'auto':true,
        'pause':5000,
         'controls':false,
        'pager':false
    });//bxslider
  
$('.a').on('click',function(){
    $(this).siblings('.sub').slideDown();
    $(this).parent().siblings().find('.sub').slideUp();
})
    
//$('li').on('mouseover',function(){
//    $(this).find('.sub').stop().slideDown();
//})
//$('li').on('mouseout',function(){
//    $(this).find('.sub').stop().slideUp();
//});
    
setInterval(function(){var i = $('.box[aria-hidden="false"]').index();
$('.box').find('span').removeClass('on');                       
$('.box').eq(i).find('span').addClass('on');
    },500)
    

    
});//오픈