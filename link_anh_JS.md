Có phải bạn luôn phải dùng bbcode dạng [img](img.md)[/img] để đưa ảnh lên đúng không ?
Giờ
chúng ta sẽ không phải làm thế nữa vì có 1 chức năng khi ta đưa link
của ảnh nó sẽ biến link đó thành ảnh trực tiếp mà không phải dùng mã
bbcode

Giờ mình sẽ lấy url con cóc ![http://illiweb.com/bl/logo.png](http://illiweb.com/bl/logo.png)
Demo : KHi post link ảnh


Tiếp theo :



Ưu điểm : Nhanh, gọn nhẹ
Nhược điểm :Chưa biết

Chú ý : Code này sử dụng cho mọi phiên bản forumotion.


Rất đơn giản chỉ cần 1 bước thôi

Hướng dẫn :

Đưa vào JS : Modules --> HTML & JAVASCRIPT -->Javascript codes management
![http://i12.servimg.com/u/f12/17/91/04/74/fwtyy110.png](http://i12.servimg.com/u/f12/17/91/04/74/fwtyy110.png)
Create a new javascript

Title **: Chuyển ảnh trực tiếp
Placement : In the all pages hoặc In the topics
![http://i12.servimg.com/u/f12/17/91/04/74/yhhhhh10.png](http://i12.servimg.com/u/f12/17/91/04/74/yhhhhh10.png)
Javascript Code** :

```


$(function() {
('Chuyển link ảnh thành ảnh trực tiếp ');

var links = $('.post a'), local = document.URL.replace(location.hash,
'').replace(location.pathname, ''), reg = /\.(png|jpg|jpeg|gif)$/i;
for(var i = 0, l; (l = links[i++]); ) {
if(l.innerHTML !== l.href) continue;
if(reg.test(l.href)) l.innerHTML = '<img class="LGauto-img" alt="' + l.href + '" src="' + l.href + '">';
if(l.href.indexOf(local) === 0) l.innerHTML = l.href.substring(l.href.lastIndexOf('/'));
}
});
```
```
    $(function () {
$(".entry-content a").each(function () {
var a = $(this).attr("href");
/\.(png|jpg|jpeg|gif|bmp)$/i.test(a) && a == $(this).text() && $(this).html('<img alt="' + location.host + '" src="' + a + '" />')
})
});```
Nguồn : sưu tầm