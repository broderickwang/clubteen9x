Mẹo này giúp bạn tạo 1 form đăng nhập để mỗi lần đăng nhập không bị chuyển về trang chủ mà vẫn ở trang hiện tại Smile

> Bước 1: : Đầu tiên bạn cần có 1 form đăng nhập.Về bảng đăng nhập thì mỗi người một kiểu nên mình không hướng dẫn lại..
> Tìm trong đoạn form của bạn dòng :

> ```

<form
```

> sửa thành
```

<form class="c3login"

```
> Bước 2: :
> > Cách 1: Chèn vào Widget đoạn code sau:


> ```

<script type="text/javascript">
jQuery(function(){jQuery(".c3login").attr('action','/login?redirect='+this.location.pathname);});


Unknown end tag for &lt;/script&gt;


```
> > Để làm cho code chỉ chạy với khách :
> > Rồi phân quyền widget chỉ cho khách : (ảnh dưới)
> > ![http://a.imageshack.us/img684/7207/gueper.jpg](http://a.imageshack.us/img684/7207/gueper.jpg)


> Cách 2: Đặt code này vào trước thẻ trong code đăng nhập của bạn.

> ```

<script type="text/javascript">document.write('<input type="hidden" name="redirect" value="' + location.href + '" />')

Unknown end tag for &lt;/script&gt;




```