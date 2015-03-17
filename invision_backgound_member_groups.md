Thực hiện nào
Tạo 1 file Javascript mới này:

```


$(function () {
$('.author span[style="color:#FA0000"]').parents('.post').addClass('re-Admin');
});```

Trong code trên, sửa #FA0000 thành mã màu của nhóm
Và nhét code sau vào CSS:

```


.re-Admin .post-entry{background:url(http://i40.servimg.com/u/f40/17/70/31/89/admin_10.png) repeat-y center right}
```
Trong code trên thay ![http://i40.servimg.com/u/f40/17/70/31/89/admin_10.png](http://i40.servimg.com/u/f40/17/70/31/89/admin_10.png) thành link ảnh nền tương thích
Ai muốn thêm nữa thì thêm dòng này

```


$('.author span[style="color:#FA0000"]').parents('.post').addClass('re-Admin');
```
vào trước }); trong Javascript, rồi chỉnh sửa, thay class,... tương ứng trong CSS



Demo nhiều nhóm:
Javascript:

```


$(function () {
$('.author span[style="color:#FA0000"]').parents('.post').addClass('re-Admin');
$('.author span[style="color:#FF00FF"]').parents('.post').addClass('re-Smod');
$('.author span[style="color:#8F15D6"]').parents('.post').addClass('re-Security');
$('.author span[style="color:#0000FF"]').parents('.post').addClass('re-Mod');
$('.author span[style="color:#FF7B08"]').parents('.post').addClass('re-Instructor');
$('.author span[style="color:#00FF00"]').parents('.post').addClass('re-Designer');
$('.author span[style="color:#C9BF06"]').parents('.post').addClass('re-Honour');
$('.author span[style="color:#008000"]').parents('.post').addClass('re-Ambassador');
$('.author span[style="color:#08F7EB"]').parents('.post').addClass('re-Reviewer');
});

```
CSS:

```


.re-Admin .post-entry{background:url(http://i40.servimg.com/u/f40/17/70/31/89/admin_10.png) repeat-y center right}
.re-Smod .post-entry{background:url(http://i40.servimg.com/u/f40/17/70/31/89/iaza1510.gif) repeat-y center right}
.re-Security .post-entry{background:url(http://i40.servimg.com/u/f40/17/70/31/89/iaza1511.gif) repeat-y center right}
.re-Mod .post-entry{background:url(http://i40.servimg.com/u/f40/17/70/31/89/iaza1512.gif) repeat-y center right}
.re-Designer .post-entry{background:url(http://i40.servimg.com/u/f40/17/70/31/89/iaza1513.gif) repeat-y center right}
.re-Instructor .post-entry{background:url(http://i40.servimg.com/u/f40/17/70/31/89/iaza1514.gif) repeat-y center right}
.re-Honour .post-entry{background:url(http://i40.servimg.com/u/f40/17/70/31/89/cp341010.png) repeat-y center right}
.re-Ambassador .post-entry{background:url(http://i40.servimg.com/u/f40/17/70/31/89/cp321010.png) repeat-y center right}
.re-Reviewer .post-entry{background:url(http://i40.servimg.com/u/f40/17/70/31/89/iaza1515.gif) repeat-y center right}
```

Khuyến mãi bộ ảnh background của IFC (sửa màu từ ảnh của handsomevip007 Mắc cỡ)


![http://i40.servimg.com/u/f40/17/70/31/89/iaza1510.gif](http://i40.servimg.com/u/f40/17/70/31/89/iaza1510.gif)
![http://i40.servimg.com/u/f40/17/70/31/89/iaza1511.gif](http://i40.servimg.com/u/f40/17/70/31/89/iaza1511.gif)
![http://i40.servimg.com/u/f40/17/70/31/89/iaza1512.gif](http://i40.servimg.com/u/f40/17/70/31/89/iaza1512.gif)
![http://i40.servimg.com/u/f40/17/70/31/89/iaza1513.gif](http://i40.servimg.com/u/f40/17/70/31/89/iaza1513.gif)
![http://i40.servimg.com/u/f40/17/70/31/89/iaza1514.gif](http://i40.servimg.com/u/f40/17/70/31/89/iaza1514.gif)
![http://i40.servimg.com/u/f40/17/70/31/89/iaza1515.gif](http://i40.servimg.com/u/f40/17/70/31/89/iaza1515.gif)




Được sửa bởi Cáo Ba Chỏm ngày Sat Nov 03, 2012 7:58 pm; sửa lần 4. (Reason for editing : Thiếu nguồn in lớn cho lần sau đỡ quên :on21:)