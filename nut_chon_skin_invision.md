Chào mọi người. Smile

Hôm nay mình sẽ chỉ cho các bạn một cách để tạo nút chọn skin cho một forum invision. Smile
Nếu bạn nào đăg kí bên hollyland từ trước thì đều có thể thấy ngày xưa hollyland đã sử dụng nút chọn skin này Nhe răng
Ngay trong bộ skin Hollyland trọn gói cũng có. Các bạn có thể tham khảo cho bb2 Nhe răng
Tuy nhiên, code đó chỉ sử dụng cho phiên bản bb2 được thôi Smile

Nên mình sẽ hướng dẫn các bạn cho phiên bản Invison.

Chúng ta theo dõi demo trước nhé Smile http://miamor.forumvi.com/
các bạn để í sẽ thấy bảng chọn skin màu đen đen ở góc cuối bên trái đó. (các bạn thôg cảm, mình ngại chụp hình Lăn lộn)

Fancybox.
By helpfm.
Convert by miamor.

Trước tiên, về căn bản, chúng ta sẽ truy cập vào trang này: http://en.hitskin.com/search-a-skin-0.htm và tìm với phiên bản Invision, quá nhiều skin để các bạn lựa chọn nhểy?! hihi

Ok, h bạn hãy chọn đại 1 cái skin nào cũg được, rồi click vào skin đó.
Mình chọn tạm skin này: http://en.hitskin.com/search-a-skin/pro-bleu-178773.htm
Rồi. Trong đoạn link dẫn đến skin đó có chỗ mình đánh dấu đỏ là bạn cần lưu ý:

> http://en.hitskin.com/search-a-skin/pro-bleu-178773.htm

> Đó là đoạn mã CSS cho 4r của bạn. Ví dụ link 4r của mình là http://miamor.forumvi.com/ thì link CSS skin đó cho 4r mình sẽ là

> http://miamor.forumvi.com/178773-ltr.css

> (chú ý [1](1.md))



Rồi, đây là bước quan trọng: Tạo một file Javascript:
Title **: Chọn skin
Placement : In all the pages
Javascript Code** :```
document.write('<style>body {margin-top:50px !important;} select {color: #fff !important; background-color: #000 !important;} option {font-family: verdana; font-size: 10px; color: white;} option.sl {color: #fff !important; background-color: #000;} SELECT{ font-family: verdana; font-size: 10px; color: white; 

Unknown end tag for &lt;/style&gt;

');
document.write('<div style="position: fixed; width: 150px; height: 38px; z-index: 1; left: 5px; bottom: 10px" id="skinselector"><form><select onchange="changeskin(this.options[this.selectedIndex].value); window.location.reload();"><option class="sl">Selet your skin

Unknown end tag for &lt;/option&gt;

<option class="sl" value="Defaul"> Default 

Unknown end tag for &lt;/option&gt;

<option class="sl" value="Black"> Theme 1 name

Unknown end tag for &lt;/option&gt;

<option class="sl" value="Purple"> Theme 2 name

Unknown end tag for &lt;/option&gt;

<option class="sl" value="Yellow"> Theme 3 name

Unknown end tag for &lt;/option&gt;



Unknown end tag for &lt;/select&gt;



Unknown end tag for &lt;/form&gt;



Unknown end tag for &lt;/div&gt;

');
var scheme = getCookie('template1');
if (scheme == 'Defaul') {
document.write('<LINK REL="stylesheet" TYPE="text/css" HREF=" *DEFAULT THEME REMOVE THIS* http://link4rbạn/77-ltr.css">');
} else if (scheme == 'Black') {
document.write('<LINK REL="stylesheet" TYPE="text/css" HREF="http://miamor.forumvi.com/178773-ltr.css">');
} else if (scheme == 'Purple') {
document.write('<LINK REL="stylesheet" TYPE="text/css" HREF="http://miamor.forumvi.com/153102-ltr.css">');
} else if (scheme == 'Yellow') {
document.write('<LINK REL="stylesheet" TYPE="text/css" HREF="http://miamor.forumvi.com/153152-ltr.css">');;
}

function changeskin(change) {
var scheme = change;
var name = 'template1';
var pathname = location.pathname;
var myDomain = pathname.substring(0,pathname.lastIndexOf('/')) +'/';
var ExpDate = new Date ();
ExpDate.setTime(ExpDate.getTime() + (180 * 24 * 3600 * 1000));
setCookie(name,scheme,ExpDate,myDomain);
}
function getCookie(name){
var cname = name + "=";
var dc = document.cookie;
if (dc.length > 0) {
begin = dc.indexOf(cname);
if (begin != -1) {
begin += cname.length;
end = dc.indexOf(";", begin);
if (end == -1) end = dc.length;
return unescape(dc.substring(begin, end));
}
}
return null;
}

function setCookie(name, value, expires, path, domain, secure) {
document.cookie = name + "=" + escape(value) +
((expires == null) ? "" : "; expires=" + expires.toGMTString()) +
((path == null) ? "" : "; path=" + path) +
((domain == null) ? "" : "; domain=" + domain) +
((secure == null) ? "" : "; secure");
}```


Ok. Giờ bạn tìm trong đoạn CSS trên những từ khóa sau:

> Theme 1 name thay thành tên skin 1.
> Theme 2 name thay thành tên skin 2.
> Theme 3 name thay thành tên skin 3.
> http://link4rbạn thay thành địa chỉ link 4r bạn.
> http://miamor.forumvi.com/178773-ltr.css, http://miamor.forumvi.com/153102-ltr.css, http://miamor.forumvi.com/153152-ltr.css thay thành link CSS của skin mà bạn muốn cho 4r bạn. (ở đây có 3 skin nhé :P) (Vui lòng xem lại chú ý [1](1.md))



> Hướng dẫn thêm:

> Các chỗ link CSS như http://miamor.forumvi.com/178773-ltr.css, các bạn cũg có thể đi viewsource 4r khác và thay link vào đó. Ví dụ 4r này là http://invision.forum.st/ thì các bạn Ctrl+U sau đó Ctrl+F tìm với từ khóa

```

<link rel="stylesheet" href="
```
> sau đó bấm vào link css đó, copy đoạn URL css đó rồi nhét vào js kia :P
> Thế là xong Smile



Chú ý nho nhỏ: Chỉ chạy được những CSS của các skin Invision thôi các bồ nhé :P Cho CSS pun hay bb2 bb3 vào là nó nhả ra đấy Lăn lộn

Okê. Thế là xog rồi.... Hay thì bấm vote + nào các bạn :P