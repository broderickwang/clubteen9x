+ Thay vì hiển thị là link:

```

http://www.cntt-k3.biz/t1172-topic

```
+ Khi sử dụng code js dưới đây, link trong forum bạn sẽ được viết gọn lại là:

Cod: Chọn code
> .../t1172-topic


Hướng dẫn:
ACP => Modules => Javascript codes management => Creat a new javascript =>
Title: rút gọn link
Placement: In the topics
Javascript Code:

```

// JavaScript Document
jQuery(document).ready(function(){
jQuery(".postbody a").each(function(){      jQuery(this).html(jQuery(this).html().toLowerCase().replace("http://www.cntt-k3.biz","...").split("#")[0]);
})
})```