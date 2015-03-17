Xin chào tất cả, đây là một hướng dẫn mà sẽ dạy bạn làm thế nào để viết một chủ đề nhanh chóng.
Về cơ bản khi bạn nhấp vào nút chủ đề bài mới trong một diễn đàn, một danh sách thả xuống sẽ xuất hiện.
Sẽ có hai sự lựa chọn: Full Editor, hoặc biên tập nhanh
Có hai cách để làm điều này với: Modules hoặc Thông báo. Bạn có thể sử dụng, nhưng không sử dụng cả hai!
(Nếu bạn là người đa nghi thì hãy thử test trên 1 forum chưa chỉnh sửa temp)
phpBB3, PunBB, và Invision:
1. Chọn xem bạn muốn sử dụng một tiện ích hay một thông báo.
2. Tạo một thông báo mới hay một widget mới, hoặc chỉnh sửa một một trong những hiện có.
3. Dán nội dung sau đây:

```

<div style="display: none;" id="quickTopic" class="quickTopic"><form enctype="multipart/form-data" onsubmit="return vB_Editor['text_editor'].prepare_submit(0,0)" name="post" method="post" action="/post"><br/>Topic Title: <input type="text"  title="The length of the title for this topic must be ranging between 10 and 255 characters" maxlength="255" value="" name="subject" class="inputbox medium"><br/><br/>Message:<br /><textarea wrap="virtual" name="message" class="inputbox" id="text_editor_textarea">

Unknown end tag for &lt;/textarea&gt;

<br /><br /><div style="text-align: center;"><div id="hiddenIDS" style="display: none;">

Unknown end tag for &lt;/div&gt;

<input class="button2" type="submit" tabindex="5" value="Preview" name="preview"> <input class="button1" type="submit" value="Send" name="post"> <input type="button" onClick="document.getElementById('quickTopic').style.display='none';" value="Close">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/form&gt;



Unknown end tag for &lt;/div&gt;

<div id="chooseNewTopic" style="visibility: hidden; width: auto;" class="select"><button onmouseout="this.className='';" onmouseover="this.className='selectHover';" onclick="window.location=document.getElementsByClassName('i_post')[0].parentNode.href;">Full Editor

Unknown end tag for &lt;/button&gt;


<br><button onmouseout="this.className='';" onmouseover="this.className='selectHover';" onclick="document.getElementById('quickTopic').style.display = 'block';selectWysiwyg(this,'chooseNewTopic'); return false;">Quick Editor

Unknown end tag for &lt;/button&gt;



Unknown end tag for &lt;/div&gt;


```

4. Nhấn lưu.
5. Admin Panel -> Display -> Colors -> CSS StyleSheet -> Paste:

```

.quickTopic{background-color:#FFF;border:1px solid;height:150px;left:30%;position:fixed;top:50%;width:500px}

```
6. Admin Panel -> Modules -> JavaScript -> Create New -> Title Topic nhanh -> Chọn tất cả các trang -> Paste:

```

if(/^\/f\d+.*/.test(window.location.pathname)) {
$(function() {
var x = document.getElementsByClassName('i_post');
for (i = 0; i<x.length; i++) {
x[i].onclick = function(e) {
e.preventDefault();
selectWysiwyg(this, 'chooseNewTopic');
jQuery('#hiddenIDS').load(''+this.parentNode.href+' input[type="hidden"]');
}
}
});
}
```

Hướng dẫn chophpBB2:
1. Chọn xem bạn muốn sử dụng một tiện ích hay một thông báo.
2. Tạo một thông báo mới hay một widget mới, hoặc chỉnh sửa một một trong những hiện có.
3. Dán nội dung sau đây:

```

<div style="display: none;" id="quickTopic" class="quickTopic"><form enctype="multipart/form-data" onsubmit="return vB_Editor['text_editor'].prepare_submit(0,0)" name="post" method="post" action="/post"><br/>Topic Title: <input type="text" title="The length of the title for this topic must be ranging between 10 and 255 characters" maxlength="255" value="" name="subject" class="inputbox medium"><br/><br/>Message:<br /><textarea wrap="virtual" name="message" class="inputbox" id="text_editor_textarea">

Unknown end tag for &lt;/textarea&gt;

<br /><br /><div style="text-align: center;"><div id="hiddenIDS" style="display: none;">

Unknown end tag for &lt;/div&gt;

<input class="button2" type="submit" value="Preview" name="preview"> <input class="button1" type="submit" value="Send" name="post"> <input type="button" onClick="document.getElementById('quickTopic').style.display='none';" value="Close">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/form&gt;



Unknown end tag for &lt;/div&gt;

<div id="chooseNewTopic" style="visibility: hidden; width: auto;" class="select"><button onmouseout="this.className='';" onmouseover="this.className='selectHover';" onclick="window.location=document.getElementById('i_post')[0].parentNode.href;">Full Editor

Unknown end tag for &lt;/button&gt;


<br><button onmouseout="this.className='';" onmouseover="this.className='selectHover';" onclick="document.getElementById('quickTopic').style.display = 'block';selectWysiwyg(this,'chooseNewTopic'); return false;">Quick Editor

Unknown end tag for &lt;/button&gt;



Unknown end tag for &lt;/div&gt;


```

4. Nhấn lưu.
5. Admin Panel -> Display -> Colors -> CSS StyleSheet -> Paste:

```

.quickTopic{background-color:#FFF;border:1px solid;height:150px;left:30%;position:fixed;top:50%;width:500px}

```
6. Admin Panel -> Modules -> JavaScript -> Create New -> Title Topic nhanh -> Chọn tất cả các trang -> Paste:

```

if(/^\/f\d+.*/.test(window.location.pathname)) {
$(function() {
document.getElementById('i_post').onclick = function(e) {
e.preventDefault();
selectWysiwyg(this, 'chooseNewTopic');
jQuery('#hiddenIDS').load(''+this.parentNode.href+' input[type="hidden"]');
}
});
}```

7. Nhấn lưu và bạn đang làm.
Nguồn: Internet.

