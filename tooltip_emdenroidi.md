Demo: (Diễn đàn đang sử dụng cho Latest topics - Chỉ vào và xem hiệu ứng)
```

http://www.vandonstar.com
```

Hướng dẫn:
Modules > Portal & Widgets > Forum widgets management
Trong Recent topic chọn Sửa chữa
Activate the topics scrolling : Chọn không
(Bước này là chọn dạng Recent topic cố định, không phải dạng chạy lên hay xuống)

Tiếp theo:
Trong mod\_recent\_topics

Tìm:
```

<a href="{classical_row.recent_topic_row.U_TITLE}">
```
Thay bằng:
```

<a href="{classical_row.recent_topic_row.U_TITLE}" class="hastip" title="{classical_row.recent_topic_row.L_TITLE}">

```
Vẫn trong mod\_recent\_topics

Tìm:
```

<!-- END recent_topic_row -->
```

Thêm vào sau đó cái này:
(Trong code này nếu bạn nào hiểu thì có thể sửa cho nó chạy các kiểu theo ý mình)
```

<script type="text/javascript" src="http://vandonstar.googlecode.com/files/tooltipsy.min.js">

Unknown end tag for &lt;/script&gt;


```
Và CODE này (Tạm gọi đây là "Phong cách" nhé - Sẽ update những phong cách khác cho các bạn lựa chọn)
Phong cách Chạy chéo từ phía trên bên trái xuống rồi chạy chéo xuống phía dưới bên trái:
```


<script type="text/javascript">
$('.hastip').tooltipsy({
offset: [0, -1],
show: function (e, $el) {
$el.css({
'top': parseInt($el[0].style.top.replace(/[a-z]/g, '')) - 100 + 'px',
'left': parseInt($el[0].style.left.replace(/[a-z]/g, '')) - 200 + 'px',
'opacity': '0.0',
'display': 'block'
}).animate({
'top': parseInt($el[0].style.top.replace(/[a-z]/g, '')) + 100 + 'px',
'left': parseInt($el[0].style.left.replace(/[a-z]/g, '')) + 200 + 'px',
'opacity': '1.0'
}, 200);
},
hide: function (e, $el) {
$el.animate({
'left': '-=500px',
'top': '+=100px',
'opacity': '0.0'
}, 1000);
}
});


Unknown end tag for &lt;/script&gt;



```
Thêm vào Css cái này:
```

.tooltipsy{
font-style:italic;
padding:5px;
width:auto;
color:#ffffff;
background-color:#000000;
border:1px solid #8A8A8A;
box-shadow: 2px 2px 2px #8A8A8A;
}```


Good luck Vui

Update:
Kiểu rơi từ trên xuống rồi chạy sang bên trái và biến mất:
```

<script type="text/javascript">
$('.hastip').tooltipsy({
offset: [0, -1],
show: function (e, $el) {
$el.css({
'top': parseInt($el[0].style.top.replace(/[a-z]/g, '')) - 200 + 'px',
'opacity': '0.0',
'display': 'block'
}).animate({
'top': parseInt($el[0].style.top.replace(/[a-z]/g, '')) + 200 + 'px',
'opacity': '1.0'
}, 200);
},
hide: function (e, $el) {
$el.animate({
'left': '-=500px',
'opacity': '0.0'
}, 1000);
}
});


Unknown end tag for &lt;/script&gt;



```
Kiểu chạy từ dưới lên rồi chạy tiếp lên phía trên và biến mất:
```

<script type="text/javascript">
$('.hastip').tooltipsy({
offset: [0, 10],
show: function (e, $el) {
$el.css({
'top': parseInt($el[0].style.top.replace(/[a-z]/g, '')) + 200 + 'px',
'opacity': '0.0',
'display': 'block'
}).animate({
'top': parseInt($el[0].style.top.replace(/[a-z]/g, '')) - 200 + 'px',
'opacity': '1.0'
}, 200);
},
hide: function (e, $el) {
$el.animate({
'top': '-=300px',
'opacity': '0.0'
}, 1000);
}
});


Unknown end tag for &lt;/script&gt;



```
Kiểu chạy từ trên xuống rồi đi tiếp xuống dưới và biến mất:
```

<script type="text/javascript">
$('.hastip').tooltipsy({
offset: [0, -1],
show: function (e, $el) {
$el.css({
'top': parseInt($el[0].style.top.replace(/[a-z]/g, '')) - 200 + 'px',
'opacity': '0.0',
'display': 'block'
}).animate({
'top': parseInt($el[0].style.top.replace(/[a-z]/g, '')) + 200 + 'px',
'opacity': '1.0'
}, 200);
},
hide: function (e, $el) {
$el.animate({
'top': '+=300px',
'opacity': '0.0'
}, 1000);
}
});


Unknown end tag for &lt;/script&gt;


```

Kiểu chạy từ trái sang và thu gọn rồi biến mất:
```

<script type="text/javascript">
$('.hastip').tooltipsy({
offset: [-10, 0],
show: function (e, $el) {
$el.css({
'left': parseInt($el[0].style.left.replace(/[a-z]/g, '')) - 500 + 'px',
'opacity': '0.0',
'display': 'block'
}).animate({
'left': parseInt($el[0].style.left.replace(/[a-z]/g, '')) + 500 + 'px',
'opacity': '1.0'
}, 300);
},
hide: function (e, $el) {
$el.slideUp(1000);
}
});


Unknown end tag for &lt;/script&gt;



```