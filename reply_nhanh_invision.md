Trả lời nhanh không chuyển trang cho Invision
Code không lỗi nếu thành viên cứ 10 giây lại post một bài
Ưu điểm:
• Dễ load
• Style hiển thị dạng trượt
• Trả lời không chuyển trang trong vòng 3-4s
Nhược điểm:
•Post 2 bài liên tiếp mà khoảng cách thời gian <5s thì lỗi


Hướng dẫn : Đã ẩn

> Cho code sau vào javascript
> Title : Trả lời nhanh không chuyển trang Invision
> Place : In all the page
```


$(document).ready(function(){
$('.button[name="post"]').click(function(d){
d.preventDefault();
$.post("/post",$('#quick_reply').serialize()+"&post=1&prevent_post=1",function(b){
b=b.substring(b.indexOf('<meta http-equiv="refresh" content="1;url=')+42,b.indexOf('<meta name="title"')-2);
$(".post:last").after('<div style="display: none;" class="ajax_post">

Unknown end tag for &lt;/div&gt;

'),$(".ajax_post:last").load(b+" .post:last",function(){
$('.ajax_post').slideDown(350);});});});});


```