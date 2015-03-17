Demo : www.maitruongmenyeu.org.
Chú ý : Thay đổi code vui lòng giữ nguyên dòng bản quyền.Trong code có sử dụng code của Dion bên help forumotion.
Chức năng:


> Vote không chuyển trang.
> Vote cộng điểm ngay lập tức.
> Style của của vote Fmvi.


Hướng Dẫn:
Tạo một Javascript mới:

> Placement :In the topics.
> Title **: Vote for invision.
> Javascript Code** :


```

//Professional like/dislike bar. Copyright © 2011 by Dion Designs. All Rights Reserved.
$(function () {
$('#main-content').prepend('<style type="text/css">ul.post-info li.ddvote{height:20px;line-height:20px;background:#;font-size:12px;font-weight:bold;}

Unknown end tag for &lt;/style&gt;

');
var x = $('.vote').get();
for (i = x.length - 1; i >= 0; i--) {
var plus = '0';
var minus = '0';

var vplus = '<img style="position:relative;top:-3px;margin-right:3px" title="Like" src="http://i43.servimg.com/u/f43/17/43/09/69/like_n10.png" />';
var vminus = '<img style="margin:0px 3px 0px 10px" title="Dislike" src="http://i43.servimg.com/u/f43/17/43/09/69/dislik11.png" />';

var y = $(x[i]).find('.vote-button a').get();
for (j = 0; j < y.length; j++) {
if (y[j].innerHTML == '+') {
vplus = '<a href="' + y[j].href + '" alt="plus"><img style="position:relative;top:-3px;margin-right:3px" title="Like" src="http://i43.servimg.com/u/f43/17/43/09/69/like_b10.png" />

Unknown end tag for &lt;/a&gt;

';
} else if (y[j].innerHTML == '-') {
vminus = '<a href="' + y[j].href + '" alt="mplus"><img style="margin:0px 3px 0px 10px" title="Dislike" src="http://i43.servimg.com/u/f43/17/43/09/69/dislik10.png" />

Unknown end tag for &lt;/a&gt;

';
}
}
var y = $(x[i]).find('.vote-bar')[0];
if (y) {
var z = y.title.split(' ');
var pct = parseInt(z[3].replace(/%/, '')) / 100;
var num = parseInt(z[4].replace(/\(/, ''));
plus = String(Math.round(num * pct));
minus = String(num - plus);
}
$(x[i].parentNode.previousSibling.childNodes[0]).prepend('<li class="ddvote"> ' + vplus + '<span class="plus">' + plus + '

Unknown end tag for &lt;/span&gt;

' + vminus + '<span class="mplus">' + minus + ' 

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/li&gt;

');
x[i].parentNode.removeChild(x[i]);
}
var vietnam = 'Được Viết Bởi Notme - Fmvi group. Vui lòng không xóa dòng này';
var english= 'Copyright © 2011 by Notme - Fmvi group.Do not delete It.';
var z = $('.ddvote a').get();
for (g = 0; g < z.length; g++) {
$(".ddvote a:eq(" + g + ")").attr("target", "vote" + g);
$(".ddvote a:eq(" + g + ")").after('<iframe name="vote' + g + '" style="display:none"</iframe>');
$(".ddvote a:eq(" + g + ")").click(function () {

var a = $(this).attr("alt");
$(this).parent().find('.' + a).html(Number($(this).parent().find('.' + a).html()) + 1);

if ( a == 'plus'){
$(this).next().next().next().replaceWith('<img style="margin:0px 3px 0px 10px" title="Dislike" src="http://i43.servimg.com/u/f43/17/43/09/69/dislik11.png" />');
$(this).replaceWith('<img style="position:relative;top:-3px;margin-right:3px" title="Like" src="http://i43.servimg.com/u/f43/17/43/09/69/like_n10.png" />');

}else{

$(this).prev().prev().prev().replaceWith('<img style="position:relative;top:-3px;margin-right:3px" title="Like" src="http://i43.servimg.com/u/f43/17/43/09/69/like_n10.png" />');
$(this).replaceWith('<img style="margin:0px 3px 0px 10px" title="Dislike" src="http://i43.servimg.com/u/f43/17/43/09/69/dislik11.png" />');
}
});
}

});

```
Chúc các bạn vui vẻ với Fmvi nấu ăn .

