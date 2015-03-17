Lời mở đầu: Code mới lấy sáng nay hok bik đã có ai share chưa mà cứ share bừa cười nhăn răng
Demo:
![http://i47.servimg.com/u/f47/17/57/29/64/sa10.jpg](http://i47.servimg.com/u/f47/17/57/29/64/sa10.jpg)

Code: Chọn Code
> ![http://i47.servimg.com/u/f47/17/57/29/64/sa10.jpg](http://i47.servimg.com/u/f47/17/57/29/64/sa10.jpg)


Bước 1:Vào Display -> Templates -> Quản lý tổng thể -> Index\_body
Tìm đoạn code sau:

```

<!-- BEGIN disable_viewonline -->
....
đến
<!-- END disable_viewonline -->
```

Thay đoạn sau vào đấy

```

<!-- BEGIN disable_viewonline -->

<!-- TÊN TAB -->
<div id="pun-info" class="main">
<div class="main-content">
<div id="tabs_container">
<ul id="stabs">
<li class="active"><a href="#tab1">Thống kê

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;


<li><a href="#tab2">Sinh nhật

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;


<li><a href="#tab3">Thông tin

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;


<!-- N?I DUNG TAB -->
<div id="tabs_content_container">
<div id="tab1" class="tab_content" style="display: block;">

<div id="stats">
<p class="right">{TOTAL_POSTS}

Unknown end tag for &lt;/p&gt;


<p>{TOTAL_USERS}

Unknown end tag for &lt;/p&gt;


<p>{NEWEST_USER}

Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;


<p><div id="onlinelist">
<img src="{L_ONLINE_IMG}" alt="{L_WHO_IS_ONLINE}" />
<p class="right">
<!-- BEGIN switch_viewonline_link -->
<a href="{U_VIEWONLINE}" rel="nofollow">{L_WHO_IS_ONLINE}

Unknown end tag for &lt;/a&gt;


<!-- END switch_viewonline_link -->
<!-- BEGIN switch_viewonline_nolink -->
{L_WHO_IS_ONLINE}
<!-- END switch_viewonline_nolink -->


Unknown end tag for &lt;/p&gt;


<p>{TOTAL_USERS_ONLINE}<br />
{RECORD_USERS}

<br />
{LOGGED_IN_USER_LIST}

{L_ONLINE_USERS}
{L_CONNECTED_MEMBERS}<br />


Unknown end tag for &lt;/p&gt;


<div class="clear">

Unknown end tag for &lt;/div&gt;



<p>{LEGEND} : {GROUP_LEGEND}

Unknown end tag for &lt;/p&gt;





Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;


<div id="tab2" class="tab_content">
<p>{L_WHOSBIRTHDAY_TODAY}{L_WHOSBIRTHDAY_WEEK}

Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;


<div id="tab3" class="tab_content">
<p>Copyright 2012-2014, hauloc2.net

Unknown end tag for &lt;/p&gt;


<p>Design by Zualuoi - Contact: zualuoi@yahoo.com

Unknown end tag for &lt;/p&gt;





Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;



<!-- BEGIN switch_chatbox_activate -->
<div id="onlinechat">
<p class="page-bottom">
{TOTAL_CHATTERS_ONLINE} :
{CHATTERS_LIST}<br />
<!-- BEGIN switch_chatbox_popup -->
<div id="chatbox_popup">

Unknown end tag for &lt;/div&gt;


<script type="text/javascript">
insertChatBoxPopup('{disable_viewonline.switch_chatbox_activate.switch_chatbox_popup.U_FRAME_CHATBOX}', '{L_CLICK_TO_JOIN_CHAT}');


Unknown end tag for &lt;/script&gt;


<!-- END switch_chatbox_popup -->


Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;


<!-- END switch_chatbox_activate -->


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<!-- END disable_viewonline -->

```

Bước 2: Tạo Javascript Code
Title: Muốn tn cũng đc
Placement:In all the pages

```

$(document).ready(function(){
//  When user clicks on tab, this code will be executed
$("#stabs li").click(function() {
//  First remove class "active" from currently active tab
$("#stabs li").removeClass('active');

//  Now add class "active" to the selected/clicked tab
$(this).addClass("active");

//  Hide all tab content
$(".tab_content").hide();

//  Here we get the href value of the selected tab
var selected_tab = $(this).find("a").attr("href");

//  Show the selected tab content
$(selected_tab).fadeIn();

//  At the end, we add return false so that the click on the link is not executed
return false;
});
});

```

Bước 3:Thêm CSS để hoàn tất
Đặt vào đâu cx được

```

/*bảng thống kê*/
#tabs_container {
border-bottom: 1px solid #ccc;
}
#stabs {
list-style: none;
padding: 5px 0 4px 0;
margin: 0 0 0 10px;
font-family: Verdana,Arial,Helvetica,sans-serif;
font-size: 13px;
}
#stabs li {
display: inline;
}
#stabs li a {
border: 1px solid #ccc;
padding: 4px 6px;
text-decoration: none;
background-color: #eeeeee;
border-bottom: none;
outline: none;
border-radius: 5px 5px 0 0;
-moz-border-radius: 5px 5px 0 0;
-webkit-border-top-left-radius: 5px;
-webkit-border-top-right-radius: 5px;
}
#stabs li a:hover {
background-color: #dddddd;
padding: 4px 6px;
}
#stabs li.active a {
border-bottom: 1px solid #fff;
background-color: #fff;
padding: 4px 6px 5px 6px;
border-bottom: none;
}
#stabs li.active a:hover {
background-color: #eeeeee;
padding: 4px 6px 5px 6px;
border-bottom: none;
}

#tabs_content_container {
border: 1px solid #ccc;
border-top: none;
padding: 10px;
}
.tab_content {
display: none;
}
span.newpost {
filter:alpha(opacity=50);
-moz-opacity: 1.0;
opacity: 1.0;
-khtml-opacity: 1.0;
padding:6px;
background-color: #488AC7;
-moz-border-radius: 10px;
-webkit-border-radius: 10px;
}
span.newpost:hover{
filter:alpha(opacity=50);
-moz-opacity: 0.7;
opacity: 0.7;
-khtml-opacity: 0.7;}


```