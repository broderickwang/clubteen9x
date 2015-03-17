Demo Online: http://blogger.chinhphuc.info/t319-topic
![http://i37.servimg.com/u/f37/16/17/21/93/level10.png](http://i37.servimg.com/u/f37/16/17/21/93/level10.png)
Lưu ý: Code level được viết lại bởi notme và được mình chỉnh sửa thêm một số cái. Dùng được cho cả 4 phiên bản: punbb, phpbb2, phpbb3, invision.
Cách làm:
Bước 1:
- Vào Admin Panel -> Quản lý người dùng & Quản lý nhóm -> Quản lý người dùng -> Profiles -> Di chuyển Tổng số bài gửi, Points, Reputation lên trên cùng theo thứ tự trên xuống là: Tổng số bài gửi -> Points -> Reputation (Lưu ý: Ba cái này các bạn đặt tên gì cũng được chứ không bị vướng mắc như thanh level của thuan007)
Bước 2:
- Display -> Templates -> Quản lý tổng thể -> Viewtopic\_body. Tìm:
```

<script type="text/javascript">//<![CDATA[
var multiquote_img_off
...
//]]>


Unknown end tag for &lt;/script&gt;


```

Và thay bằng:

```

<script type="text/javascript">//<![CDATA[
var multiquote_img_off = '{JS_MULTIQUOTE_IMG_OFF}', multiquote_img_on = '{JS_MULTIQUOTE_IMG_ON}', _atr = '{JS_DIR}addthis/', _ati = '{PATH_IMG_FA}addthis/'{ADDTHIS_LANG}, addthis_localize = { share_caption: "{L_SHARE_CAPTION}", email: "{L_EMAIL}", email_caption: "{L_EMAIL_CAPTION}", favorites: "{L_SHARE_BOOKMARKS}", print: "{L_PRINT}", more: "{L_MORE}" };
$(function(){
_atc.cwait = 0;
$('.addthis_button').mouseup(function(){
if ($('#at15s').css('display') == 'block') {
addthis_close();
addthis_close();
}
});
});
var code="Copyright By notme. Edit by IceFox";
function level(Posts,Coins,Thanked){var d=(Posts*10+Coins*5);var e=(d/1500);var f=Math.floor((e-Math.floor(e))*100);var g=Math.floor(e+parseInt(1));if(g<2){(g="1 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'>]")};if(g<3){(g="2 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'>]")};if(g<4){(g="3 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'>]")};if(g<5){(g="4 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'>]")};if(g<6){(g="5 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'>]")};if(g<7){(g="6 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_yell10.gif'>]")};if(g<8){(g="7 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'>]")};if(g<9){(g="8 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'>]")};if(g<10){(g="9 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'>]")};if(g<11){(g="10 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'>]")};if(g<12){(g="11 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'>]")};if(g<13){(g="12 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_red10.gif'>]")};if(g<14){(g="13 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'>]")};if(g<15){(g="14 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'>]")};if(g<16){(g="15 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'>]")};if(g<17){(g="16 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'>]")};if(g<18){(g="17 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'>]")};if(g<19){(g="18 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_grey10.gif'>]")};if(g<20){(g="19 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'>]")};if(g<21){(g="20 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'>]")};if(g<22){(g="21 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'>]")};if(g<23){(g="22 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'>]")};if(g<24){(g="23 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'>]")};if(g<25){(g="24 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_gree10.gif'>]")};if(g<26){(g="25 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'>]")};if(g<27){(g="26 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'>]")};if(g<28){(g="27 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'>]")};if(g<29){(g="28 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'>]")};if(g<30){(g="29 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'>]")};if(g<31){(g="30 [<img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'><img src='http://i34.servimg.com/u/f34/17/54/83/01/s_blue10.gif'>]")&&(f="99")};var h=(Math.floor((Thanked*10)+(Posts*2)+(Coins*1)));if(h>8000){h=8000};if(d>25000){(d=25000)};var i=(Math.floor((h/8000)*100)-2);var j=(Math.floor((d/25000)*100)-2);document.write('<fieldset style="padding:7px;width: 157px;border: 0px solid #D4D4D4;color: gray;font-size: 7pt;border-radius: 2px;"><legend><font color="red"><b>Cấp độ : '+g+'

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/legend&gt;

<b><font color=orange> Tài năng : 

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/b&gt;

('+d+' / 25000)<div class="strengthbg"><div class="strengthbg2"><fieldset style="padding: 1px;border: 1px solid #666;border-radius: 3px 3px 3px 3px;"><img src="/users/2211/12/43/96/album/orange10.gif" width="'+j+'%" title="'+d+'" height="9px"><img src="/users/2211/12/43/96/album/hp1010.gif" width="2px" title="'+d+'" height="9px">

Unknown end tag for &lt;/fieldset&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<b><font color=green> Uy tín : 

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/b&gt;

('+h+' / 8000)<div class="abilitybg"><div class="abilitybg2"><fieldset style="padding: 1px;border: 1px solid #666;border-radius: 3px 3px 3px 3px;"><img src="/users/2211/12/43/96/album/green110.gif" width="'+i+'%" title="'+h+'" height="9px"><img src="/users/2211/12/43/96/album/mp1010.gif" width="2px" title="'+h+'" height="9px">

Unknown end tag for &lt;/fieldset&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<font color=RoyalBlue1> <b>Kinh nghiệm :

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/font&gt;

 '+f+'%<div class="expbg"><div class="expbg2"><fieldset style="padding: 1px;border: 1px solid #666;border-radius: 3px 3px 3px 3px;"><img src="/users/2211/12/43/96/album/blue10.gif" width="'+(f-1)+'%" title="'+(f)+'%" height="9px"><img src="/users/2211/12/43/96/album/exp1010.gif" width="2px" title="'+(f)+'%" height="9px">

Unknown end tag for &lt;/fieldset&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/fieldset&gt;

')};
//]]>


Unknown end tag for &lt;/script&gt;



```
Bước 3:
Đặt code này vào chỗ bạn muốn hiện thanh level trong viewtopic\_body:

```

<br /><script>level(<!-- BEGIN profile_field -->'{postrow.displayed.profile_field.CONTENT}',<!-- END profile_field -->1);

Unknown end tag for &lt;/script&gt;


```

Có thể đặt dưới:

```

{postrow.displayed.POSTER_AVATAR}
```

Bước 4: Trải nghiệm nhíu mày
À quên, lưu ý với phiên bản phpbb3 với invision thì chèn vào bằng javascript nhé. Cái đó ai cần thì notme chỉ sau. Jquery mình tệ lắm Ko nhìn Gian xảo

Cách khác cho Invision - by miamor
Để làm cho Invision:

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
})

```

Demo online: http://thewanted.yourme.net/t24-topic#51
(Code không bao gồm level nhân vật trong demo)
Mọi người test thử nhé.

P/s: Do IceFox lấy title là cho cả 4 ver nên mình post luôn vào đây.
Có gì thì min mod split bài mình ra topic mới, hoặc không thì gộp giùm mình bài này vói bài a lôi luôn cx được.
Giới hạn max level là 30:
Các bạn tìm đoạn sau:

```

...if(g<31){(g="30 [...
```

Sửa lại thành thế này:


> ```
  ...if(g>29){(g="30 [...```