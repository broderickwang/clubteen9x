Trang chủ: http://code.google.com/p/ztip/
Demo: http://jsfiddle.net/creepyzero/tUQfJ/
Tác giả: Zero
Tính năng:
- Hỗ trợ html
- Hổ trợ hình ảnh

Cài đặt:
Vào Modules >> Javascript codes management >> Tạo mới >> Chọn In the pages

Code: Chọn nội dung

```

extention = ['jpg', 'jpeg', 'png'];
xOffset = 20;
yOffset = 10;
img_width = '200px';
img_height = '200px';
document.write('<div id="tooltip">

Unknown end tag for &lt;/div&gt;

');
$.getScript('http://nhocpro9x.googlecode.com/files/ztipnewest.min.js');
```

Vào Display >> Css

```


#tooltip {
position:absolute;
border:1px solid #D5D5D5;
background:#F8F8F8;
padding:4px;
display:none;
border-radius:4px;
box-shadow:0 1px 1px rgba(0,0,0,0.05),0 1px 0 #FFFFFF inset;
z-index: 1004;
}

```

Hướng dẫn chỉnh sửa:
- extension: dạng ảnh
- xOffset: di chuyển tooltip sang phải # px
- yOffset: di chuyển tooltip lên trên # px
- img\_width: chiều dài của ảnh
- img\_height: chiều rông của ảnh

Tính năng cho phiên bản sau:
- Hỗ trợ "flip" tooltip khi đụng góc của trang