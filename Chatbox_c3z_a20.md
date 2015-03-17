Ooh yeh! Bắt đầu nào.
+Đầu tiên chắc chắn rằng chúng ta sẽ không sử dụng chatbox mặc định.
Vào ACP (Bảng điều khiển của người quản trị) --> Modules --> HTML pages management --> Create a new HTML
-Tít tồ (Title) **: Phăng gì tùy bạn
-Do you wish to use your forum header and footer (Có sử dụng header với footer của forum hay không) : Không
-Use this page as homepage (Sử dụng như trang chủ): Không
-HTML source** (Đại khái là mã nguồn) : copy nguyên cái đống dưới đây vào :

```


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<title>Shoutbox

Unknown end tag for &lt;/title&gt;


<meta http-equiv="content-script-type" content="text/javascript" />
<meta http-equiv="content-style-type" content="text/css" />
<style type="text/css">
body, th, td, p {
font-family:Verdana, Arial, Helvetica, sans-serif;
font-size:11px
}
a:link, a:active, a:visited, a:hover {
color:#5D401E;
text-decoration:none;
}
.thead, td.cat, td.catHead, td.catSides, td.catLeft, td.catRight, td.catBottom, td.rowpic {
background:#bfec92;
color:#1a540f;
padding:3px;
font:bold 11px tahoma, verdana, geneva, lucida, 'lucida grande', arial, helvetica, sans-serif;
}
td.cat, td.catHead, td.catBottom {
border-width:0;
}
th.thHead, th.thSides, th.thTop, th.thLeft, th.thRight, th.thBottom, th.thCornerL, th.thCornerR {
font-weight:bold;
border:#ffffff;
border-style:solid;
}
.genmed {
font-size:11px;
}
th.thBottom, td.catBottom {
border-width:0 1px 1px 1px;
}
a.gen, a.genmed, a.gensmall {
color:#006699;
text-decoration:none;
}
.cattitle, td .t-title {
font-weight:bold;
font-size:12px;
letter-spacing:1px;
color:#006699
}
a.cattitle {
text-decoration:none;
color:#844A21;
font-size:12px;
}
a.cattitle:hover {
text-decoration:underline;
}
input[type=submit] {
padding:0 5px;
font-size:11px;
cursor:pointer;
background-color:#fff;
border:1px solid #a6a6a6;
color:#000;
font-weight: bold
}
/* Chatbox */
#frame_chatbox {
border:none !important;
}
body.chatbox {
min-width:550px !important;
background:none;
padding:0;
margin:0;
background-color:#fff;
}
#chatbox_members {
float:left;
top:28px;
height:270px;
width:149px;
overflow:auto;
border-right:1px solid #E5E5E5;
}
#smile{border: 1px dashed #CCC;}
#chatbox {
position:absolute;
top:50px;
left:150px;
right:0;
bottom:0px;
overflow:auto;
line-height:10px;
border: 1px dashed #CCC;
}
#chatbox:hover {
}
.chatbox_row_1, .chatbox_row_2, .chatbox_row_3 {
font-size:12px;
}
.chatbox-options {
text-align:right;
}
#chatbox_messenger_form .text-field, #chatbox_messenger_form, #chatbox_messenger_form .gen {
float:left;
}
#chatbox_footer {
position:absolute;
top:0;
left:0;
right:100px;
height:30px;
}
#chatbox_footer table.text-styles {
float:right;
}
#chatbox_footer .text-field {
float:left;
}
#chatbox_header {
background-color:#e5e5e5;
}
#chatbox p {
line-height:1.2em;
}
.chatbox_row_1 {
padding:4px;
background-color:;
}
.chatbox_row_2 {
padding:4px;
background-color:;
}
.chatbox_row_3 {
padding:4px;
background-color:;
}
.memberlist_row_1 {
padding:2px 2px 2px 10px;
background-color:;
}
#chatbox_members .member-title {
text-align:center;
padding:0.5em 0.25em;
background-image:none;
font-size:12px;
background-color:#9FE6FF;
color:#222F03;
font-family:Verdana, Arial, Helvetica, sans-serif;
}
#chatbox_members ul {
list-style:none;
margin:0 0 0 10px;
}
#chatbox_members ul li {
margin:2px 2px 2px 0;
}
#message, #submit_button {
border-width:1px;
}
.fontbutton {
padding:1px;
cursor:pointer;
text-align:left;
}
.fontbutton_normal {
background:transparent;
}
.fontbutton_selected {
background:#0AAF11;
border:1px solid #22229C;
}
.fontbutton_clicked {
background:#1BACDF;
border:1px solid #22229C;
}
.fontbutton_hover {
background:#8F0000;
border:1px solid #22229C;
}
#chatbox .user {
font-weight:bold;
}
div#chatbox {
color:#000000;
}
#chatbox_contextmenu {
background-color:#d1d7dc;
border:1px solid #aaa;
}
#chatbox_contextmenu p {
margin:0;
padding:1px 4px;
font-family:verdana, arial, sans-serif;
background:#;
border-bottom:1px solid #777;
}
#chatbox_contextmenu p.hover {
background:#;
}
#chatbox_contextmenu p.close {
background:#ddd;
padding:1px;
font-size:70%;
color:#fff;
}
#chatbox_contextmenu p.close img {
vertical-align:middle;
padding-left:20px;
}
#chatbox_contextmenu a {
color:#;
text-decoration:none;
font-size:70%;
}
#chatbox_contextmenu a:hover {
color:#;
}
.fontbutton {
border: 0;
}
* html #chatbox-members {
/* IE expressions helping IE work in Standards mode */
height:expression(( document.documentElement.clientHeight ? document.documentElement.clientHeight:document.body.clientHeight) - ( (parseInt(document.body.currentStyle.fontSize) * 1.3333333 * 3)+(parseInt(document.body.currentStyle.fontSize) * 1.3333333 * 2)+(parseInt(document.body.currentStyle.fontSize) * 1.3333333 * 2 * 0) )+"px");
}
* html #chatbox {
/* IE expressions helping IE work in Standards mode */
height:expression(( document.documentElement.clientHeight ? document.documentElement.clientHeight:document.body.clientHeight) - ( (parseInt(document.body.currentStyle.fontSize) * 1.3333333 * 3)+(parseInt(document.body.currentStyle.fontSize) * 1.3333333 * 2)+(parseInt(document.body.currentStyle.fontSize) * 1.3333333 * 2 * 0) )+"px");
width:expression(( document.documentElement.clientWidth ? document.documentElement.clientWidth:document.body.clientWidth) - ( (parseInt(document.body.currentStyle.fontSize) * 1.3333333 * 10)+(parseInt(document.body.currentStyle.fontSize) * 1.3333333 * 1)+(parseInt(document.body.currentStyle.fontSize) * 1.3333333 * 2 * 1.3) )+"px");
}
* html #chatbox-footer {
/* IE expressions helping IE work in Standards mode */
width:expression(( document.documentElement.clientWidth ? document.documentElement.clientWidth:document.body.clientWidth) - ( (parseInt(document.body.currentStyle.fontSize) * 1.3333333 * 0)+(parseInt(document.body.currentStyle.fontSize) * 1.3333333 * 0)+(parseInt(document.body.currentStyle.fontSize) * 1.3333333 * 2 * 0) )+"px")
}
.date-and-time {
display:none;
}
.online-users a[href="/u10000"] {
display:none
}
.msg img {
vertical-align:middle
}
.msg strong {
font-size: 11px
}


Unknown end tag for &lt;/style&gt;


<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;


<script>
jQuery(document).ready(function(){
jQuery("#divcolor").show();
jQuery("#divsmilies").show();
})


Unknown end tag for &lt;/script&gt;


<script src="http://illiweb.com/rsc/16/frm/lang/notutf8-vi.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;


<script>
function tryfu() {
if (jQuery('#smile').html() == '') {
jQuery('#chatbox,#chatbox_members').animate({
top: '150px'
}, 0);
jQuery('#smile').animate({
height: '100px'
}, 0);
jQuery.ajax({
url: '/h178-',
success: function(hkt) {
jQuery('#smile').html(hkt);
},
});
}
else {
jQuery('#chatbox,#chatbox_members').animate({
top: '50px'
}, 0);
jQuery('#smile').html('');
jQuery('#smile').animate({
height: '0px'
}, 0);

};
}

function insert_chatboxsmilie(smilie_code) {
document.getElementById('message').value = document.getElementById('message').value + smilie_code;
opener.document.post.message.focus();
}





Unknown end tag for &lt;/script&gt;



<script type="text/javascript">//<![CDATA[
var params = '?archives=1';var smilies_sid = '';//]]>

Unknown end tag for &lt;/script&gt;


<script src="/h48-" type="text/javascript">

Unknown end tag for &lt;/script&gt;


<style type="text/css">
* {

margin: 0px;
padding: 0;
}
html, body {
overflow: hidden;
}
body {
background-color: #efefef;
}


Unknown end tag for &lt;/style&gt;




Unknown end tag for &lt;/head&gt;


<body class="chatbox" onload="ajax_refresh_chatbox('?archives=100', 1);">
<div id="chatbox_header">
<table cellspacing="0" cellpadding="0" border="0" width="100%">
<tr>
<td class="catBottom" nowrap="nowrap"><table border="0" width="100%">
<tr>
<td nowrap="nowrap" height='40px'><div id="chatbox_footer" style="display: none;">
<div id="chatbox_messenger">
<form name="post" action="/chatbox/index.forum" method="post" onsubmit="submitmsg('?archives=1');refresh_chatbox('?archives=1');return false;">
<table width="100%" cellspacing="0" cellpadding="0">
<tr>
<td class=""><div id="chatbox_messenger_form">
<table cellspacing="0" cellpadding="0" height="24" width="100%" class="chatfootertable">
<tr>
<td width="100%" align="right"><table cellspacing="2" cellpadding="0" border="0" style="line-height: 0px;" class="text-styles" >

<tr>
<td><div id="divbold" class="fontbutton fontbutton_normal" onmouseover="this.className='fontbutton fontbutton_hover'" onmouseout="this.className=( document.post.sbold.value == '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'" onclick="do_style('bold');" onmousedown="this.className='fontbutton fontbutton_clicked';" onmouseup="this.className=( document.post.sbold.value != '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'"><img src="http://illiweb.com/fa/subsilver/wysiwyg/bold.gif" width="21" height="20" alt="Bold" title="Bold" />

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;


<td><div id="divitalic" class="fontbutton fontbutton_normal" onmouseover="this.className='fontbutton fontbutton_hover'" onmouseout="this.className=( document.post.sitalic.value == '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'" onclick="do_style('italic');" onmousedown="this.className='fontbutton fontbutton_clicked';" onmouseup="this.className=( document.post.sitalic.value != '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'"><img src="http://illiweb.com/fa/subsilver/wysiwyg/italic.gif" width="21" height="20" alt="Ital." title="Ital." />

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;


<td><div id="divunderline" class="fontbutton fontbutton_normal" onmouseover="this.className='fontbutton fontbutton_hover'" onmouseout="this.className=( document.post.sunderline.value == '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'" onclick="do_style('underline');" onmousedown="this.className='fontbutton fontbutton_clicked';" onmouseup="this.className=( document.post.sunderline.value != '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'"><img src="http://illiweb.com/fa/subsilver/wysiwyg/underline.gif" width="21" height="20" alt="Underl." title="Underl." />

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;


<td><div id="divstrike" class="fontbutton fontbutton_normal" onmouseover="this.className='fontbutton fontbutton_hover'" onmouseout="this.className=( document.post.sstrike.value == '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'" onclick="do_style('strike');" onmousedown="this.className='fontbutton fontbutton_clicked';" onmouseup="this.className=( document.post.sstrike.value != '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'"><img src="http://illiweb.com/fa/subsilver/wysiwyg/strike.gif" width="21" height="20" alt="Strike" title="Strike" />

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;


<td width="10"> 

Unknown end tag for &lt;/td&gt;


<td><div id="divcolor" class="fontbutton fontbutton_normal" onmouseover="this.className='fontbutton fontbutton_hover'" onmouseout="this.className='fontbutton fontbutton_normal'" onclick="do_selectcolor(event);"><img src="http://illiweb.com/fa/subsilver/wysiwyg/color.gif" width="21" height="16" alt="Màu font" title="Màu font" /><img src="http://illiweb.com/fa/subsilver/wysiwyg/menupop.gif" width="11" height="16" alt="Màu font" title="Màu font" /><br />
<img src="http://illiweb.com/fa/subsilver/wysiwyg/clear.gif" id="show_color" alt="Màu font" title="Màu font" width="21" height="4" />

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;


<td><div id="redtube" class="fontbutton fontbutton_normal" onmouseover="this.className='fontbutton fontbutton_hover'" onmouseout="this.className='fontbutton fontbutton_normal'" onclick="tryfu();"><img src="http://illiweb.com/fa/subsilver/wysiwyg/smilie.gif" width="21" height="20" alt="Biểu tượng" title="Biểu tượng" /><img src="http://illiweb.com/fa/subsilver/wysiwyg/menupop.gif" width="11" height="20" alt="Biểu tượng" title="Biểu tượng" />

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;


<td><div id="buzz" class="fontbutton fontbutton_normal" onmouseover="this.className='fontbutton fontbutton_hover'" onmouseout="this.className='fontbutton fontbutton_normal'" onclick="buzz();"><img src="http://c3zone.net/users/2315/72/47/45/smiles/3783939235.gif" alt="Buzz" title="Buzz" />

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td colspan='8'><input type="hidden" name="sbold" value="0">
<input type="hidden" name="sitalic" value="0">
<input type="hidden" name="sunderline" value="0">
<input type="hidden" name="sstrike" value="0">
<input type="hidden" name="scolor" id="scolor" value="#000000">
<span class="gen" onclick="document.post.message.focus();">
<label>Thông điệp :
<input type="text" id="message"  name="message" size="20" maxlength="1024" class="post" autocomplete="off" onkeydown="number_of_refresh=0;" />


Unknown end tag for &lt;/label&gt;



<input type="hidden" name="sent" value="" />
<input type="submit" name="submit_button" value="Gửi..." id="submit_button" />


Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/form&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;


<td valign="top" class="chatbox-options"><div class="genmed" id="chatbox_main_options"><a href="javascript:void(0)" onclick="ajax_refresh_chatbox('?archives=1', 1);">Refresh

Unknown end tag for &lt;/a&gt;

 | <span id="chatbox_option_with_archives" style="display:none ;"><a href="/chatbox/chatbox.forum?archives=1">Archives

Unknown end tag for &lt;/a&gt;

 | 

Unknown end tag for &lt;/span&gt;

<span id="chatbox_option_without_archives" style="display: none ;"><a href="/chatbox/chatbox.forum?archives=0">Without archives

Unknown end tag for &lt;/a&gt;

 | 

Unknown end tag for &lt;/span&gt;

<span id="chatbox_option_autorefresh" style="display: none;" onclick="refresh_chatbox('?archives=1');">
<label for="refresh_auto">Auto refresh 

Unknown end tag for &lt;/label&gt;


<input type="checkbox" name="refresh_auto" id="refresh_auto" checked="checked" style="background: transparent;" />
| 

Unknown end tag for &lt;/span&gt;

<a href="javascript:void(0)" onclick="CB_disconnect();"><span id="chatbox_option_co" style="display: ;"><strong>Đăng Nhập

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;

<span id="chatbox_option_disco" style="display: none;">Thoát

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;

  

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;


<div id='smile' align='center'>

Unknown end tag for &lt;/div&gt;


<div>
<div id="chatbox_members" curpos="0" maxpos="460" pageincrement="144" increment="10">

Unknown end tag for &lt;/div&gt;


<div id="chatbox" >

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<script type="text/javascript">//<![CDATA[
function buzz() {
document.post.sent.value = ":buzz:";
document.post.message.value = '';
document.post.message.focus();
ajax_submit_chatbox(params);
return false;
}

function ajax_connect(params, mode) {
if (params == '' || params == undefined) {
params = '?achives=0';
}
if (window.XMLHttpRequest) {
var http_request = new XMLHttpRequest();
} else if (window.ActiveXObject) {
var http_request = new ActiveXObject("Microsoft.XMLHTTP");
}
http_request.onreadystatechange = function() {
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
refresh_chatbox(params);
}
}
};
http_request.open('GET', '/chatbox/chatbox_actions.forum' + params + '&mode=' + mode + my_getcookie('mytid').substr(my_getcookie('mytid').indexOf('&tid='), 37), true);
http_request.send(null);
}
function CB_disconnect() {
if (connected) {
ajax_connect('?archives=1', 'disconnect');
clearInterval(refresh_interval);
} else {
ajax_connect('?archives=1', 'connect');
try {
refresh_interval = setInterval("refresh_chatbox('?archives=1');", 5000);
} catch (err) {}
}
}
if (document.location.href.indexOf('chatbox', 1) == -1) {
jQuery('#divcolor').css('display', 'none');
jQuery('#divsmilies').css('display', 'none');
}
var connected = false;
var chatbox_updated = 1310441470;
var chatbox_last_update = 1310441470;
var template_color = '#000000';
var refresh_interval;
if (connected) {
try {
refresh_interval = setInterval("refresh_chatbox('?archives=1');", 5000);
} catch (err) {}
} else {
try {
refresh_chatbox('?archives=1');
} catch (err) {}
}
//]]>

Unknown end tag for &lt;/script&gt;




Unknown end tag for &lt;/body&gt;




Unknown end tag for &lt;/html&gt;


```



