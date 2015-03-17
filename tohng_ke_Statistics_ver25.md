![http://i40.servimg.com/u/f40/17/50/76/58/statio10.jpg](http://i40.servimg.com/u/f40/17/50/76/58/statio10.jpg)


Nói Qua về cái này 1 chút nhá
Cái này là Chupy làm và lấy áp dụng theo cái Forum Statistics 1
http://www.cntt-k3.biz/t6358-topic << này
và 1 chút riêng tư nữa là Forum Cntt-k3 dùng đầu tiên nhá ^^ ko các mem lại hiểu nhầm lấy từ đâu
Edit theo cái Forum Statistics 1
( cái này áp dụng cho cột bên phải nhá )
mình hướng dẫn theo skin Cntt-k3 đang dùng bây giờ ^^


Cách làm :


Vào : DISPLAY >> Homepage >> Generalities >> Homepage message
Pase code dưới vào

```

<div class="pairsJustified">
<dl class="discussionCount"><dt>Số bài :

Unknown end tag for &lt;/dt&gt;


<dd>{FORUMCOUNTPOST}

Unknown end tag for &lt;/dd&gt;



Unknown end tag for &lt;/dl&gt;


<dl class="messageCount"><dt>Chủ đề:

Unknown end tag for &lt;/dt&gt;


<dd>{FORUMCOUNTOPIC}

Unknown end tag for &lt;/dd&gt;



Unknown end tag for &lt;/dl&gt;


<dl class="memberCount"><dt>Thành viên:

Unknown end tag for &lt;/dt&gt;


<dd>{FORUMCOUNTUSER}

Unknown end tag for &lt;/dd&gt;



Unknown end tag for &lt;/dl&gt;


<dl><dt>Thành viên mới:

Unknown end tag for &lt;/dt&gt;


<dd><a href="http://www.cntt-k3.biz">{FORUMLASTUSERLINK}

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/dd&gt;



Unknown end tag for &lt;/dl&gt;


<dl class="memberCount"><dt>Lượt truy cập:

Unknown end tag for &lt;/dt&gt;


<dd>{FORUMAGE}

Unknown end tag for &lt;/dd&gt;



Unknown end tag for &lt;/dl&gt;



<!-- slot: forum_stats_extra -->


Unknown end tag for &lt;/div&gt;



```
Bước 2 : Cho code này vào Css



```

.pairsRows, .pairsColumns, .pairsJustified {
line-height: 1.5;
}
dl.pairsColumns, dl.pairsJustified, .pairsColumns dl, .pairsJustified dl {
overflow: hidden;
zoom: 1;
}
.pairsJustified dt {
float: left;
}

.pairs dt, .pairsInline dt, .pairsRows dt, .pairsColumns dt, .pairsJustified dt {
color: #969696;
}
.pairsJustified dd {
float: right;
text-align: right;
}
.pairsJustified dd {
text-align: right;
}```


Bước 3 :
Vào index body tìm đoạn

```

<!-- BEGIN message_admin_index -->
<div class="main">
<!-- BEGIN message_admin_titre -->
<div class="main-head">
<h1 class="page-title">{message_admin_index.message_admin_titre.MES_TITRE}

Unknown end tag for &lt;/h1&gt;




Unknown end tag for &lt;/div&gt;


<!-- END message_admin_titre -->

<!-- BEGIN message_admin_txt -->
<div id="pun-announcement">
<p>{message_admin_index.message_admin_txt.MES_TXT}

Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;


<!-- END message_admin_txt -->


Unknown end tag for &lt;/div&gt;


<!-- END message_admin_index -->

```
Đến bước 4 thì các bạn muốn nó hiển thị ở đâu thì cho code duới vào đó

```

<!-- BEGIN message_admin_index -->

<!-- BEGIN message_admin_titre -->

<h1 class="page-title">{message_admin_index.message_admin_titre.MES_TITRE}

Unknown end tag for &lt;/h1&gt;



<!-- END message_admin_titre -->

<!-- BEGIN message_admin_txt -->

<p>{message_admin_index.message_admin_txt.MES_TXT}

Unknown end tag for &lt;/p&gt;



<!-- END message_admin_txt -->

<!-- END message_admin_index -->
```


( Cho vào 1 cột bên phải nhá ( code trên là hiển thị thống kê )
thế là xong ^^