$(function(){
    console.log($(".nav>li:eq(2)>a"))
    // 菜单商城按钮
    $(".nav>li:eq(2)>a").click(function(){
        if( $(".nav_insert").css("height")=="0px"){
            $(".nav_insert").css("height","90px")
        }else{
            $(".nav_insert").css("height","0px")
        }
    })
    // 左边顶部右边nav
    $(".left_nav").click(function(){
        console.log($(".talk").css("width"))    
            $(".talk").css("width","100%").css("opacity","1")
    })
    $(".close_talk").click(function(){
        $(".talk").css("width","0%").css("opacity","0")
    })
    //音乐音频
    $(".right_nav_list li:first-child a").click(function(){
        console.log($(".right_nav_list li:first-child i"))
        if($(".right_nav_list li:first-child i").css("animation-play-state")=="paused"){
            $(".right_nav_list li:first-child i").css("animation-play-state","running");
            $(".footer_top span").html("当前正在播放：")
        }else{
            $(".right_nav_list li:first-child i").css("animation-play-state","paused");
            $(".footer_top span").html("已停止播放")
        }
    })
    // 底部背景图片中的x
    $(".bg_img_top a").click(function(){
        $(".bg_img").css("height","0px").css("opacity","0")
    })
    $(".right_nav_list li:eq(1) a").click(function(){
        if($(".bg_img").css("height")=="0px"){
        $(".bg_img").css("height","307px").css("opacity","1")
        }else{
            $(".bg_img").css("height","0px").css("opacity","0")
        }
    })
})