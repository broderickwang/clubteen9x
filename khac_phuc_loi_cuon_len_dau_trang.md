Khi đang soạn một văn bản dài mà bạn dùng BBcode thì văn bản sẽ cuộn lên đầu rất bất tiện, trong Chrome và chế độ wysiwyg lại không gặp vấn đề này.
Dùng forum đã lâu mà đến nay mình mới để ý, trước giờ mình cứ xem đó như một điều hiển nhiên.
Hiện tại mình dùng javascript để khắc phục, ai biết cách nào tốt hơn thì gửi trả lời tại chủ đề này.

Đây là code mình dùng:

```

$(function(){
var $kz = $("#text_editor_textarea");
$kz.scroll(function () {
if (0 != $kz.scrollTop()) var a = $kz.scrollTop();
if (0 != $kz.scrollLeft()) var b = $kz.scrollLeft();
$(".button2, .select button").click(function () {
$kz.scrollTop(a);
$kz.scrollLeft(b)
})
})
});
```


Bạn có thể đặt nó trong overall\_header hoặc tạo file javascript và đặt In all the pages

Demo:
![http://i12.servimg.com/u/f12/17/70/81/78/1-2-2010.jpg](http://i12.servimg.com/u/f12/17/70/81/78/1-2-2010.jpg)


Tiện đây giới thiệu các bạn một add-on của Firefox là Textarea Cache, nó có tác dụng lưu lại nội dung soạn thảo của bạn vào cache, rất tiện phục hồi trong trường hợp bạn viết nhầm hoặc lỡ tay tắt trình duyệt.
Click vào đây để cài đặt