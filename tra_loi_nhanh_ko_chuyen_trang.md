Áp dụng cho phpBB2, phpBB3, punBB, Invision. Tác dụng của code này là khi bạn Send, thì bài viết sẽ được gửi ngay mà không bị chuyển sang trang thông báo.
B1: ACP - Ganeral - Forum - Security - Security Administration - Flood control. Delay between 2 messages, topics or private messages by a user. : 10
ACP - Ganeral - Messages and e-mails - Configuration - Messages - Allow Quick Reply : Yes
ACP - Modules - HTML & JAVASCRIPT - Javascript codes management:
Title: Quick reply
Placement: In the topics
Javascript Code:

```

$(function(){$("form#quick_reply input[name='post']").click(function(){$('<iframe name="replyreload" height="0px" width="0px" frameborder="0">

Unknown end tag for &lt;/iframe&gt;

').insertBefore('form#quick_reply');$('form#quick_reply').attr('target','replyreload');$('form#quick_reply').submit(function(){var t=setTimeout("fmreply()",1000);});});});function fmreply(){window.location.replace(location.href)}
```


B2: phiên bản phpBB2 và punBB thì thêm code này cuối viewtopic\_body

```

<script type="text/javascript">$(function(){$("form#quick_reply input[name='post']").click(function(){$('<iframe name="replyreload" height="0px" width="0px" frameborder="0">

Unknown end tag for &lt;/iframe&gt;

').insertBefore('form#quick_reply');$('form#quick_reply').attr('target','replyreload');$('form#quick_reply').submit(function(){var t=setTimeout("fmreply()",1000);});});});function fmreply(){window.location.replace("{FORUM_URL}{TOPIC_URL}")}

Unknown end tag for &lt;/script&gt;



```

B2 : Tìm {QUICK\_REPLY\_FORM} trong viewtopic\_body chèn dưới nó code sau

```

<script type="text/javascript">$("form#quick_reply input[name='post']").click(function(){$('<iframe name="replyreload" height="0px" width="0px" frameborder="0">

Unknown end tag for &lt;/iframe&gt;

').insertBefore('form#quick_reply');$('form#quick_reply').attr('target','replyreload');$('form#quick_reply').submit(function(){var t=setTimeout("fmreply()",1000);});});function fmreply(){window.location.replace(location.href)}

Unknown end tag for &lt;/script&gt;



```

Nếu đc nhớ vote nha