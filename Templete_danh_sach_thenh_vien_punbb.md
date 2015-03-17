Chức năng:

> Giao diện gọn đẹp, tiện dụng.
> Tìm thành viên theo ký tự đầu trong nickname.
> 2 kiểu xem danh sách dạng thu gọn và dạng chi tiết.



Demo: ![http://a.imageshack.us/img442/4894/memlist.jpg](http://a.imageshack.us/img442/4894/memlist.jpg)

Hướng dẫn:

> Bước 1: ACP - Ganeral - Messages and e-mails - Configuration - Topics - Topics Per Page : 30
> Bước 2: ACP - Display - Pictures and Colors - Colors - CSS Stylesheet: Thêm vào CSS:

```

/* memberlist 2 in 1 - www.fmvi.org */
.Sname a{background-color:#FFF;border:1px solid #DDD;margin:2px;padding:1px 5px}
.Sname a:hover,.Sname a:active{background-color:#2F98D9;color:#FFF}
.Sname{text-align:right}
.rutgonML img{background-color:#000;border:3px double;border-radius:7px 7px 7px 7px;height:75px;width:72%;margin:10px}
.rutgonML{float:left;width:10%}
.rutgonML p{background-color:#C2BFBF;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:0 2px;padding:2px 5px}
.rutgonML:hover{box-shadow:0 0 10px 5px #000}

```
> Bước 3: ACP - Display - Templates - Ganeral - memberlist\_body: Thay toàn bộ bằng code sau:

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

{NAV_CAT_DESC}&nbsp;&raquo;&nbsp;<strong>{PAGE_TITLE}

Unknown end tag for &lt;/strong&gt;




Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;


<a name="fmvimem">

Unknown end tag for &lt;/a&gt;


<div class="main frm">

<!-- BEGIN switch_pagination -->
<div class="paged-head clearfix">
<p class="paging">{PAGINATION}

Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;


<!-- END switch_pagination -->

<div class="main-head Sname">
<h1 style="float: left;" class="page-title">Danh sách thành viên

Unknown end tag for &lt;/h1&gt;


<a href="?username=A">A

Unknown end tag for &lt;/a&gt;


<a href="?username=B">B

Unknown end tag for &lt;/a&gt;


<a href="?username=C">C

Unknown end tag for &lt;/a&gt;


<a href="?username=D">D

Unknown end tag for &lt;/a&gt;


<a href="?username=E">E

Unknown end tag for &lt;/a&gt;


<a href="?username=F">F

Unknown end tag for &lt;/a&gt;


<a href="?username=G">G

Unknown end tag for &lt;/a&gt;


<a href="?username=H">H

Unknown end tag for &lt;/a&gt;


<a href="?username=I">I

Unknown end tag for &lt;/a&gt;


<a href="?username=J">J

Unknown end tag for &lt;/a&gt;


<a href="?username=K">K

Unknown end tag for &lt;/a&gt;


<a href="?username=L">L

Unknown end tag for &lt;/a&gt;


<a href="?username=M">M

Unknown end tag for &lt;/a&gt;


<a href="?username=N">N

Unknown end tag for &lt;/a&gt;


<a href="?username=O">O

Unknown end tag for &lt;/a&gt;


<a href="?username=P">P

Unknown end tag for &lt;/a&gt;


<a href="?username=Q">Q

Unknown end tag for &lt;/a&gt;


<a href="?username=R">R

Unknown end tag for &lt;/a&gt;


<a href="?username=S">S

Unknown end tag for &lt;/a&gt;


<a href="?username=T">T

Unknown end tag for &lt;/a&gt;


<a href="?username=U">U

Unknown end tag for &lt;/a&gt;


<a href="?username=V">V

Unknown end tag for &lt;/a&gt;


<a href="?username=W">W

Unknown end tag for &lt;/a&gt;


<a href="?username=X">X

Unknown end tag for &lt;/a&gt;


<a href="?username=Y">Y

Unknown end tag for &lt;/a&gt;


<a href="?username=Z">Z

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/div&gt;


<div class="main-content">
<fieldset id="chitietML" class="frm-set clearfix" style="margin: 0 0 -1em 0">
<div class="frm-form" style="display: none">
<table class="table" cellspacing="0">
<thead>
<tr>
<th class="tcl memberlist">{L_AVATAR} - {L_USERNAME}

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
<td class="tcl avatar-mini"><a class="gen" href="{memberrow.U_VIEWPROFILE}">{memberrow.AVATAR_IMG}&nbsp;<span>{memberrow.USERNAME}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;


<!-- BEGIN switch_td_group -->
<td class="tc2">{memberrow.GROUPS}

Unknown end tag for &lt;/td&gt;


<!-- END switch_td_group -->
<td class="tc3">{memberrow.INTERESTS}

Unknown end tag for &lt;/td&gt;


<td class="tc2">{memberrow.JOINED}

Unknown end tag for &lt;/td&gt;


<td class="tc2">{memberrow.LASTVISIT}

Unknown end tag for &lt;/td&gt;


<td class="tc3">{memberrow.POSTS}

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


<fieldset id="rutgonML" class="frm-set clearfix" style="margin: 0">
<!-- BEGIN memberrow -->
<div class="rutgonML">
<a onclick="$('#chitietML tbody>tr').hide();$('#chitietML tbody>tr:eq(' + $(this).attr('alt') + ')').show()" class="gen" href="#fmvimem">{memberrow.AVATAR_IMG}

Unknown end tag for &lt;/a&gt;


<p align="center">{memberrow.USERNAME}

Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;


<!-- END memberrow -->


Unknown end tag for &lt;/fieldset&gt;




Unknown end tag for &lt;/div&gt;


<div class="main-head greenBgT">
<h1 class="page-title">Tìm kiếm thành viên
<span style="float:right">
<a style="color:#FFF" href="#fmvimem" id="chimlX">Danh sách chi tiết

Unknown end tag for &lt;/a&gt;


<a style="display:none; color:#FFF" href="#fmvimem" id="rutmlX">Danh sách rút gọn

Unknown end tag for &lt;/a&gt;


&nbsp;<img src="http://i48.servimg.com/u/f48/16/58/89/73/stock_11.png" />


Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/h1&gt;




Unknown end tag for &lt;/div&gt;


<div class="paged-foot clearfix" id="sapxepFMvi">
<form action="{S_MODE_ACTION}" method="get" class="form-frm">
<span>{L_USER_SELECT}

Unknown end tag for &lt;/span&gt;


<input type="text" class="inputbox" name="username" maxlength="25" size="20" value="{L_USER_SELECT_VALUE}" />
<span>{L_SELECT_SORT_METHOD}

Unknown end tag for &lt;/span&gt;

{S_MODE_SELECT}
<span>{L_ORDER}

Unknown end tag for &lt;/span&gt;

{S_ORDER_SELECT} {S_HIDDEN_SID}
<input type="submit" value="Tìm thành viên" name="submit" style="float: right ! important" />


Unknown end tag for &lt;/form&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;



<script type="text/javascript">
if (my_getcookie("fmvimemlist") == "yes") {
chitietml();
$("#rutmlX, #chimlX").toggle()
} else {
rutgonml()
}

var rutML;
for (rutML = 0; rutML < $('.rutgonML').length; rutML++) {
$('.rutgonML a:eq(' + rutML + ')').attr('alt', rutML)
}

$("#rutmlX").click(function () {
my_setcookie("fmvimemlist", "no", false);
rutgonml();
$("#rutmlX, #chimlX").toggle()
});
$("#chimlX").click(function () {
my_setcookie("fmvimemlist", "yes", false);
chitietml();
$("#rutmlX, #chimlX").toggle()
});

function rutgonml() {
$("#chitietML tbody>tr:not(':first')").hide();
$("#chitietML .frm-form, #rutgonML").show();
}

function chitietml() {
$("#chitietML tbody>tr, #chitietML .frm-form").show();
$("#rutgonML").hide();
}


Unknown end tag for &lt;/script&gt;



```