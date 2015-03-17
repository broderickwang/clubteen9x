Chức năng: Đoạn script dưới đây sẽ giúp ngăn việc thành viên gửi 2 bài liên tiếp trong một trang. Nó có chức năng ẩn khung trả lời nhanh, và thay link nút trả lời bài viết bằng link chỉnh sửa bài viết.

Hướng dẫn: ACP - Modules - HTML & JAVASCRIPT - Javascript codes management:

> Title **: Chặn thành viên gửi bài liên tiếp
> Placement : In the topics
> Javascript Code** :
> > phpBB2:

```

$(function() {
var a = $("#i_icon_mini_logout").attr("title"), d = a.slice(a.indexOf('[')+1,a.indexOf(']')).replace(/ /gi, ''), b = $(".name:last strong strong").text().replace(/ /gi, ''), c = $(".i_icon_edit:last").parent().attr("href");
d == b && ($("a[href$='&mode=reply']").attr("href", c), $("#quick_reply").remove())
});

```

> phpBB3:

```

$(function() {
var a = $("#i_icon_mini_logout").attr("title"), d = a.slice(a.indexOf('[')+1,a.indexOf(']')).replace(/ /gi, ''), b = $(".postprofile:last a[href^='/u'] strong").text().replace(/ /gi, ''), c = $(".i_icon_edit:last").parent().attr("href");
d === b && ($(".i_reply").parent().attr("href", c), $("#quick_reply, h3:contains('Quick reply')").remove())
});

```
> punBB:

```

$(function() {
var a = $("#i_icon_mini_logout").attr("title"), d = a.slice(a.indexOf('[')+1,a.indexOf(']')).replace(/ /gi, ''), b = $(".username:last strong").text().replace(/ /gi, ''), c = $(".i_icon_edit:last").parent().attr("href");
d == b && ($(".i_reply").parent().attr("href", c), $("#quick_reply").parent().parent().remove())
});

```
> Invision:

```

$(function() {
var a = $("#i_icon_mini_logout").attr("title"), d = a.slice(a.indexOf('[')+1,a.indexOf(']')).replace(/ /gi, ''), b = $(".postprofile:last strong:first").text().replace(/ /gi, ''), c = $(".i_icon_edit:last").parent().attr("href");
d == b && ($(".i_reply").parent().attr("href", c), $("#qpost").remove())
});


```

Ghi chú: Code nhận dạng người viết qua bài viết cuối cùng của trang, nếu như bạn là người gửi cuối cùng của trang đang xem nhưng không phải người gửi cuối của bài viết thì code vẫn xem bạn là người cuối cùng, và bạn phải chuyển về trang cuối thì mới gửi trả lời được.

[+] Nếu bạn muốn sao chép hướng dẫn này đi nơi khác vui lòng không thay đổi bất kỳ thành phần nào trong code và phải ghi bản quyền thuộc www.FMvi.org