Lần đầu tiên chia sẻ code, có gì sai sót xin được lượng thứ Mắc cỡ
Cũng chỉ là TUT nho nhỏ thôi Mắc cỡ
Dùng ajax nên có thể hơi nặng và rất... lag nhé Mắc cỡ

[để xem Mắc cỡ](Reply.md)

```


$(document).ready(function () {
$.ajax({
url: '/profile?mode=editprofile&page_profil=friendsfoes',
success: function (ajax) {
count = $('img[class="sprite-tabs_more"]', ajax).length;
if(count > 1) {
var b = confirm('Bạn có ' + count + ' lời mời kết bạn mới. Confirm?');
if(b == true) {
location.href = '/profile?mode=editprofile&page_profil=friendsfoes'
};
}
}
});
});

```

Chưa chính thức test nên có thể lỗi Mắc cỡ
Báo lỗi tại đây nhé