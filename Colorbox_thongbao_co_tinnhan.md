demo :           ![http://img853.imageshack.us/img853/1674/demoj.jpg](http://img853.imageshack.us/img853/1674/demoj.jpg)


Forum bạn phải sử dụng colorbox: http://www.cntt-k3.biz/t1413-topic
Display => Pics management => Mã mở rộng => Icons for topic => Copy link hình ở Tiêu đề - New
Chèn vào cuối index\_body:



```

<script type="text/javascript">$(document).ready(function(){$.ajax({url: '/privmsg?folder=inbox',success: function(ajax) {count = $('img[src="http://photo.yeah1.com/images/smilies/khi_collection/khi9b.gif"]', ajax).length;if (count < 1) {$('a.mailbox').html('Không có tin nhắn mới');}else {$('a.mailbox').html('<strong>'+count+'

Unknown end tag for &lt;/strong&gt;

 tin nhắn chưa đọc');}}});});

Unknown end tag for &lt;/script&gt;


<script type="text/javascript">$(document).ready(function(){$.ajax({url: '/privmsg?folder=inbox',success: function(ajax) {count = $('img[src="http://i20.servimg.com/u/f20/15/90/59/25/thread12.gif"]', ajax).length;if (count < 1) {$('a.mailbox').html('Không có tin nhắn mới');}else {$('a.mailbox').html('<strong>'+count+'

Unknown end tag for &lt;/strong&gt;

 tin nhắn chưa đọc');$.colorbox({html:'<div  style="width: 333px; overflow-x: auto; overflow-y: auto; height: 200px; "><div id="ca3newmes"><div align="center" valign="middle" style="padding:10px"><b><img src="http://i1199.photobucket.com/albums/aa465/batuan94vt/SVNH%20fix/icon2.png"><br>Bạn có <font color="red">'+count+' 

Unknown end tag for &lt;/font&gt;

tin nhắn chưa đọc ...<br><a href="/privmsg?folder=inbox">Click vào đây để kiểm tra hộp thư !

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

'});}}});});jQuery("#ca3chatbox").click(function(){jQuery("#ca3rules").toggle("slow");});

Unknown end tag for &lt;/script&gt;


```

Thay:

```

http://i20.servimg.com/u/f20/15/90/59/25/thread12.gif```


Bằng link Tiêu đề - New bạn đã copy lúc nãy