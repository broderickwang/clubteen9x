demo:
http://9xbiz.zforum.biz/h30-page


Nó nhẹ và gần giống với tooltip tipsy den

chèn thẻ class :

```

<div class="vovanan>Chủ Đề Mới<div>

```

Thay Chủ Đề Mới Thành Code Bạn để hiện thỉ


Chèn Vào Css:

```

.vovanan:hover:before {

width: 0;
height: 0;
position: absolute;
margin-top: 27px;
margin-left: 23px;
border: 8px solid transparent;
border-bottom-color: rgba(0, 0, 0, .7);
}
.vovanan:hover:after {
content: "Nội dung hiện thị tooltip";
position: absolute;
margin-top: 43px;
margin-left: -40px;
background: rgba(0, 0, 0, .7);
padding: 4px 9px;
border-radius: 4px;
-webkit-border-radius: 4px;
-moz-border-radius: 4px;
color: white;
font: 11px normal helvetica, arial,sans-serif;
text-transform: none;
text-shadow: 0 0;
z-index: 10;
}
```
> Bài viết cùng chuyên mục :