demo : http://vovanan07.forumvi.com/
cho dù xấu thì cũng có công post k dìm hàng
sắp xếp widget như sau :

Chèn Code Sau Vào Trên Cùng index\_body:

```

<div id="page-body">
<div id="{ID_CONTENT_CONTAINER}"{CLASS_CONTENT_CONTAINER}>
<table  class="thongke" cellpadding="0" cellspacing="0" border="0" width="100%" align="center" >
<tbody>
<tr>
<td valign="top" width="100%">
<div class="test">
<table class="thongke" cellpadding="4" cellspacing="0" style="border: 1px #c0c0c0 solid;" border="0" width="100%" align="center">
<thead>
<tr valign="top">
<th height="30"><center><b>๑۩۞۩๑ Thống Kê Diễn Đàn 4rPlayKing™ ๑۩۞۩๑

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/center&gt;



Unknown end tag for &lt;/th&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/thead&gt;


<tr>
<td width="100%">
<table class="thongke" cellpadding="0" cellspacing="0" border="0" width="100%" align="center">
<thead>
<tr valign="top">
<td width="0%">

Unknown end tag for &lt;/td&gt;

<td width="00%" colspan="0">

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;



<tr>
<td><table  class="thongke" cellpadding="0" cellspacing="0" border="0" width="100%" align="center" >


Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;


<tr><td valign="top" style="border: 1px solid #9DB3C5;">
<!-- BEGIN giefmod_index1 -->
{giefmod_index1.MODVAR} <!-- END giefmod_index1 -->

Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/thead&gt;



Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;





Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;

<tr>
<td valign="top" width="100%">
<!-- BEGIN html_validation -->


Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/body&gt;





Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;





Unknown end tag for &lt;/html&gt;


<!-- END html_validation -->




<script type="text/javascript">
var tooltip=function(){
var id = 'tt';
var top = 7;
var left = 3;
var maxw = 300;
var speed = 10;
var timer = 20;
var endalpha = 90;
var alpha = 0;
var tt,t,c,b,h;
var ie = document.all ? true : false;
return{
show:function(v,w){
if(tt == null){
tt = document.createElement('div');
tt.setAttribute('id',id);
t = document.createElement('div');
t.setAttribute('id',id + 'top');
c = document.createElement('div');
c.setAttribute('id',id + 'cont');
b = document.createElement('div');
b.setAttribute('id',id + 'bot');
tt.appendChild(t);
tt.appendChild(c);
tt.appendChild(b);
document.body.appendChild(tt);
tt.style.opacity = 0;
tt.style.filter = 'alpha(opacity=0)';
document.onmousemove = this.pos;
}
tt.style.display = 'block';
c.innerHTML = v;
tt.style.width = w ? w + 'px' : 'auto';
if(!w && ie){
t.style.display = 'none';
b.style.display = 'none';
tt.style.width = tt.offsetWidth;
t.style.display = 'block';
b.style.display = 'block';
}
if(tt.offsetWidth > maxw){tt.style.width = maxw + 'px'}
h = parseInt(tt.offsetHeight) + top;
clearInterval(tt.timer);
tt.timer = setInterval(function(){tooltip.fade(1)},timer);
},
pos:function(e){
var u = ie ? event.clientY + document.documentElement.scrollTop : e.pageY;
var l = ie ? event.clientX + document.documentElement.scrollLeft : e.pageX;
tt.style.top = (u - h) + 'px';
tt.style.left = (l + left) + 'px';
},
fade:function(d){
var a = alpha;
if((a != endalpha && d == 1) || (a != 0 && d == -1)){
var i = speed;
if(endalpha - a < speed && d == 1){
i = endalpha - a;
}else if(alpha < speed && d == -1){
i = a;
}
alpha = a + (i * d);
tt.style.opacity = alpha * .01;
tt.style.filter = 'alpha(opacity=' + alpha + ')';
}else{
clearInterval(tt.timer);
if(d == -1){tt.style.display = 'none'}
}
},
hide:function(){
clearInterval(tt.timer);
tt.timer = setInterval(function(){tooltip.fade(-1)},timer);
}
};
}();



Unknown end tag for &lt;/script&gt;


```


mod\_top\_posters:
```

<table width="100%" border="0" cellspacing="0" cellpadding="0">
<td style="padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="100%"><div style="margin-bottom: 10px;"><ul class="tabs"><li class="current"><span style="padding: 0px 0px;">
<script type="text/javascript">
function showstuff(value){
document.getElementById("poster").style.display = (value == "poster") ? "block" : "none";
document.getElementById("poster1").style.display = (value == "poster1") ? "block" : "none";
document.getElementById("poster2").style.display = (value == "poster2") ? "block" : "none";
document.getElementById("poster3").style.display = (value == "poster3") ? "block" : "none";
}


Unknown end tag for &lt;/script&gt;



<select id="changer" name="type" onchange="showstuff(this.value);">
<option value="poster">Top Tiêu Biểu Nhất

Unknown end tag for &lt;/option&gt;




Unknown end tag for &lt;/select&gt;





Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/li&gt;



Unknown end tag for &lt;/ul&gt;



<div id="poster" style="display:block;"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tr valign="top"><td style="border-top: 0px none; padding: 0px; background: transparent url(http://i38.servimg.com/u/f38/16/18/15/10/158.gif) no-repeat scroll center top; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="24" height="200">
<img src="http://illiweb.com/fa/empty.gif" width="20" border="0">

Unknown end tag for &lt;/td&gt;

<td style="border-top: 0px none; padding: 0px; line-height: 20px; background-repeat: repeat;" align="left" background="http://i38.servimg.com/u/f38/16/18/15/10/225.gif">



<!-- BEGIN POSTER -->
<div style="display:block; height:20px; overflow:hidden; line-height:18px;" onmouseover="show_tooltip(this,this.getElementsByTagName('div')[0].innerHTML,'Thông Tin Thành Viên');" onmouseout="hidetip();" class="smallfont">
<div style="display:none">Tên:{POSTER.NAME}<br>Số Bài Post :{POSTER.NB_POSTS}

Unknown end tag for &lt;/div&gt;

<div class="mtmymenu"> <div class="mtmymenuu">{POSTER.NAME}

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<!-- END POSTER -->




Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;


```

