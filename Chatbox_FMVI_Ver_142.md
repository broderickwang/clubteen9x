Tác giả: baivong
Tên sản phẩm: Chatbox FMvi ver 1.4.2

Demo: http://www.fmvi.org/h86-chatbox-142

Chức năng: Phiên bản này sẽ cho phép bạn thực hiện những thao tác mà bạn chưa từng nghĩ là có thể thực hiện với một forum không quản lý được database như forumotion.
Từ bây giờ bạn có thể thực hiện buzz đến tất cả thành viên chatbox, bạn cũng có thể thực hiện kết bạn với thành viên khác một cách dễ dàng, hay giữ bí mật tin chat của mình với những thành viên không mong muốn trong chatbox... Hơn thế nữa bạn có thể gửi quà tặng giải trí ngay tại chatbox, được tích hợp công cụ tìm kiếm hàng đầu thế giới google trong lựa chọn. Xem chi tiết bên dưới.

> Chức năng ![http://r12.imgfast.net/users/1215/11/75/00/smiles/2270249841.gif](http://r12.imgfast.net/users/1215/11/75/00/smiles/2270249841.gif)  Chức năng ![http://r12.imgfast.net/users/1215/11/75/00/smiles/2270249841.gif](http://r12.imgfast.net/users/1215/11/75/00/smiles/2270249841.gif)  làm rung chatbox trong 0.8s và phát âm thanh buzz (yahoo) cho tất cả thành viên đang có mặt trong chatbox (đối với IE và các trình duyệt không hỗ trợ CSS3 thì chỉ có âm thanh, ko có rung). Nếu bạn mới truy cập vào trang có chatbox chứa buzz thì bạn sẽ nhận được buzz.
> /help : Hướng dẫn sử dụng các câu lệnh
> /close : Đóng danh sách thành viên đang trên chatbox
> /open : Mở danh sách thành viên đang trên chatbox
> /fullscreen : Chế độ hiển thị toàn màn hình cho Chatbox
> /window: Chế độ hiển thị thu gọn cho Chatbox
> /popup : Chế độ hiển thị Pop-up ChatBox

> /yahoo [yahoo](nick.md) : Lấy avatar yahoo
> /avatar [forum](nick.md) : Lấy avatar của thành viên trong forum
> /friend [forum](nick.md) : Kết bạn với 1 thành viên trong forum
> /foe [forum](nick.md) : Thêm 1 thành viên vào sổ đen trong forum
> /track [forum](nick.md) : Theo dõi tin nhắn của một thành viên

> /hide [forum](nick.md): Ngăn cấm một thành viên đọc tin nhắn, dùng /hide {off} để hủy lệnh
> /chat [forum](nick.md): Chỉ cho phép một thành viên đọc tin nhắn, dùng /chat {off} để hủy lệnh
> /pm [forum](nick.md) {[Nội dung]}: Gửi tin nhắn riêng cho một thành viên

> /gift : Chức năng tặng quà youtube, nhaccuatui, mp3zing, trochoiviet.
> > Nhập nick: Tích hợp chức năng tìm kiếm và kiểm tra nick người nhận, mặc định là gửi đến tất cả nếu không nhập và bạn không thể tự gửi quà cho mình.
> > Gửi quà: Kiểm tra liên kết nhập vào, tích hợp công cụ tìm kiếm google, và lấy kết quả trực tiếp. Mỗi thành viên chỉ được gửi 1 lần.
> > Hiển thị: Sử dụng mod address-link để phát quà tặng từ liên kết đã nhập. Giới hạn tối đa 5 quà tặng.
> > Thông báo:
> > > Người nhận: Thông báo khi có người gửi quà và số lượng, quà tặng của người nhận được hiển thị nổi bật hơn.
> > > Thành viên khác: Hiển thị danh sách quà tặng khi có thành viên gửi quà trên chatbox.


> Lưu ý: Khi đã có quà tặng, thành viên phải check dừng chức năng tự cập nhật quà tặng thì mởi gửi quà được.
> Chế độ hiển thị Pop-up Chatbox có thể bị trình duyệt chặn


Hạn chế trình duyệt: Chức năng tặng quà không sử dụng được trên Internet Explorer < 9.


Hướng dẫn: {Trả lời hoặc bỏ phiếu đánh giá bài viết này để xem nội dung ẩn}

Bước 1: ACP - Modules - Chatbox - Configuration:
ChatBox configuration

> Activate the ChatBox: Yes
> ChatBox display: Top of the homepage



Bước 2: ACP - Display - Avatars - Smilies - Add:

Smilies Configuration

> Smilie Code : ![http://r12.imgfast.net/users/1215/11/75/00/smiles/2270249841.gif](http://r12.imgfast.net/users/1215/11/75/00/smiles/2270249841.gif)
> Smilie Emotion : buzz
> Add smile mớí bạn chọn một hình ảnh từ máy tính của bạn, có thể dùng ảnh này buzz




Bước 3: ACP - Display - Pictures and Colors - Colors - CSS Stylesheet: Thêm vào CSS

```

.chatfmvi{z-index: 999;width:100%;height:100%;position:fixed;left:0;top:0;display:block;border:1px solid #999;margin:0;padding:0}
#mes_chat,#onl_chat,#away_chat{color:red}
#show_color{display:block}
#chatbox img, #chatbox_onlyU img{max-height: 75px}
#tinchatrieng .date-and-time{color: rgb(255, 0, 255); font-size: 11px; letter-spacing: -2px; padding-right: 10px;}
#tinchatrieng .msg{color: Orange; font-family: Comic Sans MS;}
#chatbox .helpchat{border:1px dotted;line-height:1.2em;width:99%;margin:0 5px;padding:0 10px 10px}
#giftchatbox #listgiftchat img, #giftchatbox #sendgiftchat img{border:3px solid;border-radius:3px 3px 3px 3px;height:50px;margin:2px 15px;padding:5px}
#giftchatbox #listgiftchat img:hover, #giftchatbox #sendgiftchat img:hover{cursor: pointer;border:3px solid LightSkyBlue}
#giftchatbox input{font-size:15px;text-shadow:0 1px 0 #fff;outline:none;none repeat scroll 0 50% #F5F5F5;height:20px;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;border:1px solid #717171;-webkit-box-shadow:1px 1px 0 #efefef;-moz-box-shadow:1px 1px 0 #efefef;box-shadow:1px 1px 0 #efefef;padding:5px;}
#giftchatbox button, #loadusergift{border-radius:3px;display:block;float:right;background-color:#f5f5f5;border:1px solid #dedede;border-top:1px solid #eee;border-left:1px solid #eee;font-family:"Lucida Grande", Tahoma, Arial, Verdana, sans-serif;font-size:100%;line-height:130%;text-decoration:none;font-weight:bold;color:#565656;cursor:pointer;margin:0 7px 0 0;padding:5px 10px 6px 7px;}
#giftchatbox button[type]{line-height:17px;width:auto;padding:5px 10px 5px 7px;}
#giftchatbox button.check:hover{background-color:#E6EFC2;border:1px solid #C6D880;color:#529214;}
#giftchatbox button.cancel{color:#D12F19;}
#giftchatbox button.cancel:hover{background:none repeat scroll 0 0 #FBE3E4;border:1px solid #FBC2C4;color:#D12F19;}
#giftchatbox button.cancel:active{background-color:#D12F19;border:1px solid #D12F19;color:#FFFFFF;}
#giftchatbox button.check,#seachgiftchat button.check:active{color:#529214;}
#giftchatbox button.search:active{background-color:#6299C5;border:1px solid #6299C5;color:#FFF}
#giftchatbox button.search:hover{background-color:#DFF4FF;border:1px solid #C2E1EF;color:#369}
#find_username{width:412px;border-radius:5px}
#find_username .pun{width:390px;}
#chatbox_onlyU .tieudeonlyu{background-color: rgb(26, 25, 25); background-image: none; color: rgb(217, 200, 174); font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 12px; padding: 0.5em 1em;}
#loadusergift{float: left; margin: 0pt 40px;}
#chatbox_onlyU{border-right: 1px dashed #CCCCCC;bottom: 30px;overflow-x: hidden;position: absolute;top: 30px;width: 360px;display:none}
#giftchatbox{border-top: 1px dashed rgb(204, 204, 204); left: 0pt; position: absolute; right: 0pt; background: none repeat scroll 0pt 0pt rgb(43, 42, 42); bottom: 32px; opacity: 1; height: 0; display: none;}
#giftchatbox h4{background-color: rgb(26, 25, 25); background-image: none; color: rgb(217, 200, 174); font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 12px; padding: 0.5em 1em;}
#sendgiftchat,#listgiftchat,#seachgiftchat,#seachuserchat{display: inline-block; width:0; overflow: auto; position: absolute; left: 50%;margin-left: -250px;}
#giftchatbox input[type=checkbox]{border:0;padding:0;height:16px}


```
Bước 4: ACP - Display - Templates - Index\_body: Đặt code sau bên dưới {CHATBOX\_TOP}

```

<script type="text/javascript">
my_setcookie("tidfmvi", $("#logout").attr("href").slice(15, 52), true);
var tenbanU = $("#i_icon_mini_logout").attr("title"),
userdban = tenbanU.slice(tenbanU.indexOf('[') + 2, tenbanU.indexOf(']') - 1);
my_setcookie("usernamefmvi", userdban, true);
$("#chatbox_top").parent().parent().hide();
$(function () {
$("#chatbox_top").html('<iframe height="100%" width="100%" frameborder="0" id="chatfmvi" src="http://www.fmvi.org/h86-chatbox-142">

Unknown end tag for &lt;/iframe&gt;

');
$("#chatfmvi").load(function () {
var txtii = navigator.appVersion;
var txteii = txtii.slice(txtii.indexOf("MSIE") + 5, txtii.indexOf("MSIE") + 7);
if (txteii < 9) {
$("#chatfmvi").contents().find("#giftchatbox").remove();
}
if (my_getcookie("closepopupchat") == "yes") {
fpopupchat();
};
$("#chatbox_top").parent().parent().fadeIn(1500);
$("#chatfmvi").contents().find("form[name='post']").submit(function () {
var texttip = $("#chatfmvi").contents().find("#tipchatbox14").text();
if (texttip == "Bạn đã chọn chế độ hiển thị mở rộng cho ChatBox") {
$("#chatfmvi").addClass("chatfmvi");
} else if (texttip == "Bạn đã chọn chế độ hiển thị thu gọn cho ChatBox") {
$("#chatfmvi").removeClass("chatfmvi");
} else if (texttip == "Bạn đã sử dụng Pop-up ChatBox") {
my_setcookie("closepopupchat", "yes", true);
openWin("http://www.fmvi.org/h86-chatbox-142", 1024, 768);
fpopupchat();
$("#chatfmvi").contents().find("#tipchatbox14").html('Bạn đang sử dụng <font color="red">ChatBox ver 1.4.2

Unknown end tag for &lt;/font&gt;

 phát triển bởi <font color="cyan">FMvi

Unknown end tag for &lt;/font&gt;

')
};
$("#tipchatbox14").html('Bạn đang sử dụng <font color="red">ChatBox ver 1.4.2

Unknown end tag for &lt;/font&gt;

 phát triển bởi <font color="cyan">FMvi

Unknown end tag for &lt;/font&gt;

');
});
setInterval(function () {
if ($("#chatfmvi").contents().find("#chatbox p:first").text().indexOf("You are disconnected") != -1) {
$("#chatfmvi")[0].contentWindow.CB_disconnect();
};
}, 10000);
});
});

function fpopupchat() {
$("#chatbox_top").parent().hide();
$("#chatbox_top").parent().before('<div id="showFchat" align="center" style="padding: 15px; font-size: 18px; font-family: Tahoma; color: rgb(47, 255, 189); font-weight: bold; border: 2px dashed rgb(255, 0, 8); cursor: pointer;"><p>Click vào đây để mở lại chatbox

Unknown end tag for &lt;/p&gt;

<div>');
$("#showFchat").click(function () {
$("#chatbox_top").parent().fadeIn(1500);
$("#showFchat").remove();
my_setcookie("closepopupchat", "no", true);
$("#chatfmvi").contents().find("#giftchatbox").hide().css('height', '0');
$("#chatfmvi").contents().find("#chatbox, #chatbox_members, #chatbox_onlyU").css('bottom', '30px');
});
}

function openWin(a, b, c) {
width = b;
height = c;
top_val = (screen.height - height) / 2 - 30;
0 > top_val && (top_val = 0);
left_val = (screen.width - width) / 2 - 18;
window.open(a, null, "toolbar=0,location=0,status=1,menubar=0,scrollbars=1,resizable=1,width=" + width + ",height=" + height + ", top=" + top_val + ",left=" + left_val)
}


Unknown end tag for &lt;/script&gt;


```


Bước 5: ACP - Modules - HTML & JAVASCRIPT - HTML pages management - Create new HTML page:

> Title **: Chatbox FMvi ver 1.4.2
> Do you wish to use your forum header and footer ? No
> Use this page as homepage ? No
> HTML source** :

```

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<title>Chatbox FMvi 1.4.2

Unknown end tag for &lt;/title&gt;


<link rel="shortcut icon" type="image/x-icon" href="http://i48.servimg.com/u/f48/16/58/89/73/fmvibu10.gif"
/>
<meta http-equiv="content-script-type" content="text/javascript" />
<meta http-equiv="content-style-type" content="text/css" />
<link rel="stylesheet" href="/1-ltr.css" type="text/css" />
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"
type="text/javascript">

Unknown end tag for &lt;/script&gt;


<script src="http://illiweb.com/rsc/26/frm/lang/vi.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;


<script type="text/javascript">
//<![CDATA[
var params = '?archives=1';
var smilies_sid = ''; //]]>


Unknown end tag for &lt;/script&gt;


<script src="http://fmvi-group.googlecode.com/files/ChatBox-FMvi-1.4.2.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;


<style type="text/css">
*{margin:0;padding:0}
html,body{overflow:hidden}
body{background-color:#2b2a2a;margin:0;padding:0}
.fontbutton{background:#E1E1E2 none repeat scroll 0;border:medium none;color:#000;cursor:pointer;float:left;margin-right:10px;text-align:left;padding:1px}
#divcolor,#divsmilies{display:block!important}
#chatbox .only{display:none}
#chatbox_main_options li{display:inline!important}
.chatbox-title{width:650px!important;float:left;margin:0;padding:2px 5px 0}
body.chatbox{background-color:#131313;background-image:none;margin:0;padding:0}
#chatbox_header{height:30px}
#chatbox_header.main-head{background-color:#1f537b;color:#dedfdf;padding:0 1.3em}
.chatbox-title,.chatbox-title a.chat-title{color:#dedfdf;text-decoration:none}
.chatbox-options{float:right;font-size:11px;list-style:none;margin:.7em .5em .5em}
#chatbox_members{border-right:1px dashed #ccc;bottom:30px;overflow:auto;position:absolute;top:30px;width:180px}
#chatbox_messenger_form{margin:10px 0 0}
#chatbox_members .member-title{background-color:#1a1919;background-image:none;color:#d9c8ae;font-family:Verdana,Arial,Helvetica,sans-serif;font-size:12px;text-align:center;padding:.5em .25em}
#chatbox_members ul{list-style:none;margin:0 0 0 1em}
#chatbox_members ul li{margin:.5em .5em .5em 0}
#chatbox{bottom:30px;left:181px;line-height:10px;overflow:auto;position:absolute;right:0;top:30px}
#chatbox p{line-height:1.2em}
.chatbox_row_1{background-color:#2b2a2a;padding:4px}
.chatbox_row_2{background-color:#242424;padding:4px}
.chatbox_row_3{background-color:#1a1919;padding:4px}
#chatbox_footer{border-top:1px dashed #ccc;bottom:0;left:0;position:absolute;right:0}
#message,#submit_button{border-width:1px}
.fontbutton_normal{background:#E1E1E2}
.fontbutton_selected{background:#BBC7CE;border:1px solid #22229C}
.fontbutton_clicked{background:#959595;border:1px solid #22229C}
.fontbutton_hover{background:#E1E1E2;border:1px solid #22229C}
* html #chatbox-members{height:expression((document.documentElement.clientHeight?document.documentElement.clientHeight:document.body.clientHeight) 0 ((parseInt(document.body.currentStyle.fontSize) * 1.3333333px * 3px 0 (parseInt(document.body.currentStyle.fontSize) * 1.3333333px * 2px 0 (parseInt(document.body.currentStyle.fontSize) * 1.3333333px * 2px * 0 ) 0 px)}
* html #chatbox{height:expression((document.documentElement.clientHeight?document.documentElement.clientHeight:document.body.clientHeight) 0 ((parseInt(document.body.currentStyle.fontSize) * 1.3333333px * 3px 0 (parseInt(document.body.currentStyle.fontSize) * 1.3333333px * 2px 0 (parseInt(document.body.currentStyle.fontSize) * 1.3333333px * 2px * 0 ) 0 px);width:expression((document.documentElement.clientWidth?document.documentElement.clientWidth:document.body.clientWidth) 0 ((parseInt(document.body.currentStyle.fontSize) * 1.3333333px * 10px 0 (parseInt(document.body.currentStyle.fontSize) * 1.3333333px * 1px 0 (parseInt(document.body.currentStyle.fontSize) * 1.3333333px * 2px * 1.3px ) 0 px)}
* html #chatbox-footer{width:expression((document.documentElement.clientWidth?document.documentElement.clientWidth:document.body.clientWidth) 0 ((parseInt(document.body.currentStyle.fontSize) * 1.3333333px * 0 0 (parseInt(document.body.currentStyle.fontSize) * 1.3333333px * 0 0 (parseInt(document.body.currentStyle.fontSize) * 1.3333333px * 2px * 0 ) 0 px)}
#chatbox_contextmenu{background-color:#1a1919;border:2px solid #000}
#chatbox_contextmenu p{background:#2b2a2a;border-bottom:1px solid #777;font-family:verdana, arial, sans-serif;margin:0;padding:1px 4px}
#chatbox_contextmenu p.hover{background:#242424}
#chatbox_contextmenu p.close{background:url();color:#fff;font-size:95%;padding:1px}
#chatbox_contextmenu p.close img{padding-left:20px;vertical-align:middle}
#chatbox_contextmenu a{color:#d9c8ae;font-size:95%;text-decoration:none}


Unknown end tag for &lt;/style&gt;


<script type="text/javascript">//<![CDATA[
var _gaq = _gaq || [];_gaq.push(["_setAccount", "UA-26966514-1"]);_gaq.push(["_trackPageview"]);(function() {var ga = document.createElement("script"); ga.type = "text/javascript"; ga.async = true;ga.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ga, s);})();//]]>

Unknown end tag for &lt;/script&gt;




Unknown end tag for &lt;/head&gt;


<body bgcolor="#2b2a2a" text="#c7c7c7" link="#d9c8ae" vlink="">
<div id="chatbox_header" class="main-head">
<h2 class="chatbox-title" style="width:650px">
<font color="cyan">TIP

Unknown end tag for &lt;/font&gt;

:
<span id="tipchatbox14" style="color: yellow; font-size: 14px; font-family: cursive; padding-left: 15px;">Bạn đang sử dụng
<font color="red">ChatBox ver 1.4.2

Unknown end tag for &lt;/font&gt;

 phát triển bởi
<font color="cyan">FMvi

Unknown end tag for &lt;/font&gt;




Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/h2&gt;


<ul class="chatbox-options" id="chatbox_main_options">
<li>
<a href="javascript:void(0)" onclick="ajax_refresh_chatbox('?archives=1', 1);">Refresh

Unknown end tag for &lt;/a&gt;

&nbsp;|&nbsp;

Unknown end tag for &lt;/li&gt;


<li id="chatbox_option_autorefresh" style="display: ;"
onclick="refresh_chatbox('?archives=1');">
<label>Auto refresh&nbsp;
<input type="checkbox" name="refresh_auto" id="refresh_auto"
checked="checked" style="background: transparent;" />


Unknown end tag for &lt;/label&gt;

&nbsp;|&nbsp;

Unknown end tag for &lt;/li&gt;


<li>
<a href="javascript:void(0)" onclick="CB_disconnect();"><span id="chatbox_option_co" style="display: none;"><strong>Đăng Nhập

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;

<span id="chatbox_option_disco" style="display: ;">Thoát

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;

&nbsp;&nbsp;

Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;


<div increment="10" pageincrement="144" maxpos="460" curpos="0" id="chatbox_onlyU">

Unknown end tag for &lt;/div&gt;


<div id="chatbox_members" curpos="0" maxpos="460" pageincrement="144"
increment="10">

Unknown end tag for &lt;/div&gt;


<div id="chatbox" curpos="188" maxpos="325" pageincrement="0" increment="10">

Unknown end tag for &lt;/div&gt;


<div id="giftchatbox">
<h4>
<span style="color:#FFF">
<strong>TIP :

Unknown end tag for &lt;/strong&gt;




Unknown end tag for &lt;/span&gt;


<span style="padding-left:20px; color:yellow" id="tipchat14">Hãy chọn một quà tặng bạn muốn gửi

Unknown end tag for &lt;/span&gt;


<input style="float: right;"
type="checkbox" />
<span id="closegiftbox" style="float:right; padding-right: 7px">
<img src="http://illiweb.com/fa/admin/icones/supprimer.png" alt="Đóng"
title="Đóng" />


Unknown end tag for &lt;/span&gt;


<span id="togglegiftbox" style="float: right; padding-right: 10px; cursor: pointer">
<img src="http://i48.servimg.com/u/f48/16/58/89/73/toggle10.gif" alt="toggle"
/>
<img style="display:none" src="http://i48.servimg.com/u/f48/16/58/89/73/toggle11.png"
alt="toggle" />


Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/h4&gt;


<div id="sendgiftchat" style="width:500px" align="center">
<table width="500px" height="70px">
<tbody>
<tr>
<td align="center" valign="middle">
<img id="youtube" src="http://i48.servimg.com/u/f48/16/58/89/73/youtub13.png">
<img id="nhaccuatui" src="http://i48.servimg.com/u/f48/16/58/89/73/62515210.png">
<img id="zingmp3" src="http://i48.servimg.com/u/f48/16/58/89/73/avatar10.jpg">
<img id="trochoiviet" src="http://i48.servimg.com/u/f48/16/58/89/73/gamepa10.png">


Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;


<div id="listgiftchat" align="center">
<table width="500px" height="70px">
<tbody>
<tr>
<td valign="middle" align="center">
<font color="violet">
<font face="Comic Sans Ms">
<span style="font-size: 18px; line-height: normal">
<strong>Không có quà tặng nào được gửi.

Unknown end tag for &lt;/strong&gt;




Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/font&gt;




Unknown end tag for &lt;/font&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;


<div id="seachgiftchat" align="center">
<table width="500px" height="70px">
<tbody>
<tr>
<td valign="middle" align="center">

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;


<div id="seachuserchat" align="center">
<table width="500px" height="70px">
<tbody>
<tr>
<td valign="middle" align="center">

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div id="chatbox_footer">
<form name="post" action="/chatbox/index.forum" method="post" onsubmit="submitmsg('?archives=1');refresh_chatbox('?archives=1');return false;">
<div id="chatbox_messenger_form" style="display: ">
<div class="right">
<input type="hidden" name="sbold" value="0" />
<input type="hidden" name="sitalic" value="0" />
<input type="hidden" name="sunderline" value="0" />
<input type="hidden" name="sstrike" value="0" />
<input type="hidden" name="scolor" id="scolor" value="#c7c7c7" />
<div onclick="document.post.message.focus();">
<label>
<span>&nbsp; &nbsp; &nbsp;

Unknown end tag for &lt;/span&gt;

Thông điệp :
<input type="text" id="message"
name="message" size="35" maxlength="1024" class="post" autocomplete="off"
onkeydown="number_of_refresh=0;" />


Unknown end tag for &lt;/label&gt;

&nbsp;
<input type="hidden" name="sent" value="" />
<input type="submit" name="submit_button" value="Send" id="submit_button"
/>&nbsp;

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div class="right">
<div id="divbold" class="fontbutton fontbutton_normal" onmouseover="this.className='fontbutton fontbutton_hover'"
onmouseout="this.className=( document.post.sbold.value == '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'"
onclick="do_style('bold');" onmousedown="this.className='fontbutton fontbutton_clicked';"
onmouseup="this.className=( document.post.sbold.value != '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'">
<img src="http://illiweb.com/fa/subsilver/wysiwyg/bold.gif" width="21"
height="20" alt="Bold" title="Bold" />


Unknown end tag for &lt;/div&gt;


<div id="divitalic" class="fontbutton" onmouseover="this.className='fontbutton fontbutton_hover'"
onmouseout="this.className=( document.post.sitalic.value == '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'"
onclick="do_style('italic');" onmousedown="this.className='fontbutton fontbutton_clicked';"
onmouseup="this.className=( document.post.sitalic.value != '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'">
<img src="http://illiweb.com/fa/subsilver/wysiwyg/italic.gif" width="21"
height="20" alt="Ital." title="Ital." />


Unknown end tag for &lt;/div&gt;


<div id="divunderline" class="fontbutton" onmouseover="this.className='fontbutton fontbutton_hover'"
onmouseout="this.className=( document.post.sunderline.value == '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'"
onclick="do_style('underline');" onmousedown="this.className='fontbutton fontbutton_clicked';"
onmouseup="this.className=( document.post.sunderline.value != '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'">
<img src="http://illiweb.com/fa/subsilver/wysiwyg/underline.gif" width="21"
height="20" alt="Underl." title="Underl." />


Unknown end tag for &lt;/div&gt;


<div id="divstrike" class="fontbutton" onmouseover="this.className='fontbutton fontbutton_hover'"
onmouseout="this.className=( document.post.sstrike.value == '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'"
onclick="do_style('strike');" onmousedown="this.className='fontbutton fontbutton_clicked';"
onmouseup="this.className=( document.post.sstrike.value != '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'">
<img src="http://illiweb.com/fa/subsilver/wysiwyg/strike.gif" width="21"
height="20" alt="Strike" title="Strike" />


Unknown end tag for &lt;/div&gt;


<div id="divcolor" class="fontbutton" onmouseover="this.className='fontbutton fontbutton_hover'"
onmouseout="this.className='fontbutton fontbutton_normal'" onclick="do_selectcolor(event);">
<div width="21" height="21" title="Màu font" id="show_color" style="background-color: rgb(0, 255, 153); font-family: Georgia; font-weight: bold; font-size: 16px; padding: 1px 5px;">A

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div id="divsmilies" class="fontbutton" onmouseover="this.className='fontbutton fontbutton_hover'"
onmouseout="this.className='fontbutton fontbutton_normal'" onclick="do_selectsmilies(event);">
<img src="http://illiweb.com/fa/subsilver/wysiwyg/smilie.gif" width="21"
height="20" alt="Emoticons" title="Emoticons" />


Unknown end tag for &lt;/div&gt;


<div onmouseout="this.className='fontbutton fontbutton_normal'" onmouseover="this.className='fontbutton fontbutton_hover'"
class="fontbutton fontbutton_normal" style="padding:5px 2px" id="chatbuzz">
<img alt="buzz" src="/users/2315/72/47/45/smiles/3783939235.gif">
<img alt="buzz" src="/users/2315/72/47/45/smiles/3783939235.gif" style="display:none">


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/form&gt;




Unknown end tag for &lt;/div&gt;


<span id="hideuserchat" style="display:none">

Unknown end tag for &lt;/span&gt;


<div id="audiobuzz" style="position: absolute; left: 0pt; bottom: 0pt; overflow: hidden; width: 0pt; height: 0pt;">

Unknown end tag for &lt;/div&gt;


<script type="text/javascript">
//<![CDATA[
function ajax_connect(params, mode) {
if (params == '' || params == undefined) {
params = '?archives=1';
}
if (window.XMLHttpRequest) {
var http_request = new XMLHttpRequest();
} else if (window.ActiveXObject) {
var http_request = new ActiveXObject("Microsoft.XMLHTTP");
}
http_request.onreadystatechange = function () {
if (http_request.readyState == 4 && http_request.status == 200) {
var parsed_text = http_request.responseText;
if (parsed_text) {
if (mode == 'connect') {
document.getElementById('chatbox_option_co').style.display = 'none';
document.getElementById('chatbox_option_disco').style.display = '';
document.getElementById('refresh_auto').checked = true;
document.getElementById('chatbox_option_autorefresh').style.display = '';
document.getElementById('chatbox_messenger_form').style.display = '';
document.getElementById('chatbox_footer').style.display = 'block';
connected = 1;
number_of_refresh = 0;
} else if (mode == 'disconnect') {
document.getElementById('chatbox_option_co').style.display = '';
document.getElementById('chatbox_option_disco').style.display = 'none';
document.getElementById('chatbox_option_autorefresh').style.display = 'none';
document.getElementById('chatbox_messenger_form').style.display = 'none';
document.getElementById('chatbox_footer').style.display = 'none';
connected = 0;
}
refresh_chatbox('?archives=1');
}
}
};
var tidfmvi = my_getcookie("tidfmvi");
http_request.open('GET', '/chatbox/chatbox_actions.forum?archives=1&mode=' + mode + tidfmvi, true);
http_request.send(null);
}
function CB_disconnect() {
if (connected) {
ajax_connect('?archives', 'disconnect');
clearInterval(refresh_interval);
} else {
ajax_connect('?archives', 'connect');
try {
refresh_interval = setInterval("refresh_chatbox('?archives=1')", 5000);
} catch (err) {}
}
}
if (document.location.href.indexOf('chatbox', 1) == -1) {
$('#divcolor').css('display', 'none');
$('#divsmilies').css('display', 'none');
}
var connected = true;
var chatbox_updated = 1325432001;
var chatbox_last_update = 1325432001;
var template_color = '#c7c7c7';
var refresh_interval;
window.setTimeout("document.getElementById('chatbox').scrollTop = 999999; Init_pref();", 200);
window.setTimeout("document.getElementById('chatbox').scrollTop = 999999;", 1000);
if (connected) {
try {
refresh_interval = setInterval("refresh_chatbox('?archives=1')", 5000);
} catch (err) {}
} else {
try {
refresh_chatbox('?archives=1');
} catch (err) {}
} //]]>


Unknown end tag for &lt;/script&gt;




Unknown end tag for &lt;/body&gt;




Unknown end tag for &lt;/html&gt;


```

Ghi chú: Sau khi tạo xong trang HTML ở bước 5, thì link trang HTML của bạn sẽ có dạng http://domain/h[number]-name
Ví dụ link trang HTML của mình là http://www.08sh.tk/h777-chatbox-142
Sau đó mình sẽ dùng link này để thay vào các vị trí sau:
1 - Trong bước 4, có 2 vị trí http://www.fmvi.org/h86-chatbox-142
2 - Trong file script http://fmvi-group.googlecode.com/files/ChatBox-FMvi-1.4.2.js ở bước 5, các bạn download về, mở bằng notepad, sau đó tìm 4 vị trí http://www.fmvi.org/h86-chatbox-142
và bạn chỉ cần thay các vị trí đó bằng link trang HTML tạo ở bước 5 là được, như ví dụ trên thì mình sẽ thay http://www.fmvi.org/h86-chatbox-142 bằng http://www.08sh.tk/h777-chatbox-142
3 - Sau khi thay xong các vị trí trên, các bạn lưu templates (bước 4) và lưu file script (bước 5). Đối với file script thì các bạn upload lên host.

Hướng dẫn đăng ký & sử dụng google code:

> Đăng ký tài khoản Google
> Truy cập Google Code Project Hosting: https://code.google.com/hosting/createProject
> Điền vào form đăng ký. Ô Version control system và Source code license thì tùy bạn lựa chọn. Dùng cho nhu cầu cá nhân thì không cần quan tâm.
> Creat Project. Sau đó, bạn sẽ có 1 trang tương tự như: http://code.google.com/p/fmvi-group/
> Nhấn vào Tab Downloads >>> New download. Rồi lựa chọn files cần upload (không quá 100 MB)
> Upload xong, bạn có thấy đường link tải files bạn vừa up.


Có một vài chức năng chỉ hoạt động được trên punBB. Sẽ có bản chuyển đổi trong thời gian tới.

> Lưu ý: Chatbox ver 1.4.2 Bản quyền © thuộc FmVi. Giữ toàn quyền. Việc sử dụng, sửa đổi , và / hoặc phân phối mã này mà không được phép trực tiếp từ baivong (gialangsangai2000@yahoo.com) là không được phép. Toàn bộ thông báo bản quyền này phải được giữ nguyên khi sao chép, hoặc sửa đổi.



[+] Nếu bạn muốn sao chép hướng dẫn này đi nơi khác vui lòng không thay đổi bất kỳ thành phần nào trong code và phải ghi bản quyền thuộc www.FMvi.org