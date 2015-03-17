Nút chọn skin đơn giản từ những skin có sẵn trong ACP.
Sử dụng cho phiên bản phpBB3 và Invision.
Code bởi Chapia - Fix bởi Việt K
![http://a.imageshack.us/img687/1731/29250861.jpg](http://a.imageshack.us/img687/1731/29250861.jpg)

> Live demo : http://demo.c3zone.net/
> Nút chọn skin (ảnh chụp phiên bản phpbb3):


> Cách làm :

> Bước 1 : Vào Javascript codes management tạo Javascript mới :
> • Title **: Skin selector.
> • Placement : In all the pages.
> • Javascript Code** :
```

//Simple skin selector. Copyright © 2011 by c3zone. All Rights Reserved.
logo = 'link ảnh logo';
ver = 'prosilver'; //thay prosilver bằng invision để sử dụng cho phiên bản invision
function loadskin() {
var a = my_getcookie('skin');
defskin = (ver == 'invision') ? 'grey' : 'blue';
var s = (a == defskin) ? '' : ('_' + a);
if (a != null) {
if (a != 'default') {
if (location.search == '') this.location = this.location.pathname + '?change_theme=' + ver + s + location.hash;
else if (!(/\?change|&change/.test(location.search))) this.location = this.location.href.replace(this.location.search, this.location.search + '&change_theme=' + ver + s);
else if (qStr('change_theme') != (ver + s)) this.location = this.location.href.replace(this.location.search, '?change_theme=' + ver + s);
} else if (/\?change|&change/.test(location.search)) {
this.location = this.location.href.split('?')[0]
}
}
}
function chgskin(skin) {
my_setcookie('skin', skin, 0, 0);
loadskin();
}
function qStr(key, default_) {
if (default_ == null) default_ = "";
key = key.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
var regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
var qs = regex.exec(window.location.href);
if (qs == null) return default_;
else return qs[1];
}
$(function(){
loadskin();
$("#logo").html('<img src="' + logo + '" />').fadeIn("slow");
});
```
> Bước 2 : Vào Forum widgets management . Nhấn Create a widget để tạo Widget mới với các thông số sau :
> • Widget name : tùy ý
> • Use a table type : Có
> • Widget title : CHỌN SKIN
> • Widget source **:**```

<div class="theme">
<a class="default" href="#" onclick="chgskin('default');return false">

Unknown end tag for &lt;/a&gt;


<a class="blue" href="#" onclick="chgskin('blue');return false">

Unknown end tag for &lt;/a&gt;


<a class="red" href="#" onclick="chgskin('red');return false">

Unknown end tag for &lt;/a&gt;


<a class="magenta" href="#" onclick="chgskin('magenta');return false">

Unknown end tag for &lt;/a&gt;


<a class="lightgreen" href="#" onclick="chgskin('lightgreen');return false">

Unknown end tag for &lt;/a&gt;


<a class="yellow" href="#" onclick="chgskin('yellow');return false">

Unknown end tag for &lt;/a&gt;


<a class="grey" href="#" onclick="chgskin('grey');return false">

Unknown end tag for &lt;/a&gt;


<a class="pink" href="#" onclick="chgskin('pink');return false">

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/div&gt;


<style type="text/css">
#logo {display:none}
.theme {padding: 10px 0px 0px;}
.theme a {
display: inline-block;
text-decoration: none;
width: 12px;
height: 12px;
border: 1px solid #444;
margin: 2px 2px 2px 0;
line-height: 2px;
}
.default{background:transparent}
.blue{background:#0D97DC}
.red{background:#D90C1C}
.magenta{background:#904E8B}
.lightgreen{background:#86D70B}
.yellow{background:#DCDA0A}
.grey{background:#727272}
.pink{background:#DF0F82}


Unknown end tag for &lt;/style&gt;

```

> Bước 3 : Gắn Widget vừa tạo vào forum.

> Hướng dẫn sử dụng:
> Trong Script ở 2 dòng đầu có dạng :
> Code:
> logo = 'link ảnh logo';
> ver = 'prosilver';

> Dòng 1 : Thay link ảnh logo bằng link ảnh logo forum của bạn.
> Dòng 2 : prosilver nếu forum bạn dùng phiên bản phpBB3.
> --------- invision nếu forum bạn dùng phiên bản Invision.


Hạn chế : Do chuyển đổi skin dựa trên query string nên skin sẽ trở về mặc định khi ở trang kết quả tìm kiếm và xem trước. Forum sẽ trở về skin bạn chọn khi bạn thoát khỏi 2 trang này.


Code bởi Chapia - Fix bởi Việt K
www.c3zone.net







Thay đổi nút chọn skin bằng Combobox (select) . Theo yêu cầu của nhoc\_love\_nd91.


Demo (phpbb3):
![http://a.imageshack.us/img20/4286/77794797.jpg](http://a.imageshack.us/img20/4286/77794797.jpg)
(Với invision, Combobox sẽ hiện bên trái jumbbox ở footer)

Thực hiện : làm đúng theo từng bước như ở trên với :
• Javascript Code **:**```

//Simple skin selector. Copyright © 2011 by c3zone. All Rights Reserved.
logo = 'link ảnh logo';
ver = 'prosilver'; //thay prosilver bằng invision để sử dụng cho phiên bản invision
function loadskin() {
var a = my_getcookie('skin');
defskin = (ver == 'invision') ? 'grey' : 'blue';
var s = (a == defskin) ? '' : ('_' + a);
if (a != null) {
if (a != 'default') {
if (location.search == '') this.location = this.location.pathname + '?change_theme=' + ver + s + location.hash;
else if (!(/\?change|&change/.test(location.search))) this.location = this.location.href.replace(this.location.search, this.location.search + '&change_theme=' + ver + s);
else if (qStr('change_theme') != (ver + s)) this.location = this.location.href.replace(this.location.search, '?change_theme=' + ver + s);
} else if (/\?change|&change/.test(location.search)) {
this.location = this.location.href.split('?')[0]
}
}
}
function chgskin(skin) {
my_setcookie('skin', skin, 0, 0);
loadskin();
}
function qStr(key, default_) {
if (default_ == null) default_ = "";
key = key.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
var regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
var qs = regex.exec(window.location.href);
if (qs == null) return default_;
else return qs[1];
}
$(function () {
loadskin();
$("#logo").html('<img src="' + logo + '" />').fadeIn("slow");
var myskin = my_getcookie('skin');
if ($("#gfooter select").length) {
$("#qjump").before($("#c3ztheme").remove());
$("#c3ztheme").css("float", "left");
} else {
$(".linklist .footer-home").html($("#c3ztheme").remove());
}
$("#c3ztheme").addClass(myskin).find("." + myskin).attr("selected", "selected");
$("#c3ztheme").change(function () {
chgskin($(this).val());
});
});```

• Widget source **:**```

<select id="c3ztheme">
<option class="default" value="default">default

Unknown end tag for &lt;/option&gt;


<option class="blue" value="blue">blue

Unknown end tag for &lt;/option&gt;


<option class="red" value="red">red

Unknown end tag for &lt;/option&gt;


<option class="magenta" value="magenta">magenta

Unknown end tag for &lt;/option&gt;


<option class="lightgreen" value="lightgreen">lightgreen

Unknown end tag for &lt;/option&gt;


<option class="yellow" value="yellow">yellow

Unknown end tag for &lt;/option&gt;


<option class="grey" value="grey">grey

Unknown end tag for &lt;/option&gt;


<option class="pink" value="pink">pink

Unknown end tag for &lt;/option&gt;




Unknown end tag for &lt;/select&gt;


<style type="text/css">
#logo {display:none}
#c3ztheme {font-variant: small-caps}
.default{background:#FFF}
.blue{background:#0D97DC}
.red{background:#D90C1C}
.magenta{background:#904E8B}
.lightgreen{background:#86D70B}
.yellow{background:#DCDA0A}
.grey{background:#727272}
.pink{background:#DF0F82}


Unknown end tag for &lt;/style&gt;


```
Code bởi Chapia - Fix bởi Việt K
www.c3zone.net