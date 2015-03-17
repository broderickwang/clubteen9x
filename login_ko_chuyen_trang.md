khi đăng nhập không chuyển về trang chủ, và không cần dùng trang trung gian, bạn chỉ cần làm như sau:
Đặt code này vào trước thẻ 

Unknown end tag for &lt;/form&gt;

 trong code đăng nhập của bạn.


```

<script type="text/javascript">document.write('<input type="hidden" name="redirect" value="' + location.href + '" />')

Unknown end tag for &lt;/script&gt;

```