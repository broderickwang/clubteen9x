Hướng dẫn thay danh sách ban quản trị bằng danh sách thành viên mới:
memberlist\_body:
Tìm code:

```

<a class="gen" href="{memberrow.U_VIEWPROFILE}">{memberrow.USERNAME}

Unknown end tag for &lt;/a&gt;


```

Thay lại bằng:

```

<div class="thanhvienmoi" style="height: 20px;width: 116px;"><font style="font-family: Tahoma; font-size: 11px"><a class="gen" href="{memberrow.U_VIEWPROFILE}">{memberrow.USERNAME}

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/div&gt;


```

Tìm:

```

{memberrow.POSTS}
```

Thay bằng:

```

<div class="baivong" style="height: 20px;width: 95px;" align="right"><font style="font-family: Tahoma; font-size: 11px">{memberrow.POSTS} bài viết

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/div&gt;


```


Đây là đoạn script và code hiển thị, các bác có thể đặt đâu tuỳ ý

```

<script>
$(document).ready(function(){
$(function() {
$('<span class="bv" />').load('/memberlist?mode=joined&order=DESC&submit=Ok&username .thanhvienmoi', {limit: 10}, function() {
jQuery(this).hide()
.appendTo('.bvthanhvien')
.fadeIn(1);
});
return false;
});
$(function() {
$('<span class="bv" />').load('/memberlist?mode=joined&order=DESC&submit=Ok&username .baivong', {limit: 10}, function() {
jQuery(this).hide()
.appendTo('.battuvuong')
.fadeIn(1);
});
return false;
});
});


Unknown end tag for &lt;/script&gt;


<table width="100%" border="0" cellspacing="0" cellpadding="0" height="100%" style="border: 1px solid #fff"><tr>
<th colspan="2" style="border: 0px;;height: 26px!important;padding: 0px 0px;"><b><center>Thành viên mới

Unknown end tag for &lt;/center&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/th&gt;




Unknown end tag for &lt;/tr&gt;

<tr valign="top"><td style="padding: 2px;" class="row1" width="175">
<div  class="bvthanhvien">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;


<td style="padding: 2px;" class="row1" style="width: 100px;">
<div class="battuvuong">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;


```



Vói các bạn dùng last topic 3 cột. Thay toàn bộ mod\_most\_viewed\_topics bằng: ( nhớ chỉnh lại thông số chiều cao kẻo bị lẹch khnug )

```

<td>
<script>
$(document).ready(function(){
$(function() {
$('<span class="bv" />').load('/memberlist?mode=joined&order=DESC&submit=Ok&username .thanhvienmoi', {limit: 10}, function() {
jQuery(this).hide()
.appendTo('.bvthanhvien')
.fadeIn(1);
});
return false;
});
$(function() {
$('<span class="bv" />').load('/memberlist?mode=joined&order=DESC&submit=Ok&username .baivong', {limit: 10}, function() {
jQuery(this).hide()
.appendTo('.battuvuong')
.fadeIn(1);
});
return false;
});
});


Unknown end tag for &lt;/script&gt;


<div style=" overflow:hidden; width:175; height:232px;">
<table width="100%" border="0" cellspacing="0" cellpadding="0" height="100%" style="border: 1px solid #fff"><tr>
<th colspan="2" style="border: 0px;;height: 26px!important;padding: 0px 0px;"><b><center>Thành viên mới

Unknown end tag for &lt;/center&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/th&gt;




Unknown end tag for &lt;/tr&gt;

<tr valign="top"><td style="padding: 2px;" class="row1" width="175">
<div  class="bvthanhvien">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;


<td style="padding: 2px;" class="row1" style="width: 100px;">
<div class="battuvuong">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;


<div style=" overflow:hidden; width:175; height:232px;">
<table width="219" height="100%" border="0" cellpadding="0" cellspacing="0" style="border: 1px solid #fff;height: 26px;"><tr><th colspan="2" style="border: 0px;height: 26px;padding: 0px 0px;"><center>Chủ đề được xem nhiều

Unknown end tag for &lt;/center&gt;



Unknown end tag for &lt;/th&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;

<table border="0" cellpadding="0" cellspacing="0" width="100%" id="sell1"><tr><td style="font-size: 11px;border-top: 0px none; padding: 2px; line-height: 20px;width: 130px;" align="left"><!-- BEGIN TOPIC --><div style="height: 20px;">
<a class="lengtht" onmouseover="showtip('<span><font color=#ffffff>{TOPIC.TITLE}</font></span>');" href="{TOPIC.LINK}"onmouseout="hidetip();"><font style="font-family: Tahoma; font-size: 11px"> ▼ {TOPIC.NAME}

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/a&gt;

 <span style="float:right;"> -  lượt xem

Unknown end tag for &lt;/span&gt;

 <span class="a1view" style="float:right;"> {TOPIC.TITLE}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;


<!-- END TOPIC -->


Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;





Unknown end tag for &lt;/div&gt;


```