> +Giải thích source (Phần này giải thích thêm, không đọc cũng chả sao) :
> Function tryfu() )

```


function tryfu() {
if (jQuery('#smile').html() == '') {
jQuery('#chatbox,#chatbox_members').animate({
top: '150px'
}, 0);
jQuery('#smile').animate({
height: '100px'
}, 0);
jQuery.ajax({
url: '/h178-',
success: function(hkt) {
jQuery('#smile').html(hkt);
},
});
}
else {
jQuery('#chatbox,#chatbox_members').animate({
top: '50px'
}, 0);
jQuery('#smile').html('');
jQuery('#smile').animate({
height: '0px'
}, 0);

};
}
```

> Viết thế thôi, nếu muốn hợp lý hơn thì thay đổi tùy ý nhé.
> Đại khái là gọi và ẩn hiện smile.
> function insert smile

```


function insert_chatboxsmilie(smilie_code) {
document.getElementById('message').value = document.getElementById('message').value + smilie_code;
opener.document.post.message.focus();
}
```


> Cơ bản chỉ thay đổi 1 tí so với function gốc của FM. Function này dùng để chèn smile.


+Sau đợt update rất lâu rồi của FM ) : Trong DISPLAY -> TEMPLATE -> QUẢNG LÝ TỔNG THỂ -> OVERALL\_HEADER, tìm 

