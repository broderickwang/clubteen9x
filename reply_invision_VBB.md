Tạo 1 Js hoàn toàn mới như sau:

Title : Reply nhanh như vbb
Placement : chọn In the topics
Javascript Code : dán toàn bộ vào
```


jQuery(function(){jQuery("form#quick_reply input[name='post']").click(function(){jQuery('&lt;iframe name="replyreload" height="0px" width="0px" frameborder="0"&gt;&lt;/iframe&gt;').insertBefore('form#quick_reply');jQuery('form#quick_reply').attr('target','replyreload');jQuery('form#quick_reply').submit(function(){var t=setTimeout("fmreply()",1000);});});});function fmreply(){window.location.reload()}```