Đoạn Script dưới đây dùng cookie để đếm thời gian truy cập diễn đàn. Bạn có thể xem thêm hướng dẫn về cookie trong Forumotion tại đây.

```

<script>
$(function(){
var timeloginfmvi = Math.floor((new Date()).getTime() / 1000);
if (my_getcookie("fmvitimelogin") == null) {
my_setcookie("fmvitimelogin", timeloginfmvi, true, "/h63-kiem-tra-thoi-gian-truy-cap");
alert("Chào mừng bạn đến với diễn đàn FMvi.Org");
} else if (my_getcookie("fmvitimelogin") != null) {
alert("Bạn đã truy cập diễn đàn trong "+Number(timeloginfmvi - my_getcookie("fmvitimelogin"))+" giây");
};
});


Unknown end tag for &lt;/script&gt;



```

Phát triển: Bạn có thể dùng Script trên để tạo các lệnh theo thời gian truy cập như lời nhắn theo thời gian hoặc chặn truy cập của khách sau một khoảng thời gian nào đó.

Code ví dụ:

```

<script>
$(function() {
if ($("#i_icon_mini_logout").length == 0) {
var timeloginfmvi = Math.floor((new Date()).getTime() / 1000);
if (my_getcookie("fmvitimelogin") == "null") {
my_setcookie("fmvitimelogin", timeloginfmvi, true, "/h63-kiem-tra-thoi-gian-truy-cap");
alert("Chào mừng bạn đến với diễn đàn FMvi.Org");
} else if (my_getcookie("fmvitimelogin") != "null") {
var numtimelogin = (timeloginfmvi - my_getcookie("fmvitimelogin"));
alert("Bạn đã truy cập diễn đàn trong " + numtimelogin + " giây");
if (numtimelogin >= 60) {
alert("Bạn đã truy cập diễn đàn quá thời gian cho phép. Vui lòng đăng nhập hoặc đăng ký.");
self.location = "http://www.fmvi.org/login";
};
};
} else {
my_setcookie("fmvitimelogin", "null", true, "/h63-kiem-tra-thoi-gian-truy-cap");
};
});


Unknown end tag for &lt;/script&gt;




```

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" dir="ltr" id="min-width" lang="en" xml:lang="en"   ><head><title>Kiểm tra thời gian truy cập

Unknown end tag for &lt;/title&gt;

<meta http-equiv="content-type" content="text/html; charset=utf-8" /><meta http-equiv="content-script-type" content="text/javascript" /><meta http-equiv="content-style-type" content="text/css" /><link rel="shortcut icon" type="image/x-icon" href="http://i48.servimg.com/u/f48/16/58/89/73/minilo10.png" /><meta name="title" content="Kiểm tra thời gian truy cập" /><link rel="stylesheet" href="/12-ltr.css" type="text/css" /><!--[if lte IE 6]><style type="text/css">.post-entry .entry-content img{display: block !important}body{background-color: #FFFFFF!important}#mudimPanel,.minwidth_IE, #login_popup, #hitskin_preview{display:none!important}

Unknown end tag for &lt;/style&gt;

<![endif]--><noscript><style type="text/css">.post-entry .entry-content img{display: block !important}#left{display:none !important}.module .main-content{height: 12.3em !important}.toppost_width{width: 290px;}.recentWidth{width: 658px;}.latest_topics{overflow: hidden !important; height: 12.3em !important}.chatbox, .fmviToggle, #checktip .open{display:none}

Unknown end tag for &lt;/style&gt;



Unknown end tag for &lt;/noscript&gt;

<link rel="search" type="application/opensearchdescription+xml" href="/improvedsearch.xml" title="Vietnamese Forumotion" /><link rel="search" type="application/opensearchdescription+xml" href="http://www.board-directory.com/en/search/improvedsearch.xml" title="Search forums" /><script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;

<script src="http://illiweb.com/rsc/39/frm/lang/en.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;

<script type="text/javascript">function langEV() {if ($("html").attr("xml:lang") == "en") {return true;} else if ($("html").attr("xml:lang") == "vi") {return false;}}function change() {if (location.host == "www.fmvi.vn") {return true;} else {return false;}}

Unknown end tag for &lt;/script&gt;

<link type="text/css" rel="stylesheet" href="http://illiweb.com/rsc/39/frm/jquery/ticker/ticker.css" /><script src="http://illiweb.com/rsc/39/frm/jquery/ticker/ticker.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;

<script type="text/javascript">//<![CDATA[
$(document).ready(function(){ticker_start(22, 200, 50, 'left', 0);});//]]>

Unknown end tag for &lt;/script&gt;

<script src="/99829.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;

  <script type="text/javascript">//<![CDATA[
var _gaq = _gaq || [];_gaq.push(["_setAccount", "UA-26966514-1"]);_gaq.push(["_trackPageview"]);(function() {var ga = document.createElement("script"); ga.type = "text/javascript"; ga.async = true;ga.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ga, s);})();//]]>

