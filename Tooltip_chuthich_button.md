• Mẹo này giúp bạn chuyển những dòng chú thích cho bbcode vào tooltip Wink
• Viết bởi : Việt K - www.c3zone.net


> Demo :
> TRƯỚC	 ![http://a.imageshack.us/img696/427/21968872.jpg](http://a.imageshack.us/img696/427/21968872.jpg)
> SAU	![http://a.imageshack.us/img860/9914/97192008.jpg](http://a.imageshack.us/img860/9914/97192008.jpg)


> Thực hiện : vào Javascript codes management tạo Javascript mới :
> > Title **: tùy ý
> > Placement : In all the pages
> > Javascript Code** :

```


function helpline(help) {
if (help.length < 5)
showtip(eval(help + "_help"));
else
showtip(help);
if (this.addEventListener) {
this.addEventListener("mouseout", function () {
hidetip();
}, false);
}
}```


> Lưu ý là Bạn phải dùng tooltip trước đó (loại dhtml tooltip như ở c3zone đang dùng) - nếu dùng loại khác thì thay đổi 2 hàm showtip và hidetip cho phù hợp

Chúc thành công !


> baoden.mango ﻿đã viết:Có hiện tooltip nhưng rê chuột chỗ nào cũng có tooltip hết a ơi


> Việt ﻿đã viết:có thể vì lý do gì đó mà đoạn addEventListener không hoạt động.
> em bỏ đoạn này trong code ở trên đi

```


if (this.addEventListener) {
this.addEventListener("mouseout", function () {
hidetip();
}, false);
}
```

> sau đó thêm đoạn này vào cuối :

```


$(function () {
$(".button2,iframe[name='smilies']").mouseout(function(){hidetip();});
});```


Bạn thử chèn trực tiếp đoạn này vào đầu posting\_body xem sao

```


<script type="text/javascript">
function helpline(help) {
if (help.length < 5)
showtip(eval(help + "_help"));
else
showtip(help);
if (this.addEventListener) {
this.addEventListener("mouseout", function () {
hidetip();
}, false);
}
}


Unknown end tag for &lt;/script&gt;


```

nếu không được thì chắc là xung đột chỗ nào đó cười nhe răng nếu không dùng được thì xoá đi vì cái này cũng không quan trọng


có thể vì lý do gì đó mà đoạn addEventListener không hoạt động.
em bỏ đoạn này trong code ở trên đi

```


if (this.addEventListener) {
this.addEventListener("mouseout", function () {
hidetip();
}, false);
}```


sau đó thêm đoạn này vào cuối :

```


$(function () {
$(".button2,iframe[name='smilies']").mouseout(function(){hidetip();});
});```