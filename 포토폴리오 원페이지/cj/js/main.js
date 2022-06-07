$(document).ready(function(){
//    $('a').on('click',function(e){
//        e.preventDefault();
//    })
    
    $('.family').on('click',function(){
       $(this).toggleClass('on'); 
        
    });
    
    $('.f_pop a').on('click',function(e){
            e.preventDefault();
            var txt = $(this).text();
            $('.select').text(txt);
                    
    });
    
    
          bxx = $('.sld_box_wrap').bxSlider({
            'pager':false,
            'controls':false,
            
        });
      
    
    
    $(window).on('scroll',function(){
        var sctop = $(this).scrollTop();
        if(sctop > 119){
            $('.f_btn').addClass('on');
        }
        else{
            $('.f_btn').removeClass('on');
        }
    })
    
     $('.s2_slide_mo').slick({
  centerMode: true,
  slidesToShow: 3,
  autoplay: 'true',
  dots: true,
  autoplayspeed: 1000,      
  responsive: [
    {
      breakpoint: 800,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 500,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
});
    
    //s2 영역
  $('.s2_slide_pc').slick({
  dots : true,    
  centerMode: true,
  slidesToShow: 5,
  autoplay: 'true',
  autoplayspeed: 1000,
      
  responsive: [
    {
      breakpoint: 800,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 500,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
});
     //s2 영역
    
    
    var wt = $(window).width();    
        if(wt >=320 && wt<1200){

             mo();
        }else if(wt>=1200){
             pc();

        }

    var mql = window.matchMedia("screen and (min-width:320px)");
    mql.addListener(function(e){
        if(!e.matches){
            bxx.reloadSlider();
        }
    })
    
    
    
    
    $(window).on('resize',function(){
        var wt = $(window).width();
        if(wt >=320 && wt<1200){
            
             mo();
        }else if(wt>=1200){
                        btnname = $('.s1_btn button').filter('.on').index();

             pc();

        }
    })
    
        $('.s1_btn button').on('click',function(){

            s1btn = $(this).index();
//            btnname = $('.s1_btn button').filter('.on').index();
        $('.product').children().eq(s1btn).addClass('on').siblings().removeClass('on');
            $(this).addClass('on').siblings().removeClass('on');
            $('.bx_sld').eq(s1btn).addClass('on').siblings().removeClass('on');
            bxx.reloadSlider();
            
        });
        //s1 버튼부분
        
    
    
    function mo(){
        $('.pc_gnb_sub').hide();// gnb_sub가 나와있는 상태에서 창을 줄일경우도 있어서

        
        
        $('.m_all_btn').on('click',function(){
            $('nav').show();
        });
        $('.m_close_btn').on('click',function(){
            $('nav').hide();
        });
        
        $('.main_gnb>li>a').on('click',function(){
            $(this).parent().addClass('on').siblings().removeClass('on');
        })
        
        
        
    }
    
    
    function pc(){
        $('nav').hide();//모바일 nav hide nav 켜놓고 창크기 늘릴때 대비
            btnname = $('.s1_btn button').filter('.on').index();

        $('.main_gnb>li').removeClass('on');
        
        $('.since_left ul li').on('click',function(){
            
            
            lli= $(this).index();
            for(i=0; i<=lli; i++){
            $(this).parents('.since_left').children('.s1_since_dot').find('li').eq(i).addClass('on').next().removeClass('on').next().removeClass('on').next().removeClass('on');
            }
            
            $(this).parents('.since_left').children('.s1_since_txt').find('li').eq(lli).addClass('on').siblings().removeClass('on');
            
            $(this).parents('.since_left').siblings('.img_box_wrap').children().eq(lli).addClass('on').siblings().removeClass('on');
            
            $(this).parents('.since_left').children('.s1_since_dot').find('li').eq(lli).addClass('active').siblings().removeClass('active')
            
            
        })
        //s1 왼쪽 바
        
        $('.pc_gnb').on('mouseenter',function(){
            $('.pc_gnb_sub').stop().slideDown();
        })
        $('.pc_gnb_sub').on('mouseleave',function(){
            $('.pc_gnb_sub').stop().slideUp();
        })
        
        
        $('section').on('mousewheel',function(e,d){
            if(d>0){
                var prv = $(this).prev().offset().top;
                $('html,body').stop().animate({'scrollTop':prv},1000);
                
                
                //마우스휠을 올렸을때 일어나는 일
            }else if(d<0){
                var ntx = $(this).next().offset().top;
                $('html,body').stop().animate({'scrollTop':ntx},1000);
                //마우스휠을 내렸을때 일어나는 일
            }
        });
        $('.main_bn').on('mousewheel',function(e,d){
            vvar = $('header').offset().top;
            if(d>0){
                var prv = $(this).prev().offset().top;
                $('html,body').stop().animate({'scrollTop':prv},1000);
                //마우스휠을 올렸을때 일어나는 일
            }else if(d<0){
                if(vvar == 0){
                var ntx = $(this).next().offset().top;
                $('html,body').stop().animate({'scrollTop':ntx},1000);
                //마우스휠을 내렸을때 일어나는 일
                }
            }
        });
        
  
        
        
//        for(i=1; i<5; i++){
//            for(j=1; j<5; j++){
//            $('.hat'+i ,' .slot'+j).jSlots({
//            number : 1,
//            spinner : '#hat'+j,
//            easing : 'easeOutSine',
//            time : 7000,
//            loops : i+2,
//            
//        });     
//            }
//        }
        
        
        
//         $('.since_left ul li').each(function(){
//         
//      
//         
//         
//               var i = $(this).index();
//          
//             if($(this).hasClass('on')){
//             
//               var str;
//                    switch(i){
//                     case 0 : str = 1;
//                     break;
//                    
//                    
//                    }
//        
//                
//             $('.slot1').jSlots({
//            number : str,
//            easing : 'easeOutSine',
//            time : 7000,
//            loops : 5,
//            
//             });
//        
//               $('.slot2').jSlots({
//            number : str,
//            easing : 'easeOutSine',
//            time : 7000,
//            loops : 5,
//            
//             });
//                 
//                 $('.slot3').jSlots({
//            number : str,
//            easing : 'easeOutSine',
//            time : 7000,
//            loops : 5,
//            
//             });
//                 
//                 $('.slot4').jSlots({
//            number : str,
//            easing : 'easeOutSine',
//            time : 7000,
//            loops : 5,
//            
//             });
//                 
//                 
//                 
//                 
//                 
//                 
//             
//             }
//             
//         
//          
//         })
        
        
        
        
        
        
        
     
    
    
    
    
    }
    
    
    
    
   
    
    
    
    
    
    
    
    
    
    
    
})