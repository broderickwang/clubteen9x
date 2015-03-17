Như đã hứa, khi hoàn thành cái này mình sẽ share đầy đủ
Hôm nay mình tương đối rảnh Share Thông điệp yêu thương đầu tiên của Invision cho mọi người
Style đơn giản thôi Style Vbb 4.x

(**) Đôi lời từ tác giả: Đây là bài hướg dẫn chi tiết cho cả new mem.
Nên bài hướg dẫn chi tiết trên 1 style.
Nếu ai muốn style khác, có thể post vào box Thắc mắc Code, TUT,..., có thời gian mình sẽ làm giúp**

Thông điệp yêu thương tự động cập nhật cho Invision.
By: miamor.


Demo: http://invision.chinhphuc.info


Bước 1: Tạo 1 chuyên mục mới:
Choose the kind of forum you want : Blog
Tên diễn đàn : Thông điệp yêu thương.

Bước 2: Lấy mã số box Thông điệp yêu thương:
Ra ngoài diễn đàn, tìm chuyên mục Thông điệp yêu thương vừa tạo ở bước 1,
click vào đó, sẽ dẫn đến đường link dạng http://link4rbạn/f[...]-forum.
Ví dụ link của 4r mình là: http://invision.chinhphuc.info/f42-forum
thì số 42 là mã số box Thông điệp yêu thương của mình.

Bước 3: Tạo phần hiển thị Thông điệp yêu thương:
Vào widget, tạo 1 widget mới:

```


<div class="lovemes"><br><table cellpadding="0" cellspacing="0" style="border:1px solid #ccc;height:55px;">
<tr>
<td width="25%" valign="middle" class="ifcmess">
<a title="Click để gửi thông điệp" href="/h89-"><img src="http://i34.servimg.com/u/f34/15/64/85/86/tdyt11.png" border="0">
<img title="Love Telling" src="http://i34.servimg.com/u/f34/15/64/85/86/tdyt_s11.png" alt="Love Telling" border="0">

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/td&gt;


<td width="75%">
<marquee width="800px" behavior="scroll" onmouseover="this.stop()"
onmouseout="this.start()" scrollamount="3" direction="left">
<div class="ifcmes">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/marquee&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;





Unknown end tag for &lt;/table&gt;

<style>.ifcmess {white-space:nowrap;}

Unknown end tag for &lt;/style&gt;



Unknown end tag for &lt;/div&gt;



```
Bước 4: Tạo javascript hiển thị thông điệp yêu thương:
[Phần này đã được ẩn, bạn phải reply để thấy được nội dung trong phần này]
Tạo 1 file javascript mới:

> Title: Thông điệp yêu thương.
> Placement: In all the pages.
> Content:

Thay số 42 trong code trên bằng mã số box Thông điệp yêu thương đã lấy ở Bước 2.
Thay số 8 trong code trên bằng số Thông điệp yêu thương bạn muốn hiện.
[Để thông điệp yêu thương hiển thị đẹp, bạn cần gửi từng đấy thông điệp yêu thương.]

Bước 5: Tạo trang HTML smiles cho phần gửi thông điệp:
Vào link http://link4rbạn/smilies.forum?action=smilies&js=no&mode=smilies_frame
Ctrl+U >> Copy bắt đầu từ đoạn

```


<div class="smiley-element">
```
đến hết.
Dán đoạn đó vào 1 trang HTML mới, xóa đoạn

```


<div class="clear">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/body&gt;



Unknown end tag for &lt;/html&gt;


```
ở cuối đi.
Sau đó, tìm các chỗ emoticonp xóa hết chữ p ở cuối đi.

Bước 6: Lấy mã số trang HTML hình vui:
Trang HTML này của bạn sẽ có dạng http://link4rbạn/h[...]-page.
Ví dụ link trang đó của mình là http://invision.chinhphuc.info/h90-page
thì số 90 là mã số trang HTML trang hình vui của mình.

Bước 7: Tạo trang HTML gửi Thông điệp yêu thương:
[Phần này đã được ẩn, bạn phải reply để thấy được nội dung trong phần này]
Tạo một trang HTML mới với nội dung như sau: Thay các số 42 trong code trên bằng mã số box Thông điệp yêu thương đã lấy ở Bước 2.
Thay số 90 ở chỗ url:"/h90-" bằng mã số trang HTML hình vui đã lấy ở Bước 6.
Thay đoạn link http://invision.chinhphuc.info/forum trong code trên bằng link 4r bạn.

Bước 8: Lấy mã số trang HTML gửi Thông điệp yêu thương:
Trang HTML ở Bước 7 của bạn sẽ có dạng http://link4rbạn/h[...]-page.
Ví dụ link trang đó của mình là http://invision.chinhphuc.info/h89-page
thì số 89 là mã số trang HTML gửi Thông điệp yêu thương của mình.

Bước 9: Tùy chỉnh lần cuối:
Trong code ở Bước 3 có đoạn như thế này href="/h89-", bạn thay số 89 bằng mã số trang HTML gửi Thông điệp yêu thương đã lấy ở Bước 8.

Bước 10: Hưởng thụ thành quả và báo xấu:
Bạn ra 4r bạn và thử gửi Thông điệp yêu thương.
Nếu có lỗi xảy ra, vui lòng thắc mắc tại topic này.
Nhận mọi loại gạch, đá, chai, lọ,... tại topic này Lo lắng
Chỉ nhận các loại gạch, đá có văn hóa, tôn trọng tác giả k có gì để nói

