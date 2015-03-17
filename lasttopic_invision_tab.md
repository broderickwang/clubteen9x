**Demo:
Online: http://invision.chinhphuc.info/forum
Pic: ![http://i40.servimg.com/u/f40/17/70/31/89/tabii10.jpg](http://i40.servimg.com/u/f40/17/70/31/89/tabii10.jpg)**

Spoiler:



**Nói qua về sản phẩm:**

> Convert từ Bảng thống kê dạng Tab cho bb2 ~ http://diendan.chinhphuc.info/t22967-topic#149663
> Cách làm đơn giản hơn rất rất nhiều so với việc thay code cho từng mục ở bb2 hay punbb.
> Các phiên bản khác vẫn có thể áp dụng cách làm này, song cần chỉnh sửa đôi chỗ Vui



**Thiết kế Last topic:**

> Javascript: Tạo 1 file javascript đặt In all the pages

```

function Op1Last(forum) {
forum == '' ? Where = '' : Where = '&search_where=' + forum;
LoadLastPost(0)
}
function Op2Last(op) {
Link = op;
LoadLastPost(0)
}
function LoadLastPost(page) {
LinkLastPost = Link + Where + Start + page * Trang;
$('#Load').show();
$('#dl-lastpost').load(LinkLastPost + ' form.ipbform .ipbtable tr', function () {
$('#main-lastpost').empty();
$(this).find('tr').length < 10 ? $('.TrangSau').hide() : $('.TrangSau').show();
if($(this).is(':empty')) {
$('#main-lastpost').text('Không có dữ liệu')
} else {
$(this).find('tr').each(function () {
var baicuoi = $(this).find('td:eq(2) a.topictitle').text(),
linkcuoi = $(this).find('td:last a:last').attr('href'),
tacgia = $(this).find('td:eq(4)').html(),
guicuoi = $(this).find('td:eq(7) strong').html(),
chuyenmuc = $(this).find('td:eq(3)').html(),
reply = $(this).find('td:eq(5)').text(),
view = $(this).find('td:eq(6)').text(),
trangthai = $(this).find('td:eq(0) img').attr('alt'),
daspam;
daspam = 1 == $(this).find("td:eq(1) img[alt='You have posted in this topic.']").length ? '<p style="background-color: highlight; padding: 3px;">Bạn đã tham gia thảo luận trong chủ đề này.

Unknown end tag for &lt;/p&gt;

' : '<p style="background-color: #FFF000; padding: 3px;">Bạn chưa tham gia thảo luận trong chủ đề này.

Unknown end tag for &lt;/p&gt;

';
$('<div class="dl-post">

Unknown end tag for &lt;/div&gt;

').appendTo('#main-lastpost');
$('.lp2').mouseover(function () {
$(this).children('.intooltip').show();
$(this).live('mousemove', function (event) {
$('.intooltip').css({
'left': event.pageX - 520,
'top': '5px'
})
})
});
var trangthai = $(this).find('td:eq(0) img').attr('alt');
if(trangthai == 'Bài viết mới') {
var imgw = '<img title="Bài viết mới" src="http://i40.servimg.com/u/f40/17/70/31/89/post_n10.gif">'
} else if(trangthai == 'Chủ đề này đã bị khóa, bạn không thể sửa hay trả lời') {
var imgw = '<img title="Chủ đề này đã bị khóa, bạn không thể sửa hay trả lời" src="http://i40.servimg.com/u/f40/17/70/31/89/locked12.png">'
} else {
var imgw = '<img title="Không có bài viết mới" src="http://i40.servimg.com/u/f40/17/70/31/89/post_o10.gif">'
}
$('<span class="lp1" title="' + $(this).find('td:eq(0)').text() + '">

Unknown end tag for &lt;/span&gt;

').html('' + imgw + '').appendTo('#main-lastpost .dl-post:last');
$('<span class="lp2">

Unknown end tag for &lt;/span&gt;

').html('<a href="' + linkcuoi + '"><span class="title">' + baicuoi + '

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;

 <span class="intooltip">Tiêu đề: <a href="' + linkcuoi + '">' + baicuoi + '

Unknown end tag for &lt;/a&gt;

 <hr>Tác giả: ' + tacgia + ' <br>Người gửi cuối: ' + guicuoi + ' <br>Chuyên mục: ' + chuyenmuc + ' <hr>Lượt trả lời: <font color="indigo">' + reply + '

Unknown end tag for &lt;/font&gt;

 <br>Lượt xem: <font color="green">' + view + '

Unknown end tag for &lt;/font&gt;

 <hr>Trạng thái: <font color="brown">' + trangthai + '

Unknown end tag for &lt;/font&gt;

 <br>' + daspam + '

Unknown end tag for &lt;/span&gt;

').appendTo('#main-lastpost .dl-post:last');
$('<span class="lp4" title="' + $(this).find('td:eq(7) a').text() + '">

Unknown end tag for &lt;/span&gt;

').html($(this).find('td:eq(7) strong').html()).appendTo('#main-lastpost .dl-post:last');
$('<span class="lp5" title="' + $(this).find('td:eq(3)').text() + '">

Unknown end tag for &lt;/span&gt;

').html($(this).find('td:eq(3)').html()).appendTo('#main-lastpost .dl-post:last');
$('<span class="lp6" title="' + reply + '">

Unknown end tag for &lt;/span&gt;

').html('' + reply + '').appendTo('#main-lastpost .dl-post:last');
$('<span class="lp7" title="' + view + '">

Unknown end tag for &lt;/span&gt;

').html('' + view + '').appendTo('#main-lastpost .dl-post:last');
$('<img src="http://i40.servimg.com/u/f40/17/70/31/89/clock10.png" class="imglp" title="' + $(this).find('td:eq(7)').text().replace('by', '.') + '">

Unknown end tag for &lt;/img&gt;

').appendTo('#main-lastpost .dl-post:last');
$('<span class="lp8" title="' + $(this).find('td:eq(1)').text() + '">

Unknown end tag for &lt;/span&gt;

').html($(this).find('td:eq(1)').html()).appendTo('#main-lastpost .dl-post:last')
});
$('#dl-lastpost').empty()
}
$('#Load').fadeOut()
})
}
Link = '/search?search_author=*_*&search_keywords';
Start = '&start=';
Where = '';
Trang = 10;
$(function () {
change = "#ilastest";
$(change).fadeIn("slow");
$(".mitienich").html($("#topvisit").html());
$("#zmenu").change(function () {
men = $(this).val();
my_setcookie('zmenu', men, 1, 0);
$(".mitienich").html($("#" + men).html())
});
$('.topnewmem').load('/memberlist?mode=joined&order=DESC&submit=Ok&username .member-header.clearfix');
$('.topposterd').load('/memberlist?mode=today_posters .member-header.clearfix');
$('.topvisit').load('/memberlist?mode=lastvisit&order=DESC&submit=Ok&username .member-header.clearfix');
$('#jumpbox-last select').clone().appendTo('#option-lastpost');
$('#option-lastpost select').removeAttr('name').removeAttr('onchange').attr('id', 'select-lastpost');
$('.op-last').click(function () {
$('.op-last').removeClass('op-last2');
$('#select-lastpost').removeClass('op-last-select');
$(this).addClass('op-last2')
});
$('.op-last-bottom').click(function () {
$('.op-last-bottom').removeClass('op-last-bottom2');
$(this).addClass('op-last-bottom2')
});
$('#select-lastpost').live('change', function () {
$('.op-last').removeClass('op-last2');
$(this).addClass('op-last-select');
if($(this).val() == '1') {
Where = '';
LoadLastPost(0)
} else if($(this).val() != '-1') {
Where = '&search_where=' + $(this).val();
LoadLastPost(0)
}
});
LoadLastPost(0);
$('#left .module:eq(1) .box-content table:eq(0)').wrap('<div id="toppostter" style="display:none">

Unknown end tag for &lt;/div&gt;

');
$('#left .module:eq(2) .box-content table:eq(0)').wrap('<div id="toppostterw" style="display:none">

Unknown end tag for &lt;/div&gt;

');
$('#left .module:eq(3) .box-content table:eq(0)').wrap('<div id="toppostterm" style="display:none">

Unknown end tag for &lt;/div&gt;

');
$('#left .module:eq(4) .box-content table:eq(0)').wrap('<div id="topstarter" style="display:none">

Unknown end tag for &lt;/div&gt;

');
$('#left .module:eq(5) .box-content table:eq(0)').wrap('<div id="mostview" style="display:none">

Unknown end tag for &lt;/div&gt;

');
$('#left .module:eq(6) .box-content table:eq(0)').wrap('<div id="mostrep" style="display:none">

Unknown end tag for &lt;/div&gt;

');
$('#left .module:eq(1), #left .module:eq(2), #left .module:eq(3), #left .module:eq(4), #left .module:eq(5), #left .module:eq(6)').wrap('<div style="display:none">

Unknown end tag for &lt;/div&gt;

');
$('#left .module:eq(1) a[href="/u"], #left .module:eq(2) a[href="/u"], #left .module:eq(3) a[href="/u"], #left .module:eq(4) a[href="/u"], #left .module:eq(5) a[href="/t"], #left .module:eq(6) a[href="/t"]').addClass('toppost');
$('#left .module:eq(1) .box-content table tr td:nth-child(2n), #left .module:eq(2) .box-content table tr td:nth-child(2n), #left .module:eq(3) .box-content table tr td:nth-child(2n), #left .module:eq(4) .box-content table tr td:nth-child(2n)').addClass('topright')
});
```


> CSS:

```

/*lastest topic---------------------------*/
#content-container div#container{margin-right:-225px;background:#FFF}
#content-container div#main{border:1px solid rgba(255,255,255,0.1)}
#content-container div#left{float:none;width:100%}
#left{clear:none!important;width:100%!important;float:none!important}
#left .module .box-content a{margin:2px 0}
#ilastest{font-family:Tahoma,Verdana,Arial,Helvetica,sans-serif}
.mitienich .row1,.mitienich .row2,.topposter .row1,.topposter .row2,.mostview .row1,.mostview .row2{background:transparent!important;border:0 none!important;height:18px!important;margin-left:3px!important}
.hottest .row1,.hottest .row2{background:#FFF!important;border:0 none!important}
.toppost{font-size:11px;float:left;height:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:250px}
.topposter .gensmall{float:right}
.topright{float:right;max-width:20px;margin-right:5px}
/*recent topics*/
.recent{float:left;width:567px}
#last-posts{width:100%}
#option-lastpost{height:18px}
#main-lastpost{height:220px;background:url(http://i40.servimg.com/u/f40/17/70/31/89/listbg10.gif) #FFF}
#name-lastpost{position:absolute;font-style:italic;padding:5px 28px}
.op-last-select{font-weight:700!important;color:#0E53FB}
.op-last-bottom2{padding-top:2px;float:left;cursor:pointer;width:43px!important;font-weight:bold;color:red;}
.lp1,.lp4,.lp5,.lp6,.lp7,.lp8,.title,.mlp2,.mlp4,.mlp5,.mlp6,.mlp7{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;position:absolute;font-size:11px}
.lp1 img{margin-left:3px}
.lp2 span.intooltip,.mimi span.intooltip{z-index: 999;display:none;margin-top:11px;margin-left:9px;border-radius:4px;box-shadow:5px 5px 8px #CCC;padding:14px 20px}
.lp2:hover span.intooltip,.mimi:hover span.intooltip{display:inline;position:absolute;color:#111;border:1px solid #DCA;background:#FFF}
.lp2,.mlp2{text-overflow:ellipsis;white-space:nowrap;position:absolute;font-size:11px;width:180px;margin-left:14px}
.dl-post:hover{background:#f1f1f1}
.dl-post,.ltpvds{height:20px}
.lpmi{width:100px}
.ds1vds{width:70px}
.title{margin-left:5px;width:260px}
.lp4,.mlp4{margin-left:295px;width:100px}
.lp6,.mlp6{margin-left:415px;width:40px;font-style:italic}
.lp7,.mlp7{margin-left:450px;width:40px;font-style:italic}
.lp5,.mlp5{float:right;width:100px;margin-left:500px}
.imglp{margin-left:615px;overflow:hidden;white-space:nowrap;position:absolute;font-size:11px}
.lp8{margin-left:640px}
#trang-lastpost{float:right}
#SoTrangLT{width:25px;height:22px;text-align:center;font-weight:700;border:3px dashed #FFF}
#SoTrangLT:hover{border:3px dashed #000;color:red}
.TrangTruoc,.TrangSau,.TrangHT{font:12px Courier;cursor:pointer;color:red;float:left;height:30px;width:30px;opacity:0.6}
.TrangTruoc:hover,.TrangSau:hover,.TrangHT:hover{opacity:1}
.TrangTruoc{display:none;background:url(http://i40.servimg.com/u/f40/17/70/31/89/fancy_10.png) no-repeat}
.TrangSau{background:url(http://i40.servimg.com/u/f40/17/70/31/89/fancy_11.png) no-repeat}
#dl-lastpost,.DL_Tooltip{display:none}
#DL_LastTopic,#main-lastpost1,.DL_TooltipCCM{position:absolute;display:none;background-image:url(http://i40.servimg.com/u/f40/17/70/31/89/opacit10.png);padding:10px 20px;border-radius:5px;color:white;z-index:99;}
#Load{display:none;position:fixed;left:50%;top:40%;width:50px;height:50px;border:20px solid rgba(130,210,60,.3);border-radius:50px;margin-left:-25px;background:url(http://i40.servimg.com/u/f40/17/70/31/89/loadaj10.gif) no-repeat 50% 50% #FFF}

/*Tabs*/
.tabs{padding-bottom:30px;margin-bottom:15px;background:#e5effe;border-bottom:1px solid #b4d0f3}
.tabs li{list-style:none;float:left;line-height:30px;border-right:1px solid #b4d0f3;height:30px;font-size:11px}
.tabs li.current{background:#FFF;height:31px;font-weight:700}
.mainbox{background:#FFF;border:1px solid #9DB3C5;margin-bottom:6px;padding:1px}
.mainbox table{width:100%}
div.TabView div.Tabs,div.TabView div.Tabs:hover{height:31px;overflow:hidden}
div.TabView div.Tabs a,div.TabView div.Tabs a:hover,.op-last,.op-last:hover{float:left;display:block;background-color:#;text-align:center;height:32px;vertical-align:middle;border:1px solid #b4d0f3;border-top:0;border-left:0;border-bottom:0;text-decoration:none!important;font-family:Tahoma;font-size:11px;color:#000;padding:6px;cursor:pointer}
div.TabView div.Tabs a.Active,.op-last2{background-color:#fff;color:#000;border:1px solid #b4d0f3;border-left:0;border-bottom:0;font-size:11px;font-weight:700;margin-top:-3px!important;padding:6px}
div.TabView{clear:both;border:0 solid #fff;overflow:hidden}
div.TabView div.Pages div.Page{height:100%;border:0 solid #b4d0f3;overflow:hidden;padding:0;font-family:Tahoma,Verdana,Arial,Helvetica,sans-serif}

/*Avatar*/
a[href^='#']{background:transparent!important;margin-top:-2px;z-index:2!important}
#pm1,.popupmenu.clearfix,#pm1 ul,.popupmenu.clearfix ul,.popupmenu-item{z-index:999!important;background:#fff}
.topnewmem .mini-avatar img,.topposterd .mini-avatar img,.topvisit .mini-avatar img{border:0.7px solid #ccc;border-radius:2px;box-shadow:0 0 1px #aaa;padding:0.8px;float:right;width:18px;height:18px;margin-top:-20px;margin-left:250px!important;position:absolute}
.topnewmem .mini-avatar img:hover,.topposterd .mini-avatar img:hover,.topvisit .mini-avatar img:hover{width:100px;height:100px;margin-left:190px!important;margin-top:-50px;z-index:999!important;transition:all 3s ease;-webkit-transition:all 3s ease;-moz-transition:all 3s ease;transform:rotate(360deg);-moz-transform:rotate(360deg);-webkit-transform:rotate(360deg)}
.popmenubutton-new-out.popmenubutton,.member-header.clearfix{height:20px!important}
.popupmenu img{display:inline!important}
/*lastest topic---------------------------*/

```

> Tạo 1 widget mới: Điền các thông tin như sau:
> (**) Widget name : Last mia Tab mắc cỡ
> (**) Use a table type : Có
> (**) Widget title : Latest topics IFC
> (**) Widget source **:**

```

<table width="100%" border="0" cellspacing="0" cellpadding="0"
height="200px">
<tr>
<td valign="top" style="border: 1px solid #9DB3C5; padding: 1px; width: 300px!important; height: 150px!important">
<div id="ilastest">
<table width="100%" border="0" cellspacing="0" cellpadding="0">
<tr>
<td width="100%">
<div style="margin-bottom: 1px;">
<ul class="tabs">
<li class="current"><span style="padding: 0px 7px;">
<select id="zmenu" name="menu" size="1" style="width:155px">
<option id="ztoppostter" value="toppostter">Top posters 

Unknown end tag for &lt;/option&gt;


<option id="ztoppostterd" value="toppostterd">--- Top posters (day)

Unknown end tag for &lt;/option&gt;


<option id="ztoppostterw" value="toppostterw">--- Top posters (week)

Unknown end tag for &lt;/option&gt;


<option id="ztoppostterm" value="toppostterm">--- Top posters (month)

Unknown end tag for &lt;/option&gt;


<option id="ztopstarter" value="topstarter">-- Top starters

Unknown end tag for &lt;/option&gt;


<option id="ztoprich" value="toprich">-- Top richest

Unknown end tag for &lt;/option&gt;


<option id="ztopthank" value="toprich">-- Top thanked

Unknown end tag for &lt;/option&gt;


<option id="ztopvisit" value="topvisit" selected="selected">Last visit

Unknown end tag for &lt;/option&gt;


<option id="ztopnew" value="topnew">Newest members

Unknown end tag for &lt;/option&gt;


<option value="">|

Unknown end tag for &lt;/option&gt;


<option id="zmostview" value="mostview">Most viewed topics

Unknown end tag for &lt;/option&gt;


<option id="zmostrep" value="mostrep">Hottest topics

Unknown end tag for &lt;/option&gt;




Unknown end tag for &lt;/select&gt;




Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;


<table width="100%" border="0" cellspacing="0" cellpadding="0">
<tr valign="top" style="height:200px!important">
<td style="border-top: 0px none; padding: 0px; background: transparent url(/users/2611/10/63/87/album/list13.gif) no-repeat scroll center top; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="24"><img src="http://illiweb.com/fa/subsilver/empty.gif" width="24">


Unknown end tag for &lt;/td&gt;


<td nowrap="nowrap" style="border-top: 0px none; padding: 0px; line-height: 20px; background: transparent url(/users/2611/10/63/87/album/listbg10.gif) repeat" class="mitienich smallfont">

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr style="background:transparent!important">
<td align="center" valign="bottom" colspan="2" style="background:transparent!important"><a href="/h74-Shop-IFC"><input class="mizotion" title="Vào Shop" value="Shop IFC" type="submit">

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;


<div id="topnew" style="display:none;">
<table border="0" cellpadding="0" cellspacing="0" width="100%">
<tr valign="top">
<td style="border-top: 0px none; padding: 0px; line-height: 20px; background-repeat: repeat;">
<div class="topnewmem">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;


<div id="toppostterd" style="display:none;">
<table border="0" cellpadding="0" cellspacing="0" width="100%">
<tr valign="top">
<td style="border-top: 0px none; padding: 0px; line-height: 20px; background-repeat: repeat;">
<div class="topposterd">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;


<div id="topvisit" style="display:none;">
<table border="0" cellpadding="0" cellspacing="0" width="100%">
<tr valign="top">
<td style="border-top: 0px none; padding: 0px; line-height: 20px; background-repeat: repeat;">
<div class="topvisit">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;


<div id="toprich" style="display:none;">
<table border="0" cellpadding="0" cellspacing="0" width="100%">
<tr valign="top">
<td style="border-top: 0px none; padding: 0px; line-height: 20px; background-repeat: repeat;width: 100%;"
align="left">
<span class="holtv">IFC đang tìm cách hiển thị phần này =3= ....

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;


<td style="width:3px">

Unknown end tag for &lt;/td&gt;


<td valign="top" style="border: 1px solid #9DB3C5; padding: 1px">
<div id="TabView" class="TabView">
<div width="100%" class="Tabs" style="margin-left:-18px!important">
<span class="op-last op-last2" onclick="Op1Last('')">      Bài viết mới

Unknown end tag for &lt;/span&gt;


<span class="op-last" onclick="Op1Last('f7')">Invision Skins

Unknown end tag for &lt;/span&gt;


<span class="op-last" onclick="Op1Last('f8')">Invision Mods

Unknown end tag for &lt;/span&gt;


<span class="op-last" onclick="Op1Last('f9')">Invision TUTs

Unknown end tag for &lt;/span&gt;


<span class="op-last" onclick="Op1Last('f6')">HTML

Unknown end tag for &lt;/span&gt;


<span class="op-last" onclick="Op1Last('f18')">Thắc mắc Code, TUT,...

Unknown end tag for &lt;/span&gt;


<ul
class="tabs" id="vietvbb_topstats_t">
<li style="border-right: 0px; display: none;" id="vietvbb_topstats_t_loading">

Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;


<div style="height:255px; width:100%" class="Pages">
<div class="Page" style="padding: 0px; height: 250px; display: block;">
<table border="0" class="lbb" cellpadding="0" cellspacing="0" width="100%">
<tr class="baiguicuoi" style="display: table-row; ">
<td width="100%" valign="top" colspan="2">
<div id="name-lastpost"><span class="lp2">Tiêu đề

Unknown end tag for &lt;/span&gt;

<span class="lp4">Gửi cuối

Unknown end tag for &lt;/span&gt;


<span
class="lp6">Bình

Unknown end tag for &lt;/span&gt;

<span class="lp7">Xem

Unknown end tag for &lt;/span&gt;

<span class="lp5">Chuyên mục

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;


<div id="Load">

Unknown end tag for &lt;/div&gt;


<div id="main-lastpost">

Unknown end tag for &lt;/div&gt;


<div class="op-last-bottom op-last-bottom2" onclick="Op2Last('/search?search_author=*_*&search_keywords')"
title="Reload Last Topics">
<img src="http://i43.servimg.com/u/f43/16/03/04/56/reload11.png" width="16px"
height="16px">F5

Unknown end tag for &lt;/div&gt;


<select id="select-lastpost" style="float:right!important"><option><div class="op-last" onclick="Op1Last('')">All

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/option&gt;

<option value="-1">

Unknown end tag for &lt;/option&gt;

<option value="-1">|

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="c1">|--Thông báo của ban điều hành

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="f1">|   |--Thông Báo Mới Từ BQT Diễn Đàn

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="f3">|   |--Yêu cầu, thắc mắc, góp ý, hỗ trợ

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="f4">|   |--Black list

Unknown end tag for &lt;/option&gt;

<option value="-1">|   

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="c2">|--Khu vực chia sẻ

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="f5">|   |--Căn bản về Invision

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="f7">|   |--Invision Skins

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="f8">|   |--Invision Mods

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="f9">|   |--Invision TUTs

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="f6">|   |--HTML Page

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="f44">|   |--Show Room

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="f48">|   |--Ý tưởng mới

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="f49">|   |--Phòng Dự Án

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="f10">|   |--Đồ họa

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="f11">|       |--Emoticons

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="f12">|       |--Banners

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="f13">|       |--Avatar

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="f33">|       |--Signatures

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="f14">|       |--Wallpapers

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="f15">|       |--Buttons

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="f16">|       |--Icons

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="f17">|       |--Rank

Unknown end tag for &lt;/option&gt;

<option value="-1">|   

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="c3">|--Khu vực hỗ trợ

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="f18">|   |--Thắc mắc Code, TUT,...

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="f34">|   |--Yêu cầu Skin...

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="f19">|   |--Nhờ giúp đỡ đồ họa...

Unknown end tag for &lt;/option&gt;

<option value="-1">|   

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="c7">|--Giao lưu các forum

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="f45">|   |--Forum Promotion

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="f46">|   |--Forum Reviews

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="f31">|   |--Liên kết bạn bè

Unknown end tag for &lt;/option&gt;

<option value="-1">|   

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="c4">|--Góc Thành Viên

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="f20">|   |--Làm quen, kết bạn

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="f21">|   |--Sự kiện &amp; Hoạt động

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="f22">|   |--Những dòng cảm xúc

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="f23">|   |--Quán nước vỉa hè

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="f24">|   |--Phỏng vấn Thành Viên

Unknown end tag for &lt;/option&gt;

<option value="-1">|   

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="c6">|--Others

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="f25">|   |--Tố cáo bản quyền

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="f30">|   |--Quảng cáo

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="f2">|   |--Basket

Unknown end tag for &lt;/option&gt;



Unknown end tag for &lt;/select&gt;


<div id="dl-lastpost">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;

```

> Note: Cái đoạn

```

<option value="-1">

Unknown end tag for &lt;/option&gt;

<option value="-1">|

Unknown end tag for &lt;/option&gt;

<option txt="yes" value="c1">|--Thông báo của ban điều hành

Unknown end tag for &lt;/option&gt;

.......<option txt="yes" value="f2">|   |--Basket

Unknown end tag for &lt;/option&gt;


```
> các bạn viewsource đoạn jumbox của các bạn thay vào nhé Cười nhe răng



> Sắp xếp Widget: ![http://i40.servimg.com/u/f40/17/70/31/89/wi10.png](http://i40.servimg.com/u/f40/17/70/31/89/wi10.png) ngại quá