Version cho nó Hot thôi chứ mình chế lại từ các bản trước
Vào vấn đề luôn nhé


Thông tin về sản phẩm.
- Đc viết bởi Việt K - C3zone.
- Fix lỗi và phát triển thêm bởi ܓܨܓMxTrường, thanggtn và Super Ròm™ - www.9xstudio.biz

Bonus:
- Không chuyển trang
- Đẹp
- Dùng Emoticon vaf Ẩn Emoticon trực tiếp.

Hướng dẫn:

> Vào widget: Đưa cái News_lên đầu tiên nhé_



Style 1
- Demo:
![http://i43.servimg.com/u/f43/16/03/04/56/tdyt9x10.png](http://i43.servimg.com/u/f43/16/03/04/56/tdyt9x10.png)


Bước 1. Vào ACP >> Display >> Portal >> Thay toàn bộ Mod\_News bằng :

```


<div class="boxFMvi main">
<img src="http://i43.servimg.com/u/f43/16/03/04/56/tdyt10.png">
<p style="margin-top:-40px">
<table cellpadding="0" cellspacing="0" style="height:40px; background: url(http://i43.servimg.com/u/f43/16/03/04/56/untitl17.png)" width="848px">
<tbody><tr>
<td width="177" valign="middle">

Unknown end tag for &lt;/td&gt;


<td width="500" valign="middle"><marquee behavior="scroll" onMouseOver="this.stop()" onMouseOut="this.start()" scrollamount="1" scrolldelay="20" direction="left" truespeed="truespeed">

<!-- BEGIN post_row --><span onmouseover="show_tooltip(this,this.getElementsByTagName('div')[0].innerHTML,'Thông Báo');"
onmouseout="hidetip();" style="color:#2F2F2F; font-size:11px"><b><span class="gensmall" style="font-size: 9pt"  ><b>{post_row.POSTER}

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/span&gt;

 

Unknown end tag for &lt;/b&gt;

 <span style="font-size: 9pt">nhắn với

Unknown end tag for &lt;/span&gt;

 <span style="color:#FF009A;font-weight:bold;font-size: 9pt">{post_row.TITLE}

Unknown end tag for &lt;/span&gt;

<div style="display: none;"> gửi vào lúc {post_row.TIME} ...

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/span&gt;

: <span class="lovemes" style="font-size: 9pt"><font color="blue">{post_row.TEXT}

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/span&gt;

<span style="padding: 0px 40px">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;

<!-- END post_row -->


Unknown end tag for &lt;/marquee&gt;




Unknown end tag for &lt;/td&gt;


<td width="171">

<span  onmouseover="show_tooltip(this, 'Bấm vào đây để gửi thông điệp', 'Thông báo');" onMouseOut="hidetip();" class='thongbao' style="cursor: pointer;">

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="margin-top:-2px;"><b>Gửi thông điệp ♥

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



<div style="display:none">
<!-- BEGIN switch_user_logged_out -->
<div id='noidungne' style='padding:10px; overflow:hidden;'>
<table width="100%" border="0" cellspacing="1" cellpadding="0">
<tr>
<td class="starsTitle" height="25">
<span class="genmed module-title"><center>Bạn phải đăng nhập để gửi Thông điệp

Unknown end tag for &lt;/center&gt;



Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td>
<form action="/login" method="post">
<table align="center" width="100%" border="0" cellspacing="1" cellpadding="3">
<tr>
<td align="center" width="50%">
<span class="gen">Tài khoản:

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;


<td align="center" width="50%">
<span class="gen">Mật khẩu:

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td align="center" style="position:relative;padding-right:5px;">
<input type="text" name="username" value="" size="20" maxlength="40" style="width:100%;"
/>


Unknown end tag for &lt;/td&gt;


<td align="center" style="position:relative;padding-right:5px;">
<input type="password" name="password" size="20" maxlength="32" style="width:100%;">


Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr align="center">
<td colspan="2">
<span class="gen">Đăng nhập tự động mỗi khi truy cập:
<input type="checkbox" name="autologin"
checked="checked">


Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr align="center">
<td colspan="2"><br />
<input class="mainoption" type="submit" name="login" value="Đăng Nhập">


Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr align="center">
<td colspan="2">
<span class="gensmall">
<a class="gensmall" href="/profile?mode=sendpassword" rel="nofollow">:: Quên mật khẩu

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/form&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;


<!-- END switch_user_logged_out -->
<!-- BEGIN switch_user_logged_in -->
<div id='noidungne' style='padding:10px; overflow:hidden;'>
<form action="/post" method="post" name="post" onsubmit="return vB_Editor['text_editor'].prepare_submit(0,0);"
enctype="multipart/form-data">
<table width="100%" border="0" cellspacing="1" cellpadding="0">
<tbody>
<tr>
<td width="12%" nowrap="nowrap">
<span class="gen">
<b>Gửi đến :

Unknown end tag for &lt;/b&gt;




Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;


<td width="88%">
<table cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td width="60%">
<input class="post gen" style="width:200px; display:inline" type="text"
name="subject" value="Tất cả thành viên" onblur="if(this.value=='') this.value='Tất cả thành viên';"
onfocus="if(this.value=='Tất cả thành viên') this.value='';" size="45" maxlength="40"
tabindex="2" title="" onkeypress="if (event.keyCode==13){return false}">


Unknown end tag for &lt;/td&gt;



<td width="40%"><a onMouseOver="_tooltip(this, 'Chèn emoticon vào thông điệp, 'Thông báo');" onMouseOut="hidetip();" id="emoclik" style="font-size:10px" href="#emo"><b>Emoticon

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/a&gt;

<a onMouseOver="show_tooltip(this, 'Chèn emoticon vào thông điệp, 'Thông báo');" onMouseOut="hidetip();" id="emoclik2" style="font-size:10px;display:none;" href="#emo"><b>Ẩn Emo

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;



<td align="right" width="40">
<input onClick="set_solved(this.form.elements['subject'],'» '), dongtimo()" class="mainoption" style="float:right" type="submit" name="post" value="Gửi ..." tabindex="6" accesskey="s" />


Unknown end tag for &lt;/td&gt;





Unknown end tag for &lt;/tr&gt;



<tr>
<td>

Unknown end tag for &lt;/td&gt;





Unknown end tag for &lt;/tr&gt;







Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td nowrap="nowrap" valign="top"><p style="padding: 2px;">

Unknown end tag for &lt;/p&gt;

<span class="gen"><b>Lời nhắn :

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/span&gt;

<br>

Unknown end tag for &lt;/td&gt;

<br />
<td valign="top"><p style="padding: 2px;">

Unknown end tag for &lt;/p&gt;

<textarea id="c3z_lovemess" class="gen" style="width: 100%; height: 100px; display: inline;" onClick="storeCaret(this)" onKeyUp="storeCaret(this)" name="message" rows="1" cols="35" tabindex="3" onSelect="storeCaret(this)" wrap="virtual">

Unknown end tag for &lt;/textarea&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td>

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td id="security">

Unknown end tag for &lt;/td&gt;


<td><div id="xong" style="width: 100%; height: auto; margin-top: 6px; display: block;"> 

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;


<b>
<input type="hidden" name="lt" value="0">
<input type="hidden" name="mode" value="newtopic">
<input type="hidden" name="f" value="18">


Unknown end tag for &lt;/b&gt;




Unknown end tag for &lt;/form&gt;




Unknown end tag for &lt;/div&gt;



<!-- END switch_user_logged_in -->



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/p&gt;



<script>
jQuery("#emoclik").click(function(){
jQuery(this).hide();
jQuery("#emoclik2").show();
jQuery("#c3z_lovemess").animate({
height:"-=50"
},2000);
jQuery.ajax({
type:"POST",
url:"/h23-",
success:function(emo){
jQuery("#xong").html(emo).show("slow");}
});
});
jQuery("#emoclik2").click(function(){
jQuery(this).hide();
jQuery("#emoclik").show();
jQuery("#c3z_lovemess").animate({
height:"+=50"
},2000);
jQuery.ajax({
type:"POST",
url:"/h23-",
success:function(emo){
jQuery("#xong").html(emo).hide("slow");}
});
});


Unknown end tag for &lt;/script&gt;


<script>
function dongtimo()
{var t=setTimeout("reloadgiumcon()",500);}
function reloadgiumcon()
{window.location.replace("http://9xstudio.biz")}
jQuery(document).ready(function () {
jQuery(".thongbao").colorbox({
width: "52%",
innerHeight: "175px",
title: 'Gửi Thông Điệp Yêu Thương',
inline: true,
href: "#noidungne",
onOpen: function () {
jQuery("#security").load("/post?f=18&mode=newtopic input[name^=auth]");
}

});});



Unknown end tag for &lt;/script&gt;




Unknown end tag for &lt;/div&gt;


<style type="text/css">
@charset "utf-8";
.lovemes table, .lovemes div, .lovemes hr, .lovemes br, .lovemes embed{display:none!important}
.lovemes {font-weight:bold; font-size:11px}
.lovemes img {vertical-align: middle; max-height:30px}
#colorbox,#cboxOverlay,#cboxWrapper{position:absolute;top:0;left:0;z-index: 999;overflow:hidden;}
#cboxOverlay{position:fixed;width:100%;height:100%;background:url(http://a.imageshack.us/img155/3050/47551978.jpg);}#cboxMiddleLeft,#cboxBottomLeft{clear:left;}#cboxContent{position:relative;background:#fff;overflow:visible;}#cboxLoadedContent{overflow:auto;margin-bottom:5px;}#cboxTitle{position:absolute;bottom:-25px;left:0;text-align:center;width:100%;font-weight:700;color:#7C7C7C;margin:0;}#cboxLoadingOverlay,#cboxLoadingGraphic{position:absolute;top:0;left:0;width:100%;}#cboxPrevious,#cboxNext,#cboxClose,#cboxSlideshow{cursor:pointer;position:absolute;bottom:-29px;background:url(http://i20.servimg.com/u/f20/15/90/59/25/contro26.png) no-repeat 0 0;width:23px;height:23px;text-indent:-9999px;}.cboxPhoto{float:left;border:0;display:block;margin:auto;}.cboxIframe{width:100%;height:100%;display:block;border:0;}#cboxTopLeft{width:14px;height:14px;background:url(http://i20.servimg.com/u/f20/15/90/59/25/contro27.png) no-repeat 0 0;}#cboxTopCenter{height:14px;background:url(http://i20.servimg.com/u/f20/15/90/59/25/border23.png) repeat-x top left;}#cboxTopRight{width:14px;height:14px;background:url(http://i20.servimg.com/u/f20/15/90/59/25/contro28.png) no-repeat -36px 0;}#cboxBottomLeft{width:14px;height:43px;background:url(http://i20.servimg.com/u/f20/15/90/59/25/contro29.png) no-repeat 0 -32px;}#cboxBottomCenter{height:43px;background:url(http://i20.servimg.com/u/f20/15/90/59/25/border24.png) repeat-x bottom left;}#cboxBottomRight{width:14px;height:43px;background:url(http://i20.servimg.com/u/f20/15/90/59/25/contro30.png) no-repeat -36px -32px;}#cboxMiddleLeft{width:14px;background:url(http://i20.servimg.com/u/f20/15/90/59/25/contro30.png) repeat-y -175px 0;}#cboxMiddleRight{width:14px;background:url(http://i20.servimg.com/u/f20/15/90/59/25/contro30.png) repeat-y -211px 0;}#cboxLoadingOverlay{background:url(http://i20.servimg.com/u/f20/14/50/49/34/loadin10.png) no-repeat center center;}#cboxLoadingGraphic{background:url(http://i20.servimg.com/u/f20/15/90/59/25/loadin12.gif) no-repeat center center;}#cboxCurrent{position:absolute;bottom:-25px;left:58px;font-weight:700;color:#7C7C7C;}#cboxPrevious{left:0;background-position:-51px -25px;}#cboxPrevious.hover{background-position:-51px 0;}#cboxNext{left:27px;background-position:-75px -25px;}#cboxNext.hover{background-position:-75px 0;}#cboxClose{right:0;background-position:-100px -25px;}#cboxClose.hover{background-position:-100px 0;}.cboxSlideshow_on #cboxSlideshow{background-position:-125px 0;right:27px;}.cboxSlideshow_on #cboxSlideshow.hover{background-position:-150px 0;}.cboxSlideshow_off #cboxSlideshow{background-position:-150px -25px;right:27px;}.cboxSlideshow_off #cboxSlideshow.hover{background-position:-125px 0;}


Unknown end tag for &lt;/style&gt;


<script src="http://www.jacklmoore.com/colorbox/colorbox/jquery.colorbox.js">

Unknown end tag for &lt;/script&gt;



<div id="left" class="boxfmvi main">
<div class="main-head">
<div class="page-title">
<h2>Tình hình diễn đàn

Unknown end tag for &lt;/h2&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div class="main-content">
<!-- 

Unknown end tag for &lt;/td&gt;




```

Style 2
- Demo:
+ Online: http://www.9xstudio.biz
+ Images:
![http://i43.servimg.com/u/f43/16/03/04/56/tdyt9x11.png](http://i43.servimg.com/u/f43/16/03/04/56/tdyt9x11.png)

Hướng dẫn

Bước 1. Vào ACP >> Display >> Portal >> Thay toàn bộ Mod\_News bằng :

```


<div class="boxFMvi main">
<div style="background:url(http://i43.servimg.com/u/f43/16/03/04/56/love_m10.png) no-repeat;height:80px;position:relative;"><marquee behavior="scroll" onMouseOver="this.stop()" onMouseOut="this.start()" scrollamount="1" scrolldelay="15" direction="left" truespeed="truespeed" style="width: 636px;float: left;position: absolute;top: 17px;left: 20px;"><!-- BEGIN post_row --><span onmouseover="show_tooltip(this,this.getElementsByTagName('div')[0].innerHTML,'Thông Báo');"
onmouseout="hidetip();" style="color:#2F2F2F; font-size:11px"><b><span class="gensmall" style="font-size: 9pt"  ><b>{post_row.POSTER}

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/span&gt;

 

Unknown end tag for &lt;/b&gt;

 <span style="font-size: 9pt">nhắn với

Unknown end tag for &lt;/span&gt;

 <span style="color:#FF009A;font-weight:bold;font-size: 9pt">{post_row.TITLE}

Unknown end tag for &lt;/span&gt;

<div style="display: none;"> gửi vào lúc {post_row.TIME} ...

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/span&gt;

: <span class="lovemes" style="font-size: 9pt"><font color="blue">{post_row.TEXT}

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/span&gt;

<span style="padding: 0px 40px">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;

<!-- END post_row -->

Unknown end tag for &lt;/marquee&gt;


<span  onmouseover="show_tooltip(this, 'Bấm vào đây để gửi thông điệp', 'Thông báo');" onMouseOut="hidetip();" class='thongbao' style="cursor: pointer;">
<img src="http://i43.servimg.com/u/f43/16/03/04/56/msvta10.png" style="float:left;position:absolute;bottom:0px;left:0px;border:0" >

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div style="display:none">
<!-- BEGIN switch_user_logged_out -->
<div id='noidungne' style='padding:10px; overflow:hidden;'>
<table width="100%" border="0" cellspacing="1" cellpadding="0">
<tr>
<td class="starsTitle" height="25">
<span class="genmed module-title"><center>Bạn phải đăng nhập để gửi Thông điệp

Unknown end tag for &lt;/center&gt;



Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td>
<form action="/login" method="post">
<table align="center" width="100%" border="0" cellspacing="1" cellpadding="3">
<tr>
<td align="center" width="50%">
<span class="gen">Tài khoản:

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;


<td align="center" width="50%">
<span class="gen">Mật khẩu:

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td align="center" style="position:relative;padding-right:5px;">
<input type="text" name="username" value="" size="20" maxlength="40" style="width:100%;"
/>


Unknown end tag for &lt;/td&gt;


<td align="center" style="position:relative;padding-right:5px;">
<input type="password" name="password" size="20" maxlength="32" style="width:100%;">


Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr align="center">
<td colspan="2">
<span class="gen">Đăng nhập tự động mỗi khi truy cập:
<input type="checkbox" name="autologin"
checked="checked">


Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr align="center">
<td colspan="2"><br />
<input class="mainoption" type="submit" name="login" value="Đăng Nhập">


Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr align="center">
<td colspan="2">
<span class="gensmall">
<a class="gensmall" href="/profile?mode=sendpassword" rel="nofollow">:: Quên mật khẩu

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/form&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;


<!-- END switch_user_logged_out -->
<!-- BEGIN switch_user_logged_in -->
<div id='noidungne' style='padding:10px; overflow:hidden;'>
<form action="/post" method="post" name="post" onsubmit="return vB_Editor['text_editor'].prepare_submit(0,0);"
enctype="multipart/form-data">
<table width="100%" border="0" cellspacing="1" cellpadding="0">
<tbody>
<tr>
<td width="12%" nowrap="nowrap">
<span class="gen">
<b>Gửi đến :

Unknown end tag for &lt;/b&gt;




Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;


<td width="88%">
<table cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td width="60%">
<input class="post gen" style="width:200px; display:inline" type="text"
name="subject" value="Tất cả thành viên" onblur="if(this.value=='') this.value='Tất cả thành viên';"
onfocus="if(this.value=='Tất cả thành viên') this.value='';" size="45" maxlength="40"
tabindex="2" title="" onkeypress="if (event.keyCode==13){return false}">


Unknown end tag for &lt;/td&gt;



<td width="40%"><a onMouseOver="_tooltip(this, 'Chèn emoticon vào thông điệp, 'Thông báo');" onMouseOut="hidetip();" id="emoclik" style="font-size:10px" href="#emo"><b>Emoticon

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/a&gt;

<a onMouseOver="show_tooltip(this, 'Chèn emoticon vào thông điệp, 'Thông báo');" onMouseOut="hidetip();" id="emoclik2" style="font-size:10px;display:none;" href="#emo"><b>Ẩn Emo

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;



<td align="right" width="40">
<input onClick="set_solved(this.form.elements['subject'],'» '), dongtimo()" class="mainoption" style="float:right" type="submit" name="post" value="Gửi ..." tabindex="6" accesskey="s" />


Unknown end tag for &lt;/td&gt;





Unknown end tag for &lt;/tr&gt;



<tr>
<td>

Unknown end tag for &lt;/td&gt;





Unknown end tag for &lt;/tr&gt;







Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td nowrap="nowrap" valign="top"><p style="padding: 2px;">

Unknown end tag for &lt;/p&gt;

<span class="gen"><b>Lời nhắn :

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/span&gt;

<br>

Unknown end tag for &lt;/td&gt;

<br />
<td valign="top"><p style="padding: 2px;">

Unknown end tag for &lt;/p&gt;

<textarea id="c3z_lovemess" class="gen" style="width: 100%; height: 100px; display: inline;" onClick="storeCaret(this)" onKeyUp="storeCaret(this)" name="message" rows="1" cols="35" tabindex="3" onSelect="storeCaret(this)" wrap="virtual">

Unknown end tag for &lt;/textarea&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td>

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td id="security">

Unknown end tag for &lt;/td&gt;


<td><div id="xong" style="width: 100%; height: auto; margin-top: 6px; display: block;"> 

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;


<b>
<input type="hidden" name="lt" value="0">
<input type="hidden" name="mode" value="newtopic">
<input type="hidden" name="f" value="18">


Unknown end tag for &lt;/b&gt;




Unknown end tag for &lt;/form&gt;




Unknown end tag for &lt;/div&gt;



<!-- END switch_user_logged_in -->

<style type="text/css">
@charset "utf-8";
.lovemes table, .lovemes div, .lovemes hr, .lovemes br, .lovemes embed{display:none!important}
.lovemes {font-weight:bold; font-size:11px}
.lovemes img {vertical-align: middle; max-height:30px}


Unknown end tag for &lt;/style&gt;


<script>
jQuery("#emoclik").click(function(){
jQuery(this).hide();
jQuery("#emoclik2").show();
jQuery("#c3z_lovemess").animate({
height:"-=50"
},2000);
jQuery.ajax({
type:"POST",
url:"/h23-",
success:function(emo){
jQuery("#xong").html(emo).show("slow");}
});
});
jQuery("#emoclik2").click(function(){
jQuery(this).hide();
jQuery("#emoclik").show();
jQuery("#c3z_lovemess").animate({
height:"+=50"
},2000);
jQuery.ajax({
type:"POST",
url:"/h23-",
success:function(emo){
jQuery("#xong").html(emo).hide("slow");}
});
});


Unknown end tag for &lt;/script&gt;


<script>
function dongtimo()
{var t=setTimeout("reloadgiumcon()",500);}
function reloadgiumcon()
{window.location.replace("http://9xstudio.biz")}
jQuery(document).ready(function () {
jQuery(".thongbao").colorbox({
width: "52%",
innerHeight: "175px",
title: 'Gửi Thông Điệp Yêu Thương',
inline: true,
href: "#noidungne",
onOpen: function () {
jQuery("#security").load("/post?f=18&mode=newtopic input[name^=auth]");
}

});});



Unknown end tag for &lt;/script&gt;



<style type="text/css">
@charset "utf-8";
.lovemes table, .lovemes div, .lovemes hr, .lovemes br, .lovemes embed{display:none!important}
.lovemes {font-weight:bold; font-size:11px}
.lovemes img {vertical-align: middle; max-height:30px}
#colorbox,#cboxOverlay,#cboxWrapper{position:absolute;top:0;left:0;z-index: 999;overflow:hidden;}
#cboxOverlay{position:fixed;width:100%;height:100%;background:url(http://a.imageshack.us/img155/3050/47551978.jpg);}#cboxMiddleLeft,#cboxBottomLeft{clear:left;}#cboxContent{position:relative;background:#fff;overflow:visible;}#cboxLoadedContent{overflow:auto;margin-bottom:5px;}#cboxTitle{position:absolute;bottom:-25px;left:0;text-align:center;width:100%;font-weight:700;color:#7C7C7C;margin:0;}#cboxLoadingOverlay,#cboxLoadingGraphic{position:absolute;top:0;left:0;width:100%;}#cboxPrevious,#cboxNext,#cboxClose,#cboxSlideshow{cursor:pointer;position:absolute;bottom:-29px;background:url(http://i20.servimg.com/u/f20/15/90/59/25/contro26.png) no-repeat 0 0;width:23px;height:23px;text-indent:-9999px;}.cboxPhoto{float:left;border:0;display:block;margin:auto;}.cboxIframe{width:100%;height:100%;display:block;border:0;}#cboxTopLeft{width:14px;height:14px;background:url(http://i20.servimg.com/u/f20/15/90/59/25/contro27.png) no-repeat 0 0;}#cboxTopCenter{height:14px;background:url(http://i20.servimg.com/u/f20/15/90/59/25/border23.png) repeat-x top left;}#cboxTopRight{width:14px;height:14px;background:url(http://i20.servimg.com/u/f20/15/90/59/25/contro28.png) no-repeat -36px 0;}#cboxBottomLeft{width:14px;height:43px;background:url(http://i20.servimg.com/u/f20/15/90/59/25/contro29.png) no-repeat 0 -32px;}#cboxBottomCenter{height:43px;background:url(http://i20.servimg.com/u/f20/15/90/59/25/border24.png) repeat-x bottom left;}#cboxBottomRight{width:14px;height:43px;background:url(http://i20.servimg.com/u/f20/15/90/59/25/contro30.png) no-repeat -36px -32px;}#cboxMiddleLeft{width:14px;background:url(http://i20.servimg.com/u/f20/15/90/59/25/contro30.png) repeat-y -175px 0;}#cboxMiddleRight{width:14px;background:url(http://i20.servimg.com/u/f20/15/90/59/25/contro30.png) repeat-y -211px 0;}#cboxLoadingOverlay{background:url(http://i20.servimg.com/u/f20/14/50/49/34/loadin10.png) no-repeat center center;}#cboxLoadingGraphic{background:url(http://i20.servimg.com/u/f20/15/90/59/25/loadin12.gif) no-repeat center center;}#cboxCurrent{position:absolute;bottom:-25px;left:58px;font-weight:700;color:#7C7C7C;}#cboxPrevious{left:0;background-position:-51px -25px;}#cboxPrevious.hover{background-position:-51px 0;}#cboxNext{left:27px;background-position:-75px -25px;}#cboxNext.hover{background-position:-75px 0;}#cboxClose{right:0;background-position:-100px -25px;}#cboxClose.hover{background-position:-100px 0;}.cboxSlideshow_on #cboxSlideshow{background-position:-125px 0;right:27px;}.cboxSlideshow_on #cboxSlideshow.hover{background-position:-150px 0;}.cboxSlideshow_off #cboxSlideshow{background-position:-150px -25px;right:27px;}.cboxSlideshow_off #cboxSlideshow.hover{background-position:-125px 0;}


Unknown end tag for &lt;/style&gt;


<script src="http://www.jacklmoore.com/colorbox/colorbox/jquery.colorbox.js">

Unknown end tag for &lt;/script&gt;



<div id="left" class="boxfmvi main">
<div class="main-head">
<div class="page-title">
<h2>Tình hình diễn đàn

Unknown end tag for &lt;/h2&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div class="main-content">
<!-- 

Unknown end tag for &lt;/td&gt;




```


- Tìm trong Mod\_News:

```


<input type="hidden" name="f" value="18"> và jQuery("#security").load("/post?f=18&mode=newtopic input[name^=auth]");

```

- Thay số 18 bằng số ở box thông điệp yêu thương bạn đã tạo.


Bước 2: Vào ACP >> Display >> Portal >> Mod\_recent\_topics thêm phía trên cùng đoạn sau:

```


-->

```

Bước 3: Vào ACP >> Display >> Templates >> Quản lý tổng thể >> Index\_body tìm đoạn sau và xoá đi.

```


<div id="left" class="boxfmvi main">
<div class="main-head">
<div class="page-title">
<h2>Tình hình diễn đàn

Unknown end tag for &lt;/h2&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div class="main-content">

```

Bước 4: Lấy emoticon:
- Truy cập

```


http://link forum bạn/smilies.forum?mode=smilies_frame
```


- Viewsource toàn bộ cho vào 1 trang html

- Lấy cái link dẫn trang html vừa tạo thay cho

```


/h23-
```
ở trong Mod\_News

-Cái link để khi gửi nó không chuyển trang sửa lại thành link forum bạn.

- Latest topic của FMVi đã tích hợp sẵn cái ẩn những bài viết có dấu >> nên mình không hướng dẫn cái đó nữa nhé.

Publish và thưởng thức

Trên đây là hướng dẫn sơ bộ về cách sử dụng Mod\_News để làm thông điệp yêu thương.
Có thắc mắc gì vui lòng để lại câu hỏi của bạn ở dưới có thời gian mình sẽ giải đáp.
Về cái style lúc nào rãnh sẽ làm thêm 1 số style nữa
Nếu các bạn quan tâm thì qua forum mình đóng góp dùm mình 1 số bài viết là được rồi
Cảm ơn các bạn!