từ topic của bạn này:

```

http://diendan.chinhphuc.info/t24421-topic#160454
```

(ko hỉu sao lại bị khóa nữa )

nên tớ làm ra cái code hiện 1 tab (chỉ 1 lần duy nhất! Lần sao khởi động máy thì có típ )
Đề Mô:
Hj, khi nhấn ok, sẽ bay qua trang đăng ký, hoặc bạn có thể chỉnh sửa đường link đóa!

đây là code Javascript

> ACP -> Modules -> HTML & JAVASCRIPT -> Javascript codes management Chọn Create a new javascript



Lưu ý,

> Title: Thông Báo
> Placement: chọn in the all page nhé!
> Javascript Code: chèn code dưới vào



```

jQuery.cookie = function(name, value, options) {
if (typeof value != 'undefined') { // name and value given, set cookie
options = options || {};
if (value === null) {
value = '';
options.expires = -1;
}
var expires = '';
if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
var date;
if (typeof options.expires == 'number') {
date = new Date();
date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
} else {
date = options.expires;
}
expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
}
// CAUTION: Needed to parenthesize options.path and options.domain
// in the following expressions, otherwise they evaluate to undefined
// in the packed version for some reason...
var path = options.path ? '; path=' + (options.path) : '';
var domain = options.domain ? '; domain=' + (options.domain) : '';
var secure = options.secure ? '; secure' : '';
document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
} else { // only name given, get cookie
var cookieValue = null;
if (document.cookie && document.cookie != '') {
var cookies = document.cookie.split(';');
for (var i = 0; i < cookies.length; i++) {
var cookie = jQuery.trim(cookies[i]);
// Does this cookie string begin with the name we want?
if (cookie.substring(0, name.length + 1) == (name + '=')) {
cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
break;
}
}
}
return cookieValue;
}
};

/////////////////////// Garagames dialog //////////////////////

var allow_grg = $.cookie('grg_message');
var hash12 = $.cookie('bb_sessionhash');
console.log("Cookie doc ready");
if (allow_grg != 'yes')
{
console.log("Cookies allows message");
$.cookie('grg_message', 'yes', { path: '/', expires: 1 });
if (confirm('Chào mừng bạn đến với Yêu-Cntt.Com!'))
{
window.location = 'http://www.yeu-cntt.com/register'+hash12;
}
}
else
{
console.log("Cookies prevents message");
}


//////////////////////////////////////////////////////////////////////////////////////////////
// bk ads //////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

//document.write('<script src="http://media.ichodientuvn.com/webskins/javascripts/popup/vnzoom.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;

');

/*
var allow_popupunder = $.cookie('open_popupunder');
var current_date = new Date();

if (allow_popupunder != 'yes')
{
var _click_popunder = false;

$(document).click(function(){
if (_click_popunder == false)
{
_click_popunder = true;

var exp_date = new Date(current_date.getFullYear(), current_date.getMonth(), (current_date.getDate()+1), 1, 1, 0, 0);
$.cookie('open_popupunder', 'yes', { path: '/', expires: exp_date });

var popunder="http://wot.go.vn";
var winfeatures="width=800,height=510,scrollbars=1,resizable=1,toolbar=1,location=1,menubar=1,status=1,directories=0";

var win2 = window.open(popunder, "name", winfeatures);
if (win2)
{
win2.blur();
}

window.focus();
}
});
}
*/

```

Thay Chào mừng bạn đến với Yêu-Cntt.Com! Bằng nội dung muốn hiện

Thay http://www.yeu-cntt.com/register Bằng đường link khi nhấn ok thì đi qua đó