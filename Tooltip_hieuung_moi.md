Đây là code tooltip có hiệu ứng khá đẹp.Dành cho phpbb.(các phiên bản khác mình chưa thử)Khi nó hiện ra và biến mất rất đẹp.
Demo:http://strawhat-group.tk
Cách làm:
B1:
Vào index\_box tìm:

```

class="forumtitle"

```
Thay bằng:

```

class="forumtitle" title="{catrow.forumrow.FORUM_NAME}"
```

B2:Chèn Vào cuối index\_box:
Trả Lời để thấy:

```


<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.1/themes/base/jquery-ui.css" />
<script src="http://code.jquery.com/jquery-1.9.1.js">

Unknown end tag for &lt;/script&gt;


<script src="http://code.jquery.com/ui/1.10.1/jquery-ui.js">

Unknown end tag for &lt;/script&gt;


<script>
$(function() {
$( ".forumtitle" ).tooltip({
hide: {
effect: "explode",
delay: 250
}
});
});


Unknown end tag for &lt;/script&gt;


```

hehe hehe hehe

Nguồn: http://strawhat-group.tk/

> Lưu Ý: Khi copy nhớ ghi rõ nguồn.