Unknown end tag for &lt;/script&gt;



Unknown end tag for &lt;/head&gt;

<body><!--[if lte IE 6]><div style="left: 50%; z-index: 9999; width: 500px; background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); top: 50%; position: absolute; padding: 10px; margin-left: -255px; text-align: justify; margin-top: -140px;"><img src="http://i48.servimg.com/u/f48/16/58/89/73/chanie10.jpg" alt="block-IE6" style="float: left;padding-right:20px" /><p><br /><strong>Diễn đàn <font color="red">www.FMvi.vn

Unknown end tag for &lt;/font&gt;

 không hỗ trợ Internet Explorer 6.

Unknown end tag for &lt;/strong&gt;

<br /><br />Nếu bạn vẫn muốn tham gia diễn đàn, hãy sử dụng trình duyệt khác, nhanh hơn và bảo mật tốt hơn như:<br /><br />☆ <a href='http://www.google.com/chrome'> Chrome

Unknown end tag for &lt;/a&gt;

<br />☆ <a href='http://www.mozilla.com/'> Firefox

Unknown end tag for &lt;/a&gt;

<br />☆ <a href='http://www.opera.com/download/'> Opera

Unknown end tag for &lt;/a&gt;

<br />☆ <a href='http://www.apple.com/safari/download/'> Safari

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/p&gt;



Unknown end tag for &lt;/div&gt;

<![endif]--><a id="top" name="top" accesskey="t">

Unknown end tag for &lt;/a&gt;

<div class="minwidth_IE"><div class="layout_IE"><div class="container_IE"><div class="pun">                                  <div id="pun-intro" class="clearfix"><a style="top: 50px;" class="toplinkfmvi bookma10" href="javascript:if(document.all)window.external.AddFavorite(location.href,document.title); else if(window.sidebar)window.sidebar.addPanel (document.title,location.href,'');">

Unknown end tag for &lt;/a&gt;

<a style="top: 25px;" class="toplinkfmvi rss10" href="/rss">

Unknown end tag for &lt;/a&gt;

<a href="/forum" id="pun-logo"><img src="http://i48.servimg.com/u/f48/16/58/89/73/logofm12.png" alt="Vietnamese Forumotion" />

Unknown end tag for &lt;/a&gt;

<div id="pun-title">Vietnamese Forumotion

Unknown end tag for &lt;/div&gt;

<p id="pun-desc">Hướng dẫn - Chia sẻ - Phát triển ứng dụng cho forumotion

Unknown end tag for &lt;/p&gt;



Unknown end tag for &lt;/div&gt;

<div class="navbar" id="navbar"><ul class="navtabs floatcontainer" id="navtabs"><li><a accesskey="2" href="/" class="navtab">Trang chủ

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a href="/forum" class="navtab">Diễn đàn

Unknown end tag for &lt;/a&gt;

<ul class="floatcontainer"><li><a class="mainmenu" href="/forum"><img id="i_icon_mini_index" src="http://illiweb.com/fa/empty.gif" border="0"  hspace="2" alt="Home" title="Home" />Home

Unknown end tag for &lt;/a&gt;

 &nbsp;

Unknown end tag for &lt;/li&gt;

<li><a class="mainmenu" href="/"><img id="i_icon_mini_portal" src="http://illiweb.com/fa/empty.gif" border="0"  hspace="2" alt="portal" title="portal" />portal

Unknown end tag for &lt;/a&gt;

 &nbsp;

Unknown end tag for &lt;/li&gt;

