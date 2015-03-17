Chức năng: Tạo BBcode để phát liên kết file nhạc từ zippyshare.com.

Demo:![http://i48.servimg.com/u/f48/16/58/89/73/th/27-12-10.jpg](http://i48.servimg.com/u/f48/16/58/89/73/th/27-12-10.jpg)


Hướng dẫn: ACP - Modules - HTML & JAVASCRIPT - Javascript codes management:

> Title **: BBcode phát nhạc từ zippyshare
> Placement : In the topics
> Javascript Code** :

```

$(document).ready(function () {
$("<button class=\"button2\" onmouseover=\"helpline('BBcode zippyshare')\" type=\"button\" onclick=\"fmvizippy()\"><img src=\"http://i48.servimg.com/u/f48/16/58/89/73/zippys10.png\" height=\"16px\"/></button> <img src=\"http://illiweb.com/fa/wysiwyg/separator.png\" style=\"vertical-align: middle;\">").insertBefore("span#text_edit input.button2[value='Others']");
$(".postbody").each(function () {
$(this).html($(this).html().replace(/\[zippy]/gi, ""));
$(".postbody a[href$='[/zippy]']").each(function () {
var a = $(this).text().slice(0, $(this).text().indexOf("[/zippy]"));
$(this).replaceWith('<div align="center"><div style="background-color: appworkspace; width: 550px;"><object width="550" height="115" name="single" class="single" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"><param value="http://www.vn88.com/dj/skinmedia/jwhplayer.swf" name="movie"><param value="true" name="allowfullscreen"><param value="always" name="allowscriptaccess"><param value="transparent" name="wmode"><param value="file=http://flashgameusa.com/vn88getmusic/zs.php?id=' + a + '&amp;logo=&amp;menu=false&amp;repeat=always&amp;stretching=none&amp;autostart=true&amp;image=http://i48.servimg.com/u/f48/16/58/89/73/player10.jpg" name="flashvars"><embed width="550" height="115" flashvars="file=http://flashgameusa.com/vn88getmusic/zs.php?id=' + a + '&amp;logo=&amp;menu=false&amp;repeat=always&amp;stretching=none&amp;autostart=true&amp;image=http://i48.servimg.com/u/f48/16/58/89/73/player10.jpg" wmode="transparent" allowfullscreen="true" allowscriptaccess="always" bgcolor="undefined" src="http://www.vn88.com/dj/skinmedia/jwhplayer.swf" name="single2" id="single2" type="application/x-shockwave-flash">

Unknown end tag for &lt;/object&gt;

<div style="width: 550px; padding: 10px 0pt;"><a href="' + a + '"><img src="http://i48.servimg.com/u/f48/16/58/89/73/vn88dl10.png" alt="download"/>

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

');
});
});
});
function fmvizippy() {
var name = prompt("Nhập vào đây liên kết đến tập tin zippyshare", "");
if (name != null && name != "" && name.indexOf("zippyshare.com") != -1 && name.indexOf("http") != -1 && name.indexOf("file.html") != -1) {
bbfontstyle('[zippy]' + name, '[/zippy]');
return false;
} else {
alert("Liên kết bạn nhập vào không đúng");
return false;
}
}

```

Cách sử dụng: Đặt liên kết zippyshare vào BBcode [zippy](zippy.md) như sau:

```

[zippy]Liên kết đến trang zippyshare chứa file nhạc[/zippy]

```
Ví dụ:

```

[zippy]http://www28.zippyshare.com/v/46607899/file.html[/zippy]
```

Bạn cũng có thể dùng nhanh BBcode này qua một button nằm bên trái BBcode Other.

Chú ý: Bạn cần cập nhật Templates header : http://help.forumotion.com/t92693-new-update-javascript-code-management
Tắt WYSIWYG (Nút a/A màu trắng) mới thấy được button Youtube.
Liên kết file nhạc zippyshare nhập vào phải là liên kết trên thanh địa chỉ trình duyệt tại www.zippyshare.com , không hỗ trợ dạng liên kết trực tiếp.

Code file zp.php:
> file .htaccess

```

RewriteEngine On
RewriteRule ^zp/(.*)-(.*).flv$ zp.php?wid=$1&fid=$2 [L]
RewriteRule ^zp/(.*)/(.*).flv$ zp.php?wid=$1&fid=$2 [L]
RewriteRule ^zp/(.*)-(.*).mp3$ zp.php?wid=$1&fid=$2 [L]
RewriteRule ^zp/(.*)/(.*).mp3$ zp.php?wid=$1&fid=$2 [L]

```
> file zp.php

```

<?
//hacobi1102 coder
//Get link mp3 zippyshare
//Lay noi dung site zippy sau do lay link nhac mp3
//Host ho tro cURL thi la 1, ho tro file_getcontent thi la 0
//Su dung http://domain.com/zp.php?id=http://www63.zippyshare.com/v/15751817/file.html.flv

function GetBetween($content,$start,$end){
$r = explode($start, $content);
if (isset($r[1])){
$r = explode($end, $r[1]);
return $r[0];
}
return '';
}
function getmicrotime($e = 0)
{
list($u, $s) = explode(' ',microtime());
return bcadd($u, $s, $e);
}
$time = getmicrotime();

//Check request
$link = $_REQUEST['id'];
if(strlen($link)>15){
//http://www63.zippyshare.com/v/15751817/file.html
$wwwid = GetBetween($link,'http://','.zippyshare');
//Phan tich link
$splitlink = explode('/', $link);
$musicid = $splitlink[4];
//http://www63.zippyshare.com/downloadMusic?key=15751817&time=1303395147

$dlink = "http://$wwwid.zippyshare.com/downloadMusic?key=$musicid&time=$time";
header( "Location: $dlink" );
}
//Seo link for embed
//http://domain.com/zp/www63-15751817.flv

$wwwid = $_GET['wid'];
$musicid = $_GET['fid'];

if(strlen($wwwid)>1 && strlen($musicid)>1){
$dlink = "http://$wwwid.zippyshare.com/downloadMusic?key=$musicid&time=$time";
header( "Location: $dlink" );
}
else {echo "http://jarodtaylor.com/about/zp.php?id=http://www63.zippyshare.com/v/15751817/file.html";}
?>
```

> Đặt 2 file .htaccess và file zp.php vào chung 1 thư mục nào đó, link sẽ là:
> http://domain.com/thumucchuafile/zp/www63-15751817.flv
> hoặc
> http://domain.com/thumucchuafile/zp/www63/15751817.flv

> hoặc full link để download nhưng sẽ ko chèn vào player đc:
> http://jarodtaylor.com/about/zp.php?id=http://www63.zippyshare.com/v/15751817/file.html

> Nguồn: http://thptdaimo.cc/f/showthread.php?4752-Code-lay-link-zippyshare-grap-link-nhac-zippyshare.daimo




[+] Nếu bạn muốn sao chép hướng dẫn này đi nơi khác vui lòng không thay đổi bất kỳ thành phần nào trong code và phải ghi bản quyền thuộc www.FMvi.org