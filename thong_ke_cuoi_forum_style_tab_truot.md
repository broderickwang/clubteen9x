Cách làm : http://laudaima1.forumvi.com/
![http://i48.servimg.com/u/f48/16/58/45/96/thongk10.jpg](http://i48.servimg.com/u/f48/16/58/45/96/thongk10.jpg)


Bước 1 : cho cái này vào css

```




#upshrinkHeaderIC {
border-top: 3px double rgba(255, 255, 255, 0.23);}
#vtab {
background: #292727;
height: 100%;
margin: auto;
color: #D1D1D1;
}
#vtab > ul {
float: left;
width: 65px;
text-align: left;
display: block;
margin: auto 0;
padding: 0;
position: relative;
}
#vtab > ul > li.stats {
background: url(http://i25.servimg.com/u/f25/14/15/39/32/statis10.png) no-repeat center center;
}
#vtab > ul > li {
width: 65px;
height: 65px;
list-style-type: none;
display: block;
text-align: center;
margin: auto;
padding-bottom: 10px;
position: relative;
opacity: .3;
-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)";
filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=30);
cursor: help;}
#vtab > ul > li.online_users {
background: url(http://zerodigital.info/forum/digitalvb/satin/statusicon/HQ/4_forum_old-48.png) no-repeat center center;
}
#vtab > ul > li.selected {
-ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
background-color: #1A1A1A;
filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
opacity: 1;
position: relative;
z-index: 10;
-webkit-transition: 0.7s;
width: auto;
}
#vtab > div {
background: #1A1A1A;
height: 276px;
margin-left: 65px;
overflow: auto;
padding: 12px;
position: relative;
z-index: 9;
}
div.title_barIC {
height: 31px;
margin-bottom: 1px;
overflow: hidden;
padding-left: 9px;
border-radius: 3px;
background: rgba(73, 73, 73, 0.6);
border: 2px dashed #4E4E4E;
}

#upshrinkHeaderIC div.title_barIC h4.titlebg {
color: #F3A500;
margin-top: 7px;
text-shadow: 0 1px 0 #5C2501;
}
#upshrinkHeaderIC p {
margin: 0 0 .1em;
padding-left: .5em;
}
#vtab > ul > li.afiliados {
background: url(http://library.ryerson.ca/wp-content/uploads/copyright.png) no-repeat center center;
}
#vtab > ul > li.chatb{
background: url(http://7x73.vn/forum/105.png) no-repeat center center;
}

#vtab > ul > li.chatb.selected {
-ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
background-color: #1A1A1A;
filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
opacity: 1;
position: relative;
z-index: 10;
-webkit-transition: 0.7s;}
#vtab > ul > li.afiliados.selected {
-ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
background-color: #1A1A1A;
filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
opacity: 1;
position: relative;
z-index: 10;
-webkit-transition: 0.7s;}
```

Bước 2 : vào index\_body tìm

```

<!-- BEGIN disable_viewonline -->
....
đến
....
<!-- END disable_viewonline -->

```
và thay nó = code sau

```

<!-- BEGIN disable_viewonline -->

<div class="categoriestadi"><div id="upshrinkHeaderIC"><div id="vtab"><ul><li class="stats">

Unknown end tag for &lt;/li&gt;

<li class="online_users">

Unknown end tag for &lt;/li&gt;

<li class="chatb">

Unknown end tag for &lt;/li&gt;

<li class="afiliados">

Unknown end tag for &lt;/li&gt;



Unknown end tag for &lt;/ul&gt;

<div style="display: none; "><div class="title_barIC"><h4 class="titlebg"><span class="ie6_header floatleft"><strong>Thống kê tình hình diễn đàn | Cntt-k3

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/h4&gt;



Unknown end tag for &lt;/div&gt;

<p>{TOTAL_POSTS}

Unknown end tag for &lt;/p&gt;


<p>{TOTAL_USERS}

Unknown end tag for &lt;/p&gt;


<p>{NEWEST_USER}

Unknown end tag for &lt;/p&gt;


<p>{GROUP_LEGEND}

Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;


<div style="display: none; ">
<div class="title_barIC"><h4 class="titlebg">
<span class="ie6_header floatleft"><strong>Thống kê tình hình diễn đàn | Cntt-k3

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/h4&gt;




Unknown end tag for &lt;/div&gt;

<div class="userline"><p>{TOTAL_USERS_ONLINE}

Unknown end tag for &lt;/p&gt;


<p>{RECORD_USERS}

Unknown end tag for &lt;/p&gt;


<p>{LOGGED_IN_USER_LIST}

Unknown end tag for &lt;/p&gt;


<p>{L_ONLINE_USERS}

Unknown end tag for &lt;/p&gt;


<p>{L_CONNECTED_MEMBERS}

Unknown end tag for &lt;/p&gt;




<p>{L_WHOSBIRTHDAY_TODAY}

Unknown end tag for &lt;/p&gt;


<p>{L_WHOSBIRTHDAY_WEEK}

Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;

 

Unknown end tag for &lt;/div&gt;

<div style="display: none; "><div class="title_barIC"><h4 class="titlebg"><span class="ie6_header floatleft"><strong>Liên kết cùng nhau phát triển

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/h4&gt;



Unknown end tag for &lt;/div&gt;


<p>{TOTAL_CHATTERS_ONLINE}

Unknown end tag for &lt;/p&gt;


<li style="text-align: left; float: left; width: 25%">

<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;


<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;


<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;


<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;


<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;


<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;


<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;


<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/li&gt;


<li style="text-align: left; float: left; width: 25%">

<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;


<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;


<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;


<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;


<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;


<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;


<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;


<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/li&gt;


<li style="text-align: left; float: left; width: 25%">
<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;


<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;


<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;


<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;


<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/li&gt;






Unknown end tag for &lt;/div&gt;

<div style="display: none; "><
div class="title_barIC"><h4 class="titlebg"><span class="ie6_header floatleft">
<strong>Bản quyền

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/h4&gt;



Unknown end tag for &lt;/div&gt;

<strong> © Style by Tu Vil Amigo  And Chupy

Unknown end tag for &lt;/br&gt;

Host by Forumotion

Unknown end tag for &lt;/br&gt;

Diễn đàn Cntt-k3 được phát triển bởi các thành viên.
Ban Quản trị không chịu trách nhiệm về nội dung thành viên đăng tải 

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<!-- END disable_viewonline -->
```

Bước 3 : vào : MODULES >> HTML & JAVASCRIPT Javascript codes management >> tạo 1 js mới
Title **: thống kê style tap
Placement : In the home page
Javascript Code** :

```

$(function(){var $items=$('#vtab>ul>li');$items.mouseover(function(){$items.removeClass('selected');$(this).addClass('selected');var index=$items.index($(this));$('#vtab>div').hide().eq(index).show()}).eq(0).mouseover()});

```

Thế là xong