<li><a class="mainmenu" href="/calendar"><img id="i_icon_mini_calendar" src="http://illiweb.com/fa/empty.gif" border="0"  hspace="2" alt="Calendar" title="Calendar" />Calendar

Unknown end tag for &lt;/a&gt;

 &nbsp;

Unknown end tag for &lt;/li&gt;

<li><a class="mainmenu" href="/faq"><img id="i_icon_mini_faq" src="http://illiweb.com/fa/empty.gif" border="0"  hspace="2" alt="FAQ" title="FAQ" />FAQ

Unknown end tag for &lt;/a&gt;

 &nbsp;

Unknown end tag for &lt;/li&gt;

<li><a class="mainmenu" href="/search" onclick="showhide(document.getElementById('search_menu')); return false;"><img id="i_icon_mini_search" src="http://illiweb.com/fa/empty.gif" border="0"  hspace="2" alt="Search" title="Search" />Search

Unknown end tag for &lt;/a&gt;

 &nbsp;<script type="text/javascript">//<![CDATA[
var url_search = '/search';
insert_search_menu_new();//]]>


Unknown end tag for &lt;/script&gt;



Unknown end tag for &lt;/li&gt;

<li><a class="mainmenu" href="/memberlist" rel="nofollow"><img id="i_icon_mini_members" src="http://illiweb.com/fa/empty.gif" border="0"  hspace="2" alt="Memberlist" title="Memberlist" />Memberlist

Unknown end tag for &lt;/a&gt;

 &nbsp;

Unknown end tag for &lt;/li&gt;

<li><a class="mainmenu" href="/groups"><img id="i_icon_mini_groups" src="http://illiweb.com/fa/empty.gif" border="0"  hspace="2" alt="Usergroups" title="Usergroups" />Usergroups

Unknown end tag for &lt;/a&gt;

 &nbsp;

Unknown end tag for &lt;/li&gt;

<li><a class="mainmenu" href="/profile?mode=editprofile"><img id="i_icon_mini_profile" src="http://illiweb.com/fa/empty.gif" border="0"  hspace="2" alt="Profile" title="Profile" />Profile

Unknown end tag for &lt;/a&gt;

 &nbsp;

Unknown end tag for &lt;/li&gt;

<li><a class="mainmenu" href="/privmsg?folder=inbox"><img id="i_icon_mini_message" src="http://illiweb.com/fa/empty.gif" border="0"  hspace="2" alt="You have no new messages" title="You have no new messages" />You have no new messages

Unknown end tag for &lt;/a&gt;

 &nbsp;

Unknown end tag for &lt;/li&gt;

<li><a class="mainmenu" href="/login?logout=1&amp;tid=a4c0542122e6b3a6752fe1c6273d53c4&amp;key=af878b" rel="nofollow" id="logout" ><img id="i_icon_mini_logout" src="http://illiweb.com/fa/empty.gif" border="0"  hspace="2" alt="Log out [ Mr.Tear ]" title="Log out [ Mr.Tear ]" />Log out [ Mr.Tear ]

Unknown end tag for &lt;/a&gt;

 &nbsp;

Unknown end tag for &lt;/li&gt;



Unknown end tag for &lt;/ul&gt;



Unknown end tag for &lt;/li&gt;

<li><a class="navtab" href="/search?search_id=activetopics" accesskey="3" original-title="">Có gì mới?

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;



Unknown end tag for &lt;/ul&gt;

<div class="globalsearch" id="globalsearch"><form class="navbar_search" id="navbar_search" method="get" action="/search"><input type="hidden" value="searchbox" name="mode" /><input type="hidden" type="radio" value="posts" name="show_results" id="rposts" /><input type="hidden" type="radio" checked="checked" value="topics" name="show_results" id="rtopics" /><span class="textboxcontainer"><span><input type="text" name="search_keywords" tabindex="99" class="textbox" name="search_keywords" />

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;

<span class="buttoncontainer"><span><input type="image" tabindex="100" name="submit" src="http://i47.servimg.com/u/f47/17/47/88/95/search10.png" class="searchbutton" />

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/form&gt;

<ul class="navbar_advanced_search"><li><a accesskey="4" href="/search">Tìm chi tiết

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;



