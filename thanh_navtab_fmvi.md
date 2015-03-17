Demo:![http://i43.servimg.com/u/f43/15/93/33/76/116.jpg](http://i43.servimg.com/u/f43/15/93/33/76/116.jpg)


Cách làm :

Cho đoạn sau vào Css :




```

.navtabs li {
border-right: 0 solid #5A7F97;
float: left;
list-style: none outside none;
width: 80px;
height: 28px;
}

.navtabs li.selected a.navtab {
background-color: #E3E3E3;
border-radius: 5px 5px 0 0;
color: black;
padding-top: 4px;
position: relative;
top: -4px;
z-index: 10;
}
.navtabs ul {
border-bottom-left-radius: 0;
border-bottom-right-radius: 0;
border-top: 0 solid #5A7F97;
direction: ltr;
left: 0;
margin-right: -80px;
position: absolute;
top: 28px;
width: 100%;
}
.navbar {
background-color: #E3E3E3;
border-bottom-left-radius: 0;
border-bottom-right-radius: 0;
color: white;
font-family: Arial,Calibri,Verdana,Geneva,sans-serif;
font-size: 11px;
font-style: normal;
font-variant: normal;
font-weight: normal;
height: 56px;
margin: 0;
position: relative;
}
.navtabs {
background-color: black;
height: 28px;
padding: 0;
}
.navbar {
color: white;
font-family: Arial,Calibri,Verdana,Geneva,sans-serif;
font-size: 11px;
font-style: normal;
font-variant: normal;
font-weight: normal;
}

.navbar_advanced_search li a, .navtabs li.selected li a {
font-family: Arial,Calibri,Verdana,Geneva,sans-serif;
font-size: 11px;
font-style: normal;
font-variant: normal;
font-weight: normal;
line-height: 28px;
text-decoration: none;
}
.globalsearch {
clear: left;
display: block;
float: right;
line-height: 1em;
position: absolute;
right: 20px;
text-align: right;
top: 0;
width: 180px;
}
.navtabs li a.navtab {
background-color: black;
border-left: 0 solid #CEDFEB;
border-top: 0 solid #CEDFEB;
color: white;
display: block;
font-family: Arial,Calibri,Verdana,Geneva,sans-serif;
font-size: 12px;
font-style: normal;
font-variant: normal;
font-weight: bold;
line-height: 28px;
text-align: center;
text-decoration: none;
width: auto!important;
}


```
Tiếp theo vào : overall\_header tìm đoạn sau

```

<div id="pun-head">
<div id="pun-navlinks">
<ul class="clearfix">
<li>{GENERATED_NAV_BAR}

Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


```

Và Thay thế nó = code sau

```

<div class="navbar" id="navbar">
<ul class="navtabs floatcontainer" id="navtabs">
<li>
<a accesskey="2" href="/" class="navtab">Trang chủ

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/li&gt;


<li class="selected">
<a href="/forum" class="navtab">Diễn đàn

Unknown end tag for &lt;/a&gt;


<ul class="floatcontainer">
<li>{GENERATED_NAV_BAR}

Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;


<div class="globalsearch" id="globalsearch">
<form class="navbar_search" id="navbar_search" method="get" action="/search">
<input type="hidden" value="searchbox" name="mode" />
<input type="hidden" type="radio" value="posts" name="show_results" id="rposts" />
<input type="hidden" type="radio" checked="checked" value="topics" name="show_results" id="rtopics" />
<span class="textboxcontainer">
<span>
<input type="text" name="search_keywords" tabindex="99" class="textbox" name="search_keywords" />


Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/span&gt;


<span class="buttoncontainer">
<span>
<input type="image" tabindex="100" name="submit" src="http://i967.photobucket.com/albums/ae153/ligerv/t1vn/search.png" class="searchbutton" />


Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/form&gt;


<ul class="navbar_advanced_search">
<li>
<a accesskey="4" href="/search">Tìm chi tiết

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<script type="text/javascript">
$("a.mainmenu[href='/'],a.mainmenu[href='/forum'],a.mainmenu[href='/search'],a.mainmenu[href='/groups'],a.mainmenu[href='/privmsg?folder=inbox']").parent().remove()


Unknown end tag for &lt;/script&gt;




```

Glass - Dạng gương trong suốt, thích hợp skin nền tối. Nên sử dụng Icon cho navlinks này.

![http://i48.servimg.com/u/f48/16/58/89/73/glass10.jpg](http://i48.servimg.com/u/f48/16/58/89/73/glass10.jpg)


ACP - Display - Pictures and Colors - Colors - CSS Stylesheet: Thêm vào CSS code sau (Nên xóa đoạn CSS liên quan đến navlinks cũ)

```

/* Glass nav - www.fmvi.org */
#pun-head #pun-navlinks{background-color:transparent;border:0 none}
.title-overview{font-size:20px;font-variant:small-caps;font-weight:700;margin-bottom:10px;padding:5px 0}
.center-overview{color:#000!important}
.center-overview a{background-image:none!important}
.center-overview a:hover{background-image:none!important}
#pun-navlinks ul{text-align:center}
#pun-navlinks li{background-color:transparent;background-image:url(http://i48.servimg.com/u/f48/16/58/89/73/btn_ri11.png);background-position:right top;background-repeat:no-repeat;color:#FFF;display:inline-block;font:13px tahoma,arial,sans-serif;height:32px;margin-right:5px;padding-right:10px;text-decoration:none}
#pun-navlinks li:hover{background-image:url(http://i48.servimg.com/u/f48/16/58/89/73/btn_ho10.png);color:#FFFE1B;outline:medium none}
#pun-navlinks li a{background-color:transparent;background-image:url(http://i48.servimg.com/u/f48/16/58/89/73/btn10.png);background-repeat:no-repeat;color:#FFF;display:inline-block;line-height:21px;margin-right:-8px!important;padding:3px 0 8px 10px}
#pun-navlinks li:hover a{background-image:url(http://i48.servimg.com/u/f48/16/58/89/73/btn_ho11.png)}
```