demo:  ![http://i43.servimg.com/u/f43/15/93/33/76/77777710.png](http://i43.servimg.com/u/f43/15/93/33/76/77777710.png)
cái này để trong mục vewtopic\_body , tạo 1 bảng nội quy cho mem cười nhăn răng
Hướng dẫn :

Cho đoạn sau vào Css :

```

#specificatii{
list-style-type: none;
padding: 5px;
width: 90%;
float: center;
margin: 5px 0px;
border: 2px solid #18405E;
background: #177FBF;
color: white;
text-shadow: 1px 1px 0px black;
border-radius: 10px;
-moz-border-radius: 10px;
-webkit-border-radius: 10px;}

#specificatii li{
text-align: left;
margin-bottom: 15px;}

#specificatii li:last-child{margin-bottom: 0px;}

#inchide_specificatii{
cursor: pointer;
position: relative;
top: -20px;
left: -30px;}

```


Bước 2 : Vào Vewtopic\_body tìm đoạn sau :

```

<!-- END switch_user_logged_out -->
```

Thêm vào đằng sau nó code sau :

```


<div id="specificatii_center" align="center"><ul id="specificatii"><li>•  Không spam. Xem rõ nội quy chung tại <a href="/t1-topic" rel="nofollow"><strong>Đây

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li>• Thể hiện văn hóa bằng cách bấm thanks với các bài viết bạn thích.

Unknown end tag for &lt;/li&gt;



Unknown end tag for &lt;/ul&gt;

<img id="inchide_specificatii" align="right" onclick="$('#specificatii_center').hide('slow');" src="http://i36.servimg.com/u/f36/11/96/49/61/erase10.png">

Unknown end tag for &lt;/div&gt;


```

Chú ý : có thể đặt đâu tùy ý các bạn trong vewtopic\_body
có thể đặt trên khung trả lời nhanh = cách tìm code

```

<a name="quickreply">

Unknown end tag for &lt;/a&gt;


{QUICK_REPLY_FORM}<br />

```
và đặt trên nó