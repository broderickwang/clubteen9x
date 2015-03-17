**Chú ý : Chỉ dùng trong phiên bản phpbb2
  * ử dụng bằng cách thêm vào cuối CSS**


  * hay đổi Tiêu đề mặc định của Chatbox.
  * ặc định là chữ "Chatbox", bạn có thể thay bằng từ khác.

```

#chatbox_header .cattitle strong {
display: none;
}
#chatbox_header .cattitle:before{
content: "Ngộ nhể ...";
}
```

> Thay đổi màu tiêu đề Chatbox
> thay bằng mã màu thích hợp

```

#chatbox_header .catBottom .cattitle {
color: mã màu;}
```

> Đổi màu các liên kết chức năng trên thanh tiêu đề

```

#chatbox_header .chatbox-options .genmed,
#chatbox_header .chatbox-options,
#chatbox_header .chatbox-options a {
color: mã màu;
}

```
> Đổi màu danh sách thành viên

```

#chatbox_members ul li,
#chatbox_members ul li a {
color: mã màu;
}
```

> Thêm ảnh nền Chatbox

```

body.chatbox {
background: url(link ảnh);
}
```

> Thay đổi chiều cao mặc định của Chatbox

```

#chatbox_top {
height: 200px !important;
}

```
> thay 200px bằng chiều cao thích hợp



... tạm thời chỉ thế .. nếu có khả năng bạn hãy tiếp tục bài viết này !

[**]Chat Box tự đăng nhập**

