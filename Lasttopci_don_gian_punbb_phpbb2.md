Demo:

http://goo.gl/XIZ7a


♥ Phpbb2:

1. ACP > Modules > Portal & Widgets > Forum widgets management
>chỉnh thông số như dưới:
Forum widgets general options
Display forum widgets : Yes
Width column 1 (left) : 180
Width column 3 (right) : 180
Space between two widgets : 0
Space between columns : 0
và :4r3:

Sắp xếp Widgets như hình:

http://goo.gl/XIZ7a


và click vào :4r2: để chỉnh sửa như dưới:
General options of the widget : Recent topics;
Number of recent topics : 10
Activate the topics scrolling : No
Scrolling direction : From bottom to top
Height of the topics module : 180
Time delay between two scrollings : 0
Scrolling progression : 0
và :4r3:
ACP > Display > Templates > General > overall\_header.

Tìm và xóa đoạn này đi:

```


<td valign="top" width="{C1SIZE}">
<div id="{ID_LEFT}">
<!-- BEGIN giefmod_index1 -->
{giefmod_index1.MODVAR}
<!-- BEGIN saut -->
<div style="height:{SPACE_ROW}px">

Unknown end tag for &lt;/div&gt;


<!-- END saut -->
<!-- END giefmod_index1 -->


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;



```


thay bằng:

```


<td valign="top" width="100%">
<div id="center">
<!-- BEGIN giefmod_index1 -->
{giefmod_index1.MODVAR}
<!-- BEGIN saut -->
<div style="height:{SPACE_ROW}px">

Unknown end tag for &lt;/div&gt;


<!-- END saut -->
<!-- END giefmod_index1 -->


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr>

```


ACP > Display > Templates > Portal > mod\_recent\_topics.
thay toàn bộ code trong đó bằng:

```


<style>
div.title {
font-size: 12px;
font-weight: bold;
text-decoration: none;
color: #fff;
text-align:center;
}


Unknown end tag for &lt;/style&gt;


<!-- BEGIN classical_row -->
<table class="forumline" width="100%" border="0" cellspacing="1" cellpadding="3" align="center"><tbody>
<thead><tr><th colspan="{catrow.tablehead.INC_SPAN}" nowrap="nowrap" width="100%" class="secondarytitle">
<div class="ist">Latest Topics

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/th&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/thead&gt;


<tr>
<td style="padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="100%">
<table border="0" cellpadding="0" cellspacing="0" colspan="3" width="100%">

<tr><td class="catHead" colspan="2" width="50%">
<div class="title"><font color="black">Topic

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;


<td class="catHead" colspan="1" width="25%">
<div class="title"><font color="black">History

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;


<td class="catHead" colspan="1" width="25%">
<div class="title"><font color="black">Written by

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



<tr valign="top">
<td colspan="1" style="border-top: 0px none; padding: 0px; background: transparent url(http://i1036.photobucket.com/albums/a449/a1tinhgia3/image/list.gif) no-repeat scroll center top; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="24"><img src="http://illiweb.com/fa/empty.gif" width="24" border="0">

Unknown end tag for &lt;/td&gt;

<td style="border-top: 0px none; padding: 0px; line-height: 20px; background-repeat: repeat;" align="left" background="http://i1036.photobucket.com/albums/a449/a1tinhgia3/image/listbg.gif" width="50%">

<!-- BEGIN recent_topic_row -->
<a href="{classical_row.recent_topic_row.U_TITLE}"><b><font style="font-family: Tahoma; font-size: 11px">{classical_row.recent_topic_row.L_TITLE}

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/a&gt;

<br>

<!-- END recent_topic_row -->


Unknown end tag for &lt;/td&gt;


<td style="border-top: 0px none; padding: 0px; line-height: 16.5px; background-repeat: repeat;" align="center" background="http://i1036.photobucket.com/albums/a449/a1tinhgia3/image/listbg.gif" width="25%">
<span class="gensmall">
<!-- BEGIN recent_topic_row -->
<img src="http://img816.imageshack.us/img816/9845/11750606.png" width="16px" height="16px" />
{ON} {classical_row.recent_topic_row.S_POSTTIME}
<br><!-- END recent_topic_row -->


Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;


<td style="border-top: 0px none; padding: 0px; line-height: 17px; background-repeat: repeat;" align="left" background="http://i1036.photobucket.com/albums/a449/a1tinhgia3/image/listbg.gif" width="25%">
<!-- BEGIN switch_poster -->
<a href="{classical_row.recent_topic_row.switch_poster.U_POSTER}">{classical_row.recent_topic_row.switch_poster.S_POSTER}

Unknown end tag for &lt;/a&gt;


<!-- END switch_poster -->
<!-- BEGIN switch_poster_guest -->
{classical_row.recent_topic_row.switch_poster_guest.S_POSTER}
<!-- END switch_poster_guest -->
<!-- BEGIN recent_topic_row -->
<img src="http://www.birazkisisel.com/wp-content/plugins/wp-favorite-posts/img/star.png">
<a href="{classical_row.recent_topic_row.switch_poster.U_POSTER}"><font style="font-family: Tahoma; font-size: 11px">{classical_row.recent_topic_row.switch_poster.S_POSTER}

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/a&gt;


<br><!-- END recent_topic_row -->



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;


<!-- END classical_row -->

```


