![http://www.skinbox.net/demo/public/style_images/source/cat_maximize.png](http://www.skinbox.net/demo/public/style_images/source/cat_maximize.png)
![http://www.skinbox.net/demo/public/style_images/source/cat_minimize.png](http://www.skinbox.net/demo/public/style_images/source/cat_minimize.png)

Title **: Đóng mở mục
Placement : In all the pages
Javascript Code** :

```
    $(function(){$(".main-head").prepend('<span class="collapse" style="padding: 0px; float:right;width: 32px;height: 22px;overflow: hidden;"><img src="http://www.skinbox.net/demo/public/style_images/source/cat_minimize.png" alt="fmClose" /><img class="hide" src="http://www.skinbox.net/demo/public/style_images/source/cat_maximize.png" alt="fmOpen" />

Unknown end tag for &lt;/span&gt;

');$(".collapse").each(function(index){$(this).attr("id","fmvicollapse"+location.pathname+index);if(my_getcookie("fmvicollapse"+location.pathname+index)=="1"){$(this).children("img[alt='fmClose']").hide();$(this).children("img[alt='fmOpen']").show();$(this).parent().next().hide()}});$(".collapse img[alt='fmClose']").click(function(){my_setcookie($(this).parent().attr("id"),1,1,0);$(this).hide().next().show();$(this).parent().parent().next().hide()});$(".collapse img[alt='fmOpen']").click(function(){my_setcookie($(this).parent().attr("id"),0,1,0);$(this).hide().prev().show();$(this).parent().parent().next().show()})});```