Unknown end tag for &lt;/ul&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<script type="text/javascript">$("a.navtab[href='" + location.pathname + location.search + "']").parent("li").addClass("selected");$("a.mainmenu[href='" + location.pathname + location.search + "']").parent("li").addClass("selectF");$("a.mainmenu[href='/'],a.mainmenu[href='/forum'],a.mainmenu[href='/privmsg?folder=inbox'],a.mainmenu[href='/search']").parent().hide();

Unknown end tag for &lt;/script&gt;

<div id="page-body"><div id="content-container" class="no-left"><div id="outer-wrapper"><div id="wrapper"><div id="container"><div id="content">                       <div class="boxfmvi main" style="margin: 1em 0;"><div class="navFMvi main-box"><p><a class="navbit10" onclick="history.back(1); return false;" href="#">

Unknown end tag for &lt;/a&gt;

&nbsp;<a href="/forum">Vietnamese Forumotion

Unknown end tag for &lt;/a&gt;

&nbsp;

Unknown end tag for &lt;/p&gt;

<p style="color: #3A3A3A; font-weight: bold"><span class="navbit12">

Unknown end tag for &lt;/span&gt;

&nbsp;Kiểm tra thời gian truy cập

Unknown end tag for &lt;/p&gt;

<div id="loginFancy" class="main-box"><span class="logi"><p style="color:red">Logged in as <strong>Mr.Tear

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/p&gt;

<p style="color:green">Your last visit was on Wed Nov 14, 2012 1:46 pm

Unknown end tag for &lt;/p&gt;

<p style="color:blue">Current date/time is Wed Nov 14, 2012 4:20 pm

Unknown end tag for &lt;/p&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div id="fa_ticker_block" style="padding-top:4px;"><div class="module main"><div class="main-content clearfix"><div id="fa_ticker_container"><div id="fa_ticker" style="height:22px;"><div class="fa_ticker_content"><div><span style="display:none" id="userID"><a href="http://www.fmvi.vn/profile.forum?mode=viewprofile&amp;u=658">Mr.Tear

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;






Unknown end tag for &lt;/div&gt;

<div><a href="http://www.fmvi.vn/t564-share-skin-fmvi-ver2#4533">Tặng bộ skin <strong><font color="green">FM

Unknown end tag for &lt;/font&gt;

<font color="red">vi

Unknown end tag for &lt;/font&gt;

 ver.2<strong> đến tất cả thành viên. 

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/div&gt;

<div><a href="http://www.fmvi.vn/t691-thong-bao-ang-ky-trao-oi-text-link-thang-6-2012#5884">Nhận đơn đăng ký trao đổi text link <font color="red"><strong>tháng 6/2012

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/div&gt;

<div><a href="http://www.fmvi.vn/t524-thong-bao-ia-chi-yahoo-cua-admin-fmvi-group#3669">Thay đổi địa chỉ <font color="green"> yahoo

Unknown end tag for &lt;/font&gt;

 hỗ trợ forumotion: <strong><font color="red">baivong@ymail.com

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/div&gt;

<div><font color="red"><strong><a href="http://www.fmvi.vn/profile.forum?mode=viewprofile&amp;u=658">Mr.Tear

Unknown end tag for &lt;/a&gt;

 hãy<a href="http://www.fmvi.vn/t672-thong-bao-kiem-duyet-thong-tin-thanh-vien-ang-ky#5664"> click vào đây

Unknown end tag for &lt;/a&gt;

 nếu không muốn bị ban nick!

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<span style="display:none" id="numID">

Unknown end tag for &lt;/span&gt;

<script type="text/javascript">$("#numID").text($("#userID a").attr("href").match(/[0-9]+/g))

Unknown end tag for &lt;/script&gt;

<div id="main"><div id="main-content"><div class="module main module-advert" style="overflow:visible"><div class="main-content" style="padding:0"><div class="s0ee9f4" ><iframe frameborder="0" marginwidth="0" marginheight="0" scrolling="no" width="728" height="90" src="http://ad.z5x.net/st?ad_type=iframe&ad_size=728x90&section=1649904">

Unknown end tag for &lt;/iframe&gt;

<br class="clear" />

Unknown end tag for &lt;/div&gt;

<div style="clear:both;">

Unknown end tag for &lt;/div&gt;

