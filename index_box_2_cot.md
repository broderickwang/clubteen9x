vao CSS them

```

li.main-content {list-style: none; display:inline; width:49.0%}
ul#c3z {list-style: none; padding: 0px;width:100% !important;margin: 0;float: left}
#c3z li {width:48.9%;float: left;margin-left: 0px; padding: 4px;}
.c3zone br {display:none} .c3zone strong, .c3zone img {float:right}
.c3zone a {font-weight:bold; font-size:11px;padding-right:5px}
.tren_trai { background: url(http://i60.servimg.com/u/f60/14/90/90/23/tren_t10.gif) no-repeat bottom left; height:14px; }
.tren_phai { background: url(http://i60.servimg.com/u/f60/14/90/90/23/tren_p10.gif) no-repeat bottom right; height:14px; }
.tren { background: url(http://i60.servimg.com/u/f60/14/90/90/23/tren10.gif) repeat-x bottom left; height:14px; }
.duoi_trai { background: url(http://i60.servimg.com/u/f60/14/90/90/23/duoi_t10.gif) no-repeat top left; height:14px; }
.duoi_phai { background: url(http://i60.servimg.com/u/f60/14/90/90/23/duoi_p10.gif) no-repeat top right; height:14px; }
.duoi { background: url(http://i60.servimg.com/u/f60/14/90/90/23/duoi10.gif) repeat-x top left; height:14px; }
.doc_trai { background: url(http://i60.servimg.com/u/f60/14/90/90/23/doc_tr10.gif) repeat-y top left; }
.doc_phai { background: url(http://i60.servimg.com/u/f60/14/90/90/23/doc_ph10.gif) repeat-y top right; }

```

thay index\_box =

```

<table width="100%" border="0" cellspacing="1" cellpadding="0" align="center">
<tr>
<td valign="bottom">
<!-- BEGIN switch_user_logged_in -->
<span class="gensmall">{LAST_VISIT_DATE}<br />
{CURRENT_TIME}<br />


Unknown end tag for &lt;/span&gt;


<!-- END switch_user_logged_in -->
<div class="nav"><a class="nav" href="{U_INDEX}">{L_INDEX}

Unknown end tag for &lt;/a&gt;

{NAV_CAT_DESC}

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;


<td class="gensmall" align="right" valign="bottom">
<!-- BEGIN switch_user_logged_in -->
<a class="gensmall" href="{U_SEARCH_NEW}">{L_SEARCH_NEW}

Unknown end tag for &lt;/a&gt;

<br />
<a class="gensmall" href="{U_SEARCH_SELF}">{L_SEARCH_SELF}

Unknown end tag for &lt;/a&gt;

<br />
<!-- END switch_user_logged_in -->
<a class="gensmall" href="{U_SEARCH_UNANSWERED}">{L_SEARCH_UNANSWERED}

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;


<!-- BEGIN catrow --><!-- BEGIN tablehead --><table class="tborder" border="0" align="center" cellpadding="6" cellspacing="1" width="100%">

<tr>
<td class="tcat" colspan="5">
<a style="float: right;" href="#top">

Unknown end tag for &lt;/a&gt;


{catrow.tablehead.L_FORUM}


Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;


<ul id="c3z">
<!-- END tablehead -->
<!-- BEGIN forumrow --><li class="main-content">
<!-- begin vien top setup -->
<div class="tren">
<div class="tren_trai">
<div style="" class="tren_phai">


Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;


<div class="doc_trai">
<div class="doc_phai">
<div class="doc_duoi">
<div style="padding-left: 14px; padding-right: 14px;">
<!-- end vien top setup -->
<table>
<tbody><tr>
<td>
<img src="http://i60.servimg.com/u/f60/14/90/90/23/c31010.gif " border="0"><img title="{catrow.forumrow.L_FORUM_FOLDER_ALT}" src="{catrow.forumrow.FORUM_FOLDER_IMG}" alt="{catrow.forumrow.L_FORUM_FOLDER_ALT}" />

Unknown end tag for &lt;/td&gt;



<td><a href="{catrow.forumrow.U_VIEWFORUM}"><strong><font color="darkred">{catrow.forumrow.FORUM_NAME}

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/a&gt;

<br />


Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;





<div class="smallfont"><strong><center><table style="border:1px dashed orange; background:#FFFFFF"">
<tr>
<td width="100%"  class="text_hotnews">
Chủ đề: {catrow.forumrow.TOPICS} | Bài gửi: {catrow.forumrow.POSTS}

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/center&gt;



Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/div&gt;


<div class="forum_info">
<div class="smallfont" align="left">

<div style="white-space: nowrap;" class="c3zone">
{catrow.forumrow.LAST_POST}


Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;



<div class="forum_info">
{catrow.forumrow.FORUM_DESC}

Unknown end tag for &lt;/span&gt;

<br />
<!-- BEGIN switch_moderators_links -->
<table width="100%" style="border:1px dashed orange; background:#fffddf"">
<tr>
<td><img src="http://i60.servimg.com/u/f60/14/90/90/23/nguoid10.png" />

Unknown end tag for &lt;/td&gt;


<td width="100%"  class="text_hotnews"><font color=orangee size=1>Người Điều Hành:

Unknown end tag for &lt;/font&gt;

{catrow.forumrow.switch_moderators_links.MODERATORS}


Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/table&gt;


<!-- END switch_moderators_links -->
{catrow.forumrow.L_LINKS}{catrow.forumrow.LINKS}


Unknown end tag for &lt;/div&gt;



<!-- begin vien bot setup -->


Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;


<div class="duoi">
<div class="duoi_trai">
<div class="duoi_phai">


Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;





Unknown end tag for &lt;/li&gt;



Unknown end tag for &lt;/span&gt;


<!-- END forumrow -->
<!-- BEGIN tablefoot -->

Unknown end tag for &lt;/ul&gt;


<img src="{SPACER}" alt="" height="5" width="1" /><!-- END tablefoot --><!-- END catrow -->


```

