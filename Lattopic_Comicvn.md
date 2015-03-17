Demo :
![http://i14.servimg.com/u/f14/16/58/45/96/213.jpg](http://i14.servimg.com/u/f14/16/58/45/96/213.jpg)

Demo online :
http://chienthan100.forumvi.com/


Thông tin :
Last mình rip từ forum : Comicvn về
à trước cũng có người share cái last như này rồi ^^ nay mình share bản của mình
so sánh tốc độ load của 2 last sẽ biết thẹn thùng thẹn thùng thẹn thùng



Cách làm : [Nội dung đã bị ẩn - Vui lòng trả lời để thấy ](.md)




Bước 1 : Vào css thêm đoạn này vào :

```



div.module ol li em ei,et{
font-size: 0.8em;
float: left;
color: #7E8A9E;
width:50px
}
div.st_vertical {
position: relative;
float: left;
clear: both;
width: 820px;
color: #616161;
font: 13px/18px Arial, Helvetica, sans-serif;
}
div.module ol li em span {
font-size: 0.8em;
float: left;
color: #7E8A9E;
}
li.itemstast em a.username {
max-width: 100px;
overflow: hidden;
}
div.module ol li em a {
font-size: 0.85em;
text-align: right;
font-weight: bold;
color: #666;
float: right;

}
div.sort_num {
width: 23px;
height: 370px;
background: url(http://i48.servimg.com/u/f48/16/58/45/96/sortnu10.png) left center no-repeat;
position: absolute;
z-index: 999;
margin: -5px 0px 0px 134px;
}
li {
list-style: none;
}
div.st_vertical ul.st_tabs li {
float: left;
clear: both;
}
div.st_vertical ul.st_tabs a.st_tab_active {
position: relative;
z-index: 10;
color: #FF6317;
padding-right: 1px;
font-size: 0.95em;
background: #F8F8F8;
box-shadow: 5px 5px 7px #CCC;
-webkit-box-shadow: 5px 5px 7px #CCC;
-moz-box-shadow: 5px 5px 7px #CCCCCC;
-khtml-box-shadow: 5px 5px 7px #CCCCCC;
-webkit-box-shadow: 5px 5px 7px #CCC;
-moz-box-shadow: 5px 5px 7px #CCCCCC;
-khtml-box-shadow: 5px 5px 7px #CCCCCC;
}
div.st_vertical ul.st_tabs li a {
display: block;
width: 110px;
height: 30px;
margin: 0px;
padding: 14px 0 14px 20px;
font-size: 11px;
color: #5C5C5C;
font-weight: bold;
line-height: normal;
text-decoration: none;
outline: none;
border-right: 1px solid #D0D9E2;
border-bottom: 1px solid #D0D9E2;
border-left: 1px solid #D0D9E2;
background: white url(/../../forum/styles/newcomic/img/v_tab_bg.jpg) repeat-x 0px 0px;
}
div.st_vertical ul.st_tabs li a span {
display: block;
clear: both;
font-weight: normal;
color: #838383;
padding-top: 3px;
}
div.st_vertical ul.st_tabs a.st_tab_active {
color: #FF6317;
font-size: 0.95em;
}
div.st_vertical div.st_slide_container {
position: relative !important;
float: left;
clear: both;
}
div.st_vertical {
color: #616161;
font: 13px/18px Arial, Helvetica, sans-serif;
}
div.st_vertical div.st_tabs_container {
position: relative;
z-index: 100;
float: left;
width: 132px;
height: 400px;
margin-right: -1px;
border-top: 1px solid #D0D9E2;
overflow: hidden;
}
div.st_vertical div.st_view_container {
position: relative;
z-index: 5;
height: 350px;
padding: 5px 10px;
line-height: 18px;
border: 1px solid #D0D9E2;
background: white;
}
div.st_vertical div.st_view {
position: relative;
height: 368px;
}
.xl ol, .xl ul {
list-style: none outside none;
}
div.module ol li {
background: #F9FBFD;
float: right;
height: 19px;
margin: 2px;
}
div.module ol li em {
float: right;
padding: 0px 5px 0px 5px;
width: 330px;
overflow: hidden;
}
div.module ol li .title_stats {
display: inline-block;
width: 310px;
overflow: hidden;

}
```


Bước 2 : vào Templates >> Portal >>
mod\_most\_active\_topics : thay toàn bộ code = code sau
```


-->

<div id="stv_content_3" class="st_tab_view st_first_tab_view st_active_view"
style="position: absolute;display:none">
<div class="text">
<div class="module cl xl xl1">
<ol id="last_post_cm" data="v_tab_1" rel="5826">
<!-- BEGIN TOPIC -->
<li rel="5826" class="nhanne"><span class="title_stats"><a href="{TOPIC.LINK}" title="{TOPIC.TITLE}">{TOPIC.NAME}

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;

<em align="right"><script>tratao('{TOPIC.TITLE}');

Unknown end tag for &lt;/script&gt;



Unknown end tag for &lt;/em&gt;



Unknown end tag for &lt;/li&gt;


<!-- END TOPIC -->




Unknown end tag for &lt;/ol&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;





Unknown end tag for &lt;/div&gt;





Unknown end tag for &lt;/div&gt;





Unknown end tag for &lt;/div&gt;





Unknown end tag for &lt;/fieldset&gt;


<div style="display:none" class="dulieu">

Unknown end tag for &lt;/div&gt;


<script>

$(".st_tab").click(function() {
var a = $(this).attr("href");
$($(".st_tab_active").attr("href")).hide();
$(a).show();


$(".st_tab_active").removeClass("st_tab_active");
$(this).addClass("st_tab_active");
return!1
});
function load(b, c) {
$("#ajax_loading").show();
$(".dulieu").load(c + " .statused tr", function() {
var a;
for(a = 0;15 > a;a++) {
$("#stv_content_" + b + " li.nhanne:eq(" + a + ") span.title_stats").html($(".dulieu tr:eq(" + a + ") .topic-title").html()), $("#stv_content_" + b + " li.nhanne:eq(" + a + ") eq").html($(".dulieu tr:eq(" + a + ") .tcr strong").html()), $("#stv_content_" + b + " li.nhanne:eq(" + a + ") ei").html($(".dulieu tr:eq(" + a + ") .tc3:first").html()), $("#stv_content_" + b + " li.nhanne:eq(" + a + ") et").html($(".dulieu tr:eq(" + a + ") .tc3:last").html()), $("#stv_content_" + b + " li.nhanne:eq(" +
a + ") span.cmuc").html($(".dulieu tr:eq(" + a + ") .tc2").html())
}
$(".dulieu").empty();
$("#ajax_loading").hide();
})
}
load(1, "/search?search_author=*_*&search_keywords");


Unknown end tag for &lt;/script&gt;



```
mod\_most\_viewed\_topics
```

-->
<script>
function tratao(a){
var b = a.split(' - ');
document.write(b[1]);
}


Unknown end tag for &lt;/script&gt;


<div id="stv_content_2" class="st_tab_view st_first_tab_view st_active_view"
style="position: absolute;display:none">
<div class="text">
<div class="module cl xl xl1">
<ol id="last_post_cm" data="v_tab_1" rel="5826">
<!-- BEGIN TOPIC -->
<li rel="5826" class="nhanne"><span class="title_stats"><a href="{TOPIC.LINK}" title="{TOPIC.TITLE}">{TOPIC.NAME}

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;

<em align="right"><script>tratao('{TOPIC.TITLE}');

Unknown end tag for &lt;/script&gt;



Unknown end tag for &lt;/em&gt;



Unknown end tag for &lt;/li&gt;


<!-- END TOPIC -->




Unknown end tag for &lt;/ol&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;



<!--<td>

```
mod\_recent\_topics

```

<div id="ajax_loading" style="background-color: black; color: white; text-align: center; padding: 5px 0px 8px; width: 8%; top: 0px; left: 46%; border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-right-radius: 5px; border-bottom-left-radius: 5px; z-index: 10000; position: fixed; -webkit-box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px; box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px; display: none;"><img src="http://i46.servimg.com/u/f46/16/06/07/43/ajax_l10.gif" alt="Loading...">

Unknown end tag for &lt;/div&gt;




<fieldset>


<div id="st_vertical" class="st_vertical">
<div class="sort_num">

Unknown end tag for &lt;/div&gt;


<div class="st_tabs_container"> <a href="#prev" class="st_prev" style="">

Unknown end tag for &lt;/a&gt;

  <a href="#next" class="st_next"
style="">

Unknown end tag for &lt;/a&gt;


<div class="st_slide_container">
<ul class="st_tabs">
<li rel="1"><a href="#stv_content_1" class="st_tab st_tab_active">Bài Viết Mới<span>Bài viết mới nhất

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/li&gt;


<li rel="2"><a href="#stv_content_2" class="st_tab">Xem nhiều nhất<span>Trong rum F3 

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/li&gt;



<li rel=""><a href="#stv_content_3" class="st_tab">Trả lời nhiều<span>Trong 4rum F1

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/li&gt;


<li rel=""><a onclick="load(4,'/search?search_author=*_*&search_where=f1&search_keywords');" href="#stv_content_4" class="st_tab">Thông Báo<span>Thông báo mới

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/li&gt;


<li rel=""><a onclick="load(5,'/search?search_author=*_*&search_where=f2&search_keywords');" href="#stv_content_5" class="st_tab">Lịch Truyện<span>Lịch ra truyện 

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/li&gt;


<li rel=""><a onclick="load(6,'/search?search_author=*_*&search_where=f3&search_keywords');" href="#stv_content_6" class="st_tab" style="color:#FF6317 ">Comicer's Story<span>Comicer's Story

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div class="st_view_container">
<div class="st_view">
<!-- BEGIN classical_row -->
<div id="stv_content_1" class="st_tab_view st_first_tab_view st_active_view"
style="position: absolute; ">
<div class="text">
<div class="module cl xl xl1">
<ol id="last_post_cm" data="v_tab_1" rel="5826">
<!-- BEGIN recent_topic_row -->
<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<!-- END recent_topic_row -->


Unknown end tag for &lt;/ol&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<!-- END classical_row -->


Unknown end tag for &lt;/div&gt;


<div id="stv_content_4" class="st_tab_view st_first_tab_view st_active_view"
style="position: absolute;display:none">
<div class="text">
<div class="module cl xl xl1">
<ol id="last_post_cm" data="v_tab_1" rel="5826">
<li rel="5826" class="itemstast  sticky_0 nhanne"><em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;

<span class="title_stats">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;






Unknown end tag for &lt;/ol&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div id="stv_content_5" class="st_tab_view st_first_tab_view st_active_view"
style="position: absolute;display:none">
<div class="text">
<div class="module cl xl xl1">
<ol id="last_post_cm" data="v_tab_1" rel="5826">
<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;






Unknown end tag for &lt;/ol&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div id="stv_content_6" class="st_tab_view st_first_tab_view st_active_view"
style="position: absolute;display:none">
<div class="text">
<div class="module cl xl xl1">
<ol id="last_post_cm" data="v_tab_1" rel="5826">
<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;


<li rel="5826" class="itemstast  sticky_0 nhanne"><span class="title_stats">

Unknown end tag for &lt;/span&gt;

<em><eq>

Unknown end tag for &lt;/eq&gt;

<ei title="Trả lời">

Unknown end tag for &lt;/ei&gt;

<et title="Lượt Xem">

Unknown end tag for &lt;/et&gt;

<span class="cmuc">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/li&gt;






Unknown end tag for &lt;/ol&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;



<!--<td>

```
ok

Bước 3 : vào overall\_header tìm đoạn :
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

Và xóa nó đi

Tiếp theo vào Index\_body
thêm code này vào đầu

```



<!-- BEGIN giefmod_index1 -->
{giefmod_index1.MODVAR}
<!-- END giefmod_index1 -->

```


Bước 4 : MODULES >> Portal & Widgets >> Forum widgets management
Làm theo hình sau
![http://i14.servimg.com/u/f14/16/58/45/96/119.jpg](http://i14.servimg.com/u/f14/16/58/45/96/119.jpg)

Sắp xếp widgets theo hình sau :



![http://i14.servimg.com/u/f14/16/58/45/96/312.jpg](http://i14.servimg.com/u/f14/16/58/45/96/312.jpg)
Tiếp theo kick vào ![http://r20.imgfast.net/users/2015/12/67/35/smiles/3803843067.png](http://r20.imgfast.net/users/2015/12/67/35/smiles/3803843067.png) của Recent topics và kick hoạt theo hình dưới

![http://i14.servimg.com/u/f14/16/58/45/96/411.jpg](http://i14.servimg.com/u/f14/16/58/45/96/411.jpg)
ok thế là xong
có lỗi cứ reply tại topic dưới
```

chú ý : thay *&search_where=f3 f3 = số box bạn muốn hiển thị trong recan_topic
```