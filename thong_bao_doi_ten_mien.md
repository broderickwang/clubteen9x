Đầu tiên, cài đặt tên miền cũ vào một forum demo, sau đó đặt đoạn code này vào trong overall\_header của forum demo đó.

Đặt bên dưới:

```


<meta name="title" content="{SITENAME_TITLE}{PAGE_TITLE}" />

```
Bằng code sau:

```


<!-- BEGIN switch_user_logged_out -->
<style type="text/css">
body {
display:none!important
}


Unknown end tag for &lt;/style&gt;


<script type="text/javascript">
alert("Thông báo: Diễn đàn đã sử dụng tên miền mới www.fmvi.vn");
window.location.replace(location.href.replace("fmvi.org", "fmvi.vn"))


Unknown end tag for &lt;/script&gt;


<!-- END switch_user_logged_out -->

```

Cách này chỉ là giải pháp tình thế thôi. Nó làm cho khách khi vào bằng tên miền cũ, tức là vào forum demo, sẽ bị chuyển qua forum chính. Còn thành viên khi vào forum demo sẽ không bị chuyển.

Cách đăng nhập thì xem ở đây: http://www.fmvi.vn/t571-ang-nhap-khi-khong-co-form-login#4707

Ai biết cách hay hơn thì giúp một TUT nhé!