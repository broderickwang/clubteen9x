Trước tiên, mình rất xin lỗi các bạn vì đã không hoàn thành nhiệm vụ của một Instructor trong thời gian vừa qua Sad
Thời gian qua mình phải nhập trường và có rất nhiều việc phải làm, nên rất xin lỗi các bạn Sad

Tuy nhiên, hôm nay mình quay trở lại viết Guide cho các bạn Smile
Lần này Guide sẽ về cách Rip Skin qua Invision \\m/

Trước tiên, chúg ta sẽ tìm hiểu cấu trúc của một skin đơn giản...
Mình sẽ lấy skin Enchanting Mid-Autumn
Demo Skin: http://invision.forum.st/t119-topic#620

CSS của Skin:

```


div#logostrip {
margin-top:30px;
width:830px;
height:200px;
padding: 46px 10pz 15px;
margin:0 10px;
margin-right:0!important;
-webkit-border-radius:0 0 6px 6px;
-moz-border-radius:0 0 6px 6px;
border-radius:0 0 6px 6px;}
#logo {
color:#333;
height:140px;
padding:12px;
width:780px;
background-color:#fff;
border-bottom:1px solid #E8E8E8;
-webkit-border-radius:5px 5px 0 0;
-moz-border-radius:5px 5px 0 0;
border-radius:5px 5px 0 0;
}
#logo img {
float:left;
}
#main-title {
color:#000;
position:absolute;
margin-top:-7px;
margin-left:190px;
}
#site-desc {
color:#000;
position:absolute;
margin-top:50px;
margin-left:210px;
}
body {
background: #670003 url(http://i28.servimg.com/u/f28/15/38/71/28/bg10.jpg) center top no-repeat;
width:880px;
}
#userlinks {
display: none;
}
#submenu {
background:#670003;
}
#submenu a:link {color:#fff!important;height:10px!important;font-weight:bold!important;}
#submenu a:visited {color:#fff!important;height:10px!important;}
#submenu a:hover {background:transparent!important;color:#fff!important;font-weight:bold!important;}
::selection {color:#fff;color:rgba(255,255,255,0.85);background:#ea4c89}
a:link, a:visited{color:#00569C!important;text-decoration:none!important;}
a:hover{color:#b42000!important;text-shadow: 0 0 5px yellow;}
#ipbwrapper {
border: 1px solid #ddd;
-moz-border-radius: 15px 15px;
-webkit-border-radius: 15px;
border-radius: 15px;
margin-left:-20px;
margin-top:350px;
position:absolute;
background: #fff;
width: 900px;
}
#main-content {
background: transparent;
padding: 0;
width:880px;
float:center;
margin-left:10px;
}
.borderwrapm, div.borderwrap
{
background: #FFFFFF;
color: #333333;
border: 2px solid #ddd ;
}
div.maintitle .contract {
background: url(http://i34.servimg.com/u/f34/15/64/85/86/collap10.png) no-repeat 50% 50%;
cursor: pointer;
float: right;
height: 30px;
width: 30px;
}
div.maintitle .expand {
background: url(http://i34.servimg.com/u/f34/15/64/85/86/collap11.png) no-repeat 50% 50%;
cursor: pointer;
float: right;
height: 30px;
width: 30px;
}
div.maintitle {
background: #869BBF url(http://i28.servimg.com/u/f28/15/38/71/28/tcat10.png) repeat-x top center;
color: #FFFFFF;
font: bold 10pt verdana, geneva, lucida, 'lucida grande', arial, helvetica, sans-serif;
}
table.ipbtable tfoot td {
display: none;
}
table.ipbtable th, table.ipbtable th.formsubtitle {
background: #b07f54;
color: #fff;
font-size: 11px;
font-weight: bold;
padding: 8px;
}
th a:link, th a:visited, th a:active, th a:hover {color: #000;}
.linklist.clearfix.statlinks a:link {color: #000;}
.row1,.row2{border-bottom:1px solid #DDD!important;background: url(http://i28.servimg.com/u/f28/15/38/71/28/back10.gif) repeat;}
.row2.icon,.row1.centered,.row2.centered{border-right:1px solid #DDD!important;}
.row1.centered,.row2.centered{background-color:#f4f4f4}
#gfooter {background:url(http://i28.servimg.com/u/f28/15/38/71/28/footer10.png)}

```

Bây giờ, chúg ta sẽ đi tìm hiểu từng phần một của CSS trên nhá

Đoạn đầu là chỉnh vị trí và style của phần head và các thứ xug quanh nó.
Đoạn sau đó:

