Chức năng:

#Nhắn tin chung:

  * iệt hóa 99%
  * hắc phục lỗi không cuộn xuống cuối khi gửi tin nhắn bằng cách đảo ngược chatbox.
  * àm mới giao diện chọn màu và biểu tượng cảm xúc.
#Thêm hiệu ứng âm thanh khi:
    * uzz (kèm hiệu ứng rung chatbox)
    * ó thành viên truy cập hoặc thoát ra.
    * ó tin nhắn mới
    * �ăng nhập
    * �ăng xuất

#Gọn, nhẹ:
  * TML 3.2 Kb
  * SS 1.3 Kb
  * avascript 4.8 Kb / 3.3 Kb (Chưa tính jQuery)


Nhắn tin riêng:

> Chức năng tương tự chat chung, không có chức năng chat riêng và danh sách thành viên.
> Dùng lệnh /chat [nickname](nickname.md) hoặc nhấp phải chuột vào nick thành viên, chọn Nhắn tin riêng.
> Báo tin mới chỉ hoạt động khi thành viên đang online và chatbox chung đang mở.



Demo:
![http://i12.servimg.com/u/f12/17/70/81/78/full-c10.png](http://i12.servimg.com/u/f12/17/70/81/78/full-c10.png)
![http://i12.servimg.com/u/f12/17/70/81/78/mini-c10.png](http://i12.servimg.com/u/f12/17/70/81/78/mini-c10.png)

Hướng dẫn:

Bước 1: Announcements:

> Name : cookie-chat fmvi 2.1
> Content **:**

```

<script type="text/javascript">
jQuery(function () {
my_setcookie("get_tid", jQuery("#logout").attr("href").match(/&tid=(.*)&key/)[1], 1)
})


Unknown end tag for &lt;/script&gt;

 ```


Hoặc có thể tạo javascript và đặt In all the pages.
Tạo smilie mới theo mẫu sau:

  * milie Code : **:buzz**
  * milie Emotion : **:buzz**
  * milie Image File : ![http://r12.imgfast.net/users/1215/11/75/00/smiles/2270249841.gif](http://r12.imgfast.net/users/1215/11/75/00/smiles/2270249841.gif)



Bước 2: Tạo trang HTML Emoticons:
Đầu tiên bạn vào trang ```
http://LOCATION_HOST/post?mode=smilies_chatbox```
Thay LOCATION\_HOST bằng link diễn đàn của bạn, ví dụ của mình là:
```
www.fmvi.vn```
Bạn sao chép mã nguồn của trang đó bằng tổ hợp phím Ctrl+U và Ctrl+C.
Sau đó vào trang này http://www.fmvi.vn/h190-convert-emoticons để chuyển đổi.

Tạo trang HTML mới theo mẫu sau:

> Title **: smiley-chat fmvi 2.1
> Do you wish to use your forum header and footer ? No
> Use this page as homepage ? No
> HTML source** : Sử dụng mã nguồn vừa chuyển đổi ở trên


Ghi nhớ số thứ tự trang HTML vừa tạo.

Bước 3: Tạo javascript mini-chat fmvi 2.1:

> Title **: mini-chat fmvi 2.1
> Placement : Không check
> Javascript Code** : http://www.fmvi.vn/t870-2013-chatbox-fmvi-21#7693

```
    var hsmiley = 192;

function langvi(a) {
a = a.toLowerCase();
a = a.replace(/\u00e0|\u00e1|\u1ea1|\u1ea3|\u00e3|\u00e2|\u1ea7|\u1ea5|\u1ead|\u1ea9|\u1eab|\u0103|\u1eb1|\u1eaf|\u1eb7|\u1eb3|\u1eb5/g, "a");
a = a.replace(/\u00e8|\u00e9|\u1eb9|\u1ebb|\u1ebd|\u00ea|\u1ec1|\u1ebf|\u1ec7|\u1ec3|\u1ec5/g, "e");
a = a.replace(/\u00ec|\u00ed|\u1ecb|\u1ec9|\u0129/g, "i");
a = a.replace(/\u00f2|\u00f3|\u1ecd|\u1ecf|\u00f5|\u00f4|\u1ed3|\u1ed1|\u1ed9|\u1ed5|\u1ed7|\u01a1|\u1edd|\u1edb|\u1ee3|\u1edf|\u1ee1/g, "o");
a = a.replace(/\u00f9|\u00fa|\u1ee5|\u1ee7|\u0169|\u01b0|\u1eeb|\u1ee9|\u1ef1|\u1eed|\u1eef/g, "u");
a = a.replace(/\u1ef3|\u00fd|\u1ef5|\u1ef7|\u1ef9/g, "y");
a = a.replace(/\u0111/g, "d");
return a = a.replace(/\W/g, "bv")
}
function copy_user_name(a) {
$("#message").focus().val($("#message").val() + " " + a);
return !1
}
function ajax_connect() {
chatbox_updated = chatbox_last_update
}
function checkconect(a) {
"disconnect" == a ? ($("#chatbox_option_co").show(), $("#chatbox_option_disco, #chatbox_option_autorefresh, #chatbox_footer").hide(), soundchat("offline")) : "connect" == a && ($("#chatbox_option_co").hide(), $("#chatbox_option_disco, #chatbox_option_autorefresh, #chatbox_footer").show(), $("#refresh_auto").prop("checked", !0), soundchat("online"), connectC())
}
function connect_ajaxC(a) {
null == my_getcookie("get_tid") && window.location.replace("/");
checkconect(a);
$.ajax({
type: "POST",
url: "/chatbox/chatbox_actions.forum?archives=1&mode=" + a + "&tid=" + my_getcookie("get_tid"),
success: function (b) {
1 != b && $.ajax({
type: "GET",
url: "/",
success: function (b) {
my_setcookie("get_tid", $(b).find("#logout").attr("href").match(/&tid=(.*)&key/)[1], 1);
$.ajax({
type: "POST",
url: "/chatbox/chatbox_actions.forum?archives=1&mode=" + a + "&tid=" + my_getcookie("get_tid"),
success: function () {
checkconect(a)
}
})
}
})
}
})
}
function messfilter() {
var a, b = chatbox_messages.split("

Unknown end tag for &lt;/p&gt;

"),
c = "";
for (a = 0; a < b.length - 1; a++) if (-1 != b[a].indexOf(code) || /class="user"><\/span/.test(b[a])) b[a] = /href="\/u(\d+)"/.test(b[a]) ? b[a].match(/href="\/u(\d+)"/)[1] == chatbox_memberlist.match(/',(\d+),/)[1] ? b[a].replace(/\sclearfix"/, ' clearfix left"') : b[a].replace(/\sclearfix"/, ' clearfix right"') : b[a].replace(/\sclearfix"/, ' clearfix center"'), c = b[a].replace(code, "") + "

Unknown end tag for &lt;/p&gt;

" + c;
$("#chatbox").html(c);
a = c.split("

Unknown end tag for &lt;/p&gt;

").length - 1 + (chatbox_messages.split('<span class="user">

Unknown end tag for &lt;/span&gt;

').length - 1);
$("#chatmess").length || $(".chatbox-title").before('<span style="display:none" id="chatmess">' + a + "

Unknown end tag for &lt;/span&gt;

");
b = eval($("#chatmess").text());
a > b && ($(opener.document).find("." + langvi(window.name)).text(a), -1 != c.split("

Unknown end tag for &lt;/p&gt;

")[0].indexOf('alt=":buzz"') ? (c.split("

Unknown end tag for &lt;/p&gt;

")[0].match(/href="\/u(\d+)"/)[1] != $("#scode").val() && $("title").text("BUZZ!!!"), soundchat("buzz"), transformL(), setTimeout("transformR()", 100), setTimeout("transformL()", 200), setTimeout("transformR()", 300), setTimeout("transformL()", 400), setTimeout("transformR()", 500), setTimeout("transformL()", 600), setTimeout("transformR()", 700), setTimeout("$('#chatbox_header, #chatbox_footer, #chatbox, #chatbox_members').css({'transform': 'rotate(0deg)', '-moz-transform': 'rotate(0deg)', '-webkit-transform': 'rotate(0deg)', '-o-transform': 'rotate(0deg)'})", 800)) : /href="\/u(\d+)"/.test(c.split("

Unknown end tag for &lt;/p&gt;

")[0]) && (c.split("

Unknown end tag for &lt;/p&gt;

")[0].match(/href="\/u(\d+)"/)[1] != $("#scode").val() ? ($("title").text("Tin nh\u1eafn m\u1edbi"), soundchat("message")) : $("title").text("Chatbox 2.1")));
$("#chatmess").text(a);
$("#chatbox").scrollTop(0)
}
function soundchat(a) {
$("#audio").prop("checked") && $("#sound").html('<audio preload="auto" autoplay="autoplay"><source src="http://dl.dropbox.com/u/126946313/fmviChat/' + a + '.ogg" type="audio/ogg" /><source src="http://dl.dropbox.com/u/126946313/fmviChat/' + a + '.mp3" type="audio/mpeg" />

Unknown end tag for &lt;/audio&gt;

')
}
function tip(a) {
$("#chatbox").html('<p class="chatbox_row_2 clearfix"><span class="msg"><span style="font-style:italic; color:red;"><strong>' + a + "

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/p&gt;

");
clearInterval(upd);
$("#chatbox_main_options, #chatbox_footer").hide()
}
function fmvicbox() {
$.ajax({
type: "GET",
url: "/chatbox/chatbox_actions.forum?archives=1",
success: function (a) {
-1 != a.indexOf("You have been banned from the ChatBox") ? tip("B\u1ea1n b\u1ecb c\u1ea5m truy c\u1eadp, vui l\u00f2ng li\u00ean h\u1ec7 ng\u01b0\u1eddi qu\u1ea3n l\u00fd.") : -1 != a.indexOf("You must be connected to use the ChatBox.") ? tip("B\u1ea1n kh\u00f4ng th\u1ec3 s\u1eed d\u1ee5ng ch\u1ee9c n\u0103ng n\u00e0y, h\u00e3y \u0111\u0103ng nh\u1eadp tr\u01b0\u1edbc.") : -1 != a.indexOf("You are disconnected.") ? ($("#chatbox").html('<p class="chatbox_row_2 clearfix"><span class="date-and-time">' + chatbox_messages.match(/\[[0-9\:]+\]/) + '

Unknown end tag for &lt;/span&gt;

<span class="msg"><span style="font-style:italic; color:red;"><strong> M\u1ea5t k\u1ebft n\u1ed1i \u0111\u1ebfn m\u00e1y ch\u1ee7, vui l\u00f2ng \u0111\u0103ng nh\u1eadp.

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/p&gt;

'), clearInterval(upd), $("#refresh_auto").prop("checked", !1)) : chatbox_last_update > chatbox_updated && ($("#scode").val(chatbox_memberlist.match(/',(\d+),/)[1]), $("#sname").val(chatbox_memberlist.split("showMenu(" + $("#scode").val() + ",'")[1].split("'")[0]), $("#message").attr("placeholder", "Nh\u1eafn tin cho " + window.name.replace($("#sname").val(), "").replace(":|:", "")), "" == chatbox_messages ? $("#chatbox").html('<p class="chatbox_row_2 clearfix"><span class="msg"><span style="font-style:italic"><strong><span style="color:green;">B\u1ea1n \u0111ang s\u1eed d\u1ee5ng <span style="color:blue;">Chatbox 2.0

Unknown end tag for &lt;/span&gt;

 vi\u1ebft b\u1edfi

Unknown end tag for &lt;/span&gt;

 <span style="color:red;">baivong

Unknown end tag for &lt;/span&gt;

 <a target="_blank" href="http://www.fmvi.vn">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/p&gt;

') : messfilter(), chatbox_updated = chatbox_last_update)
}
})
}
function cookiecbox() {
if (null != my_getcookie("fmviminichat")) {
var a = my_getcookie("fmviminichat").split("|");
1 == a[0] ? ($("#sbold").val(1), $("#message").css("font-weight", "bold")) : ($("#sbold").val(0), $("#message").css("font-weight", "normal"));
1 == a[1] ? ($("#sitalic").val(1), $("#message").css("font-style", "italic")) : ($("#sitalic").val(0), $("#message").css("font-style", "normal"));
1 == a[2] && 1 == a[3] ? ($("#message").css("text-decoration", "underline line-through"), $("#sstrike, #sunderline").val(1)) : 0 == a[2] && 1 == a[3] ? ($("#message").css("text-decoration", "line-through"), $("#sstrike").val(1), $("#sunderline").val(0)) : 1 == a[2] && 0 == a[3] ? ($("#message").css("text-decoration", "underline"), $("#sstrike").val(0), $("#sunderline").val(1)) : 0 == a[2] && 0 == a[3] && ($("#message").css("text-decoration", "none"), $("#sstrike, #sunderline").val(0));
$("#scolor").val(a[4]);
$("#message").css("color", a[4]);
$("#show_color").css("background", a[4]);
$("#data input").each(function () {
1 == $(this).val() && $("#div" + $(this).attr("id").slice(1)).addClass("tg")
})
}
}
function my_getcookie(a) {
cname = a + "=";
cpos = document.cookie.indexOf(cname);
return -1 != cpos ? (cstart = cpos + cname.length, cend = document.cookie.indexOf(";", cstart), -1 == cend && (cend = document.cookie.length), unescape(document.cookie.substring(cstart, cend))) : null
}
function my_setcookie(a, b, c, d) {
domain = expires = "";
c && (expires = "; expires=Wed, 1 Jan 2020 00:00:00 GMT");
d || (d = "/");
document.cookie = a + "=" + b + "; path=" + d + expires + domain + ";"
}
function connectC() {
fmvicbox();
$("#refresh_auto").prop("checked") ? upd = setInterval(function () {
fmvicbox()
}, 3500) : clearInterval(upd)
}
function transformL() {
$("#chatbox_header, #chatbox_footer, #chatbox, #chatbox_members").css({
transform: "rotate(-5deg)",
"-moz-transform": "rotate(-5deg)",
"-webkit-transform": "rotate(-5deg)",
"-o-transform": "rotate(-5deg)"
})
}
function transformR() {
$("#chatbox_header, #chatbox_footer, #chatbox, #chatbox_members").css({
transform: "rotate(5deg)",
"-moz-transform": "rotate(5deg)",
"-webkit-transform": "rotate(5deg)",
"-o-transform": "rotate(5deg)"
})
}
function submitchat() {
var a = $("#scode").val(),
b = $("#message").val();
if ("" == b) return !1;
0 == b.indexOf("/me") || 0 == b.indexOf("/away") || 0 == b.indexOf("/abs") || 0 == b.indexOf("/cls") || 0 == b.indexOf("/clear") || 1 == a && 0 == b.indexOf("/ban ") || 1 == a && 0 == b.indexOf("/unban ") ? ($.ajax({
type: "POST",
url: "/chatbox/chatbox_actions.forum?archives=1",
data: {
mode: "send",
sent: $("#message").val()
},
success: function () {
messfilter();
chatbox_updated = chatbox_last_update
}
}), $("#message").val("")) : 0 == b.indexOf("/banlist") ? (window.open("/chatbox/chatbox_banlist.forum?archives=1", "baivong", "toolbar=no,menubar=no,personalbar=no,width=450,height=300,scrollbars=auto,resizable=yes"), $("#message").val("")) : $.ajax({
type: "POST",
url: "/chatbox/chatbox_actions.forum?archives=1",
data: {
mode: "send",
sbold: $("#sbold").val(),
sitalic: $("#sitalic").val(),
sunderline: $("#sunderline").val(),
sstrike: $("#sstrike").val(),
scolor: $("#scolor").val(),
sent: code + $("#message").val()
},
success: function () {
messfilter();
chatbox_updated = chatbox_last_update;
$("#message").val("")
}
})
}
function emotiocon() {
$("#cSmiley").contents().find("span").click(function () {
$("#message").focus().val($("#message").val() + " " + $(this).attr("alt"));
$("#divsmilies").removeClass("select");
$("#smileycbox").hide();
contr()
})
}
function CB_disconnect() {
connected = !1
}
function contr() {
$("#control").animate({
right: -305
}, 300)
}
var connected = 0,
chatbox_updated = 0,
chatbox_last_update = 1,
chatbox_messages = "b\u1ea1i vong",
upd, code = "[{" + window.name + "}]";
$(function () {
var a = $(opener.document).find("#spopup");
a.val(eval(a.val()) + 1);
0 == window.name.length ? (window.close(), alert("Ch\u01b0a ch\u1ecdn b\u1ea1n chat!")) : (cookiecbox(), connect_ajaxC("connect"), soundchat("online"), $("#divbuzz").click(function () {
$.ajax({
type: "POST",
url: "/chatbox/chatbox_actions.forum?archives=1",
data: {
mode: "send",
sent: code + ":buzz"
},
success: function () {
messfilter();
chatbox_updated = chatbox_last_update
}
})
}), $("#divsmilies").click(function () {
$("#cSmiley").length || $("#smileycbox").html('<iframe onload="emotiocon()" width="100%" height="100%" frameborder="0" src="/h' + hsmiley + '-smiley-chatbox-20" id="cSmiley">

Unknown end tag for &lt;/iframe&gt;

')
}), $("#refresh_auto").click(function () {
connectC()
}), $(".wd").click(function () {
$(this).toggleClass("select").next().toggle()
}), $("#cColor a").click(function () {
$("#scolor").val($(this).text());
$("#divcolor").removeClass("select");
$("#cColor").hide()
}), $(".font").click(function () {
var a = $("#s" + $(this).attr("id").slice(3)),
c;
0 == a.val() ? (c = 1, $(this).addClass("tg")) : (c = 0, $(this).removeClass("tg"));
a.val(c)
}), $("#cColor a, .font").click(function () {
my_setcookie("fmviminichat", $("#sbold").val() + "|" + $("#sitalic").val() + "|" + $("#sunderline").val() + "|" + $("#sstrike").val() + "|" + $("#scolor").val(), 1);
cookiecbox()
}), $("#message").keypress(function (a) {
if (13 == a.keyCode) return submitchat(), !1
}), $("#submit_button").click(function () {
submitchat();
return !1
}), $("#divcontrol").click(function () {
"35px" != $("#control").css("right") ? $("#control").animate({
right: 35
}, 300) : contr()
}), $("#divbuzz, .font, #cColor a").click(function () {
contr()
}))
})```

Tìm trong code trên số 192 và thay nó bằng số thứ tự trang HTML Emoticons mà bạn đã tạo ở bước 2.

Bước 4: Tạo trang HTML mini-chat fmvi 2.1:
Tạo trang HTML mới theo mẫu sau:

> Title **: HTML mini-chat fmvi 2.1
> Do you wish to use your forum header and footer ? No
> Use this page as homepage ? No
> HTML source** : http://www.fmvi.vn/t870-2013-chatbox-fmvi-21#7694

```
    <!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" dir="ltr" id="min-width" lang="en" xml:lang="en"  ><head><title>Chatbox 2.1

Unknown end tag for &lt;/title&gt;

<meta http-equiv="content-type" content="text/html; charset=utf-8" /><meta http-equiv="content-script-type" content="text/javascript" /><meta http-equiv="content-style-type" content="text/css" /><link rel="shortcut icon" type="image/x-icon" href="http://i48.servimg.com/u/f48/16/58/89/73/minilo10.png" /><meta name="language" content="en" /><meta name="description" content="Hướng dẫn - Chia sẽ - Phát triển ứng dụng cho Forumotion" /><meta name="keywords" content="Vietnamese Forumotion, fmvi.org, fmvi.vn, fmvi.tk, fmvi-group, free forum, templastes, HTML, JavaScript, jQuery, forumotion, support, TUT, share, free, easy, simple" lang="en" /><meta name="robots" content="index, follow, noodp" /><meta name="google-site-verification" content="c5k20fjsxZJqQF83Ldn3cySwds1MUd8CFhUBpIVPXUo" />
<meta name="title" content="Vietnamese Forumotion - chatbox 2.1" /><link rel="stylesheet" href="http://dl.dropbox.com/u/126946313/fmviChat/fmvicbox-mini.css" type="text/css" /><link rel="search" type="application/opensearchdescription+xml" href="/improvedsearch.xml" title="Vietnamese Forumotion" /><link rel="search" type="application/opensearchdescription+xml" href="http://www.board-directory.net/en/search/improvedsearch.xml" title="Search forums" /><script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;



<script type="text/javascript" src="http://baivong.forumclan.com/21785.js">

Unknown end tag for &lt;/script&gt;



<script type="text/javascript">//<![CDATA[
var _gaq = _gaq || [];_gaq.push(["_setAccount", "UA-26966514-1"]);_gaq.push(["_trackPageview"]);(function() {var ga = document.createElement("script"); ga.type = "text/javascript"; ga.async = true;ga.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ga, s);})();//]]>

Unknown end tag for &lt;/script&gt;



Unknown end tag for &lt;/head&gt;

<body>
<div style="display:none" id="chatbox_messenger_form">
Chatbox forumotion 2.1 viết bởi baivong - www.fmvi.vn. Giữ toàn quyền.
Nghiêm cấm mọi hành sửa, xóa, xuyên tạc bản quyền mod.
Mọi ý kiến đóng góp vui lòng gửi về địa chỉ lhthanh.pro@gmail.com.


Unknown end tag for &lt;/div&gt;


<table id="chatbox_footer">
<tbody><tr>
<td id="data" style="width: 100px;">
<input type="submit" name="submit_button" value="Gửi" id="submit_button" />
<input type="hidden" id="sbold" value="0" />
<input type="hidden" id="sitalic" value="0" />
<input type="hidden" id="sunderline" value="0" />
<input type="hidden" id="sstrike" value="0" />
<input type="hidden" id="scolor" value="#FFFFFF" />
<input type="hidden" id="scode" value="0" />
<input type="hidden" id="sname" value="0" />
<input type="hidden" id="schat" value="" />


Unknown end tag for &lt;/td&gt;


<td>
<input type="text" id="message" name="message" size="35" maxlength="1024" class="post" autocomplete="off" />


Unknown end tag for &lt;/td&gt;


<td style="width: 40px; text-align: center;">
<div id="divcontrol" class="control button">
<img width="20" height="20" title="control" alt="control" src="http://i15.servimg.com/u/f15/16/58/89/73/manage10.png" />


Unknown end tag for &lt;/div&gt;


<div id="control">
<div id="divbuzz" class="button">
<img width="60" height="20" title="buzz" alt="buzz" src="http://r12.imgfast.net/users/1215/11/75/00/smiles/2270249841.gif" />


Unknown end tag for &lt;/div&gt;


<div id="divbold" class="font button">
<img src="http://illiweb.com/fa/subsilver/wysiwyg/bold.gif" width="21" height="20" alt="Bold" title="Bold" />


Unknown end tag for &lt;/div&gt;


<div id="divitalic" class="font button">
<img src="http://illiweb.com/fa/subsilver/wysiwyg/italic.gif" width="21" height="20" alt="Ital." title="Ital." />


Unknown end tag for &lt;/div&gt;


<div id="divunderline" class="font button">
<img src="http://illiweb.com/fa/subsilver/wysiwyg/underline.gif" width="21" height="20" alt="Underl." title="Underl." />


Unknown end tag for &lt;/div&gt;


<div id="divstrike" class="font button">
<img src="http://illiweb.com/fa/subsilver/wysiwyg/strike.gif" width="21" height="20" alt="Strike" title="Strike" />


Unknown end tag for &lt;/div&gt;


<div id="divcolor" class="wd button">
<img width="20" height="20" title="Font color" alt="Font color" id="show_color" src="http://illiweb.com/fa/subsilver/wysiwyg/clear.gif" style="background-color: #333333" />


Unknown end tag for &lt;/div&gt;


<div id="cColor"><ul><li><a style="background: #ffffff; colour: 000000;" rel="ffffff" title="#ffffff" href="#">#ffffff

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #ffccc9; colour: 000000;" rel="ffccc9" title="#ffccc9" href="#">#ffccc9

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #ffce93; colour: 000000;" rel="ffce93" title="#ffce93" href="#">#ffce93

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #fffc9e; colour: 000000;" rel="fffc9e" title="#fffc9e" href="#">#fffc9e

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #ffffc7; colour: 000000;" rel="ffffc7" title="#ffffc7" href="#">#ffffc7

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #9aff99; colour: 000000;" rel="9aff99" title="#9aff99" href="#">#9aff99

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #96fffb; colour: 000000;" rel="96fffb" title="#96fffb" href="#">#96fffb

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #cdffff; colour: 000000;" rel="cdffff" title="#cdffff" href="#">#cdffff

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #cbcefb; colour: 000000;" rel="cbcefb" title="#cbcefb" href="#">#cbcefb

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #cfcfcf; colour: 000000;" rel="cfcfcf" title="#cfcfcf" href="#">#cfcfcf

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #fd6864; colour: 000000;" rel="fd6864" title="#fd6864" href="#">#fd6864

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #fe996b; colour: 000000;" rel="fe996b" title="#fe996b" href="#">#fe996b

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #fffe65; colour: 000000;" rel="fffe65" title="#fffe65" href="#">#fffe65

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #fcff2f; colour: 000000;" rel="fcff2f" title="#fcff2f" href="#">#fcff2f

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #67fd9a; colour: 000000;" rel="67fd9a" title="#67fd9a" href="#">#67fd9a

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #38fff8; colour: 000000;" rel="38fff8" title="#38fff8" href="#">#38fff8

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #68fdff; colour: 000000;" rel="68fdff" title="#68fdff" href="#">#68fdff

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #9698ed; colour: 000000;" rel="9698ed" title="#9698ed" href="#">#9698ed

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #c0c0c0; colour: 000000;" rel="c0c0c0" title="#c0c0c0" href="#">#c0c0c0

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #fe0000; colour: 000000;" rel="fe0000" title="#fe0000" href="#">#fe0000

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #f8a102; colour: 000000;" rel="f8a102" title="#f8a102" href="#">#f8a102

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #ffcc67; colour: 000000;" rel="ffcc67" title="#ffcc67" href="#">#ffcc67

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #f8ff00; colour: 000000;" rel="f8ff00" title="#f8ff00" href="#">#f8ff00

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #34ff34; colour: 000000;" rel="34ff34" title="#34ff34" href="#">#34ff34

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #68cbd0; colour: 000000;" rel="68cbd0" title="#68cbd0" href="#">#68cbd0

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #34cdf9; colour: 000000;" rel="34cdf9" title="#34cdf9" href="#">#34cdf9

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #6665cd; colour: 000000;" rel="6665cd" title="#6665cd" href="#">#6665cd

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #9b9b9b; colour: 000000;" rel="9b9b9b" title="#9b9b9b" href="#">#9b9b9b

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #cb0000; colour: 000000;" rel="cb0000" title="#cb0000" href="#">#cb0000

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #f56b00; colour: 000000;" rel="f56b00" title="#f56b00" href="#">#f56b00

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #ffcb2f; colour: 000000;" rel="ffcb2f" title="#ffcb2f" href="#">#ffcb2f

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #ffc702; colour: 000000;" rel="ffc702" title="#ffc702" href="#">#ffc702

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #32cb00; colour: 000000;" rel="32cb00" title="#32cb00" href="#">#32cb00

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #00d2cb; colour: 000000;" rel="00d2cb" title="#00d2cb" href="#">#00d2cb

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #3166ff; colour: 000000;" rel="3166ff" title="#3166ff" href="#">#3166ff

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #6434fc; colour: 000000;" rel="6434fc" title="#6434fc" href="#">#6434fc

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #656565; colour: 000000;" rel="656565" title="#656565" href="#">#656565

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #9a0000; colour: 000000;" rel="9a0000" title="#9a0000" href="#">#9a0000

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #ce6301; colour: 000000;" rel="ce6301" title="#ce6301" href="#">#ce6301

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #cd9934; colour: 000000;" rel="cd9934" title="#cd9934" href="#">#cd9934

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #999903; colour: 000000;" rel="999903" title="#999903" href="#">#999903

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #009901; colour: 000000;" rel="009901" title="#009901" href="#">#009901

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #329a9d; colour: 000000;" rel="329a9d" title="#329a9d" href="#">#329a9d

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #3531ff; colour: 000000;" rel="3531ff" title="#3531ff" href="#">#3531ff

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #6200c9; colour: 000000;" rel="6200c9" title="#6200c9" href="#">#6200c9

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #343434; colour: 000000;" rel="343434" title="#343434" href="#">#343434

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #680100; colour: 000000;" rel="680100" title="#680100" href="#">#680100

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #963400; colour: 000000;" rel="963400" title="#963400" href="#">#963400

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #986536; colour: 000000;" rel="986536" title="#986536" href="#">#986536

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #646809; colour: 000000;" rel="646809" title="#646809" href="#">#646809

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #036400; colour: 000000;" rel="036400" title="#036400" href="#">#036400

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #34696d; colour: 000000;" rel="34696d" title="#34696d" href="#">#34696d

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #00009b; colour: 000000;" rel="00009b" title="#00009b" href="#">#00009b

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #303498; colour: 000000;" rel="303498" title="#303498" href="#">#303498

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #000000; colour: ffffff;" rel="000000" title="#000000" href="#">#000000

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #330001; colour: 000000;" rel="330001" title="#330001" href="#">#330001

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #643403; colour: 000000;" rel="643403" title="#643403" href="#">#643403

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #663234; colour: 000000;" rel="663234" title="#663234" href="#">#663234

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #343300; colour: 000000;" rel="343300" title="#343300" href="#">#343300

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #013300; colour: 000000;" rel="013300" title="#013300" href="#">#013300

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #003532; colour: 000000;" rel="003532" title="#003532" href="#">#003532

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #010066; colour: 000000;" rel="010066" title="#010066" href="#">#010066

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a style="background: #340096; colour: 000000;" rel="340096" title="#340096" href="#">#340096

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;



Unknown end tag for &lt;/ul&gt;



Unknown end tag for &lt;/div&gt;


<div id="divsmilies" class="wd button">
<img src="http://illiweb.com/fa/subsilver/wysiwyg/smilie.gif" width="21" height="20" alt="Emoticons" title="Emoticons" />


Unknown end tag for &lt;/div&gt;


<div id="smileycbox">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;


<div id="chatbox_members" curpos="0" maxpos="460" pageincrement="144" increment="10">


Unknown end tag for &lt;/div&gt;


<div id="chatbox" curpos="188" maxpos="325" pageincrement="0" increment="10">

Unknown end tag for &lt;/div&gt;


<div id="chatbox_header" class="main-head">
<h2 class="chatbox-title">Chatbox 2.1

Unknown end tag for &lt;/h2&gt;


<ul id="chatbox_main_options" class="chatbox-options">
<li id="chatbox_option_autorefresh">
<div id="sound">

Unknown end tag for &lt;/div&gt;


<label>
<a href="javascript:void(0)">Âm thanh

Unknown end tag for &lt;/a&gt;

&nbsp;
<input type="checkbox" style="vertical-align: middle" checked="checked" id="audio" name="sound">


Unknown end tag for &lt;/label&gt;


&nbsp;|&nbsp;
<label>
<a onclick="fmvicbox()" href="javascript:void(0)">Cập nhật

Unknown end tag for &lt;/a&gt;

&nbsp;
<input type="checkbox" style="vertical-align: middle" checked="checked" id="refresh_auto" name="refresh_auto">


Unknown end tag for &lt;/label&gt;

&nbsp;|&nbsp;


Unknown end tag for &lt;/li&gt;


<li>
<span style="display: none;" id="chatbox_option_co"><strong><a onclick="connect_ajaxC('connect')" href="javascript:void(0)">Đăng nhập

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;


<span id="chatbox_option_disco"><a onclick="connect_ajaxC('disconnect')" href="javascript:void(0)">Đăng xuất

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/body&gt;



Unknown end tag for &lt;/html&gt;



```
Tìm http://baivong.forumclan.com/21785.js trong code trên và thay nó bằng link file javascript đã tạo ở bước 3.


Bước 5: Tạo javascript full-chat fmvi 2.1:

> Title **: full-chat fmvi 2.1
> Placement : Không check
> Javascript Code** : http://www.fmvi.vn/t870-2013-chatbox-fmvi-21#7695


Tìm trong code trên số 192 và thay nó bằng số thứ tự trang HTML Emoticons mà bạn đã tạo ở bước 2.
Tìm trong code trên số 193 và thay nó bằng số thứ tự trang HTML mini-chat fmvi 2.1 mà bạn đã tạo ở bước 4.

Bước 6: Tạo trang HTML full-chat fmvi 2.1:
Tạo trang HTML mới theo mẫu sau:

> Title **: HTML full-chat fmvi 2.1
> Do you wish to use your forum header and footer ? No
> Use this page as homepage ? No
> HTML source** : http://www.fmvi.vn/t870-2013-chatbox-fmvi-21#7696


Tìm http://baivong.forumclan.com/20032.js trong code trên và thay nó bằng link file javascript đã tạo ở bước 5.

Bước 7: Thay toàn bộ Template mod\_chatbox:

```

<style type="text/css">
#chatbox_portal.fullscreen{bottom:0;height:100%!important;left:0;position:fixed;top:0;width:100%;z-index:1001}
#fulls,#full-cancel{cursor:pointer;z-index:1002;background:url(http://i15.servimg.com/u/f15/16/58/89/73/full10.png) no-repeat;width:32px;height:32px}
#fulls{background-position:0 0;margin-left:2px;margin-top:-64px;position:absolute;}
#full-cancel{background-position:0 -32px;bottom:30px;display:none;left:2px;position:fixed;}


Unknown end tag for &lt;/style&gt;


<div class="module main">
<div class="main-content">
<div id="chatbox_portal" style="border: 1px solid #DDD;overflow:none;height:300px;">

Unknown end tag for &lt;/div&gt;


<div id="fulls">

Unknown end tag for &lt;/div&gt;

<div id="full-cancel">

Unknown end tag for &lt;/div&gt;


<script type="text/javascript">
insertChatBoxNew('chatbox_portal', '/h191-chatbox-fmvi-20');
$("#fulls").click(function () {
$("#chatbox_portal").addClass("fullscreen");
$(this).hide().next().show()
});
$("#full-cancel").click(function () {
$("#chatbox_portal").removeClass("fullscreen");
$(this).hide().prev().show()
});


Unknown end tag for &lt;/script&gt;


<img src="http://illiweb.com/fa/resize.gif" onmousedown="javascript:resizeElement(event, 'chatbox_portal');" alt="" style="cursor:se-resize; float: right;" />


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;



```
Thay số 191 bằng số thứ tự trang HTML tạo ở bước 6
Thêm vào CSS của diễn đàn:

```

#chatbox_header,#chatbox_footer,#chatbox,#chatbox_members{display:none}
```


Ghi chú:

> Nên upload lại CSS và file âm thanh dùng trong chatbox http://www.fmvi.vn/t870-2013-chatbox-fmvi-21#7697
> Chức năng nhắn tin riêng sử dụng popup nên bạn phải tắt chức năng chặn popup của trình duyệt.
> Khi popup không tự động bật, bạn click vào nick thành viên trong danh sách Chat để chat riêng (một số add-on có thể chặn được click mở popup).
> Chat riêng chỉ áp dụng cho thành viên đang có mặt trong chatbox.
> Khi bạn vừa vào chatbox nếu có yêu cầu chat riêng, popup sẽ tự bật. Chỉ số trên nick lúc này là số tin nhắn trong chatbox riêng, khi bạn bắt đầu chat, nó sẽ là số tin nhắn mới.
> Lệnh /me sẽ gửi tin nhắn lên cả chatbox chung và riêng.
> Lệnh /ban, /unban chỉ có admin chính mới sử dụng được. Mod có thể ban nick bằng cách click phải chuột vào nick thành viên.
> Không ẩn bài viết khi sao chép lại hướng dẫn này.
> Không thay đổi bất cứ thành phần nào trong code khi chưa có sự đồng ý từ baivong.

CSS mini-chat fmvi 2.1:

```
    *{margin:0;padding:0}
body{overflow:hidden;background-color:#000;color:#333;font-family:Verdana, Arial, Helvetica, sans-serif;font-size:12px}
#chatbox_header{bottom:0;height:30px;left:0;position:absolute;right:0}
#chatbox_header.main-head{background-color:#000;color:#DDD;padding:0 1.3em}
a{text-decoration:none}
.msg a:after{content:"[link]";font-size:12px;color:#96FE2A}
.msg a:link{font-size:0;display:inline-block}
.chatbox-title{float:left;width:15em;margin:0;padding:2px 5px 0}
.chatbox-options{background-color:#000;font-size:11px;height:30px;line-height:30px;list-style:none outside none;position:absolute;right:0;text-align:right;width:300px;padding:0 20px}
.chatbox-options li{display:inline}
.chatbox-options li,.chatbox-options li a,.chatbox-options li label{color:#DDD;font-weight:700}
#chatbox_members{display: none;bottom:30px;overflow:auto;position:absolute;top:42px;width:180px}
#chatbox_messenger_form{margin:10px 0 0}
#chatbox_members .member-title{background-color:#f4f9fd;background-image:none;color:#216a8c;font-family:Verdana, Arial, Helvetica, sans-serif;font-size:12px;text-align:center;padding:.5em .25em}
#chatbox_members ul{list-style:none;margin:0 0 0 1em}
#chatbox_members ul li{margin:.5em .5em .5em 0}
#chatbox{background:url(http://i48.servimg.com/u/f48/16/58/89/73/backgr18.jpg) repeat scroll 0 0 #333;overflow-x:hidden;min-width:340px;left:0;bottom:30px;line-height:10px;position:absolute;right:0;top:42px}
#chatbox p{line-height:1.2em}
.chatbox_row_1,.chatbox_row_2,.chatbox_row_3{padding:4px}
.memberlist_row_1{background-color:#fbfbfb}
#chatbox_footer{background-color:#000;height:42px;position:absolute;vertical-align:middle;width:100%;z-index:30}
.button:hover{background:none repeat scroll 0 0 #D3D3D3;border-style:inset}
#message,.button{background:none repeat scroll 0 center #EAEAEA;border:1px outset #DDD;color:#000;cursor:pointer;display:inline-block;height:20px;line-height:20px;margin-right:4px;min-width:20px;text-align:left;padding:1px}
#message{color:#FFF;background-color:#343434;border:1px solid #666;cursor:text;width:100%}
#submit_button{background-color:#4AA8FF;border:1px outset #009EFF;color:#FFF;cursor:pointer;float:left;font-weight:700;height:24px;line-height:24px;text-align:center;width:60px;margin:0 20px}
#submit_button:hover{background-color:#1972FF;border:1px inset #0048FC}
#chatbox_contextmenu{background-color:#FFF;border:2px solid #000;padding:5px 5px 0}
#chatbox_contextmenu p.close{background-color:#656565;border:1px solid #000;color:#FFF;font-size:95%;padding:2px 5px 3px}
#chatbox_contextmenu p{border-bottom:1px dashed #000;font-family:verdana,arial,sans-serif;margin-bottom:-1px;padding:1px 4px}
#chatbox_contextmenu p.hover a{color:#308EFF}
#chatbox_contextmenu p.close img{float:right;vertical-align:middle}
#chatbox_contextmenu a{color:#216a8c;font-size:95%;text-decoration:none}
.control.button{position:absolute;right:0;top:9px}
#control{background-color:#000;height:20px;line-height:42px;position:absolute;right:-305px;top:0;width:285px;padding:5px 10px 17px}
#smileycbox,#cColor{background-color:#FFF;border:1px solid #DDD;display:none;position:absolute;top:32px;z-index:5}
#smileycbox{height:200px;right:24px;width:270px;padding:5px}
#cColor{right:57px;width:180px;padding:10px 5px 5px 10px}
#cColor ul{list-style-type:none;margin:0;padding:0}
#cColor ul li{float:left;margin:0 5px 5px 0}
#cColor ul li a{border:1px solid #AAA;display:block;height:13px;outline:0 none;text-decoration:none;text-indent:-100000px;width:13px}
.button.select{background-color:#FFF;position:relative;z-index:10;border-color:#DDD #DDD transparent;border-style:solid;border-width:1px}
.font.button.tg{background-color:#FFFAD3}
#chatbox .user{color:#333;display:block;float:left;font-weight:700;margin-top:4px;position:relative;width:75px}
.date-and-time{background-color:#FFF;border:1px solid #DDD;border-radius:2px 2px 2px 2px;display:none;right:0;position:absolute;z-index:10;margin:2px;padding:3px}
#chatbox p:hover .date-and-time{display:block}
.left .msg:after{border-bottom:6px solid transparent;border-right:6px solid #134359;border-top:6px solid transparent;clear:both;content:" ";display:inline-block;left:-6px;position:absolute;top:5px}
.left .msg:before{border-bottom:7px solid transparent;border-right:7px solid rgb(90, 145, 170);border-top:7px solid transparent;clear:both;content:"";display:inline-block;left:-7px;position:absolute;top:4px}
.msg{background-color:#134359;border:1px solid #53717E;border-radius:3px 3px 3px 3px;display:inline-block;max-width:200px;position:relative;text-align:justify;padding:5px 15px}
.right .msg:after{border-bottom:6px solid transparent;border-left:6px solid #3A3A3A;border-top:6px solid transparent;clear:both;content:" ";display:inline-block;position:absolute;right:-6px;top:5px}
.right .msg:before{border-bottom:7px solid transparent;border-left:7px solid rgb(146, 146, 146);border-top:7px solid transparent;clear:both;content:"";display:inline-block;position:absolute;right:-7px;top:4px}
.right .msg{background-color:#3A3A3A;margin-right:10px;border-color:#676666}
#chatbox .right .user{float:right;margin-right:-10px;text-align:left}
.clearfix.right{text-align:right}
.user a{overflow:hidden;position:absolute;text-overflow:ellipsis;white-space:nowrap;width:70px}
.right .date-and-time{left:0;right:auto}
.clearfix.center{margin-top:10px;text-align:center}
.center .date-and-time{margin-right:-65px;margin-top:-15px;right:50%}
.center .msg{background-color:#0069B3;color:#FEFEFE;font-style:italic;margin-left:-85px;width:200px;border-color:#479AFF}```

CSS full-chat fmvi 2.1:

```
    *{margin:0;padding:0}
body{background-color:#FFF;color:#333;font-family:Verdana, Arial, Helvetica, sans-serif;font-size:12px;min-width: 550px}
#chatbox_header{bottom:0;height:30px;left:0;position:absolute;right:0}
#chatbox_header.main-head{background-color:#000;color:#DDD;padding:0 1.3em}
a{text-decoration:none}
.msg a:after{content:"[link]";font-size:12px}
.msg a:link{font-size:0;display:inline-block}
.chatbox-title{float:left;width:15em;margin:0;padding:2px 5px 0}
.chatbox-options{float:right;font-size:11px;list-style:none;margin:.7em .5em .5em}
.chatbox-options li{display:inline}
.chatbox-options li,.chatbox-options li a,.chatbox-options li label{color:#DDD;font-weight:700}
#chatbox_members{border-top:1px dashed #CCC;border-right:1px dashed #CCC;bottom:30px;overflow:auto;position:absolute;top:42px;width:180px}
#chatbox_messenger_form{margin:10px 0 0}
#chatbox_members .member-title{background-color:#f4f9fd;background-image:none;color:#216a8c;font-family:Verdana, Arial, Helvetica, sans-serif;font-size:12px;text-align:center;padding:.5em .25em}
#chatbox_members ul{list-style:none;margin:0 0 0 1em}
#chatbox_members ul li{margin:.5em .5em .5em 0}
#chatbox{border-top:1px dashed #CCC;left:181px;bottom:30px;line-height:10px;overflow:auto;position:absolute;right:0;top:42px}
#chatbox p{line-height:1.2em}
.chatbox_row_1{background-color:#fbfbfb;padding:4px}
.chatbox_row_2{background-color:#fff;padding:4px}
.chatbox_row_3{background-color:#f4f9fd;padding:4px}
#chatbox .user{font-weight:700}
.memberlist_row_1{background-color:#fbfbfb}
#chatbox_footer{background-color:#FFF;height:42px;position:absolute;vertical-align:middle;width:100%;z-index:30}
.button:hover{background:none repeat scroll 0 0 #D3D3D3;border-style:inset}
#message,.button{background:none repeat scroll 0 center #EAEAEA;border:1px outset #DDD;color:#000;cursor:pointer;display:inline-block;height:20px;line-height:20px;margin-right:4px;min-width:20px;text-align:left;padding:1px}
#message{background-color:#FFF;cursor:text;width:100%;border-style:solid}
#submit_button{background-color:#4AA8FF;border:1px outset #009EFF;color:#FFF;cursor:pointer;float:left;font-weight:700;height:24px;line-height:24px;text-align:center;width:60px;margin:0 20px}
#submit_button:hover{background-color:#1972FF;border:1px inset #0048FC}
#chatbox_contextmenu{background-color:#FFF;border:2px solid #000;padding:5px 5px 0}
#chatbox_contextmenu p.close{background-color:#656565;border:1px solid #000;color:#FFF;font-size:95%;padding:2px 5px 3px}
#chatbox_contextmenu p{border-bottom:1px dashed #000;font-family:verdana,arial,sans-serif;margin-bottom:-1px;padding:1px 4px}
#chatbox_contextmenu p.hover a{color:#308EFF}
#chatbox_contextmenu p.close img{float:right;vertical-align:middle}
#chatbox_contextmenu a{color:#216a8c;font-size:95%;text-decoration:none}
#smileycbox,#cColor{background-color:#FFF;border:1px solid #DDD;display:none;position:absolute;top:32px;z-index:5}
#smileycbox{right:23px;width:330px;padding:5px}
#cColor{right:56px;width:180px;padding:10px 5px 5px 10px}
#cColor ul{list-style-type:none;margin:0;padding:0}
#cColor ul li{float:left;margin:0 5px 5px 0}
#cColor ul li a{border:1px solid #AAA;display:block;height:13px;outline:0 none;text-decoration:none;text-indent:-100000px;width:13px}
.button.select{background-color:#FFF;position:relative;z-index:10;border-color:#DDD #DDD transparent;border-style:solid;border-width:1px}
.font.button.tg{background-color:#FFFAD3}
.date-and-time{background-color:#FFF;display:none;position:absolute;right:0}
#chatbox p:hover .date-and-time{display:block}
.tippop{background-color:#FF0E0E;border-radius:7px 7px 7px 7px;color:#FFF;display:inline-block;font-size:9px;font-weight:700;margin-top:-5px;position:absolute;padding:0 4px 1px}```

http://www.4sync.com/zip/63uGwr8K/chatbox-fmvi-2-1.html