----- Hết -----

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" dir="ltr" lang="vi" xml:lang="vi"   ><head><title>Send LOVE mes

Unknown end tag for &lt;/title&gt;

<meta http-equiv="content-type" content="text/html; charset=utf-8" /><meta http-equiv="content-script-type" content="text/javascript" /><meta http-equiv="content-style-type" content="text/css" /><link rel="shortcut icon" type="image/x-icon" href="http://illiweb.com/fa/favicon/write.ico" /><meta name="title" content="Send LOVE mes" /><link rel="stylesheet" href="/249-ltr.css" type="text/css" /><link rel="search" type="application/opensearchdescription+xml" href="/improvedsearch.xml" title="Invision Forumotion Community - Cộng đồng phát triển Invision....." /><link rel="search" type="application/opensearchdescription+xml" href="http://www.forum-viet.com/vi/search/improvedsearch.xml" title="Search forums" /><script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;

<script src="http://illiweb.com/rsc/36/frm/lang/vi.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;

<script type="text/javascript">//<![CDATA[
$(document).ready(function(){});//]]>

Unknown end tag for &lt;/script&gt;

<script src="http://illiweb.com/rsc/36/frm/invision.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;

<script src="/99285.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;



Unknown end tag for &lt;/head&gt;

<body><div class="minwidth_IE"><div class="layout_IE"><div class="container_IE"><div id="ipbwrapper"><a id="top" name="top" accesskey="t">

Unknown end tag for &lt;/a&gt;

<div id="logostrip" class="clearfix"><a href="/" id="logo" title="Invision Forumotion Community - Cộng đồng phát triển Invision....."><img src="http://i34.servimg.com/u/f34/15/64/85/86/footer11.png" alt="Invision Forumotion Community - Cộng đồng phát triển Invision....." />

Unknown end tag for &lt;/a&gt;

<p id="site-desc"><img src=http://www.completevb.com/demovb4/images/styles/OrangeTheme/style/bannerBox.gif></p></div><div id="submenu"><ul><li class="clearfix"><a class="mainmenu" href="/"><img id="i_icon_mini_index" src="http://illiweb.com/fa/empty.gif" border="0" height="13" hspace="2" alt="Index" title="Index" />Index

Unknown end tag for &lt;/a&gt;

 &nbsp;<a class="mainmenu" href="/calendar"><img id="i_icon_mini_calendar" src="http://illiweb.com/fa/empty.gif" border="0" height="13" hspace="2" alt="Calendar" title="Calendar" />Calendar

Unknown end tag for &lt;/a&gt;

 &nbsp;<a class="mainmenu" href="/gallery/index.htm"><img id="i_icon_mini_gallery" src="http://illiweb.com/fa/empty.gif" border="0" height="13" hspace="2" alt="Gallery" title="Gallery" />Gallery

Unknown end tag for &lt;/a&gt;

 &nbsp;<a class="mainmenu" href="/faq"><img id="i_icon_mini_faq" src="http://illiweb.com/fa/empty.gif" border="0" height="13" hspace="2" alt="Trợ giúp" title="Trợ giúp" />Trợ giúp

Unknown end tag for &lt;/a&gt;

 &nbsp;<a class="mainmenu" href="/search" onclick="showhide(document.getElementById('search_menu')); return false;"><img id="i_icon_mini_search" src="http://illiweb.com/fa/empty.gif" border="0" height="13" hspace="2" alt="Tìm kiếm" title="Tìm kiếm" />Tìm kiếm

Unknown end tag for &lt;/a&gt;

 &nbsp;<script type="text/javascript">//<![CDATA[
var url_search = '/search';
insert_search_menu();//]]>


Unknown end tag for &lt;/script&gt;

<a class="mainmenu" href="/memberlist" rel="nofollow"><img id="i_icon_mini_members" src="http://illiweb.com/fa/empty.gif" border="0" height="13" hspace="2" alt="Thành viên" title="Thành viên" />Thành viên

Unknown end tag for &lt;/a&gt;

 &nbsp;<a class="mainmenu" href="/groups"><img id="i_icon_mini_groups" src="http://illiweb.com/fa/empty.gif" border="0" height="13" hspace="2" alt="Nhóm" title="Nhóm" />Nhóm

Unknown end tag for &lt;/a&gt;

 &nbsp;<a class="mainmenu" href="/h72-Shop-Level" target="_blank">Shop Level

Unknown end tag for &lt;/a&gt;

 &nbsp;<a class="mainmenu" href="/register" rel="nofollow"><img id="i_icon_mini_register" src="http://illiweb.com/fa/empty.gif" border="0" height="13" hspace="2" alt="Đăng ký" title="Đăng ký" />Đăng ký

Unknown end tag for &lt;/a&gt;

 &nbsp;<a class="mainmenu" href="/login" rel="nofollow"><img id="i_icon_mini_login" src="http://illiweb.com/fa/empty.gif" border="0" height="13" hspace="2" alt="Đăng Nhập" title="Đăng Nhập" />Đăng Nhập

Unknown end tag for &lt;/a&gt;

 &nbsp;

Unknown end tag for &lt;/li&gt;



Unknown end tag for &lt;/ul&gt;



Unknown end tag for &lt;/div&gt;

<div id="userlinks" class="not-connected clearfix"><span class="guest">You are not connected.

Unknown end tag for &lt;/span&gt;

 <span>Please <a href="/login?connexion"> login 

Unknown end tag for &lt;/a&gt;

 or <a href="/register"> register 

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;

