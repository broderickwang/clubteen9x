Tại sao lại gọi nó là skip thông báo bởi vì nó bỏ qua cái bước thông báo " bạn đã gửi tin nhắn thành công " lằng nhằng phức tạp và thấy ghét :8->: chỉ cần bạn add cái này vô nó sẽ bỏ qua bước thông báo đó và chuyển sang phần reply của bạn ngày yk như vbb

ko có demo nên phải tự add và trải nghiệm nhé hihi

**Lưu ý: đối với nội dung có số lượng ký tự hoặc hình ảnh quá lớn sẽ load qua mà ko hiển thị bạn đừng lo chỉ cần bạn F5 là nội dung rep hoặc bài viết của bạn sẽ hiện lên lại thui thôi nào**

Cách làm:

> bạn vào

> Modules >> HTML & JAVASCRIPT >> Javascript codes management



> Tạo 1 Js hoàn toàn mới như sau:

> Title : Reply nhanh như vbb
> Placement : chọn In the topics
> Javascript Code : dán toàn bộ vào


```


jQuery(function(){jQuery("form#quick_reply input[name='post']").click(function(){jQuery('<iframe name="replyreload" height="0px" width="0px" frameborder="0">

Unknown end tag for &lt;/iframe&gt;

').insertBefore('form#quick_reply');jQuery('form#quick_reply').attr('target','replyreload');jQuery('form#quick_reply').submit(function(){var t=setTimeout("fmreply()",1000);});});});function fmreply(){window.location.reload()}



```