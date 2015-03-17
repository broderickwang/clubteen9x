sau đây mình xin hướng dẫn cách làm code lv 3 trong 1
cho cái này vào viewtopic\_body nơi muốn hiện tốt nhất là sau cái code

```

<strong>{postrow.displayed.POSTER_NAME}

Unknown end tag for &lt;/strong&gt;


<span class="fmviOnoff">{postrow.displayed.ONLINE_IMG}

Unknown end tag for &lt;/span&gt;



```

```

<style type="text/css">
.hidden {
display: none;
}


Unknown end tag for &lt;/style&gt;


<link rel="stylesheet" type="text/css" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/ui-lightness/jquery-ui.css" />
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js">

Unknown end tag for &lt;/script&gt;


<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1/jquery-ui.min.js">

Unknown end tag for &lt;/script&gt;


<script type="text/javascript">
$(function() {
$(".tabmenu").removeClass("hidden");
$(".tabs h2").addClass("hidden");
$(".tabs").tabs();
});


Unknown end tag for &lt;/script&gt;


<div class="tabs">
<ul class="tabmenu hidden">
<li><a href="#tab-1">C1

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;


<li><a href="#tab-2">C2

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;


<li><a href="#tab-3">C3

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;


<li><a href="#tab-4">C4

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;


<div id="tab-1"><h2>Nhân Vật

Unknown end tag for &lt;/h2&gt;


<!--  THANH LEVEL HINH NGUOI -->
<a>.†.Nhân Vật.†.

Unknown end tag for &lt;/a&gt;

<br>
<div class="levelhinhnguoi" align="left">
<span style="font-size:11px;font-family:Tahoma;font-weight:normal; display: none;">
<!-- BEGIN profile_field -->
{postrow.displayed.profile_field.LABEL}
{postrow.displayed.profile_field.CONTENT}
{postrow.displayed.profile_field.SEPARATOR}
<!-- END profile_field -->
{postrow.displayed.POSTER_RPG}


Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;


<!--  THANH LEVEL HINH NGUOI-->

Unknown end tag for &lt;/br&gt;




Unknown end tag for &lt;/div&gt;


<div id="tab-2"><h2>.†.Cấp Bậc.†.

Unknown end tag for &lt;/h2&gt;


<a>Cấp Bậc

Unknown end tag for &lt;/a&gt;

<br>
<div class="fmlevel" align="left">
<span style="font-size:11px;font-family:Tahoma;font-weight:normal; display: none;">
<!-- BEGIN profile_field -->
{postrow.displayed.profile_field.LABEL}{postrow.displayed.profile_field.CONTENT}{postrow.displayed.profile_field.SEPARATOR}
<!-- END profile_field -->
{postrow.displayed.POSTER_RPG}


Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;

 

Unknown end tag for &lt;/br&gt;




Unknown end tag for &lt;/div&gt;


<div id="tab-3"><h2>Linh Thú

Unknown end tag for &lt;/h2&gt;


<a>.†.Linh Thú.†.

Unknown end tag for &lt;/a&gt;

<br><left><p>{postrow.displayed.POSTER_RANK}<br><img src="http://1.bp.blogspot.com/-tW3-ghYEpLI/TspwDPdqLgI/AAAAAAAAAXk/VJtB9eP5DC8/s1600/black-018-loading-p.gif"width="150"height="20"/> 

Unknown end tag for &lt;/br&gt;



Unknown end tag for &lt;/p&gt;



Unknown end tag for &lt;/left&gt;




Unknown end tag for &lt;/br&gt;



Unknown end tag for &lt;/div&gt;


<div id="tab-4">
<h2>Up...

Unknown end tag for &lt;/h2&gt;


<p>Up...

Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;



```
sau đó tìm trong viewtopic\_body doạn sau

```

<!-- END postrow -->
```

thêm vào sau nó

