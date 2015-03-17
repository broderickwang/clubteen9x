Bài này các bạn nên đọc, vì một số skin Invision phải có widget thì mới nên hồn Smile


Chào mọi người..

Hiện nay Invision có bao gồm 2 loại last topic nhớn, đó là Last topic (by tay) với CSS và Last topic với Javascript và CSS (by mía)
Và hôm nay thì chúg ta đi tìm hiểu kĩ hơn về last topic với Javascript và CSS.

Okay, đoạn Javascript căn bản của Last topic ngang (Chỉ xếp ngang, thẳg hàg, không full thông tin) là:

```


$(function () {
$('#left .module:eq(0)').addClass('topposter').next().remove();
$('#left .module:eq(0) a[href^="/u"]').addClass('toppost');
$('#left .module:eq(1)').addClass('recent');
$('#left .module:eq(1) a[href^="/t"]').addClass('recenter');
});
```
với widget sắp xếp theo thứ tự:

> Top poster >> Recent Topics



Và các bạn chú ý trong script, có xuất hiện những đoạn eq(x) trong đó x là cái có class .module thứ x (đếm từ 0).

VD: Trong đoạn trên, với widget trên, thì ngoài 4r của bạn sẽ có 2 cái bảng : Top poster và Recent Topics.
Top Poster xếp đầu tiên nên nó sẽ ứng với số thứ tự là 0.
Recent Topic xếp thứ 2 nên nó sẽ ứng với số thứ tự là 1.
Tương tự, nếu bạn xếp thêm widget thì cũng theo quy luật đó, thêm 1 dòng

```


$('#left .module:eq(x)').addClass('recenter');
```
vào trước

```


});
```

Cái x là cái gì bạn biết rồi đấy :>