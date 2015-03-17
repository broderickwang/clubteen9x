Dề mô online :

> http://chienthan3000.forumvi.com/



![http://i80.servimg.com/u/f80/16/58/45/96/untitl10.png](http://i80.servimg.com/u/f80/16/58/45/96/untitl10.png)


Note :
Vẫn giống các ver 1 và 2 về giao diện ,
ở đây Lasttopic ver 3 này mình đã gộp cả các chức năng của các Lasttopic trước vào làm 1
Để làm 1 thống kê max ping hiện giờ
Các cột thống kê :
Top poster , Top poster tuần , tháng , mở chủ đề ...
Top thành viên mới , truy cập gần đây , Gửi bài hôm nay , Ban quản trị ...
Recan\_topic : thống kê 20 bài viết mới nhất , Topic trả lời nhiều nhất , xem nhiều nhất ....
Nút f5 ( reload Lasttopic )
Ở ver này mình thêm code tootlip hiển thị thông tin bài viết full , thông qua tut đọc feed của bác Vọng


Và sau đây là Cách làm :


Bước 1 : Vào Css thêm đoạn này vào
```

/* tabs-------------------------------------------------------------*/
.tabs { margin: 0; padding: 0;}
.tabs {
padding-bottom: 26px;
margin-bottom: 15px;
background: #EFEFEF;
border-top: 1px solid #FFF;
border-bottom: 1px solid #CAD9EA;
}
.nTright {
float: right;
height:10px;
}
.avatartv1 img {
height: 15px;
width: 15px;
}
.tabs li { list-style: none;float: left; line-height: 30px; border-right: 1px solid #b4d0f3; height: 30px; font-size: 11px;}
.tabs li.current {
background: #f7f7f7;
height: 27px;
font-weight: bold;
}
.mainbox { background: #F7f7f7; border: 1px solid #9DB3C5; margin-bottom: 6px; padding: 1px;}
.mainbox table { width: 100%; }
#dhtmlpointer, #dhtmltooltip
{
z-index: 999;
left: -300px; top:0px;
visibility: hidden;
position: absolute;
}.textbox, textarea, select {
font: normal 11px Tahoma, Calibri, Verdana, Geneva, sans-serif;
color: #000000;
background: rgb(255, 255, 255) none;
border: 1px solid #6B91AB;
padding: 4px;
outline: 0;
-moz-border-radius: 3px;
-webkit-border-radius: 3px;
border-radius: 3px;
}
/* tooltip */
#tooltip .tiplFMvi{border-bottom:1px dashed;padding-bottom:5px;margin-bottom:5px}
#tooltip{background-color:#FFF;border:1px solid #DDD;border-radius:3px 3px 3px 3px;box-shadow:2px 2px 3px #746E6E;color:#131313;max-width:450px;position:absolute;z-index:999;padding:15px 20px}

#tooltip .header {display:none}
.avatartv1 img {
height: 15px;
width: 15px;
}

```

Bước 2 : Các bạn vào : overall\_header tìm đoạn code sau ở cuối

```

<div id="{ID_LEFT}">
<!-- BEGIN giefmod_index1 -->
{giefmod_index1.MODVAR}
<!-- BEGIN saut -->
<div style="height:{SPACE_ROW}px">

Unknown end tag for &lt;/div&gt;


<!-- END saut -->
<!-- END giefmod_index1 -->


Unknown end tag for &lt;/div&gt;



```

Nếu có thì xóa luôn đi , và nếu ko có thì thôi ko phải làm gì nữa ^^


Bước 3 : Vào Index\_Body Thêm code sau lên đầu
```


<div id="page-body">
<div class="boxtk9">

<div id="{ID_CONTENT_CONTAINER}"{CLASS_CONTENT_CONTAINER}>
<table  class="thongke" cellpadding="0" cellspacing="0" border="0" width="100%" align="center" >
<tbody>
<tr>
<td valign="top" width="100%">
<div class="test">

<table class="thongke" cellpadding="4" cellspacing="0" style="border: 1px #c0c0c0 solid;background: #fff;" border="0" width="100%" align="center">




<tbody>






<tr>
<td width="100%">
<table class="thongke" cellpadding="0" cellspacing="4" border="0" width="100%" align="center">
<thead>
<tr valign="top">
<td width="23%">

Unknown end tag for &lt;/td&gt;

<td width="100%" colspan="2">

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td><table  class="thongke" cellpadding="0" cellspacing="0" border="0" width="110%" align="center" >

<tr><td valign="top" style="border: 1px solid #9DB3C5;">
<!-- BEGIN giefmod_index1 -->
{giefmod_index1.MODVAR} <!-- END giefmod_index1 -->

Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/thead&gt;



Unknown end tag for &lt;/table&gt;





Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;

<tr>
<td valign="top" width="100%">
<!-- BEGIN html_validation -->


Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/body&gt;




Unknown end tag for &lt;/html&gt;


<!-- END html_validation -->



```
Bước 4 : Vào memberlist\_body thay toàn bộ code trong đó = code sau

```

<!-- BEGIN switch_user_logged_in -->
<div id="pun-visit" class="clearfix">
<ul>
<li><a href="{U_SEARCH_NEW}">{L_SEARCH_NEW}

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;


<li><a href="{U_SEARCH_SELF}">{L_SEARCH_SELF}

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;


<p>{LOGGED_AS}. {LAST_VISIT_DATE}

Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;


<!-- END switch_user_logged_in -->

<!-- BEGIN switch_user_logged_out -->
<div id="pun-visit">
<p>{L_NOT_CONNECTED} {L_LOGIN_REGISTER}

Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;


<!-- END switch_user_logged_out -->

<div class="pun-crumbs">
<p class="crumbs">
<a href="{U_INDEX}">{L_INDEX}

Unknown end tag for &lt;/a&gt;

{NAV_CAT_DESC} » <strong>{PAGE_TITLE}

Unknown end tag for &lt;/strong&gt;




Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;



<div class="main frm">

<!-- BEGIN switch_pagination -->
<div class="paged-head clearfix">
<p class="paging">{PAGINATION}

Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;


<!-- END switch_pagination -->

<div class="main-head">
<h1 class="page-title">{L_ORDER_OR_SELECT}

Unknown end tag for &lt;/h1&gt;




Unknown end tag for &lt;/div&gt;



<div class="main-content">
<form action="{S_MODE_ACTION}" method="get" class="form-frm">
<fieldset class="frm-set multi">
<dl>
<dt>{L_USER_SELECT}

Unknown end tag for &lt;/dt&gt;


<dd><input type="text" class="inputbox" name="username" maxlength="25" size="20" value="{L_USER_SELECT_VALUE}" />

Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<dl>
<dt>{L_SELECT_SORT_METHOD}

Unknown end tag for &lt;/dt&gt;


<dd>{S_MODE_SELECT}

Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<dl>
<dt>{L_ORDER}

Unknown end tag for &lt;/dt&gt;


<dd>{S_ORDER_SELECT}

Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;



<div class="frm-buttons">
{S_HIDDEN_SID}
<input type="submit" name="submit" value="{L_SUBMIT}" />


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/fieldset&gt;




Unknown end tag for &lt;/form&gt;



<fieldset class="frm-set clearfix">
<div class="frm-form">
<table class="table" cellspacing="0">
<thead>
<tr>
<th class="tclmemberlist">{L_AVATAR} - {L_USERNAME}

Unknown end tag for &lt;/th&gt;


<!-- BEGIN switch_th_group -->
<th class="tc2">{L_GROUPS}

Unknown end tag for &lt;/th&gt;


<!-- END switch_th_group -->
<th class="tc3">{L_INTERESTS}

Unknown end tag for &lt;/th&gt;


<th class="tc2">{L_JOINED}

Unknown end tag for &lt;/th&gt;


<th class="tc2">{L_VISITED}

Unknown end tag for &lt;/th&gt;


<th class="tc3">{L_POSTS}

Unknown end tag for &lt;/th&gt;


<th class="tc3">{L_PM}

Unknown end tag for &lt;/th&gt;


<th class="tc3">{L_WEBSITE}

Unknown end tag for &lt;/th&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/thead&gt;



<tbody>
<!-- BEGIN memberrow -->
<tr>
<td class="tcl avatar-mini">
<div class="thanhvienmoi" style="height: 20px;width: 116px;">
<font style="font-family: Tahoma; font-size: 11px"><a class="gen" href="{memberrow.U_VIEWPROFILE}"><span class="avatartv1">{memberrow.AVATAR_IMG}

Unknown end tag for &lt;/span&gt;

 {memberrow.USERNAME}




Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/font&gt;


<span class="thamtopp" style="height: 20px;float: right;margin-right: -70px;" align="right">
{memberrow.JOINED}

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;




<!-- BEGIN switch_td_group -->
<td class="tc2">{memberrow.GROUPS}

Unknown end tag for &lt;/td&gt;


<!-- END switch_td_group -->
<td class="tc3"> {memberrow.INTERESTS}

Unknown end tag for &lt;/td&gt;


<td class="tc2">{memberrow.JOINED}

Unknown end tag for &lt;/td&gt;


<td class="tc2">
<div class="truycapmoi" style="height: 20px;width: 156px;">
<font style="font-family: Tahoma; font-size: 11px">
<a class="gen" href="{memberrow.U_VIEWPROFILE}">
<span class="avatartv1">{memberrow.AVATAR_IMG}

Unknown end tag for &lt;/span&gt;


{memberrow.USERNAME}




Unknown end tag for &lt;/a&gt;






Unknown end tag for &lt;/font&gt;







Unknown end tag for &lt;/div&gt;



<td class="tc2">
<div class="truycapmoi12" style="height: 20px;width: 156px;">
<font style="font-family: Tahoma; font-size: 11px">
<a class="gen" href="{memberrow.U_VIEWPROFILE}">








<span class="avatartv1">{memberrow.AVATAR_IMG}

Unknown end tag for &lt;/span&gt;


{memberrow.USERNAME}  

Unknown end tag for &lt;/a&gt;


<div class="" style="height: 20px;float: right;margin-right: -20px;" align="right">{memberrow.POSTS} bàiviết

Unknown end tag for &lt;/div&gt;





<div class="sobai2" style="height: 20px;width: 95px;" align="right">

Unknown end tag for &lt;/div&gt;








Unknown end tag for &lt;/div&gt;









<td class="tc2">
<div class="K3sobai2" style="height: 20px;width: 95px;margin-right: -220px;" align="right"><font style="font-family: Tahoma; font-size: 11px">{memberrow.POSTS} bàiviết

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/div&gt;






Unknown end tag for &lt;/td&gt;









Unknown end tag for &lt;/td&gt;




<td class="tc3">
<div class="K3sobai" style="height: 20px;width: 95px;margin-right: -220px;" align="right"><font style="font-family: Tahoma; font-size: 11px">{memberrow.POSTS} bàiviết

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/div&gt;






Unknown end tag for &lt;/td&gt;








<td class="tc3">{memberrow.PM_IMG}

Unknown end tag for &lt;/td&gt;


<td class="tc4">{memberrow.WWW_IMG}

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<!-- END memberrow -->
<!-- BEGIN switch_no_user -->
<tr>
<td colspan="{switch_no_user.COLSPAN_NUMBER}" class="tcr">{switch_no_user.L_NO_USER}

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<!-- END switch_no_user -->


Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/fieldset&gt;




Unknown end tag for &lt;/div&gt;



<div class="main-foot">


Unknown end tag for &lt;/div&gt;



<!-- BEGIN switch_pagination -->
<div class="paged-foot clearfix">
<p class="paging">{PAGINATION}

Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;


<!-- END switch_pagination -->



Unknown end tag for &lt;/div&gt;



```

Bước 5 : Vào Templates >> Portal thay lần lượt toàn bộ các code sau
mod\_most\_active\_starters

```

<table width="100%" border="0" cellspacing="0" cellpadding="0">
<td style="padding: 0px; background: #f7f7f7 none repeat scroll 0% 0%; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="100%">

<div id="poster1" style="display:none;height: 158px;overflow: hidden;">
<table border="0" cellpadding="0" cellspacing="0" width="100%"><tr valign="top">
<td style="border-top: 0px none; padding: 0px; background: transparent url(http://i1036.photobucket.com/albums/a449/a1tinhgia3/image/list.gif) no-repeat scroll center top; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="24" height="200"><img src="http://illiweb.com/fa/empty.gif" width="24" border="0">

Unknown end tag for &lt;/td&gt;

<td style="border-top: 0px none; padding: 0px; line-height: 20px; background-repeat: repeat;" align="left" background="http://i1036.photobucket.com/albums/a449/a1tinhgia3/image/listbg.gif"><!-- BEGIN POSTER --><font style="font-family: Tahoma; font-size: 11px"> {POSTER.NAME}

Unknown end tag for &lt;/font&gt;

<span style="float: right">{POSTER.NB_TOPICS}

Unknown end tag for &lt;/span&gt;

<br><!-- END POSTER -->

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/table&gt;



```

mod\_most\_active\_topics

```

<td style="padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="100%"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tr valign="top"><td style="border-top: 0px none; padding: 0px; background: transparent url(http://i74.servimg.com/u/f74/18/12/38/45/76710.png) no-repeat scroll center top; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="24"><img src="http://illiweb.com/fa/empty.gif" width="24" border="0">

Unknown end tag for &lt;/td&gt;

<td style="border-top: 0px none; padding: 0px; line-height: 20px; background-repeat: repeat;" align="left" background="http://i24.servimg.com/u/f24/13/54/69/46/listbg13.gif">
<!-- BEGIN TOPIC -->

<table border="0" class="lbb" cellpadding="0" cellspacing="0" width="100%"><tbody><tr valign="bottom"><td style="height: 20px" width="74%"><a onmouseover="showtip('{TOPIC.TITLE}');" onmouseout="hidetip();" href="{TOPIC.LINK}"><font style="font-family: Tahoma; font-size: 11px">{TOPIC.NAME}

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;

<td style="height: 20px" width="26%" align="right"><font style="font-family: Tahoma; font-size: 11px"><span style="float:right;">  Trả lời

Unknown end tag for &lt;/span&gt;

<span class="a1view" style="float:right;">{TOPIC.TITLE}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



<!-- END TOPIC -->


Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;

<script type="text/javascript">$(".a1view").each(function(){$(this).html(parseInt($(this).text().replace(/^[\s\S]*-\s+(\d+)\s+[\s\S]*$/m, '$1')));});

Unknown end tag for &lt;/script&gt;




Unknown end tag for &lt;/div&gt;



<div class="Page" style="padding: 0px; height: 304px; display: block;">
<table class="tborder" style="border-bottom-width: 0px;" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr>
<td>

<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
<tbody>


Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;


<tbody>
<tr>


```
mod\_recent\_topics

```


<style>
.starsTitle {
color: #706969;
font-family: Comic Sans MS!important;
font-variant: small-caps!important;
font-weight: 700!important;
height: 20px;
line-height: 20px;
padding: 5px;
text-shadow: 1px 1px 1px #fff;
}

.lastcate, .leftrecent, .repfmvi, .rightrecent, .viewfmvi {
overflow: hidden;
position: absolute;
text-overflow: ellipsis;
white-space: nowrap;
}




.repfmvi {
right: 230px;
text-align: right;
width: 50px;
}

.lastcate {
right: 0;
text-align: right;
width: 120px;
}



Unknown end tag for &lt;/style&gt;











Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;


<td style="width: 12px">

Unknown end tag for &lt;/td&gt;


<td valign="top" style="border: 1px solid #9DB3C5; padding: 1px">
<style type="text/css">
th,td,p {
font-family: Tahoma,Verdana,Arial,Helvetica,sans-serif }
/* Style cho menu tabs */div.TabView div.Tabs{height: 28px; /* chiều cao của tab menu */overflow: hidden;}div.TabView div.Tabs: hover,{height: 32px; /* chiều cao của tab menu */overflow: hidden;}div.TabView div.Tabs a , div.TabView div.Tabs a:hover {float: left;display: block;background-color:#;text-align: center;height: 29px;padding: 6px;vertical-align: middle;border:1px solid #b4d0f3;border-top: 0px;border-left: 0px;border-bottom: 0px; /* đường viền quanh tabs menu */text-decoration: none!important;font-family: Tahoma;font-size: 11px;color: #000000;}.hotrott{background-color: #ffffff;border: 0px solid #ded7d7;}.nen{background-color: #ffffff;border: 1px solid #ded7d7;}div.TabView div.Tabs a.Active{background-color: #f7f7f7; /* màu nền tab menu active */color: #000000;border:1px solid #b4d0f3;border-top: 0px;border-left: 0px;border-bottom: 0px; padding: 6px;height: 29px;font-size: 11px;font-weight: bold;}/* Style cho phần text nội dung của mỗi tab */div.TabView {background: #F7F7F7;clear: both;border: 0px solid #ffffff;overflow: hidden; /* giá trị là auto nếu muốn hiện scroll bar */}div.TabView div.Pages div.Page{height: 100%;padding: 0px;border: 0px solid #b4d0f3;overflow: hidden; /* giá trị là auto nếu muốn hiện scroll bar */}

Unknown end tag for &lt;/style&gt;

<script type="text/javascript" src="http://untip-js.googlecode.com/files/Tabview.js">

Unknown end tag for &lt;/script&gt;


<div id="TabView" class="TabView" style="padding: 0px;">
<!-- tabs -->

<div width="100%" class="Tabs">
<a class="Active" href="javascript:tabview_switch('TabView', 1);">Bài viết mới

Unknown end tag for &lt;/a&gt;


<a>Topic trả lời nhiều nhất

Unknown end tag for &lt;/a&gt;

<a>Topics được xem nhiều nhất

Unknown end tag for &lt;/a&gt;

<a>Thống kê

Unknown end tag for &lt;/a&gt;


<a>Forumotion

Unknown end tag for &lt;/a&gt;





<ul class="tabs" id="vietvbb_topstats_t">
<li style="border-right: 0px; display: none;" id="vietvbb_topstats_t_loading">

Unknown end tag for &lt;/li&gt;

 

Unknown end tag for &lt;/ul&gt;

 

Unknown end tag for &lt;/div&gt;






<!--nội dung tabs -->
<div style="height: 370px; width:100%" class="Pages">
<div class="Page" style="padding: 0px; height: 373px;display: block;">
<!-- BEGIN classical_row -->
<table class="tborder" style="border-bottom-width: 0px;" align="center" border="0" cellpadding="0" cellspacing="0" width="100%">

<tbody>
<tr valign="top">
<td style="padding: 0px; background: #f7f7f7 none repeat scroll 0% 0%; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="100%">


<div class="starsTitle" style="position: relative;"><h3>
<p style="position: relative; margin-left: 26px; margin-right: 10px;">

<input type="submit" onmouseover="showtip('Click Để Reload Topic.')" onmouseout="hidetip()" value="F5" onclick="reloadlast();" />


<span style="margin-right: -7px;" class="repfmvi">Gửi cuối

Unknown end tag for &lt;/span&gt;



<span style="margin-right: -6px;" class="lastcate">Vào lúc

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/p&gt;



Unknown end tag for &lt;/h3&gt;


<div id="proLastLoad" class="loaddingLike" style="display: none; ">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;




<table border="0" cellpadding="0" cellspacing="0" width="100%">
<tr valign="top">
<td style="border-top: 0px none; padding: 0px; background: transparent url(http://i74.servimg.com/u/f74/18/12/38/45/76710.png) no-repeat scroll center top; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="24"><img src="http://illiweb.com/fa/empty.gif" width="24" border="0">

Unknown end tag for &lt;/td&gt;


<td style="border-top: 0px none; padding: 0px; line-height: 20px; background-repeat: repeat;" align="left" background="http://i61.servimg.com/u/f61/15/61/17/20/listbg13.gif">
<ul style="overflow: auto !important;max-height: 800px;padding-right: 10px;">



<div class="test" id="loadoday">




<!-- BEGIN recent_topic_row -->










<li>
<span class="nTopics">
<a onmouseover="show_tooltip(this, $(this).next().html(), 'FMvi.vn')" href="{classical_row.recent_topic_row.U_TITLE}">{classical_row.recent_topic_row.L_TITLE}

Unknown end tag for &lt;/a&gt;


<span style="display:none"><font color="red">Tiêu đề

Unknown end tag for &lt;/font&gt;

: <b><font color="#00569c">{classical_row.recent_topic_row.L_TITLE}

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/b&gt;

<br />
<p style="border-bottom: 1px dashed;
margin-bottom: 5px;
padding-bottom: 5px;">

Unknown end tag for &lt;/p&gt;



<font color="blue">Gửi lúc

Unknown end tag for &lt;/font&gt;

: {classical_row.recent_topic_row.S_POSTTIME}

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/span&gt;


<span class="vaoluc"><style>.vaoluc{margin-left: 30px;
text-align: right;
width: 150px;
float: right;}

Unknown end tag for &lt;/style&gt;


{classical_row.recent_topic_row.S_POSTTIME}

Unknown end tag for &lt;/span&gt;





<span class="nTright">
<!-- BEGIN switch_poster -->
<a href="{classical_row.recent_topic_row.switch_poster.U_POSTER}">{classical_row.recent_topic_row.switch_poster.S_POSTER}

Unknown end tag for &lt;/a&gt;



<span class="kickco">




<!-- END switch_poster -->
<!-- BEGIN switch_poster_guest -->
{classical_row.recent_topic_row.switch_poster_guest.S_POSTER}
<!-- END switch_poster_guest -->


Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/li&gt;



<!-- END recent_topic_row -->


Unknown end tag for &lt;/ul&gt;


<!-- END classical_row -->


Unknown end tag for &lt;/div&gt;





Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;







Unknown end tag for &lt;/div&gt;


<div class="Page" style="padding: 0px; height: 304px; display: block;">
<table class="tborder" style="border-bottom-width: 0px;" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr>
<td>

<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
<tbody>


Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;


<tbody>
<tr>










<style>
.kickco {
width: 100px;
}
.kickco img{
width: 100px;
}


Unknown end tag for &lt;/style&gt;



<script>jQuery("#ca3chatbox").click(function(){jQuery("#ca3rules").toggle("slow");});function reloadlast() {jQuery(document).ready(function(){jQuery("#loadoday").empty();jQuery('<span class="abcd" />').load('/forum #loadoday', function() {jQuery(this).appendTo('#loadoday');});}

Unknown end tag for &lt;/script&gt;

<script>
function reloadlast() {
jQuery(document).ready(function(){
jQuery("#loadoday").empty();
jQuery('<span class="abcd" />').load('/forum #loadoday', function() {
jQuery(this).appendTo('#loadoday');
jQuery(".c3zonee:contains('»')").remove();});});}


Unknown end tag for &lt;/script&gt;


<script>
$(function(){$.get('/feed',function(a){console.log('Loading additional informations for recent topics...');var x=$(a).find('item');var y=$('.nTopics');for(var i=0,j=0;i<x.length,j<y.length;i++,j++){$(y).eq(j).find('span:first').append('<br><span class="kickco"><font color="green"><b>Nội dung:

Unknown end tag for &lt;/b&gt;

 

Unknown end tag for &lt;/font&gt;

'+unescape($(x).eq(i).find('description').text())+'<br><font color="black"><b>Tác giả:

Unknown end tag for &lt;/b&gt;

 

Unknown end tag for &lt;/font&gt;

'+$(x).eq(i).find('guid').next().text()+'<br><font color="black"><b>Chuyên mục:

Unknown end tag for &lt;/b&gt;

 

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/span&gt;

'+$(x).eq(i).find('category').text())}})});

Unknown end tag for &lt;/script&gt;


<script src="http://www.cntt-k3.org/62609.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;




```
mod\_top\_post\_users\_month

```

<table width="100%" border="0" cellspacing="0" cellpadding="0">
<td style="padding: 0px; background: #f7f7f7 none repeat scroll 0% 0%; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="100%">



<div id="poster3" style="display:none;height: 158px;overflow: hidden;">
<table border="0" cellpadding="0" cellspacing="0" width="100%"><tr valign="top">
<td style=" border-top: 0px none; padding: 0px; background: transparent url(http://i1036.photobucket.com/albums/a449/a1tinhgia3/image/list.gif) no-repeat scroll center top; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="24" height="200"><img src="http://illiweb.com/fa/empty.gif" width="24" border="0">

Unknown end tag for &lt;/td&gt;

<td style="border-top: 0px none; padding: 0px; line-height: 20px; background-repeat: repeat;" align="left" background="http://i1036.photobucket.com/albums/a449/a1tinhgia3/image/listbg.gif"><!-- BEGIN POSTER --><font style="font-family: Tahoma; font-size: 11px"> {POSTER.NAME}

Unknown end tag for &lt;/font&gt;

<span style="float: right">{POSTER.NB_POSTS}

Unknown end tag for &lt;/span&gt;

<br><!-- END POSTER -->

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;






Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/table&gt;



```
mod\_top\_post\_users\_week
```

<table width="100%" border="0" cellspacing="0" cellpadding="0">
<td style="padding: 0px; background: #f7f7f7 none repeat scroll 0% 0%; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="100%">

<div id="poster2" style="display:none;height: 158px;overflow: hidden;">
<table border="0" cellpadding="0" cellspacing="0" width="100%"><tr valign="top">
<td style="border-top: 0px none; padding: 0px; background: transparent url(http://i1036.photobucket.com/albums/a449/a1tinhgia3/image/list.gif) no-repeat scroll center top; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="24" height="200"><img src="http://illiweb.com/fa/empty.gif" width="24" border="0">

Unknown end tag for &lt;/td&gt;

<td style="border-top: 0px none; padding: 0px; line-height: 20px; background-repeat: repeat;" align="left" background="http://i1036.photobucket.com/albums/a449/a1tinhgia3/image/listbg.gif"><!-- BEGIN POSTER --><font style="font-family: Tahoma; font-size: 11px"> {POSTER.NAME}

Unknown end tag for &lt;/font&gt;

<span style="float: right">{POSTER.NB_POSTS}

Unknown end tag for &lt;/span&gt;

<br><!-- END POSTER -->

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/table&gt;




```

mod\_top\_posters

```






<table width="100%" border="0" cellspacing="0" cellpadding="0">
<td style="padding: 0px; background: #f7f7f7 none repeat scroll 0% 0%; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="100%"><div style="margin-bottom: 1px;"><ul class="tabs"><li class="current"><span style="padding: 0px 7px;">

<select id="changeposter">
<option value="users_month">Thành viên mới

Unknown end tag for &lt;/option&gt;


<option value="memnew">Top truy cập

Unknown end tag for &lt;/option&gt;


<option value="active_starters">Top gửi bài hôm nay

Unknown end tag for &lt;/option&gt;


<option value="users_week">Quản trị viên

Unknown end tag for &lt;/option&gt;




Unknown end tag for &lt;/select&gt;




Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/li&gt;



Unknown end tag for &lt;/ul&gt;












<div class="module main">
<div id="memnew" class="top-vi" style="display:none;height: 160px;">



<table border="0" cellpadding="0" cellspacing="0" width="100%">
<tr valign="top">
<td style="height: 160px; border-top: 0px none; padding: 0px; background: transparent url(http://i1036.photobucket.com/albums/a449/a1tinhgia3/image/list.gif) no-repeat scroll center top; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="24" height="200"><img src="http://illiweb.com/fa/empty.gif" width="24" border="0">

Unknown end tag for &lt;/td&gt;

<td style="border-top: 0px none; padding: 0px; line-height: 20px; background-repeat: repeat;" align="left" background="http://i1036.photobucket.com/albums/a449/a1tinhgia3/image/listbg.gif">


<div class="truycapmoi1 style="height: 20px;width: 300px;">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;






Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;

<div class="Page">
<table style="border-bottom-width: 0px;" align="center" border="0" cellpadding="0" cellspacing="0" width="100%">




<script>
$(document).ready(function(){
$(function() {
$('<span class="truycap" />').load('/memberlist?mode=lastvisit&order=DESC&submit=Ok&username .truycapmoi', {limit: 10}, function() {
jQuery(this).hide()
.appendTo('.truycapmoi1')
.fadeIn(1);
});
return false;
});
$(function() {
$('<span class="truycap" />').load('/memberlist?mode=lastvisit&order=DESC&submit=Ok&username .K3sobai22', {limit: 10}, function() {
jQuery(this).hide()
.appendTo('.sobai22')
.fadeIn(1);
});
return false;
});
});


Unknown end tag for &lt;/script&gt;












Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;









Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;

















<div class="module main">
<div id="active_starters" class="top-vi" style="height: 160px; display: none;">




<table border="0" cellpadding="0" cellspacing="0" width="100%">
<tr valign="top">
<td style="height: 160px; border-top: 0px none; padding: 0px; background: transparent url(http://i1036.photobucket.com/albums/a449/a1tinhgia3/image/list.gif) no-repeat scroll center top; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="24" height="200"><img src="http://illiweb.com/fa/empty.gif" width="24" border="0">

Unknown end tag for &lt;/td&gt;

<td style="border-top: 0px none; padding: 0px; line-height: 20px; background-repeat: repeat;" align="left" background="http://i1036.photobucket.com/albums/a449/a1tinhgia3/image/listbg.gif">


<div class="truycapmoi12 style="height: 20px;width: 300px;">











Unknown end tag for &lt;/div&gt;





Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;






Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;

<div class="Page">

<table style="border-bottom-width: 0px;" align="center" border="0" cellpadding="0" cellspacing="0" width="100%">




<script>
$(document).ready(function(){
$(function() {
$('<span class="k3tv" />').load('/memberlist?mode=today_posters .truycapmoi12', {limit: 10}, function() {
jQuery(this).hide()
.appendTo('.truycapmoi12')
.fadeIn(1);
});
return false;
});
$(function() {
$('<span class="k3tv" />').load('/memberlist?mode=today_posters .K3sobai2', {limit: 10}, function() {
jQuery(this).hide()
.appendTo('.sobai2')
.fadeIn(1);
});
return false;
});
});


Unknown end tag for &lt;/script&gt;












Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;









Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;






<div class="module main">
<div id="users_week" class="top-vi" style="display:none;height: 160px;">



<table border="0" cellpadding="0" cellspacing="0" width="100%">
<tr valign="top">
<td style="height: 160px; border-top: 0px none; padding: 0px; background: transparent url(http://i1036.photobucket.com/albums/a449/a1tinhgia3/image/list.gif) no-repeat scroll center top; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="24" height="200"><img src="http://illiweb.com/fa/empty.gif" width="24" border="0">

Unknown end tag for &lt;/td&gt;

<td style="border-top: 0px none; padding: 0px; line-height: 20px; background-repeat: repeat;" align="left" background="http://i1036.photobucket.com/albums/a449/a1tinhgia3/image/listbg.gif">


<font style="font-family: Tahoma; font-size: 11px"> <a href="/u1" title="Chupy"><span style="color:#EB071A"><strong>Chupy

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/font&gt;


<span style="float: right"><a style="color: #EB071A" class="gensmall" href="/g2-group">Administrators

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;


<br>

<font style="font-family: Tahoma; font-size: 11px"> <a href="/u190" title="Bư"><span style="color:#EB071A"><strong>Bư

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/font&gt;


<span style="float: right"><a style="color: #EB071A" class="gensmall" href="/g2-group">Administrators

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;


<br>

<font style="font-family: Tahoma; font-size: 11px"> <a href="/u241" title="Thànhkent"><span style="color:#EB071A"><strong>Thànhkent

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/font&gt;


<span style="float: right"><a style="color: #EB071A" class="gensmall" href="/g2-group">Administrators

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;


<br>


<font style="font-family: Tahoma; font-size: 11px"> <a href="/u182" title="cubimtq"><span style="color:#EB071A"><strong>cubimtq

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/font&gt;


<span style="float: right"><a style="color: #EB071A" class="gensmall" href="/g2-group">Administrators

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;


<br>

<font style="font-family: Tahoma; font-size: 11px"> <a href="/u1247" title="Sơn Ngây Ngô®"><span style="color:#279C00"><strong>Sơn Ngây Ngô®

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/font&gt;


<span style="float: right">
<a style="color: #279C00" class="gensmall" href="/g15-group">Moderators

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;


<br>
<font style="font-family: Tahoma; font-size: 11px"> <a href="/u34" title="meomeo"><span style="color:#279C00"><strong>meomeo

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/font&gt;


<span style="float: right">
<a style="color: #279C00" class="gensmall" href="/g15-group">Moderators

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;


<br>


<font style="font-family: Tahoma; font-size: 11px"> <a href="/u327" title="Cros"><span style="color:#B7D411"><strong>Cros

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/font&gt;


<span style="float: right">
<a style="color: #B7D411" class="gensmall" href="/g22-group">Designs Skin

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;


<br>
<font style="font-family: Tahoma; font-size: 11px"> <a href="/u179" title="AnHung"><span style="color:#B7D411"><strong>AnHung

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/font&gt;


<span style="float: right">
<a style="color: #B7D411" class="gensmall" href="/g22-group">Designs Skin

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;





Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;









Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;





Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/table&gt;









<div class="module main">
<div id="users_month" class="top-vi" style="display:block;height: 160px;">



<table border="0" cellpadding="0" cellspacing="0" width="100%">
<tr valign="top">
<td style="height: 160px; border-top: 0px none; padding: 0px; background: transparent url(http://i1036.photobucket.com/albums/a449/a1tinhgia3/image/list.gif) no-repeat scroll center top; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="24" height="200"><img src="http://illiweb.com/fa/empty.gif" width="24" border="0">

Unknown end tag for &lt;/td&gt;

<td style="border-top: 0px none; padding: 0px; line-height: 20px; background-repeat: repeat;" align="left" background="http://i1036.photobucket.com/albums/a449/a1tinhgia3/image/listbg.gif">


<div class="Cnttthanhvien style="height: 20px;width: 300px;">










Unknown end tag for &lt;/div&gt;





Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;






Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;

<div class="Page">

<table style="border-bottom-width: 0px;" align="center" border="0" cellpadding="0" cellspacing="0" width="100%">




<script>
$(document).ready(function(){
$(function() {
$('<span class="k3tv" />').load('/memberlist?mode=joined&order=DESC&submit=Ok&username .thanhvienmoi', {limit: 10}, function() {
jQuery(this).hide()
.appendTo('.Cnttthanhvien')
.fadeIn(1);
});
return false;
});
$(function() {
$('<span class="k3tv" />').load('/memberlist?mode=joined&order=DESC&submit=Ok&username .K3sobai2', {limit: 10}, function() {
jQuery(this).hide()
.appendTo('.sobai')
.fadeIn(1);
});
return false;
});
});


Unknown end tag for &lt;/script&gt;












Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;









Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;






<table width="100%" border="0" cellspacing="0" cellpadding="0">
<td style="padding: 0px; background: #f7f7f7 none repeat scroll 0% 0%; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="100%"><div style="margin-bottom: 1px;"><ul class="tabs"><li class="current"><span style="padding: 0px 7px;">


<script type="text/javascript">
function showstuff(value){
document.getElementById("poster").style.display = (value == "poster") ? "block" : "none";
document.getElementById("poster1").style.display = (value == "poster1") ? "block" : "none";
document.getElementById("poster2").style.display = (value == "poster2") ? "block" : "none";
document.getElementById("poster3").style.display = (value == "poster3") ? "block" : "none";

}


Unknown end tag for &lt;/script&gt;



<select id="changer" name="type" onchange="showstuff(this.value);">
<option value="poster">Top poster

Unknown end tag for &lt;/option&gt;


<option value="poster2">Top poster tuần

Unknown end tag for &lt;/option&gt;


<option value="poster1">Top mở chủ đề

Unknown end tag for &lt;/option&gt;


<option value="poster3">Top poster tháng

Unknown end tag for &lt;/option&gt;






Unknown end tag for &lt;/select&gt;





Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/li&gt;



Unknown end tag for &lt;/ul&gt;



<div id="poster" style="display:block;height: 158px;overflow: hidden;">
<table border="0" cellpadding="0" cellspacing="0" width="100%"><tr valign="top">
<td style="height: 160px; border-top: 0px none; padding: 0px; background: transparent url(http://i1036.photobucket.com/albums/a449/a1tinhgia3/image/list.gif) no-repeat scroll center top; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="24" height="200"><img src="http://illiweb.com/fa/empty.gif" width="24" border="0">

Unknown end tag for &lt;/td&gt;

<td style="border-top: 0px none; padding: 0px; line-height: 20px; background-repeat: repeat;" align="left" background="http://i1036.photobucket.com/albums/a449/a1tinhgia3/image/listbg.gif">
<div id="top_posters">

<!-- BEGIN POSTER --><font style="font-family: Tahoma; font-size: 11px"> {POSTER.NAME}

Unknown end tag for &lt;/font&gt;

<span style="float: right">{POSTER.NB_POSTS}

Unknown end tag for &lt;/span&gt;

<br/><!-- END POSTER -->




Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;






Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/table&gt;








```

62609.js:
```
$(function(){searchtopic('/search?search_keywords=&search_author=*_*','20','#recentnew ul');$("#changeviewrep").change(function(){$(".viewrep").hide();$("#"+$(this).val()).show()});$("#changeposter").change(function(){$(".top-vi").hide();$("#"+$(this).val()).show()});$("#most_viewed li:gt(10),#most_active li:gt(10),#top_posters li:gt(10),#active_starters li:gt(4),#users_week li:gt(10),#users_month li:gt(10)").hide();var u;for(u=0;u<20;u++){var numelat=$(".rightnumber:eq("+u+")");numelat.text(numelat.text().slice(numelat.text().lastIndexOf("-")+1))}$("#left").fadeIn(1000);$("#changeFMvi").html($("#pun-about select[name='selected_id']").html())});function openWin(a,b,c){width=b;height=c;top_val=(screen.height-height)/2-30;0>top_val&&(top_val=0);left_val=(screen.width-width)/2-18;window.open(a,null,"toolbar=0,location=0,status=1,menubar=0,scrollbars=1,resizable=1,width="+width+",height="+height+", top="+top_val+",left="+left_val)}function searchtopic(nguonF,soF,dichF){$("#proLastLoad").show();$.ajax({url:nguonF,success:function(data){var chondulieu=".topic-title:not('.topic-title:contains(\'Â»\')'):lt("+soF+")";if($(data).find(chondulieu).length==0){$(dichF).html('<p><font face="Courier New"><font color="red">KhĂ´ng tĂ¬m tháº¥y bĂ i viáº¿t.

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/p&gt;

');$("#proLastLoad").hide()}else{$("#proLastLoad").hide();$("#recentnew .latest_topics").empty();$(data).find(chondulieu).find(".topictitle, .tooltipFMvi").appendTo(dichF);$(dichF+' .topictitle').wrap("<li>

Unknown end tag for &lt;/li&gt;

");var ti;for(ti=0;ti<soF;ti++){var it=$(dichF+' a.topictitle:eq('+ti+')');var lastUx=it.parent().next().find('p:eq(6)>strong').html();var linkUx=it.parent().next().find(".lastlink-FMvi a").attr("href");var trangthai=it.parent().next().find('p:eq(3)>font').text();var chuyenmuc=it.parent().next().find('p:eq(2)>font').html();var traloi=it.parent().next().find('p:eq(5)>font').html();var luotxem=it.parent().next().find('p:eq(4)>font').html();if(langEV()){var dabikhoa="This topic is locked";var dacomoi="New posts"}else{var dabikhoa="Chủ đề này đã bị khóa";var dacomoi="Bài viết mới"}if(trangthai.search(dabikhoa)!=-1){var imgUx='http://i48.servimg.com/u/f48/16/58/89/73/locked10.png'}else if(trangthai.search(dacomoi)!=-1){var imgUx='http://i48.servimg.com/u/f48/16/58/89/73/post_n10.gif'}else{var imgUx='http://i48.servimg.com/u/f48/16/58/89/73/post_o10.png'};it.replaceWith('<span onmouseover="show_tooltip(this, $(this).parents(\'li\').next().html(), \'FMvi.vn\')" class="leftrecent"><a href="'+linkUx+'" class="topictitle">'+it.text()+'

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;

<span class="imgstatus"><img width="10px" src="'+imgUx+'" />

Unknown end tag for &lt;/span&gt;

<span class="rightrecent">'+lastUx+'

Unknown end tag for &lt;/span&gt;

<span class="showpost"><a class="firstTopic" onclick="openWin(this.href.replace(\'#\', \'?showpost=\'), 1000, 500);return false" href="'+linkUx+'"> ▼

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;

<span class="viewfmvi">'+luotxem+'

Unknown end tag for &lt;/span&gt;

<span class="repfmvi">'+traloi+'

Unknown end tag for &lt;/span&gt;

<span class="lastcate">'+chuyenmuc+'

Unknown end tag for &lt;/span&gt;

')}}},error:function(jqXHR,textStatus,errorThrown){$(dichF).html('<p><font face="Courier New"><font color="red">Có lỗi xảy ra trong quá trình tải dữ liệu.

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/p&gt;

')}})}var versionMinor=parseFloat(navigator.appVersion),versionMajor=parseInt(versionMinor),IE=document.all&&!window.opera&&7>versionMajor,IE7=document.all&&!window.opera&&7<=versionMajor,OP=window.opera,FF=document.getElementById,NS=document.layers;function get_item(a,c){if(IE)return c?window.opener.document.all[a]:document.all[a];if(FF)return c?window.opener.document.getElementById(a):document.getElementById(a);if(NS)return c?window.opener.document.layers[a]:document.layers[a]}var current_tooltip;function show_tooltip(a,c,d){var b=get_item("tooltip");b||(b=document.createElement("div"),b.setAttribute("id","tooltip"),document.body.appendChild(b));b.style.zIndex=100;b.style.position="absolute";b.innerHTML=d?'<p class="header">'+d+"

Unknown end tag for &lt;/p&gt;

<p>"+c+"

Unknown end tag for &lt;/p&gt;

":"<p>"+c+"

Unknown end tag for &lt;/p&gt;

";b.style.visibility="visible";a.onmousemove=move_tooltip;a.onmouseout=function(){b.style.visibility="hidden"};a.title=""}var offsetxpoint=-60,offsetypoint=20,real_body=document.compatMode&&"BackCompat"!=document.compatMode?document.documentElement:document.body,real_body=document.documentElement?document.documentElement:document.body;function move_tooltip(a){var c=!IE?a.pageX:event.clientX+real_body.scrollLeft,d=!IE?a.pageY:event.clientY+real_body.scrollTop,b=IE&&!window.opera?real_body.clientWidth-event.clientX-offsetxpoint:window.innerWidth-a.clientX-offsetxpoint-20,e=IE&&!window.opera?real_body.clientHeight-event.clientY-offsetypoint:window.innerHeight-a.clientY-offsetypoint-20,f=0>offsetxpoint?-1*offsetxpoint:-1E3;current_tooltip=get_item("tooltip");current_tooltip.style.left=b<current_tooltip.offsetWidth?IE?real_body.scrollLeft+event.clientX-current_tooltip.offsetWidth+"px":window.pageXOffset+a.clientX-current_tooltip.offsetWidth+"px":c<f?"5px":c+offsetxpoint+"px";current_tooltip.style.top=e<current_tooltip.offsetHeight?IE?real_body.scrollTop+event.clientY-current_tooltip.offsetHeight-offsetypoint+"px":window.pageYOffset+a.clientY-current_tooltip.offsetHeight-offsetypoint+"px":d+offsetypoint+"px"}```
Add xong ấn dấu dấu ![http://r20.imgfast.net/users/2015/12/67/35/smiles/1951265140.png](http://r20.imgfast.net/users/2015/12/67/35/smiles/1951265140.png) nhá ^^
![http://i77.servimg.com/u/f77/16/58/45/96/1210.jpg](http://i77.servimg.com/u/f77/16/58/45/96/1210.jpg)
Bước 6 : Cài đặt Widgets như hình sau

Tiếp theo kick vào ![http://r20.imgfast.net/users/2015/12/67/35/smiles/3803843067.png](http://r20.imgfast.net/users/2015/12/67/35/smiles/3803843067.png) của Recent topics
Number of recent topics : 40
Activate the topics scrolling : Không

Thế là xong ^^ ! .............