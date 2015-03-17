demo : http://hotro45.forumvi.com/
xem toàn bộ code : http://www.hotrofm.com/t1298-topic#5386
an
css

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
margin-left: 740px;
font-style: italic;
}
.lp8 {
margin-left: 940px;
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




```






Vào Index\_body thêm đoạn này lên đầu

```


<script src="http://hotro45.forumvi.com/11228.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;


<script src="http://hotro45.forumvi.com/12400.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;


<script src="http://hotro45.forumvi.com/10388.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;


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

mod\_recent\_topics

```

-->

<!-- BEGIN classical_row -->
<td class="alt1" rowspan="3" valign="top" id="changstats_latestposts">
<table cellpadding="0" cellspacing="0" border="0" width="100%" >

<div id="Load">

Unknown end tag for &lt;/div&gt;



<div id="name-lastpost"><span class="lp2">Tiêu đề

Unknown end tag for &lt;/span&gt;

<span class="lp3">Sáng lập

Unknown end tag for &lt;/span&gt;

<span class="lp4">Gửi cuối

Unknown end tag for &lt;/span&gt;

<span class="lp5">Chuyên mục

Unknown end tag for &lt;/span&gt;

<span class="lp6">Bình

Unknown end tag for &lt;/span&gt;

<span class="lp7">Xem

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;


<div id="main-lastpost">

Unknown end tag for &lt;/div&gt;


<div id="option2-lastpost">
<div class="op-last-bottom op-last-bottom2" onclick="Op2Last('/search?search_author=%%%&search_keywords')">Bài gửi sau cùng

Unknown end tag for &lt;/div&gt;


<div class="op-last-bottom" onclick="Op2Last('/search?search_id=newposts')">Bài từ lần truy cập trước

Unknown end tag for &lt;/div&gt;


<div class="op-last-bottom" onclick="Op2Last('/search?search_id=egosearch')">Bài bạn đã tham gia thảo luận

Unknown end tag for &lt;/div&gt;


<div class="op-last-bottom" onclick="Op2Last('/search?search_id=unanswered')">Bài chưa ai trả lời

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;



<div id="trang-lastpost">
<div class="TrangTruoc" title="Tải dữ liệu trang trước">

Unknown end tag for &lt;/div&gt;

<div class="TrangHT"><input id="SoTrangLT" value="1" maxlength="2" title="Trang hiện tại" />

Unknown end tag for &lt;/div&gt;

<div class="TrangSau" title="Tải dữ liệu trang tiếp theo">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div id="dl-lastpost">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div class="clear">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/table&gt;





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
<div onclick="Op2Last('/search?search_author=*_*&amp;search_keywords')" title="Tải Lại Bảng Thống Kê Bài Mới">forum

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/span&gt;


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
11228.js

```
Link='/search?search_author=*_*&search_keywords';Start='&start=';Where='';Trang=20;$(function(){op_choice=Math.floor(Math.random()*4);OpChoice(op_choice);$('.op-prew').click(function(){op_choice-=1;if(op_choice<0)op_choice=3;OpChoice(op_choice)});$('.op-next').click(function(){op_choice+=1;if(op_choice>3)op_choice=0;OpChoice(op_choice)});$('#jumpbox-last select').clone().appendTo('#option-lastpost');$('#option-lastpost select').removeAttr('name').removeAttr('onchange').attr('id','select-lastpost');$('.op-last-bottom').click(function(){$('.op-last-bottom').removeClass('op-last-bottom2');$(this).addClass('op-last-bottom2')});$('#option-lastpost .op-last').click(function(){$('#option-lastpost .op-last').removeClass('op-last2');$('#select-lastpost').removeClass('op-last-select');$(this).addClass('op-last2')});$('#select-lastpost').live('change',function(){$('#option-lastpost .op-last').removeClass('op-last2');$(this).addClass('op-last-select');if($(this).val()=='1'){Where='';LoadLastPost(0)}else if($(this).val()!='-1'){Where='&search_where='+$(this).val();LoadLastPost(0)}});$('.TrangTruoc').click(function(){st=parseInt($('#SoTrangLT').val())-1;$('#SoTrangLT').val(st);LoadLastPost(st-1)});$('.TrangSau').click(function(){st=parseInt($('#SoTrangLT').val())+1;$('#SoTrangLT').val(st);LoadLastPost(st-1)});$('#SoTrangLT').change(function(){ltval=parseInt($(this).val());if(ltval<1||ltval>20){$(this).val(1)}else{LoadLastPost(ltval-1)}})});function LoadLastPost(page){page>0?$('.TrangTruoc').show():$('.TrangTruoc').hide();if(page==0){$('#SoTrangLT').val(1)}LinkLastPost=Link+Where+Start+page*Trang;$('#Load').show();$('#dl-lastpost').load(LinkLastPost+' form.frm-form .main-content .table .statused tr',function(){$('#main-lastpost').empty();$(this).find('tr').length<15?$('.TrangSau').hide():$('.TrangSau').show();if($(this).is(':empty')){$('#main-lastpost').text('Không có dữ liệu')}else{$(this).find('tr').each(function(){$('<div class="dl-post">

Unknown end tag for &lt;/div&gt;

').appendTo('#main-lastpost');$('<span class="lp1">

Unknown end tag for &lt;/span&gt;

').html($(this).find('span.status').html()).appendTo('#main-lastpost .dl-post:last');$('<span class="lp2" title="'+$(this).find('td:first h2.topic-title').text()+'">

Unknown end tag for &lt;/span&gt;

').html('<a href="'+$(this).find('td:last a:last').attr('href')+'">'+$(this).find('td:first h2.topic-title').text()+'

Unknown end tag for &lt;/a&gt;

').appendTo('#main-lastpost .dl-post:last');$(this).find('td:first a.gensmall').appendTo('#main-lastpost .dl-post:last').wrap('<span class="lp3">

Unknown end tag for &lt;/span&gt;

');$(this).find('td:eq(4) a.gensmall').appendTo('#main-lastpost .dl-post:last').wrap('<span class="lp4">

Unknown end tag for &lt;/span&gt;

');$('<span class="lp5">

Unknown end tag for &lt;/span&gt;

').html($(this).find('td:eq(1)').html()).appendTo('#main-lastpost .dl-post:last');$('<span class="lp6">

Unknown end tag for &lt;/span&gt;

').html($(this).find('td:eq(2)').text()).appendTo('#main-lastpost .dl-post:last');$('<span class="lp7">

Unknown end tag for &lt;/span&gt;

').html($(this).find('td:eq(3)').text()).appendTo('#main-lastpost .dl-post:last');$('<img src="http://illiweb.com/fa/m/icon_minitime1.gif" class="imglp" title="'+$(this).find('td:eq(4)').text().replace(' by','')+'">

Unknown end tag for &lt;/img&gt;

').appendTo('#main-lastpost .dl-post:last');if($(this).find('td:first img[alt*="posted in this topic"]').length){$('<span class="lp8"><img src="'+$(this).find('td:first img[alt*="posted in this topic"]').attr('src')+'" title="Bạn đã tham gia thảo luận tại chủ đề này">

Unknown end tag for &lt;/img&gt;



Unknown end tag for &lt;/span&gt;

').appendTo('#main-lastpost .dl-post:last')}});$('#dl-lastpost').empty()}$('#Load').fadeOut()})}function OpChoice(eq){$('#option-lastpost .op-choice').hide();$('#option-lastpost .op-choice').filter(':eq('+eq+')').show()}function Op1Last(forum){forum==''?Where='':Where='&search_where='+forum;LoadLastPost(0)}function Op2Last(op){Link=op;LoadLastPost(0)}```

12400.js
> ```
$(function(){$('#select-lastpost option').each(function(){if($(this).text().search(/\|\s\s\s\|--/)==0){$(this).addClass('select-intopic')}});sl_op=$('#select-lastpost option.select-intopic').length;ClickLast=Math.floor(Math.random()*sl_op);$('#select-lastpost option.select-intopic').filter(':eq('+ClickLast+')').attr('selected','selected');$('#select-lastpost').addClass('op-last-select');Where='&search_where='+$('#select-lastpost').val();LoadLastPost(0)});```


10388.js
```
$(function(){$('#option-lastpost .op-last:first').addClass('op-last2');LoadLastPost(0)});jQuery(document).ready(function(){jQuery("field_id2").hide();jQuery("field_id2").next().hide();jQuery("profile_field_13_2").parent().parent().hide()});```