<div id="content-container"><div id="outer-wrapper"><div id="wrapper"><div id="container"><div id="content"><div id="left"><div class="module borderwrap"><div class="maintitle"><h3>Top posters

Unknown end tag for &lt;/h3&gt;



Unknown end tag for &lt;/div&gt;

<div class="box-content"><table summary="Top posters" width="100%"><tr><td class="row2" nowrap="nowrap" width="1"><a href="/u5" title="miamor"><span style="color:#FA0000"><strong>miamor

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;

<td class="row2" nowrap="nowrap" title="407 Số bài - 37%"><table title="407 Số bài - 37%" border="0" cellspacing="0" cellpadding="0" width="100%" style="table-layout:fixed"><tbody><tr><td width="4px"><img src="http://illiweb.com/fa/invision/bar_left.gif" width="4px"  height="12" alt="" />

Unknown end tag for &lt;/td&gt;

<td width="100%" style="overflow:hidden;"><img src="http://illiweb.com/fa/invision/bar.gif" width="100%" height="12" alt="" />

Unknown end tag for &lt;/td&gt;

<td width="4px"><img src="http://illiweb.com/fa/invision/bar_right.gif" width="4px" height="12" alt="" />

Unknown end tag for &lt;/td&gt;

<td>&nbsp;

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td class="row1" nowrap="nowrap" width="1"><a href="/u6" title="Ruby"><span style="color:#BE70EB"><strong>Ruby

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;

<td class="row1" nowrap="nowrap" title="211 Số bài - 19%"><table title="211 Số bài - 19%" border="0" cellspacing="0" cellpadding="0" width="100%" style="table-layout:fixed"><tbody><tr><td width="4px"><img src="http://illiweb.com/fa/invision/bar_left.gif" width="4px"  height="12" alt="" />

Unknown end tag for &lt;/td&gt;

<td width="52%" style="overflow:hidden;"><img src="http://illiweb.com/fa/invision/bar.gif" width="100%" height="12" alt="" />

Unknown end tag for &lt;/td&gt;

<td width="4px"><img src="http://illiweb.com/fa/invision/bar_right.gif" width="4px" height="12" alt="" />

Unknown end tag for &lt;/td&gt;

<td>&nbsp;

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td class="row2" nowrap="nowrap" width="1"><a href="/u44" title="tuancfno05">tuancfno05

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;

<td class="row2" nowrap="nowrap" title="99 Số bài - 9%"><table title="99 Số bài - 9%" border="0" cellspacing="0" cellpadding="0" width="100%" style="table-layout:fixed"><tbody><tr><td width="4px"><img src="http://illiweb.com/fa/invision/bar_left.gif" width="4px"  height="12" alt="" />

Unknown end tag for &lt;/td&gt;

<td width="24%" style="overflow:hidden;"><img src="http://illiweb.com/fa/invision/bar.gif" width="100%" height="12" alt="" />

Unknown end tag for &lt;/td&gt;

<td width="4px"><img src="http://illiweb.com/fa/invision/bar_right.gif" width="4px" height="12" alt="" />

Unknown end tag for &lt;/td&gt;

<td>&nbsp;

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td class="row1" nowrap="nowrap" width="1"><a href="/u8" title="JoOnG">JoOnG

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;

<td class="row1" nowrap="nowrap" title="77 Số bài - 7%"><table title="77 Số bài - 7%" border="0" cellspacing="0" cellpadding="0" width="100%" style="table-layout:fixed"><tbody><tr><td width="4px"><img src="http://illiweb.com/fa/invision/bar_left.gif" width="4px"  height="12" alt="" />

Unknown end tag for &lt;/td&gt;

<td width="19%" style="overflow:hidden;"><img src="http://illiweb.com/fa/invision/bar.gif" width="100%" height="12" alt="" />

Unknown end tag for &lt;/td&gt;

<td width="4px"><img src="http://illiweb.com/fa/invision/bar_right.gif" width="4px" height="12" alt="" />

Unknown end tag for &lt;/td&gt;

<td>&nbsp;

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td class="row2" nowrap="nowrap" width="1"><a href="/u18" title="Cẩu Vương"><span style="color:#FA5757"><strong>Cẩu Vương

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;

<td class="row2" nowrap="nowrap" title="73 Số bài - 7%"><table title="73 Số bài - 7%" border="0" cellspacing="0" cellpadding="0" width="100%" style="table-layout:fixed"><tbody><tr><td width="4px"><img src="http://illiweb.com/fa/invision/bar_left.gif" width="4px"  height="12" alt="" />

Unknown end tag for &lt;/td&gt;

<td width="18%" style="overflow:hidden;"><img src="http://illiweb.com/fa/invision/bar.gif" width="100%" height="12" alt="" />

Unknown end tag for &lt;/td&gt;

<td width="4px"><img src="http://illiweb.com/fa/invision/bar_right.gif" width="4px" height="12" alt="" />

Unknown end tag for &lt;/td&gt;

<td>&nbsp;

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td class="row1" nowrap="nowrap" width="1"><a href="/u60" title="Sophie_Luv_Tae">Sophie_Luv_Tae

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;

<td class="row1" nowrap="nowrap" title="57 Số bài - 5%"><table title="57 Số bài - 5%" border="0" cellspacing="0" cellpadding="0" width="100%" style="table-layout:fixed"><tbody><tr><td width="4px"><img src="http://illiweb.com/fa/invision/bar_left.gif" width="4px"  height="12" alt="" />

Unknown end tag for &lt;/td&gt;