<style type="text/css">html body .s0ee9f4,html body .s0ee9f4 iframe,html body iframe[name="google_ads_frame"],html body .s0ee9f4 iframe[name="google_ads_frame"],html body #wrap #page-body div.s0ee9f4,html body #page-body .s0ee9f4{display:block!important;visibility:visible!important;float:none!important;position:inherit!important;left:inherit!important;top:inherit!important;right:inherit!important;bottom:inherit!important;margin:0 auto!important;padding:inherit!important;filter:alpha(opacity=100)!important;-moz-opacity:1!important;-khtml-opacity:1!important;opacity:1!important;z-index:9999!important;text-align:center!important}html body .s0ee9f4,html body .s0ee9f4 iframe[name="google_ads_frame"]{width:728px!important;height:90px!important;min-height:90px!important}html body .s0ee9f4 iframe{border:0px!important}html body iframe[name="google_ads_frame"]{width:100%!important;height:inherit!important;min-height:inherit!important}

Unknown end tag for &lt;/style&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div style="height:3px">

Unknown end tag for &lt;/div&gt;

<script>
$(function() {
if ($("#i_icon_mini_logout").length == 0) {
var timeloginfmvi = Math.floor((new Date()).getTime() / 1000);
if (my_getcookie("fmvitimelogin") == "null") {
my_setcookie("fmvitimelogin", timeloginfmvi, true, "/h63-kiem-tra-thoi-gian-truy-cap");
alert("Chào mừng bạn đến với diễn đàn FMvi.Org");
} else if (my_getcookie("fmvitimelogin") != "null") {
var numtimelogin = (timeloginfmvi - my_getcookie("fmvitimelogin"));
alert("Bạn đã truy cập diễn đàn trong " + numtimelogin + " giây");
if (numtimelogin >= 60) {
alert("Bạn đã truy cập diễn đàn quá thời gian cho phép. Vui lòng đăng nhập hoặc đăng ký.");
self.location = "http://www.fmvi.org/login";
};
};
} else {
my_setcookie("fmvitimelogin", "null", true, "/h63-kiem-tra-thoi-gian-truy-cap");
};
});


Unknown end tag for &lt;/script&gt;

<div id="add-google-bottom" style="clear:both;"><div align="center"><script language="JavaScript">var zflag_nid="1070"; var zflag_cid="551"; var zflag_sid="147"; var zflag_width="1"; var zflag_height="1"; var zflag_sz="16"; var zflag_charset="utf-8";

Unknown end tag for &lt;/script&gt;

<script language="JavaScript" src="http://d2.zedo.com/jsc/d2/fo.js">

Unknown end tag for &lt;/script&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div style="height:3px">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div id="right"><div class="module main"><div class="main-head"><div class="h3">Keywords

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div class="main-content"><p class="center"><a href="/s/phpBB2" style="font-size: 15.5px; !important">phpBB2

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/Chatbox" style="font-size: 19px; !important">Chatbox

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/punBB" style="font-size: 20.5px; !important">punBB

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/dung" style="font-size: 18.5px; !important">dung

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/thanh" style="font-size: 15px; !important">thanh

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/Khảo" style="font-size: 9.5px; !important">Khảo

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/BBcode" style="font-size: 11px; !important">BBcode

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/trang" style="font-size: 14.5px; !important">trang

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/viên" style="font-size: 13px; !important">viên

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/viết" style="font-size: 20px; !important">viết

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/Show" style="font-size: 9px; !important">Show

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/Forumotion" style="font-size: 11.5px; !important">Forumotion

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/FMvi" style="font-size: 21px; !important">FMvi

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/chuyen" style="font-size: 12.5px; !important">chuyen

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/Share" style="font-size: 16px; !important">Share

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/chức" style="font-size: 10px; !important">chức

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/code" style="font-size: 17.5px; !important">code

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/triển" style="font-size: 8.5px; !important">triển

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/Danh" style="font-size: 18px; !important">Danh

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/hướng" style="font-size: 13.5px; !important">hướng

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/Thông" style="font-size: 16.5px; !important">Thông

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/trong" style="font-size: 10.5px; !important">trong

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/năng" style="font-size: 14px; !important">năng

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/đăng" style="font-size: 12px; !important">đăng

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/phát" style="font-size: 17px; !important">phát

