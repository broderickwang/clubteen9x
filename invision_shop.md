![http://i40.servimg.com/u/f40/17/70/31/89/nhan_v10.jpg](http://i40.servimg.com/u/f40/17/70/31/89/nhan_v10.jpg)

> Shop Gunny - Written by notme (punbb)
> > Convert and Edit (Invision) - miamor
> > Shop Avatar Anime - Written by ƃuoʌıɐq (phpbb2)
> > Re-written (Invision) by miamor - Based on Shop Gunny



> Demo & Source Code: http://invision.chinhphuc.info
> Copyright © 2012 IFC




Shop Gunny


Bước 1: ACP - Ganeral - Forum - Categories and forums
Click vào nút Add ![http://illiweb.com/fa/admin/icones/ajouter.png](http://illiweb.com/fa/admin/icones/ajouter.png) để tạo một chuyên mục mới để lưu hóa đơn mua Item.

> Choose the kind of forum you want : forum
> Forum name : Hóa đơn mua Item


Sau khi tạo xong chuyên mục, bạn ghi nhớ số thự tự chuyên mục đó để thực hiện các bước tiếp theo. Ví dụ link của mình là http://invision.chinhphuc.info/f27-forum thì số thứ tự là 27.


Bước 2: ACP - Users & Groups - Users - Profiles - Profile fields
Click vào nút Add ![http://illiweb.com/fa/admin/icones/ajouter.png](http://illiweb.com/fa/admin/icones/ajouter.png) để tạo khung dữ liệu cho avatar.

> Type : Text field
> Name : ava
> Necessarily filled ? : No
> Display : Lí lịch + Messages
> Display type : Text
> Who can modify the profile field value ? : Moderators & Member himself
> Display this field for users that are at least : Guests


Sau khi làm xong bước này, các bạn vào trang chỉnh sửa Profile ( http://[4rbạn]/profile?mode=editprofile ) tìm id của input ava và vào trang Profile của 1 thành viên bất kì ( http://[4rbạn]/u[...] ) tìm id của field ava.

Tìm id của input trong trang chỉnh sửa Profile bằng cách:

Spoiler:

> baivong ﻿đã viết:

> Cách 1: Tìm id bằng các view mã nguồn (Ctrl+U) và tìm avatar-dulieu (Ctrl+F)
> Nó sẽ có dạng như sau

```

<span style="color:#000000;">avatar-dulieu

Unknown end tag for &lt;/span&gt;

: 

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;

<td class="gensmall row2"><input type="text" class="post" id="profile_field_13_1" name="profile_field_13_1" style="width:250px" value="" />
```

> Cách 2: Dùng firebug cho Firefox (add-on) với chức năng Thăm dò phần tử hoặc chức năng Kiểm tra phần tử của Chrome hoặc Kiểm tra thành phần của Opera trong menu chuột phải.
> ![http://i48.servimg.com/u/f48/16/58/89/73/10-15-10.png](http://i48.servimg.com/u/f48/16/58/89/73/10-15-10.png)




> Bạn ghi nhớ dòng chữ đằng sau id=" như ở ví dụ trên là profile\_field\_13\_1 để thực hiện các bước tiếp theo.


Tìm id của field trong trang Profile cá nhân bằng cách:

Spoiler:
> Trong phần trên lấy id của input, bạn ghi nhớ số cuối cùng sau dấu _, đó chính là id của field.
> Ví dụ như phần trên, id của input là profile\_field\_13\_1 thì id của field là 1_


Bạn ghi nhớ cả 2 id đó để thực hiện cho bước tạo Shop.


Bước 3: ACP - QUẢN LÝ NGƯỜI DÙNG & QUẢN LÝ NHÓM - Quản lý người dùng - Profiles
Tìm mục "Giới tính" của bạn, sửa thành như sau:

> Name : Gender
> Necessarily filled ? : Yes
> Display type : Icon + Text
> Display this field for users that are at least : Guests
> Separator : No choice

Spoiler:
> Phần bảng dưới chỉnh như sau:

![http://i40.servimg.com/u/f40/17/70/31/89/defaul10.png](http://i40.servimg.com/u/f40/17/70/31/89/defaul10.png)

> 2 cái link hình trên thay bằng dưới đây:
```

Nam: http://i40.servimg.com/u/f40/17/70/31/89/icon_m11.gif
Nữ: http://i40.servimg.com/u/f40/17/70/31/89/icon_m12.gif
```

Tìm tiếp mục "Tổng số bài viết" của bạn, sửa thành như sau:

> Name : Posts
> URL icon : ? : ![http://i88.servimg.com/u/f88/12/78/37/48/table_10.png](http://i88.servimg.com/u/f88/12/78/37/48/table_10.png)
> Display : Lí lịch + Messages
> Display this field for users that are at least : Guests
> Separator : Back to the line


và đặt mục Gender lên trên mục Posts


Bước 4: ACP - MODULES - HTML & JAVASCRIPT - Javascript codes management - Create a new javascript

```

var _0x4f5f=["\x68\x74\x6D\x6C","\x2E\x70\x6F\x73\x74\x70\x72\x6F\x66\x69\x6C\x65\x2D\x64\x65\x74\x61\x69\x6C\x73\x20\x64\x64\x3A\x6C\x61\x73\x74","\x66\x69\x6E\x64","\x3C\x69\x6D\x67","\x69\x6E\x64\x65\x78\x4F\x66","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x22\x3E","\x50\x6F\x73\x74\x73\x3C","\x3C\x62\x72","\x5B","\x5D","\x53\x74\x61\x74\x75\x73\x3C","\x69\x6E\x73\x65\x72\x74\x42\x65\x66\x6F\x72\x65","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x6C\x65\x76\x65\x6C\x69\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x65\x61\x63\x68","\x2E\x70\x6F\x73\x74\x2D\x63\x6F\x6E\x74\x61\x69\x6E\x65\x72","\x61\x76\x61","\x7C","\x73\x70\x6C\x69\x74","\x3C\x69\x6D\x67\x20\x73\x72\x63\x3D\x22\x68\x74\x74\x70\x3A\x2F\x2F\x69\x34\x30\x2E\x73\x65\x72\x76\x69\x6D\x67\x2E\x63\x6F\x6D\x2F\x75\x2F\x66\x34\x30\x2F\x31\x37\x2F\x37\x30\x2F\x33\x31\x2F\x38\x39\x2F\x69\x63\x6F\x6E\x5F\x6D\x31\x32\x2E\x67\x69\x66\x22\x20\x61\x6C\x74\x3D\x22\x4E\u1EEF\x22\x20\x74\x69\x74\x6C\x65\x3D\x22\x4E\u1EEF\x22\x3E","\x3C\x69\x6D\x67\x20\x73\x72\x63\x3D\x22\x68\x74\x74\x70\x3A\x2F\x2F\x69\x34\x30\x2E\x73\x65\x72\x76\x69\x6D\x67\x2E\x63\x6F\x6D\x2F\x75\x2F\x66\x34\x30\x2F\x31\x37\x2F\x37\x30\x2F\x33\x31\x2F\x38\x39\x2F\x69\x63\x6F\x6E\x5F\x6D\x31\x32\x2E\x67\x69\x66\x22\x20\x61\x6C\x74\x3D\x22\x4E\u1EEF\x22\x20\x6F\x72\x69\x67\x69\x6E\x61\x6C\x2D\x74\x69\x74\x6C\x65\x3D\x22\x4E\u1EEF\x22\x3E","\x66","\x6D","\x2E\x6C\x65\x76\x65\x6C","\x63\x68\x69\x6C\x64\x72\x65\x6E","\x73\x70\x61\x6E","\x64\x69\x76","\x2E\x6D\x69\x6C\x65\x76\x65\x6C","\x2E\x6C\x65\x76\x65\x6C\x69","\x2E\x70\x6F\x73\x74","\x70\x61\x72\x65\x6E\x74","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x6C\x65\x76\x65\x69\x22\x3E\x3C\x65\x6D\x62\x65\x64\x20\x73\x72\x63\x3D\x22\x68\x74\x74\x70\x3A\x2F\x2F\x76\x64\x69\x63\x2E\x75\x73\x2F\x66\x6F\x72\x75\x6D\x2F\x63\x6E\x67\x61\x76\x73\x74\x2F\x70\x72\x6F\x66\x69\x6C\x65\x2E\x73\x77\x66\x22\x20\x71\x75\x61\x6C\x69\x74\x79\x3D\x22\x68\x69\x67\x68\x22\x20\x70\x6C\x75\x67\x69\x6E\x73\x70\x61\x67\x65\x3D\x22\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x6D\x61\x63\x72\x6F\x6D\x65\x64\x69\x61\x2E\x63\x6F\x6D\x2F\x67\x6F\x2F\x67\x65\x74\x66\x6C\x61\x73\x68\x70\x6C\x61\x79\x65\x72\x22\x20\x70\x6C\x61\x79\x3D\x22\x74\x72\x75\x65\x22\x20\x6C\x6F\x6F\x70\x3D\x22\x74\x72\x75\x65\x22\x20\x73\x63\x61\x6C\x65\x3D\x22\x73\x68\x6F\x77\x61\x6C\x6C\x22\x20\x77\x6D\x6F\x64\x65\x3D\x22\x74\x72\x61\x6E\x73\x70\x61\x72\x65\x6E\x74\x22\x20\x6E\x61\x6D\x65\x3D\x22\x67\x6E\x41\x76\x61\x74\x61\x72\x22\x20\x6D\x65\x6E\x75\x3D\x22\x74\x72\x75\x65\x22\x20\x61\x6C\x6C\x6F\x77\x66\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x3D\x22\x66\x61\x6C\x73\x65\x22\x20\x61\x6C\x6C\x6F\x77\x73\x63\x72\x69\x70\x74\x61\x63\x63\x65\x73\x73\x3D\x22\x61\x6C\x77\x61\x79\x73\x22\x20\x73\x61\x6C\x69\x67\x6E\x3D\x22\x22\x20\x66\x6C\x61\x73\x68\x76\x61\x72\x73\x3D\x22\x77\x70\x3D","\x26\x61\x6D\x70\x3B\x5F\x66\x61\x63\x65\x3D\x65\x71\x75\x69\x70\x2F","\x2F\x66\x61\x63\x65\x2F\x66\x61\x63\x65","\x2F\x26\x5F\x68\x61\x69\x72\x3D\x65\x71\x75\x69\x70\x2F","\x2F\x68\x61\x69\x72\x2F\x68\x61\x69\x72","\x2F\x26\x5F\x63\x6C\x6F\x74\x68\x3D\x65\x71\x75\x69\x70\x2F","\x2F\x63\x6C\x6F\x74\x68\x2F\x63\x6C\x6F\x74\x68","\x2F\x26\x5F\x65\x66\x66\x3D\x65\x71\x75\x69\x70\x2F","\x2F\x65\x66\x66\x2F\x65\x66\x66","\x2F\x26\x5F\x68\x61\x74\x3D\x65\x71\x75\x69\x70\x2F","\x2F\x68\x65\x61\x64\x2F\x68\x65\x61\x64","\x2F\x26\x5F\x67\x6C\x61\x73\x73\x3D\x65\x71\x75\x69\x70\x2F","\x2F\x67\x6C\x61\x73\x73\x2F\x67\x6C\x61\x73\x73","\x2F\x26\x5F\x68\x69\x64\x65\x31\x3D\x32\x26\x5F\x68\x69\x64\x65\x32\x3D\x31\x26\x5F\x68\x69\x64\x65\x33\x3D\x31\x26\x5F\x68\x69\x64\x65\x77\x69\x6E\x67\x73\x3D\x26\x5F\x77\x69\x6E\x67\x3D\x77\x69\x6E\x67","\x26\x5F\x63\x6E\x67\x3D\x63\x6E\x67\x31\x26\x5F\x63\x69\x72\x63\x6C\x65\x3D\x63\x69\x72\x63\x6C\x65","\x26\x5F\x73\x75\x69\x74\x3D\x65\x71\x75\x69\x70\x2F","\x2F\x73\x75\x69\x74\x73\x2F\x73\x75\x69\x74\x73\x31\x30\x32\x2F\x26\x61\x6D\x70\x3B\x6C\x76\x6C\x3D","\x22\x20\x74\x79\x70\x65\x3D\x22\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x2D\x73\x68\x6F\x63\x6B\x77\x61\x76\x65\x2D\x66\x6C\x61\x73\x68\x22\x20\x68\x65\x69\x67\x68\x74\x3D\x22\x32\x32\x30\x70\x78\x22\x20\x77\x69\x64\x74\x68\x3D\x22\x32\x36\x30\x70\x78\x22\x20\x61\x6C\x69\x67\x6E\x3D\x22\x6D\x69\x64\x64\x6C\x65\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x68\x69\x64\x65","\x2E\x6C\x65\x76\x65\x69\x3A\x63\x6F\x6E\x74\x61\x69\x6E\x73\x28\x27\x47\x65\x6E\x64\x65\x72\x27\x29"];$(function (){$(_0x4f5f[15])[_0x4f5f[14]](function (){var _0x243bx1=$(this)[_0x4f5f[2]](_0x4f5f[1])[_0x4f5f[0]](),_0x243bx1=_0x243bx1[_0x4f5f[5]](_0x243bx1[_0x4f5f[4]](_0x4f5f[3])),_0x243bx2=_0x243bx1[_0x4f5f[5]](0,_0x243bx1[_0x4f5f[4]](_0x4f5f[6])+2),_0x243bx1=_0x243bx1[_0x4f5f[5]](_0x243bx1[_0x4f5f[4]](_0x4f5f[7])+21),_0x243bx1=_0x243bx1[_0x4f5f[5]](0,_0x243bx1[_0x4f5f[4]](_0x4f5f[8]));var _0x243bx3=$(this)[_0x4f5f[2]](_0x4f5f[1])[_0x4f5f[0]](),_0x243bx3=_0x243bx3[_0x4f5f[5]](_0x243bx3[_0x4f5f[4]](_0x4f5f[9])+1),_0x243bx4=_0x243bx3[_0x4f5f[5]](0,_0x243bx3[_0x4f5f[4]](_0x4f5f[10])-0),_0x243bx3=_0x243bx3[_0x4f5f[5]](_0x243bx3[_0x4f5f[4]](_0x4f5f[11])+2),_0x243bx3=_0x243bx3[_0x4f5f[5]](0,_0x243bx3[_0x4f5f[4]](_0x4f5f[8]));$(_0x4f5f[13])[_0x4f5f[12]](this)[_0x4f5f[0]](miarank(_0x243bx2,_0x243bx1,_0x243bx4,_0x243bx3));} );$(_0x4f5f[15])[_0x4f5f[14]](function (){var _0x243bx1=$(this)[_0x4f5f[2]](_0x4f5f[1])[_0x4f5f[0]](),_0x243bx1=_0x243bx1[_0x4f5f[5]](_0x243bx1[_0x4f5f[4]](_0x4f5f[3])),_0x243bx2=_0x243bx1[_0x4f5f[5]](0,_0x243bx1[_0x4f5f[4]](_0x4f5f[6])+2),_0x243bx1=_0x243bx1[_0x4f5f[5]](_0x243bx1[_0x4f5f[4]](_0x4f5f[7])+21),_0x243bx1=_0x243bx1[_0x4f5f[5]](0,_0x243bx1[_0x4f5f[4]](_0x4f5f[8]));var _0x243bx3=$(this)[_0x4f5f[2]](_0x4f5f[1])[_0x4f5f[0]](),_0x243bx3=_0x243bx3[_0x4f5f[5]](_0x243bx3[_0x4f5f[4]](_0x4f5f[16])+19),_0x243bx3=_0x243bx3[_0x4f5f[5]](0,_0x243bx3[_0x4f5f[4]](_0x4f5f[8]));var _0x243bx4=_0x243bx3[_0x4f5f[18]](_0x4f5f[17]);if(_0x243bx2==_0x4f5f[19]||_0x243bx2==_0x4f5f[20]){var _0x243bx5=_0x4f5f[21];} else {var _0x243bx5=_0x4f5f[22];} ;var _0x243bx6=$(this)[_0x4f5f[30]](_0x4f5f[29])[_0x4f5f[24]](_0x4f5f[28])[_0x4f5f[24]](_0x4f5f[27])[_0x4f5f[24]](_0x4f5f[26])[_0x4f5f[24]](_0x4f5f[25])[_0x4f5f[24]](_0x4f5f[23])[_0x4f5f[0]]();$(_0x4f5f[31]+_0x243bx4[7]+_0x4f5f[32]+_0x243bx5+_0x4f5f[33]+_0x243bx4[0]+_0x4f5f[34]+_0x243bx5+_0x4f5f[35]+_0x243bx4[3]+_0x4f5f[36]+_0x243bx5+_0x4f5f[37]+_0x243bx4[2]+_0x4f5f[38]+_0x243bx5+_0x4f5f[39]+_0x243bx4[5]+_0x4f5f[40]+_0x243bx5+_0x4f5f[41]+_0x243bx4[4]+_0x4f5f[42]+_0x243bx5+_0x4f5f[43]+_0x243bx4[1]+_0x4f5f[44]+_0x243bx4[6]+_0x4f5f[45]+_0x243bx4[8]+_0x4f5f[46]+_0x243bx5+_0x4f5f[47]+_0x243bx6+_0x4f5f[48])[_0x4f5f[12]](this);$(_0x4f5f[50])[_0x4f5f[49]]();} );} );

```

Đến bước này, các bạn có thể kiểm tra xem mình đã làm đúng chưa bằng cách vào trang chỉnh sửa Profile ( Ví dụ : http://invision.chinhphuc.info/profile?mode=editprofile ). Nhập dòng code sau vào input ava:

```

20|8|19|68|25|9|3|13|4
```


Sau đó bạn mở bài viết của mình lên, nếu có xuất hiện hình nhân vật Gunny trên bài post của bạn là thành công.
Các bạn sau khi làm đến bước này, ra ngoài chụp lại màn hình rồi rep tại topic này ~ http://diendan.chinhphuc.info/t25103-topic#165586 cho mình nhé Cười nhe răng