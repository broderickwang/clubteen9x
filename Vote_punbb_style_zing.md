**Demo : www.khamphait.vn** Ghi Chú : mình chỉ để nút thích vì cái nút dislike mình thấy không hợp với forum.Nếu ai cần code có cả người không thích và nút dislike có thể liên hệ riêng vs mình.Đây cũng là lần cuối cùng mình nghỉ thi đại học tạm biệt các bạn .
**ưu Điểm : Vote nhanh,không chuyển trang.Đếm Số người ngay lập tức** Hướng Dẫn :
Chèn vô chỗ nào cần hiện nút vote này trong viewtopic\_body code sau

```


<div class="votene" style=" float: left;display:none;  text-align: left;  width: 20em; margin-left: 20px;">

<!-- BEGIN switch_vote_active -->

<table width="170px" border="0" cellspacing="0" cellpadding="0">
<tr valign="MIDDLE">



<iframe name="vote{postrow.displayed.U_POST_ID}" style="display:none">

Unknown end tag for &lt;/iframe&gt;




<td style="padding-left:5px" valign="middle" nowrap="nowrap" class="genmed gensmall">

<div class="vote vote-button">
<!-- BEGIN switch_vote -->
<a target="vote{postrow.displayed.U_POST_ID}" href="{postrow.displayed.switch_vote_active.switch_vote.U_VOTE_PLUS}" alt="plus" class="plus giet"><img src="http://i43.servimg.com/u/f43/16/03/04/56/like-f10.png"/>Thích

Unknown end tag for &lt;/a&gt;


<!-- END switch_vote -->


Unknown end tag for &lt;/div&gt;






Unknown end tag for &lt;/td&gt;


<td style="text-align: center;width: 90px;height: 20px!important;" class="smallfont">

<!-- BEGIN switch_no_bar -->

<div width="90px" style="position: relative;" class="votesta">
<span class="dialog">

Unknown end tag for &lt;/span&gt;


<span class="dosat vote{postrow.displayed.U_POST_ID}" title="{postrow.displayed.switch_vote_active.L_VOTE_TITLE}">
<script type="text/javascript">document.write(votekpi('{postrow.displayed.switch_vote_active.L_VOTE_TITLE}'));

Unknown end tag for &lt;/script&gt;




Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;


<!-- END switch_no_bar -->
<!-- BEGIN switch_bar -->
<div width="90px" style="position: relative;" class="votesta">
<span class="dialog">

Unknown end tag for &lt;/span&gt;


<span class="dosat vote{postrow.displayed.U_POST_ID}" title="{postrow.displayed.switch_vote_active.L_VOTE_TITLE}"><script type="text/javascript">document.write(votekpi('{postrow.displayed.switch_vote_active.L_VOTE_TITLE}'));

Unknown end tag for &lt;/script&gt;




Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;


<!-- END switch_bar -->


Unknown end tag for &lt;/td&gt;






Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;

 <!-- END switch_vote_active -->


Unknown end tag for &lt;/div&gt;



```
chèn luôn vào cuối

```


$(function(){
$(".giet").click(function(){
$(this).hide().after('Voted!');
$("." + $(this).attr("target")).html(dulieukpi($("." + $(this).attr("target")).attr("title")));
$("." + $(this).attr("target")).removeAttr("title");
});
});
function dulieukpi(vote) {
if (vote == "Message not voted") vote = "0% (0 vote)";
var a = parseInt(vote.split(" ")[0], 10) / 100;
var b = parseInt(vote.split(" ")[1].substr(1), 10);
a = (a * b + 1) / (b + 1);
vote = "Message reputation : " + Math.round(a * 100) + "% (" + (b + 1) + " vote)";
return votekpi(vote)
};

function votekpi(vote) {
if (vote == "Message not voted") return '0 người thích';
var a = parseInt(vote.split(" ")[3], 10) / 100;
var b = parseInt(vote.split(" ")[4].substr(1), 10);
return Math.round(a * b) + ' người thích'
};

```
CSS

```


.dialog {
background: url(http://i43.servimg.com/u/f43/17/43/09/69/icon-810.png) no-repeat;
position: absolute;
display: block;
width: 10px;
height: 10px;
background-position: -3px -3px;
left: -9px;
top: 7px;
}
div.votene{display:block!important}
.vote-button{float:left;width:65px}
.plus{float:left;width:49px;background-color: #ECEEF5;border: 1px solid black;-webkit-border-radius: 3px;
-webkit-border-radius: 3px;color: #3B5998!important;
border-color: #CAD4E7;-webkit-box-shadow:0 1px 0 rgba(0,0,0,.1);cursor:pointer;display:inline-block;font-size:11px;font-weight:700;line-height:13px;text-align:center;text-decoration:none;vertical-align:top;white-space:nowrap;padding: 3px 4px 0px 4px;}
.votesta{
background-color: white;
border: 1px solid #D0D0D0;
padding: 5px;
font-size: 11px;
position: relative;
}
```

Đây tạm gọi là bản demo cho code này thui nhé code này còn có thể nâng cấp thêm nhiều tính năng khác chúc các bạn vui vẻ