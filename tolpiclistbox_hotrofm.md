Demo :
![http://i73.servimg.com/u/f73/17/73/81/22/a10.png](http://i73.servimg.com/u/f73/17/73/81/22/a10.png)
Code : ACP-->Display-->Templates-->QLTT-->Topic\_list\_box


```

<!-- BEGIN topics_list_box --><!-- BEGIN row --><!-- BEGIN header_table --><!-- BEGIN multi_selection -->
<script type="text/javascript">
function check_uncheck_main_{topics_list_box.row.header_table.BOX_ID}() {
var all_checked = true;
for (i = 0; (i < document.{topics_list_box.FORMNAME}.elements.length) && all_checked; i++) {
if (document.{topics_list_box.FORMNAME}.elements[i].name == '{topics_list_box.FIELDNAME}[]{topics_list_box.row.header_table.BOX_ID}') {
all_checked = document.{topics_list_box.FORMNAME}.elements[i].checked;
}
}
document.{topics_list_box.FORMNAME}.all_mark_{topics_list_box.row.header_table.BOX_ID}.checked = all_checked;
}
function check_uncheck_all_{topics_list_box.row.header_table.BOX_ID}() {
for (i = 0; i < document.{topics_list_box.FORMNAME}.length; i++) {
if (document.{topics_list_box.FORMNAME}.elements[i].name == '{topics_list_box.FIELDNAME}[]{topics_list_box.row.header_table.BOX_ID}') {
document.{topics_list_box.FORMNAME}.elements[i].checked = document.{topics_list_box.FORMNAME}.all_mark_{topics_list_box.row.header_table.BOX_ID}.checked;
}
}
}


Unknown end tag for &lt;/script&gt;


<!-- END multi_selection -->

<table width="100%" border="0" cellpadding="0" cellspacing="0" border="0" align="center">
<tr width="100%">
<td style="width:35%;float:right">
<table style="float: left; width:100%">
<tr style="float: left; width:100%">
<!--Quảng cáo  -->


Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/td&gt;




<!-- BEGIN multi_selection -->
<!-- END multi_selection -->


<!-- END header_table -->
<!-- BEGIN header_row -->
<!-- END header_row -->

<script type="text/javascript">$(function(){$(".xname").hide();});

Unknown end tag for &lt;/script&gt;


<!-- BEGIN topic -->

<td style="width:60%; float:left">
<table cellpadding="3" cellspacing="3"  style="float: left; width: 95%;border: 1px solid #B0B0B0;margin-left:15px;" >
<tr>
<td>
<div class="tuananh4">
<div class="blog_message1" href="{topics_list_box.row.U_VIEW_TOPIC}" ><img src="http://i71.servimg.com/u/f71/17/59/85/75/loadin10.gif"/>

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div class="bai_new4"><r>
<h2 class="topic-title">
<a class="topictitle" href="{topics_list_box.row.U_VIEW_TOPIC}" onmouseover="showtip('<font color=#40ff00><b>Thời gian gửi:</b></font> <font color=#FF6600><b>{topics_list_box.row.LAST_POST_TIME}</b></font><br /><font color=#40ff00><b>Trạng Thái:</b></font> <font color=#ff8c00>{topics_list_box.row.L_TOPIC_FOLDER_ALT}</font> <br /><font color=#40ff00><b>Lượt xem:</b></font> <font color=red>{topics_list_box.row.VIEWS}</font><br /><font color=#40ff00><b>Trả lời:</b></font> <font color=#FF66CC>{topics_list_box.row.REPLIES}</font><br>');" onmouseout="hidetip();" >  {topics_list_box.row.TOPIC_TITLE}<br /><br />

Unknown end tag for &lt;/a&gt;

<span class="xname" style="float: right;"><strong>{topics_list_box.row.TOPIC_AUTHOR}  

Unknown end tag for &lt;/strong&gt;

<br/>

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/h2&gt;


<!-- BEGIN switch_description -->
<span class="genmed">
<br />
{topics_list_box.row.topic.switch_description.TOPIC_DESCRIPTION}


Unknown end tag for &lt;/span&gt;


<!-- END switch_description -->
<span class="gensmall">{topics_list_box.row.TOPIC_ANNOUNCES_DATES}{topics_list_box.row.TOPIC_CALENDAR_DATES}

Unknown end tag for &lt;/span&gt;


<span class="gensmall"><!-- BEGIN nav_tree -->{topics_list_box.row.TOPIC_NAV_TREE} <!-- END nav_tree -->

Unknown end tag for &lt;/span&gt;


<span class="postdetails"><font color="black">  Chủ Thớt : 

Unknown end tag for &lt;/font&gt;

{topics_list_box.row.TOPIC_AUTHOR}

Unknown end tag for &lt;/span&gt;


<a class="more-link" style="float:right" href="{topics_list_box.row.U_VIEW_TOPIC}">Xem Tiếp

Unknown end tag for &lt;/a&gt;


<span class="postdetails xname"><font color="black"> 

Unknown end tag for &lt;/font&gt;

<font color="red">{topics_list_box.row.REPLIES}

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/span&gt;


<span class="postdetails xname"><font color="black"> 

Unknown end tag for &lt;/font&gt;

<font color="red">{topics_list_box.row.VIEWS}

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/span&gt;



<span class="postdetails xname"><font color="black"> 

Unknown end tag for &lt;/font&gt;

<font color="red">{topics_list_box.row.LAST_POST_AUTHOR} ( <font color="#8c8787">{topics_list_box.row.LAST_POST_TIME}

Unknown end tag for &lt;/font&gt;

)

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/span&gt;





Unknown end tag for &lt;/r&gt;




Unknown end tag for &lt;/div&gt;





Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/td&gt;


<style>
a.more-link,
a.more-link:link,
a.more-link:visited  {
width:80px;
height:24px;
line-height:22px;
font-size:8pt;
text-align:center;
font-weight:normal;
color:#666;
display:block;
background:#eee;
border:1px solid #ddd;
}
a.more-link:hover,
a.more-link:active  {
color:#fff;
text-decoration:none;
background:#2A4375;
border:1px solid #1E3155;
}


Unknown end tag for &lt;/style&gt;



<!-- BEGIN multi_selection -->

<p align="center" valign="middle"><span class="postdetails xname"><input onclick="javascript:check_uncheck_main_{topics_list_box.row.BOX_ID}();" type="checkbox" name="{topics_list_box.FIELDNAME}[]{topics_list_box.row.BOX_ID}" value="{topics_list_box.row.FID}" {topics_list_box.row.L_SELECT} />

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/p&gt;


<!-- END multi_selection -->

<!-- END topic --><!-- BEGIN no_topics -->

<p class="xname" colspan="{topics_list_box.row.COLSPAN}" align="center" valign="middle" height="30"><span class="gen">{topics_list_box.row.L_NO_TOPICS}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/p&gt;



<!-- END no_topics --><!-- BEGIN bottom -->
<br />
<p class="paging xname" style="margin-left:30px;margin-top:30px">{PAGINATION}

Unknown end tag for &lt;/p&gt;





Unknown end tag for &lt;/tr&gt;





Unknown end tag for &lt;/table&gt;


<!-- END bottom --><!-- BEGIN footer_table -->
<!-- END footer_table --><!-- BEGIN spacer --><br class="gensmall" /><!-- END spacer --><!-- END row --><!-- END topics_list_box -->
<style>.blog_message1 {overflow: hidden;margin: 3px 3px 3px 3px;width: 100px;height: 50px;padding: 3px;border: 1px solid #CFCDCE;font-size: 0px;font-family: none;}.blog_message1 img {width: 100px;height: 50px;}.pun tbody.statused td.tcl {padding-left: 0;}.codebox {display: none;}.postmain blockquote,blockquote{display: none;}.blog_message1 {float: left;}.blog_tintuc li:nth-of-type(1) .blog_message1 {margin: 0px;width: 320px;height: 212px;border: 1px solid #626263;}.blog_tintuc li:nth-of-type(1) .blog_message1 img {padding: 0px;width: 320px;height: 212px;}.blog_tintuc li {background-color: white;}  .blog_tintuc li:nth-of-type(3) .blog_message1, .blog_tintuc li:nth-of-type(2) .blog_message1  {width: 190px;height: 90px;float: left;margin: 0px;border: 1px solid #B0B0B0;}.blog_tintuc li:nth-of-type(3) .blog_message1 img , .blog_tintuc li:nth-of-type(2) .blog_message1 img  {width: 190px;height: 90px;padding: 0px;}

Unknown end tag for &lt;/style&gt;


<script>
$(document).on('ready',function(){$('.blog_message1').each(function(){var url=$(this).attr('href');$(this).load(url+' .post-entry .entry-content img:eq(0)')})});

Unknown end tag for &lt;/script&gt;



```
- Tìm

```

<!--Quảng cáo  -->

```

- Bạn có thể đặt liên kết diễn đàn, thông báo ,.... vào đó