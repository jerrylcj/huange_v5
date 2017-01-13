$(document).ready(function(e) {
	
//index_change
function index_change(Id,MaxW,MinW){
	var htmls='<div class="changeMin" style="display:block;position:relative;">'+$(Id).html()+'</div>';
	$(Id).html(htmls);
	function cch(){
	if($(window).width()>MaxW){
		$(Id).css("width",MaxW);
		$(Id).find(".changeMin").css("left",0);}
	if(MaxW>=$(window).width()&&$(window).width()>=MinW){
		$(Id).css("width",$(window).width());
		$(Id).find(".changeMin").css("left",-(MaxW-$(window).width())/2);}
	if($(window).width()<MinW){
		$(Id).css("width",MinW);
		$(Id).find(".changeMin").css("left",-300);}	
	};
	var ua = /\d/g.exec(navigator.userAgent.toLowerCase().match(/msie ([\d.]+)/ig));	
	if(ua!=null&&ua<7){
	   }else{
		cch();
	$(window).resize(function(){
		cch();
		});   
	   };
}
index_change("#index_change",1920,1000);



//img
var pro=1;//保存自动轮播下一张元素
var pro_dang=0;//保存手动轮播上一张元素
var flog=true;
//初始式样
$(".img_max li").css("opacity",0);if(ua!=null&&ua<8){$(".img_max li").css("opacity",1);}
$(".img_max li").eq(0).animate({'opacity' :1});
$(".img_min li").find("a").css("opacity",0);
$(".img_min li").find("a").eq(0).css("opacity",1);
 var qie=function(munber){//切换式样
	 var pro_=munber%$(".img_max li").length;
	$(".img_min li").eq(pro_dang).find("a").animate({'opacity' :0},600);
	$(".img_min li").eq(pro_).find("a").animate({'opacity' :1},400);
	if(ua!=null&&ua<8){
		$(".img_max li").eq(pro_dang).css("z-index","5");
		$(".img_max li").eq(pro_).css("z-index","10");
       }else{
 		$(".img_max li").eq(pro_dang).css("z-index","5").animate({'opacity' :0},600);
		$(".img_max li").eq(pro_).css("z-index","10").delay(200).animate({'opacity' :1},400);
       }  
	
 }
for(i=0;i<$(".img_min li").length;i++){
	$(".img_min li").eq(i).click(function(){
	pro_dang=(pro-1)%$(".img_max li").length;
	qie($(this).index());	
	pro=$(this).index()+1;
	})
	}		
var pro_d=function(){//定时自动轮播器
	pro_dang=(pro-1)%$(".img_max li").length;
	qie(pro);
	pro++;
	};	
var timer=setInterval(pro_d,6000);
$(".img_min").hover(function(){
	clearInterval(timer)
	},function(){
	timer=setInterval(pro_d,6000)
	});
	
var min_hover=false;
function img_min_on(){
$(".img_min li").eq(0).css("left",100).animate({left:20,bottom:50},function(){
		$(this).animate({left:0,bottom:0});
		})
$(".img_min li").eq(1).animate({bottom:50},function(){
	$(this).animate({bottom:0});
	})
$(".img_min li").eq(2).css("left",-100).animate({left:-20,bottom:50},function(){
	$(this).animate({left:0,bottom:0});
	})
}
function img_min_out(){
	$(".img_min li").eq(0).stop(true,false).animate({left:-100,bottom:-50});
	$(".img_min li").eq(1).stop(true,false).animate({bottom:-50});
	$(".img_min li").eq(2).stop(true,false).animate({left:100,bottom:-50});
}

$("#img").hover(function(){
img_min_on()
},function(){
img_min_out()
});	
	


//left
var ttts=160;
var tttsh=$("#bodyconf_l").height();
var ttth=$("#bodyconf_r").height();
$(window).scroll(function(e) {
	var ttt=$(window).scrollTop()-ttts;
	if(ttt>ttts&&ttth>tttsh){
		if(ttt>(ttth-tttsh)){ttt=ttth-tttsh}
		$("#bodyconf_l").stop(true,false).delay(200).animate({top:ttt-ttts},{easing:"easeOutQuart",duration:1000});
		$(".bodyconf_l_bg").stop(true,false).animate({opacity:0});
	}else if(ttth>tttsh){
		$("#bodyconf_l").stop(true,false).delay(200).animate({top:-63},{easing:"easeOutQuart",duration:1000});
		$(".bodyconf_l_bg").stop(true,false).delay(300).animate({opacity:1});
	}
});


//newslist
$(".anfintro h2 a").hover(function(){
	$(this).animate({"left":20})
	},function(){
	$(this).stop(true,false).animate({"left":0})
	});
$(".anmore span").hover(function(){
	$(this).animate({"left":20})
	},function(){
	$(this).stop(true,false).animate({"left":48})
	});

//productlist
$(".list_pbox").hover(function(){
	$(this).find("img").delay(100).animate({left:6,top:7,width:214,height:161},300)
	},function(){
	$(this).find("img").stop(true,false).animate({left:10,top:10,width:206,height:155},300)
	});


//zhaoshang
for(i=0;i<$(".zhaoshang_li a").length;i++){
     $(".zhaoshang_li a").eq(i).hover(function(){
		 $(this).find("span").animate({"font-size":22},400);
		 },function(){
			 $(this).find("span").stop(true,false).animate({"font-size":18},300);
			 });
	};	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var ua = /\d/g.exec(navigator.userAgent.toLowerCase().match(/msie ([\d.]+)/ig));	
	if(ua!=null&&ua<7){
	
       }else{
 
       }  






});