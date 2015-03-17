Demo:

> Demo đã hết hạn sử dụng - handsomevip007



Vào viewforum\_body đặt code này ở chỗ bạn muốn banner hiện

```

<div class="banner{FORUM_ID}">

Unknown end tag for &lt;/div&gt;



```

Tạo 1 trang js cho hiện ở subforum

```

$(function(){$(".banner1").replaceWith('<center><img src="link ảnh"/>

Unknown end tag for &lt;/center&gt;

');});



Tìm

<code>
banner1
```

Sửa số 1 thành id của box bạn muốn cho banner đó hiện.

Làm với box khác thì thêm vào trước

```

});
```

Đoạn

```

$(".banner[id box]").replaceWith('<center><img src="link ảnh"/>

Unknown end tag for &lt;/center&gt;

');
```

Có thể ứng dụng làm nhiều cái khác, như mình cho kết quả Euro vào box Bóng đá.