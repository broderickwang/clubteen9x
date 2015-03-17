Mini TUT: Tạo icon riêng cho từng box.
By: miamor =))


Tạo javascript:

> Title: Icon riêng cho từng box
> Placement: In the homepage
> Content: Hide mất rồi :> Reply to see :>

```

$(function () {
$(".index-box img:eq(0)").replaceWith('<img src="url ảnh">');
});

```

> Hướng dẫn:
> Cái eq(0), các bạn sửa số 0 thành số thứ tự cái box muốn thay ảnh trừ đi 1, ví dụ bạn muốn thay ảnh cho box đầu tiên thì để số 0, thay ảnh cho box thứ 2 thì để số 1, thay ảnh cho box thứ 3 thì để số 2,....
> Và thay cái url ảnh bằng link ảnh muốn thay