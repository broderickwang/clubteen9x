Note ~ Bản thân Cáo chưa test, không rõ có thể có lỗi xảy ra nhé

Chức năng:

> Thay avatar ngay lập tức từ hình ảnh trong bài viết.

![http://i47.servimg.com/u/f47/17/47/88/95/33310.jpg](http://i47.servimg.com/u/f47/17/47/88/95/33310.jpg)

> Thông báo khi thay avatar thành công và khi xảy ra lỗi.
![http://i47.servimg.com/u/f47/17/47/88/95/tip10.jpg](http://i47.servimg.com/u/f47/17/47/88/95/tip10.jpg)


> Giới hạn số lần thay đổi avatar nhanh.

![http://i47.servimg.com/u/f47/17/47/88/95/6-3-2010.jpg](http://i47.servimg.com/u/f47/17/47/88/95/6-3-2010.jpg)

Bước 1: ACP - QLTT - Messages and e-mails - Announcements - General announcements options

> Activate announcements : Có
> Announcements display : All pages
> Scrolling : Go left


Announcements

> Name : FMvi.vn - Thay avatar
> Content **:**

```

<span style="display:none" id="userID">{USERLINK}

Unknown end tag for &lt;/span&gt;


```

Bước 2: ACP - Display - Pictures and Colors - Colors - CSS Stylesheet

```


/* Thay avatar - www.fmvi.vn */
.alert .close{position:relative;top:-2px;right:-21px;float:right;font-size:13px;font-weight:700;line-height:18px;color:#000;text-shadow:0 1px 0 #fff;opacity:0.2;filter:alpha(opacity=20)}
.alert .close:hover{color:#000;text-decoration:none;opacity:0.4;filter:alpha(opacity=40);cursor:pointer}
.alert{display:none;top:5px;position:fixed;left:5px;margin-bottom:18px;text-shadow:0 1px 0 rgba(255,255,255,0.5);background-color:#fcf8e3;border:1px solid #fbeed5;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;color:#c09853;padding:8px 35px 8px 14px}
.alert-success{background-color:#dff0d8;color:#468847;border-color:#d6e9c6}
.alert-error{background-color:#f2dede;color:#b94a48;border-color:#eed3d7}
.fmvichange{display:inline-block!important;position:relative;margin:0!important;padding:0!important}
.fmvichange:hover .changeatvar{display:block!important}
.changeatvar{margin:0!important;cursor:pointer;background:url(http://i47.servimg.com/u/f47/17/47/88/95/profil11.png) no-repeat scroll 5px center #DDD;border:1px solid #777;color:#484A48;display:none!important;font-weight:700;left:0;position:absolute;text-shadow:1px 1px 1px #FFF;top:0;width:90px;z-index:999;padding:2px 5px 5px 23px!important}
#tooltip{max-width:550px;position:absolute;background-image:url(http://i48.servimg.com/u/f48/13/58/60/43/opacit10.png);border:0;padding:0;border-radius:3px;color:#FFF;z-index:99;}
#tooltip .header{display:none}

```

Bước 3: ACP - Modules - HTML & JAVASCRIPT - Javascript codes management - Create a new javascript:

> Title **: FMvi.vn - Thay avatar nhanh tại nọi mơi
> Placement : In the topics
> Javascript Code** : Download Down att file ở bên dưới
```

var versionMinor = parseFloat(navigator.appVersion),
versionMajor = parseInt(versionMinor),
IE = document.all && !window.opera && 7 > versionMajor,
IE7 = document.all && !window.opera && 7 <= versionMajor,
OP = window.opera,
FF = document.getElementById,
NS = document.layers;
function get_item(a, c) {
if (IE) return c ? window.opener.document.all[a] : document.all[a];
if (FF) return c ? window.opener.document.getElementById(a) : document.getElementById(a);
if (NS) return c ? window.opener.document.layers[a] : document.layers[a]
}
var current_tooltip;
function show_tooltip(a, c, d) {
var b = get_item("tooltip");
b || (b = document.createElement("div"), b.setAttribute("id", "tooltip"), document.body.appendChild(b));
b.style.zIndex = 100;
b.style.position = "absolute";
b.innerHTML = d ? '<p class="header">' + d + "

Unknown end tag for &lt;/p&gt;

<p>" + c + "

Unknown end tag for &lt;/p&gt;

" : "<p>" + c + "

Unknown end tag for &lt;/p&gt;

";
b.style.visibility = "visible";
a.onmousemove = move_tooltip;
a.onmouseout = function () {
b.style.visibility = "hidden"
};
a.title = ""
}
var offsetxpoint = -60,
offsetypoint = 20,
real_body = document.compatMode && "BackCompat" != document.compatMode ? document.documentElement : document.body,
real_body = document.documentElement ? document.documentElement : document.body;
function move_tooltip(a) {
var c = !IE ? a.pageX : event.clientX + real_body.scrollLeft,
d = !IE ? a.pageY : event.clientY + real_body.scrollTop,
b = IE && !window.opera ? real_body.clientWidth - event.clientX - offsetxpoint : window.innerWidth - a.clientX - offsetxpoint - 20,
e = IE && !window.opera ? real_body.clientHeight - event.clientY - offsetypoint : window.innerHeight - a.clientY - offsetypoint - 20,
f = 0 > offsetxpoint ? -1 * offsetxpoint : -1E3;
current_tooltip = get_item("tooltip");
current_tooltip.style.left = b < current_tooltip.offsetWidth ? IE ? real_body.scrollLeft + event.clientX - current_tooltip.offsetWidth + "px" : window.pageXOffset + a.clientX - current_tooltip.offsetWidth + "px" : c < f ? "5px" : c + offsetxpoint + "px";
current_tooltip.style.top = e < current_tooltip.offsetHeight ? IE ? real_body.scrollTop + event.clientY - current_tooltip.offsetHeight - offsetypoint + "px" : window.pageYOffset + a.clientY - current_tooltip.offsetHeight - offsetypoint + "px" : d + offsetypoint + "px"
}
numA = 7;
verA = ".post-entry";
verB = "#ucp .box-content img:first";
verC = ".postprofile-details.postdetails";
verD = ".msg a";
// download file script, lấy code và đặt dưới dòng này
```


Hướng dẫn tùy chỉnh:
> [+] Hướng dẫn dưới đây giúp bạn có thể sử dụng riêng 2 hàm chính trong mods là hiện thông báo và thay avatar nhanh. Để sử dụng, yêu cầu bạn phải đặt javascript và CSS trong mods thay avatar nhanh vào trang cần dùng.

> Tùy biến thông báo:
> Chức năng:

> Hiện thông ở góc trên bên trái màn hình.
> Xuất hiện với hiệu ứng fade trong 1s.
> Tự tắt sau 5s hoặc click nút đóng, lùi vào bên trái trong 1s rồi mất.


```


fmvitip(style,bold,normal)
```

> style: Có 2 giá trị là error và success
> bold: Nội dung thông báo in đậm
> normal: Nội dung thông báo thương


> Có thể dùng HTML để ghi nội dung thông báo.
> Ví dụ:

> ```

<button onclick="fmvitip('error', 'Lỗi!', 'Không tải được dữ liệu.')">Thông báo

Unknown end tag for &lt;/button&gt;



```

> Tùy biến thay avatar:
> Chức năng:

> Chức năng như mods thay avatar nhanh


```


avatarfmvi(url)
```

> url: Thay bằng link hình ảnh muốn dùng làm avatar


> Ví dụ:

> ```


<button onclick="avatarfmvi('http://i48.servimg.com/u/f48/16/58/89/73/logofm12.png')">Thay avatar

Unknown end tag for &lt;/button&gt;



```
```


<button onclick="avatarfmvi(prompt('Nhập URL hình ảnh vào đây!\nChấp nhận các định dạng jpg, jpeg, gif, png, bmp', ''))">Thay avatar

Unknown end tag for &lt;/button&gt;





```

Thay số 7 bằng số lần giới hạn thay avatar nhanh


```
function fmvitip(a,b,d){jQuery(".alert").length&&jQuery(".alert").remove();jQuery("body").append('<div class="alert alert-'+a+'"><a class="close" onclick="htip()" data-dismiss="alert">\u00d7

Unknown end tag for &lt;/a&gt;

<strong>'+b+" 

Unknown end tag for &lt;/strong&gt;

"+d+"

Unknown end tag for &lt;/div&gt;

")}function stip(){jQuery(".alert").fadeIn(1E3)}function htip(){jQuery(".alert").animate({left:"-=500"},1E3,function(){jQuery(".alert").remove()})}function stip(){jQuery(".alert").fadeIn(1E3);n=setTimeout("htip();clearTimeout(n)",5E3)} function avatarfmvi(a){var b=my_getcookie("avatarfmvi"),d=jQuery("#userID a").attr("href").match(/[0-9]+/g);(null==b||""==b)&&my_setcookie("avatarfmvi",0,!1);if(numA<=eval(b))return alert("B\u1ea1n \u0111\u00e3 thay avatar h\u1ebft "+b+" l\u1ea7n cho ph\u00e9p"),!1;if(null!=a&&""!=a&&0==a.indexOf("http")&&(-1!=a.indexOf(".jpg")||-1!=a.indexOf(".png")||-1!=a.indexOf(".gif")||-1!=a.indexOf(".jpeg")||-1!=name.indexOf(".bmp")))jQuery(".changeatvar").text("\u0110ang t\u1ea3i..."),jQuery.post("/profile?mode=editprofile&page_profil=avatars", {avatarremoteurl:a,username:jQuery("#userID").text(),user_id:d,submit:"Ok"},function(a){2!=jQuery(a).find(verD).length?(fmvitip("error","L\u1ed7i!","Kh\u00f4ng t\u1ea3i \u0111\u01b0\u1ee3c d\u1eef li\u1ec7u. Vui l\u00f2ng ch\u1ecdn h\u00ecnh \u1ea3nh kh\u00e1c."),jQuery(".changeatvar").text("Thay avatar"),stip()):jQuery.get("/profile?mode=editprofile&page_profil=avatars",function(c){c=jQuery(c).find(verB).attr("src");jQuery(verC+" a[href='/u"+d+"'] img").attr("src",c);a=eval(b)+1;my_setcookie("avatarfmvi", a,!1);jQuery(".changeatvar").text("Thay avatar");fmvitip("success","Th\u00e0nh c\u00f4ng!",'<span style="cursor: help" onmouseover="show_tooltip(this, \'<img style=padding:10px;width:120px src='+c+" alt=FMvi.vn />', 'FMvi.vn')\"> Di chu\u1ed9t v\u00e0o \u0111\u00e2y \u0111\u1ec3 xem Avatar c\u1ee7a b\u1ea1n.

Unknown end tag for &lt;/span&gt;

");stip()})})} jQuery(function(){jQuery("#i_icon_mini_logout").length?jQuery(verA+" img").mouseover(function(){var a=jQuery(this),b=a.attr("src"),d=a.parent("a").attr("href"),e=a.parent("a").attr("class"),c='<span class="fmvichange"><span onClick="avatarfmvi(\''+b+'\')" class="changeatvar">Thay avatar

Unknown end tag for &lt;/span&gt;

<a class="fancyimg-fmvi avatar" href="'+b+'"><img alt="www.fmvi.vn" src="'+b+'" />

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;

';120<=a.height()&&100<=a.width()&&(d==b?"fancyimg-fmvi avatar"!=e&&a.parent("a").replaceWith(c):a.replaceWith(c))}): my_setcookie("avatarfmvi",0,!1)});```