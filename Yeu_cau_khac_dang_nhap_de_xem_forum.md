Cách 1: Ngăn khách viếng thăm xem diễn đàn

Bước 1: Display - Templates - Overall\_header:
Tìm code:

```

<div id="login_popup">
```

và thêm vào đằng trước nó code sau:

```

<script language = "javascript">
self.location = "/login";


Unknown end tag for &lt;/script&gt;


```

Bước 2: Quản lý tổng thể - Forum - Cấu hình diễn đàn - Login popup:
Activate : chọn có

Cách 2: Dùng để đóng của forum dài hạn

HD: Modules - Portal & Widgets - Forum widgets management:
Display forum widgets : chọn có
Create a widget và nhập nội dung code:

```

<script language = "javascript">
self.location = "http://Độtkích.tk";


Unknown end tag for &lt;/script&gt;



```
Sau khi tạo xong widget thì kéo nó lên, click vào nút ![http://illiweb.com/fa/admin/icones/perms.png](http://illiweb.com/fa/admin/icones/perms.png) để phân quyền. Nếu muốn sửa chửa forum dài hạn thì dẫn link đến trang HTML thông báo đang sửa chữa và phân quyền xem tất cả trừ admin ra
Nhớ bấm xác nhận sau mỗi bước.
Lưu ý: Đối với cách này bạn cần có 1 trang HTML để đăng nhập, vì nó hiển thị trên tất cả các trang nên dù là Admin chưa đăng nhập thì bạn sẽ bị chuyển trang. Do không thể vào trang đăng nhập nên cuối cùng bạn vẫn không vào được forum để xác nhận quyền Admin.
Cách chữa cháy: Tắt Script của trình duyệt.

Viết bởi baivong - www.FMvi.tk