ô tả: Hình nền di chuyển từ bên này sang bên khác( phải-trái,trái-phải,lên-xuống,xuống-lên)
Demo:

> http://jerm-hub.jforum.biz/h2-movingbg


Demo mới:

> http://jerm-hub.jforum.biz/h3-movingbg



Nguyên lí hđ: Dùng keyframes làm bg di chuyển - fixed thẻ div - chuyển vị trí thẻ div xuống dưới cùng bằng z-index - vài cái lung tung nữa bấm view source biết liền Rock on

Code:
  1. CSS:

```

/* Author: Juskteez */
.backg{
background: url(link ảnh);
width:200%;
height:100%;
position:fixed;
top:0;
z-index:-1;
animation:myfirst 30s;
-moz-animation:myfirst 30s; /* Firefox */
-webkit-animation:myfirst 30s infinite linear; /* Safari and Chrome */
-o-animation:myfirst 30s infinite; /* Opera */
}

@keyframes myfirst
{
from {left:-147px;}
to {left:-1000px;}
}

@-moz-keyframes myfirst /* Firefox */
{
from {left:-147px;}
to {left:-1000px;}
}

@-webkit-keyframes myfirst /* Safari and Chrome */
{
from {left:-147px;}
to {left:-1000px;}
}

@-o-keyframes myfirst /* Opera */
{
from {left:-147px;}
to {left:-1000px;}
}

```
> 2. HTML

```

<div class="backg">

Unknown end tag for &lt;/div&gt;


```

Cách dùng:
1 - XOÁ hình nền đang dùng (không cần thiết, nhưng vì code này che hình nền nên xóa đi cho nó nhẹCười nhe răng)
2 - Chọn background phù hợp với di chuyển
3 - Thay link trong code CSS

```

background: url(link ảnh);

```
4 - Bỏ đoạn CSS vừa chỉnh sửa vào cuối ACP - Display - Pictures and Colors - Colors - CSS Stylesheet - rồi bấm Submit
5 - Bỏ đoạn HTML vào trước thẻ 

&lt;body&gt;

