sau bài viết này hỏi http://www.hotrofm.com/t1908-topic#10368
cách thay đổi nền bài viết mình mới ngỡ ra là chưa share code này ở hotrofm :D
hum nay tiện cho vào forum + hướng dẫn member mong mọi người đừng ném gạch :D

demo: ngay tại hotro
demo ảnh: bạn nào làm dc cho mình xin cái ảnh demo :D

đầu tiên căn bản mình sẽ hướng dẫn bạn làm bằng punbb
vì có 1 số bạn thay đổi cấu trúc vew lên có thể code sẽ thay đổi
bạn nào làm ko được thì gửi link forum để mình biết cấu trúc skin để làm hợp với js

với skin mặc định hoặc vew hotrofm
bước 1
acp>> quản lý người dùng nhóm >> quản lý cấp bậc >>
tiêu đề cập bậc các bạn đóng 1 cái html

```

<span class="specialpost">tên nhóm

Unknown end tag for &lt;/span&gt;



```

tiếp theo bạn cho js này vào vewtopic body

nền chỉ có mầu

```

<script type="text/javascript">
$(function(){$(' div.postmain:has(".specialpost")').css('background-color','#000')});


Unknown end tag for &lt;/script&gt;


```

nền có ảnh

```

<script type="text/javascript">
$(function(){$(' div.postmain:has(".specialpost")').css('background','#fff url(http://bglabs.evade.netdna-cdn.com/45875kli90/238.jpg)')});


Unknown end tag for &lt;/script&gt;





```
tương tự vậy với nhóm khác
bạn lại tạo specialpost1
rùi thêm js ghi thêm specialpost1

với nhóm 2 specialpost2
rùi thêm js specialpost2

nguồn help.forumotion.com