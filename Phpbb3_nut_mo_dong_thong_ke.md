demo: ![http://i43.servimg.com/u/f43/15/93/33/76/215.jpg](http://i43.servimg.com/u/f43/15/93/33/76/215.jpg)


Khi dùng code này các bạn có thể tạo ra 1 nút ẩn và mở bảng thống kê tình hình diễn đàn ở cuối forum cười nhăn răng

CÁc bước làm xem hướng dẫn sau đây
Bước 1 :

Vào MODULES >> HTML & JAVASCRIPT >> Javascript codes management >> tạo 1 js mới
Title **: đóng mở khung thống kê
Placement : In the home page
Javascript Code** :

```

$("document").ready(function() {
$("div.forabg + ul.linklist + div.h3").before('<div align="center"><button id="adios_estadisticas" type="button">Estadísticas

Unknown end tag for &lt;/button&gt;



Unknown end tag for &lt;/div&gt;

');
$("#adios_estadisticas").click(function() {
$("#i_whosonline, #i_whosonline, #i_whosonline + p, div.forabg + ul.linklist ~ div.h3 a[href='/viewonline'], #i_whosonline + p + div.clear, #i_whosonline + p + div.clear + div.h3, p.page-bottom, div.page-bottom, .page-bottom + .h3, #chatbox_popup").toggle();
});
});

```

Bước 2 :
Thêm vào Css đoạn code sau

```

#i_whosonline, #i_whosonline + p, div.forabg + ul.linklist ~ div.h3 a[href='/viewonline'], #i_whosonline + p + div.clear, #i_whosonline + p + div.clear + div.h3, p.page-bottom, div.page-bottom, .page-bottom + .h3, #chatbox_popup  { display: none; }

```
Thế là xong , thấy hay thì thank nhá chụt chụt