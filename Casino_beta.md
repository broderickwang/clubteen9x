#Đổ xí ngầu: http://www.fmvi.vn/h44-xi-ngau
#Số 7 may mắn: http://www.fmvi.vn/h43-casino-so-7
#Bầu cua: http://www.fmvi.vn/h45-bau-cua-ca-cop
#Oẳn tù tì: http://www.fmvi.vn/h46-oan-tu-ti
#Bài cào: http://www.fmvi.vn/h48-bai-cao


Hướng dẫn: Bạn có thể đặt code sau vào vị trí cho phép HTML code, hoặc đơn giản là tạo trang HTML:
ACP -Modules - HTML - HTML pages management - Modify HTML page:
Do you wish to use your forum header and footer ? Yes
1 - Game đổ xí ngầu: Game này cách chơi rất đơn giản, chỉ cần click vào xí ngầu màu lục và chờ kết quả.

```


<p align="center">
Click vào xí ngầu màu xanh lục để bắt đầu chơi


Unknown end tag for &lt;/p&gt;


<div align="center">
<span id="botxucsac">
<img src="http://i1193.photobucket.com/albums/aa346/fmvigroup/xsdo/do1.gif"
/>


Unknown end tag for &lt;/span&gt;


<span id="botxucsac">



Unknown end tag for &lt;/span&gt;


<span id="memxucsac">
<img src="http://i1193.photobucket.com/albums/aa346/fmvigroup/xsluc/luc1.gif"
/>


Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;


<script>
var botcasino = "http://i1193.photobucket.com/albums/aa346/fmvigroup/xsdo/do";
var fmvibot = Math.floor(Math.random() * 5 + 1);
autocasino1 = setInterval(function() {
$("#botxucsac").html('<img alt="fmvi" src="' + botcasino + fmvibot+++'.gif"/>');
if (fmvibot === 7) {
fmvibot = 1;
};
}, 60);
$("#memxucsac").click(function() {
var memcasino = "http://i1193.photobucket.com/albums/aa346/fmvigroup/xsluc/luc";
var fmvimem = Math.floor(Math.random() * 5 + 1);
var n = 0;
autocasino2 = setInterval(function() {
$("#memxucsac").html('<img alt="fmvi" src="' + memcasino + fmvimem+++'.gif"/>');
if (fmvimem === 7) {
fmvimem = 1;
};
if (n++ === 100) {
clearInterval(autocasino1);
clearInterval(autocasino2);
var xucsacdo = $("#botxucsac img").attr("src");
var somatdo = xucsacdo.slice(xucsacdo.length - 5, xucsacdo.length - 4);
var xucsacluc = $("#memxucsac img").attr("src");
var somatluc = xucsacluc.slice(xucsacluc.length - 5, xucsacluc.length - 4);
if (somatdo > somatluc) {
alert('Thua ' + (Number(somatdo) - Number(somatluc)) + '000 điểm rồi em ơi o');
} else if (somatdo === somatluc) {
alert('Hoà rồi, chơi tiếp chứ _____');
} else {
alert('Thắng ' + (Number(somatluc) - Number(somatdo)) + '000 điểm rồi, nhưng chẳng có quà đâu (_ __!)');
};
window.location.reload();
};
}, 35);
});


Unknown end tag for &lt;/script&gt;



```


2 - Game oẳn tù tì: Chọn một hành động của bạn bằng cách click vào ảnh tương ứng và chờ kết quả.

