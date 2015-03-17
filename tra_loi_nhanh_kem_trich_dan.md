Áp dụng cho mọi phiên bản forumotion: phpBB2, phpBB3, punBB, Invision.
Chức năng: Khi bạn Click vào nút Quote của forum, thì phần trích dẫn sẽ được chuyển ngay xuống khung trả lời nhanh.
Demo: www.fmvi.tk/t139-tr-li-nhanh-vi-trich-dn" target="_blank" rel="nofollow">http://www.www.fmvi.tk/t139-tr-li-nhanh-vi-trich-dn
ACP - Modules - HTML & JAVASCRIPT - Javascript codes management:_

> Title: Trích dẫn bài viết
> Placement: In the topics
> Javascript Code:
```

$(function(){$('<div id="baxambalap">

Unknown end tag for &lt;/div&gt;

').insertBefore('#text_editor_textarea');$("img.i_icon_quote").click(function(){$("#text_edit").show();$("#html_edit").hide();$('#text_editor_textarea, #text_editor_iframe').remove();var ttytu=$(this).parent().attr("href");var xhets=ttytu+' '+'#text_editor_textarea';$("#baxambalap").load(xhets);$(this).parent().attr("href","#quickreply");$('#text_editor_textarea:gt(0)').remove()});});
```

Ghi chú: Đối với phpBB2 và punBB có thể áp dụng thêm code trả lời nhanh không chuyển trang để việc gửi bài được thuận tiện hơn.
Xem tại: www.fmvi.tk/t136p15-tr-li-nhanh-khong-chuyn-trang" target="_blank" rel="nofollow">http://www.www.fmvi.tk/t136p15-tr-li-nhanh-khong-chuyn-trang
Viết bởi baivong - FMvi.tk_


