Lasttpic vip với các chức năng :
+Xem nhiều bài viết hơn 10 >> 60
+Mắt thần có thể xem nhanh bài viết và trả lời
+Chức năng f5 Reload lasttopic
3 cột rất đẹp
Dùng được ở Punbb và Phpbb2


Bắt đầu làm nào :

Bước 1 : Các bạn dow file này về giải nén và add thay thế các code trong forum bạn

```

http://www.mediafire.com/?00086o15x304ee5
```

Bước 2 : Sau khi thay thế xong các temp các bạn vào Overall\_header Tìm và xóa đoạn này đi

```

<div id="{ID_LEFT}">
<!-- BEGIN giefmod_index1 -->
{giefmod_index1.MODVAR}
<!-- BEGIN saut -->
<div style="height:{SPACE_ROW}px">

Unknown end tag for &lt;/div&gt;


<!-- END saut -->
<!-- END giefmod_index1 -->


Unknown end tag for &lt;/div&gt;


```

Bước 3 : Vào [ACP > Display > Temp > QLTT > Index\_body thêm code sau vào sau {JAVASCRIPT}

```

<div align="center" style="font-size:12px;background:#eee;border:1px solid #BBB;padding:6px;margin:6px">
<table class="tborder" width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
<tr><th colspan="2">Thống kê - Cntt-k3

Unknown end tag for &lt;/th&gt;



Unknown end tag for &lt;/tr&gt;


<tr><td><table cellspacing="0" cellpadding="0" border="0" width="100%" align="center">
<thead>
<tr>
<td><table cellpadding="0" cellspacing="0" border="0" width="100%" align="center">
<tr><td valign="top" style="height: 100%;"><table cellpadding="0" cellspacing="0" border="0" width="100%" align="center">
<tr><td valign="top" style="height: 100%;">
<!-- BEGIN giefmod_index1 -->
{giefmod_index1.MODVAR} <!-- END giefmod_index1 -->


Unknown end tag for &lt;/div&gt;



```


Bước 4: Vào [> Display > Temp > QLTT > Overall\_Footer](ACP.md), dán vào cuối Footer:

```

<script type="text/javascript">jQuery("#lttchatbox").click(function(){
jQuery("#lttrules").toggle("slow");
});
$(function(){$("div.a1tg3td:contains('»')").remove();$("div.a1tg3td:contains('[FM]')").remove();});$("a.lengtht").each(function(){if ($(this).text().length > 20) {$(this).text($(this).text().substr(0, 19));$(this).append('...');}});$("a.recentlink").each(function(){if ($(this).text().length > 50) {$(this).text($(this).text().substr(0, 49));$(this).append('...');}});$(".lttview").each(function(){$(this).html(parseInt($(this).text().replace(/^[\s\S]*-\s+(\d+)\s+[\s\S]*$/m, '$1')));});


Unknown end tag for &lt;/script&gt;



<script>
$(".recentlink").each(function(){if ($(this).text().length > 46) {$(this).text($(this).text().substr(0, 30));$(this).append('...');}});


Unknown end tag for &lt;/script&gt;



```

. Đây là Script giúp hạn chế số ký tự tiêu đề , nếu muốn tăng hoặc dảm số ký tự, thay đoạn

```

length > 20)

```
Bằng

```

length > sokytu)
```

Bước 5 : Thêm luôn vào footer Begin đoạn code sau

```

<script src="http://illiweb.com/rsc/13/frm/admin/admin.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;


```

đây là đoạn hiển thị toolip
Bước 6 : Thêm đoạn sau vào đầu Css :

```

.an{display:none;}
.catdong{
white-space:nowrap;
width:180px;
text-overflow:ellipsis;
overflow:hidden;
}
#xemtruocvds{
position:relative;
top:5%;
overflow:auto;
background-color:#fff;
padding:5px;
max-width:800px;
max-height:70%;
border:10px solid #5E9EFF;
}

#bgxemtruocvds{
opacity: 0.95;filter: alpha(opacity=95);
position:fixed;
left:0;
top:0;
background-color:#333;
width:100%;
height:100%;
z-index: 999;}

.taidulieuxemnhanh{background-color:#000; padding:5px; border:2px solid #3AAA00;width:200px;display:none;}
.nutbamvds{width:auto; height:30px; font-weight:bold; font-size:16px;}
.colorpicker_color {
width: 150px;
height: 150px;
left: 14px;
top: 13px;
position: absolute;
background: #fff;
overflow: hidden;
cursor: crosshair;
}
/* tooltip
--------------------------------------------------- */
#dhtmlpointer, #dhtmltooltip
{
z-index: 999;
left: -300px; top:0px;
visibility: hidden;
position: absolute;
-moz-opacity: 0.8;
opacity: 0.8;
filter: alpha(opacity=80);
}
#dhtmltooltip
{
border: #000000 0px solid;
-moz-border-radius: 6px;
-webkit-border-radius: 6px;
padding: 15px;
font-size: 9pt; font-weight:bold;
font-family: Arial; color:#fff;
background-color: #000;
width: auto;
max-width: 340px;
width:expression(document.body.clientWidth > 340? "340px": "auto");
text-align:left;
}
/*tooltip
--------------------------------------------------- */






#tooltip {
padding:0;
max-width: 50% !important;
color: #000;
background: #FFFFFF none  ;
_background-image: none;
border: 1px #000 solid; -moz-border-radius: 3px;border-radius: 3px;
font-size:0.8em;text-align: left;
}

* html #tooltip {
width: 30%;
}
#tooltip * {
margin:2px 5px 2px 8px;
}
#tooltip ul {
padding: 0px 0px 0px 20px;
}
#tooltip dl {
clear:both;
position:relative;
margin-bottom: 10px;
}
#tooltip dt {
float:left;
border: medium none;
padding-top: 3px;
width: 50%;
}
#tooltip dd {
margin-left: 50%;
padding-left: 5px;
vertical-align: top;
}
#tooltip p.header {
margin:0;
font-size:13px;
color: green;
padding: 1px 5px;
background: #000000 repeat;
font-weight: bold;
border-bottom:0px;
}

#tooltip p {
padding: 6px;
color: #666666;
font-size:11px;text-align: left;
}
.title_small{padding: 2px;
border-bottom: 1px #DBDBDB dashed;
font-size: 10px;
font-style: italic;}
#sell1,#sell2,#sell3,#sell4,#sell5,#sell6{background-color: #FFF;}

```

Bước 7 : vào HTML & JAVASCRIPT
Tạo 1 javascripts mới
Title **: Xem trước
Placement : In the home page
Javascript Code** :

```

$(window).load(function(){rft=$('#RefreshVDS a.hastip:eq(0)').attr('href');setInterval(function(){$('#ktrf_vds').load('forum #RefreshVDS a.hastip:eq(0)',function(){rfs=$('#ktrf_vds a.hastip:eq(0)').attr('href');if(rfs!=rft)$('#RefreshVDS_Main').fadeOut(2000).load('forum #RefreshVDS',function(){}).fadeIn(1000);rft=rfs})},10000)});function loadtruoc(){xem=$('#link2vds').val();$('.nutbamvds:eq(0)').css('background-color','#74FF2E');$('.nutbamvds:eq(1)').css('background-color','#74FF2E');$('.nutbamvds:eq(2)').css('background-color','#FF0000');$('#bgxemtruocvds').fadeIn(100);$('.taidulieuxemnhanh').slideDown();$('#xemtruocvds').load(xem+' div.post:last',function(){$('#xemtruocvds').slideDown(300);$('.taidulieuxemnhanh').slideUp();xoastatus()})};function loadtruoc2(){xem=$('#link2vds').val();$('.nutbamvds:eq(0)').css('background-color','#74FF2E');$('.nutbamvds:eq(1)').css('background-color','#FF0000');$('.nutbamvds:eq(2)').css('background-color','#74FF2E');$('#bgxemtruocvds').fadeIn(100);$('.taidulieuxemnhanh').slideDown();$('#xemtruocvds').load(xem+' div.post:first',function(){$('#xemtruocvds').slideDown(300);$('.taidulieuxemnhanh').slideUp();xoastatus()})};function xemnhanhtpvds(){xem=$('#link2vds').val();$('.nutbamvds:eq(0)').css('background-color','#FF0000');$('.nutbamvds:eq(1)').css('background-color','#74FF2E');$('.nutbamvds:eq(2)').css('background-color','#74FF2E');$('#bgxemtruocvds').fadeIn(100);$('.taidulieuxemnhanh').slideDown();$('#xemtruocvds').load(xem+' div.xemnhanhtpvds',function(){$('#xemtruocvds').slideDown(300);$('.taidulieuxemnhanh').slideUp();xoastatus()})};function xoastatus(){$(".xoastatus:contains('Status')").css('display','none')};function offxemtruoc(){$('#xemtruocvds').slideUp(300);$('#bgxemtruocvds').fadeOut(500)};

```
và ok
Bước 8 : Cập nhật Widgets theo hình sau:

![http://i43.servimg.com/u/f43/15/93/33/76/214.jpg](http://i43.servimg.com/u/f43/15/93/33/76/214.jpg)
Rồi Ok
Xong ra chiêm ngưỡng sản phẩm của mình :> :>
Chú ý : lastt này hoạt động được ở cả Punbb và Phpbb2
mình đã test thử và đều làm được
ai ko làm được thì phải xem kĩ và làm kĩ nhá cười nhăn răng