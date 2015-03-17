Demo: www.fmvi.vn

Bước 1: ACP - Display - Pictures and Colors - Colors - CSS Stylesheet

```


/* ads text link www.FMvi.vn */
.adstextfmvi{width:500px;border:0;padding:10px}
.logoadsfmvi{padding-right:10px}
.logoadsfmvi img{height:120px}
.textadsfmvi p{border-bottom:1px solid #DDD;box-shadow:0 1px 0 #000;font-weight:700;padding-bottom:3px}
.textadsfmvi div{height:98px;overflow:hidden;padding-top:5px;text-align:justify}
.textfooter a{padding-left:20px}
.textfooter{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:210px}
.textadsfmvi p{font-variant:small-caps;font-weight:700;padding-left:20px;text-shadow:-1px -1px 0 rgba(255,255,255,0.3), 1px 1px 0 rgba(0,0,0,0.8)}
```

Bước 2: ACP - Display - Templates - QLTT - overall\_footer\_begin
Tìm:

```


<div id="pun-about" class="clearfix">
```

và đặt code sau vào bên dưới nó:

```


<div style="float: left; width: 100%; border-bottom: 1px solid rgb(221, 221, 221); margin-bottom: 10px; padding-bottom: 10px;">
<ul>
<li style="float: left; text-align: left; width: 25%;">
<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;


<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;


<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;


<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;


<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/li&gt;


<li style="text-align: left; float: left; width: 25%">
<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;


<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;


<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;


<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;


<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/li&gt;


<li style="text-align: left; float: left; width: 25%">
<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;


<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;


<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;


<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;


<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/li&gt;


<li style="text-align: left; float: left; width: 25%">
<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;


<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;


<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;


<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;


<p class="textfooter">text link

Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;



```
Bước 3: ACP - Modules - HTML & JAVASCRIPT - HTML pages management - Create new HTML page:

> Title **: Ads text link FMvi.vn
> Do you wish to use your forum header and footer ? No
> Use this page as homepage ? No**

```


<!-- /* Copyright ©  by FmVi. All Rights Reserved. Use, modification, and/or distribution of this script is not allowed without direct permission from baivong (webmaster@fmvi.vn). This entire copyright notice must remain in the original, copied, or modified script */
var adsFMvi = new Array();

adsFMvi[0] = 'http://www.fmvi.vn|Vietnamese Forumotion|http://i48.servimg.com/u/f48/16/58/89/73/logofm12.png|Diễn đàn <strong><font color="#216A8C">FM

Unknown end tag for &lt;/font&gt;

<font color="red">vi

Unknown end tag for &lt;/font&gt;

.<font color="green">vn

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/strong&gt;

 được xây dựng hướng đến đối tượng là các admin <strong><font color="#216A8C">Forum

Unknown end tag for &lt;/font&gt;

<font color="green">otion

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/strong&gt;

, với mục đích giao lưu, chia sẽ kiến thức và xây dựng ứng dụng nhằm phát huy tối đa thế mạnh của dịch vụ này.<br />Phiên bản tiếng anh <font color="orange"><strong>http://en.fmvi.org

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/font&gt;

<br /><img src="http://pr.prchecker.info/getpr.php?codex=aHR0cDovL3d3dy5mbXZpLnZu&tag=3" alt="Google PageRank Checker" style="border:0;" />|#F80CB0|http://www.fileden.com/files/2010/4/14/2827429/faviconfm.ico';

var ads;
for (ads = 0; ads < 20; ads++) {
adsfmvi(adsFMvi[ads], ads)
}

function adsfmvi(fm, vi) {
var ads = fm.split("|");
jQuery(".textfooter:eq(" + vi + ")").html('<a style="background: url(' + ads[5] + ') no-repeat scroll left center transparent;" onmouseover="show_tooltip(this, jQuery(this).next().html(), 'FMvi.vn')" alt="' + ads[1] + '" title="' + ads[0] + '" href="' + ads[0] + '">' + ads[1] + '

Unknown end tag for &lt;/a&gt;

<div style="display:none"><table class="adstextfmvi"><tbody><tr><td class="logoadsfmvi"><img alt="' + ads[1] + '" src="' + ads[2] + '">

Unknown end tag for &lt;/td&gt;

<td class="textadsfmvi"><p style="background: url(' + ads[5] + ') no-repeat scroll left center transparent;color:' + ads[4] + '">' + ads[1] + '

Unknown end tag for &lt;/p&gt;

<div>' + ads[3] + '

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;

')
} // --- >

```

