demo : http://www.maitruongmenyeu.org
![http://i43.servimg.com/u/f43/15/93/33/76/7710.png](http://i43.servimg.com/u/f43/15/93/33/76/7710.png)

Ghi chú: Đây là phiên bản đầy đủ của last hiện tại đang sử dụng viết bởi Notme

Chức năng:
Hoạt động trên hầu hết các trình duyệt.
Tooltip hiển thị thông tin chi tiết của chủ đề:
Tiêu đề
Người tạo chủ đề
Người gửi cuối
Thời gian gửi
Tên chuyên mục
Lượt xem
Lượt trả lời

Chức năng tab thông tin giống vbb
Tooltip đẹp màu trắng
lấy thông tin nhanh hơn last trước rất nhiều
Chỉ phù hợp với punbb


Hướng dẫn:
- recent\_topic Thay bằng :


```

<style type="text/css">
th, td, p {
font-family: Tahoma, Verdana, Arial, Helvetica, sans-serif
}
/* Style cho menu tabs */
div.TabView div.Tabs {
overflow: hidden;
}
div.Tabs {
background: #664632 url(http://uhm.vn/forum/images/2011/tcatm.gif) repeat;
color: #666;
font: 11px tahoma, verdana, geneva, lucida, 'lucida grande', arial, helvetica, sans-serif;
height:23px;
}
}
div.TabView div.Tabs: hover, {
overflow: hidden;
}
div.TabView div.Tabs a, div.TabView div.Tabs a:hover {
float: left;
display: block;
background-color:#;
text-align: center;
padding: 4px 6px;
vertical-align: middle;
/* đường viền quanh tabs menu */
text-decoration: none;
font-family: Tahoma;
font-size: 11px;
color: #000000;
}
div.TabView div.Tabs a.Active {
border-bottom: solid 1px #fff;
color: Blue;
font-size: 11px;
font-weight: bold;
color: #fff;
background:#fff;
}
div.TabView div.Tabs a{
border-bottom: solid 1px #E0E0E0;
}
/* Style cho phần text nội dung của mỗi tab */
div.TabView {
clear: both;
border: 0px solid #ffffff;
overflow: hidden;
/* giá trị là auto nếu muốn hiện scroll bar */
}
div.TabView div.Pages div.Page {
height: 100%;
padding-top: 2px;
padding-bottom: 0px;
padding-left: 9px;
padding-right: 9px;
border: 0px solid #b4d0f3;
overflow: hidden;
background-color:#fff;
/* giá trị là auto nếu muốn hiện scroll bar */
}


Unknown end tag for &lt;/style&gt;

<div id="TabView" class="TabView" style="padding: 0px;">

<div width="100%" class="Tabs"><a class="Active" href="javascript:tabview_switch('TabView', 1);"><font color="black">Bài Viết Mới

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/a&gt;

<a href="javascript:tabview_switch('TabView', 2);" class=""><font color="black">Teen News

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/a&gt;

<a href="javascript:tabview_switch('TabView', 3);" class=""><font color="black">Công nghệ News

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/a&gt;

<a href="javascript:tabview_switch('TabView', 4);" class=""><font color="black">Forumotion

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/a&gt;

<a id="FMviloadimg" style="float: right; padding-top: 5px; padding-right: 10px; padding-bottom: 5px; padding-left: 10px; display: none; " href="javascript:tabview_switch('TabView', 5);" class="">[Đang Tải....]

Unknown end tag for &lt;/a&gt;

<a href="javascript:tabview_switch('TabView', 6);" class=""><font color="Blue">Thống kê

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/a&gt;

<ul class="tabs" id="vietvbb_topstats_t">  <li style="border-right: 0px; display: none;" id="vietvbb_topstats_t_loading">

Unknown end tag for &lt;/li&gt;

 

Unknown end tag for &lt;/ul&gt;

 

Unknown end tag for &lt;/div&gt;




<div style="height:293px; width:100%" class="Pages">


<div class="Page" style="height: 291px; display: none; ">
<div style="display:none" class="dulieulast">

Unknown end tag for &lt;/div&gt;


<div style="display:none" class="dulieulast2">

Unknown end tag for &lt;/div&gt;


<!-- BEGIN classical_row -->

<!-- BEGIN recent_topic_row -->
<p width="100%" class="newtopic">
<span style="float:left" class="topicstatus">• 

Unknown end tag for &lt;/span&gt;

<span class="lengtht" id="tieude" onmouseover="show_tooltip(this,$(this).parent().find('.dulieu2').html(),'Thông Tin Bài Viết');"><a href="{classical_row.recent_topic_row.U_TITLE}">{classical_row.recent_topic_row.L_TITLE} 

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;


<span style="display:none" class="dulieu2"><img src="http://i48.servimg.com/u/f48/16/58/89/73/loadin10.gif" /> Đang tải dữ liệu....

Unknown end tag for &lt;/span&gt;


<!-- BEGIN switch_poster -->
<span class="username"><a id="tacgia" style="float:right" href="{classical_row.recent_topic_row.switch_poster.U_POSTER}">{classical_row.recent_topic_row.switch_poster.S_POSTER}

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;


<!-- END switch_poster -->
<span class="thoigian" style="display:none">{classical_row.recent_topic_row.S_POSTTIME}

Unknown end tag for &lt;/span&gt;


<!-- BEGIN switch_poster_guest -->
{classical_row.recent_topic_row.switch_poster_guest.S_POSTER}
<!-- END switch_poster_guest -->





Unknown end tag for &lt;/p&gt;


<!-- END recent_topic_row -->

<!-- END classical_row -->


Unknown end tag for &lt;/div&gt;


<script type="text/javascript">
//<![CDATA[
$(function () {

$(".dulieulast").load('/search?search_keywords=&search_author=* .table .statused tr:lt(16)', function () {
var i;
for (i = 0; i < 16; i++) {
$(".newtopic:eq(" + i + ")").find(".dulieu2").html('<span>  

Unknown end tag for &lt;/span&gt;

<b>' + $(".newtopic:eq(" + i + ")").find("#tieude").text() + '  

Unknown end tag for &lt;/b&gt;

<hr>Tác giả : <b>' + $(".dulieulast tr:eq(" + i + ")").find(".tcl a[href^='/u']").text() + '

Unknown end tag for &lt;/b&gt;

<br>Trạng Thái : ' + $(".dulieulast tr:eq(" + i + ")").find(".tcl .status img").attr("alt") + '<br>Thuộc Chuyên Mục : ' + $(".dulieulast tr:eq(" + i + ")").find(".tc2").text() + '<br>Trả lời  : ' + $(".dulieulast tr:eq(" + i + ")").find(".tc3:first").text() + '<br>Lượt Xem : ' + $(".dulieulast tr:eq(" + i + ")").find(".tc3:last").text() + '<hr>Người Gửi Cuối : <b>' + $(".newtopic:eq(" + i + ")").find("#tacgia").text() + '

Unknown end tag for &lt;/b&gt;

<br>Vào Lúc : ' + $(".newtopic:eq(" + i + ")").find(".thoigian").text());

}

});
$(".Pages .Page:first").fadeIn(1);
});

//]]>


Unknown end tag for &lt;/script&gt;


<div class="Page" style="height: 294px; display: none; "><table style="border-bottom-width: 0px;" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody>

Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;

<tbody><tr><td style="padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="100%"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr valign="top"><td colspan="3" style="border-top: 0px none; padding: 2px;"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr valign="top"><td align="left" width="100%"><div class="ha1" style="height: 18px;width: 100%;">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;

<td align="left" width="100%"><div class="ha2" style="height: 18px;width: 110px;">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;



<div class="Page" style="height: 294px; display: none; "><table style="border-bottom-width: 0px;" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody>

Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;

<tbody><tr><td style="padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="100%"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr valign="top"><td colspan="3" style="border-top: 0px none; padding: 2px;"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr valign="top"><td align="left" width="100%"><div class="tintuc1" style="height: 18px;width: 100%;">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;

<td align="left" width="100%"><div class="tintuc2" style="height: 18px;width: 110px;">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;



<div class="Page" style="height: 294px; display: none; "><table style="border-bottom-width: 0px;" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody>

Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;

<tbody><tr><td style="padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="100%"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr valign="top"><td colspan="3" style="border-top: 0px none; padding: 2px;"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr valign="top"><td align="left" width="100%"><div class="hu1" style="height: 18px;width: 100%;">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;

<td align="left" width="100%"><div class="hu2" style="height: 18px;width: 110px;">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;


<div class="Page" style="height: 294px; display: none; "><table style="border-bottom-width: 0px;" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody>

Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;

<tbody><tr><td style="padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="100%"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr valign="top"><td colspan="3" style="border-top: 0px none; padding: 2px;"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr valign="top"><td align="left" width="100%"><div class="hu1" style="height: 18px;width: 100%;">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;

<td align="left" width="100%"><div class="hu2" style="height: 18px;width: 110px;">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;



<div style="width:auto;visibility:hidden;padding:5px"
class="select" id="hienhinh">



Unknown end tag for &lt;/div&gt;




<!--

Unknown end tag for &lt;/div&gt;




```
mod\_statistics


```

-->
<div class="Page" style="height: 294px; display: block; ">


{TOTAL_USERS}<br />{NEWEST_USER}<br /><br />
{TOTAL_POSTS} {TOTAL_TOPICS}<br />



Unknown end tag for &lt;/div&gt;


<script type="text/javascript">tabview_initialize('TabView');

Unknown end tag for &lt;/script&gt;




Unknown end tag for &lt;/div&gt;



```

vào over\_header xóa đoạn


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
thêm vào sau


```

{JAVASCRIPT}

```

trong index\_body code


```

<div class="main" id="chan"><div class="main-head"><div  style="float:left" ><h1 class="page-title">Bài gửi mới nhất 

Unknown end tag for &lt;/h1&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



<div id="lastxong"> <!-- BEGIN giefmod_index1 -->{giefmod_index1.MODVAR}<!-- END giefmod_index1 -->

Unknown end tag for &lt;/div&gt;





Unknown end tag for &lt;/div&gt;



```

tạo 1 script mới để inthe hompage


```

var _0x8c03=["\x61\x70\x70\x56\x65\x72\x73\x69\x6F\x6E","\x61\x6C\x6C","\x6F\x70\x65\x72\x61","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x6C\x61\x79\x65\x72\x73","\x64\x6F\x63\x75\x6D\x65\x6E\x74","\x6F\x70\x65\x6E\x65\x72","\x73\x74\x79\x6C\x65","\x64\x69\x73\x70\x6C\x61\x79","\x62\x6C\x6F\x63\x6B","\x6E\x6F\x6E\x65","\x74\x6F\x6F\x6C\x74\x69\x70","\x64\x69\x76","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x69\x64","\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x62\x6F\x64\x79","\x7A\x49\x6E\x64\x65\x78","\x70\x6F\x73\x69\x74\x69\x6F\x6E","\x61\x62\x73\x6F\x6C\x75\x74\x65","\x3C\x74\x61\x62\x6C\x65\x20\x62\x6F\x72\x64\x65\x72\x3D\x22\x30\x22\x20\x63\x65\x6C\x6C\x73\x70\x61\x63\x69\x6E\x67\x3D\x22\x31\x22\x20\x63\x65\x6C\x6C\x70\x61\x64\x64\x69\x6E\x67\x3D\x22\x30\x22\x3E\x3C\x74\x72\x3E\x3C\x74\x64\x20\x63\x6C\x61\x73\x73\x3D\x22\x68\x65\x61\x64\x65\x72\x22\x3E","\x3C\x2F\x74\x64\x3E\x3C\x2F\x74\x72\x3E\x3C\x74\x72\x3E\x3C\x74\x64\x20\x63\x6C\x61\x73\x73\x3D\x22\x6E\x6F\x69\x64\x75\x6E\x67\x22\x3E","\x3C\x2F\x74\x64\x3E\x3C\x2F\x74\x72\x3E\x3C\x2F\x74\x61\x62\x6C\x65\x3E","\x3C\x73\x70\x61\x6E\x3E","\x3C\x2F\x73\x70\x61\x6E\x3E","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x76\x69\x73\x69\x62\x69\x6C\x69\x74\x79","\x76\x69\x73\x69\x62\x6C\x65","\x6F\x6E\x6D\x6F\x75\x73\x65\x6D\x6F\x76\x65","\x6F\x6E\x6D\x6F\x75\x73\x65\x6F\x75\x74","\x68\x69\x64\x64\x65\x6E","\x74\x69\x74\x6C\x65","","\x63\x6F\x6D\x70\x61\x74\x4D\x6F\x64\x65","\x42\x61\x63\x6B\x43\x6F\x6D\x70\x61\x74","\x64\x6F\x63\x75\x6D\x65\x6E\x74\x45\x6C\x65\x6D\x65\x6E\x74","\x70\x61\x67\x65\x58","\x63\x6C\x69\x65\x6E\x74\x58","\x73\x63\x72\x6F\x6C\x6C\x4C\x65\x66\x74","\x70\x61\x67\x65\x59","\x63\x6C\x69\x65\x6E\x74\x59","\x73\x63\x72\x6F\x6C\x6C\x54\x6F\x70","\x63\x6C\x69\x65\x6E\x74\x57\x69\x64\x74\x68","\x69\x6E\x6E\x65\x72\x57\x69\x64\x74\x68","\x63\x6C\x69\x65\x6E\x74\x48\x65\x69\x67\x68\x74","\x69\x6E\x6E\x65\x72\x48\x65\x69\x67\x68\x74","\x6F\x66\x66\x73\x65\x74\x57\x69\x64\x74\x68","\x6C\x65\x66\x74","\x70\x78","\x70\x61\x67\x65\x58\x4F\x66\x66\x73\x65\x74","\x35\x70\x78","\x6F\x66\x66\x73\x65\x74\x48\x65\x69\x67\x68\x74","\x74\x6F\x70","\x70\x61\x67\x65\x59\x4F\x66\x66\x73\x65\x74"];var versionMinor=parseFloat(navigator[_0x8c03[0]]);var versionMajor=parseInt(versionMinor);var IE=document[_0x8c03[1]]&&!window[_0x8c03[2]]&&versionMajor<7;var IE7=document[_0x8c03[1]]&&!window[_0x8c03[2]]&&versionMajor>=7;var OP=window[_0x8c03[2]];var FF=document[_0x8c03[3]];var NS=document[_0x8c03[4]];function get_item(a,b){if(IE){return(b)?window[_0x8c03[6]][_0x8c03[5]][_0x8c03[1]][a]:document[_0x8c03[1]][a]}else{if(FF){return(b)?window[_0x8c03[6]][_0x8c03[5]][_0x8c03[3]](a):document[_0x8c03[3]](a)}else{if(NS){return(b)?window[_0x8c03[6]][_0x8c03[5]][_0x8c03[4]][a]:document[_0x8c03[4]][a]}}}};function change_display(a,b,c){if(IE){element=(c==true)?window[_0x8c03[6]][_0x8c03[5]][_0x8c03[1]][a][_0x8c03[7]]:document[_0x8c03[1]][a][_0x8c03[7]]}else{if(FF){element=(c==true)?window[_0x8c03[6]][_0x8c03[5]][_0x8c03[3]](a)[_0x8c03[7]]:document[_0x8c03[3]](a)[_0x8c03[7]]}else{if(NS){element=(c==true)?window[_0x8c03[6]][_0x8c03[5]][_0x8c03[4]][a]:document[_0x8c03[4]][a]}}};element[_0x8c03[8]]=b};function reverse_display(a,b){element=get_item(a);if(!element){return false};var c=(element[_0x8c03[7]][_0x8c03[8]]!=_0x8c03[9])?_0x8c03[9]:_0x8c03[10];change_display(a,c,b)};var current_tooltip;function show_tooltip(a,b,c,d){var e=get_item(_0x8c03[11]);if(!e){var e=document[_0x8c03[13]](_0x8c03[12]);e[_0x8c03[15]](_0x8c03[14],_0x8c03[11]);document[_0x8c03[17]][_0x8c03[16]](e)};e[_0x8c03[7]][_0x8c03[18]]=100;e[_0x8c03[7]][_0x8c03[19]]=_0x8c03[20];if(c){b=_0x8c03[21]+c+_0x8c03[22]+b+_0x8c03[23]}else{b=_0x8c03[24]+b+_0x8c03[25]};e[_0x8c03[26]]=b;e[_0x8c03[7]][_0x8c03[27]]=_0x8c03[28];a[_0x8c03[29]]=move_tooltip;a[_0x8c03[30]]=function(){e[_0x8c03[7]][_0x8c03[27]]=_0x8c03[31]};a[_0x8c03[32]]=_0x8c03[33]};var offsetxpoint=20;var offsetypoint=5;var real_body=(document[_0x8c03[34]]&&document[_0x8c03[34]]!=_0x8c03[35])?document[_0x8c03[36]]:document[_0x8c03[17]];real_body=(document[_0x8c03[36]])?document[_0x8c03[36]]:document[_0x8c03[17]];function move_tooltip(a){var b=(!IE)?a[_0x8c03[37]]:event[_0x8c03[38]]+real_body[_0x8c03[39]];var c=(!IE)?a[_0x8c03[40]]:event[_0x8c03[41]]+real_body[_0x8c03[42]];var d=IE&&!window[_0x8c03[2]]?real_body[_0x8c03[43]]-event[_0x8c03[38]]-offsetxpoint:window[_0x8c03[44]]-a[_0x8c03[38]]-offsetxpoint-20;var e=IE&&!window[_0x8c03[2]]?real_body[_0x8c03[45]]-event[_0x8c03[41]]-offsetypoint:window[_0x8c03[46]]-a[_0x8c03[41]]-offsetypoint-20;var f=(offsetxpoint<0)?offsetxpoint*(-1):-1000;current_tooltip=get_item(_0x8c03[11]);if(d<current_tooltip[_0x8c03[47]]){current_tooltip[_0x8c03[7]][_0x8c03[48]]=IE?real_body[_0x8c03[39]]+event[_0x8c03[38]]-current_tooltip[_0x8c03[47]]+_0x8c03[49]:window[_0x8c03[50]]+a[_0x8c03[38]]-current_tooltip[_0x8c03[47]]+_0x8c03[49]}else{if(b<f){current_tooltip[_0x8c03[7]][_0x8c03[48]]=_0x8c03[51]}else{current_tooltip[_0x8c03[7]][_0x8c03[48]]=b+offsetxpoint+_0x8c03[49]}};if(e<current_tooltip[_0x8c03[52]]){current_tooltip[_0x8c03[7]][_0x8c03[53]]=IE?real_body[_0x8c03[42]]+event[_0x8c03[41]]-current_tooltip[_0x8c03[52]]-offsetypoint+_0x8c03[49]:window[_0x8c03[54]]+a[_0x8c03[41]]-current_tooltip[_0x8c03[52]]-offsetypoint+_0x8c03[49]}else{current_tooltip[_0x8c03[7]][_0x8c03[53]]=c+offsetypoint+_0x8c03[49]}};eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('l k(a,b){8(a,b)}l 8(a,b){1 c=v.u(a);1 d=c.4;6(d.3!="s")d=d.5;1 e=d.4;1 f=0;j 7(e.q=="A"){f++;e.t="n:k(\'"+a+"\', "+f+");";e.3=f==b?"o":"";e.p()}6(e=e.5);1 g=c.4;6(g.3!="r")g=g.5;1 h=g.4;1 f=0;j 7(h.3=="m"){f++;7(g.i)h.9.w=g.i-2+"x";h.9.y=f==b?"z":"B"}6(h=h.5)};',38,38,'|var||className|firstChild|nextSibling|while|if|tabview_aux|style|||||||||offsetHeight|do|tabview_switch|function|Page|javascript|Active|blur|tagName|Pages|Tabs|href|getElementById|document|height|px|display|block||none'.split('|'),0,{}));
$(function () {
$("div.Tabs a").click(function () {
$("#FMviloadimg").show();
if ($(this).text() == "Teen News") {
$(".ha1").load("/f72-forum .tabmoi1:lt(16)", {
limit: 15
}, function () {
$(".ha2").load("/f72-forum .tabmoi2:lt(16)", {
limit: 15
}, function () {});
$("#FMviloadimg").hide()
})
} else if ($(this).text() == "Công nghệ News") {
$(".tintuc1").load("/f96-forum .tabmoi1:lt(16)", {
limit: 15
}, function () {
$(".tintuc2").load("/f96-forum .tabmoi2:lt(16)", {
limit: 15
}, function () {});
$("#FMviloadimg").hide()
})
} else if ($(this).text() == "Forumotion") {
$(".hu1").load("/f24-forum .tabmoi1:lt(16)", {
limit: 15
}, function () {
$(".hu2").load("/f24-forum .tabmoi2:lt(16)", {
limit: 15
}, function () {});
$("#FMviloadimg").hide()
})
} else if ($(this).text() == "Bài Viết Mới" || $(this).text() == "Thống kê") {
$("#FMviloadimg").hide()
}
})
});

```

Đoạn cuối bạn chỉnh sửa cho phù hợp có chức năng tab
CSS


```

#tooltip{
padding:0;
max-width:50% !important;
color:#000;
border:1px solid #ddd;
background-color:#fff;
font-size:12px}
* html #tooltip{width:30%}
#tooltip hr{
border:1px solid #ddd;}
#tooltip ul{padding:0 0 0 20px}
#tooltip dl{clear:both;position:relative;margin-bottom:10px}
#tooltip dt{float:left;border:medium none;padding-top:3px;width:50%}
#tooltip dd{margin-left:50%;padding-left:5px;vertical-align:top}
#tooltip .header{margin:0;
padding: 4px;
background: #fff url(http://uhm.vn/forum/images/2011/tcatm.gif) repeat;
color: #666;
font: bold 12px tahoma, verdana, geneva, lucida, 'lucida grande', arial, helvetica, sans-serif;
border-bottom: solid 1px #E0E0E0;
}
#tooltip .noidung{
padding:2px;
line-height:18px;
}

```

sắp xếp widgets

![http://i45.servimg.com/u/f45/16/75/78/56/untitl13.jpg](http://i45.servimg.com/u/f45/16/75/78/56/untitl13.jpg)
Chú ý: Bạn có thể thay CSS tooltip theo ý thích của mình.