ừ khi cái last 3 dc ra mắt 1 thời gian ngắn thì last 4 dc tung ra với sản phẩm mã hóa đầu tiên của fmvi :d . last này cũng dc coi là sóng gió 1 thời gian trong fm :d bây giờ mới mò lại trong thùng giác . (may mà chưa đổ ;)) )

bắt đầu làm thôi đầu tiên là demo :

![http://i40.servimg.com/u/f40/17/90/73/83/photos10.png](http://i40.servimg.com/u/f40/17/90/73/83/photos10.png)
sắp sếp wiget
![http://i40.servimg.com/u/f40/17/90/43/46/vew10.png](http://i40.servimg.com/u/f40/17/90/43/46/vew10.png)
an
css

```

/* Latest topic */
.boxFMvi{margin:0!important}
.top-vi,.viewrep{min-height:157px}
#most_active,#active_starters,#users_week,#users_month{display:none}
.lastcate{position:absolute;right:0}
.showpost{line-height:18px;font-size:9px;position:absolute;right:166px}
.rightnumber{position:absolute;right:0pt;text-align:right;}
.leftrecent{width:200px;white-space:nowrap;position:absolute;overflow:hidden;text-overflow:ellipsis}
.rightrecent{position: absolute; right: 180px}
.imgstatus{position: absolute; left: -25px; padding: 2px 4px; background-color: #FFF;}
#content-container div#left{border:0 none;float:none;width:100%;margin:10px 0}
*+ html #content-container div#main{margin-left:0}
* html #content-container #main-content{overflow:visible;margin-right:0}
* html #content-container div#main{margin-right:-99%;width:100%;float:none}
.latest_topics{list-style:decimal-leading-zero outside none;text-align:left;margin:0!important;padding:0 5px 0 30px}
.latest_topics li{position:relative}
.toppost_width{float:left; width: 200px}
.recentWidth{float: left; width: 550px}
.recentWidth .main-head{position: relative; height: 1.3em;overflow: hidden;}
.recentWidth h3{marign-left: 10px}
.pun{width:948px;border:3px double #999 ;background-color:#FFF}
.loaddinng{background-image:url(http://i48.servimg.com/u/f48/16/58/89/73/loadin12.gif);background-position:center center;background-repeat:no-repeat;height:150px;width:180px}
#checktip{position:absolute;right:10px;top:3px;z-index:300}
#numRecent{display:none;position:absolute;right:12px;top:7px}


```

search\_results\_topics

```

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
<font color="blue">{searchresults.TOPIC_TITLE}

Unknown end tag for &lt;/font&gt;




Unknown end tag for &lt;/p&gt;


<p>Tạo chủ đề: {searchresults.TOPIC_AUTHOR}

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
cho vào index body

```



<script src="http://www.hotrofm.com/40324.js" type="text/javascript">
<div id="pun-info" class="boxFMvi main">
<div class="main-head">
<div class="page-title">
<h2>Tình hình diễn đàn

Unknown end tag for &lt;/h2&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div class="main-content">
<!-- BEGIN giefmod_index1 -->{giefmod_index1.MODVAR}
<!-- BEGIN saut -->
<!-- END saut -->
<!-- END giefmod_index1 -->



Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;



```


mod\_most\_active\_starters

```

<div class="module main">
<div id="active_starters" class="main-content top-vi">
<ul class="latest_topics" style="margin: -0.5em 0 !important">
<!-- BEGIN POSTER -->
<li>
<span class="leftrecent">
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

mod\_most\_active\_topics

```

<div class="module main">
<div class="starsTitle">
<span style="float: right; padding-right: 10px;">
<select id="changeviewrep">
<option value="most_viewed">      Xem nhiều nhất    

Unknown end tag for &lt;/option&gt;


<option value="most_active">      Trả lời nhiều nhất    

Unknown end tag for &lt;/option&gt;




Unknown end tag for &lt;/select&gt;




Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;


<div id="most_active" class="main-content viewrep">
<ul class="latest_topics" style="margin: -0.6em 0 !important">
<!-- BEGIN TOPIC -->
<li>
<span class="leftrecent" style="width:145px">
<a href="{TOPIC.LINK}" title="{TOPIC.NAME}">{TOPIC.NAME}

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/span&gt;


<span class="rightnumber">{TOPIC.TITLE}

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/li&gt;


<!-- END TOPIC -->


Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


```


mod\_most\_viewed\_topics

```

<div class="module main">
<div id="most_viewed" class="main-content viewrep">
<ul class="latest_topics" style="margin: -0.6em 0!important">
<!-- BEGIN TOPIC -->
<li>
<span class="leftrecent" style="width:145px">
<a href="{TOPIC.LINK}" title="{TOPIC.NAME}">{TOPIC.NAME}

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/span&gt;


<span class="rightnumber">{TOPIC.TITLE}

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/li&gt;


<!-- END TOPIC -->


Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;



```

mod\_recent\_topics

```

<div class="module main recentWidth">
<div class="starsTitle" style="position: relative;">
<h3>Thống kê bài viết mới
<fieldset style="position: absolute; right: 10px; top: 5px;">
<select id="changeFMvi" onchange="searchtopic('/search?search_keywords=&search_author=*&search_where='+this.options[this.selectedIndex].value, '23', '#recentnew ul')">

Unknown end tag for &lt;/select&gt;




Unknown end tag for &lt;/fieldset&gt;




Unknown end tag for &lt;/h3&gt;


<div id="proLastLoad" class="loaddingLike">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div id="recentnew" class="main-content" style="border: 0 none !important; height: 373px">
<ul class="latest_topics" style="padding: padding: 5px 10px 10px 20px ! important;">
<div class="loaddinng">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;


<div id="dulieupostter">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




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
<div id="users_week" class="main-content top-vi" style="display:none">
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

cuối cùng vào ovell head

tìm

```

[head]....[/head]

```

thay bằng

```

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
var ratio      = $(this).width() / width_item;
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
<script type="text/javascript" src="http://dangvietpy.googlecode.com/files/select.js">

Unknown end tag for &lt;/script&gt;





Unknown end tag for &lt;/head&gt;



```
40324.js
```
var wXl;for(wXl=0;wXl<$("#profile-advanced-details ol li").length;wXl++){if($("#profile-advanced-details li:eq("+wXl+") .message-header").text().indexOf("[Tin nhắn tự động]")!=-1){$("#profile-advanced-details li:eq("+wXl+") .avatar").html('<img src="http://i48.servimg.com/u/f48/16/58/89/73/thongb10.png" />');var timewall=$("#profile-advanced-details li:eq("+wXl+") .message-date").text();$("#profile-advanced-details li:eq("+wXl+") .message-header").html('<div class="message-date">'+timewall+'

Unknown end tag for &lt;/div&gt;

[<span class="autobot">Tin nhắn tự động

Unknown end tag for &lt;/span&gt;

]');$("#profile-advanced-details li:eq("+wXl+") .signature_div").remove()}}$("a[href*='?showpost=']").click(function(){openWin($(this).attr("href"),1000,500);return false});if(location.pathname=="/post"&&location.search.indexOf("&mode=quote")!=-1&&my_getcookie("linkquoteFMvi")!=""){var tQuote=$("input[name='t']").val();var ltQuote=$("input[name='lt']").val();if($("#text_editor_textarea").css("display")!="none"){$("#text_editor_textarea").val("[url=http://www.lytrada.com"+my_getcookie("linkquoteFMvi")+"][img]http://i48.servimg.com/u/f48/16/58/89/73/flag_r10.png[/img][/url]"+$("#text_editor_textarea").val())}else{$("#text_editor_iframe").contents().find("body").html('<a class="postlink" href="http://www.lytrada.com'+my_getcookie('linkquoteFMvi')+'"><img border="0" alt="quote" src="http://i48.servimg.com/u/f48/16/58/89/73/flag_r10.png" />

Unknown end tag for &lt;/a&gt;

'+$("#text_editor_iframe").contents().find("body").html())}my_setcookie("linkquoteFMvi","",false)}if(location.search.slice(1,9)=='showpost'){$('.fmviToggle, #pun-visit, .main-foot, .main-head, .paged-head, .paged-foot, .pun-crumbs, #ptrafic_close, #ptrafic_open, #pun-about, #fa_ticker_block, #left, #pun-intro, #first-post-br, #pun-info, .autohidepost').hide();var post=location.search.slice(10);if(post=="first"){$("#main .post:not(':first')").hide()}else if(post=="last"){$("#main .post:not(':last')").hide()}else{$("#main .post").not($("#p"+post).parents(".post")).hide()};$("#pun-foot p").prepend('<div align="center"><a href="javascript:window.close();"><strong class="closeWIndowF">Đóng cửa sổ này lại

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/div&gt;

')};var partname=location.pathname.slice(1,5);$("div.page-title h2").prepend('<span class="collapse" style="float:right"><a href="javascript:void(0);" alt="fmClose">-

Unknown end tag for &lt;/a&gt;

<a href="javascript:void(0);" style="display:none" alt="fmOpen">+

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;

');$(".collapse").each(function(index){$(this).attr("id","fmvicollapse"+partname+index);if(my_getcookie("fmvicollapse"+partname+index)=="1"){$(this).children("a[alt='fmClose']").hide();$(this).children("a[alt='fmOpen']").show();$(this).parent().parent().parent().next().hide()}});$(".collapse a[alt='fmClose']").click(function(){my_setcookie($(this).parent().attr("id"),1,1,0);$(this).hide().next().show();$(this).parent().parent().parent().parent().next().slideUp()});$(".collapse a[alt='fmOpen']").click(function(){my_setcookie($(this).parent().attr("id"),0,1,0);$(this).hide().prev().show();$(this).parent().parent().parent().parent().next().slideDown()});if(partname!='priv'){$("form.frm-form .main .clearfix, .fmviToggle .main .clearfix").prepend('<span class="collapsePost" style="float:right"><a href="javascript:void(0);" alt="fmClose">-

Unknown end tag for &lt;/a&gt;

<a href="javascript:void(0);" style="display:none" alt="fmOpen">+

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;

');$(".collapsePost").each(function(index){$(this).attr("id","fmvicollapsePost"+partname+index);if(my_getcookie("fmvicollapsePost"+partname+index)=="1"){$(this).children("a[alt='fmClose']").hide();$(this).children("a[alt='fmOpen']").show();$(this).parent().next().hide()}});$(".collapsePost a[alt='fmClose']").click(function(){my_setcookie($(this).parent().attr("id"),1,1,0);$(this).hide().next().show();$(this).parent().parent().next().slideToggle("slow")});$(".collapsePost a[alt='fmOpen']").click(function(){my_setcookie($(this).parent().attr("id"),0,1,0);$(this).hide().prev().show();$(this).parent().parent().next().slideToggle("slow")})}$("#new-message-link a[href='/privmsg?mode=post_profile']").addClass("large_textbutton").html("<span>+</span> Viết lên tường");function openWin(a,b,c){width=b;height=c;top_val=(screen.height-height)/2-30;0>top_val&&(top_val=0);left_val=(screen.width-width)/2-18;window.open(a,null,"toolbar=0,location=0,status=1,menubar=0,scrollbars=1,resizable=1,width="+width+",height="+height+", top="+top_val+",left="+left_val)};var versionMinor=parseFloat(navigator.appVersion);var versionMajor=parseInt(versionMinor);var IE=document.all&&!window.opera&&versionMajor<7;var IE7=document.all&&!window.opera&&versionMajor>=7;var OP=window.opera;var FF=document.getElementById;var NS=document.layers;function get_item(name,opener){if(IE){return(opener)?window.opener.document.all[name]:document.all[name]}else if(FF){return(opener)?window.opener.document.getElementById(name):document.getElementById(name)}else if(NS){return(opener)?window.opener.document.layers[name]:document.layers[name]}}function change_display(name,value,opener){if(IE){element=(opener==true)?window.opener.document.all[name].style:document.all[name].style}else if(FF){element=(opener==true)?window.opener.document.getElementById(name).style:document.getElementById(name).style}else if(NS){element=(opener==true)?window.opener.document.layers[name]:document.layers[name]}element.display=value}function reverse_display(name,opener){element=get_item(name);if(!element){return false}var display=(element.style.display!='block')?'block':'none';change_display(name,display,opener)}var current_tooltip;function show_tooltip(caller,content,content_title){var current_tooltip=get_item('tooltip');if(!current_tooltip){var current_tooltip=document.createElement('div');current_tooltip.setAttribute('id','tooltip');document.body.appendChild(current_tooltip)}current_tooltip.style.zIndex=100;current_tooltip.style.position='absolute';if(content_title){content='<p class="header">'+content_title+'</p><p>'+content+'</p>'}else{content='<p>'+content+'</p>'}current_tooltip.innerHTML=content;current_tooltip.style.visibility='visible';caller.onmousemove=move_tooltip;caller.onmouseout=function(){current_tooltip.style.visibility="hidden"};caller.title=''}var offsetxpoint=-60;var offsetypoint=20;var real_body=(document.compatMode&&document.compatMode!="BackCompat")?document.documentElement:document.body;real_body=(document.documentElement)?document.documentElement:document.body;function move_tooltip(e){var curX=(!IE)?e.pageX:event.clientX+real_body.scrollLeft;var curY=(!IE)?e.pageY:event.clientY+real_body.scrollTop;var rightedge=IE&&!window.opera?real_body.clientWidth-event.clientX-offsetxpoint:window.innerWidth-e.clientX-offsetxpoint-20;var bottomedge=IE&&!window.opera?real_body.clientHeight-event.clientY-offsetypoint:window.innerHeight-e.clientY-offsetypoint-20;var leftedge=(offsetxpoint<0)?offsetxpoint*(-1):-1000;current_tooltip=get_item('tooltip');if(rightedge<current_tooltip.offsetWidth)current_tooltip.style.left=IE?real_body.scrollLeft+event.clientX-current_tooltip.offsetWidth+"px":window.pageXOffset+e.clientX-current_tooltip.offsetWidth+"px";else if(curX<leftedge)current_tooltip.style.left="5px";else current_tooltip.style.left=curX+offsetxpoint+"px";if(bottomedge<current_tooltip.offsetHeight)current_tooltip.style.top=IE?real_body.scrollTop+event.clientY-current_tooltip.offsetHeight-offsetypoint+"px":window.pageYOffset+e.clientY-current_tooltip.offsetHeight-offsetypoint+"px";else current_tooltip.style.top=curY+offsetypoint+"px"}function searchtopic(nguonF,soF,dichF){$("#proLastLoad").show();$.ajax({url:nguonF,success:function(data){var chondulieu=".topic-title:not('.topic-title:contains(\'»\')'):lt("+soF+")";if($(data).find(chondulieu).length==0){$(dichF).html('<p><font face="Courier New"><font color="red">Không có bài viết trong chuyên mục này.</font></font></p>');$("#proLastLoad").hide()}else{$("#proLastLoad").hide();$("#recentnew .latest_topics").empty();$(data).find(chondulieu).find(".topictitle, .tooltipFMvi").appendTo(dichF);$(dichF+' .topictitle').wrap("<li></li>");var ti;for(ti=0;ti<soF;ti++){var it=$(dichF+' a.topictitle:eq('+ti+')');var lastUx=it.parent().next().find('p:eq(6)>strong').html();var linkUx=it.attr("href");var popupUx=linkUx.slice(0,linkUx.indexOf("#"))+"?showpost=last";var trangthai=it.parent().next().find('p:eq(3)>font').text();var chuyenmuc=it.parent().next().find('p:eq(2)>font').html();if(langEV()){var dabikhoa="This topic is locked";var dacomoi="New posts"}else{var dabikhoa="Chủ đề này đã bị khóa";var dacomoi="Bài viết mới"}if(trangthai.search(dabikhoa)!=-1){var imgUx='http://i48.servimg.com/u/f48/16/58/89/73/locked10.png'}else if(trangthai.search(dacomoi)!=-1){var imgUx='http://i48.servimg.com/u/f48/16/58/89/73/post_n10.gif'}else{var imgUx='http://i48.servimg.com/u/f48/16/58/89/73/post_o10.png'};it.replaceWith('<span onmouseover="show_tooltip(this, $(this).parent().next().html(), \'LyTraDa.COM\')" class="leftrecent"><a href="'+it.parent().next().find(".lastlink-FMvi a").attr("href")+'" class="topictitle">'+it.text()+'</a></span><span class="imgstatus"><img width="10px" src="'+imgUx+'" /></span><span class="rightrecent">'+lastUx+'</span><span class="showpost"><a class="firstTopic" onclick="openWin(this.href, 1000, 500);return false" href="'+popupUx+'"> ►</a></span><span class="lastcate">'+chuyenmuc+'</span>')}}},error:function(jqXHR,textStatus,errorThrown){$(dichF).html('<p><font face="Courier New"><font color="red">Có lỗi xảy ra trong quá trình tải dữ liệu.</font></font></p>')}})}searchtopic('/search?search_keywords=&search_author=*_*','23','#recentnew ul');$("#changeviewrep").change(function(){$(".viewrep").hide();$("#"+$(this).val()).show()});$("#changeposter").change(function(){$(".top-vi").hide();$("#"+$(this).val()).show()});var u;for(u=0;u<20;u++){var numelat=$(".rightnumber:eq("+u+")");numelat.text(numelat.text().slice(numelat.text().lastIndexOf("-")+2))}$("#left").fadeIn(1000);$(function(){$("#changeFMvi").html($("#pun-about select[name='selected_id']").html())});if(typeof(console)=='undefined'){}CHIM=function(){return this};Mudim=function(){return this};Mudim.DISPLAY_ID=['mudim-off','mudim-vni','mudim-telex','mudim-viqr','mudim-mix','mudim-auto'];Mudim.SPELLCHECK_ID='mudim-checkspell';Mudim.ACCENTRULE_ID='mudim-accentrule';CHIM.CHAR_A='A';CHIM.CHAR_a='a';CHIM.CHAR_E='E';CHIM.CHAR_e='e';CHIM.CHAR_U='U';CHIM.CHAR_u='u';CHIM.CHAR_G='G';CHIM.CHAR_g='g';CHIM.CHAR_Q='Q';CHIM.CHAR_q='q';CHIM.CHAR_y='y';CHIM.CHAR_Y='Y';CHIM.CHAR_i='i';CHIM.CHAR_I='I';CHIM.CHAR_0x80=String.fromCharCode(0x80);CHIM.vowels="AIUEOYaiueoy";CHIM.separators=" !@#$%&*()_+=-{}[]|\\:\";'<>?,./~\r\n\t";CHIM.off=0;CHIM.buffer=[];CHIM.dirty=false;CHIM.CharIsUI=function(u){var n,UI=CHIM.UI;u=u.charCodeAt(0);for(n=0;UI[n]!=0&&UI[n]!=u;n++){}return UI[n]!=0?n:-1};CHIM.CharIsO=function(u){var n,O=CHIM.O;u=u.charCodeAt(0);for(n=0;O[n]!=0&&O[n]!=u;n++){}return O[n]!=0?n:-1};CHIM.CharPriorityCompare=function(u1,u2){var VN=CHIM.VN;var n,i=-1,j=-1,u;for(n=0,u=u1.charCodeAt(0);VN[n]!=0&&VN[n]!=u;n++){}if(VN[n]!=0){i=n}for(n=0,u=u2.charCodeAt(0);VN[n]!=0&&VN[n]!=u;n++){}if(VN[n]){j=n}return i-j};CHIM.SetCharAt=function(n,c){CHIM.buffer[n]=String.fromCharCode(c)};CHIM.Speller=function(){return this};CHIM.Speller.enabled=true;CHIM.Speller.position=0;CHIM.Speller.count=0;CHIM.Speller.vowels=[];CHIM.Speller.lasts=[];CHIM.Speller.Toggle=function(){CHIM.Speller.enabled=!CHIM.Speller.enabled;Mudim.SetPreference()};CHIM.Speller.Set=function(position,key){CHIM.Speller.vowels[CHIM.Speller.count]=CHIM.Speller.position;CHIM.Speller.lasts[CHIM.Speller.count++]=key;CHIM.Speller.position=position};CHIM.Speller.Clear=function(){CHIM.Speller.position=-1;CHIM.Speller.count=0};CHIM.Speller.Last=function(){return CHIM.Speller.lasts[CHIM.Speller.count-1]};Mudim.consonants="BCDFGHJKLMNPQRSTVWXZbcdfghjklmnpqrstvwxz";Mudim.spchk="AIUEOYaiueoy|BDFJKLQSVWXZbdfjklqsvwxz|'~?.*+=";Mudim.vwchk="|oa|uy|ue|oe|ou|ye|ua|uo|ai|ui|oi|au|iu|ia|eu|ie|ao|eo|ay|uu|io|yu|";Mudim.nvchk="FfJjWwZz";Mudim.separators="!@#$%&*()_+=-{}[]|\\:\";'<>?,./~";Mudim.tailConsonantsPattern='|c|ch|p|t|m|n|ng|nh|';Mudim.CheckSpell=function(key,grp){var b=CHIM.buffer;var len=b.length;var n=key.toLowerCase();if(CHIM.Speller.enabled&&!Mudim.tempDisableSpellCheck){if(grp>0&&CHIM.off==0){if(Mudim.tailConsonants.length>0){var ecIdx=Mudim.tailConsonantsPattern.indexOf('|'+Mudim.tailConsonants+'|');if(ecIdx<0){CHIM.off=len;Mudim.tailConsonants='';return true}else if(ecIdx<9&&grp==2){var typeid=Mudim.GetMarkTypeID(n,2);if(typeid!=0&&typeid!=1&&typeid!=5){CHIM.off=len;Mudim.tailConsonants='';return true}}}if(len==2&&(b[1]==CHIM.CHAR_u||b[1]==CHIM.CHAR_U)&&(b[0]==CHIM.CHAR_q||b[0]==CHIM.CHAR_Q)&&(grp==2||(grp==1&&Mudim.GetMarkTypeID(n,1)==1))){CHIM.off=len;return CHIM.Append(len,c,key)}}else if(!CHIM.off){var kp=Mudim.spchk.indexOf(key);if(len>0){var lkey=b[len-1].toLowerCase()}if(len==0){if(Mudim.nvchk.indexOf(key)>=0){CHIM.off=-1}else if(kp>=0&&kp<12){CHIM.Speller.Set(0,key)}else if(kp==12||kp>37){return}else{CHIM.Speller.Clear()}}else if(kp==12||kp>37){CHIM.ClearBuffer();return}else if(kp>12){CHIM.off=len}else if(kp>=0){var i=0;while(Mudim.consonants.indexOf(b[i])>=0){i++}if(i>0){Mudim.headConsonants=b.slice(0,i).toString().replace(/,/g,'').toLowerCase()}if(CHIM.Speller.position<0){if(Mudim.headConsonants=='q'){if(len==1&&n!='u'){CHIM.off=len}else if(b[1]=='u'&&n=='u'){CHIM.off=len}}else if(lkey=='p'&&n!='h'){CHIM.off=len}else if(lkey=='k'&&n!='i'&&n!='e'&&n!='y'){CHIM.off=len}else if(Mudim.headConsonants=='ngh'&&n!='i'&&n!='e'){CHIM.off=len}else{CHIM.Speller.Set(len,key);if(n=='y'){if('hklmst'.indexOf(lkey)<0){CHIM.off=len}}else if(n=='e'||n=='i'){if(len>1&&(lkey=='g')){CHIM.off=len}if(lkey=='c'){CHIM.off=1}}}}else if(len-CHIM.Speller.position>1){CHIM.off=len}else{var w="|"+CHIM.Speller.Last().toLowerCase()+key.toLowerCase()+"|";var idx=Mudim.vwchk.indexOf(w);if(idx<0){CHIM.off=len}else if(idx<18&&(Mudim.headConsonants=='c'||Mudim.headConsonants=='C')){CHIM.off=len}else if(lkey=='y'&&Mudim.headConsonants==''&&n!='e'){CHIM.off=len}else{CHIM.Speller.Set(len,key)}}}else{switch(key){case'h':case'H':if(lkey>=CHIM.CHAR_0x80||"CGKNPTcgknpt".indexOf(lkey)<0){CHIM.off=len}break;case'g':case'G':if(lkey!='n'&&lkey!='N'){CHIM.off=len}break;case'r':case'R':if(lkey!='t'&&lkey!='T'){CHIM.off=len}break;default:if(Mudim.consonants.indexOf(lkey)>=0){CHIM.off=len}break}}}if(CHIM.off!=0){return true}}return false};CHIM.Append=function(count,lastkey,key){if(Mudim.separators.indexOf(key)>=0){CHIM.ClearBuffer();return}Mudim.my='mu';CHIM.buffer.push(key);return Mudim.AdjustAccent(CHIM.modes[Mudim.method-1][2].charAt(0))};CHIM.AddKey=function(key){var p=-1;var i,j=-1;var b,c=0,cc,l;var count=CHIM.buffer.length;var m=CHIM.modes[Mudim.method-1],n;var v=null;var autoModeProbe=false;if(!count||CHIM.off!=0||Mudim.tempOff){if(Mudim.CheckSpell(key,l)){return CHIM.Append(count,c,key)}return CHIM.Append(0,0,key)}b=CHIM.buffer;c=b[p=count-1];n=key.toLowerCase();for(l=1;l<m.length;l++)if(m[l].indexOf(n)>=0){break}if(l>=m.length){Mudim.CheckSpell(key,0);return CHIM.Append(count,c,key)}if(Mudim.method==5){Mudim.method=Mudim.AutoDetectMode(n);autoModeProbe=true}if((p=Mudim.FindAccentPos(n))<0){if(autoModeProbe){Mudim.method=5;autoModeProbe=false}Mudim.CheckSpell(key,0);return CHIM.Append(count,c,key)}Mudim.lord='dz';if(Mudim.CheckSpell(key,l)){if(autoModeProbe){Mudim.method=5;autoModeProbe=false}return CHIM.Append(count,c,key)}c=b[p];var x=c.charCodeAt(0);var found=false;if(l==1){m=m[0];for(i=0;!found&&i<m.length;i++){var k=m[i];if(k[0]==n){for(i=1;i<k.length;i++){v=CHIM.vncode_1[k[i]];Mudim.AdjustAccent(n);x=b[p].charCodeAt(0);if(Mudim.GetMarkTypeID(n,1)==3){p=0;c=b[p];x=c.charCodeAt(0)}if(Mudim.PutMark(p,x,1,v,n,true)){if(p>0&&Mudim.GetMarkTypeID(n,1)==1&&p<count-1&&CHIM.CharIsO(b[p])>=0&&CHIM.CharIsUI(b[p-1])>=0&&b[0]!=CHIM.CHAR_q&&b[0]!=CHIM.CHAR_Q){Mudim.PutMark(p-1,b[p-1].charCodeAt(0),1,CHIM.vn_UW,n,false)}found=true;break}}break}}}else{for(i=0;i<CHIM.vncode_2.length;i++){v=CHIM.vncode_2[i];if(Mudim.PutMark(p,x,2,v,n,true)){found=true;break}}}if(!found){Mudim.CheckSpell(key,0);if(autoModeProbe){Mudim.method=5}autoModeProbe=false;return CHIM.Append(count,c,key)}else{if(autoModeProbe){CHIM.SetDisplay()}autoModeProbe=false}if(CHIM.off!=0){CHIM.buffer.push(key)}return p>=0};CHIM.BackSpace=function(){var count=CHIM.buffer.length;if(count<=0){CHIM.dirty=true}else{if(Mudim.accent[0]==count-1)Mudim.ResetAccentInfo();var i=CHIM.vn_OW.length-1;var code=CHIM.buffer[count-1].charCodeAt(0);while(i>=0&&CHIM.vn_OW[i]!=code){i--}if(i<0){i=CHIM.vn_UW.length-1;while(i>=0&&CHIM.vn_UW[i]!=code){i--}}if(i>=0&&(i%2)==1){Mudim.w--}--count;CHIM.buffer.pop();if(count==CHIM.Speller.position){CHIM.Speller.position=CHIM.Speller.vowels[--CHIM.Speller.count]}if((CHIM.off<0&&!count)||(count<=CHIM.off)){CHIM.off=0}}};CHIM.ClearBuffer=function(){CHIM.off=0;Mudim.w=0;CHIM.Speller.Clear();Mudim.ResetAccentInfo();Mudim.tailConsonants='';Mudim.headConsonants='';Mudim.ctrlSerie=0;Mudim.shiftSerie=0;if(CHIM.buffer.length>0){Mudim.tempOff=false;Mudim.tempDisableSpellCheck=false}CHIM.buffer=[]};CHIM.SetDisplay=function(){if(typeof(Mudim.DISPLAY_ID)!="undefined"&&Mudim.method<Mudim.DISPLAY_ID.length){var r;for(var i=0;i<5;i++){r=document.getElementById(Mudim.DISPLAY_ID[i]);if(r){r.checked=false}}r=document.getElementById(Mudim.DISPLAY_ID[Mudim.method]);if(r){r.checked=true}}if(typeof(Mudim.SPELLCHECK_ID)!="undefined"){var r=document.getElementById(Mudim.SPELLCHECK_ID);if(r){r.checked=CHIM.Speller.enabled}}if(typeof(Mudim.ACCENTRULE_ID)!="undefined"){var r=document.getElementById(Mudim.ACCENTRULE_ID);if(r){r.checked=Mudim.newAccentRule}}};CHIM.SwitchMethod=function(){CHIM.ClearBuffer();Mudim.method=(++Mudim.method%6);CHIM.SetDisplay();Mudim.SetPreference()};CHIM.SetMethod=function(m){CHIM.ClearBuffer();Mudim.method=m;CHIM.SetDisplay();Mudim.SetPreference()};CHIM.Toggle=function(){var p;if(!(p=Mudim.Panel)){Mudim.InitPanel()}if(Mudim.method==0){CHIM.SetMethod(Mudim.oldMethod)}else{Mudim.oldMethod=Mudim.method;CHIM.SetMethod(0)}Mudim.SetPreference()};CHIM.GetTarget=function(e){var r;if(e==null){e=window.event}if(e==null){return null}if(e.srcElement!=null){r=e.srcElement}else{r=e.target;while(r&&r.nodeType!=1)r=r.parentNode}if(r.tagName=='BODY'){r=r.parentNode}CHIM.peckable=r.tagName=='HTML'||r.type=='textarea'||r.type=='text';return r};CHIM.GetCursorPosition=function(target){if(target==null||target.value==null||target.value.length==0){return-1}if(typeof(target.selectionStart)!='undefined'){if(target.selectionStart<0||target.selectionStart>target.length||target.selectionEnd<0||target.selectionEnd>target.length||target.selectionEnd<target.selectionStart){return-1}return target.selectionStart}if(document.selection){var selection=document.selection.createRange();var textRange=target.createTextRange();if(textRange==null||selection==null||((selection.text!="")&&textRange.inRange(selection)==false)){return-1}if(selection.text==""){var index=1;if(target.tagName=="INPUT"){var contents=textRange.text;while(index<contents.length){textRange.findText(contents.substring(index));if(textRange.boundingLeft==selection.boundingLeft){break}index++}}else if(target.tagName=="TEXTAREA"){var caret=document.selection.createRange().duplicate();index=target.value.length+1;while(caret.parentElement()==target&&caret.move("character",1)==1){--index;if(target.value.charCodeAt(index)==10){index-=1}}if(index==target.value.length+1){index=-1}}return index}return textRange.text.indexOf(selection.text)}};CHIM.SetCursorPosition=function(target,p){if(p<0){return}if(target.setSelectionRange){target.setSelectionRange(p,p)}else if(target.createTextRange){var range=target.createTextRange();range.collapse(true);var i;var dec=0;for(i=0;i<p;i++){if((target.value.charCodeAt(i)==10)||(target.value.charCodeAt(i)==13)){if(dec==0){--p;dec=1}}else{dec=0}}range.moveStart('character',p);range.moveEnd('character',0);range.select()}};CHIM.UpdateBuffer=function(target){CHIM.ClearBuffer();if(target.tagName!='HTML'){var separators=CHIM.separators;var c=CHIM.GetCursorPosition(target)-1;if(c>0){while(c>=0&&separators.indexOf(target.value.charAt(c))<0){CHIM.buffer.unshift(target.value.charAt(c));c=c-1}}Mudim.startWordOffset=c+1}else{CHIM.buffer=CHIM.HTMLEditor.GetCurrentWord(target).split('')}CHIM.dirty=false};CHIM.VK_TAB=9;CHIM.VK_BACKSPACE=8;CHIM.VK_ENTER=13;CHIM.VK_DELETE=46;CHIM.VK_SPACE=32;CHIM.VK_LIMIT=128;CHIM.VK_LEFT_ARROW=37;CHIM.VK_RIGHT_ARROW=39;CHIM.VK_HOME=36;CHIM.VK_END=35;CHIM.VK_PAGE_UP=33;CHIM.VK_PAGE_DOWN=34;CHIM.VK_UP_ARROW=38;CHIM.VK_DOWN_ARROW=40;CHIM.VK_ONOFF=120;CHIM.VK_ONOFF2=121;CHIM.VK_PANELTOGGLE=119;CHIM.VK_CTRL=17;CHIM.VK_SHIFT=16;CHIM.VK_ALT=18;CHIM.ProcessControlKey=function(keyCode,release){switch(keyCode){case CHIM.VK_TAB:case CHIM.VK_ENTER:CHIM.ClearBuffer();break;case CHIM.VK_BACKSPACE:if(!release){CHIM.BackSpace()}break;case CHIM.VK_DELETE:case CHIM.VK_LEFT_ARROW:case CHIM.VK_RIGHT_ARROW:case CHIM.VK_HOME:case CHIM.VK_END:case CHIM.VK_PAGE_UP:case CHIM.VK_PAGE_DOWN:case CHIM.VK_UP_ARROW:case CHIM.VK_DOWN_ARROW:CHIM.dirty=true;break}};CHIM.IsHotkey=function(e,k){if(k==CHIM.VK_PANELTOGGLE){Mudim.TogglePanel();return true}else if(k==CHIM.VK_ONOFF||k==CHIM.VK_ONOFF2){CHIM.Toggle();return true}return false};CHIM.HTMLEditor=function(){return this};CHIM.HTMLEditor.GetRange=function(target){if(!target.parentNode.iframe){return}var win=target.parentNode.iframe.contentWindow;return(!window.opera&&document.all)?win.document.selection.createRange():win.getSelection().getRangeAt(0)};CHIM.HTMLEditor.GetCurrentWord=function(target){var range=CHIM.HTMLEditor.GetRange(target);if(!range){return''}if(!window.opera&&document.all){while(range.moveStart('character',-1)==-1){if(CHIM.separators.indexOf(range.text.charAt(0))>=0){range.moveStart('character',1);break}}return range.text}var word='';var s;if(!(s=range.startContainer.nodeValue)){return''}var c=range.startOffset-1;if(c>0){while(c>=0&&CHIM.separators.indexOf(s.charAt(c))<0&&s.charCodeAt(c)!=160){word=s.charAt(c)+word;c=c-1}}return word};CHIM.HTMLEditor.Process=function(target,l){var range=CHIM.HTMLEditor.GetRange(target);if(typeof(range)=='undefined'){return}var b=CHIM.buffer;if(!window.opera&&document.all){var x=-l;range.moveStart('character',x);range.moveEnd('character',x+b.length);range.pasteHTML(b.toString().replace(/,/g,''));return}var container=range.startContainer;var offset=range.startOffset;var start=offset-l;container.nodeValue=container.nodeValue.substring(0,start)+b.toString().replace(/,/g,'')+container.nodeValue.substring(start+l);if(l<b.length){offset++}range.setEnd(container,offset);range.setStart(container,offset)};CHIM.Freeze=function(target){var ign=Mudim.IGNORE_ID;if(ign.length>0){for(var i=0;i<ign.length;i++){if(target.id==ign[i]){return true}}}return false};CHIM.KeyHandler=function(e){if(e==null){e=window.event}if(e.isHandled==true){return}e.isHandled=true;var keyCode=e.keyCode;if(keyCode==0){keyCode=e.charCode}if(keyCode==0){keyCode=e.which}if(Mudim.method==0){return}var target=null;if(!(target=CHIM.GetTarget(e))||!CHIM.peckable||CHIM.Freeze(target)){return}if(e.ctrlKey||e.ctrlLeft||e.metaKey){if(keyCode==CHIM.VK_BACKSPACE||keyCode==CHIM.VK_LEFT_ARROW||keyCode==CHIM.VK_RIGHT_ARROW){CHIM.dirty=true}return}if(e.charCode==null||e.charCode!=0){var key=String.fromCharCode(keyCode);if(keyCode==CHIM.VK_SPACE||keyCode==CHIM.VK_ENTER){CHIM.ClearBuffer()}else if(keyCode>CHIM.VK_SPACE&&keyCode<CHIM.VK_LIMIT){if(CHIM.dirty){CHIM.UpdateBuffer(target)}var l=CHIM.buffer.length;if(l==0){Mudim.startWordOffset=CHIM.GetCursorPosition(target)}if(Mudim.newTempDisableSpellCheckRequest){CHIM.ClearBuffer();Mudim.startWordOffset=CHIM.GetCursorPosition(target);Mudim.newTempDisableSpellCheckRequest=false}if(CHIM.AddKey(key)){if(e.stopPropagation){e.stopPropagation()}if(e.preventDefault){e.preventDefault()}e.cancelBubble=true;e.returnValue=false;Mudim.UpdateUI(target,l)}}else{CHIM.dirty=true}}else{CHIM.ProcessControlKey(keyCode,true)}};CHIM.KeyUp=function(e){if(e==null){e=window.event}if(e.keyCode==CHIM.VK_SHIFT){if(Mudim.shiftSerie==1){Mudim.tempOff=true;Mudim.shiftSerie=0}}if(e.keyCode==CHIM.VK_CTRL){if(Mudim.ctrlSerie==1){Mudim.tempDisableSpellCheck=true;Mudim.ctrlSerie=0;Mudim.newTempDisableSpellCheckRequest=true}}};CHIM.KeyDown=function(e){var target=null;if(e==null){e=window.event}if(CHIM.IsHotkey(e,e.keyCode)){return}if(e.altKey||e.altLeft){return}if(e.shiftKey||e.shiftLeft||e.metaKey){Mudim.shiftSerie|=1;if(e.keyCode!=CHIM.VK_SHIFT){Mudim.shiftSerie|=2}return}if(e.ctrlKey||e.ctrlLeft||e.metaKey){Mudim.ctrlSerie|=1;if(e.keyCode!=CHIM.VK_CTRL){Mudim.ctrlSerie|=2}return}if(!(target=CHIM.GetTarget(e))||!CHIM.peckable||CHIM.Freeze(target)){return}var keyCode=e.keyCode;if(keyCode==0){keyCode=e.charCode}if(keyCode==0){keyCode=e.which}CHIM.ProcessControlKey(keyCode,false)};CHIM.MouseDown=function(e){CHIM.Activate();CHIM.dirty=true};CHIM.Attach=function(e,r){if(!e){return}if(!e.chim){if(!r){if(!window.opera&&document.all){e.attachEvent('onkeydown',CHIM.KeyDown);e.attachEvent('onkeyup',CHIM.KeyUp);e.attachEvent('onkeypress',CHIM.KeyHandler);e.attachEvent('onmousedown',CHIM.MouseDown)}else{e.addEventListener('keydown',CHIM.KeyDown,false);e.addEventListener('keyup',CHIM.KeyUp,false);e.addEventListener('keypress',CHIM.KeyHandler,false);e.addEventListener('mousedown',CHIM.MouseDown,false)}}else{e.onkeydown=CHIM.KeyDown;e.onkeyup=CHIM.KeyUp;e.onkeypress=CHIM.KeyHandler;e.onmousedown=CHIM.MouseDown}e.chim=true}var f=e.getElementsByTagName('iframe');for(var i=0;i<f.length;i++){var doc=(!window.opera&&document.all)?f[i].contentWindow.document:f[i].contentDocument;try{doc.iframe=f[i];CHIM.Attach(doc,false)}catch(e){}}var f=e.getElementsByTagName('frame');for(var i=0;i<f.length;i++){var doc=(!window.opera&&document.all)?f[i].contentWindow.document:f[i].contentDocument;try{doc.iframe=f[i];CHIM.Attach(doc,false)}catch(e){}}};CHIM.Activate=function(){try{CHIM.Attach(document,true);CHIM.SetDisplay()}catch(exc){}};CHIM.vn_A0=[65,193,192,7842,195,7840];CHIM.vn_a0=[97,225,224,7843,227,7841];CHIM.vn_A6=[194,7844,7846,7848,7850,7852];CHIM.vn_a6=[226,7845,7847,7849,7851,7853];CHIM.vn_A8=[258,7854,7856,7858,7860,7862];CHIM.vn_a8=[259,7855,7857,7859,7861,7863];CHIM.vn_O0=[79,211,210,7886,213,7884];CHIM.vn_o0=[111,243,242,7887,245,7885];CHIM.vn_O6=[212,7888,7890,7892,7894,7896];CHIM.vn_o6=[244,7889,7891,7893,7895,7897];CHIM.vn_O7=[416,7898,7900,7902,7904,7906];CHIM.vn_o7=[417,7899,7901,7903,7905,7907];CHIM.vn_U0=[85,218,217,7910,360,7908];CHIM.vn_u0=[117,250,249,7911,361,7909];CHIM.vn_U7=[431,7912,7914,7916,7918,7920];CHIM.vn_u7=[432,7913,7915,7917,7919,7921];CHIM.vn_E0=[69,201,200,7866,7868,7864];CHIM.vn_e0=[101,233,232,7867,7869,7865];CHIM.vn_E6=[202,7870,7872,7874,7876,7878];CHIM.vn_e6=[234,7871,7873,7875,7877,7879];CHIM.vn_I0=[73,205,204,7880,296,7882];CHIM.vn_i0=[105,237,236,7881,297,7883];CHIM.vn_Y0=[89,221,7922,7926,7928,7924];CHIM.vn_y0=[121,253,7923,7927,7929,7925];CHIM.vncode_2=[CHIM.vn_A0,CHIM.vn_a0,CHIM.vn_A6,CHIM.vn_a6,CHIM.vn_A8,CHIM.vn_a8,CHIM.vn_O0,CHIM.vn_o0,CHIM.vn_O6,CHIM.vn_o6,CHIM.vn_O7,CHIM.vn_o7,CHIM.vn_U0,CHIM.vn_u0,CHIM.vn_U7,CHIM.vn_u7,CHIM.vn_E0,CHIM.vn_e0,CHIM.vn_E6,CHIM.vn_e6,CHIM.vn_I0,CHIM.vn_i0,CHIM.vn_Y0,CHIM.vn_y0];CHIM.vn_AA=[65,194,193,7844,192,7846,7842,7848,195,7850,7840,7852,258,194,7854,7844,7856,7846,7858,7848,7860,7850,7862,7852,97,226,225,7845,224,7847,7843,7849,227,7851,7841,7853,259,226,7855,7845,7857,7847,7859,7849,7861,7851,7863,7853];CHIM.vn_AW=[65,258,193,7854,192,7856,7842,7858,195,7860,7840,7862,194,258,7844,7854,7846,7856,7848,7858,7850,7860,7852,7862,97,259,225,7855,224,7857,7843,7859,227,7861,7841,7863,226,259,7845,7855,7847,7857,7849,7859,7851,7861,7853,7863];CHIM.vn_OO=[79,212,211,7888,210,7890,7886,7892,213,7894,7884,7896,416,212,7898,7888,7900,7900,7902,7892,7904,7894,7906,7896,111,244,243,7889,242,7891,7887,7893,245,7895,7885,7897,417,244,7899,7889,7901,7891,7903,7893,7905,7895,7907,7897];CHIM.vn_OW=[79,416,211,7898,210,7900,7886,7902,213,7904,7884,7906,212,416,7888,7898,7890,7900,7892,7902,7894,7904,7896,7906,111,417,243,7899,242,7901,7887,7903,245,7905,7885,7907,244,417,7889,7899,7891,7901,7893,7903,7895,7905,7897,7907];CHIM.vn_UW=[85,431,218,7912,217,7914,7910,7916,360,7918,7908,7920,117,432,250,7913,249,7915,7911,7917,361,7919,7909,7921];CHIM.vn_EE=[69,202,201,7870,200,7872,7866,7874,7868,7876,7864,7878,101,234,233,7871,232,7873,7867,7875,7869,7877,7865,7879];CHIM.vn_DD=[68,272,100,273];CHIM.vncode_1=[CHIM.vn_AA,CHIM.vn_EE,CHIM.vn_OO,CHIM.vn_AW,CHIM.vn_OW,CHIM.vn_UW,CHIM.vn_DD];CHIM.modes=[[[['6',0,1,2],['7',4,5],['8',3],['9',6]],'6789','012345'],[[['a',0],['e',1],['o',2],['w',3,4,5],['d',6]],'ewoda','zsfrxj'],[[['^',0,1,2],['+',4,5],['(',3],['d',6]],'^+(d',"='?~."],[[['6',0,1,2],['7',4,5],['8',3],['9',6],['a',0],['e',1],['o',2],['w',3,4,5],['d',6]],'6789ewoda',"012345zsfrxj"],[[['6',0,1,2],['7',4,5],['8',3],['9',6],['a',0],['e',1],['o',2],['w',3,4,5],['d',6],['',0,1,2],['+',4,5],['(',3],['d',6]],'6789ewoda+(d',"012345zsfrxj='`?~."]];CHIM.UI=[85,218,217,7910,360,7908,117,250,249,7911,361,7909,431,7912,7914,7916,7918,7920,432,7913,7915,7917,7919,7921,73,205,204,7880,296,7882,105,237,236,7881,297,7883,0];CHIM.O=[79,211,210,7886,213,7884,111,243,242,7887,245,7885,212,7888,7890,7892,7894,7896,244,7889,7891,7893,7895,7897,416,7898,7900,7902,7904,7906,417,7899,7901,7903,7905,7907,0];CHIM.VN=[97,65,225,193,224,192,7843,7842,227,195,7841,7840,226,194,7845,7844,7847,7846,7849,7848,7851,7850,7853,7852,259,258,7855,7854,7857,7856,7859,7858,7861,7860,7863,7862,101,69,233,201,232,200,7867,7866,7869,7868,7865,7864,234,202,7871,7870,7873,7872,7875,7874,7877,7876,7879,7878,111,79,243,211,242,210,7887,7886,245,213,7885,7884,244,212,7889,7888,7891,7890,7893,7892,7895,7894,7897,7896,417,416,7899,7898,7901,7900,7903,7902,7905,7904,7907,7906,121,89,253,221,7923,7922,7927,7926,7929,7928,7925,7924,117,85,250,218,249,217,7911,7910,361,360,7909,7908,432,431,7913,7912,7915,7914,7917,7916,7919,7918,7921,7920,105,73,237,205,236,204,7881,7880,297,296,7883,7882,273,272,0];Mudim.UpdateUI=function(target,l){var b=CHIM.buffer;if(target.tagName=='HTML'){CHIM.HTMLEditor.Process(target,l);if(l<CHIM.buffer.length){return}return false}var start=Mudim.startWordOffset<0?0:Mudim.startWordOffset;var end=CHIM.GetCursorPosition(target);var t=target.scrollTop;target.value=target.value.substring(0,start)+b.toString().replace(/,/g,'')+target.value.substring(end);CHIM.SetCursorPosition(target,start+b.length);target.scrollTop=t};Mudim.FindAccentPos=function(nKey){var k=nKey.toLowerCase();var m=CHIM.modes[Mudim.method-1];var b=CHIM.buffer;var len=b.length;var i,j,l,p,c;if(!len||CHIM.off!=0){return-1}for(i=1;i<m.length;i++)if(m[i].indexOf(k)>=0){break}p=len-1;Mudim.is='ot';switch(l=i){case 1:if(Mudim.GetMarkTypeID(k,1)==3){break}case 2:default:i=p;while(i>=0&&b[i]<CHIM.CHAR_0x80&&CHIM.vowels.indexOf(b[i])<0)i--;if(i<0){return-1}if(i<len-1){Mudim.tailConsonants=b.slice(i+1,len).toString().replace(/,/g,'').toLowerCase()}while(i-1>=0&&(CHIM.vowels.indexOf(b[i-1])>=0||b[i-1]>CHIM.CHAR_0x80)&&CHIM.CharPriorityCompare(b[i-1],b[i])<0)i--;if(i==len-1&&i-1>=0&&(j=CHIM.CharIsUI(b[i-1]))>0){switch(b[i]){case CHIM.CHAR_a:case CHIM.CHAR_A:if((i-2<0||(j<24&&b[i-2]!=CHIM.CHAR_q&&b[i-2]!=CHIM.CHAR_Q)||(j>=24&&b[i-2]!=CHIM.CHAR_g&&b[i-2]!=CHIM.CHAR_G))&&(l==2||(l==1&&Mudim.GetMarkTypeID(k,1)==1)))i--;break;case CHIM.CHAR_u:case CHIM.CHAR_U:if(i-2<0||(b[i-2]!=CHIM.CHAR_g&&b[i-2]!=CHIM.CHAR_G))i--;break;case CHIM.CHAR_Y:case CHIM.CHAR_y:if((!Mudim.newAccentRule)&&i-2>=0&&b[i-2]!=CHIM.CHAR_q&&b[i-2]!=CHIM.CHAR_Q){i--}break}}if(i==len-1&&i-1>=0&&CHIM.CharIsO(b[i-1])>0){switch(b[i]){case CHIM.CHAR_a:case CHIM.CHAR_A:if(!Mudim.newAccentRule&&(l==2||(l==1&&Mudim.GetMarkTypeID(k,1)!=1)))i--;break;case CHIM.CHAR_e:case CHIM.CHAR_E:if(!Mudim.newAccentRule)i--;break}}if(i==len-2&&i-1>=0){var uipos=CHIM.CharIsUI(b[i]);if(uipos>=0&&uipos<24&(b[i-1]==CHIM.CHAR_q||b[i-1]==CHIM.CHAR_Q)){i++}}p=i;break};if(Mudim.GetMarkTypeID(k,1)==3&&b[0]=='d'){return 0}return p};Mudim.PutMark=function(pos,charCodeAtPos,group,subsTab,key,checkDouble){var v=subsTab;var i;for(i=0;i<v.length;i++){if(v[i]==charCodeAtPos){switch(group){case 1:if(Mudim.GetMarkTypeID(key,1)==1){Mudim.w++}if(i%2==0){CHIM.SetCharAt(pos,v[i+1])}else{CHIM.SetCharAt(pos,v[i-1]);if(checkDouble){CHIM.off=CHIM.buffer.length+1}}break;case 2:var j=Mudim.GetMarkTypeID(key,2);if(j>=0){if(j!=i){CHIM.SetCharAt(pos,v[j]);Mudim.accent=[pos,(CHIM.buffer[pos]).charCodeAt(0),v,key]}else{CHIM.SetCharAt(pos,v[0]);Mudim.ResetAccentInfo();if(checkDouble){CHIM.off=CHIM.buffer.length+1}}}break}return true}}return false};Mudim.ResetAccentInfo=function(){Mudim.accent=[-1,0,null,'z']};Mudim.AdjustAccent=function(vk){if(CHIM.off!=0){return false}var p=Mudim.FindAccentPos(vk);var a=Mudim.accent;var b=CHIM.buffer;var v,i,j,c;if(p<0){return false}i=CHIM.vn_OW.length-1;c=b[p].charCodeAt(0);while(i>=0&&CHIM.vn_OW[i]!=c){i--}j=CHIM.vn_UW.length-1;if(p>0){c=b[p-1].charCodeAt(0);while(j>=0&&CHIM.vn_UW[j]!=c){j--}}else{j=-1}if(p<b.length-1&&p>0&&i>=0&&j>=0){if(Mudim.w==1){if(i%2==0){Mudim.PutMark(p,b[p].charCodeAt(0),1,CHIM.vn_OW,CHIM.modes[Mudim.method-1][1].charAt(1),false);if(b[0]==CHIM.CHAR_q||b[0]==CHIM.CHAR_Q){Mudim.PutMark(p-1,b[p-1].charCodeAt(0),1,CHIM.vn_UW,CHIM.modes[Mudim.method-1][1].charAt(1),false)}}else{if(b[0]!=CHIM.CHAR_q&&b[0]!=CHIM.CHAR_Q){Mudim.PutMark(p-1,b[p-1].charCodeAt(0),1,CHIM.vn_UW,CHIM.modes[Mudim.method-1][1].charAt(1),false)}}return true}}if(a[0]>=0&&p>0&&a[0]!=p){Mudim.PutMark(a[0],a[1],2,a[2],a[3],false);for(i=0;i<CHIM.vncode_2.length;i++){v=CHIM.vncode_2[i];if(Mudim.PutMark(p,b[p].charCodeAt(0),2,v,a[3],true)){break}}return true}return false};Mudim.GetMarkTypeID=function(key,group){var m=CHIM.modes[Mudim.method-1];if(Mudim.method!=4){return m[group].indexOf(key)}else{var j=-1;for(var i=0;i<2;i++){j=CHIM.modes[i][group].indexOf(key);if(j>=0){return j}}return j}};Mudim.AutoDetectMode=function(c){var gi;if((gi=CHIM.modes[4][1].indexOf(c))>=0){if(gi<4){return 1}else if(gi<9){return 2}else{return 3}}else if((gi=CHIM.modes[4][2].indexOf(c))>=0){if(gi<6){return 1}else if(gi<12){return 2}else{return 3}}else{return 0}};Mudim.SetPreference=function(){var d=new Date();d.setTime(d.getTime()+604800000);var tail=';expires='+d.toGMTString()+';path=/';var value=Mudim.method;var value=CHIM.Speller.enabled?value+8:value;value=Mudim.newAccentRule?value+16:value;value=Mudim.showPanel?value+32:value;value+=Mudim.displayMode*64;document.cookie='|mudim-settings='+value+tail};Mudim.GetPreference=function(){var c=document.cookie.split(';');for(var i=0;i<c.length&&c[i].indexOf('|mudim-settings')<0;i++);if(i==c.length){CHIM.SetDisplay()}else{var value=parseInt(c[i].split('=')[1],10);Mudim.method=value&7;CHIM.Speller.enabled=(value&8)?true:false;CHIM.newAccentRule=(value&16)?true:false;Mudim.showPanel=(value&32)?true:false;Mudim.displayMode=(value&64)>>6}};Mudim.ToggleAccentRule=function(){Mudim.newAccentRule=!Mudim.newAccentRule};Mudim.TogglePanel=function(){Mudim.showPanel=!Mudim.showPanel;Mudim.Panel.style.display=Mudim.showPanel?'':'None';Mudim.SetPreference()};Mudim.ShowPanel=function(){Mudim.showPanel=true;Mudim.Panel.style.display=''};Mudim.HidePanel=function(){Mudim.showPanel=false;Mudim.Panel.style.display='None'};Mudim.InitPanel=function(){if(!Mudim.Panel){Mudim.GetPreference();Mudim.panels=['<div id="mudimPanel" style="position: fixed; bottom: 0; right:0; left:0; width: 100%; border: 1px solid black; padding: 1px; background: '+Mudim.PANEL_BACKGROUND+'; color:'+Mudim.COLOR+'; z-index:4000; text-align: center; font-size: 10pt;"><a href="http://mudim.googlecode.com" title="Mudzot\'s Input Method" onclick="Mudim.ToggleDisplayMode();return false;">Mudim</a> v0.8 <input name="mudim" id="mudim-off" onclick="Mudim.SetMethod(0);" type="radio">'+Mudim.LANG[0]+'<input name="mudim" id="mudim-vni" onclick="Mudim.SetMethod(1);" type="radio"> '+Mudim.LANG[1]+' <input name="mudim" id="mudim-telex" onclick="Mudim.SetMethod(2);" type="radio"> '+Mudim.LANG[2]+' <input name="mudim" id="mudim-viqr" onclick="Mudim.SetMethod(3);" type="radio"> '+Mudim.LANG[3]+' <input name="mudim" id="mudim-mix" onclick="Mudim.SetMethod(4);" type="radio"> '+Mudim.LANG[4]+' <input name="mudim" id="mudim-auto" onclick="Mudim.SetMethod(5);" type="radio"> '+Mudim.LANG[5]+' <input id="mudim-checkspell" onclick="javascript:Mudim.ToggleSpeller();" type="checkbox">'+Mudim.LANG[6]+'<input id="mudim-accentrule" onclick="javascript:Mudim.ToggleAccentRule();" type="checkbox">'+Mudim.LANG[7]+' [&nbsp;<a href="#" onclick="Mudim.Toggle();return false;">'+Mudim.LANG[8]+'</a> (F9) <a href="#" onclick="Mudim.TogglePanel();return false;">'+Mudim.LANG[9]+'</a> (F8) ]</div>','<div id="mudimPanel" style="position: fixed; bottom: 0; right: 0; width: 120px; border: 1px solid black; padding: 1px; background: '+Mudim.PANEL_BACKGROUND+'; color:'+Mudim.COLOR+'; z-index:100; text-align: center; font-size: 10pt;"><a href="http://mudim.googlecode.com" title="Mudzot\'s Input Method" onclick="Mudim.ToggleDisplayMode();return false;">Mudim</a>:#METHOD#</div>'];var f=document.createElement('div');f.innerHTML=Mudim.panels[Mudim.displayMode].replace('#METHOD#',Mudim.LANG[Mudim.method]);f.style.display='None';document.body.appendChild(f);Mudim.Panel=f;if(Mudim.showPanel){Mudim.ShowPanel()}else{Mudim.HidePanel()}}};Mudim.ToggleSpeller=function(){CHIM.Speller.Toggle()};Mudim.Toggle=function(){CHIM.Toggle()};Mudim.ToggleDisplayMode=function(){if(Mudim.displayMode){Mudim.displayMode=0}else{Mudim.displayMode=1}Mudim.BeforeInit();Mudim.Panel.innerHTML=Mudim.panels[Mudim.displayMode].replace('#METHOD#',Mudim.LANG[Mudim.method]);Mudim.AfterInit();Mudim.SetPreference()};Mudim.SetMethod=function(m){CHIM.SetMethod(m)};Mudim.SwitchMethod=function(){CHIM.SwitchMethod()};Mudim.BeforeInit=function(){};Mudim.AfterInit=function(){};Mudim.Init=function(){Mudim.BeforeInit();Mudim.InitPanel();CHIM.Activate();Mudim.AfterInit()};Mudim.GetPanelStyle=function(){return Mudim.Panel.firstChild.style};Mudim.method=4;Mudim.newAccentRule=true;Mudim.oldMethod=4;Mudim.showPanel=true;Mudim.accent=[-1,0,null,-1];Mudim.w=0;Mudim.tempOff=false;Mudim.tempDisableSpellCheck=false;Mudim.newTempDisableSpellCheckRequest=false;Mudim.ctrlSerie=0;Mudim.shiftSerie=0;Mudim.headConsonants='';Mudim.tailConsonants='';Mudim.startWordOffset=0;Mudim.COLOR='Black';Mudim.PANEL_BACKGROUND='lightYellow';Mudim.LANG=['Tắt','VNI','Telex','Viqr','Tổng hợp','Tự động','Chính tả','Bỏ dấu kiểu mới','Bật/Tắt','Ẩn/Hiện'];Mudim.IGNORE_ID=[];Mudim.displayMode=0;Mudim.panels=['',''];Mudim.REV=153;for(var i=1;i<100;i++){setTimeout("Mudim.Init()",2000*i)}Mudim.BeforeInit=function(){Mudim.IGNORE_ID=['email','url']};Mudim.AfterInit=function(){};(function(u,q,e){var l=e(u),r=e(q),a=e.fancybox=function(){a.open.apply(this,arguments)},s=!1,t=null;e.extend(a,{version:"2.0.4",defaults:{padding:15,margin:20,width:800,height:600,minWidth:200,minHeight:200,maxWidth:9999,maxHeight:9999,autoSize:!0,fitToView:!0,aspectRatio:!1,topRatio:0.5,fixed:!e.browser.msie||6<e.browser.version||!q.documentElement.hasOwnProperty("ontouchstart"),scrolling:"auto",wrapCSS:"fancybox-default",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,modal:!1,loop:!0,ajax:{},keys:{next:[13,32,34,39,40],prev:[8,33,37,38],close:[27]},tpl:{wrap:'<div class="fancybox-wrap"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe class="fancybox-iframe" name="fancybox-frame{rnd}" frameborder="0" hspace="0" '+(e.browser.msie?'allowtransparency="true""':"")+' scrolling="{scrolling}" src="{href}"></iframe>',swf:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="wmode" value="transparent" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{href}" /><embed src="{href}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="100%" height="100%" wmode="transparent"></embed></object>',error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<div title="Close" class="fancybox-item fancybox-close"></div>',next:'<a title="Next" class="fancybox-item fancybox-next"><span></span></a>',prev:'<a title="Previous" class="fancybox-item fancybox-prev"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:300,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:300,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:{speedIn:0,speedOut:300,opacity:0.8,css:{cursor:"pointer"},closeClick:!0},title:{type:"float"}}},group:{},opts:{},coming:null,current:null,isOpen:!1,isOpened:!1,wrap:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(b,c){e.isArray(b)||(b=[b]);if(b.length)a.close(!0),a.opts=e.extend(!0,{},a.defaults,c),a.group=b,a._start(a.opts.index||0)},cancel:function(){if(!(a.coming&&!1===a.trigger("onCancel"))&&(a.coming=null,a.hideLoading(),a.ajaxLoad&&a.ajaxLoad.abort(),a.ajaxLoad=null,a.imgPreload))a.imgPreload.onload=a.imgPreload.onabort=a.imgPreload.onerror=null},close:function(b){a.cancel();if(a.current&&!1!==a.trigger("beforeClose"))a.unbindEvents(),!a.isOpen||b&&!0===b[0]?(e(".fancybox-wrap").stop().trigger("onReset").remove(),a._afterZoomOut()):(a.isOpen=a.isOpened=!1,e(".fancybox-item").remove(),a.wrap.stop(!0).removeClass("fancybox-opened"),a.inner.css("overflow","hidden"),a.transitions[a.current.closeMethod]())},play:function(b){var c=function(){clearTimeout(a.player.timer)},d=function(){c();if(a.current&&a.player.isActive)a.player.timer=setTimeout(a.next,a.current.playSpeed)},g=function(){c();e("body").unbind(".player");a.player.isActive=!1;a.trigger("onPlayEnd")};if(a.player.isActive||b&&!1===b[0])g();else if(a.current&&(a.current.loop||a.current.index<a.group.length-1))a.player.isActive=!0,e("body").bind({"afterShow.player onUpdate.player":d,"onCancel.player beforeClose.player":g,"beforeLoad.player":c}),d(),a.trigger("onPlayStart")},next:function(){a.current&&a.jumpto(a.current.index+1)},prev:function(){a.current&&a.jumpto(a.current.index-1)},jumpto:function(b){a.current&&(b=parseInt(b,10),1<a.group.length&&a.current.loop&&(b>=a.group.length?b=0:0>b&&(b=a.group.length-1)),"undefined"!==typeof a.group[b]&&(a.cancel(),a._start(b)))},reposition:function(b){a.isOpen&&a.wrap.css(a._getPosition(b))},update:function(){a.isOpen&&(s||(t=setInterval(function(){if(s&&(s=!1,clearTimeout(t),a.current)){if(a.current.autoSize)a.inner.height("auto"),a.current.height=a.inner.height();a._setDimension();a.current.canGrow&&a.inner.height("auto");a.reposition();a.trigger("onUpdate")}},100)),s=!0)},toggle:function(){if(a.isOpen)a.current.fitToView=!a.current.fitToView,a.update()},hideLoading:function(){e("#fancybox-loading").remove()},showLoading:function(){a.hideLoading();e('<div id="fancybox-loading"></div>').click(a.cancel).appendTo("body")},getViewport:function(){return{x:l.scrollLeft(),y:l.scrollTop(),w:l.width(),h:l.height()}},unbindEvents:function(){a.wrap&&a.wrap.unbind(".fb");r.unbind(".fb");l.unbind(".fb")},bindEvents:function(){var b=a.current,c=b.keys;b&&(l.bind("resize.fb, orientationchange.fb",a.update),c&&r.bind("keydown.fb",function(b){var g;if(!b.ctrlKey&&!b.altKey&&!b.shiftKey&&!b.metaKey&&0>e.inArray(b.target.tagName.toLowerCase(),["input","textarea","select","button"]))g=b.keyCode,-1<e.inArray(g,c.close)?(a.close(),b.preventDefault()):-1<e.inArray(g,c.next)?(a.next(),b.preventDefault()):-1<e.inArray(g,c.prev)&&(a.prev(),b.preventDefault())}),e.fn.mousewheel&&b.mouseWheel&&1<a.group.length&&a.wrap.bind("mousewheel.fb",function(b,c){var f=e(b.target).get(0);if(0===f.clientHeight||f.scrollHeight===f.clientHeight)b.preventDefault(),a[0<c?"prev":"next"]()}))},trigger:function(b){var c,d=a[-1<e.inArray(b,["onCancel","beforeLoad","afterLoad"])?"coming":"current"];if(d){e.isFunction(d[b])&&(c=d[b].apply(d,Array.prototype.slice.call(arguments,1)));if(!1===c)return!1;d.helpers&&e.each(d.helpers,function(c,f){if(f&&"undefined"!==typeof a.helpers[c]&&e.isFunction(a.helpers[c][b]))a.helpers[c][b](f,d)});e.event.trigger(b+".fb")}},isImage:function(a){return a&&a.match(/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i)},isSWF:function(a){return a&&a.match(/\.(swf)(.*)?$/i)},_start:function(b){var c={},d=a.group[b]||null,g,f,k;if("object"===typeof d&&(d.nodeType||d instanceof e))g=!0,e.metadata&&(c=e(d).metadata());c=e.extend(!0,{},a.opts,{index:b,element:d},e.isPlainObject(d)?d:c);e.each(["href","title","content","type"],function(b,f){c[f]=a.opts[f]||g&&e(d).attr(f)||c[f]||null});if("number"===typeof c.margin)c.margin=[c.margin,c.margin,c.margin,c.margin];c.modal&&e.extend(!0,c,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{css:{cursor:"auto"},closeClick:!1}}});a.coming=c;if(!1===a.trigger("beforeLoad"))a.coming=null;else{f=c.type;b=c.href;if(!f)g&&(k=e(d).data("fancybox-type"),!k&&d.className&&(f=(k=d.className.match(/fancybox\.(\w+)/))?k[1]:null)),!f&&b&&(a.isImage(b)?f="image":a.isSWF(b)?f="swf":b.match(/^#/)&&(f="inline")),f||(f=g?"inline":"html"),c.type=f;"inline"===f||"html"===f?(c.content=c.content||("inline"===f&&b?e(b):d),c.content.length||(f=null)):(c.href=b||d,c.href||(f=null));c.group=a.group;"image"===f?a._loadImage():"ajax"===f?a._loadAjax():f?a._afterLoad():a._error("type")}},_error:function(b){e.extend(a.coming,{type:"html",autoSize:!0,minHeight:"0",hasError:b,content:a.coming.tpl.error});a._afterLoad()},_loadImage:function(){a.imgPreload=new Image;a.imgPreload.onload=function(){this.onload=this.onerror=null;a.coming.width=this.width;a.coming.height=this.height;a._afterLoad()};a.imgPreload.onerror=function(){this.onload=this.onerror=null;a._error("image")};a.imgPreload.src=a.coming.href;a.imgPreload.complete||a.showLoading()},_loadAjax:function(){a.showLoading();a.ajaxLoad=e.ajax(e.extend({},a.coming.ajax,{url:a.coming.href,error:function(b,c){"abort"!==c?a._error("ajax",b):a.hideLoading()},success:function(b,c){if("success"===c)a.coming.content=b,a._afterLoad()}}))},_preload:function(){var b=a.group,c=a.current.index,d=function(b){if(b&&a.isImage(b))(new Image).src=b};1<b.length&&(d(e(b[c+1]||b[0]).attr("href")),d(e(b[c-1]||b[b.length-1]).attr("href")))},_afterLoad:function(){a.hideLoading();!a.coming||!1===a.trigger("afterLoad",a.current)?a.coming=!1:(a.isOpened?(e(".fancybox-item").remove(),a.wrap.stop(!0).removeClass("fancybox-opened"),a.inner.css("overflow","hidden"),a.transitions[a.current.prevMethod]()):(e(".fancybox-wrap").stop().trigger("onReset").remove(),a.trigger("afterClose")),a.unbindEvents(),a.isOpen=!1,a.current=a.coming,a.coming=!1,a.wrap=e(a.current.tpl.wrap).addClass("fancybox-tmp "+a.current.wrapCSS).appendTo("body"),a.outer=e(".fancybox-outer",a.wrap).css("padding",a.current.padding+"px"),a.inner=e(".fancybox-inner",a.wrap),a._setContent(),a.trigger("beforeShow"),a._setDimension(),a.wrap.hide().removeClass("fancybox-tmp"),a.bindEvents(),a._preload(),a.transitions[a.isOpened?a.current.nextMethod:a.current.openMethod]())},_setContent:function(){var b,c,d=a.current,g=d.type;switch(g){case"inline":case"ajax":case"html":b=d.content;"inline"===g&&b instanceof e&&(b=b.show().detach(),b.parent().hasClass("fancybox-inner")&&b.parents(".fancybox-wrap").trigger("onReset").remove(),e(a.wrap).bind("onReset",function(){b.appendTo("body").hide()}));if(d.autoSize)c=e('<div class="fancybox-tmp"></div>').appendTo(e("body")).append(b),d.width=c.outerWidth(),d.height=c.outerHeight(!0),b=c.contents().detach(),c.remove();break;case"image":b=d.tpl.image.replace("{href}",d.href);d.aspectRatio=!0;break;case"swf":b=d.tpl.swf.replace(/\{width\}/g,d.width).replace(/\{height\}/g,d.height).replace(/\{href\}/g,d.href);break;case"iframe":b=d.tpl.iframe.replace("{href}",d.href).replace("{scrolling}",d.scrolling).replace("{rnd}",(new Date).getTime())}if(-1<e.inArray(g,["image","swf","iframe"]))d.autoSize=!1,d.scrolling=!1;a.inner.append(b)},_setDimension:function(){var b=a.wrap,c=a.outer,d=a.inner,g=a.current,f=a.getViewport(),k=g.margin,i=2*g.padding,h=g.width+i,j=g.height+i,l=g.width/g.height,o=g.maxWidth,m=g.maxHeight,n=g.minWidth,p=g.minHeight;f.w-=k[1]+k[3];f.h-=k[0]+k[2];-1<h.toString().indexOf("%")&&(h=f.w*parseFloat(h)/100);-1<j.toString().indexOf("%")&&(j=f.h*parseFloat(j)/100);g.fitToView&&(o=Math.min(f.w,o),m=Math.min(f.h,m));n=Math.min(h,n);p=Math.min(h,p);o=Math.max(n,o);m=Math.max(p,m);g.aspectRatio?(h>o&&(h=o,j=(h-i)/l+i),j>m&&(j=m,h=(j-i)*l+i),h<n&&(h=n,j=(h-i)/l+i),j<p&&(j=p,h=(j-i)*l+i)):(h=Math.max(n,Math.min(h,o)),j=Math.max(p,Math.min(j,m)));h=Math.round(h);j=Math.round(j);e(b.add(c).add(d)).width("auto").height("auto");d.width(h-i).height(j-i);b.width(h);k=b.height();if(h>o||k>m)for(;(h>o||k>m)&&h>n&&k>p;)j-=10,g.aspectRatio?(h=Math.round((j-i)*l+i),h<n&&(h=n,j=(h-i)/l+i)):h-=10,d.width(h-i).height(j-i),b.width(h),k=b.height();g.dim={width:h,height:k};g.canGrow=g.autoSize&&j>p&&j<m;g.canShrink=!1;g.canExpand=!1;if(h-i<g.width||j-i<g.height)g.canExpand=!0;else if((h>f.w||k>f.h)&&h>n&&j>p)g.canShrink=!0;b=k-i;a.innerSpace=b-d.height();a.outerSpace=b-c.height()},_getPosition:function(b){var c=a.current,d=a.getViewport(),e=c.margin,f=a.wrap.width()+e[1]+e[3],k=a.wrap.height()+e[0]+e[2],i={position:"absolute",top:e[0]+d.y,left:e[3]+d.x};if(c.fixed&&(!b||!1===b[0])&&k<=d.h&&f<=d.w)i={position:"fixed",top:e[0],left:e[3]};i.top=Math.ceil(Math.max(i.top,i.top+(d.h-k)*c.topRatio))+"px";i.left=Math.ceil(Math.max(i.left,i.left+0.5*(d.w-f)))+"px";return i},_afterZoomIn:function(){var b=a.current;a.isOpen=a.isOpened=!0;a.wrap.addClass("fancybox-opened").css("overflow","visible");a.update();a.inner.css("overflow","auto"===b.scrolling?"auto":"yes"===b.scrolling?"scroll":"hidden");if(b.closeClick||b.nextClick)a.inner.css("cursor","pointer").bind("click.fb",b.nextClick?a.next:a.close);b.closeBtn&&e(b.tpl.closeBtn).appendTo(a.wrap).bind("click.fb",a.close);b.arrows&&1<a.group.length&&((b.loop||0<b.index)&&e(b.tpl.prev).appendTo(a.wrap).bind("click.fb",a.prev),(b.loop||b.index<a.group.length-1)&&e(b.tpl.next).appendTo(a.wrap).bind("click.fb",a.next));a.trigger("afterShow");if(a.opts.autoPlay&&!a.player.isActive)a.opts.autoPlay=!1,a.play()},_afterZoomOut:function(){a.trigger("afterClose");a.wrap.trigger("onReset").remove();e.extend(a,{group:{},opts:{},current:null,isOpened:!1,isOpen:!1,wrap:null,outer:null,inner:null})}});a.transitions={getOrigPosition:function(){var b=a.current.element,c={},d=50,g=50,f;b&&b.nodeName&&e(b).is(":visible")?(f=e(b).find("img:first"),f.length?(c=f.offset(),d=f.outerWidth(),g=f.outerHeight()):c=e(b).offset()):(b=a.getViewport(),c.top=b.y+0.5*(b.h-g),c.left=b.x+0.5*(b.w-d));return c={top:Math.ceil(c.top)+"px",left:Math.ceil(c.left)+"px",width:Math.ceil(d)+"px",height:Math.ceil(g)+"px"}},step:function(b,c){var d,e,f;if("width"===c.prop||"height"===c.prop)e=f=Math.ceil(b-2*a.current.padding),"height"===c.prop&&(d=(b-c.start)/(c.end-c.start),c.start>c.end&&(d=1-d),e-=a.innerSpace*d,f-=a.outerSpace*d),a.inner[c.prop](e),a.outer[c.prop](f)},zoomIn:function(){var b=a.wrap,c=a.current,d,g;d=c.dim;if("elastic"===c.openEffect){g=e.extend({},d,a._getPosition(!0));delete g.position;d=this.getOrigPosition();if(c.openOpacity)d.opacity=0,g.opacity=1;b.css(d).show().animate(g,{duration:c.openSpeed,easing:c.openEasing,step:this.step,complete:a._afterZoomIn})}else b.css(e.extend({},d,a._getPosition())),"fade"===c.openEffect?b.fadeIn(c.openSpeed,a._afterZoomIn):(b.show(),a._afterZoomIn())},zoomOut:function(){var b=a.wrap,c=a.current,d;if("elastic"===c.closeEffect){"fixed"===b.css("position")&&b.css(a._getPosition(!0));d=this.getOrigPosition();if(c.closeOpacity)d.opacity=0;b.animate(d,{duration:c.closeSpeed,easing:c.closeEasing,step:this.step,complete:a._afterZoomOut})}else b.fadeOut("fade"===c.closeEffect?c.closeSpeed:0,a._afterZoomOut)},changeIn:function(){var b=a.wrap,c=a.current,d;"elastic"===c.nextEffect?(d=a._getPosition(!0),d.opacity=0,d.top=parseInt(d.top,10)-200+"px",b.css(d).show().animate({opacity:1,top:"+=200px"},{duration:c.nextSpeed,complete:a._afterZoomIn})):(b.css(a._getPosition()),"fade"===c.nextEffect?b.hide().fadeIn(c.nextSpeed,a._afterZoomIn):(b.show(),a._afterZoomIn()))},changeOut:function(){var b=a.wrap,c=a.current,d=function(){e(this).trigger("onReset").remove()};b.removeClass("fancybox-opened");"elastic"===c.prevEffect?b.animate({opacity:0,top:"+=200px"},{duration:c.prevSpeed,complete:d}):b.fadeOut("fade"===c.prevEffect?c.prevSpeed:0,d)}};a.helpers.overlay={overlay:null,update:function(){var a,c;this.overlay.width(0).height(0);e.browser.msie?(a=Math.max(q.documentElement.scrollWidth,q.body.scrollWidth),c=Math.max(q.documentElement.offsetWidth,q.body.offsetWidth),a=a<c?l.width():a):a=r.width();this.overlay.width(a).height(r.height())},beforeShow:function(b){if(!this.overlay)this.overlay=e('<div id="fancybox-overlay"></div>').css(b.css||{background:"black"}).appendTo("body"),this.update(),b.closeClick&&this.overlay.bind("click.fb",a.close),l.bind("resize.fb",e.proxy(this.update,this)),this.overlay.fadeTo(b.speedIn||"fast",b.opacity||1)},onUpdate:function(){this.update()},afterClose:function(a){this.overlay&&this.overlay.fadeOut(a.speedOut||"fast",function(){e(this).remove()});this.overlay=null}};a.helpers.title={beforeShow:function(b){var c;if(c=a.current.title)c=e('<div class="fancybox-title fancybox-title-'+b.type+'-wrap">'+c+"</div>").appendTo("body"),"float"===b.type&&(c.width(c.width()),c.wrapInner('<span class="child"></span>'),a.current.margin[2]+=Math.abs(parseInt(c.css("margin-bottom"),10))),c.appendTo("over"===b.type?a.inner:"outside"===b.type?a.wrap:a.outer)}};e.fn.fancybox=function(b){function c(b){var c=[],i,h=this.rel;if(!b.ctrlKey&&!b.altKey&&!b.shiftKey&&!b.metaKey)b.preventDefault(),b=e(this).data("fancybox-group"),"undefined"!==typeof b?i=b?"data-fancybox-group":!1:h&&""!==h&&"nofollow"!==h&&(b=h,i="rel"),i&&(c=g.length?e(g).filter("["+i+'="'+b+'"]'):e("["+i+'="'+b+'"]')),c.length?(d.index=c.index(this),a.open(c.get(),d)):a.open(this,d)}var d=b||{},g=this.selector||"";g?r.undelegate(g,"click.fb-start").delegate(g,"click.fb-start",c):e(this).unbind("click.fb-start").bind("click.fb-start",c);return this}})(window,document,jQuery);(function($){var F=$.fancybox;F.helpers.buttons={tpl:'<div id="fancybox-buttons"><ul><li><a class="btnPrev" title="Previous" href="javascript:;"></a></li><li><a class="btnPlay" title="Start slideshow" href="javascript:;"></a></li><li><a class="btnNext" title="Next" href="javascript:;"></a></li><li><a class="btnToggle" title="Toggle size" href="javascript:;"></a></li><li><a class="btnClose" title="Close" href="javascript:jQuery.fancybox.close();"></a></li></ul></div>',list:null,buttons:{},update:function(){var toggle=this.buttons.toggle.removeClass('btnDisabled btnToggleOn');if(F.current.canShrink){toggle.addClass('btnToggleOn')}else if(!F.current.canExpand){toggle.addClass('btnDisabled')}},beforeLoad:function(opts){if(F.group.length<2){F.coming.helpers.buttons=false;F.coming.closeBtn=true;return}F.coming.margin[opts.position==='bottom'?2:0]+=30},onPlayStart:function(){if(this.list){this.buttons.play.attr('title','Pause slideshow').addClass('btnPlayOn')}},onPlayEnd:function(){if(this.list){this.buttons.play.attr('title','Start slideshow').removeClass('btnPlayOn')}},afterShow:function(opts){var buttons;if(!this.list){this.list=$(opts.tpl||this.tpl).addClass(opts.position||'top').appendTo('body');this.buttons={prev:this.list.find('.btnPrev').click(F.prev),next:this.list.find('.btnNext').click(F.next),play:this.list.find('.btnPlay').click(F.play),toggle:this.list.find('.btnToggle').click(F.toggle)}}buttons=this.buttons;if(F.current.index>0||F.current.loop){buttons.prev.removeClass('btnDisabled')}else{buttons.prev.addClass('btnDisabled')}if(F.current.loop||F.current.index<F.group.length-1){buttons.next.removeClass('btnDisabled');buttons.play.removeClass('btnDisabled')}else{buttons.next.addClass('btnDisabled');buttons.play.addClass('btnDisabled')}this.update()},onUpdate:function(){this.update()},beforeClose:function(){if(this.list){this.list.remove()}this.list=null;this.buttons={}}}}(jQuery));(function(d){function e(a){var b=a||window.event,c=[].slice.call(arguments,1),f=0,e=0,g=0,a=d.event.fix(b);a.type="mousewheel";b.wheelDelta&&(f=b.wheelDelta/120);b.detail&&(f=-b.detail/3);g=f;b.axis!==void 0&&b.axis===b.HORIZONTAL_AXIS&&(g=0,e=-1*f);b.wheelDeltaY!==void 0&&(g=b.wheelDeltaY/120);b.wheelDeltaX!==void 0&&(e=-1*b.wheelDeltaX/120);c.unshift(a,f,e,g);return(d.event.dispatch||d.event.handle).apply(this,c)}var c=["DOMMouseScroll","mousewheel"];if(d.event.fixHooks)for(var h=c.length;h;)d.event.fixHooks[c[--h]]=d.event.mouseHooks;d.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=c.length;a;)this.addEventListener(c[--a],e,false);else this.onmousewheel=e},teardown:function(){if(this.removeEventListener)for(var a=c.length;a;)this.removeEventListener(c[--a],e,false);else this.onmousewheel=null}};d.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);var CopyrightNoticeEn='Copyright ©  by FmVi. All Rights Reserved. Use, modification, and/or distribution of this script is not allowed without direct permission from baivong (gialangsangai2000@yahoo.com). This entire copyright notice must remain in the original, copied, or modified script';var CopyrightNoticeVi='Bản quyền © FmVi. Giữ toàn quyền. Việc sử dụng, sửa đổi , và / hoặc phân phối mã này mà không được phép trực tiếp từ baivong (gialangsangai2000@yahoo.com) là không được phép. Toàn bộ thông báo bản quyền này phải được giữ nguyên khi sao chép, hoặc sửa đổi';$("img[src*='imageshack.us']").each(function(){$(this).replaceWith('<img src="http://a.'+$(this).attr("src").slice($(this).attr("src").indexOf("imageshack"))+'"/>')});$("a[href*='imageshack.us']").each(function(){var linkech='http://a.'+$(this).attr("href").slice($(this).attr("href").indexOf("imageshack"));$(this).replaceWith('<a href="'+linkech+'">'+linkech+'

Unknown end tag for &lt;/a&gt;

')});$('img').error(function(){$(this).replaceWith('<img src="http://i46.servimg.com/u/f46/14/06/29/94/error10.png" alt="Image Error" />')});$(".entry-content a[href$='.jpeg'], .entry-content a[href$='.bmp'], .entry-content a[href$='.jpg'], .entry-content a[href$='.png'], .entry-content a[href$='.gif']").addClass("fancyimg-fmvi");fancydata();fancyImg();$(window).load(function(){$(".entry-content").find("img").not("img[src*='imgfast.net/users']").each(function(){if(($(this).attr("class")!="not-fancyImg")&&($(this).attr("src")!="http://i48.servimg.com/u/f48/16/58/89/73/errorf10.jpg")&&($(this).attr("src")!="http://i48.servimg.com/u/f48/16/58/89/73/flag_r10.png")){var imgfancy=$(this).attr("src");$(this).replaceWith('<a title="Click để xem kích thước thật" alt="www.lytrada.com" class="fancyimg-fmvi" href="'+imgfancy+'"><img src="'+imgfancy+'" />

Unknown end tag for &lt;/a&gt;

')}});fancydata();fancyImg()});function fancydata(){$(".post").each(function(index){$(this).find(".fancyimg-fmvi").attr("data-fancybox-group","FMvi-img"+index)})}function fancyImg(){$(".fancyimg-fmvi").fancybox({prevEffect:'fade',nextEffect:'fade',closeBtn:false,helpers:{title:{type:'inline'},buttons:{}}})}$("a[href^='http://www.youtube'][href*='v=']").each(function(){var linkytb=$(this);var ax=linkytb.attr("href").slice(linkytb.attr("href").indexOf("v=")+2,linkytb.attr("href").indexOf("v=")+13);if(linkytb.attr("href").indexOf("list=")!=-1){var ay=linkytb.attr("href").slice(linkytb.attr("href").indexOf("list=")+5)+"&";var by=ay.slice(0,ay.indexOf("&"));linkytb.replaceWith('<p align="center"><a style="position: relative" class="fancy-ytbFmvi fancybox.iframe" href="http://www.youtube.com/embed/videoseries?list='+by+'&amp;hl=vi_VN&autoplay=1"><img class="not-fancyImg" src="http://i1.ytimg.com/vi/'+ax+'/0.jpg" /><span class="iconPlayer">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/p&gt;

')}else{linkytb.replaceWith('<p align="center"><a style="position: relative" class="fancy-ytbFmvi fancybox.iframe" href="http://www.youtube.com/v/'+ax+'&amp;hl=vi_VN&autoplay=1"><img class="not-fancyImg" src="http://i1.ytimg.com/vi/'+ax+'/0.jpg" /><span class="iconPlayer">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/p&gt;

')}});$(".fancy-ytbFmvi").fancybox({width:640,height:390,fitToView:false,autoSize:false,closeClick:false,openEffect:'none',closeEffect:'none'});if($("#pun-navlinks #i_icon_mini_new_message").length!=0){var tinmoi=$("#pun-navlinks #i_icon_mini_new_message").attr("alt").match(/[0-9]+/);$.fancybox('<div id="FMvi-pm" style="width: 220px;text-align: center"><a href="/privmsg?folder=inbox"><img style="cursor:pointer" width="154" height="178" onmouseout="this.src=\'http://i48.servimg.com/u/f48/16/58/89/73/e-mail11.png\'" src="http://i48.servimg.com/u/f48/16/58/89/73/e-mail11.png" onmouseover="this.src=\'http://i48.servimg.com/u/f48/16/58/89/73/email_11.png\'" />

Unknown end tag for &lt;/a&gt;

<p style="padding-top: 10px" class="closeWIndowF">Bạn có <font color="blue">'+tinmoi+'

Unknown end tag for &lt;/font&gt;

 tin nhắn mới

Unknown end tag for &lt;/p&gt;



Unknown end tag for &lt;/div&gt;

')}```