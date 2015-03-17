![http://i70.servimg.com/u/f70/18/14/82/31/1210.jpg](http://i70.servimg.com/u/f70/18/14/82/31/1210.jpg)

Cách làm :
Ẩn rồi - Trả lời để thấy


Tạo 1 js mới

```

jQuery(document).ready(function(){jQuery('form[action="/post"] input[name="post"]').click(function(){var i=confirm('Bạn chắc chắn với bài trả lời này?');if(i){return true}else{return false}});});

```

Xong