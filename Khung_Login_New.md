chèn vào css

```

#slide-panel{background-color:#000;border-bottom:2px solid #838383;display:none;height:80px;margin:auto;padding-top:20px}
.slide{width:950px;margin:auto}
.btn-slide:link,.btn-slide:visited{color:#fff;float:right;display:block;font-size:14px;text-transform:uppercase;font-weight:bold;height:28px;padding:3px 0 3px 0;line-height:28px;text-align:center;text-decoration:none;width:80px;font-family:Arial;background:#000;margin-top:-2px}
.loginform{width:950px;margin:0 auto;color:#999;font-family:Arial,Helvetica,sans-serif}
.formdetails{color:#FFF;font-size:12px;padding:5px}
.formdetails input{border:none;padding:2px 5px;background-color:#EFEFEF}
.loginregister{color:#999;padding:5px}
.loginregister a:link,.loginregister a:visited{color:#90fff6;font-size:12px}
.loginregister a:hover{color:#fff}
.loginform h2{padding:10px 10px 10px 0;font-size:18px;font-weight:normal;text-transform:uppercase}
.loginform ul li{display:inline}
.loginform ul li a:link,.loginform ul li a:visited{color:#FFF;font-size:12px;text-decoration:underline}
input#signIn{color:#fff;background:url(https://lh4.googleusercontent.com/_U0QaeycS3vw/TZHtnbhNayI/AAAAAAAAAcY/o9eDhACl16M/btn_login.png) no-repeat;width:94px;height:25px;cursor:pointer;padding-bottom:5px}
input#Email,input#Passwd{background:#414141;color:#fff}
input:focus#Email,input:focus#Passwd{background:#545454}
```


chèn vào Head, sau 

Unknown end tag for &lt;/head&gt;



```

<script src='http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js' type='text/javascript'/>
<script type='text/javascript'>
$(document).ready(function(){$(&quot;.btn-slide&quot;).click(function(){$(&quot;#slide-panel&quot;).slideToggle(&quot;slow&quot;);});});


Unknown end tag for &lt;/script&gt;



<div id='slide-panel'><div class='loginform'><div class='formdetails'>
<form action='https://www.google.com/accounts/ServiceLogin?service=blogger&amp;continue=https%3A%2F%2Fwww.blogger.com%2Floginz%3Fd%3Dhttp%253A%252F%252Fwww.blogger.com%252Fhome%26a%3DADD_SERVICE_FLAG&amp;passive=true&amp;alinsu=0&amp;aplinsu=0&amp;alwf=true&amp;ltmpl=start&amp;skipvpage=true&amp;rm=false&amp;showra=1&amp;fpui=2&amp;naui=8#s01' method='post'>

<label for='log'>Username : 

Unknown end tag for &lt;/label&gt;

<input id='Email' name='Email' size='20' type='text'/>

<label for='pwd'>Password : 

Unknown end tag for &lt;/label&gt;

<input id='Passwd' name='Passwd' size='20' type='password'/>

<input id='signIn' name='signIn' type='submit' value='Đăng nhập'/>

<label for='rememberme'><input checked='checked' id='rememberme' name='rememberme' type='checkbox' value='forever'/> Ghi nhớ

Unknown end tag for &lt;/label&gt;




Unknown end tag for &lt;/form&gt;



Unknown end tag for &lt;/div&gt;



<div class='loginregister'>
<a href='https://www.blogger.com/signup.g' target='_blank'>Đăng kí­

Unknown end tag for &lt;/a&gt;

 | <a href='http://www.blogger.com/forgot.g' target='_blank'>Quên mật khẩu ?

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



<div class='slide'><a class='btn-slide' href='#'>Login 

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/div&gt;


```
Trả lời với trích dẫn nội dung bài viết này