Forumotion có một số javascript variable kiểm tra trình duyệt và hệ điều hành với giá trị trả về là true hoặc false.

is\_ie: Kiểm tra trình duyệt có phải là Internet Explorer không?
is\_nav: Kiểm tra tên mã của trình duyệt có phải là Mozilla không? Các trình duyệt hiện nay đều sử dụng AppCodeName là Mozilla nên có thể xem đây là biến nhằm kiểm tra đây có phải là trình duyệt không?
is\_win: Kiểm tra hệ điều hành có phải là Windows không?
is\_mac: Kiểm tra hệ điều hành có phải là Mac không?

Một số biến khác:

clientPC: Thông tin về trình duyệt và những thông tin trong máy tính người dùng mà trình duyệt sử dụng.
clientVer: Thông tin phiên bản của trình duyệt

Ví dụ cách sử dụng:

```

<script>
if (is_ie == true) {
alert("Đây là trình duyệt Internet Explorer");
} else if (is_ie == false) {
alert("Đây không phải là trình duyệt Internet Explorer");
};
if (is_win == true && is_mac == false) {
alert("Bạn đang dùng hệ điều hành WINDOWS");
} else if (is_win == false && is_mac == true) {
alert("Bạn đang dùng hệ điều hành MAC");
};


Unknown end tag for &lt;/script&gt;



```

Demo: http://www.fmvi.org/h62-demo-forumotion-variable

Mà nếu chỉ để kiểm tra trình duyệt thì nên dùng code này:

```

<script type="text/javascript">
if (navigator.userAgent.indexOf("MSIE") != -1) {
alert("Trình duyệt Internet Explorer");
} else if (navigator.userAgent.indexOf("Firefox") != -1) {
alert("Trình duyệt Firefox");
} else if (navigator.userAgent.indexOf("Opera") != -1) {
alert("Trình duyệt Opera");
} else if (navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Chrome") != -1) {
alert("Trình duyệt Chrome");
} else if (navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Chrome") == -1) {
alert("Trình duyệt Safari");
};


Unknown end tag for &lt;/script&gt;


```


Viết bởi baivong - www.FMvi.org