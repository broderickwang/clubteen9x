cho vao index\_body


```

<div id="page-body">
<div id="left">
<div id="pun-info" class="boxFMvi main">
<div class="tcat">
˙·٠•●♥ Tình hình diễn đàn ♥●•٠·˙




Unknown end tag for &lt;/div&gt;



<div class="module main toppost_width">
<div class="starsTitle">

<img id="loaUser" style="display: none; float: right; margin-top: 3px;" src="http://i.imgur.com/uUdvu.gif" />

<fieldset style="margin-top: -0.3em">
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


<div id="top_posters" class="main-content1">
<ul class="latest_topics">
<div class="loaddinng">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div class="module main recentWidth">
<div class="starsTitle">
<fieldset style="float: left; margin-top: -0.1px;"> last opic 

Unknown end tag for &lt;/fieldset&gt;


<div id="proLastLoad" class="loaddingLike">

Unknown end tag for &lt;/div&gt;


<fieldset style="float: right; margin-top: -0.1px;">
người gửi




Unknown end tag for &lt;/fieldset&gt;




Unknown end tag for &lt;/div&gt;


<div id="recentnew" class="main-content1">
<ul class="latest_topics">
<div class="loaddinng">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;


<div id="dulieupostter">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;






Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;


<img src="http://i41.servimg.com/u/f41/17/01/50/07/sep21010.gif">
```

css


```


#page-body{margin: 0;}
#pun-info .main-content {
-moz-border-radius: 10px;
-webkit-border-radius: 10px;
border: 2px solid #DDDDDD;!important;
border-radius: 10px;
}
.starsTitle{background-color:#BFBFBF;border:1px solid #989898;color:#F8FF04;font-family:Comic Sans MS;font-variant:small-caps;font-weight:700;height:1.4em;padding:5px;text-shadow:1px 1px 1px #000}#tooltip .header{display:none}#tooltip img{height:70px!important;padding-right:10px}.latest_topics li{height:1.34em;position:relative!important}.leftrecent{height:1.3em;left:0;overflow:hidden;position:absolute;width:500px}.rightrecent{position:absolute;right:0}.imgstatus{background-color:#FFF;left:-30px;padding:0 4px;position:absolute}#content-container div#left{float:none;padding:10px 0;width:100%}*+ html #content-container div#main{margin-left:0}* html #content-container #main-content{margin-right:0;overflow:visible}* html #content-container div#main{float:none;margin-right:-99%;width:100%}.latest_topics{list-style:decimal-leading-zero outside none;margin:0 0 0 25px !important;padding:10px;text-align:left}.toppost_width{float:left;width:200px}
.tcat, td.cat,td.catHead,td.catSides,td.catLeft,td.catRight,td.catBottom, td.rowpic
{
background: white url(http://i.imm.io/g6pN.png) no-repeat top left;
color: white;
font-family: verdana,geneva,lucida,'lucida grande',arial,helvetica,sans-serif;
font-size: 10pt;
font-style: normal;
font-variant: normal;
font-weight: bold;
padding: 35px 10px 20px 210px;
}
.main .main-content1{
background: #fff;
border: 2px solid lightgrey;

}

.starsTitle {
background-color: #BFBFBF;
border: 1px solid #989898;
color: #F8FF04;
font-family: Comic Sans MS;
font-variant: small-caps;
font-weight: 700;
height: 1.4em;
padding: 5px;
text-shadow: 1px 1px 1px black;
}
{
margin: 0;
padding: 0;
}
```


modul>.HTML & JAVASCRIPT>>Javascript codes management