<td width="14%" style="overflow:hidden;"><img src="http://illiweb.com/fa/invision/bar.gif" width="100%" height="12" alt="" />

Unknown end tag for &lt;/td&gt;

<td width="4px"><img src="http://illiweb.com/fa/invision/bar_right.gif" width="4px" height="12" alt="" />

Unknown end tag for &lt;/td&gt;

<td>&nbsp;

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td class="row2" nowrap="nowrap" width="1"><a href="/u7" title="IronCat">IronCat

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;

<td class="row2" nowrap="nowrap" title="44 Số bài - 4%"><table title="44 Số bài - 4%" border="0" cellspacing="0" cellpadding="0" width="100%" style="table-layout:fixed"><tbody><tr><td width="4px"><img src="http://illiweb.com/fa/invision/bar_left.gif" width="4px"  height="12" alt="" />

Unknown end tag for &lt;/td&gt;

<td width="11%" style="overflow:hidden;"><img src="http://illiweb.com/fa/invision/bar.gif" width="100%" height="12" alt="" />

Unknown end tag for &lt;/td&gt;

<td width="4px"><img src="http://illiweb.com/fa/invision/bar_right.gif" width="4px" height="12" alt="" />

Unknown end tag for &lt;/td&gt;

<td>&nbsp;

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td class="row1" nowrap="nowrap" width="1"><a href="/u3" title="prince2121">prince2121

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;

<td class="row1" nowrap="nowrap" title="41 Số bài - 4%"><table title="41 Số bài - 4%" border="0" cellspacing="0" cellpadding="0" width="100%" style="table-layout:fixed"><tbody><tr><td width="4px"><img src="http://illiweb.com/fa/invision/bar_left.gif" width="4px"  height="12" alt="" />

Unknown end tag for &lt;/td&gt;

<td width="10%" style="overflow:hidden;"><img src="http://illiweb.com/fa/invision/bar.gif" width="100%" height="12" alt="" />

Unknown end tag for &lt;/td&gt;

<td width="4px"><img src="http://illiweb.com/fa/invision/bar_right.gif" width="4px" height="12" alt="" />

Unknown end tag for &lt;/td&gt;

<td>&nbsp;

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td class="row2" nowrap="nowrap" width="1"><a href="/u11" title="AnHung">AnHung

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;

<td class="row2" nowrap="nowrap" title="41 Số bài - 4%"><table title="41 Số bài - 4%" border="0" cellspacing="0" cellpadding="0" width="100%" style="table-layout:fixed"><tbody><tr><td width="4px"><img src="http://illiweb.com/fa/invision/bar_left.gif" width="4px"  height="12" alt="" />

Unknown end tag for &lt;/td&gt;

<td width="10%" style="overflow:hidden;"><img src="http://illiweb.com/fa/invision/bar.gif" width="100%" height="12" alt="" />

Unknown end tag for &lt;/td&gt;

<td width="4px"><img src="http://illiweb.com/fa/invision/bar_right.gif" width="4px" height="12" alt="" />

Unknown end tag for &lt;/td&gt;

<td>&nbsp;

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td class="row1" nowrap="nowrap" width="1"><a href="/u2" title="ngauhungbatchot">ngauhungbatchot

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;

<td class="row1" nowrap="nowrap" title="41 Số bài - 4%"><table title="41 Số bài - 4%" border="0" cellspacing="0" cellpadding="0" width="100%" style="table-layout:fixed"><tbody><tr><td width="4px"><img src="http://illiweb.com/fa/invision/bar_left.gif" width="4px"  height="12" alt="" />

Unknown end tag for &lt;/td&gt;

<td width="10%" style="overflow:hidden;"><img src="http://illiweb.com/fa/invision/bar.gif" width="100%" height="12" alt="" />

Unknown end tag for &lt;/td&gt;

<td width="4px"><img src="http://illiweb.com/fa/invision/bar_right.gif" width="4px" height="12" alt="" />

Unknown end tag for &lt;/td&gt;

<td>&nbsp;

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div style="height:4px">

Unknown end tag for &lt;/div&gt;

<div class="module borderwrap"><div class="maintitle"><h3>Latest topics

Unknown end tag for &lt;/h3&gt;



Unknown end tag for &lt;/div&gt;

<div class="box-content"><table border="0" class="lbb" cellpadding="0" cellspacing="0" width="100%">
<tr class="baiguicuoi" style="display: table-row; ">
<td width="100%" valign="top" colspan="2">
<div id="name-lastpost"><span class="lp2">Tiêu đề

Unknown end tag for &lt;/span&gt;

<span class="lp4">Gửi cuối

Unknown end tag for &lt;/span&gt;

<span class="lp6">Bình

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
<td><div class="op-last-bottom op-last-bottom2" onclick="Op2Last('/search?search_author=*_*&search_keywords')" title="Reload Last Topics"><img src="http://i43.servimg.com/u/f43/16/03/04/56/reload11.png" width="16px" height="16px"> F5 

Unknown end tag for &lt;/div&gt;



<div id="trang-lastpost">
<div class="TrangTruoc" title="Tải dữ liệu trang trước">

Unknown end tag for &lt;/div&gt;

<div class="TrangHT"><input id="SoTrangLT" value="1" maxlength="2" title="Trang hiện tại" />

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

