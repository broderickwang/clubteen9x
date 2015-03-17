Ghi chú: Code được viết bởi baivong, dựa trên mẫu Chatbox Vân Đồn Star Ver 1.1 (đã xin phép tác giả). Từ ver 1.2 trở đi, chatbox được phát triển bởi FMvi-group.
Ver 1.3 là phiên bản phát triển hiệu ứng âm thanh. Xem ver 1.2 tại http://www.fmvi.org/t323-chatbox-van-on-star-ver-12-by-baivong

Những chức năng mới so với ver 1.2:

> Chức năng ![http://r12.imgfast.net/users/1215/11/75/00/smiles/2270249841.gif](http://r12.imgfast.net/users/1215/11/75/00/smiles/2270249841.gif) : Chức năng buzz làm rung chatbox trong 0.8s và phát âm thanh buzz (yahoo) cho tất cả thành viên đang có mặt trong chatbox (đối với IE và các trình duyệt không hỗ trợ CSS3 thì chỉ có âm thanh, ko có rung). Nếu bạn mới truy cập vào trang có chatbox chứa buzz thì bạn sẽ nhận được buzz.
> Disconnect: Chỉ mình bạn nghe thấy âm thanh này khi bạn bị disconnect trên chatbox.
> Online: Bạn sẽ nghe âm thanh online (yahoo) khi có số thành viên online tăng lên.
> Away: Bạn sẽ nghe âm thanh offline (yahoo) khi có số thành viên away tăng lên.
> New message: Bạn sẽ nghe âm thanh message (yahoo) khi số tin nhắn tăng lên trong 1 giây.
> Full chat: Mở rộng khung chat toàn màn hình, lúc này menu lựa chọn sẽ nằm phía dưới, bên trái.



Demo:
![http://www.fmvi.vn/viewimage.forum?u=http://i48.servimg.com/u/f48/16/58/89/73/buzzv110.png](http://www.fmvi.vn/viewimage.forum?u=http://i48.servimg.com/u/f48/16/58/89/73/buzzv110.png)


Hướng dẫn:
Bước 1: ACP - Modules - Chatbox - Configuration:
ChatBox configuration

> Activate the ChatBox: Yes
> ChatBox display: Do not display



Bước 2: ACP - Display - Avatars - Smilies - Add:
![http://www.fmvi.vn/viewimage.forum?u=http://i48.servimg.com/u/f48/16/58/89/73/zzbuzz10.png](http://www.fmvi.vn/viewimage.forum?u=http://i48.servimg.com/u/f48/16/58/89/73/zzbuzz10.png)

Smilies Configuration

> Smilie Code : buzz
> Smilie Emotion : buzz
> Add smile mớí bạn chọn một hình ảnh từ máy tính của bạn, có thể dùng ảnh này ![http://r12.imgfast.net/users/1215/11/75/00/smiles/2270249841.gif](http://r12.imgfast.net/users/1215/11/75/00/smiles/2270249841.gif)



Bước 3: ACP - Display - Templates
Đặt code dưới đây vào index\_body hoặc overall\_footer

```


<style type="text/css">
#chatvds_menu{cursor:pointer;display:inline;z-index:999}
#autologinchat,#fullchat,#numbuzz,#numCon,#numCoff,#numlast,#numfirst{display:none;}
#chatvds_menu:hover{background-color:#333;color:#ff0}
#thongdiep_chat{position:fixed;bottom:30px;right:80px}
#fullchat,#chatvds_menu,#autologinchat{background:none repeat scroll 0 0 #000;border:1px solid #999;float:left;margin:-6px 5px;padding:5px;}
#tuychinh_chat{display:none;height:20px;position:fixed;bottom:-1px;right:0;font-family:Tahoma, Arial;font-size:12px;font-weight:700;z-index:999}
#chatfmvi{background-image:url(http://i48.servimg.com/u/f48/13/58/60/43/mainco13.png);z-index: 999;height:100%;position:fixed;right:5px;display:none;border:1px solid #999;margin:0;padding:0}
#mes_chat,#onl_chat,#away_chat{color:red}
#show_color{display:block}


Unknown end tag for &lt;/style&gt;


<div id="tuychinh_chat" onmouseover="hien_tuychinh();" onmouseout="an_tuychinh();">
<div id="fullchat">
<input type="checkbox" />
<span class="gensmall">Full chat

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;


<div id="autologinchat">
<input type="checkbox" checked="checked" />
<span class="gensmall">Auto Login

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;


<div id="chatvds_menu">
<strong style="float:left">New message [
<span id="mes_chat">0

Unknown end tag for &lt;/span&gt;

] Online [
<span id="onl_chat">0

Unknown end tag for &lt;/span&gt;

] Away [
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


<iframe id="chatfmvi" onload="firstchatfmvi()" src="/chatbox/index.forum?archives=1">

Unknown end tag for &lt;/iframe&gt;


<script type="text/javascript">
function firstchatfmvi() {
$("#chatfmvi").contents().find("#chatbox_header .chatbox-title").html('<font color="cyan">Chatbox <font color="yellow">Ver 1.3

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/font&gt;

');
$("#chatfmvi").contents().find("#divsmilies").after('<div id="chatbuzz" style="padding:5px 2px" class="fontbutton fontbutton_normal" onmouseover="this.className=\'fontbutton fontbutton_hover\'" onmouseout="this.className=\'fontbutton fontbutton_normal\'"><img src="http://www.fmvi.org/users/2315/72/47/45/smiles/3783939235.gif" alt="buzz"/>

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
height: "50%",
bottom: "30px",
right: "5px",
width: "65%"
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


```


Ghi chú Để IDM không tự động bắt link mp3 - âm thanh chatbox, các bạn hãy bỏ chức năng tự bắt link mp3 của IDM theo hướng dẫn sau:

> Bật IDM - Internet Download Manager
> Click vào menu Downloads chọn Options
> Trong cửa sổ bật ra, chọn tab Ganeral
> Trong tab Ganeral, nhìn ở cuối có mục Customide IDM Download panels in browsers, bạn chọn Edit...
> Trong cửa sổ bật ra, chọn tab For web-palyer
> trong tab For web-palyer, mục Show IDM Download panels for following file type, bạn bỏ check mục MP3
> Nhấn OK - OK



[+] Nếu bạn muốn sao chép hướng dẫn này đi nơi khác vui lòng không thay đổi bất kỳ thành phần nào trong code và phải ghi bản quyền thuộc www.FMvi.org

Tìm trong javascript, đoạn:

```


[src='http://r12.imgfast.net/users/1215/11/75/00/smiles/2270249841.gif']
```

sửa lại thành



> ```
 [alt='buzz']```