Demo: http://thewanted.yourme.net/t24-topic#51
(Code không bao gồm level nhân vật trong demo onl)
![http://i37.servimg.com/u/f37/16/17/21/93/level10.png](http://i37.servimg.com/u/f37/16/17/21/93/level10.png)


Bước 1: - Vào Admin Panel -> Quản lý người dùng & Quản lý nhóm -> Quản lý người dùng -> Profiles -> Thay đổi:
```

Tổng số bài gửi >> Posts
Points >> Points
Reputation >> Thanked

```
Không cần di chuyển.

Bước 2: Tạo js:

```


function miarank(Posts, Coins, Thanked) {
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
$(this).parent().children('.post-container').children().children().children('.postprofile-details.postdetails').children('dd:eq(1)').html(miarank(Posts, Coins, Thanked)).addClass('leveli')
})
});```



Mọi người test thử nhé.

Các bạn để ý đoạn code này:
```

$(function () {
$(".post-container").each(function () {
var x = $(this).find(".postprofile-details dd:last").html(),
Posts = x.substring(x.indexOf("Posts") + 21),
Posts = Posts.substring(0, Posts.indexOf("Points") - 39),
Coins = x.substring(x.indexOf("Points") + 22),
Coins = Coins.substring(0, Coins.indexOf("Thanked") - 39),
Thanked = x.substring(x.indexOf("Thanked") + 23),
Thanked = Thanked.substring(0, Thanked.indexOf("Join date") - 39);
$(this).parent().children('.post-container').children().children().children('.postprofile-details.postdetails').children('dd:eq(1)').html(miarank(Posts, Coins, Thanked)).addClass('leveli')
})
});```


> Sửa chữ Join date thành tên mục đứng sau Thanked trong Profile của bạn.
> Sửa các số in đậm và gạch dưới trong đoạn code trên.


Nếu các bạn không biết sửa như thế nào,
Mình sẽ nói đơn giản như sau:

> Số in đậm là số kí tự đếm từ trái qua phải (bắt đầu từ chữ in nghiêng cùng dòng).
> Số gạch dưới là số kí tự đếm từ phải qua trái (bắt đầu từ chữ in nghiêng cùng dòng).



VD: Như ở post này: http://thewanted.yourme.net/t26-topic#62 thì đoạn code hiển thị Profile đó là:


Unknown end tag for &lt;/code&gt;


> <dd><span><span>Giới tính</span>: </span><img src='http://i40.servimg.com/u/f40/17/70/31/89/icon_m12.gif' alt='Nữ' title='Nữ'><br><span><span>Posts</span>: </span>11<br><span><span>Points</span>: </span>15<br><span><span>Thanked</span>: </span>4<br><span><span>Join date</span>: </span>29/11/2012<br>

Unknown end tag for </dd>

<br>
<br>
<br>
Unknown end tag for </code><br>
<br>
<br>
<br>
Unknown end tag for </code><br>
<br>
<br>
(Các bạn viewsource phần Profile của các bạn)</li></ul>


Với đoạn ở trên, để lấy ra số Posts (số 11) thì phải đếm 2 lần:<br>
<br>
<blockquote>Đếm từ trái qua phải bắt đầu từ chữ Posts (lấy kí tự in đậm) ~ Bao gồm 21 kí tự:<br>
<pre><code><br>
Posts<br>
<br>
Unknown end tag for &lt;/span&gt;<br>
<br>
: <br>
<br>
Unknown end tag for &lt;/span&gt;<br>
<br>
<br>
</code></pre></blockquote>

<blockquote>Đếm từ phải qua trái bắt đầu từ chữ Points (lấy kí tự gạch dưới) ~ Bao gồm 39 kí tự:<br>
<pre><code><br>
&lt;br&gt;&lt;span&gt;&lt;span style="color:#0080ff;"&gt;<br>
</code></pre>
(Đếm cả kí tự cách)</blockquote>


Các bạn đếm tương tự để lấy ra số Ponts và số Thanked,<br>
khi nào nó hiện có nghĩa là các bạn đã đếm đúng Mắc cỡ