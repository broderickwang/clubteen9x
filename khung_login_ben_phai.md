![http://i32.servimg.com/u/f32/17/72/98/89/untitl10.jpg](http://i32.servimg.com/u/f32/17/72/98/89/untitl10.jpg)



http://thptlequydon.forum0.net/

Cho vào cuối Overall Footer end:


```
    <!-- BEGIN switch_user_logged_out -->
<div id="dangnhap" style="position: absolute; background-image: url(http://www.cic.com.vn/forums/images/login.gif); visibility: visible; left: 30px; top: 405.0000000000002px; background-repeat: no-repeat no-repeat; ">

<br>

<table width="270px">

<tbody><tr><td align="right">

<form id="frmLogin" action="/login?redirect=/" name="form_login" id="login-vds">

<input type="hidden" name="my_post_key" value="3e3e3a05d7134b3b5e05181174dcbb2c">

<input type="hidden" name="action" value="do_login">

<input type="text" class="textbox" name="username" title="Tên đăng nhập" value="Tên đăng nhập" onfocus="if(this.value == 'Tên đăng nhập') { this.value='';
}" onblur="if(this.value=='') { this.value='Tên đăng nhập'; }">

<br>

<input type="password" class="textbox" name="password" title="Mật khẩu" value="Mật khẩu" onfocus="if(this.value == 'Mật khẩu') { this.value='';
}" onblur="if(this.value=='') { this.value='Mật khẩu'; }">

<br>

<input type="submit" class="button" name="login" value="Đăng nhập">



Unknown end tag for &lt;/form&gt;


<script type="text/javascript">//<![CDATA[
$(function(){$('#login-vds').attr('action','/login?redirect='+this.location.pathname);});//]]>

Unknown end tag for &lt;/script&gt;





Unknown end tag for &lt;/td&gt;





Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



<a href="" onclick="closebar(); return false"><img src="http://www.cic.com.vn/forums/images/close.gif" border="0" align="right">

Unknown end tag for &lt;/a&gt;





Unknown end tag for &lt;/div&gt;


<style type="text/css">

#dangnhap{

position:absolute;

padding: 2px;

visibility: hidden;

z-index: 100;

width: 289px;

height: 87px

}



Unknown end tag for &lt;/style&gt;


<script type="text/javascript" src="http://www.cic.com.vn/forums/jscripts/login.js" "="">

Unknown end tag for &lt;/script&gt;


<script type="text/javascript">

<!--

var browser;

function detectBrowser()

{

useragent = navigator.userAgent.toLowerCase();

useragent_version = parseInt(navigator.appVersion);



if(navigator.product == "Gecko" &&
navigator.vendor.indexOf("Apple Computer") != -1)

{

browser = "safari";

}

else if(useragent.indexOf("chrome") != -1)

{

browser = "chrome";

}

else if(navigator.product == "Gecko")

{

browser = "mozilla";

}

else if(useragent.indexOf("opera") != -1)

{

browser = "opera";

}

else if(useragent.indexOf("konqueror") != -1)

{

browser = "konqueror";

}

else if(useragent.indexOf("msie") != -1)

{

browser = "ie";

}

else if(useragent.indexOf("compatible") == -1 &&
useragent.indexOf("mozilla") != -1)

{

browser = "netscape";

}



if(useragent.indexOf("win") != -1)

{

os = "win";

}

else if(useragent.indexOf("mac") != -1)

{

os = "mac";

}

}

function HTMLchars(text)

{

text = text.replace(new RegExp("&(?!#[0-9]+;)", "g"),
"&");

text = text.replace(/</g, "<");

text = text.replace(/>/g, ">");

text = text.replace(/"/g, """);

return text;

}



if(document.location.href)

detectBrowser();

{

if(browser == "ie")

{

var input = document.createElement("<input
name=\"url\">");

}

else

{

var input = document.createElement("input");

input.setAttribute("name", "url");

}



input.setAttribute("type", "hidden");

input.setAttribute("value",
HTMLchars(document.location.href));

document.getElementById('frmLogin').appendChild(input);



}



// -->



Unknown end tag for &lt;/script&gt;


<!-- END switch_user_logged_out -->
```