```

<script type="text/javascript" src="http://camxucfan9x.one-forum.net/h161-page">

Unknown end tag for &lt;/script&gt;


<script type="text/javascript" src="http://camxucfan9x.one-forum.net/h178-page">

Unknown end tag for &lt;/script&gt;


```
h161-:
```
function A1level(){
dir="http://s832.photobucket.com/albums/zz244/a1tg3/boom/"
var ip="15"
var ie="100"
var ir="22"
var ine="20"
var maxm="8000"
var maxl=(ine*500)
var aq=[];
var level=[];
var posts=[];
var points=[];
var thanks=[];
var boom = new Array()
x = document.getElementsByTagName('div')
for(y=0;y<x.length;y++){
if(x[y].className == "fmlevel"){
z= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
a= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
tks= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
posts[z]=parseInt(x[y].innerHTML.toLowerCase().split("posts

Unknown end tag for &lt;/span&gt;

: 

Unknown end tag for &lt;/span&gt;

")[1]);
points[a]=parseInt(x[y].innerHTML.toLowerCase().split("points

Unknown end tag for &lt;/span&gt;

: 

Unknown end tag for &lt;/span&gt;

")[1]);
thanks[tks]=parseInt(x[y].innerHTML.toLowerCase().split("thanked

Unknown end tag for &lt;/span&gt;

: 

Unknown end tag for &lt;/span&gt;

")[1]);
if(points[a]>=0){
var xp=[];
var firstchar=[];
xp[z]=Math.floor(posts[z]*ip/10+(points[a]+thanks[tks]*4)*ir/10)
level[z]=(xp[z]/ine)
var exp = Math.floor((level[z]-Math.floor(level[z]))*ie)
var nol = Math.floor(level[z]+parseInt(1));
var title1="Level"
if (nol > 450){(nol = "450")&&(exp = "99")&&(title1="Max-Level")}
var width=(exp-5)
var mag = "100"
if(xp[z]>0){mag = Math.floor(thanks[tks]*19+posts[z]*2+points[a])}
var mperc = (Math.floor((mag/maxm)*100)-6)
if(mag > maxm) {(mag = maxm)&&(mperc = "94")}
var lperc = (Math.floor((xp[z]/maxl)*100)-6)
if(xp[z] > maxl) {(xp[z]= maxl)&&(lperc = "94")}
aq[z]="Unknown"
var medal=[];
var i=1;
while (i>0){
if (nol==i){
boom[i]="<img src='"+dir+"exp_medal_"+i+".gif'>";
medal[z]=boom[i];i=0;} else{i++;}
}
stats="<div align='center'><div valign='bottom' align='left' style='width: 127px;color: gray;font-size: 7pt;'><font style='color: #333;font-size:11px;'>"+title1+": 

Unknown end tag for &lt;/font&gt;

<font style='color: crimson;'><b>"+ nol +"

Unknown end tag for &lt;/b&gt;

  

Unknown end tag for &lt;/font&gt;

<font color='red' style='font-size: 12px'><b> ¤"+medal[z]+"¤

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/font&gt;

<br>Cận Chiến: "+ xp[z]+" / "+maxl+"<div class='levelbg'><img src='/users/2211/12/43/96/album/orange10.gif' width='"+lperc+"%' height='9px'><img src='/users/2211/12/43/96/album/hp1010.gif' width='2px' height='9px'>

Unknown end tag for &lt;/div&gt;

Ma Thuật: " +mag+" / "+maxm+"<div class='levelbg'><img src='/users/2211/12/43/96/album/green110.gif' width='"+mperc+"%' height='9px'><img src='/users/2211/12/43/96/album/mp1010.gif' width='2px' height='9px'>

Unknown end tag for &lt;/div&gt;

Experience: "+exp+"%<div class='levelbg'><img src='/users/2211/12/43/96/album/blue10.gif' width='"+width+"%' height='9px'><img src='/users/2211/12/43/96/album/exp1010.gif' width='2px' height='9px'>

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

 "
x[y].innerHTML +="<span class='gensmall'>" + stats} else{x[y].innerHTML +="<font color=red><br><br><b>Unknown ("+points[a]+" points)

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/font&gt;

"}}}
}
A1level();
```
h178-"
```
function A1level(){
dir="http://i1228.photobucket.com/albums/ee457/ca3forum/Boy avatar/"
var xperpost="5"
var xperexp="35"
var xperreptt="20"
var xpneeded="25"
var maxability="4000"
var maxstrength=(xpneeded*600)
var aq=[];
var level=[];
var posts=[];
var repts=[];
var ability=[];
var cts=[];
var firstchar=[];
var boom = new Array()
boom[0]="<img src='"+dir+"0.gif'><br>T--Vỡ Lòng--T";
boom[1]="<img src='"+dir+"1.gif'><br>T--Vỡ Lòng--T";
boom[2]="<img src='"+dir+"2.gif'> <br>T--Tập sự--T";
boom[3]="<img src='"+dir+"3.gif'> <br>T--Nâng Cao--T";
boom[4]="<img src='"+dir+"4.gif'> <br>T--Đường Phố--T";
boom[5]="<img src='"+dir+"5.gif'> <br>T--Nghệp Dư--T";
boom[6]="<img src='"+dir+"6.gif'> <br>T--Huấn Luyện--T";
boom[7]="<img src='"+dir+"7.gif'> <br>T--Chuyên Nghiệp--T";
boom[8]="<img src='"+dir+"8.gif'> <br>T--Đẳng Cấp--T";
boom[9]="<img src='"+dir+"9.gif'> <br>T--Ưu Tú--T";
boom[10]="<img src='"+dir+"10.gif'> <br>T--Bậc thầy--T";
boom[11]="<img src='"+dir+"11.gif'> <br>T--Siêu Sao--T";
boom[12]="<img src='"+dir+"12.gif'> <br>T--Huyền Thoại--T";
boom[13]="<img src='"+dir+"13.gif'> <br>T--Vũ Thần--T";
boom[14]="<img src='"+dir+"14.gif'> <br>T--Tinh Anh--T";
boom[15]="<img src='"+dir+"15.gif'> <br>T--Xuất Chúng--T";
boom[16]="<img src='"+dir+"16.gif'> <br>T--Đỉnh Cao--T";
boom[17]="<img src='"+dir+"17.gif'> <br>T--Vĩ Đại--T";
boom[18]="<img src='"+dir+"18.gif'> <br>T--Thiên Tài--T";
boom[19]="<img src='"+dir+"19.gif'> <br>T--Siêu Cấp--T";
boom[20]="<img src='"+dir+"20.gif'> <br>T--Chén Thần--T ";
boom[21]="<img src='"+dir+"21.gif'> <br>T--Chúa Tể --T";
boom[22]="<img src='"+dir+"22.gif'> <br>T--Rồng Đồng --T";
boom[23]="<img src='"+dir+"23.gif'> <br>T--Rồng Bạc --T";
boom[24]="<img src='"+dir+"24.gif'> <br>T--Rồng Vàng --T";
boom[25]="<img src='"+dir+"25.gif'> <br>T--Cự Lôi --T";
boom[26]="<img src='"+dir+"26.gif'> <br>T--Phong Hỏa --T";
boom[27]="<img src='"+dir+"27.gif'> <br>T--Phong Thủy --T";
boom[28]="<img src='"+dir+"28.gif'> <br>T--Phong lôi --T";
boom[29]="<img src='"+dir+"29.gif'> <br>T--Thần Thánh C1 --T";
boom[30]="<img src='"+dir+"30.gif'> <br>T--Thần Thánh C2--T";
boom[31]="<img src='"+dir+"31.gif'> <br>T--Thần Thánh C3 --T";
boom[32]="<img src='"+dir+"32.gif'> <br>T--Thần Thánh C4 --T";
boom[33]="<img src='"+dir+"33.gif'> <br>T--Thần Thánh C5 --T";
boom[34]="<img src='"+dir+"34.gif'> <br>T--Thần Thánh C6 --T";
boom[35]="<img src='"+dir+"35.gif'> <br>T--Thần Thánh C7 --T";
boom[36]="<img src='"+dir+"36.gif'> <br>T--Thần Thánh C8 --T";
boom[37]="<img src='"+dir+"37.gif'> <br>T--Thần Thánh C9 --T";
boom[38]="<img src='"+dir+"38.gif'> <br>T--Thần Thánh C10 --T";
boom[39]="<img src='"+dir+"39.gif'> <br>T--Vua Thần  --T";
boom[40]="<img src='"+dir+"40.gif'> <br>T--Vua Thần 1Sao --T";
boom[41]="<img src='"+dir+"41.gif'> <br>T--Vua Thần 2Sao --T";
boom[42]="<img src='"+dir+"42.gif'> <br>T--Vua Thần 3Sao --T";
boom[43]="<img src='"+dir+"43.gif'> <br>T--Vua Thần 4Sao --T";
boom[44]="<img src='"+dir+"44.gif'> <br>T--Vua Thần 5Sao --T";
boom[45]="<img src='"+dir+"45.gif'> <br>T--Vua Thần 6Sao --T";
boom[46]="<img src='"+dir+"46.gif'> <br>T--Vua Thần 7Sao --T";
boom[47]="<img src='"+dir+"47.gif'> <br>T--Vua Thần 8Sao --T";
boom[48]="<img src='"+dir+"48.gif'> <br>T--Vua Thần 9Sao --T";
boom[49]="<img src='"+dir+"49.gif'> <br>T--Chén Thánh --T";
boom[50]="<img src='"+dir+"50.gif'> <br>T--Chén Thánh Vip --T";
x = document.getElementsByTagName('div')
for(y=0;y<x.length;y++){
if(x[y].className == "levelhinhnguoi"){
nick= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
nic= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
nict= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
tks= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
cts[nict]=parseInt(x[y].innerHTML.toLowerCase().split("pet

Unknown end tag for &lt;/span&gt;

: 

Unknown end tag for &lt;/span&gt;

")[1]);
posts[nick]=parseInt(x[y].innerHTML.toLowerCase().split("posts

Unknown end tag for &lt;/span&gt;

: 

Unknown end tag for &lt;/span&gt;

")[1]);
repts[nic]=parseInt(x[y].innerHTML.toLowerCase().split("points

Unknown end tag for &lt;/span&gt;

: 

Unknown end tag for &lt;/span&gt;

")[1]);
ability[tks]=parseInt(x[y].innerHTML.toLowerCase().split("thanked

Unknown end tag for &lt;/span&gt;

: 

Unknown end tag for &lt;/span&gt;

")[1]);
if(repts[nic]>=0){var levell=[];
var xp=[];
var firstchar=[];
xp[nick]=Math.floor(posts[nick]*xperpost/1000+(repts[nic]+ability[tks]*4)*xperreptt/1000)
level[nick]=(xp[nick]/xpneeded)
var exp = Math.floor((level[nick]-Math.floor(level[nick]))*xperexp)
var phansonguyen = Math.floor(level[nick]+parseInt(1));
var title1=""
if (phansonguyen > 50){(phansonguyen = "50")&&(exp = "100")&&(title1="")}

var width=(exp-1)
var xptogo = "10000"
if(xp[nick]>0){xptogo = Math.floor(ability[tks]*1900+posts[nick]*2+repts[nic])}
var abilityperc = (Math.floor((xptogo/maxability)*1000)-2)
if(xptogo > maxability) {(xptogo = maxability)&&(abilityperc = "9800")}
var strengthperc = (Math.floor((xp[nick]/maxstrength)*1000)-2)
if(xp[nick] > maxstrength) {(xp[nick]= maxstrength)&&(strengthperc = "98")}
firstchar[nick]=nick.charAt(0);
aq[nick]="Unknown"
var medal=[];
var i=1;
while (i>0){
if (phansonguyen==i){
boom[0]="<img src='"+dir+"0.gif'><br>T--Vỡ Lòng--T";
boom[1]="<img src='"+dir+"1.gif'><br>T--Vỡ Lòng--T";
boom[2]="<img src='"+dir+"2.gif'> <br>T--Tập sự--T";
boom[3]="<img src='"+dir+"3.gif'> <br>T--Nâng Cao--T";
boom[4]="<img src='"+dir+"4.gif'> <br>T--Đường Phố--T";
boom[5]="<img src='"+dir+"5.gif'> <br>T--Nghệp Dư--T";
boom[6]="<img src='"+dir+"6.gif'> <br>T--Huấn Luyện--T";
boom[7]="<img src='"+dir+"7.gif'> <br>T--Chuyên Nghiệp--T";
boom[8]="<img src='"+dir+"8.gif'> <br>T--Đẳng Cấp--T";
boom[9]="<img src='"+dir+"9.gif'> <br>T--Ưu Tú--T";
boom[10]="<img src='"+dir+"10.gif'> <br>T--Bậc thầy--T";
boom[11]="<img src='"+dir+"11.gif'> <br>T--Siêu Sao--T";
boom[12]="<img src='"+dir+"12.gif'> <br>T--Huyền Thoại--T";
boom[13]="<img src='"+dir+"13.gif'> <br>T--Vũ Thần--T";
boom[14]="<img src='"+dir+"14.gif'> <br>T--Tinh Anh--T";
boom[15]="<img src='"+dir+"15.gif'> <br>T--Xuất Chúng--T";
boom[16]="<img src='"+dir+"16.gif'> <br>T--Đỉnh Cao--T";
boom[17]="<img src='"+dir+"17.gif'> <br>T--Vĩ Đại--T";
boom[18]="<img src='"+dir+"18.gif'> <br>T--Thiên Tài--T";
boom[19]="<img src='"+dir+"19.gif'> <br>T--Siêu Cấp--T";
boom[20]="<img src='"+dir+"20.gif'> <br>T--Chén Thần--T ";
boom[21]="<img src='"+dir+"21.gif'> <br>T--Chúa Tể --T";
boom[22]="<img src='"+dir+"22.gif'> <br>T--Rồng Đồng --T";
boom[23]="<img src='"+dir+"23.gif'> <br>T--Rồng Bạc --T";
boom[24]="<img src='"+dir+"24.gif'> <br>T--Rồng Vàng --T";
boom[25]="<img src='"+dir+"25.gif'> <br>T--Cự Lôi --T";
boom[26]="<img src='"+dir+"26.gif'> <br>T--Phong Hỏa --T";
boom[27]="<img src='"+dir+"27.gif'> <br>T--Phong Thủy --T";
boom[28]="<img src='"+dir+"28.gif'> <br>T--Phong lôi --T";
boom[29]="<img src='"+dir+"29.gif'> <br>T--Thần Thánh C1 --T";
boom[30]="<img src='"+dir+"30.gif'> <br>T--Thần Thánh C2--T";
boom[31]="<img src='"+dir+"31.gif'> <br>T--Thần Thánh C3 --T";
boom[32]="<img src='"+dir+"32.gif'> <br>T--Thần Thánh C4 --T";
boom[33]="<img src='"+dir+"33.gif'> <br>T--Thần Thánh C5 --T";
boom[34]="<img src='"+dir+"34.gif'> <br>T--Thần Thánh C6 --T";
boom[35]="<img src='"+dir+"35.gif'> <br>T--Thần Thánh C7 --T";
boom[36]="<img src='"+dir+"36.gif'> <br>T--Thần Thánh C8 --T";
boom[37]="<img src='"+dir+"37.gif'> <br>T--Thần Thánh C9 --T";
boom[38]="<img src='"+dir+"38.gif'> <br>T--Thần Thánh C10 --T";
boom[39]="<img src='"+dir+"39.gif'> <br>T--Vua Thần  --T";
boom[40]="<img src='"+dir+"40.gif'> <br>T--Vua Thần 1Sao --T";
boom[41]="<img src='"+dir+"41.gif'> <br>T--Vua Thần 2Sao --T";
boom[42]="<img src='"+dir+"42.gif'> <br>T--Vua Thần 3Sao --T";
boom[43]="<img src='"+dir+"43.gif'> <br>T--Vua Thần 4Sao --T";
boom[44]="<img src='"+dir+"44.gif'> <br>T--Vua Thần 5Sao --T";
boom[45]="<img src='"+dir+"45.gif'> <br>T--Vua Thần 6Sao --T";
boom[46]="<img src='"+dir+"46.gif'> <br>T--Vua Thần 7Sao --T";
boom[47]="<img src='"+dir+"47.gif'> <br>T--Vua Thần 8Sao --T";
boom[48]="<img src='"+dir+"48.gif'> <br>T--Vua Thần 9Sao --T";
boom[49]="<img src='"+dir+"49.gif'> <br>T--Chén Thánh --T";
boom[50]="<img src='"+dir+"50.gif'> <br>T--Chén Thánh Vip --T";
medal[nick]=boom[i];i=0;} else{i++;}
}
exppet="<img src='http://i40.servimg.com/u/f40/15/90/62/82/blue10.gif' width='"+width+"%' height='7px'>";
exppet2="<img src='http://sinhvienit.net/@forum/images/rpg/exp.gif' width='2px' height='7px'>";
expss= "<div class='expbg'><div class='expbg2'><fieldset style='padding: 1px; border: #776b6a 1px solid;'>"+exppet+""+exppet2+"

Unknown end tag for &lt;/fieldset&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

";

stats="<div align='left'><table cellpadding='0' cellspacing='0' width='100'><tr><td width='150'><fieldset style='padding: 5px 7px 3px 5px; border: #776b6a 1px dashed;-moz-border-radius: 4px; border-radius: 2px;'>"+title1+"<div valign='bottom' style='padding: 3px;'><font color='red' style='font-size: 12px'><b><center>"+medal[nick]+"

Unknown end tag for &lt;/center&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/font&gt;

<font color='blue' size: 10px'><b> Level: "+ phansonguyen +"<br> Experience: "+exp+"%

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/font&gt;

"+expss+"

Unknown end tag for &lt;/fieldset&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/fieldset&gt;



Unknown end tag for &lt;/div&gt;

 "
x[y].innerHTML +="<span class='gensmall'>" + stats} else{x[y].innerHTML +="<font color=red><br><br><b>Unknown ("+repts[nic]+" points)

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/font&gt;

"}}}
}
A1level();```
tiếp đến các bạn ok là xong . nhớ vote tớ cái nghen
Demo:

```

http://camxucfan9x.one-forum.net/t501-topic#tab-1
```
Trả lời với trích dẫn nội dung bài viết này