Chẳng biết share cái gì mình vào lại kho nhà tìm lên share cho các mem trả lời nhanh không chuyển trang của punBB
Ưu điểm :
**Nhanh ( 4 giây)** Không lỗi
**Hiện comment dạng trượt**

Nhược điểm :
• Cách 10 giây trả lời thì mới không bị lỗi

Hướng dẫn :

Cho code này vào javascript :

Tittle : Trả lời nhanh không chuyển trang punBB
Place : In the all pages


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

Đừng đáp gạch nhé