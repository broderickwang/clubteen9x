như đã hứa tiếp theo mình xin trình bày last cùi bắp :d
vì hầu như last pro đều share hết lên share tiếp cái cùi vậy :d

demo: http://hotro17.forumvi.com/
demo ảnh :
![http://i45.servimg.com/u/f45/14/65/61/19/adasda12.jpg](http://i45.servimg.com/u/f45/14/65/61/19/adasda12.jpg)


đầu tiên :d
sắp sếp wiget

![http://i40.servimg.com/u/f40/17/90/43/46/untitl10.png](http://i40.servimg.com/u/f40/17/90/43/46/untitl10.png)

cho cái này vào đầu body
an
```

<div class="main-head"><div class="page-title"><h2>CHATBOX

Unknown end tag for &lt;/h2&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;


<div class="boxContent" style="float: left; width: 20%;">
<div class="main"><div class="main-head"><div class="page-tile">Thành Viên Tích Cực

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div class="main-content" style="background-color: white; "><div style="padding:10px;"><div id="top-guibai">

Unknown end tag for &lt;/div&gt;

<script>jQuery("#top-guibai").load("/memberlist?mode=posts&order=DESC&submit=Ok&username td.avatar-mini a:lt(12)");

Unknown end tag for &lt;/script&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

  

Unknown end tag for &lt;/div&gt;


<div class="main paged; boxContent" style="float: left; width: 60%;background-color: white; ">
<!-- BEGIN giefmod_index1 -->
{giefmod_index1.MODVAR}
<!-- BEGIN saut -->
<div style="height:{SPACE_ROW}px">

Unknown end tag for &lt;/div&gt;


<!-- END saut -->
<!-- END giefmod_index1 -->


Unknown end tag for &lt;/div&gt;

 

Unknown end tag for &lt;/div&gt;


<div class="boxContent" style="float: left; width: 20%;">
<div class="main"><div class="main-head"><div class="page-tile">Last Online

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div class="main-content" style="background-color: white; " ><div style="padding:10px;"><div id="topp">

Unknown end tag for &lt;/div&gt;

<script>jQuery("#topp").load("/memberlist?mode=lastvisit&order=DESC&submit=Ok&username td.avatar-mini a:lt(12)");

Unknown end tag for &lt;/script&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




<div class="main paged; boxContent" style="float: left; width: 100%; ">
```



tiếp theo cho vào recent\_topic


```

<!-- BEGIN classical_row -->
<div class="module main bphai" style="
border: 1px solid #DDD;
">
<div class="main-head"><h3 id="TenLasttopic">Bài gửi sau cùng

Unknown end tag for &lt;/h3&gt;



Unknown end tag for &lt;/div&gt;


<div class="main-content1" id="main-rf-content">
<div id="rf-content" style=" padding: 10px; " >
<!-- BEGIN recent_topic_row -->
<div class="ltpvds">
<span class="tenltp">♥ <a href="{classical_row.recent_topic_row.U_TITLE}">{classical_row.recent_topic_row.L_TITLE}

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;


<span class="spanphailtp">{ON} <span class="ktthg">{classical_row.recent_topic_row.S_POSTTIME}

Unknown end tag for &lt;/span&gt;

 {BY}
<!-- BEGIN switch_poster -->
<a href="{classical_row.recent_topic_row.switch_poster.U_POSTER}">{classical_row.recent_topic_row.switch_poster.S_POSTER}

Unknown end tag for &lt;/a&gt;


<!-- END switch_poster -->

<!-- BEGIN switch_poster_guest -->
{classical_row.recent_topic_row.switch_poster_guest.S_POSTER}
<!-- END switch_poster_guest -->

<!--
<a href="{classical_row.recent_topic_row.U_POSTER}">{classical_row.recent_topic_row.S_POSTER}

Unknown end tag for &lt;/a&gt;

 {ON} {classical_row.recent_topic_row.S_POSTTIME}<br /><br />
-->


Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;


<!-- END recent_topic_row -->


Unknown end tag for &lt;/div&gt;


<div id="TuyChonLastTopic">
<div class="TrangTruoc" title="Tải dữ liệu trang trước">

Unknown end tag for &lt;/div&gt;

<div class="TrangSau" title="Tải dữ liệu trang tiếp theo">

Unknown end tag for &lt;/div&gt;


<select id="Chon_LTopic">
<option value="Bài gửi sau cùng">Bài gửi sau cùng

Unknown end tag for &lt;/option&gt;


<option value="Bài chưa ai trả lời">Bài chưa ai trả lời

Unknown end tag for &lt;/option&gt;


<option value="Bài mới từ lần truy cập trước">Bài mới từ lần truy cập trước

Unknown end tag for &lt;/option&gt;


<option value="Bài có bạn tham gia thảo luận">Bài có bạn tham gia thảo luận

Unknown end tag for &lt;/option&gt;




Unknown end tag for &lt;/select&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div id="DL_LastTopic">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<!-- END classical_row -->
<script type="text/javascript">
//<![CDATA[
$('#rf-content .tenltp a').each(function(){
$(this).attr('href',$(this).attr('href').split('#')[0]);
});

t_lasttopic=0;
$('.TrangTruoc').hide();
$('.TrangTruoc').click(function(){TooltipVDS(-1);});
$('.TrangSau').click(function(){TooltipVDS(1);});
linklasttopic='/search?search_author=*_*&search_keywords&start=';

if (!$('#logout').is(':visible'))$('#Chon_LTopic').hide();

$('#Chon_LTopic').change(function(){
$('#TenLasttopic').text($(this).val());
if ($(this).val()=='Bài gửi sau cùng')
{
linklasttopic='/search?search_author=*_*&search_keywords&start=';
t_lasttopic=1;
TooltipVDS(-1);
}
else if ($(this).val()=='Bài chưa ai trả lời')
{
linklasttopic='/search?search_id=unanswered&start=';
t_lasttopic=1;
TooltipVDS(-1);
}
else if ($(this).val()=='Bài mới từ lần truy cập trước')
{
linklasttopic='/search?search_id=newposts&start=';
t_lasttopic=1;
TooltipVDS(-1);
}
else if ($(this).val()=='Bài có bạn tham gia thảo luận')
{
linklasttopic='/search?search_id=egosearch&start=';
t_lasttopic=1;
TooltipVDS(-1);
}
});

$('#DL_LastTopic').ajaxStart(function(){$('#TuyChonLastTopic').fadeOut();});
$('#DL_LastTopic').ajaxComplete(function(){$('#TuyChonLastTopic').fadeIn();});

function TooltipVDS(trang_lt){
t_lasttopic+=trang_lt;
if (trang_lt!=0) $('#rf-content').html('<img src="http://i48.servimg.com/u/f48/13/58/60/43/loadin15.gif">

Unknown end tag for &lt;/img&gt;

');
$('#DL_LastTopic').load(linklasttopic+t_lasttopic*13+' form.frm-form .main-content .table .statused tr:lt(13)',function(){
if ($('#DL_LastTopic').is(':empty'))
{
$('#rf-content').text('Hết dữ liệu');
$('.TrangSau').hide();
}
else
{
$('.TrangSau').fadeIn();
if (trang_lt!=0) $('#rf-content').empty();
$('#DL_LastTopic tr').each(function(index){
if (trang_lt!=0)
{
$('<div class="ltpvds">

Unknown end tag for &lt;/div&gt;

').appendTo('#rf-content');
$('<div class="tenltp">

Unknown end tag for &lt;/div&gt;

').html('♥ '+$(this).find('td:first .topic-title').html()).appendTo('.ltpvds:last');
$(this).find('td:eq(4) a:last').remove();
$('<div class="spanphailtp">

Unknown end tag for &lt;/div&gt;

').html($(this).find('td:eq(4)').html()).appendTo('.ltpvds:last');
t_lasttopic>0 ? $('.TrangTruoc').fadeIn() : $('.TrangTruoc').hide();
}
$('<div class="DL_Tooltip">

Unknown end tag for &lt;/div&gt;

').appendTo('#DL_LastTopic');
$('<div>

Unknown end tag for &lt;/div&gt;

').html('Tiêu đề: <font color="yellow">'+$(this).find('td:first a.topictitle').text()+'

Unknown end tag for &lt;/font&gt;

').appendTo('.DL_Tooltip:last');
$('<div>

Unknown end tag for &lt;/div&gt;

').html('Chuyên mục: <font color="crimson"><b>'+$(this).find('td:eq(1)').text()+'

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/font&gt;

').appendTo('.DL_Tooltip:last');
$('<div style="border-top:1px dotted white;padding-top:5px;margin-top:5px;">

Unknown end tag for &lt;/div&gt;

').html('Người sáng lập: '+$(this).find('td:first a.gensmall').html()).appendTo('.DL_Tooltip:last');
$('<div>

Unknown end tag for &lt;/div&gt;

').html('Người gửi cuối: '+$(this).find('td:eq(4) a.gensmall').html()).appendTo('.DL_Tooltip:last');
$(this).find('td:eq(4) a.gensmall').remove();
guicuoi=$(this).find('td:eq(4)').text().replace(' by','');
$('<div>

Unknown end tag for &lt;/div&gt;

').html('Thời gian gửi: <font color="cyan">'+guicuoi+'

Unknown end tag for &lt;/font&gt;

').appendTo('.DL_Tooltip:last');
$('<div style="padding-top:5px;">

Unknown end tag for &lt;/div&gt;

').html('Trạng thái: <font color="chartreuse">'+$(this).find('td:first .status img').attr('alt').replace('New posts','Có bài viết mới').replace('No new posts','Không có bài viết mới').replace('This topic is locked','Chủ đề này đã bị khóa')+'

Unknown end tag for &lt;/font&gt;

').appendTo('.DL_Tooltip:last');
$('<div style="border-bottom:1px dotted white;padding-bottom:5px;margin-bottom:5px;">

Unknown end tag for &lt;/div&gt;

').html('Có <font color="yellow"><b>'+$(this).find('td:eq(3)').text()+'

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/font&gt;

 lượt người xem và <font color="cyan"><b>'+$(this).find('td:eq(2)').text()+'

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/font&gt;

 bài trả lời').appendTo('.DL_Tooltip:last');
$(this).find('td:first img[alt*="posted in this topic"]').length ? $('<div>

Unknown end tag for &lt;/div&gt;

').html($(this).find('td:first img[alt*="posted in this topic"]').attr('alt').replace('You have posted in this topic.','<font color="cyan">Bạn đã tham gia thảo luận tại chủ đề này

Unknown end tag for &lt;/font&gt;

').replace('You have not posted in this topic.','<font color="red">Bạn chưa tham gia thảo luận tại chủ đề này

Unknown end tag for &lt;/font&gt;

')).appendTo('.DL_Tooltip:last') : $('<div>

Unknown end tag for &lt;/div&gt;

').html('<font color="red">Bạn chưa tham gia thảo luận tại chủ đề này

Unknown end tag for &lt;/font&gt;

').appendTo('.DL_Tooltip:last');
$(this).remove();
});
}
});
}

$(window).load(function(){
if ($('#DL_LastTopic').is(':empty'))
{
$('#DL_LastTopic').html('<img src="http://i48.servimg.com/u/f48/13/58/60/43/gsnjnw10.gif">

Unknown end tag for &lt;/img&gt;

');
TooltipVDS(0);
}
});

$('#rf-content .tenltp a').live('mouseenter',function(){
if ($('#DL_LastTopic').is(':empty'))
{
$('#DL_LastTopic').html('<img src="http://i48.servimg.com/u/f48/13/58/60/43/gsnjnw10.gif">

Unknown end tag for &lt;/img&gt;

').ajaxComplete(function(){$('#DL_LastTopic .DL_Tooltip').filter(':eq('+$(this).parent().parent().index()+')').show();});
TooltipVDS(0);
}
$('#DL_LastTopic').show();
$('#DL_LastTopic .DL_Tooltip').hide();
$('#DL_LastTopic .DL_Tooltip').filter(':eq('+$(this).parent().parent().index()+')').show();
$(this).live('mousemove',function(event){$('#DL_LastTopic').css({'left':event.pageX-30,'top':event.pageY+30});});
});
$('#rf-content .tenltp a').live('mouseleave',function(){$('#DL_LastTopic').hide();});
//]]>


Unknown end tag for &lt;/script&gt;


```


tiếp nữa là css


```

#DL_LastTopic,.DL_TooltipCCM{position:absolute;display:none;background-image:url(http://i48.servimg.com/u/f48/13/58/60/43/opacit10.png);padding:10px 20px;border-radius:5px;color:white;z-index:99;}
.DL_Tooltip {display:none;}
.TrangTruoc,.TrangSau{font:12px Courier;cursor:pointer;color:red;position:absolute;top:-29px;height:30px;width:30px;opacity:0.6;}
.TrangTruoc:hover,.TrangSau:hover{opacity:1;}
.TrangTruoc{right:40px;background:url(http://i48.servimg.com/u/f48/16/58/89/73/fancy_12.png) no-repeat;}
.TrangSau{right:10px;background:url(http://i48.servimg.com/u/f48/13/58/60/43/fancy_10.png) no-repeat;}
#Chon_LTopic{position:absolute;top:-30px;border:0;height:25px!important;left:11px;background:#627AAD;color:#DEDFDF;}
.spanphai,.spanphailtp,.spanphaiccm{float:right;white-space:nowrap;width:45%;text-align:right;}
.spanphai{width:30%;}
.ccmvds{height:16px;}
.tenltp,.tenccm{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:55%;float:left;text-transform:capitalize;}
#main-rf-content{position:relative;}
.module .main-content {
padding: 0em;
}
.main .main-head {

background: url(http://demo.dzinerstudio.com/smf2/Themes/joli_20/images/theme/main_block.png) no-repeat 100% -258px;
}
.main-head {
background: url(http://demo.dzinerstudio.com/smf2/Themes/joli_20/images/theme/main_block.png) no-repeat 100% -258px;
font-weight: 400;
padding: .7em 1.3em;
}
#top-guibai img {margin:3px;height: 35px;width: 35px;background-color: #FCFCFF;padding: 2px;border: 1px solid #CCC;border-radius: 4px;-webkit-border-radius: 4px;-moz-border-radius: 4px;-khtml-border-radius: 4px;}#top-guibai {text-align: center;width: 180px;}#top-guibai a span{display:none;}#top-guibai a:hover span {display: inline;position: absolute;padding: 3px;border: 1px solid white;border-radius: 1px;background: rgba(0, 0, 0, 0.8);box-shadow: 0 0 4px #333;color: white !important;font-size: 11px;text-align: center;}
#topp img {margin:3px;height: 35px;width: 35px;background-color: #FCFCFF;padding: 2px;border: 1px solid #CCC;border-radius: 4px;-webkit-border-radius: 4px;-moz-border-radius: 4px;-khtml-border-radius: 4px;}#topp {text-align: center;width: 180px;}#topp a span{display:none;}#topp a:hover span {display: inline;position: absolute;padding: 5px;border: 1px solid white;border-radius: 1px;background: rgba(0, 0, 0, 0.8);box-shadow: 0 0 4px #333;color: white !important;font-size: 10px;}


```