<option tag="foro" value="c1">|--Thông báo của ban điều hành

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f1">|&nbsp;&nbsp;&nbsp;|--Thông Báo Mới Từ BQT Diễn Đàn

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f3">|&nbsp;&nbsp;&nbsp;|--Yêu cầu, thắc mắc, góp ý, hỗ trợ

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f4">|&nbsp;&nbsp;&nbsp;|--Black list

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f32">|&nbsp;&nbsp;&nbsp;|--Khu vực của BQT

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f35">|&nbsp;&nbsp;&nbsp;|--Designers Only

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f37">|&nbsp;&nbsp;&nbsp;|--Blog

Unknown end tag for &lt;/option&gt;

<option value="-1">|&nbsp;&nbsp;&nbsp;

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="c2">|--Khu vực chia sẻ

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f5">|&nbsp;&nbsp;&nbsp;|--Căn bản về Invision

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f7">|&nbsp;&nbsp;&nbsp;|--Invision Skins

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f8">|&nbsp;&nbsp;&nbsp;|--Invision Mods

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f9">|&nbsp;&nbsp;&nbsp;|--Invision TUTs

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f6">|&nbsp;&nbsp;&nbsp;|--HTML Page

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f44">|&nbsp;&nbsp;&nbsp;|--Show Room

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f10">|&nbsp;&nbsp;&nbsp;|--Đồ họa

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f11">|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|--Emoticons

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f12">|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|--Banners

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f13">|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|--Avatar

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f33">|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|--Signatures

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f14">|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|--Wallpapers

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f15">|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|--Buttons

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f16">|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|--Icons

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f17">|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|--Rank

Unknown end tag for &lt;/option&gt;

<option value="-1">|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f48">|&nbsp;&nbsp;&nbsp;|--Ý tưởng mới

Unknown end tag for &lt;/option&gt;

<option value="-1">|&nbsp;&nbsp;&nbsp;

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="c3">|--Khu vực hỗ trợ

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f18">|&nbsp;&nbsp;&nbsp;|--Thắc mắc Code, TUT,...

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f47">|&nbsp;&nbsp;&nbsp;|--Nhờ Convert Code, TUT

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f34">|&nbsp;&nbsp;&nbsp;|--Yêu cầu Skin...

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f19">|&nbsp;&nbsp;&nbsp;|--Nhờ giúp đỡ đồ họa...

Unknown end tag for &lt;/option&gt;

<option value="-1">|&nbsp;&nbsp;&nbsp;

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="c7">|--Giao lưu các forum

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f45">|&nbsp;&nbsp;&nbsp;|--Forum Promotion

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f46">|&nbsp;&nbsp;&nbsp;|--Forum Reviews

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f31">|&nbsp;&nbsp;&nbsp;|--Liên kết bạn bè

Unknown end tag for &lt;/option&gt;

<option value="-1">|&nbsp;&nbsp;&nbsp;

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="c4">|--Góc Thành Viên

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f20">|&nbsp;&nbsp;&nbsp;|--Làm quen, kết bạn

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f21">|&nbsp;&nbsp;&nbsp;|--Sự kiện &amp; Hoạt động

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f22">|&nbsp;&nbsp;&nbsp;|--Những dòng cảm xúc

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f23">|&nbsp;&nbsp;&nbsp;|--Quán nước vỉa hè

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f24">|&nbsp;&nbsp;&nbsp;|--Phỏng vấn Thành Viên

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f29">|&nbsp;&nbsp;&nbsp;|--Quà tặng âm nhạc

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f42">|&nbsp;&nbsp;&nbsp;|--Thông điệp yêu thương

Unknown end tag for &lt;/option&gt;

<option value="-1">|&nbsp;&nbsp;&nbsp;

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="c5">|--Thư giãn, giải trí,.... các vấn đề khác

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f25">|&nbsp;&nbsp;&nbsp;|--Thể thao

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f26">|&nbsp;&nbsp;&nbsp;|--Thế giới của sao....

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f27">|&nbsp;&nbsp;&nbsp;|--Thế giới Truyện....

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f28">|&nbsp;&nbsp;&nbsp;|--Đôi chút học tập.....

Unknown end tag for &lt;/option&gt;

<option value="-1">|&nbsp;&nbsp;&nbsp;

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="c6">|--Others

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f30">|&nbsp;&nbsp;&nbsp;|--Quảng cáo

Unknown end tag for &lt;/option&gt;

<option tag="foro" value="f2">|&nbsp;&nbsp;&nbsp;|--Basket

Unknown end tag for &lt;/option&gt;




Unknown end tag for &lt;/select&gt;



<div id="dl-lastpost">

Unknown end tag for &lt;/div&gt;






Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;






<script type="text/javascript">jQuery(function (){jQuery(".slide_like").hover(function(){jQuery(".slide_like").stop(true, false).animate({right:"0"},"medium");},function(){jQuery(".slide_like").stop(true, false).animate({right:"-205"},"medium");},500);return false;});

Unknown end tag for &lt;/script&gt;

<div class="slide_like"> <div style="color: rgb(255, 255, 255); padding: 8px 5px 0pt 50px;"><div class="FB_Loader">

Unknown end tag for &lt;/div&gt;

<span>


<iframe class="fb_ltr" src="https://www.facebook.com/plugins/likebox.php?api_key=113869198637480&amp;channel=https%3A%2F%2Fs-static.ak.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D10%23cb%3Df1fbf0ffb%26origin%3Dhttps%253A%252F%252Fdevelopers.facebook.com%252Ff30fcbacc%26domain%3Ddevelopers.facebook.com%26relation%3Dparent.parent&amp;colorscheme=light&amp;header=true&amp;height=350&amp;href=https%3A%2F%2Fwww.facebook.com%2Fifcommunity&amp;locale=en_US&amp;sdk=joey&amp;show_faces=true&amp;stream=false&amp;width=200" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:222px; height:364px;background:#fff" allowTransparency="true">