Ngoài ra cái code trên còn ứng dụng rất nhiều, như skin4fm sử dụng để làm thêm tab cho last topic và bài viết cùng chuyên mục. Các bạn có thể sáng tạo thêm.

Code này dc thực hiện bởi Thần Gió hay ligerv gì đó cũng không rõ, chỉ nghe đại ca thần Gió viết trên fmvi.tk và kiu mình đem share cho các bạn, khi nào rõ hơn mình sẽ sửa cái dòng này =.=!!


Demo:

```

http://www.9xstudio.biz/
```
```

http://vipfamily97.forumvi.com/
```


Làm như batuan chia sẻ, vào memberlist, tìm code

```

<span class="gensmall">{memberrow.JOINED}

Unknown end tag for &lt;/span&gt;


```
thay bằng

```

<span class="gen"><div class="9xstudio" style="height: 18px;width: 56px;" align="right"><font style="font-family: Tahoma; font-size: 11px">{memberrow.JOINED}

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/span&gt;



```

thay đoạn code

```

<div class="thanhvienmoi" style="height: 20px;width: 116px;"><font style="font-family: Tahoma; font-size: 11px"><a class="gen" href="{memberrow.U_VIEWPROFILE}">{memberrow.USERNAME}

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/div&gt;


```
của batuan bằng code này

```

<div class="mama" style="height: 18px;width: 146px;"><font style="font-family: Tahoma; font-size: 11px"><a class="gen" href="{memberrow.U_VIEWPROFILE}">{memberrow.USERNAME}

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/div&gt;


```


thêm vào overall\_foot

```

<script type="text/javascript" src="http://vipfamily97.forumvi.com/h203-page">

Unknown end tag for &lt;/script&gt;



```

đoạn code hiển thị phần ngày đăng kí

```

<div class="Kelly">
```


đoạn code của batuan sẽ thành:

```

<script>
$(document).ready(function(){
$(function() {
$('<span class="bv" />').load('/memberlist?mode=joined&order=DESC&submit=Ok&username .thanhvienmoi', {limit: 10}, function() {
jQuery(this).hide()
.appendTo('.bvthanhvien')
.fadeIn(1);
});
return false;
});
$(function() {
$('<span class="bv" />').load('/memberlist?mode=joined&order=DESC&submit=Ok&username .baivong', {limit: 10}, function() {
jQuery(this).hide()
.appendTo('.battuvuong')
.fadeIn(1);
});
return false;
});
});


Unknown end tag for &lt;/script&gt;


<table width="100%" border="0" cellspacing="0" cellpadding="0" height="100%" style="border: 1px solid #fff"><tr>
<th colspan="2" style="border: 0px;;height: 26px!important;padding: 0px 0px;"><b><center>Thành viên mới

Unknown end tag for &lt;/center&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/th&gt;




Unknown end tag for &lt;/tr&gt;

<tr valign="top"><td style="padding: 2px;" class="row1" width="175">
<div  class="9xnm">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;


<td style="padding: 2px;" class="row1" width="175">
<div class="Kelly">


Unknown end tag for &lt;/td&gt;


<td style="padding: 2px;" class="row1" style="width: 100px;">
<div class="battuvuong">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;


```


Nếu bạn cho hiển thị cả 3 phần, nên tống vào recent, trông cho nó đẹp Cười nhe răng

Nguồn: 9xstudio
Người chia sẻ: batuan và Admin 4r dark no1 [Không rõ tên trên CPhuc là gì (thông cảm )]
Kết hợp + chỉnh sửa 2 code: miamor haha