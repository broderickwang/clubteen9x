Bước 1: Chèn vào CSS



```


/*------------------POPUPS------------------------*/
#fade{display:none;background:#000;position:fixed;left:0;top:0;width:100%;height:100%;opacity:.80;z-index: 99;}.popup_block{display:none;background:#393829;border:10px solid #FFF;float:left;font-size:1.2em;position:fixed;top:50%;left:50%;z-index: 999;-webkit-box-shadow:0 0 7px #000;-moz-box-shadow:0 0 7px #000;box-shadow:0 0 20px #000;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;padding:10px;}img.btn_close{float:right;margin:-30px -30px 0 0;}.popup p{margin:5px 0;padding:5px 10px;}*html #fade,*html .popup_block{position:absolute;}


Bước 2: Tạo một trang HTML 1 với nội dung sau

Spoiler:

Code: Chọn nội dung

$(document).ready(function(){
$('#text_editor_textarea').keyup(function() {
max_chars = 555;
current_value = $('#text_editor_textarea').val();
current_length = current_value.length;
remaining_chars = max_chars-current_length;
$('#counter_number').html(remaining_chars);
if(remaining_chars<=55){
$('#counter_number').css('color', 'red');
} else {
$('#counter_number').css('color', 'yellow');
}
});

$('#smileCFviet').hide();

$('a#clicktime').click(function() {
$('#smileCFviet').toggle(300);
});


$('a.poplight[href^=#]').click(function() {
var popID = $(this).attr('rel');
var popURL = $(this).attr('href');

//Pull Query & Variables from href URL
var query= popURL.split('?');
var dim= query[1].split('&');
var popWidth = dim[0].split('=')[1];

$('#' + popID).fadeIn().css({ 'width': Number( popWidth ) }).prepend('<a href="#" class="close"><img src="http://i27.servimg.com/u/f27/14/67/90/38/close_10.png" class="btn_close" title="Close Window" alt="Close" />

Unknown end tag for &lt;/a&gt;

');


var popMargTop = ($('#' + popID).height() + 80) / 2;
var popMargLeft = ($('#' + popID).width() + 80) / 2;


$('#' + popID).css({
'margin-top' : -popMargTop,
'margin-left' : -popMargLeft
});

//Fade in Background
$('body').append('<div id="fade">

Unknown end tag for &lt;/div&gt;

');
$('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn();
return false;
});


//Close Popups and Fade Layer
$('a.close, #fade').live('click', function() {
$('#fade , .popup_block').fadeOut(function() {
$('#fade, a.close').remove();
}); //fade them both out

return false;
});


});

```
Bước 3: Tạo một trang HTML 2 với nội dung



```


<style>a img {border-width:0;}


Unknown end tag for &lt;/style&gt;


<script src="http://illiweb.com/rsc/13/frm/lang/vi.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;

<meta http-equiv="content-type" content="text/html; charset=utf-8" /
<form id="smilies_categ" action="" method="get" name="smilies_categ">
<input type="hidden" name="mode" value="smilies_frame" />

Unknown end tag for &lt;/form&gt;


<table width="100%" border="0" cellspacing="0" cellpadding="5" summary="smilies"><tr align="center" valign="middle"><td class="row1">
<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/01.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/01.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/02.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/02.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/03.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/03.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/04.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/04.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/05.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/05.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/06.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/06.gif" alt="" />

Unknown end tag for &lt;/a&gt;



<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/07.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/07.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/08.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/08.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/09.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/09.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/10.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/10.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/11.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/11.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/12.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/12.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/13.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/13.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/14.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/14.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/15.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/15.gif" alt="" />

Unknown end tag for &lt;/a&gt;



<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/16.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/16.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/17.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/17.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/18.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/18.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/19.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/19.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/20.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/20.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/21.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/21.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/22.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/22.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/23.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/23.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/24.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/24.gif" alt="" />

Unknown end tag for &lt;/a&gt;



<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/25.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/25.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/26.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/26.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/27.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/27.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/28.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/28.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/29.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/29.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/30.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/30.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/31.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/31.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/32.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/32.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/33.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/33.gif" alt="" />

Unknown end tag for &lt;/a&gt;



<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/34.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/34.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/35.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/35.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/36.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/36.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/37.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/37.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/38.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/38.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/39.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/39.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/40.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/40.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/41.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/41.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/42.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/42.gif" alt="" />

Unknown end tag for &lt;/a&gt;



<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/43.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/43.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/44.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/44.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/45.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/45.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/46.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/46.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/47.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/47.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="javascript:emoticonp('[img]http://static.gox.vn/media/forum/images/smilies/qq/48.gif[/img]')"><img title="" src="http://static.gox.vn/media/forum/images/smilies/qq/48.gif" alt="" />

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;


```

Bước 4: Thay toàn bộ Display - Templates - Portal - Mod\_news bằng code sau



