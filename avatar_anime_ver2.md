**Tên tác giả: baivong**Tên sản phẩm: Avatar anime version 2

**Chức năng mới (so với version 1):**

  * Cài đặt đơn giản.
  * Bỏ chức năng mua bán.
  * Phân trang theo cụm 5 trang, mỗi lần chuyển trang chỉ tải 12 ảnh, tiện và nhẹ hơn.
  * Hiển thị item theo giới tính, nhưng vẫn dễ dàng chuyển đổi.
  * Có thể truy cập item theo parameter từ location search, sử dụng 2 parameter:
  * + item: với các giá trị phongnen|matkinh|trangsuc|tocnam|tocnu|aonam|aonu|quannam|quannu|thucung|canh, mặc định là phongnen
  * + get: với các giá trị số tùy theo số lượng trang, nếu vượt quá sẽ chuyển về trang 1
  * Bổ sung một số item mới, không có trên go.vn, tuy nhiên không được đầy đủ cho lắm.
  * Thống kê tình hình sử dụng, bao gồm tình hình truy cập, tạo và xóa avatar anime, lưu trữ trong mục Nhật ký
  * Tạo và chia sẽ mẫu dễ dàng, lưu trữ trong mục Đóng góp mẫu:
  * + Gửi mẫu: dùng để chia sẽ ngay trong diễn đàn, chỉ 1 Click có thể áp dụng ngay cài đặt của thành viên khác.
  * + Code: Có thể sử dụng ở bất cứ diễn đàn nào dùng mods này. Lấy code avatar anime, chép code này và dán vào ô nhập liệu trong mục Chia sẽ mẫu, sau đó nhấn Áp dụng.
  * Admin có thể xóa thông tin trong phần Thống kê dễ dàng chỉ với 1 Click


Demo:
http://www.fmvi.vn/h150-avatar-anime
http://www.fmvi.vn/h150-avatar-anime?item=tocnam&get=19
http://www.fmvi.vn/h150-avatar-anime?item=aonu&get=6


Hướng dẫn:
Bước 1: Tạo 2 tài khoản mới đặt tên lần lượt là **avatar1** và **avatar2** ghi nhớ lại số uid của 2 tài khoản này.
Ví dụ: ở fmvi **avatar1** là http://www.fmvi.vn/u1152 , như vậy uid sẽ là **1152**
Sau đó vào phần thông tin tài khoản, mục giao diện
> _DOMAIN/profile?mode=editprofile&page\_profil=preferences_
Allow visitor messages on my profile : Tất cả thành viên (All members)

