Bài viết cùng chuyên mục và bài viết liên quan.
Original Code: baivong - Fmvi.

Cái của fmvi share bị lỗi bài viết liên quan, với mấy cái linh tinh... ~
Cái này mình share lại, không lỗi, với lại mình chỉnh sửa tẹo tẹo cái giao diện thôi
Demo: Các bạn kéo xuống cuối topic này sẽ thấy demo.
Thực hiện:
Tạo một file javascript nhét code này vào, đặt In the topics:

```


$(function () {
$(".topic-options:last").before('$(function () {
$(".topic-options:last").before('<div style="height:20px">

Unknown end tag for &lt;/div&gt;


<div class="maintitle">
<h3>Bài viết mới cùng chuyên mục

Unknown end tag for &lt;/h3&gt;




Unknown end tag for &lt;/div&gt;


<table border="0" cellpadding="0" cellspacing="0" width="100%">
<tbody>
<tr valign="top">
<td style="border-top: 0px none; padding: 0px; background: transparent url(http://i34.servimg.com/u/f34/15/64/85/86/list10.gif) no-repeat scroll center top; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;"
width="24">
<img src="http://i34.servimg.com/u/f34/15/64/85/86/empty10.gif" width="24" border="0">


Unknown end tag for &lt;/td&gt;


<td style="border-top: 0px none; padding: 0px; line-height: 20px; background-repeat: repeat;"
align="left" background="http://i34.servimg.com/u/f34/15/64/85/86/listbg10.gif">
<div id="cungchuyenmuc">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;


<div style="height:20px">

Unknown end tag for &lt;/div&gt;


<div class="maintitle">
<h3>Bài viết mới cùng chuyên mục

Unknown end tag for &lt;/h3&gt;




Unknown end tag for &lt;/div&gt;


<table border="0" cellpadding="0" cellspacing="0" width="100%">
<tbody>
<tr valign="top">
<td style="border-top: 0px none; padding: 0px; background: transparent url(http://i34.servimg.com/u/f34/15/64/85/86/list10.gif) no-repeat scroll center top; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;"
width="24">
<img src="http://i34.servimg.com/u/f34/15/64/85/86/empty10.gif" width="24" border="0">


Unknown end tag for &lt;/td&gt;


<td style="border-top: 0px none; padding: 0px; line-height: 20px; background-repeat: repeat;"
align="left" background="http://i34.servimg.com/u/f34/15/64/85/86/listbg10.gif">
<div id="bailienquan">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;

');
var linkchuyenmuc = $("a.nav[href^='/f']:first").attr("href");
$('#cungchuyenmuc').load(linkchuyenmuc + ' .ipbtable:last .row1 a.topictitle:lt(10)', function () {
$('#cungchuyenmuc a.topictitle').wrap("<p>

Unknown end tag for &lt;/p&gt;

")
});
var topictitle = $(".postbody-head:first h3").text();
var Topictitle = topictitle.replace(/ /gi, '+');
$('#bailienquan').load('/search?mode=searchbox&search_keywords=' + Topictitle + '&show_results=topics .ipbtable:last .row2 a.topictitle:lt(10)', function () {
$('#bailienquan a.topictitle').wrap("<p>

Unknown end tag for &lt;/p&gt;

")
});
});
```

Chỉnh số 10 trong 2 đoạn lt(10) thành số bài bạn muốn hiển thị