![http://i30.servimg.com/u/f30/17/70/31/89/lastt10.png](http://i30.servimg.com/u/f30/17/70/31/89/lastt10.png)

tạo một file javascript đặt In all the pages:



```

Link = '/search?search_author=*_*&search_keywords';
Start = '&start=';
Where = '';
Trang = 10;
$(function () {
$('#jumpbox-last select').clone().appendTo('#option-lastpost');
$('#option-lastpost select').removeAttr('name').removeAttr('onchange').attr('id', 'select-lastpost');
$('.op-last-bottom').click(function () {
$('.op-last-bottom').removeClass('op-last-bottom2');
$(this).addClass('op-last-bottom2');
});
$('#option-lastpost .op-last').click(function () {
$('#option-lastpost .op-last').removeClass('op-last2');
$('#select-lastpost').removeClass('op-last-select');
$(this).addClass('op-last2');
});
$('#select-lastpost').live('change', function () {
$('#option-lastpost .op-last').removeClass('op-last2');
$(this).addClass('op-last-select');
if($(this).val() == '1') {
Where = '';
LoadLastPost(0);
} else if($(this).val() != '-1') {
Where = '&search_where=' + $(this).val();
LoadLastPost(0);
}
});
$('.TrangTruoc').click(function () {
st = parseInt($('#SoTrangLT').val()) - 1;
$('#SoTrangLT').val(st);
LoadLastPost(st - 1);
});
$('.TrangSau').click(function () {
st = parseInt($('#SoTrangLT').val()) + 1;
$('#SoTrangLT').val(st);
LoadLastPost(st - 1);
});
$('#SoTrangLT').change(function () {
ltval = parseInt($(this).val());
if(ltval < 1 || ltval > 10) {
$(this).val(1);
} else {
LoadLastPost(ltval - 1);
}
});
});

function LoadLastPost(page) {
page > 0 ? $('.TrangTruoc').show() : $('.TrangTruoc').hide();
if(page == 0) {
$('#SoTrangLT').val(1);
}
LinkLastPost = Link + Where + Start + page * Trang;
$('#Load').show();
$('#dl-lastpost').load(LinkLastPost + ' form.ipbform .ipbtable tr', function () {
$('#main-lastpost').empty();
$(this).find('tr').length < 10 ? $('.TrangSau').hide() : $('.TrangSau').show();
if($(this).is(':empty')) {
$('#main-lastpost').text('Không có dữ liệu');
} else {
$(this).find('tr').each(function () {
$('<div class="dl-post">

Unknown end tag for &lt;/div&gt;

').appendTo('#main-lastpost');
$('<span class="lp1" title="' + $(this).find('td:eq(0)').text() + '">

Unknown end tag for &lt;/span&gt;

').html($(this).find('td:eq(0)').html()).appendTo('#main-lastpost .dl-post:last');
$('<span class="lp2">

Unknown end tag for &lt;/span&gt;

').html('<a title="' + $(this).find('td:eq(2) a.topictitle').text() + '" href="' + $(this).find('td:last a:last').attr('href') + '" class="thetooltip">' + $(this).find('td:eq(2) a.topictitle').text() + '

Unknown end tag for &lt;/a&gt;

').appendTo('#main-lastpost .dl-post:last');
$('<span class="lp4" title="' + $(this).find('td:eq(7) span.guicuoihl').text() + '">

Unknown end tag for &lt;/span&gt;

').html($(this).find('td:eq(7) a.gensmall')).appendTo('#main-lastpost .dl-post:last');
$('<span class="lp5" title="' + $(this).find('td:eq(3)').text() + '">

Unknown end tag for &lt;/span&gt;

').html($(this).find('td:eq(3)').html()).appendTo('#main-lastpost .dl-post:last');
$('<span class="lp6" title="' + $(this).find('td:eq(5)').text() + '">

Unknown end tag for &lt;/span&gt;

').html($(this).find('td:eq(5)').text()).appendTo('#main-lastpost .dl-post:last');
$('<span class="lp7" title="' + $(this).find('td:eq(6)').text() + '">

Unknown end tag for &lt;/span&gt;

').html($(this).find('td:eq(6)').text()).appendTo('#main-lastpost .dl-post:last');
$('<img src="http://illiweb.com/fa/m/icon_minitime1.gif" class="imglp" title="' + $(this).find('td:eq(7)').text().replace(' by', '.') + '">

Unknown end tag for &lt;/img&gt;

').appendTo('#main-lastpost .dl-post:last');
$('<span class="lp8" title="' + $(this).find('td:eq(1)').text() + '">

Unknown end tag for &lt;/span&gt;

').html($(this).find('td:eq(1)').html()).appendTo('#main-lastpost .dl-post:last');
});
$('#dl-lastpost').empty();
}
$('#Load').fadeOut();
});
}

function Op1Last(forum) {
forum == '' ? Where = '' : Where = '&search_where=' + forum;
LoadLastPost(0);
}

function Op2Last(op) {
Link = op;
LoadLastPost(0);
}
$(function () {
$('#option-lastpost .op-last:first').addClass('op-last2');
LoadLastPost(0);
});
$(function () {
$('#left .module:eq(0)').addClass('topposter').next().remove();
$('#left .module:eq(0) a[href^="/u"]').addClass('toppost');
$('#left .module:eq(1)').addClass('recent').next().remove();
$('#left .module:eq(2)').addClass('mostview');
$('#left .module:eq(2) a[href^="/t"]').addClass('topicview');
$('#left .module:eq(3)').addClass('hottest');
$('<center><br><br><div class="mm" style="border-top:1px dashed #ccc;align:center;height:25px;">
<a href="http://invision.chinhphuc.info/t1-topic#1" title="Nội quy"><img height="25px" src="http://i44.servimg.com/u/f44/12/24/45/65/attent10.png">

Unknown end tag for &lt;/a&gt;



<a href="http://invision.chinhphuc.info/f18-forum" title="Thắc mắc Code, TUT"><img height="25px" src="http://i44.servimg.com/u/f44/12/24/45/65/help-i10.png">

Unknown end tag for &lt;/a&gt;



<a href="http://invision.chinhphuc.info/f34-forum" title="Yêu cầu Skin"><img height="25px" src="http://i44.servimg.com/u/f44/12/24/45/65/help-i11.png">

Unknown end tag for &lt;/a&gt;



<a href="http://invision.chinhphuc.info/c2-category" title="Khu vực chia sẻ"><img height="25px" src="http://i44.servimg.com/u/f44/12/24/45/65/help-i12.png">

Unknown end tag for &lt;/a&gt;



<a href="..." title="IFC trên Facebook" target="_blank"><img src="http://i44.servimg.com/u/f44/12/24/45/65/81267910.png" height="25">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/center&gt;

').insertAfter(".topicview:last");
$('<table><tr><td width="650px"><div class="boxcontents"><div class="tsnotice"><div class="ntblock1 flpo"><div class="nttitle">NHỮNG TIN TỨC ĐÁNG CHÚ Ý  

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div class="ntblock2 flpo"><div class="ntcontent"><ul><li><a href="http://invision.chinhphuc.info/t118-topic#618"><font color="#8126ff"><b>[EVENT] Thiết kế logo cho diễn đàn IFC.... <img src="http://i41.servimg.com/u/f41/16/91/90/56/hot10.gif" border="0">

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a href="http://invision.chinhphuc.info/t219-topic#1102"><font color="#f40068"><b>[EVENT] Giờ vàng Online —ஐ— Top Posters Day 

Unknown end tag for &lt;/b&gt;

 <img src="http://i41.servimg.com/u/f41/16/91/90/56/hot10.gif" border="0">

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a href="http://invision.chinhphuc.info/t27-topic#78"><font color="#96d00d"><b>[Tổng hợp] Skin Invision

Unknown end tag for &lt;/b&gt;

 <img src="http://i41.servimg.com/u/f41/16/91/90/56/hot10.gif" border="0">

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a target="_blank" href="http://invision.chinhphuc.info/f44-forum"><font color="#ea0006"><b>Show Room

Unknown end tag for &lt;/b&gt;

 <img src="http://i41.servimg.com/u/f41/16/91/90/56/hot10.gif" border="0">

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;



Unknown end tag for &lt;/ul&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<style>.tsnotice {background: url(http://i44.servimg.com/u/f44/15/64/85/86/notice11.png) top left no-repeat;width: 100%;height: 200px;float: left;margin-right: 5px;}.ntblock1 {width: 100%;height: 35px;}.nttitle {font-size: 13px;color: white;font-weight: bold;text-shadow: 0 1px 1px #590D33;padding: 10px;}.ntblock2 {width: 100%;height: 165px;}.ntcontent {padding: 0 10px 0 40px;}.ntcontent ul {padding: 0px;margin: 0px;list-style-type: none;}.ntcontent li {line-height: 40px;height: 40px;font-size: 14px;}.tsfb {background: none repeat scroll 0 0 #F9F9F9;border: 1px solid #3B5998;border-radius: 5px 5px 5px 5px;float: left;height: 197px;width: 320px;}.tsfbcontent {background: none repeat scroll 0 0 #F9F9F9;height: 187px;margin: 5px 10px;width: 300px;}

Unknown end tag for &lt;/style&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;

<td width="320px"><!-- facebook --><div class="tsfb"><div class="tsfbcontent"><a href="http://invision.chinhphuc.info/t118-topic#618"><img src="http://i34.servimg.com/u/f34/15/64/85/86/design10.jpg"/>

Unknown end tag for &lt;/a&gt;

<br><br><b><font face="Papyrus">IFC sắp tổ chức EVENT Forum Invision nổi bật

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<!-- facebook -->

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;

<br>').insertBefore("#left");
});


```
Tạo một widget tên là Last invi với content như sau:

```

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


<div id="DL_LastTopic">

Unknown end tag for &lt;/div&gt;


<div id="main-lastpost1">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td>
<div class="op-last-bottom op-last-bottom2" onclick="Op2Last('/search?search_author=*_*&search_keywords')"
title="Reload Last Topics">
<img src="http://i43.servimg.com/u/f43/16/03/04/56/reload11.png" width="16px"
height="16px">F5

Unknown end tag for &lt;/div&gt;


<div id="trang-lastpost">
<div class="TrangTruoc" title="Tải dữ liệu trang trước">

Unknown end tag for &lt;/div&gt;


<div class="TrangHT">
<input id="SoTrangLT" value="1" maxlength="2" title="Trang hiện tại" />


Unknown end tag for &lt;/div&gt;


<div class="TrangSau" title="Tải dữ liệu trang tiếp theo">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;

<select id="select-lastpost"><option><div class="op-last" onclick="Op1Last('')">All

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/option&gt;


<option value="-1">

Unknown end tag for &lt;/option&gt;

<option value="-1">|

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="c1">|--Thông báo của ban điều hành

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f1">|  |--Thông Báo Mới Từ BQT Diễn Đàn

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f3">|  |--Yêu cầu, thắc mắc, góp ý, hỗ trợ

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f4">|  |--Black list

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f32">|  |--Khu vực dành cho Ban Quản Trị

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f35">|  |--Designers Only

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f37">|  |--Blog

Unknown end tag for &lt;/option&gt;

<option value="-1">|  

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="c2">|--Khu vực chia sẻ

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f5">|  |--Căn bản về Invision

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f7">|  |--Invision Skins

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f8">|  |--Invision Mods

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f9">|  |--Invision TUTs

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f6">|  |--HTML Page

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f44">|  |--Show Room

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f10">|  |--Đồ họa

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f11">|      |--Emoticons

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f12">|      |--Banners

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f13">|      |--Avatar

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f33">|      |--Signatures

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f14">|      |--Wallpapers

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f15">|      |--Buttons

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f16">|      |--Icons

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f17">|      |--Rank

Unknown end tag for &lt;/option&gt;

<option value="-1">|  

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="c3">|--Khu vực hỗ trợ

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f18">|  |--Thắc mắc Code, TUT,...

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f34">|  |--Yêu cầu Skin...

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f19">|  |--Nhờ giúp đỡ đồ họa...

Unknown end tag for &lt;/option&gt;

<option value="-1">|  

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="c7">|--Giao lưu các forum

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f45">|  |--Forum Promotion

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f46">|  |--Forum Reviews

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f31">|  |--Liên kết bạn bè

Unknown end tag for &lt;/option&gt;

<option value="-1">|  

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="c4">|--Góc Thành Viên

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f20">|  |--Làm quen, kết bạn

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f21">|  |--Sự kiện & Hoạt động

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f22">|  |--Những dòng cảm xúc

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f23">|  |--Quán nước vỉa hè

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f24">|  |--Phỏng vấn Thành Viên

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f29">|  |--Quà tặng âm nhạc

Unknown end tag for &lt;/option&gt;

<option value="-1">|  

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="c5">|--Thư giãn, giải trí,.... các vấn đề khác

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f25">|  |--Thể thao

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f26">|  |--Thế giới của sao....

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f27">|  |--Thế giới Truyện....

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f28">|  |--Đôi chút học tập.....

Unknown end tag for &lt;/option&gt;

<option value="-1">|  

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="c6">|--Others

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f30">|  |--Quảng cáo

Unknown end tag for &lt;/option&gt;

<option txt=" vrai  " value="f2">|  |--Basket

Unknown end tag for &lt;/option&gt;



Unknown end tag for &lt;/select&gt;


<div id="dl-lastpost">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;

  <style>
#last-posts{width:100%}
.op-last-select{font-weight:700!important;color:#0E53FB}
#option-lastpost{height:18px}
.op-last-bottom2{padding-top:2px;float:left;cursor:pointer;width:43px!important;font-weight:700;color:red}
#select-lastpost{cursor:pointer}
#main-lastpost{min-height:220px;background:url(http://i27.servimg.com/u/f27/15/47/59/46/listbg10.gif) #FFF}
#name-lastpost{position:absolute;font-style:italic;padding:5px 28px}
.dl-post,.ltpvds{height:20px}
lp1,.lp2,.lp4,.lp5,.lp6,.lp7,.lp8{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;position:absolute;font-size:11px}
.dl-post:hover{background:#f1f1f1}
.lpmi{width:100px}
.ds1vds{width:70px}
.lp1 img{height:14px}
.lp2{margin-left:5px;width:190px}
.lp4{margin-left:215px;width:100px}
.lp6{margin-left:320px;width:40px;font-style:italic}
.lp7{margin-left:355px;width:40px;font-style:italic}
.lp5{float:right;width:95px;margin-left:400px}
.imglp{margin-left:500px;overflow:hidden;white-space:nowrap;position:absolute;font-size:11px}
.imglp1{margin-left:-12px}
.lp8{margin-left:520px}
#trang-lastpost{float:right}
.TrangTruoc,.TrangSau,.TrangHT{font:12px Courier;cursor:pointer;color:red;float:left;height:30px;width:30px;opacity:0.6}
.TrangTruoc:hover,.TrangSau:hover,.TrangHT:hover{opacity:1}
.TrangTruoc{display:none;background:url(http://i48.servimg.com/u/f48/16/58/89/73/fancy_12.png) no-repeat}
.TrangSau{background:url(http://i48.servimg.com/u/f48/13/58/60/43/fancy_10.png) no-repeat}
#SoTrangLT{width:25px;height:22px;text-align:center;font-weight:700;border:3px dashed #FFF}
#SoTrangLT:hover{border:3px dashed #000;color:red}
#Load{display:none;position:fixed;left:50%;top:40%;width:50px;height:50px;border:20px solid rgba(130,210,60,.3);border-radius:50px;margin-left:-25px;background:url(http://i48.servimg.com/u/f48/13/58/60/43/loadaj10.gif) no-repeat 50% 50% #FFF}
#dl-lastpost,.DL_Tooltip{display:none}
#DL_LastTopic,#main-lastpost1,.DL_TooltipCCM{position:absolute;display:none;background-image:url(http://i48.servimg.com/u/f48/13/58/60/43/opacit10.png);padding:10px 20px;border-radius:5px;color:white;z-index:99;}
.DL_Tooltip {display:none;}


Unknown end tag for &lt;/style&gt;



```

Chèn thêm đoạn này vào CSS:

```

/* ---recent topics cho invision--- */
#content-container div#container{margin-right:-225px;background:#FFF}
#content-container div#main{border:1px solid rgba(255,255,255,0.1)}
#content-container div#left{float:none;width:100%}
#left .module .box-content a{margin:2px 0}
#left{clear:none!important;width:100%!important;float:none!important}
.topposter .row1,.topposter .row2,.mostview .row1,.mostview .row2{background:transparent!important;border:0 none!important}
.hottest .row1,.hottest .row2{background:#FFF!important;border:0 none!important}
/*top posters*/
.topposter{float:left;width:200px;margin-right:10px;height:220px!important}
.toppost{font-size:11px;float:left;height:19px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:220px;background:url(http://i27.servimg.com/u/f27/15/47/59/46/listbg10.gif)!important}
.topposter .gensmall{float:right}
table[style="table-layout:fixed"]{display:none!important}
/*most active, most viewed topics*/
.hottest1{display:none;z-index:100;float:right;width:200px;height:220px!important;margin-top:-290px}
.mostview{float:right;width:200px}
.topicview,.topichot,.linkcuoi{font-size:11px;float:left;height:15px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:180px;background:url(http://i27.servimg.com/u/f27/15/47/59/46/listbg10.gif)}
/*recent topics*/
.recent{float:left;width:560px}

```

Đặt widget như sau: Top poster >> Last invi >> Most viewed topics

Nguồn: http://invision.chinhphuc.info/