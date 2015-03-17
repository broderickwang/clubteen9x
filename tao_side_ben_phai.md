Đã từng hứa hướng dẫn cho các bạn cách tạo SideBar cho mọi skin nhưng tới bây giờ mới có time để viết đây Phù...!

![http://i15.servimg.com/u/f15/17/54/83/01/demo10.png](http://i15.servimg.com/u/f15/17/54/83/01/demo10.png)

Bước 1: Thiết kế một thanh SideBar
Cái này tuỳ thuộc óc thẩm mỹ của mỗi người. Mình chỉ lấy ví dụ code đơn giản sau:

```

<div class="module main" style="margin-top: 1em! important; margin-left: 1em! important;">
<div style="background: #EDEDED url('http://i34.servimg.com/u/f34/17/54/83/01/highli10.png') repeat-x 0 0;border: 1px solid #D7D7D7;border-bottom:0px;height:20px;border-radius:2px 2px 0 0;padding: 7px;font-weight: bold;color: #555;"><img src="http://i34.servimg.com/u/f34/17/54/83/01/user10.png" width="14px" />Tiêu đề thanh SideBar

Unknown end tag for &lt;/div&gt;


<div class="main-content" style="width: 150px; background-color: #FFF; border: 1px solid #DDD;">Nội dung thanh SideBar

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;



```
Xong!

Bước 2: Đặt thanh SideBar vào bên phải khung chuyên mục (Bước này chỉ thao tác trong index\_body)
Cấu trúc của nó sẽ là 2 cột trong một bảng:

```

<table width="100%"><td width="100%" valign="top">Cột chuyên mục

Unknown end tag for &lt;/td&gt;

<td width="30%" valign="top">Cột SideBar

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/table&gt;



```
Ở cột chuyên mục mình dùng chiều ngang là 100% (width="100%") để bước sau tạo button ẩn hiện thì cái cột chuyên mục này sẽ tự động dàn ra 100%. Rất đơn giản phải không? Nháy mằt. Giải thích cấu trúc vậy thôi, bây giờ áp dụng nào!

Các bạn tìm code ```
{BOARD_INDEX}``` -> Cái này chính là cột chuyên mục
Còn cái code ở bước 1 chính là cột SideBar

```

<table width="100%">
<td width="100%" valign="top">
{BOARD_INDEX}


Unknown end tag for &lt;/td&gt;



<td width="30%" valign="top">

<div class="module main" style="margin-top: 1em! important; margin-left: 1em! important;">
<div style="background: #EDEDED url('http://i34.servimg.com/u/f34/17/54/83/01/highli10.png') repeat-x 0 0;border: 1px solid #D7D7D7;border-bottom:0px;height:20px;border-radius:2px 2px 0 0;padding: 7px;font-weight: bold;color: #555;"><img src="http://i34.servimg.com/u/f34/17/54/83/01/user10.png" width="14px" />Tiêu đề thanh SideBar

Unknown end tag for &lt;/div&gt;


<div class="main-content" style="width: 150px; background-color: #FFF; border: 1px solid #DDD;">
Nội dung thanh SideBar


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;





Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/table&gt;


```

Đơn giản phải không nào? Nháy mằt Đặt dưới```
 {CHATBOX_TOP} ```nhé Good good

Bước 3: Tạo nút Ẩn/Hiện SideBar
Bước này úp sau. Đi ngủ đã, làm cú khá lâu rồi Ko nhìn