Lần trước thấy fmvi-group có share code trả lời nhanh không chuyển trang nhưng vẫn reload trang và không dùng được trên phpBB3 và Invision nay bản này hỗ trợ tất cả ngoại trừ phpBB2 đang làm
Ưu điểm :
• Nhanh ( 4 giây)
• Không lỗi
• Hiện comment dạng trượt

Nhược điểm :
• Cách 10 giây trả lời thì mới không bị lỗi

Hướng dẫn : { Trả lời để thấy nội dung}


Tittle : Trả lời nhanh không chuyển trang
Place : In the topic

PunBB

```


$(document).ready(function(){
$('#quick_reply input[name="post"]').click(function(d){

d.preventDefault();
$.post("/post",$('#quick_reply').serialize()+"&post=1&prevent_post=1",function(b){

b=b.substring(b.indexOf('<meta http-equiv="refresh" content="1;url=')+42,b.indexOf('<meta name="title"')-2);

$(".post:last").after('<div style="display: none;" class="ajax_post">

Unknown end tag for &lt;/div&gt;

'),$(".ajax_post:last").load(b+" .post:last",function(){

$('.ajax_post').slideDown(350);

});

});

});
});

```


Invision

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



phpBB3

```


$(document).ready(function(){
$('.button2[name="post"]').click(function(d){
d.preventDefault();
$.post("/post",$('#quick_reply').serialize()+"&post=1&prevent_post=1",function(b){
b=b.substring(b.indexOf('<meta http-equiv="refresh" content="1;url=')+42,b.indexOf('<meta name="title"')-2);
$(".post:last").after('<div style="display: none;" class="ajax_post">

Unknown end tag for &lt;/div&gt;

'),$(".ajax_post:last").load(b+" .post:last",function(){
$('.ajax_post').slideDown(350);
$('#text_editor_textarea').val('');
});
});
});
});
```


Chú ý phpBB2 đang làm 50% thành công hoặc thất bại

Không share bài đi nơi khác