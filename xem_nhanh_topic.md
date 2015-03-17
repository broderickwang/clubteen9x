Đây là chức năng giúp mọi người xem nhanh topic cho mọi phiên bản forumotion
Code được viết bởi rideem3 mình dựa vào thay thế một số thông tin

Demo :
![http://i12.servimg.com/u/f12/17/91/04/74/view10.png](http://i12.servimg.com/u/f12/17/91/04/74/view10.png)
khi click vào ![http://png-2.findicons.com/files/icons/573/must_have/16/preview.png](http://png-2.findicons.com/files/icons/573/must_have/16/preview.png)
sẽ hiện :
![http://i12.servimg.com/u/f12/17/91/04/74/previe10.png](http://i12.servimg.com/u/f12/17/91/04/74/previe10.png)

Ưu điểm : giao diện đẹp,gọn nhẹ
Nhược điểm : có thể vài lúc load chưa được mượt



Bước 1:
Vào CSS cho code này vào :


```

.popupWrapper {
background-color: rgba(70, 70, 70, 0.6);
border-radius: 4px 4px 4px 4px;
box-shadow: 0 12px 25px rgba(0, 0, 0, 0.7);
left: 300px;
margin: 0 auto !important;
max-height: 400px;
max-width: 700px;
overflow: auto;
padding: 5px;
position: fixed !important;
top: 200px;
}


```

Bước 2 :
Cho code này vào cuối overall\_header ( không cho vào js vì nhiều forum xung đột js).
Chú ý đây là code cho punBB


```

<script type="text/javascript">
/*Xem nhanh topic
*Viết bởi Rideem3
*/

if (/\/?f\d+.*/.test(window.location.pathname)) {
$(function () {
$('a.topictitle').after('<a href="#" style="margin-left: 5px;" class="preview_topic"><img src="http://png-2.findicons.com/files/icons/573/must_have/16/preview.png"/>

Unknown end tag for &lt;/a&gt;

');
$('.preview_topic').click(function () {
var url = this.previousSibling.href;
$('body').prepend('<div style="width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: 10000; opacity: 0.4; background-color: #292020;" class="modal" id="document_modal">

Unknown end tag for &lt;/div&gt;

');
$('.pun').prepend('<div id="topic_popup" class="popupWrapper" style="z-index: 10001;">

Unknown end tag for &lt;/div&gt;

');
$('#topic_popup').load(url + ' .post:first', function () {
$('#document_modal').click(function () {
$('#document_modal, #topic_popup').remove();
});
});
return false;
});
});
}



Unknown end tag for &lt;/script&gt;





```

Còn nếu bạn dùng phpBB2 , phpBB3 và Invision thi dùng code sau cho vào cuối overall\_header


```

<script type="text/javascript">
/*Xem nhanh topic
*Viết bởi Rideem3
*/
if (/\/?f\d+.*/.test(window.location.pathname)) {
$(function () {
$('a.topictitle').after('<a href="#" style="margin-left: 5px;" class="preview_topic"><img src="http://png-2.findicons.com/files/icons/573/must_have/16/preview.png"/>

Unknown end tag for &lt;/a&gt;

');
$('.preview_topic').click(function () {
var url = this.previousSibling.href;
$('body').prepend('<div style="width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: 10000; opacity: 0.4; background-color: #3E3E3E;" class="modal" id="document_modal">

Unknown end tag for &lt;/div&gt;

<div id="topic_popup" class="popupWrapper" style="z-index: 10001;">

Unknown end tag for &lt;/div&gt;

');
$('#topic_popup').load(url + ' .post:first', function () {
$('#document_modal').click(function () {
$('#document_modal, #topic_popup').remove();
});
});
return false;
});
});
}


Unknown end tag for &lt;/script&gt;




```


Chúc các bạn thành công !
