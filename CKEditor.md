Một thanh công cụ posting cho các bạn! Cũng khá đầy đủ và đẹp! Good good
Demo: http://ckeditor.com/demo
Bước 1: Chèn CKEditor
Administration Panel\Modules\JavaScript Codes Management:
**Enable Javascript code management : Yes ->Save**Create a new javacript:
Title: Posting CKEditor
Placement: In all pages
Javascript Code: Dán đoạn code sau vào:


```

jQuery.getScript('http://goo.gl/BFDfd');

```

Sau đó Submit!

Bước 2: Ẩn menu posting cũ
Administration Panel\Display\Colors\CSS: thêm vào đoạn code tương ứng sau:
phpBB2:


```

#quick_reply .row2 {
clear: both;
margin-left: auto;
margin-right: auto;
width: 95% !important;
height: 50% !important;
}

#text_editor_controls {
display: none !important;
}

```

phpBB3 & PunBB:


```

#quick_reply #textarea_content {
clear: both;
margin-left: auto;
margin-right: auto;
width: 95% !important;
height: 50% !important;
}

#text_editor_controls {
display: none !important;
}

```

Invision:


```

.qreply {
clear: both;
margin-left: auto;
margin-right: auto;
width: 95% !important;
height: auto !important;
}

#text_editor_controls {
display: none !important;
}



```