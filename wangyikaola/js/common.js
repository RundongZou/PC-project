window.onload = function(){
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
});
$("#headerWrap").mouseenter(function(){
	$("#bannerList").hide();
});


	
}