mod\_most\_active\_starters:

```

<div id="poster1" style="display:none;">

<table border="0" cellpadding="0" cellspacing="0" width="100%"><tr valign="top">
<td style="border-top: 0px none; padding: 0px; background: transparent url(http://i1036.photobucket.com/albums/a449/a1tinhgia3/image/list.gif) no-repeat scroll center top; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="24" height="200"><img src="http://illiweb.com/fa/empty.gif" width="24" border="0">

Unknown end tag for &lt;/td&gt;

<td style="border-top: 0px none; padding: 0px; line-height: 20px; background-repeat: repeat;" align="left" background="http://i1036.photobucket.com/albums/a449/a1tinhgia3/image/listbg.gif"><!-- BEGIN POSTER --><font style="font-family: Tahoma; font-size: 11px"> {POSTER.NAME}

Unknown end tag for &lt;/font&gt;

<br><!-- END POSTER -->

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;



```
mod\_most\_active\_topics:

```

<td style="padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="100%"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tr valign="top"><td style="border-top: 0px none; padding: 0px; background: transparent url(http://i24.servimg.com/u/f24/13/54/69/46/list12.gif) no-repeat scroll center top; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="24"><img src="http://illiweb.com/fa/empty.gif" width="24" border="0">

Unknown end tag for &lt;/td&gt;

<td style="border-top: 0px none; padding: 0px; line-height: 20px; background-repeat: repeat;" align="left" background="http://i24.servimg.com/u/f24/13/54/69/46/listbg13.gif">
<!-- BEGIN TOPIC -->

<table border="0" class="lbb" cellpadding="0" cellspacing="0" width="100%"><tbody><tr valign="bottom"><td style="height: 20px" width="74%"><a onmouseover="showtip('{TOPIC.TITLE}');" onmouseout="hidetip();" href="{TOPIC.LINK}"><font style="font-family: Tahoma; font-size: 11px">{TOPIC.NAME}

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;

<td style="height: 20px" width="26%" align="right"><font style="font-family: Tahoma; font-size: 11px"><span style="float:right;">  Trả lời

Unknown end tag for &lt;/span&gt;

<span class="a1view" style="float:right;">{TOPIC.TITLE}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



<!-- END TOPIC -->


Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;

<script type="text/javascript">$(".a1view").each(function(){$(this).html(parseInt($(this).text().replace(/^[\s\S]*-\s+(\d+)\s+[\s\S]*$/m, '$1')));});

Unknown end tag for &lt;/script&gt;




Unknown end tag for &lt;/div&gt;



<div class="Page" style="padding: 0px; height: 304px; display: block;">
<table class="tborder" style="border-bottom-width: 0px;" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr>
<td>

<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
<tbody>


Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;


<tbody>
<tr>

```
mod\_most\_viewed\_topics:

