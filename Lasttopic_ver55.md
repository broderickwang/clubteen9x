![http://i43.servimg.com/u/f43/15/93/33/76/1210.jpg](http://i43.servimg.com/u/f43/15/93/33/76/1210.jpg)
Thay...

Mod\_most\_active\_topics

```


-->
<td class="alt1" valign="top" id="activetop" style="display:none">
<table cellpadding="0" cellspacing="0" border="0" width="100%" height="160">
<tbody>

<!-- BEGIN TOPIC -->
<tr>
<td nowrap="nowrap">
<span class="smallfont">
<a alt="{TOPIC.NAME}" class="mtmy" href="{TOPIC.LINK}" title="{TOPIC.TITLE}">
<script>document.write(gioihant('{TOPIC.NAME}'));

Unknown end tag for &lt;/script&gt;




Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;


<td nowrap="nowrap" align="right">
<span class="smallfont">

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<!-- END TOPIC -->


Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




```
Mod\_most\_viewed\_topics

```



-->
<tr>

<td class="thead" style="height: 1px;">
<div href="#" rel="nofollow" style="cursor: pointer; " onclick="selectWysiwyg(this, 'topmenu2');"><span id="tentop2">Topic xem nhiều

Unknown end tag for &lt;/span&gt;

<img src="http://forum.fullvn.net/fullvn/misc/menu_open.gif" border="0" title="" alt=""/>

Unknown end tag for &lt;/div&gt;


<div class="select" id="topmenu2" style="margin-top: 3px; z-index: 50; visibility:hidden;  clip: rect(auto auto auto auto); "
align="left">
<table cellpadding="4" cellspacing="1" border="0">
<tbody>
<tr>
<td class="vbmenu_option vbmenu_option_alink" nowrap="nowrap" style="cursor: default; ">
<a href="javascript:changstat2('activetop','viewedtop','Toppic xem nhiều');">Toppic xem nhiều

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td class="vbmenu_option vbmenu_option_alink" nowrap="nowrap" style="cursor: default; ">
<a href="javascript:changstat2('viewedtop','activetop','Toppic trả lời nhiều');">Toppic trả lời nhiều

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;





Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;





Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;






Unknown end tag for &lt;/tr&gt;


<tr>
<td class="alt1" valign="top" id="viewedtop">
<table cellpadding="0" cellspacing="0" border="0" width="100%" height="160">
<tbody>
<script>
function gioihant(a){

return a.substring(0,20)+'...';
}


Unknown end tag for &lt;/script&gt;


<!-- BEGIN TOPIC -->
<tr>
<td nowrap="nowrap">
<span class="smallfont">
<a alt="{TOPIC.NAME}" class="mtmy" href="{TOPIC.LINK}" title="{TOPIC.TITLE}">
<script>document.write(gioihant('{TOPIC.NAME}'));

Unknown end tag for &lt;/script&gt;




Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;


<td nowrap="nowrap" align="right">
<span class="smallfont">

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<!-- END TOPIC -->


Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/td&gt;


<!--

Unknown end tag for &lt;/td&gt;



```

Mod\_recent\_topics

```

-->

<!-- BEGIN classical_row -->
<td class="alt1" rowspan="3" valign="top" id="changstats_latestposts">
<table cellpadding="0" cellspacing="0" border="0" width="100%" height="358">
<tbody class="hienlast" style="display:none">
<tr>
<td width="380px" class="smallfont" nowrap="nowrap" style="border-bottom: 1px dashed #C6D7E9;">
<i>Chủ đề

Unknown end tag for &lt;/i&gt;




Unknown end tag for &lt;/td&gt;


<td width="47px" class="smallfont" nowrap="nowrap" style="border-bottom: 1px dashed #C6D7E9;">
<i>Trả lời

Unknown end tag for &lt;/i&gt;

 

Unknown end tag for &lt;/td&gt;


<td width="44px" class="smallfont" nowrap="nowrap" style="border-bottom: 1px dashed #C6D7E9;">
<i>Xem

Unknown end tag for &lt;/i&gt;

 

Unknown end tag for &lt;/td&gt;


<td width="109px" class="smallfont" nowrap="nowrap" style="border-bottom: 1px dashed #C6D7E9;">
<i>Người gửi

Unknown end tag for &lt;/i&gt;

 

Unknown end tag for &lt;/td&gt;


<td width="175px" class="smallfont" nowrap="nowrap" style="border-bottom: 1px dashed #C6D7E9;">
<i>Diễn đàn

Unknown end tag for &lt;/i&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<script type="text/javascript">
function gioihanl(a){
if(a.length > 40){
return a.substring(0,40)+'...';}else{return a;}
};
function shpost(a){
window.open(a,'','width=200,height=100,top=200,left=400,menubar=no,titlebar=no,location=no');
};
$(function () {
$('.dulieu').load('/search?search_keywords=&search_author=*** table.table .statused tr:lt(20)', function () {
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
<tr style="height: 17px;">
<td width="380px" nowrap="nowrap">
<img src="http://forum.fullvn.net/fullvn/statusicon/post_new.gif"/>
<span class="smallfont">
<a href="javascript:shpost('{classical_row.recent_topic_row.U_TITLE}');" title="Click to view post">▼

Unknown end tag for &lt;/a&gt;


<a title="{classical_row.recent_topic_row.L_TITLE}" href="{classical_row.recent_topic_row.U_TITLE}">
<script>document.write(gioihanl('{classical_row.recent_topic_row.L_TITLE}'));

Unknown end tag for &lt;/script&gt;




Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/span&gt;





Unknown end tag for &lt;/td&gt;


<td nowrap="nowrap" class="reply" width="47px">



Unknown end tag for &lt;/td&gt;


<td nowrap="nowrap" class="view" width="44px">



Unknown end tag for &lt;/td&gt;


<td nowrap="nowrap" width="109px">
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


<td nowrap="nowrap" class="box" width="175px">



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<!-- END recent_topic_row -->


Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;


<div style="display:none" class="dulieu">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;



<!-- END classical_row -->
<!--

Unknown end tag for &lt;/td&gt;


```


Mod\_top\_post\_users\_week

```

-->
<td class="alt1" valign="top" id="toptuan" style="display:none">
<table cellpadding="0" cellspacing="0" border="0" width="100%" height="160">
<tbody><!-- BEGIN POSTER -->
<tr>
<td nowrap="nowrap">
<span class="smallfont">{POSTER.NAME}

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;


<td nowrap="nowrap" align="right">
<span class="smallfont"><script>document.write(gioihans('{POSTER.NB_POSTS}'));

Unknown end tag for &lt;/script&gt;



Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<!-- END POSTER -->


Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/td&gt;


<!--

Unknown end tag for &lt;/td&gt;




```
Mod\_top\_posters

```

<script>
function gioihans(a){
var b = a.split(' ');
return b[0];
}


Unknown end tag for &lt;/script&gt;


<table class="tborder" cellpadding="6" cellspacing="1" border="0" width="100%"
height="1">
<tbody>
<tr>
<td class="thead" nowrap="nowrap" align="left" width="164px">
<div id="ctop_select_1" onclick="selectWysiwyg(this, 'topmenu');"  rel="nofollow" style="cursor: pointer; ">
<span id="tentop">Gửi bài nhiều

Unknown end tag for &lt;/span&gt;


<img src="http://forum.fullvn.net/fullvn/misc/menu_open.gif" border="0" title="" alt=""/>


Unknown end tag for &lt;/div&gt;


<div class="select" id="topmenu" style="margin-top: 3px; z-index: 50; visibility:hidden;  clip: rect(auto auto auto auto); "
align="left">
<table cellpadding="4" cellspacing="1" border="0">
<tbody>
<tr>
<td class="vbmenu_option vbmenu_option_alink" nowrap="nowrap" style="cursor: default; ">
<a href="javascript:changstat('toptuan','topposter','Gửi bài nhiều');">Gửi bài nhiều

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td class="vbmenu_option vbmenu_option_alink" nowrap="nowrap" style="cursor: default; ">
<a href="javascript:changstat('topposter','toptuan','Gửi nhiều trong tuần');">Gửi nhiều trong tuần

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;





Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;





Unknown end tag for &lt;/div&gt;


<script>

function changstat(a,b,c){
var div = document.getElementById(a);
var div2 = document.getElementById(b);
var div3 = document.getElementById('tentop');
div.style.display = 'none';
div2.style.display = 'block';
div3.innerHTML = c;
selectWysiwyg(this, 'topmenu');
}
function changstat2(a,b,c){
var div = document.getElementById(a);
var div2 = document.getElementById(b);
var div3 = document.getElementById('tentop2');
div.style.display = 'none';
div2.style.display = 'block';
div3.innerHTML = c;
selectWysiwyg(this, 'topmenu2');
}


Unknown end tag for &lt;/script&gt;





Unknown end tag for &lt;/td&gt;


<td class="thead" nowrap="nowrap"  width="779px">
<span id="ct0" class="vbmenu_control">
<a href="javascript:cswitch_hm(0);">All Forums

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/span&gt;

|
<span id="ct1" class="">
<a href="javascript:cswitch_hm(1);">

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td class="alt1" valign="top" id="topposter">
<table cellpadding="0" cellspacing="0" border="0" width="100%" height="160">
<tbody><!-- BEGIN POSTER -->
<tr>
<td nowrap="nowrap">
<span class="smallfont">{POSTER.NAME}

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;


<td nowrap="nowrap" align="right">
<span class="smallfont"><script>document.write(gioihans('{POSTER.NB_POSTS}'));

Unknown end tag for &lt;/script&gt;



Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<!-- END POSTER -->


Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/td&gt;


<!--

Unknown end tag for &lt;/td&gt;


```


Cho vào đầu Index body:

```

<div class="main-head">
<div class="page-title"><h2>Lastest topic

Unknown end tag for &lt;/h2&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;


<div class="main-content">
<!-- BEGIN giefmod_index1 -->
{giefmod_index1.MODVAR}
<!-- END giefmod_index1 -->


Unknown end tag for &lt;/div&gt;



```

Sắp xếp Widget:



![http://a.imageshack.us/img221/4597/nhchpmnhnh2012060120482.png](http://a.imageshack.us/img221/4597/nhchpmnhnh2012060120482.png)
