![http://i11.servimg.com/u/f11/17/98/40/25/114.jpg](http://i11.servimg.com/u/f11/17/98/40/25/114.jpg)

Cách làm :

Bước 1 : vào : MODULES >> HTML & JAVASCRIPT >> Javascript codes managementChange a Javascript Code
Title **: xem nhanh bài viết
Placement : In the sub-forums
Javascript Code** :


Với PunBB

```

/*Topic Preview Forumotion Add On
*Created by Rideem3 of forum.fmquery.com
*Use of this script is prohibited without this full copyright in place
*/
if (/\/?f\d+.*/.test(window.location.pathname)) {
$(function () {
$('a.topictitle').after('<a href="#" style="margin-left: 5px;" class="preview_topic">  <img src="http://icons.iconarchive.com/icons/fatcow/farm-fresh/24/eye-icon.png" title="Xem nhanh chủ đề">

Unknown end tag for &lt;/a&gt;

');
$('.preview_topic').click(function () {
var url = this.previousSibling.href;
$('body').prepend('<div style="width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: 10000; opacity: 0.4; background-color: #3E3E3E;" class="modal" id="document_modal">

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

```


Với Phpbb2 , phpbb3 , Invision

```


/*Topic Preview Forumotion Add On
*Created by Rideem3 of forum.fmquery.com
*Use of this script is prohibited without this full copyright in place
*/
if (/\/?f\d+.*/.test(window.location.pathname)) {
$(function () {
$('a.topictitle').after('<a href="#" style="margin-left: 5px;" class="preview_topic">Preview Topic

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
```


Bước 2 : vào Css thêm cái này vào :

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
padding: 4px;
position: fixed !important;
top: 200px;
}```


xong con ong ^^



Được sửa bởi Cros ngày Tue Jan 15, 2013 11:19 am; sửa lần 1.