Unknown end tag for &lt;/head&gt;

 cho code phía dưới lên trước 

Unknown end tag for &lt;/head&gt;



```


<script>jQuery(document).ready(function(){my_setcookie('mytid',jQuery("#logout").attr("href"),1,0);})

Unknown end tag for &lt;/script&gt;



```
Lưu tại tid của người đăng nhập vào chatbox để thay cho mytid trong trang html ở trên.
Tạo thêm 1 html nữa, tương tự như ở trên:

```


function Init_pref() {
if (document.getElementById('divbold')) {
if (my_getcookie('CB_bold') == 1) {
pref = my_getcookie('CB_bold');
document.post.sbold.value = pref;
document.getElementById('divbold').className = 'fontbutton fontbutton_selected';
document.post.message.style.fontWeight = 'bold'
}
if (my_getcookie('CB_italic') == 1) {
pref = my_getcookie('CB_italic');
document.post.sitalic.value = pref;
document.getElementById('divitalic').className = (pref == '1') ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal';
document.post.message.style.fontStyle = 'italic'
}
if (my_getcookie('CB_under') == 1) {
pref = my_getcookie('CB_under');
document.post.sunderline.value = pref;
document.getElementById('divunderline').className = (pref == '1') ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal';
document.post.message.style.textDecoration = 'underline'
}
if (my_getcookie('CB_strike') == 1) {
pref = my_getcookie('CB_strike');
document.post.sstrike.value = pref;
document.getElementById('divstrike').className = (pref == '1') ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal';
document.post.message.style.textDecoration = document.post.message.style.textDecoration + ' line-through'
}
if (show_color = document.getElementById('show_color')) {
if (pref = my_getcookie('CB_color')) {
show_color.style.backgroundColor = '#' + pref;
document.post.scolor.value = pref;
document.post.message.style.color = '#' + pref
} else if (template_color.length > 2) {
show_color.style.backgroundColor = template_color
}
}
}
}
function daonguoc(){
for (i=1; i<=parseInt(jQuery("#chatbox p").length/2); i++)
{
a=i-1;
n=jQuery("#chatbox p").length-i;
text=jQuery('#chatbox p')[n].innerHTML;
jQuery('#chatbox p')[n].innerHTML=jQuery('#chatbox p')[a].innerHTML;
jQuery('#chatbox p')[a].innerHTML=text

};
}

function submitmsg(params) {
document.post.sent.value = document.post.message.value;
document.post.message.value = '';
document.post.message.focus();
ajax_submit_chatbox(params);
return false
}
function do_style(dostyle) {
switch (dostyle) {
case 'bold':
{
document.getElementById('divbold').style.fontWeight = (document.post.sbold.value == '0') ? 'bold' : '';
document.post.message.style.fontWeight = document.getElementById('divbold').style.fontWeight;
document.post.sbold.value = (document.post.sbold.value == '0') ? '1' : '0';
SetCookie('CB_bold', document.post.sbold.value);
break
}
case 'italic':
{
document.getElementById('divitalic').style.fontStyle = (document.post.sitalic.value == '0') ? 'italic' : '';
document.post.message.style.fontStyle = document.getElementById('divitalic').style.fontStyle;
document.post.sitalic.value = (document.post.sitalic.value == '0') ? '1' : '0';
SetCookie('CB_italic', document.post.sitalic.value);
break
}
case 'underline':
{
document.getElementById('divunderline').style.textDecoration = (document.post.sunderline.value == '0') ? document.post.message.style.textDecoration + ' underline' : document.post.message.style.textDecoration.replace('underline', '');
document.post.message.style.textDecoration = document.getElementById('divunderline').style.textDecoration;
document.post.sunderline.value = (document.post.sunderline.value == '0') ? '1' : '0';
SetCookie('CB_under', document.post.sunderline.value);
break
}
case 'strike':
{
document.getElementById('divstrike').style.textDecoration = (document.post.sstrike.value == '0') ? document.post.message.style.textDecoration + ' line-through' : document.post.message.style.textDecoration.replace('line-through', '');
document.post.message.style.textDecoration = document.getElementById('divstrike').style.textDecoration;
document.post.sstrike.value = (document.post.sstrike.value == '0') ? '1' : '0';
SetCookie('CB_strike', document.post.sstrike.value);
break
}
}
}
function fetch_object(obj) {
return document.getElementById(obj)
}
function do_selectcolor(event) {
var scrX = (event.screenX - 270);
var scrY = (event.screenY - 270);
window.open('/chatbox/chatbox_selectcolor.htm', 'color', 'toolbar=no,menubar=no,personalbar=no,width=250,height=200,scrollbars=no,resizable=yes,left=' + scrX + ',top=' + scrY)
}
function do_selectsmilies(event) {
var scrX = (event.screenX - 270);
var scrY = (event.screenY - 380);
if (window.open) {
window.open('/post.forum?mode=smilies_chatbox' + smilies_sid, 'chatbox_smilies', 'toolbar=no,menubar=no,personalbar=no,width=350,height=300,scrollbars=yes,resizable=yes,left=' + scrX + ',top=' + scrY)
} else {}
}
function SetCookie(name, value) {
var expire = '';
var path = "/";
var domain = '';
document.cookie = name + "=" + value + "; path=" + path + expire + domain + ';'
}
function copy_user_name(user_name) {
if (document.post.message) {
document.post.message.value += user_name;
document.post.message.focus()
}
return false
}
function js_urlencode(text) {
text = text.toString();
var matches = text.match(/[\x90-\xFF]/g);
if (matches) {
for (var matchid = 0; matchid < matches.length; matchid++) {
var char_code = matches[matchid].charCodeAt(0);
text = text.replace(matches[matchid], '%u00' + (char_code & 0xFF).toString(16).toUpperCase())
}
}
return escape(text).replace(/\+/g, "%2B")
}
function ajax_submit_chatbox(params) {
number_of_refresh = 0;
var msg_sent = document.post.sent.value;
if (params == '' || params == undefined) {
params = '?achives=0'
}
while (msg_sent.indexOf('&') >= 0) {
msg_sent = msg_sent.replace('&', '%26')
};
while (msg_sent.indexOf('+') >= 0) {
msg_sent = msg_sent.replace('+', '%2B')
};
var data = '&mode=send';
data += '&sent=' + msg_sent;
data += '&sbold=' + document.post.sbold.value;
data += '&sitalic=' + document.post.sitalic.value;
data += '&sunderline=' + document.post.sunderline.value;
data += '&sstrike=' + document.post.sstrike.value;
data += '&scolor=' + document.post.scolor.value;
if ((msg_sent.indexOf('/away') == 0) || (msg_sent.indexOf('/abs') == 0)) {
document.getElementById('refresh_auto').checked = false
}
if (document.post.sent.value == '/banlist') {
window.open('/chatbox/chatbox_banlist.forum' + params, 'banlist', 'toolbar=no,menubar=no,personalbar=no,width=450,height=300,scrollbars=yes,resizable=yes');
return false
}
if (window.XMLHttpRequest) {
var http_request = new XMLHttpRequest()
} else if (window.ActiveXObject) {
var http_request = new ActiveXObject("Microsoft.XMLHTTP")
}
http_request.onreadystatechange = function() {
if (http_request.readyState == 4 && http_request.status == 200) {
var parsed_text = http_request.responseText;
eval(parsed_text);
if (chatbox_last_update > chatbox_updated) {
document.getElementById('chatbox').innerHTML = chatbox_messages;
document.getElementById('chatbox_members').innerHTML = chatbox_memberlist;
daonguoc();
chatbox_updated = chatbox_last_update
}
}
};
http_request.open('POST', '/chatbox/chatbox_actions.forum' + params, true);
http_request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;');
http_request.send(data)
}
chatbox_messages_old = '';

function ajax_refresh_chatbox(params, force) {
if (params == '' || params == undefined) {
params = '?achives=0'
}
if (window.XMLHttpRequest) {
var http_request = new XMLHttpRequest()
} else if (window.ActiveXObject) {
var http_request = new ActiveXObject("Microsoft.XMLHTTP")
}
http_request.onreadystatechange = function() {
if (http_request.readyState == 4 && http_request.status == 200) {
var parsed_text = http_request.responseText;
eval(parsed_text);
if (chatbox_last_update > chatbox_updated || force) {
if (document.getElementById('chatbox').innerHTML != null) {
if (chatbox_messages_old != chatbox_messages) {
document.getElementById('chatbox').innerHTML = chatbox_messages;
chatbox_messages_old = chatbox_messages;
daonguoc()
}
}
if (document.getElementById('chatbox_members').innerHTML != null) document.getElementById('chatbox_members').innerHTML = chatbox_memberlist;
chatbox_updated = chatbox_last_update
}
}
};
http_request.open('GET', '/chatbox/chatbox_actions.forum' + params + '&mode=refresh', true);
http_request.send(null)
}
number_of_refresh = 0;

function refresh_chatbox(params) {
if (params == '' || params == undefined) {
params = '?achives=0'
}
if (document.getElementById('refresh_auto').checked == true) {
ajax_refresh_chatbox(params)
}
}
```

