•Mô tả: Tut này được viết bằng CSS3 với các hiệu ứng di chuyển đơn giản
•Demo:http://jdemo01.1talk.net
•Yêu cầu: Trình duyệt hỗ trợ CSS3
•Ghi chú: Không đem bán @@!
•Cách cài đặt: ACP ![http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png](http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png) Display ![http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png](http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png) Template ![http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png](http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png) overal\_header(dùng cho tất cả các trang) hoặc index\_body(dùng cho trang chính) ![http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png](http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png) Dán code 1 vào trước thẻ ```


Unknown end tag for &lt;/head&gt;

```(dùng overal\_header) hoặc sau {JAVASCRIPT}(dùng index\_body) ![http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png](http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png) Dán Code 2 vào sau đoạn

```

<!-- END saut -->
<!-- END giefmod_index1 -->


Unknown end tag for &lt;/div&gt;


```
(nếu dùng overal\_header) hoặc dán Code 2 vào sau Code 1(nếu dùng index\_body) ![http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png](http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png) Chấp nhận ![http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png](http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png) Nhấn nút để xem thử. Nếu ứng ý thì nhấn add , không ưng thì xóa đi.
•Code 1:

```

<style type="text/css">
/*Loading CSS by Juskteez*/
.loadingfont
{
position:fixed;
font-family: 'Righteous', cursive;
width:100%;
padding:10px;
left:0px;
top:3000px;
opacity:0.0;
z-index:1;
animation:myfi 4s;
-moz-animation:myfi 4s; /* Firefox */
-webkit-animation:myfi 4s; /* Safari and Chrome */
}

@keyframes myfi
{
0%  {left:0px;top:0;opacity:1;}
25%  {left:0px;top:0;opacity:1;}
50%  {left:0px;top:0;opacity:1;}
90%  {left:0px;top:0;opacity:1;}
100% {left:0px;top:0;}
}

@-moz-keyframes myfi /* Firefox */
{
0%  {left:0px;top:0;opacity:1;}
25%  {left:0px;top:0;opacity:1;}
50%  {left:0px;top:0;opacity:1;}
90%  {left:0px;top:0;opacity:1;}
100% {left:0px;top:0;}
}

@-webkit-keyframes myfi /* Safari and Chrome */
{
0%  {left:0px;top:0;opacity:1;text-shadow:0px 0px 10px #ffffff;}
25%  {left:0px;top:0;opacity:1;text-shadow:0px 0px 20px #ffffff;}
50%  {left:0px;top:0;opacity:1;text-shadow:0px 0px 10px #ffffff;}
75%  {left:0px;top:0;opacity:1;text-shadow:0px 0px 20px #ffffff;}
90%  {left:0px;top:0;opacity:1;}
100% {left:0px;top:0;text-shadow:0px 0px 8px #ffffff;}
}


.loaderup
{
position:fixed;
width:100%;
height:1500px;
background:black;
top:-1520px;
left:0px;
z-index:1;
animation:myfirst 5s;
-moz-animation:myfirst 5s; /* Firefox */
-webkit-animation:myfirst 5s; /* Safari and Chrome */
}

@keyframes myfirst
{
0%  {top:0px;}
25%  {top:0px;}
50%  {top:0px;}
75%  {top:0px;}
100% {top:-1520px;}
}

@-moz-keyframes myfirst /* Firefox */
{
0%  {top:0px;}
25%  {top:0px;}
50%  {top:0px;}
75%  {top:0px;}
100% {top:-1520px;}
}

@-webkit-keyframes myfirst /* Safari and Chrome */
{
0%  {top:0px;}
25%  {top:0px;}
50%  {top:0px;}
75%  {top:0px;}
100% {top:-1520px;}
}
.loaderdown
{
position:fixed;
width:100%;
height:1500px;
background:black;
bottom:-1520px;
left:0px;
z-index:1;
animation:mysecond 5s;
-moz-animation:mysecond 5s; /* Firefox */
-webkit-animation:mysecond 5s; /* Safari and Chrome */
}

@keyframes mysecond
{
0%  {bottom:1500px;}
25%  {bottom:1500px;}
50%  {bottom:1500px;}
75%  {bottom:1500px;}
100% {bottom:-1500px;}
}

@-moz-keyframes mysecond /* Firefox */
{
0%  {bottom:1500px;}
25%  {bottom:1500px;}
50%  {bottom:1500px;}
75%  {bottom:1500px;}
100% {bottom:-1500px;}
}

@-webkit-keyframes mysecond /* Safari and Chrome */
{
0%  {bottom:1500px;}
25%  {bottom:1500px;}
50%  {bottom:1500px;}
75%  {bottom:1500px;}
100% {bottom:-1500px;}
}


Unknown end tag for &lt;/style&gt;


```

•Code 2:

```


<div class="loaderdown">

Unknown end tag for &lt;/div&gt;


<div class="loaderup">

Unknown end tag for &lt;/div&gt;


<table align="center" border="0" cellpadding="0" cellspacing="0" class="loadingfont" style="height: 100%; width: 100%; ">
<tbody>
<tr>
<td style="text-align: center; ">
<strong><span style="font-size:48px;"><span style="color: rgb(255, 255, 255); ">Loading

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




```
by Juskteez