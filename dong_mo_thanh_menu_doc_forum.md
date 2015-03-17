ái này hình như bên fm cũng có share, cột hiện ở mọi trang, nhưng tìm lòi mắt chả thấy đâu
làm bài hướng dẫn này cho những bạn mới luôn thể Cười nhe răng (Bài hướng dẫn cụ thể đối với cột bên phải ở index)
Cái này làm dựa trên code đóng mở sẵn có của fm mắc cỡ


[**] Demo:![http://a.imageshack.us/img441/174/capturescu.png](http://a.imageshack.us/img441/174/capturescu.png)**


[**] Cách làm:
Index\_body: Tìm**

Code: Chọn nội dung CODE
> {BOARD\_INDEX}


thay bằng

```

<div id="content">
<div id="content_container">
{BOARD_INDEX}


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;



<div id="menu_close" style="display: none;"><p><a href="javascript:ShowHideMenu('sidebar_home','menu_close', 'content', 'expended_main');"><img src="http://westlifevn.net/forum/images/styles/GamerGreen/misc/tab-expanded.png" alt="Display the menu" title="Display the menu">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/p&gt;



Unknown end tag for &lt;/div&gt;



<div id="sidebar_home">
<script type="text/javascript">//<![CDATA[
document.getElementById('hide-menu').style.display = 'block';//]]>

Unknown end tag for &lt;/script&gt;


<div id="sidebar_container">
<p id="hide-menu" style="display: block; "><a href="javascript:ShowHideMenu('sidebar_home','menu_close', 'content', 'expended_main');"><img src="http://westlifevn.net/forum/images/styles/GamerGreen/misc/tab-collapsed.png" alt="Hide the menu" title="Hide the menu">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/p&gt;


<ul id="sidebar">
<li><div class="block smaller"><div class="blocksubhead"><a class="collapse" id="collapse_block_newthreads_1" href="#top"><img alt="" src="http://westlifevn.net/forum/images/styles/GamerGreen/buttons/collapse_40b.png" id="collapseimg_newthreads_1">

Unknown end tag for &lt;/a&gt;

<span class="blocktitle">[Name. . .]

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;


<div class="widget_content blockbody floatcontainer">

[Nội dung. . .]




Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div class="underblock">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/li&gt;

 

Unknown end tag for &lt;/ul&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;


```

Muốn thêm 1 ô thì thêm đoạn

```

<li><div class="block smaller"><div class="blocksubhead"><a class="collapse" id="collapse_block_newthreads_1" href="#top"><img alt="" src="http://westlifevn.net/forum/images/styles/GamerGreen/buttons/collapse_40b.png" id="collapseimg_newthreads_1">

Unknown end tag for &lt;/a&gt;

<span class="blocktitle">[Name. . .]

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;


<div class="widget_content blockbody floatcontainer">

[Nội dung. . .]




Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div class="underblock">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/li&gt;


```
vào trên

```



Unknown end tag for &lt;/ul&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;


```


CSS:

```

/*side bar-------------------------------------------------------------------*/
#hide-menu {
display:block;margin-top:40px;float:right;margin-right:-28px;_margin:40px 0 0 0;_display:inline-block
}
#hide-menu {
_display:inline
}
#menu_close {
display:block;margin-top:40px;float:right;margin-right:-28px;_margin:40px 0 0 0;_display:inline-block
}
#menu_close {
_display:inline
}
#sidebar_container.sidebarleft #sidebar_button {
float:left;margin-left:-28px
}

#sidebar_container {
float: right;
width: 270px;
padding: 17px 0;
margin-bottom: 3em;
}
#sidebar_container > ul {
background: #ECF1E2 url(http://westlifevn.net/forum/images/misc/blog/top-highlight.png) repeat-x left top;
border: 1px solid #D2DBC0;
-moz-border-radius: 5px;
-webkit-border-radius: 5px;
border-radius: 5px;
-moz-box-shadow: -2px 2px 2px #C8C8C8;
-webkit-box-shadow: -2px 2px 2px #C8C8C8;
box-shadow: -2px 2px 2px #C8C8C8;
float: left;
width: 100%;
list-style: none;
padding: 0;
}
#sidebar_container .block {
margin-bottom: 4px;
padding: 6px;
border-top-right: 5px;
border-top-left: 5px;
border-top-right: 5px;
border-top-left: 5px;
}
#sidebar_container .blocksubhead {
background: transparent none;
height: 16.76px;
color: #424242;
padding: 5px 6px;
border: none;
outline: none;
font-weight: bold;
}
#sidebar_container a.collapse {
position: static;
}
#sidebar_container .blocksubhead a img {
vertical-align: middle;
float: right;
}
.widget_content {
color: #424242;
-moz-border-radius: 5px;
-webkit-border-radius: 5px;
border-radius: 5px;
background: white url(http://i1122.photobucket.com/albums/l525/liger1723/GmGreen/gradient-black-down.png) repeat-x;
border: 1px solid #DADADA;
_background-image: none;
padding: 10px 6px 10px 6px;
}
#sidebar_container .blockbody {
color: #424242;
border: 1px solid #DADADA;
-moz-border-radius: 5px;
-webkit-border-radius: 5px;
border-radius: 5px;
background: white;
_background-image: none;
padding: 0;
}
#sidebar_container .underblock {
height: 9px;
background: transparent url(http://westlifevn.net/forum/images/misc/blog/bottom-shadow.png) repeat-x left bottom;
}
#content_container {
width: 100%;
float: left;
margin-right: -290px;
padding: 10px 0;
}
#content_container #content {
margin-right: 290px;
}
#content {
width: 72%;
padding:0;
padding-bottom: 10px;
}
#content.expended_main {
width: 100%;
}
#content {
margin: 20px 0px 0px 0px;
padding-left: 0px;
float: left;
}
/*side bar-------------------------------------------------------------------*/

```


Đóng mở cột bên phải cho widget
Header: Chèn code này vào cuối:

```

<div id="content">
<div id="content_container">
```

Footer begin:

```



Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;



<div id="menu_close" style="display: none;"><p><a href="javascript:ShowHideMenu('sidebar_home','menu_close', 'content', 'expended_main');"><img src="http://westlifevn.net/forum/images/styles/GamerGreen/misc/tab-expanded.png" alt="Display the menu" title="Display the menu">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/p&gt;



Unknown end tag for &lt;/div&gt;



<div id="sidebar_home">
<script type="text/javascript">//<![CDATA[
document.getElementById('hide-menu').style.display = 'block';//]]>

Unknown end tag for &lt;/script&gt;


<div id="sidebar_container">
<p id="hide-menu" style="display: block; "><a href="javascript:ShowHideMenu('sidebar_home','menu_close', 'content', 'expended_main');"><img src="http://westlifevn.net/forum/images/styles/GamerGreen/misc/tab-collapsed.png" alt="Hide the menu" title="Hide the menu">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/p&gt;


<ul id="sidebar">
<li><div class="block smaller"><div class="blocksubhead"><a class="collapse" id="collapse_block_newthreads_1" href="#top"><img alt="" src="http://westlifevn.net/forum/images/styles/GamerGreen/buttons/collapse_40b.png" id="collapseimg_newthreads_1">

Unknown end tag for &lt;/a&gt;

<span class="blocktitle">[Name. . .]

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;


<div class="widget_content blockbody floatcontainer">

<div id="{ID_RIGHT}">
<!-- BEGIN giefmod_index2 -->
{giefmod_index2.MODVAR}
<!-- BEGIN saut -->
<div style="height: {SPACE_ROW}px">

Unknown end tag for &lt;/div&gt;


<!-- END saut -->
<!-- END giefmod_index2 -->


Unknown end tag for &lt;/div&gt;






Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div class="underblock">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/li&gt;

 

Unknown end tag for &lt;/ul&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;





Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<!-- close div id="page-body" -->
<div id="page-footer">
<div align="center">
<div class="gen">
<!-- BEGIN html_validation -->


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<!-- END html_validation -->

```

Được sửa bởi miamor ngày Fri May 11, 2012 6:09 pm; sửa lần 1.