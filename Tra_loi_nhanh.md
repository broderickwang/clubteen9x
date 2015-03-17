Tạo js mới:
Title **: Trả lời nhanh
Placement : In the topics
Javascript Code** :

```
    $(function(){$("form#quick_reply input[name='post']").click(function(){$('<iframe name="replyreload" height="0px" width="0px" frameborder="0">

Unknown end tag for &lt;/iframe&gt;

').insertBefore('form#quick_reply');$('form#quick_reply').attr('target','replyreload');$('form#quick_reply').submit(function(){var t=setTimeout("fmreply()",1000);});});});function fmreply(){window.location.reload()}```