```


body {
background: #670003 url(http://i28.servimg.com/u/f28/15/38/71/28/bg10.jpg) center top no-repeat;
width:880px;
}
```
là tạo nền cho 4r của bạn.
Với code trên, 4r của bạn sẽ có nền màu #670003 và url hình ![http://i28.servimg.com/u/f28/15/38/71/28/bg10.jpg](http://i28.servimg.com/u/f28/15/38/71/28/bg10.jpg) (hình bg này cái phần center top sẽ k bị repeat).
Để convert đoạn này từ các ver khác sag thì cứ copy nguyên đoạn body của skin đó vào =)) và thêm cái width cho skin của bạn.
Đoạn tiếp

```


#submenu {
background:#670003;
}
#submenu a:link {color:#fff!important;height:10px!important;font-weight:bold!important;}
#submenu a:visited {color:#fff!important;height:10px!important;}
#submenu a:hover {background:transparent!important;color:#fff!important;font-weight:bold!important;}
```
là tạo nền cho thanh menu và tạo style cho các link (khi bt, khi hover, khi active) trên thanh menu.
Các bạn nên thay thử từng cái để tìm hiểu Smile
Đoạn tiếp

```


::selection {color:#fff;color:rgba(255,255,255,0.85);background:#ea4c89}
a:link, a:visited{color:#00569C!important;text-decoration:none!important;}
a:hover{color:#b42000!important;text-shadow: 0 0 5px yellow;}
```
là tạo style khi chọn khoảg và style cho các link (khi bt, khi hover, khi active) toàn 4r.
Đoạn tiếp

```


#ipbwrapper {
border: 1px solid #ddd;
-moz-border-radius: 15px 15px;
-webkit-border-radius: 15px;
border-radius: 15px;
margin-left:-20px;
margin-top:350px;
position:absolute;
background: #fff;
width: 900px;
}```

là tạo style cho phần bao quanh cả 4r.
Đoạn tiếp

```


#main-content {
background: transparent;
padding: 0;
width:880px;
float:center;
margin-left:10px;
}```

là tạo style cho phần bao quanh ben trong cả 4r.
Trong 2 đoạn code trên, có width của #ipbwrapper là 900px, còn width của #main-content là 880px; nên phải căn #main-content margin-left:10px; Điều này có nghĩa là cái #main-content sẽ dịch sag phải 10px, thì khi cho width 880px #main-content sẽ được căn giữa #ipbwrapper khi #main-content cách bên trái 10px và bên phải 10px...
Tươg tự, khi bạn cho #main-content dịch vào 15px (nghĩa là margin-left:15px) thì nên cho width của #main-content là 900 - (15 + 15) = 900 - 30 = 870px. (khi này bên phải cũg sẽ được căn 15px)
Đoạn tiếp

```


.borderwrapm, div.borderwrap
{
background: #FFFFFF;
color: #333333;
border: 2px solid #ddd ;
}```

là tạo style cho phần bao quanh các box.
Đoạn tiếp

```


div.maintitle .contract {
background: url(http://i34.servimg.com/u/f34/15/64/85/86/collap10.png) no-repeat 50% 50%;
cursor: pointer;
float: right;
height: 30px;
width: 30px;
}
div.maintitle .expand {
background: url(http://i34.servimg.com/u/f34/15/64/85/86/collap11.png) no-repeat 50% 50%;
cursor: pointer;
float: right;
height: 30px;
width: 30px;
}
```
là tạo style cho 2 nút thu gọn và mở rộg Box của Invision (đoạn này k có cũg ok)
Đoạn tiếp

```


div.maintitle {
background: #869BBF url(http://i28.servimg.com/u/f28/15/38/71/28/tcat10.png) repeat-x top center;
color: #FFFFFF;
font: bold 10pt verdana, geneva, lucida, 'lucida grande', arial, helvetica, sans-serif;
}
```
là tạo style cho cái thanh tiêu đề Box (tươg tự .tcat ở bb2 hay pun)
Đoạn tiếp

```


table.ipbtable th, table.ipbtable th.formsubtitle {
background: #b07f54;
color: #fff;
font-size: 11px;
font-weight: bold;
padding: 8px;
}
```
là tạo style cho cái thanh có mấy chữ (Diễn đàn, trả lời,...) (Tương tự .thead ở bb2 hay pun)
Đoạn tiếp

```


.row1,.row2{border-bottom:1px solid #DDD!important;background: url(http://i28.servimg.com/u/f28/15/38/71/28/back10.gif) repeat;}
.row2.icon,.row1.centered,.row2.centered{border-right:1px solid #DDD!important;}
.row1.centered,.row2.centered{background-color:#f4f4f4}
```
là tạo style cho mấy cái class row1, row2, row2 icon,... (cũg tươg tự như ở pun và bb2 thôi)

Mình chỉ liệt ra một vài cái đơn giản và cần thiết. Giờ mình phải đi học, các bạn hãy tìm hiểu kĩ phần căn bản này trước khi học cách convert 1 skin từ bb2 hay pun sag Invision nhé Smile

Cảm ơn các bạn đã theo dõi.
Thân,
miamor.