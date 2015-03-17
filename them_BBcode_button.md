Chắc hẳn ai cũng biết cái bài này: http://diendan.chinhphuc.info/t14931-topic

Sau khi hơn 1 năm biệt tích, mình đã trở lại .
Và tiếp tục đóng góp cho anh em nhiều bài viết hay. Nhân ngày trở lại,
mình gửi tặng đến toàn thể các bạn Đoạn code giúp có thêm thanh công cụ
trên bảng công cụ bài viết. Chúng ta bắt tay vào làm nhé!

Đêmo:

![http://i44.servimg.com/u/f44/15/64/85/86/untit154.png](http://i44.servimg.com/u/f44/15/64/85/86/untit154.png)



Cách làm:

Các bạn vào ![http://illiweb.com/fa/admin/icones/small_ico/type_li.png](http://illiweb.com/fa/admin/icones/small_ico/type_li.png) Templates => Post & Tin nhắn => Posting\_body

Tìm đoạn code sau:

```



Unknown end tag for &lt;/span&gt;


<img src="{PATH_IMG_FA}wysiwyg/separator.png" style="vertical-align:middle" />

```

Chèn đoạn code này xuống dưới đoạn code vừa tìm được:

```

<a href="#" onClick="window.open('Nội dung')"><button
class="button2" type="button" title="Nội dung 2"><img
src=http://i913.photobucket.com/albums/ac332/battuvuong/baivong/VZ011093924_29781_1.png>

Unknown end tag for &lt;/button&gt;



Unknown end tag for &lt;/a&gt;


<a href="#" onClick="window.open('Nội
dụng','_blank','width=360,height=150')"><button class="button2"
type="button" title="Nội dung 2 "><img
src=http://www.rentals-phuket.com/img/icon_pet.gif>

Unknown end tag for &lt;/button&gt;



Unknown end tag for &lt;/a&gt;




```
(Thay chỗ có đề Nội dung bằng 1 link nào đó) (VD muốn post ảnh, bạn ghi vào đó là http://upanh.com
(Thay chỗ có đề Nội dung 2 bằng 1 link nào đó) (VD chỉ cần click vào là
trở lại trang chủ diễn đàn thì bạn điền link diễn đàn của bạn vào)

Còn muốn thay đổi hình ảnh thì các bạn tìm;

```

http://www.rentals-phuket.com/img/icon_pet.gif

```
```

http://i913.photobucket.com/albums/ac332/battuvuong/baivong/VZ011093924_29781_1.png
```

và thay bằng link ảnh bạn muốn.