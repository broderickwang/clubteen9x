![http://i83.servimg.com/u/f83/17/52/69/11/a113.png](http://i83.servimg.com/u/f83/17/52/69/11/a113.png)
Bước 1 : Vào index\_body cho đoạn code này dưới
> ```
{JAVASCRIPT}```

```


<div class="main">
<div class="main-head"><div class="page-title"><h2>Thống Kê Bài Viết

Unknown end tag for &lt;/h2&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;


<div class="main-content">
<!-- BEGIN giefmod_index1 -->
{giefmod_index1.MODVAR}
<!-- END giefmod_index1 -->

<div><div>


Unknown end tag for &lt;/div&gt;


```


Bước 2 : Các bạn vào : overall\_header tìm đoạn code ( có thì xóa nó lun nhé , không có thì thôi )
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
Bước 3 : Vào mod\_recent\_topics thay toàn bộ code trong đó = code sau

```



Unknown end tag for &lt;/table&gt;

--> <td width="100%" valign="top" class="alt1" style="padding:0">
<!-- BEGIN classical_row --> <table width="100%" border="0" cellspacing="0" cellpadding="0">


<td style="background: transparent url(http://i83.servimg.com/u/f83/17/52/69/11/top10.gif) no-repeat;" width="23"><img src="http://illiweb.com/fa/empty.gif" width="24" height="1" />

Unknown end tag for &lt;/td&gt;


<td style="line-height:18px; background: transparent url(/users/2611/10/63/87/album/listbg10.gif) repeat" width="100%" valign="top">

<!-- BEGIN recent_topic_row --><table class="c3zonee" width="100%" border="0" cellspacing="0" cellpadding="0" style="height:20px"><tr><td width="76%" nowrap="nowrap"><div style="font-size:11px;font-weight:bold"><a onmouseover="showtip('<b>Tiêu đề:</b> <font color=#FF6FAB>{classical_row.recent_topic_row.L_TITLE}</font><br> <b>Thời gian:</b> <font color=#AFFFD0>{classical_row.recent_topic_row.S_POSTTIME}</font>');" onmouseout="hidetip();" href="{classical_row.recent_topic_row.U_TITLE}">{classical_row.recent_topic_row.L_TITLE}

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;

<td width="20%" align="right" nowrap="nowrap">
<div style="font-size:11px;font-weight:bold">
<!-- BEGIN switch_poster -->
<a onmouseover="showtip('<b>Click để xem profile của thành viên này !</b>');" onmouseout="hidetip();" href="{classical_row.recent_topic_row.switch_poster.U_POSTER}">{classical_row.recent_topic_row.switch_poster.S_POSTER}

Unknown end tag for &lt;/a&gt;


<!-- END switch_poster --><!-- BEGIN switch_poster_guest -->
{classical_row.recent_topic_row.switch_poster_guest.S_POSTER}
<!-- END switch_poster_guest -->

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;


<!-- END recent_topic_row -->


Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;

<!-- END classical_row -->


Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;



```

Bước 4 : Vào mod\_top\_posters thay toàn bộ code trong đó = code

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
<span id="tentop">Top 10 Xóm Nét

Unknown end tag for &lt;/span&gt;


<img src="http://i17.servimg.com/u/f17/17/52/69/11/aopen10.gif" border="0" title="" alt=""/>


Unknown end tag for &lt;/div&gt;


<div class="select" id="topmenu" style="margin-top: 3px; z-index: 50; visibility:hidden;  clip: rect(auto auto auto auto); "
align="left">





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
<a href="javascript:cswitch_hm(0);">Bài viết mới

Unknown end tag for &lt;/a&gt;




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
Bước 5 : Cho vào CSS code
```

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


Bước 6 : vào ACP >> MODULES >> Portal & Widgets >> Forum widgets management ( cài đặ như hình dưới )

![http://i83.servimg.com/u/f83/17/52/69/11/demo10.png](http://i83.servimg.com/u/f83/17/52/69/11/demo10.png)

Click Top posters :
- Display the posted messages number for each member present in the widget. : chọn Không

CLick Recent topics :
- Number of recent topics : điền 8 ( cái này các bạn muốn nhiều thì tùy nhưng nhiều quá nó xấu )
- Activate the topics scrolling : chọn Không


Thế là Xong . các bạn ra mà tận hưỡng nhé !