Unknown end tag for &lt;/iframe&gt;







Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div style="height:4px">

Unknown end tag for &lt;/div&gt;

<div class="module borderwrap"><div class="maintitle"><h3>Most Viewed Topics

Unknown end tag for &lt;/h3&gt;



Unknown end tag for &lt;/div&gt;

<div class="box-content"><table summary="Most Viewed Topics" width="100%"><tr><td class="row2"><a href="/t4-topic" title="[Skin] Twitter xanh đêm... - 686 Xem">[Skin] Twitter xanh đêm...

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td class="row1"><a href="/t2-topic" title="[Thông báo] Cần tuyển Staff.... - 571 Xem">[Thông báo] Cần tuyển Staff....

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td class="row2"><a href="/t59-topic" title="[MOD] Avatar người gửi cuối hiện ở Index_box - 465 Xem">[MOD] Avatar người gửi cuối hiện ở Index_box

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td class="row1"><a href="/t38-topic" title="[Tổng hợp] Invision MOD &amp; TUT - 384 Xem">[Tổng hợp] Invision MOD & TUT

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td class="row2"><a href="/t67-topic" title="[MOD] Chatbox LG edit all style by Ruby v4 - 358 Xem">[MOD] Chatbox LG edit all style by Ruby v4

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td class="row1"><a href="/t219-topic" title="[EVENT] Giờ vàng Online —ஐ— Top Posters Day - 342 Xem">[EVENT] Giờ vàng Online —ஐ— Top Posters Day

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td class="row2"><a href="/t55-topic" title="Làm quen với admin miamor - 297 Xem">Làm quen với admin miamor

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td class="row1"><a href="/t27-topic" title="[Tổng hợp] Skin Invision - 275 Xem">[Tổng hợp] Skin Invision

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td class="row2"><a href="/t73-topic" title="[MOD] Quà Tặng Âm Nhạc tự cập nhật - 269 Xem">[MOD] Quà Tặng Âm Nhạc tự cập nhật

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td class="row1"><a href="/t118-topic" title="[EVENT] Thiết kế Logo &amp; Banner cho diễn đàn IFC.... - 268 Xem">[EVENT] Thiết kế Logo & Banner cho diễn đàn IFC....

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div style="height:4px">

Unknown end tag for &lt;/div&gt;

<div class="module borderwrap"><div class="box-content"><script type="text/javascript">
jQuery(function(){
jQuery(".codebox dd").text("Vui lòng đăng nhập để thấy nội dung CODE");
});


Unknown end tag for &lt;/script&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div style="height:4px">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div id="main"><div id="main-content"><div class="module module-advert"><div class="box-content" style="padding:0"><div class="g4287e57b"  class="mainmenu"><iframe frameborder="0" marginwidth="0" marginheight="0" scrolling="no" width="728" height="90" src="http://ad.z5x.net/st?ad_type=iframe&ad_size=728x90&section=1649904">

Unknown end tag for &lt;/iframe&gt;

<br class="clear" />

Unknown end tag for &lt;/div&gt;

<div style="clear:both;">

Unknown end tag for &lt;/div&gt;

<style type="text/css">html body .g4287e57b,html body .g4287e57b iframe,html body iframe[name="google_ads_frame"],html body .g4287e57b iframe[name="google_ads_frame"],html body #wrap #page-body div.g4287e57b,html body #page-body .g4287e57b{display:block!important;visibility:visible!important;float:none!important;position:inherit!important;left:inherit!important;top:inherit!important;right:inherit!important;bottom:inherit!important;margin:0 auto!important;padding:inherit!important;filter:alpha(opacity=100)!important;-moz-opacity:1!important;-khtml-opacity:1!important;opacity:1!important;z-index:9999!important;text-align:center!important}html body .g4287e57b,html body .g4287e57b iframe[name="google_ads_frame"]{width:728px!important;height:90px!important;min-height:90px!important}html body .g4287e57b iframe{border:0px!important}html body iframe[name="google_ads_frame"]{width:100%!important;height:inherit!important;min-height:inherit!important}

Unknown end tag for &lt;/style&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div style="height:3px">

Unknown end tag for &lt;/div&gt;

Chào bạn, <span class="USERLINK" alt="xit">

Unknown end tag for &lt;/span&gt;

 ~<br>
Tài khoản của bạn: <span class="icoin">

Unknown end tag for &lt;/span&gt;

<span class="icoins">

Unknown end tag for &lt;/span&gt;

<br>
Phí gửi: 50 $Icoin/message.

<script type="text/javascript" src="/h92-">

Unknown end tag for &lt;/script&gt;



<div id='noidungne' style='padding:10px; overflow:hidden;'>
<form action="/post" method="post" name="post" onsubmit="return vB_Editor['text_editor'].prepare_submit(0,0);"
enctype="multipart/form-data">
<table width="100%" border="0" cellspacing="1" cellpadding="0">
<tbody>
<tr>
<td width="12%" nowrap="nowrap">
<span class="gen">
<b>Gửi đến :

Unknown end tag for &lt;/b&gt;




Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;


<td width="88%">
<table cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td width="60%">
<input class="post gen" style="width:200px; display:inline" type="text"
name="subject" value="Tất cả thành viên" onblur="if(this.value=='') this.value='Tất cả thành viên';"
onfocus="if(this.value=='Tất cả thành viên') this.value='';" size="45" maxlength="40"
tabindex="2" title="" onkeypress="if (event.keyCode==13){return false}">


