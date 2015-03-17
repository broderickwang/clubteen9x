Demo:

```

http://www.12b6pro.tk

```

Vào topic bất kỳ xem bài viết của rank Quản Trị Viên.

Cách làm:

Trong viewtopic tìm

```

{postrow.displayed.POSTER_RANK_NEW}

```
Thay bằng

```

<span class="r{postrow.displayed.U_POST_ID}">{postrow.displayed.POSTER_RANK_NEW}

Unknown end tag for &lt;/span&gt;


```

Tìm tiếp

```

{postrow.displayed.MESSAGE}

```
Thay thành

```

<span class="re{postrow.displayed.U_POST_ID}">{postrow.displayed.MESSAGE}

Unknown end tag for &lt;/span&gt;


```

Trong viewtopic, tìm

```

<a name="{postrow.displayed.U_POST_ID}">

Unknown end tag for &lt;/a&gt;



```
Đặt ngay bên cạnh cho chắc =.=

```

<script type="text/javascript">$(document).ready(function(){$(".r{postrow.displayed.U_POST_ID}:contains('Quản Trị Viên')").each(function(){$(".re{postrow.displayed.U_POST_ID}").css('font-weight','bold');});});

Unknown end tag for &lt;/script&gt;



```
Nhìn code chắc cũng biết rồi, thay Quản Trị Viên thành tên rank rồi chỉnh css như mong muốn là xong.

Lỗi j post tại đây!!