![http://img208.imageshack.us/img208/6208/45747696.png](http://img208.imageshack.us/img208/6208/45747696.png)

Wedget

```


<!-- BEGIN switch_user_logged_out -->
<div id="rep-mail-bar">
<div id="toppanel">
<div id="panel" style="display: none; ">
<div class="content clearfix">
<div class="left">
<h1>Welcome to Cntt-k3

Unknown end tag for &lt;/h1&gt;


<h2>Hãy đăng ký và Đăng nhập để tham gia diễn đàn

Unknown end tag for &lt;/h2&gt;


<p class="grey">Diễn đàn hiển thị tốt nhất trên <a href="http://www.mozilla.com/en-US/products/download.html?product=firefox-3.0.10&os=win&lang=en-US" onmouseover="showtip('Tải Firefox ..!');" onmouseout="hidetip();" target="_blank"><img src="http://www.c3zone.net/users/2611/10/63/87/album/ff10.png">

Unknown end tag for &lt;/a&gt;

 và <a href="http://www.google.com/chrome?hl=vi" onmouseover="showtip('Tải Google Chrome ..!');" onmouseout="hidetip();" target="_blank"><img src="http://www.c3zone.net/users/2611/10/63/87/album/gc10.png">

Unknown end tag for &lt;/a&gt;

<br>với độ phân giải 1024x768 trở lên. <br>

Unknown end tag for &lt;/p&gt;





Unknown end tag for &lt;/div&gt;


<div class="left">

<form action="/login?redirect=/" method="post" name="form_login" id="login-vds">
<h1 class="padlock">Đăng nhập

Unknown end tag for &lt;/h1&gt;


<label class="grey" for="log">Tài khoản:

Unknown end tag for &lt;/label&gt;


<input class="field" id="log" type="text" size="10" name="username">
<label class="grey" for="pwd">Mật khẩu:

Unknown end tag for &lt;/label&gt;


<input class="field" id="pwd" type="password" size="10" name="password">
<input id="bt_login" class="bt_login" type="submit" name="login" value="Đăng nhập">
<label><input name="rememberme" id="rememberme" type="checkbox" checked="checked" value="forever">  Remember me

Unknown end tag for &lt;/label&gt;


<div class="clear">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/form&gt;


<script type="text/javascript">//<![CDATA[
$(function(){$('#login-vds').attr('action','/login?redirect='+this.location.pathname);});//]]>

Unknown end tag for &lt;/script&gt;






Unknown end tag for &lt;/div&gt;


<div class="left right">
<form action="/register?agreed=true&step=2" method="post">
<h1>Đăng ký nhanh !

Unknown end tag for &lt;/h1&gt;


<label class="grey" for="signup">Tên truy cập : *

Unknown end tag for &lt;/label&gt;


<input class="field" type="text" id="username_reg" name="username" value="" size="25" maxlength="25">
<label class="grey" for="email">Email:

Unknown end tag for &lt;/label&gt;


<input class="field" type="text" name="email" id="email" size="23">
<label class="grey" for="signup">Mật khẩu : *

Unknown end tag for &lt;/label&gt;


<input class="field" type="password" id="password_reg" name="password" value="" size="25" maxlength="25">
<input type="submit" name="submit" value="Đăng ký" class="bt_register">


Unknown end tag for &lt;/form&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;

 <!-- /login -->
<!-- The tab on top -->
<div class="tab">
<ul class="login">
<li class="left"> 

Unknown end tag for &lt;/li&gt;


<li>Chào bạn!

Unknown end tag for &lt;/li&gt;


<li class="sep">|

Unknown end tag for &lt;/li&gt;


<li id="toggle">
<a id="open" class="open" href="#" style="display: block; ">Đăng nhập | Đăng ký

Unknown end tag for &lt;/a&gt;


<a id="close" style="display: none; " class="close" href="#">Close | Đóng lại

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/li&gt;


<li class="right"> 

Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;

 <!-- / top -->



Unknown end tag for &lt;/div&gt;


<!-- END switch_user_logged_out -->
```


Cho có hiệu lực với Guest

Cho vào CSS:

```


/* CSS del Header */
#rep-mail-bar {
position: fixed;
top: 0;
left: 0;
z-index: 99;
height: 25px;
font-size: 11px;
width: 100%;
z-index: 999;
}
/* Panel Tab/button */
.tab {
background: url(http://i.imgur.com/fDQkE.png) repeat-x 0 0;
height: 22px;
position: relative;
top: 0;
z-index: 999;
}
.tab ul.login {
display: block;
position: relative;
float: right;
clear: right;
height: 42px;
width: auto;
font-weight: bold;
line-height: 42px;
margin: 0;
right: 150px;
color: white;
font-size: 80%;
text-align: center;
}
.tab ul.login li.left {
background: url(http://i.imgur.com/XwNu2.png) no-repeat left 0;
height: 42px;
width: 30px;
padding: 0;
margin: 0;
display: block;
float: left;
}
.tab ul.login li.right {
background: url(http://i.imgur.com/QmQzs.png) no-repeat left 0;
height: 42px;
width: 30px;
padding: 0;
margin: 0;
display: block;
float: left;
}
.tab ul.login li {
text-align: left;
padding: 0 6px;
display: block;
float: left;
height: 42px;
background: url(http://i.imgur.com/PAFBM.png) repeat-x 0 0;
}
.tab ul.login li a {
color: #15ADFF;
}
.tab ul.login li a:hover {
color: white;
}
.tab .sep {color:#414141}
.tab a.open, .tab a.close {
height: 20px;
line-height: 20px !important;
padding-left: 30px !important;
cursor: pointer;
display: block;
width: 100px;
position: relative;
top: 11px;
width: 120px;
}
.tab a.open {background: url(http://i.imgur.com/NWFec.png) no-repeat left 0;}
.tab a.close {background: url(http://i.imgur.com/GGiBD.png) no-repeat left 0;}
.tab a:hover.open {background: url(http://i.imgur.com/mboPc.png) no-repeat left -19px;}
.tab a:hover.close {background: url(http://i.imgur.com/xztqF.png) no-repeat left -19px;}
/* sliding panel */
#toppanel {
position: absolute;  /*Panel will overlap  content */
/*position: relative;*/  /*Panel will "push" the content down */
top: 0;
width: 100%;
z-index: 999;
text-align: center;
margin-left: auto;
margin-right: auto;
}
#panel {
width: 100%;
height: 210px;
color: #999999;
background: #272727;
overflow: hidden;
position: relative;
z-index: 3;
display: none;
}
#panel h1 {
font-size: 1.6em;
padding: 5px 0 10px;
margin: 0;
color: white;
}
#panel h2{
font-size: 1.2em;
padding: 10px 0 5px;
margin: 0;
color: white;
}
#panel p {
margin: 5px 0;
padding: 0;
}
#panel a {
text-decoration: none;
color: #15ADFF;
}
#panel a:hover {
color: white;
}
#panel a-lost-pwd {
display: block;
float: left;
}
#panel .content {
width: 960px;
margin: 0 auto;
padding-top: 15px;
text-align: left;
font-size: 0.85em;
}
#panel .content .left {
width: 280px;
float: left;
padding: 0 15px;
border-left: 1px solid #333;
}
#panel .content .right {
border-right: 1px solid #333;
}
#panel .content form {
margin: 0 0 10px 0;
}
#panel .content label {
float: left;
padding-top: 2px;
clear: both;
width: 280px;
display: block;
}
#panel .content input.field {
border: 1px #1A1A1A solid;
background: #414141;
margin-right: 5px;
margin-top: 4px;
width: 200px;
color: white;
height: 16px;
}
#panel .content input:focus.field {
background: #545454;
}
/* BUTTONS */
/* Login and Register buttons */
#panel .content input.bt_login,
#panel .content input.bt_register {
display: block;
float: left;
clear: left;
height: 24px;
text-align: center;
cursor: pointer;
border: none;
font-weight: bold;
margin: 10px 0;
}
#panel .content input.bt_login {
width: 74px;
background: transparent url(http://i.imgur.com/6E0rz.png) no-repeat 0 0;
}
#panel .content input.bt_register {
width: 94px;
color: white;
background: transparent url(http://i.imgur.com/sxtfY.png) no-repeat 0 0;
}
#panel .lost-pwd {
display: block;
float:left;
clear: right;
padding: 15px 5px 0;
font-size: 0.95em;
text-decoration: underline;
}
.main .tieude .page-title{color:#fff!important;background:#fff;opacity:0.8}
.main .tieude {
height: 28px;
padding: 6px;
border: 4px solid
#DAD3D3;
-webkit-box-shadow: 0 2px 2px -2px
rgba(0, 0, 0, .52);
font-size: 12px;
font-family: "lucida grande",tahoma,verdana,arial,sans-serif;
font-weight: 700;
background-color:
#DAD3D3;
color:
black;
}
.pun div, .pun td, .sig-line {
border-color: #
#DDD;
color: #
#DDD;
}
.main .tieude .page-title{padding: 5px;}.noidungthongbao{padding: 0px;height:27px!important}
a {
cursor: pointer;
color:
#3B5998;
text-decoration: none;
}
```


Tiếp theo vào : HTML & JAVASCRIPT tạo 1 Js mới và cho Js này vào
Placement : các bạn chọn In all the pages

```


$(document).ready(function() {

// Expand Panel
$("#open").click(function(){
$("div#panel").slideDown("slow");

});

// Collapse Panel
$("#close").click(function(){
$("div#panel").slideUp("slow");
});

// Switch buttons from "Log In | Register" to "Close Panel" on click
$("#toggle a").click(function () {
$("#toggle a").toggle();
});

});
```


Punbb - Chupy | Invision : Ruby