Unknown end tag for &lt;/td&gt;



<td width="40%"><a onMouseOver="_tooltip(this, 'Chèn emoticon vào thông điệp, 'Thông báo');" onMouseOut="hidetip();" id="emoclik" style="font-size:10px" href="#emo"><b>Emoticon

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/a&gt;

<a onMouseOver="show_tooltip(this, 'Chèn emoticon vào thông điệp, 'Thông báo');" onMouseOut="hidetip();" id="emoclik2" style="font-size:10px;display:none;" href="#emo"><b>Ẩn Emo

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;



<td align="right" width="40">
<input onClick="set_solved(this.form.elements['subject'],'♥ '), dongtimo()" class="mainoption" style="float:right" type="submit" name="post" value="Gửi ..." tabindex="6" accesskey="s" />


Unknown end tag for &lt;/td&gt;





Unknown end tag for &lt;/tr&gt;



<tr>
<td>

Unknown end tag for &lt;/td&gt;





Unknown end tag for &lt;/tr&gt;







Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td nowrap="nowrap" valign="top"><p style="padding: 2px;">

Unknown end tag for &lt;/p&gt;

<span class="gen"><b>Lời nhắn :

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/span&gt;

<br>

Unknown end tag for &lt;/td&gt;

<br />
<td valign="top"><p style="padding: 2px;">

Unknown end tag for &lt;/p&gt;

<textarea id="c3z_lovemess" class="gen" style="width: 100%; height: 100px; display: inline;" onClick="storeCaret(this)" onKeyUp="storeCaret(this)" name="message" rows="1" cols="35" tabindex="3" onSelect="storeCaret(this)" wrap="virtual">

Unknown end tag for &lt;/textarea&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td>

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td id="security">

Unknown end tag for &lt;/td&gt;


<td><div id="xong" style="width: 100%; overflow: auto; margin-top: 6px; display: block;"> 

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;


<b>
<input type="hidden" name="lt" value="0">
<input type="hidden" name="mode" value="newtopic">
<input type="hidden" name="f" value="42">


Unknown end tag for &lt;/b&gt;




Unknown end tag for &lt;/form&gt;




Unknown end tag for &lt;/div&gt;






Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/p&gt;



<style type="text/css">
@charset "utf-8";
.lovemes table, .lovemes div, .lovemes hr, .lovemes br, .lovemes embed{display:none!important}
.lovemes {font-weight:bold; font-size:11px}
.lovemes img {vertical-align: middle; max-height:30px}


Unknown end tag for &lt;/style&gt;


<script>
jQuery("#emoclik").click(function(){
jQuery(this).hide();
jQuery("#emoclik2").show();
jQuery("#c3z_lovemess").animate({
height:"-=50"
},2000);
jQuery("#xong").animate({
height:"+=250"
},2000);
jQuery.ajax({
type:"POST",
url:"/h90-",
success:function(emo){
jQuery("#xong").html(emo).show("slow");}
});
});
jQuery("#emoclik2").click(function(){
jQuery(this).hide();
jQuery("#emoclik").show();
jQuery("#c3z_lovemess").animate({
height:"+=50"
},2000);
jQuery("#xong").animate({
height:"-=250"
},2000);
jQuery.ajax({
type:"POST",
url:"/h90-",
success:function(emo){
jQuery("#xong").html(emo).hide("slow");}
});
});


Unknown end tag for &lt;/script&gt;


<script>
function dongtimo()
{var t=setTimeout("reloadgiumcon()",500);}
function reloadgiumcon()
{window.location.replace("http://invision.chinhphuc.info/forum")}
jQuery(document).ready(function () {
jQuery(".thongbao").colorbox({
width: "52%",
innerHeight: "175px",
title: 'Gửi Thông Điệp Yêu Thương',
inline: true,
href: "#noidungne",
onOpen: function () {
jQuery("#security").load("/post?f=42&mode=newtopic input[name^=auth]");
}

});});



Unknown end tag for &lt;/script&gt;

<div id="add-google-bottom" style="clear:both;"><div align="center"><script language="JavaScript">var zflag_nid="1070"; var zflag_cid="551"; var zflag_sid="147"; var zflag_width="1"; var zflag_height="1"; var zflag_sz="16"; var zflag_charset="utf-8";

Unknown end tag for &lt;/script&gt;

<script language="JavaScript" src="http://d2.zedo.com/jsc/d2/fo.js">

Unknown end tag for &lt;/script&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div style="height:3px">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div id="emptyidright">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div class="clearfix">

Unknown end tag for &lt;/div&gt;

<div id="gfooter"><div class="clearfix"><form action="/viewforum" method="get" name="jumpbox" onsubmit="if(document.jumpbox.f.value == -1){return false;}" id="qjump"><fieldset><select name="selected_id" onchange="if(this.options[this.selectedIndex].value != -1){ forms['jumpbox'].submit() }"><option value="-1">Chọn Diễn Đàn

Unknown end tag for &lt;/option&gt;

<option value="-1">

Unknown end tag for &lt;/option&gt;

<option value="-1">|

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="c1">|--Thông báo của ban điều hành

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="f1">|&nbsp;&nbsp;&nbsp;|--Thông Báo Mới Từ BQT Diễn Đàn

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="f3">|&nbsp;&nbsp;&nbsp;|--Yêu cầu, thắc mắc, góp ý, hỗ trợ

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="f4">|&nbsp;&nbsp;&nbsp;|--Black list

Unknown end tag for &lt;/option&gt;

