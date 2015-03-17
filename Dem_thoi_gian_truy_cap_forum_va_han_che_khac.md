Đoạn Script dưới đây dùng cookie để đếm thời gian truy cập diễn đàn. Bạn có thể xem thêm hướng dẫn về cookie trong Forumotion tại đây.

```

<script>
$(function(){
var timeloginfmvi = Math.floor((new Date()).getTime() / 1000);
if (my_getcookie("fmvitimelogin") == null) {
my_setcookie("fmvitimelogin", timeloginfmvi, true, "/h63-kiem-tra-thoi-gian-truy-cap");
alert("Chào mừng bạn đến với diễn đàn FMvi.Org");
} else if (my_getcookie("fmvitimelogin") != null) {
alert("Bạn đã truy cập diễn đàn trong "+Number(timeloginfmvi - my_getcookie("fmvitimelogin"))+" giây");
};
});


Unknown end tag for &lt;/script&gt;


```


Phát triển: Bạn có thể dùng Script trên để tạo các lệnh theo thời gian truy cập như lời nhắn theo thời gian hoặc chặn truy cập của khách sau một khoảng thời gian nào đó.

Code ví dụ:

```

<script>
$(function() {
if ($("#i_icon_mini_logout").length == 0) {
var timeloginfmvi = Math.floor((new Date()).getTime() / 1000);
if (my_getcookie("fmvitimelogin") == "null") {
my_setcookie("fmvitimelogin", timeloginfmvi, true, "/h63-kiem-tra-thoi-gian-truy-cap");
alert("Chào mừng bạn đến với diễn đàn FMvi.Org");
} else if (my_getcookie("fmvitimelogin") != "null") {
var numtimelogin = (timeloginfmvi - my_getcookie("fmvitimelogin"));
alert("Bạn đã truy cập diễn đàn trong " + numtimelogin + " giây");
if (numtimelogin >= 60) {
alert("Bạn đã truy cập diễn đàn quá thời gian cho phép. Vui lòng đăng nhập hoặc đăng ký.");
self.location = "http://www.fmvi.org/login";
};
};
} else {
my_setcookie("fmvitimelogin", "null", true, "/h63-kiem-tra-thoi-gian-truy-cap");
};
});


Unknown end tag for &lt;/script&gt;


```


Demo: http://www.fmvi.org/h63-kiem-tra-thoi-gian-truy-cap (chỉ dành cho khách)