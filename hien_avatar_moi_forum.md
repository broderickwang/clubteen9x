Cách này là cách của fmvi và avac, cực nhanh cực nhẹ và cực dễ làm.
Original code by baivong - http://fmvi.vn
Convert: @Tiểu Phi Lang - IFC


Demo Các bạn có thể xem demo trực tiếp cho invision tại IFC.

Đầu tiên, chèn code này vào 1 trang HTML [Nội dung đã bị ẩn, reply để xem Mắc cỡ]
Vui lòng không thay đổi bất cứ thứ gì trong code.
Vì trang HTML này không phải để trưng bày cho mọi nguời thấy nên cũng không cần khâu làm đẹp hay xóa dòng bản quyền.
```


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr" id="min-width" lang="vi"
xml:lang="vi">
<head>
<title>Tải avatar thành viên

Unknown end tag for &lt;/title&gt;


<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<meta http-equiv="content-script-type" content="text/javascript" />
<meta http-equiv="content-style-type" content="text/css" />
<link rel="shortcut icon" type="image/x-icon" href="http://i48.servimg.com/u/f48/16/58/89/73/minilo10.png" />
<meta name="title" content="Thành viên" />
<link rel="search" type="application/opensearchdescription+xml" href="/improvedsearch.xml" title="Vietnamese Forumotion" />
<link rel="search" type="application/opensearchdescription+xml" href="http://www.forum-viet.com/vi/search/improvedsearch.xml" title="Search forums" />
<style type="text/css">
.tipSs {
float:left;
width:200px;
background:url(http://i40.servimg.com/u/f40/17/70/81/78/tip10.png) no-repeat scroll 5px center #FFFBCC;
border:1px solid #E6DB55;
border-radius:3px 3px 3px 3px;
clear:both;
color:#666452;
font-size:.9em;
position:relative;
text-align:justify;
margin:10px 0;
padding:5px 5px 5px 25px
}
#update_user {
-o-box-sizing:border-box;
-moz-box-sizing:border-box;
-webkit-box-sizing:border-box;
background:none repeat scroll 0 0 padding-box #FFF;
border:1px solid rgba(0, 0, 0, 0.333);
box-shadow:0 4px 16px rgba(0, 0, 0, 0.2);
color:#000;
left:50%;
margin-left:-250px;
margin-top:-140px;
outline:0 none;
position:absolute;
top:50%;
width:500px;
padding:40px
}
#update_user button:hover {
border:1px solid rgba(231, 45, 45, 0.44)
}
#update_user button, #startUp {
background-color:#F5F5F5;
border:1px solid rgba(0, 0, 0, 0.1);
border-radius:2px 2px 2px 2px;
clear:none;
color:#444;
cursor:pointer;
float:none;
font-size:11px;
font-weight:700;
height:29px;
line-height:27px;
margin-top:10px;
min-width:72px;
outline:0 none;
padding:0 8px
}
#startUp {
background:url(http://i40.servimg.com/u/f40/17/70/81/78/downlo10.gif) no-repeat scroll 20px center #A5F997;
border:1px solid #5BE05A;
color:#FEFBFF;
font-family:icon;
font-size:16px;
text-shadow:1px 1px 2px #000000, 1px 1px 2px #000000, 1px 1px 2px #000;
margin:20px;
padding:20px 20px 20px 50px
}
.pagination {
font-size:12px;
font-weight:700;
margin-top:10px;
text-align:center;
visibility:hidden
}
.pagination b {
background-color:#0567AD;
border:1px solid #00487A;
border-radius:3px 3px 3px 3px;
color:#FFF;
text-shadow:0 1px 0 #000;
visibility:visible;
padding:3px 5px
}
.pagination a:first-child {
display:none
}
.pagination a {
text-decoration:none;
background-color:#E5E5E5;
border:1px solid #D6D6D6;
border-radius:3px 3px 3px 3px;
text-shadow:0 1px 0 #FFF;
visibility:visible;
margin:2px;
padding:3px 5px
}
#timeU, #listU {
padding: 0 20px 0 25px
}
#listU {
background:url(http://www.google.com/reader/ui/3369744051-view_options_list.png) no-repeat scroll left center transparent
}
#timeU {
background:url(http://i40.servimg.com/u/f40/17/70/81/78/14578910.png) no-repeat scroll left center transparent;
cursor: pointer
}


Unknown end tag for &lt;/style&gt;


<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;


<script type="text/javascript">
//<![CDATA[
var _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-26966514-1"]);
_gaq.push(["_trackPageview"]);
(function () {
var ga = document.createElement("script");
ga.type = "text/javascript";
ga.async = true;
ga.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(ga, s);
})(); //]]>


Unknown end tag for &lt;/script&gt;




Unknown end tag for &lt;/head&gt;


<body>
<div id="update_user">
<p style="position: absolute; left: 0px; top: -10px; padding-left: 7px;">
<span id="timeU">5000

Unknown end tag for &lt;/span&gt;


<!-- Thay 5000 bằng thời gian giữa 2 lần tải -->
<span id="listU">0

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/p&gt;


<p id="d_fmvi" class="tipSs" style="width: 200px; float: left; clear: left;">© 2012 FMvi (<a rel="nofollow" target="_blank" href="http://www.fmvi.vn">www.fmvi.vn

Unknown end tag for &lt;/a&gt;

)

Unknown end tag for &lt;/p&gt;


<!-- Không xóa hay thay thế copyright www.fmvi.vn -->
<span style="float: right; display: inline-block; clear: right;" id="buttonU">
<button onclick="pageU()">Chọn trang

Unknown end tag for &lt;/button&gt;


<button onclick="updateS(jQuery('#listU').text(), 1)" id="t_fmvi">Bắt đầu

Unknown end tag for &lt;/button&gt;


<button style="display:none" id="s_fmvi">Dừng lại

Unknown end tag for &lt;/button&gt;




Unknown end tag for &lt;/span&gt;


<textarea id="userdata" rows="5" cols="9" style="width:100%">Ufmvi=Array();

Unknown end tag for &lt;/textarea&gt;


<p class="pagination">

Unknown end tag for &lt;/p&gt;


<p style="display:none" id="uu_fmvi">1

Unknown end tag for &lt;/p&gt;


<p style="display:none" id="zz_fmvi">1

Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;


<script tyle="text/javascript">
jQuery(function () {
"" == jQuery(".pagination").html() && jQuery.get("/memberlist?mode=joined&order=DESC&submit=Ok&username", function (a) {
jQuery(".pagination").html(jQuery(a).find(".pagination:first").html());
jQuery("#listU").text(jQuery(a).find(".mini-avatar").length);
paU()
})
});
jQuery("#t_fmvi, #s_fmvi").click(function () {
jQuery("#buttonU button").toggle()
});
jQuery("#timeU").click(function () {
var a = prompt("\u0110\u1eb7t th\u1eddi gian ch\u1edd gi\u1eefa 2 l\u1ea7n t\u1ea3i (ms)", "5000");
!1 == isNaN(a) ? 2E3 > eval(a) ? alert("Th\u1eddi gian ch\u1edd qu\u00e1 ng\u1eafn, h\u00e3y \u0111\u1eb7t s\u1ed1 >= 2000") : jQuery("#timeU").text(a) : alert("Nh\u1eadp th\u1eddi gian b\u1ecb l\u1ed7i, ch\u1ec9 \u0111\u01b0\u1ee3c ph\u00e9p nh\u1eadp ch\u1eef s\u1ed1")
});
function paU() {
jQuery(".pagination img").parent().remove();
jQuery(".pagination a").click(function () {
"none" == jQuery("#t_fmvi").css("display") ? alert("\u1ee8ng d\u1ee5ng \u0111ang ch\u1ea1y, h\u00e3y b\u1ea5m n\u00fat D\u1eebng L\u1ea1i tr\u01b0\u1edbc") : (jQuery("#buttonU button").toggle(), updateS(jQuery("#listU").text(), jQuery(this).text()));
return !1
})
}
function updateS(a, b) {
var d = eval(jQuery("#uu_fmvi").text());
jQuery("#d_fmvi").text("Trang " + b + " s\u1ebd \u0111\u01b0\u1ee3c t\u1ea3i sau " + jQuery("#timeU").text() + "ms");
var c = setInterval(function () {
var a = b++;
d++;
jQuery("#uu_fmvi").text(d);
a <= eval(jQuery(".pagination a:last").text()) && downU(a, jQuery("#zz_fmvi").text());
eval(jQuery("#uu_fmvi").text()) > eval(jQuery("#zz_fmvi").text()) + 1 && (clearInterval(c), jQuery("#d_fmvi").text("X\u1ea3y ra l\u1ed7i t\u1eeb trang " + a), alert("X\u1ea3y ra l\u1ed7i t\u1eeb trang " + a), jQuery("#buttonU button").toggle(), jQuery("#uu_fmvi").text(jQuery("#zz_fmvi").text()));
a > eval(jQuery(".pagination a:last").text()) && (clearInterval(c), jQuery("#d_fmvi").text("K\u1ebft th\u00fac \u1edf trang " + (a - 1)), alert("K\u1ebft th\u00fac \u1edf trang " + (a - 1)), jQuery("#buttonU button").toggle())
}, jQuery("#timeU").text());
jQuery("#s_fmvi").click(function () {
clearInterval(c);
jQuery("#d_fmvi").text("D\u1eebng t\u1ea3i \u1edf trang " + jQuery("#uu_fmvi").text())
})
}
function downU(a, b) {
jQuery("#d_fmvi").text("B\u1eaft \u0111\u1ea7u t\u1ea3i trang " + a);
jQuery.get("/memberlist?mode=joined&start=" + (a - 1) * eval(jQuery("#listU").text()), function (a) {
jQuery(".pagination").html(jQuery(a).find(".pagination:first").html());
paU();
jQuery(a).find(".mini-avatar").each(function () {
var a = jQuery(this).parent().parent().find(".popupmenu-item:first a").attr("href").split("/u")[1],
b = jQuery(this).find("img").attr("src"),
a = "Ufmvi[" + a + "]='" + b + "';";
jQuery("#userdata").val(jQuery("#userdata").val() + a)
});
b++;
jQuery("#zz_fmvi").text(b);
jQuery("#d_fmvi").text("T\u1ea3i xong d\u1eef li\u1ec7u trang " + jQuery(".pagination b").text());
jQuery("#t_fmvi").attr("onclick", "updateS(jQuery('#listU').text()," + (eval(jQuery(".pagination b").text()) + 1) + ")")
})
}
function pageU() {
var a = prompt("Nh\u1eadp s\u1ed1 th\u1ee9 t\u1ef1 trang t\u1eeb 1 \u0111\u1ebfn " + jQuery(".pagination:last-child").text(), "1");
a <= eval(jQuery(".pagination a:last").text()) && 0 < a ? (updateS(jQuery("#listU").text(), a), jQuery("#buttonU button").toggle()) : alert("Nh\u1eadp s\u1ed1 trang b\u1ecb l\u1ed7i")
};


Unknown end tag for &lt;/script&gt;




Unknown end tag for &lt;/body&gt;




Unknown end tag for &lt;/html&gt;



```
Sau đó thì mở trang HTML vừa tạo ra, cho chạy bắt đầu từ trang 1, còn thời gian thì đặt tối thiểu là 2000.
Khi chạy xong tất cả, lấy toàn bộ code trong khung soạn thảo đó nhét vào 1 js, đặt In all the pages.

