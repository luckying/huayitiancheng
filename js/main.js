
$(document).ready(function(){
    
    /*轮播菜单*/
	var banner=$("#banner"),
	    ul=banner.find("ul"),
	    btn=banner.find(".btn span"),
	    oneWidth=ul.find("li").eq(0).width(),
	    timer=null,
	    iNow=0;

    btn.on("click",function(){
    	var me=$(this),
    	    index=me.index();
    	iNow=index;    
    	btn.removeClass('active');
    	me.addClass('active');
    	ul.animate({
    		"left":-oneWidth*iNow
    	})
    })
    
    autoPlay();

    function autoPlay(){
    	timer=setInterval(function(){
	    	iNow++;
	    	if(iNow>btn.length-1){
	    		iNow=0;
	    	}
	    	btn.eq(iNow).trigger("click")
	    },2000)
    }

    banner.hover(function(){
        clearInterval(timer);
    },autoPlay)
    
    /*下拉菜单*/
    var nav=$("#header .h-nav .nav"),
        menu=nav.find(".menu"),
        bSys=false;
    nav.each(function(){
        $(this).mouseenter(function(){
            if(!bSys){
                bSys=!bSys;
                $(this).addClass("on").find(".menu").slideDown(600);
                setTimeout(function(){
                    bSys=!bSys;
                },100)
            }
        })
        $(this).mouseleave(function(){
            $(this).removeClass("on").find(".menu").hide();
        })

    })
    // nav.on("mouseover",function(){
    // 	var me=$(this);
    // 	var index=me.index();
    // 	me.addClass('on');
    // 	menu.eq(index).slideDown('slow');
    // })

    // nav.on("mouseleave",function(){
    // 	var me=$(this);
    // 	var index=me.index();
    // 	me.removeClass("on");
    // 	menu.eq(index).slideUp()
    // }) 


})