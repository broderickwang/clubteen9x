![http://i12.servimg.com/u/f12/17/70/81/78/12-27-11.png](http://i12.servimg.com/u/f12/17/70/81/78/12-27-11.png)
![http://i12.servimg.com/u/f12/17/70/81/78/12-27-12.png](http://i12.servimg.com/u/f12/17/70/81/78/12-27-12.png)
Tùy chỉnh:

ACP >> General >> Forum >> Security >> Security Administration
Giới hạn số tài khoản có thể tạo trong 24h cho một IP:
IP address accounts creation limit, for each 24 hours : 10

ACP >> Users & Groups >> Users >> Users options
Cho phép tự kích hoạt tài khoản:
New accounts activation : Automatic activation
Bỏ yêu cầu nhập mã captcha:
Confirmation code : No
Cho phép đăng ký thành viên:
Allow new members : Yes

ACP >> Users & Groups >> Users >> Profiles >> Profile fields >> bx Modify
Bỏ hết các field bắt buộc khi đăng ký:
Necessarily filled ? No

HTML:

ACP >> Display >> Templates >> General >> overall\_footer\_begin

Tìm:

```

<div id="pun-foot">

```

Đặt trước nó:

```

<!-- BEGIN switch_user_logged_out -->
<div id="qick_reg" class="main">
<div id="reg_loder">Đang kiểm tra dữ liệu...

Unknown end tag for &lt;/div&gt;


<p id="reg_tip">Bạn phải điền đầy đủ thông tin đăng ký.

Unknown end tag for &lt;/p&gt;


<a href="javascript:void(0)" class="modal_close">

Unknown end tag for &lt;/a&gt;


<form onsubmit="submit_reg(); return false" action="/register?agreed=true&step=2" method="post" name="post" id="ucp">
<div class="main-content frm" style="border: 0px none;">
<fieldset class="frm-set multi" style="border: 0px none; margin:0;background-color: #FFF;">
<dl><dt><label>Tên tài khoản :

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd>
<input autocomplete="off" type="text" id="username_reg" name="username" value="" size="25" maxlength="25" />
<div id="name_reg" class="check_reg">
<div class="pwd_img reg_er kytu">Số ký tự phải từ 6 trở lên

Unknown end tag for &lt;/div&gt;


<div class="pwd_img reg_er loi">Hãy chọn tài khoản khác

Unknown end tag for &lt;/div&gt;


<div class="pwd_img reg_ok">Có thể dùng tài khoản này

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<dl><dt><label>Địa chỉ E-mail :

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd>
<input autocomplete="off" class="ltr" type="text" id="email" name="email" value="" size="25" maxlength="64" />
<div id="email_reg" class="check_reg">
<div class="pwd_img reg_er">Không sử dụng địa chỉ này

Unknown end tag for &lt;/div&gt;


<div class="pwd_img reg_wa">E-mail sẽ được kiểm sau

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<dl><dt><label>Mật khẩu :

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd>
<input autocomplete="off" class="ltr" type="password" id="password_reg" name="password" value="" size="25" maxlength="25" />
<div class="check_reg" id="cont_pwd">
<div class="pwd_img reg_er kytu">Số ký tự phải từ 6 trở lên

Unknown end tag for &lt;/div&gt;


<div class="pwd_img reg_er trung">Trùng tên đăng nhập

Unknown end tag for &lt;/div&gt;


<div class="pwd_img" id="pwd_bad" style="display: none;">Quá đơn giản

Unknown end tag for &lt;/div&gt;


<div class="pwd_img" id="pwd_middle" style="display: none;">Tạm ổn

Unknown end tag for &lt;/div&gt;


<div class="pwd_img" id="pwd_good" style="display: none;">Vãi

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<dl><dt><label>Gõ lại mật khẩu :

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd>
<input autocomplete="off" type="password" id="password_confirm" size="25" maxlength="25" name="password_confirm" class="inputbox narrow" />
<div id="pass_co" class="check_reg">
<div class="pwd_img reg_er">Chưa đúng

Unknown end tag for &lt;/div&gt;


<div class="pwd_img reg_ok">Chính xác

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<dl class="frm-buttons">
<p style="padding: 10px 0px 0px; text-align: center;">
<input class="button2" type="submit" name="submit" value="Đăng ký" />
<input class="button2" type="reset" name="reset" value="Làm mới" />


Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/dl&gt;




Unknown end tag for &lt;/fieldset&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/form&gt;




Unknown end tag for &lt;/div&gt;


<script type="text/javascript" src="http://baivong.forumclan.com/12848.js">

Unknown end tag for &lt;/script&gt;


<!-- END switch_user_logged_out -->

```

CSS:

ACP >> Display >> Pictures and Colors >> Colors >> CSS Stylesheet
```

/* Quick register - www.fmvi.vn */
#qick_reg #cont_pwd, #qick_reg .check_reg{float:none;height:24px;width:180px;padding:2px 0!important}
#pwd_bad, .reg_er{background:url(http://i15.servimg.com/u/f15/16/58/89/73/001_3010.png) no-repeat scroll left center transparent;color:red}
#pwd_middle, .reg_wa{background:url(http://i15.servimg.com/u/f15/16/58/89/73/alert_10.png) no-repeat scroll left center transparent;color:blue}
#pwd_good, .reg_ok{background:url(http://i15.servimg.com/u/f15/16/58/89/73/001_0610.png) no-repeat scroll left center transparent;color:green}
#qick_reg .pwd_img{float:left;height:24px;line-height:24px;text-align:left;width:180px;padding:0 0 0 30px}
#qick_reg  dd{padding:0}
#reg_tip{background-color:#FCF8E3;color:#C09853;border-color:#FBEED5;margin-bottom:20px;border:1px solid;padding:5px 7px}
#reg_loder{background:url(http://i15.servimg.com/u/f15/16/58/89/73/ajax-l11.gif) no-repeat scroll center 130px rgba(255, 255, 255, 0.65);color:#086CC5;display:none;font-family:Comic Sans MS;font-weight:700;height:100%;left:0;line-height:350px;position:absolute;text-align:center;top:0;width:100%}
#qick_reg{box-sizing:border-box;-o-box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;background-color:#FFF;border:1px solid rgba(0,0,0,0.333);box-shadow:0 4px 16px rgba(0,0,0,0.2);color:#000;outline:0 none;position:absolute;width:500px;display:none;padding:40px}
.modal_close{background:url(http://i40.servimg.com/u/f40/17/70/81/78/close-10.png) repeat scroll 0 0 transparent;content:"";height:11px;position:absolute;right:17px;top:17px;width:11px}
#lean_overlay{position:fixed;z-index:700;top:0;left:0;height:100%;width:100%;background:#666;display:none}
.error input{border:1px solid #F5A7A7;background-color:#F2DEDE}

```