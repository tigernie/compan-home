$(document).ready(function() {
    $("#mmenu").mmenu({
        header: !0,
        iconPanels: !0,
        navbar: {
        title: $("#companyName").text()
        },
        navbars: {
            position: "top",
            content: ["prev", "title", "close"]
        },
        offCanvas: {
            position: "right"
        },
        extensions: ["pageshadow", "theme-black"]
    });

    $("#search-btn").parent().click(function(a) {
        a.stopPropagation();

        $(this).find("#search-btn").toggleClass("filterInvert");
        $(this).find(".search-form").show({
            duration: 1E3,
            easing: "easeInOutElastic"
        });
        if ($(this).find(".search-form input").val() !== "") {
            window.location.href = "/search.shtml?keyword=" + escape($.trim($(".search-form input").val()));
        } else {
            return false;
        }
    });

    $(document).click(function() {
        $("#search-btn").removeClass("filterInvert");
        $(".search-form").hide({
            duration: 1E3,
            easing: "easeInOutElastic",
            complete: function() {
                $(".search-form").find("input").val("");
            }
        })
    });



    $(".erweima").tipso({
        background: "#ffffff"
    });
    $("#nav li").mouseenter(function() {
        var a = $(this).index();
        $("#nav-child").stop().fadeIn(500).find("ul").eq(a).show().siblings().hide()
    });
    $(".header").mouseleave(function() {
        $("#nav-child").fadeOut(500)
    });
    $("#footer-link").click(function(a) {
        a.stopPropagation();
        $(this).toggleClass("footer-link-on").find("ul").slideToggle({
            duration: 1E3,
            easing: "easeOutElastic"
        })
    }).find("ul li").click(function() {
        var a = $(this).attr("data-url");
        window.open(a)
    });
    $(document).click(function(a) {
        $("#footer-link").removeClass("footer-link-on").find("ul").slideUp({
            duration: 1E3,
            easing: "easeOutElastic"
        })
    });
    0 < $("#footer-links").length && $("#footer-links").slick({
        autoplay: !0,
        autoplaySpeed: 3E3,
        slidesToShow: 6,
        slidesToScroll: 1,
        speed: 200
    });
    $(".footer-menus-head a").mouseenter(function() {
        $(".footer-menus-child").stop().slideDown({
            duration: 1E3,
            easing: "easeOutElastic"
        });
        $("#hideen-footer-child").addClass("glyphicon-on")
    });
    $(".footer-nav").mouseleave(function() {
        $(".footer-menus-child").stop().slideUp({
            duration: 500,
            easing: "swing"
        });
        $("#hideen-footer-child").removeClass("glyphicon-on")
    });
    $("#hideen-footer-child").click(function(a) {
        $(this).toggleClass("glyphicon-on");
        $(".footer-menus-child").stop().slideToggle({
            duration: 1E3,
            easing: "easeOutElastic"
        })
    });

    /msie [6|7|8]/i.test(navigator.userAgent) || (0 < !$("#pro-type-tab").length || 768 <= $(window).width() ?
	function() {
	    var a = document.querySelector("#header");
	    window.location.hash && a.classList.add("slide--up");
	    (new Headroom(a, {
	        tolerance: {
	            down: 10,
	            up: 20
	        },
	        offset: 205,
	        classes: {
	            initial: "slide",
	            pinned: "slide--reset",
	            unpinned: "slide--up"
	        }
	    })).init()
	} () : $("body").addClass("homepage"))



    /*返回老版*/
    $(".header .container").css("position","relative")
    .append('<a href="http://www.2016.micoe.com" class="retrun-old">前往老版</a>');
    $(".retrun-old").css({
        "padding":"0 15px",
        "color":"#fff",
        "background":"#009e96",
        "height":"30px",
        "line-height":"30px",
        "position": "absolute",
        "right":"-70px",
        "top": "50%",
        "margin-top":"-15px",
        "opacity":".6"
    })


    /*窗口重置 显示隐藏*/
    function resetReutnSite(){
        if($(window).width()<=992) {
            $(".retrun-old").hide();
        }else {
            $(".retrun-old").show();
        }
    }
    resetReutnSite();

    $(window).resize(function(event) {
        resetReutnSite();
    });

    


});