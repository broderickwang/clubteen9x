![http://i48.servimg.com/u/f48/16/58/45/96/210.png](http://i48.servimg.com/u/f48/16/58/45/96/210.png)

Hướng dẫn :

Temp >> Portal >> mod\_login

Thay toàn bộ code này vào:


```

<!-- BEGIN switch_login_small -->
<div class="dangnhapvds">
<div><form class="vdslogin" action="{S_LOGIN_ACTION}" method="post">

Unknown end tag for &lt;/div&gt;



<div style="float:left;"><span class="gen">Tài khoản:

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;


<div style="float:right;position:relative;padding-right:5px;"><input type="text" name="username" value="{USERNAME}" size="10" maxlength="30" style="width:80px;" />

Unknown end tag for &lt;/div&gt;



<div class="clear">

Unknown end tag for &lt;/div&gt;



<div style="float:left;"><span class="gen">Mật khẩu:

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;


<div style="float:right;position:relative;padding-right:5px;"><input type="password" name="password" size="10" maxlength="50" style="width:80px;">

Unknown end tag for &lt;/div&gt;



<div class="clear">

Unknown end tag for &lt;/div&gt;



<div align="center">
<span class="gen">Đăng nhập tự động: <input type="checkbox" name="autologin" {AUTOLOGIN_CHECKED}>

Unknown end tag for &lt;/span&gt;



<input class="mainoption" type="submit" name="login" value="{L_LOGIN}">

<span class="gensmall"><a class="gensmall" href="{U_SEND_PASSWORD}" rel="nofollow">:: {L_SEND_PASSWORD}

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;






Unknown end tag for &lt;/div&gt;


<!-- END switch_login_small -->

<!-- BEGIN switch_profile -->
<div class="thongtinthanhvienvds">
<div class="cattitle" align="center"><b>{USERNAME}

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/div&gt;



<div style="margin-{DIRECTION}:5px; float:{DIRECTION};">
<span class="genmed">{L_MESSAGES} : <strong>{NB_MESSAGES}

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



<span class="genmed">{L_PM} : <strong>{NB_PM_UNREAD} / {NB_PM_READ}

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;




<span class="genmed">• <a href="{U_PROFILE}">Lý lịch của tôi

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



<span class="genmed">• <a href="/profile?mode=editprofile&page_profil=preferences">Tùy chỉnh giao diện

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



<span class="genmed">• <a href="/profile?mode=editprofile&page_profil=signature">Thay đổi chữ ký

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



<span class="genmed">• <a href="/profile?mode=editprofile&page_profil=avatars">Thay đổi Avatar

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



<span class="genmed">• <a href="/profile?mode=editprofile&page_profil=friendsfoes">Danh sách: Bạn / Thù

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;




<span class="genmed">Avatar

Unknown end tag for &lt;/span&gt;



<div class="avatarvds">{USERNAME_AVATAR}

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<!-- END switch_profile -->

```
Thêm vào Css:

```

.dangnhapvds {
position: fixed;
background: url(http://i48.servimg.com/u/f48/13/58/60/43/kdn1010.png) bottom center no-repeat;
width:150px;
background-color: #fddeff;
padding:5px;
border:1px solid #8A8A8A;
border-radius:0 10px 10px 0;
left:-122px;
bottom:20px;
transform:rotate(270deg); -moz-transform:rotate(270deg); -webkit-transform:rotate(270deg);
transition: all 3s ease; -webkit-transition: all 3s ease; -moz-transition: all 3s ease;
transition-delay: 3s; -webkit-transition-delay: 3s; -moz-transition-delay: 3s;
}
.dangnhapvds:hover {
left:-1px;
transform:rotate(0deg); -moz-transform:rotate(0deg); -webkit-transform:rotate(0deg);
transition: all 1s ease; -webkit-transition: all 1s ease; -moz-transition: all 1s ease;
}

.thongtinthanhvienvds {
position: fixed;
background: url(http://i48.servimg.com/u/f48/13/58/60/43/tttv1010.png) center left no-repeat;
width:170px;
background-color: #fddeff;
padding:5px 5px 5px 30px;
border:1px solid #8A8A8A;
border-radius:10px 0 0 10px;
right:-180px;
top:70px;
transition: all 3s ease; -webkit-transition: all 3s ease; -moz-transition: all 3s ease;
}
.thongtinthanhvienvds:hover {
right:-1px;
transition: all 1s ease; -webkit-transition: all 1s ease; -moz-transition: all 1s ease;
}

.avatarvds img {
transition: all 15s ease; -webkit-transition: all 15s ease; -moz-transition: all 15s ease;
transition-delay: 5s; -webkit-transition-delay: 5s; -moz-transition-delay: 5s;
background-color: #FFFFFF;
max-width:143px;
border-radius:5px;
margin:1px 3px 3px 1px;
padding:3px;
border:1px solid #d4d4d4;
box-shadow: 3px 3px 3px #8A8A8A;
transform:rotate(-20deg); -moz-transform:rotate(-20deg); -webkit-transform:rotate(-20deg);
}
.avatarvds img:hover {
transition: all 3s ease; -webkit-transition: all 3s ease; -moz-transition: all 3s ease;
transform:rotate(360deg); -moz-transform:rotate(360deg); -webkit-transform:rotate(360deg);
position:relative;
}


```
Cuối cùng là cho mod\_login hoạt động bằng cách:
Modules >> Forum widgets management
Cho khung Login lên và bấm chấp nhận.

Xong!