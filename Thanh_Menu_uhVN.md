Cho vào Css đoạn này :

```

.lavaLampWithImage {
position: relative;
height: 47px;
width: 970px;
background: url("http://i967.photobucket.com/albums/ae153/ligerv/uhmvn/bg_menu.png") no-repeat scroll center center transparent;
padding: 0 0 0 30px;
margin: 0;
overflow: hidden;
}
.lavaLampWithImage li {
float: left;
list-style: none;
cursor: pointer;
height: 47px;
}
.lavaLampWithImage li.back {
background: url("http://i967.photobucket.com/albums/ae153/ligerv/uhmvn/bg_lvlamb.png") no-repeat right -47px;
width: 25px; height: 47px;
z-index: 8;
position: absolute;
}
.lavaLampWithImage li.back .left {
background: url("http://i967.photobucket.com/albums/ae153/ligerv/uhmvn/bg_lvlamb.png") no-repeat top left;
height: 47px;
margin-right: 25px; /* 7px is the width of the rounded shape */
float: none;
}

.lavaLampWithImage li a {
font: bolder 12px arial;
text-decoration: none;
color: white;
outline: none;
text-align: center;
top: 8px;
text-transform: uppercase;
z-index: 10;
display: block;
float: left;
height: 30px;
position: relative;
overflow: hidden;
margin: 8px 19px 0;
text-shadow: 0px 1px 0px black;
}
.lavaLampWithImage li a:hover, .lavaLampWithImage li a:active, .lavaLampWithImage li a:visited {
border: none;
}
```



Vào header tìm :

```

<!-- END switch_login_popup -->

<a name="top">

Unknown end tag for &lt;/a&gt;


{JAVASCRIPT}


và cho vào dưới nó code sau :

Cod: Chọn code
<script src="http://liikeriv.googlecode.com/files/jquery.easing.min.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;



<script src="http://liikeriv.googlecode.com/files/jquery.lavalamp.min.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;



<script type="text/javascript">

$(function() {

$("#1").lavaLamp({

fx: "backout",

speed: 800,

click: function(event, menuItem) {

return false;

}

});

});



Unknown end tag for &lt;/script&gt;

<center>

<div style="margin-bottom: -5px;">

<ul class="lavaLampWithImage" id="1">

<li onclick="window.open('http://kisslbb.forumvi.net/forum');return false;"><a rel="nofollow" href="/forum">Trang chủ

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;



<li class="current" onclick="http://kisslbb.forumvi.net/forum'"><a rel="nofollow" href="/forum">Diễn đàn

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;



<li onclick="window.open('http://blog.uhm.vn/','blog.uhm.vn');return false;"><a rel="nofollow" href="#MatCuoi">Mặt cười

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;



<li onclick="window.open('http://yahoo.uhm.vn/','yahoo.uhm.vn');return false;"><a rel="nofollow" href="#KiemTraAnNick">Kiểm tra ẩn nick

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;



<li onclick="window.open('http://xepthu.uhm.vn/','xepthu.uhm.vn');return false;"><a rel="nofollow" href="#XepThu">Xếp thú

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;



<li onclick="window.open('http://taochu.uhm.vn/','taochu.uhm.vn');return false;"><a rel="nofollow" href="#TaoChu">Tạo chữ

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;



<li onclick="window.open('http://photo.uhm.vn/','photo.uhm.vn');return false;"><a rel="nofollow" href="#Upảnh">Up ảnh

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;



<li onclick="window.open('http://boi.uhm.vn/','boi.uhm.vn');return false;"><a rel="nofollow" href="#Bóitoán">Bói toán

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;



<li onclick="window.open('http://diendan.4allvn.biz/f44-forum');return false;"><a rel="nofollow" href="http://diendan.4allvn.biz/f44-forum">Forumotion

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;



<li onclick="window.open('http://game.uhm.vn/','game.uhm.vn');return false;"><a rel="nofollow" href="#game">Games

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;



<li onclick="window.open('http://tivi.uhm.vn/','tivi.uhm.vn');return false;"><a rel="nofollow" href="#tv">Tivi

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;



Unknown end tag for &lt;/ul&gt;

 

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/center&gt;



```
xong