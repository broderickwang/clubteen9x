Giới hạn số lượt Khách xem topic.
demo http://www.vietteen9x.com/h88-page

Trước tiên là tạo 1 trang HTML để thông báo Khách vượt quá số lượt cho phép...
Kiểu như này http://diendan.chinhphuc.info/h87-z
hoặc như này http://www.vietteen9x.com/h88-page
Nếu lười thì bỏ qua bước này và dẫn đến trang đăng ký luôn cũng được :D

Sau đó chạy đoạn script này trong TOPIC, đọc Description để sửa lại cho phù hợp.

code


```

$(function(){
if($("#logout").length<1) {
count = parseInt(my_getcookie("count")) || 0;
count < 5?my_setcookie("count",++count):location.href='LINK';
}
});

```

nguồn http://diendan.chinhphuc.info/