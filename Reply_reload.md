Tác dụng của code này là khi bạn Send, thì bài viết sẽ được gửi ngay mà không bị chuyển sang trang thông báo.
ACP - Ganeral - Forum - Security - Security Administration - Flood control. Delay between 2 messages, topics or private messages by a user. : 10
ACP - Ganeral - Messages and e-mails - Configuration - Messages - Allow Quick Reply : Yes
ACP - Modules - HTML & JAVASCRIPT - Javascript codes management:

> Title: Trả lời nhanh
> Placement: In the topics
> Javascript Code: Code:
> > Ver 1:
```

$(function(){$("form#quick_reply input[name='post']").click(function(){$('<iframe name="replyreload" height="0px" width="0px" frameborder="0">

Unknown end tag for &lt;/iframe&gt;

').insertBefore('form#quick_reply');$('form#quick_reply').attr('target','replyreload');$('form#quick_reply').submit(function(){var t=setTimeout("fmreply()",1000);});});});function fmreply(){window.location.reload()}
```
