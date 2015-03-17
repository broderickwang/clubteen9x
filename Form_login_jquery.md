demo :
![http://i40.servimg.com/u/f40/17/50/76/58/7810.jpg](http://i40.servimg.com/u/f40/17/50/76/58/7810.jpg)

Chức năng:
- Giúp bạn làm cho Form Login đẹp và dễ dàng sử dụng. Sử dụng hiệu ứng Pop-up tương tự như Fancybox.
- Login không bị chuyển sang trang khác.

Hướng dẫn:


Bước 1: Thêm vào CSS


ACP - Display - Pictures and Colors - Colors - CSS Stylesheet:

```


#mask {
display: none;
background: #000;
position: fixed; left: 0; top: 0;
width: 100%; height: 100%;
opacity: 0.8;
z-index: 9;

}

/* You can customize to your needs  */
.login-popup{

display:none;
background: #333;
padding: 10px;
border: 2px solid #ddd;
float: left;
font-size: 1.2em;
position: fixed;
top: 50%; left: 50%;
z-index: 999;
box-shadow: 0px 0px 20px #999; /* CSS3 */
-moz-box-shadow: 0px 0px 20px #999; /* Firefox */
-webkit-box-shadow: 0px 0px 20px #999; /* Safari, Chrome */
border-radius:3px 3px 3px 3px;
-moz-border-radius: 3px; /* Firefox */
-webkit-border-radius: 3px; /* Safari, Chrome */
}

img.btn_close { Position the close button
float: right;
margin: -28px -28px 0 0;
}

fieldset {
border:none;
}

form.signin .textbox label {
display:block;
padding-bottom:7px;
}

form.signin .textbox span {
display:block;
}

form.signin p, form.signin span {
color:#999;
font-size:11px;
line-height:18px;
}

form.signin .textbox input {
background:#666666;
border-bottom:1px solid #333;
border-left:1px solid #000;
border-right:1px solid #333;
border-top:1px solid #000;
color:#fff;
border-radius: 3px 3px 3px 3px;
-moz-border-radius: 3px;
-webkit-border-radius: 3px;
font:13px Arial, Helvetica, sans-serif;
padding:6px 6px 4px;
width:200px;
}

form.signin input:-moz-placeholder { color:#bbb; text-shadow:0 0 2px #000; }
form.signin input::-webkit-input-placeholder { color:#bbb; text-shadow:0 0 2px #000;  }

.button {
background: -moz-linear-gradient(center top, #f3f3f3, #dddddd);
background: -webkit-gradient(linear, left top, left bottom, from(#f3f3f3), to(#dddddd));
background:  -o-linear-gradient(top, #f3f3f3, #dddddd);
filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#f3f3f3', EndColorStr='#dddddd');
border-color:#000;
border-width:1px;
border-radius:4px 4px 4px 4px;
-moz-border-radius: 4px;
-webkit-border-radius: 4px;
color:#333;
cursor:pointer;
display:inline-block;
padding:6px 6px 4px;
margin-top:10px;
font:12px;
width:214px;
}
.button:hover { background:#ddd; }
```

Bước 2: Thêm vào cuối overall\_footer\_begin
ACP - Display - Templates - Ganeral - overall\_footer\_begin:

```



<a href="/register" class="login-window">register

Unknown end tag for &lt;/a&gt;


<a href="/login" class="login-window">Login / Sign In

Unknown end tag for &lt;/a&gt;


<div id="login" class="login-popup">
<a href="#" class="close"><img src="http://i1086.photobucket.com/albums/j446/alexanderraiback/close_pop.png" class="btn_close" title="Close Window" alt="Close" />

Unknown end tag for &lt;/a&gt;


<form action="/login?redirect=/forum" method="post" name="form_login" id="login-vds"class="signin">
<fieldset class="textbox">
<label class="username">
<span>Username or email

Unknown end tag for &lt;/span&gt;


<input id="username" name="username" value="" type="text" autocomplete="on" placeholder="Username"/>


Unknown end tag for &lt;/label&gt;


<label class="password">
<span>Password

Unknown end tag for &lt;/span&gt;


<input id="password" name="password" value="" type="password" placeholder="Password"/>


Unknown end tag for &lt;/label&gt;


<button id="bt_login" name="login" class="submit button" type="button submit">Sign in

Unknown end tag for &lt;/button&gt;


<p>
<a class="forgot" href="/profile?mode=sendpassword">Forgot your password?

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/fieldset&gt;




Unknown end tag for &lt;/form&gt;




Unknown end tag for &lt;/div&gt;


```



Bước 3: Thêm vào Javascript
ACP - Modules - Javascript codes management:

```


/*var Nghiêm cấm mọi hành vi sao chép không ghi nguồn. Xin hãy ghi nguồn(dethicasio.info) nếu bạn copy code này sang trang khác, hoặc xin liên hệ qua yahoo :( alexanderraiback@yahoo.com) để biết thêm chi tiết.*/
$("a[href='/login']:not('.message a')").removeAttr("href").attr("href", "#login");
$("#loginFancy form").append('<input type="hidden" name="redirect" value="' + location.href + '" />');
$("a[href='#login']").click(function() {
//Getting the variable's value from a link
var loginBox = $(this).attr('href');

//Fade in the Popup
$(loginBox).fadeIn(300);

//Set the center alignment padding + border see css style
var popMargTop = ($(loginBox).height() + 24) / 2;
var popMargLeft = ($(loginBox).width() + 24) / 2;

$(loginBox).css({
'margin-top' : -popMargTop,
'margin-left' : -popMargLeft
});


// Add the mask to body
$('body').append('<div id="mask">

Unknown end tag for &lt;/div&gt;

');
$('#mask').fadeIn(300);

return false;
});

// When clicking on the button close or the mask layer the popup closed
$('a.close, #mask').live('click', function() {
$('#mask , .login-popup').fadeOut(300 , function() {
$('#mask').remove();
});
return false;
});
```