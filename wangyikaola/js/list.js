/**
 * Created by Administrator on 2016/11/14.
 */
$.get("js/list.json",function(data){
    for(var i = 0; i < data.length; i++){
        var html1 = '<div'+' class="dd" '+' style="'+'background-image:'+data[i].bg+'">'+
        '<a'+' href="">'+'<img src="'+data[i].imgSrc+'"></a>'+
            '<p'+' class="p1">'+
            '<span'+' class="s1 red">'+data[i].s1+'</span>'+
        '<span'+' class="s2 red">'+data[i].s2+'</span>'+
        '<span'+' class="s3 red">'+data[i].s3+'</span>'+
            '<span'+' class="s4">'+data[i].s4+'</span>'+
        '</p>'+
        '<p'+' class="p2">'+data[i].p2+'</p>'+
        '</div>';


      var html2 =  '<div'+' class="f">'+
        '<a'+' href="">'+'<img src="'+data[i].imgSrc+'"></a>'+
            '<p'+' class="p1">'+data[i].p1+'</p>'+
        '<p'+' class="p2 red">'+data[i].p2+'</p>'+
            '<p'+' class="p3">'+
            '<span'+' class="s1 red">'+data[i].s1+'</span>'+
            '<span'+' class="s2">'+data[i].s2+'</span>'+
            '</p>'+
            '<p'+' class="p4">'+data[i].p4+'</p>'+
        '</div>';


        if(i<13){
            if((i+1)%4==0){
               // alert(i)
                $("#main .zhong div").eq(i).addClass("m0")
               //  $("#main .zhong div").eq(i).css({
               //      "background-color":"red"
               //  });
            }
            $("#main .zhong").append(html1);

        }else{
            $(".cainixihuan .five").append(html2);
        }
    }
})