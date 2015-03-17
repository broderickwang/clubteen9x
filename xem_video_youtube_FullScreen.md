demo ko biết nói thế nào cả chỉ biết là gửi video thì ấn vào nút thì nó phóng to toàn màn hình

tạo 1 js cho cái này vào
js

```

var source='Distribution/Editing of this code is allowed but the source(s) must be mentioned. http://www.diondesigns.org & http://lgforum.forumotion.co.uk';
$(function() {
$('.postbody embed').each(function() {
var srcF = $(this).attr('src');
var dimW = $(this).attr('width');
var dimH = $(this).attr('height');
$(this).replaceWith('<object width="' + dimW + '" height="' + dimH + '"><param name="movie" value="' + srcF + '?version=3">

Unknown end tag for &lt;/param&gt;

<param name="allowFullScreen" value="true">

Unknown end tag for &lt;/param&gt;

<param name="allowscriptaccess" value="always">

Unknown end tag for &lt;/param&gt;

<embed src="' + srcF + '?version=3" type="application/x-shockwave-flash" width="' + dimW + '" height="' + dimH + '" allowscriptaccess="always" allowfullscreen="true" wmode="transparent" >

Unknown end tag for &lt;/embed&gt;



Unknown end tag for &lt;/object&gt;

');
});
});
```


rùi
cho vào vewtopic

```

<script type="text/javascript" src="link js">

Unknown end tag for &lt;/script&gt;


```


nhớ sửa link js thành link js của bạn