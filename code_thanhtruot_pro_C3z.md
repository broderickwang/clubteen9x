![http://nd4.upanh.com/b2.s17.d1/5a5ca893d9439692203634c487294bb3_35520354.capture.jpg](http://nd4.upanh.com/b2.s17.d1/5a5ca893d9439692203634c487294bb3_35520354.capture.jpg)
Css:

```

.c3pag{-moz-border-radius-topleft:14px;-webkit-border-top-left-radius:14px;background:#F4FFBF;border:2px
solid
#ccc;bottom:0;font-size:11px;font-weight:700;padding:15px;position:fixed;right:0}input.c3zotion{-moz-border-radius:6px;-webkit-border-radius:6px;border:1.3px
dashed
#009FBF!important;font-weight:700;height:30px;margin-top:7px;text-transform:uppercase;width:170px}
```

Bước 2 :
Index\_body đặt vào cuối:


```

<style
type="text/css">.c3pag {padding:6px!important}

Unknown end tag for &lt;/style&gt;

<div
class="c3pag"><a href="#top" onmouseover="showtip('Lên đầu
trang');" onmouseout="hidetip();"><img height="24"
src="http://i1228.photobucket.com/albums/ee457/ca3forum/SVNH/up-icon.png">

Unknown end tag for &lt;/a&gt;


<a href="#baimoi" onmouseover="showtip('Thống kê bài viết');"
onmouseout="hidetip();"><img height="24"
src="http://i1228.photobucket.com/albums/ee457/ca3forum/SVNH/edit-icon.png">

Unknown end tag for &lt;/a&gt;


<a href="#chatbox" onmouseover="showtip('Chatbox');"
onmouseout="hidetip();" ><img height="24"
src="http://i1228.photobucket.com/albums/ee457/ca3forum/SVNH/chat-icon.png">

Unknown end tag for &lt;/a&gt;


<a href="#thongke" onmouseover="showtip('Thống kê Forum [A5]');"
onmouseout="hidetip();"><img height="24"
src="http://i1228.photobucket.com/albums/ee457/ca3forum/SVNH/help-icon.png">

Unknown end tag for &lt;/a&gt;


<a href="#bottom" onmouseover="showtip('Xuống cuối trang');"
onmouseout="hidetip();"><img height="24"
src="http://i1228.photobucket.com/albums/ee457/ca3forum/SVNH/down-icon.png">

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/div&gt;


```

Đặt tên liên kết để di chuyển:

```

<a name="tên">

Unknown end tag for &lt;/a&gt;



```
Ví dụ trong code trên có:

```

<a href="#baimoi" onmouseover="showtip('Thống kê bài viết');" onmouseout="hidetip();">
```


Thì bạn kiếm đoạn đặt lasttopic thêm vào trên nó:

```

<a name="baimoi">

Unknown end tag for &lt;/a&gt;


```

Nguồn C3zone