/**
 * Created by Administrator on 2016/8/30.
 */
$(document).ready(function() {
    //alert($(window).width());
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
        } () : $("body").addClass("homepage"));
    var a = $(document).height();
    var b = $(".footer").offset().top+80;
    if(b<a){
        $(".footer").css({'position':'fixed','bottom':0});
    }
    $(".cases-title ul li").click(function () {
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.cases-content').children('ul').eq(index).show().siblings('ul').hide();
    });
    $(".case .col-md-3").addClass("animated zoomIn");
    $(".ctmain .col-md-4").addClass("animated fadeInUp");
    $(".sub_nav").addClass("animated zoomIn");
    $(".panel-title a").click(function () {
        var id = $(this).attr('href');
        var arr = id.split("#");
        var href= arr[1];
        $("#"+href).toggleClass('animateOut');
        $("#"+href).toggleClass('animateIn');
        $(this).parents(".panel").siblings().find('.collapse.in').toggleClass('animateIn');
        $(this).parents(".panel").siblings().find('.collapse.in').toggleClass('animateOut');
        $(this).toggleClass("is-collapsed");
        $(this).toggleClass("is-expanded");
        $(this).toggleClass("accordingout");
        $(this).toggleClass("accordingin");
        $(this).parents(".panel").siblings().find('.accordingTitle.accordingin').toggleClass('is-expanded');
        $(this).parents(".panel").siblings().find('.accordingTitle.accordingin').toggleClass('is-collapsed');
        $(this).parents(".panel").siblings().find('.accordingTitle.accordingin').toggleClass("accordingin");
        $(this).parents(".panel").siblings().find('.accordingTitle.accordingin').toggleClass("accordingout");
    });
    //$(".services-content .col-md-2").addClass("animated fadeInUp");
    //var a = $("#banner .slick-track .slick-active").index();
    //alert(a);

});