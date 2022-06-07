$(document).ready(function(){
 
  
$('.a').on('click',function(){
    $(this).siblings('.sub').slideDown();
    $(this).parent().siblings().find('.sub').slideUp();
})
    
    
$('.m_tit li').on('click',function(){
    var id=$(this).index();
    $(this).addClass('b_on').siblings().removeClass('b_on');
    $('.m_box').eq(id).show().siblings().hide();
    
})//m_tit li
    

    

    
});//오픈