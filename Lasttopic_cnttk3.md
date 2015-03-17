Demo :

![http://i77.servimg.com/u/f77/16/58/45/96/113.jpg](http://i77.servimg.com/u/f77/16/58/45/96/113.jpg)



Sau đây là cách làm : Nội dung đã bị ẩn - Vui lòng trả lời để thấy

Bước 1 : QUẢN LÝ TỔNG THỂ >> Messages and e-mails >> Cấu hình diễn đàn

Chủ đề trong 1 trang : 10


Bước 2 : Dowload file này về và Add vào Templates > Portal

http://mr-dark.googlecode.com/files/Lasttopic%20Cntt-k3.org.rar

Pass :

```

cntt-k3.org

```

Bước 3 : Sau khi add các Temp vào . Các bạn vào memberlist\_body Thay toàn bộ code = code sau

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


<span class="thamtopp" style="height: 20px;float: right;margin-right: -220px;" align="right">
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


Bước 4 : Vào Index\_Body Thêm code sau lên đầu

```

<div id="page-body">
<div id="{ID_CONTENT_CONTAINER}"{CLASS_CONTENT_CONTAINER}>
<table  class="thongke" cellpadding="0" cellspacing="0" border="0" width="100%" align="center" >
<tbody>
<tr>
<td valign="top" width="100%">
<div class="test">
<table class="thongke" cellpadding="4" cellspacing="0" style="border: 1px #c0c0c0 solid;" border="0" width="100%" align="center">

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



Bước 5 : Vào overall_header tìm xem có đoạn này ko

Code: Chọn Code
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

( ở cuối )

Nếu có thì xoá luôn đi

Bước 6 : Cài đặt Widgets như hình sau
![http://i77.servimg.com/u/f77/16/58/45/96/1210.jpg](http://i77.servimg.com/u/f77/16/58/45/96/1210.jpg)

Tiếp theo kick vào ![http://r20.imgfast.net/users/2015/12/67/35/smiles/3803843067.png](http://r20.imgfast.net/users/2015/12/67/35/smiles/3803843067.png) của Recent topics
Number of recent topics : 40
Activate the topics scrolling : Không

Thế là xong ^^



À quên : ai muốn cho Top post hiển thị lên đầu thì làm như sau

Spoiler:



> Vào : mod\_top\_posters
> thay toàn bộ nó = code sau

```

<table width="100%" border="0" cellspacing="0" cellpadding="0">
<td style="padding: 0px; background: #f7f7f7 none repeat scroll 0% 0%; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="100%"><div style="margin-bottom: 1px;"><ul class="tabs"><li class="current"><span style="padding: 0px 7px;">
<script type="text/javascript">
function showstuff(value){
document.getElementById("poster").style.display = (value == "poster") ? "block" : "none";
document.getElementById("poster1").style.display = (value == "poster1") ? "block" : "none";
document.getElementById("poster2").style.display = (value == "poster2") ? "block" : "none";
document.getElementById("poster3").style.display = (value == "poster3") ? "block" : "none";
document.getElementById("poster4").style.display = (value == "poster4") ? "block" : "none";
}


Unknown end tag for &lt;/script&gt;



<select id="changer" name="type" onchange="showstuff(this.value);">
<option value="poster">Top poster

Unknown end tag for &lt;/option&gt;


<option value="poster1">Top mở chủ đề

Unknown end tag for &lt;/option&gt;


<option value="poster2">Top poster tuần

Unknown end tag for &lt;/option&gt;


<option value="poster3">Top poster tháng

Unknown end tag for &lt;/option&gt;


<option value="poster4">Top truy cập

Unknown end tag for &lt;/option&gt;






Unknown end tag for &lt;/select&gt;





Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/li&gt;



Unknown end tag for &lt;/ul&gt;



<div id="poster" style="display:block;"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tr valign="top"><td style="border-top: 0px none; padding: 0px; background: transparent url(http://i1036.photobucket.com/albums/a449/a1tinhgia3/image/list.gif) no-repeat scroll center top; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="24" height="200"><img src="http://illiweb.com/fa/empty.gif" width="24" border="0">

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





<table width="100%" border="0" cellspacing="0" cellpadding="0">
<td style="padding: 0px; background: #f7f7f7 none repeat scroll 0% 0%; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="100%">

<div id="poster4" style="display:none;">

<table border="0" cellpadding="0" cellspacing="0" width="100%"><tr valign="top">
<td style="border-top: 0px none; padding: 0px; background: transparent url(http://i1036.photobucket.com/albums/a449/a1tinhgia3/image/list.gif) no-repeat scroll center top; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="24" height="200"><img src="http://illiweb.com/fa/empty.gif" width="24" border="0">

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
$('<span class="truycap" />').load('/memberlist?mode=lastvisit&order=DESC&submit=Ok&username .K3sobai2', {limit: 10}, function() {
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




Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/table&gt;


```

> Tiếp theo mod\_top\_post\_users\_week
> Thay nó = code sau
```

<table width="100%" border="0" cellspacing="0" cellpadding="0">
<td style="padding: 0px; background: #f7f7f7 none repeat scroll 0% 0%; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="100%">

<div id="poster2" style="display:none;">
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





Vui lòng ghi rõ nguồn khi sao chép bài viết này từ Cntt-k3.org !