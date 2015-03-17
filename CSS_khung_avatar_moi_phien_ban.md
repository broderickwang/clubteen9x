Sử dụng CSS3 border-image làm viền cho avatar ,thích hợp cho những phiên bản không edit dc temp của Forumotion mà không cần dùng Script phức tạp , tuy nhiên CSS3 không hiển thị ở < IE9
Dùng dược cho mọi phiên bản Fm.
Với PHPbb2 và punBb code tác dụng với viewtopic mặc định , với những viewtopic đã chỉnh sửa mà code không hiển thị được bạn cần đặt lại class cho phù hợp :d .
Bạn có thể tuỳ biến nhiều kiểu viền bằng Border-image khác bằng cách sử dụng website này : http://border-image.com

Vài mẫu mình làm sẵn cho các bạn sử dụng :

1.
Demo:![http://a.imageshack.us/img338/5960/demo3probborgt1yourfirs.png](http://a.imageshack.us/img338/5960/demo3probborgt1yourfirs.png)



PHPbb3:

```

.postprofile dl dt a[href*="/u"] img, .blog_comment-avatar img {
border-width: 15px 15px 15px;
-moz-border-image: url(http://i46.servimg.com/u/f46/16/76/15/68/nav_av10.png) 15 stretch;
-webkit-border-image: url(http://i46.servimg.com/u/f46/16/76/15/68/nav_av10.png) 15 stretch;
-o-border-image: url(http://i46.servimg.com/u/f46/16/76/15/68/nav_av10.png) 15 stretch;
border-image: url(http://i46.servimg.com/u/f46/16/76/15/68/nav_av10.png) 15 stretch;
max-height: 90px;
}

```


Invision :

```

.postprofile-details.postdetails a[href*="/u"] img, .blog_comment-avatar img  {
border-width: 15px 15px 15px;
-moz-border-image: url(http://i46.servimg.com/u/f46/16/76/15/68/nav_av10.png) 15 stretch;
-webkit-border-image: url(http://i46.servimg.com/u/f46/16/76/15/68/nav_av10.png) 15 stretch;
-o-border-image: url(http://i46.servimg.com/u/f46/16/76/15/68/nav_av10.png) 15 stretch;
border-image: url(http://i46.servimg.com/u/f46/16/76/15/68/nav_av10.png) 15 stretch;
max-height: 90px;
}



```
PunBB :

```

.user-basic-info a[href*="/u"] img, .blog_comment-avatar img {
border-width: 15px 15px 15px;
-moz-border-image: url(http://i46.servimg.com/u/f46/16/76/15/68/nav_av10.png) 15 stretch;
-webkit-border-image: url(http://i46.servimg.com/u/f46/16/76/15/68/nav_av10.png) 15 stretch;
-o-border-image: url(http://i46.servimg.com/u/f46/16/76/15/68/nav_av10.png) 15 stretch;
border-image: url(http://i46.servimg.com/u/f46/16/76/15/68/nav_av10.png) 15 stretch;
max-height: 90px;
}
```



PHPbb2 :

```

.postdetails.poster-profile a[href*="/u"] img, .blog_comment-avatar img {
border-width: 15px 15px 15px;
-moz-border-image: url(http://i46.servimg.com/u/f46/16/76/15/68/nav_av10.png) 15 stretch;
-webkit-border-image: url(http://i46.servimg.com/u/f46/16/76/15/68/nav_av10.png) 15 stretch;
-o-border-image: url(http://i46.servimg.com/u/f46/16/76/15/68/nav_av10.png) 15 stretch;
border-image: url(http://i46.servimg.com/u/f46/16/76/15/68/nav_av10.png) 15 stretch;
max-height: 90px;
}


```






2.
Demo:![http://i46.servimg.com/u/f46/16/76/15/68/firesh14.png](http://i46.servimg.com/u/f46/16/76/15/68/firesh14.png)



PHPbb3:

```

.postprofile dl dt a[href*="/u"] img, .blog_comment-avatar img {
border-width: 7px;
-moz-border-image: url(http://i46.servimg.com/u/f46/17/46/69/50/ava110.png) 7 repeat;
-webkit-border-image: url(http://i46.servimg.com/u/f46/17/46/69/50/ava110.png) 7 repeat;
-o-border-image: url(http://i46.servimg.com/u/f46/17/46/69/50/ava110.png) 7 repeat;
border-image: url(http://i46.servimg.com/u/f46/17/46/69/50/ava110.png) 7 repeat;
}

```


Invision :

```

.postprofile-details.postdetails a[href*="/u"] img, .blog_comment-avatar img  {
border-width: 7px;
-moz-border-image: url(http://i46.servimg.com/u/f46/17/46/69/50/ava110.png) 7 repeat;
-webkit-border-image: url(http://i46.servimg.com/u/f46/17/46/69/50/ava110.png) 7 repeat;
-o-border-image: url(http://i46.servimg.com/u/f46/17/46/69/50/ava110.png) 7 repeat;
border-image: url(http://i46.servimg.com/u/f46/17/46/69/50/ava110.png) 7 repeat;
}


```

PunBB :

```

.user-basic-info a[href*="/u"] img, .blog_comment-avatar img {
border-width: 7px;
-moz-border-image: url(http://i46.servimg.com/u/f46/17/46/69/50/ava110.png) 7 repeat;
-webkit-border-image: url(http://i46.servimg.com/u/f46/17/46/69/50/ava110.png) 7 repeat;
-o-border-image: url(http://i46.servimg.com/u/f46/17/46/69/50/ava110.png) 7 repeat;
border-image: url(http://i46.servimg.com/u/f46/17/46/69/50/ava110.png) 7 repeat;
}

```


PHPbb2 :

```

.postdetails.poster-profile a[href*="/u"] img, .blog_comment-avatar img {
border-width: 7px;
-moz-border-image: url(http://i46.servimg.com/u/f46/17/46/69/50/ava110.png) 7 repeat;
-webkit-border-image: url(http://i46.servimg.com/u/f46/17/46/69/50/ava110.png) 7 repeat;
-o-border-image: url(http://i46.servimg.com/u/f46/17/46/69/50/ava110.png) 7 repeat;
border-image: url(http://i46.servimg.com/u/f46/17/46/69/50/ava110.png) 7 repeat;
}```