```



<script src="HTML 1" type="text/javascript">

Unknown end tag for &lt;/script&gt;


<script type="text/javascript">
function vtdyt()
{
var t=setTimeout("btdyt()",1000);
}
function btdyt()
{
window.location.replace("{TOPIC_URL}")
}


Unknown end tag for &lt;/script&gt;



<table cellpadding="0" cellspacing="0" width="762px" style="background: #393829;color: #555555;border: 2px solid #bbb;-moz-border-radius:5px;><tbody><td style="width:772px; padding:3px;"><table style="background: #fff;color: #555555;border: 2px solid #bbb;-moz-border-radius:5px;" cellpadding="6" cellspacing="2" border="0" width="100%" align="center"><tr><td nowrap="nowrap" style="background: #fff;color: #313131;border: 1px solid #ccc;-moz-border-radius:5px">
<!-- BEGIN switch_user_logged_out -->
<a onmouseover="showtip('<font size=5>GỬI THÔNG ĐIỆP - CLICK !!</font><br>Chỉ dành cho thành viên có <font color=#FF5F5F>nick màu</font> hoặc <font color=#C2FFAF>trên 15 bài viết</font>');" onmouseout="hidetip();" href="#?w=280" rel="login_bv" class="poplight"><img src="http://r19.imgfast.net/users/1911/13/87/62/album/tdyt10.png" /><img src="http://r19.imgfast.net/users/1911/13/87/62/album/th/tdyt_s10.png" />

Unknown end tag for &lt;/a&gt;


<div id="login_bv" class="popup_block">
<!-- login form -->
<form action="/login.forum?redirect=/portal.htm" method="post"  id="signin">
<table cellspacing="0" cellpadding="0" border="0">
<td class="smallfont" style="white-space: nowrap;">
<label><font color="#FFFFFF">Tài khoản :

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/label&gt;

  

Unknown end tag for &lt;/td&gt;


<td><input id="username" class="post" name="username" size="20" type="text" value="Tên tài khoản" onblur="if(this.value=='') this.value='Tên tài khoản';" onfocus="if(this.value=='Tên tài khoản') this.value='';" />

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/td&gt;


<td class="smallfont" nowrap="nowrap"><label for="cb_cookieuser_navbar"><input type="checkbox" name="cookieuser" value="1" tabindex="103" id="cb_cookieuser_navbar" accesskey="c" /><font color="#FFFFFF">Ghi nhớ?

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;



<tr>
<td class="smallfont">      <label><font color="#FFFFFF">Mật Khẩu :

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/label&gt;

 

Unknown end tag for &lt;/td&gt;


<td> <input id="pass" name="password" class="post" size="20" type="password" value="Mật khẩu" onblur="if(this.value=='') this.value='Mật khẩu';" onfocus="if(this.value=='Mật khẩu') this.value='';"/>


Unknown end tag for &lt;/td&gt;


<td> <input type="submit" value="Đăng nhập" name="login" id="login"/>


Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/form&gt;


<!-- / login form -->


Unknown end tag for &lt;/div&gt;


<!-- END switch_user_logged_out -->
<!-- BEGIN switch_user_logged_in -->
<a onmouseover="showtip('<font size=5>GỬI THÔNG ĐIỆP</font><br>Click vào đây để <font color=#FF5F5F>gửi tin nhắn nhanh </font>');" onmouseout="hidetip();" href="#?w=420" rel="TDYT_bv" class="poplight"><img src="http://r19.imgfast.net/users/1911/13/87/62/album/tdyt10.png" />

Unknown end tag for &lt;/a&gt;


<div id="TDYT_bv" class="popup_block">

<form target="bvreload" action="/posting.forum" method="post" name="post" onsubmit="return vB_Editor['text_editor'].prepare_submit(0,0)" enctype="multipart/form-data"><table width="420px" border="0" cellspacing="1" cellpadding="0"><tr><td width="22%"><span class="gen"><b><font color="#23eb41">Gửi đến

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;

<td>
<button id="find_friend" value="Tìm thành viên" class="button2" type="button" title="Tìm thành viên"><img src=http://r19.imgfast.net/users/1911/13/87/62/album/th/andanh10.png></button>
<input class="post gen" style="width:250px; display:inline" type="text" name="subject" value="Tất cả" onblur="if(this.value=='') this.value='Tất cả';" onfocus="if(this.value=='Tất cả') this.value='';"  size="45" maxlength="40" tabindex="2" title="" onkeypress="if (event.keyCode==13){return false}">

Unknown end tag for &lt;/span&gt;

 <input onclick="set_solved(this.form.elements['subject'],'»'), vtdyt()" class="mainoption"  type="submit" name="post" value="Gửi" tabindex="6" accesskey="s" />


Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="1"><tr><td><span class="gen"><blink><b><font color="#d53be3">Thông điệp 

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/blink&gt;



Unknown end tag for &lt;/font&gt;




Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;

<td valign="top"><table border="0" cellspacing="0" cellpadding="0" width="100%"><tr><td colspan="9"><span class="gensmall" style="width:550px;font-size:10px" id="helpbox">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td colspan="9">
<span class="gen"><a href="#smileCFviet" id="clicktime"><button class="button2" type="button" title="Biểu tượng cảm xúc"><img src=http://illiweb.com/fa/i/smiles/icon_smile.gif></button></a> <input id="text_editor_textarea" class="post" style="width:270px; display:inline" type="text" name="message" value="baivong vô đối  [img]http://static.gox.vn/media/forum/images/smilies/qq/06.gif[/img] " onblur="if(this.value=='') this.value='baivong vô đối  [img]http://static.gox.vn/media/forum/images/smilies/qq/06.gif[/img] ';" onfocus="if(this.value=='baivong vô đối  [img]http://static.gox.vn/media/forum/images/smilies/qq/06.gif[/img] ') this.value='';"  onclick="storeCaret(this)" onkeyup="storeCaret(this)" rows="15" cols="35" tabindex="3" onselect="storeCaret(this)" wrap="virtual" maxlength="225" /><span id="counter_number" class="counter">555

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;


<table width="420px" border="0" cellspacing="0" cellpadding="0">
<tr><td> <div id="smileCFviet"><iframe name="smilies" src="HTML 2" marginwidth="0" marginheight="0" border="0" onmouseover="helpline('z')" onmouseout="helpline('
')" class="row1" width="420" frameborder="0" height="80" scrolling="0">

Unknown end tag for &lt;/iframe&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;


<input type="hidden" name="lt" value="0" /><input type="hidden" name="mode" value="newtopic" /><input type="hidden" name="f" value="5" />

Unknown end tag for &lt;/form&gt;




Unknown end tag for &lt;/div&gt;


<img src="http://r19.imgfast.net/users/1911/13/87/62/album/th/tdyt_s10.png" />
<!-- END switch_user_logged_in -->


Unknown end tag for &lt;/td&gt;


<td width="100%" style="background: #fff;color: #313131;border: 1px solid #ccc;-moz-border-radius:5px"><marquee behavior="scroll" onmouseover="this.stop()" onmouseout="this.start()" scrollamount="2" direction="left" scrolldelay="20" truespeed><!-- BEGIN post_row --><!-- BEGIN saut --><!-- END saut --><span style="margin-right:60px" class="modnew"><span onmouseover="showtip(this.getElementsByTagName('div')[0].innerHTML);" onmouseout="hidetip();" style="color:#2F2F2F; font-size:11px"><b>{post_row.POSTER}

Unknown end tag for &lt;/b&gt;

 nhắn với <span style="color:#FF009A;font-weight:bold">{post_row.TITLE}

Unknown end tag for &lt;/span&gt;

<div style="display: none;"><span style="color:#831BBF"><strong>{post_row.POSTER} gửi vào lúc {post_row.TIME}

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/span&gt;

: <span style="color:#3F1B1B;">{post_row.TEXT}

Unknown end tag for &lt;/span&gt;

<span style="padding: 0px 40px">

Unknown end tag for &lt;/span&gt;

<!-- END post_row -->

Unknown end tag for &lt;/marquee&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;


<script src="http://illiweb.com/rsc/13/frm/jquery/jqmodal/jqmodal.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;

<script type="text/javascript">//<![CDATA[
$(document).ready(function(){function find_username(fieldname) {$.get('/search.forum?mode=searchuser&fieldname=' + fieldname + '&time=' + timestamp(), '',function(data){$('#find_username').html(data).jqmShow();$('.jqmOverlay').bgiframe();$('#find_username').bgiframe();});return false;}$('#find_friend').click(function(){return find_username('subject');});$('#find_foe').click(function(){return find_username('foe');});$('#find_username').jqm({toTop: true});});//]]>

Unknown end tag for &lt;/script&gt;

<div type="z-index:9999;" id="find_username" class="jqmWindow">

Unknown end tag for &lt;/div&gt;


<iframe name="bvreload" height="1px" width="1px">

Unknown end tag for &lt;/iframe&gt;



```
Hướng dẫn: Thay vị trí HTML 1 và HTML 2 trong code bước 4 bằng liên kết đến trang HTML tương ứng tạo ở bước 2 va 3.
Tìm trong code bước 4 đoạn này:

```


<input type="hidden" name="f" value="5" />

Unknown end tag for &lt;/form&gt;



```
... thay số 5 trong code bằng số forum mà bạn dùng để gửi thông điệp yêu thương.
Quản lý tổng thể - Messages and e-mails - Cấu hình diễn đàn - Topics - Minimum value: 3
Cách chỉnh mod\_news để gửi và ẩn thông điệp yêu thương bạn tham khảo thêm các bài hướng dẫn tại www.chinhphuc.info