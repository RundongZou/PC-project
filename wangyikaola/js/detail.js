/**
 * Created by Administrator on 2016/11/15.
 */
$(document).ready(function(){
    //放大镜
    $(".c2").mousemove(function(e){
        e = event || window.event;
        var left= e.offsetX-90;
        var top= e.offsetY-90;
        //这里要好好理解：2*e.offsetX 和 2*e.offsetY是大图片对应的“坐标”，然后用div3的中心坐标减去大图的坐标，就是大图要偏移的距离
        var left2 = 200 - 2*e.offsetX;
        var top2 = 200 - 2*e.offsetY;

        left=Math.max(0,Math.min(left,$(".c2").width()-$(".c3").width()+2));
        top=Math.max(-2,Math.min(top,$(".c2").height()-$(".c3").height()+2));

        //这样做是为了防止出现父元素的底色:
        /*if(left<-400){
         left=-400;
         }
         if(left>0){
         left=0;
         }
         if(top>0){
         top=0;
         }
         if(top<-400){
         top=-400;
         }*/
        left2=Math.max(-400,Math.min(left2,0));
        top2=Math.max(-400,Math.min(top2,0));

        $(".c3").css("left",left+"px");
        $(".c3").css("top",top+"px");

        $(".bigpic").css("left",left2+"px");
        $(".bigpic").css("top",top2+"px");

    }).mouseenter(function(){
        $(".div3").show();
        $(".c3").show();
    }).mouseleave(function(){
        $(".div3").hide();
        $(".c3").hide();
    })
})