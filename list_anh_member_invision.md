![http://img41.imageshack.us/img41/1861/89163028.png](http://img41.imageshack.us/img41/1861/89163028.png)

Cho vào Widgets


```



<div class="imglist">
<a href="#"><img src="http://i67.photobucket.com/albums/h307/saraxinh/170752237.jpg" title="" />

Unknown end tag for &lt;/a&gt;


<a href="#"><img src="http://avatar.hq-picture.com/avatars/img1/anonymous_man_avatar_picture_31546.jpg" alt="Bư" title="1 thành viên xuất sắc " />

Unknown end tag for &lt;/a&gt;


<a href="#"><img src="http://illiweb.com/fa/i/avatars/gallery/Dragon_ball/Dragon_ball_65.gif" title="" />

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/div&gt;




```


Mún Mô tả thì thêm vào phần title ấy

Phang vào Css

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


Thay # = link hoặc khỏi cũng dc

Thêm nhiều ảnh thì = hướng dẫn sau


```


<a href="#"><img src="Link ảnh" title="" />

Unknown end tag for &lt;/a&gt;



```

Pun | Bư | Invision | Ruby