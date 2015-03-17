Chức năng:

  * hắc phục lỗi không cuộn xuống cuối khi gửi tin nhắn bằng cách đảo ngược chatbox.
  * àm mới giao diện chọn màu và biểu tượng cảm xúc.
  * hêm hiệu ứng âm thanh khi:
    * uzz (kèm hiệu ứng rung chatbox)
    * ó thành viên truy cập hoặc thoát ra.
> > Có tin nhắn mới
    * �ăng nhập
    * �ăng xuất


> Gọn, nhẹ:
> > HTML 3.2 Kb
> > CSS 1.3 Kb
> > Javascript 3.7 Kb


> Việt hóa 99%



Demo: ![http://i12.servimg.com/u/f12/17/70/81/78/2-1-2010.png](http://i12.servimg.com/u/f12/17/70/81/78/2-1-2010.png)

Hướng dẫn:

Bước 1: overall\_header:
Tìm: ```

<script src="{JS_DIR}{L_LANG}.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;


```
...và thêm vào bên dưới nó:

```

<script type="text/javascript">
$(function(){
my_setcookie("get_tid", $("#qjump input[name='tid']").val(), 1)
})


Unknown end tag for &lt;/script&gt;



```
Hoặc có thể tạo javascript và đặt In all the pages.
Tạo smilie mới theo mẫu sau:

> Smilie Code : :buzz
> Smilie Emotion : :buzz
> Smilie Image File : ![http://r12.imgfast.net/users/1215/11/75/00/smiles/2270249841.gif](http://r12.imgfast.net/users/1215/11/75/00/smiles/2270249841.gif)



Bước 2: Tạo trang HTML Emoticons:
Đầu tiên bạn vào trang http://LOCATION_HOST/post?mode=smilies_chatbox
Thay LOCATION\_HOST bằng link diễn đàn của bạn, ví dụ của mình là: www.fmvi.vn
Bạn sao chép mã nguồn của trang đó bằng tổ hợp phím Ctrl+U và Ctrl+C.
Sau đó vào trang này http://www.fmvi.vn/h190-convert-emoticons để chuyển đổi.

Tạo trang HTML mới theo mẫu sau:

> Title **: Smiley chatbox fmvi 2.0
> Do you wish to use your forum header and footer ? No
> Use this page as homepage ? No
> HTML source** : Sử dụng mã nguồn vừa chuyển đổi ở trên


Ghi nhớ số thứ tự trang HTML vừa tạo.

Bước 3: Tạo javascript Chatbox fmvi 2.0:

> Title **: javascript chatbox fmvi 2.0
> Placement : Không check
> Javascript Code** :

```

function showMenu(g, d, l, m, j, h, n, c, e) {
if (document.getElementById("chatbox_contextmenu")) return hideMenu(), !1;
var k = !1;
document.getElementById("message") && (k = !0);
document.all ? (mouseX = window.event.clientX + document.body.scrollLeft, mouseY = window.event.clientY + document.body.scrollTop) : (mouseX = c.clientX + window.scrollX, mouseY = c.clientY + window.scrollY);
c = document.createElement("div");
c.setAttribute("id", "chatbox_contextmenu");
c.style.display = "block";
c.style.top = mouseY + "px";
var a = 0,
a = document.getElementById("content") ? document.getElementById("content").offsetWidth : document.body ? document.body.clientWidth : window.innerWidth;
for (mouseX = parseInt(mouseX); 120 + mouseX >= a;) mouseX -= 10;
c.style.left = mouseX + "px";
c.style.position = "absolute";
a = document.createElement("p");
a.setAttribute("class", "close");
a.setAttribute("className", "close");
var b = " " + (9 < d.length ? d.substr(0, 9) + "..." : d),
f = document.createElement("img");
f.onclick = new Function("hideMenu();");
f.setAttribute("src", "http://illiweb.com/fa/cross.png");
f.setAttribute("alt", "\u0110\u00f3ng");
a.appendChild(document.createTextNode(b));
a.appendChild(f);
c.appendChild(a);
a = document.createElement("p");
a.onmouseover = new Function('this.className="hover";');
a.onmouseout = new Function('this.className="";');
b = document.createElement("a");
b.appendChild(document.createTextNode("Xem th\u00f4ng tin"));
b.setAttribute("href", "/u" + g);
b.setAttribute("target", "profile");
b.onclick = new Function("hideMenu();");
a.appendChild(b);
c.appendChild(a);
a = document.createElement("p");
a.onmouseover = new Function('this.className="hover";');
a.onmouseout = new Function('this.className="";');
b = document.createElement("a");
b.appendChild(document.createTextNode("G\u1eedi tin nh\u1eafn"));
b.setAttribute("href", "/privmsg?mode=post&u=" + g);
b.setAttribute("target", "profile");
b.onclick = new Function("hideMenu();");
a.appendChild(b);
c.appendChild(a);
document.getElementById("message") && 2 == m && (d = d.replace(/\\/g, "\\\\"), d = d.replace(/'/g, "\'"), 2 != h && (a = document.createElement("p"), a.onmouseover = new Function('this.className="hover";'), a.onmouseout = new Function('this.className="";'), b = document.createElement("a"), b.appendChild(document.createTextNode("M\u1eddi ra ngo\u00e0i")), b.setAttribute("href", "javascript:void(0)"), b.onclick = new Function("return action_user('kick', '" + d + "', '" + e + "');"), a.appendChild(b), c.appendChild(a), a = document.createElement("p"), a.onmouseover = new Function('this.className="hover";'), a.onmouseout = new Function('this.className="";'), b = document.createElement("a"), b.appendChild(document.createTextNode("C\u1ea5m truy c\u1eadp")), b.setAttribute("href", "javascript:void(0)"), b.onclick = new Function("return action_user('ban','" + d + "', '" + e + "');")), a.appendChild(b), c.appendChild(a), 1 == j && 2 == h && 1 != n ? (a = document.createElement("p"), a.onmouseover = new Function('this.className="hover";'), a.onmouseout = new Function('this.className="";'), b = document.createElement("a"), b.appendChild(document.createTextNode("X\u00f3a quy\u1ec1n qu\u1ea3n l\u00fd")), b.setAttribute("href", "javascript:void(0)"), b.onclick = new Function("return action_user('unmod','" + d + "', '" + e + "');"), a.appendChild(b), c.appendChild(a)) : 1 == j && 2 != h && (a = document.createElement("p"), a.onmouseover = new Function('this.className="hover";'), a.onmouseout = new Function('this.className="";'), b = document.createElement("a"), b.appendChild(document.createTextNode("Th\u0103ng ch\u1ee9c qu\u1ea3n l\u00fd")), b.setAttribute("href", "javascript:void(0)"), b.onclick = new Function("return action_user('mod','" + d + "', '" + e + "');"), a.appendChild(b), c.appendChild(a)));
k && g == l && (a = document.createElement("p"), a.onmouseover = new Function('this.className="hover";'), a.onmouseout = new Function('this.className="";'), b = document.createElement("a"), b.appendChild(document.createTextNode("T\u1ea1m ngh\u1ec9")), b.setAttribute("href", "javascript:void(0)"), b.onclick = new Function("return action_user('away', prompt('L\u00fd do ngh\u1ec9?',''), '" + e + "');"), a.appendChild(b), c.appendChild(a), a = document.createElement("p"), a.onmouseover = new Function('this.className="hover";'), a.onmouseout = new Function('this.className="";'), b = document.createElement("a"), b.appendChild(document.createTextNode("\u0110\u0103ng xu\u1ea5t")), b.setAttribute("href", "javascript:void(0)"), b.onclick = new Function("hideMenu();connect_ajaxC('disconnect');"), a.appendChild(b), c.appendChild(a));
document.body.appendChild(c);
return !1
}
function action_user(a, b) {
null == b && (b = "");
$.ajax({
type: "POST",
url: "/chatbox/chatbox_actions.forum?archives=1",
data: {
mode: "send",
sent: "/" + a + " " + b
},
success: function () {
messfilter();
sendmessC()
}
});
hideMenu();
return !1
}
function hideMenu() {
document.getElementById("chatbox_contextmenu").parentNode.removeChild(document.getElementById("chatbox_contextmenu"))
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
my_setcookie("get_tid", $(b).find("#qjump input[name='tid']").val(), 1);
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
var c = eval(chatbox_memberlist.split("

Unknown end tag for &lt;/a&gt;

").length - 1),
a, d = chatbox_messages.split("

Unknown end tag for &lt;/p&gt;

"),
e = "",
b = my_getcookie("lengthmess").split("|");
for (a = 0; a < d.length - 1; a++) /\[\{fmvi\}\]/.test(d[a]) && (e = d[a].replace(/\[\{fmvi\}\]/, "") + "

Unknown end tag for &lt;/p&gt;

" + e);
a = eval(e.split("

Unknown end tag for &lt;/p&gt;

").length - 2);
var d = eval(b[0]),
g = eval(b[1]),
f = eval(b[2]),
b = eval(b[3]); - 1 == g && -1 == f && 0 == b ? my_setcookie("lengthmess", d + "|" + a + "|" + a + "|" + c, !0) : "" == chatbox_messages ? my_setcookie("lengthmess", "-1|-1|-1|" + c, !0) : a > g ? my_setcookie("lengthmess", d + "|" + a + "|" + f + "|" + b, !0) : g > f && -1 != f ? -1 != e.split("

Unknown end tag for &lt;/p&gt;

")[0].indexOf('alt=":buzz"') ? (e.split("

Unknown end tag for &lt;/p&gt;

")[0].match(/href="\/u(\d+)"/)[1] != $("#scode").val() && $("title").text("BUZZ!!!"), soundchat("buzz"), transformL(), setTimeout("transformR()", 100), setTimeout("transformL()", 200), setTimeout("transformR()", 300), setTimeout("transformL()", 400), setTimeout("transformR()", 500), setTimeout("transformL()", 600), setTimeout("transformR()", 700), setTimeout("$('#chatbox_header, #chatbox_footer, #chatbox, #chatbox_members').css({'transform': 'rotate(0deg)', '-moz-transform': 'rotate(0deg)', '-webkit-transform': 'rotate(0deg)', '-o-transform': 'rotate(0deg)'})", 800), my_setcookie("lengthmess", a + "|" + a + "|" + a + "|" + b, !0)) : (e.split("

Unknown end tag for &lt;/p&gt;

")[0].match(/href="\/u(\d+)"/)[1] != $("#scode").val() ? ($("title").text("Tin nh\u1eafn m\u1edbi"), soundchat("message")) : $("title").text("Chatbox 2.0"), my_setcookie("lengthmess", d + "|" + a + "|" + a + "|" + b, !0)) : c != b && 0 != c && (soundchat("alert"), my_setcookie("lengthmess", d + "|" + g + "|" + f + "|" + c, !0));
$("#chatbox").html(e)
}
function soundchat(c) {
$("#audio").prop("checked") && $("#sound").html('<audio preload="auto" autoplay="autoplay"><source src="http://dl.dropbox.com/u/126946313/fmviChat/' + c + '.ogg" type="audio/ogg" /><source src="http://dl.dropbox.com/u/126946313/fmviChat/' + c + '.mp3" type="audio/mpeg" />

Unknown end tag for &lt;/audio&gt;

')
}
function sendmessC() {
chatbox_updated = chatbox_last_update;
$("#chatbox_members").html(chatbox_memberlist);
$("#chatbox").scrollTop(0)
}
function fmvicbox() {
$.ajax({
type: "GET",
url: "/chatbox/chatbox_actions.forum?archives=1&mode=refresh",
success: function (a) {
"b\u1ea1i vong" == chatbox_messages ? (tex = -1 != a.indexOf("You have been banned from the ChatBox") ? "B\u1ea1n b\u1ecb c\u1ea5m truy c\u1eadp, vui l\u00f2ng li\u00ean h\u1ec7 ng\u01b0\u1eddi qu\u1ea3n l\u00fd." : "B\u1ea1n kh\u00f4ng th\u1ec3 s\u1eed d\u1ee5ng ch\u1ee9c n\u0103ng n\u00e0y, vui l\u00f2ng \u0111\u0103ng nh\u1eadp.", $("#chatbox").html('<p class="chatbox_row_2 clearfix"><span class="msg"><span style="font-style:italic; color:red;"><strong>' + tex + "

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/p&gt;

"), clearInterval(upd), $("#chatbox_main_options, #chatbox_footer").hide()) : chatbox_last_update > chatbox_updated && (/You\sare\sdisconnected/.test(chatbox_messages) ? ($("#chatbox").html('<p class="chatbox_row_2 clearfix"><span title="31 Jan 2013" class="date-and-time">' + chatbox_messages.match(/\[[0-9\:]+\]/) + '

Unknown end tag for &lt;/span&gt;

<span class="msg"><span style="font-style:italic; color:red;"><strong> M\u1ea5t k\u1ebft n\u1ed1i \u0111\u1ebfn m\u00e1y ch\u1ee7, vui l\u00f2ng \u0111\u0103ng nh\u1eadp.

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/p&gt;

'), clearInterval(upd), $("#refresh_auto").prop("checked", !1)) : "" == chatbox_messages ? $("#chatbox").html('<p class="chatbox_row_2 clearfix"><span class="msg"><span style="font-style:italic"><strong><span style="color:green;">B\u1ea1n \u0111ang s\u1eed d\u1ee5ng <span style="color:blue;">Chatbox 2.0

Unknown end tag for &lt;/span&gt;

 vi\u1ebft b\u1edfi

Unknown end tag for &lt;/span&gt;

 <span style="color:red;">baivong

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;

 <a href="http://www.fmvi.vn" target="_blank">fmvi

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/p&gt;

') : messfilter(), sendmessC(), $("#scode").val($("#chatbox_members a:first").attr("oncontextmenu").match(/',(\d+),/)[1]))
}
})
}
function cookiecbox() {
if (null != my_getcookie("fmvichatbox")) {
var a = my_getcookie("fmvichatbox").split("|");
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
function my_setcookie(b, a, d, c) {
domain = expires = "";
d && (expires = "; expires=Wed, 1 Jan 2020 00:00:00 GMT");
c || (c = "/");
document.cookie = b + "=" + a + "; path=" + c + expires + domain + ";"
}
function connectC() {
fmvicbox();
$("#refresh_auto").prop("checked") ? upd = setInterval(function () {
fmvicbox()
}, 2E3) : clearInterval(upd)
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
var b = $("#scode").val(),
a = $("#message").val();
if ("" == a) return !1;
0 == a.indexOf("/away") || 0 == a.indexOf("/abs") || 0 == a.indexOf("/cls") || 0 == a.indexOf("/clear") || 1 == b && 0 == a.indexOf("/ban ") || 1 == b && 0 == a.indexOf("/unban ") ? $.ajax({
type: "POST",
url: "/chatbox/chatbox_actions.forum?archives=1",
data: {
mode: "send",
sent: $("#message").val()
},
success: function () {
messfilter();
sendmessC();
$("#message").val("")
}
}) : 0 == a.indexOf("/banlist") ? (window.open("/chatbox/chatbox_banlist.forum?archives=1", "baivong", "toolbar=no,menubar=no,personalbar=no,width=450,height=300,scrollbars=auto,resizable=yes"), $("#message").val("")) : $.ajax({
type: "POST",
url: "/chatbox/chatbox_actions.forum?archives=1",
data: {
mode: "send",
sbold: $("#sbold").val(),
sitalic: $("#sitalic").val(),
sunderline: $("#sunderline").val(),
sstrike: $("#sstrike").val(),
scolor: $("#scolor").val(),
sent: "[{fmvi}]" + $("#message").val()
},
success: function () {
messfilter();
sendmessC();
$("#message").val("")
}
})
}
function emotiocon() {
$("#cSmiley").contents().find("span").click(function () {
$("#message").focus().val($("#message").val() + " " + $(this).attr("alt"));
$("#divsmilies").removeClass("select");
$("#smileycbox").hide()
})
}
function CB_disconnect() {
connected = !1
}
var connected = 0,
chatbox_updated = 0,
chatbox_last_update = 1,
chatbox_messages = "b\u1ea1i vong",
upd;
$(function () {
cookiecbox();
connect_ajaxC("connect");
my_setcookie("lengthmess", "-1|-1|-1|0", 1);
soundchat("online");
$("#divbuzz").click(function () {
$.ajax({
type: "POST",
url: "/chatbox/chatbox_actions.forum?archives=1",
data: {
mode: "send",
sent: "[{fmvi}]:buzz"
},
success: function () {
messfilter();
sendmessC()
}
})
});
$("#divsmilies").click(function () {
$("#cSmiley").length || $("#smileycbox").html('<iframe onload="emotiocon()" width="100%" height="100%" frameborder="0" src="/h192-smiley-chatbox-20" id="cSmiley">

Unknown end tag for &lt;/iframe&gt;

')
});
$("#refresh_auto").click(function () {
connectC()
});
$(".wd").click(function () {
$(this).toggleClass("select").next().toggle()
});
$("#cColor a").click(function () {
$("#scolor").val($(this).text());
$("#divcolor").removeClass("select");
$("#cColor").hide()
});
$(".font").click(function () {
var a = $("#s" + $(this).attr("id").slice(3)),
b;
0 == a.val() ? (b = 1, $(this).addClass("tg")) : (b = 0, $(this).removeClass("tg"));
a.val(b)
});
$("#cColor a, .font").click(function () {
my_setcookie("fmvichatbox", $("#sbold").val() + "|" + $("#sitalic").val() + "|" + $("#sunderline").val() + "|" + $("#sstrike").val() + "|" + $("#scolor").val(), 1);
cookiecbox()
});
$("#message").keypress(function (a) {
if (13 == a.keyCode) return submitchat(), !1
});
$("#submit_button").click(function () {
submitchat();
return !1
})
})
```

Tìm trong code trên số 192 và thay nó bằng số thứ tự trang HTML Emoticons mà bạn đã tạo ở bước 2.

Bước 4: Tạo trang HTML chatbox fmvi 2.0:
Tạo trang HTML mới theo mẫu sau:

> Title **: HTML chatbox fmvi 2.0
> Do you wish to use your forum header and footer ? No
> Use this page as homepage ? No
> HTML source** :
```

<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" dir="ltr" id="min-width" lang="en" xml:lang="en"  ><head><title>Chatbox 2.0

Unknown end tag for &lt;/title&gt;

<meta http-equiv="content-type" content="text/html; charset=utf-8" /><meta http-equiv="content-script-type" content="text/javascript" /><meta http-equiv="content-style-type" content="text/css" /><link rel="shortcut icon" type="image/x-icon" href="http://i48.servimg.com/u/f48/16/58/89/73/minilo10.png" /><meta name="language" content="en" /><meta name="description" content="Hướng dẫn - Chia sẽ - Phát triển ứng dụng cho Forumotion" /><meta name="keywords" content="Vietnamese Forumotion, fmvi.org, fmvi.vn, fmvi.tk, fmvi-group, free forum, templastes, HTML, JavaScript, jQuery, forumotion, support, TUT, share, free, easy, simple" lang="en" /><meta name="robots" content="index, follow, noodp" /><meta name="google-site-verification" content="c5k20fjsxZJqQF83Ldn3cySwds1MUd8CFhUBpIVPXUo" />
<meta name="title" content="Vietnamese Forumotion - chatbox 2.0" /><link rel="stylesheet" href="http://dl.dropbox.com/u/126946313/fmviChat/fmvicbox.css" type="text/css" /><link rel="search" type="application/opensearchdescription+xml" href="/improvedsearch.xml" title="Vietnamese Forumotion" /><link rel="search" type="application/opensearchdescription+xml" href="http://www.board-directory.net/en/search/improvedsearch.xml" title="Search forums" /><script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;



<script type="text/javascript" src="/10491.js">

Unknown end tag for &lt;/script&gt;



<script type="text/javascript">//<![CDATA[
var _gaq = _gaq || [];_gaq.push(["_setAccount", "UA-26966514-1"]);_gaq.push(["_trackPageview"]);(function() {var ga = document.createElement("script"); ga.type = "text/javascript"; ga.async = true;ga.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ga, s);})();//]]>

Unknown end tag for &lt;/script&gt;



Unknown end tag for &lt;/head&gt;

<body>
<div style="display:none" id="chatbox_messenger_form">
Chatbox forumotion 2.0 viết bởi baivong - www.fmvi.vn. Giữ toàn quyền.
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
<input type="hidden" id="scolor" value="#333333" />
<input type="hidden" id="scode" value="fmvi" />
<input type="hidden" id="suid" value="0" />


Unknown end tag for &lt;/td&gt;


<td>
<input type="text" id="message" name="message" size="35" maxlength="1024" class="post" autocomplete="off" />


Unknown end tag for &lt;/td&gt;


<td style="width: 300px; text-align: center;">
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




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;


<div id="chatbox_members" curpos="0" maxpos="460" pageincrement="144" increment="10">


Unknown end tag for &lt;/div&gt;


<div id="chatbox" curpos="188" maxpos="325" pageincrement="0" increment="10">

Unknown end tag for &lt;/div&gt;


<div id="chatbox_header" class="main-head">
<h2 class="chatbox-title">Chatbox 2.0

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

Tìm /10491.js trong code trên và thay nó bằng link file javascript đã tạo ở bước 3.

```
<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" dir="ltr" id="min-width" lang="en" xml:lang="en"   ><head><title>Convert Emoticons

Unknown end tag for &lt;/title&gt;

<meta http-equiv="content-type" content="text/html; charset=utf-8" /><meta http-equiv="content-script-type" content="text/javascript" /><meta http-equiv="content-style-type" content="text/css" /><link rel="shortcut icon" type="image/x-icon" href="http://i48.servimg.com/u/f48/16/58/89/73/minilo10.png" /><meta name="title" content="Convert Emoticons" /><link rel="stylesheet" href="/155-ltr.css" type="text/css" /><!--[if lte IE 6]><style type="text/css">#mudimPanel,.minwidth_IE, #login_popup, #hitskin_preview{display:none!important}

Unknown end tag for &lt;/style&gt;

<![endif]--><noscript><style type="text/css">.fmvitab > tbody > tr > td > ul > li, .fmvitab, .codebox{display: block !important}#smiley-box, #text_editor_controls, #lastFMvi, #changeSfmvi, .options-button img[src="http://i46.servimg.com/u/f46/15/26/55/24/quickr10.gif"]{display:none !important}

Unknown end tag for &lt;/style&gt;



Unknown end tag for &lt;/noscript&gt;

<style type="text/css">.QOverlay{background-color:#000;z-index:9999}.QLoader{background-color:#CCC;height:1px}.QAmt{color:#333;font-family:"Trebuchet MS",Arial,Helvetica,sans-serif;font-size:40px;font-weight:700;line-height:50px;height:50px;width:100px;margin:-60px 0 0 -50px}

Unknown end tag for &lt;/style&gt;

<link rel="search" type="application/opensearchdescription+xml" href="/improvedsearch.xml" title="Vietnamese Forumotion" /><link rel="search" type="application/opensearchdescription+xml" href="http://www.board-directory.net/en/search/improvedsearch.xml" title="Search forums" /><script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;

<script src="http://illiweb.com/rsc/42/frm/lang/en.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;

<script type="text/javascript">//<![CDATA[
$(document).ready(function(){});//]]>

Unknown end tag for &lt;/script&gt;

<script src="/99707.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;

  <script type="text/javascript">//<![CDATA[
var _gaq = _gaq || [];_gaq.push(["_setAccount", "UA-26966514-1"]);_gaq.push(["_trackPageview"]);(function() {var ga = document.createElement("script"); ga.type = "text/javascript"; ga.async = true;ga.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ga, s);})();//]]>

Unknown end tag for &lt;/script&gt;



Unknown end tag for &lt;/head&gt;

<body><!--[if lte IE 6]><div style="left: 50%; z-index: 9999; width: 500px; background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); top: 50%; position: absolute; padding: 10px; margin-left: -255px; text-align: justify; margin-top: -140px;"><img src="http://i48.servimg.com/u/f48/16/58/89/73/chanie10.jpg" alt="block-IE6" style="float: left;padding-right:20px" /><p><br /><strong>Diễn đàn <font color="red">www.fmvi.vn

Unknown end tag for &lt;/font&gt;

 không hỗ trợ Internet Explorer 6.

Unknown end tag for &lt;/strong&gt;

<br /><br />Nếu bạn vẫn muốn tham gia diễn đàn, hãy sử dụng trình duyệt khác, nhanh hơn và bảo mật tốt hơn như:<br /><br />☆ <a href='http://www.google.com/chrome'> Chrome

Unknown end tag for &lt;/a&gt;

<br />☆ <a href='http://www.mozilla.com/'> Firefox

Unknown end tag for &lt;/a&gt;

<br />☆ <a href='http://www.opera.com/download/'> Opera

Unknown end tag for &lt;/a&gt;

<br />☆ <a href='http://www.apple.com/safari/download/'> Safari

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/p&gt;



Unknown end tag for &lt;/div&gt;

<![endif]--><div id="qLoverlay"><div id="qLbar">

Unknown end tag for &lt;/div&gt;

<div id="qLtip">0%

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<a id="top" name="top" accesskey="t">

Unknown end tag for &lt;/a&gt;

<div class="minwidth_IE"><div class="layout_IE"><div class="container_IE"><div class="pun">                                  <div id="pun-intro" class="clearfix"><a id="sitemap" href="javascript:;" class="toplinkfmvi bookma10" style="background: url(http://i15.servimg.com/u/f15/16/58/89/73/networ10.png) no-repeat scroll center center transparent; top: 100px;">

Unknown end tag for &lt;/a&gt;

<a class="toplinkfmvi nav-ba10 q_reg_fmvi" href="/h182-background-ver2" data-fancybox-type="ajax" style="top: 75px">

Unknown end tag for &lt;/a&gt;

<a style="top: 50px;" class="toplinkfmvi bookma10" href="javascript:if(document.all)window.external.AddFavorite(location.href,document.title); else if(window.sidebar)window.sidebar.addPanel (document.title,location.href,'');">

Unknown end tag for &lt;/a&gt;

<a style="top: 25px;" class="toplinkfmvi rss10" href="/rss">

Unknown end tag for &lt;/a&gt;

<a href="/forum" id="pun-logo"><img src="http://i48.servimg.com/u/f48/16/58/89/73/logofm12.png" alt="Vietnamese Forumotion" />

Unknown end tag for &lt;/a&gt;

<div id="pun-title"><font color="#ff0000">V

Unknown end tag for &lt;/font&gt;

<font color="#ff4800">i

Unknown end tag for &lt;/font&gt;

<font color="#ff9100">e

Unknown end tag for &lt;/font&gt;

<font color="#ffda00">t

Unknown end tag for &lt;/font&gt;

<font color="#daff00">n

Unknown end tag for &lt;/font&gt;

<font color="#91ff00">a

Unknown end tag for &lt;/font&gt;

<font color="#48ff00">m

Unknown end tag for &lt;/font&gt;

<font color="#00ff00">e

Unknown end tag for &lt;/font&gt;

<font color="#00ff48">s

Unknown end tag for &lt;/font&gt;

<font color="#00ff91">e

Unknown end tag for &lt;/font&gt;

 <font color="#00daff">F

Unknown end tag for &lt;/font&gt;

<font color="#0091ff">o

Unknown end tag for &lt;/font&gt;

<font color="#0048ff">r

Unknown end tag for &lt;/font&gt;

<font color="#0000ff">u

Unknown end tag for &lt;/font&gt;

<font color="#4800ff">m

Unknown end tag for &lt;/font&gt;

<font color="#9100ff">o

Unknown end tag for &lt;/font&gt;

<font color="#da00ff">t

Unknown end tag for &lt;/font&gt;

<font color="#ff00da">i

Unknown end tag for &lt;/font&gt;

<font color="#ff0091">o

Unknown end tag for &lt;/font&gt;

<font color="#ff0048">n

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/div&gt;

<p id="pun-desc">Hướng dẫn - Chia sẻ - Phát triển ứng dụng cho forumotion<span style=display:none id=userID><a href="http://www.fmvi.vn/profile.forum?mode=viewprofile&amp;u=1313">NhocPro9x

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/p&gt;

<span style="display:none" id="numID">

Unknown end tag for &lt;/span&gt;

<script type="text/javascript">$("#numID").text($("#userID a").attr("href").match(/[0-9]+/g))

Unknown end tag for &lt;/script&gt;

<div class="module main" id="defaultA" style="top: 23px; z-index: 300"><div style="border:1px solid #666" class="main-content clearfix details"><div class="avatarUn" style="height: 164px;"><img src="http://i48.servimg.com/u/f48/16/58/89/73/noavat10.jpg" />

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div class="navbar" id="navbar"><ul class="navtabs floatcontainer" id="navtabs"><li><a accesskey="2" href="/" class="navtab">Portal

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a href="/forum" class="navtab">Forum

Unknown end tag for &lt;/a&gt;

<ul class="floatcontainer"><li><a class="mainmenu" href="/forum"><img id="i_icon_mini_index" src="http://illiweb.com/fa/empty.gif" border="0"  hspace="2" alt="Home" title="Home" />Home

Unknown end tag for &lt;/a&gt;

 &nbsp;

Unknown end tag for &lt;/li&gt;

<li><a class="mainmenu" href="/"><img id="i_icon_mini_portal" src="http://illiweb.com/fa/empty.gif" border="0"  hspace="2" alt="portal" title="portal" />portal

Unknown end tag for &lt;/a&gt;

 &nbsp;

Unknown end tag for &lt;/li&gt;

<li><a class="mainmenu" href="/calendar"><img id="i_icon_mini_calendar" src="http://illiweb.com/fa/empty.gif" border="0"  hspace="2" alt="Calendar" title="Calendar" />Calendar

Unknown end tag for &lt;/a&gt;

 &nbsp;

Unknown end tag for &lt;/li&gt;

<li><a class="mainmenu" href="/faq"><img id="i_icon_mini_faq" src="http://illiweb.com/fa/empty.gif" border="0"  hspace="2" alt="FAQ" title="FAQ" />FAQ

Unknown end tag for &lt;/a&gt;

 &nbsp;

Unknown end tag for &lt;/li&gt;

<li><a class="mainmenu" href="/search" onclick="showhide(document.getElementById('search_menu')); return false;"><img id="i_icon_mini_search" src="http://illiweb.com/fa/empty.gif" border="0"  hspace="2" alt="Search" title="Search" />Search

Unknown end tag for &lt;/a&gt;

 &nbsp;<script type="text/javascript">//<![CDATA[
var url_search = '/search';
insert_search_menu_new();//]]>


Unknown end tag for &lt;/script&gt;



Unknown end tag for &lt;/li&gt;

<li><a class="mainmenu" href="/memberlist" rel="nofollow"><img id="i_icon_mini_members" src="http://illiweb.com/fa/empty.gif" border="0"  hspace="2" alt="Memberlist" title="Memberlist" />Memberlist

Unknown end tag for &lt;/a&gt;

 &nbsp;

Unknown end tag for &lt;/li&gt;

<li><a class="mainmenu" href="/groups"><img id="i_icon_mini_groups" src="http://illiweb.com/fa/empty.gif" border="0"  hspace="2" alt="Usergroups" title="Usergroups" />Usergroups

Unknown end tag for &lt;/a&gt;

 &nbsp;

Unknown end tag for &lt;/li&gt;

<li><a class="mainmenu" href="/profile?mode=editprofile"><img id="i_icon_mini_profile" src="http://illiweb.com/fa/empty.gif" border="0"  hspace="2" alt="Profile" title="Profile" />Profile

Unknown end tag for &lt;/a&gt;

 &nbsp;

Unknown end tag for &lt;/li&gt;

<li><a class="mainmenu" href="/privmsg?folder=inbox"><img id="i_icon_mini_message" src="http://illiweb.com/fa/empty.gif" border="0"  hspace="2" alt="You have no new messages" title="You have no new messages" />You have no new messages

Unknown end tag for &lt;/a&gt;

 &nbsp;

Unknown end tag for &lt;/li&gt;

<li><a class="mainmenu" href="/login?logout=1&amp;tid=a3984850b2a5db3d068626c174718d4d&amp;key=ed02d7" rel="nofollow" id="logout" ><img id="i_icon_mini_logout" src="http://illiweb.com/fa/empty.gif" border="0"  hspace="2" alt="Log out [ NhocPro9x ]" title="Log out [ NhocPro9x ]" />Log out [ NhocPro9x ]

Unknown end tag for &lt;/a&gt;

 &nbsp;

Unknown end tag for &lt;/li&gt;



Unknown end tag for &lt;/ul&gt;



Unknown end tag for &lt;/li&gt;

<li><a class="navtab" href="/search?search_id=activetopics">Active topics

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a class="anime navtab" data-fancybox-type="iframe" href="/h150-anime">Avatar anime

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a class="anime navtab" data-fancybox-type="iframe" href="/h191-chatbox-20">Chatbox

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a class="q_reg_fmvi navtab" data-fancybox-type="ajax" href="/h181-feedback">Feedback

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;



Unknown end tag for &lt;/ul&gt;

<div class="globalsearch" id="globalsearch"><form class="navbar_search" id="navbar_search" method="get" action="/search"><input type="hidden" value="searchbox" name="mode" /><input type="hidden" type="radio" value="posts" name="show_results" id="rposts" /><input type="hidden" type="radio" checked="checked" value="topics" name="show_results" id="rtopics" /><span class="textboxcontainer"><span><input type="text" name="search_keywords" tabindex="99" class="textbox" name="search_keywords" />

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;

<span class="buttoncontainer"><span><input type="image" tabindex="100" name="submit" src="http://i47.servimg.com/u/f47/17/47/88/95/search10.png" class="searchbutton" />

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/form&gt;

<ul style="list-style: none" class="navbar_advanced_search"><li><a accesskey="4" href="/search">Advanced Search

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;



Unknown end tag for &lt;/ul&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<script type="text/javascript">$("a.navtab[href='" + location.pathname + location.search + "']").parent("li").addClass("selected");$("a.mainmenu[href='" + location.pathname + location.search + "']").parent("li").addClass("selectF");$("a.mainmenu[href='/?tt=1'],a.mainmenu[href='/'],a.mainmenu[href='/forum'],a.mainmenu[href='/privmsg?folder=inbox'],a.mainmenu[href^='/search']").parent().hide();

Unknown end tag for &lt;/script&gt;

<div id="page-body"><div id="content-container"><div id="outer-wrapper"><div id="wrapper"><div id="container"><div id="content">                       <div class="boxfmvi main" style="margin: 1em 0;"><div id="loginFancy" class="main-box"><span class="logi"><p style="color:red">Logged in as <strong>NhocPro9x

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/p&gt;

<p style="color:green">Your last visit was on 26/01/13, 02:42 pm

Unknown end tag for &lt;/p&gt;

<p style="color:blue">Current date/time is 01/02/13, 11:12 pm

Unknown end tag for &lt;/p&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;

<div class="navFMvi main-box"><p><a class="navbit10" onclick="history.back(1); return false;" href="#">

Unknown end tag for &lt;/a&gt;

&nbsp;<a href="/forum">Vietnamese Forumotion

Unknown end tag for &lt;/a&gt;

&nbsp;

Unknown end tag for &lt;/p&gt;

<p style="color: #3A3A3A; font-weight: bold"><span class="navbit12">

Unknown end tag for &lt;/span&gt;

&nbsp;<span id="ch_title">Convert Emoticons

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/p&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div id="main">                                                                                         <div id="main-content"><div id="left"><div style="display:nones" id="myAvatar" class="module main"><div class="main-content clearfix details" style="border:1px solid #666"><div class="avatarUn fmvichange"><span id="chSta"><img src="http://i48.servimg.com/u/f48/16/58/89/73/edit_410.png" alt="status" style="width: 16px; height: 16px; top: 0px; right: 0px; background-color: rgb(221, 221, 221); border: 1px solid rgb(119, 119, 119) ! important; padding: 3px 6px 4px; z-index: 99; cursor: help;" />

Unknown end tag for &lt;/span&gt;

<span class="changeatvar" onclick="quickava()">Thay avatar

Unknown end tag for &lt;/span&gt;

<a href="/profile?mode=editprofile" alt="avatar"><img src="http://i48.servimg.com/u/f48/16/58/89/73/200x2010.png" alt="" />

Unknown end tag for &lt;/a&gt;

<div class="titleUn"><p><a id="linkbai"><strong>Bài viết: 

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/a&gt;

<span id="myPost" style="color: #00729F;">0

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/p&gt;

<p><a id="lpmv" href="/privmsg?folder=inbox"><strong>Tin nhắn: 

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/a&gt;

<span id="numpm" style="color: red">0

Unknown end tag for &lt;/span&gt;

 / <span style="color: green">0

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/p&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<script type="text/javascript">function quickava() {var a = prompt("Nh\u1eadp URL h\u00ecnh \u1ea3nh v\u00e0o \u0111\u00e2y!\nCh\u1ea5p nh\u1eadn c\u00e1c \u0111\u1ecbnh d\u1ea1ng jpg, jpeg, gif, png, bmp", "");("" != a && null != a) && avatarfmvi(a, $("#numID").text(), $("#userID").text())}

Unknown end tag for &lt;/script&gt;

<div style="height:1px">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div class="module main module-advert" style="overflow:visible"><div class="main-content" style="padding:0"><div class="f223ff7e" ><iframe frameborder="0" marginwidth="0" marginheight="0" scrolling="no" width="728" height="90" src="http://ad.z5x.net/st?ad_type=iframe&ad_size=728x90&section=1649904">

Unknown end tag for &lt;/iframe&gt;

<br class="clear" />

Unknown end tag for &lt;/div&gt;

<div style="clear:both;">

Unknown end tag for &lt;/div&gt;

<style type="text/css">html body .f223ff7e,html body .f223ff7e iframe,html body iframe[name="google_ads_frame"],html body .f223ff7e iframe[name="google_ads_frame"],html body #wrap #page-body div.f223ff7e,html body #page-body .f223ff7e{display:block!important;visibility:visible!important;float:none!important;position:inherit!important;left:inherit!important;top:inherit!important;right:inherit!important;bottom:inherit!important;margin:0 auto!important;padding:inherit!important;filter:alpha(opacity=100)!important;-moz-opacity:1!important;-khtml-opacity:1!important;opacity:1!important;z-index:9999!important;text-align:center!important}html body .f223ff7e,html body .f223ff7e iframe[name="google_ads_frame"]{width:728px!important;height:90px!important;min-height:90px!important}html body .f223ff7e iframe{border:0px!important}html body iframe[name="google_ads_frame"]{width:100%!important;height:inherit!important;min-height:inherit!important}

Unknown end tag for &lt;/style&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div style="height:3px">

Unknown end tag for &lt;/div&gt;

<textarea placeholder="Dán mã nguồn smilies chatbox vào đây và nhấn Xác Nhận" dir="ltr" tabindex="1" style="width:100%; height:400px; " cols="60" rows="10" id="fmvi-Emoticons" name="html" class="post">

Unknown end tag for &lt;/textarea&gt;



<button class="button" onclick="document.getElementById('fmvi-Emoticons').value = ''; document.getElementById('chatfmvi2').style.display = 'inline';">Làm lại

Unknown end tag for &lt;/button&gt;



<button style="margin-right: 20px;" class="button" id="chatfmvi2" onclick="baivong();this.style.display = 'none'">Xác nhận

Unknown end tag for &lt;/button&gt;



<script type="text/javascript">
function baivong() {
document.getElementById("fmvi-Emoticons").value = '<!DOCTYPE html><html xmlns="http:\/\/www.w3.org\/1999\/xhtml" xml:lang="en" lang="en" dir="ltr"><head><meta http-equiv="content-type" content="text/html; charset=utf-8" \/><title>Chatbox fmvi 2.0 :: Emoticons<\/title><meta http-equiv="content-script-type" content="text\/javascript"\/><meta http-equiv="content-style-type" content="text\/css" \/><style type="text\/css">*{margin:0;padding:0}body{background-color:#FFF}img{cursor:pointer;border:0 none}

Unknown end tag for &lt;/style&gt;

<link rel="shortcut icon" type="image\/x-icon" href="favicon2.ico"><\/head><body><div id="simple-wrap" class="smiley-element">' + document.getElementById("fmvi-Emoticons").value.match(/<\/form>(.*)<p class="center">/)[1].replace(/a\shref="javascript\:insert_chatboxsmilie\('/gi, 'span alt="').replace(/'\)"/gi, '"').replace(/<\/a>/gi, '

Unknown end tag for &lt;/span&gt;

') + '<\/div><\/body><\/html>'
}


Unknown end tag for &lt;/script&gt;

<div id="add-google-bottom" style="clear:both;"><div align="center"><script language="JavaScript">var zflag_nid="1070"; var zflag_cid="551"; var zflag_sid="147"; var zflag_width="1"; var zflag_height="1"; var zflag_sz="16"; var zflag_charset="utf-8";

Unknown end tag for &lt;/script&gt;

<script language="JavaScript" src="http://d2.zedo.com/jsc/d2/fo.js">

Unknown end tag for &lt;/script&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div style="height:3px">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div id="right"><div class="module main"><div class="main-head"><div class="h3">Keywords

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div class="main-content"><p class="center"><a href="/s/chức" style="font-size: 10.5px; !important">chức

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/năng" style="font-size: 14px; !important">năng

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/BBcode" style="font-size: 11px; !important">BBcode

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/phpBB2" style="font-size: 15.5px; !important">phpBB2

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/viên" style="font-size: 13px; !important">viên

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/trong" style="font-size: 10px; !important">trong

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/Show" style="font-size: 9px; !important">Show

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/Chatbox" style="font-size: 19px; !important">Chatbox

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/skin" style="font-size: 20px; !important">skin

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/Forumotion" style="font-size: 11.5px; !important">Forumotion

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/Thông" style="font-size: 16.5px; !important">Thông

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/trang" style="font-size: 14.5px; !important">trang

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/thanh" style="font-size: 15px; !important">thanh

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/Share" style="font-size: 16px; !important">Share

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/phát" style="font-size: 17px; !important">phát

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/punBB" style="font-size: 20.5px; !important">punBB

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/triển" style="font-size: 8.5px; !important">triển

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/dung" style="font-size: 18.5px; !important">dung

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/viết" style="font-size: 19.5px; !important">viết

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/hướng" style="font-size: 13.5px; !important">hướng

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/Khảo" style="font-size: 9.5px; !important">Khảo

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/Danh" style="font-size: 18px; !important">Danh

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/chuyen" style="font-size: 12.5px; !important">chuyen

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/FMvi" style="font-size: 21px; !important">FMvi

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/code" style="font-size: 17.5px; !important">code

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/đăng" style="font-size: 12px; !important">đăng

Unknown end tag for &lt;/a&gt;

 &nbsp;

Unknown end tag for &lt;/p&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div style="height:1px">

Unknown end tag for &lt;/div&gt;

<div id="fancyrecent" style="display:none"><div id="recent_topics" class="module main"><div class="main-head"><h3>Latest topics

Unknown end tag for &lt;/h3&gt;



Unknown end tag for &lt;/div&gt;

<div class="main-content"><ul><li><span class="nTopics"><a onmouseover="show_tooltip(this, $(this).next().html(), 'FMvi.vn')" href="/t868-2013-chatbox-fmvi-20#7674">[2013] Chatbox fmvi 2.0

Unknown end tag for &lt;/a&gt;

<span style="display:none"><font color="red">Tiêu đề

Unknown end tag for &lt;/font&gt;

: [2013] Chatbox fmvi 2.0<br /><font color="blue">Gửi lúc

Unknown end tag for &lt;/font&gt;

: Today at 10:56 pm

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;

<span class="nTright"><a href="/u1"><span style="color:#FF0000"><strong>admin

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/li&gt;

<li><span class="nTopics"><a onmouseover="show_tooltip(this, $(this).next().html(), 'FMvi.vn')" href="/t865-moi-thac-mac-ve-zeditor#7671">Mọi thắc mắc về zEditor

Unknown end tag for &lt;/a&gt;

<span style="display:none"><font color="red">Tiêu đề

Unknown end tag for &lt;/font&gt;

: Mọi thắc mắc về zEditor<br /><font color="blue">Gửi lúc

Unknown end tag for &lt;/font&gt;

: Today at 02:43 pm

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;

<span class="nTright"><a href="/u1230"><span style="color:#6B069E"><strong>giakhanhlk

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/li&gt;

<li><span class="nTopics"><a onmouseover="show_tooltip(this, $(this).next().html(), 'FMvi.vn')" href="/t853p20-thu-nghiem-tra-loi-nhanh-version-4-blog-comments#7669">[Thử nghiệm] Trả lời nhanh version 4 -  Blog Comments

Unknown end tag for &lt;/a&gt;

<span style="display:none"><font color="red">Tiêu đề

Unknown end tag for &lt;/font&gt;

: [Thử nghiệm] Trả lời nhanh version 4 -  Blog Comments<br /><font color="blue">Gửi lúc

Unknown end tag for &lt;/font&gt;

: Yesterday at 07:16 pm

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;

<span class="nTright"><a href="/u402"><span style="color:#6B069E"><strong>ngoctuan_py

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/li&gt;

<li><span class="nTopics"><a onmouseover="show_tooltip(this, $(this).next().html(), 'FMvi.vn')" href="/t840p140-giai-ap-thac-mac-lien-quan-en-skin-fmvi-3#7667">Giải đáp thắc mắc liên quan đến skin fmvi 3

Unknown end tag for &lt;/a&gt;

<span style="display:none"><font color="red">Tiêu đề

Unknown end tag for &lt;/font&gt;

: Giải đáp thắc mắc liên quan đến skin fmvi 3<br /><font color="blue">Gửi lúc

Unknown end tag for &lt;/font&gt;

: Yesterday at 11:01 am

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;

<span class="nTright"><a href="/u27"><span style="color:#FF0000"><strong>zero

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/li&gt;

<li><span class="nTopics"><a onmouseover="show_tooltip(this, $(this).next().html(), 'FMvi.vn')" href="/t812-kiem-tra-thong-tin-khi-ang-nhap#7666">Kiểm tra thông tin khi đăng nhập

Unknown end tag for &lt;/a&gt;

<span style="display:none"><font color="red">Tiêu đề

Unknown end tag for &lt;/font&gt;

: Kiểm tra thông tin khi đăng nhập<br /><font color="blue">Gửi lúc

Unknown end tag for &lt;/font&gt;

: Yesterday at 10:30 am

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;

<span class="nTright"><a href="/u1334"><span style="color:#C9802C"><strong>genau

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/li&gt;

<li><span class="nTopics"><a onmouseover="show_tooltip(this, $(this).next().html(), 'FMvi.vn')" href="/t862-zeditor-11#7660">zEditor 1.1

Unknown end tag for &lt;/a&gt;

<span style="display:none"><font color="red">Tiêu đề

Unknown end tag for &lt;/font&gt;

: zEditor 1.1<br /><font color="blue">Gửi lúc

Unknown end tag for &lt;/font&gt;

: 30/01/13, 09:06 pm

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;

<span class="nTright"><a href="/u27"><span style="color:#FF0000"><strong>zero

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/li&gt;

<li><span class="nTopics"><a onmouseover="show_tooltip(this, $(this).next().html(), 'FMvi.vn')" href="/t864-bao-loi-zeditor#7659">[Báo lỗi] zEditor

Unknown end tag for &lt;/a&gt;

<span style="display:none"><font color="red">Tiêu đề

Unknown end tag for &lt;/font&gt;

: [Báo lỗi] zEditor<br /><font color="blue">Gửi lúc

Unknown end tag for &lt;/font&gt;

: 30/01/13, 09:02 pm

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;

<span class="nTright"><a href="/u27"><span style="color:#FF0000"><strong>zero

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/li&gt;

<li><span class="nTopics"><a onmouseover="show_tooltip(this, $(this).next().html(), 'FMvi.vn')" href="/t866-tip-an-quang-cao-fm-voi-o-an-toan-98-27-1-2013#7647">[Tip] Ẩn Quảng Cáo FM với độ an toàn 98% (27/1/2013)

Unknown end tag for &lt;/a&gt;

<span style="display:none"><font color="red">Tiêu đề

Unknown end tag for &lt;/font&gt;

: [Tip] Ẩn Quảng Cáo FM với độ an toàn 98% (27/1/2013)<br /><font color="blue">Gửi lúc

Unknown end tag for &lt;/font&gt;

: 28/01/13, 10:26 pm

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;

<span class="nTright"><a href="/u4"><span style="color:#6B069E"><strong>IceFox

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/li&gt;

<li><span class="nTopics"><a onmouseover="show_tooltip(this, $(this).next().html(), 'FMvi.vn')" href="/t867-y-tuong-xac-inh-nguoi-viet-chuan-bi-tra-loi-trong-chatbox#7641">[Ý tưởng] Xác định nguời viết chuẩn bị trả lời trong chatbox

Unknown end tag for &lt;/a&gt;

<span style="display:none"><font color="red">Tiêu đề

Unknown end tag for &lt;/font&gt;

: [Ý tưởng] Xác định nguời viết chuẩn bị trả lời trong chatbox<br /><font color="blue">Gửi lúc

Unknown end tag for &lt;/font&gt;

: 28/01/13, 02:25 am

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;

<span class="nTright"><a href="/u27"><span style="color:#FF0000"><strong>zero

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/li&gt;

<li><span class="nTopics"><a onmouseover="show_tooltip(this, $(this).next().html(), 'FMvi.vn')" href="/t863-y-tuong-index_box-dang-hop-cho-punbb#7618">[Ý tưởng] Index_box dạng hộp cho punBB

Unknown end tag for &lt;/a&gt;

<span style="display:none"><font color="red">Tiêu đề

Unknown end tag for &lt;/font&gt;

: [Ý tưởng] Index_box dạng hộp cho punBB<br /><font color="blue">Gửi lúc

Unknown end tag for &lt;/font&gt;

: 25/01/13, 08:56 pm

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;

<span class="nTright"><a href="/u1305"><span style="color:#C9802C"><strong>nhocvjp_luv

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/li&gt;

<li><span class="nTopics"><a onmouseover="show_tooltip(this, $(this).next().html(), 'FMvi.vn')" href="/t861-skin-fmvi-3-blog-comments#7616">[skin fmvi 3] Blog Comments

Unknown end tag for &lt;/a&gt;

<span style="display:none"><font color="red">Tiêu đề

Unknown end tag for &lt;/font&gt;

: [skin fmvi 3] Blog Comments<br /><font color="blue">Gửi lúc

Unknown end tag for &lt;/font&gt;

: 25/01/13, 06:09 pm

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;

<span class="nTright"><a href="/u1173"><span style="color:#6B069E"><strong>Hell Diamond

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/li&gt;

<li><span class="nTopics"><a onmouseover="show_tooltip(this, $(this).next().html(), 'FMvi.vn')" href="/t859-du-an-chatbox-20#7576">[Dự án] Chatbox 2.0

Unknown end tag for &lt;/a&gt;

<span style="display:none"><font color="red">Tiêu đề

Unknown end tag for &lt;/font&gt;

: [Dự án] Chatbox 2.0<br /><font color="blue">Gửi lúc

Unknown end tag for &lt;/font&gt;

: 20/01/13, 08:44 pm

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;

<span class="nTright"><a href="/u15"><span style="color:#FF0000"><strong>baivong

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/li&gt;

<li><span class="nTopics"><a onmouseover="show_tooltip(this, $(this).next().html(), 'FMvi.vn')" href="/t826p40-trinh-chieu-anh-video-youtube-voi-fancybox2-va-queryloader2#7563">Trình chiếu ảnh - video youtube với fancybox2 và queryloader2

Unknown end tag for &lt;/a&gt;

<span style="display:none"><font color="red">Tiêu đề

Unknown end tag for &lt;/font&gt;

: Trình chiếu ảnh - video youtube với fancybox2 và queryloader2<br /><font color="blue">Gửi lúc

Unknown end tag for &lt;/font&gt;

: 20/01/13, 11:15 am

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;

<span class="nTright"><a href="/u577"><span style="color:#6B069E"><strong>hacker

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/li&gt;

<li><span class="nTopics"><a onmouseover="show_tooltip(this, $(this).next().html(), 'FMvi.vn')" href="/t858-y-tuong-ve-cai-shop#7544">ý tưởng về cái shop

Unknown end tag for &lt;/a&gt;

<span style="display:none"><font color="red">Tiêu đề

Unknown end tag for &lt;/font&gt;

: ý tưởng về cái shop<br /><font color="blue">Gửi lúc

Unknown end tag for &lt;/font&gt;

: 18/01/13, 07:51 pm

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;

<span class="nTright"><a href="/u1"><span style="color:#FF0000"><strong>admin

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/li&gt;

<li><span class="nTopics"><a onmouseover="show_tooltip(this, $(this).next().html(), 'FMvi.vn')" href="/t857-xin-skin-ep#7543">Xin Skin đẹp

Unknown end tag for &lt;/a&gt;

<span style="display:none"><font color="red">Tiêu đề

Unknown end tag for &lt;/font&gt;

: Xin Skin đẹp<br /><font color="blue">Gửi lúc

Unknown end tag for &lt;/font&gt;

: 18/01/13, 07:50 pm

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;

<span class="nTright"><a href="/u1"><span style="color:#FF0000"><strong>admin

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/li&gt;

<li><span class="nTopics"><a onmouseover="show_tooltip(this, $(this).next().html(), 'FMvi.vn')" href="/t851-thu-nghiem-star-rating-binh-chon-bai-viet-blog#7534">[Thử nghiệm] Star rating - Bình chọn bài viết blog

Unknown end tag for &lt;/a&gt;

<span style="display:none"><font color="red">Tiêu đề

Unknown end tag for &lt;/font&gt;

: [Thử nghiệm] Star rating - Bình chọn bài viết blog<br /><font color="blue">Gửi lúc

Unknown end tag for &lt;/font&gt;

: 18/01/13, 05:18 pm

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;

<span class="nTright"><a href="/u202"><span style="color:#6B069E"><strong>junalone

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/li&gt;

<li><span class="nTopics"><a onmouseover="show_tooltip(this, $(this).next().html(), 'FMvi.vn')" href="/t793p80-avatar-anime-version-2#7527">Avatar anime version 2

Unknown end tag for &lt;/a&gt;

<span style="display:none"><font color="red">Tiêu đề

Unknown end tag for &lt;/font&gt;

: Avatar anime version 2<br /><font color="blue">Gửi lúc

Unknown end tag for &lt;/font&gt;

: 17/01/13, 06:23 pm

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;

<span class="nTright"><a href="/u920"><span style="color:#6B069E"><strong>quanmap

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/li&gt;

<li><span class="nTopics"><a onmouseover="show_tooltip(this, $(this).next().html(), 'FMvi.vn')" href="/t856-fm-minh-co-chuc-nang-blog-up-hinh-giong-cac-trang-haivl#7517">FM mình có chức năng Blog up hình giống các trang Haivl

Unknown end tag for &lt;/a&gt;

<span style="display:none"><font color="red">Tiêu đề

Unknown end tag for &lt;/font&gt;

: FM mình có chức năng Blog up hình giống các trang Haivl<br /><font color="blue">Gửi lúc

Unknown end tag for &lt;/font&gt;

: 17/01/13, 05:39 pm

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;

<span class="nTright"><a href="/u1"><span style="color:#FF0000"><strong>admin

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/li&gt;

<li><span class="nTopics"><a onmouseover="show_tooltip(this, $(this).next().html(), 'FMvi.vn')" href="/t815-thu-gian-an-qua-nho-ke-trong-cay#7459">[Thư giãn] Ăn quả nhớ kẻ trồng cây

Unknown end tag for &lt;/a&gt;

<span style="display:none"><font color="red">Tiêu đề

Unknown end tag for &lt;/font&gt;

: [Thư giãn] Ăn quả nhớ kẻ trồng cây<br /><font color="blue">Gửi lúc

Unknown end tag for &lt;/font&gt;

: 14/01/13, 10:58 am

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;

<span class="nTright"><a href="/u113"><span style="color:#FF0000"><strong>SupperVN.C_M_T

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/li&gt;

<li><span class="nTopics"><a onmouseover="show_tooltip(this, $(this).next().html(), 'FMvi.vn')" href="/t850-xin-nho-anh-baivong-lam-gium-em-cai-nay#7438">Xin nhờ anh baivong làm giùm em cái này

Unknown end tag for &lt;/a&gt;

<span style="display:none"><font color="red">Tiêu đề

Unknown end tag for &lt;/font&gt;

: Xin nhờ anh baivong làm giùm em cái này<br /><font color="blue">Gửi lúc

Unknown end tag for &lt;/font&gt;

: 13/01/13, 05:56 am

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;

<span class="nTright"><a href="/u1158"><span style="color:#6B069E"><strong>Khai•Tâm

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/li&gt;

<li><span class="nTopics"><a onmouseover="show_tooltip(this, $(this).next().html(), 'FMvi.vn')" href="/t836p40-tiep-nhan-cac-gop-y-ve-skin-fmvi-version-3#7425">Tiếp nhận các góp ý về skin fmvi version 3

Unknown end tag for &lt;/a&gt;

<span style="display:none"><font color="red">Tiêu đề

Unknown end tag for &lt;/font&gt;

: Tiếp nhận các góp ý về skin fmvi version 3<br /><font color="blue">Gửi lúc

Unknown end tag for &lt;/font&gt;

: 11/01/13, 01:52 pm

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;

<span class="nTright"><a href="/u1"><span style="color:#FF0000"><strong>admin

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/li&gt;

<li><span class="nTopics"><a onmouseover="show_tooltip(this, $(this).next().html(), 'FMvi.vn')" href="/t849-thong-bao-xoa-tai-khoan-khong-hoat-ong-tu-6-thang#7418">[Thông báo] Xóa tài khoản không hoạt động từ 6 tháng

Unknown end tag for &lt;/a&gt;

<span style="display:none"><font color="red">Tiêu đề

Unknown end tag for &lt;/font&gt;

: [Thông báo] Xóa tài khoản không hoạt động từ 6 tháng<br /><font color="blue">Gửi lúc

Unknown end tag for &lt;/font&gt;

: 11/01/13, 12:25 am

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;

<span class="nTright"><a href="/u1"><span style="color:#FF0000"><strong>admin

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/li&gt;



Unknown end tag for &lt;/ul&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div style="height:1px">

Unknown end tag for &lt;/div&gt;

<style type="text/css">
.caudoi{zoom:1;width:160px;height:522px;position:fixed;display:none;top:0}
.trai{left:0;background: url(/users/2315/72/47/45/album/l10.png)}
.phai{right:0;background:url(/users/2315/72/47/45/album/r10.png)}


Unknown end tag for &lt;/style&gt;

<div class="caudoi trai">

Unknown end tag for &lt;/div&gt;

<div class="caudoi phai">

Unknown end tag for &lt;/div&gt;


<script type="text/javascript">
jQuery(window).bind("load resize", function(){1250<=jQuery(window).width()?jQuery(".caudoi").show():jQuery(".caudoi").hide()})


Unknown end tag for &lt;/script&gt;

<div style="height:1px">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div id="pun-foot"><div id="pun-about" class="clearfix"><form action="/viewforum" method="get" name="jumpbox" onsubmit="if(document.jumpbox.f.value == -1){return false;}" id="qjump"><fieldset style="float:left"><select name="selected_id" onchange="if(this.options[this.selectedIndex].value != -1){ forms['jumpbox'].submit() }"><option value="-1">Select a forum

Unknown end tag for &lt;/option&gt;

<option value="-1">

Unknown end tag for &lt;/option&gt;

<option value="-1">|

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="c1">|--Mục Chính

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="c9">|&nbsp;&nbsp;&nbsp;|--Thông báo

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f3">|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|--Toàn diễn đàn

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f1">|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|--Nhóm phát triển

Unknown end tag for &lt;/option&gt;

<option value="-1">|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f39">|&nbsp;&nbsp;&nbsp;|--Góp Ý

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f40">|&nbsp;&nbsp;&nbsp;|--Sự Kiện

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f41">|&nbsp;&nbsp;&nbsp;|--Dự án

Unknown end tag for &lt;/option&gt;

<option value="-1">|&nbsp;&nbsp;&nbsp;

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="c2">|--Nhóm FmVi

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f42">|&nbsp;&nbsp;&nbsp;|--Mods miễn phí

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f4">|&nbsp;&nbsp;&nbsp;|--Mods cao cấp

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f16">|&nbsp;&nbsp;&nbsp;|--Thông tin hữu ích

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f8">|&nbsp;&nbsp;&nbsp;|--Mẫu trang HTML

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f21">|&nbsp;&nbsp;&nbsp;|--Phòng trưng bày

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f24">|&nbsp;&nbsp;&nbsp;|--Phòng thí nghiệm

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f25">|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|--Thông điệp

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f28">|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|--Quản lý

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f27">|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|--Video Youtube

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f20">|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|--Hộp nhạc

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f30">|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|--Hóa đơn

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f34">|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|--Test blog

Unknown end tag for &lt;/option&gt;

<option value="-1">|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f5">|&nbsp;&nbsp;&nbsp;|--Hỗ Trợ

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f6">|&nbsp;&nbsp;&nbsp;|--Báo Cáo Lỗi

Unknown end tag for &lt;/option&gt;

<option value="-1">|&nbsp;&nbsp;&nbsp;

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="c4">|--Thành Viên

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f7">|&nbsp;&nbsp;&nbsp;|--Đóng Góp

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f19">|&nbsp;&nbsp;&nbsp;|--Ý Tưởng

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f17">|&nbsp;&nbsp;&nbsp;|--Thảo luận chung

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f35">|&nbsp;&nbsp;&nbsp;|--Tự giới thiệu

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f33">|&nbsp;&nbsp;&nbsp;|--Thư giãn

Unknown end tag for &lt;/option&gt;

<option value="-1">|&nbsp;&nbsp;&nbsp;

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="c6">|--Linh Tinh

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="c5">&nbsp;&nbsp;&nbsp;&nbsp;|--Thiết kế ảnh

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f43">&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|--Trao Đổi & Góp Ý

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f44">&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|--Thiết Kế

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f45">&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|--Dự Án

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f22">&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|--Hướng dẫn - Chia sẻ

Unknown end tag for &lt;/option&gt;

<option value="-1">&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f36">&nbsp;&nbsp;&nbsp;&nbsp;|--Đánh giá diễn đàn

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f13">&nbsp;&nbsp;&nbsp;&nbsp;|--Tố cáo bản quyền

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f29">&nbsp;&nbsp;&nbsp;&nbsp;|--Kho Lưu Trữ

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f2">&nbsp;&nbsp;&nbsp;&nbsp;|--Thùng rác

Unknown end tag for &lt;/option&gt;



Unknown end tag for &lt;/select&gt;

<input type="hidden" name="tid" value="a3984850b2a5db3d068626c174718d4d" /> <input type="submit" value="Go" style="height: 24px; line-height: 24px; padding: 0pt 5px 2px ! important;" />

Unknown end tag for &lt;/fieldset&gt;



Unknown end tag for &lt;/form&gt;

<ul><li><strong><a href="http://www.forumotion.com/forum-create" target="_blank">Forum create

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/strong&gt;

&nbsp;|&nbsp;<span class="gensmall">&copy;

Unknown end tag for &lt;/span&gt;

 <a href="http://www.forumotion.com/en/punbb/" target="_blank">PunBB

Unknown end tag for &lt;/a&gt;

&nbsp;|&nbsp;<a name="bottom" href="http://help.forumotion.com/" target="_blank">Free forum support

Unknown end tag for &lt;/a&gt;

&nbsp;|&nbsp;<a name="bottom" href="/donate" rel="nofollow">Contribution

Unknown end tag for &lt;/a&gt;

&nbsp;|&nbsp;<a name="bottom" href="/contact" rel="nofollow">Contact

Unknown end tag for &lt;/a&gt;

&nbsp;|&nbsp;<a href="/abuse?page=%2Fh190-convert-emoticons&amp;report=1" rel="nofollow">Report an abuse

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;



Unknown end tag for &lt;/ul&gt;

<strong><span class="gensmall">&copy; 

Unknown end tag for &lt;/span&gt;

<a target="_blank" href="http://www.forumotion.com/en/punbb/">PunBB

Unknown end tag for &lt;/a&gt;

&nbsp;|&nbsp;<a rel="nofollow" href="/abuse?page=%2F&amp;report=1">Report an abuse

Unknown end tag for &lt;/a&gt;

&nbsp;|&nbsp;<a rel="nofollow" href="/donate" name="bottom">Contribution

Unknown end tag for &lt;/a&gt;

&nbsp;|&nbsp;<a id="skinfmvi2" name="bottom" class="copyright" href="http://www.fmvi.vn" rel="nofollow" target="_blank" title="FMvi">&copy; <font color="green">FMvi

Unknown end tag for &lt;/font&gt;

 - Design by <font color="red">baivong

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/strong&gt;

                                          

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<script type="text/javascript">my_setcookie("get_tid", $("#qjump input[name='tid']").val());if ("/u" == location.pathname.slice(0, 2)) {$("#profile-advanced-right .module:lt(2)").hide();var avatar = $("#profile-advanced-right .main-content:first img:first").attr("src"),rank = $("#profile-advanced-right .main-content:first img:last").attr("src"),usename = $("#profile-advanced-right .main-head:first .h3").html();$('<div id="pro5fmvi" class="module main"><div class="main-head"><div class="h3">' + usename + '

Unknown end tag for &lt;/div&gt;

<div style="display:none" class="h3"><img alt="rank" src="' + rank + '" />

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div class="main-content clearfix center"><img alt="avatar" src="' + avatar + '" />

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

').appendTo("#pun-intro");$("#pro5fmvi .h3 em").length && ($("#pro5fmvi .h3 em").remove(), $("#pro5fmvi .main-head").addClass("online"));$("#pro5fmvi .h3").click(function () {$("#pro5fmvi .h3").slideToggle()})};$("#linkbai").attr("href", "/spa/" + $("#userID").text());$("#myAvatar").show().appendTo("#pun-intro");$("#pun-about ul:first").remove();$("#field_id2, #field_id1, #field_id3").next().hide(); $("#profile_field_13_2, #profile_field_13_1, #profile_field_10_3, #profile_field_13_3").parent().parent().hide();$("#profile-advanced-details .message-header").prepend('<img src="http://i48.servimg.com/u/f48/16/58/89/73/tip14.png" style="margin-right: 10px; margin-left: -19px;" />');

Unknown end tag for &lt;/script&gt;

<a class="contactF" href="http://www.fmvi.vn/contact" style="background-color: rgb(221, 221, 221); right: 10px; padding-left: 10px; width: 85px;"><span class="contac10">

Unknown end tag for &lt;/span&gt;

 Liên hệ

Unknown end tag for &lt;/a&gt;

<a href="#top" onclick="$('html,body').animate({scrollTop: $('#top').offset().top}, 1000);return false" class="scroll10" style="bottom:5px;position:fixed;right:5px">

Unknown end tag for &lt;/a&gt;

<script type="text/javascript">jQuery("#zzadclose").length && jQuery("#zzadclose").click()

Unknown end tag for &lt;/script&gt;

<script type="text/javascript">//<![CDATA[
fa_endpage();//]]>

Unknown end tag for &lt;/script&gt;

<p class="center"><strong>

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/p&gt;



Unknown end tag for &lt;/body&gt;



Unknown end tag for &lt;/html&gt;

```