# [TUT](TUT.md) Xoay avatar chóng mặt

```
        .postprofile dt a img{
transition-duration:0.5s;
-moz-transition-duration:0.5s;
-webkit-transition-duration:0.5s;
-o-transition-duration:0.5s;
}
.postprofile dt a img:hover{
-webkit-transform: rotate(360deg);
-moz-transform: rotate(360deg);
transform: rotate(360deg);
}```
# [TUT](TUT.md) Khung viền Avatar
```
        .postprofile dt img {
border: 1px solid #0076B1;
box-shadow: 0px 0px 6px #000000;
border-radius:10px;
}```

# [TUT](TUT.md) Giới hạn kích cỡ Avatar
```
        .postprofile dt img {
max-width: 101px;
max-height: 220px;
}```

# [TUT](TUT.md) Khung Avatar đẹp

```
        .postprofile-details.postdetails a[href*="/u"] img, .blog_comment-avatar img  {
border-width: 15px 15px 15px;
-moz-border-image: url(http://i46.servimg.com/u/f46/16/76/15/68/nav_av10.png) 15 stretch;
-webkit-border-image: url(http://i46.servimg.com/u/f46/16/76/15/68/nav_av10.png) 15 stretch;
-o-border-image: url(http://i46.servimg.com/u/f46/16/76/15/68/nav_av10.png) 15 stretch;
border-image: url(http://i46.servimg.com/u/f46/16/76/15/68/nav_av10.png) 15 stretch;
max-height: 90px;
}```