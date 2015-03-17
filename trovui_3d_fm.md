Trò chơi vui 3D trên forumotion
bạn chỉ làm ở forum khác thôi nhé
demo : http://http://9zshare.forumvi.com/
cười lăn lộn~
tuyệt k
lăng xuống thì như bạn đang bị lệt qua bên phải 1 xí
Hướng dẫn :
chèn code sau vào chỗ nào cũng đc 1234~ mình chèn vào recent

```

style="border: 0 none; border-radius: 0"><div class="starsTitle"><h3>Thống kê bài viết mới

Unknown end tag for &lt;/h3&gt;

<div id="proLastLoad" class="loaddingLike">

Unknown end tag for &lt;/div&gt;

<fieldset style="float: right; margin-top: -18px;"><select id="changeFMvi" onchange="searchtopic('/search?search_keywords=&search_author=*&search_where='+this.options[this.selectedIndex].value, '20', '#recentnew ul')">

Unknown end tag for &lt;/select&gt;



Unknown end tag for &lt;/fieldset&gt;



Unknown end tag for &lt;/div&gt;

<div id="recentnew" class="main-content" style="border: 0pt none ! important; border-radius: 0pt 0pt 0pt 0pt ! important; background-color: rgb(251, 251, 251) ! important;"><ul class="latest_topics" style="border:0 none"><div class="loaddinng">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/ul&gt;



Unknown end tag for &lt;/div&gt;

<div id="dulieupostter">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<script type="text/javascript">function searchtopic(nguonF, soF, dichF) {$("#proLastLoad").show();$.ajax({url: nguonF,success: function (data) {$("#proLastLoad").hide();$("#recentnew .latest_topics").empty();$(data).find(".topic-title:not('.topic-title:contains(\'»\')'):lt(" + soF + ")").find(".topictitle, .tooltipFMvi").appendTo(dichF);$(dichF + ' .topictitle').wrap("<li>

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

');}});}searchuser('/memberlist?mode=overall_posters', '20', '#top_posters ul');searchtopic('/search?search_keywords=&search_author=*', '20', '#recentnew ul');$("#left").fadeIn(1000);$(function(){$("#changeFMvi").html($("#jumboxFMvi select").html());});var versionMinor = parseFloat(navigator.appVersion);var versionMajor = parseInt(versionMinor);var IE = document.all && !window.opera && versionMajor < 7;var IE7 = document.all && !window.opera && versionMajor >= 7;var OP = window.opera;var FF = document.getElementById;var NS = document.layers;function move_tooltip(e) {var curX = (!IE) ? e.pageX : event.clientX + real_body.scrollLeft;var curY = (!IE) ? e.pageY : event.clientY + real_body.scrollTop;var rightedge = IE && !window.opera ? real_body.clientWidth - event.clientX - offsetxpoint : window.innerWidth - e.clientX - offsetxpoint - 20;var bottomedge = IE && !window.opera ? real_body.clientHeight - event.clientY - offsetypoint : window.innerHeight - e.clientY - offsetypoint - 20;var leftedge = (offsetxpoint < 0) ? offsetxpoint * (-1) : -1000;current_tooltip = get_item('tooltip');if (rightedge < current_tooltip.offsetWidth) current_tooltip.style.left = IE ? real_body.scrollLeft + event.clientX - current_tooltip.offsetWidth + "px" : window.pageXOffset + e.clientX - current_tooltip.offsetWidth + "px";else if (curX < leftedge) current_tooltip.style.left = "5px";else current_tooltip.style.left = curX + offsetxpoint + "px";if (bottomedge < current_tooltip.offsetHeight) current_tooltip.style.top = IE ? real_body.scrollTop + event.clientY - current_tooltip.offsetHeight - offsetypoint + "px" : window.pageYOffset + e.clientY - current_tooltip.offsetHeight - offsetypoint + "px";else current_tooltip.style.top = curY + offsetypoint + "px"} function get_item(name, opener) {if (IE) {return (opener) ? window.opener.document.all[name] : document.all[name]} else if (FF) {return (opener) ? window.opener.document.getElementById(name) : document.getElementById(name)} else if (NS) {return (opener) ? window.opener.document.layers[name] : document.layers[name]}}function change_display(name, value, opener) {if (IE) {element = (opener == true) ? window.opener.document.all[name].style : document.all[name].style} else if (FF) {element = (opener == true) ? window.opener.document.getElementById(name).style : document.getElementById(name).style} else if (NS) {element = (opener == true) ? window.opener.document.layers[name] : document.layers[name]}element.display = value}function reverse_display(name, opener) {element = get_item(name);if (!element) {return false}var display = (element.style.display != 'block') ? 'block' : 'none';change_display(name, display, opener)}var current_tooltip;function show_tooltip(caller, content, content_title) {var current_tooltip = get_item('tooltip');if (!current_tooltip) {var current_tooltip = document.createElement('div');current_tooltip.setAttribute('id',

```

vào Modules => widget => sắp xếp chỉ để lại cái Recent topic
rồi xong nhanh lên
tự sướng đi nào cười ngoác miệng~
