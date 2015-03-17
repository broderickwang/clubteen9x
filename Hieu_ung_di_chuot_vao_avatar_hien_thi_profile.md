Hiệu ứng này gần giống với avatar dop menu của baivong:D
khi rê chuột vào ảnh avatar trong forum thì nó sẽ hiện lên khung Profile rất đẹp
Chú ý chỉ dành cho Phpbb2
Demo

![http://i45.servimg.com/u/f45/17/45/29/75/110.jpg](http://i45.servimg.com/u/f45/17/45/29/75/110.jpg)


Bước làm :

Cho đoạn sau vào css :

```



ul.columns {
list-style: none;
margin: 0 auto; padding: 0;
}
ul.columns li {
float: left; display: inline;
margin: 10px; padding: 0;
position: relative;
}
ul.columns li:hover {z-index: 99;}

ul.columns li img {
position: relative;
filter: alpha(opacity=30);
opacity: 0.3;
-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=30)"; /*--IE8 Specific--*/
}
ul.columns li:hover img{
z-index: 999;
filter: alpha(opacity=100);
opacity: 1;
-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
}

ul.columns li .info {
position: absolute;
left: -10px; top: -10px;
padding: 210px 10px 20px;
width: 220px;
display: none;
background: #fff;
border: 4px solid black;
-moz-border-radius: 7px;
-webkit-border-radius: 7px;
-moz-box-shadow: 0px 0px 10px gray;
-webkit-box-shadow: 0px 0px 10px gray;
box-shadow: 0px 0px 10px black;
float: center;
text-shadow: black 5px 0px 5px;
}
ul.columns li:hover .info {display: block;}

ul.columns li h2 {
font-size: 1.2em;
font-weight: normal;
text-transform: uppercase;
margin: 0; padding: 10px 0;
}
ul.columns li p {padding: 0; margin: 0; font-size: 0.9em;}

```

Thay toàn bộ Viewtopic\_body = code sau

```

<script type="text/javascript">
//<![CDATA[
var multiquote_img_off = '{JS_MULTIQUOTE_IMG_OFF}', multiquote_img_on = '{JS_MULTIQUOTE_IMG_ON}', _atr = '{JS_DIR}addthis/', _ati = '{PATH_IMG_FA}addthis/'{ADDTHIS_LANG}, addthis_localize = { share_caption: "{L_SHARE_CAPTION}", email: "{L_EMAIL}", email_caption: "{L_EMAIL_CAPTION}", favorites: "{L_SHARE_BOOKMARKS}", print: "{L_PRINT}", more: "{L_MORE}" };
$(function(){
_atc.cwait = 0;
$('.addthis_button').mouseup(function(){
if ($('#at15s').css('display') == 'block') {
addthis_close();
addthis_close();
}
});
});
//]]>


Unknown end tag for &lt;/script&gt;



<table width="100%" border="0" cellspacing="2" cellpadding="0">
<tr>
<td align="left" valign="middle" nowrap="nowrap">
<span class="nav">
<!-- BEGIN switch_user_authpost -->
<a href="{U_POST_NEW_TOPIC}" rel="nofollow"><img src="{POST_IMG}" id="{POST_IMG_ID}one" alt="{L_POST_NEW_TOPIC}" align="middle" border="0" />

Unknown end tag for &lt;/a&gt;


<!-- END switch_user_authpost -->
<!-- BEGIN switch_user_authreply -->
<a href="{U_POST_REPLY_TOPIC}"><img src="{REPLY_IMG}" id="i_reply" alt="{L_POST_REPLY_TOPIC}" align="middle" border="0" />

Unknown end tag for &lt;/a&gt;


<!-- END switch_user_authreply -->


Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;


<td class="nav" valign="middle" width="100%"><span class="nav"><a class="nav" href="{U_INDEX}">{L_INDEX}

Unknown end tag for &lt;/a&gt;

{NAV_SEP}<a class="nav" href="{U_ALBUM}">{L_ALBUM}

Unknown end tag for &lt;/a&gt;

{NAV_CAT_DESC_SECOND}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;


<td align="right" valign="bottom" nowrap="nowrap" width="100%">
<span class="gensmall bold">
<a class="addthis_button" href="http://www.addthis.com/bookmark.php?v=250&pub=forumotion">{L_SHARE}

Unknown end tag for &lt;/a&gt;


|
<script type="text/javascript">
//<![CDATA[
insert_plus_menu('f{FORUM_ID}&t={TOPIC_ID}','{JS_SESSION_ID}', {JS_AUTH_FAVOURITES});
//]]>


Unknown end tag for &lt;/script&gt;




Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;



<table class="forumline" width="100%" border="0" cellspacing="1" cellpadding="0">
<tr align="right">
<td class="catHead" colspan="3" height="28">
<table width="100%" border="0" cellspacing="0" cellpadding="0">
<tr>
<td width="9%" class="noprint"> 

Unknown end tag for &lt;/td&gt;


<td align="center" nowrap="nowrap" class="t-title"><h1 class="cattitle"> <!-- google_ad_section_start -->{TOPIC_TITLE}<!-- google_ad_section_end -->

Unknown end tag for &lt;/h1&gt;



Unknown end tag for &lt;/td&gt;


<td align="right" nowrap="nowrap" width="9%" class="browse-arrows"><a href="{U_VIEW_OLDER_TOPIC}">{L_VIEW_PREVIOUS_TOPIC}

Unknown end tag for &lt;/a&gt;

 <a href="{U_VIEW_NEWER_TOPIC}">{L_VIEW_NEXT_TOPIC}

Unknown end tag for &lt;/a&gt;

 <a href="#bottom">{L_GOTO_DOWN}

Unknown end tag for &lt;/a&gt;

 

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<!-- BEGIN topicpagination -->
<tr>
<td class="row1 pagination" colspan="2" align="right" valign="top"><span class="gensmall">{PAGINATION}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<!-- END topicpagination -->
{POLL_DISPLAY}
<tr>
<th class="thLeft" nowrap="nowrap" width="150px" height="26">{L_AUTHOR}

Unknown end tag for &lt;/th&gt;


<th class="thRight" nowrap="nowrap" colspan="2">{L_MESSAGE}

Unknown end tag for &lt;/th&gt;




Unknown end tag for &lt;/tr&gt;


<!-- BEGIN postrow -->
<!-- BEGIN displayed -->
<tr class="post">
<td class="{postrow.displayed.ROW_CLASS}"{postrow.displayed.THANK_BGCOLOR} valign="top" width="150"><span class="name"><a name="{postrow.displayed.U_POST_ID}">

Unknown end tag for &lt;/a&gt;

<strong>{postrow.displayed.POSTER_NAME}

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



<span class="postdetails poster-profile">


Unknown end tag for &lt;/span&gt;



<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js">

Unknown end tag for &lt;/script&gt;


<script type="text/javascript">
$ (document).ready(function(){

$ ("a.switch_thumb").toggle(function(){
$ (this).addClass("swap");
$ ("ul.display").fadeOut("fast", function() {
$(this).fadeIn("fast").addClass("thumb_view");
});
}, function () {
$ (this).removeClass("swap");
$ ("ul.display").fadeOut("fast", function() {
$ (this).fadeIn("fast").removeClass("thumb_view");
});
});

});


Unknown end tag for &lt;/script&gt;


<ul class="columns">
<li>
<a href="#">{postrow.displayed.POSTER_AVATAR}

Unknown end tag for &lt;/a&gt;


<div class="info">
<h2>{postrow.displayed.POSTER_RANK}

Unknown end tag for &lt;/h2&gt;


{postrow.displayed.RANK_IMAGE}


<!-- BEGIN profile_field -->
{postrow.displayed.profile_field.LABEL} {postrow.displayed.profile_field.CONTENT}{postrow.displayed.profile_field.SEPARATOR}
<!-- END profile_field -->
{postrow.displayed.POSTER_RPG}


Unknown end tag for &lt;/span&gt;




{postrow.displayed.PROFILE_IMG} {postrow.displayed.PM_IMG} {postrow.displayed.EMAIL_IMG}<!-- BEGIN contact_field --> {postrow.displayed.contact_field.CONTENT}<!-- END contact_field --> {postrow.displayed.ONLINE_IMG}


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;





Unknown end tag for &lt;/td&gt;


<td class="{postrow.displayed.ROW_CLASS}"{postrow.displayed.THANK_BGCOLOR} valign="top" width="100%" height="28" colspan="2">
<table width="100%" border="0" cellspacing="0" cellpadding="0">
<tr>
<td><span class="postdetails"><img src="{postrow.displayed.MINI_POST_IMG}" alt="{postrow.displayed.L_MINI_POST_ALT}" title="{postrow.displayed.L_MINI_POST_ALT}" border="0" />{L_POST_SUBJECT}: {postrow.displayed.POST_SUBJECT}  <img src="{postrow.displayed.MINI_TIME_IMG}" alt="" border="0" />{postrow.displayed.POST_DATE}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;


<td valign="top" nowrap="nowrap" class="post-options">
{postrow.displayed.THANK_IMG} {postrow.displayed.MULTIQUOTE_IMG} {postrow.displayed.QUOTE_IMG} {postrow.displayed.EDIT_IMG} {postrow.displayed.DELETE_IMG} {postrow.displayed.IP_IMG} {postrow.displayed.REPORT_IMG}


Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td colspan="2" class="hr">
<hr />


Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td colspan="2">
<!-- BEGIN switch_vote_active -->
<div class="vote gensmall">
<!-- BEGIN switch_vote -->
<div class="vote-button"><a href="{postrow.displayed.switch_vote_active.switch_vote.U_VOTE_PLUS}">+

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/div&gt;


<!-- END switch_vote -->

<!-- BEGIN switch_bar -->
<div class="vote-bar" title="{postrow.displayed.switch_vote_active.L_VOTE_TITLE}">
<!-- BEGIN switch_vote_plus -->
<div class="vote-bar-plus" style="height:{postrow.displayed.switch_vote_active.switch_bar.switch_vote_plus.HEIGHT_PLUS}px;">

Unknown end tag for &lt;/div&gt;


<!-- END switch_vote_plus -->

<!-- BEGIN switch_vote_minus -->
<div class="vote-bar-minus" style="height:{postrow.displayed.switch_vote_active.switch_bar.switch_vote_minus.HEIGHT_MINUS}px;">

Unknown end tag for &lt;/div&gt;


<!-- END switch_vote_minus -->


Unknown end tag for &lt;/div&gt;


<!-- END switch_bar -->

<!-- BEGIN switch_no_bar -->
<div title="{postrow.displayed.switch_vote_active.L_VOTE_TITLE}" class="vote-no-bar">----

Unknown end tag for &lt;/div&gt;


<!-- END switch_no_bar -->

<!-- BEGIN switch_vote -->
<div class="vote-button"><a href="{postrow.displayed.switch_vote_active.switch_vote.U_VOTE_MINUS}">-

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/div&gt;


<!-- END switch_vote -->


Unknown end tag for &lt;/div&gt;


<!-- END switch_vote_active -->

<div class="postbody">

<div>{postrow.displayed.MESSAGE}

Unknown end tag for &lt;/div&gt;



<!-- BEGIN switch_attachments -->
<dl class="attachbox">
<dt>{postrow.displayed.switch_attachments.L_ATTACHMENTS}

Unknown end tag for &lt;/dt&gt;


<dd>
<!-- BEGIN switch_post_attachments -->
<dl class="file">
<dt>
<img src="{postrow.displayed.switch_attachments.switch_post_attachments.U_IMG}" />

<!-- BEGIN switch_dl_att -->
<a class="postlink" href="{postrow.displayed.switch_attachments.switch_post_attachments.switch_dl_att.U_ATTACHMENT}">{postrow.displayed.switch_attachments.switch_post_attachments.switch_dl_att.ATTACHMENT}

Unknown end tag for &lt;/a&gt;

 {postrow.displayed.switch_attachments.switch_post_attachments.switch_dl_att.ATTACHMENT_DEL}
<!-- END switch_dl_att -->

<!-- BEGIN switch_no_dl_att -->
{postrow.displayed.switch_attachments.switch_post_attachments.switch_no_dl_att.ATTACHMENT} {postrow.displayed.switch_attachments.switch_post_attachments.switch_no_dl_att.ATTACHMENT_DEL}
<!-- END switch_no_dl_att -->


Unknown end tag for &lt;/dt&gt;



<!-- BEGIN switch_no_comment -->
<dd>
<em>{postrow.displayed.switch_attachments.switch_post_attachments.switch_no_comment.ATTACHMENT_COMMENT}

Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/dd&gt;


<!-- END switch_no_comment -->

<!-- BEGIN switch_no_dl_att -->
<dd>
<em><strong>{postrow.displayed.switch_attachments.switch_post_attachments.switch_no_dl_att.TEXT_NO_DL}

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/dd&gt;


<!-- END switch_no_dl_att -->

<dd>({postrow.displayed.switch_attachments.switch_post_attachments.FILE_SIZE}) {postrow.displayed.switch_attachments.switch_post_attachments.NB_DL}

Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<!-- END switch_post_attachments -->


Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<!-- END switch_attachments -->

<div class="clear">

Unknown end tag for &lt;/div&gt;


<div class="signature_div">
{postrow.displayed.SIGNATURE}


Unknown end tag for &lt;/div&gt;





Unknown end tag for &lt;/div&gt;


<span class="gensmall">{postrow.displayed.EDITED_MESSAGE}

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td class="{postrow.displayed.ROW_CLASS} browse-arrows"{postrow.displayed.THANK_BGCOLOR} align="center" valign="middle" width="150">
<a href="#top">{L_BACK_TO_TOP}

Unknown end tag for &lt;/a&gt;

 <a href="#bottom">{L_GOTO_DOWN}

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/td&gt;


<td class="{postrow.displayed.ROW_CLASS} messaging gensmall"{postrow.displayed.THANK_BGCOLOR} width="100%" height="28">
<table border="0" cellspacing="0" cellpadding="0">
<tr>
<td valign="middle">


Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<!-- BEGIN first_post_br -->


Unknown end tag for &lt;/table&gt;




<table class="forumline" width="100%" border="0" cellspacing="1" cellpadding="0">
<tr>
<th class="thLeft" nowrap="nowrap" width="150px" height="26">{L_AUTHOR}

Unknown end tag for &lt;/th&gt;


<th class="thRight" nowrap="nowrap" colspan="2">{L_MESSAGE}

Unknown end tag for &lt;/th&gt;




Unknown end tag for &lt;/tr&gt;


<!-- END first_post_br -->
<!-- END displayed -->
<!-- BEGIN hidden -->
<tr>
<td class="postdetails {postrow.hidden.ROW_CLASS}" colspan="2" align="center">{postrow.hidden.MESSAGE}

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<!-- END hidden -->
<!-- END postrow -->
<!-- BEGIN no_post -->
<tr align="center">
<td class="row1" colspan="3" height="28">
<span class="genmed">{no_post.L_NO_POST}

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<!-- END no_post -->
<tr align="right">
<td class="catBottom" colspan="3" height="28">
<table width="100%" border="0" cellspacing="0" cellpadding="0">
<tr>
<td width="9%" class="noprint"> 

Unknown end tag for &lt;/td&gt;


<td align="center" nowrap="nowrap" class="t-title"><a name="bottomtitle">

Unknown end tag for &lt;/a&gt;

<h1 class="cattitle">{TOPIC_TITLE}

Unknown end tag for &lt;/h1&gt;



Unknown end tag for &lt;/td&gt;


<td align="right" nowrap="nowrap" width="9%" class="browse-arrows"><a href="{U_VIEW_OLDER_TOPIC}">{L_VIEW_PREVIOUS_TOPIC}

Unknown end tag for &lt;/a&gt;

 <a href="{U_VIEW_NEWER_TOPIC}">{L_VIEW_NEXT_TOPIC}

Unknown end tag for &lt;/a&gt;

 <a href="#top">{L_BACK_TO_TOP}

Unknown end tag for &lt;/a&gt;

 

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;



<table class="forumline noprint" width="100%" border="0" cellspacing="1" cellpadding="0">
<tr>
<td class="row2" valign="top" {COLSPAN_PAGINATION} width="150"><span class="gensmall">{PAGE_NUMBER}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;


<!-- BEGIN topicpagination -->
<td class="row1" align="right" valign="top" ><span class="gensmall">{PAGINATION}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;


<!-- END topicpagination -->


Unknown end tag for &lt;/tr&gt;


<!-- BEGIN switch_user_logged_in -->
<!-- BEGIN watchtopic -->
<tr>
<td class="row2" colspan="2" align="right" valign="top"><span class="gensmall">{S_WATCH_TOPIC}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<!-- END watchtopic -->
<!-- END switch_user_logged_in -->
<tr>
<td class="row2" colspan="2" align="center" style="padding:0px">
<!-- BEGIN switch_user_logged_in -->
<a name="quickreply">

Unknown end tag for &lt;/a&gt;


{QUICK_REPLY_FORM}

<!-- END switch_user_logged_in -->


Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td style="margin:0; padding: 0;" colspan="2">
<table border="0" cellpadding="0" width="100%" cellspacing="0" id="info_open" style="display:''">
<tbody>
<!-- BEGIN show_permissions -->
<tr>
<td class="row2" valign="top" width="25%"><span class="gensmall">{L_TABS_PERMISSIONS}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;


<td class="row1" valign="top" width="75%"><span class="gensmall">{S_AUTH_LIST}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<!-- END show_permissions -->
<tr>
<td class="catBottom" colspan="2" height="28">
<table width="100%" border="0" cellspacing="0" cellpadding="0">
<tr>
<td valign="middle" width="100%"><span class="nav"><a class="nav" href="{U_INDEX}">{L_INDEX}

Unknown end tag for &lt;/a&gt;

{NAV_SEP}<a class="nav" href="{U_ALBUM}">{L_ALBUM}

Unknown end tag for &lt;/a&gt;

{NAV_CAT_DESC_SECOND}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;


<!-- BEGIN show_permissions -->
<td align="right" valign="middle"><span class="gensmall"><a href="javascript:ShowHideLayer('info_open','info_close');"><img src="{TABS_LESS_IMG}" alt="-" align="middle" border="0" />

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;


<!-- END show_permissions -->


Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td style="margin:0; padding: 0;" colspan="2">
<table border="0" cellpadding="0" cellspacing="0" width="100%" id="info_close" style="display:none;">
<tbody>
<tr>
<td class="catBottom" colspan="2" height="28">
<table width="100%" border="0" cellspacing="0" cellpadding="0">
<tr>
<td valign="middle" width="100%"><span class="nav"><a class="nav" href="{U_INDEX}">{L_INDEX}

Unknown end tag for &lt;/a&gt;

{NAV_SEP}<a class="nav" href="{U_ALBUM}">{L_ALBUM}

Unknown end tag for &lt;/a&gt;

{NAV_CAT_DESC_SECOND}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;


<td align="right" valign="middle"><span class="gensmall"><a href="javascript:ShowHideLayer('info_open','info_close');"><img src="{TABS_MORE_IMG}" alt="+" align="middle" border="0" />

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;



<form action="{S_JUMPBOX_ACTION}" method="get" name="jumpbox" onsubmit="if(document.jumpbox.f.value == -1){return false;}">
<table class="noprint" width="100%" border="0" cellspacing="2" cellpadding="0" align="center">
<tr>
<td align="left" valign="middle" nowrap="nowrap" {WIDTH_GALLERY}>
<span class="nav">
<!-- BEGIN switch_user_authpost -->
<a href="{U_POST_NEW_TOPIC}" rel="nofollow"><img src="{POST_IMG}" id="{POST_IMG_ID}Newtopic" alt="{L_POST_NEW_TOPIC}" align="middle" border="0" />

Unknown end tag for &lt;/a&gt;


<!-- END switch_user_authpost -->
<!-- BEGIN switch_user_authreply -->
<a href="{U_POST_REPLY_TOPIC}"><img src="{REPLY_IMG}" alt="{L_POST_REPLY_TOPIC}" align="middle" border="0" />

Unknown end tag for &lt;/a&gt;


<!-- END switch_user_authreply -->


Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;


<!-- BEGIN viewtopic_bottom -->
<td align="right" nowrap="nowrap"><span class="gensmall">{L_JUMP_TO}: {S_JUMPBOX_SELECT} <input class="liteoption" type="submit" value="{L_GO}" />

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;


<!-- END viewtopic_bottom -->
<!-- BEGIN moderation_panel -->
<td align="center">
<span class="gensmall">{moderation_panel.U_YOUR_PERSONAL_MODERATE}

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;


<td align="center" width="250">
<span class="gensmall"> 

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;


<!-- END moderation_panel -->


Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/form&gt;



<!-- BEGIN viewtopic_bottom -->
<table class="noprint" width="100%" border="0" cellspacing="2" cellpadding="0" align="center">
<tr>
<td colspan="2" align="left" valign="top" nowrap="nowrap">
{S_TOPIC_ADMIN}

<form name="action" method="get" action="{S_FORM_MOD_ACTION}">
<input type="hidden" name="t" value="{TOPIC_ID}" />
<input type="hidden" name="sid" value="{S_SID}" />
<span class="gen">{L_MOD_TOOLS}
{S_SELECT_MOD} <input class="liteoption" type="submit" value="{L_GO}" />

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/form&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;


<!-- END viewtopic_bottom -->

<!-- BEGIN switch_image_resize -->
<script type="text/javascript">
//<![CDATA[
$(resize_images({ 'selector' : '.postbody', 'max_width' : {switch_image_resize.IMG_RESIZE_WIDTH}, 'max_height' : {switch_image_resize.IMG_RESIZE_HEIGHT} }));
//]]>


Unknown end tag for &lt;/script&gt;


<!-- END switch_image_resize -->

<script type="text/javascript" src="{JS_DIR}addthis/addthis_widget.js">

Unknown end tag for &lt;/script&gt;





```