> Tạo 1 js đặt In the homepage:

```

$(function () {
$(".row1 a[href='/u'],.row2 a[href='/u']").not("#fo_stat .row1 a[href='/u'],#fo_stat .row2 a[href='/u'],.mods a[href^='/u']").each(function () {
var a = $(this).attr("href").slice(2),
a = void 0 == Ufmvi[a] ? "http://i48.servimg.com/u/f48/16/58/89/73/noavat10.jpg" : Ufmvi[a];
$(this).parents(".row1,.row2").prepend('<span class="avatarS"><img src="' + a + '">

Unknown end tag for &lt;/span&gt;

')
});
$("#fo_stat .row1 a[href='/u'],#fo_stat .row2 a[href='/u']").each(function () {
var a = $(this).attr("href").slice(2),
a = void 0 == Ufmvi[a] ? "http://i48.servimg.com/u/f48/16/58/89/73/noavat10.jpg" : Ufmvi[a];
$(this).prepend('<span class="avatarS"><img src="' + a + '">

Unknown end tag for &lt;/span&gt;

')
});
});
```

> Tạo 1 js đặt In the sub-forum:

```

$(function () {
$(".ipbtable").addClass('index-box');
$(".row1 a[href^='/u']").each(function () {
var a = $(this).attr("href").slice(2),
a = void 0 == Ufmvi[a] ? "http://i48.servimg.com/u/f48/16/58/89/73/noavat10.jpg" : Ufmvi[a];
$(this).parents(".row1").prepend('<span class="avatarS"><img src="' + a + '">

Unknown end tag for &lt;/span&gt;

')
})
})

```
> Chèn vào CSS:

