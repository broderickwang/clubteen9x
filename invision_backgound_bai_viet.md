[CSS](CSS.md) Background bài viết cho thành viên - by hand

  * ui lòng không sao chép bài viết này đi nơi khác


CÀI ĐẶT
Vào AdminCP=>HTML & JAVASCRIPT=>tạo JS mới
Title:Ảnh nền bài viết
Placement :In all the pages
Javascript Code

```

$(function(){$('div.post:has(".re-Admin")').css('background-image','url("http://www.backgroundlabs.com/backgrounds/209.jpg")');$('div.post:has(".re-Smod")').css('background-image','url("http://www.backgroundlabs.com/backgrounds/45.jpg")');$('div.post:has(".re-Mod")').css('background-image','url("http://www.backgroundlabs.com/backgrounds/189.jpg")');$('div.post:has(".re-Mem")').css('background-image','url("http://www.backgroundlabs.com/backgrounds/52.jpg")')});

```

Lưu
Vào quản lý cấp bậc
=>Thêm mới
Tiêu đề cấp bậc:

```

<div class="re-Admin">Admin

Unknown end tag for &lt;/div&gt;


```

Smod mod và mem cũng vậy hehe
có thể thay re-admin bằng re-Smod nhưng phải gióng trên đoạn JS nhé
Xác lập như cấp bậc đăc biệt có
Lưu sau đó cho thành viên cấp bậc đó và thưởng thức Cười nhe răng

> Code chưa test, nếu có vấn đề vui lòng góp ý ngay dưới topic này


Dề mô sống: http://c5zone.clubme.net/