UPDATE Ver 2
thông tin:
-rút gọn code
- sử dụng Ajax thay cho iframe Cười nhe răng
thưởng thức đi

```

var banquyen = "code gốc của lion. thêm chức năng bởi notme";
$(function () {
$("#main-content").prepend('<style type="text/css">ul.post-info li.ddvote{height:20px;line-height:20px;background:#;font-size:12px;font-weight:bold;}

Unknown end tag for &lt;/style&gt;

');
var b = $(".vote").get();
for (i = b.length - 1; 0 <= i; i--) {
var c = "0",
d = "0",
e = '<img style="position:relative;top:-3px;margin-right:3px" title="Like" src="http://i43.servimg.com/u/f43/17/43/09/69/like_n10.png" />',
f = '<img style="margin:0px 3px 0px 10px" title="Dislike" src="http://i43.servimg.com/u/f43/17/43/09/69/dislik11.png" />',
a = $(b[i]).find(".vote-button a").get();
for (j = 0; j < a.length; j++) {
"+" == a[j].innerHTML ? e = '<a href="' + a[j].href + '" alt="plus"><img style="position:relative;top:-3px;margin-right:3px" title="Like" src="http://i43.servimg.com/u/f43/17/43/09/69/like_b10.png" />

Unknown end tag for &lt;/a&gt;

' : "-" == a[j].innerHTML && (f = '<a href="' + a[j].href + '" alt="mplus"><img style="margin:0px 3px 0px 10px" title="Dislike" src="http://i43.servimg.com/u/f43/17/43/09/69/dislik10.png" />

Unknown end tag for &lt;/a&gt;

')
}
if (a = $(b[i]).find(".vote-bar")[0]) {
c = a.title.split(" "), d = parseInt(c[3].replace(/%/, "")) / 100, a = parseInt(c[4].replace(/\(/, "")), c = String(Math.round(a * d)), d = String(a - c)
}
$(b[i].parentNode.previousSibling.childNodes[0]).prepend('<li class="ddvote"> ' + e + '<span class="plus">' + c + "

Unknown end tag for &lt;/span&gt;

" + f + '<span class="mplus">' + d + " 

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/li&gt;

");
b[i].parentNode.removeChild(b[i])
}
c = $(".ddvote a").get();
for (g = 0; g < c.length; g++) {
b = $(".ddvote a:eq(" + g + ")").attr("href"), $(".ddvote a:eq(" + g + ")").attr("href", "javascript:$.post('" + b + "')"), $(".ddvote a:eq(" + g + ")").click(function () {
var a = $(this).attr("alt");
$(this).parent().find("." + a).html(Number($(this).parent().find("." + a).html()) + 1);
"plus" == a ? ($(this).next().next().replaceWith('<img style="margin:0px 3px 0px 10px" title="Dislike" src="http://i43.servimg.com/u/f43/17/43/09/69/dislik11.png" />'), $(this).replaceWith('<img style="position:relative;top:-3px;margin-right:3px" title="Like" src="http://i43.servimg.com/u/f43/17/43/09/69/like_n10.png" />')) : ($(this).prev().prev().replaceWith('<img style="position:relative;top:-3px;margin-right:3px" title="Like" src="http://i43.servimg.com/u/f43/17/43/09/69/like_n10.png" />'),
$(this).replaceWith('<img style="margin:0px 3px 0px 10px" title="Dislike" src="http://i43.servimg.com/u/f43/17/43/09/69/dislik11.png" />'))
})
}
});
```


Được sửa bởi notme ngày Fri Aug 31, 2012 1:14 pm; sửa lần 1.