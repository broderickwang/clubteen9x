Demo:![http://i43.servimg.com/u/f43/17/53/46/78/110.jpg](http://i43.servimg.com/u/f43/17/53/46/78/110.jpg)


Mình tách từ skin Fmvi ver 1 ra
Trong này có những Code : Avatar dop Menu , Nút Thích + Báo xấu , chức năng tin nhắn cho Tường nhà

Cách làm :

Bước 1 : Cho đoạn sau vào Css :

```

/* drop menu avatar */
.pun .user{overflow:visible;margin-top:0!important;width:13em;padding:0}
.cl dt{width:75px}
.cl dt span{color:#000!important}
.cl dd{width:110px}
.cl dd,.cl dt{float:left;height:1.6em;line-height:1.6em}
.useravatar img{width:120px;background-color:#F5F5F5;border-bottom:2px solid;border-radius:3px;border-right:2px solid;padding:5px}
.morelink a{padding-right:13px}
.pun .post .user,.pun .postfoot{margin-left:-13em!important;position:relative}
.pun .postmain{margin-left:13em!important}
.main .main-head,.main .main-foot{border:3px double}
.closeWIndowF{background-color:transparent;color:red;font-family:Arial,Helvetica,sans-serif;font-variant:small-caps;letter-spacing:-1px;opacity:1;text-decoration:none;text-transform:capitalize;font-size:20px;text-shadow:0 0 9px #eee 3px 0 1px #131313;font-weight:700;padding:5px}
.user .status{padding-right:20px;margin-bottom:-3px;color:green;float:right;width:250px;height:18px}
.user-ident .posthead{background-color:transparent;font-size:9px;height:2.6em;left:-2px;position:absolute;text-align:center;top:-3.7em;width:15.3em;padding:.5em 1.3em .5em 1em}
.user-ident .userInfoF{position:absolute;z-index:301;background:none repeat scroll 0 0 #fff;border:1px solid #cdcdcd;box-shadow:2px 2px 3px #ccc;width:510px;left:-2px;display:none;top:-1px;padding:15px 0 15px 10px}
.user-ident .user-info{float:right;width:370px}
.user-ident .manuUserF{float:left;border-bottom:1px dashed;margin-bottom:5px;width:350px;position:relative}
.user-ident .morelink{text-align: center;float:left;border-top:1px dashed;padding-top:5px;width:350px}

.pun .postfoot .user-contact{float:none;left:-0.7em;position:absolute;text-align:center;width:13em;z-index:99}
/* Tin nháº¯n tá»± Ä‘á»™ng vĂ  nĂºt Like */
#profile-advanced-details .autobot{color:#2220FB!important;font-size:14px!important;text-shadow:1px 1px 1px #000!important}
.loaddingLike{background:url(http://i48.servimg.com/u/f48/16/58/89/73/loadin11.gif) no-repeat scroll center center transparent;display:none;height:1.4em;width:126px;margin:-1.4em 0 -3px 200px}
.FMvi-like em {display:none;}
.post .post-options{height: 22px;position:relative}
.FMvi-like .nolikeplus{float:left}
.FMvi-like .nolikeminus{cursor:pointer;float:left;left:80px;position:absolute;top:5px}
.FMvi-like{min-width: 180px;left:180px;position:absolute;display:none;}
.FMvi-like .likePro,.FMvi-like .likeNone{border-radius:1px 1px 1px 1px;color:#FFF;text-align:left;width:57px;padding:3px 5px}
.FMvi-like .likePro{cursor:pointer!important;background:url(http://i48.servimg.com/u/f48/16/58/89/73/like_b12.png) no-repeat scroll 45px center #31A8FC!important;border:1px solid #2888CC!important}
.FMvi-like .likeNone{cursor:not-allowed;background:url(http://i48.servimg.com/u/f48/16/58/89/73/like_n11.png) no-repeat scroll 45px center #B1B1B1;border:1px solid #919699}
.FMvi-like .likePro:hover{text-shadow:1px 1px 1px #000}
.FMvi-like .nub{display:none;background-image:url(http://i48.servimg.com/u/f48/16/58/89/73/tip10.png);background-position:0 0;background-repeat:no-repeat;float:left;height:8px;margin-left:-55px;margin-top:24px;position:relative;width:13px;z-index:99}
.FMvi-like .commentLike{min-width: 280px;display:none;background-color:#FBFAE6;border:1px solid #A3A3A3;float:left;left:0;top:30px;position:absolute;z-index:30;padding:5px}
.commentLike input{background-color:#FFF;border:1px solid #A3A3A3;display:none;height:28px;width:350px}
.commentLike p{padding:7px 0;text-align:left}
.FMvi-like .closeFMvi_like{background-image:url(http://i48.servimg.com/u/f48/16/58/89/73/tip10.png);background-position:0 -9px;background-repeat:no-repeat;height:16px;right:2px;top:2px;position:absolute;width:15px}

```
Bước 2 : Vào Viewtopic\_body Tìm đoạn code sau

```



<!-- BEGIN postrow -->
...
Đến
...
<!-- END postrow -->


Unknown end tag for &lt;/div&gt;



```
Xóa toàn bộ đoạn code đó và thay = Code sau

```




<!-- BEGIN postrow -->
<!-- BEGIN displayed -->
<div class="post" {postrow.displayed.THANK_BGCOLOR}>
<a name="{postrow.displayed.U_POST_ID}">

Unknown end tag for &lt;/a&gt;


<div class="postmain" {postrow.displayed.THANK_BGCOLOR}>
<div id="p{postrow.displayed.U_POST_ID}" class="posthead" {postrow.displayed.THANK_BGCOLOR}>
<h2>
<a href="?showpost={postrow.displayed.U_POST_ID}"><strong>#{postrow.displayed.COUNT_POSTS}

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/a&gt;

{postrow.displayed.ICON}
<a href="{postrow.displayed.POST_URL}">{postrow.displayed.POST_SUBJECT}

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/h2&gt;




Unknown end tag for &lt;/div&gt;


<div class="postbody" {postrow.displayed.THANK_BGCOLOR}>
<div class="user">
<div class="user-ident" id="userinfo{postrow.displayed.U_POST_ID}" style="position: relative;">
<div class="posthead">
<em>{postrow.displayed.POST_DATE_NEW}

Unknown end tag for &lt;/em&gt;




Unknown end tag for &lt;/div&gt;


<div onmouseover="show_user({postrow.displayed.U_POST_ID})" onmouseout="hide_user({postrow.displayed.U_POST_ID})" class="userInfoF">
<div class="useravatar" style="float: left;">{postrow.displayed.POSTER_AVATAR}

Unknown end tag for &lt;/div&gt;


<div class="user-info">
<div class="manuUserF">
<strong>{postrow.displayed.POSTER_NAME}

Unknown end tag for &lt;/strong&gt;


<span class="fmviOnoff">{postrow.displayed.ONLINE_IMG}

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;


<dl class="cl" style="float:right; width: 370px;">
<!-- BEGIN profile_field -->
<dt>{postrow.displayed.profile_field.LABEL}

Unknown end tag for &lt;/dt&gt;


<dd>{postrow.displayed.profile_field.CONTENT}

Unknown end tag for &lt;/dd&gt;


<!-- END profile_field -->


Unknown end tag for &lt;/dl&gt;


<div>
<span style="color:blue">Phương châm:

Unknown end tag for &lt;/span&gt;


<marquee class="status">

Unknown end tag for &lt;/marquee&gt;




Unknown end tag for &lt;/div&gt;


<div class="morelink">
<a target="_blank" class="Upro5"><img alt="Tường nhà" src="http://i48.servimg.com/u/f48/16/58/89/73/profil10.png" />Tường nhà

Unknown end tag for &lt;/a&gt;


<a target="_blank" class="Utopic"><img alt="Xem bài viết" src="http://i48.servimg.com/u/f48/16/58/89/73/total_10.gif" />Bài viết

Unknown end tag for &lt;/a&gt;


<a target="_blank" class="Ufrien"><img alt="Kết bạn" src="http://i48.servimg.com/u/f48/16/58/89/73/friend10.png" />Kết bạn

Unknown end tag for &lt;/a&gt;


<a target="_blank" onClick="javascript:alert('Đang phát triển')" class="Umoney"><img alt="Tài sản" src="http://i48.servimg.com/u/f48/16/58/89/73/table_10.png" />Tài sản

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div class="user-basic-info">
<div onmouseover="show_user({postrow.displayed.U_POST_ID})" class="useravatar" style="padding: 15px 0 15px 9px">{postrow.displayed.POSTER_AVATAR}

Unknown end tag for &lt;/div&gt;


<p class="rankimg" style="padding:11px">{postrow.displayed.RANK_IMAGE}

Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div class="post-entry">
<div class="entry-content">
<div>
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
<img src="{postrow.displayed.switch_attachments.switch_post_attachments.U_IMG}"
/>
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
<em>
<strong>{postrow.displayed.switch_attachments.switch_post_attachments.switch_no_dl_att.TEXT_NO_DL}

Unknown end tag for &lt;/strong&gt;




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
<div class="clear">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<!-- BEGIN switch_signature -->
<div class="sig-content">{postrow.displayed.SIGNATURE_NEW}

Unknown end tag for &lt;/div&gt;


<!-- END switch_signature -->
<div class="postfoot">
<div class="options-button user-contact">{postrow.displayed.PROFILE_IMG} {postrow.displayed.PM_IMG} {postrow.displayed.EMAIL_IMG}
<!-- BEGIN contact_field -->{postrow.displayed.contact_field.CONTENT}
<!-- END contact_field -->


Unknown end tag for &lt;/div&gt;


<div class="post-options">
<iframe style="display:none" name="vote{postrow.displayed.U_POST_ID}" height="0px" width="0px" frameborder="0">

Unknown end tag for &lt;/iframe&gt;


<div onmouseover="show_like({postrow.displayed.U_POST_ID})" onmouseout="hide_like({postrow.displayed.U_POST_ID})" class="FMvi-like">
<a target="vote{postrow.displayed.U_POST_ID}" class="nolikeplus" onclick="comment_like({postrow.displayed.U_POST_ID})"><p id="FMvi_like{postrow.displayed.U_POST_ID}" class="likeNone">Thích

Unknown end tag for &lt;/p&gt;



Unknown end tag for &lt;/a&gt;


<a onclick="report_like({postrow.displayed.U_POST_ID})" target="vote{postrow.displayed.U_POST_ID}" class="nolikeminus">Báo xấu [<font color="red">0

Unknown end tag for &lt;/font&gt;

]

Unknown end tag for &lt;/a&gt;


<div id="nub{postrow.displayed.U_POST_ID}" class="nub">

Unknown end tag for &lt;/div&gt;


<div id="like{postrow.displayed.U_POST_ID}" class="commentLike">
<span class="closeFMvi_like" style="display:none" onclick="close_like({postrow.displayed.U_POST_ID})">

Unknown end tag for &lt;/span&gt;


<p>

Unknown end tag for &lt;/p&gt;


<div class="loaddingLike">

Unknown end tag for &lt;/div&gt;


<em>Gửi một bình luận lên tường nhà {postrow.displayed.POSTER_NAME}<br />

Unknown end tag for &lt;/em&gt;


<input onkeyup="send_comment(event,{postrow.displayed.U_POST_ID})" type="text" value="" />


Unknown end tag for &lt;/div&gt;


<div style="display:none" id="data-link-comment{postrow.displayed.U_POST_ID}">

Unknown end tag for &lt;/div&gt;


<!-- BEGIN switch_vote_active -->
<!-- BEGIN switch_vote -->
<a style="display:none" class="likeplus" href="{postrow.displayed.switch_vote_active.switch_vote.U_VOTE_PLUS}"><p class="likeNone">Thích

Unknown end tag for &lt;/p&gt;



Unknown end tag for &lt;/a&gt;


<!-- END switch_vote -->
<!-- BEGIN switch_bar -->
<div style="display:none" class="vote-bar" title="{postrow.displayed.switch_vote_active.L_VOTE_TITLE}">
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
<!-- BEGIN switch_vote -->
<a style="display:none" class="likeminus" href="{postrow.displayed.switch_vote_active.switch_vote.U_VOTE_MINUS}">Báo xấu

Unknown end tag for &lt;/a&gt;


<!-- END switch_vote -->
<!-- END switch_vote_active -->


Unknown end tag for &lt;/div&gt;



<span class="options-button">{postrow.displayed.THANK_IMG} {postrow.displayed.MULTIQUOTE_IMG} {postrow.displayed.QUOTE_IMG}
{postrow.displayed.EDIT_IMG} {postrow.displayed.DELETE_IMG} {postrow.displayed.IP_IMG}
{postrow.displayed.REPORT_IMG}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;


<div style="clear:both;">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<!-- BEGIN first_post_br -->


Unknown end tag for &lt;/div&gt;


<hr id="first-post-br" />
<div class="main-content topic">
<!-- END first_post_br -->
<!-- END displayed -->
<!-- BEGIN hidden -->
<p class="p-hidden">{postrow.hidden.MESSAGE}

Unknown end tag for &lt;/p&gt;


<!-- END hidden -->
<!-- END postrow -->


Unknown end tag for &lt;/div&gt;


<script type="text/javascript" src="http://fmvi-group.googlecode.com/files/FMvi-avatar-like.js">

Unknown end tag for &lt;/script&gt;


```

Thế là xong cười nhăn răng
hì hì , tách thôi nên các pro đừng chém