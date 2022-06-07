$(document).ready(function(){
    //문서가 모두 로딩이 된 다음 해당 구문을 실행시키라고 명령하는 자바스크립트 오프닝 구문
    
    $('nav li').on('click',function(){
   $(this).addClass('on').siblings().removeClass('on');     
    
    var txt=$(this).text();
//    $('#wrap').removeClass('morning afternoon ecening night');
        
        
    
    $('#wrap').removeClass();
    $('#wrap').addClass(txt)
    });
    var now = new Date();
    var hr=now.getHours();//시간
    var min=now.getMinutes();//분
    var sec=now.getSeconds();//초
    if(hr>=5 && hr<=10){
        $('#wrap').removeClass();
        $('#wrap').addClass('morning');
    $('nav li').eq(0).addClass('on').siblings().removeClass('on')
    }else if(hr>=11 && hr<=15){
        $('#wrap').removeClass();
        $('#wrap').addClass('afternoon');
        $('nav li').eq(1).addClass('on').siblings().removeClass('on')
    }else if(hr>=16 && hr<=20){
        $('#wrap').removeClass();
        $('#wrap').addClass('evening');
        $('nav li').eq(2).addClass('on').siblings().removeClass('on')
    }else{
        $('#wrap').removeClass();
        $('#wrap').addClass('night');
        $('nav li').eq(3).addClass('on').siblings().removeClass('on')
    } 
    function clock(){
    var now = new Date();
    var hr=now.getHours();//시간
    var min=now.getMinutes();//분
    var sec=now.getSeconds();//초
        
    
        
        
    if(hr<10){
        hr='0'+hr
    }else if(min<10){
        min='0'+min
    }else if(sec<10){
        sec='0'+sec
    };
       
        
    
  
    
    $('figure p').find('span').eq(0).text(hr);
    $('figure p').find('span').eq(1).text(min);
    $('figure p').find('span').eq(2).text(sec);
    
    }
    
    
    clock();
    setInterval(function(){
        clock();
    },500);
    
  
    
});//오프닝 구문