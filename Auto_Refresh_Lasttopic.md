```

http://www.vandonstar.com/

```

HƯỚNG DẪN:

Đầu tiên các bạn vào mod\_recent\_topics và tìm từ đoạn

```

<!-- BEGIN scrolling_row -->

```
Cho đến

```

<!-- END scrolling_row -->
```

Nếu có thì xoá hết đoạn đó đi cho gọn.

Nếu đã xoá rồi thì tìm tiếp:

```

<!-- BEGIN recent_topic_row -->

```
Thay bằng:

```

<div id="RefreshVDS_Main"><div id="RefreshVDS"><!-- BEGIN recent_topic_row -->


```
Tiếp theo tìm:

```

<!-- END recent_topic_row -->
```

Thay bằng:

```

<!-- END recent_topic_row -->

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



```

Tiếp tục tìm:

```

<a href="{classical_row.recent_topic_row.U_TITLE}">{classical_row.recent_topic_row.L_TITLE}

Unknown end tag for &lt;/a&gt;


```

Thay Bằng:
```

<span class="ktrf"><a href="{classical_row.recent_topic_row.U_TITLE}">{classical_row.recent_topic_row.L_TITLE}

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



```

Xong xuôi lưu lại.

Bây giờ bạn vào
Modules :: Javascript codes management :: Create a new Javascript
Title: Auto Refresh Lasttopic
Placement:
- Đối với bạn nào có lasttopic chỉ xuất hiện phía ngoài thì chọn In the home page
- Đối với bạn nào có lasttopic xuất hiện trên tất cả các trang forum thì chọn In all the pages

Javascript Code:

```

$(window).load(function(){
rft = $('#RefreshVDS a:eq(0)').attr('href');
setInterval(function(){
$('#RefreshVDS .ktrf:eq(0)').load('forum #RefreshVDS a:eq(0)', function(){
rfs = $('#RefreshVDS a:eq(0)').attr('href');
if(rfs != rft)
$('#RefreshVDS_Main').fadeOut(1000).load('forum #RefreshVDS').fadeIn(1000);
rft = rfs;
});
}, 10000);
});

```

- Thời gian mặc định kiểm tra: 10s **bạn có thể sửa lại ở con số 10000
- Ẩn hiện mỗi lần refresh**bạn có thể bỏ qua sự ẩn hiện bằng cách xóa .fadeOut(1000) và .fadeIn(1000) hoặc thay hiệu ứng khác bằng cách thay thế bằng .slideUp(1000) và .slideDown(1000) nhìn cũng hay hay haha

Chú ý: Nếu bạn nào bị xung đột trên IE thì làm như sau:
Display :: Generalities :: Display list of connected members during last 24