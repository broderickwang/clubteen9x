Mình thấy cách này khá ổn nên đã viết một ứng dụng để tạo ra code javascript có chức năng như thế.

Code này sẽ giúp bạn lấy toàn bộ links avatar thành viên trên diễn đàn về dưới dạng mảng Array().
Mảng này có dạng:

```


Ufmvi[n] = "url avatar";
```

Trong đó n tương ứng với số thứ tự thành viên, url avatar là link avatar tương ứng.

Demo: http://www.fmvi.vn/h145-tai-du-lieu-avatar-thanh-vien

Hướng dẫn: ![http://i40.servimg.com/u/f40/17/70/81/78/chuthi10.jpg](http://i40.servimg.com/u/f40/17/70/81/78/chuthi10.jpg)
1 - Thời gian chờ giữa 2 lần tải. Click để thay đổi.
2 - Số thành viên trong một trang (Tự cập nhật).
3 - Chú thích, thông báo tiến trình.
4 - Phím chức năng:
Chọn trang: Nhập số trang bắt đầu tải.
Bắt đầu: Lấy thông tin từ trang 1 hoặc trang tiếp theo sau khi Dừng.
Dừng lại: Dừng tiến trình, nhấn nút Bắt đầu để tiếp tục.
5 - Nơi xuất thông tin dưới dạng mảng.
6 - Thứ tự các trang trong danh sách thành viên, click vào số trang để bắt đầu tải.

Bước 1: View source trang demo (Ctrl U) để lấy code. Tạo trang HTML và chép code đó vào.
Do you wish to use your forum header and footer ? chọn Không

Bước 2: Nhấn Bắt đầu để chạy ứng dụng cho đến khi tải hết tất cả các trang.
Nếu mạng tốt bạn có thể chỉnh thời gian chờ khoảng 2500 cho nhanh, nếu khi tải gặp lỗi bạn hãy tăng thêm thời gian chờ.
Trong trường hợp tải giữa chừng, ví dụ 4rum bạn có 20 trang, bạn tải đến trang 10 thì bận việc phải Dừng lại thì hãy lưu lại phần code đã lấy được. Khi tải tiếp bạn xóa dòng Ufmvi=Array(); trong ô số 5 (nếu trang vẫn mở và code chưa bị mất thì chỉ việc bấm Bắt đầu để tiếp tục) và bấm Chọn trang để đến tải tiếp từ trang 11, sau đó nối 2 phần code lại.
Dùng chức năng tạo file javascript của forum để tạo một file có tên là avatar data.
Check vào In the home page và In the sub-forums

Bước 3: Tạo file javascript có tên avatar index\_box và nhập code sau vào:
Check vào In the home page và In the sub-forums

```


$(function () {
$(".tcr a[href^='/u']").each(function () {
var a = $(this).attr("href").match(/\d+/),
a = void 0 == Ufmvi[a] ? "http://i48.servimg.com/u/f48/16/58/89/73/noavat10.jpg" : Ufmvi[a];
$(this).parents(".tcr").prepend('<span><img class="ava_fmvi"src="' + a + '" />

Unknown end tag for &lt;/span&gt;

')
})
});```


Bước 4: Thêm vào CSS:

```


.ava_fmvi {width: 50px; height: auto; float: left; clear: left; padding-right: 5px}
.tcr span {display: inline-block}
```

Lưu ý: Code này không tự cập nhật nên mỗi ngày admin phải chạy ứng dụng một lần lấy code cho file avatar data. Nếu forum có quá đông thành viên thì có lẽ cách này không phù hợp, còn đông đến bao nhiêu mới là giới hạn thì mình không biết, các bạn dùng và gửi ý kiến bên dưới nhé.