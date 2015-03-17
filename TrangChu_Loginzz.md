Trang chủ đăng nhập có thêm tính năng đăng ký!
Demo: http://deezsign.forumotion.com/h4-page
Đặc điểm:
- Ngoài cái logo ra thì ko có 1 hình ảnh nào khác
- Sử dụng HTML5 tag để kiểm tra xem người dùng có nhập vào form hoặc có nhập đúng định dạng địa chỉ email hay không Cười nhe răng
- Nhẹ..tất nhiên!
- Có thêm phần quy định đặt tên, ae chỉnh sửa tuỳ ý.
Nhược điểm: thỉnh thoảng dính lỗi element trên chrome(cái nút submit trong form đăng nhập), nếu ko muốn lỗi đó thì rep tại đây để mình gửi bản button hình ảnh.

Code HTML(HTML pages management):

```

<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>zzLogin - Designed by Juskteez

Unknown end tag for &lt;/title&gt;


<script type="text/javascript" src="http://code.jquery.com/jquery-1.7.2.min.js">

Unknown end tag for &lt;/script&gt;


<style type="text/css">
body {
background:#2a9d65;margin:0;padding:0;
text-align: center;font-style:italic;
font-family: Arial;font-size: 14px;color: white;
}
:focus{outline: none}
a {text-decoration: none;color: white;}
.logo {
width: 250px;height: 110px;
margin: auto;margin-top: 15%;
}
h3 {margin: 2px;color: white;text-align: center;}
input {margin: 2px;}
input#username {
width: 238px;height: 36px;padding-left:10px;margin-bottom:5px;
border: 1px solid #0a5e35;font-style:italic;font-family: Arial;
box-shadow: 0 0 1px rgba(255,255,190,0.75);-webkit-box-shadow: 0 0 2px rgba(255,255,190,0.75);
}
input#password {
width: 188px;height: 36px;padding-left:10px;margin-left: -48px;
border: 1px solid #0a5e35;font-style:italic;font-family: Arial;margin-bottom: 5px;
box-shadow: 0 0 1px rgba(255,255,190,0.75);-webkit-box-shadow: 0 0 2px rgba(255,255,190,0.75);-webkit-transform: translate(0px);
}
#fake-submit {
width: 38px;height: 38px;border: 1px solid #ffffff;margin-left: 8px;color: transparent;position: absolute;
background: #22a868;box-shadow: 0 0 1px rgba(100,100,100,0.75);-webkit-box-shadow: 0 0 2px rgba(100,100,100,0.75);
-moz-transform: translate(0px,2px);-webkit-transform: translate(0px,2px);
}
#submit {width: 40px;height: 40px;border: 1px solid transparent;margin-left: 8px;color: transparent;position: absolute;z-index: 2;
background: transparent;-webkit-transform: translate(97px);cursor: pointer;}
#arrow {
content: "";width: 11px;height: 10px;background: white;position: absolute;
margin-left: 18px;margin-top: 17px;-webkit-transform: translate(84px);
}
#arrow:after {
content: "";border-left: 10px solid #fff;position: absolute;
border-top: 10px solid transparent;border-bottom: 10px solid transparent;
margin-left: 5px;margin-top: -5px;
}
#plus {
content: "";width: 10px;height: 10px;background: white;position: absolute;
margin-left: 23px;margin-top: 17px;box-shadow: 0 10px 0 #fff, 10px 0 0 #fff, 0 -10px 0 #fff, -10px 0 0 #fff;
-webkit-transform: translate(-2px);
}
#switch a {cursor: pointer;}
.rules {
margin: auto;text-align: left;width: 100%;height: 280px;
background:#2a9d65;box-shadow: 15px 0 0 #2a9d65, -15px 0 0 #2a9d65;
-moz-transition: all 0.5s ease;-webkit-transition: all 0.5s ease;
position: absolute;z-index: 10;
}
.rules div {margin: auto;width: 225px;}
.rules ul {max-width: 225px;padding: 0;font-style:normal;font-size: 12px;}
.agree-butt {text-align: center;padding: 5px;list-style: none;font-size: 14px;font-weight: bold;}
.agree-butt a {border: 2px solid #fff;padding: 2px;background: rgba(255,255,255,0.1);}
.agree-butt a:hover {border: 2px dotted #fff;background: transparent;cursor: pointer;}


Unknown end tag for &lt;/style&gt;


<script type="text/javascript">
$(document).ready(function() {
/* Đổi nút bật/tắt */
$("#switch a").click(function() {
$("#switch a").toggle()
});
/* Mở bảng đăng ký, đóng bản đăng nhập */
$("#open-reg").click(function(){
$(".register").slideDown("fast");
$(".login").slideUp("fast")
});
/* Đóng bảng đăng ký, mở bảng đăng nhập */
$("#close-reg").click(function(){
$(".register").slideUp("fast");
$(".login").slideDown("fast")
});
/* Đóng bảng quy định */
$("#agree").click(function(){
$(".rules").css('opacity',(0));
$(".rules").css('z-index',(-1))
});
});


Unknown end tag for &lt;/script&gt;




Unknown end tag for &lt;/head&gt;


<body>
<aside class="logo">
<a href="/"><img src="http://i33.servimg.com/u/f33/17/73/03/65/zzlogo10.png" alt="Logo" title="Logo"/>

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/aside&gt;


<section class="content">
<form action="/login" method="post" class="login">
<input type="text" id="username" name="username" placeHolder="Hãy điền tên tài khoản..." required/><br/>
<input type="password" id="password" name="password" placeHolder="Mật khẩu" required/>
<span id="fake-submit">

Unknown end tag for &lt;/span&gt;

<span id="arrow">

Unknown end tag for &lt;/span&gt;

<input type="submit" id="submit" name="submit" value="OK"/>


Unknown end tag for &lt;/form&gt;


<a href="">Quên mật khẩu?

Unknown end tag for &lt;/a&gt;


<span id="switch"><a id="open-reg">Chưa có tài khoản?

Unknown end tag for &lt;/a&gt;

<a id="close-reg" style="display:none">Đăng nhập

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;


<form action="/register?agreed=true&step=2" method="post" class="register" style="display: none">
<div class="rules">
<div>
<h3>Quy định đặt tên!

Unknown end tag for &lt;/h3&gt;


<article>
<ul>
<li>Không được đặt theo tên của các vị anh hùng dân tộc Việt Nam.

Unknown end tag for &lt;/li&gt;


<li>Không được đặt tên gần giống với các thành viên khác để tránh gây hiểu nhầm.

Unknown end tag for &lt;/li&gt;


<li>Không chứa các từ khóa có nội dung vi phạm thuần phong mỹ tục của Việt Nam, chính trị, tôn giáo, khiêu dâm.

Unknown end tag for &lt;/li&gt;


<li>Không đặt dạng URL (VD: domain.com)

Unknown end tag for &lt;/li&gt;


<li class="agree-butt"><a id="agree">Tôi đồng ý

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/article&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<h3>Đăng ký nhanh

Unknown end tag for &lt;/h3&gt;


<input type="text" id="username" maxlength="15" name="username" placeHolder="Tên tài khoản (giới hạn 15 ký tự)" required/><br/>
<input type="email" id="username" name="email" placeHolder="Địa chỉ Email" required/><br/>
<input type="password" id="username" name="password" placeHolder="Mật khẩu" required/><br/>
<input type="password" id="password" name="password" placeHolder="Nhập lại mật khẩu" required/>
<span id="fake-submit">

Unknown end tag for &lt;/span&gt;

<span id="plus">

Unknown end tag for &lt;/span&gt;

<input type="submit" id="submit" name="submit" value="OK"/>


Unknown end tag for &lt;/form&gt;




Unknown end tag for &lt;/section&gt;


<span style="position:fixed;width:100%;bottom:5px;left:0;font-family: Georgia;">
Design and Code by <a href="mailto:vhuyphong@gmail.com" target="_blank">Juskteez

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/body&gt;




Unknown end tag for &lt;/html&gt;





```