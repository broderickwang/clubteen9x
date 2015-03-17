Đây là bài viết đầu tiên mình thử nghiệm việc viết tut ở mức sơ lược nhưng đi sâu vào giải thích cách sử dụng hơn. Trong bài viết dưới đây mình dùng nick admin, uid=1 làm ví dụ, nó cũng không liên quan nhiều đến cách sử dụng code này.

Demo: ![http://i12.servimg.com/u/f12/17/70/81/78/12-14-10.jpg](http://i12.servimg.com/u/f12/17/70/81/78/12-14-10.jpg)

http://baivong.forumclan.com/t1718-test-status#5429
ID: khachviengtham
PW: 2012fmvi


Bước 1: Tách riêng và hiển thị status trong bài viết.

Templates >> viewtopic\_body:

Đầu tiên bạn cần xóa cái status trong bài viết đi, bạn tìm đoạn này:

```


{postrow.displayed.profile_field.LABEL}{postrow.displayed.profile_field.CONTENT}

```

Thay bằng:

```


<span class="fmviTT">{postrow.displayed.profile_field.LABEL}<span class="fmviZZ">{postrow.displayed.profile_field.CONTENT}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;


```


Và ta sẽ dùng code sau để xóa nó:

```


$(".fmviTT:contains('Status')").remove();

```


Tiếp đó, bạn đặt code dưới đây vào chỗ nào muốn hiện status trong bài viết. Nó là toàn bộ profile field của thành viên.

```


<div style="display:none" class="showST">
{postrow.displayed.POSTER_NAME}
<!-- BEGIN profile_field -->
<p>
{postrow.displayed.profile_field.LABEL}
<strong>
{postrow.displayed.profile_field.CONTENT}


Unknown end tag for &lt;/strong&gt;




Unknown end tag for &lt;/p&gt;


<!-- END profile_field -->


Unknown end tag for &lt;/div&gt;


```



Trong template là thế, còn ngoài bài viết thì nó hiện như thế này:

```


<div style="display:none" class="showST">
<a href="/u1">
<span style="color:#FF2BC6">
<strong>admin

Unknown end tag for &lt;/strong&gt;




Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/a&gt;


<p>
/* Các field linh tinh khác */


Unknown end tag for &lt;/p&gt;


<p>
<span><span style="color:#FF0A0A;">Status

Unknown end tag for &lt;/span&gt;

:

Unknown end tag for &lt;/span&gt;


<strong>Nội dung status

Unknown end tag for &lt;/strong&gt;




Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;


```



Tất nhiên là có nhiều field khác, nhưng ta chỉ quan tâm cái status thôi, bây giờ ta sẽ dùng jQuery để xóa hết mất cái linh tinh, chỉ lấy ra Nội dung status thôi.

```


$(".showST").each(function () {
var a = $(this).find("a[href^='/u']").attr("href").slice(2);
var b = $(this).find("p > span:contains('Status')").next("strong").text();
$(this).replaceWith('<span class="showST ' + a + '">' + b + '

Unknown end tag for &lt;/span&gt;

');
});

```


Kết quả sẽ ra thế này:

```


<span class="showST u1">Nội dung status

Unknown end tag for &lt;/span&gt;


```


Phần class u1 sẽ thay đổi tùy theo tác giả bài viết, mình làm thế này để tiện cho việc phân biệt status của ai, dùng cho phần cập nhật status sau này. Có cách gọn hơn, nhưng đây là cách đơn giản nhất. Theo cách này bạn chỉ cần đặt mớ Tempate kia ở đâu trong bài viết thì status sẽ hiện đúng chỗ đấy.

Toàn bộ code hoàn chỉnh của bước 1:

```


<script type="text/javascript">
$(".showST").each(function () {
var a = $(this).find("a[href^='/u']").attr("href").slice(2);
var b = $(this).find("p > span:contains('Status')").next("strong").text();
$(this).replaceWith('<span class="showST ' + a + '">' + b + '

Unknown end tag for &lt;/span&gt;

');
});
$(".fmviTT:contains('Status')").remove();


Unknown end tag for &lt;/script&gt;



```


Đặt code trên vào cuối viewtopic\_body.


Bước 2: Cập nhật Status tại mọi nơi trên diễn đàn.

General > Site description:

```


<span style="display:none" id="userID">{USERLINK}

Unknown end tag for &lt;/span&gt;



```


USERLINK sẽ cho ra cấu trúc HTML như thế này:

```


<a href="http://www.fmvi.vn/profile.forum?mode=viewprofile&amp;u=1">admin

Unknown end tag for &lt;/a&gt;


```



Ta sẽ dễ dàng lấy ra tên và số thứ tự (uid) của thành viên đang truy cập.

```


<script type="text/javascript">
var nameUser = $("#userID a").text();
var idUser = $("#userID a").attr("href").split("u=")[1];


Unknown end tag for &lt;/script&gt;




```

Tuy nhiên, trong bài này ta không cần dùng đến nameUser

Cấu trúc HTML cần có 2 phần Nhập và Đăng status:

```


<input id="textST" name="status" type="text" />
<button id="sendST">Đăng status

Unknown end tag for &lt;/button&gt;




```

Một cái input để nhập liệu, và một button để... nhấn. Bạn có thể thay bằng bất cứ cách nào khác khi đã hiểu cách sử dụng nó.

Bây giờ ta sẽ viết mã jQuery để gửi status:

```


<script type="text/javascript">
$("#sendST").click(function () { // Đặt lệnh khi click vào button#sendST
var a = $("#textST").val(); // Giá trị của input#statusT
if (a != "") { // Có nghĩa là không chạy khi input#statusT không có giá trị
$.post("/ajax_profile.forum?jsoncallback=?", { // Sử dụng ajax để gửi Status
id: -8, // id của field Status
user: idUser, // uid của thành viên đang truy cập
active: "1", // Mặc định
content: '[["profile_field_13_-8", "' + a + '"]]', // id của phần nhập liệu field Status
tid: $("#qjump input[name='tid']").val() // tid của thành viên đang truy cập
}, function (data) {
// Xử lý ở đây
}, "json");
}
});
});


Unknown end tag for &lt;/script&gt;



```


Phần chú thích mình đã ghi kỹ trong code, nên chỉ giải thích thêm một số chỗ sau:

id của field Status: Mặc dịnh của fm là -8, nếu bạn dùng field khác thì nó là con số cuối cùng trong id của phần tử chứa nó, bật firebug lên là thấy ngay.

id của phần nhập liệu field Status: khi bạn sửa status trong profile, nó hiện ra 1 cái input để bạn nhập, và đây là id của cái input đấy.

Nếu bạn không thể tìm ra nó thì dùng đoạn mã sau:

```


<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;


<script type="text/javascript">
var a = prompt("Nhap ten field can tim:", "");
jQuery.get("/u1?change_temp", function (data) {
alert(jQuery(data).find("dt:contains('"+a+"')").parent("dl").attr("id").slice(8));
alert(jQuery(data).find("dt:contains('"+a+"')").parent("dl").find("span:last input").attr("id"))
});


Unknown end tag for &lt;/script&gt;



```


Chỉ cần tạo một trang HTML, cho nó vào, bấm Preview rồi nhập tên của profile field bạn cần tìm. Nhớ nhập đúng chữ hoa thường, đợi 1 tý là nó trả kết quả về.
Demo: http://www.fmvi.vn/h162-check-id-profile-field

Bây giờ đến phần sử lý sau khi gửi.

Code này mình tra trong trang profile, họ dùng json để tạo mảng lưu dữ liệu vào, cái dòng content ấy. Nói chung là sau khi xử lý json thì nó sẽ ra thế này:
[[profile\_field\_id, value]]

Khi mình gửi xong nó trả về kết quả dạng:
jQueryABC\_XYZ({profile\_field\_id:value})
Cái dãy số ABC\_XYZ đằng trước có vẻ như là thời gian gửi, nó thay đổi mỗi khi bạn đăng status mới, rất may là nó không liên quan gì đến bài này, nếu không mình chẳng biết lấy đâu ra dãy số đấy.
profile\_field\_id là cái id -8 của field Status, ai dùng field khác thì xem lại phần trên.
value là cái ta cần, để lấy nó, ta dùng:

```


data[-8]

```


Nếu kết quả trả về undefined là lỗi. Code như sau:

```


if(data[-8] == undefined) {
// Lỗi
} else {
// Thành công
}

```


Khi bạn gửi thành công, mình sẽ cập nhật status bằng cái value đấy luôn.

```


$(".showST.u" + idUser).text(data[-8])

```


Xem lại một chút, đây là kết quả cuối bước 1:

```


<span class="showST u1">Nội dung status

Unknown end tag for &lt;/span&gt;


```



Trong ví dụ này là thành viên có uid=1 đang thay status, thế nên đoạn mã trên sẽ tìm đúng status của người đó để cập nhật. Đấy là khi bạn đang ở trong trang xem bài viết, còn nếu bạn ở ngoài trang chủ hay hòm thư thì sao? phải làm một chổ hiển thị đẹp đẹp tý.

```


<span id="viewST">

Unknown end tag for &lt;/span&gt;



```


Đặt nó ở chỗ nào bạn thích, nên đặt vào overall\_header luôn để đi đâu cũng sài được. Sửa lại mã trên như sau:

```


$("#viewST, .showST.u" + idUser).text(data[-8])


```

Nếu vậy thì bình thường, khi bạn không thực hiện cập nhật status, cái span#viewST này sẽ trống trơn, chuyển trang mới là mất.

Vậy ta sẽ dùng cách tải status ngay khi đăng nhập.

```


$.get("/u" + idUser, function (data) { // Tải dữ liệu trang cá nhân
$("#viewST").text($(data).find("#profile_field_13_-8").val()) // Lấy giá trị của field Status
});

```


Nếu cứ mỗi lúc chuyển trang lại tải một lần nó sẽ khá bất tiện và làm chậm forum. Thế nên sau lần tải này, mình sẽ lưu luôn nó vào cookie của trình duyệt luôn cho tiện.
```


my_setcookie("fmviST", $("#viewST").text()); // Đặt giá trị của status cho cookie fmviST
if (my_getcookie("fmviST") != null) {
$("#viewST").text(my_getcookie("fmviST")); // Cập nhật status từ cookie
}

```


Toàn bộ code hoàn chỉnh của bước 2:

```


<div id="STfmvi" style="display:none">
<p>
Status: <span id="viewST">Bạn đang nghĩ gì?

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/p&gt;


<p>
<input id="textST" name="status" type="text" />
<button id="sendST">Đăng status

Unknown end tag for &lt;/button&gt;




Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;


<script type="text/javascript">
jQuery(function () {
var idUser = jQuery("#userID a").attr("href").split("u=")[1];
if(idUser != -1) {
jQuery("#STfmvi").show();
if(my_getcookie("fmviST") != null) {
jQuery("#viewST").text(unescape(my_getcookie("fmviST")));
} else {
jQuery.get("/u" + idUser, function (c) {
jQuery("#viewST").text(jQuery(c).find("#profile_field_13_-8").val());
my_setcookie("fmviST", escape(jQuery("#viewST").text()));
})
}
jQuery("#sendST").click(function () {
var a = jQuery("#textST").val();
if(a != "") {
jQuery.post("/ajax_profile.forum?jsoncallback=?", {
id: -8,
user: idUser,
active: "1",
content: '[["profile_field_13_-8", "' + a + '"]]',
tid: jQuery("#qjump input[name='tid']").val()
}, function (e) {
if(e[-8] == undefined) {
alert("Không tìm thấy dữ liệu hoặc người quản lý không cho phép")
} else {
jQuery("#viewST, .showST.u" + idUser).text(e[-8]);
my_setcookie("fmviST", escape(e[-8]));
}
}, "json")
}
})
}
$("a[href^='/login?logout']").click(function () {
document.cookie = "fmviST=; expires=Monday, December 1, 2010 0:0:0 AM;"
});
});


Unknown end tag for &lt;/script&gt;



```


Viết bởi baivong - www.fmvi.vn