Sau bài viết viewtopic.php?f=67&t=20268 quá ư là.... ế, nên hôm nay mình viết luôn bbcode cho dễ dùng.

Demo: http://12b6.eazy.vn

Ghi chú: Tất nhiên, code của mình ko thể nào đầy đủ, ai muốn chỉnh sửa, hoặc thêm thắt tooltip vào các chỗ khác, xin mời đọc thêm topic hướng dẫn ở trên.

Tạo bbcode và cho vào mod thông báo chung với html thay thế:

```

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;

<script src="http://onehackoranother.com/projects/jquery/tipsy/javascripts/jquery.tipsy.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;

<script type="text/javascript">$(function(){$("a").tipsy();});

Unknown end tag for &lt;/script&gt;


```

Css: Copy và cho vào kiểu dáng giao diện các bạn đang sử dụng:

```

/*Tipsy*/
.tipsy { padding: 5px; font-size: 10px; position: absolute; z-index: 100000; }
.tipsy-inner { padding: 5px 8px 4px 8px; background-color: black; color: white; max-width: 200px; text-align: center; }
.tipsy-inner { border-radius: 3px; -moz-border-radius:3px; -webkit-border-radius:3px; }
.tipsy-arrow { position: absolute; background: url('http://onehackoranother.com/projects/jquery/tipsy/images/tipsy.gif') no-repeat top left; width: 9px; height: 5px; }
.tipsy-n .tipsy-arrow { top: 0; left: 50%; margin-left: -4px; }
.tipsy-nw .tipsy-arrow { top: 0; left: 10px; }
.tipsy-ne .tipsy-arrow { top: 0; right: 10px; }
.tipsy-s .tipsy-arrow { bottom: 0; left: 50%; margin-left: -4px; background-position: bottom left; }
.tipsy-sw .tipsy-arrow { bottom: 0; left: 10px; background-position: bottom left; }
.tipsy-se .tipsy-arrow { bottom: 0; right: 10px; background-position: bottom left; }
.tipsy-e .tipsy-arrow { top: 50%; margin-top: -4px; right: 0; width: 5px; height: 9px; background-position: top right; }
.tipsy-w .tipsy-arrow { top: 50%; margin-top: -4px; left: 0; width: 5px; height: 9px; }

#gravity { width: 100%; margin: 5px 0; border-spacing: 5px; }
#gravity td { text-align: center; vertical-align: middle; padding: 5px 0; background-color: #d0d0d0; width: 33%; }
#gravity a { }
#gravity a:hover { color: #505050; background: none; }
```