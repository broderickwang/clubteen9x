Thường thì để thay đổi trạng thái (status):

![http://a.imageshack.us/img801/3654/501df312d535cf1c3900001.png](http://a.imageshack.us/img801/3654/501df312d535cf1c3900001.png)



Thì phải vào profile rồi chỉnh sửa

![http://a.imageshack.us/img232/7351/501df3a4d535cf1f0c00001.png](http://a.imageshack.us/img232/7351/501df3a4d535cf1f0c00001.png)

Để đơn giản hơn thì có thể sử dụng Tip này để làm công việc đó nhanh chóng.
B1: Vào ACP
B2: Modules
B3: Forum widgets management
B4: Tạo một widget


> Use a table type : không(No)
> Widget source:

```


<style>#navigationMenu li {
list-style:none;
height:39px;
padding:2px;
width:40px;
}
#navigationMenu span {
/* Container properties */
width:0;
left:38px;
padding:0;
position:absolute;
overflow:hidden;
/* Text properties */
font-family:'Myriad Pro', Arial, Helvetica, sans-serif;
font-size:18px;
font-weight:bold;
letter-spacing:0.6px;
white-space:nowrap;
line-height:39px;
/* CSS3 Transition: */
-webkit-transition: 0.25s;
/* Future proofing (these do not work yet): */
-moz-transition: 0.25s;
transition: 0.25s;
}
#navigationMenu a {
background:url('http://i1202.photobucket.com/albums/bb362/tnpu_ilusm/Untitled-1-1.jpg') no-repeat;
height:39px;
width:38px;
display:block;
position:relative;
}
/* General hover styles */

#navigationMenu a:hover span {
width:auto;
padding:0 20px;
overflow:visible;
}
#navigationMenu a:hover {
text-decoration:none;
/* CSS outer glow with the box-shadow property */
-moz-box-shadow:0 0 5px #9ddff5;
-webkit-box-shadow:0 0 5px #9ddff5;
box-shadow:0 0 5px #9ddff5;
}
/* Blue Button */

#navigationMenu .about {
background-position:-38px 0;
}
#navigationMenu .about:hover {
background-position:-38px -39px;
}
#navigationMenu .about span {
background-color:#1e8bb4;
color:#223a44;
text-shadow:1px 1px 0 #44a8d0;
}
/* The styles below are only needed for the demo page */

#main {
margin:200px auto;
position:fixed;
left:0px;
bottom:0px;
width:40px;
}


Unknown end tag for &lt;/style&gt;

<div id="main">
<ul id="navigationMenu">
<li> <a class="about" href="#status" onmouseover="saraaoi();showtip('Cập nhật Status ở đây một cách nhanh chóng.')" onmouseout="hidetip();"> <span>Status : <input size="20" id="mariaozawa" onfocus='fito();' onblur='fito();'/> <input type="button"  value="OK" class="mainoption" onclick="mariaozawa();" /><i id='luti' style="display:none;"'>   Waiting

Unknown end tag for &lt;/i&gt;



Unknown end tag for &lt;/div&gt;

<div style="display:none;" id="anglea">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/span&gt;

 

Unknown end tag for &lt;/a&gt;

 

Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;


<script>
var time = 1;

function saraaoi() {
if (time <= 1) {
jQuery.ajax({
url: '/profile?mode=editprofile',
success: function(ajax) {
status = jQuery('#profile_field_13_-8', ajax).val();
jQuery('#mariaozawa').val(status);
}
});
time = time + 1;
fito();
};
};

function fito() {
if (jQuery('#mariaozawa').val() == status) {
jQuery('#mariaozawa').val('');
}
else if (jQuery('#mariaozawa').val() == '') {
jQuery('#mariaozawa').val(status);
};
};

function mariaozawa() {
jQuery(document).ready(function() {
jQuery('<span/>').load('/profile?mode=editprofile .page', function() {
jQuery(this).appendTo('#anglea');
jQuery('#profile_field_13_-8').val(jQuery('#mariaozawa').val());
jQuery("#register .mainoption").click();
jQuery('#luti').fadeIn(1500);
jQuery('#luti').html('  Cập nhật thành công !')
jQuery('#luti').fadeOut(1000);
time = 1;
jQuery('#anglea').empty();
});
});
}



Unknown end tag for &lt;/script&gt;


<iframe name="register" height="0" width="0" frameborder="0">

Unknown end tag for &lt;/iframe&gt;


```

+Kiểm tra xem đã add widget chưa:
![http://a.imageshack.us/img802/6182/501dfcdfd535cf234d00001.png](http://a.imageshack.us/img802/6182/501dfcdfd535cf234d00001.png)
B6: Tìm id của status, nếu bạn đã biết rồi thì có thể click chuột phải vào cái ô bên chứa nội dung status thì có thể xem được id của nó, còn nếu bạn chưa biết thì làm như sau:
+Bạn cũng tạo 1 widget.
+Widget source:
Nếu bạn dùng phpbb2:

```


doctorThanh=jQuery("td:contains('Status')").next().children().attr("name");
prompt('Copy cái id bên dưới lại nhé', doctorThanh);
```

Nếu bạn dùng punbb:

```


doctorThanh=jQuery("dt:contains('Status')").next().children().attr("name");
prompt('Copy cái id bên dưới lại nhé', doctorThanh);

```
+Lưu widget lại rồi kiểm tra xem đã add widget chưa nhé.
Tìm trong widget tạo đầu tiên:

```

profile_field_13_-8
```

Thay tất cả lại bằng cái mà bạn vừa nhận được lúc nảy từ Bảng thông báo của trình duyệt.
Xong rồi test thử nào hehe.
DEMO:

![http://a.imageshack.us/img534/7554/501e00c7d535cf2b6400000.png](http://a.imageshack.us/img534/7554/501e00c7d535cf2b6400000.png)


> http://www.a20tpo.info/forum



Bài viết này nhầm mục đích hướng dẫn cho các bạn chưa biết gì. Ví dụ như bạn hôm qua pm nick yahoo mình Cười nhe răng.
Và với tip này các bạn có thể làm được nhiều thứ cập nhật nhanh hơn, chẳng hạn 'Thông điệp yêu thương hehe'.
Mỏi tay quá cười lớn.
Mọi ý kiến xin cho xuống bên dưới. Bài đầu tiên sau hơn 1 năm cười lớn