Ghi chú: Trước đây một số mods của mình viết phải dùng iframe nếu muốn lấy dữ liệu từ một số trang không load trực tiếp được. Sau này mình biết đến ajax, thấy tiện hơn khá nhiều, xử lý cũng nhanh và nhẹ hơn nên có viết một số đoạn để áp dụng trong forumotion.
Một vài lý do... nên mình không phát triển FMvi được, bài này nhằm chia sẽ lại cho các bạn chưa biết, về cách dùng ajax trong forumotion. Đây chỉ là một số đoạn code mẫu, dành cho những bạn đã hiểu cách dùng javascript, muốn phát triển mods, nên mình sẽ không giải thích gì thêm.

Gửi bài viết mới:

```


<script type="text/javascript">
function sendtopic(a, b, c) {
jQuery.post("/post", {
f: a,
mode: "newtopic",
post_icon: 1,
subject: b,
message: c,
post: "Send"
})
}


Unknown end tag for &lt;/script&gt;


<button type="button" onclick="sendtopic(42, 'Tiêu đề', 'Nội dung');">Gửi bài mới vào chuyên mục 42

Unknown end tag for &lt;/button&gt;



```

Bình chọn bài viết:

```


<script type="text/javascript">
function voteajax(a, b, c) {
jQuery.post("/t" + a + "-FMvi?p_vote=" + b + "&eval=" + c)
}


Unknown end tag for &lt;/script&gt;


<button type="button" onclick="voteajax(564, 4539, 'plus');">Cộng điểm bài viết 564-#4539

Unknown end tag for &lt;/button&gt;


<button type="button" onclick="voteajax(564, 4540, 'minus');">Trừ điểm bài viết 564-#4540

Unknown end tag for &lt;/button&gt;


```


Tìm tên thành viên:

```


<script type="text/javascript">
function searchU(a) {
jQuery.get("/search?mode=searchuser&fieldname=username", {
search_username: a,
time: timestamp()
}, function (data) {
jQuery("#baivong").html(jQuery(data).find("#username_list"));
});
}


Unknown end tag for &lt;/script&gt;


<button type="button" onclick="searchU('ad*');">Tìm tên thành viên ad*

Unknown end tag for &lt;/button&gt;


<div id="baivong">

Unknown end tag for &lt;/div&gt;


```


Viết lên tường:

```


<script type="text/javascript">
function sendwall(a, b, c, d) {
jQuery.post("/privmsg" + d, {
post_icon: 3,
subject: a,
message: b,
username: c,
u: d,
mode: "post_profile",
folder: "profile",
post: "Send"
})
}


Unknown end tag for &lt;/script&gt;


<button type="button" onclick="sendwall('Tiêu đề', 'Nội dung', 'baivong', 15);">Viết lên tường nhà baivong (uid = 15)

Unknown end tag for &lt;/button&gt;



```

Gửi tin nhắn:

```


<script type="text/javascript">
function sendpm(a, b, c, d) {
jQuery.post("/privmsg, {
"mode": "post",
"subject": a,
"message": b,
"username[]": c,
"u": d,
"folder": "inbox",
"post": "Send"
})
}


Unknown end tag for &lt;/script&gt;


<button type="button" onclick="sendpm('Tiêu đề', 'Nội dung', 'baivong', 15);">Gửi thư cho baivong (uid = 15)

Unknown end tag for &lt;/button&gt;



```

Liên hệ:

```


<div id="contactfmvi">
<span id="fmviregkey">
<img src="/antirobot_pic.forum?a=1" alt="regkey" />


Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;


<input type="text" maxlength="5" id="regkeyfmvi" />
<script type="text/javascript">
function contact(a, b) {
jQuery.post("/contact?action=submit", {
"subject": a,
"message": b,
"reg_key": jQuery("#regkeyfmvi").val()
}, function (data) {
if (jQuery(data).find("#main-content .center").text() != "Your message has been forwarded on to the staff of the forum. It will be read as soon as possible.") {
jQuery("#fmviregkey img").replaceWith(jQuery(data).find(".captcha-img img"))
} else {
jQuery("#contactfmvi").text("Gửi tin thành công")
}
})
}


Unknown end tag for &lt;/script&gt;


<button type="button" onclick="contact('Tiêu đề', 'Nội dung');">Liên hệ có nhập captcha

Unknown end tag for &lt;/button&gt;


```