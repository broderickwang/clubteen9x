Demo: ![http://i12.servimg.com/u/f12/17/70/81/78/12-19-11.jpg](http://i12.servimg.com/u/f12/17/70/81/78/12-19-11.jpg)

Mod này được viết với ý tưởng của ligerv. Lúc đầu, mình nghĩ chỉ là thêm màu mè một chút, nhưng nghĩ lại vẫn thấy có lợi. Nếu như bạn đăng nhập sai, bạn sẽ bị chuyển về trang kiểm tra lỗi, như thế thì các mod đăng nhập không chuyển trang trước đây xem như bó tay. Nếu bạn nhập sai 2 lần, 3 lần thì bạn phải tải trang 4, 6 lần với đầy đủ css, js...
Với cách này có thể nói là khắc phục các vấn đề trên, khi sử dụng mod này bạn không cần đến các mod đăng nhập không chuyển trang nào khác.
Và bây giờ là cách viết.

Đầu tiên bạn cần một form đăng nhập với đủ các thông tin cơ bản để khi thành viên không bật javascript vẫn đăng nhập được. Nên đặt ở Templates overall\_header
CSS:
```


Code: Chọn toàn bộMàu nổi bật
/* form đăng nhập - www.fmvi.vn */
#fmvilogin{position:fixed;left:0;background-color:#FFF;bottom:0;z-index:999}
.login_form{border:3px double #666;width:300px;padding:15px;}
.login_form dl{height:20px;line-height:20px;margin:10px 0;}
.login_form dt{float:left;text-align:right;width:6em;}
.login_form dd{margin-left:7em;position:relative;}
.login_form .postx{border:1px solid #666!important;height:16px;width:85px;}
.login_form input{margin:0!important;}
.login_form .submit{background-color:#23A2F1!important;border-radius:0!important;background-image:none!important;border:1px solid #1584BF!important;height:20px !important;color:#FFF!important;cursor:pointer;font-weight:700;padding:0 7px!important;}
.login_form .submit:hover{background-color:#5A0074!important;border-color:#8C3383!important;}
.login_form .submit:active{background-color:#045C06!important;border-color:#017B00!important;}
/* Hiệu ứng kiểm tra đăng nhập */
.login_form dd img{display:none;height:20px;left:0;opacity:0.3;position:absolute;top:0;width:89px;}
.error label{color:red;}
.error input{border:1px solid #F5A7A7;background-color:#F2DEDE;}
.success label{color:green;}
.success input{background-color:#A0FBA8;border:1px solid #27B539;}

```

HTML:```
    <!-- BEGIN switch_user_logged_out -->
<form id="fmvilogin" action="/login" method="post" name="form_login">
<div class="login_form">
<dl>
<dt>
<label for="username">Tài khoản :

Unknown end tag for &lt;/label&gt;




Unknown end tag for &lt;/dt&gt;


<dd>
<input tabindex="1" type="text" class="postx" size="10" name="username" />
<img src="http://i15.servimg.com/u/f15/16/58/89/73/ajax-l10.gif" />


Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<dl style="float: right; margin-top: -30px;">
<dt>
<label for="autologin">Ghi nhớ?

Unknown end tag for &lt;/label&gt;




Unknown end tag for &lt;/dt&gt;


<dd>
<input tabindex="3" type="checkbox" value="true" class="radio" name="autologin" checked="checked" />


Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<dl>
<dt>
<label for="password">Mật khẩu :

Unknown end tag for &lt;/label&gt;




Unknown end tag for &lt;/dt&gt;


<dd>
<input tabindex="2" type="password" class="postx" size="10" name="password" />
<img src="http://i15.servimg.com/u/f15/16/58/89/73/ajax-l10.gif" />


Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<dl style="float: right; margin-top: -30px;">
<dt>&nbsp;

Unknown end tag for &lt;/dt&gt;


<dd>
<input tabindex="4" type="submit" class="submit" name="login" value="Đăng nhập" />


Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/form&gt;


<!-- END switch_user_logged_out -->```
Demo:
![http://i12.servimg.com/u/f12/17/70/81/78/demolo10.jpg](http://i12.servimg.com/u/f12/17/70/81/78/demolo10.jpg)
HTML đã xong, bạn có thể tùy biến các kiểu, hoặc sử dụng form login của forum bạn để làm khi đã hiểu cách dùng javascript mà mình sẽ hướng dẫn sau đây:

Đầu tiên bạn cần chặn form chạy khi submit để không bị chuyển trang.

```

$("#fmvilogin").submit(function () {
// Xử lý ở đây
return false
});
```


Dùng ajax để gửi dữ liệu đăng nhập:

```

$.post("/login?" + $("#fmvilogin").serialize(), {
login: "ok"
}, function (a) {
// Xử lý ở đây
});
```


Bây giờ khi có kết quả trả về, ta sẽ phân ra 3 trường hợp đăng nhập: Thành công, lỗi và bị chặn.
Nếu đăng nhập thành công thì trên thanh nav bar sẽ có nút thoát, nếu forum bạn không dùng nav bar thì dùng cách khác để xác định, vì thế lưu ý khi xem hướng dẫn này.

Bị chặn sẽ có 2 trường hợp: Bị ban và nhập sai PW quá giới hạn (10 lần).
Các trường hợp khác là lỗi thông tin đăng nhập.

```

if ($(a).find("#logout").length) {
// Thành công
} else if ($(a).find("p.message").text().indexOf("You have been banned") != -1 || $(a).find("p.message").text().indexOf("The maximum number of") != -1) {
// Bị chặn
} else {
// Lỗi đăng nhập
}
```


Xử lý đăng nhập thành công mình dùng cách refresh, Zero đề nghị dùng cách load body, tùy các bạn vậy.
```

window.location.reload();
```
Khi bị chặn thì mình dùng alert box để thông báo, nó có thể bị addon better popup của chrome chặn, nếu bạn có thể thì dùng một lightbox hoặc làm dòng thông báo đâu đó cho đẹp.
```

alert($(a).find("p.message").html().replace("<br>", "\n"));
```
Trường hợp lỗi đăng nhập mình phân ra lỗi ID và PW.
Trước tiên là kiểm tra ID, mình sẽ dùng ajax tìm thành viên. Mình sẽ kiểm tra giá trị ID mình nhập vào có trùng với kết quả tìm kiếm không? Nếu không trùng là sai ID (xem như sai luôn PW), nếu trùng là sai PW (vì đang bị lỗi đăng nhập).

```

$.get("/search?mode=searchuser&fieldname=username", {
search_username: $("#fmvilogin input[name='username']").val(),
time: timestamp()
}, function (b) {
$("#fmvilogin dl:eq(0) img, #fmvilogin dl:eq(2) img").hide();
if ($(b).find("#username_list").val() != $("#fmvilogin input:eq(0)").val()) {
// Sai ID
} else {
// Sai PW
}
});


```
Về mặt kiểm tra như thế là ổn, giờ mình sẽ thêm chút màu mè làm hiệu ứng cho thành viên biết.
Ở đây mình dùng một ảnh loading cho lúc đang kiểm tra dữ liệu. Màu lục để đánh dấu ID đúng. Màu đỏ để đánh dấu ID và PW sai. Nếu ID và PW đúng thì refresh trang rồi chẳng cần hiệu ứng nữa.

Dưới đây là toàn bô javascript hoàn chỉnh cho bước 2 đã bổ sung phần hiệu ứng và một bước kiểm tra khi ID đúng PW sai. Bạn có thể tạo dùng chức năng tạo file javascript và đặt ở toàn diễn đàn.

```

$(function () {
$("#fmvilogin").submit(function () {
$.post("/login?" + $("#fmvilogin").serialize(), {
login: "ok"
}, function (a) {
if ($(a).find("#logout").length) {
window.location.reload();
} else if ($(a).find("p.message").text().indexOf("Số lần đăng nhập") != -1 || $(a).find("p.message").text().indexOf("Bạn đã bị cấm truy cập") != -1 || $(a).find("p.message").text().indexOf("You have been banned") != -1 || $(a).find("p.message").text().indexOf("The maximum number of") != -1) {
$("#fmvilogin dl:eq(0) img, #fmvilogin dl:eq(2) img").hide();
$("#fmvilogin dl:eq(0), #fmvilogin dl:eq(2)").removeClass();
alert($(a).find("p.message").html().replace(/<br>/gi, "\n"));
} else {
if ($("#fmvilogin dl:eq(0)").attr("class") == "success") {
$("#fmvilogin dl:eq(2) img").hide();
$("#fmvilogin dl:eq(2)").removeClass().addClass("error");
$("#fmvilogin dl:eq(2) input").focus()
} else {
$.get("/search?mode=searchuser&fieldname=username", {
search_username: $("#fmvilogin input[name='username']").val(),
time: timestamp()
}, function (b) {
$("#fmvilogin dl:eq(0) img, #fmvilogin dl:eq(2) img").hide();
if ($(b).find("#username_list").val() != $("#fmvilogin input:eq(0)").val()) {
$("#fmvilogin dl:eq(0), #fmvilogin dl:eq(2)").removeClass().addClass("error");
$("#fmvilogin dl:eq(0) input").focus()
} else {
$("#fmvilogin dl:eq(0)").removeClass().addClass("success");
$("#fmvilogin dl:eq(2)").removeClass().addClass("error");
$("#fmvilogin dl:eq(2) input").focus()
}
});
}
}
});
$("#fmvilogin dl:eq(0), #fmvilogin dl:eq(2)").not(".success").removeClass().find("img").show();
$("#fmvilogin dl:eq(0) input, #fmvilogin dl:eq(2) input").change(function () {
$(this).parent().parent().removeClass()
});
return false
});
});

```

Demo của bài viết này: http://www.fmvi.vn/h164-kiem-tra-ang-nhap