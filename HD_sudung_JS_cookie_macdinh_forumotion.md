Trong Forumotion bạn có thể dùng javascript cookie một cách đơn giản hơn bằng cách dùng plugin cookie mặc định. Cách dùng như sau:

> Đặt cookie: my\_setcookie(name,value,sticky,path) hoặc my\_setcookie(name,value,sticky) hoặc my\_setcookie(name,value)

> name: Tên cookie.
> value: Giá trị cookie.
> sticky: Kiểu lưu cookie. Nếu muốn lưu vĩnh viễn thì thiết lập là true hoặc 1, nếu muốn lưu theo phiên thì thiết lập là false hoặc 0
> path: Thiết lập đường dẫn xác định tại miền

> Ghi chú: Nếu thiết lập sticky là false và path "/" thì có thể bỏ sticky và path hoặc bỏ path.

> Lấy cookie: my\_getcookie(name)




Ví dụ: Ta bắt đầu với đoạn mã không có cookie.

```

<span style="float: right; padding: 5px; background-color: white;" id="fmvitoggle">
<img alt="fmOpen" src="http://i48.servimg.com/u/f48/16/58/89/73/cursor10.png">


Unknown end tag for &lt;/span&gt;


<div id="fmvicookie" style="padding: 100px; background-color: gray;">


Unknown end tag for &lt;/div&gt;


<script>
$("span#fmvitoggle").click(function() {
$("div#fmvicookie").hide();
});


Unknown end tag for &lt;/script&gt;


```


Trong đoạn mã trên khi click vào span#fmvitoggle thì div#fmvicookie sẽ ẩn đi, và khi tải lại trang thì div#fmvicookie sẽ hiện trở lại.
Nếu bạn muốn khi tải lại trang div#fmvicookie ẩn thì chỉ có thể dùng cookie. Cách dùng như sau:

Bước 1: Đặt giá trị cookie. Trong thẻ script ví dụ trên, thêm my\_setcookie vào lệnh click

```

<script>
$("span#fmvitoggle").click(function() {
$("div#fmvicookie").hide();
my_setcookie("fmvicookie", "yes", 0, "/h60-demo-my_getcookie");
});


Unknown end tag for &lt;/script&gt;

```



Đoạn script trên, khi span#fmvitoggle được click thì ngoài lệnh ẩn div#fmvicookie nó sẽ thực hiện thêm lệnh đặt cookie có tên là fmvicookie với giá trị yes, kiểu lưu theo phiên và thiết lập đường dẫn là /h60-demo-my\_getcookie

Demo:    http://www.fmvi.org/h61-demo-my_setcookie tại trang demo này khi tải lại trang thì div#fmvicookie vẫn hiện, do thiết lập đường dẫn không phải ở đây.


Bước 2: Lấy cookie. Ta dùng my\_getcookie. Theo ví dụ trên, my\_getcookie("fmvicookie") sẽ trả về giá trị của cookie là yes

```

<script>
if (my_getcookie("fmvicookie") == "yes") {
$("div#fmvicookie").hide();
};


Unknown end tag for &lt;/script&gt;


```


Trong đoạn mã trên my\_getcookie("fmvicookie") sẽ lấy về giá trị cookie tên fmvicookie, nếu nó có giá trị là yes thì div#fmvicookie sẽ ẩn đi.
Demo: http://www.fmvi.org/h60-demo-my_getcookie đây là trang có đường dẫn phù hợp với cookie được lưu ở bước 1.
```
<div style="right: 5px;bottom: 5px;clip: inherit;position: fixed;width:auto;min-height:50px; border:1px solid #999; padding:1px 15px 5px 15px;background: #E4F6F8 url('http://i28.servimg.com/u/f28/13/58/60/43/ghim10.png') no-repeat;color:red;font-weight: bold;font-size:13px" id="thong_bao">
<a class="thbao-close" onclick="hideitem()" style="float:right;margin-top:2px;margin-right:-10px;cursor: pointer;"><img src="http://i48.servimg.com/u/f48/14/28/30/23/13110.png" title="Đóng lại" />

Unknown end tag for &lt;/a&gt;


<div style="padding-bottom:4px" align="center">
<img src="http://i68.servimg.com/u/f68/13/18/45/07/thongb10.gif" />


Unknown end tag for &lt;/div&gt;


<ul style="margin:0px;padding:0px;list-style-type: circle;padding-left:5px">
<li>Bài giới thiệu map DaF
<a href="/t6629-topic">Click here

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/li&gt;


<li>[Đấu trường] Khu vực tìm kèo war clan
<a href="/t6541-topic">Click here

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/div&gt;


<script>
function hideitem() {
document.getElementById("thong_bao").style.display = "none";
my_setcookie("thong_bao", "yes", 0);
}
if (my_getcookie("thong_bao") == "yes") {
document.getElementById("thong_bao").style.display = "none";
}


Unknown end tag for &lt;/script&gt;

```

Viết bởi baivong - www.FMvi.org