♥ Punbb

Vào overall\_header :

tìm và xóa:

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


thay bằng:

```


<td valign="top" width="100%"><div id="center">
<!-- BEGIN giefmod_index1 -->
{giefmod_index1.MODVAR}
<!-- BEGIN saut -->
<div style="height:{SPACE_ROW}px">

Unknown end tag for &lt;/div&gt;


<!-- END saut -->
<!-- END giefmod_index1 -->


Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;





ACP > Display > Templates > Portal > mod_recent_topics.
thay toàn bộ code đó bằng

Code:              Chọn Toàn Bộ
<style>
div.title {
font-size: 12px;
font-weight: bold;
text-decoration: none;
color: #fff;
text-align:center;
}


Unknown end tag for &lt;/style&gt;


<!-- BEGIN classical_row -->
<table class="forumline" width="100%" border="0" cellspacing="1" cellpadding="3" align="center"><tbody>
<thead><tr><th colspan="{catrow.tablehead.INC_SPAN}" nowrap="nowrap" width="100%" class="secondarytitle">
<div class="ist">Latest Topics

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/th&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/thead&gt;


<tr>
<td style="padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="100%">
<table border="0" cellpadding="0" cellspacing="0" colspan="3" width="100%">

<tr><td class="catHead" colspan="2" width="50%">
<div class="title"><font color="black">Topic

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;


<td class="catHead" colspan="1" width="25%">
<div class="title"><font color="black">History

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;


<td class="catHead" colspan="1" width="25%">
<div class="title"><font color="black">Written by

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



<tr valign="top">
<td colspan="1" style="border-top: 0px none; padding: 0px; background: transparent url(http://i1036.photobucket.com/albums/a449/a1tinhgia3/image/list.gif) no-repeat scroll center top; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" width="24"><img src="http://illiweb.com/fa/empty.gif" width="24" border="0">

Unknown end tag for &lt;/td&gt;

<td style="border-top: 0px none; padding: 0px; line-height: 20px; background-repeat: repeat;" align="left" background="http://i1036.photobucket.com/albums/a449/a1tinhgia3/image/listbg.gif" width="50%">

<!-- BEGIN recent_topic_row -->
<a href="{classical_row.recent_topic_row.U_TITLE}"><b><font style="font-family: Tahoma; font-size: 11px">{classical_row.recent_topic_row.L_TITLE}

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/a&gt;

<br>

<!-- END recent_topic_row -->


Unknown end tag for &lt;/td&gt;


<td style="border-top: 0px none; padding: 0px; line-height: 16.5px; background-repeat: repeat;" align="center" background="http://i1036.photobucket.com/albums/a449/a1tinhgia3/image/listbg.gif" width="25%">
<span class="gensmall">
<!-- BEGIN recent_topic_row -->
<img src="http://img816.imageshack.us/img816/9845/11750606.png" width="16px" height="16px" />
{ON} {classical_row.recent_topic_row.S_POSTTIME}
<br><!-- END recent_topic_row -->


Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;


<td style="border-top: 0px none; padding: 0px; line-height: 17px; background-repeat: repeat;" align="left" background="http://i1036.photobucket.com/albums/a449/a1tinhgia3/image/listbg.gif" width="25%">
<!-- BEGIN switch_poster -->
<a href="{classical_row.recent_topic_row.switch_poster.U_POSTER}">{classical_row.recent_topic_row.switch_poster.S_POSTER}

Unknown end tag for &lt;/a&gt;


<!-- END switch_poster -->
<!-- BEGIN switch_poster_guest -->
{classical_row.recent_topic_row.switch_poster_guest.S_POSTER}
<!-- END switch_poster_guest -->
<!-- BEGIN recent_topic_row -->
<img src="http://www.birazkisisel.com/wp-content/plugins/wp-favorite-posts/img/star.png">
<a href="{classical_row.recent_topic_row.switch_poster.U_POSTER}"><font style="font-family: Tahoma; font-size: 11px">{classical_row.recent_topic_row.switch_poster.S_POSTER}

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/a&gt;


<br><!-- END recent_topic_row -->



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;


<!-- END classical_row -->
```


Nguồn: help.forumotion.com