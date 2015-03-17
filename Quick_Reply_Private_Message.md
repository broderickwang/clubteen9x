• Hiệu ứng slide trả lời nhanh tin nhắn

• Tham khảo từ http://help.forumotion.com/t114654-form-to-send-pm-s

• Tự động chèn tên người gửi và tiêu đề tin nhắn


![http://img824.imageshack.us/img824/1685/pmse.png](http://img824.imageshack.us/img824/1685/pmse.png)

Hướng dẫn :

Bước 1 : ACP --> Display --> Post & Tin nhắn --> privmsgs\_read\_body : Tìm đoạn code sau

```


<!-- BEGIN switch_post_reply -->
<p class="posting">{REPLY_PM_IMG}

Unknown end tag for &lt;/p&gt;


<!-- END switch_post_reply -->


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/form&gt;



```
Thêm sau đoạn code đó :

```

<div id="qpri_reply" style="display: none;">
<form action="/privmsg" class="frm-form" method="post" name="post" onsubmit="return vB_Editor['text_editor'].prepare_submit(0,0)" enctype="multipart/form-data">
<div class="main-head clearfix scihead" style=""><span class="qtitle" style="">Trả lời nhanh tin nhắn

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;


<div class="main-content frm">
<fieldset class="frm-set multi">
<dl><dt><label>Username:

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd>
<input style="margin-top:2px" type="text" id="username" name="username[]" value="{MESSAGE_FROM}" tabindex="1">


Unknown end tag for &lt;/dd&gt;

<dt><label>Tittle:

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd>
<input required="required" type="text" id="subject" name="subject" value="Re: {POST_SUBJECT}" tabindex ""="">


Unknown end tag for &lt;/dd&gt;



<div class="clear">

Unknown end tag for &lt;/div&gt;


<div id="textarea_content" class="posting-block">
<dl>
<dd class="frm-textarea" style="width:88%;">
<textarea id="text_editor_textarea" onclick="storeCaret(this)" rows="15" cols="9" onkeyup="storeCaret(this)" name="message" tabindex="3" onselect="storeCaret(this)" wrap="virtual" style="margin-top: 0px; margin-bottom: 0px; height: 210px;">

Unknown end tag for &lt;/textarea&gt;


<br>


Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/dl&gt;




Unknown end tag for &lt;/fieldset&gt;


<input type="submit" name="post" value="Send" tabindex="6" accesskey="s" style="margin-left: 50%;">


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/form&gt;


<div id="scifoot" style="margin-top: -21px;">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;



```

Bước 2 : ACP --> Templates --> Quản Lý Tổng Thể --> overall\_footer\_begin
Thêm đoạn Javascript sau

```

<script language="javascript">
$(function () {
$('.paged-foot .paging')
.after('<div id="priv_msg_tog" class="button">Quick reply

Unknown end tag for &lt;/div&gt;

');
$('.pun-privmsg')
.appendTo('.main .main-head');
$('.pun-privmsg')
.parent()
.css('height', 'auto');
$('#priv_msg_tog')
.click(function () {
var priv = $('#qpri_reply')
.css('display');
if (priv == 'none') {
$('#qpri_reply')
.slideDown(500);
$('#priv_msg_tog')
.html('Close Reply');
}
else if (priv == 'block') {
$('#qpri_reply')
.slideUp(500);
$('#priv_msg_tog')
.html('Toggle Reply');
}
});
});

Unknown end tag for &lt;/script&gt;




```