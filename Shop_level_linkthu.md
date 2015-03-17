Demo online: http://invision.chinhphuc.info/h72-Shop-Level

Hướng dẫn cho 2 phiên bản: Invision và PunBb

> Trích dẫn một ảnh:
![http://i69.servimg.com/u/f69/17/70/31/89/cho0710.gif](http://i69.servimg.com/u/f69/17/70/31/89/cho0710.gif)


Chú ý 1: (Cho newbies)
Để cài đặt được MOD này, các bạn phải kích hoạt Points trước, bằng cách: Modules >> Points and reputation >> Points system >> General options Chỉnh như sau: (In đậm tô đỏ là bắt buộc)

> Activate points system : Yes
> Display average points per message : Yes
> "Points" field name : (Điền gì tùy bạn)
> Display this field in : Profile & Messages (Check cả 2)
> Display this field for users that are at least : Guests

Tham khảo hình sau: ![http://i81.servimg.com/u/f81/17/70/31/89/per13.png](http://i81.servimg.com/u/f81/17/70/31/89/per13.png)

General >> Messages and e-mails >> Announcements:
General announcements options

> Activate announcements : Yes
> Announcements display : All pages
> Scrolling : No

Tạo mới ( ![http://illiweb.com/fa/admin/icones/ajouter.png](http://illiweb.com/fa/admin/icones/ajouter.png) )

> Name : drop down
> Content **:**

```
          <span class="name" id="userID" style="display:none">{USERLINK}

Unknown end tag for &lt;/span&gt;


<span style="display:none" id="numID">

Unknown end tag for &lt;/span&gt;


```
Nhớ là phải luôn luôn đặt drop down lên trên cùng.

General >> Forum >> Categories and forums >> Tạo chuyên mục mới: Tên : Linh Thú
Phân quyền:
![http://i81.servimg.com/u/f81/17/70/31/89/per10.png](http://i81.servimg.com/u/f81/17/70/31/89/per10.png)

Modules >> Points and reputation >> Points system >> Points management: Chỉnh như sau:
![http://i81.servimg.com/u/f81/17/70/31/89/per11.png](http://i81.servimg.com/u/f81/17/70/31/89/per11.png)

Users & Groups >> Users >> Profiles >> Tạo mới
![http://i81.servimg.com/u/f81/17/70/31/89/per12.png](http://i81.servimg.com/u/f81/17/70/31/89/per12.png)
View id mục này rồi thay vào **profile\_field\_2\_4** trong đoạn HTML ở bước dưới.

Tạo trang HTML mới (lưu 2 lần) [Đã fix lỗi Mắc cỡ ]
Nội dung đã được ẩn bạn phải bỏ phiếu đánh giá trước khi xem nội dung.

```


<style>.thuty img{width:30px!important;height:20px}
fieldset{border: 1px solid #ddd; width: 90%; margin-left: 10px}
.thong{font-weight: 400; padding: 10px; padding-top: 5px!important}
.alt1>img,.alt>b{margin-left: 40px; margin-top: 15px}
/*.alt1 center:nth-child(1),.alt1 center:nth-child(2),.alt1 center:nth-child(3),.alt1 center:nth-child(4){margin-top: -15px!important}
*/
.alt1 center{margin-top: 0px}
.alt1{height:180px!important}

Unknown end tag for &lt;/style&gt;


<style type="text/css">
.thudo img{height:150px}
.table0 td{border:1px solid #ddd}
.table{padding-top:0px!important}
.thuty img{width:75px;border:2px solid white;cursor:pointer}
/* alert------------------------- */
.alert .close{color:#000;filter:alpha(opacity=20);float:right;font-size:13px;font-weight:700;line-height:18px;opacity:.2;position:relative;right:-21px;text-shadow:0 1px 0 #fff;top:-2px}
.alert .close:hover{color:#000;cursor:pointer;filter:alpha(opacity=40);opacity:.4;text-decoration:none}
.alert,.alerts{border:1px solid transparent;border-radius:4px;margin-bottom:18px;text-shadow:0 1px 0 rgba(255,255,255,0.5);padding:8px 35px 8px 14px}
.alerts{display:block!important}
.alert{position:fixed;z-index:999;bottom:15px;left:5px}
.alert-info{background-color:#d9edf7;color:#3a87ad;border-color:#bce8f1}
.alert-block{background-color:#FCF8E3;color:#C09853;border-color:#FBEED5}
.alert-success{background-color:#dff0d8;color:#468847;border-color:#d6e9c6}
.alert-error{background-color:#f2dede;color:#b94a48;border-color:#eed3d7}


Unknown end tag for &lt;/style&gt;


<table border="0" cellspacing="0" cellpadding="0" width="100%"><tbody><tr><td><img src="http://i43.servimg.com/u/f43/16/03/04/56/iaza1410.gif" width="18" height="2">

Unknown end tag for &lt;/td&gt;

<td background="http://i43.servimg.com/u/f43/16/03/04/56/iaza1411.gif" style="background-repeat:repeat-x"><img src="http://i43.servimg.com/u/f43/16/03/04/56/iaza1412.gif" width="205" height="2">

Unknown end tag for &lt;/td&gt;

<td><img src="http://i43.servimg.com/u/f43/16/03/04/56/iaza1413.gif" width="4" height="2">

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td background="http://i43.servimg.com/u/f43/16/03/04/56/iaza1414.gif" style="background-position:right; background-repeat:repeat-y" valign="bottom" align="right"><img src="http://i43.servimg.com/u/f43/16/03/04/56/iaza1415.gif">

Unknown end tag for &lt;/td&gt;

<td background="http://i43.servimg.com/u/f43/16/03/04/56/box10.gif" style="padding: 10px 10px 10px 10px" width="100%"> <div class="l9x"><dl>

<div class="table_bg">
<table width="100%" align="center">
<tbody><tr>
<td class="votesex" align="center"><b><font size="5" color="blue">Chào mừng bạn đến với Shop Level của <a href="http://invision.chinhphuc.info"><font size="6" color="red"><strong>IFC

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td class="votesex" align="center"><i><font size="2" color="#A100A1">♥ Chúc bạn có những phút giây vui vẻ với forum ♥

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/i&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td align="center"><b><font size="2" color="#09DB21">♥ Còn bây giờ thì mua sắm hết ga nào ♥

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td align="center"><img src="http://i208.photobucket.com/albums/bb203/ureal777/glitter1fe.gif"/>

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td align="center"><img src="http://i208.photobucket.com/albums/bb203/ureal777/glitter1fe.gif"/>

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td>
<span style="font-size: 17px"><i><font face="Georgia"><font color="#9c11ed">Bản quyền thuộc về

Unknown end tag for &lt;/font&gt;

 <b><font size="5" color="#FA0000">IFC

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/b&gt;

<font color="#9c11ed">. Yêu cầu giữ nguyên nguồn và không thay đổi bất cứ điều gì khi sử dụng hay sao chép đi nơi khác <img src="http://r18.imgfast.net/users/1813/30/30/34/smiles/1036251537.gif"/>

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/i&gt;



Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/dl&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;

<td background="http://i43.servimg.com/u/f43/16/03/04/56/iaza1416.gif"><img src="http://i43.servimg.com/u/f43/16/03/04/56/iaza1417.gif">

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td><img src="http://i43.servimg.com/u/f43/16/03/04/56/iaza1418.gif" width="18" height="6">

Unknown end tag for &lt;/td&gt;

<td background="http://i43.servimg.com/u/f43/16/03/04/56/iaza1419.gif" style="background-repeat:repeat-x"><img src="http://i43.servimg.com/u/f43/16/03/04/56/iaza1420.gif" width="205" height="6">

Unknown end tag for &lt;/td&gt;

<td><img src="http://i43.servimg.com/u/f43/16/03/04/56/iaza1421.gif" width="4" height="6">

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;


<b><div width="100%" align="center" style="text-shadow: 0 1px 1px #000;color:blue">Click Để Chọn Nhân Vật.

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/b&gt;


<div width="100%" align="center">
<table width="100%"><tr><td width="70%">
<div class="module borderwrap"><div class="maintitle"><h3>Các Nhân Vật

Unknown end tag for &lt;/h3&gt;



Unknown end tag for &lt;/div&gt;


<div class="box-content">
<table cellpadding="0" cellspacing="0" width="100%" class="table0">
<tbody><thead><tr>
<th width="30px" class="votesex" scope="col">Tên Nhân Vật

Unknown end tag for &lt;/th&gt;


<th width="60px" scope="col" class="votesex"><div align="center">Cấp độ 1

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/th&gt;


<th width="60px" scope="col" class="votesex"><div align="center">Cấp độ 20

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/th&gt;




Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/thead&gt;


<tr style="background:#FFF">
<td class="alt1"><img style="margin-top: 15px; margin-left: -3px" src="http://i69.servimg.com/u/f69/17/70/31/89/new10.gif"/> <center style="margin-top: -18px"><b><span class="thuty"><img alt="adac" src=""/>

Unknown end tag for &lt;/span&gt;

 Aerodactyl

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/center&gt;


<fieldset><legend><span class="info"><img src="http://i69.servimg.com/u/f69/17/70/31/89/info_i10.png"> Thông tin PET:

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/legend&gt;

<div class="thong">
<i>Thể loại

Unknown end tag for &lt;/i&gt;

: <b>Thú chiến

Unknown end tag for &lt;/b&gt;

<br>
<i>Tiến hóa

Unknown end tag for &lt;/i&gt;

: <b>Nhanh

Unknown end tag for &lt;/b&gt;

<br>
<i>Sức mạnh

Unknown end tag for &lt;/i&gt;

: <b>78%

Unknown end tag for &lt;/b&gt;

<br>
<i>Tốc độ

Unknown end tag for &lt;/i&gt;

: <b>87%

Unknown end tag for &lt;/b&gt;

<br>
<i>Thiên hướng

Unknown end tag for &lt;/i&gt;

: <b>Tấn công từ trên cao

Unknown end tag for &lt;/b&gt;

<br><br>
<strong>Đánh giá

Unknown end tag for &lt;/strong&gt;

: Trung bình

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/fieldset&gt;

<br>

Unknown end tag for &lt;/td&gt;


<td><div align="center"><img src="http://i69.servimg.com/u/f69/17/70/31/89/adac0110.gif" width="120" height="150">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;


<td><div align="center"><img src="http://i69.servimg.com/u/f69/17/70/31/89/adac0910.gif" width="120" height="150">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr style="background:#FFF">
<td class="alt1"><img style="margin-top: 15px; margin-left: -3px" src="http://i69.servimg.com/u/f69/17/70/31/89/new10.gif"/> <center style="margin-top: -18px"><b><span class="thuty"><img alt="aisa" src=""/>

Unknown end tag for &lt;/span&gt;

 Aisha

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/center&gt;


<fieldset><legend><span class="info"><img src="http://i69.servimg.com/u/f69/17/70/31/89/info_i10.png"> Thông tin PET:

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/legend&gt;

<div class="thong">
<i>Thể loại

Unknown end tag for &lt;/i&gt;

: <b>Thú chiến

Unknown end tag for &lt;/b&gt;

<br>
<i>Tiến hóa

Unknown end tag for &lt;/i&gt;

: <b>Tương đối nhanh

Unknown end tag for &lt;/b&gt;

<br>
<i>Sức mạnh

Unknown end tag for &lt;/i&gt;

: <b>70%

Unknown end tag for &lt;/b&gt;

<br>
<i>Tốc độ

Unknown end tag for &lt;/i&gt;

: <b>86%

Unknown end tag for &lt;/b&gt;

<br>
<i>Thiên hướng

Unknown end tag for &lt;/i&gt;

: <b>Phòng thủ

Unknown end tag for &lt;/b&gt;

<br><br>
<strong>Đánh giá

Unknown end tag for &lt;/strong&gt;

: Trung bình

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/fieldset&gt;

<br>

Unknown end tag for &lt;/td&gt;


<td><div align="center"><img src="http://i69.servimg.com/u/f69/17/70/31/89/aisa0110.gif" width="120" height="150">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;


<td><div align="center"><img src="http://i69.servimg.com/u/f69/17/70/31/89/aisa0910.gif" width="120" height="150">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr style="background:#FFF">
<td class="alt1"><img style="margin-top: 15px; margin-left: -3px" src="http://i69.servimg.com/u/f69/17/70/31/89/new10.gif"/> <center style="margin-top: -18px"><b><span class="thuty"><img alt="anod" src=""/>

Unknown end tag for &lt;/span&gt;

 Aeanoid

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/center&gt;


<fieldset><legend><span class="info"><img src="http://i69.servimg.com/u/f69/17/70/31/89/info_i10.png"> Thông tin PET:

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/legend&gt;

<div class="thong">
<i>Thể loại

Unknown end tag for &lt;/i&gt;

: <b>Thú chiến

Unknown end tag for &lt;/b&gt;

<br>
<i>Tiến hóa

Unknown end tag for &lt;/i&gt;

: <b>Rất Nhanh

Unknown end tag for &lt;/b&gt;

<br>
<i>Sức mạnh

Unknown end tag for &lt;/i&gt;

: <b>74%

Unknown end tag for &lt;/b&gt;

<br>
<i>Tốc độ

Unknown end tag for &lt;/i&gt;

: <b>93%

Unknown end tag for &lt;/b&gt;

<br>
<i>Thiên hướng

Unknown end tag for &lt;/i&gt;

: <b>Tấn công mạnh

Unknown end tag for &lt;/b&gt;

<br><br>
<strong>Đánh giá

Unknown end tag for &lt;/strong&gt;

: Mạnh

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/fieldset&gt;

<br>

Unknown end tag for &lt;/td&gt;


<td><div align="center"><img src="http://i69.servimg.com/u/f69/17/70/31/89/anod0110.gif" width="120" height="150">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;


<td><div align="center"><img src="http://i69.servimg.com/u/f69/17/70/31/89/anod0910.gif" width="120" height="150">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr style="background:#FFF">
<td class="alt1"><img style="margin-top: 15px; margin-left: -3px" src="http://i69.servimg.com/u/f69/17/70/31/89/new10.gif"/> <center style="margin-top: -18px"><b><span class="thuty"><img alt="etra" src=""/>

Unknown end tag for &lt;/span&gt;

 Aetra

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/center&gt;


<fieldset><legend><span class="info"><img src="http://i69.servimg.com/u/f69/17/70/31/89/info_i10.png"> Thông tin PET:

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/legend&gt;

<div class="thong">
<i>Thể loại

Unknown end tag for &lt;/i&gt;

: <b>Thú chiến

Unknown end tag for &lt;/b&gt;

<br>
<i>Tiến hóa

Unknown end tag for &lt;/i&gt;

: <b>Rất Nhanh

Unknown end tag for &lt;/b&gt;

<br>
<i>Sức mạnh

Unknown end tag for &lt;/i&gt;

: <b>95%

Unknown end tag for &lt;/b&gt;

<br>
<i>Tốc độ

Unknown end tag for &lt;/i&gt;

: <b>67%

Unknown end tag for &lt;/b&gt;

<br>
<i>Thiên hướng

Unknown end tag for &lt;/i&gt;

: <b>Phòng thủ, dai sức

Unknown end tag for &lt;/b&gt;

<br><br>
<strong>Đánh giá

Unknown end tag for &lt;/strong&gt;

: Trung bình

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/fieldset&gt;

<br>

Unknown end tag for &lt;/td&gt;


<td><div align="center"><img src="http://i69.servimg.com/u/f69/17/70/31/89/etra0110.gif" width="120" height="150">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;


<td><div align="center"><img src="http://i69.servimg.com/u/f69/17/70/31/89/etra0910.gif" width="120" height="150">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr style="background:#FFF">
<td class="alt1"><center><b><span class="thuty"><img alt="chim" src=""/>

Unknown end tag for &lt;/span&gt;

 Delta Bird

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/center&gt;


<fieldset><legend><span class="info"><img src="http://i69.servimg.com/u/f69/17/70/31/89/info_i10.png"> Thông tin PET:

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/legend&gt;

<div class="thong">
<i>Thể loại

Unknown end tag for &lt;/i&gt;

: <b>Thú chiến

Unknown end tag for &lt;/b&gt;

<br>
<i>Tiến hóa

Unknown end tag for &lt;/i&gt;

: <b>Trung bình

Unknown end tag for &lt;/b&gt;

<br>
<i>Sức mạnh

Unknown end tag for &lt;/i&gt;

: <b>75%

Unknown end tag for &lt;/b&gt;

<br>
<i>Tốc độ

Unknown end tag for &lt;/i&gt;

: <b>80%

Unknown end tag for &lt;/b&gt;

<br>
<i>Thiên hướng

Unknown end tag for &lt;/i&gt;

: <b>Tấn công từ trên cao

Unknown end tag for &lt;/b&gt;

<br><br>
<strong>Đánh giá

Unknown end tag for &lt;/strong&gt;

: Trung bình

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/fieldset&gt;

<br>

Unknown end tag for &lt;/td&gt;


<td><div align="center"><img src="http://i69.servimg.com/u/f69/17/70/31/89/chim0110.gif" width="120" height="150">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;


<td><div align="center"><img src="http://i69.servimg.com/u/f69/17/70/31/89/chim0910.gif" width="120" height="150">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr style="background:#FFF">
<td class="alt1"><center><b><span class="thuty"><img alt="cho" src=""/>

Unknown end tag for &lt;/span&gt;

 Anpha Wolf

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/center&gt;


<fieldset><legend><span class="info"><img src="http://i69.servimg.com/u/f69/17/70/31/89/info_i10.png"> Thông tin PET:

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/legend&gt;

<div class="thong">
<i>Thể loại

Unknown end tag for &lt;/i&gt;

: <b>Thú chiến

Unknown end tag for &lt;/b&gt;

<br>
<i>Tiến hóa

Unknown end tag for &lt;/i&gt;

: <b>Trung bình

Unknown end tag for &lt;/b&gt;

<br>
<i>Sức mạnh

Unknown end tag for &lt;/i&gt;

: <b>88%

Unknown end tag for &lt;/b&gt;

<br>
<i>Tốc độ

Unknown end tag for &lt;/i&gt;

: <b>83%

Unknown end tag for &lt;/b&gt;

<br>
<i>Thiên hướng

Unknown end tag for &lt;/i&gt;

: <b>Tấn công

Unknown end tag for &lt;/b&gt;

<br><br>
<strong>Đánh giá

Unknown end tag for &lt;/strong&gt;

: Mạnh

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/fieldset&gt;

<br>

Unknown end tag for &lt;/td&gt;


<td><div align="center"><img src="http://i69.servimg.com/u/f69/17/70/31/89/cho0110.gif" width="120" height="150">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;


<td><div align="center"><img src="http://i69.servimg.com/u/f69/17/70/31/89/cho0910.gif" width="120" height="150">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr style="background:#FFF">
<td class="alt1"><center><b><span class="thuty"><img alt="den" src=""/>

Unknown end tag for &lt;/span&gt;

 Beta Black

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/center&gt;


<fieldset><legend><span class="info"><img src="http://i69.servimg.com/u/f69/17/70/31/89/info_i10.png"> Thông tin PET:

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/legend&gt;

<div class="thong">
<i>Thể loại

Unknown end tag for &lt;/i&gt;

: <b>Thú chiến

Unknown end tag for &lt;/b&gt;

<br>
<i>Tiến hóa

Unknown end tag for &lt;/i&gt;

: <b>Trung bình

Unknown end tag for &lt;/b&gt;

<br>
<i>Sức mạnh

Unknown end tag for &lt;/i&gt;

: <b>85%

Unknown end tag for &lt;/b&gt;

<br>
<i>Tốc độ

Unknown end tag for &lt;/i&gt;

: <b>89%

Unknown end tag for &lt;/b&gt;

<br>
<i>Thiên hướng

Unknown end tag for &lt;/i&gt;

: <b>Tấn công

Unknown end tag for &lt;/b&gt;

<br><br>
<strong>Đánh giá

Unknown end tag for &lt;/strong&gt;

: Mạnh

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/fieldset&gt;

<br>

Unknown end tag for &lt;/td&gt;


<td><div align="center"><img src="http://i35.servimg.com/u/f35/16/75/78/56/den0110.gif" width="120" height="150">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;


<td><div align="center"><img src="http://i35.servimg.com/u/f35/16/75/78/56/den0910.gif" width="120" height="150">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr style="background:#FFF">
<td class="alt1"><center><b><span class="thuty"><img alt="gai" src=""/>

Unknown end tag for &lt;/span&gt;

 Beta White

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/center&gt;


<fieldset><legend><span class="info"><img src="http://i69.servimg.com/u/f69/17/70/31/89/info_i10.png"> Thông tin PET:

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/legend&gt;

<div class="thong">
<i>Thể loại

Unknown end tag for &lt;/i&gt;

: <b>Thú chiến

Unknown end tag for &lt;/b&gt;

<br>
<i>Tiến hóa

Unknown end tag for &lt;/i&gt;

: <b>Trung bình

Unknown end tag for &lt;/b&gt;

<br>
<i>Sức mạnh

Unknown end tag for &lt;/i&gt;

: <b>80%

Unknown end tag for &lt;/b&gt;

<br>
<i>Tốc độ

Unknown end tag for &lt;/i&gt;

: <b>93%

Unknown end tag for &lt;/b&gt;

<br>
<i>Thiên hướng

Unknown end tag for &lt;/i&gt;

: <b>Tấn công

Unknown end tag for &lt;/b&gt;

<br><br>
<strong>Đánh giá

Unknown end tag for &lt;/strong&gt;

: Mạnh

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/fieldset&gt;

<br>

Unknown end tag for &lt;/td&gt;


<td><div align="center"><img src="http://i35.servimg.com/u/f35/16/75/78/56/gai0110.gif" width="120" height="150">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;


<td><div align="center"><img src="http://i35.servimg.com/u/f35/16/75/78/56/gai0910.gif" width="120" height="150">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr style="background:#FFF">
<td class="alt1"><center><b><span class="thuty"><img alt="giap" src=""/>

Unknown end tag for &lt;/span&gt;

 Pet Armour

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/center&gt;


<fieldset><legend><span class="info"><img src="http://i69.servimg.com/u/f69/17/70/31/89/info_i10.png"> Thông tin PET:

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/legend&gt;

<div class="thong">
<i>Thể loại

Unknown end tag for &lt;/i&gt;

: <b>Thú chiến

Unknown end tag for &lt;/b&gt;

<br>
<i>Tiến hóa

Unknown end tag for &lt;/i&gt;

: <b>Trung bình

Unknown end tag for &lt;/b&gt;

<br>
<i>Sức mạnh

Unknown end tag for &lt;/i&gt;

: <b>98%

Unknown end tag for &lt;/b&gt;

<br>
<i>Tốc độ

Unknown end tag for &lt;/i&gt;

: <b>53%

Unknown end tag for &lt;/b&gt;

<br>
<i>Thiên hướng

Unknown end tag for &lt;/i&gt;

: <b>Phòng thủ

Unknown end tag for &lt;/b&gt;

<br><br>
<strong>Đánh giá

Unknown end tag for &lt;/strong&gt;

: Rất Mạnh

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/fieldset&gt;

<br>

Unknown end tag for &lt;/td&gt;


<td><div align="center"><img src="http://i35.servimg.com/u/f35/16/75/78/56/giap0110.gif" width="120" height="150">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;


<td><div align="center"><img src="http://i35.servimg.com/u/f35/16/75/78/56/giap0910.gif" width="120" height="150">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr style="background:#FFF">
<td class="alt1"><center><b><span class="thuty"><img alt="jeni" src=""/>

Unknown end tag for &lt;/span&gt;

 Pet Jeni

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/center&gt;


<fieldset><legend><span class="info"><img src="http://i69.servimg.com/u/f69/17/70/31/89/info_i10.png"> Thông tin PET:

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/legend&gt;

<div class="thong">
<i>Thể loại

Unknown end tag for &lt;/i&gt;

: <b>Thú chiến

Unknown end tag for &lt;/b&gt;

<br>
<i>Tiến hóa

Unknown end tag for &lt;/i&gt;

: <b>Rất Chậm

Unknown end tag for &lt;/b&gt;

<br>
<i>Sức mạnh

Unknown end tag for &lt;/i&gt;

: <b>53%

Unknown end tag for &lt;/b&gt;

<br>
<i>Tốc độ

Unknown end tag for &lt;/i&gt;

: <b>63%

Unknown end tag for &lt;/b&gt;

<br>
<i>Thiên hướng

Unknown end tag for &lt;/i&gt;

: <b>Tấn công

Unknown end tag for &lt;/b&gt;

<br><br>
<strong>Đánh giá

Unknown end tag for &lt;/strong&gt;

: Yếu

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/fieldset&gt;

<br>

Unknown end tag for &lt;/td&gt;


<td><div align="center"><img src="http://i35.servimg.com/u/f35/16/75/78/56/jeni0110.gif" width="120" height="150">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;


<td><div align="center"><img src="http://i35.servimg.com/u/f35/16/75/78/56/jeni0910.gif" width="120" height="150">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr style="background:#FFF">
<td class="alt1"><center><b><span class="thuty"><img alt="meo" src=""/>

Unknown end tag for &lt;/span&gt;

 Cat Voliew

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/center&gt;


<fieldset><legend><span class="info"><img src="http://i69.servimg.com/u/f69/17/70/31/89/info_i10.png"> Thông tin PET:

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/legend&gt;

<div class="thong">
<i>Thể loại

Unknown end tag for &lt;/i&gt;

: <b>Thú chiến

Unknown end tag for &lt;/b&gt;

<br>
<i>Tiến hóa

Unknown end tag for &lt;/i&gt;

: <b>Trung bình

Unknown end tag for &lt;/b&gt;

<br>
<i>Sức mạnh

Unknown end tag for &lt;/i&gt;

: <b>96%

Unknown end tag for &lt;/b&gt;

<br>
<i>Tốc độ

Unknown end tag for &lt;/i&gt;

: <b>89%

Unknown end tag for &lt;/b&gt;

<br>
<i>Thiên hướng

Unknown end tag for &lt;/i&gt;

: <b>Tấn công

Unknown end tag for &lt;/b&gt;

<br><br>
<strong>Đánh giá

Unknown end tag for &lt;/strong&gt;

: Rất Mạnh

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/fieldset&gt;

<br>

Unknown end tag for &lt;/td&gt;


<td><div align="center"><img src="http://i35.servimg.com/u/f35/16/75/78/56/meo0110.gif" width="120" height="150">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;


<td><div align="center"><img src="http://i35.servimg.com/u/f35/16/75/78/56/meo0910.gif" width="120" height="150">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr style="background:#FFF">
<td class="alt1"><center><b><span class="thuty"><img alt="sooi" src=""/>

Unknown end tag for &lt;/span&gt;

 Wolf 2

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/center&gt;


<fieldset><legend><span class="info"><img src="http://i69.servimg.com/u/f69/17/70/31/89/info_i10.png"> Thông tin PET:

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/legend&gt;

<div class="thong">
<i>Thể loại

Unknown end tag for &lt;/i&gt;

: <b>Thú chiến

Unknown end tag for &lt;/b&gt;

<br>
<i>Tiến hóa

Unknown end tag for &lt;/i&gt;

: <b>Trung bình

Unknown end tag for &lt;/b&gt;

<br>
<i>Sức mạnh

Unknown end tag for &lt;/i&gt;

: <b>84%

Unknown end tag for &lt;/b&gt;

<br>
<i>Tốc độ

Unknown end tag for &lt;/i&gt;

: <b>98%

Unknown end tag for &lt;/b&gt;

<br>
<i>Thiên hướng

Unknown end tag for &lt;/i&gt;

: <b>Tấn công

Unknown end tag for &lt;/b&gt;

<br><br>
<strong>Đánh giá

Unknown end tag for &lt;/strong&gt;

: Rất Mạnh

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/fieldset&gt;

<br>

Unknown end tag for &lt;/td&gt;


<td><div align="center"><img src="http://i35.servimg.com/u/f35/16/75/78/56/sooi0110.gif" width="120" height="150">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;


<td><div align="center"><img src="http://i35.servimg.com/u/f35/16/75/78/56/sooi0910.gif" width="120" height="150">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr style="background:#FFF">
<td class="alt1"><center><b><span class="thuty"><img alt="long" src=""/>

Unknown end tag for &lt;/span&gt;

 Tiggle

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/center&gt;


<fieldset><legend><span class="info"><img src="http://i69.servimg.com/u/f69/17/70/31/89/info_i10.png"> Thông tin PET:

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/legend&gt;

<div class="thong">
<i>Thể loại

Unknown end tag for &lt;/i&gt;

: <b>Thú chiến

Unknown end tag for &lt;/b&gt;

<br>
<i>Tiến hóa

Unknown end tag for &lt;/i&gt;

: <b>Trung bình

Unknown end tag for &lt;/b&gt;

<br>
<i>Sức mạnh

Unknown end tag for &lt;/i&gt;

: <b>79%

Unknown end tag for &lt;/b&gt;

<br>
<i>Tốc độ

Unknown end tag for &lt;/i&gt;

: <b>83%

Unknown end tag for &lt;/b&gt;

<br>
<i>Thiên hướng

Unknown end tag for &lt;/i&gt;

: <b>Tấn công

Unknown end tag for &lt;/b&gt;

<br><br>
<strong>Đánh giá

Unknown end tag for &lt;/strong&gt;

: Mạnh

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/fieldset&gt;

<br>

Unknown end tag for &lt;/td&gt;


<td><div align="center"><img src="http://i35.servimg.com/u/f35/16/75/78/56/long0110.gif" width="120" height="150">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;


<td><div align="center"><img src="http://i35.servimg.com/u/f35/16/75/78/56/long0910.gif" width="120" height="150">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr style="background:#FFF">
<td class="alt1"><center><b><span class="thuty"><img alt="vang" src=""/>

Unknown end tag for &lt;/span&gt;

 Dragon

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/center&gt;


<fieldset><legend><span class="info"><img src="http://i69.servimg.com/u/f69/17/70/31/89/info_i10.png"> Thông tin PET:

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/legend&gt;

<div class="thong">
<i>Thể loại

Unknown end tag for &lt;/i&gt;

: <b>Thú chiến

Unknown end tag for &lt;/b&gt;

<br>
<i>Tiến hóa

Unknown end tag for &lt;/i&gt;

: <b>Trung bình

Unknown end tag for &lt;/b&gt;

<br>
<i>Sức mạnh

Unknown end tag for &lt;/i&gt;

: <b>86%

Unknown end tag for &lt;/b&gt;

<br>
<i>Tốc độ

Unknown end tag for &lt;/i&gt;

: <b>73%

Unknown end tag for &lt;/b&gt;

<br>
<i>Thiên hướng

Unknown end tag for &lt;/i&gt;

: <b>Tấn công

Unknown end tag for &lt;/b&gt;

<br><br>
<strong>Đánh giá

Unknown end tag for &lt;/strong&gt;

: Mạnh

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/fieldset&gt;

<br>

Unknown end tag for &lt;/td&gt;


<td><div align="center"><img src="http://i35.servimg.com/u/f35/16/75/78/56/vang0110.gif" width="120" height="150">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;


<td><div align="center"><img src="http://i35.servimg.com/u/f35/16/75/78/56/vang0910.gif" width="120" height="150">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;


<td valign="top">
<table style="font-size:11px;background: white url(http://www.taochu.com/backgrounds/thumbs/bgrnew17.gif.thumb.jpg) bottom; color: #333333;  border: 1px dotted #CFD3D5; border-radius: 5px; padding: 0px; box-shadow: 1px 1px 2px #999999;" width="100%" focellspacing="1" cellpadding="0" border="0" class="tborder">
<tbody>
<tr>
<td>
<span style="color:blue; font-weight: bold; padding: 2px 10px">
Xin chào:


Unknown end tag for &lt;/span&gt;


<span class="USERLINK" alt="xit" style="float:right">

Unknown end tag for &lt;/span&gt;


<br/>
<span style="color:red; font-weight: bold; padding: 2px 2px 2px 10px">
Tài khoản:


Unknown end tag for &lt;/span&gt;


<b class="points" style="float:right">

Unknown end tag for &lt;/b&gt;


<br/>
<span style="color:indigo; font-weight: bold; padding: 2px 2px 2px 10px">
Số bài viết:


Unknown end tag for &lt;/span&gt;


<b class="USERCOUNTPOST" style="float:right">

Unknown end tag for &lt;/b&gt;


<br/>
<span style="color:green; font-weight: bold; padding: 2px 13px 2px 10px">
Giới tính:


Unknown end tag for &lt;/span&gt;


<b class="gender" style="float:right">

Unknown end tag for &lt;/b&gt;


<br/><br/>
<hr><br/>
<div class="demo"><font face="Georgia">Xem trước (Full Toàn cấp độ):

Unknown end tag for &lt;/font&gt;

<br/>
<table cellpadding="0" cellspacing="0" width="100%" align="center"> <tr> <td><img src="http://i66.servimg.com/u/f66/14/26/60/46/thtx_010.png" alt="" />

Unknown end tag for &lt;/td&gt;

 <td style="background: url(http://i66.servimg.com/u/f66/14/26/60/46/thtx_011.png) repeat-x top left" width="100%"> 

Unknown end tag for &lt;/td&gt;

 <td><img src="http://i66.servimg.com/u/f66/14/26/60/46/thtx_012.png" alt="" />

Unknown end tag for &lt;/td&gt;

 

Unknown end tag for &lt;/tr&gt;

 <tr> <td style="background: url(http://i66.servimg.com/u/f66/14/26/60/46/thtx_013.png) repeat-y top left" valign="bottom"> 

Unknown end tag for &lt;/td&gt;

 <td>
<div width="100%" align="center">
<span class="thudo1" style="display:none">Chọn Nhân Vật trước đã chứ =))

Unknown end tag for &lt;/span&gt;


<span class="thudo">Chọn Nhân Vật trước đã chứ =))

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;





Unknown end tag for &lt;/td&gt;

 <td style="background: url(http://i66.servimg.com/u/f66/14/26/60/46/thtx_014.png) repeat-y top right" valign="bottom"> 

Unknown end tag for &lt;/td&gt;

 

Unknown end tag for &lt;/tr&gt;

 <tr> <td><img src="http://i66.servimg.com/u/f66/14/26/60/46/thtx_015.png" alt="" />

Unknown end tag for &lt;/td&gt;

 <td style="background: url(http://i66.servimg.com/u/f66/14/26/60/46/thtx_016.png) repeat-x top left" width="100%"> 

Unknown end tag for &lt;/td&gt;

 <td> <img src="http://i66.servimg.com/u/f66/14/26/60/46/thtx_017.png" alt="" />

Unknown end tag for &lt;/td&gt;

 

Unknown end tag for &lt;/tr&gt;

 

Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;


<div valign="bottom"><font face="Georgia"><span style="color:green"><strong><i>Giá :

Unknown end tag for &lt;/i&gt;



Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;


<strong><span class="gia" style="color:red"><strong>500

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/strong&gt;


<span style="color:green"><strong><i> Icoin 

Unknown end tag for &lt;/i&gt;



Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/div&gt;


<table id="rrmuahang" cellspacing="1" cellpadding="0" border="0" width="100%" class="tborder">
<tbody>
<tr>
<td align="center" height="28" colspan="2 " class="catBottom">
<span id="tipchokhach" style="margin: auto; text-align:center; width: 100%;">
<div valign="middle" class="guestwarn" style="display:block;height:28px;" align="center" width="100%">
<span class="done" style="display:none"><font face="Georgia"><span style="color:red">Thông báo:

Unknown end tag for &lt;/span&gt;

<i>Nhân Vật của bạn đã được cập nhật...

Unknown end tag for &lt;/i&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/span&gt;


<input class="hoadon" type="submit" name="submit" value="Lấy hóa đơn" style="display:none">


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;


<br>


Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;


<br>
<table style="background:#FFF url('http://i43.servimg.com/u/f43/15/83/61/45/bg10.png') repeat; border: 0px solid black; border-radius: 5px; padding: 10px; box-shadow: 1px 1px 2px #999999;"
width="100%" focellspacing="1" cellpadding="0" border="0" width="100%"
class="tborder">
<tr>
<td width="100%" align="left">
Powered by Invision® Forumotion
<br>
Copyright ©2000 - 2011, GNU General Public License


Unknown end tag for &lt;/td&gt;


<td width="300" align="right" style="display:inline; float: right;"><font face="Georgia">
Shop Level © <a href="http://hollyland.forumvi.com/u1"><span style="color:indigo"><strong>miamor

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;


<br>
Version <span style="color:#09DB21"><strong>2.0

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;

 - By: <a href="http://invision.chinhphuc.info/u5"><span style="color:red"><strong>IFC

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/font&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td align="right"><span style="color:black"><strong>Liên hệ: 

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;

<span style="color:#A100A1"><strong>miamorwest@yahoo.com

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;


<script type="text/javascript" src="http://hsgs-land.yourme.net/h4-">

Unknown end tag for &lt;/script&gt;


<script type="text/javascript">
$(function () {
$(".points").load($(".name a").attr("href") + " #field_id-13 .field_uneditable");
$(".gender").load($(".name a").attr("href") + " #field_id-7 .field_uneditable img");
$(".dulieucu").load($(".name a").attr("href") + " #field_id6 .field_uneditable");
$("span.thuty").click(function () {
$(".hoadon").show();
});
$("span.thuty").each(function (a) {
$("span.thuty img").click(function () {
$(".thuty img").css({
"border": "2px solid white"
});
$(this).css({
"border": "2px solid yellow"
});
var altanh = $(this).attr("alt");
altanh1 = $(this).attr("alt");
$("span.thudo").html('Bạn đã chọn xong Nhân Vật: <br><center><img src="http://i69.servimg.com/u/f69/17/70/31/89/' + altanh + '0110.gif"><br><img src="http://i69.servimg.com/u/f69/17/70/31/89/' + altanh + '0210.gif"><br><img src="http://i69.servimg.com/u/f69/17/70/31/89/' + altanh + '0310.gif"><br><img src="http://i69.servimg.com/u/f69/17/70/31/89/' + altanh + '0410.gif"><br><img src="http://i69.servimg.com/u/f69/17/70/31/89/' + altanh + '0510.gif"><br><img src="http://i69.servimg.com/u/f69/17/70/31/89/' + altanh + '0610.gif"><br><img src="http://i69.servimg.com/u/f69/17/70/31/89/' + altanh + '0710.gif"><br><img src="http://i69.servimg.com/u/f69/17/70/31/89/' + altanh + '0810.gif"><br><img src="http://i69.servimg.com/u/f69/17/70/31/89/' + altanh + '0910.gif"><br>

Unknown end tag for &lt;/center&gt;

');
$("span.thudo1").html('' + altanh + '');
});
});
$(".hoadon").click(function () {
if(Number($(".points").text()) >= 500) {
var b = "Hóa đơn mua Linh Thú của " + $(".name").text();
var e = "Ðã tính tiền, mua Linh Thú thành công!";
$.post("/post?t=927&mode=reply", {
subject: b,
message: e,
post: 1
});
var f = '[' + $(".thudo1").html() + ']';
var g = $(".name a").attr("href").split('u=')[1];
var c = "active=1&user=" + g,
d = document.getElementById("logout").href,
d = d.substring(d.indexOf("tid=") + 4, d.indexOf("&key")),
c = c + ('&tid=' + d + '&content=[["profile_field_2_4", "' + f + '"]]&id=1');
jQuery.post("/ajax_profile.forum?jsoncallback=jQuery1", c, function (a) {
0 < a.indexOf("1") ? (alert('Mua thành công'), location.href = '/h72-Shop-Level') : alert('Có lỗi vui lòng F5')
});
} else {
alert("Xin lỗi bạn cần ít nhất 500$ trong tài khoản để thực hiện chức năng này")
}
});
});
function fmvitip(a, b, d) {
$(".alert").length && $(".alert").remove();
$("body").append('<div class="alert alert-' + a + '"><a class="close" onclick="htip()" data-dismiss="alert">\u00d7

Unknown end tag for &lt;/a&gt;

<strong>' + b + " 

Unknown end tag for &lt;/strong&gt;

" + d + "

Unknown end tag for &lt;/div&gt;

  ")
}
function htip() {
$(".alert").animate({
left: "-=500"
}, 1E3, function () {
$(".alert").remove()
})
}
function stip() {
$(".alert").fadeIn(1E3);
setTimeout("htip()", 5E3)
}


Unknown end tag for &lt;/script&gt;




```
Ra ngoài 4r, vào chuyên mục vừa tạo >> Gửi bài mới, nội dung gì tùy bạn.
Sau khi tạo được topic mới, topic của bạn sẽ cón link dạng này: http://invision.chinhphuc.info/t920-topic#4941
thì các bạn lấy số 920 thay vào số 927 trong đoạn HTML

```


$.post("/post?t=927&mode=reply", {
subject: b,
message: e,
post: 1
});
```
ở bước trên.

Xong phần code shop để mua, giờ là phần cho hiển thị trong bài viết.

Invision (Chỉ tăng cấp theo số bài viết)

Spoiler:
> Users & Groups >> Users >> Profiles (đây là bước cực kỳ quan trọng)

> Đổi tên mục Giới tính thành Gender (đã có tên là Gender rồi thì thôi)
> Đổi tên mục Tổng số bài viết thành Posts (đã có tên là Posts rồi thì thôi)
> Đưa mục Gender lên trên mục Posts


> Tạo javascript mới, đặt In the topics, nội dung như sau:

```


function miarank(a, b, x, y) {
up = 60;
cong = 0;
pet = x;
lv = Math.ceil(b / up) + cong;
exp = Math.round(100 / up * (b % up));
20 < lv && (lv = 20, exp = 99);
return '<fieldset align="center" class="milevel"><img width="120px" height="120px" src="http://i69.servimg.com/u/f69/17/70/31/89/' + pet + '0' + lv + '10.gif">

Unknown end tag for &lt;/div&gt;

<div align="center" style="width:140px;">  <span style="font-size:10px!important;font-family:Tahoma;font-weight:normal;">Linh thú cấp độ: <b class="level">' + lv + '

Unknown end tag for &lt;/b&gt;

 (+' + exp + '%)

Unknown end tag for &lt;/span&gt;

<fieldset class="miachar"><img src="http://i15.servimg.com/u/f15/17/70/31/89/981010.gif" width="' + exp + '%" height="9px"><img src="http://i15.servimg.com/u/f15/17/70/31/89/871010.gif" width="2px" height="9px">

Unknown end tag for &lt;/fieldset&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/fieldset&gt;

'
}
$(function () {
$(".post-container").each(function () {
var a = $(this).find(".postprofile-details dd:last").html(),
a = a.substring(a.indexOf("<img")),
b = a.substring(0, a.indexOf('">') + 2),
a = a.substring(a.indexOf("Posts<") + 21),
a = a.substring(0, a.indexOf("<br"));
var x = $(this).find(".postprofile-details dd:last").html(),
x = x.substring(x.indexOf("[") + 1),
y = x.substring(0, x.indexOf(']') - 0);
$(this).find('.postprofile-details.postdetails').children('dd:last').after(miarank(b, a, y, x))
});
});
```


PunBb
Cách 1: (tăng cấp theo Posts, Points, Reputation/Thanked)

Spoiler:
> Users & Groups >> Users >> Profiles (đây là bước cực kỳ quan trọng)

> Không bắt buộc đổi tên.
> Sắp xếp các mục theo thứ tự sau:
> > Posts
> > Points
> > Reputation
> > Pet

> nhớ là đưa 4 mục này lên đầu tiên.


> Sửa lại HTML (đây cũng là bước cực kỳ quan trọng)
> Quay lại trang HTML các bạn đã tạo, tìm đoạn

```


var f = '[' + $(".thudo1").html() + ']';
```
> thay bằng

```


var f = $(".thudo1").html();
```

> Chèn đoạn này vào Viewtopic\_body, tại vị trí bạn muốn hiển thị:

```

<script>miarank(<!-- BEGIN profile_field -->'{postrow.displayed.profile_field.CONTENT}',<!-- END profile_field -->1);

Unknown end tag for &lt;/script&gt;


```

> Tạo javascript mới, đặt In the topics, nội dung như sau:

```


function miarank(Posts, Hcoins, Reputation, Avatar) {
var d = (Posts * 5 + Hcoins * 1);
var h = ((Reputation * 10) + Math.floor((Posts * 2) + (Hcoins * 0)));
var ff = (Posts * 2 + Hcoins * 2 + Reputation * 2);
var f = Math.floor((Math.floor(ff)) / 1900);
var e = ((d + h + f) / 18000);
var g = hs = Math.floor(e + parseInt(1));
if (hs > 10) {
hs = 10
}
document.write('<fieldset class="level" style="border: 1px solid #D4D4D4"><legend><font color="red"><b>Cấp độ : ' + g + '

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/font&gt;

 

Unknown end tag for &lt;/legend&gt;

<span class="pet" align="center" style="width:140px;margin-top:-4px;padding-left:5px"><img width="130px" height="130px" src="http://i69.servimg.com/u/f69/17/70/31/89/' + Avatar + '0' + hs + '10.gif">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/fieldset&gt;

')
}
```

> Cách này mình cho tăng cấp hơi chậm Smile
> Các bạn có thể sửa tốc đố bằng cách chỉnh cấp số nhân nhé Smile


Cách 2: (Chỉ tăng cấp theo số bài viết)

Spoiler:
> Users & Groups >> Users >> Profiles (đây là bước cực kỳ quan trọng)

> Đổi tên mục Giới tính thành Gender (đã có tên là Gender rồi thì thôi)
> Đổi tên mục Tổng số bài viết thành Posts (đã có tên là Posts rồi thì thôi)
> Đưa mục Gender lên trên mục Posts


> Tạo javascript mới, đặt In the topics, nội dung như sau:
```


function miarank(a, b, x, y) {
up = 60;
cong = 0;
pet = x;
lv = Math.ceil(b / up) + cong;
exp = Math.round(100 / up * (b % up));
20 < lv && (lv = 20, exp = 99);
return '<fieldset align="center" class="milevel"><img width="120px" height="120px" src="http://i69.servimg.com/u/f69/17/70/31/89/' + pet + '0' + lv + '10.gif">

Unknown end tag for &lt;/div&gt;

<div align="center" style="width:140px;">  <span style="font-size:10px!important;font-family:Tahoma;font-weight:normal;">Linh thú cấp độ: <b class="level">' + lv + '

Unknown end tag for &lt;/b&gt;

 (+' + exp + '%)

Unknown end tag for &lt;/span&gt;

<fieldset class="miachar"><img src="http://i15.servimg.com/u/f15/17/70/31/89/981010.gif" width="' + exp + '%" height="9px"><img src="http://i15.servimg.com/u/f15/17/70/31/89/871010.gif" width="2px" height="9px">

Unknown end tag for &lt;/fieldset&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/fieldset&gt;

'
}
$(function () {
$(".post").each(function () {
var a = $(this).find(".user .user-info").html(),
a = a.substring(a.indexOf("<img")),
b = a.substring(0, a.indexOf('">') + 2),
a = a.substring(a.indexOf("Posts<") + 21),
a = a.substring(0, a.indexOf("<br"));
var x = $(this).find(".user .user-info").html(),
x = x.substring(x.indexOf("[") + 1),
y = x.substring(0, x.indexOf(']') - 0);
$(this).find('.postmain').children('user-ident').after(miarank(b, a, y, x))
});
});

```

h4-:
```
function treatvar(nom) {
var trouve = xhr.responseText.replace(RegExp("^.+<li style=\"margin-bottom:5px;direction:ltr;text-align:left;\"><strong>&#123;" + nom + "&#125;<\/strong>&nbsp;:&nbsp;(.*?)&nbsp;<span style='direction:ltr'>\(.*?\)<\/span><br \/><\/li>.+$"), '$1');
if (xhr.responseText == trouve) return;
var children = document.getElementsByTagName('*') || document.all;
var v = new Array();
var i = -1;
while (++i < children.length) {
var child = children[i];
var classNames = child.className.split(' ');
for (var j = 0; j < classNames.length; j++) {
if (classNames[j] == nom) {
v.push(child);
break;
}
}
}
i = -1;
while (++i != v.length) if (v[i].tagName == 'INPUT' || v[i].tagName == 'TEXTAREA') v[i].value += trouve;
else v[i].innerHTML += trouve;
};
if (window.ActiveXObject) {
var xhr = new ActiveXObject("Microsoft.XMLHTTP");
} else if (window.XMLHttpRequest) {
var xhr = new XMLHttpRequest();
}
if (xhr != null) {
xhr.onreadystatechange = function () {
if (xhr.readyState == 4) {
treatvar('FORUMURL');
treatvar('FORUMURLINK');
treatvar('FORUMNAME');
treatvar('FORUMNAMELINK');
treatvar('FORUMDESC');
treatvar('FORUMBIRTHDAY');
treatvar('FORUMAGE');
treatvar('FORUMCOUNTFORUM');
treatvar('FORUMCOUNTOPIC');
treatvar('FORUMCOUNTPOST');
treatvar('FORUMCOUNTUSER');
treatvar('FORUMONLINEUSER');
treatvar('FORUMONLINEDATE');
treatvar('FORUMLASTUSER');
treatvar('FORUMLASTUSERLINK');
treatvar('USERNAME');
treatvar('USERLINK');
treatvar('USERBIRTHDAY');
treatvar('USERAGE');
treatvar('USERREGDATE');
treatvar('USERLASTVISIT');
treatvar('USERCOUNTPOST');
}
};
xhr.open("GET", "/popup_help.forum?l=miscvars", true);
xhr.send(null);
}```
Đó là xong phần hiển thị.
Còn phần style nó thì các bạn tự nghịch nhé
Bị bí quá thì quăng cái link 4r lên đây mình xem cho Smile


> Update VER 2 Shop Level - Written by miamor
> Demo & Source Code: http://invision.chinhphuc.info
> Copyright © 2012 IFC
> Updating...