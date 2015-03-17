First topic message reminder :

Demo Online :http://bomb.forumvi.com/forum

Vào Header tìm ```


Unknown end tag for &lt;/head&gt;

``` chèn vào sau nó :

```

<div class="devsitePage">
<div class="menuhb">
<div class="contenthb">
<a class="logo" href="/forum"><legend style="color: white; font-size: 18px; font-weight: bold; font-variant: small-caps; font-family: Trebuchet MS; text-shadow: 5px 5px 5px rgb(0, 0, 0);margin-top: 6px;center;">B.O.M.B ♡ C.L.U.B

Unknown end tag for &lt;/legend&gt;




Unknown end tag for &lt;/a&gt;



<!-- BEGIN switch_user_logged_out -->

<div id="container12">
<div id="topnav" class="topnav">Welcome Guest !<a href="login" class="signin" style=""><span>Đăng Nhập

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;


<a href="/register" class="register" style=""><span>Đăng Ký

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;

 

Unknown end tag for &lt;/div&gt;


<fieldset id="signin_menu" style="display: none; ">

<form action="/login?redirect=/" method="post" name="form_login" id="signin">

<label for="username">Tên Đăng Nhập

Unknown end tag for &lt;/label&gt;


<input class="field" id="log" type="text" size="10" name="username">
<label for="password">Mật Khẩu

Unknown end tag for &lt;/label&gt;


<input class="field" id="pwd" type="password" size="10" name="password">
<input id="signin_submit" class="bt_login" type="submit" name="login" value="Đăng nhập">
<label>
<input name="rememberme" id="rememberme" type="checkbox" checked="checked" value="forever">  Nhớ tôi

Unknown end tag for &lt;/label&gt;


<p class="forgot"> <a href="profile?mode=sendpassword">Quên mật khẩu

Unknown end tag for &lt;/a&gt;

 

Unknown end tag for &lt;/p&gt;




<div class="clear">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/form&gt;


<script type="text/javascript">//<![CDATA[
$(function(){$('#signin').attr('action','/login?redirect='+this.location.pathname);});//]]>

Unknown end tag for &lt;/script&gt;





Unknown end tag for &lt;/fieldset&gt;




Unknown end tag for &lt;/div&gt;



<!-- END switch_user_logged_out -->

<!-- BEGIN switch_user_logged_in -->
<div style="font-size: 12px; line-height: normal;padding:5px;float:right;width:350px">{LOGGED_AS}<br>{LAST_VISIT_DATE}

Unknown end tag for &lt;/br&gt;

<span style="float: right;padding-right:5px">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;


<!-- END switch_user_logged_in -->

<div class="searchhb">
<!-- Google CSE code begins -->
<form method="get" action="/search?search_where=11" id="search">
<input type="text" name="search_keywords" size="40" id="keywords" maxlength="158" onblur="if (this.value == '') this.value = 'Nhập từ khóa tìm kiếm...';" onfocus="if (this.value == 'Nhập từ khóa tìm kiếm...') this.value = '';" value="Nhập từ khóa tìm kiếm...">
<a class="icon" id="dosearch" href="/search" btip="Tìm kiếm nâng cao" data-original-title=""><img src="http://www.video24h.com/images/search.png" alt="">

Unknown end tag for &lt;/a&gt;





Unknown end tag for &lt;/form&gt;




<!-- Google CSE Code ends -->


Unknown end tag for &lt;/div&gt;


<div class="clearhb">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;



<div class="bodyhb" id="devsiteHomeBody">
<div class="contenthb">
<div class="above_body"> <!-- closing tag is in template navbar -->

```

Chèn vào cuối Footer Begin :

```

<script type="text/javascript">
$(document).ready(function() {

$(".signin").click(function(e) {
e.preventDefault();
$("fieldset#signin_menu").toggle();
$(".signin").toggleClass("menu-open");
});

$("fieldset#signin_menu").mouseup(function() {
return false
});
$(document).mouseup(function(e) {
if($(e.target).parent("a.signin").length==0) {
$(".signin").removeClass("menu-open");
$("fieldset#signin_menu").hide();
}
});

});


Unknown end tag for &lt;/script&gt;


```


