window.onload = function(){
	var right_userName = /^[a-zA-Z][a-zA-Z_0-9]{6,18}$/;
	$(".cha").click(function(){
		//alert("1")
		$(this).prev().val('');
	});


	function wrong(a,b){
		$(a).css({
				"border":"1px solid #fa5b5b"
			});
			$(b).css({
				"display":"block",
				"color":"#fa5b5b"
			});
		$(b).animate({"padding-left":"20px"},100).animate({"padding-left":"0px"},100).animate({"padding-left":"20px"},100).animate({"padding-left":"0px"},100).animate({"padding-left":"20px"},100).animate({"padding-left":"0px"},100).animate({"padding-left":"20px"},100).animate({"padding-left":"10px"},100);
	}
	//-----------------------------------------账号
	$(".acInp").blur(function(){
		if(right_userName.test($(this).val())){
			$(this).css({
				"border":"1px solid #cbcbcb"
			})
			$(".hint1").css({
				"display":"block",
				"color":"limegreen"
			});
			$(".userId .hint .iconfont").html("&#xe62d;");
			$(" .hint1 .hint_span").html("");
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
	//-----------------------------------密码
	
	$(".inp_password").blur(function(){
		var level = 0;
		if($(this).val().length >= 6 && $(this).val().length <= 20){
				
				var right_number = /\d+/;  //数字
				var right_letter = /[a-zA-Z]/; //字母
				var right_other = /[_]+/  //下划线
				var level = 0;
				if(right_number.test($(".inp_password").val())){
					level++;	
				}
				if(right_letter.test($(".inp_password").val())){
					level++;
				}
				if(right_other.test($(".inp_password").val())){
					level++;
				}
				switch(level){
					case 0:
					wrong($(".inp_password"),".hint2");
					$(" .hint2 .hint_span").html("密码须由6-16个字符组成，区分大小写");
					break;
					case 1:
					wrong($(".inp_password"),".hint2");
					$(" .hint2 .hint_span").html("密码过于简单，请重新设置");
					break;
					case 2:
					$(this).css({
						"border":"1px solid #cbcbcb"
					})
					$(".hint2").css({
						"display":"block",
						"color":"limegreen"
					});
					$(".password .hint2 .iconfont").html("&#xe62d;");
					$(" .hint2 .hint_span").html("");
					break;
					case 3:
					$(this).css({
						"border":"1px solid #cbcbcb"
					})
					$(".hint2").css({
						"display":"block",
						"color":"limegreen"
					});
					$(".password .hint2 .iconfont").html("&#xe62d;");
					$(" .hint2 .hint_span").html("");
					break;
				};
			}
		else{
				wrong($(".inp_password"),".hint2");
				$(" .hint2 .hint_span").html("密码须由6-16个字符组成，区分大小写");	
			}
	})
	
	
	//------------------------------密码确认
	$(".inp_passwordCon").blur(function(){
		if($(this).val()==$(".inp_password").val()){
			if($(this).val()==''){
				wrong($(".inp_passwordCon"),".hint3");
				$(" .hint3 .hint_span").html("密码不能为空");
			}else{
				$(this).css({
					"border":"1px solid #cbcbcb"
				})
				$(".hint3").css({
					"display":"block",
					"color":"limegreen"
				});
				$(".passwordConfirm .hint3 .iconfont").html("&#xe62d;");
				$(" .hint3 .hint_span").html("");
			}
						
		}else{
			wrong($(".inp_passwordCon"),".hint3");
			$(" .hint3 .hint_span").html("密码不一致");
		}
	})
	
	
	
}
