Demo : ![http://i42.servimg.com/u/f42/17/52/69/11/demo11.png](http://i42.servimg.com/u/f42/17/52/69/11/demo11.png)

tạo js

- Title **: ( tùy bạn )
- Placement : In all the pages
- Javascript Code** : dùng code dưới

```

$(function(){$(".main-head").prepend('<span class="collapse" style="padding: 0px; float:right;width: 15px;height: 15px;overflow: hidden;"><img src="http://9xna.com/@forum/styles/xiteen/buttons/collapse_tcat.gif" alt="Đóng" /><img class="hide" src="http://9xna.com/@forum/styles/xiteen/buttons/collapse_tcat_collapsed.gif" alt="fmOpen" />

Unknown end tag for &lt;/span&gt;

');$(".collapse").each(function(index){$(this).attr("id","fmvicollapse"+location.pathname+index);if(my_getcookie("fmvicollapse"+location.pathname+index)=="1"){$(this).children("img[alt='Đóng']").hide();$(this).children("img[alt='fmOpen']").show();$(this).parent().next().hide()}});$(".collapse img[alt='Đóng']").click(function(){my_setcookie($(this).parent().attr("id"),1,1,0);$(this).hide().next().show();$(this).parent().parent().next().hide()});$(".collapse img[alt='fmOpen']").click(function(){my_setcookie($(this).parent().attr("id"),0,1,0);$(this).hide().prev().show();$(this).parent().parent().next().show()})});

```