Bước 2: ACP >> Modules >> Portal & Widgets >> Forum widgets management >> Create a widget ![http://illiweb.com/fa/admin/icones/ajouter.png](http://illiweb.com/fa/admin/icones/ajouter.png)
Tạo widget tên là **userID**
Làm như trong ảnh:
![http://i40.servimg.com/u/f40/17/70/81/78/userid10.png](http://i40.servimg.com/u/f40/17/70/81/78/userid10.png)

```


<span style="display:none" id="userID">{USERLINK}

Unknown end tag for &lt;/span&gt;



```
Mở column 3 (right) và đặt widget vừa tạo vào:
![http://i40.servimg.com/u/f40/17/70/81/78/widget10.png](http://i40.servimg.com/u/f40/17/70/81/78/widget10.png)
Bước 3: ACP >> Quản lý người dùng >> Profile >> Profile fields >>
Tạo một field mới tên là **avatar-data** và làm như trong ảnh: ![http://i40.servimg.com/u/f40/17/70/81/78/avadat10.png](http://i40.servimg.com/u/f40/17/70/81/78/avadat10.png)
Phần màu bắt buộc phải chọn một màu nào đó và phải khác với màu của các field khác, nên chọn màu trùng mới màu nền.

Bước 4: ACP >> Templates >> QLTT >> viewtopic\_body
1 - Tìm

```


{postrow.displayed.POSTER_AVATAR}

```
Thay bằng

```


<span class="fmviAA">{postrow.displayed.POSTER_AVATAR}

Unknown end tag for &lt;/span&gt;


```

Nếu không muốn thay nó vào avatar, bạn có thể đặt code

```


<span class="fmviAA">

Unknown end tag for &lt;/span&gt;


```

... tại nơi bạn muốn trong post.
2 - Tìm

```


{postrow.displayed.profile_field.LABEL}{postrow.displayed.profile_field.CONTENT}
```

Thay bằng

```


<span class="fmviTT">{postrow.displayed.profile_field.LABEL}<span class="fmviZZ">{postrow.displayed.profile_field.CONTENT}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



```
3 - Tìm

```


<!-- END postrow -->
```

Đặt bên dưới nó code sau:

```


<script type="text/javascript">
$(".fmviTT:contains('avatar-data')").each(function () {
$(this).parents(".post").find(".fmviAA").html('<object width="119" height="179" type="application/x-shockwave-flash" data="http://my.go.vn/swf/avatar2.swf" id="avatar_flash" style="visibility: visible"><param name="flashvars" value="itempath=http://farm01.gox.vn/avatar/store/avatar_part_item/&amp;browser=Other&amp;itemlist=' + $(this).find('.fmviZZ').text() + '" />

Unknown end tag for &lt;/object&gt;

');
$(this).remove()
})


Unknown end tag for &lt;/script&gt;


```


Bước 5: ACP >> Modules >> HTML & JAVASCRIPT >> HTML pages management >> Create new HTML page
Cho code sau vào và nhấn Xem thử (Preview):

```


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr" id="min-width" lang="vi" xml:lang="vi">
<head>
<title>HTML avatar anime

Unknown end tag for &lt;/title&gt;


<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<link rel="shortcut icon" type="image/x-icon" href="http://i48.servimg.com/u/f48/16/58/89/73/minilo10.png" />
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;


<script type="text/javascript">
jQuery(function () {
var n = 0,
time = setInterval(function () {
jQuery("#time").text(n++)
}, 1);
jQuery.get("/u1?change_temp=1", function (a) {
clearInterval(time);
var d = jQuery(a).find("dt:contains('avatar-data')").parent("dl").attr("id"),
e = jQuery(a).find("dt:contains('avatar-data') span").attr("style"),
a = jQuery(a).find("dt:contains('avatar-data')").next().find("input").attr("id"),
b = check(),
c = check2();
void 0 == a || null == b || null == c ? alert("L\u1ed7i! Kh\u00f4ng t\u00ecm \u0111\u01b0\u1ee3c th\u00f4ng tin c\u1ea7n thi\u1ebft\nTr\u00ecnh duy\u1ec7t Internet Explorer v\u00e0 Opera kh\u00f4ng ch\u1ea1y \u0111\u01b0\u1ee3c m\u00e3 n\u00e0y.") : jQuery("body").html('<h1>CSS

Unknown end tag for &lt;/h1&gt;

<h3>ACP >> Display >> Pictures and Colors >> Colors >> CSS Stylesheet

Unknown end tag for &lt;/h3&gt;

<div style="border: 1px solid rgb(221, 221, 221); padding: 10px;">/* X\u00f3a \u0111o\u1ea1n n\u00e0y n\u1ebfu d\u00f9ng right widget */<br>#container{margin-right: 0px ! important; float: none ! important;}<br>#content{margin-right: 0px ! important;}<br>#right{display: none;}<br>/* \u1ea8n avatar-data */<br>#ucp dt span[style="' + e + '"],#' + d + ",#" + a + '{display: none;}

Unknown end tag for &lt;/div&gt;

<h1>HTML

Unknown end tag for &lt;/h1&gt;

<h3>ACP >> Modules >> HTML & JAVASCRIPT >> HTML pages management >> Create new HTML page

Unknown end tag for &lt;/h3&gt;

<p><img alt="H\u01b0\u1edbng d\u1eabn" src="http://i40.servimg.com/u/f40/17/70/81/78/html10.png" />

Unknown end tag for &lt;/p&gt;

<div style="border: 1px solid rgb(221, 221, 221); position: relative; height: 400px;"><iframe src="http://www.fmvi.vn/h148-source-avatar-anime?fmvi1=' + a + "&fmvi2=" + b + "&fmvi3=" + c + '" style="width: 100%; position: absolute; border: 0px none; height: 400px;">

Unknown end tag for &lt;/iframe&gt;



Unknown end tag for &lt;/div&gt;

')
})
});

function check() {
var a = prompt("Nh\u1eadp s\u1ed1 uID c\u1ee7a avatar1:", "");
return isNaN(a) ? check() : a
}
function check2() {
var a = prompt("Nh\u1eadp s\u1ed1 uID c\u1ee7a avatar2:", "");
return isNaN(a) ? check2() : a
};


Unknown end tag for &lt;/script&gt;


<script type="text/javascript">
//<![CDATA[ var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-26966514-1"]);_gaq.push(["_trackPageview"]);(function(){var a=document.createElement("script");a.type="text/javascript";a.async=!0;a.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)})(); //]]>


Unknown end tag for &lt;/script&gt;




Unknown end tag for &lt;/head&gt;


<body>Đang kiểm tra, vui lòng chờ trong giây lát!
<br />Thời gian kiểm tra <span id="time">0

Unknown end tag for &lt;/span&gt;

 ms
<br />Trình duyệt Internet Explorer và Opera không chạy được mã này.

Unknown end tag for &lt;/body&gt;





Unknown end tag for &lt;/html&gt;


```

Code kiểm tra này chỉ chạy được trên Chrome và Firefox (ai biết cách fix thì nói để mình bổ sung), nếu bạn thấy thời gian kiểm tra chạy tức là code đang hoạt động, nếu nó đứng mãi số 0 là lỗi.
Sau khi chạy xong nó sẽ yêu cầu 2 thông số **uID** của tài khoản **avatar1** và **avatar2** đã tạo ở bước 1, bạn nhập lần lượt 2 thông tin đó vào.
Kết quả sẽ cho ra code **CSS** , bạn chép nó vào CSS của forum, nó có tác dụng ẩn column 3(right) và avatar-data. Nếu forum bạn dùng column 3(right) thì xóa phần đánh dấu đi.
Bạn lấy code   **HTML**    và thay vào trang HTML bạn vừa dùng chạy code ở bước 5 luôn, theo như hướng dẫn và lưu lại.


**Sau khi lưu xong lần 1, sẽ xuất hiện lỗi ký tự ở dòng 455 và 457, bạn chỉ việc chép lại mã HTML xuất hiện sau lần kiểm tra vừa rồi mà lưu lại lần thứ 2.**

Chúc thành công!

Lưu ý: Hoạt động của avatar anime phụ thuộc của host go.vn nên ảnh hay flash bị lỗi do bảo trì hay gì gì đấy... mình không kiểm soát được.
Khi sao chép bài viết sang forum khác không được dùng thẻ [hide](hide.md)
Không được sửa dòng copyright, không được thay link www.fmvi.vn trong mã nguồn. Các mod mình thiết kế sau này một khi mod chạy sẽ mất dòng copyright nên mong là các bạn không lấy lý do vì thẫm mỹ hay quảng cáo...
Mình rất hoan nghênh các bạn nghiên cứu và đóng góp về lỗi trong mod, mình chỉ là dân không chuyên nên code viết chưa đẹp chưa gọn cũng rất mong nhận được phản hồi của các bạn.

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr" id="min-width" lang="vi" xml:lang="vi">
<head>
<title>FMVI.VN AVATAR ANIME

Unknown end tag for &lt;/title&gt;


<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<meta http-equiv="content-script-type" content="text/javascript" />
<meta http-equiv="content-style-type" content="text/css" />
<link rel="shortcut icon" type="image/x-icon" href="http://i48.servimg.com/u/f48/16/58/89/73/minilo10.png" />
<meta name="title" content="Avatar anime" />
<link rel="search" type="application/opensearchdescription+xml" href="/improvedsearch.xml" title="Vietnamese Forumotion" />
<link rel="search" type="application/opensearchdescription+xml" href="http://www.forum-viet.com/vi/search/improvedsearch.xml" title="Search forums" />
<style type="text/css">
body {
font-family:'Lucida Grande', 'Helvetica Neue', sans-serif;
font-size:13px
}
body a {
text-decoration:none;
color:#0074FF;
font-family:tahoma;
font-size:12px;
padding:5px
}
body a img {
border: 0 none
}
#main {
height:350px;
left:50%;
margin-left:-425px;
position:relative;
top:50px;
width:842px
}
#item_data, #more, #tryco {
border:1px solid #15A6FF;
height:272px;
left:250px;
position:absolute;
top:42px;
width:570px;
padding:10px
}
#tem_tab, #more_tab {
position:absolute;
right:0;
top:8px
}
#pagination b, #tem_tab a.active, #more_tab a.active {
background-color:#15A6FF;
border:1px solid #15A6FF;
color:#FFF
}
#avatar {
position:absolute;
left:0;
top:42px;
border:1px solid #15A6FF;
padding:10px
}
#pagination {
position:absolute;
right:-30px;
top:105px;
width:30px
}
#pagination > a {
display:block;
padding:10px
}
#pagination b {
padding:5px 7px
}
#info {
background:url(http://i47.servimg.com/u/f47/17/47/88/95/profil11.png) no-repeat scroll 5px center #15A6FF;
border:1px solid #15A6FF;
color:#FFF;
left:0;
position:absolute;
top:2px;
padding:5px 10px 5px 30px
}
#fmvi51 {
background-image:url(http://i40.servimg.com/u/f40/17/70/81/78/0aaf8c10.png)
}
#fmvi66 {
background-image:url(http://i40.servimg.com/u/f40/17/70/81/78/ff6ae710.png)
}
#fmvi48 {
background-image:url(http://i40.servimg.com/u/f40/17/70/81/78/b6e50e10.png)
}
#fmvi49 {
background-image:url(http://i40.servimg.com/u/f40/17/70/81/78/cb891410.png)
}
#fmvi50 {
background-image:url(http://i40.servimg.com/u/f40/17/70/81/78/32f42510.png)
}
#fmvi58 {
background-image:url(http://i40.servimg.com/u/f40/17/70/81/78/74f6b810.png)
}
#fmvi57 {
background-image:url(http://i40.servimg.com/u/f40/17/70/81/78/f6b3ab10.png)
}
#fmvi47 {
background-image:url(http://i40.servimg.com/u/f40/17/70/81/78/0a0e0810.png)
}
.itemGovn img {
cursor:pointer;
height:46px;
width:44px;
border:1px solid #DDD
}
.itemGovn {
background-position:center center;
background-repeat:no-repeat;
border:1px solid #FFF;
height:46px;
text-align:center;
width:44px
}
#item_data img {
border:3px solid #DDD;
cursor:pointer;
height:126px;
width:85px;
margin:2px
}
#item_data img:hover, .itemGovn img:hover {
border-color:#15A6FF
}
#gender {
cursor:pointer;
left:250px;
position:absolute;
top:10px
}
.button {
color:#FFF;
cursor:pointer;
position:absolute;
top:350px;
left:100px;
background-color:#15A6FF;
border:1px solid #0189DD;
padding:5px 20px
}
.button.cancel {
background-color:#E6E6E6;
border-color:#DDD;
color:#000;
left:0
}
.button.change {
left:auto;
right:0
}
.button.save {
background-color:#FF6969;
display:none;
left:250px;
border-color:#BF5555
}
.button.code {
background-color:#7DB47C;
display:none;
left:360px;
border-color:#59AB58
}
.button:hover {
background-color:#4F4F4F!important;
border-color:#393939!important;
color:#FFF!important
}
#tiptip {
background-color:#DFF0D8;
background-image:url(http://r19.imgfast.net/users/1911/13/87/62/album/th/thongb10.png);
background-position:10px center;
background-repeat:no-repeat;
border:1px solid #9CBBA9;
color:#468847;
left:0;
position:absolute;
right:0;
text-shadow:0 1px 0 rgba(255, 255, 255, 0.5);
top:-40px;
padding:7px 40px
}
/* Tin tức */
.nhatky {
position:relative;
text-indent:0;
top:0;
z-index:50;
margin:0;
padding:0
}
.nhatky ul {
list-style:decimal outside none;
padding-left:40px;
margin:0
}
.nhatky p {
display:block;
font-size:14px;
padding:14px 10px
}
.nhatky li {
border-bottom:1px solid #DDD;
line-height:20px;
position:relative
}
.nhatky li:last-child {
border-bottom:medium none
}
.nhatky .ava {
background-color:#FFF;
border:1px solid #20B4F8;
border-radius:2px 2px 2px 2px;
display:none;
left:-50px;
position:absolute;
top:-10px
}
.nhatky .ava img {
height:40px;
width:40px
}
.delI {
position:absolute;
top:-2px;
display:none;
padding:4px
}
.nhatky li:hover .delI, .nhatky li:hover .ava {
display:block
}
.nhatky li:hover {
background-color:#E6E6E6
}
.loading {
color:#000;
font-weight:700;
text-align:center;
margin:20px 20px 30px
}
.nhatky blockquote {
display:none
}
.viewava {
background:url(http://r19.imgfast.net/users/1911/13/87/62/album/th/timkie10.png) no-repeat scroll left center transparent;
padding-left:20px
}
/* Mẫu */
#shop_data {
border:1px solid #ddd;
height:24px;
width:450px;
position:absolute;
left:0;
top:0
}
#change {
right:0;
position:absolute;
top:0;
left:auto
}
#mau {
position:relative;
height:230px;
top:40px;
margin:0;
padding:0
}



