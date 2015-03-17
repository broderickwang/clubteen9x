Founder

> vBB - Dạng mặc định của vBulletin.

![http://i48.servimg.com/u/f48/16/58/89/73/vbb10.jpg](http://i48.servimg.com/u/f48/16/58/89/73/vbb10.jpg)

> ACP - Display - Pictures and Colors - Colors - CSS Stylesheet: Thêm vào CSS code sau (Nên xóa đoạn CSS liên quan đến navlinks cũ)

```

/* vBB nav - www.fmvi.org*/
.title-overview{background-color:#1571A3;color:#FF0;font-size:20px;font-variant:small-caps;font-weight:700;margin-bottom:10px;padding:5px 0}
.navbar{background-color:#E3E3E3;border-bottom-left-radius:0;border-bottom-right-radius:0;color:#FFF;font:11px Arial,Calibri,Verdana,Geneva,sans-serif;height:56px;position:relative;margin:0}
.navtabs{background-color:#000;height:28px;padding:0}
.navtabs ul{border-bottom-left-radius:0;border-bottom-right-radius:0;border-top:0 solid #5A7F97;direction:ltr;left:0;margin-right:-80px;position:absolute;top:28px;width:100%}
.navtabs li{list-style:none outside none;border-right:0 solid #5A7F97;float:left;width:80px}
.navtabs li.selected{color:#000;height:28px}
.navtabs li.selected a.navtab{background-color:#E3E3E3;border-radius:5px 5px 0 0;color:#000;padding-top:4px;position:relative;top:-4px;z-index:10}
.navtabs li a.navtab{background-color:#000;border-left:0 solid #CEDFEB;border-top:0 solid #CEDFEB;color:#FFF;display:block;font:bold 12px/28px Arial,Calibri,Verdana,Geneva,sans-serif;text-align:center;text-decoration:none;width:auto!important}
.globalsearch{clear:left;display:block;float:right;line-height:1em;position:absolute;right:20px;text-align:right;top:0;width:180px}
.navbar_search{display:block;position:relative;right:-20px;width:180px}
.globalsearch .textboxcontainer{border-left:0 solid #5A7F97;display:inline-block;float:left;height:28px;margin-left:-10px;text-align:center}
.globalsearch .textboxcontainer span{border-left:0 solid #CEDFEB;border-top:0 solid #CEDFEB;display:inline-block;height:24px;margin-bottom:1px;padding-left:2px;padding-right:2px;padding-top:3px;width:147px}
.globalsearch input.textbox{width:120px}
.globalsearch .searchbutton{background-color:transparent;border:0 none;margin-left:-2px;margin-top:-2px;width:22px;padding:0}
.navbar_search input{border:1px solid #B1B1B1;font-size:11px;margin-top:2px;vertical-align:middle;padding:1px}
.globalsearch .buttoncontainer{border-left:0 solid #5A7F97;border-right:0 solid #5A7F97;display:inline-block;float:right;height:28px;margin-right:10px;overflow:hidden;width:25px}
.globalsearch .buttoncontainer span{border-left:0 solid #CEDFEB;border-top:0 solid #CEDFEB;display:inline-block;height:25px;padding-left:4px;padding-top:3.5px}
.navtabs li.selected li a,.navbar_advanced_search li a{font:11px/28px Arial,Calibri,Verdana,Geneva,sans-serif;text-decoration:none}
.floatcontainer ul li{font-size:13px!important;padding-left:12px;width:auto}

```
> ACP - Display - Templates - Ganeral - overall\_header: Tìm đoạn sau

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
> ... và thay thế nó bằng

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
> Glass - Dạng gương trong suốt, thích hợp skin nền tối. Nên sử dụng Icon cho navlinks này.
![http://i48.servimg.com/u/f48/16/58/89/73/glass10.jpg](http://i48.servimg.com/u/f48/16/58/89/73/glass10.jpg)


> ACP - Display - Pictures and Colors - Colors - CSS Stylesheet: Thêm vào CSS code sau (Nên xóa đoạn CSS liên quan đến navlinks cũ)

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

> Slide - Dạng trượt theo thanh cuộn.
![http://i48.servimg.com/u/f48/16/58/89/73/truot11.jpg](http://i48.servimg.com/u/f48/16/58/89/73/truot11.jpg)


> ACP - Display - Pictures and Colors - Colors - CSS Stylesheet: Thêm vào CSS code sau (Nên xóa đoạn CSS liên quan đến navlinks cũ)

```

/* Slide nav - www.fmvi.org */
body{padding-top:43px}
#pun-head{left:0;position:fixed;top:0;width:100%;z-index:999}
.title-overview{background-color:#1571A3;color:#FF0;font-size:20px;font-variant:small-caps;font-weight:700;margin-bottom:10px;padding:5px 0}
#pun-title{padding: 15px;color:#FFF!important;font-family:"Comic Sans Ms";font-size:33px;font-style:normal;font-variant:normal;font-weight:700;text-shadow:3px 3px 3px #000;text-transform:uppercase;z-index:1}
#pun-head #pun-navlinks{background-color:rgba(0, 68, 99, 0.73);background-origin:padding-box;background-position:0 0;background-repeat:repeat-x;border:1px solid #1E2831;box-shadow:0 0 0 1px rgba(255,255,255,0.2) inset;height:28px}
#pun-navlinks ul{list-style:none outside none;text-align:center}
#pun-navlinks li{display:inline;font-size:15px;line-height:30px}
#pun-navlinks a:active,#pun-navlinks a:focus,#pun-navlinks a:hover{background-color:rgba(0,0,0,0.2);background-image:url(http://i40.servimg.com/u/f40/17/10/12/79/76120810.gif);color:#FFF;text-decoration:none;text-shadow:0 0 4px rgba(255,255,255,0.7);padding:12px 14px 10px}
#pun-navlinks li a{color:#FFF;font-family:tahoma,helvetica,arial,sans-serif;margin-left:-8px;margin-right:-8px;text-shadow:1px 1px 1px #000;padding:12px 14px 10px}
```

> ACP - Modules - HTML & JAVASCRIPT - Javascript codes management
> Click vào nút Create a new javascript, để tạo file javascript.
> > Title **: Slide nav
> > Placement : In all the pages
> > Javascript Code** :

```

$(function () {
$("#pun-navlinks  a.mainmenu[href='/search']").removeAttr("onclick").click(function () {
$(this).parent().css("position", "relative");
$("#search_menu").css({
"top": "30px",
"left": "-7px"
}).slideToggle();
return false;
});
});

```

> Lưu ý: Để sử dụng Javascript codes management bạn phải cập nhật Templates (nếu chưa): http://help.forumotion.com/t92693-new-update-javascript-code-management

> [+] Nếu không muốn thanh navlinks trượt, bạn xóa 2 dòng sau trong code trên:

```

body{padding-top:43px}
#pun-head{left:0;position:fixed;top:0;width:100%;z-index:999}

```
> Update...