![http://i45.servimg.com/u/f45/17/45/78/42/56510.jpg](http://i45.servimg.com/u/f45/17/45/78/42/56510.jpg)

Code này giúp chúng ta có 1 thanh menu ảnh : các bạn có thể đặt ảnh thành viên hoặc ảnh của bạn ở trên đó ( kèm them đó là đường dẫn đến 1 topic nào đó ) hoặc có thể dùng làm quảng cáo ...


Cách làm

Cho code sau vào Footer begin:

```

<div class="imglist">
<a href="#"><img src="http://r20.imgfast.net/users/2015/12/67/35/avatars/1-51.jpg" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="#"><img src="http://r20.imgfast.net/users/2015/12/67/35/avatars/216-87.jpg" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="#"><img src="http://illiweb.com/fa/i/avatars/gallery/Dragon_ball/Dragon_ball_65.gif" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="#"><img src="http://r20.imgfast.net/users/2015/12/67/35/avatars/28-66.jpg" alt="" />

Unknown end tag for &lt;/a&gt;


<a href="#"><img src="http://illiweb.com/fa/i/avatars/gallery/Musique_h/Music_h_28.jpg" alt="" />

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/div&gt;



```

Bước tiếp theo cho đoạn sau vào Css :

```

.imglist{
position: fixed;
top: 30px;
left: 0px;
}
.imglist img{
height:25px;
width:25px;
margin:5px;
display: block;
transition:width 1.2s,height 1.2s,box-shadow 1.2s;
-webkit-transition:width 1.2s,height 1.2s,box-shadow 1.2s;
-moz-transition:width 1.2s,height 1.2s,box-shadow 1.2s;
-o-transition:width 1.2s,height 1.2s,box-shadow 1.2s;
}
.imglist img:hover{
height:125px;
width:125px;
box-shadow: 7px 9px 18px rgba(0, 0, 0, 0.63);
-webkit-box-shadow: 7px 9px 18px rgba(0, 0, 0, 0.63);
-moz-box-shadow: 7px 9px 18px rgba(0, 0, 0, 0.63);
-o-box-shadow: 7px 9px 18px rgba(0, 0, 0, 0.63);
}
```

ở chỗ

```

<a href="#">

```
Các bạn thay dấu # = Link đường dẫn đến nhá
Có thể thêm nhiều link ảnh = cách thêm nhiều code sau cười nhăn răng

```

<a href="#"><img src="http://illiweb.com/fa/i/avatars/gallery/Musique_h/Music_h_28.jpg" alt="" />

Unknown end tag for &lt;/a&gt;


```


Ai thấy hay thì Like cho mình cái nhá yêu thế yêu thế yêu thế yêu thế yêu thế yêu thế yêu thế