Unknown end tag for &lt;/a&gt;

 &nbsp;<a href="/s/skin" style="font-size: 19.5px; !important">skin

Unknown end tag for &lt;/a&gt;

 &nbsp;

Unknown end tag for &lt;/p&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div style="height:4px">

Unknown end tag for &lt;/div&gt;

<div style="display:none" id="myAvatar" class="module main"><div class="main-content clearfix details"><div class="avatarUn fmvichange"><span class="changeatvar" onclick="avatarfmvi(prompt('Nh\u1eadp URL h\u00ecnh \u1ea3nh v\u00e0o \u0111\u00e2y!\nCh\u1ea5p nh\u1eadn c\u00e1c \u0111\u1ecbnh d\u1ea1ng jpg, jpeg, gif, png, bmp', ''),$('#numID').text(),$('#userID').text())">Thay avatar

Unknown end tag for &lt;/span&gt;

<a href="/profile?mode=editprofile" alt="avatar"><img src="http://r12.imgfast.net/users/1215/11/75/00/avatars/658-22.jpg" alt="" />

Unknown end tag for &lt;/a&gt;

<div class="titleUn"><p><a id="linkbai"><strong>Bài viết: 

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/a&gt;

<span id="myPost" style="color: #00729F;">0

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/p&gt;

<p><a href="/privmsg?folder=inbox"><strong>Tin nhắn: 

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/a&gt;

<span style="color: red">0

Unknown end tag for &lt;/span&gt;

 / <span style="color: green">1

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/p&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div style="height:4px">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div id="pun-foot"><div id="pun-about" class="clearfix"><form style="display:none" action="/viewforum" method="get" name="jumpbox" onsubmit="if(document.jumpbox.f.value == -1){return false;}" id="qjump"><fieldset style="float:left"><select name="selected_id" onchange="if(this.options[this.selectedIndex].value != -1){ forms['jumpbox'].submit() }"><option value="-1">Select a forum

Unknown end tag for &lt;/option&gt;

<option value="-1">

Unknown end tag for &lt;/option&gt;

<option value="-1">|

Unknown end tag for &lt;/option&gt;

<option fix="vrai" value="c1">|--Mục Chính

Unknown end tag for &lt;/option&gt;

<option fix="vrai" value="c9">|&nbsp;&nbsp;&nbsp;|--Thông báo

Unknown end tag for &lt;/option&gt;

<option fix="vrai" value="f3">|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|--Toàn diễn đàn

Unknown end tag for &lt;/option&gt;

<option fix="vrai" value="f1">|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|--Nhóm phát triển

Unknown end tag for &lt;/option&gt;

<option value="-1">|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

Unknown end tag for &lt;/option&gt;

<option fix="vrai" value="f39">|&nbsp;&nbsp;&nbsp;|--Góp Ý

Unknown end tag for &lt;/option&gt;

<option fix="vrai" value="f40">|&nbsp;&nbsp;&nbsp;|--Sự Kiện

Unknown end tag for &lt;/option&gt;

<option fix="vrai" value="f41">|&nbsp;&nbsp;&nbsp;|--Dự án

Unknown end tag for &lt;/option&gt;

<option value="-1">|&nbsp;&nbsp;&nbsp;

Unknown end tag for &lt;/option&gt;

<option fix="vrai" value="c2">|--Nhóm FmVi

Unknown end tag for &lt;/option&gt;

<option fix="vrai" value="f42">|&nbsp;&nbsp;&nbsp;|--Mods miễn phí

Unknown end tag for &lt;/option&gt;

<option fix="vrai" value="f4">|&nbsp;&nbsp;&nbsp;|--Mods cao cấp

Unknown end tag for &lt;/option&gt;

<option fix="vrai" value="f16">|&nbsp;&nbsp;&nbsp;|--Thông tin hữu ích

Unknown end tag for &lt;/option&gt;

<option fix="vrai" value="f8">|&nbsp;&nbsp;&nbsp;|--Mẫu trang HTML

Unknown end tag for &lt;/option&gt;

<option fix="vrai" value="f21">|&nbsp;&nbsp;&nbsp;|--Phòng trưng bày

Unknown end tag for &lt;/option&gt;

<option fix="vrai" value="f24">|&nbsp;&nbsp;&nbsp;|--Phòng thí nghiệm

