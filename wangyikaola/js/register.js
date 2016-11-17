window.onload = function(){
	var right_userName = /^[a-zA-Z][a-zA-Z_0-9]{5,17}$/;

	//点击叉号，清空input里面的内容
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
	//设置一个变量，如果有一栏符合，那么这个变量的值就加一，如果这个变量达到某个值，就注册成功，把用户信息存到cookie中
	var judge = 0;
	//设置一个字符串，用于cookie的拼接
	var str ;
	//-----------------------------------------账号
	$(".acInp").blur(function(){
		if(right_userName.test($(this).val())){
			judge ++;
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
		if($.cookie("account")){
			var arr =  $.cookie("account").split("|");
			//console.log(arr);
			for(var i = 0;i<arr.length;i++){
				var subArr = arr[i].split("&");
				//console.log(subArr);
				if($(".acInp").val()==subArr[0]){
					wrong($(".acInp"),".hint1");
					$(".userId .hint .hint_span").html("该用户名已注册");
					break;
				}
			}
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
						judge++;
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
						judge++;
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
			judge++;
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

	//手机号
	var phoneNumber = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
	$(".inp_phoneNumber").blur(function(){
		if(phoneNumber.test($(this).val())){
			judge ++;
			$(this).css({
				"border":"1px solid #cbcbcb"
			})
			$(".hint5").css({
				"display":"block",
				"color":"limegreen"
			});
			$(".phone .hint .iconfont").html("&#xe62d;");
			$(" .hint5 .hint_span").html("");
		}else{
			wrong($(this),".hint5");
			$(".phone .hint .hint_span").html("请输入正确的手机号");
		}
	})

	//如果信息都合格可以注册的话，点击注册按钮，就可以注册，同时，把信息存到cookie里面
	$("#btn1").click(function(){
		//alert(judge);
		if(judge >= 4){
			//alert(1);
			//judge = 0;

			var oldStr = $(".acInp").val()+"&"+$(".inp_password").val();
			if($.cookie("account")){
				//alert("ha");
				str = $.cookie("account") +"|" + oldStr;
			}else{
				str = oldStr;
			}
			 $.cookie("account",str,{expires:15,path:"/"});
			alert("恭喜您，注册成功！即将跳转到登录页面~");
			window.location.href="login.html";
		}


	})

	
	
}
