Bữa trước có bạn hỏi nên mình đã chỉ 1 lần rồi. Nay viết lại cho đầy đủ để các bạn làm.
Cái này tương tự như fancybox nhưng mình thấy có vẻ cái này nhẹ hơn thì phải. Đặc biệt cái này có cả chức năng xem slide ảnh( mình để thời gian là 10s nên hơi lâu, từ từ các bạn sẽ thấy).

Trước hết là demo: http://www.ca3vt.tk/t327-topic

Vào header tìm:

```

<script src="{JQUERY_PATH}" type="text/javascript">

Unknown end tag for &lt;/script&gt;


```

Chèn ngay sau đó

```

<script language="javascript">
$(document).ready(function(){
$('.postbody img').slideDown(1, function(){
if($(this).height() > 120)
{
$(this).replaceWith('<a href="'+$(this).attr('src')+'" title="www.ca3vt.tk" rel="example4"><img src="'+$(this).attr('src')+'">

Unknown end tag for &lt;/a&gt;

');
}
});
});


Unknown end tag for &lt;/script&gt;



```
CSS chèn

```

#cboxOverlay,#cboxWrapper,#colorbox{left:0;overflow:hidden;position:absolute;top:0;z-index:999}#cboxOverlay{background:#000;height:100%;position:fixed;width:100%}#cboxBottomLeft,#cboxMiddleLeft{clear:left}#cboxContent{background:#fff;overflow:visible;position:relative}#cboxLoadedContent{margin-bottom:5px;overflow:auto}#cboxLoadedContent iframe{border:0;display:block;height:100%;width:100%}#cboxTitle{bottom:-25px;color:#7C7C7C;font-weight:700;left:0;margin:0;position:absolute;text-align:center;width:100%}#cboxLoadingGraphic,#cboxLoadingOverlay{left:0;position:absolute;top:0;width:100%}#cboxClose,#cboxNext,#cboxPrevious,#cboxSlideshow{background:url(http://i27.servimg.com/u/f27/15/67/36/41/contro10.png) no-repeat 0 0;bottom:-29px;cursor:pointer;height:23px;position:absolute;text-indent:-9999px;width:23px}#cboxTopLeft{background:url(http://i27.servimg.com/u/f27/15/67/36/41/contro10.png) no-repeat 0 0;height:14px;width:14px}#cboxTopCenter{background:url(http://i27.servimg.com/u/f27/15/67/36/41/border10.png) repeat-x top left;height:14px}#cboxTopRight{background:url(http://i27.servimg.com/u/f27/15/67/36/41/contro10.png) no-repeat -36px 0;height:14px;width:14px}#cboxBottomLeft{background:url(http://i27.servimg.com/u/f27/15/67/36/41/contro10.png) no-repeat 0 -32px;height:43px;width:14px}#cboxBottomCenter{background:url(http://i27.servimg.com/u/f27/15/67/36/41/border10.png) repeat-x bottom left;height:43px}#cboxBottomRight{background:url(http://i27.servimg.com/u/f27/15/67/36/41/contro10.png) no-repeat -36px -32px;height:43px;width:14px}#cboxMiddleLeft{background:url(http://i27.servimg.com/u/f27/15/67/36/41/contro10.png) repeat-y -175px 0;width:14px}#cboxMiddleRight{background:url(http://i27.servimg.com/u/f27/15/67/36/41/contro10.png) repeat-y -211px 0;width:14px}#cboxLoadingOverlay{background:url(http://i27.servimg.com/u/f27/15/67/36/41/loadin10.png) no-repeat center center}#cboxLoadingGraphic{background:url(http://i27.servimg.com/u/f27/15/67/36/41/loadin10.gif) no-repeat center center}#cboxCurrent{bottom:-25px;color:#7C7C7C;font-weight:700;left:58px;position:absolute}#cboxPrevious{background-position:-51px -25px;left:0}#cboxPrevious.hover{background-position:-51px 0}#cboxNext{background-position:-75px -25px;left:27px}#cboxNext.hover{background-position:-75px 0}#cboxClose{background-position:-100px -25px;right:0}#cboxClose.hover{background-position:-100px 0}.cboxSlideshow_on #cboxSlideshow{background-position:-125px 0;right:27px}.cboxSlideshow_on #cboxSlideshow.hover{background-position:-150px 0}.cboxSlideshow_off #cboxSlideshow{background-position:-150px -25px;right:27px}.cboxSlideshow_off #cboxSlideshow.hover{background-position:-125px 0}
```

Nhớ up lại link giùm mình, chỉ có 2 hình thui nhanh mà viết thư

.Chèn vào view\_topic\_body

```


<script type="text/javascript" src="http://colorpowered.com/colorbox/core/colorbox/jquery.colorbox.js">

Unknown end tag for &lt;/script&gt;

<script>
$(document).ready(function(){
//Examples of how to assign the ColorBox event to elements
$("a[rel='example1']").colorbox();
$("a[rel='example2']").colorbox({transition:"fade"});
$("a[rel='example3']").colorbox({transition:"none", width:"75%", height:"75%"});
$("a[rel='example4']").colorbox({slideshow:true});
$(".example5").colorbox();
$(".example6").colorbox({iframe:true, innerWidth:425, innerHeight:344});
$(".example7").colorbox({width:"80%", height:"80%", iframe:true});
$(".example8").colorbox({width:"50%", inline:true, href:"#inline_example1"});
$(".example9").colorbox({
onOpen:function(){ alert('onOpen: colorbox is about to open'); },
onLoad:function(){ alert('onLoad: colorbox has started to load the targeted content'); },
onComplete:function(){ alert('onComplete: colorbox has displayed the loaded content'); },
onCleanup:function(){ alert('onCleanup: colorbox has begun the close process'); },
onClosed:function(){ alert('onClosed: colorbox has completely closed'); }
});

//Example of preserving a JavaScript event for inline calls.
$("#click").click(function(){
$('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
return false;
});
});


Unknown end tag for &lt;/script&gt;


```

Ngoài ra còn rất nhiều ứng dụng nữa của colorbox, các bạn có thể tìm hiểu ở đây

http://colorpowered.com/colorbox/

Từ từ mình sẽ viết nốt các ứng dụng khác.

Lưu ý đối với các bạn đã có TDYT: để tránh xung đột với các lightobx khác àm các bạn dùng để làm tdyt, các bạn nên chuyển hết tất cả code của TDYT vào trong index\_body và thay vì chèn CSS như trên thì chèn cái này vào view\_topic\_body

```

<link media="screen" rel="stylesheet" href="http://colorpowered.com/colorbox/core/example5/colorbox.css" />
```

Nguồn CP viết thư

Lấy link vài code của Baivong vào thay