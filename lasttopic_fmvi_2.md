Demo:
![http://i43.servimg.com/u/f43/15/93/33/76/4510.jpg](http://i43.servimg.com/u/f43/15/93/33/76/4510.jpg)

Các chức năng trong lasttopic + top post

.Hoạt động trên hàu hết các trình duyệt
.Hỗ trợ 2 ngô ngữ : Anh - Việt
.Thống kê thành viên tích cực và bài viết mới
.Icon trạng thái chủ đề và popup bài viết cuối
.Chuyển đổi 2 chế độ : Thụ gọn và đầy đủ chức năng
.Tùy chỉnh số tin hiển thị
.Toolip hiển thị thông tin chi tiết của chủ đề
.Toolip hiển thị ảnh đại diện ...

Bắt đầu làm nào

Bước 1 :
Thay toàn bộ code trong mod\_recent\_topics = code sau

```

<!-- BEGIN classical_row -->
<div class="module main recentWidth">
<div class="main-head">
<h3>Thống kê bài viết mới

Unknown end tag for &lt;/h3&gt;


<div id="proLastLoad" class="loaddingLike" style="margin-top:-3px">

Unknown end tag for &lt;/div&gt;


<span id="checktip">
<span class="open">

Unknown end tag for &lt;/span&gt;


<span class="close">

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/span&gt;


<select id="numRecent" size="1">
<option value="155" selected="selected">10

Unknown end tag for &lt;/option&gt;


<option value="235">15

Unknown end tag for &lt;/option&gt;


<option value="315">20

Unknown end tag for &lt;/option&gt;




Unknown end tag for &lt;/select&gt;




Unknown end tag for &lt;/div&gt;


<div id="recentnew" class="main-content">
<ul class="latest_topics">
<!-- BEGIN recent_topic_row -->
<li>
<span onmouseover="show_tooltip(this, $(this).next().html(), 'FMvi.Org')" alt="{classical_row.recent_topic_row.S_POSTTIME}" class="leftrecent">
<a href="{classical_row.recent_topic_row.U_TITLE}">{classical_row.recent_topic_row.L_TITLE}

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/span&gt;


<div class="divtooltip" style="display:none">


Unknown end tag for &lt;/div&gt;


<span class="imgstatus">
<img src="http://i48.servimg.com/u/f48/16/58/89/73/post_o10.png" />
<a class="firstTopic" href="javascript:void(0);"><span style="line-height: 18px; font-size: 9px;"> ▼

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/span&gt;


<span class="rightrecent">
<!-- BEGIN switch_poster -->
<a href="{classical_row.recent_topic_row.switch_poster.U_POSTER}">{classical_row.recent_topic_row.switch_poster.S_POSTER}

Unknown end tag for &lt;/a&gt;


<!-- END switch_poster -->
<!-- BEGIN switch_poster_guest -->{classical_row.recent_topic_row.switch_poster_guest.S_POSTER}
<!-- END switch_poster_guest -->
<!-- <a href="{classical_row.recent_topic_row.U_POSTER}">{classical_row.recent_topic_row.S_POSTER}

Unknown end tag for &lt;/a&gt;

 {ON} {classical_row.recent_topic_row.S_POSTTIME}<br /><br /> -->


Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/li&gt;


<!-- END recent_topic_row -->


Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;


<div id="dulieutip">

Unknown end tag for &lt;/div&gt;


<div id="dulieupostter">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<!-- END classical_row -->
```

Thay toàn bộ code trong mod\_top\_posters = Code sau

```

<div class="module main toppost_width">
<div class="main-head">
<div class="h3">Thành viên tích cực

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div id="top_posters" class="main-content">
<ul class="latest_topics">
<!-- BEGIN POSTER -->
<li><span style="position: absolute; left: 0pt;">{POSTER.NAME}

Unknown end tag for &lt;/span&gt;


<span class="sobaiTop" style="position: absolute; right: 0pt;">{POSTER.NB_POSTS}

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/li&gt;


<!-- END POSTER -->


Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<script type="text/javascript">
var u;
var ku = $(".sobaiTop").length;
for (u = 0; u < ku; u++) {
$(".sobaiTop:eq(" + u + ")").text($(".sobaiTop:eq(" + u + ")").text().split(" ")[0] + " Bài viết")
}


Unknown end tag for &lt;/script&gt;



```

Bước 2 : thay toàn bộ code trong Memberlist\_body = Code sau

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
<td class="tcl avatar-mini">
<a class="gen" href="{memberrow.U_VIEWPROFILE}">{memberrow.AVATAR_IMG} 

Unknown end tag for &lt;/a&gt;


<span class="dataUserFmvi">
<span>
<a class="gen" href="{memberrow.U_VIEWPROFILE}">{memberrow.USERNAME}

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/span&gt;


<div style="display:none"><div style="padding:10px">
<table border="0">
<tbody>
<tr>
<td class="avatarthum" align="left">{memberrow.AVATAR_IMG}

Unknown end tag for &lt;/td&gt;


<td align="left">{memberrow.USERNAME}
<hr />
<span class="thamtop">Tham gia

Unknown end tag for &lt;/span&gt;

:
<font color="violet">{memberrow.JOINED}

Unknown end tag for &lt;/font&gt;


<br />
<span class="truytop">Truy cập cuối

Unknown end tag for &lt;/span&gt;

:
<font color="orange">{memberrow.LASTVISIT}

Unknown end tag for &lt;/font&gt;


<br />
<span class="baiBtop">Bài viết

Unknown end tag for &lt;/span&gt;

:
<font color="cyan">{memberrow.POSTS}

Unknown end tag for &lt;/font&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;


<span class="left20" style="position: absolute; right: 0pt; display: none!important;">
<span class="sobaiTop">{memberrow.POSTS} 

Unknown end tag for &lt;/span&gt;


<span class="baiBtop">Bài viết

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/span&gt;




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
Bước 3 : Thêm vào cuối Overall\_footer\_begin

```


<!-- BEGIN switch_user_logged_in -->
<script type="text/javascript" src="http://fmvi-group.googlecode.com/files/FMvi-last-like.js">

Unknown end tag for &lt;/script&gt;


<!-- END switch_user_logged_in -->
<!-- BEGIN switch_user_logged_out -->
<script type="text/javascript">
$("#left").fadeIn(1000);
$("#checktip .open").click(function () {
alert("Hãy đăng nhập để có thể sử dụng chức năng này");
});
$("#left .module .main-content").height(155);
$("#top_posters .latest_topics li:gt(9), #recentnew .latest_topics li:gt(9)").hide();
$(".latest_topics span").mousemove(function(){
$("#tooltip").remove()
});


Unknown end tag for &lt;/script&gt;


<!-- END switch_user_logged_out -->
```


Bước 4 : Trong Overall\_footer\_end tìm đoạn :

```

<!-- BEGIN switch_facebook_login -->
```

thêm vào bên trên code đó =

```

<script type="text/javascript" src="http://chienthan32.forumvi.com/11295.js">

Unknown end tag for &lt;/script&gt;



```
```
var CopyrightNoticeEn='Skin FMvi Copyright Â©  by FmVi. All Rights Reserved. Use, modification, and/or distribution of this script is not allowed without direct permission from baivong (gialangsangai2000@yahoo.com). This entire copyright notice must remain in the original, copied, or modified script';var CopyrightNoticeVi='Skin FMvi Báº£n quyá»n Â© thuá»™c FmVi. Giá»¯ toĂ n quyá»n. Viá»‡c sá»­ dá»¥ng, sá»­a Ä‘á»•i , vĂ  / hoáº·c phĂ¢n phá»‘i mĂ£ nĂ y mĂ  khĂ´ng Ä‘Æ°á»£c phĂ©p trá»±c tiáº¿p tá»« baivong (gialangsangai2000@yahoo.com) lĂ  khĂ´ng Ä‘Æ°á»£c phĂ©p. ToĂ n bá»™ thĂ´ng bĂ¡o báº£n quyá»n nĂ y pháº£i Ä‘Æ°á»£c giá»¯ nguyĂªn khi sao chĂ©p, hoáº·c sá»­a Ä‘á»•i';$("a[href*='?showpost=']").click(function(){openWin($(this).attr("href"),1000,500);return false});if(location.pathname=="/post"&&location.search.indexOf("&mode=quote")!=-1&&my_getcookie("linkquoteFMvi")!=""){var tQuote=$("input[name='t']").val();var ltQuote=$("input[name='lt']").val();if($("#text_editor_textarea").css("display")!="none"){$("#text_editor_textarea").val("[url=http://www.Cntt-k3.biz"+my_getcookie("linkquoteFMvi")+"][img]http://i48.servimg.com/u/f48/16/58/89/73/flag_r10.png[/img][/url]"+$("#text_editor_textarea").val())}else{$("#text_editor_iframe").contents().find("body").html('<a class="postlink" href="http://www.Cntt-k3.biz'+my_getcookie('linkquoteFMvi')+'"><img border="0" alt="quote" src="http://i48.servimg.com/u/f48/16/58/89/73/flag_r10.png" />

Unknown end tag for &lt;/a&gt;

'+$("#text_editor_iframe").contents().find("body").html())}my_setcookie("linkquoteFMvi","",false)}if(location.search.slice(1,9)=='showpost'){$('.fmviToggle, .post, #pun-visit, .main-foot, .main-head, .paged-head, .paged-foot, .pun-crumbs, #ptrafic_close, #ptrafic_open, #pun-about, #pun-head, #fa_ticker_block, #left, #pun-intro, #first-post-br, #pun-info').hide();var post=location.search.slice(10);if(post=="first"){$("#main .post:first").show()}else if(post=="last"){$("#main .post:last").show()}else{$("#p"+post).parents(".post").show()};$("#pun-foot p").prepend('<div align="center"><a href="javascript:window.close();"><strong class="closeWIndowF">ÄĂ³ng cá»­a sá»• nĂ y láº¡i

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/div&gt;

')};$(".post-entry a[href^='http://']").not('a[href*="cntt-k3.biz"], a[href$=".jpg"], a[href$=".png"], a[href$=".gif"], a[href$=".bmp"], a[href$=".jpeg"]').each(function(){var direct="http://www.fmvi.org/h78-redirect?forum=Cntt-k3.biz&link="+$(this).attr("href");$(this).removeAttr("href").attr("href",direct);$(this).click(function(){openWin($(this).attr("href"),1000,250);return false})});var partname=location.pathname.slice(1,5);$("div.page-title h2").prepend('<span class="collapse" style="float:right"><img src="http://i48.servimg.com/u/f48/16/58/89/73/icon_c10.gif" alt="fmClose" /><img style="display:none" src="http://i48.servimg.com/u/f48/16/58/89/73/icon_e10.gif" alt="fmOpen" />

Unknown end tag for &lt;/span&gt;

');$(".collapse").each(function(index){$(this).attr("id","fmvicollapse"+partname+index);if(my_getcookie("fmvicollapse"+partname+index)=="1"){$(this).children("img[alt='fmClose']").hide();$(this).children("img[alt='fmOpen']").show();$(this).parent().parent().parent().next().hide()}});$(".collapse img[alt='fmClose']").click(function(){my_setcookie($(this).parent().attr("id"),1,1,0);$(this).hide().next().show();$(this).parent().parent().parent().parent().next().slideUp()});$(".collapse img[alt='fmOpen']").click(function(){my_setcookie($(this).parent().attr("id"),0,1,0);$(this).hide().prev().show();$(this).parent().parent().parent().parent().next().slideDown()});if(partname!='priv'){$("form.frm-form .main .clearfix, .fmviToggle .main .clearfix").prepend('<span class="collapsePost" style="float:right"><img src="http://i48.servimg.com/u/f48/16/58/89/73/icon_c10.gif" alt="fmClose" /><img style="display:none" src="http://i48.servimg.com/u/f48/16/58/89/73/icon_e10.gif" alt="fmOpen" />

Unknown end tag for &lt;/span&gt;

');$(".collapsePost").each(function(index){$(this).attr("id","fmvicollapsePost"+partname+index);if(my_getcookie("fmvicollapsePost"+partname+index)=="1"){$(this).children("img[alt='fmClose']").hide();$(this).children("img[alt='fmOpen']").show();$(this).parent().next().hide()}});$(".collapsePost img[alt='fmClose']").click(function(){my_setcookie($(this).parent().attr("id"),1,1,0);$(this).hide().next().show();$(this).parent().parent().next().slideToggle("slow")});$(".collapsePost img[alt='fmOpen']").click(function(){my_setcookie($(this).parent().attr("id"),0,1,0);$(this).hide().prev().show();$(this).parent().parent().next().slideToggle("slow")})}function openWin(a,b,c){width=b;height=c;top_val=(screen.height-height)/2-30;0>top_val&&(top_val=0);left_val=(screen.width-width)/2-18;window.open(a,null,"toolbar=0,location=0,status=1,menubar=0,scrollbars=1,resizable=1,width="+width+",height="+height+", top="+top_val+",left="+left_val)};var versionMinor=parseFloat(navigator.appVersion);var versionMajor=parseInt(versionMinor);var IE=document.all&&!window.opera&&versionMajor<7;var IE7=document.all&&!window.opera&&versionMajor>=7;var OP=window.opera;var FF=document.getElementById;var NS=document.layers;function get_item(name,opener){if(IE){return(opener)?window.opener.document.all[name]:document.all[name]}else if(FF){return(opener)?window.opener.document.getElementById(name):document.getElementById(name)}else if(NS){return(opener)?window.opener.document.layers[name]:document.layers[name]}}function change_display(name,value,opener){if(IE){element=(opener==true)?window.opener.document.all[name].style:document.all[name].style}else if(FF){element=(opener==true)?window.opener.document.getElementById(name).style:document.getElementById(name).style}else if(NS){element=(opener==true)?window.opener.document.layers[name]:document.layers[name]}element.display=value}function reverse_display(name,opener){element=get_item(name);if(!element){return false}var display=(element.style.display!='block')?'block':'none';change_display(name,display,opener)}var current_tooltip;function show_tooltip(caller,content,content_title){var current_tooltip=get_item('tooltip');if(!current_tooltip){var current_tooltip=document.createElement('div');current_tooltip.setAttribute('id','tooltip');document.body.appendChild(current_tooltip)}current_tooltip.style.zIndex=100;current_tooltip.style.position='absolute';if(content_title){content='<p class="header">'+content_title+'

Unknown end tag for &lt;/p&gt;

<p>'+content+'

Unknown end tag for &lt;/p&gt;

'}else{content='<p>'+content+'

Unknown end tag for &lt;/p&gt;

'}current_tooltip.innerHTML=content;current_tooltip.style.visibility='visible';caller.onmousemove=move_tooltip;caller.onmouseout=function(){current_tooltip.style.visibility="hidden"};caller.title=''}var offsetxpoint=-60;var offsetypoint=20;var real_body=(document.compatMode&&document.compatMode!="BackCompat")?document.documentElement:document.body;real_body=(document.documentElement)?document.documentElement:document.body;function move_tooltip(e){var curX=(!IE)?e.pageX:event.clientX+real_body.scrollLeft;var curY=(!IE)?e.pageY:event.clientY+real_body.scrollTop;var rightedge=IE&&!window.opera?real_body.clientWidth-event.clientX-offsetxpoint:window.innerWidth-e.clientX-offsetxpoint-20;var bottomedge=IE&&!window.opera?real_body.clientHeight-event.clientY-offsetypoint:window.innerHeight-e.clientY-offsetypoint-20;var leftedge=(offsetxpoint<0)?offsetxpoint*(-1):-1000;current_tooltip=get_item('tooltip');if(rightedge<current_tooltip.offsetWidth)current_tooltip.style.left=IE?real_body.scrollLeft+event.clientX-current_tooltip.offsetWidth+"px":window.pageXOffset+e.clientX-current_tooltip.offsetWidth+"px";else if(curX<leftedge)current_tooltip.style.left="5px";else current_tooltip.style.left=curX+offsetxpoint+"px";if(bottomedge<current_tooltip.offsetHeight)current_tooltip.style.top=IE?real_body.scrollTop+event.clientY-current_tooltip.offsetHeight-offsetypoint+"px":window.pageYOffset+e.clientY-current_tooltip.offsetHeight-offsetypoint+"px";else current_tooltip.style.top=curY+offsetypoint+"px"}```

Bước 5 : Tìm trong Overall\_header đoạn code sau :

```

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

.... đến ...

<!-- BEGIN switch_fb_login -->


```
Thay thế đoạn đó = code sau :

```

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" dir="{S_CONTENT_DIRECTION}" id="min-width" lang="{L_LANG_HTML}" xml:lang="{L_LANG_HTML}" {NAMESPACE_FB_LIKE} {NAMESPACE_FB} {NAMESPACE_BBCODE}>
<head>
<title>{SITENAME_TITLE}{PAGE_TITLE}

Unknown end tag for &lt;/title&gt;


<meta http-equiv="content-type" content="text/html; charset={S_CONTENT_ENCODING}" />
<meta http-equiv="content-script-type" content="text/javascript" />
<meta http-equiv="content-style-type" content="text/css" />
<!-- BEGIN switch_compat_meta -->
<meta http-equiv="X-UA-Compatible" content="IE={switch_compat_meta.VERSION}" />
<!-- END switch_compat_meta -->
<!-- BEGIN switch_canonical_url -->
<link rel="canonical" href="{switch_canonical_url.CANONICAL_URL}" />
<!-- END switch_canonical_url -->
{META_FAVICO}
{META}
{META_FB_LIKE}
<meta name="title" content="{SITENAME_TITLE}{PAGE_TITLE}" />
{T_HEAD_STYLESHEET}
{CSS}
<!--[if lte IE 6]>
<style type="text/css">
.box{width:920px !important}


Unknown end tag for &lt;/style&gt;


<![endif]-->
<noscript>
<style type="text/css">
#left{display:block !important}
.module .main-content{height: 12.3em !important}
.toppost_width{width: 290px;}
.recentWidth{width: 658px;}
.latest_topics{overflow: hidden !important; height: 12.3em !important}
.chatbox, .fmviToggle, #checktip .open{display:none}


Unknown end tag for &lt;/style&gt;




Unknown end tag for &lt;/noscript&gt;


<!-- BEGIN switch_ticker -->
<link type="text/css" rel="stylesheet" href="{JS_DIR}jquery/ticker/ticker.css" />
<!-- END switch_ticker -->
<link rel="search" type="application/opensearchdescription+xml" href="/improvedsearch.xml" title="{SITENAME}" />
<link rel="search" type="application/opensearchdescription+xml" href="{URL_BOARD_DIRECTORY}/search/improvedsearch.xml" title="{SEARCH_FORUMS}" />
<script src="{JQUERY_PATH}" type="text/javascript">

Unknown end tag for &lt;/script&gt;



<script src="{JS_DIR}{L_LANG}.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;


<script type="text/javascript">
function langEV() {
if ($("html").attr("xml:lang") == "en") {
return true;
} else if ($("html").attr("xml:lang") == "vi") {
return false;
}
}


Unknown end tag for &lt;/script&gt;


<!-- BEGIN switch_fb_login -->

```

Bước 6 : Thay thế toàn bộ code trong Search\_results\_topics = code sau

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

{NAV_CAT_DESC} » <strong>{L_SEARCH_TITLE}

Unknown end tag for &lt;/strong&gt;




Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;



<div class="main paged">
<form action="{S_ACTION}" method="post" name="post" onsubmit="return verify_select();" class="frm-form">

<div class="main-head">
<h1 class="page-title">{L_SEARCH_MATCHES}

Unknown end tag for &lt;/h1&gt;




Unknown end tag for &lt;/div&gt;



<div class="main-content">
<table class="table" cellspacing="0">
<thead>
<tr>
<th class="tcl">{L_TOPICS}

Unknown end tag for &lt;/th&gt;


<th class="tc2">{L_FORUM}

Unknown end tag for &lt;/th&gt;


<th class="tc3">{L_REPLIES}

Unknown end tag for &lt;/th&gt;


<th class="tc3">{L_VIEWS}

Unknown end tag for &lt;/th&gt;


<th class="tcr">{L_LASTPOST}

Unknown end tag for &lt;/th&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/thead&gt;



<tbody class="statused">
<!-- BEGIN searchresults -->
<tr>
<td class="tcl tdtopics search">
<span class="status">
<img src="{searchresults.TOPIC_FOLDER_IMG}" alt="{searchresults.L_TOPIC_FOLDER_ALT}" title="{searchresults.L_TOPIC_FOLDER_ALT}" />


Unknown end tag for &lt;/span&gt;



{searchresults.NEWEST_POST_IMG}
{searchresults.PARTICIPATE_POST_IMG}
{searchresults.TOPIC_TYPE}
<h2 class="topic-title">
<a class="topictitle" href="{searchresults.U_VIEW_TOPIC}">{searchresults.TOPIC_TITLE}

Unknown end tag for &lt;/a&gt;


<div class="tooltipFMvi" style="display:none"><div style="padding:10px">
<p class="tiplFMvi">Tiêu đề:
<font color="#FFFF00">{searchresults.TOPIC_TITLE}

Unknown end tag for &lt;/font&gt;




Unknown end tag for &lt;/p&gt;


<p>Tạo chủ đề: {searchresults.TOPIC_AUTHOR}

Unknown end tag for &lt;/p&gt;


<p>Chuyên mục:
<font color="#0099FF">{searchresults.FORUM_NAME}

Unknown end tag for &lt;/font&gt;




Unknown end tag for &lt;/p&gt;


<p>Trạng thái:
<font color="#CC0000">{searchresults.L_TOPIC_FOLDER_ALT}

Unknown end tag for &lt;/font&gt;




Unknown end tag for &lt;/p&gt;


<p>Lần xem:
<font color="#FF66CC">{searchresults.VIEWS}

Unknown end tag for &lt;/font&gt;




Unknown end tag for &lt;/p&gt;


<p class="tiplFMvi">Lượt trả lời:
<font color="#009933">{searchresults.REPLIES}

Unknown end tag for &lt;/font&gt;




Unknown end tag for &lt;/p&gt;


<p>Người gửi cuối: {searchresults.LAST_POST_AUTHOR}

Unknown end tag for &lt;/p&gt;


<p>Thời gian gửi:
<font color="#FF6600">{searchresults.LAST_POST_TIME}

Unknown end tag for &lt;/font&gt;




Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/h2&gt;


{searchresults.GOTO_PAGE}
{searchresults.L_BY} {searchresults.TOPIC_AUTHOR}


Unknown end tag for &lt;/td&gt;


<td class="tc2"><a href="{searchresults.U_VIEW_FORUM}">{searchresults.FORUM_NAME}

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;


<td class="tc3">{searchresults.REPLIES}

Unknown end tag for &lt;/td&gt;


<td class="tc3">{searchresults.VIEWS}

Unknown end tag for &lt;/td&gt;


<td class="tcr">{searchresults.LAST_POST_TIME} {searchresults.L_BY} {searchresults.LAST_POST_AUTHOR}{searchresults.LAST_POST_IMG}

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<!-- END searchresults -->


Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;



<div class="main-foot">


Unknown end tag for &lt;/div&gt;



<div class="paged-foot clearfix">
<p class="paging">{PAGINATION}

Unknown end tag for &lt;/p&gt;


<p class="posting">{L_BACK_TO_TOP}

Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/form&gt;




Unknown end tag for &lt;/div&gt;


```

Bước 7 : Thêm vào Css đoạn code sau

```



body{font-weight: 300;}
a,a:link,a:hover{text-decoration:none!important}
.user-basic-info img{max-width: 150px}
a[href^="/report?mode=report"],#left,#tooltip .header,.imgstatus, #textarea_content dt, #dulieutip, #dulieupostter, #sapxepdulieu, .tipchuthich {display:none}
#show_color{display:block}
.main-foot p,.main-head p{width:50%!important}
#pun-logo{padding-right:10px}
p#pun-desc{color:#FFCE30;margin-left:20px;padding:.5em 0 0 5px}
#pun-foot .copyright{text-shadow:1px 1px 1px #000}
blockquote{background-color:#EDF7FF!important;border:1px dashed #1A5381!important;padding:5px!important}
blockquote cite{background-color:#E4E6E4;box-shadow:1px 1px 1px;display:inline!important;margin:2px 10px 2px 2px !important;padding:5px 5px 0}



/* Latest topic */
.leftrecent{height:16px;left:0;overflow:hidden;position:absolute;width:500px}
.rightrecent{position: absolute; right: 0pt;}
.imgstatus{position: absolute; left: -30px; padding: 0pt 4px; background-color: #FFF;}
#content-container div#left{float:none;width:100%;padding:10px 0}
*+ html #content-container div#main{margin-left:0}
* html #content-container #main-content{overflow:visible;margin-right:0}
* html #content-container div#main{margin-right:-99%;width:100%;float:none}
.latest_topics{list-style:decimal-leading-zero outside none;text-align:left;margin:0!important;padding:0 5px 0 30px}
.latest_topics li{position:relative}
.toppost_width{float:left; width: 250px}
.recentWidth{float: left; width: 698px;}
.recentWidth .main-head{position: relative; height: 1.3em;overflow: hidden;}
.recentWidth h3{position: absolute; left: 10px}
.pun{min-width:948px!important;width:948px;border:3px double #999;background-color:#FFF}
#content{width:100%!important}
#checktip .close,#checktip .open{height:30px;width:30px;cursor: pointer;}
#checktip .close{background:url(http://i48.servimg.com/u/f48/16/58/89/73/fancy_13.png) no-repeat scroll 0 0 transparent;display:none}
#checktip .open{background:url(http://i48.servimg.com/u/f48/16/58/89/73/fancy_12.png) no-repeat scroll 0 0 transparent;display:block}
.loaddinng{background-image:url(http://i48.servimg.com/u/f48/16/58/89/73/loadin12.gif);background-position:center center;background-repeat:no-repeat;height:150px;width:180px}
#checktip{position:absolute;right:10px;top:3px;z-index:300}
#numRecent{display:none;position:absolute;right:12px;top:7px}




/* tooltip */
#tooltip .tiplFMvi{border-bottom:1px dashed;padding-bottom:5px;margin-bottom:5px}
#tooltip{max-width:550px;position:absolute;background-image:url(http://i48.servimg.com/u/f48/13/58/60/43/opacit10.png);border:0;padding:0;border-radius:3px;color:#FFF;z-index:99;}

```

Bước 8 : Cài đặt widgets như hình


![http://i43.servimg.com/u/f43/15/93/33/76/2_bmp10.jpg](http://i43.servimg.com/u/f43/15/93/33/76/2_bmp10.jpg)

Bước 9 : ngay trong khung Forum widgets management các bạn ấn vào bánh xe màu vàng như trong hình
![http://i43.servimg.com/u/f43/15/93/33/76/310.jpg](http://i43.servimg.com/u/f43/15/93/33/76/310.jpg)

Các bạn để :
Number of recent topics : 20
Activate the topics scrolling : Không

ok và giờ đã hoàn thành last vip

nếu ai không làm được thì reply tại topic này để được hướng dẫn thêm

Chú ý : hãy đọc kĩ và làm sẽ thành công