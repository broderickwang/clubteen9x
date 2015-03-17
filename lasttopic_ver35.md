![http://i40.servimg.com/u/f40/17/90/35/40/last_f10.jpg](http://i40.servimg.com/u/f40/17/90/35/40/last_f10.jpg)

đề mố : http://nguyenlamdzai.forumvi.com/


Last này của baivong viết và the\_dav edit thêm ná
Cách làm


1 . vào css thêm cái này vào :

```

.top-vi,.viewrep{padding:10px!important}#active_starters,#most_active,#pun-visit,#users_month,#users_week{display:none}.lastcate,.leftrecent,.repfmvi,.rightrecent,
.viewfmvi{overflow:hidden;position:absolute;text-overflow:ellipsis;white-space:nowrap}

.leftrecent{width:34%}.left{margin-left:-3px;width:81%}

.imgstatus{background-color:#FFF;left:-32px;padding:2px 7px;position:absolute}.rightrecent{right:250px;text-align:right;width:115px}.showpost{font-size:9px;left:-12px;line-height:18px;position:absolute}


.viewfmvi{right:185px;text-align:right;width:50px}.repfmvi{right: 129px;text-align:right;width:50px}.lastcate{margin-right:-11px;right:0;text-align:right;width:157px}#content-container div#left,#content-container div#right{border:0 none;float:none;margin:0;width:100%}*+ html #content-container div#main{margin-left:0;margin-right:0}* html #content-container #main-content{margin-left:0;margin-right:0;overflow:visible}* html #content-container div#main{float:none;margin-left:-99%;margin-right:-99%;width:100%}.latest_topics{list-style:decimal-leading-zero outside none;margin:0!important;padding:0 5px 0 27px;text-align:left}.latest_topics li{line-height:16.1px;position:relative}.toppost_width{float:left;width:200px}.recentWidth{float:left;width:595px}.recentWidth .main-head{height:1.3em;overflow:hidden;position:relative}.recentWidth h3{marign-left:10px}.loaddinng{background-image:url(http://i43.servimg.com/u/f43/16/03/04/56/black-10.gif);background-position:center center;background-repeat:no-repeat;height:350px;width:440px}#checktip{position:absolute;right:10px;top:3px;z-index:300}#numRecent{display:none;position:absolute;right:12px;top:7px}
.latest_topics li {
line-height: 16.1px;
}

/* Thá»‘ng kĂª */
.leftStats{float:left;margin-left:-71px;position:absolute;vertical-align:middle;width:60px}
.rightStats{border-left:2px solid #CFC9C9;min-height:50px;padding-left:10px;margin:5px 10px 5px 70px}
.starsTitle{background-color:#E3E3E3;border:1px solid #D6D2D2;color: white;font-family:Comic Sans MS;font-variant:small-caps;font-weight:700;height:18px;padding:5px;background: url(http://i46.servimg.com/u/f46/15/26/55/24/tcat10.png) repeat scroll 0 0 rgb(8, 137, 238);}

.loaddingLike {
background: url(http://i48.servimg.com/u/f48/16/58/89/73/loadin11.gif) no-repeat scroll center center transparent;
display: none;
height: 1.4em;
margin: -1.4em 0 -3px 200px;
width: 126px;
}
#checktip{position:absolute;right:10px;top:3px;z-index:300}
#numRecent{display:none;position:absolute;right:12px;top:7px}.chatbox_row_1:hover, .chatbox_row_2:hover {
-webkit-box-shadow: gainsboro 0px 0px 4px;
border: 1px solid #C9C9C9;
border-image: initial;
border-radius: 5px;
box-shadow: gainsboro 0px 0px 3px;
margin: 5px;
background-color: white;
}
/* Tooltip */
#tooltip .tiplFMvi{border-bottom:2px dotted #ddd;margin-bottom:5px;padding-bottom:5px}
#tooltip{background:#FFF url(http://i43.servimg.com/u/f43/16/03/04/56/white_10.png);border:1px solid #ddd;border-radius:3px;color:#000;font-family:tahoma,verdana,geneva,lucida,'lucida grande',arial,helvetica,sans-serif;font-size:11px;font-style:normal;font-variant:normal;font-weight:normal;max-width:550px;padding:10px;position:absolute;z-index:99}/* memberlist 2 in 1 */
#tooltip .header,a.mainmenu[href='/']{display:none}

```

2.Vào Index\_box tìm :```
 <div class="main">```
và thêm cái code này bên trên nó :

```


<div id="left" class="boxfmvi main" style="display: block; "><div class="main-head"><div class="page-title"><a style="margin-right: 10px;" href="javascript:vol(0)" onclick="javascript:searchtopic('/search?search_keywords=&amp;search_author=*_*', '20', '#recentnew ul')" original-title="Reload"><img src="http://i44.servimg.com/u/f44/17/54/81/09/playba10.png">

Unknown end tag for &lt;/a&gt;

<span style="color:#FFF;font-family:Trebuchet MS;font-size:17px!important;font-variant:small-caps;font-weight:600!important;text-shadow:1px 1px 1px #000">Tình hình diễn đàn

Unknown end tag for &lt;/span&gt;

<select style="float:right;clear:right" id="changeFMvi" onchange="searchtopic('/search?search_keywords=&amp;search_author=*_*&amp;search_where='+this.options[this.selectedIndex].value, '20', '#recentnew ul')"><option value="-1">Chọn Diễn Đàn

Unknown end tag for &lt;/option&gt;

<option value="-1">

Unknown end tag for &lt;/option&gt;

<option value="-1">|

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="c4">|--TRUNG TÂM ĐIỀU HÀNH

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f18">|   |--Thông Báo

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f50">|   |--Sự Kiện

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f19">|   |--Góp ý, Xây dựng

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f20">|   |--Phòng Nhân Sự

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f21">|   |--Tố cáo vi phạm/Bức xúc

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f22">|   |--Danh sách vi phạm

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f6">|   |--Liên kết - Quảng Cáo

Unknown end tag for &lt;/option&gt;

<option value="-1">|   

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="c1">|--Tài Nguyên Forumotion

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f1">|   |--Trang chủ

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f2">|   |--Kho Skin

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f28">|   |   |--Phpbb2

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f29">|   |   |--Phpbb3

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f30">|   |   |--Punbb

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f31">|   |   |--Invision

Unknown end tag for &lt;/option&gt;

<option value="-1">|   |   

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f3">|   |--Tổng hợp Codes

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f14">|   |   |--Lasttopic

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f15">|   |   |--Viewtopic_body

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f16">|   |   |--Codes

Unknown end tag for &lt;/option&gt;

<option value="-1">|   |   

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f23">|   |--Hình ảnh Forumotion

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f24">|   |   |--Rank

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f25">|   |   |--Button

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f26">|   |   |--Icon

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f27">|   |   |--Smilies

Unknown end tag for &lt;/option&gt;

<option value="-1">|   |   

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f5">|   |--Hỏi - Đáp

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f4">|   |--Yêu cầu Skin

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f7">|   |--Hướng dẫn

Unknown end tag for &lt;/option&gt;

<option value="-1">|   

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="c5">|--GÓC GIẢI TRÍ

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f32">|   |--Tổng hợp truyện

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f33">|   |   |--Truyện tranh

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f34">|   |   |--Truyện ngắn

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f35">|   |   |--Truyện cười

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f13">|   |   |--Thơ ca

Unknown end tag for &lt;/option&gt;

<option value="-1">|   |   

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f36">|   |--Vui Cười

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f37">|   |   |--Ảnh hài hước

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f38">|   |   |--Video clip hài

Unknown end tag for &lt;/option&gt;

<option value="-1">|   |   

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f39">|   |--Âm Nhạc

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f40">|   |   |--Nhạc Việt

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f41">|   |   |--Nhạc Quốc Tế

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f42">|   |   |--Nhạc DJ

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f10">|   |   |--Nhạc Hàn

Unknown end tag for &lt;/option&gt;

<option value="-1">|   |   

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f46">|   |--Phim Ảnh

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f49">|   |--Chém Gió

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f9">|   |--Ảnh HOT GIRL

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f12">|   |--Ảnh thành viên

Unknown end tag for &lt;/option&gt;

<option value="-1">|   

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="c6">|--KHU XỬ LÝ

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f47">    |--Thùng Rác

Unknown end tag for &lt;/option&gt;

<option correctif=" vrai  " value="f8">        |--Thử nghiệm

Unknown end tag for &lt;/option&gt;



Unknown end tag for &lt;/select&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;


<div class="main-content" style="height:31em; border-radius:0">
<div class="module main toppost_width" style="border: 0 none; border-radius: 0">
<div class="starsTitle"><img id="loaUser" style="display: none; float: right; margin-top: 3px;" src="http://i43.servimg.com/u/f43/16/03/04/56/13x13p10.gif" />
<fieldset style="margin-top: -0.1em">
<select style="width: 167px" onchange="searchuser(this.options[this.selectedIndex].value, '20', '#top_posters ul')">
<option value="/memberlist?mode=overall_posters">Thành viên tích cực

Unknown end tag for &lt;/option&gt;


<option value="/memberlist?mode=today_posters">Gửi bài hôm nay

Unknown end tag for &lt;/option&gt;


<option value="/memberlist?mode=joined&order=DESC">Thành viên mới

Unknown end tag for &lt;/option&gt;


<option value="/memberlist?mode=lastvisit&order=DESC">Truy cập gần đây

Unknown end tag for &lt;/option&gt;




Unknown end tag for &lt;/select&gt;




Unknown end tag for &lt;/fieldset&gt;




Unknown end tag for &lt;/div&gt;


<div id="top_posters" class="main-content" style="border: 0pt none ! important; border-radius: 0pt 0pt 0pt 0pt ! important; background-color: rgb(251, 251, 251) ! important;">
<ul class="latest_topics" style="border:0 none">
<div class="loaddinng">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<script type="text/javascript" src="http://nguyenlamdzai.forumvi.com/11402.js">

Unknown end tag for &lt;/script&gt;


<div class="module main recentWidth1" style="border-color: ##DDD; border-radius: 0">

<div class="starsTitle">Thống kê bài viết mới                                                                         Gửi Bởi         Xem     Trả lời       Mục Gửi<div id="proLastLoad" class="loaddingLike" style="display: none; ">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;




<script type="text/javascript">function searchuser(nguonU, soU, dichU) {$("#loaUser").show();$.ajax({url: nguonU,success: function (data) {$("#loaUser").hide();$("#top_posters .latest_topics").empty();$(data).find(".dataUserFmvi:lt(" + soU + ")").appendTo(dichU);$(dichU + ' .dataUserFmvi').wrap("<li>

Unknown end tag for &lt;/li&gt;

");var g;for (g = 0; g < 20; g++) {var ggg = $(dichU + " .dataUserFmvi:eq(" + g + ")>span:first");ggg.replaceWith("<span onmouseover=\"show_tooltip(this, $(this).next().html(), 'FMvi.Org')\" style=\"position: absolute; left: 0pt;\">" + ggg.html() + "

Unknown end tag for &lt;/span&gt;

")}},error: function (jqXHR, textStatus, errorThrown) {$(dichU).html('<p><font face="Courier New"><font color="red">Có lỗi xảy ra trong quá trình tải dữ liệu.

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/p&gt;

');}});}searchuser('/memberlist?mode=overall_posters', '20', '#top_posters ul');searchtopic('/search?search_keywords=&search_author=*', '20', '#recentnew ul');$("#left").fadeIn(1000);$(function(){$("#changeFMvi").html($("#jumboxFMvi select").html());});

Unknown end tag for &lt;/script&gt;




<div id="recentnew" class="main-content" style="border: 0pt none ! important; border-radius: 0pt 0pt 0pt 0pt ! important; background-color: rgb(251, 251, 251) ! important;">
<ul class="latest_topics" style="border:0 none">
<div class="loaddinng">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;


<div id="dulieupostter">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


```

3. Thay toàn bộ overall\_footer\_begin bằng code sau

Code: Chọn Code


```


<!-- BEGIN html_validation -->
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<!-- END html_validation -->


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




<div id="{ID_RIGHT}">
<!-- BEGIN giefmod_index2 -->
{giefmod_index2.MODVAR}
<!-- BEGIN saut -->
<div style="height:{SPACE_ROW}px">

Unknown end tag for &lt;/div&gt;


<!-- END saut -->
<!-- END giefmod_index2 -->
<div id="footer-links">
<div id="jumboxFMvi" style="display:none">{S_JUMPBOX_SELECT}

Unknown end tag for &lt;/div&gt;


<script type="text/javascript" src="http://fmvi-group.googlecode.com/files/punBB-fancybox2-FMvi.js">

Unknown end tag for &lt;/script&gt;


<!--[if lte IE 6]>
<style type="text/css">
.post-entry .entry-content img{display: block !important}


Unknown end tag for &lt;/style&gt;


<![endif]-->
<noscript>
<style type="text/css">
.post-entry .entry-content img{display: block !important}


Unknown end tag for &lt;/style&gt;




Unknown end tag for &lt;/noscript&gt;



```


4. Vào Header tìm cái này

```

<link rel="search" type="application/opensearchdescription+xml" href="/improvedsearch.xml" title="{SITENAME}" />
<link rel="search" type="application/opensearchdescription+xml" href="{URL_BOARD_DIRECTORY}/search/improvedsearch.xml" title="{SEARCH_FORUMS}" />
<script src="{JQUERY_PATH}" type="text/javascript">

Unknown end tag for &lt;/script&gt;


<script src="{JS_DIR}{L_LANG}.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;


```

( dưới {CSS} ý )
và bạn thay nó = code sau

```

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



```
5. thay search\_results\_topics = code sau

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

xong
Like cho tôi nhá nấu ăn nấu ăn nấu ăn nấu ăn