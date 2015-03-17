mình không share code hoàn chỉnh Exclamation tự thân vận động nhá
Nguyên lý là như thế này:

> Đầu tiên: Bật html
> Sau đó: Vào :
> Template ![http://illiweb.com/fa/admin/h2-breadcrumb-arrow.png](http://illiweb.com/fa/admin/h2-breadcrumb-arrow.png) Post & Tin nhắn ![http://illiweb.com/fa/admin/h2-breadcrumb-arrow.png](http://illiweb.com/fa/admin/h2-breadcrumb-arrow.png) posting\_body

> Tìm

```

<!-- END switch_roll_dice_old -->

```
> Chèn 1 nút nhấn ngay phía sau nó:

```

<button class="button2" onclick="bbfontstyle('Code mở','Code đóng');return false" type="button"><img src="http://ca5.upanh.com/upload/6/907/VK0.11093057_29781_1.png" />

Unknown end tag for &lt;/button&gt;



```
> Tùy ý chỉnh sửa :
> > "Code mở" là code phía trước nội dung khi nhấn nút
> > "Code đóng" là code sau
> > link ảnh trong code là icon trong nút ()



> Ví dụ :
> với đoạn code này

```

<button class="button2" onclick="bbfontstyle('<div class=thead>','</div>');return false" type="button"><img src="http://ca5.upanh.com/upload/6/907/VK0.11093057_29781_1.png" />

Unknown end tag for &lt;/button&gt;


```

> khi chọn một vùng văn bản và nhấn nút , trong bài viết sẽ hiển thị như

> Code:
> > <div>vùng văn bản được chọn</div>



> Kết quả khi viết bài :
> vùng văn bản được chọn
