Hướng dẫn khác với làm dùm nhé @@~
Cách 1: Đặt code này ở nơi muốn hiện số ngày:

```

<script type="text/javascript">
document.write(((new Date()).getDate())+"/"+((new Date()).getMonth()+1)+"/"+((new Date()).getUTCFullYear()))


Unknown end tag for &lt;/script&gt;


```

Code này hiện theo số ngày trên máy tính, nên nếu máy tính nào sai giờ thì bó tay, trên zing thì chắc lấy thời gian từ sever của zingme.

Cách 2: Cách này lấy thời gian từ sever của forumotion:

```

<div style="display:none" id="timefmvi">

Unknown end tag for &lt;/div&gt;


<script type="text/javascript">
$("#timefmvi").load("/profile?mode=editprofile&page_profil=preferences select[name='dateformat'] option[value='j/n/Y, H:i']", function () {
var timefmvi = $("#timefmvi").text().split(",")[0];
alert(timefmvi)
})


Unknown end tag for &lt;/script&gt;


```

Dùng timefmvi để đặt vào vị trí cần thay thời gian, phải đặt js của bạn thay cho vị trí của alert(timefmvi) thì nó mới hoạt động.