```

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="content-type" content="text/html; charset=utf-8" /><title>Chatbox A2Pro

Unknown end tag for &lt;/title&gt;

<meta http-equiv="content-script-type" content="text/javascript" /><meta http-equiv="content-style-type" content="text/css" /><link rel="stylesheet" href="/45-ltr.css" type="text/css" /><script src="http://illiweb.com/fa/js_16/vi.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;

<script type="text/javascript">//<![CDATA[
var params = '?archives=0';var smilies_sid = '';//]]>

Unknown end tag for &lt;/script&gt;

<script src="http://illiweb.com/fa/js/chatbox3.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;

<style type="text/css">* {margin: 0px;padding: 0;}html, body {overflow: hidden;}body {background-color: #efefef;}

Unknown end tag for &lt;/style&gt;



Unknown end tag for &lt;/head&gt;

<body class="chatbox" onload="CB_disconnect();ajax_refresh_chatbox('?archives=100', 1);if (location.href.indexOf('reload')==-1) location.replace(location.href+'?reload');"><div id="chatbox_header"><table cellspacing="0" cellpadding="0" border="0" width="100%"><tr><td class="catBottom" nowrap="nowrap" height="30"><table border="0" width="100%"><tr><td nowrap="nowrap"><a href="/chatbox/chatbox.forum" class="cattitle" target="chatbox"><strong>Tám Xuyên Màng Đêm

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;

<td valign="top" class="chatbox-options"><div class="genmed" id="chatbox_main_options"><a href="javascript:void(0)" onclick="ajax_refresh_chatbox('?archives=0', 1);">Refresh

Unknown end tag for &lt;/a&gt;

 | <span id="chatbox_option_with_archives" style="display: ;"><a href="/chatbox/chatbox.forum?archives=1">Archives

Unknown end tag for &lt;/a&gt;

 | 

Unknown end tag for &lt;/span&gt;

<span id="chatbox_option_without_archives" style="display: none;"><a href="/chatbox/chatbox.forum?archives=0">Without archives

Unknown end tag for &lt;/a&gt;

 | 

Unknown end tag for &lt;/span&gt;

<span id="chatbox_option_autorefresh" style="display: none;" onclick="refresh_chatbox('?archives=0');"><label for="refresh_auto">Auto refresh 

Unknown end tag for &lt;/label&gt;

<input type="checkbox" name="refresh_auto" id="refresh_auto" checked="checked" style="background: transparent;" /> | 

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

<div id="chatbox_members" curpos="0" maxpos="460" pageincrement="144" increment="10">

Unknown end tag for &lt;/div&gt;

<div id="chatbox">

Unknown end tag for &lt;/div&gt;

<div id="chatbox_footer" style="display: none;"><div id="chatbox_messenger"><form name="post" action="/chatbox/chatbox.forum" method="post" onsubmit="submitmsg('?archives=0');refresh_chatbox('?archives=0');return false;"><table width="100%" cellspacing="0" cellpadding="0"><tr><td class="catBottom"><div id="chatbox_messenger_form"><table cellspacing="0" cellpadding="0" height="24" width="100%" class="chatfootertable"><tr><td width="100%" align="right"><table cellspacing="2" cellpadding="0" border="0" style="line-height: 0px;" class="text-styles" ><tr><td><div id="divbold" class="fontbutton fontbutton_normal" onmouseover="this.className='fontbutton fontbutton_hover'" onmouseout="this.className=( document.post.sbold.value == '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'" onclick="do_style('bold');" onmousedown="this.className='fontbutton fontbutton_clicked';" onmouseup="this.className=( document.post.sbold.value != '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'"><img src="http://illiweb.com/fa/subsilver/wysiwyg/bold.gif" width="21" height="20" alt="Bold" title="Bold" />

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

<td><div id="divcolor" class="fontbutton fontbutton_normal" onmouseover="this.className='fontbutton fontbutton_hover'" onmouseout="this.className='fontbutton fontbutton_normal'" onclick="do_selectcolor(event);"><img src="http://illiweb.com/fa/subsilver/wysiwyg/color.gif" width="21" height="16" alt="Màu font" title="Màu font" /><img src="http://illiweb.com/fa/subsilver/wysiwyg/menupop.gif" width="11" height="16" alt="Màu font" title="Màu font" /><br /><img src="http://illiweb.com/fa/subsilver/wysiwyg/clear.gif" id="show_color" alt="Màu font" title="Màu font" width="21" height="4" />

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;

<td><div id="divsmilies" class="fontbutton fontbutton_normal" onmouseover="this.className='fontbutton fontbutton_hover'" onmouseout="this.className='fontbutton fontbutton_normal'" onclick="do_selectsmilies(event);"><img src="http://illiweb.com/fa/subsilver/wysiwyg/smilie.gif" width="21" height="20" alt="Biểu tượng" title="Biểu tượng" /><img src="http://illiweb.com/fa/subsilver/wysiwyg/menupop.gif" width="11" height="20" alt="Biểu tượng" title="Biểu tượng" />

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;

<td width="10"> 

Unknown end tag for &lt;/td&gt;

<td><input type="hidden" name="sbold" value="0"><input type="hidden" name="sitalic" value="0"><input type="hidden" name="sunderline" value="0"><input type="hidden" name="sstrike" value="0"><input type="hidden" name="scolor" id="scolor" value="#000000"><span class="gen" onclick="document.post.message.focus();"><label>Thông điệp : <input type="text" id="message" name="message" size="35" maxlength="1024" class="post" autocomplete="off" onkeydown="number_of_refresh=0;" />

Unknown end tag for &lt;/label&gt;

 <input type="hidden" name="sent" value="" /><input type="submit" name="submit_button" value="Send" id="submit_button" /> 

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

<script type="text/javascript">//<![CDATA[
function CB_disconnect(){if ( connected ){ajax_connect('?archives=0', 'disconnect');clearInterval(refresh_interval);}else{ajax_connect('?archives=0', 'connect');try {refresh_interval = setInterval("refresh_chatbox('?archives=0')", 5000);} catch (err) {}}}if ( document.location.href.indexOf('chatbox', 1) == -1 ){$('#divcolor').css('display', '');$('#divsmilies').css('display', '');}var connected = false;var chatbox_updated = 1260633294;var chatbox_last_update = 1260633294;var template_color = '#000000';var refresh_interval;window.setTimeout("document.getElementById('chatbox').scrollTop = 999999; Init_pref();", 200);window.setTimeout("document.getElementById('chatbox').scrollTop = 999999;", 1000);if ( connected ){try {refresh_interval = setInterval("refresh_chatbox('?archives=0')", 5000);} catch (err) {}}else{try {refresh_chatbox('?archives=0');} catch (err) { }}//]]>

Unknown end tag for &lt;/script&gt;



Unknown end tag for &lt;/body&gt;



Unknown end tag for &lt;/html&gt;


```

**Chép đoạn trên vào 1 trang html.**Lấy link trang html (có dạng http://forum.com/html-h*.htm)
**Chèn vào nơi muốn hiện Chatbox bằng iframe (thay bằng link trên) :**

```

<iframe src="http://forum.com/html-h*.htm" height="300" width="100%" frameborder="0">

Unknown end tag for &lt;/iframe&gt;


```


Mình thì chèn vô index\_body