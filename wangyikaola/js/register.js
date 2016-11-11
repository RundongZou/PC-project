window.onload = function(){
	var right_userName = /^[a-zA-Z][a-zA-Z_0-9]{6,18}$/;
	$(".cha").click(function(){
		//alert("1")
		$(this).prev().val('');
	});
	$(document).keydown(function(){
		$(".acInp").css({
			"font-weight":"bold"
		})
	})

	function wrong(a,b){
		$(a).css({
				"border":"1px solid #fa5b5b"
			});
			$(".userId .hint").css({
				"display":"block",
				"color":"#fa5b5b"
			});
		$(b).animate({"padding-left":"20px"},100).animate({"padding-left":"0px"},100).animate({"padding-left":"20px"},100).animate({"padding-left":"0px"},100).animate({"padding-left":"20px"},100).animate({"padding-left":"0px"},100).animate({"padding-left":"20px"},100).animate({"padding-left":"0px"},100).animate({"padding-left":"20px"},100).animate({"padding-left":"10px"},100);
	}
	$(".acInp").blur(function(){
		if(right_userName.test($(this).val())){
			$(this).css({
				"border":"1px solid #cbcbcb"
			})
			$(".userId .hint").css({
				"display":"block",
				"color":"limegreen"
			});
			$(".userId .hint .iconfont").html("&#xe62d;");
		}else if($(this).val().length<6||$(this).val().length>18){
			wrong($(this),".hint1");
			$(".userId .hint .hint_span").html("账号需由6-18个字符组成");
			
		}else if($(this).val()[0]>=0&&$(this).val()[0]<=9){
			wrong();
			$(".userId .hint .hint_span").html("账号需由字母开头");
		}else{
			wrong();
			$(".userId .hint .hint_span").html("请用字母、数字或下划线命名");
		}
	})
}
