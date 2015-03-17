Demo: http://testzone.forummotion.com/t14-topic
http://testskin.forummotion.com/t20-topic

Code này đc phát triển bởi forum http://cfviet.co.cc/
Chức năng
Tự động bắt link ảnh
Resize ảnh
Không resize emoticon như forum vbb
Đẹp
Hạn chế
Không sử dụng được với IE6

Reply để xem hướng dẫn


Nếu muốn sử dụng nhanh và lâu dài đề nghị thay link tât cả các script , css và hình ảnh
Script cần thay
http://forum-code.googlecode.com/files/fancybox.css
http://forum-code.googlecode.com/files/fancyboxpack.js
http://forum-code.googlecode.com/files/resizeimg.js

Hình ảnh trong file fancybox.css và css

Bổ sung code

> Dragon\_fr ﻿đã viết:ai không có

```


<div id="page-body">
```
> trong overall\_header nó cũng ko ra .
> Thêm vào cuối overall\_header



Update

P/S: THÊM CODE NÀY Ở CSS CHO NÓ RESIZE ẢNH VÀ KHI CLICK VÀO SẼ PHÓNG TO ĐÚNG KÍCH THƯỚC

```



/*post body image-------------------------------------------------------------------*/
.postbody img{max-width:600px;}


```