```


<div align="center">
<span id="botOantuti">
<img src="http://i48.servimg.com/u/f48/16/08/62/71/untitl11.jpg">


Unknown end tag for &lt;/span&gt;


<div style="width: 150px; height: 2px; margin: 10px; background-color: yellow">



Unknown end tag for &lt;/div&gt;


<span id="memOantuti" align="center">
<img src="http://i48.servimg.com/u/f48/16/58/89/73/bao10.png">
<img src="http://i48.servimg.com/u/f48/16/58/89/73/bua10.png">
<img src="http://i48.servimg.com/u/f48/16/58/89/73/keo10.png">


Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;


<script>
var datacasino = "http://i48.servimg.com/u/f48/16/58/89/73/";
var oantutifmvi = new Array();
oantutifmvi[0] = "bao10.png";
oantutifmvi[1] = "bua10.png";
oantutifmvi[2] = "keo10.png";
jQuery("#memOantuti img").click(function() {
jQuery("#memOantuti img").not(jQuery(this)).remove();
var fmvibot = Math.floor(Math.random() * 3);
jQuery("#botOantuti").html('<img src="' + datacasino + oantutifmvi[fmvibot] + '"/>');
if (jQuery("#botOantuti img").attr("src") === "http://i48.servimg.com/u/f48/16/58/89/73/bao10.png" && jQuery("#memOantuti img").attr("src") === "http://i48.servimg.com/u/f48/16/58/89/73/bua10.png" || jQuery("#botOantuti img").attr("src") === "http://i48.servimg.com/u/f48/16/58/89/73/bua10.png" && jQuery("#memOantuti img").attr("src") === "http://i48.servimg.com/u/f48/16/58/89/73/keo10.png" || jQuery("#botOantuti img").attr("src") === "http://i48.servimg.com/u/f48/16/58/89/73/keo10.png" && jQuery("#memOantuti img").attr("src") === "http://i48.servimg.com/u/f48/16/58/89/73/bao10.png") {
alert('Thua rồi nhá em, cố gắng vô ích o');
} else if (jQuery("#botOantuti img").attr("src") === jQuery("#memOantuti img").attr("src")) {
alert('Hòa, chơi lại nào =.=!');
} else {
alert('Bạn đã may mắn giành chiến thắng (_ __!)');
};
window.location.reload();
});


Unknown end tag for &lt;/script&gt;



```


3 - Game bầu cua tôm cá: Đơn giản chỉ là click để đặt cược, dễ chơi, dễ trật

