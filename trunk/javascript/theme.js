$(function(){var b=getStyle(0);$("#theme"+b[0]).addClass("selected");$(".theme").click(function(){$(".theme").removeClass("selected");$(this).addClass("selected");var a=$(this).attr("id").split("me")[1];my_setcookie("style",a,1,0);chStyle(getStyle(a))})});