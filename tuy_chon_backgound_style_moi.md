Demo: http://hollyland.forumvi.com (view từ đây ý Mắc cỡ)

Code:
Javascript:

```


$(document).ready(function () {
laycookie();
$('#skin-1').click(function () {
skinhl(1)
});
$('#skin-2').click(function () {
skinhl(2)
});
$('#skin-3').click(function () {
skinhl(3)
});
$('#skin-4').click(function () {
skinhl(4)
});
$('#skin-11').click(function () {
skinhl(11)
});
$('#skin-12').click(function () {
skinhl(12)
});
$('#skin-none').click(function () {
$('.tcskin').fadeIn();
$('.luuskin').val(my_getcookie('tcskin')).select();
$('.skinok').click(function () {
if($('.luuskin').val().search('http') != -1 && ($('.luuskin').val().search('jpg') != -1 || $('.luuskin').val().search('png') != -1 || $('.luuskin').val().search('gif') != -1)) {
my_setcookie('tcskin', $('.luuskin').val(), 1);
skinhl_none();
$('.tcskin').fadeOut()
} else {
$('.luuskin').val('Link ảnh không hợp lệ')
}
});
$('.skinko').click(function () {
$('.tcskin').fadeOut()
})
})
});
function skinhl(skin) {
my_setcookie('skvds', skin, 1);
laycookie()
};
function skinhl_none() {
my_setcookie('skvds', 'none', 1);
laycookie()
};
function laycookie() {
if(my_getcookie('skvds')) {
soskin = my_getcookie('skvds');
if(soskin == 'none') {
bgskinhl = "#000 url(" + my_getcookie('tcskin') + ") no-repeat fixed 50% 50%"
} else if(soskin == '1') {
bgskinhl = '#0D0D0D url(http://i44.servimg.com/u/f44/15/64/85/86/1-body10.jpg) no-repeat fixed 50% 0'
} else if(soskin == '2') {
bgskinhl = '#101721 url(http://i46.servimg.com/u/f46/16/16/16/68/bg-hom10.jpg) no-repeat fixed 50% 0'
} else if(soskin == '3') {
bgskinhl = '#101721 url(http://i46.servimg.com/u/f46/16/16/16/68/backgr12.jpg) no-repeat fixed 50% 0'
} else if(soskin == '4') {
bgskinhl = '#101721 url(http://i46.servimg.com/u/f46/16/16/16/68/backgr11.jpg) no-repeat fixed 50% 0'
} else if(soskin == '11') {
bgskinhl = '#131313 url(http://i46.servimg.com/u/f46/16/16/16/68/20080910.jpg) no-repeat fixed 50% 0'
} else if(soskin == '12') {
bgskinhl = '#000000 url(http://i46.servimg.com/u/f46/16/16/16/68/backgr13.jpg) no-repeat fixed 50% 0'
};
$('body').css('background', bgskinhl)
} else {
skinbandau = 1 + Math.floor(Math.random() * 12);
if(skinbandau == 1) {
skinhl(1)
}
if(skinbandau == 2) {
skinhl(2)
}
if(skinbandau == 3) {
skinhl(3)
}
if(skinbandau == 4) {
skinhl(4)
}
if(skinbandau == 11) {
skinhl(11)
}
if(skinbandau == 12) {
skinhl(12)
}
}
};

```
CSS:

```


.stylevandonstar{
z-index: 999;
padding:5px;
position: absolute;
overflow:hidden;
height: 60px;}
.stylevandonstar:hover{height: auto; background-image: url("http://i48.servimg.com/u/f48/13/58/60/43/mainco13.png");}
#skin-none, li.stylevds{cursor: pointer;}
#skin-none:hover, li.stylevds:hover{background-color: #ffff00;}
.tcskin{display:none;position:fixed;padding:10px;width:300px;height:auto;top:40%;left:50%;margin-left:-130px;border:5px solid #000;background:#fff;z-index: 999;}
.bgtest{display:none;}
.luuskin{width:100%;}
.skinok,.skinko{cursor:pointer;font-weight:bold;border:1px solid #000;margin:5px;padding:2px 5px;}
.skinok:hover,.skinko:hover{color:red;}
.an{display:none;}

```
Widget:

```


<div class="gen stylevandonstar"><img src="http://i48.servimg.com/u/f48/13/58/60/43/paint_10.png"><hr>
<li id="skin-1" class="stylevds">Style 1 <img width="30" height="20" src="http://i44.servimg.com/u/f44/15/64/85/86/1-body10.jpg"/>

Unknown end tag for &lt;/li&gt;


<li id="skin-11" class="stylevds">Style 2 <img width="30" height="20" src="http://i46.servimg.com/u/f46/16/16/16/68/20080910.jpg"/>

Unknown end tag for &lt;/li&gt;


<li id="skin-12" class="stylevds">Style 3 <img width="30" height="20" src="http://i46.servimg.com/u/f46/16/16/16/68/backgr13.jpg"/>

Unknown end tag for &lt;/li&gt;


<li id="skin-2" class="stylevds">Style 4 <img width="30" height="20" src="http://i46.servimg.com/u/f46/16/16/16/68/bg-hom10.jpg"/>

Unknown end tag for &lt;/li&gt;


<li id="skin-3" class="stylevds">Style 5 <img width="30" height="20" src="http://i46.servimg.com/u/f46/16/16/16/68/backgr12.jpg"/>

Unknown end tag for &lt;/li&gt;


<li id="skin-4" class="stylevds">Style 6 <img width="30" height="20" src="http://i46.servimg.com/u/f46/16/16/16/68/backgr11.jpg"/>

Unknown end tag for &lt;/li&gt;

<hr><span id="skin-none" class="stylevds" style>Tùy chọn

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;


<div class="tcskin" style="display: none; "><span class="gen">Vui lòng nhập 1 link ảnh làm nền

Unknown end tag for &lt;/span&gt;

<hr><input class="luuskin" value=""><hr><span class="skinok">Đồng Ý

Unknown end tag for &lt;/span&gt;

<span class="skinko">Thoát

Unknown end tag for &lt;/span&gt;

<img class="bgtest" src="">

Unknown end tag for &lt;/div&gt;


```


NOTE: Reply để xem toàn bộ nội dung.