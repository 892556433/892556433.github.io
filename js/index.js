$(function() {
    var indexJs = new IndexJs();
    indexJs.init();
    advantageListClick();
    videoClick();
});

function IndexJs() {};
$.extend(IndexJs.prototype, {
    init: function() {
        let That = this;
        this.indexLogin();
        this.advantageListsClick();
        this.maskIndexClick();
        this.videoLogin();
    },

    indexLogin: function() {
        // 判断是否跳转
        //window.location.href = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? "https://www.baidu.com/" :  "http://news.baidu.com/";
        //if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            //window.location.href = "https://www.baidu.com/";
            //alert("移动");
        //} else {
            //window.location.href = "http://news.baidu.com/";
            //alert("pc");
        //}
    },   

    videoLogin: function() {
        // 视频图片点击
        $(".index-video-img").on("click", function() {
            var Uid = $(this).attr("Uid");
            var video = '<video src="video/'+ Uid +'"preload="preload" controls="controls"></video>';
            $(".index-video").append(video);
            $(".index-video").show(); 
            $(".index-video video").get(0).play();
            $(".index-video").css("height",$(document).height()); 
            $(".index-video").css("width",$(document).width()); 
            $(".video-mask").css("height",$(document).height()); 
            $(".video-mask").css("width",$(document).width()); 
            var top = ($(window).height() - $(".index-video video").height())/3;
            var top1 = ($(window).height()/1.5);
            var closeLeft = $(window).width()/2 - $(".video-close").width()/2;
            var scrollTop = $(document).scrollTop();
            $(".index-video video").css( { position : 'absolute', 'top' : top + scrollTop} );
            $(".video-close").css( { position : 'absolute', 'top' : top1 + scrollTop, left : closeLeft } );
        });
        // 关闭按钮点击
        $(".video-close").on("click", function() {
            $(".index-video").hide();
            $(".index-video video").remove();
        })
    }, 

    advantageListsClick: function() {
        $(".advantage-lists li").on("click", function() {
            $(this).children().children(".advantage-img2").show();
            $(this).children().children(".advantage-img1").hide();
            $(this).children(".advantage-info").show();
            $(this).children("p").css({
                "color":"#2b73ef"
            });
            $(".mask").show();
        })
    },

    maskIndexClick: function() {
        $(".mask").on("click", function() {
            
            $(".advantage-img1").show();
            $(".advantage-img2").hide();
            $(".advantage-info").hide();
            $(".advantage-lists li p").css({
                "color":"#696868"
            });
            $(this).hide();
        })
    },
}); 

//禁止页面滑动
function preventDefault(e) {
    e.preventDefault();
}
function advantageListClick() {
    $(".advantage-lists li").on("click", function() {
        document.addEventListener('touchmove', preventDefault, {passive: false});
    });
    $(".mask").on("click", function() {
        document.removeEventListener('touchmove', preventDefault, {passive: false});
    });
}
function videoClick() {
    $(".index-video-img").on("click", function() {
        document.addEventListener('touchmove', preventDefault, {passive: false});
    });
    $(".video-close").on("click", function() {
        document.removeEventListener('touchmove', preventDefault, {passive: false});
    });
}