Chức năng:

> Quà tặng âm nhạc tự cập nhật
> Thông điệp yêu thương tự cập nhật
> Hỗ trợ flash mp3.zing.vn, nhaccuatui.com, nhac.vui.vn
> Tìm kiếm nick bạn bè.
> Không hiển thị quà tặng và âm nhạc nếu không nhập nội dung.
> Không xung đột với các lightbox khác.


Hướng dẫn:
Quản lý tổng thể - Kiểm duyệt từ : flash -> flash
Thay toàn bộ code sau vào Display - Templates - Portal - mod\_news

```

<style type="text/css">#fade{display:none;background:#000;position:fixed;left:0;top:0;width:100%;height:100%;opacity:.80;z-index: 99;}.popup_block{display:none;background:#393829;border:10px solid #FFF;float:left;font-size:1.2em;position:fixed;top:50%;left:50%;z-index: 999;-webkit-box-shadow:0 0 7px #000;-moz-box-shadow:0 0 7px #000;box-shadow:0 0 20px #000;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;padding:10px;}img.btn_close{float:right;margin:-30px -30px 0 0;}.popup p{margin:5px 0;padding:5px 10px;}*html #fade,*html .popup_block{position:absolute;}

Unknown end tag for &lt;/style&gt;

<script type="text/javascript" src="http://fmvi-group.googlecode.com/files/Fmvi-Group-qtan-tdyt.js">

Unknown end tag for &lt;/script&gt;

<script>function btdyt(){window.location.replace("{TOPIC_URL}")}

Unknown end tag for &lt;/script&gt;

<table width="762px" align="center" style="background: #000000;color: #555555;border: 2px solid #bbb;-moz-border-radius:5px; cellspacing="0" cellpadding="0"><tbody><tr><td id="pro_ms" style="width:280px; color:#FFFFFF; font-size:12px;"><!-- BEGIN post_row --><div class="thongtinqua"><img src="http://i1211.photobucket.com/albums/cc433/baivong/cfviet/Bandit.png" border="0" alt="Cfviet"> <font color="#37fafa">Người yêu cầu:

Unknown end tag for &lt;/font&gt;

 {post_row.POSTER}<br/><img src="http://i1211.photobucket.com/albums/cc433/baivong/cfviet/Policeman.png" border="0" alt="Cfviet"> <font color="#37fa37">Vào lúc:

Unknown end tag for &lt;/font&gt;

 {post_row.TIME}<br/><img src="http://i1211.photobucket.com/albums/cc433/baivong/cfviet/Love.png" border="0" alt="Cfviet"> <font color="#fa37ac">Gửi đến:

Unknown end tag for &lt;/font&gt;

 <font color="#ffff2b">{post_row.TITLE}

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/div&gt;

<!-- END post_row --><br/><img src="http://i1211.photobucket.com/albums/cc433/baivong/cfviet/Wondering.png" border="0" alt="Cfviet"> <font color="#5ca3fa">Bạn muốn yêu cầu ca khúc?

Unknown end tag for &lt;/font&gt;

<!-- BEGIN switch_user_logged_out --><a onmouseover="showtip('<font size=5>GỬI QUÀ TẶNG ÂM NHẠC !</font><br>Hỗ trợ flash: <font color=#FF5F5F>mp3.zing.vn, nhaccuatui.com, nhac.vui.vn</font>');" onmouseout="hidetip();" href="#?w=270" rel="login_bv" class="poplight">  <font color="#ff5959" size="2px"><blink><img src="http://i1211.photobucket.com/albums/cc433/baivong/cfviet/Heart.png"/> Click

Unknown end tag for &lt;/blink&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/a&gt;

<div id="login_bv" class="popup_block"><!-- login form -->  <form action="/login.forum?redirect=/portal.htm" method="post"  id="signin"><table cellspacing="0" cellpadding="0" border="0"><td class="smallfont" style="white-space: nowrap;"><label><font color="#FFFFFF">Tài khoản :

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

<tr><td class="smallfont"><label><font color="#FFFFFF">Mật Khẩu :

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

<!-- END switch_user_logged_out --><!-- BEGIN switch_user_logged_in --><a onmouseover="showtip('<font size=5>GỬI QUÀ TẶNG ÂM NHẠC !</font><br>Hỗ trợ flash: <font color=#FF5F5F>mp3.zing.vn, nhaccuatui.com, nhac.vui.vn</font>');" onmouseout="hidetip();" href="#?w=410" rel="TDYT_bv" class="poplight">  <font color="#ff5959" size="2px"><blink><img src="http://i1211.photobucket.com/albums/cc433/baivong/cfviet/Heart.png"/> Click

Unknown end tag for &lt;/blink&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/a&gt;

<div id="TDYT_bv" class="popup_block"><form target="bvreload" action="/posting.forum" method="post" name="post" onsubmit="return vB_Editor['text_editor'].prepare_submit(0,0)" enctype="multipart/form-data"><table width="420px" border="0" cellspacing="1" cellpadding="0"><tr><td width="22%"><span class="gen"><b><font color="#23eb41">Gửi đến

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;

<td><button onmouseover="showtip('<font size=5>Tìm nick bạn bè</font>');" onmouseout="hidetip();" id="find_friend" value="Tìm thành viên" class="button2" type="button" title="Tìm thành viên"><img src=http://r19.imgfast.net/users/1911/13/87/62/album/th/andanh10.png></button>
<input class="post gen" style="width:235px; display:inline" type="text" name="subject" value="Tất cả" onblur="if(this.value=='') this.value='Tất cả';" onfocus="if(this.value=='Tất cả') this.value='';"  size="45" maxlength="40" tabindex="2" title="" onkeypress="if (event.keyCode==13){return false}">

Unknown end tag for &lt;/span&gt;

 <input onclick="set_solved(this.form.elements['subject'],'»'), vtdyt()" class="mainoption"  type="submit" name="post" value="Gửi" tabindex="6" accesskey="s" />

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="1"><tr><td><blink><b><font color="#39a8d1">Quà tặng

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/blink&gt;

<br/><blink><b><font color="#ff4f95">Lời nhắn

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/blink&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;

<td valign="top"><table border="0" cellspacing="0" cellpadding="0" width="100%"><tr><td colspan="9"><span class="gensmall" style="width:550px;font-size:10px" id="helpbox">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td colspan="9"><span class="gen"><input id="fmvi1"  style="width:310px; display:inline" type="text" value="Dán đoạn mã flash bài hát vào đây!" onblur="if(this.value=='') this.value='Dán đoạn mã flash bài hát vào đây!';" onfocus="if(this.value=='Dán đoạn mã flash bài hát vào đây!') this.value='';"  onclick="storeCaret(this)" onkeyup="storeCaret(this)" rows="15" cols="35" tabindex="3" onselect="storeCaret(this)" wrap="virtual" maxlength="500" /><br/><input id="fmvi2"  style="width:285px; display:inline" type="text"  value="Nội dung thông điệp" onblur="if(this.value=='') this.value='Nội dung thông điệp';" onfocus="if(this.value=='Nội dung thông điệp') this.value='';"  onclick="storeCaret(this)" onkeyup="storeCaret(this)" rows="15" cols="35" tabindex="3" onselect="storeCaret(this)" wrap="virtual" maxlength="255" /><input id="fmvigroup" class="gen" style="display:none" onclick="storeCaret(this)" onkeyup="storeCaret(this)" name="message" rows="1" cols="35" tabindex="3" onselect="storeCaret(this)" wrap="virtual" /><span id="counter_number" class="counter"> 169

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;

<input type="hidden" name="lt" value="0" /><input type="hidden" name="mode" value="newtopic" />

<!-- FMvi-Group -->
<!-- Thay số  77  dưới đây bằng số chuyên mục gửi quà tặng của bạn -->
<input type="hidden" name="f" value="77" />




Unknown end tag for &lt;/form&gt;



Unknown end tag for &lt;/div&gt;

<!-- END switch_user_logged_in -->

Unknown end tag for &lt;/td&gt;

<td id="ms_pro" align="center" style="background: url(http://i21.servimg.com/u/f21/16/41/91/75/musicc10.jpg);"><!-- BEGIN post_row --><p><button class="chuyenqua">Next »

Unknown end tag for &lt;/button&gt;



Unknown end tag for &lt;/p&gt;

{post_row.TEXT}<!-- END post_row -->

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;

<table width="762px" style="background: #fff;color: #555555;border: 2px solid #bbb;-moz-border-radius:5px;" cellpadding="6" cellspacing="2" border="0" width="100%" align="center"><tr><td nowrap="nowrap" style="background: #fff;color: #313131;border: 1px solid #ccc;-moz-border-radius:5px"><!-- BEGIN switch_user_logged_out --><a onmouseover="showtip('<font size=5>GỬI THÔNG ĐIỆP - CLICK !!</font><br>Chỉ dành cho thành viên có <font color=#FF5F5F>nick màu</font> hoặc <font color=#C2FFAF>trên 15 bài viết</font>');" onmouseout="hidetip();" href="#?w=280" rel="login_bv" class="poplight"><img src="http://r19.imgfast.net/users/1911/13/87/62/album/tdyt10.png" /><img src="http://r19.imgfast.net/users/1911/13/87/62/album/th/tdyt_s10.png" />

Unknown end tag for &lt;/a&gt;

<div id="login_bv" class="popup_block"><!-- login form --><form action="/login.forum?redirect=/portal.htm" method="post"  id="signin"><table cellspacing="0" cellpadding="0" border="0"><td class="smallfont" style="white-space: nowrap;"><label><font color="#FFFFFF">Tài khoản :

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

  <tr>  <td class="smallfont"><label><font color="#FFFFFF">Mật Khẩu :

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/label&gt;

 

Unknown end tag for &lt;/td&gt;

<td> <input id="pass" name="password" class="post" size="20" type="password" value="Mật khẩu" onblur="if(this.value=='') this.value='Mật khẩu';" onfocus="if(this.value=='Mật khẩu') this.value='';"/>

Unknown end tag for &lt;/td&gt;

 <td><input type="submit" value="Đăng nhập" name="login" id="login"/> 

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

 

Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/form&gt;

<!-- / login form -->

Unknown end tag for &lt;/div&gt;

<!-- END switch_user_logged_out --><!-- BEGIN switch_user_logged_in --><a onmouseover="showtip('<font size=5>GỬI THÔNG ĐIỆP</font><br>Click vào đây để <font color=#FF5F5F>gửi tin nhắn nhanh </font>');" onmouseout="hidetip();" href="#?w=420" rel="TDYT_bv" class="poplight"><img src="http://r19.imgfast.net/users/1911/13/87/62/album/tdyt10.png" />

Unknown end tag for &lt;/a&gt;

<img src="http://r19.imgfast.net/users/1911/13/87/62/album/th/tdyt_s10.png" /><!-- END switch_user_logged_in -->

Unknown end tag for &lt;/td&gt;

<td id="fmvi-tdyt" style="background: #fff;color: #313131;border: 1px solid #ccc;-moz-border-radius:5px;overflow: hidden;width:537px;"><div style="overflow: hidden;width:537px"><marquee behavior="scroll" onmouseover="this.stop()" onmouseout="this.start()" scrollamount="2" direction="left" scrolldelay="20" truespeed><table><tr><!-- BEGIN post_row --><!-- BEGIN saut --><!-- END saut --><td><span style="margin-right:3px" class="modnew"><span onmouseover="showtip(this.getElementsByTagName('div')[0].innerHTML);" onmouseout="hidetip();" style="color:#2F2F2F; font-size:11px"><b>{post_row.POSTER}

Unknown end tag for &lt;/b&gt;

 nhắn với <span style="color:#FF009A;font-weight:bold">{post_row.TITLE}

Unknown end tag for &lt;/span&gt;

<div style="display: none;"><span style="color:#831BBF"><strong>{post_row.POSTER} gửi vào lúc {post_row.TIME}

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/span&gt;

: 

Unknown end tag for &lt;/td&gt;

<td style="padding: 0px 40px 0px 0px"><span style="color:#3F1B1B;">{post_row.TEXT}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;

<!-- END post_row -->

Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/marquee&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;

<script src="http://illiweb.com/rsc/13/frm/jquery/jqmodal/jqmodal.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;

<script type="text/javascript">//<![CDATA[
$(document).ready(function(){function find_username(fieldname) {$.get('/search.forum?mode=searchuser&fieldname=' + fieldname + '&time=' + timestamp(), '',function(data){$('#find_username').html(data).jqmShow();$('.jqmOverlay').bgiframe();$('#find_username').bgiframe();});return false;}$('#find_friend').click(function(){return find_username('subject');});$('#find_foe').click(function(){return find_username('foe');});$('#find_username').jqm({toTop: true});});//]]>

Unknown end tag for &lt;/script&gt;

<div type="z-index:9999;" id="find_username" class="jqmWindow"><iframe name="bvreload" height="1px" width="1px">

Unknown end tag for &lt;/iframe&gt;


```
Ghi chú: Thay số 77 trong code bằng số chuyên mục gửi quà tặng của bạn. Chỉnh mod\_news như trong hình dưới đây:
> ![http://i28.servimg.com/u/f28/16/58/89/73/modene10.png](http://i28.servimg.com/u/f28/16/58/89/73/modene10.png)
Để TUT hoạt động tốt bạn chỉnh Mod\_news: 15 bài viết, số ký tự là 777.
... và trước khi đem ra sử dụng bạn phải đảm bảo có trước 5 quà tặng âm nhạc.