```

<td style="padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="100%"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tr valign="top"><td style="border-top: 0px none; padding: 0px; background: transparent url(http://i24.servimg.com/u/f24/13/54/69/46/list12.gif) no-repeat scroll center top; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="24"><img src="http://illiweb.com/fa/empty.gif" width="24" border="0">

Unknown end tag for &lt;/td&gt;

<td style="border-top: 0px none; padding: 0px; line-height: 20px; background-repeat: repeat;" align="left" background="http://i24.servimg.com/u/f24/13/54/69/46/listbg13.gif">

<!-- BEGIN TOPIC -->

<table border="0" class="lbb" cellpadding="0" cellspacing="0" width="100%"><tbody><tr valign="bottom"><td style="height: 20px" width="74%"><a onmouseover="showtip('{TOPIC.TITLE}');" onmouseout="hidetip();" href="{TOPIC.LINK}"><font style="font-family: Tahoma; font-size: 11px">{TOPIC.NAME}

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;

<td style="height: 20px" width="26%" align="right"><font style="font-family: Tahoma; font-size: 11px"><span style="float:right;">  lượt xem

Unknown end tag for &lt;/span&gt;

<span class="a1view" style="float:right;">{TOPIC.TITLE}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



<!-- END TOPIC -->


Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;

<script>$(".a1view").each(function(){$(this).html(parseInt($(this).text().replace(/^[\s\S]*-\s+(\d+)\s+[\s\S]*$/m, '$1')));});

Unknown end tag for &lt;/script&gt;




Unknown end tag for &lt;/div&gt;



<div class="Page" style="padding: 0px; height: 304px; display: block;"><table class="tborder" style="border-bottom-width: 0px;" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr>
<td>

<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
<tbody>


Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;


<tbody>
<tr><td style="padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="100%"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tr valign="top"><td style="border-top: 0px none; padding: 0px; background: transparent url(http://i24.servimg.com/u/f24/13/54/69/46/list12.gif) no-repeat scroll center top; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="24"><img src="http://illiweb.com/fa/empty.gif" width="24" border="0">

Unknown end tag for &lt;/td&gt;

<td style="border-top: 0px none; padding: 0px; line-height: 20px; background-repeat: repeat;" align="left" background="http://i24.servimg.com/u/f24/13/54/69/46/listbg13.gif">
<A href=/search.forum?search_id=activetopics><span><font style="font-family: Tahoma; font-size: 11px">Bài viết trong ngày

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;

<br/>
<A href=/stats.htm#10><span><font style="font-family: Tahoma; font-size: 11px">Các bài viết trong tháng

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;

<br/>
<A href=/stats.htm#2><span><font style="font-family: Tahoma; font-size: 11px">Thống kê tổng thể

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;

<br/>
<A href=/stats.htm#3><span><font style="font-family: Tahoma; font-size: 11px">Topic sôi nổi nhất

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;

<br/>
<A href=/stats.htm#4><span><font style="font-family: Tahoma; font-size: 11px">Topic xem nhiều nhất

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;

<br/>
<A href=/stats.htm#5><span><font style="font-family: Tahoma; font-size: 11px">Thành viên có nhiều chủ đề nhất

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;

<br/>
<A href=/stats.htm#6><span><font style="font-family: Tahoma; font-size: 11px">Thành viên post bài nhiều nhất trong một tuần

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;

<br/>
<A href=/stats.htm#7><span><font style="font-family: Tahoma; font-size: 11px">Thành viên post bài nhiều nhất trong tháng

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;

<br/>
<A href=/stats.htm#8><span><font style="font-family: Tahoma; font-size: 11px">Top poster

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;

<br/>
<A href=/stats.htm#9><span><font style="font-family: Tahoma; font-size: 11px">Số topic trong tháng

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;

<br/>


Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;



<div class="Page" style="padding: 0px; height: 304px; display: block;"><table class="tborder" style="border-bottom-width: 0px;" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr>
<td>

<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
<tbody>


Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;


<tbody>
<tr><td style="padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="100%"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tr valign="top"><td style="border-top: 0px none; padding: 0px; background: transparent url(http://i24.servimg.com/u/f24/13/54/69/46/list12.gif) no-repeat scroll center top; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="24"><img src="http://illiweb.com/fa/empty.gif" width="24" border="0">

Unknown end tag for &lt;/td&gt;

<td style="border-top: 0px none; padding: 0px; line-height: 20px; background-repeat: repeat;" align="left" background="http://i24.servimg.com/u/f24/13/54/69/46/listbg13.gif">

<A href="http://4ALL.yourme.net/f66-forum"/><span><font style="font-family: Tahoma; font-size: 11px">HD tổng quát

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;

<br/>
<A href="http://4ALL.yourme.net/f43-forum"/><span><font style="font-family: Tahoma; font-size: 11px">Codes

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;

<br/>
<A href="http://4ALL.yourme.net/f51-forum"/><span><font style="font-family: Tahoma; font-size: 11px">Skins

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;

<br/>
<A href="http://4ALL.yourme.net/t2374-topic"/><span><font style="font-family: Tahoma; font-size: 11px">Tổng hợp Skins

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;

<br/>


Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;


<script type="text/javascript">tabview_initialize('TabView');

Unknown end tag for &lt;/script&gt;



<style type="text/css">#topbar{  PADDING-TOP: 0px;PADDING-BOTTOM: 0px;PADDING-RIGHT: 0px; PADDING-LEFT: 0px;VISIBILITY: hidden;WIDTH: 180px;FONT-FAMILY: Tahoma;POSITION: absolute;}

Unknown end tag for &lt;/style&gt;


<script type="text/javascript">var persistclose = 0

var startX = 80var startY = 500var verticalpos = "frombottom"function iecompattest(){return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body}function get_cookie(Name){var search = Name + "="var returnvalue = "";if (document�cookie.length > 0){offset = document�cookie.indexOf(search)if (offset != -1){offset += search.lengthend = document�cookie.indexOf(";", offset);if (end == -1) end = document�cookie.length;returnvalue=unescape(document�cookie.substring(offset, end))}}return returnvalue;}function closebar(){if (persistclose)document�cookie="remainclosed=1"document.getElementById("topbar").style.visibility="hidden"}function staticbar(){barheight=document.getElementById("topbar").offsetHeightvar ns = (navigator.appName.indexOf("Netscape") != -1) || window.opera;var d = document;function ml(id){var el=d.getElementById(id);if (!persistclose || persistclose && get_cookie("remainclosed")=="")el.style.visibility="visible"if(d.layers)el.style=el;el.sP=function(x,y){this.style.right=x+"px";this.style.top=y+"px";};el.x = startX;if (verticalpos=="fromtop")el.y = startY;else{el.y = ns ? pageYOffset + innerHeight : iecompattest().scrollTop + iecompattest().clientHeight;el.y -= startY;}return el;}window.stayTopLeft=function(){if (verticalpos=="fromtop"){var pY = ns ? pageYOffset : iecompattest().scrollTop;ftlObj.y += (pY + startY - ftlObj.y)/8;}else{var pY = ns ? pageYOffset + innerHeight - barheight: iecompattest().scrollTop + iecompattest().clientHeight - barheight;ftlObj.y += (pY - startY - ftlObj.y)/8;}ftlObj.sP(ftlObj.x, ftlObj.y);setTimeout("stayTopLeft()", 10);}ftlObj = ml("topbar");stayTopLeft();}if (window.addEventListener)window.addEventListener("load", staticbar, false)else if (window.attachEvent)window.attachEvent("onload", staticbar)else if (document.getElementById)window.onload=staticbar

Unknown end tag for &lt;/script&gt;



Unknown end tag for &lt;/div&gt;

 

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/thead&gt;




Unknown end tag for &lt;/table&gt;



```
mod\_recent\_topics:

```



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;


<td style="width: 0px">

Unknown end tag for &lt;/td&gt;


<td valign="top" style="border: 1px solid #9DB3C5; padding: 1px">
<style type="text/css">
th,td,p {
font-family: Tahoma,Verdana,Arial,Helvetica,sans-serif }
/* Style cho menu tabs */div.TabView div.Tabs{height: 32px; /* chiều cao của tab menu */overflow: hidden;}div.TabView div.Tabs: hover,{height: 32px; /* chiều cao của tab menu */overflow: hidden;}div.TabView div.Tabs a , div.TabView div.Tabs a:hover {float: left;display: block;background-color:#;text-align: center;height: 29px;padding: 6px;vertical-align: middle;border:1px solid #b4d0f3;border-top: 0px;border-left: 0px;border-bottom: 0px; /* đường viền quanh tabs menu */text-decoration: none!important;font-family: Tahoma;font-size: 11px;color: #000000;}.hotrott{background-color: #ffffff;border: 0px solid #ded7d7;}.nen{background-color: #ffffff;border: 1px solid #ded7d7;}div.TabView div.Tabs a.Active{background-color: #ffffff; /* màu nền tab menu active */color: #000000;border:1px solid #b4d0f3;border-top: 0px;border-left: 0px;border-bottom: 0px; padding: 6px;height: 29px;font-size: 11px;font-weight: bold;}/* Style cho phần text nội dung của mỗi tab */div.TabView {clear: both;border: 0px solid #ffffff;overflow: hidden; /* giá trị là auto nếu muốn hiện scroll bar */}div.TabView div.Pages div.Page{height: 100%;padding: 0px;border: 0px solid #b4d0f3;overflow: hidden; /* giá trị là auto nếu muốn hiện scroll bar */}

Unknown end tag for &lt;/style&gt;

<script type="text/javascript" src="http://untip-js.googlecode.com/files/Tabview.js">

Unknown end tag for &lt;/script&gt;

<div id="TabView" class="TabView" style="padding: 0px;">

<!-- tabs -->
<div width="100%" class="Tabs"><a class="Active" href="javascript:tabview_switch('TabView', 1);">Bài Viết Mới

Unknown end tag for &lt;/a&gt;

<a>Bài Viết Trả Lời Nhiều Nhất

Unknown end tag for &lt;/a&gt;

<a>Bài Viết Xem Nhiều Nhất

Unknown end tag for &lt;/a&gt;

<a>Thống Kê

Unknown end tag for &lt;/a&gt;


<ul class="tabs" id="vietvbb_topstats_t">  <li style="border-right: 0px; display: none;" id="vietvbb_topstats_t_loading">

Unknown end tag for &lt;/li&gt;

 

Unknown end tag for &lt;/ul&gt;

 

Unknown end tag for &lt;/div&gt;


<!--nội dung tabs -->
<div style="height:220px; width:100%" class="Pages">
<div class="Page" style="padding: 0px; height: 220px; display: block;">
<!-- BEGIN classical_row -->
<table class="tborder" style="border-bottom-width: 0px;" align="center" border="0" cellpadding="0" cellspacing="0" width="100%">

<tbody>
<tr valign="top">
<td style="padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="100%">

<table border="0" cellpadding="0" cellspacing="0" width="100%">
<tr valign="top">
<td style="border-top: 0px none; padding: 0px; background: transparent url(http://i1122.photobucket.com/albums/l525/liger1723/linhtinh/list50.gif) no-repeat scroll center top; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="24"><img src="http://illiweb.com/fa/empty.gif" width="24" border="0">

Unknown end tag for &lt;/td&gt;


<td style="border-top: 0px none; padding: 0px; line-height: 20px; background-repeat: repeat;" align="left" background="http://i61.servimg.com/u/f61/15/61/17/20/listbg13.gif">

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
<div class="mtmymenu"> <div class="mtmymenuu"> <a onmouseover="show_tooltip(this,'<b>Click để xem Profile thành viên !</b>','Thông Tin Thành Viên');" onmouseout="hidetip();" href="{classical_row.recent_topic_row.switch_poster.U_POSTER}"><span class="lpostertopic" style="font-size:11px;font-weight:bold">{classical_row.recent_topic_row.switch_poster.S_POSTER}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



<!-- END switch_poster -->


<!-- BEGIN switch_poster_guest -->
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



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;


<script type="text/javascript">
jQuery(".lbb:contains('♥')").remove();
jQuery(".lbb:contains('»')").remove();


Unknown end tag for &lt;/script&gt;



<!-- END classical_row -->






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
$(this).html('<font size="2"><b><span class="tiplFMvi">Tiêu đề:

Unknown end tag for &lt;/span&gt;

<font color="#C618F2"> ' + tieude + '

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/font&gt;

<hr><font size="3"><span class="tiplFMvi">Tạo chủ đề:

Unknown end tag for &lt;/span&gt;

<font color="#0D05FA"> ' + d + '

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/font&gt;

<br><font size="3"><span class="tiplFMvi">Gửi cuối:

Unknown end tag for &lt;/span&gt;

<font color="##00AEFF"> ' + j + '

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/font&gt;

<br><font size="3"><span class="tiplFMvi">Vào lúc:

Unknown end tag for &lt;/span&gt;

<font color="#000000"> ' + thoigian + '

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/font&gt;

<hr><font size="3"><span class="tiplFMvi">Thuộc chuyên mục:

Unknown end tag for &lt;/span&gt;

<font color="#006600"> ' + e + '

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/font&gt;

<br><font size="3"><span class="tiplFMvi">Lượt xem:

Unknown end tag for &lt;/span&gt;

<font color="#29F700"> ' + g + '

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/font&gt;

<br><font size="3"><span class="tiplFMvi">Trả lời:

Unknown end tag for &lt;/span&gt;

<font color="#FF6600"> ' + f + "

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/font&gt;

<br>");
})
})
});


Unknown end tag for &lt;/script&gt;






Unknown end tag for &lt;/div&gt;


<div class="Page" style="padding: 0px; height: 304px; display: block;">
<table class="tborder" style="border-bottom-width: 0px;" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr>
<td>

<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
<tbody>


Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;


<tbody>
<tr>
```

