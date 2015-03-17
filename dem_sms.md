Dùng cho PhpBB2 và PunBB . chưa thử trên BB3 Cười nhe răng
Tìm trong over header đoạn code này

```


<script src="{JQUERY_PATH}" type="text/javascript">

Unknown end tag for &lt;/script&gt;



```

chèn đoạn code này vào ngay bên dưới

```


<script type="text/javascript">
$(document).ready(function(){$.ajax({
url: '/privmsg?folder=inbox',
success: function(ajax) {
count = $('img[src="http://illiweb.com/fa/prosilver/topic_unread.gif"]', ajax).length;
if (count < 1) {
$('a.mailbox').html('Không có tin nhắn mới');
}
else {
$('a.mailbox').html('<strong>'+count+'

Unknown end tag for &lt;/strong&gt;

 tin nhắn chưa đọc');
}}
});
});


Unknown end tag for &lt;/script&gt;



```

tìm trong code sửa link ành
```


http://illiweb.com/fa/prosilver/topic_unread.gif

```

thành link ảnh Bài viết mới của bạn .
(Vào Display ![http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png](http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png) Pictures and Colors ![http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png](http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png) Pics management ![http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png](http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png) Mã mở rộng ![http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png](http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png) icons for topics ![http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png](http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png) copy link ảnh của mục Tiêu đề - New )

cuối cùng chèn code này vào chổ cần hiển thị tùy ý bạn
```


<!-- BEGIN switch_user_logged_in -->
<a href="/privmsg?folder=inbox" class="mailbox">Mailbox 

Unknown end tag for &lt;/a&gt;


<!-- END switch_user_logged_in -->
```

DEMO:

Enlarge this image