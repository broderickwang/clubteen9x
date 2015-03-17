Demo: http://thewanted.yourme.net/t20-topic#45


Bước 1: Tạo file js mới, đặt In the topics


```


function miarank(a, b, Posts, Coins, Thanked) {
up = 60;
cong = 0;
gt = a;
sex = "boy/";
lv = Math.ceil(b / up) + cong;
exp = Math.round(100 / up * (b % up)); - 1 == gt.indexOf("Nam") && (sex = "girl/");
20 < lv && (lv = 20, exp = 99);
var d = (Posts * 10 + Coins * 5);
var e = (d / 1500);
var f = Math.floor((e - Math.floor(e)) * 100);
var g = Math.floor(e + parseInt(1));
if(g < 2) {
(g = "1 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'>]")
};
if(g < 3) {
(g = "2 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'>]")
};
if(g < 4) {
(g = "3 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'>]")
};
if(g < 5) {
(g = "4 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'>]")
};
if(g < 6) {
(g = "5 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'>]")
};
if(g < 7) {
(g = "6 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'>]")
};
if(g < 8) {
(g = "7 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'>]")
};
if(g < 9) {
(g = "8 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'>]")
};
if(g < 10) {
(g = "9 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'>]")
};
if(g < 11) {
(g = "10 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'>]")
};
if(g < 12) {
(g = "11 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'>]")
};
if(g < 13) {
(g = "12 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'>]")
};
if(g < 14) {
(g = "13 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'>]")
};
if(g < 15) {
(g = "14 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'>]")
};
if(g < 16) {
(g = "15 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'>]")
};
if(g < 17) {
(g = "16 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'>]")
};
if(g < 18) {
(g = "17 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'>]")
};
if(g < 19) {
(g = "18 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'>]")
};
if(g < 20) {
(g = "19 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'>]")
};
if(g < 21) {
(g = "20 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'>]")
};
if(g < 22) {
(g = "21 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'>]")
};
if(g < 23) {
(g = "22 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'>]")
};
if(g < 24) {
(g = "23 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'>]")
};
if(g < 25) {
(g = "24 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'>]")
};
if(g < 26) {
(g = "25 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'>]")
};
if(g < 27) {
(g = "26 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'>]")
};
if(g < 28) {
(g = "27 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'>]")
};
if(g < 29) {
(g = "28 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'>]")
};
if(g < 30) {
(g = "29 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'>]")
};
if(g < 31) {
(g = "30 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'>]") && (f = "99")
};
var h = (Math.floor((Thanked * 10) + (Posts * 2) + (Coins * 1)));
if(h > 8000) {
h = 8000
};
if(d > 25000) {
(d = 25000)
};
var i = (Math.floor((h / 8000) * 100) - 2);
var j = (Math.floor((d / 25000) * 100) - 2);
return '<div class="memchar" style="background-image:url(http://i264.photobucket.com/albums/ii175/kalenv/character/' + sex + lv + '.gif)">

Unknown end tag for &lt;/div&gt;

<fieldset align="left" style="float:left;text-align:left;padding:7px;width: 157px;border: 1px solid #D4D4D4;color: gray;font-size: 7pt;border-radius: 2px;margin-left:-10px"><legend><font color="red"><b> ' + gt + '  Cấp độ : ' + g + ' 

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/legend&gt;

<b><font color=orange> Tài năng : 

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/b&gt;

(' + d + ' / 25000)<div class="strengthbg"><div class="strengthbg2"><fieldset style="padding: 1px;border: 1px solid #666;border-radius: 3px 3px 3px 3px;"><img src="/users/2211/12/43/96/album/orange10.gif" width="' + j + '%" title="' + d + '" height="9px"><img src="/users/2211/12/43/96/album/hp1010.gif" width="2px" title="' + d + '" height="9px">

Unknown end tag for &lt;/fieldset&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<b><font color=green> Uy tín : 

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/b&gt;

(' + h + ' / 8000)<div class="abilitybg"><div class="abilitybg2"><fieldset style="padding: 1px;border: 1px solid #666;border-radius: 3px 3px 3px 3px;"><img src="/users/2211/12/43/96/album/green110.gif" width="' + i + '%" title="' + h + '" height="9px"><img src="/users/2211/12/43/96/album/mp1010.gif" width="2px" title="' + h + '" height="9px">

Unknown end tag for &lt;/fieldset&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<font color=RoyalBlue1> <b>Kinh nghiệm :

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/font&gt;

 ' + f + '%<div class="expbg"><div class="expbg2"><fieldset style="padding: 1px;border: 1px solid #666;border-radius: 3px 3px 3px 3px;"><img src="/users/2211/12/43/96/album/blue10.gif" width="' + (f - 1) + '%" title="' + (f) + '%" height="9px"><img src="/users/2211/12/43/96/album/exp1010.gif" width="2px" title="' + (f) + '%" height="9px">

Unknown end tag for &lt;/fieldset&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/fieldset&gt;

'
}
$(function () {
$(".post-container").each(function () {
var x = $(this).find(".postprofile-details dd:last").html(),
Posts = x.substring(x.indexOf("Posts") + 21),
Posts = Posts.substring(0, Posts.indexOf("Points") - 39),
Coins = x.substring(x.indexOf("Points") + 22),
Coins = Coins.substring(0, Coins.indexOf("Thanked") - 39),
Thanked = x.substring(x.indexOf("Thanked") + 23),
Thanked = Thanked.substring(0, Thanked.indexOf("Join date") - 39);
var a = $(this).find(".postprofile-details dd:last").html(),
a = a.substring(a.indexOf("<img")),
b = a.substring(0, a.indexOf('">') + 2),
a = a.substring(a.indexOf("Posts<") + 21),
a = a.substring(0, a.indexOf("<br"));
$(this).parent().children('.post-container').children().children().children('.postprofile-details.postdetails').children('dd:eq(1)').html(miarank(b, a, Posts, Coins, Thanked)).addClass('leveli')
})
});

```

Bước 2 QUẢN LÝ NGƯỜI DÙNG & QUẢN LÝ NHÓM >> Quản lý người dùng >> Profiles, chỉnh như sau:

![http://i15.servimg.com/u/f15/17/70/31/89/profi10.png](http://i15.servimg.com/u/f15/17/70/31/89/profi10.png)
![http://i15.servimg.com/u/f15/17/70/31/89/gender10.png](http://i15.servimg.com/u/f15/17/70/31/89/gender10.png)
```

Mục Giới tính, mục Posts, mục Points, và mục Thanked các bạn phải đăt như hình, mục Giới tính ở vị trí 1, mục Posts ở mục 2, mục Points ở vị trí 3, mục Thanked ở vị trí 4, tên 4 mục phải được đặt như thế.
Mục Giới tính phải được Cài đặt Y XÌ như trong hình. 2 mục chọn:
http://i40.servimg.com/u/f40/17/70/31/89/icon_m11.gif - Nam
http://i40.servimg.com/u/f40/17/70/31/89/icon_m12.gif - Nữ
4 mục này phần Color phải có màu. Màu gì cũng được, nhưng phải có màu.

```

Chúc mọi người một ngày mới vui vẻ! Một năm mới vui vẻ!