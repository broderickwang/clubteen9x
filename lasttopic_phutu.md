demo : http://phutu.7forum.net/



![http://i43.servimg.com/u/f43/15/93/33/76/lastph10.png](http://i43.servimg.com/u/f43/15/93/33/76/lastph10.png)

Bước 1 :

Thay toàn bộ code Mod\_most\_active\_topics = code sau


```

<div style="width:48%;float: right;padding:2px;height:155px;overflow:hidden"> <table>
<tr><td style="padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="100%"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tr valign="top"><td style="border-top: 0px none; padding: 0px; background: transparent url(http://i1036.photobucket.com/albums/a449/a1tinhgia3/image/list.gif) no-repeat scroll center top; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="24"><img src="http://illiweb.com/fa/empty.gif" width="24" border="0">

Unknown end tag for &lt;/td&gt;

<td style="border-top: 0px none; padding: 0px; line-height: 20px; background-repeat: repeat;" align="left" background="http://i1036.photobucket.com/albums/a449/a1tinhgia3/image/listbg.gif"> <span><font style="font-family: Tahoma; font-size: 11px"><!-- BEGIN TOPIC --><a href="{TOPIC.LINK}" title="{TOPIC.TITLE}"><span class="krokodil3"> {TOPIC.NAME}

Unknown end tag for &lt;/a&gt;

<br/><!-- END TOPIC -->


Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;


<script>$(".krokodil3").each(function(){
if ($(this).text().length > 40) {$(this).text($(this).text().substr(0, 37));$(this).append('...');
}
});

Unknown end tag for &lt;/script&gt;



```

Bước 2 : Thay toàn bộ code Mod\_news = code sau

```



Unknown end tag for &lt;/td&gt;

<td width="52%" valign="top"><div id="TabView" class="TabView" ><div width="100%" class="Tabs" style="color:#000000;"><div style="width:255px;float: left;padding-top:4px;overflow: hidden">Tin tức chung PhuTu <span class="groupButton" id="
buttonPlay">
<img src="http://i28.servimg.com/u/f28/16/18/15/10/prev10.gif" alt="prev" align="absmiddle" id="news_prev" />
<img src="http://i28.servimg.com/u/f28/16/18/15/10/pause10.gif" alt="pause" align="absmiddle" id="news_pause" /> <img src="http://i28.servimg.com/u/f28/16/18/15/10/next10.gif" alt="next" align="absmiddle" id="news_next" />


Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;

<div style="width:48%;float: right;padding-top: 5px;">Thông tin giải đấu

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div style="width:50%;float: left;padding-top:5px"><style>
.hinh img{ display:none}
.highlightHeadline{ display:inline; float:left; width:250px;}
.itemHead{ display:none}
.groupButton{ text-align:right;}
.groupButton img{ cursor:pointer;width:16px;height:18px;pading:1px;}
.listHeading{ width:250px; float:left}
.avatarcpa img:hover{border:2px solid #3f3f40}
.avatarcpa img {
width:240px;height:118px;
background: #ffffff;
border:2px solid #cccccc;
padding:3px}
.avatarcpa {background:url(http://i48.servimg.com/u/f48/16/18/15/10/untitl24.jpg);}


Unknown end tag for &lt;/style&gt;


<script src="http://phutu.7forum.net/h25-page" type="text/javascript">

Unknown end tag for &lt;/script&gt;


<div class="lineHeading">
<div class="highlightHeadline">
<div id="slideshow" style="height: 160px;overflow:hidden;">

Unknown end tag for &lt;/div&gt;


<div id="myHeading">
<!-- BEGIN post_row --><div class="itemHead">

<div style="font-size: 0px; line-height: normal;width:250px;height:128px;overflow:hidden;" class="avatarcpa" title="{post_row.TITLE}"><a href="{post_row.U_VIEW_COMMENTS}">{post_row.TEXT}

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/div&gt;

<img src="http://i48.servimg.com/u/f48/16/18/15/10/ico_ne10.gif"><a href="{post_row.U_VIEW_COMMENTS}"><b>{post_row.TITLE}

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/div&gt;

<!-- END post_row -->


Unknown end tag for &lt;/div&gt;



<script type="text/javascript">
var newsoption1 = { firstname: "myHeading", secondname: "slideshow", thirdname:"news_display", fourthname:"buttonPlay", newsspeed:'6000', imagedir:'http://garena.vn/templates/vnb2011/images/', mouseover: false }; $.init_news(newsoption1); 

Unknown end tag for &lt;/script&gt;





Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


```

Bước 3 : Thay toàn bộ code Mod\_recent\_topics = code sau

```

<style type="text/css">div.TabView div.Tabs a , div.TabView div.Tabs a:hover {float: left;display: block;background-color:#;text-align: center;height: 29px;padding: 6px;vertical-align: middle;border:1px solid #E3E3E3;};th,td,p {font-family: Tahoma,Verdana,Arial,Helvetica,sans-serif }/* Style cho menu tabs */div.TabView div.Tabs{overflow: hidden;}div.Tabs{color: #027EC6;font-size: 11px!important;font-weight : bold;background-color: #006699;background-image: url("http://i1209.photobucket.com/albums/cc400/dothinh1105/CSS/bgtit10.gif");border-bottom: 1px #dbdbdb solid;height: 19px!important;padding: 1px 2px 4px 3px;}div.TabView div.Tabs: hover,{overflow: hidden;}div.TabView div.Tabs a , div.TabView div.Tabs a:hover {float: left;display: block;background-color:#;text-align: center;padding: 4px 6px;vertical-align: middle; /* đường viền quanh tabs menu */text-decoration: none;font-family: Tahoma;font-size: 11px;color: #000000;}div.TabView div.Tabs a.Active{background-image: url(http://i38.servimg.com/u/f38/14/28/30/23/untitl22.jpg); /* màu nền tab menu active */color: #000000;font-size: 11px;font-weight: bold;color: #fff;}/* Style cho phần text nội dung của mỗi tab */div.TabView {clear: both;border: 0px solid #ffffff;overflow: hidden; /* giá trị là auto nếu muốn hiện scroll bar */}div.TabView div.Pages div.Page{height: 100%;padding: 0px;border: 0px solid #b4d0f3;overflow: hidden;background-color:#fff; /* giá trị là auto nếu muốn hiện scroll bar */}.tcat{padding:2px; border-bottom:1px #dbdbdb dashed;font-size: 10px; font-style: italic;}
.bai_moi a:hover{text-decoration: none!important;}

Unknown end tag for &lt;/style&gt;

<script type="text/javascript" src="http://lethanhton.googlecode.com/files/Tab.js">

Unknown end tag for &lt;/script&gt;



<div id="TabView" class="TabView" style="padding: 0px;"><div width="100%" class="Tabs"><a class="Active" href="javascript:tabview_switch('TabView', 1);">Bài Viết Mới

Unknown end tag for &lt;/a&gt;

<a>Bài hữu ích

Unknown end tag for &lt;/a&gt;

<a>Bài xem nhiều nhất

Unknown end tag for &lt;/a&gt;

<a>Hướng Dẫn

Unknown end tag for &lt;/a&gt;

<a>Thống kê

Unknown end tag for &lt;/a&gt;

<a>Nội quy chung

Unknown end tag for &lt;/a&gt;

 <ul class="tabs" id="vietvbb_topstats_t">  <li style="border-right: 0px; display: none;" id="vietvbb_topstats_t_loading">

Unknown end tag for &lt;/li&gt;

 

Unknown end tag for &lt;/ul&gt;



Unknown end tag for &lt;/div&gt;

<div style="height:380px"class="Pages">
<div class="Page"><table style="border-bottom-width: 0px;"  border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr>
<td style="background-color:#ffffff;height:380px;overflow:hidden;" class="bai_moi"><table width="100%" ellspacing="0" cellpadding="0" border="0" valign="top">
<!-- BEGIN classical_row -->
<!-- BEGIN recent_topic_row --><tr><td width="78%" style="border-bottom: 1px dashed #E3E3E3"><img src="http://r22.imgfast.net/users/2211/12/43/96/album/post_n10.gif"> <a href="{classical_row.recent_topic_row.U_TITLE}" title="Click to view post" target="_blank">▼

Unknown end tag for &lt;/a&gt;

<a href="{classical_row.recent_topic_row.U_TITLE}" title="{classical_row.recent_topic_row.L_TITLE} {classical_row.recent_topic_row.S_POSTTIME}"><span class="krokodil2" style="font-family: Tahoma; font-size: 12px">{classical_row.recent_topic_row.L_TITLE}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/td&gt;

<td width="22%" style="border-bottom: 1px dashed #E3E3E3"><!-- BEGIN switch_poster -->
<a href="{classical_row.recent_topic_row.switch_poster.U_POSTER}"  title="{classical_row.recent_topic_row.S_POSTTIME}"><span style="font-family: Tahoma; font-size: 13px">{classical_row.recent_topic_row.switch_poster.S_POSTER}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;

<!-- END switch_poster --> 

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<!-- END recent_topic_row --><!-- END classical_row -->

Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;


```


Bước 4 :
Vào Overall\_header tìm đoạn code sau

```

<div id="{ID_LEFT}">
<!-- BEGIN giefmod_index1 -->
{giefmod_index1.MODVAR}
<!-- BEGIN saut -->
<div style="height:{SPACE_ROW}px">

Unknown end tag for &lt;/div&gt;


<!-- END saut -->
<!-- END giefmod_index1 -->

```

và xóa nó đi

Bước 5 : Thêm đoạn code sau vào đầu của Index\_body

```

<style>
#baiviet12 .hien_thi{overflow:hidden;padding-top:2px;width:500px}
#baiviet1 .hien_thi {overflow:hidden;height:50px}
#baiviet12 .an_phutu1{font-size:12px;font-weight: normal;background: url(http://i48.servimg.com/u/f48/14/28/30/23/untitl51.png) no-repeat 0px 6px;padding-left:12px;}
#baiviet12 .krokodil {display:none}
.avatarcp embed,.title_new1 embed,#hinh embed,#hinh span{ display:none}
#hinh strong{font-weight: normal;}
#baiviet br{display:none}#baiviet{font-size:0px} #baiviet img{
width:126px;height:84px;
border:1px solid #626263;margin-bottom:10px} .size_new1,#baiviet1 img,#baiviet a:link{display:none} #baiviet a:visited{display:none}
.baiviet a:visited,.baiviet a:link,.baiviet a:hover, .baiviet2 a:visited,.baiviet2 a:link,.baiviet2 a:hover{font-size:14px;font-weight:bold;text-decoration: none!important}
.baiviet2 br,.baiviet br{display:none}
.hinh img{ display:none} .an_phutu{display:none} #baiviet .hien_thi{height:86px;margin:hidden;}


Unknown end tag for &lt;/style&gt;


<div class="boxcontainer"> <div class="box_04"> <div class="box_05"> <table style="width: 100%" cellpadding="0" cellspacing="0" dir="ltr"> <tr> <td class="box_01"> <img class="imgborder" src="http://i28.servimg.com/u/f28/14/28/30/23/spacer10.gif" width="13" height="37" alt="" />

Unknown end tag for &lt;/td&gt;

 <td class="boxheaderbar"> <table border="0" width="100%" cellpadding="0" style="border-collapse: collapse"> <tr> <td class="width100"> <div class="boxbar"> <table border="0" width="100%" cellpadding="0" style="border-collapse: collapse"> <tr> <td class="boxcolorbar_01"> <img class="imgborder" src="http://i28.servimg.com/u/f28/14/28/30/23/spacer10.gif" width="6" height="24" alt="" />

Unknown end tag for &lt;/td&gt;

 <td class="boxcolorbar">

Unknown end tag for &lt;/td&gt;


<td class="boxcolorbar_03"> <img src="http://i28.servimg.com/u/f28/14/28/30/23/spacer10.gif" width="6" height="24" alt="" class="imgborder" />

Unknown end tag for &lt;/td&gt;

 

Unknown end tag for &lt;/tr&gt;

 

Unknown end tag for &lt;/table&gt;

 

Unknown end tag for &lt;/div&gt;

 

Unknown end tag for &lt;/td&gt;

 <td>

Unknown end tag for &lt;/td&gt;

 

Unknown end tag for &lt;/tr&gt;

 

Unknown end tag for &lt;/table&gt;

 

Unknown end tag for &lt;/td&gt;

 <td class="box_03"> <img class="imgborder" src="http://i28.servimg.com/u/f28/14/28/30/23/spacer10.gif" width="13" height="37" alt="" />

Unknown end tag for &lt;/td&gt;

 

Unknown end tag for &lt;/tr&gt;

 

Unknown end tag for &lt;/table&gt;

 <div class="boxcontents"><table width="100%" cellspacing="0" cellpadding="0" border="0" style="border: 1px solid #F0F0F0"><tr><td width="100%"style="background-color:#ffffff;border: 1px solid #E3E3E3"><table width="100%" style="height:380px;overflow:hidden;" " cellspacing="0" cellpadding="0" border="0" ><tr>
<td width="48%" valign="top">
<!-- BEGIN giefmod_index1 -->  {giefmod_index1.MODVAR}<!-- END giefmod_index1 -->
<style type="text/css">
/* Style cho menu Tabs1 */
#baiviet_1 .baimoiblog1{height:16px;overflow:hidden}
div.TabView1 div.Tabs1
{height: 22px; /* chiều cao của tab menu */
overflow: hidden;border-bottom: 1px solid #1f527a;margin-bottom:5px;
width:80%}div.TabView1 div.Tabs1: hover{height: 25px; /* chiều cao của tab menu */overflow: hidden}
div.TabView1 div.Tabs1 a  {float: left;display: block;background-color:#f4f9fc;text-align: center;;padding: 4px 7px;vertical-align: middle;border:1px solid #CFCFCF; /* đường viền quanh Tabs1 menu */text-decoration: none;font-family: Tahoma;font-size: 11px;color: #0000A0;margin-right:4px;}
div.TabView1 div.Tabs1 a:hover{;background:#f5f5f5;color:#bf226c;text-decoration: none!important;}
div.TabView1 div.Tabs1 a.Active {border: 1px solid #1f527a;background:#1f527a;color:#ffffff}

/* Style cho phần text nội dung của mỗi tab */
div.TabView1 {clear: both;border: 0px solid #ffffff;overflow: hidden; /* giá trị là auto nếu muốn hiện scroll bar */}
div.TabView1 div.Pages div.Page{height: 100%;padding: 0px;border: 0px solid #cad9ea;overflow: hidden; /* giá trị là auto nếu muốn hiện scroll bar */}

Unknown end tag for &lt;/style&gt;



<script type="text/javascript" src="http://phutu.7forum.net/h17-page">

Unknown end tag for &lt;/script&gt;

<div id="TabView1" class="TabView1" style="padding: 0px;"><!--
Tabs1 --><div width="100%" class="Tabs1">

<a class="Active1" href="javascript:TabView1_switch('TabView1', 1);"><img src="http://i48.servimg.com/u/f48/16/18/15/10/114.gif"> Chuyện lạ - Tip Vip

Unknown end tag for &lt;/a&gt;

<a>Xã hội - Khoa học <img src="http://i48.servimg.com/u/f48/14/28/30/23/3drigh10.png">

Unknown end tag for &lt;/a&gt;


<ul class="Tabs1" id="vietvbb_topstats_t" >  <li style="border-right: 0px; display: none;" id="vietvbb_topstats_t_loading">

Unknown end tag for &lt;/li&gt;

 

Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;


<!-- nội dung Tabs1 --><div style="height:187px; width:500px" class="Pages">
<div class="Page"><div style="margin:auto;text-align:left;width:100%">


<table width="500" cellspacing="0" cellpadding="0" border="0" ><tr><td valign="top"><div  class="baiviet" style="overflow:hidden; width:128px; height:86px; border-top: 0px none; float: left" id="baiviet">

Unknown end tag for &lt;/div&gt;

<div style="float: left; width:340px"><div class="baiviet" style="overflow:hidden; width:340px; height:50px; border-top: 0px none; padding: 0px;padding: 1px 0px 0px 5px;" id="baiviet1">

Unknown end tag for &lt;/div&gt;



<div style="height:32px;overflow:hidden;float: left;">
<div  id="baiviet12" class="baiviet" style="float: right; width:300px; border-top: 0px none; padding: 0px;padding: 1px 0px 0px 20px;margin-top:-20px">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



<div style="float: right"><img src="http://i48.servimg.com/u/f48/16/18/15/10/untit100.png"><a href="/f62-forum" target="_blank"0><img src="http://i48.servimg.com/u/f48/16/18/15/10/120.png">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/div&gt;






Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td style="padding-top:3px;"> <div  class="baiviet2" style="overflow:hidden; width:128px; height:86px; border-top: 0px none; float: left" id="baiviet">

Unknown end tag for &lt;/div&gt;

<div style="float: left; width:340px"><div class="baiviet2" style="overflow:hidden; width:340px; height:50px; border-top: 0px none; padding: 0px;padding: 1px 0px 0px 5px;" id="baiviet1">

Unknown end tag for &lt;/div&gt;



<div style="height:32px;overflow:hidden;float: left;">
<div  id="baiviet12" class="baiviet2" style="float: right; width:300px; border-top: 0px none; padding: 0px;padding: 1px 0px 0px 20px;margin-top:-20px;">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;


<div style="float: right;"><a href="/f89-forum" target="_blank"0><img src="http://i48.servimg.com/u/f48/16/18/15/10/214.png">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



<div class="Page"><div style="margin:auto;text-align:left;width:100%" >
Chưa có nội dung


Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;


<script>
$(function() {
$('<span class="bv" />').load('http://phutu.7forum.net/f2-forum .baimoiblog:not(".baimoiblog:contains(\'Chú ý\'),.baimoiblog:gt(2)")', {limit: 10}, function() {
jQuery(this).hide()
.appendTo('.baiviet')
.fadeIn(1);
});
$('<span class="bv" />').load('http://phutu.7forum.net/f3-forum .baimoiblog:not(".baimoiblog:contains(\'Chú ý\'),.baimoiblog:gt(2)")', {limit: 10}, function() {
jQuery(this).hide()
.appendTo('.baiviet2')
.fadeIn(1);
});
return false;
});


Unknown end tag for &lt;/script&gt;


<script>$(".krokodil2").each(function(){
if ($(this).text().length > 50) {$(this).text($(this).text().substr(0, 47));$(this).append('...');
}
});

Unknown end tag for &lt;/script&gt;


<script type="text/javascript">TabView1_initialize('TabView1');

Unknown end tag for &lt;/script&gt;





Unknown end tag for &lt;/body&gt;




Unknown end tag for &lt;/html&gt;




Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;





Unknown end tag for &lt;/div&gt;

 <table style="width: 100%" cellpadding="0" cellspacing="0" dir="ltr"> <tr> <td class="box_06"> <img class="imgborder" src="http://i28.servimg.com/u/f28/14/28/30/23/spacer10.gif" width="8" height="6" alt="" />

Unknown end tag for &lt;/td&gt;

 <td style="width: 100%" class="boxfooterbar">

Unknown end tag for &lt;/td&gt;

 <td class="box_08"> <img class="imgborder" src="http://i28.servimg.com/u/f28/14/28/30/23/spacer10.gif" width="8" height="6" alt="" />

Unknown end tag for &lt;/td&gt;

 

Unknown end tag for &lt;/tr&gt;

 

Unknown end tag for &lt;/table&gt;

 

Unknown end tag for &lt;/div&gt;

 

Unknown end tag for &lt;/div&gt;

 

Unknown end tag for &lt;/div&gt;



```




Bước 6 : Cài đặt Forum widgets management như hình dưới
> ![http://ni5.upanh.com/b1.s13.d5/1942bedab2c5cf45ab97140429414ede_40802595.1.png](http://ni5.upanh.com/b1.s13.d5/1942bedab2c5cf45ab97140429414ede_40802595.1.png)

Bước 7 : trong Forum widgets management kick vào bánh xe màu vàng của Recent topic
Number of recent topics : 20
Activate the topics scrolling : chọn không

Ok đã hoàn thành , ai có thắc mắc gì xin vui lòng reply tại topic này