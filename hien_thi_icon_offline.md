Mặc định phpbb2 không cho hiển thị ảnh khi offline
Chúng ta có thể can thiệp vào temp = code sau :
Tìm trong template\quản lí tổng thể \viewtopic\_body:

```


{postrow.displayed.ONLINE_IMG}

```

Thay bằng code

```


<div style="background: url(link ảnh offline); height: 23px; width: 23px; border: 0px;">{postrow.displayed.ONLINE_IMG}

Unknown end tag for &lt;/div&gt;

```