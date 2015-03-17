Demo :

![http://i14.servimg.com/u/f14/16/58/45/96/114.jpg](http://i14.servimg.com/u/f14/16/58/45/96/114.jpg)

Cách làm :

Bước 1 : vào css thêm đoạn này vào :


```


td.pamessage {
background-color: none;
border-top: none;
border-bottom: none;
color: #686868;
text-shadow: 1px 1px 0 white;
text-align: justify;
font-size: 11px;
}
.pamessage h6 {
margin: 3px;
font-size: 11px;
}
.papartenaire img {
width: 50px;
height: 18px;
}

div.msgaccueil {
background-color: #6C6C6C;
padding: 10px;
border-top: 1px solid white;
border-bottom: 1px solid white;
-webkit-box-shadow: inset 0 0 10px 5px #585858;
-moz-box-shadow: inset 0 0 10px 5px #585858;
box-shadow: inset 0 0 10px 5px #585858;
}
.msgaccueil #main {
margin: 10px auto;
width: 750px;
}
.msgaccueil #gallery {
-webkit-border-radius: 5px;
-moz-border-radius: 5px;
border-radius: 5px;
text-align: center;
border-top: 1px solid white;
background: url(http://i14.servimg.com/u/f14/16/58/45/96/panel10.jpg) repeat-x bottom center #F0F0F0;
width: 750px;
overflow: hidden;
}
.msgaccueil #slides {
height: 280px;
width: 800px;
overflow: hidden;
}
.msgaccueil .slide {
float: left;
height: 200px;
width: 750px;
text-align: justify;
}
div.secondarytitle, td.secondarytitle {
width: 770px;
text-align: center;
background: url(http://i14.servimg.com/u/f14/16/58/45/96/catego10.png) no-repeat center center;
}
div.secondarytitle h2, td.secondarytitle h2 {
color: #109987;
text-shadow: 1px 1px 0 white;
font-size: 12px;
letter-spacing: 4px;
text-transform: uppercase;
font-weight: 400;
background: #F0F0F0;
}
.secondarytitle h2 {
color: white;
font-size: 12px;
font-family: arial, sans-serif;
font-weight: 700;
text-shadow: 1px 1px 0 black;
filter: dropshadow(color=#f2f1f1, offx=1, offy=1);
padding-left: 5px;
}
.msgaccueil #menu {
height: 45px;
}
.msgaccueil ul {
margin: 0;
padding: 0;
}
.msgaccueil .fbar {
width: 2px;
background: url(http://i14.servimg.com/u/f14/16/58/45/96/divide10.png) no-repeat right;
}
.msgaccueil li {
width: 60px;
display: inline-block;
list-style: none;
height: 45px;
overflow: hidden;
}
.msgaccueil li.act, .msgaccueil li.act:hover {
background: url(http://i14.servimg.com/u/f14/16/58/45/96/active10.png) no-repeat;
}
.msgaccueil li.act a {
cursor: pointer;
}
.msgaccueil li a {
display: block;
background: url(http://i14.servimg.com/u/f14/16/58/45/96/divide10.png) no-repeat right;
height: 37px;
padding-top: 8px;
cursor: pointer;
}
.msgaccueil a img {
border: none;
}


```

Bước 2 : vào Index\_body tìm


```

<!-- BEGIN disable_viewonline -->
...
đến
...
<!-- END disable_viewonline -->



```
Xóa đi và thay = code sau


```

<!-- BEGIN disable_viewonline -->
<div class="msgaccueilbordure">

<div class="msgaccueil">

<div id="main">

<div id="gallery">

<div id="slides" style="width: 3000px; margin-left: 0px;">

<div class="slide">

<table width="100%" border="0" cellspacing="7">

<tbody><tr><td colspan="3" class="secondarytitle">

<h2>Số người đang xem

Unknown end tag for &lt;/h2&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



<p> <img src="http://icons.iconarchive.com/icons/dryicons/aesthetica-2/16/blog-post-edit-icon.png" width="16" title="Tổng số bài viết"> {TOTAL_POSTS}

Unknown end tag for &lt;/p&gt;


<li style="background: #DDD;font-size: 0;height: 1px;line-height: 0;margin: 6px 7px; width: 386px;">

Unknown end tag for &lt;/li&gt;


<p> <img src="http://cdn1.iconfinder.com/data/icons/eleganticons/images/Person-group.png" width="16" title="Thành viên"> {TOTAL_USERS}

Unknown end tag for &lt;/p&gt;


<li style="background: #DDD;font-size: 0;height: 1px;line-height: 0;margin: 6px 7px; width: 386px;">

Unknown end tag for &lt;/li&gt;


<p> <img src="http://cdn1.iconfinder.com/data/icons/humano2/128x128/stock/stock_new-labels.png" width="16" title="Thành viên mới"> {NEWEST_USER}

Unknown end tag for &lt;/p&gt;


<li style="background: #DDD;font-size: 0;height: 1px;line-height: 0;margin: 6px 7px; width: 386px;">

Unknown end tag for &lt;/li&gt;





<p> <img src="http://cdn1.iconfinder.com/data/icons/SUPERVISTA/business/png/128/column_chart.png" width="16" title="Statistics"> {TOTAL_USERS_ONLINE}

Unknown end tag for &lt;/p&gt;


<li style="background: #DDD;font-size: 0;height: 1px;line-height: 0;margin: 6px 7px; width: 386px;">

Unknown end tag for &lt;/li&gt;


<br>   <img src="http://cdn1.iconfinder.com/data/icons/STROKE/business/png/128/group_data.png" width="16" title="Lượt truy cập"> {RECORD_USERS} <br>
<li style="background: #DDD;font-size: 0;height: 1px;line-height: 0;margin: 6px 7px; width: 386px;">

Unknown end tag for &lt;/li&gt;


<br> <img src="http://cdn1.iconfinder.com/data/icons/CrystalClear/128x128/filesystems/connect_to_network.png" width="16" title="Đang online"> {LOGGED_IN_USER_LIST}
<li style="background: #DDD;font-size: 0;height: 1px;line-height: 0;margin: 6px 7px; width: 386px;">

Unknown end tag for &lt;/li&gt;


<p> <img src="http://cdn1.iconfinder.com/data/icons/humano2/128x128/apps/config-users.png" width="16" title="Nhóm"> {LEGEND} : {GROUP_LEGEND}

Unknown end tag for &lt;/p&gt;







Unknown end tag for &lt;/div&gt;



<div class="slide">

<table width="100%" cellspacing="10" border="0">

<tbody>
<tr><td colspan="3" class="secondarytitle"><h2>Tình hình diễn đàn

Unknown end tag for &lt;/h2&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




<div style="height: 240px; overflow: scroll;">
<img src="http://cdn1.iconfinder.com/data/icons/iDroid_icons/Calendar.png" width="16" title="Thành viên kết nối trong 24h">{L_ONLINE_USERS}
{L_CONNECTED_MEMBERS}<br />
<p>  <img src="http://cdn1.iconfinder.com/data/icons/Easter_Icon_Set/128/cake.png" width="16" title="sinh nhật">{L_WHOSBIRTHDAY_TODAY}{L_WHOSBIRTHDAY_WEEK}

Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;


<div class="clear">

Unknown end tag for &lt;/div&gt;








Unknown end tag for &lt;/div&gt;



<div class="slide">

<table width="100%" border="0" cellspacing="10">
<tbody><tr>
<td colspan="3" class="secondarytitle">

<h2>Liên kết

Unknown end tag for &lt;/h2&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




<td class="pamessage" width="480" valign="top">
<h6>Hợp tác cùng nhau phát triển

Unknown end tag for &lt;/h6&gt;



<table align="center" border="0" cellspacing="5" cellpadding="0" style="margin-left: 10px; margin-bottom: 5px;">
<tbody><tr>

<td width="88" height="31" class="toppartenaire">
<td width="88" height="31" class="toppartenaire"><a href="http://www.cntt-k3.org/"><img src="http://i43.servimg.com/u/f43/17/93/70/94/logo1010.jpg" width="88" height="31">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;



<td width="88" height="31" class="toppartenaire"><a href="http://www.cntt-k3.org/"><img src="http://i43.servimg.com/u/f43/17/93/70/94/logo1010.jpg" width="88" height="31">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;



<td width="88" height="31" class="toppartenaire"><a href="http://www.cntt-k3.org/"><img src="http://i43.servimg.com/u/f43/17/93/70/94/logo1010.jpg" width="88" height="31">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;



<td width="88" height="31" class="toppartenaire"><a href="http://www.cntt-k3.org/"><img src="http://i43.servimg.com/u/f43/17/93/70/94/logo1010.jpg" width="88" height="31">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;





Unknown end tag for &lt;/tr&gt;

<tr>

<td width="88" height="31" class="toppartenaire"><a href="http://www.cntt-k3.org/"><img src="http://i43.servimg.com/u/f43/17/93/70/94/logo1010.jpg" width="88" height="31">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;



<td width="88" height="31" class="toppartenaire"><a href="http://www.cntt-k3.org/"><img src="http://i43.servimg.com/u/f43/17/93/70/94/logo1010.jpg" width="88" height="31">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;



<td width="88" height="31" class="toppartenaire"><a href="http://www.cntt-k3.org/"><img src="http://i43.servimg.com/u/f43/17/93/70/94/logo1010.jpg" width="88" height="31">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;



<td width="88" height="31" class="toppartenaire"><a href="http://www.cntt-k3.org/"><img src="http://i43.servimg.com/u/f43/17/93/70/94/logo1010.jpg" width="88" height="31">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;





Unknown end tag for &lt;/tr&gt;

<tr>

<td width="88" height="31" class="toppartenaire"><a href="http://www.cntt-k3.org/"><img src="http://i43.servimg.com/u/f43/17/93/70/94/logo1010.jpg" width="88" height="31">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;



<td width="88" height="31" class="toppartenaire"><a href="http://www.cntt-k3.org/"><img src="http://i43.servimg.com/u/f43/17/93/70/94/logo1010.jpg" width="88" height="31">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;



<td width="88" height="31" class="toppartenaire"><a href="http://www.cntt-k3.org/"><img src="http://i43.servimg.com/u/f43/17/93/70/94/logo1010.jpg" width="88" height="31">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;



<td width="88" height="31" class="toppartenaire">

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr>

Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;











Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;

<div class="slide"><iframe src="/chatbox/" style="width: 750px; height: 270px;" frameborder="0">

Unknown end tag for &lt;/iframe&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div id="menu"><ul><li class="fbar inact"> 

Unknown end tag for &lt;/li&gt;

<li class="menuItem inact act"><a><img src="http://theme3.cssactif.com/js/slider/img/sample_slides/thumb_about.png" alt="thumbnail">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li class="menuItem inact"><a><img src="http://theme3.cssactif.com/js/slider/img/sample_slides/thumb_concours.png" alt="thumbnail">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li class="menuItem inact"><a><img src="http://theme3.cssactif.com/js/slider/img/sample_slides/thumb_love.png" alt="thumbnail">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li class="menuItem inact"><a><img src="http://theme3.cssactif.com/js/slider/img/sample_slides/thumb_chat.png" alt="thumbnail">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;



Unknown end tag for &lt;/ul&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



<script src="http://theme3.cssactif.com/js/nivo/jquery.nivo.slider.pack.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;




<!-- END disable_viewonline -->


```


thế là xong ^^