<option value="-1">|&nbsp;&nbsp;&nbsp;

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="c2">|--Khu vực chia sẻ

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="f5">|&nbsp;&nbsp;&nbsp;|--Căn bản về Invision

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="f7">|&nbsp;&nbsp;&nbsp;|--Invision Skins

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="f8">|&nbsp;&nbsp;&nbsp;|--Invision Mods

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="f9">|&nbsp;&nbsp;&nbsp;|--Invision TUTs

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="f6">|&nbsp;&nbsp;&nbsp;|--HTML Page

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="f44">|&nbsp;&nbsp;&nbsp;|--Show Room

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="f10">|&nbsp;&nbsp;&nbsp;|--Đồ họa

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="f11">|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|--Emoticons

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="f12">|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|--Banners

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="f13">|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|--Avatar

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="f33">|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|--Signatures

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="f14">|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|--Wallpapers

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="f15">|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|--Buttons

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="f16">|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|--Icons

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="f17">|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|--Rank

Unknown end tag for &lt;/option&gt;

<option value="-1">|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="f48">|&nbsp;&nbsp;&nbsp;|--Ý tưởng mới

Unknown end tag for &lt;/option&gt;

<option value="-1">|&nbsp;&nbsp;&nbsp;

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="c3">|--Khu vực hỗ trợ

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="f18">|&nbsp;&nbsp;&nbsp;|--Thắc mắc Code, TUT,...

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="f47">|&nbsp;&nbsp;&nbsp;|--Nhờ Convert Code, TUT

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="f34">|&nbsp;&nbsp;&nbsp;|--Yêu cầu Skin...

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="f19">|&nbsp;&nbsp;&nbsp;|--Nhờ giúp đỡ đồ họa...

Unknown end tag for &lt;/option&gt;

<option value="-1">|&nbsp;&nbsp;&nbsp;

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="c7">|--Giao lưu các forum

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="f45">|&nbsp;&nbsp;&nbsp;|--Forum Promotion

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="f46">|&nbsp;&nbsp;&nbsp;|--Forum Reviews

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="f31">|&nbsp;&nbsp;&nbsp;|--Liên kết bạn bè

Unknown end tag for &lt;/option&gt;

<option value="-1">|&nbsp;&nbsp;&nbsp;

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="c4">|--Góc Thành Viên

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="f20">|&nbsp;&nbsp;&nbsp;|--Làm quen, kết bạn

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="f21">|&nbsp;&nbsp;&nbsp;|--Sự kiện & Hoạt động

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="f22">|&nbsp;&nbsp;&nbsp;|--Những dòng cảm xúc

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="f23">|&nbsp;&nbsp;&nbsp;|--Quán nước vỉa hè

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="f24">|&nbsp;&nbsp;&nbsp;|--Phỏng vấn Thành Viên

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="f29">|&nbsp;&nbsp;&nbsp;|--Quà tặng âm nhạc

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="f42">|&nbsp;&nbsp;&nbsp;|--Thông điệp yêu thương

Unknown end tag for &lt;/option&gt;

<option value="-1">|&nbsp;&nbsp;&nbsp;

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="c5">|--Thư giãn, giải trí,.... các vấn đề khác

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="f25">|&nbsp;&nbsp;&nbsp;|--Thể thao

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="f26">|&nbsp;&nbsp;&nbsp;|--Thế giới của sao....

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="f27">|&nbsp;&nbsp;&nbsp;|--Thế giới Truyện....

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="f28">|&nbsp;&nbsp;&nbsp;|--Đôi chút học tập.....

Unknown end tag for &lt;/option&gt;

<option value="-1">|&nbsp;&nbsp;&nbsp;

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="c6">|--Others

Unknown end tag for &lt;/option&gt;

<option correctif="01" value="f30">&nbsp;&nbsp;&nbsp;&nbsp;|--Quảng cáo

Unknown end tag for &lt;/option&gt;



Unknown end tag for &lt;/select&gt;

<input type="hidden" name="tid" value="5adbe3b80c8404fae9800998ecf8427e" />

Unknown end tag for &lt;/fieldset&gt;



Unknown end tag for &lt;/form&gt;

<div class="current-time">

Unknown end tag for &lt;/div&gt;

<div class="centerer footer-links"><del><ul><li><strong><a href="http://www.forumvi.com/vi/create-forum/" target="_blank">Free forum

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/strong&gt;

&nbsp;|&nbsp;<a href="http://www.forumvi.com/vi/invision/" target="_blank">Invision

Unknown end tag for &lt;/a&gt;

&nbsp;|&nbsp;<a name="bottom" href="http://help.forumotion.com/" target="_blank">Free forum support

Unknown end tag for &lt;/a&gt;

&nbsp;|&nbsp;<a name="bottom" href="/contact" rel="nofollow">Liên hệ

Unknown end tag for &lt;/a&gt;

&nbsp;|&nbsp;<a href="/abuse?page=%2Fh89-&amp;report=1" rel="nofollow">Report an abuse

Unknown end tag for &lt;/a&gt;

&nbsp;|&nbsp;<strong><a href="http://www.hazblog.com/vi/" target="_blank">Create a blog

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/li&gt;



Unknown end tag for &lt;/ul&gt;



Unknown end tag for &lt;/del&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<p class="center"><strong>

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/p&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<script type="text/javascript">//<![CDATA[
fa_endpage();//]]>

Unknown end tag for &lt;/script&gt;



Unknown end tag for &lt;/body&gt;



Unknown end tag for &lt;/html&gt;

```