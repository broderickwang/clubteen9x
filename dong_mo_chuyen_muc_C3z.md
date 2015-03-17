```


// Copyright © 2012 Viet K, C3ZONE.NET
$(function(){
$(".forabg .topiclist .header .icon").append("<div class='c3zone'><i class='c3show c3inv'>

Unknown end tag for &lt;/i&gt;

<i class='c3hide'>

Unknown end tag for &lt;/i&gt;



Unknown end tag for &lt;/div&gt;

");
$(".c3zone").each(function (i) {
var id = "c3z" + ((/\/f\d*-/.test(location.pathname)) ? (location.pathname.match(/\d+/) + "v" + i) : i);
$(this).attr("id", id).parent().parent().parent().next().addClass(id);
if (my_getcookie(id) == 1) {
$(this).find("i").toggleClass("c3inv");
$("." + id).hide()
}
});
$(".c3zone i").click(function () {
var id = $(this).parent().attr("id");
if (my_getcookie(id) == 1) my_setcookie(id, 0, 1);
else my_setcookie(id, 1, 1);
$(this).parent().find("i").toggleClass("c3inv");
$("." + id).slideToggle()
})
});
```


> • Chấp nhận

> Bước 2:
> Thêm vào cuối CSS Stylesheet đoạn:

```


.c3zone{float:right;padding:5px}.c3zone i.c3inv{display:none}
.c3zone i{display:block;cursor:pointer;width:13px;height:13px;background:url(http://www.qhonline.info/forum/qh_img/buttons/collapse_40b.png)}
.c3zone i.c3show{background:url(http://www.qhonline.info/forum/qh_img/buttons/collapse_40b_collapsed.png)}


```
> Tùy chỉnh:
```

http://www.qhonline.info/forum/qh_img/buttons/collapse_40b.png
http://www.qhonline.info/forum/qh_img/buttons/collapse_40b_collapsed.png

```
> /**Đây là link ảnh mở và đóng, thay lại bằng link của bạn, mình tách ra đây chứ không chèn trực tiếp để tiện chỉnh sửa và có thể dùng sprites nếu thích**/

> width:13px;height:13px;
> /**đây là chiều rộng, cao của ảnh, sửa lại cho phù hợp với ảnh của bạn**/

> padding:5px
> /**đây là khoảng cách từ ảnh đến lề. sửa cho phù hợp với chiều cao của thanh tiêu đề mỗi chuyên mục**/



Việt K




Đoạn code này có thể chạy trên diễn đàn sử dụng mã nguồn phpbb3 ở bất cứ đâu. Chỉ cần thay Bước 1 trong hướng dẫn trên bằng các thao tác sau:

Đối với diễn đàn do các bạn tự upload - thì thêm code sau vào file template ở vị trí thích hợp. Đối với các dịch vụ tạo diễn đàn thì tạo 1 BBCode với đoạn code sau rồi sử dụng BBCode vừa tạo. Đây là code:

```


<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js">

Unknown end tag for &lt;/script&gt;


<script type="text/javascript" src="http://www.coo.vn/out/users/c3zone/js/eazycollapse.js">

Unknown end tag for &lt;/script&gt;



```


Mở rộng cho phiên bản punBB (ngồi ở lớp rảnh không có gì làm =,=)
Điều kiện sử dụng : Không thay đổi cấu trúc index\_box

Cấu trúc:




Thực hiện như phiên bản phpBB3 ở trên nhưng với Javascript Code **sau :**

```


// Copyright © 2012 Viet K, C3ZONE.NET
$(function () {
$(".main .main-head .page-title").before("<div class='c3zone'><i class='c3show c3inv'>

Unknown end tag for &lt;/i&gt;

<i class='c3hide'>

Unknown end tag for &lt;/i&gt;



Unknown end tag for &lt;/div&gt;

");
$(".c3zone").each(function (i) {
var id = "c3z" + ((/\/f\d*-/.test(location.pathname)) ? (location.pathname.match(/\d+/) + "v" + i) : i);
$(this).attr("id", id).parent().next().find(".table").addClass(id);
if (my_getcookie(id) == 1) {
$(this).find("i").toggleClass("c3inv");
$("." + id).hide()
}
});
$(".c3zone i").click(function () {
var id = $(this).parent().attr("id");
if (my_getcookie(id) == 1) my_setcookie(id, 0, 1);
else my_setcookie(id, 1, 1);
$(this).parent().find("i").toggleClass("c3inv");
$("." + id).fadeToggle();
});
});


```