Unknown end tag for &lt;/style&gt;


<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;


<script type="text/javascript">
//<![CDATA[
var _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-26966514-1"]);
_gaq.push(["_trackPageview"]);
(function () {
var ga = document.createElement("script");
ga.type = "text/javascript";
ga.async = true;
ga.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(ga, s);
})(); //]]>


Unknown end tag for &lt;/script&gt;




Unknown end tag for &lt;/head&gt;


<body>
<div id="main">
<p id="tiptip">© 2012 FMvi (<a rel="nofollow" target="_blank" href="http://www.fmvi.vn">www.fmvi.vn

Unknown end tag for &lt;/a&gt;

)

Unknown end tag for &lt;/p&gt;


<p id="info">Đang tải dữ liệu...

Unknown end tag for &lt;/p&gt;


<div id="avatar">
<div id="shop" style="height: 272px; width: 218px;">
<table width="100%">
<tbody>
<tr>
<td alt="5" class="itemGovn" id="fmvi51">

Unknown end tag for &lt;/td&gt;


<td alt="8" class="itemGovn" id="fmvi66">

Unknown end tag for &lt;/td&gt;


<td alt="6" class="itemGovn" id="fmvi48">

Unknown end tag for &lt;/td&gt;


<td alt="3" class="itemGovn" id="fmvi49">

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td id="showAvatar" colspan="3" rowspan="4" style="background: url(http://i40.servimg.com/u/f40/17/70/81/78/fmvi11.png) no-repeat scroll center center transparent;" align="center">

