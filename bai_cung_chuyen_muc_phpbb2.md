**Bài hướng dẫn này được baivong phát triển từ bài viết của batuan94vt trên chinhphuc:**


Chèn vào view\_topic\_body

```


<script>
$(document).ready(function(){
$(function() {
$('<span class="bv" />').load('/f{FORUM_ID}-forum .ca3vt', {limit: 10}, function() {
jQuery(this).hide()
.appendTo('.baiviet')
.fadeIn(1);
});
return false;
});
});


Unknown end tag for &lt;/script&gt;



```

Vào topic\_list\_box tìm

```

<a href="{topics_list_box.row.U_VIEW_TOPIC}">{topics_list_box.row.TOPIC_TITLE}

Unknown end tag for &lt;/a&gt;


```

Sửa thành

```

<div class="ca3vt"><a href="{topics_list_box.row.U_VIEW_TOPIC}">{topics_list_box.row.TOPIC_TITLE}

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/div&gt;



```

Chèn cái này vào chỗ bạn muốn hiện trong view\_topic\_body ( nèn thêm thẻ div bên ngoài giới hạn chiều cao đề phòng vỡ khung Cười nhe răng)

```

<div class="baiviet" style="overflow:hidden; width:175; height:155px;">

Unknown end tag for &lt;/div&gt;



```

Còn cái gì còn thiếu thì mngo mọi người bổ sung cho em với nhé.



http://diendan.chinhphuc.info/t17592-topic
Chức năng:

> Thay Forumotion Traffic exchange bằng danh sách các bài viết cùng chuyên mục.
> Lấy tối đa 13 bài viết, thay đổi kích thước tùy theo số lượng bài.
> Có thể bật/tắt bằng cách bật/tắt Traffic exchange



Bước 1: Ganeral - Messages and e-mails - Configuration:
Điền vào 3 vị trí sau:

> Define another name for Stickies : Chú ý
> Define another name for Announcements : Thông báo
> Customize a global announcement name : Thông báo khẩn


Bước 2: Display - Templates - Ganeral - Topics\_list\_box:
Tìm đoạn code sau:

```

<div class="topictitle">
{topics_list_box.row.NEWEST_POST_IMG}{topics_list_box.row.PARTICIPATE_POST_IMG}{topics_list_box.row.TOPIC_TYPE}
<h2 class="topic-title">
<a class="topictitle" href="{topics_list_box.row.U_VIEW_TOPIC}">{topics_list_box.row.TOPIC_TITLE}

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/h2&gt;




Unknown end tag for &lt;/div&gt;



```

Thay nó bằng:

```

<script type="text/javascript">$(function(){$(".xname").hide();});

Unknown end tag for &lt;/script&gt;


<div class="topictitle" style="display:block;">
{topics_list_box.row.NEWEST_POST_IMG}{topics_list_box.row.PARTICIPATE_POST_IMG}{topics_list_box.row.TOPIC_TYPE}
<h2 class="topic-title">
<a class="topictitle" href="{topics_list_box.row.U_VIEW_TOPIC}">{topics_list_box.row.TOPIC_TITLE}

Unknown end tag for &lt;/a&gt;

<span class="xname" style="float: right;"><strong>{topics_list_box.row.TOPIC_AUTHOR}

Unknown end tag for &lt;/strong&gt;

<br/>

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/h2&gt;




Unknown end tag for &lt;/div&gt;


```


Bước 3: Display - Templates - Ganeral - Viewtopic\_body:
Tìm đoạn này

```

<!-- BEGIN promot_trafic -->
...
<!-- END promot_trafic -->
```


và thay bằng:

```

<!-- BEGIN promot_trafic -->
<table class="forumline" width="100%" border="0" cellpadding="1" cellspacing="0" id="ptrafic_close" style="display:none;margin: 1px 0px 1px 0px">
<tr>
<td class="thead" height="28">
<table width="100%" border="0" cellspacing="0" cellpadding="0">
<tr>
<td valign="top"><h1>&nbspXem thêm các bài viết khác cùng chuyên mục

Unknown end tag for &lt;/h1&gt;



Unknown end tag for &lt;/td&gt;


<td align="right" valign="middle" width="10"><span class="gensmall"><a onmouseover="showtip('Mở danh mục');" onmouseout="hidetip();" href="javascript:ShowHideLayer('ptrafic_open','ptrafic_close');"><img src="{TABS_MORE_IMG}" alt="+" align="middle" border="0" />

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;


<table class="forumline" width="100%" border="0" cellpadding="1" cellspacing="0" id="ptrafic_open" style="display:'';margin: 1px 0px 1px 0px">
<tr>
<td class="thead" height="28">
<table width="100%" border="0" cellspacing="0" cellpadding="0">
<tr>
<td valign="top"><h1>&nbspXem thêm các bài viết khác cùng chuyên mục

Unknown end tag for &lt;/h1&gt;



Unknown end tag for &lt;/td&gt;


<td align="right" valign="middle" width="10"><span class="gensmall"><a onmouseover="showtip('Đóng danh mục');" onmouseout="hidetip();" href="javascript:ShowHideLayer('ptrafic_open','ptrafic_close');"><img src="{TABS_LESS_IMG}" alt="-" align="middle" border="0" />

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td class="row2 postbody" valign="top">
<script type="text/javascript">
$(function() {
$('<span class="bv" />').load('/f{FORUM_ID}-forum div.topictitle:not("div.topictitle:contains(\'Thông báo khẩn\'),div.topictitle:contains(\'Thông báo\'),div.topictitle:contains(\'Chú ý\'),div.topictitle:gt(13)")', {limit: 10}, function() {
jQuery(this).hide()
.appendTo('.cungchuyenmuc')
.fadeIn(1);
});
return false;
});


Unknown end tag for &lt;/script&gt;


<div class="cungchuyenmuc" style="overflow:hidden; width:100%; height:auto;">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;


<!-- END promot_trafic -->

```

Chú ý: Vì TUT được thiết kế thay cho vị trí Forumotion Traffic exchange để bạn có thể bật/tắt nó, nên bạn cần bật Traffic exchange cho forum của bạn nếu muốn nó hiển thị.
Ganeral - Forum promotion - Traffic exchange - Options - Activate traffic exchange: Members and guests
Nếu nó vẫn không hiển thị, hoặc bạn không tìm thấy đoạn code trong hướng dẫn bước 3 thì vui lòng xem lại bài này: http://help.forumotion.com/t85157-new-update-forumotion-traffic-exchange