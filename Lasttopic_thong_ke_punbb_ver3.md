Ghi chú: Đây là phiên bản dành cho phpBB2, chuyển đổi bởi notme từ code Thống kê bài viết mới đa chức năng cho punBB của baivong

Hướng dẫn:
![http://i43.servimg.com/u/f43/15/93/33/76/332310.png](http://i43.servimg.com/u/f43/15/93/33/76/332310.png)


![http://a.imageshack.us/img808/6614/84277319.jpg](http://a.imageshack.us/img808/6614/84277319.jpg)



Chú ý: Bạn có thể thay CSS tooltip theo ý thích của mình.

Bản quyền thuộc www.FMvi.vn
CSS
```


.tooltipFMvi{display:none;z-index:999}#tooltip{padding:0;max-width:50% !important;color:#000;border:1px solid #000;background-color:#f6f6f6;font-size:0.8em}* html #tooltip{width:30%}#tooltip *{margin:2px 5px 2px 8px}#tooltip ul{padding:0 0 0 20px}#tooltip dl{clear:both;position:relative;margin-bottom:10px}#tooltip dt{float:left;border:medium none;padding-top:3px;width:50%}#tooltip dd{margin-left:50%;padding-left:5px;vertical-align:top}#tooltip p.header{margin:0;font-size:12px;font-weight:bold;color:#fff;padding:1px 5px;background:#000 repeat;font-weight:bold;border:1px solid #000}.tiplFMvi{color:red}#tooltip p{padding:0 5px 0 0;color:#696969;font-size:12px;font-weight:bold}.lastmtmy1{background:#E5EFFE;border-top:1px solid #B4D0F3;border-bottom:1px solid #B4D0F3;border-left:1px solid #B4D0F3}.lastmtmy2{background:#E5EFFE;border-top:1px solid #B4D0F3;border-bottom:1px solid #B4D0F3}.lastmtmy3{background:#E5EFFE;border-top:1px solid #B4D0F3;border-bottom:1px solid #B4D0F3;border-right:1px solid #B4D0F3}
```
Mod\_active\_topics

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
mod\_recent\_topics
```




Unknown end tag for &lt;/table&gt;

--><td width="680px" valign="top" class="alt7" style="padding:0">
<!-- BEGIN classical_row --><div id="vnlast" class="vn40"><table width="100%" border="0" cellspacing="0" cellpadding="0">
<tr><td width="20" class="lastmtmy1" style="height:32px!important;" align="center"><span class="taidulieu" style="display:none;"><img src="http://i43.servimg.com/u/f43/16/03/04/56/13x13p10.gif"/>

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;



<td width="80%" class="lastmtmy2" style="height:32px!important;font-size:10pt;"> <b>Các bài gửi mới nhất <b>
<span>





Unknown end tag for &lt;/td&gt;

<td style="text-align:center;padding-right:5px;height:32px!important;font-size:10pt;" width="20%" class="lastmtmy3"><span id="FMviloadimg" style="cursor:pointer;" onmouseover="showtip('Click Để Reload Topic.')" onmouseout="hidetip()" id="FMviloadimg"><b>Reload

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/span&gt;

 

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



<tr class="baiguicuoi"><td style="background: transparent url(/users/2611/10/63/87/album/list13.gif) no-repeat;border-left:1px solid #B4D0F3" width="23"><img src="http://illiweb.com/fa/empty.gif" width="24" height="1" />

Unknown end tag for &lt;/td&gt;


<td style="line-height:18px; background: transparent url(http://i45.servimg.com/u/f45/16/75/78/56/listbg10.gif) repeat" width="80%" valign="top" colspan="2" >
<div  id="loadoday">
<!-- BEGIN recent_topic_row -->

<div class="newltopic">
<table class="c3zonee" width="100%" border="0" cellspacing="0" cellpadding="0" style="height:20px">
<tr>
<td width="76%" nowrap="none"><div onmouseover="show_tooltip(this,this.getElementsByTagName('div')[0].innerHTML,'Thông Tin Bài Viết');" onmouseout="hidetip();"><span class="ltitletopic" style="font-size:11px;font-weight:bold"><a href="{classical_row.recent_topic_row.U_TITLE}">{classical_row.recent_topic_row.L_TITLE}


Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;

<div class="tooltipFMvi"><img src="http://i48.servimg.com/u/f48/16/58/89/73/loadin10.gif" /> Đang tải dữ Liệu

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;

<td width="20%" align="center" nowrap="none" style="border-right:1px solid #B4D0F3">

<!-- BEGIN switch_poster -->
<div class="mtmymenu"> <div class="mtmymenuu"> <a onmouseover="show_tooltip(this,'<b>Click để xem profile của thành viên này !</b>','Thông Tin-mtmy');" onmouseout="hidetip();" href="{classical_row.recent_topic_row.switch_poster.U_POSTER}"><span class="lpostertopic" style="font-size:11px;font-weight:bold">{classical_row.recent_topic_row.switch_poster.S_POSTER}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;


<!-- END switch_poster --><!-- BEGIN switch_poster_guest -->
{classical_row.recent_topic_row.switch_poster_guest.S_POSTER}
<!-- END switch_poster_guest -->

Unknown end tag for &lt;/td&gt;

<span class="ltimetopic" style="display:none">{classical_row.recent_topic_row.S_POSTTIME}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;


<!-- END recent_topic_row -->


Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;

<!-- END classical_row -->



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;





Unknown end tag for &lt;/center&gt;


<div style="height:1px">

Unknown end tag for &lt;/div&gt;

 <table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td  align="left">
<style>#FMviloadimg{color:red;}#FMviloadimg:hover{color:blue}

Unknown end tag for &lt;/style&gt;


<script>
jQuery(".c3zonee:contains('»')").remove();
$("#FMviloadimg").click(function(){
$(".taidulieu").show();
$("#loadoday").fadeOut();
$.ajax({
url:"/forum",
success:function(a){$("#loadoday").html($(a).find("#loadoday").html()).fadeIn(1000);$(function () {
$(".newltopic").each(function (a) {
$(this);
$(this).attr("id", "newlast" + a);
a = $(this).attr("id");
$(this).find(".ltitletopic").next().attr("alt", a);
$(this).find(".ltitletopic").attr("alt", a);
$(this).find(".lpostertopic").attr("alt", a);
$(this).find(".ltimetopic").attr("alt", a);
var b = $(this).find(".ltitletopic[alt='" + a + "']").text(),
tieude = $(this).find(".ltitletopic[alt='" + a + "']").text(),
d = $(this).find(".ltimetopic[alt='" + a + "']").text(),
thoigian = $(this).find(".ltimetopic[alt='" + a + "']").text(),
e = b.replace(/ /gi, "+"),
f = $(this).find(".ltitletopic[alt='" + a + "']").next();
f.load("/search?mode=searchbox&search_keywords=" + e + '&show_results=topics tr.layemno:contains("' + b + '"):contains("' + d + '")', function () {
var d = $(this).find("#tacgiamt a[href^='/u']").text(),
e = $(this).find(".row3:first").text(),
f = $(this).find(".row2:first").text(),
g = $(this).find(".row2:last").text(),
j = $(".lpostertopic[alt='" + a + "']").text();
$(this).html('<b><span class="tiplFMvi">Tiêu đề:

Unknown end tag for &lt;/span&gt;

 ' + tieude + '

Unknown end tag for &lt;/b&gt;

<hr><span class="tiplFMvi">Tạo chủ đề:

Unknown end tag for &lt;/span&gt;

 ' + d + '<br><span class="tiplFMvi">Gửi cuối:

Unknown end tag for &lt;/span&gt;

 ' + j + '<br><span class="tiplFMvi">Vào lúc:

Unknown end tag for &lt;/span&gt;

 ' + thoigian + '<hr><span class="tiplFMvi">Thuộc chuyên mục:

Unknown end tag for &lt;/span&gt;

 ' + e + '<br><span class="tiplFMvi">Lượt xem:

Unknown end tag for &lt;/span&gt;

 ' + g + '<br><span class="tiplFMvi">Trả lời:

Unknown end tag for &lt;/span&gt;

 ' + f + "<br>");
})
})
});$(".taidulieu").hide();},
error:function(){$("#loadoday").html('<p><font face="Courier New"><font color="red">C\u00f3 l\u1ed7i x\u1ea3y ra trong qu\u00e1 tr\u00ecnh t\u1ea3i d\u1eef li\u1ec7u.

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/p&gt;

')}
})

});



Unknown end tag for &lt;/script&gt;


<script type="text/javascript">$(function () {
$(".newltopic").each(function (a) {
$(this);
$(this).attr("id", "newlast" + a);
a = $(this).attr("id");
$(this).find(".ltitletopic").next().attr("alt", a);
$(this).find(".ltitletopic").attr("alt", a);
$(this).find(".lpostertopic").attr("alt", a);
$(this).find(".ltimetopic").attr("alt", a);
var b = $(this).find(".ltitletopic[alt='" + a + "']").text(),
tieude = $(this).find(".ltitletopic[alt='" + a + "']").text(),
d = $(this).find(".ltimetopic[alt='" + a + "']").text(),
thoigian = $(this).find(".ltimetopic[alt='" + a + "']").text(),
e = b.replace(/ /gi, "+"),
f = $(this).find(".ltitletopic[alt='" + a + "']").next();
f.load("/search?mode=searchbox&search_keywords=" + e + '&show_results=topics tr.layemno:contains("' + b + '"):contains("' + d + '")', function () {
var d = $(this).find("#tacgiamt a[href^='/u']").text(),
e = $(this).find(".row3:first").text(),
f = $(this).find(".row2:first").text(),
g = $(this).find(".row2:last").text(),
j = $(".lpostertopic[alt='" + a + "']").text();
$(this).html('<b><span class="tiplFMvi">Tiêu đề:

Unknown end tag for &lt;/span&gt;

 ' + tieude + '

Unknown end tag for &lt;/b&gt;

<hr><span class="tiplFMvi">Tạo chủ đề:

Unknown end tag for &lt;/span&gt;

 ' + d + '<br><span class="tiplFMvi">Gửi cuối:

Unknown end tag for &lt;/span&gt;

 ' + j + '<br><span class="tiplFMvi">Vào lúc:

Unknown end tag for &lt;/span&gt;

 ' + thoigian + '<hr><span class="tiplFMvi">Thuộc chuyên mục:

Unknown end tag for &lt;/span&gt;

 ' + e + '<br><span class="tiplFMvi">Lượt xem:

Unknown end tag for &lt;/span&gt;

 ' + g + '<br><span class="tiplFMvi">Trả lời:

Unknown end tag for &lt;/span&gt;

 ' + f + "<br>");
})
})
});


Unknown end tag for &lt;/script&gt;





Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;


```
Full last
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

chèn trên của header

```

<script src="http://illiweb.com/rsc/24/frm/admin/admin.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;

```