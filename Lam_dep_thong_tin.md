Chém gió
Bài viết Bài viết: 276
Thanks Thanks: 272
First topic message reminder :

Hướng dẫn các bạn làm khung thông tin profile nhấp nháy siêu kute giống nhà tui
http://skyoffice.forumvi.com/t930-topic#1826

Hướng dẫn: demo nhìn phía dưới avata nhà tui đó.

tìm trong viewtopic body code sau

```

{postrow.displayed.profile_field.LABEL}{postrow.displayed.profile_field.CONTENT}{postrow.displayed.profile_field.SEPARATOR}
<!-- END profile_field -->
{postrow.displayed.POSTER_RPG}
```

Thay bằng code:

```

<span class="glow">{postrow.displayed.profile_field.LABEL}{postrow.displayed.profile_field.CONTENT}{postrow.displayed.profile_field.SEPARATOR}
<!-- END profile_field -->
{postrow.displayed.POSTER_RPG}

Unknown end tag for &lt;/span&gt;


```

Chèn thêm vào css: nhớ nhé cười lăn lộn