```



<div id="datcuocfmvi" align="center">
<img src="http://i44.servimg.com/u/f44/15/64/85/86/bau10.png">
<img src="http://i44.servimg.com/u/f44/15/64/85/86/cua10.png">
<img src="http://i44.servimg.com/u/f44/15/64/85/86/tom10.png">
<img src="http://i44.servimg.com/u/f44/15/64/85/86/nai10.png">
<img src="http://i44.servimg.com/u/f44/15/64/85/86/ca10.png">
<img src="http://i44.servimg.com/u/f44/15/64/85/86/ga10.png">


Unknown end tag for &lt;/div&gt;


<div align="center">
Đặt cược bằng cách Click chọn linh vật phía trên
<p align="center" style="width: 250px; height: 2px; margin: 10px; background-color: yellow">



Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;


<div align="center">
<span id="datacasino1">
<img src="http://i44.servimg.com/u/f44/15/64/85/86/bau10.png" alt="fmvi">


Unknown end tag for &lt;/span&gt;


<span id="datacasino2">
<img src="http://i44.servimg.com/u/f44/15/64/85/86/cua10.png" alt="fmvi">


Unknown end tag for &lt;/span&gt;


<span id="datacasino3">
<img src="http://i44.servimg.com/u/f44/15/64/85/86/tom10.png" alt="fmvi">


Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;


<script>
var datacasino = "http://i44.servimg.com/u/f44/15/64/85/86/";
var baucuafmvi = new Array();
baucuafmvi[0] = "bau10.png";
baucuafmvi[1] = "cua10.png";
baucuafmvi[2] = "tom10.png";
baucuafmvi[3] = "nai10.png";
baucuafmvi[4] = "ga10.png";
baucuafmvi[5] = "ca10.png";
jQuery("#datcuocfmvi img").click(function() {
jQuery("#datcuocfmvi img").not(jQuery(this)).remove();
var fmvibot0 = Math.floor(Math.random() * 5);
autocasino1 = setInterval(function() {
jQuery("#datacasino1").html('<img src="' + datacasino + baucuafmvi[fmvibot0++] + '"/>');
if (fmvibot0 === 6) {
fmvibot0 = 0;
};
}, 50);
var fmvibot1 = Math.floor(Math.random() * 5);
autocasino2 = setInterval(function() {
jQuery("#datacasino2").html('<img src="' + datacasino + baucuafmvi[fmvibot1++] + '"/>');
if (fmvibot1 === 6) {
fmvibot1 = 0;
};
}, 10);
var fmvibot = Math.floor(Math.random() * 5);
var n = 0;
autocasino3 = setInterval(function() {
jQuery("#datacasino3").html('<img src="' + datacasino + baucuafmvi[fmvibot++] + '"/>');
if (fmvibot === 6) {
fmvibot = 0;
};
if (n++ === 100) {
clearInterval(autocasino1);
clearInterval(autocasino2);
clearInterval(autocasino3);
if (jQuery("#datcuocfmvi img").attr("src") != jQuery("#datacasino1 img").attr("src") && jQuery("#datcuocfmvi img").attr("src") != jQuery("#datacasino2 img").attr("src") && jQuery("#datcuocfmvi img").attr("src") != jQuery("#datacasino3 img").attr("src")) {
alert('Trắng tay rồi em ơi o');
} else if (jQuery("#datcuocfmvi img").attr("src") != jQuery("#datacasino1 img").attr("src") && jQuery("#datcuocfmvi img").attr("src") != jQuery("#datacasino2 img").attr("src") && jQuery("#datcuocfmvi img").attr("src") === jQuery("#datacasino3 img").attr("src") || jQuery("#datcuocfmvi img").attr("src") != jQuery("#datacasino2 img").attr("src") && jQuery("#datcuocfmvi img").attr("src") != jQuery("#datacasino3 img").attr("src") && jQuery("#datcuocfmvi img").attr("src") === jQuery("#datacasino1 img").attr("src") || jQuery("#datcuocfmvi img").attr("src") != jQuery("#datacasino1 img").attr("src") && jQuery("#datcuocfmvi img").attr("src") != jQuery("#datacasino3 img").attr("src") && jQuery("#datcuocfmvi img").attr("src") === jQuery("#datacasino2 img").attr("src")) {
alert('Được 1000 điểm >.<');
} else if (jQuery("#datcuocfmvi img").attr("src") === jQuery("#datacasino1 img").attr("src") && jQuery("#datcuocfmvi img").attr("src") === jQuery("#datacasino2 img").attr("src") && jQuery("#datcuocfmvi img").attr("src") != jQuery("#datacasino3 img").attr("src") || jQuery("#datcuocfmvi img").attr("src") === jQuery("#datacasino2 img").attr("src") && jQuery("#datcuocfmvi img").attr("src") === jQuery("#datacasino3 img").attr("src") && jQuery("#datcuocfmvi img").attr("src") != jQuery("#datacasino1 img").attr("src") || jQuery("#datcuocfmvi img").attr("src") === jQuery("#datacasino1 img").attr("src") && jQuery("#datcuocfmvi img").attr("src") === jQuery("#datacasino3 img").attr("src") && jQuery("#datcuocfmvi img").attr("src") != jQuery("#datacasino2 img").attr("src")) {
alert('Thắng 2000 điểm ___');
} else if (jQuery("#datcuocfmvi img").attr("src") === jQuery("#datacasino1 img").attr("src") && jQuery("#datcuocfmvi img").attr("src") === jQuery("#datacasino2 img").attr("src") && jQuery("#datcuocfmvi img").attr("src") === jQuery("#datacasino3 img").attr("src")) {
alert('Thắng tuyệt đối 10000 điểm (_ __ !)');
};
window.location.reload();
};
}, 30);
});


Unknown end tag for &lt;/script&gt;

```