```

function searchtopic(nguonF, soF, dichF) {$("#proLastLoad").show();$.ajax({url: nguonF,success: function (data) {$("#proLastLoad").hide();$("#recentnew .latest_topics").empty();$(data).find(".topic-title:not('.topic-title:contains(\'»\')'):lt(" + soF + ")").find(".topictitle, .tooltipFMvi").appendTo(dichF);$(dichF + ' .topictitle').wrap("<li>

Unknown end tag for &lt;/li&gt;

");var ti;for (ti = 0; ti < soF; ti++) {var it = $(dichF + ' a.topictitle:eq(' + ti + ')');var lastUx = it.parent().next().find('p:eq(6)>strong').html();var popupUx = it.parent().next().find(".lastlink-FMvi a").attr("href");var trangthai = it.parent().next().find('p:eq(3)>font').text();if (langEV()) {var dabikhoa = "This topic is locked";var dacomoi = "New posts"} else {var dabikhoa = "Chủ đề này đã bị khóa";var dacomoi = "Bài viết mới"}if (trangthai.search(dabikhoa) != -1) {var imgUx = 'http://i48.servimg.com/u/f48/16/58/89/73/locked10.png';} else if (trangthai.search(dacomoi) != -1) {var imgUx = 'http://i48.servimg.com/u/f48/16/58/89/73/post_n10.gif';} else {var imgUx = 'http://i48.servimg.com/u/f48/16/58/89/73/post_o10.png';};it.replaceWith('<span onmouseover="show_tooltip(this, $(this).parent().next().html(), \'FMvi.Org\')" class="leftrecent"><a href="' + it.attr("href") + '" class="topictitle">' + it.text() + '

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;

<span class="imgstatus"><img width="10px" src="' + imgUx + '" /><a class="firstTopic" href="' + popupUx + '"><span style="line-height: 18px; font-size: 9px;"> ▼

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;

<span onmouseover="show_tooltip(this, \'Click để xem thông tin thành viên này\', \'FMvi.Org\')" class="rightrecent">' + lastUx + '

Unknown end tag for &lt;/span&gt;

');}},error: function (jqXHR, textStatus, errorThrown) {$(dichF).html('<p><font face="Courier New"><font color="red">Có lỗi xảy ra trong quá trình tải dữ liệu.

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/p&gt;

');}});}function searchuser(nguonU, soU, dichU) {$("#loaUser").show();$.ajax({url: nguonU,success: function (data) {$("#loaUser").hide();$("#top_posters .latest_topics").empty();$(data).find(".dataUserFmvi:lt(" + soU + ")").appendTo(dichU);$(dichU + ' .dataUserFmvi').wrap("<li>

Unknown end tag for &lt;/li&gt;

");var g;for (g = 0; g < 20; g++) {var ggg = $(dichU + " .dataUserFmvi:eq(" + g + ")>span:first");ggg.replaceWith("<span onmouseover=\"show_tooltip(this, $(this).next().html(), 'FMvi.Org')\" style=\"position: absolute; left: 0pt;\">" + ggg.html() + "

Unknown end tag for &lt;/span&gt;

")}},error: function (jqXHR, textStatus, errorThrown) {$(dichU).html('<p><font face="Courier New"><font color="red">Có lỗi xảy ra trong quá trình tải dữ liệu.

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/p&gt;

');}});}searchuser('/memberlist?mode=overall_posters', '20', '#top_posters ul');searchtopic('/search?search_keywords=&search_author=*', '20', '#recentnew ul');$("#left").fadeIn(1000);$(function(){$("#changeFMvi").html($("#jumboxFMvi select").html());});var versionMinor = parseFloat(navigator.appVersion);var versionMajor = parseInt(versionMinor);var IE = document.all && !window.opera && versionMajor < 7;var IE7 = document.all && !window.opera && versionMajor >= 7;var OP = window.opera;var FF = document.getElementById;var NS = document.layers;function move_tooltip(e) {var curX = (!IE) ? e.pageX : event.clientX + real_body.scrollLeft;var curY = (!IE) ? e.pageY : event.clientY + real_body.scrollTop;var rightedge = IE && !window.opera ? real_body.clientWidth - event.clientX - offsetxpoint : window.innerWidth - e.clientX - offsetxpoint - 20;var bottomedge = IE && !window.opera ? real_body.clientHeight - event.clientY - offsetypoint : window.innerHeight - e.clientY - offsetypoint - 20;var leftedge = (offsetxpoint < 0) ? offsetxpoint * (-1) : -1000;current_tooltip = get_item('tooltip');if (rightedge < current_tooltip.offsetWidth) current_tooltip.style.left = IE ? real_body.scrollLeft + event.clientX - current_tooltip.offsetWidth + "px" : window.pageXOffset + e.clientX - current_tooltip.offsetWidth + "px";else if (curX < leftedge) current_tooltip.style.left = "5px";else current_tooltip.style.left = curX + offsetxpoint + "px";if (bottomedge < current_tooltip.offsetHeight) current_tooltip.style.top = IE ? real_body.scrollTop + event.clientY - current_tooltip.offsetHeight - offsetypoint + "px" : window.pageYOffset + e.clientY - current_tooltip.offsetHeight - offsetypoint + "px";else current_tooltip.style.top = curY + offsetypoint + "px"} function get_item(name, opener) {if (IE) {return (opener) ? window.opener.document.all[name] : document.all[name]} else if (FF) {return (opener) ? window.opener.document.getElementById(name) : document.getElementById(name)} else if (NS) {return (opener) ? window.opener.document.layers[name] : document.layers[name]}}function change_display(name, value, opener) {if (IE) {element = (opener == true) ? window.opener.document.all[name].style : document.all[name].style} else if (FF) {element = (opener == true) ? window.opener.document.getElementById(name).style : document.getElementById(name).style} else if (NS) {element = (opener == true) ? window.opener.document.layers[name] : document.layers[name]}element.display = value}function reverse_display(name, opener) {element = get_item(name);if (!element) {return false}var display = (element.style.display != 'block') ? 'block' : 'none';change_display(name, display, opener)}var current_tooltip;function show_tooltip(caller, content, content_title) {var current_tooltip = get_item('tooltip');if (!current_tooltip) {var current_tooltip = document.createElement('div');current_tooltip.setAttribute('id', 'tooltip');document.body.appendChild(current_tooltip)}current_tooltip.style.zIndex = 100;current_tooltip.style.position = 'absolute';if (content_title) {content = '<p class="header">' + content_title + '

Unknown end tag for &lt;/p&gt;

<p>' + content + '

Unknown end tag for &lt;/p&gt;

'} else {content = '<p>' + content + '

Unknown end tag for &lt;/p&gt;

'}current_tooltip.innerHTML = content;current_tooltip.style.visibility = 'visible';caller.onmousemove = move_tooltip;caller.onmouseout = function () {current_tooltip.style.visibility = "hidden"};caller.title = ''}var offsetxpoint = -60;var offsetypoint = 20;var real_body = (document.compatMode && document.compatMode != "BackCompat") ? document.documentElement : document.body;real_body = (document.documentElement) ? document.documentElement : document.body;

```
tam thoi share the thui sap toi share 2 cai nua~ hihi thank di naz ^^!