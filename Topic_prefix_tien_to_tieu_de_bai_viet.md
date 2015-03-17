demo :   ![http://i49.servimg.com/u/f49/11/79/54/63/prex10.jpg](http://i49.servimg.com/u/f49/11/79/54/63/prex10.jpg)

Tác giả : Việt K.
Phiên bản : cả 4 phiên bản của FM.
Demo :


Cách làm :
Javascript codes management tạo Javascript mới :
Title **: Prefix
Placement : In all the pages
Javascript Code** :

```

var prefixes = ["Mediafire", "Hotfile", "Megaupload","Torrent"]; //danh sach cac prefix
var _pm = false; //true: cho phep prefix khi gui tin nhan
/* Topic prefixes - Copyright © 2011 by Viet K - chinhphuc.info */
var chk = false;
function toMenu(a) {
var htmlpre = '<select style="margin-right:5px" id="prefix" size="1"><option value="">(None)

Unknown end tag for &lt;/option&gt;

';
for (i in a)
htmlpre += '<option value="' + a[i] + '">' + a[i] + '

Unknown end tag for &lt;/option&gt;

';
htmlpre += '

Unknown end tag for &lt;/select&gt;

';
return htmlpre;
}

function checkpre(ar, input) {
for (i in ar) {
var p = new RegExp("\\" + ar[i], "g");
var title = input.substr(0, input.indexOf(']'));
if (p.test(title)) return ar[i];
}
return "";
}
$(function () {
if (_pm) chk = /\privmsg/.test(location.href);
if (/\/post/.test(location.href) || chk) {
$(toMenu(prefixes)).insertBefore("input[name=subject][type=text]");
var mw = $("#prefix").width() + 5;
$("input[name=subject]").css("width", $("input[name=subject]").width() - mw);
var t = $("[name=subject]").val();
var cur = checkpre(prefixes, t);
if (cur != "") {
$("[value=" + cur + "]").attr("selected", "selected");
$("input[name=subject]").val(t.replace('[' + cur + ']', '').trim());
}
$("input[name=post]").click(function () {
var sub = $("input[name=subject]").val().trim();
if (sub != "" && $("#prefix").val() != "")
$("input[name=subject]").val("[" + $("#prefix").val() + "] " + sub);
});
}
});

```
Tùy chỉnh : Tìm 2 dòng code sau

```

var prefixes = ["Mediafire", "Hotfile", "Megaupload","Torrent"]; //danh sach cac prefix
var _pm = false; //true: cho phep prefix khi gui tin nhan

```

Dòng 1 : chứa các tiền tố như trong ảnh demo bên trên (Mediafire, Hotfile, Megaupload .. )
Các bạn tùy ý chỉnh sửa, thêm bớt các prefix có sẵn này.
Dòng 2 : Cho phép hoặc không cho phép sử dụng prefix khi gửi tin nhắn. (false: không cho - true: cho phép).