```

/* ---Avatars and Imgs--- */
a[href^='#']{background:transparent!important;margin-top:-2px;z-index:2!important}
.membername{background:transparent!important;z-index:2!important}
.popupmenu{z-index:999!important;background:#fff!important;position:absolute;margin-left:80px}
.topnewmem .mini-avatar img,.topposterd .mini-avatar img,.topvisit .mini-avatar img{z-index:100!important;border:0.7px solid #ccc;border-radius:2px;box-shadow:0 0 1px #aaa;padding:0.8px;float:right;width:18px;height:18px;margin-top:-20px;margin-left:18%!important;position:absolute}
.topnewmem .mini-avatar img:hover,.topposterd .mini-avatar img:hover,.topvisit .mini-avatar img:hover,#left .avatarS:hover img{z-index:100!important;width:100px;height:100px;margin-left:16%!important;margin-top:-50px;transition:all 3s ease;-webkit-transition:all 3s ease;-moz-transition:all 3s ease;transform:rotate(360deg);-moz-transform:rotate(360deg);-webkit-transform:rotate(360deg)}
.popmenubutton-new-out.popmenubutton,.member-header.clearfix{height:20px!important}
#left .avatarS img{border:0.7px solid #ccc;border-radius:2px;box-shadow:0 0 1px #aaa;padding:0.8px;float:right!important;width:18px;height:18px;margin-left:17%!important;position:absolute}
.index-box .avatarS{float:left;height:50px;line-height:70px;margin-right:5px;width:57px}
.index-box .avatarS img{border:1px solid #DDD;width:57px}
.index-box .avatarS:hover img{position:absolute;width:150px;cursor:pointer}
.avatar-user img{max-height:29px;border:1px solid #DDD;margin:-15px 5px;padding:1px}
.avatar-index img,#fo_stat .avatarS img{height:25px;width:25px;border:1px solid #DDD;margin:0 5px;padding:1px}
#fo_stat a[href^="/u"]{margin-top:5px!important}
.avatar img{width:30px;height:30px;background:#F4F4F4;border:1px solid #DDD;margin:2px 5px 0 0;padding:1px}
.avatar img:hover,.avatar-user img:hover,.ifcavatar img:hover,.avatarS img:hover,.avatarS:hover img{border:1px dashed #CCC}
.popupmenu img{display:inline!important}

```
> Trong đấy kèm luôn một số style cho các thuộc tính chứa img khác, các bạn có thể xóa đi, hoặc đổi style, tùy