![http://i34.servimg.com/u/f34/15/64/85/86/demo_b10.jpg](http://i34.servimg.com/u/f34/15/64/85/86/demo_b10.jpg)
CSS:
```

a.tooltip {outline:none; } a.tooltip strong {line-height:30px;} a.tooltip:hover {text-decoration:none;} a.tooltip span { z-index:10;display:none; padding:14px 20px; margin-top:-30px; margin-left:28px; width:240px; line-height:16px; } a.tooltip:hover span{ display:inline; position:absolute; color:#111; border:1px solid #DCA; background:#fffAF0;} .callout {z-index:20;position:absolute;top:30px;border:0;left:-12px;} /*CSS3 extras*/ a.tooltip span { border-radius:4px; -moz-border-radius: 4px; -webkit-border-radius: 4px; -moz-box-shadow: 5px 5px 8px #CCC; -webkit-box-shadow: 5px 5px 8px #CCC; box-shadow: 5px 5px 8px #CCC; }

```
Sử dụng

```

<a href="#" class="tooltip">Tên tooltip<span>Nội dung tooltip

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;


```

p/s: lâu lâu làm bài cho vui nhà vui của tuy vẫn biết đã có người post rồi