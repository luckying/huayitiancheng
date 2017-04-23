
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
        menu=nav.find(".menu");

    nav.on("mouseover",function(){
    	var me=$(this);
    	var index=me.index();
    	me.addClass('on');
    	menu.eq(index).slideDown('slow');
    })

    nav.on("mouseleave",function(){
    	var me=$(this);
    	var index=me.index();
    	me.removeClass("on");
    	menu.eq(index).slideUp()
    }) 


})