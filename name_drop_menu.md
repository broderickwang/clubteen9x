**Tác Giả : Notme** Style: c3zone.net
**Demo : maitruongmenyeu.org** Ghi chú : Code dưới đây giao diện giống c3zone vì mình thấy cái giao diện đó rất cool.
Code này làm cái script chèn vô

```


function menu(button, div, id) {
var div = document.getElementById(div);
var lylich = document.getElementById('lylich');
var wall = document.getElementById('wall');
var wwall = document.getElementById('wwall');
var sta = document.getElementById('sta');
var pm = document.getElementById('pm');
var ban = document.getElementById('ban');
lylich.setAttribute('href', '/u' + id);
wall.setAttribute('href', '/u' + id + 'wall');
ban.setAttribute('href', '/u' + id + 'friends');
pm.setAttribute('href', '/privmsg?mode=post&amp;u=' + id);
sta.setAttribute('href', '/u' + id + 'stats');
wwall.setAttribute('href', '/postp/' + id);
var visible = div.style.visibility;

var cd = FindXY(button);
var h = button.offsetHeight;
var i = 0;
while (i < selectId.length) {
if (document.getElementById(selectId[i])) {
document.getElementById(selectId[i]).style.visibility = 'hidden'
}
i++
}
div.style.visibility = 'visible';

overFlowX = cd['x'] + div.offsetWidth - document.body.offsetWidth;
cd['x'] = overFlowX > 0 ? cd['x'] - overFlowX : cd['x'];
div.style.left = cd['x'] + 'px';
div.style.top = (cd['y'] + h) + 'px';

};
function anmenu() {
var div = document.getElementById('mtmy');
div.style.visibility = 'hidden'
};
$(function () {

$(".username a[href^='/u']").click(function () {
menu(this, 'mtmy', $(this).attr('href').slice(2));
return false
})
});

```
css:

```


.select{background-color:#FFF;border:1px solid #BCBCBC;left:0;overflow:hidden;position:absolute;top:0;width:0;z-index:999}.select p{font-size:.7em;margin:0;padding:4px 6px;text-align:left;white-space:nowrap}.select button,.select div{background-color:#FFF;border:none;font-size:1em;margin:0;padding:4px;text-align:left}.select div{border:1px dashed #fff;padding:1px}.select div a{white-space:nowrap}.select hr{margin:2px;padding:0}.select div:hover{border:1px dashed #ccc}.select div img{vertical-align:middle}

```

Chèn vào cuối header

```


<div style="width:auto;visibility:hidden;padding:5px" class="select" id="mtmy">
<div>
<a id="lylich" href="" target="_blank"><img src="http://i69.servimg.com/u/f69/11/79/54/63/pf10.gif"/> Lý lịch

Unknown end tag for &lt;/a&gt;

 <a style="float:right"><img onclick="anmenu();" src="http://illiweb.com/fa/cross.png" alt="Đóng cửa sổ này"/>

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/div&gt;


<div>
<a id="wall" href="" target="_blank"><img src="/users/1214/94/30/93/album/wall10.png"/> Xem tường nhà

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/div&gt;


<div>
<a id="sta" href="" target="_blank"><img src="/users/1214/94/30/93/album/icon_s10.png"/> Thống kê

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/div&gt;


<div>
<a id="ban" href="" target="_blank"><img src="/users/1214/94/30/93/album/fri10.jpg"/> Bạn bè

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/div&gt;


<hr>
<div>
<a id="pm" href="" target="_blank"><img src="http://i69.servimg.com/u/f69/11/79/54/63/pm10.gif"/> Nhắn tin

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/div&gt;


<div>
<a id="wwall" href="" target="_blank"><img src="/users/1214/94/30/93/album/write-10.gif"/> Viết lên tường

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;



```
để xài được bạn đặt tên vào trong **class="username"** nhé