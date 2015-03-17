![http://i47.servimg.com/u/f47/17/57/29/64/thong-10.jpg](http://i47.servimg.com/u/f47/17/57/29/64/thong-10.jpg)

```
    <!-- BEGIN topics_list_box -->
<!-- BEGIN row -->
<!-- BEGIN header_table -->
<!-- BEGIN multi_selection -->
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

<div class="main-head">
<!-- BEGIN multi_selection -->
<input onclick="check_uncheck_all_{topics_list_box.row.header_table.BOX_ID}();" type="checkbox" name="all_mark_{topics_list_box.row.header_table.BOX_ID}" value="0" />
<!-- END multi_selection -->
<h1 class="page-title">{topics_list_box.row.L_TITLE} [{topics_list_box.row.COUNT_TOTAL_TOPICS}]

Unknown end tag for &lt;/h1&gt;




Unknown end tag for &lt;/div&gt;


<div class="main-content">
<table cellspacing="0" class="table">
<thead>
<tr>
<th class="tcl">{L_TOPICS}

Unknown end tag for &lt;/th&gt;


<th class="tc2">{topics_list_box.row.L_REPLIES}

Unknown end tag for &lt;/th&gt;


<th class="tc3">{topics_list_box.row.L_VIEWS}

Unknown end tag for &lt;/th&gt;


<th class="tcr">{topics_list_box.row.L_LASTPOST}

Unknown end tag for &lt;/th&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/thead&gt;


<tbody class="statused">
<!-- END header_table -->

<!-- BEGIN header_row -->
<strong>{topics_list_box.row.L_TITLE}

Unknown end tag for &lt;/strong&gt;


<!-- END header_row -->

<!-- BEGIN topic -->
<!-- BEGIN table_sticky -->


Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;



<div class="main-head">
<!-- BEGIN multi_selection -->
<input onclick="check_uncheck_all_{topics_list_box.row.header_table.BOX_ID}();" type="checkbox" name="all_mark_{topics_list_box.row.header_table.BOX_ID}" value="0" /  >
<!-- END multi_selection -->
<h2>{topics_list_box.row.topic.table_sticky.L_TITLE} [{topics_list_box.row.topic.table_sticky.COUNT_TOTAL_TOPICS}]

Unknown end tag for &lt;/h2&gt;




Unknown end tag for &lt;/div&gt;


<div class="main-content">
<table cellspacing="0" class="table">
<thead>
<tr>
<th class="tcl">{L_TOPICS}

Unknown end tag for &lt;/th&gt;


<th class="tc2">{topics_list_box.row.topic.table_sticky.L_REPLIES}

Unknown end tag for &lt;/th&gt;


<th class="tc3">{topics_list_box.row.topic.table_sticky.L_VIEWS}

Unknown end tag for &lt;/th&gt;


<th class="tcr">{topics_list_box.row.topic.table_sticky.L_LASTPOST}

Unknown end tag for &lt;/th&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/thead&gt;


<tbody class="statused">
<!-- END table_sticky -->
<tr>
<td class="tcl tdtopics <!-- BEGIN line_sticky --> sticky-separator <!-- END line_sticky -->">
<span class="status">
<img title="{topics_list_box.row.L_TOPIC_FOLDER_ALT}" src="{topics_list_box.row.TOPIC_FOLDER_IMG}" alt="{topics_list_box.row.L_TOPIC_FOLDER_ALT}" />


Unknown end tag for &lt;/span&gt;


<!-- BEGIN single_selection -->
<input type="radio" name="{topics_list_box.FIELDNAME}" value="{topics_list_box.row.FID}" {topics_list_box.row.L_SELECT} />
<!-- END single_selection -->
{topics_list_box.row.ICON}
{topics_list_box.row.NEWEST_POST_IMG}
{topics_list_box.row.PARTICIPATE_POST_IMG}
{topics_list_box.row.TOPIC_TYPE}
<h2 class="topic-title"><a onmouseover="show_tooltip(this,'Tiêu đề: <font color=red> {topics_list_box.row.TOPIC_TITLE} </font><br><br>Vào lúc: <font color=#FF6600>{topics_list_box.row.LAST_POST_TIME}</font><br><br>Lượt xem: <font color=#FF66CC> {topics_list_box.row.VIEWS}</font><br><br>Trả lời: <font color=red>{topics_list_box.row.REPLIES}</font><br><br><font color=#000>Bạn đang xem chuyên mục ở hotrofm.com</font>');" onmouseout="hidetip();" class="topictitle" href="{topics_list_box.row.U_VIEW_TOPIC}">{topics_list_box.row.TOPIC_TITLE}

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/h2&gt;


{topics_list_box.row.GOTO_OPEN} {topics_list_box.row.GOTO_PAGE_NEW} {topics_list_box.row.GOTO_CLOSE}
{topics_list_box.row.L_BY} {topics_list_box.row.TOPIC_AUTHOR}
<!-- BEGIN switch_description -->
<br />
{topics_list_box.row.topic.switch_description.TOPIC_DESCRIPTION}
<!-- END switch_description -->


Unknown end tag for &lt;/td&gt;


<td class="tc2 <!-- BEGIN line_sticky --> sticky-separator <!-- END line_sticky -->">{topics_list_box.row.REPLIES}

Unknown end tag for &lt;/td&gt;


<td class="tc3 <!-- BEGIN line_sticky --> sticky-separator <!-- END line_sticky -->">{topics_list_box.row.VIEWS}

Unknown end tag for &lt;/td&gt;


<td class="tcr <!-- BEGIN line_sticky --> sticky-separator <!-- END line_sticky -->">{topics_list_box.row.LAST_POST_TIME} {topics_list_box.row.L_BY} {topics_list_box.row.LAST_POST_AUTHOR} {topics_list_box.row.LAST_POST_IMG}

Unknown end tag for &lt;/td&gt;


<!-- BEGIN multi_selection -->
<td><input onclick="javascript:check_uncheck_main_{topics_list_box.row.BOX_ID}();" type="checkbox" name="{topics_list_box.FIELDNAME}[]{topics_list_box.row.BOX_ID}" value="{topics_list_box.row.FID}" {topics_list_box.row.L_SELECT} />

Unknown end tag for &lt;/td&gt;


<!-- END multi_selection -->


Unknown end tag for &lt;/tr&gt;


<!-- END topic -->
<!-- BEGIN no_topics -->
<tr>
<td class="tcl" colspan="4"><strong>{topics_list_box.row.L_NO_TOPICS}

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<!-- END no_topics -->

<!-- BEGIN bottom -->


Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;


<div class="main-foot clearfix">
<!-- BEGIN multi_selection -->
<input onclick="check_uncheck_all_{topics_list_box.row.header_table.BOX_ID}();" type="checkbox" name="all_mark_{topics_list_box.row.header_table.BOX_ID}" value="0" />
<!-- END multi_selection -->
<p class="h2">{L_TOPICS} [{topics_list_box.row.bottom.COUNT_TOTAL_TOPICS}]

Unknown end tag for &lt;/p&gt;


<p class="options">
<a href="{U_MARK_READ}">{L_MARK_TOPICS_READ}

Unknown end tag for &lt;/a&gt;

 {S_WATCH_FORUM} <a href="#top">{L_BACK_TO_TOP}

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;


<!-- END bottom -->
<!-- BEGIN spacer --><br /><!-- END spacer -->
<!-- END row -->
<!-- END topics_list_box -->

<script src="http://illiweb.com/rsc/24/frm/admin/admin.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;


<style>/* Tooltip */
#tooltip .header {display:none}
#tooltip .tiplFMvi{border-bottom:1.5px dashed;padding-bottom:5px;margin-bottom:5px}
#tooltip{max-width:550px;position:absolute;background-color:#FFF;border:2px solid blue;padding:5px;border-radius:3px;color:#000;z-index:99;}



Unknown end tag for &lt;/style&gt;

```