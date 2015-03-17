Vừa ghé qua 4allvn, gặp một trường hợp sửa templates hay gì đó, mà bị mất luôn khung đăng nhập. Trong trường hợp đó, bạn đơn giản chỉ cần nhập dòng sau vào thanh địa chỉ trình duyệt và nhấn ENTER:
```

http://URL/login?password=PW&username=ID&login=true
```
Trong đó

> URL: địa chỉ forum cần đăng nhập
> PW: mật khẩu của bạn
> ID: là tên đăng nhập


Ví dụ: ```
http://www.fmvi.vn/login?password=**********&username=admin&login=true
```
Ngoài ra bạn cũng có thể thêm vào:
&autologin=true: Tự động đăng nhập, tương đương check vào ô Đăng nhập tự động mỗi khi truy cập khi đăng nhập bình thường bằng form login.
&redirect=LINK: Thay LINK bằng địa chỉ trang (trong forum) cần chuyển tới sau khi đăng nhập.