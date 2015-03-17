![http://i40.servimg.com/u/f40/17/90/42/71/vew12.png](http://i40.servimg.com/u/f40/17/90/42/71/vew12.png)
bằng cách acp>>>display>> Generalities
phần Message content : cho đoạn code dưới vào
an
Nguồn từ Notme forum của chú Bụi nhá
hồi trước rip về dùng ^^

Cách làm :

Bước 1 : Vào DISPLAY >> Homepage >> Generalities >>
Homepage message : dán code này vào

```

<center><span class="statround">{FORUMCOUNTPOST}

Unknown end tag for &lt;/span&gt;

 Số bài
<span class="statround">{FORUMCOUNTOPIC}

Unknown end tag for &lt;/span&gt;

 Chủ đề
<span class="statround">{FORUMCOUNTUSER}

Unknown end tag for &lt;/span&gt;

 Thành viên
<span class="statround">
<a href="http://www.cntt-k3.biz">{FORUMLASTUSERLINK} 

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/span&gt;

  Thành viên mới
<span class="tooltip" style="cursor: default;">
<span class="statround">{FORUMAGE}

Unknown end tag for &lt;/span&gt;

Lượt truy cập

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/center&gt;


```


Bước 2 : Vào cSs thêm đoạn này vào

```


.statround {
-moz-border-radius: 2px;
-webkit-border-radius: 2px;
background: #EEE url(http://i43.servimg.com/u/f43/17/43/09/69/tcat10.png) repeat-x;
border: 1px solid #CBCBCB;
border-radius: 2px;
color: #777;
margin-left: 20px;
margin-right: 4px;
padding: 4px 10px;
text-shadow: 1px 1px 0 #FAFAFA;
}
```


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
Xóa đi

Và nếu bạn muốn cái thống kê kia hiển thị trên cái Thống kê tình hình diễn đàn thì làm như sau :
Vào Index\_Body
tìm

```

{BOARD_INDEX}

```
Cho code này vào dưới nó

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
Còn nếu bạn muốn nó hiển thị ở đâu thì cứ pase code trên vào chỗ bạn muốn hiển thị

thế là xong ^^