![http://i38.servimg.com/u/f38/16/58/45/96/214.jpg](http://i38.servimg.com/u/f38/16/58/45/96/214.jpg)

Bước 1 : Cho cái này vào Css :

```

#contactFormContainer {
position: absolute;
z-index: 999;
}
#contactForm {
background: url("http://diendan.mutruyenky.net/images/styles/gianglong/contactform/images/bgform.gif") repeat-y scroll left center white;
border: 1px solid #F1F1F1;
color: #444;
display: none;
height: 189px;
padding: 7px 12px;
width: 558px;
}
.bar {
background: url("http://diendan.mutruyenky.net/images/styles/gianglong/contactform/images/ajax-loader.gif") no-repeat scroll center center transparent;
display: none;
height: 40px;
margin-top: 100px;
width: 230px;
}
#contactForm input {
color: #444;
font-size: 20px;
margin: 4px 0;
padding: 5px;
}
.textbox, textarea, select {
font: normal 11px Tahoma,Calibri,Verdana,Geneva,sans-serif;
color: black;
background: white none;
border: 1px solid #6B91AB;
padding: 4px;
outline: 0;
-moz-border-radius: 3px;
-webkit-border-radius: 3px;
border-radius: 3px;
}
label {
cursor: default;
}
.cb_cookieuser_navbar {
position: relative;
top: 2px;
}
#contactForm .submit {
background: -moz-linear-gradient(center top ,white,#F6F6F6 50%,#F0F0F0 50%,white) repeat scroll 0 0 transparent;
border: 1px solid #BBB;
box-shadow: 1px 1px white inset,-1px -1px white inset;
cursor: pointer;
font-size: 20px;
height: 45px;
padding: 5px;
text-shadow: 0 1px white;
width: 277px;
}
#contactFormContainer .contact {
background: url("http://diendan.mutruyenky.net/images/styles/gianglong/contactform/images/contact_me.png") repeat scroll 0 0 transparent;
bottom: -44px;
cursor: pointer;
height: 47px;
left: 0;
position: absolute;
width: 305px;
}
.dangkibut a:link,.dangkibut a:visited{background:url("http://diendan.mutruyenky.net/images/styles/gianglong/contactform/images/dangki.gif") no-repeat scroll center top orange;color:transparent;display:block;height:46px;width:236px}.dangkibut a:hover,.dangkibut a:active{background:url("http://diendan.mutruyenky.net/images/styles/gianglong/contactform/images/dangki.gif") no-repeat scroll center bottom blue}
.morelinks {
border-top: 1px dotted #CCC;
list-style: circle outside none;
margin-top: 10px;
padding-left: 15px;
padding-top: 7px;
}
.morelinks li {
list-style: circle outside none;
}
#backgroundPopup {
background: none repeat scroll 0 0 black;
display: none;
height: 100%;
left: 0;
position: fixed;
top: 0;
width: 100%;
z-index: 11;
}

```


Bước 2 : vào MODULES >> HTML & JAVASCRIPT >> Javascript codes managementAdd : Enable Javascript code management :
Đánh dấu có nhá

Tiếp theo
Javascript Code : tạo 1 Scripts mới

Title **: Đăng nhập đóng mở
Placement : đánh dấu : In all the pages
Javascript Code** :

```

$(document).ready(function(){
//function for contact form dropdown
function contact() {
if ($("#contactForm").is(":hidden")){
$("#contactForm").slideDown("slow");
$("#backgroundPopup").css({"opacity": "0.7"});
$("#backgroundPopup").fadeIn("slow");
}
else{
$("#contactForm").slideUp("slow");
$("#backgroundPopup").fadeOut("slow");
}
}

//run contact form when any contact link is clicked
$(".contact").click(function(){contact()});

//animation for same page links #
$('a[href*=#]').each(function() {
if (location.pathname.replace(/\//,'') == this.pathname.replace(/\//,'')
&& location.hostname == this.hostname
&& this.hash.replace(/#/,'') ) {
var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
if ($(this.hash).length) {
$(this).click(function(event) {
var targetOffset = $(this.hash).offset().top;
var target = this.hash;
event.preventDefault();
$('html, body').animate({scrollTop: targetOffset}, 500);
return false;
});
}
}
});



//submission scripts
$('.contactForm').submit( function(){
//statements to validate the form
var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var email = document.getElementById('e-mail');
if (!filter.test(email.value)) {
$('.email-missing').show();
} else {$('.email-missing').hide();}
if (document.cform.name.value == "") {
$('.name-missing').show();
} else {$('.name-missing').hide();}
if (document.cform.message.value == "") {
$('.message-missing').show();
} else {$('.message-missing').hide();}
if ((document.cform.name.value == "") || (!filter.test(email.value)) || (document.cform.message.value == "")){
return false;
}

if ((document.cform.name.value != "") && (filter.test(email.value)) && (document.cform.message.value != "")) {
//hide the form
$('.contactForm').hide();

//show the loading bar
$('.loader').append($('.bar'));
$('.bar').css({display:'block'});

//send the ajax request
$.post('mail.php',{name:$('#name').val(),
email:$('#e-mail').val(),
message:$('#message').val()},

//return the data
function(data){
//hide the graphic
$('.bar').css({display:'none'});
$('.loader').append(data);
});

//waits 2000, then closes the form and fades out
setTimeout('$("#backgroundPopup").fadeOut("slow"); $("#contactForm").slideUp("slow")', 2000);

//stay on the page
return false;
}
});
//only need force for IE6
$("#backgroundPopup").css({
"height": document.documentElement.clientHeight
});
});
```


Bước 3 Vào overall header tìm code sau

```

<a id="top" name="top" accesskey="t">

Unknown end tag for &lt;/a&gt;




```
Và chèn Code này vào dưới nó :

```

<!-- BEGIN switch_user_logged_out -->
<div id="contactFormContainer">

<div id="contactForm" style="display: none; ">
<div class="loader">

Unknown end tag for &lt;/div&gt;


<div class="bar">

Unknown end tag for &lt;/div&gt;



<div style="float:left;">

<form id="navbar_loginform" class="contactForm" action="/login.forum" method="post" name="form_login">
<table>
<tbody><tr><td>

<input placeholder="Tên đăng nhập"  type="text" size="20" name="username">



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;


<tr><td>
<input placeholder="Mật khẩu" type="password" size="20" name="password">



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;


<tr><td style="color:#ffffff;"><label for="cb_cookieuser_navbar">

<input checked="" type="checkbox" name="cookieuser" value="1" id="cb_cookieuser_navbar" class="cb_cookieuser_navbar" accesskey="c" tabindex="103"> Ghi nhớ?

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;


<tr><td>

<input type="submit"name="login" value="Đăng nhập" style="" class="submit">

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;





Unknown end tag for &lt;/form&gt;





Unknown end tag for &lt;/div&gt;


<div style="float:left; margin-left:35px; width:236px;">
<p style="font-size:14px; font-weight:bold; margin-bottom:10px;"> Nếu chưa có tài khoản, xin vui lòng ĐĂNG KÝ bằng cách nhấn nút dưới đây.

Unknown end tag for &lt;/p&gt;


<div class="dangkibut"><a href="/register" rel="nofollow">Dang ki

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/div&gt;


<ul class="morelinks">
<li><a href="/profile?mode=sendpassword">Quên mật khẩu?

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;


<li><a href="/faq">Trợ giúp

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;


<div class="contact" style="height:31px; width:28px;background:url(http://diendan.mutruyenky.net/images/icons/icon_close.png); position:relative; left:240px; bottom:-35px; cursor:pointer;">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;






Unknown end tag for &lt;/div&gt;



<div class="contact">

Unknown end tag for &lt;/div&gt;







Unknown end tag for &lt;/div&gt;


<div id="backgroundPopup" style="height: 673px; display: none; opacity: 0.7; ">

Unknown end tag for &lt;/div&gt;


<!-- END switch_user_logged_out -->



```
Thoát Admin thôi ^^
