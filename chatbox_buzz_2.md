![http://i16.servimg.com/u/f16/17/75/13/98/tesst_10.png](http://i16.servimg.com/u/f16/17/75/13/98/tesst_10.png)

Tính năng :
♦Bỏ phần thông tin thành viên online và away
♦Hiển thị số tin nhắn
♦Chế độ tự đăng nhập
♦Hiển thị số người online
♦Nút Buzz làm rung toàn bộ
♦Bỏ ký tự @
♦Và một số tính năng khác của chatbox Alexandru.......
Nội dung : {Trả lời để thấy nội dung}
Bước 1 : Vào
ACP - Modules - Chatbox - Configuration:
ChatBox configuration
Activate the ChatBox: Yes
ChatBox display: Do not display

Bước 2 : Tạo 1 hình vui
ACP - Display - Avatars - Smilies :

Smilies Configuration
Smilie Code : ![http://r14.imgfast.net/users/1416/39/08/64/smiles/2270249841.gif](http://r14.imgfast.net/users/1416/39/08/64/smiles/2270249841.gif)
Smilie Emotion : ![http://r14.imgfast.net/users/1416/39/08/64/smiles/2270249841.gif](http://r14.imgfast.net/users/1416/39/08/64/smiles/2270249841.gif)
Cho smile mớí bạn chọn một hình ảnh từ máy tính bạn hoặc dùng hình này :
![http://r12.imgfast.net/users/1215/11/75/00/smiles/2270249841.gif](http://r12.imgfast.net/users/1215/11/75/00/smiles/2270249841.gif)
Các bạn làm theo mẫu sau



Bước 3

Do hình vui buzz của chatbox có mã giống với hotrofm nên nếu mình đưa code trực tiếp sẽ bị lỗi câc bạn download file này về , mở bằng notepad





> ```
<!-- Chatbox Ver 2.0 -->
<style type="text/css">
#chatvds_menu{cursor:pointer;display:inline;z-index:999}
#autologinchat,#fullchat,#numbuzz,#numCon,#numCoff,#numlast,#numfirst{display:none;}
#chatvds_menu:hover{background-color:#9fa4eb;color:#e4e5f0}
#thongdiep_chat{position:fixed;bottom:30px;right:80px}
#fullchat,#chatvds_menu,#autologinchat{background:none repeat scroll 0 0 #e4e5f0;border:1px solid #999;float:left;margin:-6px 5px;padding:5px;}
#tuychinh_chat{display:none;height:20px;position:fixed;bottom:-1px;right:0;font-family:Tahoma, Arial;font-size:12px;font-weight:700;z-index:999}
#chatfmvi{background-image:url(http://i48.servimg.com/u/f48/13/58/60/43/mainco13.png);z-index: 999;height:100%;position:fixed;right:5px;display:none;border:1px solid #999;margin:0;padding:0}
#mes_chat,#onl_chat,#away_chat{color:red}
#show_color{display:block}


Unknown end tag for &lt;/style&gt;


<div id="tuychinh_chat" onmouseover="hien_tuychinh();" onmouseout="an_tuychinh();">

<div id="autologinchat">
<input type="checkbox" checked="checked" />
<span class="gensmall">T? dang nh?p

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;


<div id="chatvds_menu">
<strong style="float:left">Tin nh?n [
<span id="mes_chat">0

Unknown end tag for &lt;/span&gt;

] Online [
<span id="onl_chat">0

Unknown end tag for &lt;/span&gt;

] Treo máy [
<span id="away_chat">0

Unknown end tag for &lt;/span&gt;

]

Unknown end tag for &lt;/strong&gt;




Unknown end tag for &lt;/div&gt;


<div id="audiobuzz">

Unknown end tag for &lt;/div&gt;


<div id="audiochaton">

Unknown end tag for &lt;/div&gt;


<div id="audiochataway">

Unknown end tag for &lt;/div&gt;


<div id="audiochatdiss">

Unknown end tag for &lt;/div&gt;


<div id="audiochatmess">

Unknown end tag for &lt;/div&gt;


<span id="numfirst">0

Unknown end tag for &lt;/span&gt;


<span id="numlast">0

Unknown end tag for &lt;/span&gt;


<span id="numbuzz">0

Unknown end tag for &lt;/span&gt;


<span id="numon">0

Unknown end tag for &lt;/span&gt;


<span id="numaway">0

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;


<iframe id="chatfmvi" onload="firstchatfmvi()" src="/chatbox/index.forum?archives">

Unknown end tag for &lt;/iframe&gt;


<script type="text/javascript">
function firstchatfmvi() {
$("#chatfmvi").contents().find("#chatbox_header .chatbox-title").html('<font color="cyan">Chatbox <font color="Red">Ver 2.0

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/font&gt;

');
$("#chatfmvi").contents().find("#divsmilies").after('<div id="chatbuzz" style="padding:0px 0px" class="fontbutton fontbutton_normal" onmouseover="this.className=\'fontbutton fontbutton_hover\'" onmouseout="this.className=\'fontbutton fontbutton_normal\'"><img src="http://illiweb.com/fa/empty.gif" alt="buzz"/>

Unknown end tag for &lt;/div&gt;

');
$("#chatfmvi").contents().find("#chatbuzz").click(function () {
$("#chatfmvi").contents().find("input[name='message']").val(":buzz:");
$("#chatfmvi")[0].contentWindow.submitmsg("?archives=1")
});
$("#chatvds_menu").click(function () {
$("#chatfmvi").toggle();
0 != $("#autologinchat input:checked").length && "none" != $("#chatfmvi").contents().find("#chatbox_option_co").css("display") && $("#chatfmvi")[0].contentWindow.CB_disconnect();
0 != $("#fullchat input:checked").length ? chatboxleft() : ($("#chatfmvi").css({
height: "55%",
bottom: "40px",
right: "5px",
width: "75%"
}), $("#tuychinh_chat").css({
right: "0",
left: "auto",
"z-index": "99999"
}), $("#fullchat,#autologinchat").css("float", "left"))
});
$("#numdis").text($("#chatfmvi").contents().find("#chatbox_members li").length);
$("#numbuzz").text($("#chatfmvi").contents().find("#chatbox .msg img[alt='buzz']").length);
$("#numon").text($("#chatfmvi").contents().find("#chatbox_members .online").next("ul").find("li").length);
$("#numaway").text($("#chatfmvi").contents().find("#chatbox_members .away").next("ul").find("li").length);
setInterval(function () {
var b = $("#chatfmvi").contents().find("#chatbox_members li").length,
d = $("#chatfmvi").contents().find("#chatbox .msg img[alt='buzz']").length,
a = $("#chatfmvi").contents().find("#chatbox_members .online").next("ul").find("li").length,
c = $("#chatfmvi").contents().find("#chatbox_members .away").next("ul").find("li").length;
$("#numfirst").text($("#chatfmvi").contents().find("#chatbox p").length);
setTimeout('$("#numlast").text($("#chatfmvi").contents().find("#chatbox p").length)', 1E3);
0 < Number($("#numfirst").text()) - Number($("#numlast").text()) && $("#audiochatmess").html('<embed type="application/x-shockwave-flash" src="http://baivong.do.am/dewplayer-mini_68.swf" flashvars="mp3=http://baivong.do.am/message.mp3&autoplay=1" width="1" height="1" />');
b > Number($("#numdis").text()) ? ($("#audiochatdiss").html('<embed type="application/x-shockwave-flash" src="http://baivong.do.am/dewplayer-mini_68.swf" flashvars="mp3=http://baivong.do.am/disconnect.mp3&autoplay=1" width="1" height="1" />'), $("#numdis").text(b)) : b < Number($("#numdis").text()) && $("#numdis").text(b);
d > Number($("#numbuzz").text()) ? ($("#audiobuzz").html('<embed type="application/x-shockwave-flash" src="http://baivong.do.am/dewplayer-mini_68.swf" flashvars="mp3=http://baivong.do.am/buzz.mp3&autoplay=1" width="1" height="1" />'), transformL(), setTimeout("transformR()", 100), setTimeout("transformL()", 200), setTimeout("transformR()", 300), setTimeout("transformL()", 400), setTimeout("transformR()", 500), setTimeout("transformL()", 600), setTimeout("transformR()", 700), setTimeout("$('#chatfmvi').contents().find('#chatbox_header, #chatbox_footer, #chatbox, #chatbox_members').css({'transform': 'rotate(0deg)', '-moz-transform': 'rotate(0deg)', '-webkit-transform': 'rotate(0deg)', '-o-transform': 'rotate(0deg)'})", 800), $("#numbuzz").text(d)) : d < Number($("#numbuzz").text()) && $("#numbuzz").text("0");
"none" == $("#chatfmvi").contents().find("#chatbox_option_co").css("display") && $("#audiochatdiss").empty();
a > Number($("#numon").text()) ? ($("#audiochaton").html('<embed type="application/x-shockwave-flash" src="http://baivong.do.am/dewplayer-mini_68.swf" flashvars="mp3=http://baivong.do.am/online.mp3&autoplay=1" width="1" height="1" />'), $("#numon").text(a)) : a < Number($("#numon").text()) && $("#numon").text(a);
c > Number($("#numaway").text()) ? ($("#audiochataway").html('<embed type="application/x-shockwave-flash" src="http://baivong.do.am/dewplayer-mini_68.swf" flashvars="mp3=http://baivong.do.am/offline.mp3&autoplay=1" width="1" height="1" />'), $("#numaway").text(c)) : c < Number($("#numaway").text()) && $("#numaway").text(c); - 1 == $("#chatfmvi").contents().find("p:first").text().indexOf("You must be connected to use the ChatBox") ? (b = $("#chatfmvi").contents().find("#chatbox_members .away").next("ul").find("li").length, d = $("#chatfmvi").contents().find("#chatbox_members .online").next("ul").find("li").length, "inline" == $("#chatfmvi").css("display") && (null == my_getcookie("old_messenger") ? my_setcookie("old_messenger", 0, !0) : my_setcookie("old_messenger", $("#chatfmvi").contents().find("#chatbox p").length, !0)), -1 != $("#chatfmvi").contents().find("#chatbox p:first").text().indexOf("You are disconnected") && 0 == $("#audiochatdiss").find("embed[flashvars*='disconnect.mp3']").length ? (a = "X", my_setcookie("old_messenger", 1, !0), $("#audiochatdiss").html('<embed type="application/x-shockwave-flash" src="http://baivong.do.am/dewplayer-mini_68.swf" flashvars="mp3=http://baivong.do.am/disconnect.mp3&autoplay=1" width="1" height="1" />')) : (a = Number($("#chatfmvi").contents().find("#chatbox p").length), c = Number(my_getcookie("old_messenger")), a < c ? (a = "X", my_setcookie("old_messenger", 0, !0)) : a -= c)) : b = d = a = "X";
0 != $("#pun-head a.mainmenu[href='/login']").length && my_setcookie("old_messenger", 0, !0);
$("#mes_chat").text(a);
$("#onl_chat").text(d);
$("#away_chat").text(b)
},
1E3);
$("#tuychinh_chat").fadeIn(1E3);
$("#autologinchat").click(function () {
0 != $("#autologinchat input:checked").length ? my_setcookie("check_loginchat", "yes", !0) : my_setcookie("check_loginchat", "no", !0)
});
$("#fullchat input").click(function () {
0 == $("#fullchat input:checked").length ? my_setcookie("check_fullchat", "yes", !0) : my_setcookie("check_fullchat", "no", !0)
});
"no" == my_getcookie("check_loginchat") && $("#autologinchat input").attr("checked", !1);
"no" == my_getcookie("check_fullchat") && ($("#fullchat input").attr("checked", !0), chatboxleft())
}

function chatboxleft() {
$("#chatfmvi").css({
height: "100%",
bottom: "0",
right: "0",
width: "100%"
});
$("#tuychinh_chat").css({
left: "0",
right: "auto",
"z-index": "99999"
});
$("#fullchat,#autologinchat").css("float", "right")
}

function hien_tuychinh() {
$("#fullchat,#autologinchat").show()
}

function an_tuychinh() {
$("#fullchat,#autologinchat").hide()
}

function transformL() {
$("#chatfmvi").contents().find("#chatbox_header, #chatbox_footer, #chatbox, #chatbox_members").css({
transform: "rotate(-10deg)",
"-moz-transform": "rotate(-10deg)",
"-webkit-transform": "rotate(-10deg)",
"-o-transform": "rotate(-10deg)"
})
}

function transformR() {
$("#chatfmvi").contents().find("#chatbox_header, #chatbox_footer, #chatbox, #chatbox_members").css({
transform: "rotate(10deg)",
"-moz-transform": "rotate(10deg)",
"-webkit-transform": "rotate(10deg)",
"-o-transform": "rotate(10deg)"
})
};


Unknown end tag for &lt;/script&gt;


<!-- Chatbox Ver 2.0 -->```


Sau đó tìm

```

Tin nh?n

```

và

```

T? dang nh?p

```

Và sửa lần lượt thành

```

Tin nhắn
```

```

Tự đăng nhập
```


**chú ý nếu không có thì thôi**

Cuối cùng KHÔNG lưu file đó lại Copy toàn bộ code sau khi sửa vào index\_body hoặc overall\_header thì tùy bạn.

Bước 4 : Cho code này vô CSS

```

/*----------------CHATBOX Ver 2.0----------------*/
#chatbox_header{
margin: 0px !important;
background:  url(http://i25.servimg.com/u/f25/14/45/99/41/untitl20.jpg) repeat-x !important;
border-bottom: 1px solid #c9c9c9;
border-top: 0px;
border-left: 0px;
border-right: 0px;
}
h2.chatbox-title {
margin-top: 4px;
}
#chatbox_header .chat-title{
margin-bottom: -20px;
margin-left: -20px;
background:  url(http://i25.servimg.com/u/f25/14/45/99/41/112_co11.png) no-repeat;
font-size: 14px;
cursor: default;
letter-spacing: -0.4em;
color: transparent;
}
#chatbox_header .chat-title:hover{
background:  url(http://i25.servimg.com/u/f25/14/45/99/41/112.png) no-repeat;
letter-spacing: 2.1em;
}
#chatbox_main_options, #chatbox_main_options a, #chatbox_main_options span{
color: #9a9a9a !importat;
text-shadow: 1px 1px 1px #ffffff;
text-decoration:none;
font-family: Arial Black;
text-transform: uppercase;
}
#chatbox_main_options a:hover{
color: grey;
text-shadow: 1px 1px 1px #b8b8b8;
text-decoration:none !important;
font-family: Arial Black;
text-transform: uppercase;
}

#chatbox_main_options{
background:  url(http://i25.servimg.com/u/f25/14/45/99/41/untitl21.jpg) repeat-x;
float: right;
border: 1px solid #c9c9c9;
margin-right: 50px;
margin-top: -10px;
padding: 2px 3px 1px 5px;
border-radius: 0px 0px 5px 5px;
-moz-border-radius: 0px 0px 5px 5px;
-webkit-box-shadow: 0px 0px 4px #c6c6c6;
box-shadow: 0px 0px 4px #c6c6c6;
-moz-box-shadow: 0px 0px 4px #c6c6c6;
}
#chatbox_main_options:hover {
margin-top: -1px;
}

ul#chatbox_main_options li, ul#chatbox_main_options li label, ul#chatbox_main_options li, ul#chatbox_main_options li a {
color: #9a9a9a !important;
text-shadow: 1px 1px 1px #ffffff;
}
/*----------------Members----------------*/
#chatbox_members {
background:  url(http://i25.servimg.com/u/f25/14/45/99/41/50347510.png);
margin-bottom: -30px;
border-right: 1px solid #c9c9c9;
background-color: #ffffff;
}
#chatbox_members:hover {
border-right: 1px solid #b7b7b7;
background-color: #fcfcfc;
}
h4.member-title{
background: url(http://i25.servimg.com/u/f25/14/45/99/41/untitl23.jpg) repeat-x !important;
font-family: Arial Black;
text-transform: uppercase;
color: #ffffff !important;
text-shadow: 0px 0px 3px black;
margin-top: 0px;
cursor: default;
letter-spacing: 0.5em;
}

#chatbox_members ul {
list-style: none;
margin: 0px;
}
#chatbox_members ul li {
background:  url(http://i25.servimg.com/u/f25/14/45/99/41/115.png);
font-family: Arial Black;
font-weight: bold;
font-size: 14px;
color: #393939;
padding-left: 10px;
border-bottom: 1px solid #e2e2e2;
margin: 0px;
}

#chatbox_members ul li:hover {
background-color: #f4f4f4;
background-image:url('http://i25.servimg.com/u/f25/14/45/99/41/114.png');
background-repeat: no-repeat;
background-position: center left;
}
#chatbox_members ul li:active {
background-image:url('http://i25.servimg.com/u/f25/14/45/99/41/213.png');
}
#chatbox_members ul li a {
text-shadow: 1px 1px 1px #ffffff;
font-size: 12px;
color: #909090;
text-decoration: none;
}
#chatbox_members ul li a:hover {
color: #393939;
text-decoration: none !important;
}
/*----------------ChatBox Con----------------*/

.chatbox_row_1, .chatbox_row_2 {
background-color: transparent !important;
}
.chatbox_row_1:hover, .chatbox_row_2:hover {
background-color: #ffffff !important;
border: 1px solid #c9c9c9;
border-radius: 5px;
-moz-border-radius: 5px;
margin: 5px;
-webkit-box-shadow: 0px 0px 4px #dcdcdc;
box-shadow: 0px 0px 3px #dcdcdc;
-moz-box-shadow: 0px 0px 3px #dcdcdc;
background: -webkit-gradient(linear, left top, left bottom, from(#ffffff), to(#f9f9f9));
background: -moz-linear-gradient(top, #ffffff, #f9f9f9);
}
.date-and-time {
color: #c3c3c3 !important;
font-style: italic !important;
font-size: 9px !important;
letter-spacing: -0.1em !important;
}
.user-msg {
font-family: Georgia !important;
color: #8c8c8c !important;
}

.user-msg a:hover {
color: #000000 !important;
text-decoration: none !important;
}

/*----------------Footer----------------*/

#chatbox_messenger_form {
width: 650px;
float: none !important;
bottom: 0px ;
position: fixed;
z-index: 999;
margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
-webkit-box-shadow: 0px 0px 4px #d4d4d4;
box-shadow: 0px -0px 4px #d4d4d4;
-moz-box-shadow: 0px 0px 4px #d4d4d4;
box-shadow: 0px 0px 4px #c6c6c6;
-moz-box-shadow: 0px 0px 4px #c6c6c6;
border-top: 1px solid #c9c9c9;
border-left: 1px solid #c9c9c9;
border-right: 1px solid #c9c9c9;
border-bottom: 0px;
height: 30px;
border-radius: 5px 5px 0px 0px;
-moz-border-radius: 5px 5px 0px 0px;
background-color: #ffffff;
background: -webkit-gradient(linear, left top, left bottom, from(#ffffff), to(#f9f9f9)) !important;
background: -moz-linear-gradient(top, #ffffff, #e2e2e2) !important;
}
#chatbox_messenger_form:hover {
border-top: 1px solid #a7a7a7;
border-left: 1px solid #a7a7a7;
border-right: 1px solid #a7a7a7;
}

#divbold, #divitalic, #divunderline, #divstrike, #divcolor, #divsmilies {
background:  url(http://i25.servimg.com/u/f25/14/45/99/41/110.jpg) repeat-x;
border: 1px solid #c9c9c9;
background-color: #ffffff;
border-radius: 3px;
-moz-border-radius: 3px;
}
#divbold:hover, #divitalic:hover, #divunderline:hover, #divstrike:hover, #divcolor:hover, #divsmilies:hover {
background:  url(http://i25.servimg.com/u/f25/14/45/99/41/hover10.jpg) repeat-x;
border: 1px solid #a2a2a2;
}
#divbold:active, #divitalic:active, #divunderline:active, #divstrike:active, #divcolor:active, #divsmilies:active {
background:  url(http://i25.servimg.com/u/f25/14/45/99/41/active10.jpg) repeat-x;
}
label input#message {
height: 17px;
font-size: 12px;
border: 1px solid #c9c9c9;
background-color: #ffffff;
border-radius: 3px;
-moz-border-radius: 3px;
}
label input#message:hover {
border: 1px solid #b2b2b2;
background-color: #f5f5f5;
}
label input#message:focus {
border: 1px solid #a4a4a4;
background-color: #e0fdff;
}
input#submit_button {
cursor: pointer;
color: #929292;
font-family: Arial Black;
text-transform: uppercase;
font-size: 12px;
padding-left: 2px;
padding-right: 2px;
background:  url(http://i25.servimg.com/u/f25/14/45/99/41/110.jpg) repeat-x;
border: 1px solid #c9c9c9;
background-color: #ffffff;
border-radius: 3px;
-moz-border-radius: 3px;
}
input#submit_button:hover {
color: #2c2c2c;
background:  url(http://i25.servimg.com/u/f25/14/45/99/41/hover10.jpg) repeat-x;
border: 1px solid #a2a2a2;
}
input#submit_button:active {
background:  url(http://i25.servimg.com/u/f25/14/45/99/41/active10.jpg) repeat-x;
}
.right {
padding-top: 4px !important;
}
#chatbox_footer {
border: 0px !important;
}
#chatbox .user > span{display: none}
#chatbox{left:0}
#chatbox_members{display:none}

```

Không share bài viết đi nơi khác