Unknown end tag for &lt;/td&gt;


<td alt="2" class="itemGovn" id="fmvi50">

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td alt="7" class="itemGovn" id="fmvi58">

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td alt="0" class="itemGovn" id="fmvi57">

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td alt="1" class="itemGovn" id="fmvi47">

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div id="tab1">
<div id="gender">
<img onclick="gender()" style="display:none" alt="female" src="http://i40.servimg.com/u/f40/17/70/81/78/female10.png" />
<img onclick="gender()" alt="male" src="http://i40.servimg.com/u/f40/17/70/81/78/male10.png" />


Unknown end tag for &lt;/div&gt;


<div id="pagination">

Unknown end tag for &lt;/div&gt;


<p id="tem_tab">
<a onclick="shopfmvi(this.href);return false" id="phongnen" href="?item=phongnen&get=1">Phông nền

Unknown end tag for &lt;/a&gt;


<a onclick="shopfmvi(this.href);return false" id="matkinh" href="?item=matkinh&get=1">Mắt kính

Unknown end tag for &lt;/a&gt;


<a onclick="shopfmvi(this.href);return false" id="trangsuc" href="?item=trangsuc&get=1">Trang sức

Unknown end tag for &lt;/a&gt;


<span class="gender">
<a onclick="shopfmvi(this.href);return false" id="tocnam" href="?item=tocnam&get=1">Tóc nam

Unknown end tag for &lt;/a&gt;


<a style="display:none" onclick="shopfmvi(this.href);return false" id="tocnu" href="?item=tocnu&get=1">Tóc nữ

Unknown end tag for &lt;/a&gt;


<a onclick="shopfmvi(this.href);return false" id="aonam" href="?item=aonam&get=1">Áo nam

Unknown end tag for &lt;/a&gt;


<a style="display:none" onclick="shopfmvi(this.href);return false" id="aonu" href="?item=aonu&get=1">Áo nữ

Unknown end tag for &lt;/a&gt;


<a onclick="shopfmvi(this.href);return false" id="quannam" href="?item=quannam&get=1">Quần nam

Unknown end tag for &lt;/a&gt;


<a style="display:none" onclick="shopfmvi(this.href);return false" id="quannu" href="?item=quannu&get=1">Quần nữ

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/span&gt;


<a onclick="shopfmvi(this.href);return false" id="thucung" href="?item=thucung&get=1">Thú cưng

Unknown end tag for &lt;/a&gt;


<a onclick="shopfmvi(this.href);return false" id="canh" href="?item=canh&get=1">Cánh

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/p&gt;


<div id="item_data">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div id="tab2" style="display:none">
<p id="more_tab">
<a href="javascript:void(0)" onclick="more(jQuery(this))">Đóng góp mẫu

Unknown end tag for &lt;/a&gt;


<a href="javascript:void(0)" class="active" onclick="more(jQuery(this))">Nhật ký

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/p&gt;


<div id="more" style="overflow: auto;">
<div class="nhatky">
<ul>

Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;


<div style="display:none" class="pagination">

Unknown end tag for &lt;/div&gt;


<p class="loading" style="display:none">
<img alt="loading" src="http://i48.servimg.com/u/f48/16/58/89/73/ajax-l10.gif" /> Đang tải dữ liệu...


Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;


<div id="tryco" style="overflow: auto; display:none">
<div style="position: relative;">
<input id="shop_data" placeholder="Nhập code avatar và nhấn Áp dụng để xem" />
<span id="change" class="button" onclick="change()">Áp dụng

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;


<div id="mau">
<div class="nhatky">
<ul>

Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;


<div style="display:none" class="pagination">

Unknown end tag for &lt;/div&gt;


<p class="loading" style="display:none">
<img alt="loading" src="http://i48.servimg.com/u/f48/16/58/89/73/ajax-l10.gif" /> Đang tải dữ liệu...


Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<span class="button save" id="saveB" onclick="saveB()">Gửi mẫu

Unknown end tag for &lt;/span&gt;


<span class="button code" id="code" onclick="code()">Code

Unknown end tag for &lt;/span&gt;


<span id="buttonA" style="display:none">
<span class="button" id="submit" onclick="submit()">Xác nhận

Unknown end tag for &lt;/span&gt;


<span class="button cancel" id="cancel" onclick="cancel()">Hủy bỏ

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/span&gt;


<span class="button cancel" onclick="reload()" id="reload" style="display: none; left: 640px;">Cập nhật

Unknown end tag for &lt;/span&gt;


<span class="button change" onclick="other()" id="other">
<span>Thống kê

Unknown end tag for &lt;/span&gt;


<span style="display:none">Quay lại

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;


<p id="auth" style="display: none">

Unknown end tag for &lt;/p&gt;


