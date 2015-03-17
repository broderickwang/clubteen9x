Bước 1: Vào quản lý người dùng & quản lý nhóm -> Profiles -> Profile "Tổng bài gửi" đổi tên thành "Posts"
"Points" đổi tên thành "Coins"
"Reputation" đổi tên thành "Thanked"
Sắp xếp 3 mục Posts, Coins, Thanked theo thứ tự và lưu ý phải để trên cùng của Profile.
Bước 2:
Module >points and reputation > Point system
![http://a.imageshack.us/img842/8845/bf0be36cc0854f119d70111.png](http://a.imageshack.us/img842/8845/bf0be36cc0854f119d70111.png)
Module >points and reputation > Reputation > general options
![http://a.imageshack.us/img821/2523/b808f0aab5e2486db55c871.png](http://a.imageshack.us/img821/2523/b808f0aab5e2486db55c871.png)
Module >points and reputation > Reputation > reputation management
![http://a.imageshack.us/img687/171/ddde05ad30bd41a191cb999.png](http://a.imageshack.us/img687/171/ddde05ad30bd41a191cb999.png)
Bước 3:
Vào viewtopic\_body tìm đoạn:

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
//]]>


Unknown end tag for &lt;/script&gt;


```

Thay bằng:

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
var code="Copyright By notme.";
function level(Posts,Coins,Thanked){var d=(Posts*10+Coins*5);var e=(d/1500);var f=Math.floor((e-Math.floor(e))*100);var g=Math.floor(e+parseInt(1));if(g>30){(g="30 - MAX")&&(f="99")};var h=(Math.floor((Thanked*10)+(Posts*2)+(Coins*1)));if(h>8000){h=8000};if(d>25000){(d=25000)};var i=(Math.floor((h/8000)*100)-2);var j=(Math.floor((d/25000)*100)-2);document.write('<fieldset style="padding:7px;background:#fff;width: 137px;border: 1px solid #ccc;color: gray;font-size: 7pt;border-radius: 3px 3px 3px 3px;"><legend><font color="red"><b>Cấp độ : '+g+'

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/legend&gt;

<font color=RoyalBlue1> Kinh nghiệm :

Unknown end tag for &lt;/font&gt;

 '+f+'%<div class="expbg"><div class="expbg2"><fieldset style="padding: 1px;border: 1px solid #ccc;border-radius: 3px 3px 3px 3px;"><img src="/users/2211/12/43/96/album/blue10.gif" width="'+(f-1)+'%" height="9px"><img src="/users/2211/12/43/96/album/exp1010.gif" width="2px" height="9px">

Unknown end tag for &lt;/fieldset&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<b><font color=orange> Tài năng : 

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/b&gt;

('+d+'/25000)<div class="strengthbg"><div class="strengthbg2"><fieldset style="padding: 1px;border: 1px solid #ccc;border-radius: 3px 3px 3px 3px;"><img src="/users/2211/12/43/96/album/orange10.gif" width="'+j+'%" height="9px"><img src="/users/2211/12/43/96/album/hp1010.gif" width="2px" height="9px">

Unknown end tag for &lt;/fieldset&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<b><font color=green> Uy tín : 

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/b&gt;

('+h+'/8000)<div class="abilitybg"><div class="abilitybg2"><fieldset style="padding: 1px;border: 1px solid #ccc;border-radius: 3px 3px 3px 3px;"><img src="/users/2211/12/43/96/album/green110.gif" width="'+i+'%" height="9px"><img src="/users/2211/12/43/96/album/mp1010.gif" width="2px" height="9px">

Unknown end tag for &lt;/fieldset&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/fieldset&gt;

')};
//]]>


Unknown end tag for &lt;/script&gt;


```


Bước 4: Tìm vị trí cần đặt thanh level và quăng code này vào jocolor


> ```

<script>  level(<!-- BEGIN profile_field -->'{postrow.displayed.profile_field.CONTENT}',<!-- END profile_field -->1);

Unknown end tag for &lt;/script&gt;

```