Chức năng: Tự động căn dòng cho khung soạn thảo khi số dòng văn bản tăng vượt quá kích thước mặc định.
Không hỗ trợ chế độ wysiwyg

Demo:

> Normal: ![http://a.imageshack.us/img198/6948/noresize.png](http://a.imageshack.us/img198/6948/noresize.png)
> Autosize: ![http://a.imageshack.us/img821/3479/autoresize.png](http://a.imageshack.us/img821/3479/autoresize.png)



Hướng dẫn:
ACP >> Display >> Templates >> QLTT >> overall\_header:
Tìm:

```


<script src="{JS_DIR}{L_LANG}.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;


```

Thêm vào bên dưới nó, code sau:

```


<script src="http://www.fmvi.vn/23425.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;


<script type="text/javascript">
$(function(){
$('#text_editor_textarea').autosize()
})


Unknown end tag for &lt;/script&gt;




```


http://www.fmvi.vn/23425.js :
```
(function($,undefined){var hidden='hidden',copy='<textarea style="position:absolute; top:-9999px; left:-9999px; right:auto; bottom:auto; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden">',copyStyle=['fontFamily','fontSize','fontWeight','fontStyle','letterSpacing','textTransform','wordSpacing'],oninput='oninput',onpropertychange='onpropertychange',test=$(copy)[0];test.setAttribute(oninput,"return");if($.isFunction(test[oninput])||onpropertychange in test){$.fn.autosize=function(className){return this.each(function(){var ta=this,$ta=$(ta).css({overflow:hidden,overflowY:hidden,wordWrap:'break-word'}),mirror=$(copy).addClass(className||'autosizejs')[0],minHeight=$ta.height(),maxHeight=parseInt($ta.css('maxHeight'),10),active,i=copyStyle.length;maxHeight=maxHeight&&maxHeight>0?maxHeight:9e4;function adjust(){var height,overflow;if(!active){active=true;mirror.value=ta.value;mirror.style.overflowY=ta.style.overflowY;mirror.style.width=$ta.css('width');mirror.scrollTop=0;mirror.scrollTop=9e4;height=mirror.scrollTop;overflow=hidden;if(height>maxHeight){height=maxHeight;overflow='scroll'}else if(height<minHeight){height=minHeight}ta.style.overflowY=overflow;ta.style.height=ta.style.minHeight=ta.style.maxHeight=height+'px';setTimeout(function(){active=false},1)}}while(i--){mirror.style[copyStyle[i]]=$ta.css(copyStyle[i])}$('body').append(mirror);if(onpropertychange in ta){if(oninput in ta){ta[oninput]=ta.onkeyup=adjust}else{ta[onpropertychange]=adjust}}else{ta[oninput]=adjust}$(window).resize(adjust);$ta.bind('autosize',adjust);adjust()})}}else{$.fn.autosize=function(){return this}}}(jQuery));```