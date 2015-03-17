![http://i48.servimg.com/u/f48/16/58/45/96/120.jpg](http://i48.servimg.com/u/f48/16/58/45/96/120.jpg)
Cách làm :

Vào Index\_body tìm đoạn code sau

```

<!-- BEGIN disable_viewonline -->
...
đến
...
<!-- END disable_viewonline -->
```


[b](b.md)Xóa đi và thay thế = Code sau

[/b]

```

<!-- BEGIN disable_viewonline -->
<div class="tcat">
<div class="tcatLeft"><div class="tcatRight foruminfo L1 collapse">
<div class="main-head">
<div class="page-title">
<h2>Tình hình diễn đàn

Unknown end tag for &lt;/h2&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div id="wgo" class="collapse wgo_block block">
<div class="blockbody formcontrols floatcontainer">
<div id="wgo_onlineusers" class="wgo_subblock section">
<h3 class="blocksubhead"><img src="http://i40.servimg.com/u/f40/17/50/76/58/users_10.png" alt="Currently Active Users" title="Currently Active Users"> Ai đang online ?

Unknown end tag for &lt;/h3&gt;

<div><p class="gensmall"><span class="gensmall">{TOTAL_USERS_ONLINE}<br />
{RECORD_USERS}<br />
<br />
{LOGGED_IN_USER_LIST}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/p&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<!--
endlogged-in users --><div id="wgo_stats" class="wgo_subblock section"><h3 class="blocksubhead"><img src="http://forum.vipautopro.com/images/styles/ShinyBlue/misc/forum_stats.png" alt=" Statistics" title=" Statistics"> Forum Statistics

Unknown end tag for &lt;/h3&gt;

<div><p class="gensmall">{TOTAL_POSTS}<br />
{TOTAL_USERS}<br />
{NEWEST_USER}

Unknown end tag for &lt;/p&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



<div id="wgo_stats2" class="wgo_subblock section"><h3 class="blocksubhead"><img src="http://i40.servimg.com/u/f40/17/50/76/58/users_10.png" alt="ALS Statistics" title="ALS Statistics"> Member Stat

Unknown end tag for &lt;/h3&gt;

<div><table class="smallfont" id="dd4all"><tbody>{L_CONNECTED_MEMBERS}


{L_WHOSBIRTHDAY_TODAY}
{L_WHOSBIRTHDAY_WEEK}

Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



<div id="wgo_legend" class="wgo_subblock section"><h3 class="blocksubhead"><img src="http://i967.photobucket.com/albums/ae153/ligerv/ligg/legend.png" alt="Legend" title="Legend">Legend . Chatbox . Icon

Unknown end tag for &lt;/h3&gt;

<div><p class="gensmall"><!-- BEGIN switch_chatbox_activate -->

<span class="gensmall">{TOTAL_CHATTERS_ONLINE} :  {CHATTERS_LIST} <br />
<!-- BEGIN switch_chatbox_popup -->
<div id="chatbox_popup">

Unknown end tag for &lt;/div&gt;


<script type="text/javascript">
//<![CDATA[
insertChatBoxPopup('{disable_viewonline.switch_chatbox_activate.switch_chatbox_popup.U_FRAME_CHATBOX}', '{L_CLICK_TO_JOIN_CHAT}');
//]]>


Unknown end tag for &lt;/script&gt;


<!-- END switch_chatbox_popup -->


Unknown end tag for &lt;/span&gt;



<!-- END switch_chatbox_activate -->

Unknown end tag for &lt;/p&gt;

<p class="gensmall">{GROUP_LEGEND}

Unknown end tag for &lt;/p&gt;

<p class="gensmall" style="margin-left:20px"><img src="{FORUM_NEW_IMG}" alt="{L_NEW_POSTS}"width="16" /> Bài viết mới<br><img src="{FORUM_IMG}" alt="{L_NO_NEW_POSTS}"width="16" /> Chưa có bài viết mới<br><img src="{FORUM_LOCKED_IMG}" alt="{L_FORUM_LOCKED}"width="16" /> Chuyên mục khóa<br>

Unknown end tag for &lt;/p&gt;



Unknown end tag for &lt;/div&gt;


<!-- END disable_viewonline -->


```
Bước tiếp theo cho đoạn sau Vào Css :

```

/* bảng thống kê vbb */
.wgo_block {
margin: 0;
}
.wgo_block {
display: block;
-moz-border-radius-topright: 5px;
-moz-border-radius-topleft: 5px;
-webkit-border-top-right-radius: 5px;
-webkit-border-top-left-radius: 5px;
border-top-right-radius: 5px;
border-top-left-radius: 5px;
-moz-box-shadow: -2px 0px 2px #C8C8C8;
-webkit-box-shadow: -2px 0px 2px #C8C8C8;
box-shadow: -2px 0px 2px #C8C8C8;
margin-bottom: 0px;
}
.block {
background: transparent none;
clear: both;
padding: 0;
color: ;
font: ;
}
#forums *, #wgo *, #forumbits * {
-moz-border-radius: 0 !important;
-webkit-border-radius: 0 !important;
}
.wgo_block .blockbody {
border: 1px solid #C4C4C4;
background: #FDFEFF url(http://forum.vipautopro.com/images/gradients/gradient-greytowhite.png) repeat-x;
_background-image: none;
}
.formcontrols {
border-right: 1px solid #B9C4CD;
border-left: 1px solid #B9C4CD;
border-bottom: 1px solid #B9C4CD;
}
.wgo_block .section {
display: block;
padding: 0 0 0.5em;
font: 12px;
color: #3E3E3E;
clear: both;
width: 100%;
background: #FDFEFF url(http://forum.vipautopro.com/images/styles/ShinyBlue/style/forumRowBG.gif) repeat-x left bottom;
font-size: 9pt;
}
.formcontrols > :first-child, .formcontrols .blocksubhead + .blockrow, .formcontrols .section .blockrow:first-child {
border-top: none;
}
.wgo_block .section div, .wgo_block .section ol {
padding-left: 20px;
}
.blocksubhead {
font: normal 12px;
color: #3E3E3E;
background: #E9E9E9 none repeat-x;
padding: 4px 10px 4px 10px;
border-top: 1px solid #CECECE;
}
.wgo_block .blocksubhead {
font: normal 13px;
color: #3E3E3E;
background: transparent;
}

.floatcontainer::after, .formcontrols .blockrow::after, dl.stats::after {
content: ".";
display: block;
height: 0;
clear: both;
visibility: hidden;
}
```

Thế là xong
thấy hay thì Vote nhiệt tình nhá quỷ sứ quỷ sứ quỷ sứ

Ẩn bài viết