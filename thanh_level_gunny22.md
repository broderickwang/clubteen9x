Demo:
![http://i14.servimg.com/u/f14/16/58/45/96/3410.jpg](http://i14.servimg.com/u/f14/16/58/45/96/3410.jpg)
Thông tin :
áp dụng thanh lv của Ice fox
http://www.cntt-k3.org/t1539-topic

Nên dùng với vewtopic\_ngang cho nhiều diện tích ở topic dưới
http://www.cntt-k3.org/t7077-topic
Ở đây mình share luôn 3 thanh lv ngang + 1 level Gunny nhá ^^





Bước 1 : vào vewtopic\_body tìm code sau :


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

Và thay thế nó = code sau


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
function level(Posts,Coins,Thanked){var d=(Posts*20+Coins*15);var e=(d/1500);var f=Math.floor((e-Math.floor(e))*100);var g=Math.floor(e+parseInt(1));if(g<2){(g="1 [<img src='http://img.zing.vn/union/client/gunny/level-image/1.png'>]")};if(g<3){(g="2 [<img src='http://img.zing.vn/union/client/gunny/level-image/2.png'>]")};if(g<4){(g="3 [<img src='http://img.zing.vn/union/client/gunny/level-image/3.png'>]")};if(g<5){(g="4 [<img src='http://img.zing.vn/union/client/gunny/level-image/4.png'>]")};if(g<6){(g="5 [<img src='http://img.zing.vn/union/client/gunny/level-image/5.png'>]")};if(g<7){(g="6 <img src='http://img.zing.vn/union/client/gunny/level-image/6.png'>")}; if(g<8){(g="7 <img src='http://img.zing.vn/union/client/gunny/level-image/7.png'>]")};if(g<9){(g="8 <img src='http://img.zing.vn/union/client/gunny/level-image/8.png'>]")};if(g<10){(g="9 <img src='http://img.zing.vn/union/client/gunny/level-image/9.png'>]")};if(g<11){(g="10 <img src='http://img.zing.vn/union/client/gunny/level-image/10.png'>]")};if(g<12){(g="11 <img src='http://img.zing.vn/union/client/gunny/level-image/11.png'>]")};if(g<13){(g="12 <img src='http://img.zing.vn/union/client/gunny/level-image/12.png'>]")};if(g<14){(g="13 <img src='http://img.zing.vn/union/client/gunny/level-image/13.png'>]")};if(g<15){(g="14 <img src='http://img.zing.vn/union/client/gunny/level-image/14.png'>]")};if(g<16){(g="15 <img src='http://img.zing.vn/union/client/gunny/level-image/15.png'>]")};if(g<17){(g="16 <img src='http://img.zing.vn/union/client/gunny/level-image/16.png'>]")};if(g<18){(g="17 <img src='http://img.zing.vn/union/client/gunny/level-image/17.png'>]")};if(g<19){(g="18 <img src='http://img.zing.vn/union/client/gunny/level-image/18.png'>]")};if(g<20){(g="19 <img src='http://img.zing.vn/union/client/gunny/level-image/19.png'>]")};if(g<21){(g="20 <img src='http://img.zing.vn/union/client/gunny/level-image/20.png'>]")};if(g<22){(g="21 <img src='http://img.zing.vn/union/client/gunny/level-image/21.png'>]")};if(g<23){(g="21 <img src='http://img.zing.vn/union/client/gunny/level-image/22.png'>]")};if(g<24){(g="21 <img src='http://img.zing.vn/union/client/gunny/level-image/23.png'>]")};if(g<25){(g="21 <img src='http://img.zing.vn/union/client/gunny/level-image/24.png'>]")};if(g<26){(g="21 <img src='http://img.zing.vn/union/client/gunny/level-image/25.png'>]")};if(g<27){(g="21 <img src='http://img.zing.vn/union/client/gunny/level-image/26.png'>]")};if(g<28){(g="21 <img src='http://img.zing.vn/union/client/gunny/level-image/27.png'>]")};if(g<29){(g="21 <img src='http://img.zing.vn/union/client/gunny/level-image/28.png'>]")};if(g<30){(g="21 <img src='http://img.zing.vn/union/client/gunny/level-image/29.png'>]")};if(g<31){(g="21 <img src='http://img.zing.vn/union/client/gunny/level-image/30.png'>]")};if(g<32){(g="21 <img src='http://img.zing.vn/union/client/gunny/level-image/31.png'>]")};if(g<33){(g="21 <img src='http://img.zing.vn/union/client/gunny/level-image/32.png'>]")};if(g<34){(g="21 <img src='http://img.zing.vn/union/client/gunny/level-image/33.png'>]")};if(g<35){(g="21 <img src='http://img.zing.vn/union/client/gunny/level-image/34.png'>]")};if(g<36){(g="21 <img src='http://img.zing.vn/union/client/gunny/level-image/35.png'>]")};if(g<37){(g="21 <img src='http://img.zing.vn/union/client/gunny/level-image/36.png'>]")};if(g<38){(g="21 <img src='http://img.zing.vn/union/client/gunny/level-image/37.png'>]")};if(g<39){(g="21 <img src='http://img.zing.vn/union/client/gunny/level-image/38.png'>]")};if(g<40){(g="21 <img src='http://img.zing.vn/union/client/gunny/level-image/39.png'>]")};if(g<41){(g="21 <img src='http://img.zing.vn/union/client/gunny/level-image/40.png'>]")};if(g<42){(g="21 <img src='http://img.zing.vn/union/client/gunny/level-image/41.png'>]")};if(g<43){(g="21 <img src='http://img.zing.vn/union/client/gunny/level-image/42.png'>]")};if(g<44){(g="21 <img src='http://img.zing.vn/union/client/gunny/level-image/43.png'>]")};if(g<45){(g="21 <img src='http://img.zing.vn/union/client/gunny/level-image/44.png'>]")};if(g<46){(g="21 <img src='http://img.zing.vn/union/client/gunny/level-image/45.png'>]")};if(g<47){(g="21 <img src='http://img.zing.vn/union/client/gunny/level-image/46.png'>]")};if(g<48){(g="21 <img src='http://img.zing.vn/union/client/gunny/level-image/47.png'>]")};if(g<49){(g="21 <img src='http://img.zing.vn/union/client/gunny/level-image/48.png'>]")};if(g<50){(g="21 <img src='http://img.zing.vn/union/client/gunny/level-image/49.png'>]")};if(g<51){(g="21 <img src='http://img.zing.vn/union/client/gunny/level-image/50.png'>]")};if(g<52){(g="21 <img src='http://img.zing.vn/union/client/gunny/level-image/51.png'>]")};if(g<50){(g="21 <img src='http://img.zing.vn/union/client/gunny/level-image/52.png'>]")};if(g<54){(g="21 <img src='http://img.zing.vn/union/client/gunny/level-image/49.png'>]")};if(g<55){(g="21 <img src='http://img.zing.vn/union/client/gunny/level-image/54.png'>]")};if(g<56){(g="21 <img src='http://img.zing.vn/union/client/gunny/level-image/55.png'>]")};if(g<57){(g="21 <img src='http://img.zing.vn/union/client/gunny/level-image/56.png'>]")};if(g<58){(g="21 <img src='http://img.zing.vn/union/client/gunny/level-image/57.png'>]")};if(g<59){(g="21 <img src='http://img.zing.vn/union/client/gunny/level-image/58.png'>]")};if(g<60){(g="21 <img src='http://img.zing.vn/union/client/gunny/level-image/59.png'>]")};if(60<g){(g="21 <img src='http://img.zing.vn/union/client/gunny/level-image/60.png'>]")&&(f="60")};var h=(Math.floor((Thanked*10)+(Posts*2)+(Coins*1)));if(h>8000){h=8000};if(d>25000){(d=25000)};var i=(Math.floor((h/8000)*100)-2);var j=(Math.floor((d/25000)*100)-2);document.write('<fieldset style="padding:7px;width: 137px;border: 0px solid #D4D4D4;color: gray;font-size: 7pt;border-radius: 2px;"><legend><font color="red"><span style="font-size: 0px;" class="lv '+g+' "><b><img src="http://i16.servimg.com/u/f16/17/22/61/18/lv10.png">'+g+'

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/legend&gt;

<b><font color=orange> Sức sống : 

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/b&gt;

('+d+' / 25000)<div class="strengthbg"><div class="strengthbg2"><fieldset style="padding: 1px;border: 1px solid #666;border-radius: 3px 3px 3px 3px;"><img src="/users/2211/12/43/96/album/orange10.gif" width="'+j+'%" title="'+d+'" height="9px"><img src="/users/2211/12/43/96/album/hp1010.gif" width="2px" title="'+d+'" height="9px">

Unknown end tag for &lt;/fieldset&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<b><font color=green> Hoạt động : 

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


<script type="text/javascript">//<![CDATA[
var code="Copyright By notme. Edit by Chupy";
function level2(Posts,Coins,Thanked){var d=(Posts*20+Coins*15);var e=(d/1500);var f=Math.floor((e-Math.floor(e))*100);var g=Math.floor(e+parseInt(1));if(g<2){(g="1 <img src='http://i47.servimg.com/u/f47/17/57/92/32/c1410.gif'>")};if(g<3){(g="2 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/1_zps7e1f8d4c.jpg'>")};if(g<4){(g="3 <img src='http://nu7.upanh.com/b3.s35.d4/c9dd4b03581cd48d89e89edbc8c1d4ce_52888377.2.jpg'>")};if(g<5){(g="4 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/3_zps0432eeb5.jpg'>")};if(g<6){(g="5 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/4_zpsf9565735.jpg'>")};if(g<7){(g="6 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/5_zps836628b4.jpg'>")}; if(g<8){(g="7 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/6_zpse3d152d4.jpg'>")};if(g<9){(g="8 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/7_zps4e80c958.jpg'>")};if(g<10){(g="9 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/8_zpse40c2daf.jpg'>")};if(g<11){(g="10 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/9_zps0f80a716.jpg'>")};if(g<12){(g="11 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/10_zps42c509e3.jpg'>")};if(g<13){(g="12 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/11_zpsd421029d.jpg'>")};if(g<14){(g="13 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/12_zpsd639da28.jpg'>]")};if(g<15){(g="14 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/13_zpse34c5edd.jpg'>]")};if(g<16){(g="15 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/14_zps76d85496.jpg'>]")};if(g<17){(g="16 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/15_zps658f0eaa.jpg'>]")};if(g<18){(g="17 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/16_zps9c1dc0c8.jpg'>]")};if(g<19){(g="18 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/17_zps65e9d1fd.jpg'>]")};if(g<20){(g="19 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/18_zps4b3d3bff.jpg'>]")};if(g<21){(g="20 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/19_zpsdf578d26.jpg'>]")};if(g<22){(g="21 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/20_zps58c5cf8e.jpg'>]")};if(g<23){(g="21 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/21_zpsf7b0ef49.jpg'>")};if(g<24){(g="21 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/22_zps4744dabd.jpg'>")};if(g<25){(g="21 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/23_zps9d7d4ff3.jpg'>")};if(g<26){(g="21 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/24_zps6d184003.jpg'>")};if(g<27){(g="21 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/25_zps28c94cbc.jpg'>")};if(g<28){(g="21 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/26_zpsab2a2d02.jpg'>")};if(g<29){(g="21 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/27_zpsaab2799b.jpg'>")};if(g<30){(g="21 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/28_zps030c0345.jpg'>")};if(g<31){(g="21 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/29_zpsb0d1dc95.jpg'>")};if(g<32){(g="21 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/30_zpsbfd5ad50.jpg'>")};if(g<33){(g="21 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/31_zpsba8f4c17.jpg'>")};if(g<34){(g="21 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/32_zps92a45146.jpg'>]")};if(g<35){(g="21 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/33_zps78f513e3.jpg'>]")};if(g<36){(g="21 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/34_zpse58ce920.jpg'>]")};if(g<37){(g="21 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/35_zps39b2dbb1.jpg'>]")};if(g<38){(g="21 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/36_zps228176d3.jpg'>]")};if(g<39){(g="21 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/37_zpsc18243b3.jpg'>]")};if(g<40){(g="21 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/38_zpsa0dae062.jpg'>]")};if(g<41){(g="21 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/39_zps69cd321a.jpg'>]")};if(g<42){(g="21 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/40_zps024c89aa.jpg'>]")};if(g<43){(g="21 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/41_zps997cc300.jpg'>]")};if(g<44){(g="21 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/42_zps594dac9f.jpg'>")};if(g<45){(g="21 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/43_zpsbbdc4807.jpg'>")};if(g<46){(g="21 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/44_zpsf6e74af8.jpg'>]")};if(g<47){(g="21 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/45_zpsd8973420.jpg'>]")};if(g<48){(g="21 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/46_zps495804de.jpg'>]")};if(g<49){(g="21 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/47_zps5203cc7a.jpg'>]")};if(g<50){(g="21 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/48_zps8c8cbde5.jpg'>]")};if(g<51){(g="21 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/49_zps8b1f8820.jpg'>]")};if(g<52){(g="21 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/50_zps80c0fd7f.jpg'>]")};if(g<50){(g="21 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/51_zps74188ecd.jpg'>]")};if(g<54){(g="21 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/52_zps869ba309.jpg'>]")};if(g<55){(g="21 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/53_zps11ebda81.jpg'>]")};if(g<56){(g="21 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/54_zps42681d71.jpg'>]")};if(g<57){(g="21 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/55_zpsacac3640.jpg'>]")};if(g<58){(g="21 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/56_zps9d13c301.jpg'>]")};if(g<59){(g="21 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/57_zps8e0a7499.jpg'>]")};if(g<60){(g="21 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/58_zpsb0f05526.jpg'>]")};if(60<g){(g="21 <img src='http://i302.photobucket.com/albums/nn120/nguyenanhdung_2008/12/shop%20nhan%20vat%20gunny/59_zps3cad26c2.jpg'>]")&&(f="60")};var h=(Math.floor((Thanked*10)+(Posts*2)+(Coins*1)));if(h>8000){h=8000};if(d>25000){(d=25000)};var i=(Math.floor((h/8000)*100)-2);var j=(Math.floor((d/25000)*100)-2);document.write('<fieldset style="position: absolute;border-radius: 9px 9px;white-space: nowrap;width: 165px;font-size: 11px;border-color: #666;border-width: 2px;margin: -18px 0px 0;padding: 5px;"><legend><font color="red"><span style="font-size: 0px;" class="lv '+g+' "><b>'+g+'

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/legend&gt;

<b><font color=red> Phát triển : 

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/b&gt;

('+d+' / 25000)<div class="strengthbg"><div class="strengthbg2"><fieldset style="padding: 1px;border: 1px solid #666;border-radius: 3px 3px 3px 3px;"><img src="http://i16.servimg.com/u/f16/18/06/63/74/9810.gif" width="'+j+'%" title="'+d+'" height="9px"><img src="http://i16.servimg.com/u/f16/18/06/63/74/8710.gif" width="2px" title="'+d+'" height="9px">

Unknown end tag for &lt;/fieldset&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

')};
//]]>


Unknown end tag for &lt;/script&gt;



```


Bước 2 : thêm cái này vào chỗ nào muốn hiển thị lv trong vewtopic\_body


```



<div class="thanhlv1">

<script>level(<!-- BEGIN profile_field -->'{postrow.displayed.profile_field.CONTENT}',<!-- END profile_field -->1);

Unknown end tag for &lt;/script&gt;




Unknown end tag for &lt;/div&gt;


<div class="thanhlv1">

<script>level2(<!-- BEGIN profile_field -->'{postrow.displayed.profile_field.CONTENT}',<!-- END profile_field -->2);

Unknown end tag for &lt;/script&gt;




Unknown end tag for &lt;/div&gt;



```

như ở Cntt-k3 thì mình thêm code trên vào bên trên


```

<div class="user-info">


```

Bước 3 thêm cái này vào css

```

.thanhlv1 {
width: 21%;
float: left;

}

.user-info {
width: 172px;
float: right;
}

```
Tiếp theo vào :
- Vào Admin Panel -> Quản lý người dùng & Quản lý nhóm -> Quản lý người dùng -> Profiles -> Di chuyển Tổng số bài gửi, Points, Reputation lên trên cùng theo thứ tự trên xuống là: Tổng số bài gửi -> Points -> Reputation (Lưu ý: Ba cái này các bạn đặt tên gì cũng được chứ không bị vướng mắc như thanh level của thuan007)

Tiếp nữa : MODULES >> Points and reputation
Points system
Activate points system : Có
Display average points per message : Co'

Reputation
Activate reputation system : Có
Activate "Thanks" button : Có

Ai thắc mắc cứ reply tại topic này
Ai muốn thay link hình khác thì tìm link ảnh ở đoạn scripts và thay link ảnh nhá



Được sửa bởi Chupy ngày Sun Jan 27, 2013 5:22 pm; sửa lần 12.