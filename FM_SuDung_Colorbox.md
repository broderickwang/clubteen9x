Bước 1: Display - Ganeral - Overall\_header:
Tìm đoạn này:

```

<script src="{JS_DIR}{L_LANG}.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;



```
Và chèn vào bên dưới nó bằng 1 trong 2 code sau:
Colorbox-min: 14.3Kb

```

<script src="http://fmvi-group.googlecode.com/files/colorbox-min.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;



```
Colorbox-packer: 8.9Kb

```

<script src="http://fmvi-group.googlecode.com/files/colorbox-packer.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;



```
Bước 2: Display - Pictures and Colors - Colors - CSS:
Thêm vào cuối CSS:

```

#colorbox,#cboxOverlay,#cboxWrapper{position:absolute;top:0;left:0;z-index: 999;overflow:hidden;}#cboxOverlay{position:fixed;width:100%;height:100%;background:#000;}#cboxMiddleLeft,#cboxBottomLeft{clear:left;}#cboxContent{position:relative;background:#fff;overflow:visible;}#cboxLoadedContent{overflow:auto;margin-bottom:5px;}#cboxTitle{position:absolute;bottom:-25px;left:0;text-align:center;width:100%;font-weight:700;color:#7C7C7C;margin:0;}#cboxLoadingOverlay,#cboxLoadingGraphic{position:absolute;top:0;left:0;width:100%;}#cboxPrevious,#cboxNext,#cboxClose,#cboxSlideshow{cursor:pointer;position:absolute;bottom:-29px;background:url(http://i20.servimg.com/u/f20/14/50/49/34/contro11.png) no-repeat 0 0;width:23px;height:23px;text-indent:-9999px;}.cboxPhoto{float:left;border:0;display:block;margin:auto;}.cboxIframe{width:100%;height:100%;display:block;border:0;}#cboxTopLeft{width:14px;height:14px;background:url(http://i20.servimg.com/u/f20/14/50/49/34/contro11.png) no-repeat 0 0;}#cboxTopCenter{height:14px;background:url(http://i20.servimg.com/u/f20/14/50/49/34/border10.png) repeat-x top left;}#cboxTopRight{width:14px;height:14px;background:url(http://i20.servimg.com/u/f20/14/50/49/34/contro11.png) no-repeat -36px 0;}#cboxBottomLeft{width:14px;height:43px;background:url(http://i20.servimg.com/u/f20/14/50/49/34/contro11.png) no-repeat 0 -32px;}#cboxBottomCenter{height:43px;background:url(http://i20.servimg.com/u/f20/14/50/49/34/border10.png) repeat-x bottom left;}#cboxBottomRight{width:14px;height:43px;background:url(http://i20.servimg.com/u/f20/14/50/49/34/contro11.png) no-repeat -36px -32px;}#cboxMiddleLeft{width:14px;background:url(http://i20.servimg.com/u/f20/14/50/49/34/contro11.png) repeat-y -175px 0;}#cboxMiddleRight{width:14px;background:url(http://i20.servimg.com/u/f20/14/50/49/34/contro11.png) repeat-y -211px 0;}#cboxLoadingOverlay{background:url(http://i20.servimg.com/u/f20/14/50/49/34/loadin10.png) no-repeat center center;}#cboxLoadingGraphic{background:url(http://i20.servimg.com/u/f20/14/50/49/34/loadin11.gif) no-repeat center center;}#cboxCurrent{position:absolute;bottom:-25px;left:58px;font-weight:700;color:#7C7C7C;}#cboxPrevious{left:0;background-position:-51px -25px;}#cboxPrevious.hover{background-position:-51px 0;}#cboxNext{left:27px;background-position:-75px -25px;}#cboxNext.hover{background-position:-75px 0;}#cboxClose{right:0;background-position:-100px -25px;}#cboxClose.hover{background-position:-100px 0;}.cboxSlideshow_on #cboxSlideshow{background-position:-125px 0;right:27px;}.cboxSlideshow_on #cboxSlideshow.hover{background-position:-150px 0;}.cboxSlideshow_off #cboxSlideshow{background-position:-150px -25px;right:27px;}.cboxSlideshow_off #cboxSlideshow.hover{background-position:-125px 0;}
```


Colorbox là một jQuery Plugins nên ta có thể dùng nó chung với các API của jQuery.
Cấu trúc để sử dụng colorbox như sau

```

$('selector').colorbox({key:value, key:value, key:value}, callback);

```
Trong đó

  * selector là đối tượng cần áp dụng colorbox. VD: div.prolink, input, img, ...
  * key:value có thể dùng nhiều lần, 1 lần hoặc không có (vì đã có các giá trị mặc định). Xem chi tiết tại http://colorpowered.com/colorbox/
  * callback là một hàm gọi lại, có thể bỏ qua.


Ví dụ 1:

```

$('a#login').colorbox({transition:'fade', speed:500});
```

Code này có nghĩa là áp dụng colorbox cho đối tượng a có id là login (a là liên kết, #login là ký hiệu id='login', nếu không hiểu hãy tìm hiểu thêm về selector trong HTML).
Bạn có thể thấy trong ví dụ trên có sử dụng 2 key:value và không sử dụng callback.
Ví dụ 2:

```

$('a.gallery').colorbox();
```

Code này có nghĩa là áp dụng colorbox cho đối tượng a có class là gallery.
Ví dụ 3:

```

$("a[rel='example']").colorbox({title: function(){
var url = $(this).attr('href');
return '<a href="'+url+'" target="_blank">Open In New Window

Unknown end tag for &lt;/a&gt;

';
}});
```

Ví dụ này có nghĩa là áp dụng colorbox cho đối tượng a có rel='example'. Code này chỉ sử dụng 1 key:value, điều chú ý ở đây, value là một hàm jQuery. Điều này nói lên việc có thể sử dụng jQuery cho giá trị value của colorbox.

Xem thêm ví dụ (Ctrl+U): http://colorpowered.com/colorbox/core/example5/index.html