mod\_top\_posters:

```

<table width="100%" border="0" cellspacing="0" cellpadding="0">
<td style="padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="100%"><div style="margin-bottom: 10px;"><ul class="tabs"><li class="current"><span style="padding: 0px 0px;">
<script type="text/javascript">
function showstuff(value){
document.getElementById("poster").style.display = (value == "poster") ? "block" : "none";
document.getElementById("poster1").style.display = (value == "poster1") ? "block" : "none";
document.getElementById("poster2").style.display = (value == "poster2") ? "block" : "none";
document.getElementById("poster3").style.display = (value == "poster3") ? "block" : "none";
}


Unknown end tag for &lt;/script&gt;



<select id="changer" name="type" onchange="showstuff(this.value);">
<option value="poster">Top Tiêu Biểu Nhất

Unknown end tag for &lt;/option&gt;




Unknown end tag for &lt;/select&gt;





Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/li&gt;



Unknown end tag for &lt;/ul&gt;



<div id="poster" style="display:block;"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tr valign="top"><td style="border-top: 0px none; padding: 0px; background: transparent url(http://i38.servimg.com/u/f38/16/18/15/10/158.gif) no-repeat scroll center top; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="24" height="200">
<img src="http://illiweb.com/fa/empty.gif" width="20" border="0">

Unknown end tag for &lt;/td&gt;

<td style="border-top: 0px none; padding: 0px; line-height: 20px; background-repeat: repeat;" align="left" background="http://i38.servimg.com/u/f38/16/18/15/10/225.gif">



<!-- BEGIN POSTER -->
<div style="display:block; height:20px; overflow:hidden; line-height:18px;" onmouseover="show_tooltip(this,this.getElementsByTagName('div')[0].innerHTML,'Thông Tin Thành Viên');" onmouseout="hidetip();" class="smallfont">
<div style="display:none">Tên:{POSTER.NAME}<br>Số Bài Post :{POSTER.NB_POSTS}

Unknown end tag for &lt;/div&gt;

<div class="mtmymenu"> <div class="mtmymenuu">{POSTER.NAME}

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<!-- END POSTER -->




Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;





```
chèn vào css:

