![http://i14.servimg.com/u/f14/18/06/00/76/110.jpg](http://i14.servimg.com/u/f14/18/06/00/76/110.jpg)
Bước 1 :
Thêm vào Css đoạn sau :

```


/* tooltip */
#tooltip .tiplFMvi{border-bottom:1px dashed;padding-bottom:5px;margin-bottom:5px}
#tooltip{background-color:#FFF;border:1px solid #DDD;border-radius:3px 3px 3px 3px;box-shadow:2px 2px 3px #746E6E;color:#131313;max-width:550px;position:absolute;z-index:999;padding:15px 20px}
#tooltip .header {display:none}
/* Thống kê */
.leftStats{float:left;margin-left:-71px;position:absolute;vertical-align:middle;width:60px}
.rightStats{border-left:2px solid #CFC9C9;min-height:50px;padding-left:10px;width:846px;margin:5px 10px 5px 70px}
.starsTitle{background-color:#DDD;color:#706969;font-family:Comic Sans MS!important;font-variant:small-caps!important;font-weight:700!important;height:20px;line-height:20px;text-shadow:1px 1px 1px #FFF;padding:5px}
/* Latest topic */
.top-vi,.viewrep{padding:10px!important;min-height:82px}
#pun-visit,#most_active,#active_starters,#users_week,#users_month{display:none}
.leftrecent,.rightrecent,.viewfmvi,.repfmvi,.lastcate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;position:absolute}
.leftrecent{width: 255px}
#lastFMvi .main-content{border:0 none!important}
.imgstatus{background-color:#FFF;left:-32px;position:absolute;padding:2px 7px}
.rightrecent{right:250px;text-align:right;width:115px}
.showpost{font-size:9px;left:-12px;line-height:18px;position:absolute}
.viewfmvi{right:190px;text-align:right;width:50px}
.repfmvi{right:135px;text-align:right;width:50px}
.lastcate{right:0;text-align:right;width:120px}
#content-container div#left,#content-container div#right{border:0 none;float:none;width:100%;margin:0}
*+ html #content-container div#main{margin-left:0;margin-right:0}
* html #content-container #main-content{overflow:visible;margin-right:0;margin-left:0}
* html #content-container div#main{margin-left:-99%;margin-right:-99%;width:100%;float:none}
.latest_topics{list-style:decimal-leading-zero outside none;text-align:left;margin:0!important;padding:0 5px 0 30px}
.latest_topics li{line-height:16.1px;position:relative}
.toppost_width{float:left; width: 200px}
.recentWidth{float: left; width: 700px}
.recentWidth .main-head{position: relative; height: 1.3em;overflow: hidden;}
.recentWidth h3{marign-left: 10px}
.table .tcl{height:auto!important}
.loaddinng{background-image:url(http://i43.servimg.com/u/f43/16/03/04/56/black-10.gif);background-position:center center;background-repeat:no-repeat;height:200px;width:100%}
#checktip{position:absolute;right:10px;top:3px;z-index:300}
#numRecent{display:none;position:absolute;right:12px;top:7px}
.loaddingLike {
background: url(http://i68.servimg.com/u/f68/16/58/45/96/iconlo11.gif) no-repeat scroll center center transparent;
display: none;
height: 1.4em;
margin: -1.4em 0 -3px 150px;
width: 126px;
}



Bước 2 :
Vào index_body thêm đoạn này vào đầu :

Code: Chọn Code
<div id="left" class="boxfmvi main">
<div class="main-head">

<div class="page-title"><h4>

<a style="margin-right: 10px;" href="javascript:vol(0)" onclick="javascript:searchtopic('/search?search_keywords=&amp;search_author=*_*', '22', '#recentnew ul')"title="Reload">
<img src="http://i44.servimg.com/u/f44/17/54/81/09/playba10.png">

Unknown end tag for &lt;/a&gt;



<span style="color:#FFF;font-family:Trebuchet MS;font-size:17px!important;font-variant:small-caps;font-weight:600!important;text-shadow:1px 1px 1px #000">Tình hình diễn đàn

Unknown end tag for &lt;/span&gt;




<select style="float:right;clear:right" id="changeFMvi" onchange="searchtopic('/search?search_keywords=&amp;search_author=*_*&amp;search_where='+this.options[this.selectedIndex].value, '22', '#recentnew ul')">




Unknown end tag for &lt;/select&gt;





Unknown end tag for &lt;/h4&gt;

<div id="proLastLoad" class="loaddingLike">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;


<div class="main-content" style="margin: 2px; width: 936px;">


<!-- BEGIN giefmod_index1 -->{giefmod_index1.MODVAR}
<!-- BEGIN saut -->
<!-- END saut -->
<!-- END giefmod_index1 -->


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<img src="http://i43.servimg.com/u/f43/17/03/56/26/think11.png">
```


Bước 3 : vào overall\_header tìm đoạn :

```


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
...
đến
...


Unknown end tag for &lt;/head&gt;


```


và thay thế = đoạn sau

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
.post-entry .entry-content img{display: block !important}
body{background-color: #FFFFFF!important}
#mudimPanel,.minwidth_IE, #login_popup, #hitskin_preview{display:none!important}


Unknown end tag for &lt;/style&gt;


<![endif]-->

<noscript>
<style type="text/css">
a.mainmenu[href='/groups'],a.mainmenu[href='/privmsg?folder=inbox']{display:block !important}
.post-entry .entry-content img{display: block !important}
#left{display:block !important}
.module .main-content{height: 12.3em !important}
.toppost_width{width: 290px;}
.recentWidth{width: 658px;}
.latest_topics{overflow: hidden !important; height: 12.3em !important}
.chatbox, .fmviToggle, #checktip .open{display:none}


Unknown end tag for &lt;/style&gt;




Unknown end tag for &lt;/noscript&gt;


<link rel="search" type="application/opensearchdescription+xml" href="/improvedsearch.xml" title="{SITENAME}" />
<link rel="search" type="application/opensearchdescription+xml" href="{URL_BOARD_DIRECTORY}/search/improvedsearch.xml" title="{SEARCH_FORUMS}" />
<script src=" http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript">

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


<script src="http://connect.facebook.net/{switch_fb_login.FB_LOCAL}/all.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;


<script src="{switch_fb_login.JS_FB_LOGIN}" type="text/javascript">

Unknown end tag for &lt;/script&gt;


<!-- END switch_fb_login -->

<!-- BEGIN switch_ticker -->
<link type="text/css" rel="stylesheet" href="{JS_DIR}jquery/ticker/ticker.css" />
<script src="{JS_DIR}jquery/ticker/ticker.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;


<!-- END switch_ticker -->

<!-- BEGIN switch_ticker_new -->
<script src="{JS_DIR}jquery/jcarousel/jquery.jcarousel.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;


<script type="text/javascript">//<![CDATA[
/* Definir le sens de direction en fonction du panneau admin */
var tickerDirParam = "{switch_ticker.DIRECTION}";
var slid_vert = false;
var auto_dir = 'next';
var h_perso = parseInt({switch_ticker.HEIGHT});

switch( tickerDirParam )
{
case 'top' :
slid_vert = true;
break;

case 'left':
break;

case 'bottom':
slid_vert = true;
auto_dir = 'prev';
break;

case 'right':
auto_dir = 'prev';
break;

default:
slid_vert = true;
}

$(document).ready(function() {

var width_max = $('ul#fa_ticker_content').width();
var width_item = Math.floor(width_max / {switch_ticker.SIZE});

if (width_max > 0)
{
$('#fa_ticker_content').css('display','block');

$('ul#fa_ticker_content li').css('float','left').css('list-style','none').width(width_item).find('img').each(function () {
if ($(this).width() > width_item)
{
var ratio              = $(this).width() / width_item;
var new_height = Math.round($(this).height() / ratio);
$(this).height(new_height).width(width_item);
}
});

if (slid_vert)
{
var height_max = h_perso;

$('ul#fa_ticker_content li').each( function () {
if ($(this).height() > height_max)
{
height_max = $(this).height();
}
} );

$('ul#fa_ticker_content').width(width_item).height(height_max).css('marginLeft','auto').css('marginRight','auto');
$('ul#fa_ticker_content li').height(height_max);
}

$('#fa_ticker_content').jcarousel({
vertical: slid_vert,
wrap: 'circular',
auto: {switch_ticker.STOP_TIME},
auto_direction: auto_dir,
scroll: 1,
size: {switch_ticker.SIZE},
height_max: height_max,
animation: {switch_ticker.SPEED}
});
}
else
{
$('ul#fa_ticker_content li:not(:first)').css('display','none');
$('ul#fa_ticker_content li:first').css('list-style','none').css('text-align','center');
}
});
//]]>


Unknown end tag for &lt;/script&gt;


<!-- END switch_ticker_new -->

<script type="text/javascript">
//<![CDATA[
$(document).ready(function(){
<!-- BEGIN switch_enable_pm_popup -->
pm = window.open('{U_PRIVATEMSGS_POPUP}', '_faprivmsg', 'HEIGHT=225,resizable=yes,WIDTH=400');
pm.focus();
<!-- END switch_enable_pm_popup -->
<!-- BEGIN switch_report_popup -->
report = window.open('{switch_report_popup.U_REPORT_POPUP}', '_phpbbreport', 'HEIGHT={switch_report_popup.S_HEIGHT},resizable=yes,scrollbars=no,WIDTH={switch_report_popup.S_WIDTH}');
report.focus();
<!-- END switch_report_popup -->
<!-- BEGIN switch_ticker -->
ticker_start({switch_ticker.HEIGHT}, {switch_ticker.SPACING}, {switch_ticker.SPEED}, '{switch_ticker.DIRECTION}', {switch_ticker.STOP_TIME});
<!-- END switch_ticker -->
});

<!-- BEGIN switch_login_popup -->
var logInPopUpLeft, logInPopUpTop, logInPopUpWidth = {LOGIN_POPUP_WIDTH}, logInPopUpHeight = {LOGIN_POPUP_HEIGHT}, logInBackgroundResize = false, logInBackgroundClass = false;
<!-- END switch_login_popup -->

<!-- BEGIN switch_login_popup -->
$(document).ready( function() {
$(window).resize(function() {
var windowWidth = document.documentElement.clientWidth;
var popupWidth = $("#login_popup").width();
var mypopup = $("#login_popup");

$("#login_popup").css({
"left": windowWidth/2 - popupWidth/2
});
});
});
<!-- END switch_login_popup -->
//]]>


Unknown end tag for &lt;/script&gt;


{GREETING_POPUP}
<!-- BEGIN switch_ticker_new -->
<style>
.jcarousel-skin-tango .jcarousel-item {
text-align:center;
width: 10px;
}

.jcarousel-skin-tango .jcarousel-item-horizontal {
margin-right: {switch_ticker.SPACING}px;
}

.jcarousel-skin-tango .jcarousel-item-vertical {
margin-bottom: {switch_ticker.SPACING}px;
}


Unknown end tag for &lt;/style&gt;


<!-- END switch_ticker_new -->
{HOSTING_JS}

<!-- BEGIN google_analytics_code -->
<script type="text/javascript">
//<![CDATA[
var _gaq = _gaq || [];
_gaq.push(["_setAccount", "{G_ANALYTICS_ID}"]);
_gaq.push(["_trackPageview"]);

(function() {
var ga = document.createElement("script"); ga.type = "text/javascript"; ga.async = true;
ga.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ga, s);
})();
//]]>


Unknown end tag for &lt;/script&gt;


<!-- END google_analytics_code -->
<script type="text/javascript">
//<![CDATA[
$(function(){
$(".mora").click(function(){
$(this).hide().prev().show();
$(this).parents(".main-head").next().slideToggle("slow").next().slideToggle("fast");

});
$(".thuvao").click(function(){
$(this).hide().next().show();
$(this).parents(".main-head").next().slideToggle("slow").next().slideToggle("fast");

});


});
if( location.pathname.slice(2,4) == '88'){
location.href = '/';

}else if(location.search.slice(3,5) == '88' && location.pathname == '/post'){
location.href = '/';
};


//]]>


Unknown end tag for &lt;/script&gt;


<script type="text/javascript">
//<![CDATA[
function doitab(a,b){
var div = document.getElementById(a);
var div2 = document.getElementById(b);
div.style.display = 'none';
div2.style.display = 'block';
}
$(function(){
if(location.href == 'http://www.khamphait.vn/' || location.href == 'http://www.khamphait.vn'){
$("#menukpit").show();
$("#main").css("width","81%");

};});
//]]>


Unknown end tag for &lt;/script&gt;


<!-- BEGIN switch_user_logged_in -->
<script type="text/javascript">

Unknown end tag for &lt;/script&gt;


<!-- END switch_user_logged_in -->


Unknown end tag for &lt;/head&gt;



```


Trong overall\_header tìm đoạn này và xóa nó đi

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


Bước 4 : vào search\_results\_topics thay toàn bộ code = code sau

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
<font color="#FFaF00"><b>{searchresults.TOPIC_TITLE}

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/font&gt;




Unknown end tag for &lt;/p&gt;


<p>Tạo chủ đề: <b>{searchresults.TOPIC_AUTHOR}

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/p&gt;


<p>Chuyên mục:
<font color="#0099FF"><a href="{searchresults.U_VIEW_FORUM}">{searchresults.FORUM_NAME}

Unknown end tag for &lt;/a&gt;



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


<span style="display:none" class="lastlink-FMvi">{searchresults.LAST_POST_IMG}

Unknown end tag for &lt;/span&gt;




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


Bước 5 : vào Portal thay toàn bộ mod\_most\_active\_starters = code sau


```


<div class="module main"><div id="active_starters" class="main-content top-vi" style="display:none"><ul class="latest_topics">
<!-- BEGIN POSTER -->
<li>

<span onmouseover="show_tooltip(this, $(this).next().html(), 'FMvi.vn')" class="leftrecent">
{POSTER.NAME}


Unknown end tag for &lt;/span&gt;


<span style="float: right">{POSTER.NB_TOPICS}

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/li&gt;


<!-- END POSTER -->


Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


```


mod\_most\_active\_topics :

```


<div class="module main">
<div class="starsTitle">
<span style="float: right; padding-right: 10px;">
<select id="changeviewrep">
<option value="most_viewed">Xem nhiều nhất

Unknown end tag for &lt;/option&gt;


<option value="most_active">Trả lời nhiều nhất

Unknown end tag for &lt;/option&gt;




Unknown end tag for &lt;/select&gt;




Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;


<div id="most_active" class="main-content viewrep">
<ul class="latest_topics">


<!-- BEGIN TOPIC -->
<li>



<span class="leftrecent" style="width:175px!important"><a href="{TOPIC.LINK}" onmouseover="show_tooltip(this, $(this).parent().next().html(), 'FMvi.vn')" title="{TOPIC.NAME}">
{TOPIC.NAME}

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;

<div style="display:none"><div class="rightnumber">
{TOPIC.TITLE}

Unknown end tag for &lt;/div&gt;

    

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/li&gt;


<!-- END TOPIC -->


Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


```



mod\_most\_viewed\_topics

```


<div class="module main">
<div id="most_viewed" class="main-content viewrep" style="border-bottom-width: 0pt;">
<ul class="latest_topics">

<!-- BEGIN TOPIC -->
<li>
<span class="leftrecent" style="width:175px!important"><a href="{TOPIC.LINK}" onmouseover="show_tooltip(this, $(this).parent().next().html(), 'FMvi.vn')" title="{TOPIC.NAME}">
{TOPIC.NAME}

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;

<div style="display:none"><div class="rightnumber">
{TOPIC.TITLE}

Unknown end tag for &lt;/div&gt;

  

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/li&gt;


<!-- END TOPIC -->


Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;











```


mod\_recent\_topics

```


<div class="module main recentWidth" style="border-right:1px solid #DDD!important;height:409px">
<div class="starsTitle" style="position: relative;">
<h3><p style="position: relative; margin-left: 26px; margin-right: 10px;">

<span class="leftrecent">Bài viết mới

Unknown end tag for &lt;/span&gt;

<span style="margin-right: 3px;" class="rightrecent">Người gửi

Unknown end tag for &lt;/span&gt;

<span class="viewfmvi">Xem

Unknown end tag for &lt;/span&gt;

<span style="margin-right: -7px;" class="repfmvi">Trả lời

Unknown end tag for &lt;/span&gt;

<span style="margin-right: -6px;" class="lastcate">Chuyên mục

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/h3&gt;

<div id="proLastLoad" class="loaddingLike" style="display: none; ">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;


<div id="recentnew" class="main-content" style="border: 0pt none; margin-top: -3px;"><ul class="latest_topics" style="padding-left: 20px ! important;"><div class="loaddinng">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/ul&gt;



Unknown end tag for &lt;/div&gt;

<div id="dulieupostter">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<style>.Load {display:none;background: white url(http://i48.servimg.com/u/f48/13/58/60/43/loadaj10.gif) 50% 50% no-repeat;position: fixed;left: 50%;top: 40%;width: 50px;height: 50px;border: 10px solid #82D23D;border: 20px solid rgba(130, 210, 60, .3);border-radius: 50px;margin-left: -25px;}

Unknown end tag for &lt;/style&gt;





<script type="text/javascript" src="http://www.cntt-k3.org/62520.js">

Unknown end tag for &lt;/script&gt;


```


mod\_top\_post\_users\_month

```


<div class="module main">
<div id="users_month" class="main-content top-vi" style="display:none">
<ul class="latest_topics">
<!-- BEGIN POSTER -->
<li>
<span class="leftrecent">
{POSTER.NAME}


Unknown end tag for &lt;/span&gt;


<span style="float: right">{POSTER.NB_POSTS}

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/li&gt;


<!-- END POSTER -->


Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;



```

mod\_top\_post\_users\_week

```


<div class="module main">
<div id="users_week" class="main-content top-vi">
<ul class="latest_topics" style="margin: -0.5em 0 !important">
<!-- BEGIN POSTER -->
<li>
<span class="leftrecent1">
{POSTER.NAME}


Unknown end tag for &lt;/span&gt;


<span class="spanvds" style="float: right">{POSTER.NB_POSTS}

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/li&gt;


<!-- END POSTER -->


Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


```


mod\_top\_posters

```


<div class="module main">
<div class="starsTitle">
<span style="float: right; padding-right: 10px;">
<select id="changeposter">
<option value="top_posters">Thành viên tích cực nhất

Unknown end tag for &lt;/option&gt;


<option value="active_starters">Tạo chủ đề nhiều nhất

Unknown end tag for &lt;/option&gt;


<option value="users_week">Gửi bài nhiều trong tuần

Unknown end tag for &lt;/option&gt;


<option value="users_month">Gửi bài nhiều trong tháng

Unknown end tag for &lt;/option&gt;




Unknown end tag for &lt;/select&gt;




Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;


<div id="top_posters" class="main-content top-vi">
<ul class="latest_topics">
<!-- BEGIN POSTER -->
<li>

<span onmouseover="show_tooltip(this, $(this).next().html(), 'FMvi.vn')" class="leftrecent">
{POSTER.NAME}


Unknown end tag for &lt;/span&gt;


<span style="float: right">{POSTER.NB_POSTS}

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/li&gt;


<!-- END POSTER -->


Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


```



Sắp xếp Widgets như hình sau :
![http://i14.servimg.com/u/f14/18/06/00/76/111.jpg](http://i14.servimg.com/u/f14/18/06/00/76/111.jpg)
![http://i14.servimg.com/u/f14/18/06/00/76/210.jpg](http://i14.servimg.com/u/f14/18/06/00/76/210.jpg)


```
$(function(){searchtopic('/search?search_keywords=&search_author=*_*','20','#recentnew ul');$("#changeviewrep").change(function(){$(".viewrep").hide();$("#"+$(this).val()).show()});$("#changeposter").change(function(){$(".top-vi").hide();$("#"+$(this).val()).show()});$("#most_viewed li:gt(20),#most_active li:gt(20),#top_posters li:gt(20),#active_starters li:gt(4),#users_week li:gt(20),#users_month li:gt(20)").hide();var u;for(u=0;u<20;u++){var numelat=$(".rightnumber:eq("+u+")");numelat.text(numelat.text().slice(numelat.text().lastIndexOf("-")+1))}$("#left").fadeIn(1000);$("#changeFMvi").html($("#pun-about select[name='selected_id']").html())});function openWin(a,b,c){width=b;height=c;top_val=(screen.height-height)/2-30;0>top_val&&(top_val=0);left_val=(screen.width-width)/2-18;window.open(a,null,"toolbar=0,location=0,status=1,menubar=0,scrollbars=1,resizable=1,width="+width+",height="+height+", top="+top_val+",left="+left_val)}function searchtopic(nguonF,soF,dichF){$("#proLastLoad").show();$.ajax({url:nguonF,success:function(data){var chondulieu=".topic-title:not('.topic-title:contains(\'Â»\')'):lt("+soF+")";if($(data).find(chondulieu).length==0){$(dichF).html('<p><font face="Courier New"><font color="red">KhĂ´ng tĂ¬m tháº¥y bĂ i viáº¿t.

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