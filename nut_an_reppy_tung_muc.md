Demo online : http://teengiaitri.123.st/f56-forum

Cách làm :


Vào ACP-->Modules--> HTML & JAVASCRIPT --> Javascript codes management

Enable Javascript code management : Có / Yes

Chọn Create a new javascript
Tạo 1 javascript mới :

Title **: Ẩn nút gửi + trả lời box ....
Placement : In the sub-forums + In the topics
Javascript Code** :

```

$(function(){$(".nav:contains('Thùng rác')").each(function(){$(".posting, #pun-qpost").remove();});});

```

Thay chữ 'Thùng rác' thành tên chuyên mục bạn muốn ẩn nhé.

Bài viết được chia sẻ từ: http://www.hotrofm.com/t2547-topic#ixzz2GWurYjiv
Copyright: hotrofm - bùng cháy đam mê