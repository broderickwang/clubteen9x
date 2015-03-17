Demo:

```

http://www.12b6pro.tk/t196-topic

```

Acc test:

```


ID:Test1
pass:12b6pro.tk
```


1/Ẩn link
Tạo 1 trang js ko cho hiện ở đâu cả

```

$(document).ready(function(){$(".entry-content").find("a").each(function(){$(this).replaceWith('[Bạn cần phải <a href="/login">đăng nhập

Unknown end tag for &lt;/a&gt;

 hoặc <a href="/register">đăng ký

Unknown end tag for &lt;/a&gt;

 để thấy liên kết này]')});});

```

Vào viewtopic dán đoạn

```

<!-- BEGIN switch_user_logged_out -->
<script src="link trang js vừa tạo" type="text/javascript">

Unknown end tag for &lt;/script&gt;


<!-- END switch_user_logged_out -->

```

2/Ẩn ảnh
Tương tự các bước trên, thay code link js:

```

$(document).ready(function(){$(".entry-content").find("img").not("img[src*='imgfast']").each(function(){$(this).replaceWith('[Bạn cần phải <a href="/login">đăng nhập

Unknown end tag for &lt;/a&gt;

 hoặc <a href="/register">đăng ký

Unknown end tag for &lt;/a&gt;

 để xem ảnh này]')});});

```

Sẽ k bị ẩn emoticon, ngoài ra đều ẩn cả.

Phpbb2 thì tìm trong đoạn js, sửa

Code: Chọn nội dung CODE
> entry-content


thành

```

postbody```
Lưu ý: Ai đang dùng xem ảnh bằng fancybox, colorbox,... nói chung là các trình xem ảnh thì ko cần phải ẩn ảnh, vì ảnh đã dc replace thành link rồi, nên sẽ tự ẩn luôn.