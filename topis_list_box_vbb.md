Demo : http://congdongnet.us.to/f7p25-forum


vào topics\_list\_box xáo code hết và thay bằng


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
<h1 class="page-title">{topics_list_box.row.L_TITLE} aa[{topics_list_box.row.COUNT_TOTAL_TOPICS}]

Unknown end tag for &lt;/h1&gt;




Unknown end tag for &lt;/div&gt;


<div class="main-content">
<table cellspacing="0" class="table">

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
<h2>{topics_list_box.row.topic.table_sticky.L_TITLE}[{topics_list_box.row.topic.table_sticky.COUNT_TOTAL_TOPICS}]

Unknown end tag for &lt;/h2&gt;




Unknown end tag for &lt;/div&gt;


<div class="main-content">
<table cellspacing="0" class="table">

<tbody class="statused">
<!-- END table_sticky -->
<tr>
<td style="border-bottom:1px solid #ddd" class="tcl tdtopics <!-- BEGIN line_sticky --> sticky-separator <!-- END line_sticky -->">
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
<h2 class="topic-title"><a class="topictitle" href="{topics_list_box.row.U_VIEW_TOPIC}">{topics_list_box.row.TOPIC_TITLE}

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/h2&gt;


{topics_list_box.row.GOTO_OPEN} {topics_list_box.row.GOTO_PAGE_NEW} {topics_list_box.row.GOTO_CLOSE}
<br>
<br>
<b> Chủ Thớt : 

Unknown end tag for &lt;/b&gt;

{topics_list_box.row.TOPIC_AUTHOR}
<!-- BEGIN switch_description -->
<br />
{topics_list_box.row.topic.switch_description.TOPIC_DESCRIPTION}
<!-- END switch_description -->


Unknown end tag for &lt;/td&gt;


<td style="border-bottom:1px solid #ddd" class="tc2 <!-- BEGIN line_sticky --> sticky-separator <!-- END line_sticky -->">
<div>Trả Lời : {topics_list_box.row.REPLIES}

Unknown end tag for &lt;/div&gt;


<div>Lượt Xem : {topics_list_box.row.VIEWS}

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;


<td style="border-bottom:1px solid #ddd" class="tcr <!-- BEGIN line_sticky --> sticky-separator <!-- END line_sticky -->">
{topics_list_box.row.LAST_POST_TIME}
<br />

<b>Bởi

Unknown end tag for &lt;/b&gt;

 : {topics_list_box.row.LAST_POST_AUTHOR} {topics_list_box.row.LAST_POST_IMG}



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


```