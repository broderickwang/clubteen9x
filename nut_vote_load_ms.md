Lúc chưa like
![http://i40.servimg.com/u/f40/17/20/25/96/captur19.png](http://i40.servimg.com/u/f40/17/20/25/96/captur19.png)


Lúc đã like

![http://i40.servimg.com/u/f40/17/20/25/96/captur18.png](http://i40.servimg.com/u/f40/17/20/25/96/captur18.png)
Trước tiên cần kick hoạt nút vote trong ACP

Tiếp theo:
Cài đặt tạo 1 file js:
ACP - Modules - HTML & JAVASCRIPT - Javascript codes management:

> Title: Trích dẫn bài viết
> Placement: In the topics
> Javascript Code:


Phiên bản: phpbb3

```

var like_version = 'phpbb3';
var DOM_IS_READY = false;
$(function(){DOM_IS_READY=true;});
var vote_singular = 'Like';
var vote_plural = 'Likes';
$.getScript('http://www.avacweb.net/like');
```

Phiên bản: invision

```

var like_version = 'invision';
var DOM_IS_READY = false;
$(function(){DOM_IS_READY=true;});
var vote_singular = 'Like';
var vote_plural = 'Likes';
$.getScript('http://www.avacweb.net/like');
```

Phiên bản: punbb

```

var like_version = 'punbb';
var DOM_IS_READY = false;
$(function(){DOM_IS_READY=true;});
var vote_singular = 'Like';
var vote_plural = 'Likes';
$.getScript('http://www.avacweb.net/like');

```

Có thể thay đổi chữ "Like" và "Likes" Theo ý thích của bạn như "Thích" và "Được thích"

Tiếp theo ACP > Display > Colors > CSS Stylesheet Thêm đoạn css sau:

```

.LGlike {
background: #105289;
padding: 3px;
border-radius: 4px;
color: #fff;
font-size: 10px;
font-weight: bold;
text-shadow: -1px 0.5px #888;
box-shadow: 1px 1px 1px #888;
cursor: pointer;
margin-right: 4px;
}
.LGvote { margin: 0 5px; }
.LGnovote {
filter:Alpha(opacity=50);
opacity: 0.5;
cursor: default;
box-shadow: none;
text-shadow: none;
}


```
- Khi like sẽ không bị chuyển trang
- Hiển thị 'Loading...' cho đến khi tải xong