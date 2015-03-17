demo : http://hotro16.forumvi.com/


![http://i45.servimg.com/u/f45/14/65/61/19/last1611.jpg](http://i45.servimg.com/u/f45/14/65/61/19/last1611.jpg)






Sắp xếp widgets
![http://img808.imageshack.us/img808/6614/84277319.jpg](http://img808.imageshack.us/img808/6614/84277319.jpg)


an
mod\_most\_active\_starters

```

-->
<div  style="display: none;" id="sell2">
<!-- BEGIN POSTER -->
<div style="display:block; height:20px; overflow:hidden; line-height:18px;" onmouseover="show_tooltip(this,this.getElementsByTagName('div')[0].innerHTML,'Thông Tin Thành Viên');" onmouseout="hidetip();" class="smallfont">
<div style="display:none">Tên: {POSTER.NAME}<br>Số Bài Post :{POSTER.NB_TOPICS}

Unknown end tag for &lt;/div&gt;

<div class="mtmymenu"> <div class="mtmymenuu">{POSTER.NAME}  

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<!-- END POSTER -->


Unknown end tag for &lt;/div&gt;


<!--

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;


```


mod\_most\_active\_topics

```

-->

<div  style="display: none;" id="sell6">
<!-- BEGIN TOPIC -->
<div style="display:block; height:20px; overflow:hidden; line-height:18px;" onmouseover="showtip(this.getElementsByTagName('div')[0].innerHTML);" onmouseout="hidetip();" class="smallfont">
<div style="display:none">
{TOPIC.NAME}


Unknown end tag for &lt;/div&gt;

<div style="width:100px;"><a href="{TOPIC.LINK}" title="{TOPIC.TITLE}"><b>{TOPIC.NAME}

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/a&gt;

 

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<!-- END TOPIC -->


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;






Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;


<!-- <div>


```

mod\_recent\_topics

```



Unknown end tag for &lt;/table&gt;

--><td width="890px" valign="top" class="alt7" style="padding:0;border: 1px solid #B4D0F3;">

<div style="padding-top: 10px;background: #E5EFFE; height: 21px;border-bottom: 1px solid #DDDDDD;font-weight:bold;"><div style="float:left;text-align:left;width: 50%;padding-left:15px;">Chủ đề

Unknown end tag for &lt;/div&gt;

<div style="float:left;text-align:left;width: 8%;">Trả Lời

Unknown end tag for &lt;/div&gt;

<div style="float:left;text-align:left;width: 8%;">Xem

Unknown end tag for &lt;/div&gt;

<div style="float:left;text-align:right;width: 12%;">Người Gửi

Unknown end tag for &lt;/div&gt;

<div style="float:left;text-align:right;width: 20%;">Diễn Đàn

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;


<div style="overflow: hidden !important;height:197px;background: url(http://i337.photobucket.com/albums/n395/kalenv1/4r/ads/list.gif) no-repeat 2px 0px transparent;padding:0px;padding-left:25px;">
<div style="background: transparent url(http://i337.photobucket.com/albums/n395/kalenv1/4r/ads/listbg.gif) repeat;">
<!-- BEGIN classical_row -->


<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tbody class="hienlast" style="display:none">

<script type="text/javascript">
function gioihanl(a){
if(a.length > 40){
return a.substring(0,40)+'...';}else{return a;}
};
function shpost(a){
window.open(a,'','width=200,height=100,top=200,left=400,menubar=no,titlebar=no,location=no');
};
$(function () {
$('.dulieu').load('/search?search_keywords=&search_author=*_* table.table .statused tr:lt(20)', function () {
var i;
for (i = 0; i < 20; i++) {
$('.box:eq(' + i + ')').html($('.dulieu tr:eq(' + i + ') .tc2').html());
$('.reply:eq(' + i + ')').html($('.dulieu tr:eq(' + i + ') .tc3:eq(0)').html());
$('.view:eq(' + i + ')').html($('.dulieu tr:eq(' + i + ') .tc3:eq(1)').html());
}
$(".hienlast").show();
});
});


Unknown end tag for &lt;/script&gt;


<!-- BEGIN recent_topic_row -->
<tr style="height: 20px;">
<td style="padding-left:3px" width="50%" nowrap="nowrap">

<span class="smallfont">
<a href="javascript:shpost('{classical_row.recent_topic_row.U_TITLE}');" title="Click to view post">

Unknown end tag for &lt;/a&gt;


<a title="{classical_row.recent_topic_row.L_TITLE}" href="{classical_row.recent_topic_row.U_TITLE}">
<script>document.write(gioihanl('{classical_row.recent_topic_row.L_TITLE}'));

Unknown end tag for &lt;/script&gt;




Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/span&gt;





Unknown end tag for &lt;/td&gt;


<td nowrap="nowrap" class="reply" width="8%">



Unknown end tag for &lt;/td&gt;


<td nowrap="nowrap" class="view" width="8%">



Unknown end tag for &lt;/td&gt;


<td style="text-align:right" nowrap="nowrap" width="12%">
<span class="smallfont">
<!-- BEGIN switch_poster -->
<a href="{classical_row.recent_topic_row.switch_poster.U_POSTER}">{classical_row.recent_topic_row.switch_poster.S_POSTER}

Unknown end tag for &lt;/a&gt;


<!-- END switch_poster -->

<!-- BEGIN switch_poster_guest -->
{classical_row.recent_topic_row.switch_poster_guest.S_POSTER}
<!-- END switch_poster_guest -->


Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;


<td style="text-align:right" nowrap="nowrap" class="box" width="20%">



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<!-- END recent_topic_row -->


Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;


<div style="display:none" class="dulieu">

Unknown end tag for &lt;/div&gt;




<!-- END classical_row -->



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



```


mod\_top\_posters

```

<table width="100%" style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; height: 236px; display: block;overflow-x: hidden; overflow-y: hidden; " id="mtlast" class="juna">

<tr><td class="alt7" style="white-space: nowrap; width:197px!important; overflow:hidden; padding:0px; margin:0px" valign="top">
<table width="100%" border="0" cellspacing="0" cellpadding="0">
<tr><td class="lastmtmy1" style="height:32px!important">

Unknown end tag for &lt;/td&gt;


<td class="lastmtmy3" style="height:32px!important">

<script type="text/javascript">function showstuff(value){document.getElementById("sell1").style.display = (value == "sell1") ? "block" : "none";document.getElementById("sell2").style.display = (value == "sell2") ? "block" : "none";document.getElementById("sell3").style.display = (value == "sell3") ? "block" : "none";document.getElementById("sell4").style.display = (value == "sell4") ? "block" : "none";document.getElementById("sell5").style.display = (value == "sell5") ? "block" : "none";document.getElementById("sell6").style.display = (value == "sell6") ? "block" : "none";}

Unknown end tag for &lt;/script&gt;



<select name="type" style="width:142px" onchange="showstuff(this.value);"><option value="sell1" selected="selected">Top Posters

Unknown end tag for &lt;/option&gt;

<option value="sell2">Top Starters

Unknown end tag for &lt;/option&gt;



Unknown end tag for &lt;/select&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;



<tr>
<td style="border-top: 0px none;border-left:1px solid #B4D0F3;padding: 0px; background: transparent url(/users/2611/10/63/87/album/list13.gif) no-repeat scroll center top; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="24"><img src="http://illiweb.com/fa/subsilver/empty.gif" width="24" />

Unknown end tag for &lt;/td&gt;


<td nowrap="nowrap" style="border-top: 0px none;border-right:1px solid #B4D0F3;padding: 0px; line-height: 20px; background: transparent url(http://i337.photobucket.com/albums/n395/kalenv1/4r/ads/listbg.gif) repeat">

<div style="display: block;" id="sell1">
<!-- BEGIN POSTER -->
<div style="display:block; height:20px; overflow:hidden; line-height:18px;" onmouseover="show_tooltip(this,this.getElementsByTagName('div')[0].innerHTML,'Thông Tin Thành Viên');" onmouseout="hidetip();" class="smallfont">
<div style="display:none">Tên: {POSTER.NAME}<br>Số Bài Post :{POSTER.NB_POSTS}

Unknown end tag for &lt;/div&gt;

<div class="mtmymenu"> <div class="mtmymenuu">{POSTER.NAME}

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<!-- END POSTER -->


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<!--

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


```


cho cài này vào đâu index body

```

<!-- BEGIN giefmod_index1 -->
{giefmod_index1.MODVAR}
<!-- BEGIN saut -->
<div style="height:{SPACE_ROW}px">

Unknown end tag for &lt;/div&gt;


<!-- END saut -->
<!-- END giefmod_index1 -->


```


css

```

.lastmtmy1{background:#E5EFFE;border-top:1px solid #B4D0F3;border-bottom:1px solid #B4D0F3;border-left:1px solid #B4D0F3}.lastmtmy2{background:#E5EFFE;border-top:1px solid #B4D0F3;border-bottom:1px solid #B4D0F3}.lastmtmy3{background:#E5EFFE;border-top:1px solid #B4D0F3;border-bottom:1px solid #B4D0F3;border-right:1px solid #B4D0F3}


```
Lưu ý: Chỉ Share tại Hotrofm.com - Không copy bài viết này đi nơi khác