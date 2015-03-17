Demo:

![http://i40.servimg.com/u/f40/17/50/76/58/5610.jpg](http://i40.servimg.com/u/f40/17/50/76/58/5610.jpg)
nên đặt cái này ở trên cùng của forum
Cách làm :

Bước 1 : cho đoạn sau vào Css :

```

#login-top {
width: 225px;
background: url(http://i49.servimg.com/u/f49/16/29/88/81/bg_log10.png) no-repeat;
height: 45px;
position: absolute;
top: 8px;
right: 10px;
padding: 5px;
color: yellow;
line-height: 120%;
}
#id-login, #pw-login {
width: 120px;
border: 0;
border-radius: 3px;
margin: 3px;
padding: 1px;
background-color: #555;
background-color: rgba(0, 0, 0, .4);
color: #fff;
}
#ok-login {
float: right;
height: 39px;
width: 90px;
margin: -20px 5px 0 0;
background-color: #333;
background-color: rgba(0, 0, 0, .5);
border-radius: 3px;
border: 0;
cursor: pointer;
color: yellow;
}
#ck-login {
float: right;
margin: 5px;
color: #CCC;
font-size: 8pt;
}```


Bước 2 : vào overall\_header tìm :

```

<div class="pun">


và Đặt Code sau vào Trên nó ( hoặc chỗ nào bạn cảm thấy hợp lý )

Code: Chọn Code
<!-- BEGIN switch_user_logged_out -->
<div id="login-top">
<form action="/login?redirect=/" method="post" name="form_login" id="login-vds">
<input class="post" id="id-login" type="text" size="10" name="username">
<input class="post" id="pw-login" type="password" size="10" name="password">
<input id="ok-login" class="mainoption" type="submit" name="login" value="Đăng Nhập">
<div id="ck-login"><span class="gensmall">Tự động đăng nhập lần sau

Unknown end tag for &lt;/span&gt;


<input class="radio" type="checkbox" name="autologin">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/form&gt;

<script type="text/javascript">//<![CDATA[
$(function(){$('#login-vds').attr('action','/login?redirect='+this.location.pathname);});//]]>

Unknown end tag for &lt;/script&gt;



Unknown end tag for &lt;/div&gt;



<!-- END switch_user_logged_out -->

```

Thế là xong cười nhăn răng