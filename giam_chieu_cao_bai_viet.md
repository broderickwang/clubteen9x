rst topic message reminder :

Tính năng:
Thiết lập một chiều cao maxium 350px cho bài viết.
Trơn trượt có hiệu lực.
Chuyển chế độ On / Off tùy chọn.
Instruction:
Display Pictures and Colors Colors CSS Stylesheet:

```


/* Reduce the height of topic starter's post - en.FMvi.org */
.baivietdai{overflow:hidden}
.thugon span:hover{text-shadow:1px 1px 1px #000;cursor:pointer}
.thugon{background-color:#F6FF9D;border:3px double #0668AD;clear:both;margin:0;padding:2px 10px}
.viewfull{background:url(//ssl.gstatic.com/ui/v1/zippy/arrow_down.png) no-repeat scroll 3px 7px transparent;padding:0 15px}
.viewhide{display:none;background:url(//ssl.gstatic.com/ui/v1/icons/mail/arrow_up.png)
no-repeat scroll 3px 7px transparent;padding:0 15px}
.fullOff{background:url(http://i48.servimg.com/u/f48/16/58/89/73/power_11.png)
no-repeat scroll 0 2px transparent;margin-top:-2px;padding:2px 5px 2px
20px}
.fullOn{display:none;background:url(http://i48.servimg.com/u/f48/16/58/89/73/power_10.png)
no-repeat scroll 0 2px transparent;margin-top:-2px;padding:2px 5px 2px
20px}
```

Modules HTML & JAVASCRIPT Javascript codes management Placement : In the topics
For phpBB3

```


var CopyrightNotice = 'Copyright © by FmVi.
All Rights Reserved. Use, modification, and/or distribution of this
script is not allowed without direct permission from
Zero(robot_boy2018@yahoo.com). This entire copyright notice must remain
in the original, copied, or modified script';
$(function () {
$(".postbody .content").each(function () {
if ($(this).height() >= 350) {

$(this).after('<p class="thugon"><span
class="viewfull">Xem toàn bộ

Unknown end tag for &lt;/span&gt;

<span
class="viewhide">Thu gọn

Unknown end tag for &lt;/span&gt;

<span class="fullOff"
style="float:right">Tắt chức năng thu gọn

Unknown end tag for &lt;/span&gt;

<span
class="fullOn" style="float:right">Bật chức năng thu
gọn

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/p&gt;

');
$(this).addClass("baivietdai");
$(".baivietdai").height(315);
}
});
if (my_getcookie("thugonbaiviet") == "yes") {
$(".fullOn, .viewhide").show();
$(".fullOff, .viewfull").hide();
$(".baivietdai").height("100%");
}
$(".viewfull").click(function () {
$(this).parent().prev().height("100%");
$(this).hide().next().show();
});
$(".viewhide").click(function () {
$(this).parent().prev().animate({
height: "315px"
}, 1000);
$(this).hide().prev().show();
});
$(".fullOff").click(function () {
my_setcookie("thugonbaiviet", "yes", true);
$(".baivietdai").height("100%");
$(".fullOn, .viewhide").show();
$(".fullOff, .viewfull").hide();
});
$(".fullOn").click(function () {
my_setcookie("thugonbaiviet", "no", true);
$(".baivietdai").animate({
height: "315px"
}, 1000);
$(".fullOn, .viewhide").hide();
$(".fullOff, .viewfull").show();
});
});```


For punBB and Invision

```


var CopyrightNotice = 'Copyright © by FmVi.
All Rights Reserved. Use, modification, and/or distribution of this
script is not allowed without direct permission from
Zero(robot_boy2018@yahoo.com). This entire copyright notice must remain
in the original, copied, or modified script';
$(function () {
$(".postbody .post-entry").each(function () {
if ($(this).height() >= 350) {

$(this).after('<p class="thugon"><span
class="viewfull">Xem toàn bộ

Unknown end tag for &lt;/span&gt;

<span
class="viewhide">Thu gọn

Unknown end tag for &lt;/span&gt;

<span class="fullOff"
style="float:right">Tắt chức năng thu gọn

Unknown end tag for &lt;/span&gt;

<span
class="fullOn" style="float:right">Bật chức năng thu
gọn

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/p&gt;

');
$(this).addClass("baivietdai");
$(".baivietdai").height(315);
}
});
if (my_getcookie("thugonbaiviet") == "yes") {
$(".fullOn, .viewhide").show();
$(".fullOff, .viewfull").hide();
$(".baivietdai").height("100%");
}
$(".viewfull").click(function () {
$(this).parent().prev().height("100%");
$(this).hide().next().show();
});
$(".viewhide").click(function () {
$(this).parent().prev().animate({
height: "315px"
}, 1000);
$(this).hide().prev().show();
});
$(".fullOff").click(function () {
my_setcookie("thugonbaiviet", "yes", true);
$(".baivietdai").height("100%");
$(".fullOn, .viewhide").show();
$(".fullOff, .viewfull").hide();
});
$(".fullOn").click(function () {
my_setcookie("thugonbaiviet", "no", true);
$(".baivietdai").animate({
height: "315px"
}, 1000);
$(".fullOn, .viewhide").hide();
$(".fullOff, .viewfull").show();
});
});

```

For phpBB2

```


var CopyrightNotice = 'Copyright © by FmVi.
All Rights Reserved. Use, modification, and/or distribution of this
script is not allowed without direct permission from
Zero(robot_boy2018@yahoo.com). This entire copyright notice must remain
in the original, copied, or modified script';
$(function () {
$(".postbody").find("div:first").each(function () {
if ($(this).height() >= 350) {

$(this).after('<p class="thugon"><span
class="viewfull">Xem toàn bộ

Unknown end tag for &lt;/span&gt;

<span
class="viewhide">Thu gọn

Unknown end tag for &lt;/span&gt;

<span class="fullOff"
style="float:right">Tắt chức năng thu gọn

Unknown end tag for &lt;/span&gt;

<span
class="fullOn" style="float:right">Bật chức năng thu
gọn

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/p&gt;

');
$(this).addClass("baivietdai");
$(".baivietdai").height(315);
}
});
if (my_getcookie("thugonbaiviet") == "yes") {
$(".fullOn, .viewhide").show();
$(".fullOff, .viewfull").hide();
$(".baivietdai").height("100%");
}
$(".viewfull").click(function () {
$(this).parent().prev().height("100%");
$(this).hide().next().show();
});
$(".viewhide").click(function () {
$(this).parent().prev().animate({
height: "315px"
}, 1000);
$(this).hide().prev().show();
});
$(".fullOff").click(function () {
my_setcookie("thugonbaiviet", "yes", true);
$(".baivietdai").height("100%");
$(".fullOn, .viewhide").show();
$(".fullOff, .viewfull").hide();
});
$(".fullOn").click(function () {
my_setcookie("thugonbaiviet", "no", true);
$(".baivietdai").animate({
height: "315px"
}, 1000);
$(".fullOn, .viewhide").hide();
$(".fullOff, .viewfull").show();
});
});
```

Website: