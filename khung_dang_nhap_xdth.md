```

<div id="conectare" align="center"><div class="c_continut"><form action="login.forum?connexion" method="post"> <table align="center"><tbody><tr><td><span style="color: white; font-size: 12px;">Tên đăng nhập:  

Unknown end tag for &lt;/span&gt;

<input name="username" size="15" maxlength="40" type="text" style="background: white; border: 1px solid darkgrey;">

Unknown end tag for &lt;/td&gt;

<td><span style="color: white; font-size: 12px;">Mật Khẩu:  

Unknown end tag for &lt;/span&gt;

<input name="password" size="15" maxlength="32" type="password" style="background: white; border: 1px solid darkgrey;">

Unknown end tag for &lt;/td&gt;

<td colspan="2"><label for="autologin"><input style="position: relative; bottom: -4px; left: -9px;" type="checkbox" name="autologin" id="autologin" tabindex="4" checked="checked" class="radio">

Unknown end tag for &lt;/label&gt;

<input class="mainoption" name="login" value="Đăng nhập" type="submit">    

Unknown end tag for &lt;/td&gt;

<td style="color: white;"><a style="font-weight: bold; color: white;" href="/profile.forum?mode=register">Đăng Ký

Unknown end tag for &lt;/a&gt;

 || <a style="font-weight: bold; color: white;" href="/profile.forum?mode=sendpassword">Quên Mật khẩu

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/form&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



```
cho code sau vào phía dưới đoạn này trong header

```

<!-- BEGIN switch_login_popup -->
<div id="login_popup" class="module main">
<div id="login_popup_title" class="main-head">
<div class="h3">{SITENAME}

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div class="main-content">
{LOGIN_POPUP_MSG}
<div id="login_popup_buttons">
<form action="{S_LOGIN_ACTION}" method="get">
<input type="submit" class="button2" value="{L_LOGIN}" />
<input type="button" class="button2" value="{L_REGISTER}" onclick="parent.location='{U_REGISTER}';" />
<input id="login_popup_close" type="button" class="button2" value="{L_DONT_DISPLAY_AGAIN}" />


Unknown end tag for &lt;/form&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<!-- END switch_login_popup -->


```
cho vào css

```

#conectare{background: url(http://i42.servimg.com/u/f42/14/52/34/74/try10.png) repeat-x center;

box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);

left: 0;

top: 0;
width: 100%;
z-index: 999;



height: 52px;
float: center;
}
#conectare table td{padding-right: 15px;}

#conectare .c_continut{position: relative;
top: 15px;}

```

demo:
http://www.xaydungthanhhoa.com/
