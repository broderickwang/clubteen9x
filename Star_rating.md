![http://i12.servimg.com/u/f12/17/70/81/78/1-13-210.jpg](http://i12.servimg.com/u/f12/17/70/81/78/1-13-210.jpg)
![http://i12.servimg.com/u/f12/17/70/81/78/1-13-210.jpg](http://i12.servimg.com/u/f12/17/70/81/78/1-13-210.jpg)
![http://i12.servimg.com/u/f12/17/70/81/78/1-14-211.jpg](http://i12.servimg.com/u/f12/17/70/81/78/1-14-211.jpg)

Chức năng:

  * Hiển thị kết quả bình chọn dạng 5 ngôi sao.
  * Thông tin bình chọn gửi lên feedback. (không thông báo lên tường)
  * Hiển thị tooltip chi tiết.
  * Hiệu ứng sao rơi khi bình chọn.
  * Sử dụng ajax, không chuyển trang.
  * Quy ước:
> > Sao vàng: có thể bình chọn.
> > Sao đỏ: đã bình chọn hoặc bài của bạn.
> > Sao xám: tỉ lệ bình chọn 0%.



Hướng dẫn:

Bước 1: Thêm vào CSS:

```

/* star rating */
.voteStar{background:url(http://i15.servimg.com/u/f15/16/58/89/73/star10.png) no-repeat scroll 0 0 transparent;width:16px;height:16px;display:inline-block}
.v0{background-position:0 0}
.v1{background-position:0 -16px}
.v2{background-position:0 -32px}
.v3{background-position:0 -48px}
.v4{background-position:0 -64px}
.votebutton{left:-64px;position:absolute;top:5px;z-index:10}
.votebutton a{opacity:0.3;padding:0 7px}
.votetip{text-align:center;background-color:#474747;margin-top:5px;padding:3px 7px}
.voteBfmvi{position:relative;display:none;float:right}
.voteBfmvi a:hover{opacity:1}
.voteBfmvi:hover .voteshow{opacity:0.4}
#firstvote .votebutton{top:0}
.fmvistar,.fmviminus{height:10px;position:absolute;right:0;top:0;width:10px;margin:0}
.rootvote{height:10px;left:553px;position:absolute;top:10px;width:10px;url(http://i12.servimg.com/u/f12/17/70/81/78/13580710.png);url(http://i12.servimg.com/u/f12/17/70/81/78/sticky10.png);url(http://i12.servimg.com/u/f12/17/70/81/78/like_b11.png);url(http://i12.servimg.com/u/f12/17/70/81/78/dislik11.png);url(http://i12.servimg.com/u/f12/17/70/81/78/13581110.png);url(http://i12.servimg.com/u/f12/17/70/81/78/13581111.png);url(http://i12.servimg.com/u/f12/17/70/81/78/13581112.png);url(http://i12.servimg.com/u/f12/17/70/81/78/13581113.png);url(http://i12.servimg.com/u/f12/17/70/81/78/13581114.png);url(http://i12.servimg.com/u/f12/17/70/81/78/13581115.png)}
.rootvote img{display:none}


```

Bước 2: Thay templates viewcomments\_body:


```

<style type="text/css">
#pun-qpost{display:block}


Unknown end tag for &lt;/style&gt;


<span id="changeSfmvi" style="left: 0px; top: 47px; border-radius: 0px 3px 3px 0px; background-color: rgb(221, 221, 221); padding: 5px; width: 20px;" class="contactF">
<img src="http://www.google.com/reader/ui/3369744051-view_options_list.png" />
<img style="display:none" src="http://www.google.com/reader/ui/3538434020-view_options_details.png" />


Unknown end tag for &lt;/span&gt;


<script type="text/javascript">
//<![CDATA[
var multiquote_img_off = '{JS_MULTIQUOTE_IMG_OFF}', multiquote_img_on = '{JS_MULTIQUOTE_IMG_ON}', _atr = '{JS_DIR}addthis/', _ati = '{PATH_IMG_FA}addthis/'{ADDTHIS_LANG}, addthis_localize = { share_caption: "{L_SHARE_CAPTION}", email: "{L_EMAIL}", email_caption: "{L_EMAIL_CAPTION}", favorites: "{L_SHARE_BOOKMARKS}", print: "{L_PRINT}", more: "{L_MORE}" };
//]]>


Unknown end tag for &lt;/script&gt;


<span id="tidX" style="display:none">{TOPIC_ID}

Unknown end tag for &lt;/span&gt;


<div class="main paged">
<div class="paged-head clearfix">
<!-- BEGIN topicpagination -->
<p class="paging">{PAGINATION}

Unknown end tag for &lt;/p&gt;


<!-- END topicpagination -->
<p class="posting">
<!-- BEGIN switch_user_authpost -->
<a href="{U_POST_NEW_TOPIC}" rel="nofollow"><img src="{POST_IMG}" class="{POST_IMG_CLASS}" alt="{L_POST_NEW_TOPIC}" />

Unknown end tag for &lt;/a&gt;


<!-- END switch_user_authpost -->
<!-- BEGIN switch_user_authreply -->
<a href="{U_POST_REPLY_TOPIC}"><img src="{REPLY_IMG}" class="i_reply" alt="{L_POST_REPLY_TOPIC}" />

Unknown end tag for &lt;/a&gt;


<!-- END switch_user_authreply -->


Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;

{POLL_DISPLAY}
<div class="main-head clearfix">
<p class="h2">
<a href="#bottom">{L_GOTO_DOWN}

Unknown end tag for &lt;/a&gt;

{L_MESSAGE} [{PAGE_NUMBER}]

Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;


<div class="main-content topic">
<!-- BEGIN postrow -->
<!-- BEGIN displayed -->
<a name="{postrow.displayed.U_POST_ID}">

Unknown end tag for &lt;/a&gt;


<div id="p{postrow.displayed.U_POST_ID}" class="post" {postrow.displayed.THANK_BGCOLOR}>
<div class="postmain" {postrow.displayed.THANK_BGCOLOR}>
<div class="posthead" style="position: relative;" {postrow.displayed.THANK_BGCOLOR}>
<div class="rootvote" style="left: 867px;"><img class="fmvistar" alt="50,32,50" src="http://i12.servimg.com/u/f12/17/70/81/78/13581110.png" /><img class="fmvistar" alt="30,20,20" src="http://i12.servimg.com/u/f12/17/70/81/78/13581112.png" /><img class="fmvistar" alt="45,40,25" src="http://i12.servimg.com/u/f12/17/70/81/78/13581113.png" /><img class="fmvistar" alt="40,20,20" src="http://i12.servimg.com/u/f12/17/70/81/78/13581114.png" /><img class="fmvistar" alt="25,35,70" src="http://i12.servimg.com/u/f12/17/70/81/78/13581115.png" /><img class="fmvistar" alt="50,15,30" src="http://i12.servimg.com/u/f12/17/70/81/78/13581110.png" /><img class="fmvistar" alt="55,30,45" src="http://i12.servimg.com/u/f12/17/70/81/78/13581112.png" /><img class="fmvistar" alt="45,30,60" src="http://i12.servimg.com/u/f12/17/70/81/78/13581113.png" /><img class="fmvistar" alt="55,15,40" src="http://i12.servimg.com/u/f12/17/70/81/78/13581114.png" /><img class="fmvistar" alt="45,20,45" src="http://i12.servimg.com/u/f12/17/70/81/78/13581115.png" /><img class="fmviminus" src="http://i12.servimg.com/u/f12/17/70/81/78/13581111.png" />

Unknown end tag for &lt;/div&gt;


<span id="firstvote" class="voteBfmvi">
<!-- BEGIN switch_vote_active -->
<!-- BEGIN switch_vote -->
<div class="vote-button">
<a onclick="voteblog(this, 'm'); return false" class="mvote" onmouseover="show_tooltip(this, 'Quá tệ&nbsp;<img style=\'float: right\' alt=\'plus\' alt=\'minus\' src=\'http://i12.servimg.com/u/f12/17/70/81/78/sticky10.png\' />', 'FMvi.vn')" href="javascript:void(0)" alt="{postrow.displayed.switch_vote_active.switch_vote.U_VOTE_MINUS}"><img src="http://i12.servimg.com/u/f12/17/70/81/78/dislik11.png" />

Unknown end tag for &lt;/a&gt;


<a onclick="voteblog(this, 'p'); return false" class="pvote" onmouseover="show_tooltip(this, 'Rất hay&nbsp;<img style=\'float: right\' alt=\'plus\' alt=\'plus\' src=\'http://i12.servimg.com/u/f12/17/70/81/78/13580710.png\' />', 'FMvi.vn')" href="javascript:void(0)" alt="{postrow.displayed.switch_vote_active.switch_vote.U_VOTE_PLUS}"><img src="http://i12.servimg.com/u/f12/17/70/81/78/like_b11.png" />

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/div&gt;


<!-- END switch_vote -->
<!-- BEGIN switch_bar -->
<div class="vote-bar" title="{postrow.displayed.switch_vote_active.L_VOTE_TITLE}">


Unknown end tag for &lt;/div&gt;


<!-- END switch_bar -->
<!-- END switch_vote_active -->


Unknown end tag for &lt;/span&gt;


<h2>{postrow.displayed.ICON} <a class="tieudeT" href="{postrow.displayed.POST_URL}">{postrow.displayed.POST_SUBJECT}

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/h2&gt;




Unknown end tag for &lt;/div&gt;


<div class="postbody" {postrow.displayed.THANK_BGCOLOR}>
<div class="user online">
<div class="user-ident" style="position: relative;">
<div class="username authblog">
{postrow.displayed.POSTER_NAME}


Unknown end tag for &lt;/div&gt;


<div class="user-basic-info">
<div class="useravatar" style="padding: 15px 10px">{postrow.displayed.POSTER_AVATAR}

Unknown end tag for &lt;/div&gt;


<p class="rankimg" style="margin-left: -2px;">{postrow.displayed.RANK_IMAGE}

Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div class="post-entry">
<div class="entry-content">
<div>{postrow.displayed.MESSAGE}
<!-- BEGIN switch_attachments -->
<div class="clear">

Unknown end tag for &lt;/div&gt;


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
<!-- BEGIN switch_no_dl_att -->{postrow.displayed.switch_attachments.switch_post_attachments.switch_no_dl_att.ATTACHMENT}
{postrow.displayed.switch_attachments.switch_post_attachments.switch_no_dl_att.ATTACHMENT_DEL}
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
<em>{postrow.displayed.switch_attachments.switch_post_attachments.switch_no_dl_att.TEXT_NO_DL}

Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/dd&gt;


<!-- END switch_no_dl_att -->
<dd>({postrow.displayed.switch_attachments.switch_post_attachments.FILE_SIZE})
{postrow.displayed.switch_attachments.switch_post_attachments.NB_DL}

Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<!-- END switch_post_attachments -->


Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<!-- END switch_attachments -->


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;



<div class="postfoot clearfix">
<div class="options-button user-contact">{postrow.displayed.PROFILE_IMG} {postrow.displayed.PM_IMG} {postrow.displayed.EMAIL_IMG}
<!-- BEGIN contact_field -->{postrow.displayed.contact_field.CONTENT}
<!-- END contact_field -->


Unknown end tag for &lt;/div&gt;


<div class="post-options options-button">
{postrow.displayed.THANK_IMG} {postrow.displayed.MULTIQUOTE_IMG} {postrow.displayed.QUOTE_IMG} {postrow.displayed.EDIT_IMG} {postrow.displayed.DELETE_IMG} {postrow.displayed.IP_IMG} {postrow.displayed.REPORT_IMG}


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<!-- END displayed -->
<!-- BEGIN hidden -->
<p class="p-hidden">{postrow.hidden.MESSAGE}

Unknown end tag for &lt;/p&gt;


<!-- END hidden -->
<!-- END postrow -->


Unknown end tag for &lt;/div&gt;


<div id="bookmarks">
<!-- BEGIN social_bookmarking -->
<a href="{social_bookmarking.URL}" title="{social_bookmarking.TITLE}"
target="_blank" rel="nofollow">
<img class="{social_bookmarking.CLASS}" src="http://illiweb.com/fa/empty.gif" alt="{social_bookmarking.TITLE}" title="{social_bookmarking.TITLE}" />


Unknown end tag for &lt;/a&gt;


<!-- END social_bookmarking -->


Unknown end tag for &lt;/div&gt;


<div class="clear">

Unknown end tag for &lt;/div&gt;


<hr id="first-post-br" />
<div class="main-content blog_comments">
<!-- BEGIN comment -->
<!-- BEGIN displayed -->
<a name="{comment.displayed.U_POST_ID}">

Unknown end tag for &lt;/a&gt;


<div id="p{comment.displayed.U_POST_ID}" class="post">
<div class="blog_comment-avatar">{comment.displayed.POSTER_AVATAR}

Unknown end tag for &lt;/div&gt;


<div class="postbody">
<span class="nonchange"><em class="authblog">{comment.displayed.POSTER_NAME}

Unknown end tag for &lt;/em&gt;


<span class="onoffBlog">{comment.displayed.L_ONLINE}

Unknown end tag for &lt;/span&gt;


<div class="rootvote"><img class="fmvistar" alt="50,32,50" src="http://i12.servimg.com/u/f12/17/70/81/78/13581110.png" /><img class="fmvistar" alt="30,20,20" src="http://i12.servimg.com/u/f12/17/70/81/78/13581112.png" /><img class="fmvistar" alt="45,40,25" src="http://i12.servimg.com/u/f12/17/70/81/78/13581113.png" /><img class="fmvistar" alt="40,20,20" src="http://i12.servimg.com/u/f12/17/70/81/78/13581114.png" /><img class="fmvistar" alt="25,35,70" src="http://i12.servimg.com/u/f12/17/70/81/78/13581115.png" /><img class="fmvistar" alt="50,15,30" src="http://i12.servimg.com/u/f12/17/70/81/78/13581110.png" /><img class="fmvistar" alt="55,30,45" src="http://i12.servimg.com/u/f12/17/70/81/78/13581112.png" /><img class="fmvistar" alt="45,30,60" src="http://i12.servimg.com/u/f12/17/70/81/78/13581113.png" /><img class="fmvistar" alt="55,15,40" src="http://i12.servimg.com/u/f12/17/70/81/78/13581114.png" /><img class="fmvistar" alt="45,20,45" src="http://i12.servimg.com/u/f12/17/70/81/78/13581115.png" /><img class="fmviminus" src="http://i12.servimg.com/u/f12/17/70/81/78/13581111.png" />

Unknown end tag for &lt;/div&gt;


<span class="voteBfmvi" style="margin: -8px 250px 0 0 !important">
<!-- BEGIN switch_vote_active -->
<!-- BEGIN switch_vote -->
<div class="vote-button">
<a onclick="voteblog(this, 'm'); return false" class="mvote" onmouseover="show_tooltip(this, 'Quá tệ&nbsp;<img style=\'float: right\' alt=\'plus\' alt=\'minus\' src=\'http://i12.servimg.com/u/f12/17/70/81/78/sticky10.png\' />', 'FMvi.vn')" href="javascript:void(0)" alt="{comment.displayed.switch_vote_active.switch_vote.U_VOTE_MINUS}"><img src="http://i12.servimg.com/u/f12/17/70/81/78/dislik11.png" />

Unknown end tag for &lt;/a&gt;


<a onclick="voteblog(this, 'p'); return false" class="pvote" onmouseover="show_tooltip(this, 'Rất hay&nbsp;<img style=\'float: right\' alt=\'plus\' alt=\'plus\' src=\'http://i12.servimg.com/u/f12/17/70/81/78/13580710.png\' />', 'FMvi.vn')" href="javascript:void(0)" alt="{comment.displayed.switch_vote_active.switch_vote.U_VOTE_PLUS}"><img src="http://i12.servimg.com/u/f12/17/70/81/78/like_b11.png" />

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/div&gt;


<!-- END switch_vote -->
<!-- BEGIN switch_bar -->
<div class="vote-bar" title="{comment.displayed.switch_vote_active.L_VOTE_TITLE}">


Unknown end tag for &lt;/div&gt;


<!-- END switch_bar -->
<!-- END switch_vote_active -->


Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/span&gt;


<span class="comment-time">{comment.displayed.POST_DATE_NEW} {postrow.displayed.ICON}

Unknown end tag for &lt;/span&gt;


<span class="comment-number">
<img src="http://i48.servimg.com/u/f48/16/58/89/73/edit_s10.png" />
<div class="dropMenuP options-button">
{comment.displayed.THANK_IMG} {comment.displayed.MULTIQUOTE_IMG} {comment.displayed.QUOTE_IMG} {comment.displayed.EDIT_IMG} {comment.displayed.DELETE_IMG} {comment.displayed.IP_IMG} {comment.displayed.REPORT_IMG}


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/span&gt;


<span class="comment-content" {comment.displayed.THANK_BGCOLOR}>
<div class="post-entry">
<div class="entry-content">
<div>{comment.displayed.MESSAGE}

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/span&gt;


<span class="dialog">

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<!-- END displayed -->
<!-- BEGIN hidden -->
<p class="p-hidden">{comment.hidden.MESSAGE}

Unknown end tag for &lt;/p&gt;


<!-- END hidden -->
<!-- END comment -->
<!-- BEGIN no_comment -->
<div class="post">
<div class="postbody no_comment">
<p style="text-align:center">{no_comment.L_NO_COMMENT}

Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<!-- END no_comment -->
<div class="main-foot clearfix">
<p class="h2">
<a href="#top">{L_BACK_TO_TOP}

Unknown end tag for &lt;/a&gt;

{L_MESSAGE} [{PAGE_NUMBER}]

Unknown end tag for &lt;/p&gt;


<p class="options options-button">
<input type="hidden" name="t" value="{TOPIC_ID}" />
<!-- <input type="hidden" name="sid" value="{S_SID}" />-->
<input type="hidden" name="{SECURE_ID_NAME}" value="{SECURE_ID_VALUE}"
/>
<!-- BEGIN viewtopic_bottom -->{S_TOPIC_ADMIN}
<!-- END viewtopic_bottom -->


Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;



<a name="bottomtitle">

Unknown end tag for &lt;/a&gt;


<div class="paged-foot clearfix">
<!-- BEGIN topicpagination -->
<p class="paging">{PAGINATION}

Unknown end tag for &lt;/p&gt;


<!-- END topicpagination -->
<p class="posting">
<!-- BEGIN switch_user_authpost -->
<a href="{U_POST_NEW_TOPIC}" rel="nofollow"><img src="{POST_IMG}" class="{POST_IMG_CLASS}" alt="{L_POST_NEW_TOPIC}" />

Unknown end tag for &lt;/a&gt;


<!-- END switch_user_authpost -->

<!-- BEGIN switch_user_authreply -->
<a href="{U_POST_REPLY_TOPIC}"><img src="{REPLY_IMG}" class="i_reply" alt="{L_POST_REPLY_TOPIC}" />

Unknown end tag for &lt;/a&gt;


<!-- END switch_user_authreply -->


Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<p style="padding: 20px 0; text-align: center">« <a href="{U_VIEW_OLDER_TOPIC}">Xem bài trước

Unknown end tag for &lt;/a&gt;

 | <a href="{U_VIEW_NEWER_TOPIC}">Xem bài kế tiếp

Unknown end tag for &lt;/a&gt;

 »

Unknown end tag for &lt;/p&gt;


<script type="text/javascript">
$(".voteBfmvi").each(function () {
var c, f, a, d, h, b, e, g, j, k;
c = $(this).find(".vote-bar").attr("title");
/Message reputation :/.test(c) ? (f = c.split(/\W/), b = f[4], c = Math.round(b / 100 * f[7]), f = f[7] - c, a = Math.floor(b / 20), d = Math.round(b / 20), h = b / 20) : c = f = 0;
k = $(this).find(".vote-button");
k.length ? (e = "v4", g = "v2", j = "<font color='#E2FE6C'>B\u1ea1n ch\u01b0a b\u00ecnh ch\u1ecdn b\u00e0i vi\u1ebft n\u00e0y!

Unknown end tag for &lt;/font&gt;

", k = "<div class='votebutton'>" + k.html() + "

Unknown end tag for &lt;/div&gt;

") : (e = "v3", g = "v1", j = "<font color='#FF5B5B'>Kh\u00f4ng th\u1ec3 b\u00ecnh ch\u1ecdn b\u00e0i vi\u1ebft n\u00e0y!

Unknown end tag for &lt;/font&gt;

", k = "");
void 0 == a || c < f && 0 == c ? (a = d = -1, b = 0) : h > a && d > a ? a = d = a : d = -1;
setstar($(this), a, d, g, e, k, c, f, b, j)
});

function voteblog(c, f) {
$("#tooltip").css("visibility", "hidden");
var a, d, h, b, e, g, j;
a = $(c).parents(".voteBfmvi");
d = eval(a.find(".bloglike").text());
s = eval(a.find(".blogdlike").text());
$.post($(c).attr("alt"));
e = $(c).parents(".post");
q = "b\u00e0i vi\u1ebft c\u1ee7a [color=green][b][i]" + e.find(".authblog").text() + "[/i][/b][/color] t\u1ea1i [url=http://" + location.host + location.pathname + "?showpost=" + e.prev().attr("name") + "]" + $(".tieudeT").text() + "[/url]";
"p" == f ? (b = d + 1, sendbot("th\u00edch " + q), a.prev(".rootvote").find(".fmvistar").show().each(function () {
var b = $(this).attr("alt").split(",");
$(this).animate({
right: b[0],
width: b[1],
height: b[1],
top: b[2],
opacity: 0
}, 1E3, function () {
a.prev(".rootvote").remove()
})
})) : (h = s + 1, sendbot("kh\u00f4ng th\u00edch " + q), a.prev(".rootvote").find(".fmviminus").show().animate({
right: -20,
width: 50,
height: 50,
top: -20,
opacity: 0
}, 1E3, function () {
a.prev(".rootvote").remove()
}));
a.find(".bloglike").text(b);
a.find(".blogdlike").text(h);
d = eval(a.find(".bloglike").text());
h = eval(a.find(".blogdlike").text());
b = Math.round(100 * (d / (d + h)));
e = Math.floor(b / 20);
g = Math.round(b / 20);
j = b / 20;
d < h && 0 == d ? (g = e = -1, b = 0) : j > e && g > e ? g = e : (g = e, e = -1);
setstar(a, g, e, "v1", "v3", "", d, h, b, "<font color='#FF5B5B'>Kh\u00f4ng th\u1ec3 b\u00ecnh ch\u1ecdn b\u00e0i vi\u1ebft n\u00e0y!

Unknown end tag for &lt;/font&gt;

")
}
function setstar(c, f, a, d, h, b, e, g, j, k) {
c.html(b + "<div class='voteshow' onmouseover='show_tooltip(this, $(this).parent().find(\"div:last\").html(), \"FMvi.vn\")'><div class='voteStar'>

Unknown end tag for &lt;/div&gt;

<div class='voteStar'>

Unknown end tag for &lt;/div&gt;

<div class='voteStar'>

Unknown end tag for &lt;/div&gt;

<div class='voteStar'>

Unknown end tag for &lt;/div&gt;

<div class='voteStar'>

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div style='display:none'><h3 class='tiplFMvi' style='color:#0099FF'>TH\u00d4NG TIN B\u00ccNH CH\u1eccN

Unknown end tag for &lt;/h3&gt;

<p><strong>Th\u00edch:

Unknown end tag for &lt;/strong&gt;

&nbsp;<span class='bloglike' style='color:#FF66CC'>" + e + "

Unknown end tag for &lt;/span&gt;

&nbsp;l\u01b0\u1ee3t

Unknown end tag for &lt;/p&gt;

<p><strong>Kh\u00f4ng th\u00edch:

Unknown end tag for &lt;/strong&gt;

&nbsp;<span class='blogdlike' style='color:#009933'>" + g + "

Unknown end tag for &lt;/span&gt;

&nbsp;l\u01b0\u1ee3t

Unknown end tag for &lt;/p&gt;

<p><strong>T\u1ec9 l\u1ec7 b\u00ecnh ch\u1ecdn:

Unknown end tag for &lt;/strong&gt;

&nbsp;<span class='blogtlike' style='color:#FF6600'>" + j + "

Unknown end tag for &lt;/span&gt;

%

Unknown end tag for &lt;/p&gt;

<p class='votetip'>" + k + "

Unknown end tag for &lt;/p&gt;



Unknown end tag for &lt;/div&gt;

").fadeIn(300);
c.find(".voteStar:lt(" + f + ")").addClass(d);
c.find(".voteStar:eq(" + a + ")").addClass(h)
}


Unknown end tag for &lt;/script&gt;


<!-- BEGIN switch_user_logged_in -->
<a name="quickreply">

Unknown end tag for &lt;/a&gt;

{QUICK_REPLY_FORM}
<!-- END switch_user_logged_in -->
<div class="fmviToggle" style="width: 300px">
<div class="main">
<div class="main-head clearfix">
<p class="h2" style="width: 220px !important">Quyền hạn của bạn:

Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;


<div id="onlinelist">{S_AUTH_LIST} 

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<!-- BEGIN switch_image_resize -->
<script type="text/javascript">
<script type="text/javascript">
//<![CDATA[
$(resize_images({ 'selector' : '.post-entry .entry-content', 'max_width' : {switch_image_resize.IMG_RESIZE_WIDTH}, 'max_height' : {switch_image_resize.IMG_RESIZE_HEIGHT} }));
//]]>


Unknown end tag for &lt;/script&gt;


<!-- END switch_image_resize -->
<script src="{JS_DIR}addthis/addthis_widget.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;



```

Viết bởi baivong - www.fmvi.vn