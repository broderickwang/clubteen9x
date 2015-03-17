![http://i15.servimg.com/u/f15/17/97/99/57/55322110.jpg](http://i15.servimg.com/u/f15/17/97/99/57/55322110.jpg)
```
    <!-- BEGIN topics_blog_box -->
<!-- BEGIN row -->
<!-- BEGIN header_table -->
<!-- BEGIN multi_selection -->
<script type="text/javascript">
function check_uncheck_main_{topics_blog_box.row.header_table.BOX_ID}() {
var all_checked = true;
for (i = 0; (i < document.{topics_blog_box.FORMNAME}.elements.length) && all_checked; i++) {
if (document.{topics_blog_box.FORMNAME}.elements[i].name == '{topics_blog_box.FIELDNAME}[]{topics_blog_box.row.header_table.BOX_ID}') {
all_checked = document.{topics_blog_box.FORMNAME}.elements[i].checked;
}
}
document.{topics_blog_box.FORMNAME}.all_mark_{topics_blog_box.row.header_table.BOX_ID}.checked = all_checked;
}
function check_uncheck_all_{topics_blog_box.row.header_table.BOX_ID}() {
for (i = 0; i < document.{topics_blog_box.FORMNAME}.length; i++) {
if (document.{topics_blog_box.FORMNAME}.elements[i].name == '{topics_blog_box.FIELDNAME}[]{topics_blog_box.row.header_table.BOX_ID}') {
document.{topics_blog_box.FORMNAME}.elements[i].checked = document.{topics_blog_box.FORMNAME}.all_mark_{topics_blog_box.row.header_table.BOX_ID}.checked;
}
}
}


Unknown end tag for &lt;/script&gt;


<!-- END multi_selection -->

<div class="main-head">
<!-- BEGIN multi_selection -->
<input onclick="check_uncheck_all_{topics_blog_box.row.header_table.BOX_ID}();" type="checkbox" name="all_mark_{topics_blog_box.row.header_table.BOX_ID}" value="0" />
<!-- END multi_selection -->
<h1 class="page-title">{topics_blog_box.row.L_TITLE} [{topics_blog_box.row.COUNT_TOTAL_TOPICS}]

Unknown end tag for &lt;/h1&gt;




Unknown end tag for &lt;/div&gt;


<div class="main-content">
<table cellspacing="0" class="table">
<tbody class="statused">
<!-- END header_table -->

<!-- BEGIN header_row -->
<strong>{topics_blog_box.row.L_TITLE}

Unknown end tag for &lt;/strong&gt;


<!-- END header_row -->

<!-- BEGIN topic -->
<!-- BEGIN table_sticky -->


Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;



<div class="main-head">
<!-- BEGIN multi_selection -->
<input onclick="check_uncheck_all_{topics_blog_box.row.header_table.BOX_ID}();" type="checkbox" name="all_mark_{topics_blog_box.row.header_table.BOX_ID}" value="0" /   >
<!-- END multi_selection -->
<h2>{topics_blog_box.row.topic.table_sticky.L_TITLE} [{topics_blog_box.row.topic.table_sticky.COUNT_TOTAL_TOPICS}]

Unknown end tag for &lt;/h2&gt;




Unknown end tag for &lt;/div&gt;


<div class="main-content">
<table cellspacing="0" class="table">
<tbody class="statused">
<!-- END table_sticky -->
<tr>
<td width="10%" >
<div class="blog_message">
{topics_blog_box.row.FIRST_POST_TEXT}


Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;



<td class="tcl tdtopics <!-- BEGIN line_sticky --> sticky-separator <!-- END line_sticky -->">
<!-- BEGIN single_selection -->
<input type="radio" name="{topics_blog_box.FIELDNAME}" value="{topics_blog_box.row.FID}" {topics_blog_box.row.L_SELECT} />
<!-- END single_selection -->

<div class="blog_title">
<h2 class="topic-title hierarchy"><a class="topictitle" href="{topics_blog_box.row.U_VIEW_TOPIC}">{topics_blog_box.row.TOPIC_TITLE}

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/h2&gt;





Unknown end tag for &lt;/div&gt;



<!-- BEGIN switch_description -->
<span class="genmed">
<br />
{topics_blog_box.row.topic.switch_description.TOPIC_DESCRIPTION}


Unknown end tag for &lt;/span&gt;


<!-- END switch_description -->
<div class="blog_comments">
<span class="gensmall">{topics_blog_box.row.L_BY} <strong>{topics_blog_box.row.TOPIC_AUTHOR}

Unknown end tag for &lt;/strong&gt;

 -
({topics_blog_box.row.FIRST_POST_DMY_VALUE0}/
{topics_blog_box.row.FIRST_POST_DMY_VALUE1}/
{topics_blog_box.row.FIRST_POST_DMY_VALUE2})  -  <a href="{topics_blog_box.row.U_VIEW_TOPIC}#comments">{L_COMMENTS}

Unknown end tag for &lt;/a&gt;

: {topics_blog_box.row.REPLIES} -
{L_VIEWS}: {topics_blog_box.row.VIEWS}


Unknown end tag for &lt;/div&gt;


<div class="clear">

Unknown end tag for &lt;/div&gt;



<br />

<!-- BEGIN multi_selection -->
<input onclick="javascript:check_uncheck_main_{topics_blog_box.row.BOX_ID}();" type="checkbox" name="{topics_blog_box.FIELDNAME}[]{topics_blog_box.row.BOX_ID}" value="{topics_blog_box.row.FID}" {topics_blog_box.row.L_SELECT} />
<!-- END multi_selection -->


Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<!-- END topic -->
<!-- BEGIN no_topics -->
<tr>
<td class="tcl" colspan="4"><strong>{topics_blog_box.row.L_NO_TOPICS}

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
<input onclick="check_uncheck_all_{topics_blog_box.row.header_table.BOX_ID}();" type="checkbox" name="all_mark_{topics_blog_box.row.header_table.BOX_ID}" value="0" />
<!-- END multi_selection -->
<p class="h2">{L_TOPICS} [{topics_blog_box.row.bottom.COUNT_TOTAL_TOPICS}]

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
<!-- END topics_blog_box -->

<!-- BEGIN switch_image_resize -->
<script type="text/javascript">
//<![CDATA[
$(resize_images({ 'selector' : '.blog_message', 'max_width' : {switch_image_resize.IMG_RESIZE_WIDTH}, 'max_height' : {switch_image_resize.IMG_RESIZE_HEIGHT} }));
//]]>


Unknown end tag for &lt;/script&gt;


<!-- END switch_image_resize -->

<style>
@charset "utf-8";.blog_message table, .blog_message div, .blog_message hr, .blog_message br, .blog_message embed{display:none!important}
.blog_message {font-size: 0px;height: 88px;width: 128px;overflow: hidden;font-family: none;background: url(http://i48.servimg.com/u/f48/16/18/15/10/untitl85.png) no-repeat 0px 5px;padding-top: 5px;font-size: 0px;font-family: none;margin-left: 20px;}
.blog_message img {width: 126px;height: 86px;background-color: beige;border: 1px solid #626263; }
.pun tbody.statused td.tcl {padding-left: 0;}


Unknown end tag for &lt;/style&gt;




```