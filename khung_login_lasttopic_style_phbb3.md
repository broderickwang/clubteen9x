ôm nay mình sẽ share cho các bạn 2 mod rất hữu dụng cho forum đó là khung đăng nhập & lasttopic với style mới cho phpbb3 và invision.
DEMO khung đăng nhập:
**Hình ảnh**

Enlarge this image Click to see fullsize


Enlarge this image Click to see fullsize


**Online
http://chiaseforum.co.cc/**

DEMO lasttopic style mới:

![http://i48.servimg.com/u/f48/16/88/93/84/2_bmp10.jpg](http://i48.servimg.com/u/f48/16/88/93/84/2_bmp10.jpg)

![http://i48.servimg.com/u/f48/16/88/93/84/1_bmp12.jpg](http://i48.servimg.com/u/f48/16/88/93/84/1_bmp12.jpg)


BẮT ĐẦU:


**KHUNG ĐĂNG NHẬP CHO PHPBB3 + INVISION
- Vào Modules > Portal & Widgets > Forum widgets management, sau đó chọn Create a widget**



- Sau đó cho code sau vào:

```



jQuery(function() {
x=document.getElementById('i_icon_mini_login');
y=document.getElementById('i_icon_mini_logout');
if(x) {
jQuery('#logo').after('


[color=white]Tài khoản :[/color]  [color=white]Mật khẩu :[/color]  [color=white]Ghi nhớ ?[/color]  ');
}


else if(y) {

Xin chào, [b]{USERNAME}. [/b] [url=http://www.skin4fm.com//privmsg?folder=inbox][b][color=white] [Thông điệp ▼] -[/color][/b][/url][url=http://www.skin4fm.com//profile?mode=editprofile][b][color=white] [Điều chỉnh] - [/color][/b][/url][url=http://www.skin4fm.com//login?logout=1][b][color=white] [Thoát] [/color][/b][/url]
');
}
});






jQuery(function(){jQuery(".c3login").attr('action','/login?redirect='+this.location.pathname);});


```

Nhấn Chấp nhận
- Sau đó cho widget vừa tạo hoạt động, vd:


Thế là xong cái bảng đăng nhập.

**LASTTOPIC STYLE MỚI CHO PHPBB3 + INVISION
- Vào Modules > HTML & JAVASCRIPT > Javascript codes management > Tạo trang javascript với nội dung:**

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
$(au[i]).before(''+time+'');
$(au[i]).wrap('');
$(to[i]).wrap('');
y.insertBefore(z,y.firstChild);
}
y.innerHTML='
[b]Recent Topics[/b][table id="rtable" cellspacing="0"][tr][b]Topic[/b][b]Time Posted[/b][b]Author[/b][/tr]'+y.innerHTML+'[/table]';
$('#content-container').before(y);
}

$(function() {
if (document.getElementById('chatbox_popup')) {rtnew();}
$('#right .module').eq(0).remove();
});
```

![http://i48.servimg.com/u/f48/16/88/93/84/1_bmp13.jpg](http://i48.servimg.com/u/f48/16/88/93/84/1_bmp13.jpg)



![http://i48.servimg.com/u/f48/16/88/93/84/1_bmp13.jpg](http://i48.servimg.com/u/f48/16/88/93/84/1_bmp13.jpg)



- Cho vào CSS:

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
- Vào MODULES > Portal & Widgets > Forum widgets management, chỉnh như hình sau


Enlarge this image Click to see fullsize


Thế là xong lasttopic.

![http://i48.servimg.com/u/f48/16/58/45/96/123410.jpg](http://i48.servimg.com/u/f48/16/58/45/96/123410.jpg)
![http://i48.servimg.com/u/f48/16/58/45/96/123410.jpg](http://i48.servimg.com/u/f48/16/58/45/96/123410.jpg)

Nếu làm được thì thanks mình nhé !


Contact: Admin http://chiaseforum.co.cc/