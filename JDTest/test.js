$(function(){
    //关闭顶部广告
    $("#closeadimg").click(function(){
        $("#topad").hide();
        $("#topadbg").css("display","none");
        $("#topnavline").css("top","0");
        $("#jdlogo").css("top","0");
    });
    //弹出位置选择框
    $("#addr").on({
        mouseenter: function(){
            $("#someposition").show();
        },
        mouseleave: function(){
            $("#someposition").hide();
        }
    });
    //我的京东导航下拉框
    $("#myJD").on({
        mouseenter: function(){
            $("#JDdropmenu").show();
        },
        mouseleave: function(){
            $("#JDdropmenu").hide();
        }
    });
     //手机京东导航下拉框
     $("#phoneJD").on({
        mouseenter: function(){
            $("#erweimacontent").show();
        },
        mouseleave: function(){
            $("#erweimacontent").hide();
        }
    });
    //左边导航栏弹出框
    var menuli=$(".breadcrumb");
    menuli.hover(function(){
        $(".rightmenu").show();
    })
    $(".midcontent").mouseleave(function(){
        $(".rightmenu").hide();
    })
    // 轮播部分
    var index=1;
    var imgs=$("#slideimg li");
    var len=imgs.length;
    var button=$("#slidebutton span");

    function initSet(index){
        for(var i=0;i<len;i++){
            imgs.eq(i).fadeOut(500);
            button.eq(i).removeClass("slidepointselect");
        }
        imgs.eq(index).fadeIn(500);
        button.eq(index).addClass("slidepointselect");
    }
    function autoPlay(){
        if(index==len){
            index=0;
        }
        initSet(index);
        index++;
    }
    var scollMove=setInterval(autoPlay,2000);
    button.eq(0).mouseenter(function(){
        clearInterval(scollMove);
        index=0;
        initSet(index);
        index++;
        scollMove=setInterval(autoPlay,2000);
    });
    button.eq(1).mouseenter(function(){
        clearInterval(scollMove);
        index=1;
        initSet(index);
        index++;
        scollMove=setInterval(autoPlay,2000);
    });
    button.eq(2).mouseenter(function(){
        clearInterval(scollMove);
        index=2;
        initSet(index);
        index++;
        scollMove=setInterval(autoPlay,2000);
    });
    button.eq(3).mouseenter(function(){
        clearInterval(scollMove);
        index=3;
        initSet(index);
        index++;
        scollMove=setInterval(autoPlay,2000);
    });
    button.eq(4).mouseenter(function(){
        clearInterval(scollMove);
        index=4;
        initSet(index);
        index++;
        scollMove=setInterval(autoPlay,2000);
    });
    button.eq(5).mouseenter(function(){
        clearInterval(scollMove);
        index=5;
        initSet(index);
        index++;
        scollMove=setInterval(autoPlay,2000);
    });
    button.eq(6).mouseenter(function(){
        clearInterval(scollMove);
        index=6;
        initSet(index);
        index++;
        scollMove=setInterval(autoPlay,2000);
    });
    button.eq(7).mouseenter(function(){
        clearInterval(scollMove);
        index=7;
        initSet(index);
        index++;
        scollMove=setInterval(autoPlay,2000);
    });
    $("#leftbutton").click(function(){
        clearInterval(scollMove);
        if(index==0){
            index=len;
        }
        index-=2;
        initSet(index);
        index++;
        scollMove=setInterval(autoPlay,4000);
    })
    $("#rightbutton").click(function(){
        clearInterval(scollMove);
        autoPlay();
        scollMove=setInterval(autoPlay,4000);
    })

    //个人信息里促销公告切换部分
    $("#mytaball a").mousemove(function(){
        $(this).tab('show');
        $("#mytaball a").removeClass("mytab");
        $(this).not(".not").addClass("mytab");
    })
    
});