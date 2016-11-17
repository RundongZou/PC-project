/**
 * Created by Administrator on 2016/11/16.
 */
$(document).ready(function(){
    $("#gouwu").html('');
    var val = parseInt($.cookie("product"));
    var total = val*299;


    var html =  '<input'+' class="inp3" type="checkbox" value="">'+
        '<a'+' href="detail.html">'+'<img'+' class="img1" src="img_cart/22243f6a-a909-4e99-b4dd-a7b797cd7f38.jpg">'+'</a>'+
        '<a'+' class="txt" href="detail.html">'+'预售 2016年 第十届暴雪嘉年华 七合一纪念限量礼盒'+'</a>'+
    '<span'+' class="s1">'+'399.00'+'</span>'+
        '<span'+' class="s2">'+'299.00'+'</span>'+
        '<button'+' class="btn1" id="jian">'+'</button>'+
        '<input'+' id="inp4" type="text" value="'+val+'">'+
        '<button'+' class="btn2" id="jia">'+'</button>'+
        '<span'+' class="s3" id="total1">'+total+'</span>'+
        '<a'+' class="delete" id="delete" href="detail.html">'+"删除"+'</a>'+
        '<a'+' class="collect" href="">'+"移入我的收藏"+'</a>';

    var html2=    '<ul'+' class="d4">'+
        '<li'+' class="li1">'+"活动优惠：-¥"+'<span>'+"0.00"+'</span>'+'</li>'+
    '<li'+' class="li2">'+"商品应付总计："+'<span'+'  id="total2">'+total+'</span>'+'</li>'+
    '<li'+' class="li3">'+"预估税费：¥"+'<span>'+"0.00"+'</span>'+'</li>'+
    '</ul>'+
    '<div'+' class="d5">'+
        '<input'+' class="inp5" type="checkbox" value="">'+
        '<span'+' class="s1">'+"全选"+'</span>'+
        '<a'+' href="">'+"删除选中商品"+'</a>'+
        '<p'+' class="p1">'+"已选商品  "+'<span'+' class="red num1" id="num1">'+val+'</span>'+"  件"+'</p>'+
        '<p'+' class="p2">'+'<span>'+"总价(不含运费)："+
    '</span>'+'<span'+'  class="red">'+"¥"+'</span>'+'<span'+' class="red num2" id="total3">'+total+'</span>'+'</p>'+
        '<ul>'+
        '<li'+' class="li1">'+"活动优惠：-¥"+'<span>'+"0.00"+'</span></li>'+
    '<li'+' class="li2">'+"商品应付总计："+'<span'+' id="total4">'+total+'</span></li>'+
    '<li'+' class="li3">'+"商品税费：¥"+'<span>'+"0.00"+'</span></li>'+
    '</ul>'+
    '<p'+' class="jiesuan" id="jiesuan">'+"去结算"+'</p>';


    $("#gouwu").html(html);
    $("#main").append(html2);



    $("#jia").click(function(){

        if(parseInt($("#inp4")[0].value)<99){
            $("#inp4")[0].value=parseInt($("#inp4")[0].value)+1;
        }else{
            $("#inp4")[0].value = 99;
        }
        var tota = (parseInt($("#inp4")[0].value)*299);
        $("#total1").html(tota);
        $("#total2").html(tota);
        $("#total3").html(tota);
        $("#total4").html(tota);

        var productStr = parseInt($("#inp4")[0].value);
        $("#num1").html(productStr);
        $.cookie("product",productStr,{expires:15,path:"/"});

    });
    $("#jian").click(function(){

        if(parseInt($("#inp4")[0].value)>99){
            $("#inp4")[0].value = 99;
        }
        if(parseInt($("#inp4")[0].value)>1){
            $("#inp4")[0].value=parseInt($("#inp4")[0].value)-1;
        }else{
            $("#inp4")[0].value = 1;
        }
        var tota = (parseInt($("#inp4")[0].value)*299);
        $("#total1").html(tota);
        $("#total2").html(tota);
        $("#total3").html(tota);
        $("#total4").html(tota);
        var productStr =parseInt($("#inp4")[0].value);
        $("#num1").html(productStr);
        $.cookie("product",productStr,{expires:15,path:"/"});
    });


    $("#delete").click(function(){
        $("#gouwu").html('');
        $("#main").html('');
       // $.removeCookie("product",{path:"/"});
        window.location.href="detail.html";

    })

    $("#jiesuan").click(function(){
        alert("结算成功，即将返回首页~");
        window.location.href="index.html";
    })





})
