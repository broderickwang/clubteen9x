Nút chọn màu cho Invision.
By: miamor.


Demo:
<a href='http://www.youtube.com/watch?feature=player_embedded&v=xI3wmkAs8Kk' target='_blank'><img src='http://img.youtube.com/vi/xI3wmkAs8Kk/0.jpg' width='425' height=344 /></a>



Thực hiện:
Tạo một file javascript đặt In all the pages:
[Phần này đã bị ẩn. Để xem toàn bộ nội dung vui lòng trả lời bài viết này ]

![http://i30.servimg.com/u/f30/17/70/31/89/select10.png](http://i30.servimg.com/u/f30/17/70/31/89/select10.png)
```


$(function () {
$('<span id="maumi" class="stylevds" style=""><img src="http://illiweb.com/fa/wysiwyg/color_swatch.png"/>

Unknown end tag for &lt;/span&gt;

<div class="mamau" style="display: none; "><div id="colormi">

Unknown end tag for &lt;/div&gt;


<span class="gen" style="color:#000">Vui lòng chọn 1 màu phía trên (hoặc nhập 1 mã màu nếu bạn am hiểu)

Unknown end tag for &lt;/span&gt;


<input class="laymau">
<hr><span class="oknha">Đồng Ý

Unknown end tag for &lt;/span&gt;

<span class="konha">Thoát

Unknown end tag for &lt;/span&gt;

<span id="default">Default

Unknown end tag for &lt;/span&gt;

<img class="bgtest" src="">

Unknown end tag for &lt;/div&gt;


<style>
#maumi{cursor: pointer;}
#maumi:hover{background-color: #ffff00;}
.mamau{display:none;position:fixed;padding:10px;width:auto;height:auto;top:35%;left:35%;margin-left:-130px;border:5px solid #000;background:#fff;z-index: 999;}
.laymau{width:100%;}
.oknha,.konha{float:left;cursor:pointer;font-weight:bold;border:1px solid #000;margin:5px;padding:2px 5px;color:#000;padding-top: -2px;vertical-align:middle;}
.oknha:hover,.konha:hover{color:red;}
#default{float:right;cursor:pointer;border:1px solid #000;margin:5px;padding:2px 5px;font-weight:bold;color:#000;}
#default:hover{color:red;background:#fff000}
#colorpickers {top: 22px; left: -230pxposition: absolute; ;}
#colortd td {padding: 1px;}
#colortd td button { padding: 0px;height: 15px; width: 15px;border: 1px solid #fff;}
#colortd {border: 1px solid #fff;}
#colortd td button:hover {border: 1px solid #fff;}


Unknown end tag for &lt;/style&gt;

').insertAfter(".mainmenu:last");
});
$(document).ready(function () {
laycookie();
$('#default').click(function () {
mauw(1)
});
$('#maumi').click(function () {
$(function () {
if (document.getElementById('colormi')) {
var colors = new Array('00', '22', '44', '88', 'CC', 'FF');
var x = '<div id="colorpickers"><table id="colortd">';
var y = x;
for (i = 5; i >= 0; i--) {
x = x + '<tr>';
y = y + '<tr>';
for (j = 5; j >= 0; j--) {
for (k = 5; k >= 0; k--) {
var col = colors[j] + colors[i] + colors[k];
x = x + '<td style="background: #' + col + ';"><button class="maumia" style="background:#' + col + ';" title="#' + col + '" alt="#' + col + '">

Unknown end tag for &lt;/button&gt;



Unknown end tag for &lt;/td&gt;

';
}
}
x = x + '

Unknown end tag for &lt;/tr&gt;

';
}
document.getElementById('colormi').innerHTML = x + '

Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;

';
};
$("#colormi").css({
"overflow": "visible";
})
});
$(function () {
$(".maumia").click(function () {
$(".laymau").val("" + $(this).attr("alt") + "");
});
});
$('.mamau').fadeIn();
$('.laymau').val(my_getcookie('mamau')).select();
$('.oknha').click(function () {
if ($('.laymau').val().search('#') != -1) {
my_setcookie('mamau', $('.laymau').val(), 1);
mauw_none();
$('.mamau').fadeOut()
} else {
$('.laymau').val('Mã màu không hợp lệ')
}
});
$('.konha').click(function () {
$('.mamau').fadeOut()
});
$('#default').click(function () {
$('.mamau').fadeOut()
})
})
});
function mauw(mau) {
my_setcookie('mmia', mau, 1);
laycookie()
};
function mauw_none() {
my_setcookie('mmia', 'none', 1);
laycookie()
};
function laycookie() {
if (my_getcookie('mmia')) {
cpma = my_getcookie('mmia');
if (cpma == 'none') {
mimauw = "" + my_getcookie('mamau') + ""
} else if (cpma == '1') {
mimauw = '#fff'
};
$('.borderwrapm').css('background', mimauw);
$('.borderwrap').css('background', mimauw);
$('.maintitle').css('background', mimauw)
} else {
maubandau = 1 + Math.floor(Math.random() * 12);
if (maubandau == 1) {
mauw(1)
}
}
};
```