Unknown end tag for &lt;/option&gt;

<option fix="vrai" value="f25">|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|--Thông điệp

Unknown end tag for &lt;/option&gt;

<option fix="vrai" value="f28">|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|--Quản lý

Unknown end tag for &lt;/option&gt;

<option fix="vrai" value="f27">|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|--Video Youtube

Unknown end tag for &lt;/option&gt;

<option fix="vrai" value="f20">|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|--Hộp nhạc

Unknown end tag for &lt;/option&gt;

<option fix="vrai" value="f30">|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|--Hóa đơn

Unknown end tag for &lt;/option&gt;

<option value="-1">|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

Unknown end tag for &lt;/option&gt;

<option fix="vrai" value="f5">|&nbsp;&nbsp;&nbsp;|--Hỗ Trợ

Unknown end tag for &lt;/option&gt;

<option fix="vrai" value="f6">|&nbsp;&nbsp;&nbsp;|--Báo Cáo Lỗi

Unknown end tag for &lt;/option&gt;

<option value="-1">|&nbsp;&nbsp;&nbsp;

Unknown end tag for &lt;/option&gt;

<option fix="vrai" value="c4">|--Thành Viên

Unknown end tag for &lt;/option&gt;

<option fix="vrai" value="f7">|&nbsp;&nbsp;&nbsp;|--Đóng Góp

Unknown end tag for &lt;/option&gt;

<option fix="vrai" value="f19">|&nbsp;&nbsp;&nbsp;|--Ý Tưởng

Unknown end tag for &lt;/option&gt;

<option fix="vrai" value="f17">|&nbsp;&nbsp;&nbsp;|--Thảo luận chung

Unknown end tag for &lt;/option&gt;

<option fix="vrai" value="f35">|&nbsp;&nbsp;&nbsp;|--Tự giới thiệu

Unknown end tag for &lt;/option&gt;

<option fix="vrai" value="f33">|&nbsp;&nbsp;&nbsp;|--Thư giãn

Unknown end tag for &lt;/option&gt;

<option value="-1">|&nbsp;&nbsp;&nbsp;

Unknown end tag for &lt;/option&gt;

<option fix="vrai" value="c6">|--Linh Tinh

Unknown end tag for &lt;/option&gt;

<option fix="vrai" value="c5">&nbsp;&nbsp;&nbsp;&nbsp;|--Thiết kế ảnh

Unknown end tag for &lt;/option&gt;

<option fix="vrai" value="f43">&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|--Trao Đổi & Góp Ý

Unknown end tag for &lt;/option&gt;

<option fix="vrai" value="f44">&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|--Thiết Kế

Unknown end tag for &lt;/option&gt;

<option fix="vrai" value="f45">&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|--Dự Án

Unknown end tag for &lt;/option&gt;

<option fix="vrai" value="f22">&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|--Hướng dẫn - Chia sẻ

Unknown end tag for &lt;/option&gt;

<option value="-1">&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

Unknown end tag for &lt;/option&gt;

<option fix="vrai" value="f36">&nbsp;&nbsp;&nbsp;&nbsp;|--Đánh giá diễn đàn

Unknown end tag for &lt;/option&gt;

<option fix="vrai" value="f13">&nbsp;&nbsp;&nbsp;&nbsp;|--Tố cáo bản quyền

Unknown end tag for &lt;/option&gt;

<option fix="vrai" value="f29">&nbsp;&nbsp;&nbsp;&nbsp;|--Kho Lưu Trữ

Unknown end tag for &lt;/option&gt;

<option fix="vrai" value="f2">&nbsp;&nbsp;&nbsp;&nbsp;|--Thùng Rác

Unknown end tag for &lt;/option&gt;



Unknown end tag for &lt;/select&gt;

<input type="hidden" name="tid" value="a4c0542122e6b3a6752fe1c6273d53c4" /> <input type="submit" value="Go" style="height: 24px; line-height: 24px; padding: 0pt 5px 2px ! important;" />

Unknown end tag for &lt;/fieldset&gt;



Unknown end tag for &lt;/form&gt;

<ul><li><strong><a href="http://www.forumotion.com/en/create-forum/" target="_blank">Free forum

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/strong&gt;

&nbsp;|&nbsp;<span class="gensmall">&copy;

