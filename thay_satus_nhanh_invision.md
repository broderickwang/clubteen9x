![http://i15.servimg.com/u/f15/17/70/31/89/stt10.png](http://i15.servimg.com/u/f15/17/70/31/89/stt10.png)

> General > Site description:

```

<span style="display:none" class="name">{USERLINK}

Unknown end tag for &lt;/span&gt;


```

> Display > CSS:

```

.i-white{background-image:url(http://i40.servimg.com/u/f40/17/70/31/89/w111010.png)}
.i-edit{background-position:-96px -72px;}
.modal_box button:hover{border:1px solid rgba(231,45,45,0.44);cursor:pointer}
.modal_box button{border:1px solid rgba(0,0,0,0.1);border-radius:2px 2px 2px 2px;color:#444;cursor:default;font-size:11px;font-weight:700;height:29px;line-height:27px;margin-left:10px;min-width:72px;outline:0 none;padding:0 10px}
.modal_close{background:url(http://i40.servimg.com/u/f40/17/70/81/78/close-10.png) repeat scroll 0 0 transparent;content:"";height:11px;position:absolute;right:17px;top:17px;width:11px}
.modal_box{-moz-box-sizing:border-box;-o-box-sizing:border-box;-webkit-box-sizing:border-box;background:none repeat scroll 0 0 padding-box #FFF;border:1px solid rgba(0,0,0,0.333);box-shadow:0 4px 16px rgba(0,0,0,0.2);box-sizing:border-box;color:#000;display:none;outline:0 none;position:absolute;width:500px;padding:20px}
```
> Thay ![http://i40.servimg.com/u/f40/17/70/31/89/w111010.png](http://i40.servimg.com/u/f40/17/70/31/89/w111010.png) thành ![http://i40.servimg.com/u/f40/17/70/31/89/b101010.png](http://i40.servimg.com/u/f40/17/70/31/89/b101010.png) nếu bạn muốn Smile

> Javascript codes management > Creat a new javascript

> ```

$(function () {
$("#userlinks").prepend('<i id="chSta" class="i-white i-edit" title="Thay đổi status">

Unknown end tag for &lt;/i&gt;

<div id="stt" class="modal_box" style="display: none; position: fixed; opacity: 1; z-index: 999; left: 50%; margin-left: -250px; top: 200px;"><a class="modal_close" href="javascript:void(0)">

Unknown end tag for &lt;/a&gt;

Status: <b><span id="viewST">Bạn đang nghĩ gì?

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/b&gt;

<br><input id="textST" name="status" type="text"><button id="sendST" style="float:right">Đăng status

Unknown end tag for &lt;/button&gt;



Unknown end tag for &lt;/div&gt;

');
$("#chSta").click(function () {
$("#stt").show()
});
$(".modal_close").click(function () {
$(this).parent(".modal_box").hide()
});
var idUser = $(".name a").attr("href").split("u=")[1];
if(idUser != -1) {
$("#STfmvi").show();
if(my_getcookie("fmviST") != null) {
$("#viewST").text(unescape(my_getcookie("fmviST")));
} else {
$.get("/u" + idUser, function (c) {
$("#viewST").text(jQuery(c).find("#profile_field_13_-8").val());
my_setcookie("fmviST", escape($("#viewST").text()));
})
}
$("#sendST").click(function () {
var a = $("#textST").val();
if(a != "") {
$.post("/ajax_profile.forum?jsoncallback=?", {
id: -8,
user: idUser,
active: "1",
content: '[["profile_field_13_-8", "' + a + '"]]',
tid: $("#qjump input[name='tid']").val()
}, function (e) {
if(e[-8] == undefined) {
alert("Không tìm thấy dữ liệu hoặc người quản lý không cho phép")
} else {
$("#viewST, .showST.u" + idUser).text(e[-8]);
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
```

Cái profile\_field\_13_-8 trong code trên là id của cái status nhé_


> baivong ﻿đã viết:id của field Status: Mặc dịnh của fm là -8, nếu bạn dùng field khác thì nó là con số cuối cùng trong id của phần tử chứa nó, bật firebug lên là thấy ngay.

> id của phần nhập liệu field Status: khi bạn sửa status trong profile, nó hiện ra 1 cái input để bạn nhập, và đây là id của cái input đấy.

> Nếu bạn không thể tìm ra nó thì dùng đoạn mã sau:

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


> Chỉ cần tạo một trang HTML, cho nó vào, bấm Preview rồi nhập tên của profile field bạn cần tìm. Nhớ nhập đúng chữ hoa thường, đợi 1 tý là nó trả kết quả về.
> Demo: http://www.fmvi.vn/h162-check-id-profile-field



Giáng sinh an lành IFC-er Thiên thần