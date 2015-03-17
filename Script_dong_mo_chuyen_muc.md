Mod này giúp tạo hiệu ứng khi đóng mở chuyên mục, ngoài ra, nó được bổ sung chức năng lưu cookie. Dưới đây là những đoạn code mẫu, chỉ dành cho những bạn có kiến thức cơ bản về HTML và Templates index\_box.
Đối với những bạn chưa biết cách sửa templates và dùng HTML thì nên dùng các hướng dẫn cho dạng Templates mặc định

http://help.forumotion.com/t96460-category-toggle-script

http://www.xn--tkch-wpa7sq09q.tk/t867-topic

Demo:          http://www.fmvi.org/h40-demo


Hướng dẫn: Hướng dẫn dưới đây nhằm giúp bạn hiểu đoạn code mẫu, tùy theo cấu trúc forum mình mà các bạn thay đổi cho phù hợp.
Ví dụ: ![http://i48.servimg.com/u/f48/16/58/89/73/huongd10.png](http://i48.servimg.com/u/f48/16/58/89/73/huongd10.png)
Trong index\_box, tìm vị trí thích hợp (xem ảnh mẫu) và:
+ Bao quanh vị trí tên chuyên mục đánh dấu xanh lá bằng
```

<div class="title" valign="middle">
<h1>
Chuyên mục


Unknown end tag for &lt;/h1&gt;




Unknown end tag for &lt;/div&gt;

```

+ Bao quanh phần nội dung muốn ẩn hiện, vị trí đánh dấu khung đỏ bằng
```

<div class="forum">
forum


Unknown end tag for &lt;/div&gt;


```

Lưu ý: 2 thẻ DIV trên phải đặt cạnh nhau (cùng cấp).

Nâng cao: ![http://i48.servimg.com/u/f48/16/58/89/73/fmvide10.png](http://i48.servimg.com/u/f48/16/58/89/73/fmvide10.png)

HTML mẫu:

```


<div class="category">
<div class="title" valign="middle">
<h1>
Chuyên mục 1


Unknown end tag for &lt;/h1&gt;




Unknown end tag for &lt;/div&gt;


<div class="forum">


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<br/>
<div class="category">
<div class="title" valign="middle">
<h1>
Chuyên mục 2


Unknown end tag for &lt;/h1&gt;




Unknown end tag for &lt;/div&gt;


<div class="forum">


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


```

Script mẫu:

```

$(function(){
$("div.title").prepend('<span class="collapse" style="padding: 13px; float:right"><img src="http://www.pettracker.com/sites/all/themes/tagg/images/icon_collapse.gif" alt="fmClose" /><img class="hide" src="http://www.pettracker.com/sites/all/themes/tagg/images/icon_expand.gif" alt="fmOpen" />

Unknown end tag for &lt;/span&gt;

'); // Thêm nút đóng mở vào bên phải tiêu đề
$(".collapse").each(function(index) { // dò tìm các thẻ CLASS collapse
$(this).attr("id", "fmvicollapse" + location.pathname + index); // Đặt ID cho từng chuyên mục
if (my_getcookie("fmvicollapse" + location.pathname + index) == "1") { // Lấy cookie, nếu giá trị bằng 1 thì thực hiện lệnh đóng
$(this).children("img[alt='fmClose']").hide(); // ẩn nút đóng
$(this).children("img[alt='fmOpen']").show(); // hiện nút mở
$(this).parent().next().hide(); // ẩn phần nội dung của thẻ CLASS forum
};
});
$(".collapse img[alt='fmClose']").click(function() { // Click vào nút đóng chuyên mục
my_setcookie($(this).parent().attr("id"), 1, 1, 0); // đặt giá trị 1 cho cookie theo ID chuyên mục
$(this).hide().next().show(); // ẩn nút đóng và hiện nút mở
$(this).parent().parent().next().hide(); // ẩn phần nội dung của thẻ CLASS forum
});
$(".collapse img[alt='fmOpen']").click(function() { // Click vào nút mở chuyên mục
my_setcookie($(this).parent().attr("id"), 0, 1, 0); // đặt giá trị 0 cho cookie theo ID chuyên mục
$(this).hide().prev().show(); // ẩn nút mở và hiện nút đóng
$(this).parent().parent().next().show(); // hiện phần nội dung của thẻ CLASS forum
});
});
```

Viết bởi - www.FMvi.org