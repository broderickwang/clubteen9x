Mới móc cái code này trong cái viewtopic\_body của skin Ola full mod
B1 và B2 ở dưới để ở chỗ thích hợp nhé
B1:Chèn Nút Like và Dislike

```

<div style="float: left;margin-top: 1px;">
<!-- BEGIN switch_vote_active -->
<div class="vote vote-button" title="Thích bài viết này">
<!-- BEGIN switch_vote -->
<a target="v{postrow.displayed.U_POST_ID}" href="{postrow.displayed.switch_vote_active.switch_vote.U_VOTE_PLUS}" alt="c3zplus" class="c3zplus lvote"><span style="font: normal 11px Tahoma, Arial, Helvetica, sans-serif;margin-left: -2px; color: #3B5998;">Thích

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;


<!-- END switch_vote -->


Unknown end tag for &lt;/div&gt;


<div class="vote vote-button" title="Không thích bài viết này">
<!-- BEGIN switch_vote -->
<a target="v{postrow.displayed.U_POST_ID}" href="{postrow.displayed.switch_vote_active.switch_vote.U_VOTE_MINUS}" alt="c3zminus" class="c3zminus lvote"><span style="font: normal 11px Tahoma, Arial, Helvetica, sans-serif;margin-left: -2px; color: #3B5998;">Không thích

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;


<!-- END switch_vote -->

Unknown end tag for &lt;/div&gt;

<div id="v{postrow.displayed.U_POST_ID}" class="loadding" style="display: none"><img src="http://i43.servimg.com/u/f43/16/03/04/56/icon_l12.gif"/> Đang Vote chờ xíu _! 

Unknown end tag for &lt;/div&gt;


<!-- END switch_vote_active -->

Unknown end tag for &lt;/div&gt;




```
B2:Chèn Phần đếm số vote


```

<div style="float:left; margin-top:5px;background-color:#FFF;">
<!-- BEGIN switch_vote_active -->
<iframe name="v{postrow.displayed.U_POST_ID}" class="ajaxvote" style="display:none">

Unknown end tag for &lt;/iframe&gt;


<!-- BEGIN switch_no_bar -->
<span class="c3zvau v{postrow.displayed.U_POST_ID}" title="{postrow.displayed.switch_vote_active.L_VOTE_TITLE}">{postrow.displayed.switch_vote_active.L_VOTE_TITLE}

Unknown end tag for &lt;/span&gt;


<!-- END switch_no_bar -->
<!-- BEGIN switch_bar -->
<span class="c3zvau v{postrow.displayed.U_POST_ID}" title="{postrow.displayed.switch_vote_active.L_VOTE_TITLE}">{postrow.displayed.switch_vote_active.L_VOTE_TITLE}

Unknown end tag for &lt;/span&gt;


<!-- END switch_bar -->
<!-- END switch_vote_active -->

Unknown end tag for &lt;/div&gt;




```

B3:Chèn script và css
Cho nốt code này vào cuối viewtopic\_body là xong


```

<style>
/*vote*/
.ost,.share,.c3zvau .qua,.no{background-position:5px 50%;background-repeat:no-repeat;border:1px solid #C2D5E3;margin:6px 2px 0;padding:5px 8px 5px 25px}.share{background-image:url(http://i43.servimg.com/u/f43/16/03/04/56/fav10.png)}.qua{background-image:url(http://i43.servimg.com/u/f43/16/03/04/56/no10.gif);padding-left:29px!important}.no{padding:5px 8px}.no .vop{background:url(http://i43.servimg.com/u/f43/16/03/04/56/like-f10.png) no-repeat left center;padding:0 0 0 18px}.no .vom{background:url(http://i43.servimg.com/u/f43/16/03/04/56/dislik10.png) no-repeat left center;padding:0 0 0 18px}
.vote-button{float:left;width:60px}
.c3zplus:hover{background-color:#ebedf4;border-color:#9dacce}
.c3zminus:hover{background-color:#ebedf4;border-color:#9dacce}
.c3zplus {
background: url(http://i43.servimg.com/u/f43/16/03/04/56/like-f10.png) no-repeat scroll 0 0 #ECEEF5;
background-position: 6px 36%;
background-repeat: no-repeat;
border: 1px solid #CAD4E7;
border-radius: 3px 3px 3px 3px;
color: white!important;
display: block;
float: left;
height: 13px;
margin: -4px 2px 0;
padding: 4px 4px 5px 24px;
position: relative;
text-align: left;
width: 25px;
}
.c3zminus {
background: url(http://i43.servimg.com/u/f43/16/03/04/56/dislik10.png) no-repeat scroll #ECEEF5;
background-position: 6px 36%;
background-repeat: no-repeat;
border: 1px solid #CAD4E7;
border-radius: 3px 3px 3px 3px;
color: white!important;
display: block;
float: left;
height: 13px;
margin: -4px 0px 0;
padding: 4px 4px 5px 24px;
position: relative;
text-align: left;
width: 55px;
}


Unknown end tag for &lt;/style&gt;


<script type="text/javascript">
function chvote(a, b) {
"Message not voted" == b && (b = "c3zone z vietk 0% (0 vote)");
var d = parseInt(b.split(" ")[3], 10) / 100,
c = parseInt(b.split(" ")[4].substr(1), 10),
b = "Message reputation : " + Math.round(100 * ("c3zplus" == a ? (d * c + 1) / (c + 1) : d * c / (c + 1))) + "% (" + (c + 1) + " vote)";
return votetrans(b)
}
$(".c3zvau").each(function () {
var a = $(this).text();
$(this).html(votetrans(a))
});

function votetrans(a) {
if ("Message not voted" == a) return "<span class='qua'>Hãy là người đầu tiên thích điều này

Unknown end tag for &lt;/span&gt;

";
var b = parseInt(a.split(" ")[3], 10) / 100,
a = parseInt(a.split(" ")[4].substr(1), 10),
d = 0 != b ? "<span class=vop>" + Math.round(b * a) + "+

Unknown end tag for &lt;/span&gt;

" : "",
c = 0 != b && 1 != b ? ' <span style="color:#C2D5E3">|

Unknown end tag for &lt;/span&gt;

 ' : "",
a = 1 != b ? "<span class=vom>" + Math.round(a - b * a) + "-

Unknown end tag for &lt;/span&gt;

" : "",
b = Math.round(100 * b);
return "<span class=no>" + d + c + a + "

Unknown end tag for &lt;/span&gt;

 <span class=qua>Đánh giá: " + b + "%

Unknown end tag for &lt;/span&gt;

"
}
$(".lvote").click(function () {
"c3zplus" == $(this).attr("alt") ? $(this).parent().html("").next().html("") : $(this).parent().html("").prev().html("");
var a = $(this).attr("target"),
b = $(this).attr("alt"),
d = $("." + a).attr("title");
$("#" + a).show();
$("." + a).html(chvote(b, d));
$("#" + a).fadeIn("slow").animate({
opacity: 1
}, 1500).fadeOut("slow", function () {
$("." + a).fadeOut("slow").animate({
opacity: 1
}, 1E3).fadeIn()
});
$("." + $(this).attr("target")).removeAttr("title")
});


Unknown end tag for &lt;/script&gt;



```