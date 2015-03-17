http://www.4rkinggame.net/
Tìm trong viewtopic\_body:

```

{postrow.displayed.profile_field.LABEL} {postrow.displayed.profile_field.CONTENT}{postrow.displayed.profile_field.SEPARATOR}

```

Thay bằng

```

<span class="hidenfield">{postrow.displayed.profile_field.LABEL} {postrow.displayed.profile_field.CONTENT}{postrow.displayed.profile_field.SEPARATOR}

Unknown end tag for &lt;/span&gt;



```

Rồi thêm đoạn này ở đầu hoặc cuối viewtopic\_body:

```

<script type="text/javascript">$(function(){$(".hidenfield:contains('avatar-dulieu')").css('display','none');})

Unknown end tag for &lt;/script&gt;



```

Like nhé



Được sửa bởi Zin\_Ken ngày Wed 5 Dec - 16:56; sửa lần 1.