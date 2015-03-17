Bước 1: Tạo 1 trang html, copy và paste codes sau vào và save lại

```

var offsetfromcursorX = 12;
var offsetfromcursorY = 10;
var offsetdivfrompointerX = 10;
var offsetdivfrompointerY = 13;
document.write('<div id="dhtmltooltip">

Unknown end tag for &lt;/div&gt;

');
document.write('<img id="dhtmlpointer" src="http://i44.servimg.com/u/f44/13/54/69/46/pointe10.gif">');
var ie = document.all;
var ns6 = document.getElementById && ! document.all;
var enabletip = false;
var  tipobj = document.getElementById("dhtmltooltip");
var pointerobj = document.getElementById("dhtmlpointer");
function ietruebody() {
return (document.compatMode && document.compatMode != "BackCompat") ? document.documentElement : document.body;
}
String.prototype.trim = function () {
return this.replace(/^\s*/, "").replace(/\s*$/, "");
}
function showtip(thetext, thewidth, thecolor) {
if (ns6 || ie) {
if (typeof thewidth != "undefined")
tipobj.style.width = thewidth + "px";
if (typeof thecolor != "undefined" && thecolor != "")
tipobj.style.backgroundColor = thecolor;
thetext = thetext.trim();
var arr = thetext.split(" ");
for(i=0;i<arr.length;i++)
if(arr[i].length>=40)
thetext=thetext.replace(arr[i],arr[i].substr(0,40)+"...");
tipobj.innerHTML = thetext;
enabletip = true;
return false;
}
}
function positiontip(e) {
if (enabletip) {
var nondefaultpos = false;
var curX = (ns6) ? e.pageX : event.clientX + ietruebody().scrollLeft;
var curY = (ns6) ? e.pageY : event.clientY + ietruebody().scrollTop;
var winwidth = ie && ! window.opera ? ietruebody().clientWidth : window.innerWidth - 20;
var winheight = ie && ! window.opera ? ietruebody().clientHeight : window.innerHeight - 20;
var rightedge = ie && ! window.opera ? winwidth - event.clientX - offsetfromcursorX : winwidth - e.clientX - offsetfromcursorX;
var bottomedge = ie && ! window.opera ? winheight - event.clientY - offsetfromcursorY : winheight - e.clientY - offsetfromcursorY;
var leftedge = (offsetfromcursorX < 0) ? offsetfromcursorX * (- 1) : - 1000;
if (rightedge < tipobj.offsetWidth) {
tipobj.style.left = curX - tipobj.offsetWidth + "px";
nondefaultpos = true;
}
else if (curX < leftedge)
tipobj.style.left = "5px";
else {
tipobj.style.left = curX + offsetfromcursorX - offsetdivfrompointerX + "px";
pointerobj.style.left = curX + offsetfromcursorX + "px";
}
if (bottomedge < tipobj.offsetHeight) {
tipobj.style.top = curY - tipobj.offsetHeight - offsetfromcursorY + "px";
nondefaultpos = true;
}
else {
tipobj.style.top = curY + offsetfromcursorY + offsetdivfrompointerY + "px";
pointerobj.style.top = curY + offsetfromcursorY + "px";
}
tipobj.style.visibility = "visible";

if (! nondefaultpos)
pointerobj.style.visibility = "visible";
else
pointerobj.style.visibility = "hidden";
}
}
function hidetip() {
if (ns6 || ie) {
enabletip = false;
tipobj.style.visibility = "hidden";
pointerobj.style.visibility = "hidden";
tipobj.style.left = "-1000px";
tipobj.style.backgroundColor = '';
tipobj.style.width = '';
}
}
document.onmousemove = positiontip;
```

> Bước 2: Lấy link trang html trên thay vô đoạn code script sau:

```

<script type="text/javascript" src="link trang html">

Unknown end tag for &lt;/script&gt;



```
Bước 3: Copy và chèn script trên vào trước thẻ

```



Unknown end tag for &lt;/head&gt;


```
trong Overall\_header


:c: Bước 4: Thêm đoạn code sau dưới cùng CSS
cho nó hiên đen đen. hehe

```

/* tooltip-------------------------------------------------------------*/

#dhtmlpointer, #dhtmltooltip
{
z-index: 999;
left: -300px; top:0px;
visibility: hidden;
position: absolute;
}
#dhtmltooltip
{-moz-opacity:.8;filter:alpha(opacity=80);left:-300px;opacity:.8;position:absolute;top:0;visibility:hidden;z-index:999}#c3tooltip{-moz-border-radius:6px;-webkit-border-radius:6px;background-color:#000;border:#000 0 solid;border-radius:6px;color:#fff;font-family:Arial;font-size:9pt;font-weight:700;max-width:340px;padding:15px;text-align:left;width:expression(document.body.clientWidth>340?"340px":"auto")}```

