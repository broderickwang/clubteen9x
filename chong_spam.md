HTML & JAVASCRIPT ![http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png](http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png) Javascript codes management ![http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png](http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png) Create a new javascript

Chọn: In all the pages

```

$(function () {
min = 20;
$("form[action='/post']").submit(function () {
kt = $('textarea#text_editor_textarea').val().replace('<br>', '').length;
if (kt < min) {
alert('Bài viết quá ngắn!\nSố ký tự tối thiểu là ' + min + ' ký tự.\nBạn cần viết thêm ' + (min - kt) + ' ký tự nữa mới có thể gửi bài.');
return false;
}
});
});

```

Nhớ thay số ký tự bạn muốn hạn chế vào giá trị min = 20 nhé!