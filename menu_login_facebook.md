Một cái Menu rất style để dụ dỗ tín đồ Facebook đăng nhập Forum bằng tài khoản của họ, nhưng cũng rất gọn gàng thu lại bên phải website. Đó chính là nội dung dưới đây!

Sau khi kích hoạt chức năng đăng nhập tài khoản bằng Facebook, bạn hãy dán Code này vào dưới cùng của Index\_body.

```

<style type="text/css">
#gb{position:fixed;top:50px;z-index:+1000;}* html #gb{position:relative;}.gbtab{height:130px;width:28px;float:left;cursor:pointer;-moz-border-radius-bottomleft:10px;-moz-border-radius-topleft:10px;border-top: 2px #adadad solid;border-left: 2px #adadad solid;border-bottom: 2px #adadad solid;color: #adadad;padding-right:3px;background:url('http://i24.servimg.com/u/f24/15/64/85/86/facebo12.png') no-repeat;}.gbcontent{float:left;border:2px solid #990000;background:#F5F5F5;padding:10px;}


Unknown end tag for &lt;/style&gt;


<script type="text/javascript">
function showHideGB(){
var gb = document.getElementById("gb");
var w = gb.offsetWidth;
gb.opened ? moveGB(0, 30-w) : moveGB(20-w, 0);
gb.opened = !gb.opened;
}
function moveGB(x0, xf){
var gb = document.getElementById("gb");
var dx = Math.abs(x0-xf) > 10 ? 5 : 1;
var dir = xf>x0 ? 1 : -1;
var x = x0 + dx * dir;
gb.style.right = x.toString() + "px";
if(x0!=xf){setTimeout("moveGB("+x+", "+xf+")", 10);}
}


Unknown end tag for &lt;/script&gt;


<div style="right: -174px;" id="gb">
<div class="gbtab" onclick="showHideGB()">


Unknown end tag for &lt;/div&gt;


<div class="gbcontent">

<table border="0" width="150" height="110"><tr><td align="left"><!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml"
xmlns:fb="http://www.facebook.com/2008/fbml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
<title>Tên Forum

Unknown end tag for &lt;/title&gt;




Unknown end tag for &lt;/head&gt;


<body>
<h1>Login bằng tài khoản FaceBook

Unknown end tag for &lt;/h1&gt;


<p><fb:login-button onlogin="window.location='/facebook_connect.forum'" v="2"  perms="offline_access,email,user_birthday,user_website,user_location" autologoutlink="true">

Unknown end tag for &lt;/login-button&gt;



Unknown end tag for &lt;/p&gt;




<div id="fb-root">

Unknown end tag for &lt;/div&gt;


<script>
window.fbAsyncInit = function() {
FB.init({appId: 'Điền App ID của forum bạn vào đây', status: true, cookie: true,
xfbml: true});
};
(function() {
var e = document.createElement('script');
e.type = 'text/javascript';
e.src = document.location.protocol +
'//connect.facebook.net/vi_VN/all.js';
e.async = true;
document.getElementById('fb-root').appendChild(e);
}());


Unknown end tag for &lt;/script&gt;




Unknown end tag for &lt;/body&gt;




Unknown end tag for &lt;/html&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;

<!

```


Trong code trên chú ý: Tìm "Tên Forum" thay bằng tên forum của bạn VD: Chinh Phục, hay bất cứ tên gì bạn thích. Tìm "Điền App ID của forum bạn vào đây" thay bằng App ID của bạn VD: 123456789012345. Phải thay đúng nếu không khi bấm vào Đăng nhập nó sẽ báo "Có lỗi xảy ra, vui lòng thử lại sau".

Demo:
![http://i24.servimg.com/u/f24/15/64/85/86/demotu10.png](http://i24.servimg.com/u/f24/15/64/85/86/demotu10.png)


Xong rồi!