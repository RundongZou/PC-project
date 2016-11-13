/**
 * Created by Administrator on 2016/11/12.
 */
window.onload = function () {
    $(".btn").click(function(){
        if($.cookie("account")){
            var arr =  $.cookie("account").split("|");
            //console.log(arr);
            for(var i = 0;i<arr.length;i++){
                var subArr = arr[i].split("&");
                //console.log(subArr);
                if($(".userName").val()==subArr[0]){
                    if($(".userPassword").val()==subArr[1]){
                        window.location.href="index.html";
                        //wrong($(".acInp"),".hint1");
                        // $(".userId .hint .hint_span").html("该用户名已注册");
                        break;
                    }else{
                        alert("密码错误！");
                        break;
                    }

                }
            }
        }
    })

}
