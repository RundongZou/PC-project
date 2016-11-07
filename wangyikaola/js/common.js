window.onload = function(){
	//图片加载不出来 换成动图
//	$("#header img").one("error",function(e){
//		alert("111")
//	});
	
	$("#top #ulLeft .li4").mouseenter(function(){
		$("#top .topApp").show();
	});
	$("#top #ulLeft .li4").mouseleave(function(){
		$("#top .topApp").hide();
	});
	
	$("#top .li_topWeibo").mouseenter(function(){
		$("#top .topWeibo").show();
	});
	$("#top .li_topWeibo").mouseleave(function(){
		$("#top .topWeibo").hide();
	});
	$("#top .li_topWeixin").mouseenter(function(){
		$("#top .topWeixin").show();
	});
	$("#top .li_topWeixin").mouseleave(function(){
		$("#top .topWeixin").hide();
	});
	$("#top .li_topYixin").mouseenter(function(){
		$("#top .topYixin").show();
	});
	$("#top .li_topYixin").mouseleave(function(){
		$("#top .topYixin").hide();
	});
	
		function threeliHide(){
		$("#li3h").hide();
		$("#li3Hover").hide();
		//$("#li3Hover").css("height","0");
		$("#li4h").hide();
		$("#li4Hover").hide();
		//$("#li4Hover").css("height","0");
		$("#li7h").hide();
		$("#li7Hover").hide();
		//$("#li7Hover").css("height","0");
	}
	$("#top #ulRight li").mouseenter(function(){



		if($(this).index() === 6 || $(this).index() === 3 || $(this).index() === 2){
			if($(this).index() === 6){
				$("#li7h").show();
				$("#li7Hover").show();
				//$("#li7Hover").animate({"height":"184px"},700);			
				$("#li4h").hide();
				$("#li4Hover").hide();
				//$("#li4Hover").css("height","0");
				$("#li3h").hide();
				$("#li3Hover").hide();
				//$("#li3Hover").css("height","0");
							
				$("#li7h").rotate({ 
				   bind:   //规定向被选元素添加的一个或多个事件处理程序，以及当事件发生时运行的函数。
				     { 
				        mouseenter : function() { 
				             $(".jiao7").rotate({animateTo:180});
				        },
				        mouseleave : function() { 
				            $(".jiao7").rotate({animateTo:0});
				        }
				     } 
				});
					
			}else if($(this).index() === 2){
				$("#li3h").show();
				$("#li3Hover").show();
				//$("#li3Hover").animate({"height":"212px"},900);
				$("#li4h").hide();
				$("#li4Hover").hide();
				//$("#li4Hover").css("height","0");
				$("#li7h").hide();
				$("#li7Hover").hide();
				//$("#li7Hover").css("height","0");
				$("#li3h").rotate({ 
				   bind:   //规定向被选元素添加的一个或多个事件处理程序，以及当事件发生时运行的函数。
				     { 
				        mouseenter : function() { 
				             $(".jiao3").rotate({animateTo:180},"easeInBounce");
				        },
				        mouseleave : function() { 
				            $(".jiao3").rotate({animateTo:0});
				        }
				     } 
				});
			}else{
				$("#li4h").show();
				$("#li4Hover").show();
				//$("#li4Hover").animate({"height":"68px"},500);
				$("#li3h").hide();
				$("#li3Hover").hide();
				//$("#li3Hover").css("height","0");
				$("#li7h").hide();
				$("#li7Hover").hide();
				//$("#li7Hover").css("height","0");
				$("#li4h").rotate({ 
				   bind:   //规定向被选元素添加的一个或多个事件处理程序，以及当事件发生时运行的函数。
				     { 
				        mouseenter : function() { 
				             $(".jiao4").rotate({animateTo:180});
				        },
				        mouseleave : function() { 
				            $(".jiao4").rotate({animateTo:0});
				        }
				     } 
				});
			}			
		}else{
			threeliHide();
		}
		$("body").mouseleave(function(){
			threeliHide();
		});
	});
	$("#top #li7Hover").mouseleave(function(){
		threeliHide();
	})

//商品分类的各种列表的显示以及隐藏
$("#navWrap #nav li").mouseenter(function(e){
	if($(this).index()==0){
		$("#bannerList").show();	
	}else{
		$("#bannerList").hide();
	}
});
$("#bannerList").mouseleave(function(){
	$("#bannerList").hide();
}).mouseenter(function(){
	isPause = true;
	$("#btnLeft").hide();
	$("#btnRight").hide();
});
$("#headerWrap").mouseenter(function(){
	$("#bannerList").hide();
});

//图片轮播
function imgLunbo(){
	var timer;
	var index = 0;
	var index2 = 0;
	var isPause = false;
	
	function imgIncrease(){
		$("banner ul li img").eq(index).fadeOut(1000);
			$("#btnBottom li").eq(index2).removeClass("liRed");//3
			if(index>=4){
				index = 0;
			}
			if(index2>2){
				index2 = -1;
			}
			$("banner ul li img").eq(index+1).fadeIn(1000);
			$("#btnBottom li").eq(index2+1).addClass("liRed");//3
			index++;
			index2++;
	}
	function imgDecrease(){
		$("banner ul li img").eq(index).fadeOut(1200);
			$("#btnBottom li").eq(index2).removeClass("liRed");//3
			if(index<=0){
				index = 4;
			}
			if(index2<=-1){
				index2 = 3;
			}
			$("banner ul li img").eq(index-1).fadeIn(1200);
			$("#btnBottom li").eq(index2-1).addClass("liRed");//3
			index--;
			index2--;
	}
	
	timer = setInterval(function(){	
		if(!isPause){
			imgIncrease();			
		}
			
	},3000)
	
	$("banner").mouseenter(function(){
		isPause = true;
		$("#btnLeft").show();
		$("#btnRight").show();
	}).mouseleave(function(){
		isPause = false;
		$("#btnLeft").hide();
		$("#btnRight").hide();
	});
	//点击左右按钮切换
	$("#btnLeft").click(function(){		
		imgDecrease();
	});
	$("#btnRight").click(function(){	
		imgIncrease();
	})
	//点击小圆点切换
	$("#btnBottom li").click(function(){
		isPause = true;
		$(this).addClass("liRed").siblings().removeClass("liRed");
		index = $(this).index();
		index2 = $(this).index()-1;
		$("banner ul li img").eq(index).fadeIn(1000).siblings().fadeOut();
//		$("banner ul li img").eq(index).fadeOut(1000);
//		$("banner ul li img").eq(index+1).fadeIn(1000).siblings().fadeOut();
		if(index>4){
			index = 0;
		}
	})
}

imgLunbo();


//bannerList 列表详情页
function allHide(){
	$("#muyingertong").hide();
	$("#meirongcaizhuang").hide();
	$("#fushixiebao").hide();
	$("#jiajushenghuo").hide();
	$("#yingyangbaojian").hide();
	$("#haiwaizhiyou").hide();
	$("#shumajiadian").hide();
	$("#huanqiumeishi").hide();
	$("#yundonghuwai").hide();
	$("#shuiguoshengxian").hide();
}
$("#bannerList li").mouseenter(function(){
	if($(this).index() == 0){
		
		$("#muyingertong").show();
		$("#meirongcaizhuang").hide();
		$("#fushixiebao").hide();
		$("#jiajushenghuo").hide();
		$("#yingyangbaojian").hide();
		$("#haiwaizhiyou").hide();
		$("#shumajiadian").hide();
		$("#huanqiumeishi").hide();
		$("#yundonghuwai").hide();
		$("#shuiguoshengxian").hide();
		
	}else if($(this).index() == 1){
		
		$("#muyingertong").hide();
		$("#meirongcaizhuang").show();
		$("#fushixiebao").hide();
		$("#jiajushenghuo").hide();
		$("#yingyangbaojian").hide();
		$("#haiwaizhiyou").hide();
		$("#shumajiadian").hide();
		$("#huanqiumeishi").hide();
		$("#yundonghuwai").hide();
		$("#shuiguoshengxian").hide();
		
	}else if($(this).index() == 2){
		
		$("#muyingertong").hide();
		$("#meirongcaizhuang").hide();
		$("#fushixiebao").show();
		$("#jiajushenghuo").hide();
		$("#yingyangbaojian").hide();
		$("#haiwaizhiyou").hide();
		$("#shumajiadian").hide();
		$("#huanqiumeishi").hide();
		$("#yundonghuwai").hide();
		$("#shuiguoshengxian").hide();
		
	}else if($(this).index() == 3){
		
		$("#muyingertong").hide();
		$("#meirongcaizhuang").hide();
		$("#fushixiebao").hide();
		$("#jiajushenghuo").show();
		$("#yingyangbaojian").hide();
		$("#haiwaizhiyou").hide();
		$("#shumajiadian").hide();
		$("#huanqiumeishi").hide();
		$("#yundonghuwai").hide();
		$("#shuiguoshengxian").hide();
		
	}else if($(this).index() == 4){
		
		$("#muyingertong").hide();
		$("#meirongcaizhuang").hide();
		$("#fushixiebao").hide();
		$("#jiajushenghuo").hide();
		$("#yingyangbaojian").show();
		$("#haiwaizhiyou").hide();
		$("#shumajiadian").hide();
		$("#huanqiumeishi").hide();
		$("#yundonghuwai").hide();
		$("#shuiguoshengxian").hide();
		
	}else if($(this).index() == 5){
		
		$("#muyingertong").hide();
		$("#meirongcaizhuang").hide();
		$("#fushixiebao").hide();
		$("#jiajushenghuo").hide();
		$("#yingyangbaojian").hide();
		$("#haiwaizhiyou").show();
		$("#shumajiadian").hide();
		$("#huanqiumeishi").hide();
		$("#yundonghuwai").hide();
		$("#shuiguoshengxian").hide();
		
	}else if($(this).index() == 6){
		
		$("#muyingertong").hide();
		$("#meirongcaizhuang").hide();
		$("#fushixiebao").hide();
		$("#jiajushenghuo").hide();
		$("#yingyangbaojian").hide();
		$("#haiwaizhiyou").hide();
		$("#shumajiadian").show();
		$("#huanqiumeishi").hide();
		$("#yundonghuwai").hide();
		$("#shuiguoshengxian").hide();
		
	}else if($(this).index() == 7){
		
		$("#muyingertong").hide();
		$("#meirongcaizhuang").hide();
		$("#fushixiebao").hide();
		$("#jiajushenghuo").hide();
		$("#yingyangbaojian").hide();
		$("#haiwaizhiyou").hide();
		$("#shumajiadian").hide();
		$("#huanqiumeishi").show();
		$("#yundonghuwai").hide();
		$("#shuiguoshengxian").hide();
		
	}else if($(this).index() == 8){
		
		$("#muyingertong").hide();
		$("#meirongcaizhuang").hide();
		$("#fushixiebao").hide();
		$("#jiajushenghuo").hide();
		$("#yingyangbaojian").hide();
		$("#haiwaizhiyou").hide();
		$("#shumajiadian").hide();
		$("#huanqiumeishi").hide();
		$("#yundonghuwai").show();
		$("#shuiguoshengxian").hide();
		
	}else if($(this).index() == 9){
		
		$("#muyingertong").hide();
		$("#meirongcaizhuang").hide();
		$("#fushixiebao").hide();
		$("#jiajushenghuo").hide();
		$("#yingyangbaojian").hide();
		$("#haiwaizhiyou").hide();
		$("#shumajiadian").hide();
		$("#huanqiumeishi").hide();
		$("#yundonghuwai").hide();
		$("#shuiguoshengxian").show();
		
	}
});
$("banner").mouseenter(function(){
	allHide();
})
$("#muyingertong").mouseenter(function(){
	$("#bannerList").show();
});
$("#meirongcaizhuang").mouseenter(function(){
	$("#bannerList").show();
});
$("#fushixiebao").mouseenter(function(){
	$("#bannerList").show();
});
$("#jiajushenghuo").mouseenter(function(){
	$("#bannerList").show();
});
$("#yingyangbaojian").mouseenter(function(){
	$("#bannerList").show();
});
$("#haiwaizhiyou").mouseenter(function(){
	$("#bannerList").show();
});
$("#shumajiadian").mouseenter(function(){
	$("#bannerList").show();
});
$("#huanqiumeishi").mouseenter(function(){
	$("#bannerList").show();
});
$("#yundonghuwai").mouseenter(function(){
	$("#bannerList").show();
});
$("#shuiguoshengxian").mouseenter(function(){
	$("#bannerList").show();
});
	
	
}
