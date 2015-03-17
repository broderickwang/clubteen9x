![http://i71.servimg.com/u/f71/12/46/70/00/sem_ta14.png](http://i71.servimg.com/u/f71/12/46/70/00/sem_ta14.png)


tạo 1 js mơi

```


jQuery(function() {
var tgl = document.getElementById('i_icon_mini_login'); if(!tgl) return; var tgu = document.location.href; jQuery('body').append('<div id="TGlogin_form" class="TGlogin_form-float" style="display: none;"><div class="TGlogin_form-float-content"><div class="TGlogin_form-float-div"><form  id="TGloginform" method="post" method="post" action="/login?redirect='+tgu+'"><label><em>Login : 

Unknown end tag for &lt;/em&gt;

<input id="username" type="text" name="username">

Unknown end tag for &lt;/label&gt;

<label><em>Senha : 

Unknown end tag for &lt;/em&gt;

<input id="password" type="password" name="password">

Unknown end tag for &lt;/label&gt;

<label style="float: left; margin-top: 5px; text-align: left;"><em style="margin-right: 10px; margin-top: 3px; width: 85px; margin-left: 7px;">Lembrar a senha? : 

Unknown end tag for &lt;/em&gt;

<input type="checkbox" name="autologin" checked="true" style="width: 20px;">

Unknown end tag for &lt;/label&gt;

<input id="submit" type="submit" name="login" value="Entrar" class="submit">

Unknown end tag for &lt;/form&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<span class="TGClose">X

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;

<div id="TGfade" class="TGlogin_form-float_overlay">

Unknown end tag for &lt;/div&gt;

'); var Copyrights = 'Forum dos Foruns - ©Mikee All Rights Reserved.'; jQuery('a[href="/login"], a[href="/login?connexion"]').attr('href', '/login').click(function (e) { jQuery('#TGlogin_form').fadeToggle('slow',  'linear'); return false; }).click(function(e) {jQuery('#TGfade').css('display', 'block' ); jQuery('#TGlogin_form').css('left', '40%').css('top', '40%'); }); jQuery('.TGClose').click(function() { jQuery('#TGlogin_form, #TGfade').fadeToggle("fast", "linear"); });
});

```

Tiếp theo cho cái này vào css

```


#TGlogin_form {position: fixed;z-index: 999; height: 130px; padding: 0; verflow: auto;  width: 330px; margin: 0; background: #f9f9f9; color: #444; /* ©Copyright by giObanii.*/ text-shadow: none; -webkit-border-radius: 4px; -moz-border-radius: 4px; border-radius: 4px; -webkit-box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5); -moz-box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5); box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);}
.TGlogin_form-float-content{width: 320px; height: 120px; background: none repeat scroll 0% 0% transparent;}
.TGlogin_form-float-div {background: url("http://i31.servimg.com/u/f31/17/41/76/40/2jci9c10.jpg") no-repeat scroll left center transparent;margin: 0 auto;padding: 20px 0 0 60px;width: 250px;}
.TGlogin_form-float-div label {font-family: Verdana;display: block;font-size: 12px;padding-bottom: 5px;text-align: right;}
.TGlogin_form-float-div label em {color: #000000;font-family: Verdana;display: block;float: left;font-style: normal;width: 80px;font-size: 12px;text-align: right;}
.TGlogin_form-float-div input {border: 1px solid #CCCCCC;height: 22px;width: 146px;}
.TGlogin_form-float-div input.submit {background: url("http://i31.servimg.com/u/f31/17/41/76/40/eumpmp10.jpg") repeat-x scroll 0 0 #DDDDDD;padding: 3px 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;border: 1px solid #BBB;float: right;height: auto;width: auto;}
.TGlogin_form-float-div input.submit:active {position:relative; top: 1px;}
.TGlogin_form-float-div input.submit:hover, .TGlogin_form-float-div input.submit:focus {cursor:pointer;color:#000;}
.TGlogin_form-float_overlay{display: none;position:fixed;top: 0%;left: 0%;width: 100%;height: 100%; background-color: black;z-index: 9;-moz-opacity: 0.8;opacity:.80;filter: alpha(opacity=80);}
#TGlogin_form .TGClose {cursor: pointer;bottom: 3px;color: #000000;font-size: 15px;font-weight: 700;position: absolute;right: 5px;}
#TGlogin_form .TGClose:active {color: #FF0000 !important;bottom: 2px;}

```