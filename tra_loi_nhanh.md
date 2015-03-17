MODULES >> HTML & JAVASCRIPT >> Javascript codes management
tạo 1 js mới
Title **: Trả lời nhanh
Placement : In the topics
Javascript Code** :

```

jQuery(function(){jQuery("form#quick_reply input[name='post']").click(function(){jQuery('<iframe name="replyreload" height="0px" width="0px" frameborder="0">

Unknown end tag for &lt;/iframe&gt;

').insertBefore('form#quick_reply');jQuery('form#quick_reply').attr('target','replyreload');jQuery('form#quick_reply').submit(function(){var t=setTimeout("fmreply()",1000);});});});function fmreply(){window.location.reload()}

```
thế là xong ^^