nguồn lấy từ C3Z.CO.CC

```
<br /><table width="100%" border="0" cellspacing="1" cellpadding="0" align="center">
<tr>
<td valign="bottom">
<!-- BEGIN switch_user_logged_in -->
<span class="smallfont"><br />
<br />


Unknown end tag for &lt;/span&gt;


<!-- END switch_user_logged_in -->
<div class="navbar"><a class="navbar" href="">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;


<td class="smallfont" align="right" valign="bottom">
<!-- BEGIN switch_user_logged_in -->
<a class="smallfont" href="">

Unknown end tag for &lt;/a&gt;

<br />
<a class="smallfont" href="">

Unknown end tag for &lt;/a&gt;

<br />
<!-- END switch_user_logged_in -->
<a class="smallfont" href="">

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;

<br />
<!-- BEGIN catrow -->
<!-- BEGIN tablehead -->
<table cellpadding="0" cellspacing="0" width="100%" align="center"><tr><td><img src="http://i64.servimg.com/u/f64/14/64/52/89/tcat_l10.jpg" alt="" />

Unknown end tag for &lt;/td&gt;

<td style="background: url(http://i64.servimg.com/u/f64/14/64/52/89/tcat_c10.jpg) repeat-x top left" width="100%"><table cellpadding="0" cellspacing="0" width="100%" align="left"><tr><td align="left" style="padding: 12px 0px 0px 0px;"><table cellpadding="0" cellspacing="0" align="left" width="75%"><tr><td><img src="http://i64.servimg.com/u/f64/14/64/52/89/tcat_t10.jpg" alt="" />

Unknown end tag for &lt;/td&gt;

<td class="tcat" style="background: url(http://i64.servimg.com/u/f64/14/64/52/89/tcat_t11.jpg) repeat-x top left" width="100%" align="left"><Span class="secondarytitle"> <h2>{catrow.tablehead.L_FORUM}

Unknown end tag for &lt;/h2&gt;

 

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;

<td width="200"><img src="http://i64.servimg.com/u/f64/14/64/52/89/tcat_t12.jpg" alt="" />

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;

<td align="right"><a style="float:right" href="#" onclick="return toggle_collapse('forumbit_1')"><img id="collapseimg_forumbit_1" src="http://i64.servimg.com/u/f64/14/64/52/89/top1010.png" alt="" border="0" />

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;

<td><img src="http://i64.servimg.com/u/f64/14/64/52/89/tcat_r10.jpg" alt="" />

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td style="background: url(http://i64.servimg.com/u/f64/14/64/52/89/scale_10.jpg) repeat-y top left" valign="bottom">&nbsp;

Unknown end tag for &lt;/td&gt;

<td style="background: #FFFFFF;" width="100%"><table class="tborder" cellpadding="3" cellspacing="2" border="0" width="100%" align="center"><tbody id="collapseobj_forumbit_1" style=""><tr align="center">
<td class="thead" colspan="{catrow.tablehead.INC_SPAN}" nowrap="nowrap" width="100%" height="25"> Chuyên mục 

Unknown end tag for &lt;/td&gt;


<td class="thead" nowrap="nowrap" width="50" height="25">{L_TOPICS}

Unknown end tag for &lt;/td&gt;


<td class="thead" nowrap="nowrap" width="50" height="25">{L_POSTS}

Unknown end tag for &lt;/td&gt;


<td class="thead" nowrap="nowrap" width="150" height="25"><div style="width:150px;">{L_LASTPOST}

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<!-- END tablehead -->
<!-- BEGIN cathead -->
<tr>
<!-- BEGIN inc -->
<td class="{catrow.cathead.inc.INC_CLASS}" width="46"><img src="{SPACER}" height="0" width="46" />

Unknown end tag for &lt;/td&gt;


<!-- END inc -->
<td colspan="6" width="100%">
<h{catrow.cathead.LEVEL}>

<a title="{catrow.cathead.CAT_DESC}" href="{catrow.cathead.U_VIEWCAT}">{catrow.cathead.CAT_TITLE}

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/span&gt;


</h{catrow.cathead.LEVEL}>


Unknown end tag for &lt;/td&gt;


<td class="{catrow.cathead.CLASS_ROWPIC}" colspan="3" align="right"> 

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<!-- END cathead -->
<!-- BEGIN forumrow -->
<tr>
<!-- BEGIN inc -->
<td class="{catrow.forumrow.inc.INC_CLASS}" width="46"><img src="{SPACER}" height="0" width="46" alt="." />

Unknown end tag for &lt;/td&gt;


<!-- END inc -->
<td class="alt1" align="center" valign="middle">
<img title="{catrow.forumrow.L_FORUM_FOLDER_ALT}" src="{catrow.forumrow.FORUM_FOLDER_IMG}" alt="{catrow.forumrow.L_FORUM_FOLDER_ALT}" />


Unknown end tag for &lt;/td&gt;


<td class="alt1" onmouseover='this.className="alt2"' onmouseout='this.className="alt1"' colspan="{catrow.forumrow.INC_SPAN}" valign="top" width="100%" height="50"><div>
<a class="forumlink" href="{catrow.forumrow.U_VIEWFORUM}">{catrow.forumrow.FORUM_NAME}

Unknown end tag for &lt;/a&gt;

<br />

Unknown end tag for &lt;/div&gt;


<span class="smallfont">{catrow.forumrow.FORUM_DESC}

Unknown end tag for &lt;/span&gt;


<span class="smallfont">
<!-- BEGIN switch_moderators_links -->

<!-- END switch_moderators_links -->



Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;


<!-- BEGIN forum_link_no -->
<td class="alt1" align="center" valign="middle" height="50">
<span class="smallfont">{catrow.forumrow.TOPICS}

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;


<td class="alt2" align="center" valign="middle" height="50">
<span class="smallfont">{catrow.forumrow.POSTS}

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;


<td class="alt1" onmouseover='this.className="alt1"' onmouseout='this.className="alt1"' align="center" valign="middle" height="50">
<span class="smallfont">{catrow.forumrow.LAST_POST}

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;


<!-- END forum_link_no -->
<!-- BEGIN forum_link -->
<td class="alt3" colspan="3" align="center" valign="middle" height="50"><span class="smallfont">{catrow.forumrow.forum_link.HIT_COUNT}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;


<!-- END forum_link -->


Unknown end tag for &lt;/tr&gt;


<!-- END forumrow -->
<!-- BEGIN catfoot -->
<tr>
<!-- BEGIN inc -->
<td class="{catrow.catfoot.inc.INC_CLASS}" width="46"><img src="{SPACER}" height="0" width="46" />

Unknown end tag for &lt;/td&gt;


<!-- END inc -->
<td class="spaceRow" colspan="{catrow.catfoot.INC_SPAN}" height="1"><img src="{SPACER}" alt="" height="1" width="1" />

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<!-- END catfoot -->
<!-- BEGIN tablefoot -->


Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;

<td style="background: url(http://i64.servimg.com/u/f64/14/64/52/89/scale_11.jpg) repeat-y top right" valign="bottom">&nbsp;

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

 <tr><td><img src="http://i64.servimg.com/u/f64/14/64/52/89/footer10.jpg" alt="" />

Unknown end tag for &lt;/td&gt;

<td style="background: url(http://i64.servimg.com/u/f64/14/64/52/89/footer11.jpg) repeat-x top left" width="100%">&nbsp;

Unknown end tag for &lt;/td&gt;

<td><img src="http://i64.servimg.com/u/f64/14/64/52/89/footer12.jpg" alt="" />

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;


<img src="{SPACER}" alt="" height="5" width="1" />
<!-- END tablefoot -->
<!-- END catrow -->

```