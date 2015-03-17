kiểu 2: http://danchoi01.forumvi.com/

Kiểu 1: http://danchoi02.forumvi.com/


Đầu tiền vào over\_Head tìm đoạn sau và xóa đi:

```

<div id="{ID_LEFT}">
<!-- BEGIN giefmod_index1 -->                                    {giefmod_index1.MODVAR}
<!-- BEGIN saut -->
<div style="height:{SPACE_ROW}px">

Unknown end tag for &lt;/div&gt;


<!-- END saut -->
<!-- END giefmod_index1 -->


Unknown end tag for &lt;/div&gt;


```

Sắp Xếp Forum widgets management như hình sau:

![http://i77.servimg.com/u/f77/17/96/37/20/11111110.jpg](http://i77.servimg.com/u/f77/17/96/37/20/11111110.jpg)

Chèn vào đầu index\_body code sau:

```

<!-- BEGIN giefmod_index1 -->
{giefmod_index1.MODVAR}
<!-- END giefmod_index1 -->

```


Cách làm last kiểu 1:

recent:
```

<div class="main">
<div class="main-head"><div class="page-title"><h2><img src="http://i15.servimg.com/u/f15/16/58/89/73/reload10.png" />

Unknown end tag for &lt;/a&gt;

<span style="font-family: Trebuchet MS; font-size: 17px ! important; font-variant: small-caps; margin-left: 18px;">Tình hình diễn đàn

Unknown end tag for &lt;/span&gt;

<span style="color:white"><b><font size="2">

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/h2&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;


<div class="main-content">



<table width="100%">
<tr>  <td width="600" style="line-height:20px;background:#fff;padding:3px;overflow: auto !important;max-height: 300px;" valign="top">
<div class="chutop"><span style="float:left;padding-left:5px">Bài Mới

Unknown end tag for &lt;/span&gt;

<span style="margin-left:200px">.

Unknown end tag for &lt;/span&gt;

<span style="float:right">Tác giả

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;



<div style="overflow: hidden !important;height:418px;background: url(http://dc-boys.forum-viet.com/users/2611/10/63/87/album/list13.gif) no-repeat 2px 5px transparent;padding:5px;padding-left:25px;">
<div style="background: transparent url(http://i337.photobucket.com/albums/n395/kalenv1/4r/ads/listbg.gif) repeat;">
<!-- BEGIN classical_row -->


<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tbody class="hienlast" style="display:block">

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


<font style="font-family: Tahoma; font-size: 12px"> <a href="{classical_row.recent_topic_row.U_TITLE}" style="width:300px;float:left;overflow: hidden; height: 16px;" class="titlerecent" onmouseover="show_tooltip(this,'{classical_row.recent_topic_row.L_TITLE}')" onmouseout="show_tooltip()">
<script>document.write(gioihanl('{classical_row.recent_topic_row.L_TITLE}'));

Unknown end tag for &lt;/script&gt;




Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/font&gt;




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





Unknown end tag for &lt;/tr&gt;


<!-- END recent_topic_row -->


Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;





<!-- END classical_row -->


Unknown end tag for &lt;/div&gt;


<script src="http://illiweb.com/rsc/24/frm/admin/admin.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;


<style>
.baixemnhieu{list-style:decimal-leading-zero outside none;text-align:left;margin:0!important;padding:0 1px 0 30px}
.gietno{overflow:hidden;position:absolute;text-overflow:ellipsis;white-space:nowrap;width:180px}
.lengtht{overflow:hidden;position:absolute;text-overflow:ellipsis;white-space:nowrap;width:200px}
.chutop{background: rgba(15, 161, 243, 0.58);
color: rgba(9, 8, 8, 0.45);
font: bold 11px tahoma, verdana, geneva, lucida, 'lucida grande', arial, helvetica, sans-serif;
padding: 7px 10px;
border-radius: 3px;
-moz-border-radius: 3px;
-webkit-border-radius: 3px;
border: 1px solid rgba(13, 58, 236, 0.21);
-moz-box-shadow: 0px 1px 2px rgba(189,189,189,1),inset 0px 1px 1px rgba(145,230,247,1);
-webkit-box-shadow: 0px 1px 2px rgba(189,189,189,1),inset 0px 1px 1px rgba(145,230,247,1);
text-shadow: 0px -1px 0px rgba(000, 000, 000, 0.2),0px 1px 1px rgba(255, 255, 255, 0.4);}



Unknown end tag for &lt;/style&gt;




Unknown end tag for &lt;/td&gt;

<td width="0px" style="border:1px solid #eee">

Unknown end tag for &lt;/td&gt;


<!--

Unknown end tag for &lt;/td&gt;





```

mod\_most\_active\_starters:

```

-->
-->
<td width="50%">
<div class="chutop">Tạo chủ đề nhiều nhất

Unknown end tag for &lt;/div&gt;


<div id="poster1" style="display:block;">

<table border="0" cellpadding="0" cellspacing="0" width="100%"><tr valign="top">
<td style="border-top: 0px none; padding: 0px; background: transparent url(http://i1036.photobucket.com/albums/a449/a1tinhgia3/image/list.gif) no-repeat scroll center top; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="24" height="200"><img src="http://illiweb.com/fa/empty.gif" width="24" border="0">

Unknown end tag for &lt;/td&gt;

<td style="display:block!important;border-top: 0px none; padding: 0px; line-height: 20px; background-repeat: repeat;" align="left" background="http://i1036.photobucket.com/albums/a449/a1tinhgia3/image/listbg.gif"><!-- BEGIN POSTER --><font style="font-family: Tahoma; font-size: 12px">  <span onmouseover="show_tooltip(this,'{POSTER.NB_TOPICS}','','black')" class="{POSTER.ROW_CLASS}" width="1%">{POSTER.NAME}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/font&gt;

<br><!-- END POSTER -->

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;





Unknown end tag for &lt;/td&gt;


<!--

Unknown end tag for &lt;/td&gt;


```


mod\_top\_post\_users\_month:

```

-->
<td width="50%">
<div class="chutop">Gửi nhiều trong tháng

Unknown end tag for &lt;/div&gt;


<div id="poster3" style="display:block;">
<table border="0" cellpadding="0" cellspacing="0" width="100%"><tr valign="top">
<td style=" border-top: 0px none; padding: 0px; background: transparent url(http://i1036.photobucket.com/albums/a449/a1tinhgia3/image/list.gif) no-repeat scroll center top; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="24" height="200"><img src="http://illiweb.com/fa/empty.gif" width="24" border="0">

Unknown end tag for &lt;/td&gt;

<td style="border-top: 0px none; padding: 0px; line-height: 20px; background-repeat: repeat;" align="left" background="http://i1036.photobucket.com/albums/a449/a1tinhgia3/image/listbg.gif"><!-- BEGIN POSTER --><font style="font-family: Tahoma; font-size: 12px">  <span onmouseover="show_tooltip(this,'{POSTER.NB_POSTS}','','black')" class="{POSTER.ROW_CLASS}" width="1%">{POSTER.NAME}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/font&gt;

<br><!-- END POSTER -->

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;





Unknown end tag for &lt;/td&gt;





Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



```

mod\_top\_post\_users\_week:

```

-->

<td height="50%" width="50%" id="toptuan" valign="top">
<div  class="chutop">Top posters Tuần

Unknown end tag for &lt;/div&gt;



<div id="poster" style="display:block;">
<table border="0" cellpadding="0" cellspacing="0" width="100%"><tr valign="top">
<td style="border-top: 0px none; padding: 0px; background: transparent url(http://i1036.photobucket.com/albums/a449/a1tinhgia3/image/list.gif) no-repeat scroll center top; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="24" height="200"><img src="http://illiweb.com/fa/empty.gif" width="24" border="0">

Unknown end tag for &lt;/td&gt;

<td style="border-top: 0px none; padding: 0px; line-height: 20px; background-repeat: repeat;" align="left" background="http://i1036.photobucket.com/albums/a449/a1tinhgia3/image/listbg.gif"><!-- BEGIN POSTER --><font style="font-family: Tahoma; font-size: 12px">  <span onmouseover="show_tooltip(this,'{POSTER.NB_POSTS}','','black')" class="{POSTER.ROW_CLASS}" width="1%">{POSTER.NAME}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/font&gt;

<br><!-- END POSTER -->

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;





Unknown end tag for &lt;/td&gt;






Unknown end tag for &lt;/tr&gt;


<tr>

<!--

Unknown end tag for &lt;/td&gt;



```

mod\_top\_posters:

```

-->
<td valign="top" style="padding:1px;background:#fff;">
<table width="100%">
<tr>

<td height="50%" width="50%" id="topposter" valign="top">
<div onclick="hienmenu('menu');" class="chutop dungyen"><a class="menuu">Topposter 

Unknown end tag for &lt;/a&gt;

<div class="chopnhon3" style="display:none"><br/>

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;




<div id="poster2" style="display:block;"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tr valign="top" style="border-right: 1px solid #000;"><td style="border-top: 0px none; padding: 0px; background: transparent url(http://i1036.photobucket.com/albums/a449/a1tinhgia3/image/list.gif) no-repeat scroll center top; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="24" height="200"><img src="http://illiweb.com/fa/empty.gif" width="24" border="0">

Unknown end tag for &lt;/td&gt;

<td style="border-top: 0px none; padding: 0px; line-height: 20px; background-repeat: repeat;" align="left" background="http://i1036.photobucket.com/albums/a449/a1tinhgia3/image/listbg.gif">
<div id="top_posters">

<!-- BEGIN POSTER --><font style="font-family: Tahoma; font-size: 12px">  <span onmouseover="show_tooltip(this,'{POSTER.NB_POSTS}','','black')" class="{POSTER.ROW_CLASS}" width="1%">{POSTER.NAME}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/font&gt;

<br/><!-- END POSTER -->




Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




<script type="text/javascript">
//<![CDATA[
$(function () {
$(".newtopic:contains('»')").hide();
$(".dulieulast").load('/search?search_keywords=&search_author=*_* .table .statused tr:lt(20)', function () {
var i;
for (i = 0; i < 20; i++) {
$(".newtopic:eq(" + i + ")").find(".dulieu2").html('<span>  

Unknown end tag for &lt;/span&gt;

<b>' + $(".newtopic:eq(" + i + ")").find("#tieude1").text() + '  

Unknown end tag for &lt;/b&gt;

<hr>Tác giả : <b>' + $(".dulieulast tr:eq(" + i + ")").find(".tcl a[href^='/u']").text() + '

Unknown end tag for &lt;/b&gt;

<br>Trạng Thái : ' + $(".dulieulast tr:eq(" + i + ")").find(".tcl .status img").attr("alt") + '<br>Thuộc Chuyên Mục : ' + $(".dulieulast tr:eq(" + i + ")").find(".tc2").text() + '<br>Trả lời  : ' + $(".dulieulast tr:eq(" + i + ")").find(".tc3:first").text() + '<br>Lượt Xem : ' + $(".dulieulast tr:eq(" + i + ")").find(".tc3:last").text() + '<hr>Người Gửi Cuối : <b>' + $(".newtopic:eq(" + i + ")").find("#tacgia").text() + '

Unknown end tag for &lt;/b&gt;

<br>Vào Lúc : ' + $(".newtopic:eq(" + i + ")").find(".thoigian").text());

}
$(".loading").hide().next().fadeIn(1000);
});

});

//]]>


Unknown end tag for &lt;/script&gt;





<!--

Unknown end tag for &lt;/td&gt;


```


Cách làm last kiểu 2 :

chèn vào css:

```

td[style="padding:1px;background:#fff;"] table tbody tr+tr td+td,#toptuan {
display:none!important;
}
```


Xong :))