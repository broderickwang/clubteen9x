demo : http://www.teenlythuongkiet.net/forum



Lần lượt thay thế temp
mod\_most\_active\_topics

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

mod\_most\_viewed\_topics

```



-->
<tr>

<td class="thead" style="height: 1px;">
<div href="#" rel="nofollow" style="cursor: pointer; " onclick="selectWysiwyg(this, 'topmenu2');"><span id="tentop2">Topic xem nhiều

Unknown end tag for &lt;/span&gt;

<img src="http://sinhvienit.net/@forum/skin/SinhVienIT.Net-IT_Pro-Ver3/misc/menu_open.gif" border="0" title="" alt=""/>

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
mod\_recent\_topics

```

-->

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
<tr style="height: 17px;">
<td width="380px" nowrap="nowrap">
<img src="http://i48.servimg.com/u/f48/16/58/89/73/post_n10.gif"/>
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


mod\_top\_post\_users\_week

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
mod\_top\_posters

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


<img src="http://sinhvienit.net/@forum/skin/SinhVienIT.Net-IT_Pro-Ver3/misc/menu_open.gif" border="0" title="" alt=""/>


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

Vào Index\_body thêm đoạn này lên đầu

```

<div class="main-head">
<div class="page-title"><h2>

Unknown end tag for &lt;/h2&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;


<div class="main-content">
<!-- BEGIN giefmod_index1 -->
{giefmod_index1.MODVAR}
<!-- END giefmod_index1 -->


Unknown end tag for &lt;/div&gt;



```
sắp xếp widget
![http://a.imageshack.us/img221/4597/nhchpmnhnh2012060120482.png](http://a.imageshack.us/img221/4597/nhchpmnhnh2012060120482.png)

Thêm js :


Placement : In the home page

```

$(function(){
$('#option-lastpost .op-last:first').addClass('op-last2');
LoadLastPost(0);
});

jQuery(document).ready(function(){
jQuery("field_id2").hide();
jQuery("field_id2").next().hide();
jQuery("profile_field_13_2").parent().parent().hide();
});

```

Placement : In the topics

```

$(function(){

$('#select-lastpost option').each(function(){
if ($(this).text().search(/\|\s\s\s\|--/) == 0){$(this).addClass('select-intopic');}
});

sl_op = $('#select-lastpost option.select-intopic').length;
ClickLast = Math.floor(Math.random()*sl_op);
$('#select-lastpost option.select-intopic').filter(':eq('+ClickLast+')').attr('selected', 'selected');
$('#select-lastpost').addClass('op-last-select');
Where = '&search_where='+$('#select-lastpost').val();
LoadLastPost(0);

});```



chèn vào css :

```


/* Lastopic */
#last-posts{width:752px;float:right;}

#option-lastpost{height:10px;}

.op-last{float:left;border:1px solid #999;padding:2px 0;height:18px;background-color:white;margin:-5px 2px 0;width:80px;text-align:center;background-color:#DDD;}
.op-last2{height:18px;border-bottom:0;color:white;background-color:#000;}
.op-last-bottom{float:left;border:1px solid #999;margin:-1px 2px 0;padding:5px;cursor:pointer;height:15px;background-color:#DDD;}
.op-last-bottom2{height:23px;font-weight:bold;border-radius:0 0 5px 5px;border-top:0;background-color:white;margin-top:-4px;color:red;background-color:#FFF;}
.op-last-select{font-weight:bold!important;color:red;}
.op-choice{float:left;display:none;}
.op-change{float:left;margin-left:5px;margin-top:50px;}


#main-lastpost{;padding:20px 10px 5px;min-height:300px;}
#dl-lastpost{display:none;}
#name-lastpost,.name-lastpost {
position: absolute;
padding: 5px 25px;
font-style: italic;
}

.dl-post {
height: 15px;
}
lp1,.lp2,.lp3,.lp4,.lp5,.lp6,.lp7,.imglp{
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
position: absolute;
}
.dl-post:hover{
background-color:#DDD;
}


.lp2 {

width: 300px;
}
.lp3 {
margin-left: 305px;
width: 100px;
}
.lp4 {
margin-left: 415px;
width: 100px;
}
.lp5 {
margin-left: 525px;
width: 130px;
}
.lp6 {
margin-left: 650px;
font-style: italic;
}
.lp7 {
margin-left: 680px;
font-style: italic;
}

.imglp {
margin-left: 860px;
margin-top:1px;
}
#trang-lastpost {
float: right;
}
.TrangTruoc,.TrangSau,.TrangHT{font:12px Courier;cursor:pointer;color:red;float: left;height:30px;width:30px;opacity:0.6;}
.TrangTruoc:hover,.TrangSau:hover,.TrangHT:hover{opacity:1;}
.TrangTruoc{display:none;background:url(http://i48.servimg.com/u/f48/16/58/89/73/fancy_12.png) no-repeat;}
.TrangSau{background:url(http://i48.servimg.com/u/f48/13/58/60/43/fancy_10.png) no-repeat;}
#SoTrangLT{width:25px;height:22px;text-align:center;font-weight:bold;border:3px dashed white;}
#SoTrangLT:hover{border:3px dashed black;color:red;}

#Load {
display:none;
background: white url(http://i48.servimg.com/u/f48/13/58/60/43/loadaj10.gif) 50% 50% no-repeat;
position: fixed;
left: 50%;
top: 40%;
width: 50px;
height: 50px;
border: 10px solid #82D23D;
border: 20px solid rgba(130, 210, 60, .3);
border-radius: 50px;
margin-left: -25px;
}




a{text-decoration:none}
a.mainmenu{font: 14px bold Verdana,Arial,Helvetica,sans-serif;
font-weight: bold!important;}
.tborder {
background: #C6D7E9;
color: black;
}#postmenu_445{
font-size: 14pt;}
.smallfont {
font: 11px verdana, geneva, lucida, 'lucida grande', arial, helvetica, sans-serif;
}
.vbmenu_option
{padding: 3px 6px 3px 6px;

background: #fff;
color: #000;
font: 11px verdana, geneva, lucida, 'lucida grande', arial, helvetica, sans-serif;
white-space: nowrap;
cursor: pointer;
}

.thead {
background: #E0E8F1 url(http://i45.servimg.com/u/f45/16/75/78/56/highli10.png) repeat-x 0 -1px;
color: #567BA0;
font: bold 11px tahoma, verdana, geneva, lucida, 'lucida grande', arial, helvetica, sans-serif;
}
td.thead, th.thead, div.thead {
padding: 4px;
}
.alt2zja, .alt2Activezja {
padding:6px;
background: white url(http://i45.servimg.com/u/f45/16/75/78/56/row_gr10.png);
color: black;
background-repeat: repeat-x !important;
background-position: 0 100% !important;
}
.alt1, .alt1Active {
padding:6px;
background: white url(http://i45.servimg.com/u/f45/16/75/78/56/row_gr10.png);
color: black;
background-repeat: repeat-x !important;
background-position: 0 100% !important;
}
.alt1zja, .alt1Activezja {
padding:6px;
background: white url(http://i45.servimg.com/u/f45/16/75/78/56/row_gr10.png);
color: black;
background-repeat: repeat-x !important;
background-position: 0 100% !important;
}

```


Last chỉnh sửa chủ yếu trong css và js

Last ghép share duy nhất tại http://www.hotrofm.com
copy vui lòng ghi nguồn