1. Add nhạc nền vào profile

B1: Vào QLND-QLN ![http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png](http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png) QLND ![http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png](http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png) PROFILE nhấn đấu ![http://r26.imgfast.net/users/2615/25/32/47/smiles/32962.png](http://r26.imgfast.net/users/2615/25/32/47/smiles/32962.png) add thêm cái mới
B2: làm như sau

Type : Text zone
Name : Nhạc nền
Description : ko ghi gì
URL icon : mún thêm hình gì cũng dc [nhỏ thôi](icon.md)
Necessarily filled ? không
Display : lý lịch
Display type : icon
Who can modify the profile field value? Người điều hành - Member himself
Display this field for users that are at least : Member
Separator : Back to the line

Nhấn chấp nhận là xong

2. Làm hình nền cho profile giống chinhphuc

B1. chèn Java Cripe này đã để In all the page

```

$(document).ready(function(){jQuery("#field_id-20 .field_uneditable br").remove();var css=$("#field_id-20 .field_uneditable").html();setInterval("$(function () {$('#field_id-20 img.ajax-profil_valid').attr('onclick','changecssClick();')});",1000);$('head').append('<style>'+css+'

Unknown end tag for &lt;/style&gt;

')});function changecss(){var bcss=$('#profile_field_2_-20 .field_uneditable').val();$('head style').html(bcss)};function changecssClick(){var bcss=$('#profile_field_2_-20').val();$('head style').html(bcss)};

```

B2. Vào Quản lý người dùng Profiles Comment Đổi thành Wall css Làm theo cái này

Display : Lý lịch
Display type : Text
Who can modify the profile field value ? Người Điều Hành và Member himself
Display this field for users that are at least : Member
Separator : Back to the line

Vào phần chỉnh sửa Profile của bạn

Chèn code này vào phần Wall css

```

body{
background:#333 url(http://i.minus.com/iDCR4Mq5lkupp.jpg) repeat top left;
font-family:Arial;
}

```

Nếu mún thay wall bạn thay link này bằng link ảnh bạn thích

```

http://i.minus.com/iDCR4Mq5lkupp.jpg
```


Thấy dc like nha có lỗi gì thì Cm lên topic này lun nha

Nguồn : Javacripe của Wallcss ở chinhphuc.info
Còn nhạc nền là em tự mò hơn 2h

```
    [img]http://r24.imgfast.net/users/2414/10/52/48/smiles/984495496.gif[/img][i][strike][color=#00eb2f]Mưa Ngọt Ngào - Lynk Lee[/color][/strike][/i][img]http://r24.imgfast.net/users/2414/10/52/48/smiles/984495496.gif[/img]

[flash(1,1)]http://static.mp3.zdn.vn/skins/mp3_main/flash/player/mp3Player_skin1.swf?xmlurl=http://mp3.zing.vn/blog?MjAxMi8wOC8xMy9kLzgvInagaMEZDgyNTgwMTQzZDUzMGJjMDlmNzmUsIC2NjU0OGNiMWE4NWUdUngWeBXAzfE3GsGEgTmfhdUng410IE5nw6BvInagaMEfEx5WeBmsgTGVlfDF8NQ[/flash]```