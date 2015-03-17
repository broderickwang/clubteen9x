```

var versionMinor = parseFloat(navigator.appVersion);
var versionMajor = parseInt(versionMinor);
var IE = document.all && !window.opera && versionMajor < 7;
var IE7 = document.all && !window.opera && versionMajor >= 7;
var OP = window.opera;
var FF = document.getElementById;
var NS = document.layers;

function get_item(name, opener) {
if (IE) {
return (opener) ? window.opener.document.all[name] : document.all[name]
} else if (FF) {
return (opener) ? window.opener.document.getElementById(name) : document.getElementById(name)
} else if (NS) {
return (opener) ? window.opener.document.layers[name] : document.layers[name]
}
}
function change_display(name, value, opener) {
if (IE) {
element = (opener == true) ? window.opener.document.all[name].style : document.all[name].style
} else if (FF) {
element = (opener == true) ? window.opener.document.getElementById(name).style : document.getElementById(name).style
} else if (NS) {
element = (opener == true) ? window.opener.document.layers[name] : document.layers[name]
}
element.display = value
}
function reverse_display(name, opener) {
element = get_item(name);
if (!element) {
return false
}
var display = (element.style.display != 'block') ? 'block' : 'none';
change_display(name, display, opener)
}
var current_tooltip;

function show_tooltip(caller, content, content_title,tieudegiua) {
var current_tooltip = get_item('tooltip');
if (!current_tooltip) {
var current_tooltip = document.createElement('div');
current_tooltip.setAttribute('id', 'tooltip');
document.body.appendChild(current_tooltip)
}
current_tooltip.style.zIndex = 100;
current_tooltip.style.position = 'absolute';
if (content_title) {
content = '<table border="0" cellspacing="1" cellpadding="0"><tr><td class="header">' + content_title + '

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td class="noidung">' + content + '

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;

'
} else {
content = '<span>' + content + '

Unknown end tag for &lt;/span&gt;

'
}

current_tooltip.innerHTML = content;
current_tooltip.style.visibility = 'visible';
caller.onmousemove = move_tooltip;
caller.onmouseout = function () {
current_tooltip.style.visibility = "hidden"
};
caller.title = ''
}
var offsetxpoint = 20;
var offsetypoint = 5;
var real_body = (document.compatMode && document.compatMode != "BackCompat") ? document.documentElement : document.body;
real_body = (document.documentElement) ? document.documentElement : document.body;

function move_tooltip(e) {
var curX = (!IE) ? e.pageX : event.clientX + real_body.scrollLeft;
var curY = (!IE) ? e.pageY : event.clientY + real_body.scrollTop;
var rightedge = IE && !window.opera ? real_body.clientWidth - event.clientX - offsetxpoint : window.innerWidth - e.clientX - offsetxpoint - 20;
var bottomedge = IE && !window.opera ? real_body.clientHeight - event.clientY - offsetypoint : window.innerHeight - e.clientY - offsetypoint - 20;
var leftedge = (offsetxpoint < 0) ? offsetxpoint * (-1) : -1000;
current_tooltip = get_item('tooltip');
if (rightedge < current_tooltip.offsetWidth) current_tooltip.style.left = IE ? real_body.scrollLeft + event.clientX - current_tooltip.offsetWidth + "px" : window.pageXOffset + e.clientX - current_tooltip.offsetWidth + "px";
else if (curX < leftedge) current_tooltip.style.left = "5px";
else current_tooltip.style.left = curX + offsetxpoint + "px";
if (bottomedge < current_tooltip.offsetHeight) current_tooltip.style.top = IE ? real_body.scrollTop + event.clientY - current_tooltip.offsetHeight - offsetypoint + "px" : window.pageYOffset + e.clientY - current_tooltip.offsetHeight - offsetypoint + "px";
else current_tooltip.style.top = curY + offsetypoint + "px"
}
```

CSS

```

#tooltip{
padding:0;
max-width:50% !important;
color:#000;
border:1px solid #ddd;
background-color:#fff;
font-size:12px}
* html #tooltip{width:30%}
#tooltip hr{
border-bottom: 2px dashed #999;
height: 2px;}
#tooltip ul{padding:0 0 0 20px}
#tooltip dl{clear:both;position:relative;margin-bottom:10px}
#tooltip dt{float:left;border:medium none;padding-top:3px;width:50%}
#tooltip dd{margin-left:50%;padding-left:5px;vertical-align:top}
#tooltip .header{margin:0;
padding: 4px;
background: #fff url(http://i45.servimg.com/u/f45/16/75/78/56/tcatm11.gif) repeat;
color: #666;
font: bold 12px tahoma, verdana, geneva, lucida, 'lucida grande', arial, helvetica, sans-serif;
border-bottom: solid 1px #E0E0E0;
}```


Cách dùng:
Nơi nào bạn cần hiển thị nhét vô thẻ HTML code

```

onmouseover="show_tooltip(this,'Nội dung hiển thị ở đây','Tiêu đề');"```


VD:
code là

```


<a href="/">demo

Unknown end tag for &lt;/a&gt;


```

bạn thêm thành

```

<a href="/" onmouseover="show_tooltip(this,'Demo thôi mà','Demo');">demo

Unknown end tag for &lt;/a&gt;


```