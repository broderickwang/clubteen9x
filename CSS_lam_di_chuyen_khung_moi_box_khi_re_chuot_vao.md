demo : http://cros.forumf.biz/
( khi rê chuột vào khung của mỗi box sẽ thấy hiện tượng di chuyển khung đó 1 chút cười nhăn răng )
ví dụ khi bạn rê chuột vào Chữ : Your first forum thì sẽ thấy hiệu ứng




Hướng dẫn :![http://i43.servimg.com/u/f43/15/93/33/76/anh_ch21.png](http://i43.servimg.com/u/f43/15/93/33/76/anh_ch21.png)

cho code sau vào Css :


```

dl.icon {
background-position: 10px 50%;
background-repeat: no-repeat;
height: auto;
min-height: 35px;
width: 100%;opacity:0.9;
filter:alpha(opacity=90);
-moz-transition-duration: 1s;
-webkit-transition-duration: 1s;
-o-transition-duration: 1s;
font-size: 10px;}





dl.icon:hover {
background-position: 10px 50%;
background-repeat: no-repeat;
height: auto;
min-height: 35px;
width: 102%;
opacity: 1;
filter:alpha(opacity=100);
-moz-transition-duration: 1s;
-webkit-transition-duration: 1s;
-o-transition-duration: 1s;
font-size: 10px;}


```