hee:
Nếu bạn muốn nó có màu đen thì dùng cái này, đảm bảo ok
1 trang html:
```

var offsetfromcursorX = 12;
var offsetfromcursorY = 10;
var offsetdivfrompointerX = 10;
var offsetdivfrompointerY = 13;
document.write('<div id="dhtmltooltip">

Unknown end tag for &lt;/div&gt;

');
document.write('<img id="dhtmlpointer" src="http://www.c3zone.net/users/2611/10/63/87/album/pointe10.gif">');
var ie = document.all;
var ns6 = document.getElementById && ! document.all;
var enabletip = false;
var  tipobj = document.getElementById("dhtmltooltip");
var pointerobj = document.getElementById("dhtmlpointer");
function ietruebody() {
return (document.compatMode && document.compatMode != "BackCompat") ? document.documentElement : document.body;
}
String.prototype.trim = function () {
return this.replace(/^\s*/, "").replace(/\s*$/, "");
}
function showtip(thetext, thewidth, thecolor) {
if (ns6 || ie) {
if (typeof thewidth != "undefined")
tipobj.style.width = thewidth + "px";
if (typeof thecolor != "undefined" && thecolor != "")
tipobj.style.backgroundColor = thecolor;
thetext = thetext.trim();
var arr = thetext.split(" ");
for(i=0;i<arr.length;i++)
if(arr[i].length>=40)
thetext=thetext.replace(arr[i],arr[i].substr(0,40)+"...");
tipobj.innerHTML = thetext;
enabletip = true;
return false;
}
}
function positiontip(e) {
if (enabletip) {
var nondefaultpos = false;
var curX = (ns6) ? e.pageX : event.clientX + ietruebody().scrollLeft;
var curY = (ns6) ? e.pageY : event.clientY + ietruebody().scrollTop;
var winwidth = ie && ! window.opera ? ietruebody().clientWidth : window.innerWidth - 20;
var winheight = ie && ! window.opera ? ietruebody().clientHeight : window.innerHeight - 20;
var rightedge = ie && ! window.opera ? winwidth - event.clientX - offsetfromcursorX : winwidth - e.clientX - offsetfromcursorX;
var bottomedge = ie && ! window.opera ? winheight - event.clientY - offsetfromcursorY : winheight - e.clientY - offsetfromcursorY;
var leftedge = (offsetfromcursorX < 0) ? offsetfromcursorX * (- 1) : - 1000;
if (rightedge < tipobj.offsetWidth) {
tipobj.style.left = curX - tipobj.offsetWidth + "px";
nondefaultpos = true;
}
else if (curX < leftedge)
tipobj.style.left = "5px";
else {
tipobj.style.left = curX + offsetfromcursorX - offsetdivfrompointerX + "px";
pointerobj.style.left = curX + offsetfromcursorX + "px";
}
if (bottomedge < tipobj.offsetHeight) {
tipobj.style.top = curY - tipobj.offsetHeight - offsetfromcursorY + "px";
nondefaultpos = true;
}
else {
tipobj.style.top = curY + offsetfromcursorY + offsetdivfrompointerY + "px";
pointerobj.style.top = curY + offsetfromcursorY + "px";
}
tipobj.style.visibility = "visible";

if (! nondefaultpos)
pointerobj.style.visibility = "visible";
else
pointerobj.style.visibility = "hidden";
}
}
function hidetip() {
if (ns6 || ie) {
enabletip = false;
tipobj.style.visibility = "hidden";
pointerobj.style.visibility = "hidden";
tipobj.style.left = "-1000px";
tipobj.style.backgroundColor = '';
tipobj.style.width = '';
}
}
document.onmousemove = positiontip;
```
còn việc lấy link rồi chèn vào header thì như trên đã hướng dẫn.

sau đó chèn vào Css cái này:
```

#dhtmlpointer, #dhtmltooltip {
-moz-opacity: .8;
filter: alpha(opacity=80);
left: -300px;
opacity: .8;
position: absolute;
top: 0;
visibility: hidden;
z-index: 999
}

#dhtmltooltip {
-moz-border-radius: 6px;
-webkit-border-radius: 6px;
background-color: #000;
border: #000 0 solid;
border-radius: 6px;
color: #fff;
font-family: Arial;
font-size: 9pt;
font-weight: 700;
max-width: 340px;
padding: 15px;
text-align: left;
width: expression(document.body.clientWidth>340?"340px":"auto")
}

```
xong.