Tooltip cực đơn giản, kích cỡ nhỏ gọn dành riêng cho FM, dựa trên nguyên lý của DHTML Tooltip.
Simplify by : Việt K. Size : 759 Bytes


> Demo : http://demo.c3zone.net/h3-c3tooltip
> Sử dụng :
> Javascript codes management tạo Javascript mới :
> Title **: FM Simple tooltip
> Placement : In all the pages
> Javascript Code** :

```


document.write('<div id="c3tip">

Unknown end tag for &lt;/div&gt;

');
var enablec3tip = false;
var tipob = document.getElementById("c3tip");
function c3tip(ob,cont,color,bgcolor) {
var cd = FindXY(ob);
overFlowX = cd['x'] + tipob.offsetWidth - document.body.offsetWidth;
cd['x'] = overFlowX > 0 ? cd['x'] - overFlowX : cd['x'];
tipob.style.left = (cd['x']+30) + 'px';
tipob.style.top = (cd['y'] + ob.offsetHeight + 10) + 'px';
if (typeof color!= "undefined" && color!= "")
cont=cont.fontcolor(color);
if (typeof bgcolor!= "undefined" && bgcolor!= "")
tipob.style.backgroundColor = bgcolor;
tipob.innerHTML = cont;
enablec3tip = true;
tipob.style.visibility = "visible";
return false;
}
function c3untip() {
enablec3tip = false;
tipob.style.visibility = "hidden";
tipob.style.left = "-1000px";
tipob.style.backgroundColor = '';
tipob.style.width = '';
}
```

> Trang trí : Dưới đây là style mình trang trí, tùy ý chỉnh sửa các thuộc tính cho vừa ý. Mình đã chú thích ý nghĩa các thuộc tính trong code CSS.
> Chèn vào CSS

```


#c3tip {
z-index: 999; /*Vị trí, trạng thái mặc định*/
left: -300px; top:0px;
visibility: hidden;
position: absolute;
padding: 15px;
text-align:left;
-moz-opacity: 0.8; /* Độ trong suốt 80% */
opacity: 0.8;
filter: alpha(opacity=80);
border: #000000 0px solid; /* Màu viền, bo tròn viền */
border-radius: 6px;
-moz-border-radius: 6px;
-webkit-border-radius: 6px;
font-size: 9pt; font-weight:bold; /* Kiểu, cỡ, màu chữ mặc định */
font-family: Arial; color:#fff;
background-color: #000; /* Màu nền mặc định */
width: auto; /* Chiều rộng tối đa */
max-width: 340px;
width:expression(document.body.clientWidth > 340? "340px": "auto");
}```


> Cách sử dụng, tùy biến tooltip : Thêm sự kiện sau vào đối tượng muốn gắn tooltip.

```


onmouseover="c3tip(this,'[Nội dung trong tooltip]','[Màu chữ]','[Màu nền]')" onmouseout="c3untip()"
```

> Ví dụ muốn gắn tooltip vào 1 link

```


<a href="http://demo.c3zone.net/h3-c3tooltip">Click here

Unknown end tag for &lt;/a&gt;


```

> ta sửa thành

```


<a onmouseover="c3tip(this,'Click vào đây để xem demo')" onmouseout="c3untip()" href="http://demo.c3zone.net/h3-c3tooltip" >Click here

Unknown end tag for &lt;/a&gt;


```

> Cách đặt màu chữ và màu nền tooltip xem trong demo