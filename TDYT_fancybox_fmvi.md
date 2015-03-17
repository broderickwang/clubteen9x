Demo: http://www.08sh.tk/forum

Bước 1 : cài đặt Fancybox



thêm vào trước thẻ

```



Unknown end tag for &lt;/head&gt;



```

trong header

code sau:

```

<link rel="stylesheet" href="http://link.08sh.tk/Cbox" type="text/css" />
<script src="http://link.08sh.tk/Sbox" type="text/javascript">

Unknown end tag for &lt;/script&gt;



```

Bước 2 :Tạo một chuyên mục để gửi Thông điệp yêu thương
QLTT - Forum - Categories and forums - Add




Cài đặt chuyên mục, không cho phép trả lời bài viết, hoặc giới hạn thành viên


Bước 3 : Tạo trang HTML gửi thông điệp

```

<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<form action="/posting.forum" method="post" name="post" onsubmit="return vB_Editor['text_editor'].prepare_submit(0,0)" enctype="multipart/form-data"><table width="420px" border="0" cellspacing="1" cellpadding="0"><tr><td width="22%"><span class="gen"><b><font color="green">Gửi đến

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;

<td><span class="gen"><input class="post gen" style="width:270px; display:inline" type="text" name="subject" value="Tất cả thành viên" onblur="if(this.value=='') this.value='Tất cả thành viên';" onfocus="if(this.value=='Tất cả thành viên') this.value='';"  size="45" maxlength="40" tabindex="2" title="" onkeypress="if (event.keyCode==13){return false}">

Unknown end tag for &lt;/span&gt;

<input onclick="set_solved(this.form.elements['subject'],'»')" class="mainoption" style="float:right" type="submit" name="post" value="Gửi" tabindex="6" accesskey="s" />

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="1"><tr><td><span class="gen"><blink><b><font color="blue">Thông điệp 

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/blink&gt;



Unknown end tag for &lt;/font&gt;




Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;

<td valign="top"><span class="genmed">

Unknown end tag for &lt;/span&gt;

<table border="0" cellspacing="0" cellpadding="0" width="100%"><tr><td colspan="9"><span class="gensmall" style="width:450px;font-size:10px" id="helpbox">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td colspan="9">
<span class="gen"><input id="text_editor_textarea" class="post" style="width:320px; display:inline" type="text" name="message" value="Yêu các bạn nhiều lắm ^^!" onblur="if(this.value=='') this.value='Yêu các bạn nhiều lắm ^^!';" onfocus="if(this.value=='Yêu các bạn nhiều lắm ^^!') this.value='';"  onclick="storeCaret(this)" onkeyup="storeCaret(this)" rows="15" cols="35" tabindex="3" onselect="storeCaret(this)" wrap="virtual">

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;

<input type="hidden" name="lt" value="0" /><input type="hidden" name="mode" value="newtopic" /><input type="hidden" name="f" value="47" />

Unknown end tag for &lt;/form&gt;


```

...Thay Số 47 trong value="47" bằng Số chuyên mục của bạn tạo ở bước 1
VD: Chuyên mục thông điệp của Độtkích.tk là http://www.Độtkích.tk/forum-f38/
... thì thay số 38 vào thành value="38"

Bước 4: Tạo trang HTML đăng nhập (Dành cho khách viếng thăm)

```

<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<!-- login form -->
<form action="/login.forum?redirect=/portal.htm" method="post"  id="signin">
<table cellspacing="0" cellpadding="0" border="0">
<td class="smallfont" style="white-space: nowrap;">
<label>Đăng nhập :

Unknown end tag for &lt;/label&gt;

  

Unknown end tag for &lt;/td&gt;


<td><input id="username" class="post" name="username" size="20" type="text" value="Tên tài khoản" onfocus="if (this.value == 'Tên tài khoản') this.value = '';" />

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/td&gt;


<td class="smallfont" nowrap="nowrap"><label for="cb_cookieuser_navbar"><input type="checkbox" name="cookieuser" value="1" tabindex="103" id="cb_cookieuser_navbar" accesskey="c" />Ghi nhớ?

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;



<tr>
<td class="smallfont">      <label>Mật Khẩu :

Unknown end tag for &lt;/label&gt;

 

Unknown end tag for &lt;/td&gt;


<td> <input id="password" name="password" class="post" size="20" type="password" value="**********" onfocus="if (this.value == '**********') this.value = '';" />

Unknown end tag for &lt;/td&gt;


<td> <input type="submit" value="Đăng nhập" name="login" id="login"/>


Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/form&gt;


<!-- / login form -->
```

Bước 5:Thay toàn bộ mod\_news bằng code sau:

```

<table cellpadding="0" cellspacing="0" width="100%" style="background: #393829;color: #555555;border: 2px solid #bbb;-moz-border-radius:5px;><tbody><td style="padding:3px;"><table style="background: #fff;color: #555555;border: 2px solid #bbb;-moz-border-radius:5px;" cellpadding="6" cellspacing="2" border="0" width="950px" align="center"><tr><td nowrap="nowrap" style="background: #fff;color: #313131;border: 1px solid #ccc;-moz-border-radius:5px">
<!-- BEGIN switch_user_logged_out -->
<a onmouseover="showtip('<font size=5>GỬI THÔNG ĐIỆP - CLICK !!</font><br>Chỉ dành cho thành viên có <font color=#FF5F5F>nick màu</font> hoặc <font color=#C2FFAF>trên 15 bài viết</font>');" onmouseout="hidetip();" id="loginCFviet" href="HTML đăng nhập"><img src="http://r19.imgfast.net/users/1911/13/87/62/album/tdyt10.png" /><img src="http://r19.imgfast.net/users/1911/13/87/62/album/th/tdyt_s10.png" />

Unknown end tag for &lt;/a&gt;


<!-- END switch_user_logged_out -->
<!-- BEGIN switch_user_logged_in -->
<a onmouseover="showtip('<font size=5>GỬI THÔNG ĐIỆP - CLICK !!</font><br>Chỉ dành cho thành viên có <font color=#FF5F5F>nick màu</font> hoặc <font color=#C2FFAF>trên 15 bài viết</font>');" onmouseout="hidetip();" id="TDYTCFviet" href="HTML thông điệp"><img src="http://r19.imgfast.net/users/1911/13/87/62/album/tdyt10.png" /><img src="http://r19.imgfast.net/users/1911/13/87/62/album/th/tdyt_s10.png" />

Unknown end tag for &lt;/a&gt;


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


<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="left" valign="top"><img src="http://i20.servimg.com/u/f20/14/50/49/34/duoi_l10.gif" alt=" " border="0">

Unknown end tag for &lt;/td&gt;

<td style="background-image: url(http://i20.servimg.com/u/f20/14/50/49/34/duoi_b10.gif);" width="100%">

Unknown end tag for &lt;/td&gt;

<td align="right" valign="top"><img src="http://i20.servimg.com/u/f20/14/50/49/34/duoi_r13.gif" alt=" " border="0">

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



```
Thay link trang HTML thông điệp (tạo ở bước 2) và HTML đăng nhập (tạo ở bước 3) vào trong code.