Unknown end tag for &lt;/span&gt;

 <a href="http://www.forumotion.com/en/punbb/" target="_blank">PunBB

Unknown end tag for &lt;/a&gt;

&nbsp;|&nbsp;<a name="bottom" href="http://help.forumotion.com/" target="_blank">Free forum support

Unknown end tag for &lt;/a&gt;

&nbsp;|&nbsp;<a name="bottom" href="/donate" rel="nofollow">Contribution

Unknown end tag for &lt;/a&gt;

&nbsp;|&nbsp;<a name="bottom" href="/contact" rel="nofollow">Contact

Unknown end tag for &lt;/a&gt;

&nbsp;|&nbsp;<a href="/abuse?page=%2Fh63-&amp;report=1" rel="nofollow">Report an abuse

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;



Unknown end tag for &lt;/ul&gt;

<ul><li style="text-align:left;float: left; width: 23.5%;"><p class="textfooter">text link

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

<li style="text-align:left;float: left; width: 23.5%;"><p class="textfooter">text link

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

<li><span class="gensmall">&copy; 

Unknown end tag for &lt;/span&gt;

<a target="_blank" href="http://www.forumotion.com/en/punbb/">PunBB

Unknown end tag for &lt;/a&gt;

&nbsp;|&nbsp;<a rel="nofollow" href="/abuse?page=%2F&amp;report=1">Report an abuse

Unknown end tag for &lt;/a&gt;

&nbsp;|&nbsp;<a rel="nofollow" href="/donate" name="bottom">Contribution

Unknown end tag for &lt;/a&gt;

&nbsp;|&nbsp;<a id="skinfmvi2" name="bottom" class="copyright" href="http://www.fmvi.vn" rel="nofollow" target="_blank" title="FMvi">&copy; <font color="green">FMvi

Unknown end tag for &lt;/font&gt;

 - Design by <font color="red">baivong

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/a&gt;

<iframe width="53%" scrolling="no" frameborder="0" name="MegaShare.Pro title=" free="" premium="" account"="" src="http://www.alexa.com/minisiteinfo/fmvi.vn" border="0" style="height: 85px"> 

Unknown end tag for &lt;/iframe&gt;



Unknown end tag for &lt;/li&gt;



Unknown end tag for &lt;/ul&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<script type="text/javascript">$("#linkbai").attr("href", "/spa/" + $("#userID").text());$("#myAvatar").show().appendTo("#pun-intro");$("#pun-about ul:first").remove();$("#profile-advanced-details .message-header").prepend('<img src="http://i48.servimg.com/u/f48/16/58/89/73/tip14.png" style="margin-right: 10px; margin-left: -19px;" />');

Unknown end tag for &lt;/script&gt;

<script src="/49179.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;

<a class="contactF" href="ymsgr:sendim?baivong@ymail.com" style="background:url(http://opi.yahoo.com/online?u=baivong@ymail.com&m=g&t=5) no-repeat scroll 10px center #DDD;right:217px"> Hỗ trợ 1

Unknown end tag for &lt;/a&gt;

<a class="contactF" href="ymsgr:sendim?satthugame_8_11" style="background:url(http://opi.yahoo.com/online?u=satthugame_8_11&m=g&t=5) no-repeat scroll 10px center #DDD;right:115px"> Hỗ trợ 2

Unknown end tag for &lt;/a&gt;

<a class="contactF" href="http://www.fmvi.vn/contact" style="background-color: rgb(221, 221, 221); right: 10px; padding-left: 10px; width: 85px;"><span class="contac10">

Unknown end tag for &lt;/span&gt;

 Liên hệ

Unknown end tag for &lt;/a&gt;

<a href="#top" onclick="$('html,body').animate({scrollTop: $('#top').offset().top}, 1000);return false" class="scroll10" style="bottom:5px;position:fixed;right:5px">

Unknown end tag for &lt;/a&gt;

<script type="text/javascript">//<![CDATA[
fa_endpage();//]]>

Unknown end tag for &lt;/script&gt;

<p class="center"><strong>

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/p&gt;



Unknown end tag for &lt;/body&gt;



Unknown end tag for &lt;/html&gt;

```
Demo: http://www.fmvi.org/h63-kiem-tra-thoi-gian-truy-cap (chỉ dành cho khách)