Demo ảnh :

![http://i48.servimg.com/u/f48/16/58/45/96/133.jpg](http://i48.servimg.com/u/f48/16/58/45/96/133.jpg)

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



<link href="http://nhocpro9x.googlecode.com/files/Lightbox.css" type="text/css" rel="stylesheet">
<script src="http://nhocpro9x.googlecode.com/files/vf.login.js" type="text/javascript">

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
