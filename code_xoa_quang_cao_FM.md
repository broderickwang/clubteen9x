1% là do forumotion updates hoặc đổi id, class quảng cáo nhưng cũng dễ dàng khắc phục bằng cách sửa trong code của mình . 1% còn lại nữa là do các bạn sử dụng có kín đáo hay không nhé

Vào Templates -> Quản lý tổng thể -> Overall\_header -> Cho code dưới đây vào trước 

Unknown end tag for &lt;/head&gt;


```

<script type="text/javascript">
$(function() {
$('#icefox').click(function(){
$('.module-advert, #zzadcontent, #zzadfooter').fadeOut(0, function(){$(this).remove;});
my_setcookie("module-advert", 1, 1, 0);
});
if (my_getcookie("module-advert") == "1") {
$("div.module-advert, div#zzadcontent, div#zzadfooter").hide();
};
});


Unknown end tag for &lt;/script&gt;



```
Đặt code này ở nơi mà bạn thích: (Thử đặt duới cùng overall\_header xem )
<a href='javascript:void(0)'>Click để ẩn Quảng Cáo</a>

Cơ chế hoạt động của code trên là ẩn những ID và Class của q.cáo FM. Sử dụng Cookie để lưu thao tác bạn vừa ẩn nên những lần truy cập sau bạn sẽ ko còn khó chịu với q.cáo nữa, trừ khi xoá Cookie của trình duyệt . Tại sao mình lại nói 98%? Với code trên các bạn có thể đặt nó ở một góc khuất nào đó, hoặc để một nơi khó để ý nhất,.. với lại fm cũng chẳng hơi đâu dò coi forum nào có code này nếu bạn không bô lô ba la trên mấy diễn đàn nước ngoài khác :-s

Code trên mình remove hẳn q.cáo nên khi click lại nó sẽ ko hiện. Nếu ai muốn click nó hiện lại thì thay:
```

.fadeOut(0, function(){$(this).remove;});
```
Bằng code này:
```

.slideToggle();
```
Nhắc các bạn là thủ thuật này chỉ ẩn đi để tránh gai mắt chứ không làm biến mất hoàn toàn. Ai muốn tốc độ forum nhanh hơn chỉ có cách bỏ tiền ra và xoá quảng cáo

Have Fun!


hiện với khách, ẩn với member là được rồi @_@_

```


$(function () {
if(document.getElementById('logout') != null) {
$('.module-advert, #zzadcontent, #zzadfooter').remove()
}
});```

2 năm trước đã từng viết code tương tự:
http://diendan.chinhphuc.info/t21051-topic#137177
http://www.fmvi.vn/t675-code-xoa-quang-cao-cho-punbb#5689

Code ẩn quảng cáo thì chỉ nên ẩn quảng cáo cuối trang. Sau khi click vào nút đóng khoảng 3 lần thì mã tạo quảng cáo cuối trang sẽ không chạy nữa. Còn cách ẩn kia thì quảng cáo vẫn chạy vẫn chậm trang như thường. Đây là giải pháp 100%, chỉ ẩn quảng cáo cuối trang.

```

<script type="text/javascript">
$(function () {
$("#zzadclose").length && $("#zzadclose").click()
})


Unknown end tag for &lt;/script&gt;


```


Nếu muốn một giải pháp 99% thì thêm cookie vào nút đóng.

```

<script type="text/javascript">
$(function () {
$("#zzadclose").length && ($("#zzadclose").click(function () {
$(".module-advert,#add-google-bottom").remove();
my_setcookie("ads", 1, !0)
}), "1" == my_getcookie("ads") && $("#zzadclose").click())
})


Unknown end tag for &lt;/script&gt;



```
```

$(function () {
if (my_getcookie('deladsFMvi') == 'yes') {
$("#main-content div:first, #add-google-bottom").remove();
};
$("#zzadclose").click(function () {
$("#main-content div:first, #add-google-bottom").remove();
my_setcookie('deladsFMvi', 'yes', true);
});
});
```

Tác dụng của nó là khi click vào nút đóng quảng cáo ở footer thì nó sẽ xóa cả 2 quảng cáo và lưu lại trong cookie, vì thế khi bạn chuyển sang trang khác cũng sẽ ko bị quảng cáo nữa.
Về việc có bị xóa 4r ko thì mình ko chắc, chỉ làm 1 cái cho punBB.

Cách tối ưu, sao chép bài này và hướng dẫn cho mem:
http://www.fmvi.vn/t568-dung-add-on-adblock-e-truy-cap-dien-an-nhanh-hon?showpost=4642