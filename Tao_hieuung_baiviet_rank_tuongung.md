Demo: Nhìn tiêu đề cũng biết là gì rồi khỏi cần demo nhá mắc cỡ Example: Những người trong nhóm admin sẽ có màu chữ hoặc màu nền khác với những người khác nháy mắt

Hướng dẫn:

> Users and Groups ![http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png](http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png) Ranks ![http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png](http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png) Rank Administration ![http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png](http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png) Chọn ![http://r26.imgfast.net/users/2615/25/32/47/smiles/205702.png](http://r26.imgfast.net/users/2615/25/32/47/smiles/205702.png) nhóm cần cho hiệu ứng chỗ dòng Rank title, thay bằng
```

<span class="tên class">[tên rank]

Unknown end tag for &lt;/span&gt;

```
> . Chỗ tên class thay bằng cái gì cũng được. Example: Ban đầu của mình là Administrator và thay thành bằng <span>Moderators</span>, tương tự với các nhóm khác mà bạn muốn cho hiệu ứng vào.
> Display ![http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png](http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png) Templates ![http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png](http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png) General ![http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png](http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png) viewtopic\_body (CHƯA CHỈNH SỬA, KIẾM KHÔNG RA THÌ ĐỪNG CÓ HỎI CŨNG KHÔNG AI KIẾM RA ĐƯỢC ĐÂU Cười nghiêng ng )
> Tìm
```

{postrow.displayed.POST_DATE_NEW}
```
> Thêm vào đằng sau
```

<span style="display:none;">{postrow.displayed.POSTER_RANK}

Unknown end tag for &lt;/span&gt;


```
> Modules Muiten Javascript codes management Muiten Create a new javascript Muiten Title tuỳ chọn, Chọn in the topics
```

$(document).ready(function(){
$('.post:has(".tên class"),.postmain:has(".tên class"),.posthead:has(".tên class")').css('css here');
});
```
> Chỗ tên class thay bằng cái mà bạn đã đặt tên ở trên, ở example trên của mình là mod nên mình thay thành
```

$(document).ready(function(){
$('.post:has(".mod"),.postmain:has(".mod"),.posthead:has(".mod")').css(css here);
});```

> Chỗ css here thay chỗ đó bằng css, ví dụ mình muốn chữ màu trắng. CSS bình thường như thế này color:white khi vào jquery thì nó thành 'color','white'. Cuối cùng mình có được
```

$(document).ready(function(){
$('.post:has(".mod"),.postmain:has(".mod"),.posthead:has(".mod")').css('color','white');
});
```

Bây giờ mình muốn đổi thêm màu chữ cho Admin, mình làm đủ các buớc trên rồi tới bước 3 (thay vì làm cho mod bây giờ mình làm cho admin nên class nó khác), mình chỉnh sửa script lại chút bằng cách thêm dòng $('.post:has(".tên class"),.postmain:has(".tên class"),.posthead:has(".tên class")').css(css here); trên });. Kết quả có được
```

$(document).ready(function(){
$('.post:has(".mod"),.postmain:has(".mod"),.posthead:has(".mod")').css('color','white');
$('.post:has(".admin"),.postmain:has(".admin"),.posthead:has(".admin")').css('color','black');
});```

Copyright © by Zero. All Rights Reserved. Use, modification, and/or distribution of this script is not allowed without direct permission from Zero. This entire copyright notice must remain in the original, copied, or modified script.

Không hiểu chỗ nào thì nói, ghét mất mấy người tut dùng được cứ bảo không dùng được Roll eye