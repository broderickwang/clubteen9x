Cách làm :
> Vào Javascript codes management tạo Javascript mới :
> Title **: tùy ý.
> Placement : In the topics.
> Javascript Code** : cho phpbb3

```


//Professional like/dislike bar. Copyright © 2011 by Dion Designs. All Rights Reserved.
$(function () {
$('#main-content').prepend('<style type="text/css">ul.profile-icons li.ddvote{height:20px;line-height:20px;background:#ffffff;border:1px solid #a0b0c0;font-size:12px;font-weight:bold}ul.profile-icons li.ddvote a{display:inline}.postbody ul.profile-icons li.ddvote img{cursor:default;vertical-align:middle}.postbody ul.profile-icons li.ddvote a img{cursor:pointer}

Unknown end tag for &lt;/style&gt;

');
var x = $('.vote').get();
for (i = x.length - 1; i >= 0; i--) {
var plus = '0';
var minus = '0';

var vplus = '<img style="position:relative;top:-3px;margin-right:3px" title="Like" src="/users/2315/72/47/45/smiles/434257.gif" />';
var vminus = '<img style="margin:0px 3px 0px 10px" title="Dislike" src="/users/2315/72/47/45/smiles/451227.gif" />';

var y = $(x[i]).find('.vote-button a').get();
for (j = 0; j < y.length; j++) {
if (y[j].innerHTML == '+') {
vplus = '<a href="' + y[j].href + '">' + vplus + '

Unknown end tag for &lt;/a&gt;

';
} else if (y[j].innerHTML == '-') {
vminus = '<a href="' + y[j].href + '">' + vminus + '

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
if (x[i].parentNode.parentNode.parentNode.className == 'module row1') {
$(x[i].parentNode).find('.profile-icons').prepend('<li class="ddvote"> ' + vplus + plus + vminus + minus + ' <li>');
$(x[i].parentNode).find('.h3').css('border', 'none');
} else {
$(x[i].parentNode.childNodes[0]).prepend('<li class="ddvote"> ' + vplus + plus + vminus + minus + ' <li>');
}
x[i].parentNode.removeChild(x[i]);
}
});

```
> Javascript Code **: cho Invision**```


//Professional like/dislike bar. Copyright © 2011 by Dion Designs. All Rights Reserved.
$(function () {
$('#main-content').prepend('<style type="text/css">ul.post-info li.ddvote{height:20px;line-height:20px;background:#ffffff;border:1px solid #a0b0c0;font-size:12px;font-weight:bold;}

Unknown end tag for &lt;/style&gt;

');
var x = $('.vote').get();
for (i = x.length - 1; i >= 0; i--) {
var plus = '0';
var minus = '0';

var vplus = '<img style="position:relative;top:-3px;margin-right:3px" title="Like" src="/users/2315/72/47/45/smiles/434257.gif" />';
var vminus = '<img style="margin:0px 3px 0px 10px" title="Dislike" src="/users/2315/72/47/45/smiles/451227.gif" />';

var y = $(x[i]).find('.vote-button a').get();
for (j = 0; j < y.length; j++) {
if (y[j].innerHTML == '+') {
vplus = '<a href="' + y[j].href + '">' + vplus + '

Unknown end tag for &lt;/a&gt;

';
} else if (y[j].innerHTML == '-') {
vminus = '<a href="' + y[j].href + '">' + vminus + '

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
$(x[i].parentNode.previousSibling.childNodes[0]).prepend('<li class="ddvote"> ' + vplus + plus + vminus + minus + ' <li>');
x[i].parentNode.removeChild(x[i]);
}
});
```

> mình gắn tạm 2 icon này Smile Sad . các bạn sửa link ảnh trong code cho vừa ý. Nếu muốn trang trí lại thì cũng sửa đoạn CSS trong CODE luôn nha.



Nguồn : Dion Designs - http://diondesigns.forumotion.com/t1338-
Chúc thành công ^^.