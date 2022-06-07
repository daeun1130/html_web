$(document).ready(function(){
    
    
    
    $('.all_btn').on('click',function(){
        $('nav').animate({'left':'0'},1000)
    })//all_btn
    
    $('.close').on('click',function(){
        $('nav').animate({'left':'-100%'},1000)
    })//all_btn
    
    $('.pc_srch').on('click',function(){
        $('.srch').slideToggle({})
    
    })//.pc_srch
    
    
    $('#keyword').on('focus',function(){
        $(this).animate({'width':335});
    }).on('blur',function(){
        $(this).animate({'width':200});
    });
    
    $(document).on('keyup',function(e){
        var k=e.keyCode;
        //keyCode 13번 엔터,27번 esc
        if(k == 13){
            $('.srch').slideDown();
        }if(k==27){
            $('.srch').slideUp();
        }
    })
    
    
    //focus
    
    var wt=$(window).width();
    if(wt>=1261){
        $('#keyword').on('focus',function(){
            $(this).animate({'width':335});
        }).on('blur',function(){
            $(this).animate({'width':200})
        })
    }//1261
    
    
}else if(wt<1261){
    
    $('#keyword').show();
    $('#keyword').off();//이벤트제거
}
    
  

$(window).on('resize',function(){
       
    $('#keyword').on('focus',function(){
        $(this).animate({'width':335});
    }).on('blur',function(){
        $(this).animate({'width':200});
    });
    
    $(document).on('keyup',function(e){
        var k=e.keyCode;
        //keyCode 13번 엔터,27번 esc
        if(k == 13){
            $('.srch').slideDown();
        }if(k==27){
            $('.srch').slideUp();
        }
    })
    
    
    //focus
    
    var wt=$(window).width();
    if(wt>=1261){
        $('#keyword').on('focus',function(){
            $(this).animate({'width':335});
        }).on('blur',function(){
            $(this).animate({'width':200})
        })
    }//1261
    
    
}else if(wt<1261){
    
    $('.srch').show();
    $('#keyword').off();//이벤트제거
    $(document).off('keyup');
}
    
    
    
    
    
    
     
});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})//오프닝구문