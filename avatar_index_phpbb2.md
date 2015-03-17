p/s: Chỉ dành cho những skin có index\_box có cột bài cuối, chủ về và topic tách rời nhau.

Bước 1: Cho đoạn này vào CSS

> ```

td.row3 {
background-color: #ffffff;
}
td.row1, td.row3.over:hover
{
background-color: #ffffff;
}
.row1 over
{
background: #ffffff;
color: #000000;
}
td.row1 over:hover
{
background-color: #ffffff;
}
.row3 over
{
background: #ffffff;
color: #000000;
}

```

Bước 2: Vào index\_box tìm:

> ```

{catrow.forumrow.LAST_POST}

```

Thường thường ở trên code này sẽ có đoạn code:

> ```

<td class="alt1">
```

hoặc có 1 class khác!

Vì vậy thay Code

> ```

<td class="class riped thay">

```
bằng code sau:

> ```

<td class="row3 over">

```

Sau đó ấn chấp nhận rồi ++

Tiếp theo là các bạn làm theo hướng dẫn làm avatar\_indexbox nhá :))

Fix by cubimtq và the\_dav!