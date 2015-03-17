![http://i48.servimg.com/u/f48/16/58/45/96/untitl15.jpg](http://i48.servimg.com/u/f48/16/58/45/96/untitl15.jpg)

Bước 1 :Cho đoạn code sau vào: MODULES > HTML & JAVASCRIPT > Javascript codes management :
Title **: Tuỳ bạn
Placement : In the home page**


```

var CopyrightNotice = 'Reformatted Recent Topics widget script for forumotion phpBB3 and Invision boards. Copyright © 2011 by Dion Designs. All Rights Reserved. Use and/or modification of this script is allowed, provided this entire copyright notice remains in the original or modified script. Distribution is not allowed without written consent from Dion Designs.';

function rtnew() {
var y=document.createElement('div');
y.id='rtopic';
var x=$('#right .module')[0];
var au=$(x).find('a:odd').get();
var to=$(x).find('a:even').get();
for (i=au.length-1;i>=0;i--) {
var z=document.createElement('tr');
var time=au[i].nextSibling.nodeValue;
z.appendChild(au[i]);
z.insertBefore(to[i],au[i]);
$(au[i]).before('<td>'+time+'

Unknown end tag for &lt;/td&gt;

');
$(au[i]).wrap('<td>

Unknown end tag for &lt;/td&gt;

');
$(to[i]).wrap('<td>

Unknown end tag for &lt;/td&gt;

');
y.insertBefore(z,y.firstChild);
}
y.innerHTML='<div id="rtitle"><b>Recent Topics

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/div&gt;

<table id="rtable" cellspacing="0"><tr><th class="ddto"><b>Topic

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/th&gt;

<th class="ddti"><b>Time Posted

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/th&gt;

<th class="ddau"><b>Author

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/th&gt;



Unknown end tag for &lt;/tr&gt;

'+y.innerHTML+'

Unknown end tag for &lt;/table&gt;

';
$('#content-container').before(y);
}

$(function() {
if (document.getElementById('chatbox_popup')) {rtnew();}
$('#right .module').eq(0).remove();
});
```


Bước 2 : Cho đoạn code sau vào Css

```

#rtopic {width:900px;margin:10px auto;padding:0 6px 5px;background:#1675bc;font-family:Verdana;font-size:12px;text-align:center;border-radius:6px;}
#rtitle {height:30px;line-height:30px;color:#fff;font-size:14px;}
#rtable {width:100%;border-collapse:collapse;}
#rtable th {padding:5px 0;background:#cadceb;border:1px solid #1675bc;}
#rtable td {padding:5px;background:#fff;border:1px solid #1675bc;font-family:Tahoma;}
.ddto {width:50%;}
.ddti {width:25%;}
.ddau {width:auto;}

```

Bước 3 :
MODULES > Portal & Widgets > Forum widgets management : chỉnh như hình sau

![http://i48.servimg.com/u/f48/16/58/45/96/123410.jpg](http://i48.servimg.com/u/f48/16/58/45/96/123410.jpg)

Kick vào bánh xe màu vàng của Recent topics
Activate the topics scrolling : chọn không

Bước 4 :
MODULES > Chatbox > Cấu hình diễn đàn > ChatBox configuration > Activate the ChatBox : Chọn có
và chọn Do not Display

ok vậy là xong :D bài đầu tiên vxcvaa
thấy hay nhớ Thank nhá