```

/* tabs-------------------------------------------------------------*/
.tabs { margin: 0; padding: 0;}
.tabs { padding-bottom: 31px; margin-bottom: 15px; background: #E5EFFE; border-bottom: 1px solid #b4d0f3; }
.tabs li { list-style: none;float: left; line-height: 30px; border-right: 1px solid #b4d0f3; height: 30px; font-size: 11px;}
.tabs li.current { background: #FF0000; height: 32px; font-weight: bold; }
.mainbox { background: #FF0000; border: 1px solid #9DB3C5; margin-bottom: 6px; padding: 1px;}
.mainbox table { width: 100%; }
#dhtmlpointer, #dhtmltooltip
{
z-index: 999;
left: -300px; top:0px;
visibility: hidden;
position: absolute;
}
#dhtmltooltip
{
border: #666 2.4px solid;
-moz-opacity: 0.8;
opacity: 0.8;
filter: alpha(opacity=80);
-moz-border-radius: 6px;
-webkit-border-radius: 6px;
padding: 10px;
font-size: 9pt;
font-family: Arial;
background-color: white;
width: auto;
max-width: 400px;
width:expression( document.body.clientWidth > 400? "400px": "auto" );
text-align:left;
}
.tooltipFMvi{display:none;z-index:999}#tooltip{padding:0;max-width:50% !important;color:#000;border:1px solid #000;background-color:#f6f6f6;font-size:0.8em}* html #tooltip{width:30%}#tooltip *{margin:2px 5px 2px 8px}#tooltip ul{padding:0 0 0 20px}#tooltip dl{clear:both;position:relative;margin-bottom:10px}#tooltip dt{float:left;border:medium none;padding-top:3px;width:50%}#tooltip dd{margin-left:50%;padding-left:5px;vertical-align:top}#tooltip p.header{margin:0;font-size:12px;font-weight:bold;color:#fff;padding:1px 5px;background:#000 repeat;font-weight:bold;border:1px solid #000}.tiplFMvi{color:red}#tooltip p{padding:0 5px 0 0;color:#696969;font-size:12px;font-weight:bold}.lastmtmy1{background:#E5EFFE;border-top:1px solid #B4D0F3;border-bottom:1px solid #B4D0F3;border-left:1px solid #B4D0F3}.lastmtmy2{background:#E5EFFE;border-top:1px solid #B4D0F3;border-bottom:1px solid #B4D0F3}.lastmtmy3{background:#E5EFFE;border-top:1px solid #B4D0F3;border-bottom:1px solid #B4D0F3;border-right:1px solid #B4D0F3}

#tooltip {
max-width:550px;
position:absolute;
border-radius:3px;
color:#000;
z-index:99;
border:1px solid #fff;
background:#fff url(http://i43.servimg.com/u/f43/16/03/04/56/white_10.png);
padding:0;
}

```
search\_results\_topics

