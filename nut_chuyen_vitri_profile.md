![http://a.imageshack.us/img20/3305/19254677.jpg](http://a.imageshack.us/img20/3305/19254677.jpg)



Vào Javascript codes management tạo Javascript mới :
Title **: Chuyển vị trí pro5.
Placement : In the topics.
Javascript Code** : cho phpbb3

```

//Script for ESF. Copyright © 2011 by Dion Designs. All Rights Reserved.
function setprofile(loc) {
if (loc == 'left') {
$('.postprofile').css({
'float': 'left',
'border-left': 'none',
'border-right': '1px solid #ffffff'
});
$('.postprofile dl').css('margin', '0px 8px 0px 0px');
$('.postbody').css('float', 'right')
} else {
$('.postprofile').css({
'float': 'right',
'border-left': '1px solid #ffffff',
'border-right': 'none'
});
$('.postprofile dl').css('margin', '0px 0px 0px 8px');
$('.postbody').css('float', 'left')
}
}
function toggleprofile() {
var x = my_getcookie('prloc');
if (x == 'left') {
x = 'right'
} else {
x = 'left'
}
my_setcookie('prloc', x, true);
setprofile(x)
}
$(function () {
if (!document.getElementById('blog_comments') && $('.addthis_button')[0]) {
$('.addthis_button').eq(0).before('<button class="button2" title="Toggle post profile location" onfocus="this.blur()" onclick="toggleprofile()"><img style="padding:0px 2px;" src="http://illiweb.com/fa/edit.png" />

Unknown end tag for &lt;/button&gt;

 • ');
var x = my_getcookie('prloc');
if (x == null) {
x = 'left'
}
my_setcookie('prloc', x, true);
setprofile(x)
}
});


```
Javascript Code **: cho Invision**

```

//Script for ESF. Copyright © 2011 by Dion Designs. All Rights Reserved.
function setprofile(loc) {
prloc = loc;
if (loc == 'left') {
$('.postprofile').css({
'float': 'left',
'margin': '0px 0px 0px -18em'
});
$('.post-container').css('margin', '0px 0px 0px 18em');
} else {
$('.postprofile').css({
'float': 'right',
'margin': '0px -18em 0px 0px'
});
$('.post-container').css('margin', '0px 18em 0px 0px');
}
}
function toggleprofile() {
var x = my_getcookie('prloc');
var x = prloc;
if (x == 'left') {
x = 'right';
} else {
x = 'left';
}
my_setcookie('prloc', x, true);
setprofile(x);
}
$(function () {
if (!document.getElementById('blog_comments') && $('.addthis_button')[0]) {
$('.addthis_button').eq(0).before('<button class="button2" title="Toggle post profile location" onclick="toggleprofile();"><img style="margin:0px 2px;" src="http://illiweb.com/fa/edit.png" />

Unknown end tag for &lt;/button&gt;

');
var x = my_getcookie('prloc');
if (x == null) {
x = 'left'
}
my_setcookie('prloc', x, true);
setprofile(x)
}
});


```