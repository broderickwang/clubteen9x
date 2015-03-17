Lúc xem mã nguồn 4r mình tìm thấy đoạn javascript ShowHideLayer trong forumotion, nó có tác dụng tương tự hàm toggle trong jQuery, tức là nếu đối tượng đang ẩn thì đoạn javascript này sẽ làm nó hiện và ngược lại.

ShowHideLayer là một javascript plugin, hoạt động khi có một sự kiện. Các bạn có thể xem danh sách các sự kiện ở đây: http://www.w3schools.com/jsref/dom_obj_event.asp vì nó cũng hoạt động với jQuery nên bạn có thể dùng với sự kiện trong jQuery http://api.jquery.com/category/events/

ShowHideLayer có thể nhận giá trị bằng ID với 1 hoặc 2 đối tượng .

Dùng với 1 đối tượng:

```

ShowHideLayer('ID đối tượng')
```

Dùng với 2 đối tượng:

```

ShowHideLayer('ID đối tượng 1','ID đối tượng 2')
```


Lưu ý: ShowHideLayer chỉ làm hiện đối tượng đang ẩn với thuộc tính style="display:none" của phần tử chứ không hoạt động với CSS {display:none}
Chỉ nhận giá trị là ID của đối tượng.
Chỉ hoạt động trong forumotion, chính xác là khi có file {L\_LANG}.js

```

<script src="http://illiweb.com/rsc/24/frm/lang/en.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;


```

...trong đây có cả một kho javascript plugin đấy >"<

Code ví dụ: http://www.fmvi.org/h54-demo-showhidelayer

```

<style>#fmvi {
background: none repeat scroll 0 0 green;
border: 10px solid cyan;
color: white;
display: block;
font-size: 20px;
line-height: 25px;
margin: 20px;
padding: 20px;
text-align: center;
}
#doituong {
background: none repeat scroll 0 0 yellow;
border: 10px solid red;
color: blue;
display: block;
font-size: 20px;
line-height: 25px;
margin: 20px;
padding: 20px;
text-align: center;
}
#doituong1 {
background: none repeat scroll 0 0 brown;
border: 10px solid black;
color: white;
display: block;
font-size: 20px;
margin: 20px;
padding: 20px;
text-align: center;
}
#doituong2 {
background: none repeat scroll 0 0 blue;
border: 10px solid black;
color: white;
display: block;
font-size: 20px;
margin: 20px;
padding: 20px;
text-align: center;
}


Unknown end tag for &lt;/style&gt;



<script src="http://illiweb.com/rsc/24/frm/lang/en.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;



<div id="fmvi" onmouseover="ShowHideLayer('doituong')" onmouseout="ShowHideLayer('doituong')">
onmouseover="ShowHideLayer('doituong')"
<br/>
onmouseout="ShowHideLayer('doituong')"
<br/>
<br/>
[ Rê chuột vào đây ]


Unknown end tag for &lt;/div&gt;


<div onclick="ShowHideLayer('doituong1','doituong2')" id="doituong">
id="doituong"
<br/>
onclick="ShowHideLayer('doituong1','doituong2')"
<br/>
<br/>
[ Click chuột vào đây ]


Unknown end tag for &lt;/div&gt;


<div style="display:none" id="doituong1">
id="doituong1"


Unknown end tag for &lt;/div&gt;


<div id="doituong2">
id="doituong2"


Unknown end tag for &lt;/div&gt;


```



Còn đây là cách mà Forumotion thường dùng: http://www.fmvi.org/h54-demo-showhidelayer

> Một vùng chỉ có tiêu đề không có nội dung và được ẩn đi

```

<div class="main" id="id-doi-tuong-an" style="display:none">
<div class="main-head clearfix">
<p class="h2">Tiêu đề

Unknown end tag for &lt;/p&gt;


<p class="options"><a href="javascript:ShowHideLayer('id-doi-tuong-an','id-doi-tuong-hien');"><img src="http://www.pettracker.com/sites/all/themes/tagg/images/icon_expand.gif" alt="+" align="" border="0" />

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


```

> Một vùng với tiêu đề và nội dung được hiển thị

```

<div class="main" id="id-doi-tuong-hien" style="display:''">
<div class="main-head clearfix">
<p class="h2">Tiêu đề

Unknown end tag for &lt;/p&gt;


<p class="options"><a href="javascript:ShowHideLayer('id-doi-tuong-an','id-doi-tuong-hien');"><img src="http://www.pettracker.com/sites/all/themes/tagg/images/icon_collapse.gif" alt="-" align="" border="0" />

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;


<div class="main-content clearfix">
Nội dung đặt ở đây


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


```

Cả hai vùng này đều dùng

```

<a href="javascript:ShowHideLayer('id-doi-tuong-an','id-doi-tuong-hien');">Click

Unknown end tag for &lt;/a&gt;


```

...để ẩn/hiện.
Trong ví dụ trên vùng 1 đang ẩn, nên khi click vào sẽ hiện ra, còn vùng 2 thì ngược lại. Tiêu đề 2 vùng được đặt giống nhau nên tạo hiệu ứng ẩn hiện cho nội dung.

Viết bởi baivong - www.FMvi.org