Rồi tìm trong html 1 ban đầu

```


<script src="/h48-" type="text/javascript">

Unknown end tag for &lt;/script&gt;


thay lại bằng:
<script src="/link html 2-" type="text/javascript">

Unknown end tag for &lt;/script&gt;




+Giải thích source (Phần này giải thích thêm, không đọc cũng chả sao) :
Cái chính của source này là function daonguoc():

Code:

function daonguoc(){
for (i=1; i<=parseInt(jQuery("#chatbox p").length/2); i++)
{
a=i-1;
n=jQuery("#chatbox p").length-i;
text=jQuery('#chatbox p')[n].innerHTML;
jQuery('#chatbox p')[n].innerHTML=jQuery('#chatbox p')[a].innerHTML;
jQuery('#chatbox p')[a].innerHTML=text

};
}

```
> Đảo ngược các paragraph trong 'Chatbox'.
> Có thể thay vòng lặp for bằng vòng lặp while chẳn hạn.
> Tớ đã bỏ các đoạn scroll top trong js và thay thế vào đó là function daonguoc(), có thể search trong js để tìm hiểu thêm.


+Tiếp đến là smile (tìm trong) :

```

http://linkforum/post?mode=smilies_chatbox
```

Có thể lấy dữ liệu trực tiếp từ đây, nhưng mà nó không được đẹp với theo ý muốn nên khuyên các bạn nên lựa chọn ra Những smile ưng ý rồi copy phần <a ...>

Unknown end tag for &lt;/a&gt;

 của mỗi smile rồi cho vào 1 trang html từ đó có thể quy định chiều cao rộng, sắp xếp theo thứ tự như thế nào đó cho vừa ý là được hế hế
Tìm trong html 1 ở function tryfu() thay h178- bằng link của html vừa tạo.
'Sông' rồi ) và giờ thì vác nó đi đặt ở đâu thì đặt tùy ý nhé:

```


<iframe scrolling="auto" width="710px" frameborder="0" src="link cái xê búc(link trang html 1)" name="Chatbox" height="320px">

Unknown end tag for &lt;/iframe&gt;


```


Đề mổ trực tuyến:

```

http://www.a20tpo.info/forum

```
Pic đề mổ:

```

https://www.youtube.com/watch?v=udRu_dNu2ls
```
Nhớ chỉnh HD coi cho 'ếp phê'
Mệt vãi cả '