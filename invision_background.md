Tùy chọn Background.
By: baivong - fmvi.vn
Convert and edit: miamor


![http://i34.servimg.com/u/f34/15/64/85/86/select10.jpg](http://i34.servimg.com/u/f34/15/64/85/86/select10.jpg)
> Demo: http://invision.chinhphuc.info

> Thực hiện:
> > Tạo một file js mới:
> > > Title: Tùy chọn Background.
> > > Placement: In all the pages.
> > > Content: Hide rồi.. Reply để thấy nào hihi

```

Demo: .info" target="_blank" rel="nofollow">http://invision.chinhphuc.info

Thực hiện:
Tạo một file js mới:
Title: Tùy chọn Background.
Placement: In all the pages.
Content: Hide rồi.. Reply để thấy nào hihi

Code: Select All

$(function () {
$(".mainmenu:last").after('<img src="http://i43.servimg.com/u/f43/15/93/40/94/nav_ba10.png" alt="Change background image" title="Tùy chọn hình nền" id="nav_background" />');
$("#content").prepend('<div id="toggle_background" style="display: none;"><div id="custom_background"><span id="bg1">

Unknown end tag for &lt;/span&gt;

<span id="bg2">

Unknown end tag for &lt;/span&gt;

<span id="bg3">

Unknown end tag for &lt;/span&gt;

<span id="bg4">

Unknown end tag for &lt;/span&gt;

<span id="bg5">

Unknown end tag for &lt;/span&gt;

<span id="bg6">

Unknown end tag for &lt;/span&gt;

<div id="custom_url"><input type="text" placeholder=" Chọn hình nền khác bằng cách nhập một URL hình ảnh và nhấn [Thay đổi]" id="custom_input"><strong id="custom_submit">Thay đổi

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

');
$("#nav_background").click(function () {
$("#toggle_background").slideToggle()
});
$("#custom_background span").click(function () {
$("body").removeClass("bg1 bg2 bg3 bg4 bg5 bg6 bg_custom").addClass($(this).attr("id"));
my_setcookie("custom_background", $(this).attr("id"), true)
});
$("#custom_submit").click(function () {
var urlbg = $("#custom_input").val();
$("body").removeClass("bg1 bg2 bg3 bg4 bg5 bg6 bg_custom").addClass("bg_custom").css("background-image", "url('" + urlbg + "')");
my_setcookie("custom_background", urlbg, true)
});
if (my_getcookie("custom_background") == "") {
$("body").addClass("bg_custom").css("background-image", "url(" + my_getcookie("custom_background") + ")");
} else {
$("body").addClass(my_getcookie("custom_background"))
}
});
```


> Chèn vào CSS:

```


/* ---Tùy chọn hình nền--- */
#custom_background{background-image:url(http://i48.servimg.com/u/f48/16/58/89/73/backgr18.jpg)!important;box-shadow:0 0 10px rgba(0,0,0,0.8) inset;color:#FFF;position:relative;padding:15px 0 15px 15px}
#custom_background span{-moz-transition:all .2s ease-in-out 0;background:none no-repeat scroll 50% 50% #000;border-radius:7px 7px 7px 7px;box-shadow:0 1px 7px #000 inset, 0 1px 0 rgba(255,255,255,0.05), 0 0 1px rgba(255,255,255,0.35);cursor:pointer;display:block;float:left;height:90px;margin-right:15px;width:15%}
#custom_background span:hover{box-shadow:0 1px 2px #000 inset, 0 1px 0 rgba(255,255,255,0.05), 0 0 1px rgba(255,255,255,0.35)}
#bg1{background-image:url(http://i43.servimg.com/u/f43/15/93/40/94/previe10.jpg)!important;background-repeat:repeat-x!important}
#bg2{background-image:url(http://i48.servimg.com/u/f48/16/58/89/73/backgr15.jpg)!important}
#bg3{background-image:url(http://i34.servimg.com/u/f34/15/64/85/86/backgr11.jpg)!important}
#bg4{background-image:url(http://i46.servimg.com/u/f46/16/16/16/68/20080910.jpg)!important}
#bg5{background-image:url(http://i46.servimg.com/u/f46/16/16/16/68/backgr12.jpg)!important}
#bg6{background-image:url(http://i48.servimg.com/u/f48/16/58/89/73/backgr16.jpg)!important}
#custom_url{clear:left;padding-top:10px;text-align:center}
#custom_input{background:none repeat scroll 0 0 rgba(0,0,0,0.5);border:0 none;border-radius:4px 4px 4px 4px;box-shadow:0 1px 3px rgba(0,0,0,0.75) inset, 0 1px 0 rgba(255,255,255,0.15);color:#FFF;font-size:20px;height:40px;margin-left:-15px;margin-right:8px;white-space:nowrap;width:780px;padding:0 10px 0 0}
#custom_submit{background:url(http://i48.servimg.com/u/f48/16/58/89/73/highli10.png) repeat-x scroll 0 0 rgba(197,206,213,0.4);border-radius:4px 4px 4px 4px;box-shadow:0 1px 3px rgba(0,0,0,0.6);color:#FFF;cursor:pointer;display:inline-block;font-size:20px;font-weight:400;line-height:40px;text-shadow:0 -1px 0 #4C5057;padding:0 10px}
.bg1{background:url(http://i43.servimg.com/u/f43/15/93/40/94/previe10.jpg) repeat fixed 50% 0 #000!important}
.bg2{background:url(http://i48.servimg.com/u/f48/16/58/89/73/backgr19.jpg) no-repeat fixed 50% 0 #000!important}
.bg3{background:url(http://i34.servimg.com/u/f34/15/64/85/86/backgr12.jpg) repeat fixed 50% 0 #000!important}
.bg4{background:url(http://i46.servimg.com/u/f46/16/16/16/68/20080910.jpg) repeat fixed 50% 0 #000!important}
.bg5{background:url(http://i46.servimg.com/u/f46/16/16/16/68/backgr12.jpg) no-repeat fixed 50% 0 #0E1E2D!important}
.bg6{background:url(http://i48.servimg.com/u/f48/16/58/89/73/backgr11.jpg) no-repeat fixed 50% 0 #000!important}
.bg_custom{background-attachment:fixed;background-color:#000;background-repeat:repeat}
#nav_background{background-color:#000;border:3px dotted #444!important;border-radius:15px 15px 15px 15px;cursor:pointer;float:right;padding:5px}
#nav_background:hover{background-color:#FFF}
#nav_background:active{background-color:#E71E7B}


```
Được sửa bởi miamor ngày Sun Sep 02, 2012 1:48 pm; sửa lần 2.