Chức năng :
Đăng nhập ko chuyển trang
chạy dọc forum
đơn giản và rất nhẹ lè lưỡi + tiện dụng

![http://i30.servimg.com/u/f30/17/20/25/96/captur11.png](http://i30.servimg.com/u/f30/17/20/25/96/captur11.png)
Cách làm :

Bước 1 : Cho cái này vào Css (Display -> Colors -> CSS Stylesheet)

```

#LGoverlay {
position: fixed;
top: 0px;
left: 0px;
min-height: 101%;
width: 100%;
background-color: #000;
opacity: 0.7;
filter:Alpha(opacity=70);
z-index: 999;
}
#LGlogin {
background: #EEE;
color: #777;
left: 25%;
position: fixed;
top: 30%;
width: 50%;
z-index: 999;
box-shadow: 10px 10px 40px black;
-moz-box-shadow: 10px 10px 40px black;
-webkit-box-shadow: 10px 10px 40px black;
font-family: sans-serif;
text-shadow: 0px 1px 1px white;
color: #666;
}
#LGlogin h1 {
background: #CCC;
margin-top: 0;
padding: 8px 10px;
text-align: left;
border-bottom: 1px solid #888;
}
#LGlogin form {
margin: 10px auto;
width: 90%;
}
#LGlogin img.closebutton {
float: right;
margin: 10px;
background: url('http://i45.servimg.com/u/f45/16/95/07/69/bt_clo10.png') no-repeat 0 -20px;
width: 20px;
height: 20px;
cursor: pointer;
}
#LGlogin img.closebutton:hover {background: url('http://i45.servimg.com/u/f45/16/95/07/69/bt_clo10.png') 0 0px;}
#LGlogin ul {
list-style-type: none;
}
#LGlogin ul li {
float: left;
width: 50%;
font-size: 1.2em;
}
#LGlogin li input {
padding: 4px;
background: #fff;
border: 1px solid #CCC;
border-radius: 3px;
-moz-border-radius: 3px;
-webkit-border-radius: 3px;
}
#LGlogin .login-submit {
display: block;
margin: 15px auto;
background: #CCC;
border: 1px solid;
color: #666;
padding: 5px 10px;
font-weight: bold;
text-shadow: 0px 1px 1px #fff;
border-radius: 3px;
-moz-border-radius: 3px;
-webkit-border-radius: 3px;
cursor: pointer;
}
#LGlogin .login-submit:hover {
color: #AAA;
}
#LGloginbtn {
background: #CCC;
border: 1px solid;
color: #555;
font-weight: bold;
font-size: 1.4em;
padding: 10px 30px;
position: fixed;
right: 10px;
text-shadow: 0 1px 1px white;
top: 5px;
border-radius: 2px;
-moz-border-radius: 2px;
-webkit-border-radius: 2px;
box-shadow: 4px 8px 25px #444;
-webkit-box-shadow: 4px 8px 25px #444;
-moz-box-shadow: 4px 8px 25px #444;
cursor: pointer;
}
#LGloginbtn:hover {
color: #888;
}```



Bước 2 : Cho code này vào Cuối Footer End :

```

<div id="LGoverlay" onclick="LGlogin()" style="display:none">

Unknown end tag for &lt;/div&gt;


<div id="LGloginbtn" onclick="LGlogin();">Log In

Unknown end tag for &lt;/div&gt;


<div id="LGlogin" style="display:none">
<img src="http://illiweb.com/fa/empty.gif" class="closebutton" width="20px" height="20px" onclick="LGlogin();"/>
<h1>Log In

Unknown end tag for &lt;/h1&gt;


<form action="/login.forum" method="post">
<ul>
<li><label for="username">Username

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/li&gt;


<li><input type="text" name="username" size="25" />

Unknown end tag for &lt;/li&gt;


<li><label for="password">Password

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/li&gt;


<li><input type="password" name="password" size="25" />

Unknown end tag for &lt;/li&gt;


<li>Remember me?

Unknown end tag for &lt;/li&gt;


<li><input type="checkbox" name="autologin" checked="checked" />

Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;


<div style="clear:left">

Unknown end tag for &lt;/div&gt;


<input type="submit" class="login-submit" name="login" value="Log in" />
<input name="redirect" type="hidden" value="">


Unknown end tag for &lt;/form&gt;




Unknown end tag for &lt;/div&gt;


```

Bước 3 : Vào : MODULES >> HTML & JAVASCRIPT
Javascript codes management : Tạo 1 Script mới

Title **: Form đăng nhập
Placement : In all the pages
Javascript Code** :

```

function LGlogin() {
var x = document.getElementById('LGlogin');
if (x.style.display == 'none') {
jQuery(x).add('#LGoverlay').fadeIn('slow');
var r = x.getElementsByTagName('form')[0].redirect;
r.value = window.location.href;
}
else {
jQuery(x).add('#LGoverlay').fadeOut('slow');
}
}
jQuery(function(){ if(document.getElementById('logout')) document.getElementById('LGloginbtn').style.display = 'none'; });

```

Thế là xong ( Thoát Admin ra để xem thành quá nhá )