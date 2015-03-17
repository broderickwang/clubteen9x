Nếu forum của bạn thường phải đăng link để download bài học hay phần mềm gì đó với lượng host cố định thì bạn dùng code CSS sau để chuyển nó thành nút download cho đẹp.
```


.post-entry a[href*="mediafire.com/?"],.post-entry a[href*="4shared.com"] {
background: url("http://i12.servimg.com/u/f12/17/70/81/78/button10.png") no-repeat scroll center center transparent;
color: transparent;
display: block;
font-size: 0;
height: 33px;
overflow: hidden;
width: 116px;
}
```

Nếu forum bạn thường dùng host nào upfile thì thêm link host đó vào.
Cách đấy cũng không hoàn toàn ổn đâu, ví dụ ai đó đăng link trang chủ 4shared.com thì nó cũng sẽ chuyển thành nút download, thế nên nhớ đặt phần css đặc trưng một chút.
demo