4 - Game số 7 may mắn: Game này là game chiến lược cho các thành viên đại gia. Đặt lớn, trúng lớn.
![http://i44.servimg.com/u/f44/15/64/85/86/huyent10.png](http://i44.servimg.com/u/f44/15/64/85/86/huyent10.png)
![http://a.imageshack.us/img805/6813/taiphu.png](http://a.imageshack.us/img805/6813/taiphu.png)
```



<div align="center">
<button id="startcasino">
Bắt đầu


Unknown end tag for &lt;/button&gt;




Unknown end tag for &lt;/div&gt;


<div align="center">
<span id="datacasino1">
<img src="http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi3.png"
/>


Unknown end tag for &lt;/span&gt;


<span id="datacasino2">
<img src="http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi3.png"
/>


Unknown end tag for &lt;/span&gt;


<span id="datacasino3">
<img src="http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi3.png"
/>


Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;


<div align="center">
<button id="autocasino">
Dừng lại


Unknown end tag for &lt;/button&gt;




Unknown end tag for &lt;/div&gt;


<script>
jQuery("#startcasino").click(function() {
var datacasino = "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi";
var fmvibatdau1 = 1;
autocasino1 = setInterval(function() {
jQuery("#datacasino1").html('<img src="' + datacasino + fmvibatdau1+++'.png"/>');
if (fmvibatdau1 === 8) {
fmvibatdau1 = 1;
};
}, 50);
var fmvibatdau2 = 3;
autocasino2 = setInterval(function() {
jQuery("#datacasino2").html('<img src="' + datacasino + fmvibatdau2+++'.png"/>');
if (fmvibatdau2 === 8) {
fmvibatdau2 = 1;
};
}, 10);
var fmvibatdau3 = 5;
autocasino3 = setInterval(function() {
jQuery("#datacasino3").html('<img src="' + datacasino + fmvibatdau3+++'.png"/>');
if (fmvibatdau3 === 8) {
fmvibatdau3 = 1;
};
}, 30);
jQuery("#autocasino").click(function() {
clearInterval(autocasino1);
clearInterval(autocasino2);
clearInterval(autocasino3);
if (jQuery("#datacasino1 img").attr("src") === jQuery("#datacasino2 img").attr("src") && jQuery("#datacasino2 img").attr("src") === jQuery("#datacasino3 img").attr("src") && jQuery("#datacasino1 img").attr("src") === jQuery("#datacasino3 img").attr("src") && jQuery("#datacasino1 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi3.png") {
alert('Gold 7 : 100000 điểm');
} else if (jQuery("#datacasino1 img").attr("src") === jQuery("#datacasino2 img").attr("src") && jQuery("#datacasino2 img").attr("src") === jQuery("#datacasino3 img").attr("src") && jQuery("#datacasino1 img").attr("src") === jQuery("#datacasino3 img").attr("src") && jQuery("#datacasino1 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi5.png") {
alert('Red 7 : 70000 điểm');
} else if (jQuery("#datacasino1 img").attr("src") === jQuery("#datacasino2 img").attr("src") && jQuery("#datacasino2 img").attr("src") === jQuery("#datacasino3 img").attr("src") && jQuery("#datacasino1 img").attr("src") === jQuery("#datacasino3 img").attr("src") && jQuery("#datacasino1 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi7.png") {
alert('Blue 7 : 50000 điểm');
} else if (jQuery("#datacasino1 img").attr("src") === jQuery("#datacasino2 img").attr("src") && jQuery("#datacasino2 img").attr("src") === jQuery("#datacasino3 img").attr("src") && jQuery("#datacasino1 img").attr("src") === jQuery("#datacasino3 img").attr("src") && jQuery("#datacasino1 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi6.png") {
alert('Gold Bars : 30000 điểm');
} else if (jQuery("#datacasino1 img").attr("src") === jQuery("#datacasino2 img").attr("src") && jQuery("#datacasino2 img").attr("src") === jQuery("#datacasino3 img").attr("src") && jQuery("#datacasino1 img").attr("src") === jQuery("#datacasino3 img").attr("src") && jQuery("#datacasino1 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi2.png") {
alert('Red Bars : 25000 điểm');
} else if (jQuery("#datacasino1 img").attr("src") === jQuery("#datacasino2 img").attr("src") && jQuery("#datacasino2 img").attr("src") === jQuery("#datacasino3 img").attr("src") && jQuery("#datacasino1 img").attr("src") === jQuery("#datacasino3 img").attr("src") && jQuery("#datacasino1 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi2.png") {
alert('Blue Bar 20000 điểm');
} else if (jQuery("#datacasino1 img").attr("src") === jQuery("#datacasino2 img").attr("src") && jQuery("#datacasino2 img").attr("src") === jQuery("#datacasino3 img").attr("src") && jQuery("#datacasino1 img").attr("src") === jQuery("#datacasino3 img").attr("src") && jQuery("#datacasino1 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi1.png") {
alert('Chùm Cherry : 15000 điểm');
} else if (jQuery("#datacasino1 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi3.png" && jQuery("#datacasino2 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi5.png" && jQuery("#datacasino3 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi7.png" || jQuery("#datacasino2 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi3.png" && jQuery("#datacasino3 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi5.png" && jQuery("#datacasino1 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi7.png" || jQuery("#datacasino3 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi3.png" && jQuery("#datacasino1 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi5.png" && jQuery("#datacasino2 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi7.png" || jQuery("#datacasino1 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi3.png" && jQuery("#datacasino3 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi5.png" && jQuery("#datacasino2 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi7.png" || jQuery("#datacasino2 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi3.png" && jQuery("#datacasino1 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi5.png" && jQuery("#datacasino3 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi7.png" || jQuery("#datacasino3 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi3.png" && jQuery("#datacasino2 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi5.png" && jQuery("#datacasino1 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi7.png") {
alert('Số 7 huyền thoại : 150000 điểm');
} else if (jQuery("#datacasino1 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi6.png" && jQuery("#datacasino2 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi2.png" && jQuery("#datacasino3 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi4.png" || jQuery("#datacasino2 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi6.png" && jQuery("#datacasino3 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi2.png" && jQuery("#datacasino1 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi4.png" || jQuery("#datacasino3 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi6.png" && jQuery("#datacasino1 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi2.png" && jQuery("#datacasino2 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi4.png" || jQuery("#datacasino1 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi6.png" && jQuery("#datacasino3 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi2.png" && jQuery("#datacasino2 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi4.png" || jQuery("#datacasino2 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi6.png" && jQuery("#datacasino1 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi2.png" && jQuery("#datacasino3 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi4.png" || jQuery("#datacasino3 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi6.png" && jQuery("#datacasino2 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi2.png" && jQuery("#datacasino1 img").attr("src") === "http://i1193.photobucket.com/albums/aa346/fmvigroup/casino/fmvi4.png") {
alert('Seri Bars : 120000 điểm');
} else if (jQuery("#datacasino1 img").attr("src") === jQuery("#datacasino2 img").attr("src") || jQuery("#datacasino2 img").attr("src") === jQuery("#datacasino3 img").attr("src") || jQuery("#datacasino1 img").attr("src") === jQuery("#datacasino3 img").attr("src")) {
alert('Double : 10000 điểm');
} else {
alert('Trật rồi em ơi : - 5000 điểm');
};
window.location.reload();
});
});


Unknown end tag for &lt;/script&gt;




```

5 - Game Bài cào:
+ Khi bạn vào trang web, quá trình chia bài sẽ bắt đầu. Nếu có lỗi trong quá trình chia bài thì trang web sẽ tự tải lại.
+ Khi đã chia bài xong, nhà cái (BOT) sẽ lấy 3 lá bài.
+ Bạn click chọn 3 lá bất kỳ trong số bài còn lại. Sau khi bạn chọn xong 3 lá bài thì quá trình tính điểm sẽ bắt đầu theo luật ghi trên wikipedia.
+ Sau khi có kết quả bạn có thể mớ các lá bài còn lại bằng cách click vào nó. Khi đã mở hết bài sẽ xuất hiện thông báo bắt đầu ván mới.


```


<style>
.fmviBaitay{display: block;width:20px; height: 37px; padding: 0px 5px;
background-color: #FFF; border: 1px solid #AAAAAA; float: left; cursor:
pointer} .red{color: red} .black{color: black} .blue{color: blue} .chat{display:block;
font-size: 15px; float:left} .giatri{display:block; font-size: 12px; float:right}
.baisap{display:block; font-size: 10px; height: 10px; padding: 0.6px 0}
.fmviT{display:block; height: 20px}


Unknown end tag for &lt;/style&gt;


<div style="display: none" id="databaingua">


Unknown end tag for &lt;/div&gt;


<div id="databaisap">


Unknown end tag for &lt;/div&gt;


<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<div id="ketquadanhbai" align="center">
<fieldset id="nhacai" style="border: 2px dotted rgb(255, 82, 82); padding: 10px; width: 97px; display: inline;">
<legend style="border: 1px solid white; padding: 4px; color: white; background-color: #ff5252;">
<div>
<b>
<blink>
•
<span>
Nhà cái


Unknown end tag for &lt;/span&gt;


•


Unknown end tag for &lt;/blink&gt;




Unknown end tag for &lt;/b&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/legend&gt;


<center>
<b>
<span id="datanhacai" style="display: block;">
<div class="fmviBaitay black">
<span class="baisap">
$$$


Unknown end tag for &lt;/span&gt;


<span class="baisap">
$$$


Unknown end tag for &lt;/span&gt;


<span class="baisap">
$$$


Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;


<div class="fmviBaitay blue">
<span class="baisap">
$$$


Unknown end tag for &lt;/span&gt;


<span class="baisap">
$$$


Unknown end tag for &lt;/span&gt;


<span class="baisap">
$$$


Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;


<div class="fmviBaitay red">
<span class="baisap">
$$$


Unknown end tag for &lt;/span&gt;


<span class="baisap">
$$$


Unknown end tag for &lt;/span&gt;


<span class="baisap">
$$$


Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/b&gt;




Unknown end tag for &lt;/center&gt;




Unknown end tag for &lt;/fieldset&gt;


<fieldset id="nguoichoi" style="border: 2px dotted rgb(102, 102, 255); padding: 10px; width: 97px; display: inline;">
<legend style="border: 1px solid rgb(5, 255, 255); padding: 4px; color: white; background-color: #6666FF;">
<div>
<b>
<blink>
•
<span>
Người chơi


Unknown end tag for &lt;/span&gt;


•


Unknown end tag for &lt;/blink&gt;




Unknown end tag for &lt;/b&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/legend&gt;


<center>
<b>
<span id="databaiban" style="display: block;">
<div id="nguoichoiupbai">
<div class="fmviBaitay black">
<span class="baisap">
$$$


Unknown end tag for &lt;/span&gt;


<span class="baisap">
$$$


Unknown end tag for &lt;/span&gt;


<span class="baisap">
$$$


Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;


<div class="fmviBaitay blue">
<span class="baisap">
$$$


Unknown end tag for &lt;/span&gt;


<span class="baisap">
$$$


Unknown end tag for &lt;/span&gt;


<span class="baisap">
$$$


Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;


<div class="fmviBaitay red">
<span class="baisap">
$$$


Unknown end tag for &lt;/span&gt;


<span class="baisap">
$$$


Unknown end tag for &lt;/span&gt;


<span class="baisap">
$$$


Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/b&gt;




Unknown end tag for &lt;/center&gt;




Unknown end tag for &lt;/fieldset&gt;




Unknown end tag for &lt;/div&gt;


<script>
var baitayFMvi = new Array();
baitayFMvi[0] = "baisapfmvi";
baitayFMvi[42] = "♣A";
baitayFMvi[2] = "♦A";
baitayFMvi[17] = "♥A";
baitayFMvi[16] = "♠A";
baitayFMvi[20] = "♣K";
baitayFMvi[8] = "♦K";
baitayFMvi[7] = "♥K";
baitayFMvi[14] = "♠K";
baitayFMvi[9] = "♣Q";
baitayFMvi[26] = "♦Q";
baitayFMvi[22] = "♥Q";
baitayFMvi[27] = "♠Q";
baitayFMvi[44] = "♣J";
baitayFMvi[11] = "♦J";
baitayFMvi[52] = "♥J";
baitayFMvi[37] = "♠J";
baitayFMvi[3] = "♣10";
baitayFMvi[18] = "♦10";
baitayFMvi[50] = "♥10";
baitayFMvi[5] = "♠10";
baitayFMvi[21] = "♣9";
baitayFMvi[29] = "♦9";
baitayFMvi[47] = "♥9";
baitayFMvi[33] = "♠9";
baitayFMvi[25] = "♣8";
baitayFMvi[10] = "♦8";
baitayFMvi[12] = "♥8";
baitayFMvi[36] = "♠8";
baitayFMvi[6] = "♣7";
baitayFMvi[4] = "♦7";
baitayFMvi[31] = "♥7";
baitayFMvi[49] = "♠7";
baitayFMvi[24] = "♣6";
baitayFMvi[34] = "♦6";
baitayFMvi[35] = "♥6";
baitayFMvi[28] = "♠6";
baitayFMvi[46] = "♣5";
baitayFMvi[13] = "♦5";
baitayFMvi[39] = "♥5";
baitayFMvi[40] = "♠5";
baitayFMvi[38] = "♣4";
baitayFMvi[1] = "♦4";
baitayFMvi[43] = "♥4";
baitayFMvi[41] = "♠4";
baitayFMvi[45] = "♣3";
baitayFMvi[30] = "♦3";
baitayFMvi[23] = "♥3";
baitayFMvi[48] = "♠3";
baitayFMvi[32] = "♣2";
baitayFMvi[19] = "♦2";
baitayFMvi[51] = "♥2";
baitayFMvi[15] = "♠2";
var songaunhien = Math.floor(Math.random() * 51 + 1);
baingua = setInterval(function() {
if (songaunhien++ == 52) {
songaunhien = 1;
};
$("#databaingua").html($("#databaingua").html() + '<span class="giatribai">' + baitayFMvi[songaunhien++] + '

Unknown end tag for &lt;/span&gt;

');
$("#databaisap").html($("#databaisap").html() + '<span class="baisapfmvi">

Unknown end tag for &lt;/span&gt;

');
var chat = $(".giatribai").text().slice(0, 1);
var giatri = $(".giatribai").text().slice(1);
$(".giatribai").replaceWith('<div title="baingua" class="fmviBaitay"><span class="chat">' + chat + '

Unknown end tag for &lt;/span&gt;

<span class="fmviT">

Unknown end tag for &lt;/span&gt;

<span class="giatri">' + giatri + '

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;

');
$(".baisapfmvi").replaceWith('<div title="baisap" class="fmviBaitay blue"><span class="baisap">♦♦♦♦

Unknown end tag for &lt;/span&gt;

<span class="baisap">♦♦♦♦

Unknown end tag for &lt;/span&gt;

<span class="baisap">♦♦♦♦

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;

');
$("#databaingua>.fmviBaitay").each(function(index) {
$(this).attr("id", index);
});
$("#databaisap>.fmviBaitay").each(function(index) {
$(this).attr("id", index);
});
$(".chat").each(function() {
if ($(this).text() == "♥" || $(this).text() == "♦") {
$(this).parent().addClass("red");
} else if ($(this).text() == "♣" || $(this).text() == "♠") {
$(this).parent().addClass("black");
};
var n = 1;
$("#databaisap>.fmviBaitay").click(function() {
$(this).replaceWith($("#databaingua>.fmviBaitay#" + $(this).attr("id")));
if ($("#databaisap>.fmviBaitay[title='baisap']").length == 0) {
alert('Bạn đã kiểm tra toàn bộ bài. Chọn OK để bắt đầu ván mới!');
window.location.reload();
};
if (n++ === 3) {
$("#databaiban").html($("#databaisap>.fmviBaitay[title='baingua']"));
$("#datanhacai #nhacaiupbai").remove();
$("#datanhacai>div").show();
var nhacaiJQK0 = $("#datanhacai .giatri:eq(0)").text();
var nhacaiJQK1 = $("#datanhacai .giatri:eq(1)").text();
var nhacaiJQK2 = $("#datanhacai .giatri:eq(2)").text();
var nguoichoiJQK0 = $("#databaiban .giatri:eq(0)").text();
var nguoichoiJQK1 = $("#databaiban .giatri:eq(1)").text();
var nguoichoiJQK2 = $("#databaiban .giatri:eq(2)").text();
if (nhacaiJQK0 === "J" && nhacaiJQK1 === "Q" && nhacaiJQK2 === "K" || nhacaiJQK0 === "Q" && nhacaiJQK1 === "K" && nhacaiJQK2 === "J" || nhacaiJQK0 === "K" && nhacaiJQK1 === "J" && nhacaiJQK2 === "Q" || nhacaiJQK0 === "j" && nhacaiJQK1 === "K" && nhacaiJQK2 == "Q" || nhacaiJQK0 === "K" && nhacaiJQK1 === "Q" && nhacaiJQK2 === "J" || nhacaiJQK0 === "Q" && nhacaiJQK1 === "J" && nhacaiJQK2 === "K") {
var tiennhacai = "jqk";
} else {
var tiennhacai = "none";
};
if (nguoichoiJQK0 === "J" && nguoichoiJQK1 === "Q" && nguoichoiJQK2 === "K" || nguoichoiJQK0 === "Q" && nguoichoiJQK1 === "K" && nguoichoiJQK2 === "J" || nguoichoiJQK0 === "K" && nguoichoiJQK1 === "J" && nguoichoiJQK2 === "Q" || nguoichoiJQK0 === "j" && nguoichoiJQK1 === "K" && nguoichoiJQK2 === "Q" || nguoichoiJQK0 === "K" && nguoichoiJQK1 === "Q" && nguoichoiJQK2 === "J" || nguoichoiJQK0 === "Q" && nguoichoiJQK1 === "J" && nguoichoiJQK2 === "K") {
var tiennguoichoi = "jqk";
} else {
var tiennguoichoi = "none";
};
if (tiennhacai === tiennguoichoi && tiennhacai != "none") {
alert('Hòa J-Q-K tặng 1000 điểm!');
} else if (tiennhacai != tiennguoichoi && tiennhacai != "none") {
alert('Thua J-Q-K mất 10000 điểm!');
} else if (tiennhacai != tiennguoichoi && tiennguoichoi != "none") {
alert('Thắng J-Q-K tặng 10000 điểm!');
} else if (tiennhacai === tiennguoichoi && tiennguoichoi === "none") {
$("#ketquadanhbai .giatri").each(function() {
if ($(this).text() == "J" || $(this).text() == "Q" || $(this).text() == "K") {
$(this).before('<p style="display: none">10

Unknown end tag for &lt;/p&gt;

');
} else if ($(this).text() == "A") {
$(this).before('<p style="display: none">1

Unknown end tag for &lt;/p&gt;

');
} else {
$(this).before('<p style="display: none">' + $(this).text() + '

Unknown end tag for &lt;/p&gt;

');
};
});
var nhacai0 = Number($("#datanhacai p:eq(0)").text());
var nhacai1 = Number($("#datanhacai p:eq(1)").text());
var nhacai2 = Number($("#datanhacai p:eq(2)").text());
if ((nhacai0 + nhacai1 + nhacai2) < 10) {
var tongnhacai = (nhacai0 + nhacai1 + nhacai2);
} else {
var tongnhacai = ((nhacai0 + nhacai1 + nhacai2) - ((Math.floor((nhacai0 + nhacai1 + nhacai2) / 10) * 10)));
};
var nguoichoi0 = Number($("#databaiban p:eq(0)").text());
var nguoichoi1 = Number($("#databaiban p:eq(1)").text());
var nguoichoi2 = Number($("#databaiban p:eq(2)").text());
if ((nguoichoi0 + nguoichoi1 + nguoichoi2) < 10) {
var tongnguoichoi = (nguoichoi0 + nguoichoi1 + nguoichoi2);
} else {
var tongnguoichoi = ((nguoichoi0 + nguoichoi1 + nguoichoi2) - ((Math.floor((nguoichoi0 + nguoichoi1 + nguoichoi2) / 10) * 10)));
};
alert('Nhà cái :' + tongnhacai);
alert('Người chơi :' + tongnguoichoi);
if (tongnhacai > tongnguoichoi) {
alert('Thua: - ' + (tongnhacai - tongnguoichoi) + '000 điểm');
} else if (tongnhacai < tongnguoichoi) {
alert('Thắng: + ' + (tongnguoichoi - tongnhacai) + '000 điểm');
} else {
alert('Hòa!');
};
};
};
});
if ($(this).text() == "u") {
clearInterval(baingua);
alert('Quá trình kiểm tra dữ liệu gặp sự cố. Chọn OK để tải lại!');
window.location.reload();
};
});
if ($("#databaingua>.fmviBaitay").length == 52) {
$("#datanhacai").html('<div id="nhacaiupbai"><div class="fmviBaitay blue"><span class="baisap">♦♦♦♦

Unknown end tag for &lt;/span&gt;

<span class="baisap">♦♦♦♦

Unknown end tag for &lt;/span&gt;

<span class="baisap">♦♦♦♦

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;

<div class="fmviBaitay blue"><span class="baisap">♦♦♦♦

Unknown end tag for &lt;/span&gt;

<span class="baisap">♦♦♦♦

Unknown end tag for &lt;/span&gt;

<span class="baisap">♦♦♦♦

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;

<div class="fmviBaitay blue"><span class="baisap">♦♦♦♦

Unknown end tag for &lt;/span&gt;

<span class="baisap">♦♦♦♦

Unknown end tag for &lt;/span&gt;

<span class="baisap">♦♦♦♦

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

');
$("#databaisap .fmviBaitay:lt(3)").remove();
$("#datanhacai").append($("#databaingua #0.fmviBaitay"));
$("#datanhacai").append($("#databaingua #1.fmviBaitay"));
$("#datanhacai").append($("#databaingua #2.fmviBaitay"));
$("#datanhacai>div:not('#nhacaiupbai')").hide();
clearInterval(baingua);
};
}, 10);


Unknown end tag for &lt;/script&gt;



```

Nguồn: http://www.fmvi.vn