![http://i14.servimg.com/u/f14/16/58/45/96/115.jpg](http://i14.servimg.com/u/f14/16/58/45/96/115.jpg)
![http://i14.servimg.com/u/f14/16/58/45/96/211.jpg](http://i14.servimg.com/u/f14/16/58/45/96/211.jpg)
Bước 1 : QUẢN LÝ NGƯỜI DÙNG & QUẢN LÝ NHÓM >> Cấp bậc >> Quản Lý Cấp Bậc
kick vào bánh xe của nhóm mà bạn đã add cho nhóm đó như hình dưới

![http://i14.servimg.com/u/f14/16/58/45/96/310.jpg](http://i14.servimg.com/u/f14/16/58/45/96/310.jpg)

Tiếp theo ở khung sửa chữa như hình dưới :

![http://i14.servimg.com/u/f14/16/58/45/96/410.jpg](http://i14.servimg.com/u/f14/16/58/45/96/410.jpg)


Các bạn thêm vào code :

Code: Chọn Code
> <span>Admin</span>



ở đây Admin là cấp bậc nhóm mà bạn chỉ định
bạn có thể làm tương tự với các nhóm khác

Bước 2 : MODULES >> HTML & JAVASCRIPT >> Javascript codes management >> Tạo 1 js mới (Add a Javascript Code)

1 : Đây là js hình nền cho khung bài viết :
Title **: Hình nền cho khung bài viết
Placement : In the topics
Javascript Code** :


```

$(function(){$(' div.postmain:has(".Admin")').css('background','#fff url(http://i14.servimg.com/u/f14/16/58/45/96/backgr10.jpg)')});


```

rồi ok là được hình nền cho khung bài viết
Chú ý : trong js có đoạn này :

```

(".Admin")')

```

Admin ở đây là nhóm trong quản lý cấp bậc nhá ( các bạn sửa sao cho phù hợp )


2.Đây là js hình nền cho cột thông tin của bạn trong vew\_topic
Title **: Hình nền cho cột thông tin
Placement : In the topics
Javascript Code** :


```

$(document).ready(function() {
$('.post:has(".Admin")').css('background','url(http://i14.servimg.com/u/f14/16/58/45/96/backgr10.jpg) repeat-y');
$('.post:has(".mod")').css('background-color', '#COLOR');
});


```

Chú ý : phải thay thẻ

```

(".Admin")')
```

cho đúng với nhóm mà bạn add trong cấp bậc


Muốn thêm hình nền cho 1 nhóm mới các bạn vào js thêm đoạn này vào sau ;

```

.css('background','url(http://i14.servimg.com/u/f14/16/58/45/96/backgr10.jpg) repeat-y');



```
Và cuối cùng là thay lại ảnh nền cho phù hợp với bạn ^^

Ai ko hiểu thì Reply tại topic này