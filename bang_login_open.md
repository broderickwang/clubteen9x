Cách làm :



Vào Footer Begin thêm đoạn code sau vào cuối

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
Tiếp theo vào HEader chèn bảng đăng nhập này vào chỗ nào mình muốn

```

<!-- BEGIN switch_user_logged_out -->

<div id="container12">
<div id="topnav" class="topnav"> Have an account? <a href="login" class="signin" style=""><span>Login

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;


<a href="/register" class="register" style=""><span>Register

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
```

Cuối cùng cho cái này vào Css :

```

/* SinhVienVT.Net Custom Login */
#container12 {
float:right;
margin:0 auto;
margin-top: -6px;
position: relative;
}




a img {
border-width:0;
}
#topnav {
padding:10px 0px 12px;
font-size:11px;
line-height:23px;
text-align:right;
}
#topnav a.signin {
background: #0D3156;
padding: 4px 6px 6px;
text-decoration: none;
font-weight: bold;
color: white;
-webkit-border-radius: 4px;
-moz-border-radius: 4px;
border-radius: 4px;
}
#topnav a.signin:hover {
background: #15579B;
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
background: #0D3156;
padding: 4px 6px 6px;
text-decoration: none;
font-weight: bold;
color: white;
-webkit-border-radius: 4px;
-moz-border-radius: 4px;
border-radius: 4px;
}
#topnav a.register:hover {
background: #15579B;
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
font-size:11px;
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
color:#fff;
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
}```


Chú ý : đoạn code sau trong css là đoạn bạn muốn hiển thị bảng đăng nhập đó ở chỗ nào có thể

```

#container12 {
float:right;
margin:0 auto;
margin-top: -6px;
position: relative;
}
```


Thế là hết cười nhăn răng
Ai có thắc mắc gì xin vui lòng Reply tại topic này