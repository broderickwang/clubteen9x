Demo:

![http://i40.servimg.com/u/f40/17/70/81/78/12-11-10.jpg](http://i40.servimg.com/u/f40/17/70/81/78/12-11-10.jpg)

Cho vào CSS:

```

/* BBcode tab - www.fmvi.vn */
.fmvitab{display:none;margin:0 auto}
.fmvitab > tbody > tr > td > strong{cursor:pointer;display:inline-block;padding:5px 10px}
.fmvitab > tbody > tr > td > strong.active{background-color:#6F6E6E;color:#FFF;cursor:default}
.fmvitab > tbody > tr > td > ul{border:1px solid #DDD;list-style:none outside none;width:100%;margin:0!important;padding:10px}
.fmvitab > tbody > tr > td > ul > li{display:none}
.fmvitab > tbody > tr > td > ul > li.active{display:block}
/* BBcode column - www.fmvi.vn */
.fmvicolumn{width:100%}
.fmvicolumn > tbody > tr > td{padding:0 10px;vertical-align:top}
.fmvicolumn > tbody > tr > td.line{border-left:1px solid #131313}

```

Tạo JS mới:

ACP >> Modules >> HTML & JAVASCRIPT >> Javascript codes management >> Create a new javascript

```

/* BBcode column & tab Copyright 2012 baivong - www.fmvi.vn */
$(function () {
$("#text_edit .button2[value='Others']").after(' <img src="http://illiweb.com/fa/wysiwyg/separator.png" style="vertical-align:middle" /> <button class="button2" onclick="window.open('/h142-bbcode-tab-column?bbcode=column')" onmouseover="helpline('Column: [table class=fmvicolumn][tr][td]text[/td][td]text[/td][/tr][/table]')" type="button" title="Column"><img title="Column" src="http://i12.servimg.com/u/f12/17/70/81/78/text-c10.png" alt="Column" />

Unknown end tag for &lt;/button&gt;

 <button class="button2" onclick="window.open('/h142-bbcode-tab-column?bbcode=tab')" onmouseover="helpline('Tabs: [table class=fmvitab][tr][td][list][item=text]text[*][b]text[/b]text[/list][/td][/tr][/table]')" type="button" title="Tab"><img title="Tab" src="http://i12.servimg.com/u/f12/17/70/81/78/13553110.png" alt="Tab" />

Unknown end tag for &lt;/button&gt;

');
$("#text_editor_cmd_switchmode, .frm-buttons input[type='submit']").click(function () {
$("#text_editor_textarea").val($("#text_editor_textarea").val().replace(/\[item\=(.*?)\]((\n|.)*?)\[\/item\]/gi, "[*][b]$1[/b]$2").replace(/\[tab(\swidth\=((\d{0,3}(px|em|%|pt)?)|auto)?)?\]((\n|.)*?)\[\/tab\]/gi, "[table class=fmvitab$1][tr][td][list]$5[/list][/td][/tr][/table]").replace(/\[td(\d{0,2}?)((line)?)\]((\n|.)*?)\[\/td\]/gi, "[td width=$1% class=$3]$4[/td]").replace(/\[column\]((\n|.)*?)\[\/column\]/gi, "[table class=fmvicolumn][tr]$1[/tr][/table]").replace(/\s(width=%)/gi, "").replace(/\s(class=\])/gi, "]"))
});
$(".fmvitab").each(function () {
var a = $(this);
a.find("td:first > ul > li > strong").prependTo(a.find("td:first"));
a.show().find("td:first > ul > li:first, td:first > strong:first").addClass("active");
a.find("td:first > strong").click(function () {
var b = a.find("td:first > strong").index(this);
a.find("td:first > ul > li, td:first > strong").removeClass("active");
a.find("td:first > ul > li:eq(" + b + "), td:first > strong:eq(" + b + ")").addClass("active")
})
})
});

```

Tạo trang HTML:

ACP >> Modules >> HTML & JAVASCRIPT >> HTML pages management >> Create new HTML page:

```

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr" id="min-width" lang="vi"
xml:lang="vi">
<head>
<title>BBcode tab & column | www.fmvi.vn

Unknown end tag for &lt;/title&gt;


<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<meta http-equiv="content-script-type" content="text/javascript" />
<meta http-equiv="content-style-type" content="text/css" />
<link rel="shortcut icon" type="image/x-icon" href="http://i48.servimg.com/u/f48/16/58/89/73/minilo10.png" />
<meta name="title" content="BBcode tab" />
<link rel="search" type="application/opensearchdescription+xml" href="/improvedsearch.xml" title="Vietnamese Forumotion" />
<link rel="search" type="application/opensearchdescription+xml" href="http://www.forum-viet.com/vi/search/improvedsearch.xml" title="Search forums" />
<style type="text/css">
#container{width:54.4em;margin:0 auto}
.item{border:1px solid #DDD;margin:10px 0;padding:10px 20px}
.item p{height:1.3em;line-height:1.3em;margin-top:2px}
.item input{1px solid #DDDDDD;display:inline-block;height:1.4em}
.control span{background-position:left center;background-repeat:no-repeat;cursor:pointer;display:inline-block;float:right;height:32px;margin-top:-3px;width:32px;padding:0 10px}
.plus{background-image:url(http://i12.servimg.com/u/f12/17/70/81/78/plus10.png)}
.del{background-image:url(http://i12.servimg.com/u/f12/17/70/81/78/delete10.png)}
.up{background-image:url(http://i12.servimg.com/u/f12/17/70/81/78/arrow_11.png)}
.down{background-image:url(http://i12.servimg.com/u/f12/17/70/81/78/arrow_10.png)}
element.style{background-color:#3D883C;border-color:#1E7D1D}
.button{background-color:#15A6FF;border:1px solid #0189DD;color:#FFF;cursor:pointer;margin:0 20px;padding:5px 20px}
.button:hover{background-color:#4F4F4F;border-color:#393939}
.fmvitab{display:none;margin:0 auto}
.fmvitab td > strong{cursor:pointer;display:inline-block;padding:5px 10px}
.fmvitab td > strong.active{background-color:#6F6E6E;color:#FFF;cursor:default}
.fmvitab ul{border:1px solid #DDD;list-style:none outside none;width:100%;margin:0!important;padding:10px}
.fmvitab li{display:none}
.fmvitab li.active{display:block}
fieldset{margin-bottom:20px;display:none}
fieldset legend{color:red;font-size:20px;font-variant:small-caps;font-weight:700;margin-top:-10px;text-shadow:1px 1px 1px #000}
#tiptip{background-color:#DFF0D8;background-image:url(http://r19.imgfast.net/users/1911/13/87/62/album/th/thongb10.png);background-position:10px center;background-repeat:no-repeat;border:1px solid #9CBBA9;color:#468847;text-shadow:0 1px 0 rgba(255,255,255,0.5);top:-40px;padding:7px 40px}
#tiptip a{text-decoration:none}
.fmvicolumn{width:100%}
label{float:left;padding-right:30px}
label span{padding-right:5px}
.fmvicolumn td{padding:0 10px}
.fmvicolumn td.line{border-left:1px solid #131313}


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
<div id="container">
<p id="tiptip">BBcode © 2012 FMvi (<a rel="nofollow" target="_blank" href="http://www.fmvi.vn">www.fmvi.vn

Unknown end tag for &lt;/a&gt;

)

Unknown end tag for &lt;/p&gt;


<div>


Unknown end tag for &lt;/div&gt;


<p style="text-align: center;">
<span onclick="view()" id="view" class="button preview">
<span>Hoàn thành

Unknown end tag for &lt;/span&gt;


<span style="display: none;">Đặt lại độ rộng

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/span&gt;


<span onclick="tryit()" id="try" class="button bbcode" style="background-color: rgb(61, 136, 60); border-color: rgb(30, 125, 29); display: none">Làm lại

Unknown end tag for &lt;/span&gt;


<span onclick="inserbbtab()" id="insert" class="button insert" style="background-color: rgb(249, 82, 82); border-color: rgb(248, 45, 45); display: none">Lấy BBcode

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/p&gt;


<fieldset>
<legend>BBcode

Unknown end tag for &lt;/legend&gt;


<textarea rows="10" cols="100" id="BBcode" style="width: 99%">

Unknown end tag for &lt;/textarea&gt;




Unknown end tag for &lt;/fieldset&gt;


<fieldset>
<legend>Xem trước

Unknown end tag for &lt;/legend&gt;


<div id="preview"  style="width: 51.1em;">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/fieldset&gt;




Unknown end tag for &lt;/div&gt;


<script type="text/javascript">
function i2() {
if (GetParam("bbcode") == "column") {
return true
} else if (GetParam("bbcode") == "tab") {
return false
} else {
window.location.replace("http://www.fmvi.vn")
}
}
if (i2()) {
tip = "column";
kk = '<label><span style="float: left">Đặt đường phân cách

Unknown end tag for &lt;/span&gt;

 <input style="" name="line" class="line" type="checkbox" />

Unknown end tag for &lt;/label&gt;

<label><span style="padding-right: 5px;">Chiều rộng cột 

Unknown end tag for &lt;/span&gt;

<input value="" name="tabname" size="2" class="width" maxlength="2" type="text" /> % 

Unknown end tag for &lt;/label&gt;

'
} else {
tip = "tab";
kk = '<input class="width" type="text" size="30" name="tabname" value="Tên tab" />';
}
zz = '<div class="item" style="border-color: green"><p style="float: left;">' + kk + '

Unknown end tag for &lt;/p&gt;

<p class="control" style="border: 0px none;"><span onclick="plus(this)" class="plus">

Unknown end tag for &lt;/span&gt;

<span onclick="del(this)" class="del">

Unknown end tag for &lt;/span&gt;

<span onclick="up(this)" class="up">

Unknown end tag for &lt;/span&gt;

<span onclick="down(this)" class="down">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/p&gt;

<textarea rows="10" cols="100">Nội dung ' + tip + '

Unknown end tag for &lt;/textarea&gt;



Unknown end tag for &lt;/div&gt;

';
jQuery("#container div:first").html(zz + zz);

function i1() {
if (jQuery(".item").length == 1) {
return false
} else {
return true
}
}

function color() {
jQuery(".item").css("border-color", "#DDD");
}

function plus(a) {
color();
jQuery(a).parents(".item").after(zz);
jQuery("#tiptip").text("Thêm " + tip + " thành công.")
}

function del(a) {
if (i1()) {
color();
jQuery(a).parents(".item").remove();
jQuery("#tiptip").text("Đã xóa một " + tip + ".")
} else {
jQuery("#tiptip").text("Bạn cần tạo thêm " + tip + ".")
}
}

function up(a) {
if (i1()) {
color();
jQuery(a).parents(".item").css("border-color", "red").insertBefore(jQuery(a).parents(".item").prev());
jQuery("#tiptip").text("Đã chuyển " + tip + " lên.")
} else {
jQuery("#tiptip").text("Bạn cần tạo thêm " + tip + ".")
}
}

function down(a) {
if (i1()) {
color();
jQuery(a).parents(".item").css("border-color", "blue").insertAfter(jQuery(a).parents(".item").next());
jQuery("#tiptip").text("Đã chuyển " + tip + " xuống.")
} else {
jQuery("#tiptip").text("Bạn cần tạo thêm " + tip + ".")
}
}

function tryit() {
color();
jQuery("#preview").text("");
jQuery("#BBcode").val("");
if (i2()) {
jQuery("#view, .item").show();
jQuery("#try, fieldset, #insert").hide();
} else {
jQuery("#view span:first, .item").show();
jQuery("#view span:last, #try, fieldset, #insert").hide();
}
jQuery("#tiptip").html('BBcode ' + tip + ' © 2012 FMvi (<a rel="nofollow" target="_blank" href="http://www.fmvi.vn">www.fmvi.vn

Unknown end tag for &lt;/a&gt;

)')
}

function view() {
if (i1()) {
color();
jQuery("#preview").text("");
jQuery("#BBcode").val("");
if (!i2()) {
jQuery("#view span:first, .item").hide();
jQuery("#view span:last, #try, #insert, fieldset").show();
var si = prompt("Đặt chiều rộng cho " + tip + "\nĐơn vị px,em,pt,%", "auto");
if (si == null || si == "") {
si = "auto"
}
} else {
jQuery("#view, .item").hide();
jQuery("#try, #insert, fieldset").show();
}

jQuery(".item").each(function () {
if (jQuery(this).find(".line:checked").length && !jQuery(this).is(":first-child")) {
li = "line";
wli = ' class="line"';
} else {
li = wli = ""
}
var te = jQuery(this).find(".width").val().replace(/"/g, '"').replace(/>/g, '>').replace(/</g, '<');
var nd = jQuery(this).find("textarea").val().replace(/"/g, '"').replace(/>/g, '>').replace(/</g, '<');
if (i2()) {
if (te == "" || isNaN(te)) {
ze = te = ""
} else {
ze = ' width="' + te + '%"';
}
jQuery("#preview").text(jQuery("#preview").text() + '<td' + ze + wli + '>' + nd + '

Unknown end tag for &lt;/td&gt;

');
jQuery("#BBcode").val(jQuery("#BBcode").val() + '[td' + te + li + ']' + nd + '[/td]');
} else {
jQuery("#preview").text(jQuery("#preview").text() + '<li><strong>' + te + '

Unknown end tag for &lt;/strong&gt;

' + nd + '

Unknown end tag for &lt;/li&gt;

');
jQuery("#BBcode").val(jQuery("#BBcode").val() + '[item=' + te + ']' + nd + '');
}
});
if (i2()) {
jQuery("#preview").html('<table class="fmvicolumn"><tbody><tr>' + jQuery("#preview").text() + '

Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;

');
jQuery("#BBcode").val('[table class=fmvicolumn][tr]' + jQuery("#BBcode").val().replace(/"/g, '"').replace(/>/g, '>').replace(/</g, '<') + '[/tr][/table]');
} else {
jQuery("#preview").html('<table class="fmvitab" width="' + si + '"><tbody><tr><td align="left"><ul>' + jQuery("#preview").text() + '

Unknown end tag for &lt;/ul&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;

');
jQuery("#BBcode").val('[tab width=' + si + ']' + jQuery("#BBcode").val().replace(/"/g, '"').replace(/>/g, '>').replace(/</g, '<') + '[/list][/td][/tr][/table]');
var jQueryfmvitab = jQuery(".fmvitab");
jQueryfmvitab.find("li > strong").prependTo(jQueryfmvitab.find("td"));
jQueryfmvitab.show().find("li:first, td>strong:first").addClass("active");
jQueryfmvitab.find("td>strong").click(function () {
var n = jQueryfmvitab.find("td>strong").index(this);
jQueryfmvitab.find("li, td>strong").removeClass("active");
jQueryfmvitab.find("li:eq(" + n + "), td>strong:eq(" + n + ")").addClass("active");
});
}
jQuery("#tiptip").text("Tạo BBcode " + tip + " thành công.")
} else {
jQuery("#tiptip").text("Bạn phải tạo từ 2 " + tip + " trở lên.")
}
}

function inserbbtab() {
opener.document.getElementById('text_editor_textarea').value = opener.document.getElementById('text_editor_textarea').value + document.getElementById('BBcode').value;
opener.document.post.message.focus();
window.close()
}

function GetParam(name) {
var match = new RegExp(name + "=([^&]+)", "i").exec(location.search);
if (match == null) {
match = new RegExp(name + "=(.+)", "i").exec(location.search)
}
if (match == null) {
return null
}
match = match + "";
result = match.split(",");
return result[1]
}


Unknown end tag for &lt;/script&gt;




Unknown end tag for &lt;/body&gt;




Unknown end tag for &lt;/html&gt;


```

Sau khi tạo xong Trang HTML soạn thảo, bạn sẽ có 1 link dạng URL/hX-page
Với X là số thứ tự trang.
Thay số X đó vào chữ X ở dòng 3 trong code trên: var fmviBB = "X";
Bạn có thể truy cập Trang HTML soạn thảo theo 2 link sau:
URL/hX-page?bbcode=tab
URL/hX-page?bbcode=column



Chú ý:

Sau khi tạo xong Trang HTML soạn thảo, bạn sẽ có 1 link dạng URL/hX-page
Với X là số thứ tự trang.
Thay số X đó vào số 142 trong code Javascript toàn diễn đàn
Bạn có thể truy cập Trang HTML soạn thảo theo 2 link sau:
URL/hX-page?bbcode=tab
URL/hX-page?bbcode=column

Không ẩn bài viết khi sao chép đi nơi khác.
Không sửa, xóa bất kỳ thành phần nào trong code, mọi thắc mắc và góp ý vui lòng gửi tại đây.

Nhược điểm:

Có thể tạo nhiều Tab trong một bài viết, nhưng không thể lồng Tab vào trong Tab. Tương tự với Column.
Có thể xảy ra lỗi trong bài viết dài. Mình định để nó chuyển về BBcode gốc trong khung soạn thảo luôn, mà thấy hơi mất thẫm mỹ nên để vậy.


Tuy là cú pháp tương tự như BBcode nhưng đây không thực sự là BBcode, xử lý bằng javascript có nhiều hạn chế, mình cũng không rành dùng Regex lắm, chỉ làm được thế này thôi.

Giới thiệu


BBcode Column

> Trình bày văn bản dạng cột.
> Cú pháp:

```

[column][tdXY]text[/td][/column]

```

> X: Giá trị độ rộng mỗi cột, từ 1-99 (đơn vị %). Có thể để trống.
> Y: Đặt giá trị line để tạo đường phân cách trước cột đó
> Ví dụ:

```

[column][td30]text[/td][td70line]text[/td][/column]

```
> Khung soạn thảo:
![http://i12.servimg.com/u/f12/17/70/81/78/12-12-15.jpg](http://i12.servimg.com/u/f12/17/70/81/78/12-12-15.jpg)
![http://i12.servimg.com/u/f12/17/70/81/78/12-13-10.jpg](http://i12.servimg.com/u/f12/17/70/81/78/12-13-10.jpg)

> BBcode Tab

> Trình bày văn bản theo dạng tab.
> Cú pháp:

```

[tab width=XY][item=text]text[/item][/tab]

```
> X: Giá trị độ rộng tab, từ 1-999, đơn vị %,px,pt,em hoặc auto. Có thể để trống.
> Y: Đơn vị độ rộng %,px,pt,em hoặc auto. Có thể để trống.
> Ví dụ:

```

[tab width=700px][item=text]text[/item][item=text]text[/item][/tab]
```

> Khung soạn thảo:
> ![http://i12.servimg.com/u/f12/17/70/81/78/12-12-16.jpg](http://i12.servimg.com/u/f12/17/70/81/78/12-12-16.jpg)
> ![http://i12.servimg.com/u/f12/17/70/81/78/12-13-11.jpg](http://i12.servimg.com/u/f12/17/70/81/78/12-13-11.jpg)