Cách thêm text link:
adsFMvi[Số thứ tự] = 'URL forum|Tên forum|URL logo|Giới thiệu forum|Mã màu cho tên forum|URL icon forum';

Chú ý: Nếu forum bạn chưa có sử dụng tooltip (skin Skin FMvi ver.2 đã có sẵn) thì làm như sau:
Ở bước 1 Thêm đoạn CSS sau:

```


#tooltip{max-width:550px;position:absolute;background-image:url(http://i48.servimg.com/u/f48/13/58/60/43/opacit10.png);border:0;padding:0;border-radius:3px;color:#FFF;z-index:99;}
#tooltip .header{díplay:none}
```

Trong bước 3, thêm vào trước // --- > code sau:

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

var current_tooltip;

function show_tooltip(caller, content, content_title) {
var current_tooltip = get_item('tooltip');
if (!current_tooltip) {
var current_tooltip = document.createElement('div');
current_tooltip.setAttribute('id', 'tooltip');
document.body.appendChild(current_tooltip)
}
current_tooltip.style.zIndex = 100;
current_tooltip.style.position = 'absolute';
if (content_title) {
content = '<p class="header">' + content_title + '

Unknown end tag for &lt;/p&gt;

<p>' + content + '

Unknown end tag for &lt;/p&gt;

'
} else {
content = '<p>' + content + '

Unknown end tag for &lt;/p&gt;

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
var offsetxpoint = -60;
var offsetypoint = 20;
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

Cuối cùng là click vào đây và sao chép về hướng dẫn cho mem.


Điều kiện: Không có điều kiện cụ thể, lấy 10 text link theo mức độ ưu tiên sau:

> Page rank, check tại: http://www.prchecker.info/
> Traffic rank, check tại: http://www.alexa.com/
> Mức hỗ trợ tài chính cho FMvi.vn
> Số lượng thành viên và bài viết.
> Chủ đề thiết kế web và học tập.
> Nội dung diễn đàn.
> Vị trí đặt text link của FMvi.vn



Mẫu đăng ký:

> URL forum: Chỉ đăng ký một tên miền chính dẫn đến forum, nếu link die text link sẽ bị xóa.
> Tên forum: Không quá 70 ký tự và phụ hợp nội dung diễn đàn.
> URL logo: Kích thước 120x120 px.
> Giới thiệu: Nếu dùng HTML thì phải đặt trong thẻ [code](code.md) và không dài quá 300 ký tự.
> Mã màu: Màu của tên forum.
> URL icon forum: Kích thước 16x16 px.



```


URL forum: http://diendan.4allvn.biz/forum
Tên forum: Mái Nhà Tình bạn
URL logo: http://profile.ak.fbcdn.net/hprofile-ak-ash2/261163_204998232894128_7528967_n.jpg
Giới thiệu: Mái Nhà Tình Bạn ra đời với mong muốn sẽ là nơi để mọi người quy tụ cùng nhau học hỏi, thư giãn và chia sẻ mọi nỗi buồn vui trong cuộc sống, là nơi tình bạn được vinh danh, cho dù đó chỉ là những con người ảo nhưng ẩn bên trong là những trái tim đầy ấp chân tình và niềm tin yêu đáng quý.
Mã màu: #F80CB0
URL icon forum: http://i34.servimg.com/u/f34/14/04/26/89/navbit10.gif```