<script type="text/javascript">
dtfmvi = "profile_field_13_5";
u1fmvi = "105";
u2fmvi = "106";
var phongnen = "57|26|11474|11475|11476|11477|11478|11480|11481|11482|11483|11484|11485|11486|11487|11488|11489|11490|11491|11492|11493|11494|11495|11496|11497|11498|11499|11500|11501|11502|11503|11504|11505|11506|11507|11508|11509|11510|11511|11512|11513|11514|11515|11516|11517|11518|11519|11520|11521|11522|11523|11524|11525|11526|11527|11528|11529|11530|11531|11532|11533|11534|11535|11536|11537|11538|11539|11540|11541|11542|11543|11544|11545|11546|11547|11548|11549|11550|11551|11552|11553|11554|11555|11556|11557|11558|11559|11560|11561|11562|11563|11564|11565|11566|11567|11568|11569|11570|11571|11572|11573|11574|11575|11576|11577|11578|11579|11580|11581|11582|11583|11584|11585|11586|11587|11588|11589|11590|11591|11592|11593|11594|11595|11596|11597|11598|11599|11600|11601|11602|11603|11604|11605|11606|11607|11608|11609|11610|11611|11612|11613|11614|11615|11616|11617|11618|11619|11620|11621|11622|11623|11624|11625|11626|11627|11628|11629|11630|11631|11632|11633|11634|11635|11636|11637|11638|11639|11640|11641|11642|11643|11644|11645|11646|11647|11648|11649|11650|11651|11652|11653|11654|11655|11656|11657|11658|11659|11660|11661|11662|11663|11664|11665|11666|11667|11668|11669|11670|11671|11672|11673|11674|11675|11676|11677|11678|11679|11680|11681|11682|11683|11684|11685|11686|11687|11688|11689|11690|11691|11692|11693|11694|11695|11696|11697|11698|11699|11700|11701|11702|11703|11704|11705|11706|11707|11708|11709|11710|11711|11712|11713|11714|11715|11716|11717|11718|11719|11720|11721|11722|11723|11724|11725|11726|11727|11728|11729|11730|11731|11732|11733|11734|11735|11736|11737|11738|11739|11740|11741|11742|11743|11744|11745|11746|11747|11748|11749|11750|11751|11752|11753|11754|11755|11756|11757|11758|11759|11760|11761|11762|11763|11764|11765|11766|11767|11768|11769|11770|11771|11772|11773|11774|13098|13099|13100",
matkinh = "51|1|11463|11464|11465|11466|11467|11468|11469|11470|11471|11472|11473",
trangsuc = "66|2|11438|11439|11440|11441|11442|11443|11444|11445|11446|11447|11448|11449|11450|11451|11452|11453|11454|11455|11456|11457|11458|11459",
tocnam = "48|23|13096|12263|12264|12265|12266|12267|12268|12269|12270|12271|12272|12273|12274|12275|12276|12277|12278|12279|12280|12281|12282|12283|12284|12285|12286|12287|12288|12289|12290|12291|12292|12293|12294|12295|12296|12297|12298|12299|12300|12301|12302|12303|12304|12305|12306|12307|12308|12309|12310|12311|12312|12313|12314|12315|12316|12317|12318|12319|12320|12321|12322|12323|12324|12325|12326|12327|12328|12329|12330|12331|12332|12333|12334|12335|12336|12337|12338|12339|12340|12341|12342|12343|12344|12345|12346|12347|12348|12349|12350|12351|12352|12353|12354|12355|12356|12357|12358|12359|12360|12361|12362|12363|12364|12365|12366|12367|12368|12369|12370|12371|12372|12373|12374|12375|12376|12377|12378|12379|12380|12381|12382|12383|12384|12385|12386|12387|12388|12389|12390|12391|12392|12393|12394|12395|12396|12397|12398|12399|12400|12401|12402|12403|12404|12405|12406|12407|12408|12409|12410|12411|12412|12413|12414|12415|12416|12417|12418|12419|12420|12421|12422|12423|12424|12871|12872|12873|12874|12875|12876|12877|12878|12879|12880|12881|12882|12883|12884|12885|12886|12887|12888|12889|12890|12891|12892|12893|12894|12895|12896|12897|12898|12899|12900|12901|12902|12903|12904|12905|12906|12907|12908|12909|12910|12911|12912|12913|12914|12915|12916|12917|12918|12919|12920|12921|12922|12923|12924|12925|12926|12927|12928|12929|12930|12931|12932|12933|12934|12935|12936|12937|12938|12939|12940|12941|12942|12943|12944|12945|12946|12947|12948|12949|12950|12951|12952|12953|12954|12955|12956|12957|12958|12959|12960|12961|12962|12963|12964|12965|12966|12967|12968|12969|12970|12971|12972|12973|12974|12975|12976",
tocnu = "48|24|13097|12426|12427|12428|12429|12430|12431|12432|12433|12434|12435|12436|12437|12438|12439|12440|12441|12442|12443|12444|12445|12446|12447|12448|12449|12450|12451|12452|12453|12454|12455|12456|12457|12458|12459|12460|12461|12462|12463|12464|12465|12466|12467|12468|12469|12470|12471|12472|12473|12474|12475|12476|12477|12478|12479|12480|12481|12482|12483|12484|12485|12486|12487|12488|12489|12490|12491|12492|12493|12494|12495|12496|12497|12498|12499|12500|12501|12502|12503|12504|12505|12506|12507|12508|12509|12510|12511|12512|12513|12514|12515|12516|12517|12518|12519|12520|12521|12522|12523|12524|12525|12526|12527|12528|12529|12530|12531|12532|12533|12534|12535|12536|12537|12538|12539|12540|12541|12542|12543|12544|12545|12546|12547|12548|12549|12550|12551|12552|12553|12554|12555|12556|12557|12558|12559|12560|12561|12562|12563|12564|12565|12566|12567|12568|12569|12570|12571|12572|12573|12574|12575|12576|12577|12578|12579|12580|12581|12582|12583|12584|12585|12586|12587|12588|12589|12590|12591|12592|12593|12753|12754|12755|12756|12757|12758|12759|12760|12761|12762|12763|12764|12765|12766|12767|12768|12769|12770|12771|12772|12773|12774|12775|12776|12777|12778|12779|12780|12781|12782|12783|12784|12785|12786|12787|12788|12789|12790|12791|12792|12793|12794|12795|12796|12797|12798|12799|12800|12801|12802|12803|12804|12805|12806|12807|12808|12809|12810|12811|12812|12813|12814|12815|12816|12817|12818|12819|12820|12821|12822|12823|12824|12825|12826|12827|12828|12829|12830|12831|12832|12833|12834|12835|12836|12837|12838|12839|12840|12841|12842|12843|12844|12845|12846|12847|12848|12849|12850|12851|12852|12853|12854|12855|12856|12857|12858|12859|12860|12861|12862|12863|12864|12865|12866|12867|12868|12869|12870",
aonam = "49|15|13094|10470|10471|10472|10473|10474|10475|10476|10477|10478|10479|10480|10481|10482|10483|10484|10485|10486|10487|10488|10489|10490|10492|10493|10494|10495|10496|10497|10498|10499|10500|10501|10502|10503|10504|10505|10506|10507|10512|10513|10514|10515|10516|10517|10518|10519|10520|10521|10522|10523|10524|10525|10526|10527|10528|10529|10530|10531|10532|10533|10534|10535|10880|10881|10882|10883|10884|10885|10886|10887|10888|10889|10890|10891|10892|10893|10894|10895|10896|10897|10898|10899|10900|10901|10902|10903|10904|10905|10906|10907|10908|10909|10910|10911|10912|10913|10914|10915|10916|10917|10918|10919|10920|10921|10922|10923|10924|10925|10926|10927|10928|10929|10930|10931|10932|10933|10934|10935|10936|10937|10938|10939|10940|10941|10942|10943|10944|10945|10947|10948|10949|10950|10951|10952|10953|10954|10955|10956|10957|10958|10959|10960|10961|10962|10963|10964|10965|10966|10967|10968|10969|10970|10971|10972|10973|10974|10975|10976|10977|10978|10979|10980|10981|10982|10983|10984|10985|10986|10987|10988|10989|10990|10991|10992|10993|10994",
aonu = "49|13|13095|11284|11285|11286|11287|11288|11289|11290|11291|11292|11293|11294|11295|11296|11297|11298|11299|11300|11301|11302|11303|11304|11305|11306|11307|11308|11309|11310|11311|11312|11313|11314|11315|11316|11317|11318|11319|11320|11321|11322|11323|11324|11325|11326|11327|11328|11329|11330|11331|11332|11333|11334|11335|11336|11337|11338|11339|11340|11341|11342|11343|11344|11345|11346|11347|11348|11349|11350|11351|11352|11353|11354|11355|11356|11357|11358|11359|11360|11361|11362|11363|11364|11365|11366|11367|11368|11369|11370|11371|11372|11373|11374|11375|11376|11377|11378|11379|11380|11381|11382|11383|11384|11385|11386|11387|11388|11389|11390|11391|11392|11393|11394|11395|11396|11397|11398|11399|11400|11401|11402|11403|11404|11405|11406|11407|11408|11409|11410|11411|11412|11413|11414|11415|11416|11417|11418|11419|11420|11421|11422|11423|11424|11425|11426|11427|11428|11429|11430|11431|11432|11433|11434|11435|11436|11437",
quannam = "50|13|11775|11776|11777|11778|11779|11780|11781|11782|11783|11784|11785|11786|11787|11788|11789|11790|11791|11792|11793|11794|11795|11796|11797|11798|11799|11800|11801|11802|11803|11804|11805|11806|11807|11808|11809|11810|11811|11812|11813|11814|11815|11816|11817|11818|11819|11820|11821|11822|11823|11824|11825|11826|11827|11828|11829|11830|11831|11832|11833|11834|11835|11836|11837|11838|11839|11840|11841|11842|11843|11844|11845|11846|11847|11848|11849|11850|11851|11852|11853|11854|11855|11856|11857|11858|11859|11860|11861|11862|11863|11864|11865|11866|11867|11868|11869|11870|11871|11872|11873|11874|11875|11876|11877|11878|11879|11880|11881|11882|11883|11884|11885|11886|11887|11888|11889|11890|11891|11892|11893|11894|11895|11896|11897|11898|11899|11900|11901|11902|11903|11904|11905|11906|11907|11908|11909|11910|11911|11912|11913|11914|11915|11916|11917|11918|11919|11920|11921|11922|11923|11924|11925|11926|11927|11928|11929",
quannu = "50|14|11930|11931|11932|11933|11934|11935|11936|11937|11938|11939|11940|11941|11942|11943|11944|11945|11946|11947|11948|11949|11950|11951|11952|11953|11954|11955|11956|11957|11958|11959|11960|11961|11962|11963|11964|11965|11966|11967|11968|11969|11970|11971|11972|11973|11974|11975|11976|11977|11978|11979|11980|11981|11982|11983|11984|11985|11986|11987|11988|11989|11990|11991|11992|11993|11994|11995|11996|11997|11998|11999|12000|12001|12002|12003|12004|12005|12006|12007|12008|12009|12010|12011|12012|12013|12014|12015|12016|12017|12018|12019|12020|12021|12022|12023|12024|12025|12026|12027|12028|12029|12030|12031|12032|12033|12034|12035|12036|12037|12038|12039|12040|12041|12042|12043|12044|12045|12046|12047|12048|12049|12050|12051|12052|12053|12054|12055|12056|12057|12058|12059|12060|12061|12062|12063|12064|12065|12066|12067|12068|12069|12070|12071|12072|12073|12074|12075|12076|12077|12078|12079|12080|12081|12082|12083|12084|12085|12086|12087",
thucung = "58|10|12145|12146|12147|12148|12150|12151|12152|12153|12154|12155|12156|12157|12158|12159|12160|12161|12162|12163|12164|12165|12166|12167|12168|12169|12170|12171|12172|12173|12174|12175|12176|12177|12178|12179|12180|12181|12182|12183|12184|12185|12186|12187|12188|12189|12190|12191|12192|12193|12194|12195|12196|12197|12198|12199|12200|12201|12202|12203|12204|12205|12206|12207|12208|12209|12210|12211|12212|12213|12214|12215|12216|12217|12218|12219|12220|12221|12222|12223|12224|12225|12226|12227|12228|12229|12230|12231|12232|12233|12234|12235|12236|12237|12238|12239|12240|12241|12242|12243|12244|12245|12246|12247|12248|12249|12250|12251|12252|12253|12254|12255|12256|12257|12258|12259|12260|12261|12262",
canh = "47|1|11460|11462";
jQuery("#auth")
.load("/privmsg?mode=post_profile&u=1 input[name='auth[]']", function () {
jQuery("#auth")
.text(jQuery("#auth input:first")
.val());
jQuery("#auth:empty")
.length && jQuery("#tiptip")
.text("B\u1ea1n c\u1ea7n \u0111\u0103ng nh\u1eadp \u0111\u1ec3 c\u00f3 th\u1ec3 s\u1eed d\u1ee5ng ch\u1ee9c n\u0103ng l\u01b0u tr\u1eef");
sendbot("Truy c\u00e2\u0323p [url=" + location.href + "]avatar anime[/url]", "avatar1", u1fmvi);
jQuery.get("/profile?mode=editprofile", function (a) {
2 == jQuery(a)
.find("input[name='profile_field_16_-7']:checked")
.val() && jQuery("#gender img, .gender a")
.toggle();
jQuery("#info")
.html('<span id="userN">' + jQuery(a)
.find("#userID")
.text() + '

Unknown end tag for &lt;/span&gt;

<span id="userD" style="display:none">' + jQuery(a)
.find("#userID a")
.attr("href")
.split("u=")[1] + '

Unknown end tag for &lt;/span&gt;

<span id="userM" style="display:none">' + jQuery(a)
.find("#qjump input[name='tid']")
.val() + "

Unknown end tag for &lt;/span&gt;

");
nhatky("/u" + u1fmvi + "wall", "#more");
nhatky("/u" + u2fmvi + "wall", "#tryco");
a = jQuery(a)
.find("#" + dtfmvi)
.val();
splititem(a);
shopfmvi(location.search)
})
});

function more(a) {
jQuery("#more_tab a")
.removeClass("active");
a.addClass("active");
jQuery("#more, #tryco")
.fadeToggle()
}

function code() {
prompt("Code avatar anime:", jQuery("#avatar_flash param")
.val()
.split("itemlist=")[1])
}

function saveB() {
var a = prompt("\u0110\u0103\u0323t t\u00ean cho m\u00e2\u0303u:", "Kh\u00f4ng t\u00ean");
if (null == a || "" == a) a = "Kh\u00f4ng t\u00ean";
sendbot("ta\u0323o m\u00e2\u0303u [spoiler=" + a + "]" + jQuery("#avatar_flash param")
.val()
.split("itemlist=")[1] + "[/spoiler]", "avatar2", u2fmvi);
jQuery("#tiptip")
.text("M\u00e2\u0303u " + a + " \u0111a\u0303 \u0111\u01b0\u01a1\u0323c g\u01b0\u0309i")
}

function submit() {
saveA(jQuery("#avatar_flash param")
.val()
.split("itemlist=")[1]);
jQuery("#tiptip")
.text("\u0110ang l\u01b0u...")
}

function cancel() {
jQuery("#showAvatar, .itemGovn")
.empty();
saveA("");
jQuery("#tiptip")
.text("\u0110a\u0303 xo\u0301a toa\u0300n b\u00f4\u0323 d\u01b0\u0303 li\u00ea\u0323u")
}

function other() {
jQuery("#tab1, #tab2, #reload")
.fadeToggle();
jQuery("#other span")
.toggle()
}

function reload() {
"none" != jQuery("#more")
.css("display") ? (jQuery("#more .nhatky ul")
.empty(), nhatky("/u" + u1fmvi + "wall", "#more")) : (jQuery("#mau .nhatky ul")
.empty(), nhatky("/u" + u2fmvi + "wall", "#tryco"));
jQuery("#tiptip")
.text("C\u00e2\u0323p nh\u00e2\u0323t th\u00f4\u0301ng k\u00ea")
}

function change() {
splititem(jQuery("#shop_data")
.val());
jQuery("#tiptip")
.text("A\u0301p du\u0323ng code avatar anime")
}

function gender() {
jQuery("#gender img, .gender a")
.toggle()
}

function shopfmvi(a) {
jQuery("#item_data,#pagination")
.empty();
var b, c, g, d;
b = GetParam("item", a);
"phongnen" == b ? c = phongnen : "matkinh" == b ? c = matkinh : "trangsuc" == b ? c = trangsuc : "tocnam" == b ? c = tocnam : "tocnu" == b ? c = tocnu : "aonam" == b ? c = aonam : "aonu" == b ? c = aonu : "quannam" == b ? c = quannam : "quannu" == b ? c = quannu : "thucung" == b ? c = thucung : "canh" == b ? c = canh : null == b && (b = "phongnen", c = phongnen);
if ("quannu" == b || "tocnu" == b || "aonu" == b) jQuery("#quannu, #tocnu, #aonu, #gender img:first")
.show(), jQuery("#quannam, #tocnam, #aonam, #gender img:last")
.hide();
jQuery("#tem_tab a")
.removeClass("active");
jQuery("#" + b)
.addClass("active");
g = c.split("|")[0];
d = eval(c.split("|")[1]);
a = eval(GetParam("get", a));
if (null == a || 1 > a || a > d) a = 1;
var f, e;
for (f = 0; 11 >= f; f++) {
e = c.split("|")[12 * (a - 1) + f + 2];
if (void 0 == e) break;
e = '<img onclick="setitem(jQuery(this))" alt="' + e + '" class="fmvi' + g + '"src="http://avatar.go.vn/avatar/store/avatar_part_item/' + g + "/" + e + '.gif" />';
jQuery("#item_data")
.append(e)
}
null == a ? 5 <= d ? page(b, 1, 5, 1) : page(b, 1, d, 1) : 5 > d ? page(b, 1, d, a) : 1 == a || 2 == a || 3 == a ? page(b, 1, 5, a) : a == d || a == d - 1 || a == d - 2 ? page(b, d - 4, d, a) : a > d || 1 > a ? page(b, 1, 5, 1) : page(b, a - 2, a + 2, a)
}

function delitem(a) {
a.remove();
showA()
}

function setitem(a) {
jQuery("#" + a.attr("class"))
.html('<img alt="' + a.attr("alt") + '" onclick="delitem(jQuery(this))" src="' + a.attr("src") + '" />');
showA()
}

function saveA(s) {
jQuery.post("/ajax_profile.forum?jsoncallback=?", {
id: dtfmvi.slice(dtfmvi.lastIndexOf("_") + 1),
user: jQuery("#userD").text(),
active: "1",
content: '[["' + dtfmvi + '", "' + s + '"]]',
tid: jQuery("#userM").text(),
}, function (e) {
"[object Object]" == e ? (jQuery("#tiptip").text("\u0110a\u0303 l\u01b0u tu\u0300y cho\u0323n cu\u0309a ba\u0323n"), sendbot("L\u01b0u avatar anime tha\u0300nh c\u00f4ng [quote]" + s + "[/quote]", "avatar1", u1fmvi)) : -1 == jQuery("#userD").text() ? jQuery("#tiptip").text("Ba\u0323n pha\u0309i \u0111\u0103ng nh\u00e2\u0323p m\u01a1\u0301i co\u0301 th\u00ea\u0309 s\u01b0\u0309 du\u0323ng ch\u01b0\u0301c n\u0103ng na\u0300y") : (jQuery("#tiptip").text("Kh\u00f4ng t\u00ecm th\u1ea5y d\u01b0\u0303 li\u00ea\u0323u"), sendbot("G\u0103\u0323p l\u00f4\u0303i khi l\u01b0u avatar anime", "avatar1", u1fmvi))
}, "json");
}

function showA() {
var b = "57," + jQuery("#fmvi57 img")
.attr("alt") + "|47," + jQuery("#fmvi47 img")
.attr("alt") + "|50," + jQuery("#fmvi50 img")
.attr("alt") + "|49," + jQuery("#fmvi49 img")
.attr("alt") + "|64,12636|51," + jQuery("#fmvi51 img")
.attr("alt") + "|48," + jQuery("#fmvi48 img")
.attr("alt") + "|58," + jQuery("#fmvi58 img")
.attr("alt") + "|66," + jQuery("#fmvi66 img")
.attr("alt");
jQuery("#showAvatar")
.html('<object width="119" height="179" type="application/x-shockwave-flash" data="http://my.go.vn/swf/avatar2.swf" id="avatar_flash" style="visibility: visible; border: 3px solid rgb(0, 149, 255); border-radius: 3px 3px 3px 3px;"><param name="flashvars" value="itempath=http://farm01.gox.vn/avatar/store/avatar_part_item/&browser=Other&itemlist=' + b + '">

Unknown end tag for &lt;/object&gt;

');
jQuery("#buttonA, #saveB, #code")
.fadeIn(1E3)
}

function splititem(b) {
"" != b ? (jQuery(".itemGovn")
.each(function () {
var a = jQuery(this)
.attr("alt"),
c = b.split("|")[a].split(",")[0],
a = b.split("|")[a].split(",")[1];
rK = "undefined" == a ? "" : '<img alt="' + a + '" onclick="delitem(jQuery(this))" src="http://avatar.go.vn/avatar/store/avatar_part_item/' + c + "/" + a + '.gif" />';
jQuery(this)
.html(rK)
}), jQuery("#showAvatar")
.html('<object width="119" height="179" type="application/x-shockwave-flash" data="http://my.go.vn/swf/avatar2.swf" id="avatar_flash" style="visibility: visible; border: 3px solid rgb(0, 149, 255); border-radius: 3px 3px 3px 3px;"><param name="flashvars" value="itempath=http://farm01.gox.vn/avatar/store/avatar_part_item/&browser=Other&itemlist=' + b + '">

Unknown end tag for &lt;/object&gt;

'), jQuery("#buttonA, #saveB, #code")
.fadeIn(1E3), jQuery("#tiptip")
.text("\u0110a\u0303 a\u0301p du\u0323ng tu\u0300y cho\u0323n cu\u0309a ba\u0323n")) : jQuery("#tiptip")
.text("Kh\u00f4ng co\u0301 d\u01b0\u0303 li\u00ea\u0323u")
}

function page(b, a, c, e) {
for (var d; a <= c; a++) d = a == e ? "<b>" + a + "

Unknown end tag for &lt;/b&gt;

" : '<a onclick="shopfmvi(this.href);return false" href="?item=' + b + "&get=" + a + '">' + a + "

Unknown end tag for &lt;/a&gt;

", jQuery("#pagination")
.append(d)
}

function GetParam(b, a) {
var c = RegExp(b + "=([^&]+)", "i")
.exec(a);
null == c && (c = RegExp(b + "=(.+)", "i")
.exec(a));
if (null == c) return null;
result = (c + "")
.split(",");
return result[1]
}

function nhatky(b, a) {
jQuery(a + " .loading")
.show();
jQuery.get(b, function (b) {
jQuery(a + " .loading")
.hide();
jQuery(a + " .pagination")
.html(jQuery(b)
.find(".pagination.top:first")
.html());
jQuery(b)
.find("#profile-advanced-details li.clearfix")
.each(function () {
var b = '<span class="ava"><img alt="avatar" src="' + jQuery(this)
.find(".avatar img")
.attr("src") + '" />

Unknown end tag for &lt;/span&gt;

',
c = jQuery(this)
.find(".message-header a")
.html(),
f = jQuery(this)
.find(".message-date")
.text(),
g = '<a target="_blank" style="right:5px" class="delI" href="' + jQuery(this)
.find(".avatar a")
.attr("href") + '"><img alt="profile" src="http://r19.imgfast.net/users/1911/13/87/62/album/th/andanh10.png" />

Unknown end tag for &lt;/a&gt;

',
h = "1" === jQuery("#userD")
.text() ? "<a style='right:35px' class='delI delD' href='" + jQuery(this)
.find(".message-footer a:last")
.attr("href") + "'><img alt='Xo\u0301a' src='http://i48.servimg.com/u/f48/16/58/89/73/trash_10.gif' />

Unknown end tag for &lt;/a&gt;

" : "";
jQuery(this)
.find(".message-text blockquote")
.length ? "" == jQuery(this)
.find(".message-text blockquote")
.text() ? jQuery(this)
.find(".message-text")
.text("\u0111\u00e3 x\u00f3a avatar anime") : jQuery(this)
.find(".message-text blockquote")
.replaceWith('(<a class="viewava" href="javascript:void(0)" onclick="splititem(\'' + jQuery(this)
.find(".message-text blockquote")
.text() + "')\">Xem m\u00e2\u0303u

Unknown end tag for &lt;/a&gt;

)") : jQuery(this)
.find(".message-text .codebox.spoiler")
.length && jQuery(this)
.find(".message-text .codebox.spoiler")
.replaceWith('(<a class="viewava" href="javascript:void(0)" onclick="splititem(\'' + jQuery(this)
.find(".message-text .spoiler_content")
.text() + "')\">" + jQuery(this)
.find(".message-text .codebox.spoiler dt")
.text()
.split(":")[0] + "

Unknown end tag for &lt;/a&gt;

)");
var i = jQuery(this)
.find(".message-text")
.html();
jQuery(a + " .nhatky ul")
.append("<li>" + b + c + " " + i + " va\u0300o lu\u0301c " + f + h + g + "

Unknown end tag for &lt;/li&gt;

")
});
jQuery(a)
.scroll(function () {
jQuery(a)
.scrollTop() >= jQuery(a + " .nhatky")
.height() - jQuery(a)
.height() - 50 && "none" == jQuery(a + " .loading")
.css("display") && nhatky(jQuery(a + " .pagination .sprite-arrow_prosilver_right")
.parent()
.attr("href"), a)
});
jQuery(".delD")
.click(function () {
var a = jQuery(this);
jQuery.post(a.attr("href"), {
tid: jQuery("#userM")
.text(),
confirm: "Co\u0301"
}, function () {
a.parents("li")
.remove()
});
return !1
})
})
}

function sendbot(b, a, c) {
jQuery.post("/privmsg", {
subject: "[Tin nh\u1eafn t\u1ef1 \u0111\u1ed9ng]",
message: b,
username: a,
"auth[]": jQuery("#auth")
.text(),
u: c,
mode: "post_profile",
folder: "profile",
post: "Send"
})
}

Unknown end tag for &lt;/script&gt;




Unknown end tag for &lt;/body&gt;





Unknown end tag for &lt;/html&gt;

```