Thêm vào CSS:
```


/*menu topbar*/
.devsitePage{margin:0;min-width:1000px}
.devsitePage .clearhb{clear:both}
.devsitePage .menuhb{background:#254b82;font-weight:bold;padding-top:2px;font-family:"Lucida Grande", Tahoma, Verdana, Arial, sans-serif;font-size: 11px;}
.devsitePage .menuhb .contenthb{background:#325c99;border:1px solid #1a3c6c;border-bottom:0;margin:0 auto;padding:0;width:1000px;}
.devsitePage .menuhb,
.devsitePage .menuhb a{color:#fff;cursor:pointer;-moz-outline-style:none;text-decoration:none;}
.devsitePage .menuhb a.logo{border-right:0px solid #1a3c6c;margin-right:10px;padding:10px 20px 14px;line-height:0.5;}
.devsitePage .menuhb a.logo img{width:67px;height:26px}
.devsitePage .menuhb a.logo,
.devsitePage .menuhb a.l{display:block;float:left}
.devsitePage .menuhb a.l{line-height:29px;padding:2px 11px 2px}
.devsitePage .menuhb a.l:hover, .devsitePage .menuhb a.logo:hover{background:#1a3c6c;text-decoration:none}
.devsitePage .menuhb .searchhb{float:left;padding:5px 20px 5px 20px;width:280px;}
.devsitePage .menu .inputtext{border:0;padding:5px 4px;}
.devsitePage .menuhb{position:fixed;width:100%;z-index:100}
.devsitePage #contenthb{width:auto;padding:0;margin:0}
/*body{overflow-y:scroll;margin:0}*/
.devsitePage .bodyhb .contenthb{margin:auto;max-width:1000px}
.devsitePage .bodyhb > .contenthb{background:#fff;border:1px solid #d9d9d9;border-top:0;-moz-box-shadow:#ddd 0 1px 1px;padding:41.5px 0px 0px}
/*menu topbar*/

.logo-image{-webkit-border-radius:3px;-webkit-box-shadow:0 1px 1px rgba(0,0,0,.07);background-color:#fff;border:1px solid #97A4C2;clear:right;float:left;height:160px;margin-left:23px;margin-top:-121px;padding:3px;width:160px}
/* SinhVienVT.Net Custom Login */
#container12 {
float:right;
margin-right: 1px;
margin-top: -6px;
position: relative;
}




a img {
border-width:0;
}
#topnav {
padding:10px 0px 12px;
font-size:12px;
line-height:24px;
text-align:right;
}
#topnav a.signin {
background: #325c99;
padding: 8px 10px 10px;
text-decoration: none;
font-weight: bold;
color: white;
-webkit-border-radius: 4px;
-moz-border-radius: 4px;
border-radius: 4px;
}
#topnav a.signin:hover {
background: :#000966;
}
#topnav a.signin, #topnav a.signin:hover {
}
a.signin {
position:relative;
margin-left:3px;
}

a.signin span {
background-image: url("http://4r.ninja9x.net/login/images/toggle_down_light.png");
background-repeat: no-repeat;
background-position: 100% 50%;
padding: 4px 16px 6px 0;
}
#topnav a.register {
background: #325c99;
padding: 8px 10px 10px;
text-decoration: none;
font-weight: bold;
color: white;
-webkit-border-radius: 4px;
-moz-border-radius: 4px;
border-radius: 4px;
}
#topnav a.register:hover {
background: :#000966;
}
#topnav a.register, #topnav a.register:hover {
}
a.register {
position:relative;
margin-left:0px;
}

a.register span {
background-image:url("http://4r.ninja9x.net/login/images/register_light.png");
background-repeat:no-repeat;
background-position:100% 50%;
padding:4px 16px 6px 0;
}


#topnav a.menu-open {
background:#0d3156!important;
color:#fff!important;
outline:none;
}
#small_signup {
display:inline;
float:none;
line-height:23px;
margin:25px 0 0;
width:170px;
}
a.signin.menu-open span {
background-image:url("http://4r.ninja9x.net/login/images/toggle_up_light.png");
color:#fff;
}

#signin_menu {
-moz-border-radius-topleft:5px;
-moz-border-radius-bottomleft:5px;
-moz-border-radius-bottomright:5px;
-webkit-border-top-left-radius:5px;
-webkit-border-bottom-left-radius:5px;
-webkit-border-bottom-right-radius:5px;
display:none;
/* background-color:#0d3156; */
background:url(http://4r.ninja9x.net/login/images/login_back.png) #0d3156 repeat-x;
position:absolute;
width:210px;
z-index:100;
border:1px transparent;
text-align:left;
padding:12px;
top: 24.5px;
right: 0px;
margin-top:5px;
margin-right: 0px;
*margin-right: -1px;
color:#fff;
font-size:12px;
}

#signin_menu input[type=text], #signin_menu input[type=password] {
display:block;
-moz-border-radius:4px;
-webkit-border-radius:4px;
border:1px solid #0d3156;
background:url(http://4r.ninja9x.net/login/images/field_back.png) repeat-x;
font-size:13px;
margin:0 0 5px;
padding:5px;
width:203px;
}
#signin_menu p {
margin:0;
}
#signin_menu a {
color:#fff;
}
#signin_menu label {
font-weight:normal;
}
#signin_menu p.remember {
padding:10px 0;
}
#signin_menu p.forgot, #signin_menu p.complete {
clear:both;
margin:5px 0;
}
#signin_menu p a {
color:#fff!important;
}
#signin_menu p a:hover {
text-decoration:underline;
}

#signin_submit {
-moz-border-radius:4px;
-webkit-border-radius:4px;
background-color:#0d3156;
border:1px solid #fff;
color:#000000;
text-shadow:0 -1px 0 #39d;
padding:4px 10px 5px;
font-size:11px;
margin:0 5px 0 0;
font-weight:bold;
}
#signin_submit::-moz-focus-inner {
padding:0;
border:0;
}
#signin_submit:hover, #signin_submit:focus {
background-position:0 -5px;
cursor:pointer;
}
```

Ẩn bài viết