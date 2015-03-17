đầu tiên bạn nào chưa làm shop thì làm ở bước này http://www.hotrofm.com/t2023-topic?highlight=shop+avatar

còn bạn nào làm rùi thì làm như sau

code:

chẳng biết nói demo thế nào
đơn giản là nó có 1 cái nút ấn vào hiện avatar và có 1 cái nút ấn vào hiện shop aminem đơn giản là như vậy ^^!

ai làm dc chup cho mình cái demo nhất là tác giả đã nhờ làm cái nút này

vào vewtopic tìm

```

<span class="fmviAA">

Unknown end tag for &lt;/span&gt;



```

rùi thay bằng
```

<div class="fmvihotrofm">
<span class="fmviAA">

Unknown end tag for &lt;/span&gt;

<br>
<a id="dav_avatarS">click avatar

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/div&gt;


<div class="fmvihotrofm1" style="display:none">
<span>{postrow.displayed.POSTER_AVATAR}

Unknown end tag for &lt;/span&gt;

<br>
<a id="dav_avatarH" >click aminem

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/div&gt;


<script>$(document).ready(function(){$("#dav_avatarS").click(function(){$(".fmvihotrofm1").show();$(".fmvihotrofm").hide();});$("#dav_avatarH").click(function(){$(".fmvihotrofm1").hide();$(".fmvihotrofm").show();});});

Unknown end tag for &lt;/script&gt;



```

thế là xong :D