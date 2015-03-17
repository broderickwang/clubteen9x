Demo :

Style 1 :

![http://i15.servimg.com/u/f15/17/54/83/01/demo10.png](http://i15.servimg.com/u/f15/17/54/83/01/demo10.png)


Cách làm :

Bước 1 :
Đặt thanh SideBar vào bên phải khung chuyên mục (Bước này chỉ thao tác trong index\_body)
Cấu trúc của nó sẽ là 2 cột trong một bảng:

```

<table width="100%"><td width="100%" valign="top">Cột chuyên mục

Unknown end tag for &lt;/td&gt;

<td width="30%" valign="top">Cột SideBar

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/table&gt;



```

Ở cột chuyên mục mình dùng chiều ngang là 100% (width="100%") để bước sau tạo button ẩn hiện thì cái cột chuyên mục này sẽ tự động dàn ra 100%. Rất đơn giản phải không? . Giải thích cấu trúc vậy thôi, bây giờ áp dụng nào!

Các bạn tìm code ```
{BOARD_INDEX}  ```-> Cái này chính là cột chuyên mục
Còn cái code ở bước 1 chính là cột SideBar

```

<table width="100%">
<td width="100%" valign="top">
{BOARD_INDEX}


Unknown end tag for &lt;/td&gt;



<td width="30%" valign="top">

<div class="module main" style="margin-top: 1em! important; margin-left: 1em! important;">
<div style="background: #EDEDED url('http://i34.servimg.com/u/f34/17/54/83/01/highli10.png') repeat-x 0 0;border: 1px solid #D7D7D7;border-bottom:0px;height:20px;border-radius:2px 2px 0 0;padding: 7px;font-weight: bold;color: #555;"><img src="http://i34.servimg.com/u/f34/17/54/83/01/user10.png" width="14px" />Tiêu đề thanh SideBar

Unknown end tag for &lt;/div&gt;


<div class="main-content" style="width: 150px; background-color: #FFF; border: 1px solid #DDD;">
Nội dung thanh SideBar


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;





Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/table&gt;


```

Đơn giản phải không nào? Đặt dưới ```
{CHATBOX_TOP}``` nhé

Bài này nguồn từ diendan.chinhphuc.info ^^



Style 2

Demo :



![http://i14.servimg.com/u/f14/16/58/45/96/215.jpg](http://i14.servimg.com/u/f14/16/58/45/96/215.jpg)
Cách làm :

Cũng như trên vào Index\_body tìm code sau

```

{BOARD_INDEX}

```
Và thay thế nó bằng code sau
```


<table width="100%"><tbody><tr><td width="90%" valign="top">
{BOARD_INDEX}

Unknown end tag for &lt;/td&gt;


<td width="25%" valign="top" style="padding-left: 10px">
<aside>
<div class="sidebar">

<!-- BEGIN switch_user_logged_out -->


<div class="section loginButton">
<div class="secondaryContent">


<center>
<a href="javascript:displaymenu('#funybox','center')"><img src="http://i30.servimg.com/u/f30/17/60/71/24/dang_n10.png" title="Iniciar sesion">

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/center&gt;





Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<!-- END switch_user_logged_out -->







<div class="section">

<div class="secondaryContent WidgetFramework_WidgetRenderer_OnlineStaff" id="widget-2">

<h3>
<img src="http://i38.servimg.com/u/f38/16/58/45/96/rss10.png" class="header_icon">
Sự kiện



Unknown end tag for &lt;/h3&gt;


<div class="avatarList WidgetFramework_WidgetRenderer_OnlineStaff">
<ul>


<img src="http://i646.photobucket.com/albums/uu185/vanhoai1111/th_28.gif" alt="" align="" border="0px" /> <span style="font-weight: bold; "><a href="http://www.cntt-k3.biz/t5101-topic"><span style="color: rgb(255, 0, 0); ">Envent của tuần

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;


<div>

Unknown end tag for &lt;/br&gt;


<img src="http://i646.photobucket.com/albums/uu185/vanhoai1111/th_28.gif" alt="" align="" border="0px" /> <span style="font-weight: bold; "><a href="http://www.cntt-k3.biz/t5102-topic"><span style="color: rgb(255, 0, 0); ">Envent Giờ vàng Online

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;


<div>

Unknown end tag for &lt;/br&gt;


<img src="http://i646.photobucket.com/albums/uu185/vanhoai1111/th_28.gif" alt="" align="" border="0px" /> <span style="font-weight: bold; "><a href="http://www.cntt-k3.biz/t5156-topic"><span style="color: rgb(255, 30, 0); ">Tuyển Mod đợt 2 

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;


<div>

Unknown end tag for &lt;/br&gt;



<img src="http://i646.photobucket.com/albums/uu185/vanhoai1111/th_28.gif" alt="" align="" border="0px" /> <span style="font-weight: bold; "><a href="http://www.cntt-k3.biz/t4387-topic"><span style="color: rgb(255, 165, 0); ">Nhân vật lên thớt

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;


<div>

Unknown end tag for &lt;/br&gt;


<img src="http://i646.photobucket.com/albums/uu185/vanhoai1111/th_28.gif" alt="" align="" border="0px" /> <b><a href="http://www.cntt-k3.biz/t3032-topic"><font class="Apple-style-span" color="#0000cd">Mỗi ngày 1 lời yêu thương

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/div&gt;


<div>

Unknown end tag for &lt;/br&gt;


<img src="http://i646.photobucket.com/albums/uu185/vanhoai1111/th_28.gif" alt="" align="" border="0px" /> <b><a href="http://www.cntt-k3.biz/f2-forum"><font class="Apple-style-span" color="#0000cd">Yêu cầu Rip skin

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/div&gt;


<div>

Unknown end tag for &lt;/br&gt;


<img src="http://i646.photobucket.com/albums/uu185/vanhoai1111/th_28.gif" alt="" align="" border="0px" /> <b><a href="http://www.cntt-k3.biz/t5100-topic"><font class="Apple-style-span" color="#0000cd">Đặt hàng skin $$$

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/div&gt;














Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;





Unknown end tag for &lt;/div&gt;





Unknown end tag for &lt;/div&gt;





<div class="section">

<div class="secondaryContent WidgetFramework_WidgetRenderer_OnlineStaff" id="widget-2">

<h3>
<img src="http://i38.servimg.com/u/f38/16/58/45/96/rss10.png" class="header_icon">
Sự kiện



Unknown end tag for &lt;/h3&gt;


<div class="avatarList WidgetFramework_WidgetRenderer_OnlineStaff">
Text
text


Unknown end tag for &lt;/div&gt;





Unknown end tag for &lt;/div&gt;





Unknown end tag for &lt;/div&gt;
















Unknown end tag for &lt;/div&gt;








Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/aside&gt;







Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



```

Tiếp theo cho cái này vào Css
```

.section
{
margin: 10px auto;

}

.sectionMain
{
background-color: rgb(255, 255, 255);
padding: 10px;
margin: 10px auto;
border: 1px solid rgb(215, 215, 215);
border-radius: 4px; -webkit-border-radius: 4px; -moz-border-radius: 4px; -khtml-border-radius: 4px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); -moz-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); -khtml-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

}


.primaryContent > .textHeading:first-child,
.secondaryContent > .textHeading:first-child
{
margin-top: 0;
}

.larger.textHeading,
.xenForm .sectionHeader
{
color: rgb(215, 215, 215);
font-size: 11pt;
margin-bottom: 6px;
}

.larger.textHeading a,
.xenForm .sectionHeader a
{
color: rgb(215, 215, 215);
}
.primaryContent
{
background-color: rgb(253, 253, 253);
padding: 10px;
border-bottom: 1px solid rgb(237, 237, 237);

}
.primaryContent a
{
color: #555555;

}

.secondaryContent
{
background: rgb(249, 249, 249) url('styles/uniform/xenforo/gradients/category-23px-light.png') repeat-x top;
padding: 10px;
border-bottom: 1px solid rgb(215, 215, 215);

}

.menuColumns.secondaryContent{ border-width: 0px 0px 1px 0px; }

.secondaryContent a
{
color: #555555;

}




/* CSS returned from cache. */

/* sidebar structural elements */

.mainContainer
{
float: left;
margin-right: -260px;
width: 100%;
}

.mainContent
{
margin-right: 260px;
}

.sidebar
{
font-size: 11px;
float: right;
width: 225px;

}













/* visitor panel */

.sidebar .visitorPanel
{
overflow: hidden; zoom: 1;
}

.sidebar .visitorPanel h2 .muted
{
display: none;
}

.sidebar .visitorPanel .avatar
{
margin-right: 10px;
float: left;
width: 57px;
height: 57px;


width: auto;
height: auto;
}

.sidebar .visitorPanel .avatar img
{
width: 57px;
height: 57px;
}

.sidebar .visitorPanel .username
{
font-weight: bold;
font-size: 11pt;

}

.sidebar .visitorPanel .stats
{
margin-top: 2px;

}



/* generic sidebar blocks */

.sidebar .section .primaryContent  h3,
.sidebar .section .secondaryContent h3,
.profilePage .mast .section.infoBlock h3
{
font-weight: bold;
font-size: 12px;
color: #555555;
background: rgb(237, 237, 237) url('http://forum.2gvn.com/upload/styles/uniform/xenforo/gradients/highlight.png') repeat-x 0 0;
padding: 6px;
margin: -10px -10px 5px;
border-bottom: 1px solid rgb(215, 215, 215);
border-top-left-radius: 3px; -webkit-border-top-left-radius: 3px; -moz-border-radius-topleft: 3px; -khtml-border-top-left-radius: 3px;
border-top-right-radius: 3px; -webkit-border-top-right-radius: 3px; -moz-border-radius-topright: 3px; -khtml-border-top-right-radius: 3px;
text-shadow: #fff 0px 1px 0px;
box-shadow: inset #fff 0px 1px 0px; -webkit-box-shadow: inset #fff 0px 1px 0px; -moz-box-shadow: inset #fff 0px 1px 0px; -khtml-box-shadow: inset #fff 0px 1px 0px;

}

.sidebar .section .primaryContent  h3,
.sidebar .section .secondaryContent h3,
.profilePage .mast .section.infoBlock h3 {
border-radius: 3px 3px 0px 0px; -webkit-border-radius: 3px 3px 0px 0px; -moz-border-radius: 3px 3px 0px 0px; -khtml-border-radius: 3px 3px 0px 0px;
}

.sidebar .section .primaryContent,
.sidebar .section .secondaryContent {
border-radius: 3px; -webkit-border-radius: 3px; -moz-border-radius: 3px; -khtml-border-radius: 3px;
border: 1px solid rgb(215, 215, 215);
box-shadow: rgba(0,0,0,0.05) 0px 1px 4px; -webkit-box-shadow: rgba(0,0,0,0.05) 0px 1px 4px; -moz-box-shadow: rgba(0,0,0,0.05) 0px 1px 4px; -khtml-box-shadow: rgba(0,0,0,0.05) 0px 1px 4px;
background: #F9F9F9;
}

.sidebar .section .primaryContent  h3 a,
.sidebar .section .secondaryContent h3 a
{
font-weight: bold;
font-size: 12px;
color: #555555;
}

.sidebar .section .secondaryContent .footnote,
.sidebar .section .secondaryContent .minorHeading
{
color: rgb(152, 152, 152);
margin-top: 5px;

}

.sidebar .section .secondaryContent .minorHeading a
{
color: rgb(152, 152, 152);
}












/* list of users with 32px avatars, username and user title */

.sidebar .avatarList li
{
margin: 5px 0;
overflow: hidden;
zoom: 1;

}

.sidebar .avatarList .avatar
{
margin-right: 5px;
float: left;
width: 32px;
height: 32px;


width: auto;
height: auto;
}

.sidebar .avatarList .avatar img
{
width: 32px;
height: 32px;
}

.sidebar .avatarList .username
{
font-size: 11pt;
margin-top: 2px;
display: block;

}

.sidebar .avatarList .userTitle
{
color: rgb(150,150,150);

}









/* list of users */

.sidebar .userList
{
}

.sidebar .userList .username
{
font-size: 11px;

}

.sidebar .userList .username.invisible
{
color: #9b9b9b;

}

.sidebar .userList .username.followed
{

}

.sidebar .userList .moreLink
{
display: block;
}
```

Thế là xong




Style 3
Demo :

![http://i14.servimg.com/u/f14/16/58/45/96/313.jpg](http://i14.servimg.com/u/f14/16/58/45/96/313.jpg)
Cách làm :

Cũng như trên vào Index\_body tìm code sau

```

{BOARD_INDEX}

```
Và thay thế nó bằng code sau

```

<table width="100%"><tbody><tr><td width="90%" valign="top">
{BOARD_INDEX}

Unknown end tag for &lt;/td&gt;


<td width="25%" valign="top" style="padding-left: 10px">


<div class="column-right">
<p> 

Unknown end tag for &lt;/p&gt;








<div class="box">
<div class="box-top"><span>

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;


<div class="box-content">
<h3 class="icoAdd">Thưởng thức âm nhạc

Unknown end tag for &lt;/h3&gt;


<br><p><ul>

<object width="187" height="400">  <param name="movie" value="http://www.nhaccuatui.com/l/vGEcupnRaHd1" />  <param name="quality" value="high" />  <param name="wmode" value="transparent" />  <param name="allowscriptaccess" value="always" />  <param name="flashvars" value="&autostart=false" />  <embed src="http://www.nhaccuatui.com/l/vGEcupnRaHd1" flashvars="target=blank&autostart=false" allowscriptaccess="always" quality="high" wmode="transparent" type="application/x-shockwave-flash" width="180" height="220">

Unknown end tag for &lt;/embed&gt;



Unknown end tag for &lt;/object&gt;







Unknown end tag for &lt;/ul&gt;



Unknown end tag for &lt;/p&gt;





Unknown end tag for &lt;/div&gt;


<div class="box-bot"><span>

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;






<div class="box">
<div class="box-top"><span>

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;


<div class="box-content">
<h3 class="icoAdd1">Sự kiện

Unknown end tag for &lt;/h3&gt;


<p><ul>
<br>

<img src="http://i646.photobucket.com/albums/uu185/vanhoai1111/th_28.gif" alt="" align="" border="0px" /> <span style="font-weight: bold; "><a href="http://www.cntt-k3.org/t4719-topic"><span style="color: rgb(255, 0, 0); ">Tổng hợp Code FM

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;


<div>

Unknown end tag for &lt;/br&gt;


<img src="http://i646.photobucket.com/albums/uu185/vanhoai1111/th_28.gif" alt="" align="" border="0px" /> <span style="font-weight: bold; "><a href="http://www.cntt-k3.org/t3849-topic"><span style="color: rgb(255, 0, 0); ">Tổng hợp skin PunBB

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;


<div>

Unknown end tag for &lt;/br&gt;


<img src="http://i646.photobucket.com/albums/uu185/vanhoai1111/th_28.gif" alt="" align="" border="0px" /> <span style="font-weight: bold; "><a href="http://www.cntt-k3.org/t5103-topic"><span style="color: rgb(255, 30, 0); ">Liên hệ quảng cáo

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;


<div>

Unknown end tag for &lt;/br&gt;



<img src="http://i646.photobucket.com/albums/uu185/vanhoai1111/th_28.gif" alt="" align="" border="0px" /> <span style="font-weight: bold; "><a href="http://www.cntt-k3.org/t4387-topic"><span style="color: rgb(255, 165, 0); ">Nhân vật lên thớt

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;


<div>

Unknown end tag for &lt;/br&gt;


<img src="http://i646.photobucket.com/albums/uu185/vanhoai1111/th_28.gif" alt="" align="" border="0px" /> <b><a href="http://www.cntt-k3.org/t3032-topic"><font class="Apple-style-span" color="#0000cd">Lời yêu thương

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/div&gt;


<div>

Unknown end tag for &lt;/br&gt;


<img src="http://i646.photobucket.com/albums/uu185/vanhoai1111/th_28.gif" alt="" align="" border="0px" /> <b><a href="http://www.cntt-k3.org/f2-forum"><font class="Apple-style-span" color="#0000cd">Yêu cầu Rip skin

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/div&gt;


<div>

Unknown end tag for &lt;/br&gt;


<img src="http://i646.photobucket.com/albums/uu185/vanhoai1111/th_28.gif" alt="" align="" border="0px" /> <b><a href="http://www.cntt-k3.org/t5100-topic"><font class="Apple-style-span" color="#0000cd">Đặt hàng skin $$$

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/div&gt;














Unknown end tag for &lt;/ul&gt;



Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;


<div class="box-bot"><span>

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;







<div class="box">
<div class="box-top"><span>

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;


<div class="box-content">
<h3 class="icoAdd1">Sự kiện

Unknown end tag for &lt;/h3&gt;






text
text







Unknown end tag for &lt;/div&gt;


<div class="box-bot"><span>

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


















Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;













Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;


```

Tiếp theo cho cái này vào Css

```

.box h3 {
background: url(http://i43.servimg.com/u/f43/17/93/70/94/icon_c10.gif) 0% 3px no-repeat scroll;
color: #262626;
font-size: 15px;
line-height: 20px;
padding-left: 30px;
}
.box .icoAdd1, .box2 .icoAdd1 {
background: url(http://i38.servimg.com/u/f38/16/58/45/96/rss10.png) 0% 50% no-repeat;
}
.box .icoAdd2, .box2 .icoAdd2 {
background: url(http://i38.servimg.com/u/f38/16/58/45/96/usr_on10.png) 0% 50% no-repeat;
}
.box .icoAdd3, .box2 .icoAdd3 {
background: url(http://www.evn.com.vn/DesktopModules/ePowerPortal_CMS/FrontEnd/images/blogs.png) 0% 50% no-repeat;
}
.box .icoAdd4, .box2 .icoAdd4 {
background: url(http://cdn1.iconfinder.com/data/icons/nuvola2/16x16/actions/kgpg_gen.png) 0% 50% no-repeat;
}
.box .icoAdd5, .box2 .icoAdd5 {
background: url(http://i38.servimg.com/u/f38/16/58/45/96/stock_10.png) 0% 50% no-repeat;
}

.box .icoAdd6, .box2 .icoAdd6 {
background: url(http://i38.servimg.com/u/f38/16/58/45/96/statis10.png) 0% 50% no-repeat;
}

.box .icoAdd, .box2 .icoAdd {
background: url(http://www.vnptkiengiang.vn/static/images/Graphite-icon.png) left center no-repeat;
}



.support .column-right {
width: 239px;
padding-left: 64px;
}
.column-right {
width: 217px;
padding-left: 10px;
}
.column-left, .column-right {
float: left;
}


.box {
margin-bottom:25px;
color:#7c7c7c}

.box1 {
margin-bottom:15px;
}

.box-theme-details{
margin-bottom:16px;}

.box-top, .box-bot {
background:url(http://i43.servimg.com/u/f43/17/93/70/94/box_wh10.gif) top right no-repeat;
height:5px;
font-size:5px}

.box-top span, .box-bot span {
display:block;
width:5px;
height:5px;
background:url(http://i43.servimg.com/u/f43/17/93/70/94/box_wh10.gif) top left no-repeat;}
.box-bot {
background:url(http://i43.servimg.com/u/f43/17/93/70/94/box_wh10.gif) bottom right no-repeat}
.box-bot span {
background:url(http://i43.servimg.com/u/f43/17/93/70/94/box_wh10.gif) bottom left no-repeat;}
.box-content {
background:#fff;
border-left:1px solid #d2d2d2;
border-right:1px solid #d2d2d2;
padding:15px 20px;
min-height:25px;
font-size:12px;}

.box-content p {
line-height:1.5em}


```

Style 4 :
![http://i14.servimg.com/u/f14/16/58/45/96/413.jpg](http://i14.servimg.com/u/f14/16/58/45/96/413.jpg)

Cách làm :

Cũng như trên vào Index\_body tìm code sau

```

{BOARD_INDEX}
```

```

<table width="100%"><tbody><tr><td width="90%" valign="top">
{BOARD_INDEX}

Unknown end tag for &lt;/td&gt;


<td width="25%" valign="top" style="padding-left: 10px">




<aside>
<div class="sidebar">

<!-- BEGIN switch_user_logged_out -->
<div class="section loginButton">
<div class="secondaryContent">
<center>
<label for="LoginControl" id="SignupButton">
<a href="http://www.diendanviet.us/h5-login?lightbox[width]=396&amp;lightbox[height]=120&amp;lightbox[modal]=true" class="lightbox"><img src="http://i15.servimg.com/u/f15/18/01/55/97/110.jpg" float="center" title="Đăng nhập">

Unknown end tag for &lt;/a&gt;







Unknown end tag for &lt;/label&gt;




Unknown end tag for &lt;/center&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<!-- END switch_user_logged_out -->















<div class="section membersOnline userList">
<div class="secondaryContent">
<h3>Âm nhạc

Unknown end tag for &lt;/h3&gt;





<div class="footnote">
<center>




<object width="237" height="400">  <param name="movie" value="http://www.nhaccuatui.com/l/vGEcupnRaHd1" />  <param name="quality" value="high" />  <param name="wmode" value="transparent" />  <param name="allowscriptaccess" value="always" />  <param name="flashvars" value="&autostart=false" />  <embed src="http://www.nhaccuatui.com/l/vGEcupnRaHd1" flashvars="target=blank&autostart=false" allowscriptaccess="always" quality="high" wmode="transparent" type="application/x-shockwave-flash" width="230" height="220">

Unknown end tag for &lt;/embed&gt;



Unknown end tag for &lt;/object&gt;





Unknown end tag for &lt;/center&gt;





Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;







<div class="section membersOnline userList">
<div class="secondaryContent">
<h3>Sự kiện

Unknown end tag for &lt;/h3&gt;





<div class="footnote">


<ul> <img src="http://i646.photobucket.com/albums/uu185/vanhoai1111/th_28.gif" alt="" align="" border="0px" original-title=""> <span style="font-weight: bold; "><a href="http://www.cntt-k3.org/t4719-topic" original-title=""><span style="color: rgb(255, 0, 0); ">Tổng hợp Code FM

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;

<div original-title=""><br><img src="http://i646.photobucket.com/albums/uu185/vanhoai1111/th_28.gif" alt="" align="" border="0px" original-title=""> <span style="font-weight: bold; "><a href="http://www.cntt-k3.org/t3849-topic" original-title=""><span style="color: rgb(255, 0, 0); ">Tổng hợp skin PunBB

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;

<div original-title=""><br><img src="http://i646.photobucket.com/albums/uu185/vanhoai1111/th_28.gif" alt="" align="" border="0px" original-title=""> <span style="font-weight: bold; "><a href="http://www.cntt-k3.org/t5103-topic" original-title=""><span style="color: rgb(255, 30, 0); ">Liên hệ quảng cáo

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;

<div original-title=""><br><img src="http://i646.photobucket.com/albums/uu185/vanhoai1111/th_28.gif" alt="" align="" border="0px" original-title=""> <span style="font-weight: bold; "><a href="http://www.cntt-k3.org/t4387-topic" original-title=""><span style="color: rgb(255, 165, 0); ">Nhân vật lên thớt

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;

<div original-title=""><br><img src="http://i646.photobucket.com/albums/uu185/vanhoai1111/th_28.gif" alt="" align="" border="0px" original-title=""> <b><a href="http://www.cntt-k3.org/t3032-topic" original-title=""><font class="Apple-style-span" color="#0000cd">Lời yêu thương

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/div&gt;

<div original-title=""><br><img src="http://i646.photobucket.com/albums/uu185/vanhoai1111/th_28.gif" alt="" align="" border="0px" original-title=""> <b><a href="http://www.cntt-k3.org/f2-forum" original-title=""><font class="Apple-style-span" color="#0000cd">Yêu cầu Rip skin

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/div&gt;

<div original-title=""><br><img src="http://i646.photobucket.com/albums/uu185/vanhoai1111/th_28.gif" alt="" align="" border="0px" original-title=""> <b><a href="http://www.cntt-k3.org/t5100-topic" original-title=""><font class="Apple-style-span" color="#0000cd">Đặt hàng skin $$$

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/ul&gt;









Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;






<div class="section membersOnline userList">
<div class="secondaryContent">
<h3>Sự kiện

Unknown end tag for &lt;/h3&gt;





<div class="footnote">


Text







Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;
































Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/aside&gt;



















Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



```

Tiếp theo cho cái này vào Css :
```

.sidebar {
font-size: 11px;
float: right;
width: 250px;
}
.section {
margin: 10px auto;
}
.secondaryContent {
background: #F9F6EF url('http://i15.servimg.com/u/f15/18/01/55/97/catego11.png') repeat-x top;
padding: 10px;
border: 1px solid #EDEBE3;
border-bottom: 2px solid #EDEBE3;
}
.sidebar .section .primaryContent h3, .sidebar .section .secondaryContent h3, .profilePage .mast .section.infoBlock h3 {
font-size: 12pt;
color: #F23300;
padding-bottom: 2px;
margin-bottom: 5px;
border-bottom: 1px solid #EDEBE3;
}
.sidebar .section .secondaryContent .footnote, .sidebar .section .secondaryContent .minorHeading {
color: #F23300;
margin-top: 5px;
}
```

Xong ^^