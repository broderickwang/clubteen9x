demo:
![http://i43.servimg.com/u/f43/15/93/33/76/32310.jpg](http://i43.servimg.com/u/f43/15/93/33/76/32310.jpg)
hiệu ứng này giúp chúng ra rê chuột vào box thì tiêu đề của box đó sẽ chạy sang 1 bên , rất đẹp và mượt
Chú ý : Dùng cho mọi phiên bản của forumotion

Cách làm :

Cho đoạn code sau vào Css

```

/* Trượt tiêu đề mỗi box */
a.forumtitle {
-moz-transition-duration: 1.5s;
-webkit-transition-duration: 1.5s;
-o-transition-duration: 1.5s;
}

a.forumtitle:hover {
margin-left: 50px;
}
```