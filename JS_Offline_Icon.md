Chắc hẳn nhiều bạn vẫn hay thắc mắc tại sao mình cài đặt icon khi offline rồi mà khi out nick vào kiểm tra vẫn không hiện icon, vậy thì topic hôm nay mình sẽ hướng dẫn điều đó cho các bạn rất đơn giản với chỉ 1 thao tác
Admin Panel -> Modules -> JavaScript -> Create New -> Offline Icon -> Chọn tất cả các trang -> Paste:

```

$(function() {
var post=$('.post'), end = post.length;
for (var i=0; i<end; i++) {
if(/(^|\s)online(\s|$)/.test(post[i].className)) {
post[i].style.backgroundImage = 'url(Link ảnh  của hình ảnh Offline )';
}
}
});```

Thay link ảnh vào nhé các bạn.