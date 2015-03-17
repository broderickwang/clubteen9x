![http://i44.servimg.com/u/f44/15/64/85/86/420.jpg](http://i44.servimg.com/u/f44/15/64/85/86/420.jpg)

Demo: http://ckeditor.com/demo

Cách làm :

Bước 1:
Administration Panel\Modules\JavaScript Codes Management:
Title: Posting CKEditor
Placement: In all pages

Javascript Code: Dán đoạn code sau vào:

```

jQuery.getScript('http://goo.gl/BFDfd');

```

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

Invision

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