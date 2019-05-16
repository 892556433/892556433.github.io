$(function() {
    var indexUsJs = new IndexUsJs();
    indexUsJs.init();
});

//获取url中的参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}

var num = [0,0,0,0,0];
function IndexUsJs() {};
$.extend(IndexUsJs.prototype, {
    init: function() {
        let That = this;
        this.listClick();
        this.listHover();
    },

    listClick: function() {
        $(".index-us").addClass("nav-hover-top1");
        $(".index-list-top").on("click", function() {
            var i = $(this).attr("listid");
            num[i] += 45;
            console.log(num[i]);
            $(this).children(".index-list-icon").rotate({
                animateTo: num[i]
            });
            $(this).siblings().stop().slideToggle(500);
        });
    },

    listHover: function() {
        $(".gsjj-img").hover(function(){
            $(".mask").show();
            $(".gsjj-img").css({
                "border": "6px solid #2b73ef",
                "top": "0",
                "left": "0",
            });
            $(".gsjj-img2").stop().animate({bottom:"60px"});
        },function() {
            $(".mask").hide();
            $(".gsjj-img").css({
                "border": "none",
                "top": "6px",
                "left": "6px",
            });
            $(".gsjj-img2").stop().animate({bottom:"-168px"});
        });
    },
});