```

<!-- BEGIN switch_menu -->
{UCP_TABS}
<!-- END switch_menu -->
<!-- BEGIN navmenu -->
<table width="100%" border="0" cellspacing="2" cellpadding="0" align="center">
<tr>
<td class="nav" valign="middle" width="100%"><span class="nav"><a class="nav" href="{U_INDEX}">{L_INDEX}

Unknown end tag for &lt;/a&gt;

 :: {L_SEARCH_TITLE}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;


<!-- END navmenu -->
<table class="forumline" width="100%" border="0" cellspacing="1" cellpadding="4" align="center">
<tr>
<td align="center" class="catHead" colspan="8" height="28"><h1 class="cattitle">{L_SEARCH_MATCHES}

Unknown end tag for &lt;/h1&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<th class="thCornerL" nowrap="nowrap" width="4%" height="25"> 

Unknown end tag for &lt;/th&gt;


<th class="thTop" nowrap="nowrap"> {L_TOPICS} 

Unknown end tag for &lt;/th&gt;


<th class="thTop" nowrap="nowrap"> {L_FORUM} 

Unknown end tag for &lt;/th&gt;


<th class="thTop" nowrap="nowrap"> {L_REPLIES} 

Unknown end tag for &lt;/th&gt;


<th class="thTop" nowrap="nowrap"> {L_AUTHOR} 

Unknown end tag for &lt;/th&gt;


<th class="thTop" nowrap="nowrap"> {L_VIEWS} 

Unknown end tag for &lt;/th&gt;


<th class="thTop" nowrap="nowrap"> {L_LASTPOST} 

Unknown end tag for &lt;/th&gt;


<!-- BEGIN watchsearch1 -->
<th class="thCornerR" nowrap="nowrap"> X 

Unknown end tag for &lt;/th&gt;


<!-- END watchsearch1 -->


Unknown end tag for &lt;/tr&gt;


<form action="{S_ACTION}" method="post" name="post" onsubmit="return verify_select();">
<!-- BEGIN searchresults -->
<tr class="layemno">
<td class="row1" align="center" valign="middle"><img title="{searchresults.L_TOPIC_FOLDER_ALT}" src="{searchresults.TOPIC_FOLDER_IMG}" alt="{searchresults.L_TOPIC_FOLDER_ALT}">

Unknown end tag for &lt;/td&gt;


<td class="row1" onmouseover='this.className="row2"' onmouseout='this.className="row1"'><h2 class="topic-title">{searchresults.NEWEST_POST_IMG}{searchresults.TOPIC_TYPE}<a class="topictitle" href="{searchresults.U_VIEW_TOPIC}">{searchresults.TOPIC_TITLE}

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/h2&gt;

<br />
<span class="gensmall">{searchresults.GOTO_PAGE}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;


<td class="row3" align="center"><span class="postdetails"><a class="postdetails" href="{searchresults.U_VIEW_FORUM}">{searchresults.FORUM_NAME}

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;


<td class="row2" align="center" valign="middle"><span class="postdetails">{searchresults.REPLIES}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;


<td class="row3" id="tacgiamt" align="center" valign="middle"><span class="name">{searchresults.TOPIC_AUTHOR}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;


<td class="row2" align="center" valign="middle"><span class="postdetails">{searchresults.VIEWS}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;


<td class="row3" align="center" valign="middle" nowrap="nowrap" onmouseover='this.className="row2"' onmouseout='this.className="row3"'><span class="postdetails">{searchresults.LAST_POST_TIME}<br />{searchresults.LAST_POST_AUTHOR} {searchresults.LAST_POST_IMG}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;


<!-- BEGIN watchsearch -->
<td class="row1" align="center" valign="middle" nowrap="nowrap"><input type="checkbox" name="mark[]2" value="{searchresults.TOPIC_ID}" />

Unknown end tag for &lt;/td&gt;


<!-- END watchsearch -->


Unknown end tag for &lt;/tr&gt;


<!-- END searchresults -->
<!-- BEGIN watchsearch1 -->
<tr>
<td class="catBottom" colspan="8" valign="middle" height="28" align="right"> <input type="submit" name="valid" value="{L_STOP_WATCH}" class="liteoption" />

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<!-- END watchsearch1 -->
<tr>
<td class="catBottom" colspan="8" valign="middle" align="right"><a href="#top">{L_BACK_TO_TOP}

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/form&gt;




Unknown end tag for &lt;/table&gt;


<table width="100%" border="0" cellspacing="2" cellpadding="0" align="center">
<tr>
<td valign="top"><span class="nav">{PAGE_NUMBER}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;


<td align="right" valign="top" nowrap="nowrap"><span class="nav">{PAGINATION}

Unknown end tag for &lt;/span&gt;

<br />
<span class="gensmall">{S_TIMEZONE}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;


<!-- BEGIN watchsearch1 -->
<td align="right" valign="top" nowrap="nowrap">
<b><span class="gensmall"><a class="gensmall" href="javascript:select_switch_search(true);">{L_MARK_ALL}

Unknown end tag for &lt;/a&gt;

 :: <a class="gensmall" href="javascript:select_switch_search(false);">{L_UNMARK_ALL}

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/b&gt;

<br />
<!-- END watchsearch1 -->


Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;


<table width="100%" border="0" cellspacing="2" align="center">
<tr>
<td align="right" valign="top">{JUMPBOX}

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;



<code>

chèn vào cuối over header:

<code>
<script src="http://playkings.5forum.net/24997.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;




```
![http://i48.servimg.com/u/f48/16/18/15/10/can210.jpg](http://i48.servimg.com/u/f48/16/18/15/10/can210.jpg)
24977.js ```
var versionMinor=parseFloat(navigator.appVersion);var versionMajor=parseInt(versionMinor);var IE=document.all&&!window.opera&&versionMajor<7;var IE7=document.all&&!window.opera&&versionMajor>=7;var OP=window.opera;var FF=document.getElementById;var NS=document.layers;function get_item(name,opener){if(IE){return(opener)?window.opener.document.all[name]:document.all[name]}else if(FF){return(opener)?window.opener.document.getElementById(name):document.getElementById(name)}else if(NS){return(opener)?window.opener.document.layers[name]:document.layers[name]}}function change_display(name,value,opener){if(IE){element=(opener==true)?window.opener.document.all[name].style:document.all[name].style}else if(FF){element=(opener==true)?window.opener.document.getElementById(name).style:document.getElementById(name).style}else if(NS){element=(opener==true)?window.opener.document.layers[name]:document.layers[name]}element.display=value}function reverse_display(name,opener){element=get_item(name);if(!element){return false}var display=(element.style.display!='block')?'block':'none';change_display(name,display,opener)}var current_tooltip;function show_tooltip(caller,content,content_title){var current_tooltip=get_item('tooltip');if(!current_tooltip){var current_tooltip=document.createElement('div');current_tooltip.setAttribute('id','tooltip');document.body.appendChild(current_tooltip)}current_tooltip.style.zIndex=100;current_tooltip.style.position='absolute';if(content_title){content='<p class="header">'+content_title+'

Unknown end tag for &lt;/p&gt;

<p>'+content+'

Unknown end tag for &lt;/p&gt;

'}else{content='<p>'+content+'

Unknown end tag for &lt;/p&gt;

'}current_tooltip.innerHTML=content;current_tooltip.style.visibility='visible';caller.onmousemove=move_tooltip;caller.onmouseout=function(){current_tooltip.style.visibility="hidden"};caller.title=''}var offsetxpoint=-60;var offsetypoint=20;var real_body=(document.compatMode&&document.compatMode!="BackCompat")?document.documentElement:document.body;real_body=(document.documentElement)?document.documentElement:document.body;function move_tooltip(e){var curX=(!IE)?e.pageX:event.clientX+real_body.scrollLeft;var curY=(!IE)?e.pageY:event.clientY+real_body.scrollTop;var rightedge=IE&&!window.opera?real_body.clientWidth-event.clientX-offsetxpoint:window.innerWidth-e.clientX-offsetxpoint-20;var bottomedge=IE&&!window.opera?real_body.clientHeight-event.clientY-offsetypoint:window.innerHeight-e.clientY-offsetypoint-20;var leftedge=(offsetxpoint<0)?offsetxpoint*(-1):-1000;current_tooltip=get_item('tooltip');if(rightedge<current_tooltip.offsetWidth)current_tooltip.style.left=IE?real_body.scrollLeft+event.clientX-current_tooltip.offsetWidth+"px":window.pageXOffset+e.clientX-current_tooltip.offsetWidth+"px";else if(curX<leftedge)current_tooltip.style.left="5px";else current_tooltip.style.left=curX+offsetxpoint+"px";if(bottomedge<current_tooltip.offsetHeight)current_tooltip.style.top=IE?real_body.scrollTop+event.clientY-current_tooltip.offsetHeight-offsetypoint+"px":window.pageYOffset+e.clientY-current_tooltip.offsetHeight-offsetypoint+"px";else current_tooltip.style.top=curY+offsetypoint+"px"}function popup(link,oWidth,oHeight,oName){if(oWidth>screen.width){oWidth=screen.width}if(oHeight>screen.height){oHeight=screen.height}var PosX=(screen.width-oWidth)/2;var PosY=(screen.height-oHeight)/2;var params="width="+oWidth+", height="+oHeight+", top="+(PosY)+",left="+(PosX);params+=('toolbar=0,menubars=0,location=no,scrollbars=1,directories=0,statubar=0,resizable=0');window.open(link,((!oName)?'popuped':'popuped'),params)}function add_search_engine(engine,title,category){if(FF&&(typeof window.sidebar=="object")&&(typeof window.sidebar.addSearchEngine=="function")){window.sidebar.addSearchEngine(engine+'_ff.src',engine+'.gif',title,category)}else if(IE7){window.external.AddSearchProvider(engine+'_ie.src')}else{alert('Your browser do not support this utility')}}inter='';speed=10;frequency=10;L_txt_close='Clic to close this preview';function showImage(event,finalWidth,finalHeight,image,img_width,img_height){if(document.getElementById('preview_block').firstChild){for(var i=0;i<document.getElementById('preview_block').childNodes.length;i++){document.getElementById('preview_block').removeChild(document.getElementById('preview_block').childNodes[i])}}var mouseX=0;var mouseY=0;var vScroll=0;var hScroll=0;var inWidth=getWindowWidth();var inHeight=getWindowHeight();if(document.all){mouseX=window.event.clientX+document.documentElement.scrollLeft;mouseY=window.event.clientY+document.documentElement.scrollTop;vScroll=document.documentElement.scrollTop;hScroll=document.documentElement.scrollLeft}else{mouseX=event.clientX+window.scrollX;mouseY=event.clientY+window.scrollY;vScroll=window.scrollY;hScroll=window.scrollX}var div=document.createElement('div');div.style.height='0';div.style.width='0';div.className='preview';div.style.position='absolute';div.style.top=mouseY+'px';div.style.left=mouseX+'px';div.style.zIndex='1000';div.setAttribute('id','image');div.onclick=new Function("document.getElementById('preview_block').removeChild(document.getElementById('preview_block').firstChild);window.clearInterval(inter);");var finalLeft=(inWidth-finalWidth)/2;var finalTop=(inHeight-finalHeight)/2;finalTop+=vScroll;var stepLeft=(finalLeft-mouseX)/speed;var stepTop=(finalTop-mouseY)/speed;var stepWidth=finalWidth/speed;var stepHeight=finalHeight/speed;document.getElementById('preview_block').appendChild(div);if(!img_width){img_width=840}if(!img_height){img_height=600}inter=window.setInterval('moveAndResize('+stepLeft+','+stepTop+','+stepWidth+','+stepHeight+','+finalHeight+',"'+image+'",'+img_width+','+img_height+')',frequency);return false}function moveAndResize(stepLeft,stepTop,stepWidth,stepHeight,finalHeight,image,img_width,img_height){if(!document.getElementById('preview_block')||!document.getElementById('preview_block').firstChild){window.clearInterval(inter);return false}var div=document.getElementById('preview_block').firstChild;var height=div.style.height.match(/[0-9\.]*/);var width=div.style.width.match(/[0-9\.]*/);var top=div.style.top.match(/[0-9\.]*/);var left=div.style.left.match(/[0-9\.]*/);height=Number(height);width=Number(width);top=Number(top);left=Number(left);height+=stepHeight;width+=stepWidth;top+=stepTop;left+=stepLeft;div.style.height=height+'px';div.style.width=width+'px';div.style.top=top+'px';div.style.left=left+'px';if(height>=finalHeight){window.clearInterval(inter);var img=document.createElement('img');img.setAttribute('src',image);img.setAttribute('alt',L_txt_close);img.setAttribute('title',L_txt_close);img.setAttribute('width',img_width);img.setAttribute('height',img_height);img.style.cursor='pointer';div.appendChild(img);var p=document.createElement('p');p.style.cursor='pointer';div.appendChild(p)}}function getWindowHeight(){var pageHeight=window.innerHeight;pageHeight=(pageHeight)?pageHeight:document.documentElement.clientHeight;pageHeight=(pageHeight)?pageHeight:document.body.clientHeight;return pageHeight}function getWindowWidth(){var pageWidth=window.innerWidth;pageWidth=(pageWidth)?pageWidth:document.documentElement.clientWidth;pageWidth=(pageWidth)?pageWidth:document.body.clientWidth;return pageWidth}```