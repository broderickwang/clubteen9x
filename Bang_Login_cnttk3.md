Demo ảnh :


![http://i48.servimg.com/u/f48/16/58/45/96/133.jpg](http://i48.servimg.com/u/f48/16/58/45/96/133.jpg)



Cách làm :
![http://i48.servimg.com/u/f48/16/58/45/96/222.jpg](http://i48.servimg.com/u/f48/16/58/45/96/222.jpg)



Bước 1 : Vào overall\_header tìm code :

```



Unknown end tag for &lt;/head&gt;



```

Cho đoạn code sau vào sau nó

```

<!-- BEGIN switch_user_logged_out -->
<div id="_panel" style="display: none; height: 214px;">
<script type="text/javascript">//<![CDATA[
$(function(){$('#signin').attr('action','/login?redirect='+this.location.pathname);});//]]>

Unknown end tag for &lt;/script&gt;


<form action="/login?redirect=/" method="post" name="form_login" id="signin">

<div class="_Scanu_container">

<table>
<tbody><tr>
<td style="padding: 5px;">
Tên đăng nhập:


Unknown end tag for &lt;/td&gt;


<td style="padding: 5px;">
<input name="username" type="text" class="_input_text">


Unknown end tag for &lt;/td&gt;


<td style="padding: 8px;">



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>





Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;



<tr>
<td style="padding: 5px;">
Mật khẩu:


Unknown end tag for &lt;/td&gt;


<td style="padding: 5px;">
<li>
<input name="password" type="password" style="margin-top: 5px; display: inline-block;" class="_input_text" id="_scanu_password">





Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td style="padding: 5px;">

Unknown end tag for &lt;/td&gt;


<td style="padding: 5px;">





<input type="submit" id="_login_button" class="_scanu_button" name="login"  value="Ðăng nhập">

<label class="_stay_logged"><input type="checkbox" name="cookieuser" checked="checked"> Lưu mật khẩu


Unknown end tag for &lt;/label&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



<input type="hidden" name="securitytoken" value="guest">


Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/form&gt;







Unknown end tag for &lt;/div&gt;


<div id="_open_close_button">
<h3 class="_toggle">
<a id="_open" href="javascript:void(0)" style="display: inline;">Đăng nhập

Unknown end tag for &lt;/a&gt;


<a id="_close" style="display: none;" href="javascript:void(0)">Đóng lại

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/h3&gt;




Unknown end tag for &lt;/div&gt;


<!-- END switch_user_logged_out -->



<link href="https://dl.dropbox.com/u/57978077/%C4%90%C4%83ng%20nh%E1%BA%ADp%20Cntt-k3/Lightbox.css" type="text/css" rel="stylesheet">
<script src="https://dl.dropbox.com/u/57978077/%C4%90%C4%83ng%20nh%E1%BA%ADp%20Cntt-k3/vf.login.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;





```


Bước 2 : Vào css thêm đoạn này vào :


```

html, body, ul, ol, form, blockquote, dl, dd, img, h1, h2, h4, h5, h6, img {
margin: 0;
padding: 0;
list-style: none;
border: none;
}

#_panel {
display: none;
background: url(http://am4v.net/@forum/images/restart/xfloginbg.png);
color: #ffffff;
font-family: litios;
font-size: 20px;
margin-bottom: 0px;
}
._Scanu_container {
margin:auto auto;
padding: 20px;
width: 600px;
}
#_panel a:link, #_panel a:visited, #_panel a:hover, #_panel a:active {

color: #65a5d1;
text-decoration: none;

}

._input_text {
background: #021f33;
-moz-border-radius: 5px;
-webkit-border-radius: 5px;
color: #65a5d1;
box-shadow: inset 3px 3px 6px #01121f, 1px 1px 1px #04395e;
border: none;
height: 28px;
width: 230px;
padding-left: 8px;
font-size:8pt;
}

._input_text:focus{
outline: none;
}

._scanu_button {
background: #021f33;
-moz-border-radius: 5px;
-webkit-border-radius: 5px;
color: #65a5d1;
box-shadow: 2px 2px 6px #01121f, inset 3px 3px 10px #04395e;
border: none;
padding: 5px;
margin-right: 10px;
cursor: pointer;
font-size:8pt;
}

._scanu_button:active {
box-shadow: inset 3px 3px 6px #01121f,  1px 1px 1px #04395e;
}

#_open_close_button{
position: relative;
z-index: 1;
margin-bottom: 0px;
}

#_open_close_button ._toggle {
font-size: 16px;
font-family: litios;
color: #CC0000;
background: url(http://am4v.net/@forum/images/misc/loginbg.png);
text-decoration: none;
padding: 0 5px;
margin-right: 20px;
border-bottom-right-radius: 10px;
-webkit-border-bottom-right-radius: 10px;
-moz-border-radius-bottomright: 10px;
-khtmlborder-bottom-right-radius: 10px;
border-bottom-left-radius: 10px;
-webkit-border-bottom-left-radius: 10px;
-moz-border-radius-bottomleft: 10px;
-khtml-border-bottom-left-radius: 10px;
position: absolute;
right: 0px;
bottom: -28px;
text-align: center;
z-index: 1;
line-height: 25px;
box-shadow: 0px 2px 5px #606060;
-webkit-box-shadow: 0px 2px 5px #606060;
-moz-box-shadow: 0px 2px 5px #606060;
-khtml-box-shadow: 0px 2px 5px #606060;
width: 140px;
border-bottom: solid 1px #ffffff;
border-left: solid 1px #ffffff;
border-right: solid 1px #ffffff;
}

#_open_close_button ._toggle a {
font-size: 16px;
font-family: litios;
color: #CC0000;
text-decoration: none;
}
```


Bước 3 : Vào : MODULES >> HTML & JAVASCRIPT
Javascript codes management >> Add a Javascript Code
Title **: Đăng nhập đóng mở
Placement : In all the pages
Javascript Code** :

```

$(document).ready(function(){$("#_open").click(function(){$("div#_panel").slideDown("fast");$("#_panel").animate({"height":"+=10px"},"fast");$("#_panel").animate({"height":"-=10px"},"fast");$(".everything").animate({opacity:0.17},"fast");$(".everything").addClass("blur")});$("#_close").click(function(){$("div#_panel").slideUp("fast");$(".everything").removeClass("blur");$(".everything").animate({opacity:1},"fast")});$("._toggle a").click(function(){$("._toggle a").toggle()});$("._hide").change(function(){$("#_scanu_password,._lostPassword").slideUp("fast");$("._stay_logged").fadeOut("fast");$("#_panel").animate({"height":"-=52px"},"fast");$("#_register_button").show();$("#_login_button").hide();document.reg_log.action="register.php";$("#1").attr("name","");$("#2").attr("name","");$("#3").attr("name","");$("#4").attr("name","")});$("._show").change(function(){$("#_scanu_password,._lostPassword").slideDown("fast");$("._stay_logged").fadeIn("fast");$("#_panel").animate({"height":"+=52px"},"fast");$("#_register_button").hide();$("#_login_button").show();document.reg_log.action="login.php?do=login";$("#1").attr("name","s");$("#2").attr("name","do");$("#3").attr("name","vb_login_md5password");$("#4").attr("name","vb_login_md5password_utf")})});if(navigator.userAgent.toLowerCase().indexOf("chrome")>=0){$(window).load(function(){$('input:-webkit-autofill').each(function(){var text=$(this).val();var name=$(this).attr('name');$(this).after(this.outerHTML).remove();$('input[name='+name+']').val(text)})})}

```

Thế là xong ^^

```
/*===========================================*\
|| ######################################### ||
|| # --------------Cntt-k3---------------- # ||
|| # -------------Cntt-k3.Org------------- # ||
|| # ---------Công nghê thông tin -------- # ||
|| # ---------- Chia se niem vui---------- # ||
|| ######################################### ||
\*===========================================*/

*{margin: 0;padding: 0;}
#vf_screen{
position: fixed;
width: 100%;height: 100%;
top:0;left: 0;
background: #000;
opacity: 0.50;
filter:alpha(opacity=50);
z-index: 9995;
display: none;
}
.vf-clickLogin{
cursor: pointer;
}
#but_login{
position: fixed;
width: 25px;height: 75px;
background: url('http://am4v.net/@forum/lightbox/login.png');
right: 0;top:100px;
z-index: 9994;
}
#vf_box_login{
position: fixed;
background: url(http://am4v.net/@forum/lightbox/bg_box.png);
z-index: 9998;color: #333;
border-radius: 5px;
display: none;
}
#vf_box_login>div:first-child{
background: #fff;
margin: 8px;
}
#vf_box_login>div h3{
color: #fff;height: 30px;
font-weight: bold;line-height: 30px;
text-indent: 30px;
background: #0088CC url(http://am4v.net/@forum/lightbox/login.png) no-repeat 5px center;
}
#vf_box_login>div>p{
background: #D5EFFB;
padding: 4px 5px;
margin-top: 5px;
}
#vf_box_login form p{
margin: 5px 8px;
overflow: hidden;
}
#vf_box_login form p input{
width: 230px;
height: 20px;
border: 1px solid #A4B2C3;
margin-right: 5px;
padding: 2px 5px;
-webkit-border-radius: 2px;
font-family: tahoma;
font-size: 9pt;
}

.box_alert_close{
position: absolute;right: 12px;top:11px;
width: 23px;height: 22px;
background: url(http://am4v.net/@forum/lightbox/close.gif) bottom no-repeat;
}
.box_alert_close:hover{
background-position: top ;
cursor: pointer;
}
/*login*/
#vf_box_login>div>p a{
color: #0088CC;
font-weight: bold;
text-decoration: none;
}
#vf_box_login>div>p a:hover{
text-decoration: underline;
}
#vf_box_login form>a{
color: #0D6AA9;
font-size: 14px;
text-decoration: none;
}
#vf_box_login form>a:hover{
color: #ff6000;
}

.input_login{
width: 200px;
height: 20px;
border: 1px solid #A4B2C3;
margin: 0px 35px 0px 0px;
padding: 2px 5px;
-webkit-border-radius: 2px;
font-family: tahoma;
font-size: 9pt;
}

.bottom_login { border: 1px solid #187abd; background: url(http://am4v.net/@forum/lightbox/input.gif) repeat-x 0px -30px; padding: 6px 9px; color: #FFF; font-weight: bold; cursor: pointer;text-shadow: 0 1px 0 #2C4566;-moz-border-radius: 0px;-webkit-border-radius: 0px;}
.bottom_login:hover{ color: #fff; background:url(http://am4v.net/@forum/lightbox/input.gif) repeat-x top; border: 1px solid #26445f; text-decoration: none;}

.login_bottom_boxy {text-align: center; background:#f2f2f2; padding: 10px;}


.bottom_close { border: 1px solid #187abd; background: url(http://am4v.net/@forum/lightbox/input.gif) repeat-x 0px -30px; padding: 6px 9px; color: #FFF; font-weight: bold; cursor: pointer;text-shadow: 0 1px 0 #2C4566;-moz-border-radius: 0px;-webkit-border-radius: 0px;}
.bottom_close:hover{ color: #fff; background:url(http://am4v.net/@forum/lightbox/input.gif) repeat-x top; border: 1px solid #26445f; text-decoration: none;}```


```
/*===========================================*\
|| ######################################### ||
|| # --------------Cntt-k3---------------- # ||
|| # -------------Cntt-k3.Org------------- # ||
|| # ---------Công nghê thông tin -------- # ||
|| # ---------- Chia se niem vui---------- # ||
|| ######################################### ||
\*===========================================*/

$(function(){
$('body').append('<div class="vf-clickLogin">

Unknown end tag for &lt;/div&gt;

<div id="vf_screen">

Unknown end tag for &lt;/div&gt;

'+
'<div id="vf_box_login">'+
'<div>'+
'<h3>Đăng nhập

Unknown end tag for &lt;/h3&gt;

'+
'<form onsubmit="md5hash(vb_login_password, vb_login_md5password, vb_login_md5password_utf, 0)" method="post" action="login.php">'+
'<input name="vb_login_md5password" type="hidden" />'+
'<input name="s" type="hidden" value="" />'+
'<input name="do" type="hidden" value="login" /><br/>'+
'<table width="100%" border="0" cellpadding="0" cellspacing="5" style="border-collapse: separate; border-spacing: 5px;">'+
'<tr><td style="width: 90px;text-align: right;font-weight: bold;">Tài khoản

Unknown end tag for &lt;/td&gt;

<td><input class="input_login" type="text" value="" name="vb_login_username"/>

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

'+
'<tr><td style="width: 90px;text-align: right;font-weight: bold;">Mật khẩu

Unknown end tag for &lt;/td&gt;

<td><input class="input_login" type="password" value="" name="vb_login_password"/>

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

'+
'<tr><td colspan="2"><center><input type="checkbox" name="longtime" checked=""/> Ghi nhá»› | <a href="login.php?do=lostpw">Quên mật khẩu

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/center&gt;

<br/>

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

'+
'<tr><td colspan="2" class="login_bottom_boxy"><input class="bottom_login" type="submit" value="ÄÄƒng nháº­p" />   <input class="bottom_close" type="submit" value="Há»§y bá»" />

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

'+
'

Unknown end tag for &lt;/table&gt;

'+
'

Unknown end tag for &lt;/form&gt;

'+
'<div class="box_alert_close">

Unknown end tag for &lt;/div&gt;

'+
'

Unknown end tag for &lt;/div&gt;

'+
'

Unknown end tag for &lt;/div&gt;

'
)
$('.vf-clickLogin').live('click',function(){
$('#vf_screen').show()
$('#vf_box_login').fadeIn('fast')
return false
})

$('.box_alert_close').live('click',function(){
$('#vf_screen').hide()
$('#vf_box_login').fadeOut('fast')
return false
})

$('.bottom_close').live('click',function(){
$('#vf_screen').hide()
$('#vf_box_login').fadeOut('fast')
return false
})

$('*').keyup(function(event){
if(event.keyCode=='27'){
$('#vf_box_login').fadeOut('fast')
$('#vf_screen').hide()
}
})
//function center
center()
$(window).resize(function(){
center()
})
function center(){
var $wid=$(window).width()
var $hei=$(window).height()
var $boxLogin=$('#vf_box_login')
$boxLogin.css({'left':($wid-$boxLogin.width())/2,'top':($hei-$boxLogin.height())/2})
}
})```