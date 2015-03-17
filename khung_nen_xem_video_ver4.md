Chức năng:

> Khung nền cho video, đưa vào giữa trang
> Hiển thị tên forum trên thanh tiêu đề đối với Forumotion
> Cố định kích thước video ban đầu là 480x390 px
> Hỗ trợ mã nhúng video từ baamboo.com, clip.vn, go.vn, zing.vn, youtube.com, dailymotion.com, megavideo.com, 123video.nl, mtvnservices.com, cbs.com, muzu.tv, [revision3](https://code.google.com/p/clubteen9x/source/detail?r=3).com, video.s-msn.com, twitvid.com, 5min.com, wat.tv, metacafe.com, 4shared.com, vimeo.com
> Áp dụng cho 2 cách chèn iframe và embed
> Ẩn / Hiện video
> Phóng to / Thu nhỏ video
> Xem video trong cửa sổ mới hoặc trong lighbox Fancybox / Colorbox
> Có thể dùng cho Blog, Forum, Website có sử dụng thư viện jQuery.


Hướng dẫn:
Tìm trong Overall\_header
```

<script src="{JQUERY_PATH}" type="text/javascript">

Unknown end tag for &lt;/script&gt;


```
Chèn vào bên dưới bằng một trong các code sau:


1- Đối với forum dùng Fancybox:
![http://i48.servimg.com/u/f48/16/58/89/73/fancyp10.png](http://i48.servimg.com/u/f48/16/58/89/73/fancyp10.png)
> Nền tối
```

<script type="text/javascript" src="http://fmvi-group.googlecode.com/files/Fmvi-Group-video-dark-4-fancybox.js">

Unknown end tag for &lt;/script&gt;


```
> Nền Sáng
```

<script type="text/javascript" src="http://fmvi-group.googlecode.com/files/Fmvi-Group-video-light-4-fancybox.js">

Unknown end tag for &lt;/script&gt;


```

```

<script type="text/javascript" src="http://fmvi-group.googlecode.com/files/Fmvi-Group-video-green.js">

Unknown end tag for &lt;/script&gt;



```
![http://i48.servimg.com/u/f48/16/48/23/13/green11.png](http://i48.servimg.com/u/f48/16/48/23/13/green11.png)

2- Đối với forum dùng Colorbox:
![http://i48.servimg.com/u/f48/16/58/89/73/colorp11.png](http://i48.servimg.com/u/f48/16/58/89/73/colorp11.png)
> Nền tối
```

<script type="text/javascript" src="http://fmvi-group.googlecode.com/files/Fmvi-Group-video-dark-4-colorbox.js">

Unknown end tag for &lt;/script&gt;


```
> Nền Sáng
```

<script type="text/javascript" src="http://fmvi-group.googlecode.com/files/Fmvi-Group-video-light-4-colorbox.js">

Unknown end tag for &lt;/script&gt;



```
![http://i48.servimg.com/u/f48/16/58/89/73/orange10.png](http://i48.servimg.com/u/f48/16/58/89/73/orange10.png)
```

<script type="text/javascript" src="http://fmvi-group.googlecode.com/files/Fmvi-Group-youtube-orange.js">

Unknown end tag for &lt;/script&gt;


```



![http://i48.servimg.com/u/f48/16/48/23/13/iphone11.jpg](http://i48.servimg.com/u/f48/16/48/23/13/iphone11.jpg)
```

<script type="text/javascript" src="http://fmvi-group.googlecode.com/files/Fmvi-Group-video-iphone.js">

Unknown end tag for &lt;/script&gt;



```
> Nếu forum bạn không dùng Fancybox hoặc Colorbox thì khi Click sẽ mở ra một cửa sổ khác.
> Nếu forum bạn dùng loại lightbox khác, liên hệ tại đây, mình sẽ update lightbox đó cho bạn.