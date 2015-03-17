Các chức năng mới trong ver.2:
![http://i1.ytimg.com/vi/vegNEMbrgas/0.jpg](http://i1.ytimg.com/vi/vegNEMbrgas/0.jpg)
Thêm bảng tùy chỉnh chi tiết:
background-color: #000000;
background-repeat: no-repeat;
background-position: left center;
background-attachment: fixed;
Lựa chọn Transparent cho toàn forum (mặc định không chọn).
Chức năng đổi màu nền sử dụng plugin ColorPicker.
Thành viên khi đăng nhập có thể sử dụng chức năng lưu trữ, bạn cũng có thể trực tiếp nhập CSS ngay tại đây.
Bước 1: Tạo một file js, đặt In all the pages:

```

$('head').append('<style id="bg_custom" type="text/css">

Unknown end tag for &lt;/style&gt;

');
var bg = ["body{background:url(http://i40.servimg.com/u/f40/17/70/31/89/bg161010.jpg) repeat fixed 50% 0 #000!important}", "body{background:url(http://i40.servimg.com/u/f40/17/70/31/89/digita10.jpg) repeat fixed 50% 0 #000!important}", "body{background:url(http://i40.servimg.com/u/f40/17/70/31/89/backgr12.jpg) no-repeat fixed 50% 0 #000!important}", "body{background:url(http://i40.servimg.com/u/f40/17/70/31/89/20080910.jpg) repeat fixed 50% 0 #000!important}", "body{background:url(http://i40.servimg.com/u/f40/17/70/31/89/backgr13.jpg) no-repeat fixed 50% 0 #0E1E2D!important}", "body{background:url(http://i40.servimg.com/u/f40/17/70/31/89/backgr14.jpg) no-repeat fixed 50% 0 #000!important}"];

if(my_getcookie("custom_background") != null) {
$("#bg_custom").text(unescape(my_getcookie("custom_background")))
}


$(function () {
$(".mainmenu:last").after('<img src="http://i40.servimg.com/u/f40/17/70/31/89/nav_ba10.png" alt="Change background image" title="Tùy chọn hình nền" id="nav_background" />');
$("#content").prepend('<div id="toggle_background" style="display: none;padding-bottom:50px"><div id="custom_background"><span alt="0" id="bg1">

Unknown end tag for &lt;/span&gt;

<span alt="1" id="bg2">

Unknown end tag for &lt;/span&gt;

<span alt="2" id="bg3">

Unknown end tag for &lt;/span&gt;

 <span alt="3" id="bg4">

Unknown end tag for &lt;/span&gt;

<span alt="4" id="bg5">

Unknown end tag for &lt;/span&gt;

<span alt="5" id="bg6">

Unknown end tag for &lt;/span&gt;

<div id="custom_url"><div class="bgSet"><img src="http://www.google.com/reader/ui/345992534-settings.png" alt="setting" title="setting"><ul style="display: none;"><li class="bgcolor">background-color: <em><input readonly="readonly" class="colorpicker_add_input" id="colorSs"><input class="bgcol" value="#000000" id="colorS" size="7">

Unknown end tag for &lt;/em&gt;

<a style="position: absolute; top: 10px; right: 30px" href="/h85-" target="_blank"><img src="http://illiweb.com/fa/wysiwyg/picture_save.png" alt="upload" title="upload">

Unknown end tag for &lt;/a&gt;

<a style="position: absolute; top: 11px; right:55px" class="saveS" href="#modal_box""><img src="http://i40.servimg.com/u/f40/17/70/81/78/save10.png">

Unknown end tag for &lt;/a&gt;

<strong>

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/li&gt;

<li>background-repeat: <em><select id="repeatS"><option value="no-repeat">no-repeat

Unknown end tag for &lt;/option&gt;

<option value="repeat">repeat

Unknown end tag for &lt;/option&gt;

<option value="repeat-x">repeat-x

Unknown end tag for &lt;/option&gt;

<option value="repeat-y">repeat-y

Unknown end tag for &lt;/option&gt;



Unknown end tag for &lt;/select&gt;



Unknown end tag for &lt;/em&gt;



Unknown end tag for &lt;/li&gt;

<li>background-position: <em><select id="positionS1"><option value="left">left

Unknown end tag for &lt;/option&gt;

<option value="right">right

Unknown end tag for &lt;/option&gt;

<option value="center">center

Unknown end tag for &lt;/option&gt;



Unknown end tag for &lt;/select&gt;

 <select id="positionS2"><option value="center">center

Unknown end tag for &lt;/option&gt;

<option value="top">top

Unknown end tag for &lt;/option&gt;

<option value="bottom">bottom

Unknown end tag for &lt;/option&gt;



Unknown end tag for &lt;/select&gt;



Unknown end tag for &lt;/em&gt;



Unknown end tag for &lt;/li&gt;

<li>background-attachment: <em><select id="attachmentS"><option value="fixed">fixed

Unknown end tag for &lt;/option&gt;

<option value="scroll">scroll

Unknown end tag for &lt;/option&gt;



Unknown end tag for &lt;/select&gt;



Unknown end tag for &lt;/em&gt;



Unknown end tag for &lt;/li&gt;

<li>font-family: <select name="font_family" id="select_font_family" class="select_font_family lightgraybackground tall_select"><option class="grey_select_item" style="font-family:Tahoma, Calibri, Verdana, Geneva, sans-serif" value="default" selected="selected">Default

Unknown end tag for &lt;/option&gt;

<option class="grey_select_item" value="Arial">Arial

Unknown end tag for &lt;/option&gt;

<option class="grey_select_item" value="Times New Roman">Times New Roman

Unknown end tag for &lt;/option&gt;

<option class="grey_select_item" value="Courier New">Courier New

Unknown end tag for &lt;/option&gt;

<option class="grey_select_item" value="Georgia">Georgia

Unknown end tag for &lt;/option&gt;

<option class="grey_select_item" value="Verdana">Verdana

Unknown end tag for &lt;/option&gt;

<option class="grey_select_item" value="Tahoma">Tahoma

Unknown end tag for &lt;/option&gt;

<option class="grey_select_item" value="Geneva">Geneva

Unknown end tag for &lt;/option&gt;

<option class="grey_select_item" value="Trebuchet MS">Trebuchet MS

Unknown end tag for &lt;/option&gt;

<option class="grey_select_item" value="Comic Sans MS">Comic Sans MS

Unknown end tag for &lt;/option&gt;



Unknown end tag for &lt;/select&gt;



Unknown end tag for &lt;/li&gt;

<li><input type="checkbox" id="moreS" value=",#main-content,#container,#ipbwrapper,.miapost,#left"> Transparent toàn trag web

Unknown end tag for &lt;/li&gt;



Unknown end tag for &lt;/ul&gt;



Unknown end tag for &lt;/div&gt;

<div style="display: inline-block;"><input type="text" placeholder=" Chọn hình nền khác bằng cách nhập một URL hình ảnh" id="custom_input"><strong id="custom_submit">Thay đổi

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div id="modal_box" style="display: none; position: fixed; opacity: 1; z-index: 11000; left: 50%; margin-left: -250px; top: 200px;"><a class="modal_close" href="javascript:vol(0)">

Unknown end tag for &lt;/a&gt;

<p class="butS"><a href="javascript:vol(0)" id="downS" title=""><img src="http://i40.servimg.com/u/f40/17/70/81/78/downlo10.png">

Unknown end tag for &lt;/a&gt;

<br>Tải giao diện của bạn

Unknown end tag for &lt;/p&gt;

<p class="butS"><a href="javascript:vol(0)" id="upS" title=""><img src="http://i40.servimg.com/u/f40/17/70/81/78/upload10.png">

Unknown end tag for &lt;/a&gt;

<br>Áp dụng tùy chọn này

Unknown end tag for &lt;/p&gt;

<p class="tipSs">Bạn có muốn giữ lại giao diện này?

Unknown end tag for &lt;/p&gt;

<textarea id="styleSs" rows="3" cols="9" style="width:100%">

Unknown end tag for &lt;/textarea&gt;

<button>Lưu trữ

Unknown end tag for &lt;/button&gt;



Unknown end tag for &lt;/div&gt;

');


$('#colorS, #colorSs').ColorPicker({
onChange: function (hsb, hex, rgb) {
$('#colorS').val('#' + hex.toUpperCase());
$('#colorSs').css({
'background-color': '#' + hex.toUpperCase()
});
$('.colorpicker_submit').click(function () {
$('.colorpicker').hide()
})
}
});
$('.bgSet img,.bgSet ul strong').click(function () {
$('.bgSet ul').slideToggle()
});
$('.saveS').click(function () {
$('#modal_box').show()
});
$("#custom_background span").click(function () {
$("#bg_custom").text(bg[$(this).attr("alt")]);
my_setcookie("custom_background", escape(bg[$(this).attr("alt")]), true)
});
$("#custom_submit").click(function () {
var moreS = $("#moreS:checked").length ? $("#moreS:checked").val() : "";
var cusbg = 'body' + moreS + '{background-attachment:' + $("#attachmentS").val() + '!important;background-color:' + $("#colorS").val() + '!important;background-image:url(' + $("#custom_input").val() + ')!important;background-position:' + $("#positionS1").val() + ' ' + $("#positionS2").val() + '!important;background-repeat:' + $("#repeatS").val() + ';font-family:' + $("#select_font_family").val() + '}';
$("#bg_custom").text(cusbg);
my_setcookie("custom_background", escape(cusbg), true);
if($("#logout").length) {
saveS()
} else {
}
});
$("#nav_background, #custom_submit, #custom_background span, #custom_url .saveS").click(function () {
saveS()
});
$("#nav_background").click(function () {
$("#toggle_background").slideToggle()
})
});


function saveS() {
if($("#bg_custom").text() == "") {
$(".tipSs").text("Diễn đàn đang sử­ dụng giao diện mặc định")
} else {
$(".tipSs").text("Bạn có muốn giữ lại giao diện này??");
$("#styleSs").val($("#bg_custom").text());
$("#modal_box button").click(function () {
$(".tipSs").text("Đang lưu trữ...");
$.post("/ajax_profile.forum?jsoncallback=?", {
id: 1,
user: $(".name a").attr("href").split('u=')[1],
active: "1",
content: '[["profile_field_13_-9", "' + $("#styleSs").val() + '"]]',
tid: $("#qjump input[name='tid']").val(),
}, function (e) {
if(e == "[object Object]") {
$(".tipSs").text("Lưu giao diện thành công.")
} else {
$(".tipSs").text("Đã xảy ra lỗi, vui lòng liên hệ admin.")
}
}, "json")
})
}
$(".saveS").leanModal({
top: 200,
overlay: 0.4,
closeButton: ".modal_close"
});
$("#downS").click(function () {
$(".tipSs").text("Đang lấy dữ liệu...");
$.get("/u" + $(".name a").attr("href").split('u=')[1], function (data) {
var dataS = $(data).find("#field_id-9 #profile_field_13_-9").val();
if(dataS == "") {
$(".tipSs").text("Không có dữ liệu, hãy bắt đầu lưu trữ ngay bây giờ.")
} else {
$("#styleSs").val(dataS);
$(".tipSs").text("Hãy nhấn vào Áp dụng để cài giao diện này.")
}
})
});
$("#upS").click(function () {
$("#bg_custom").text($("#styleSs").val());
my_setcookie("custom_background", escape($("#styleSs").val()), true);
$(".tipSs").text("Đã áp dụng giao diện của bạn.")
})
}(function ($) {
var ColorPicker = function () {
var ids = {}, inAction, charMin = 65,
visible, tpl = '<div class="colorpicker"><div class="colorpicker_color"><div><div>

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div class="colorpicker_hue"><div>

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div class="colorpicker_new_color">

Unknown end tag for &lt;/div&gt;

<div class="colorpicker_current_color">

Unknown end tag for &lt;/div&gt;

<div class="colorpicker_hex"><input type="text" maxlength="6" size="6" />

Unknown end tag for &lt;/div&gt;

<div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span>

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;

<div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span>

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;

<div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span>

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;

<div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span>

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;

<div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span>

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;

<div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span>

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;

<div class="colorpicker_submit">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

',
defaults = {
eventName: 'click',
onShow: function () {},
onBeforeShow: function () {},
onHide: function () {},
onChange: function () {},
onSubmit: function () {},
color: 'ff0000',
livePreview: true,
flat: false
}, fillRGBFields = function (hsb, cal) {
var rgb = HSBToRGB(hsb);
$(cal).data('colorpicker').fields.eq(1).val(rgb.r).end().eq(2).val(rgb.g).end().eq(3).val(rgb.b).end()
}, fillHSBFields = function (hsb, cal) {
$(cal).data('colorpicker').fields.eq(4).val(hsb.h).end().eq(5).val(hsb.s).end().eq(6).val(hsb.b).end()
}, fillHexFields = function (hsb, cal) {
$(cal).data('colorpicker').fields.eq(0).val(HSBToHex(hsb)).end()
}, setSelector = function (hsb, cal) {
$(cal).data('colorpicker').selector.css('backgroundColor', '#' + HSBToHex({
h: hsb.h,
s: 100,
b: 100
}));
$(cal).data('colorpicker').selectorIndic.css({
left: parseInt(150 * hsb.s / 100, 10),
top: parseInt(150 * (100 - hsb.b) / 100, 10)
})
}, setHue = function (hsb, cal) {
$(cal).data('colorpicker').hue.css('top', parseInt(150 - 150 * hsb.h / 360, 10))
}, setCurrentColor = function (hsb, cal) {
$(cal).data('colorpicker').currentColor.css('backgroundColor', '#' + HSBToHex(hsb))
}, setNewColor = function (hsb, cal) {
$(cal).data('colorpicker').newColor.css('backgroundColor', '#' + HSBToHex(hsb))
}, keyDown = function (ev) {
var pressedKey = ev.charCode || ev.keyCode || -1;
if((pressedKey > charMin && pressedKey <= 90) || pressedKey == 32) {
return false
}
var cal = $(this).parent().parent();
if(cal.data('colorpicker').livePreview === true) {
change.apply(this)
}
}, change = function (ev) {
var cal = $(this).parent().parent(),
col;
if(this.parentNode.className.indexOf('_hex') > 0) {
cal.data('colorpicker').color = col = HexToHSB(fixHex(this.value))
} else if(this.parentNode.className.indexOf('_hsb') > 0) {
cal.data('colorpicker').color = col = fixHSB({
h: parseInt(cal.data('colorpicker').fields.eq(4).val(), 10),
s: parseInt(cal.data('colorpicker').fields.eq(5).val(), 10),
b: parseInt(cal.data('colorpicker').fields.eq(6).val(), 10)
})
} else {
cal.data('colorpicker').color = col = RGBToHSB(fixRGB({
r: parseInt(cal.data('colorpicker').fields.eq(1).val(), 10),
g: parseInt(cal.data('colorpicker').fields.eq(2).val(), 10),
b: parseInt(cal.data('colorpicker').fields.eq(3).val(), 10)
}))
}
if(ev) {
fillRGBFields(col, cal.get(0));
fillHexFields(col, cal.get(0));
fillHSBFields(col, cal.get(0))
}
setSelector(col, cal.get(0));
setHue(col, cal.get(0));
setNewColor(col, cal.get(0));
cal.data('colorpicker').onChange.apply(cal, [col, HSBToHex(col), HSBToRGB(col)])
}, blur = function (ev) {
var cal = $(this).parent().parent();
cal.data('colorpicker').fields.parent().removeClass('colorpicker_focus')
}, focus = function () {
charMin = this.parentNode.className.indexOf('_hex') > 0 ? 70 : 65;
$(this).parent().parent().data('colorpicker').fields.parent().removeClass('colorpicker_focus');
$(this).parent().addClass('colorpicker_focus')
}, downIncrement = function (ev) {
var field = $(this).parent().find('input').focus();
var current = {
el: $(this).parent().addClass('colorpicker_slider'),
max: this.parentNode.className.indexOf('_hsb_h') > 0 ? 360 : (this.parentNode.className.indexOf('_hsb') > 0 ? 100 : 255),
y: ev.pageY,
field: field,
val: parseInt(field.val(), 10),
preview: $(this).parent().parent().data('colorpicker').livePreview
};
$(document).bind('mouseup', current, upIncrement);
$(document).bind('mousemove', current, moveIncrement)
}, moveIncrement = function (ev) {
ev.data.field.val(Math.max(0, Math.min(ev.data.max, parseInt(ev.data.val + ev.pageY - ev.data.y, 10))));
if(ev.data.preview) {
change.apply(ev.data.field.get(0), [true])
}
return false
}, upIncrement = function (ev) {
change.apply(ev.data.field.get(0), [true]);
ev.data.el.removeClass('colorpicker_slider').find('input').focus();
$(document).unbind('mouseup', upIncrement);
$(document).unbind('mousemove', moveIncrement);
return false
}, downHue = function (ev) {
var current = {
cal: $(this).parent(),
y: $(this).offset().top
};
current.preview = current.cal.data('colorpicker').livePreview;
$(document).bind('mouseup', current, upHue);
$(document).bind('mousemove', current, moveHue)
}, moveHue = function (ev) {
change.apply(ev.data.cal.data('colorpicker').fields.eq(4).val(parseInt(360 * (150 - Math.max(0, Math.min(150, (ev.pageY - ev.data.y)))) / 150, 10)).get(0), [ev.data.preview]);
return false
}, upHue = function (ev) {
fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
$(document).unbind('mouseup', upHue);
$(document).unbind('mousemove', moveHue);
return false
}, downSelector = function (ev) {
var current = {
cal: $(this).parent(),
pos: $(this).offset()
};
current.preview = current.cal.data('colorpicker').livePreview;
$(document).bind('mouseup', current, upSelector);
$(document).bind('mousemove', current, moveSelector)
}, moveSelector = function (ev) {
change.apply(ev.data.cal.data('colorpicker').fields.eq(6).val(parseInt(100 * (150 - Math.max(0, Math.min(150, (ev.pageY - ev.data.pos.top)))) / 150, 10)).end().eq(5).val(parseInt(100 * (Math.max(0, Math.min(150, (ev.pageX - ev.data.pos.left)))) / 150, 10)).get(0), [ev.data.preview]);
return false
}, upSelector = function (ev) {
fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
$(document).unbind('mouseup', upSelector);
$(document).unbind('mousemove', moveSelector);
return false
}, enterSubmit = function (ev) {
$(this).addClass('colorpicker_focus')
}, leaveSubmit = function (ev) {
$(this).removeClass('colorpicker_focus')
}, clickSubmit = function (ev) {
var cal = $(this).parent();
var col = cal.data('colorpicker').color;
cal.data('colorpicker').origColor = col;
setCurrentColor(col, cal.get(0));
cal.data('colorpicker').onSubmit(col, HSBToHex(col), HSBToRGB(col), cal.data('colorpicker').el)
}, show = function (ev) {
var cal = $('#' + $(this).data('colorpickerId'));
cal.data('colorpicker').onBeforeShow.apply(this, [cal.get(0)]);
var pos = $(this).offset();
var viewPort = getViewport();
var top = pos.top + this.offsetHeight;
var left = pos.left;
if(top + 176 > viewPort.t + viewPort.h) {
top -= this.offsetHeight + 176
}
if(left + 356 > viewPort.l + viewPort.w) {
left -= 356
}
cal.css({
left: left + 'px',
top: top + 'px'
});
if(cal.data('colorpicker').onShow.apply(this, [cal.get(0)]) != false) {
cal.show()
}
$(document).bind('mousedown', {
cal: cal
}, hide);
return false
}, hide = function (ev) {
if(!isChildOf(ev.data.cal.get(0), ev.target, ev.data.cal.get(0))) {
if(ev.data.cal.data('colorpicker').onHide.apply(this, [ev.data.cal.get(0)]) != false) {
ev.data.cal.hide()
}
$(document).unbind('mousedown', hide)
}
}, isChildOf = function (parentEl, el, container) {
if(parentEl == el) {
return true
}
if(parentEl.contains) {
return parentEl.contains(el)
}
if(parentEl.compareDocumentPosition) {
return !!(parentEl.compareDocumentPosition(el) & 16)
}
var prEl = el.parentNode;
while(prEl && prEl != container) {
if(prEl == parentEl) return true;
prEl = prEl.parentNode
}
return false
}, getViewport = function () {
var m = document.compatMode == 'CSS1Compat';
return {
l: window.pageXOffset || (m ? document.documentElement.scrollLeft : document.body.scrollLeft),
t: window.pageYOffset || (m ? document.documentElement.scrollTop : document.body.scrollTop),
w: window.innerWidth || (m ? document.documentElement.clientWidth : document.body.clientWidth),
h: window.innerHeight || (m ? document.documentElement.clientHeight : document.body.clientHeight)
}
}, fixHSB = function (hsb) {
return {
h: Math.min(360, Math.max(0, hsb.h)),
s: Math.min(100, Math.max(0, hsb.s)),
b: Math.min(100, Math.max(0, hsb.b))
}
}, fixRGB = function (rgb) {
return {
r: Math.min(255, Math.max(0, rgb.r)),
g: Math.min(255, Math.max(0, rgb.g)),
b: Math.min(255, Math.max(0, rgb.b))
}
}, fixHex = function (hex) {
var len = 6 - hex.length;
if(len > 0) {
var o = [];
for(var i = 0; i < len; i++) {
o.push('0')
}
o.push(hex);
hex = o.join('')
}
return hex
}, HexToRGB = function (hex) {
var hex = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
return {
r: hex >> 16,
g: (hex & 0x00FF00) >> 8,
b: (hex & 0x0000FF)
}
}, HexToHSB = function (hex) {
return RGBToHSB(HexToRGB(hex))
}, RGBToHSB = function (rgb) {
var hsb = {
h: 0,
s: 0,
b: 0
};
var min = Math.min(rgb.r, rgb.g, rgb.b);
var max = Math.max(rgb.r, rgb.g, rgb.b);
var delta = max - min;
hsb.b = max;
if(max != 0) {}
hsb.s = max != 0 ? 255 * delta / max : 0;
if(hsb.s != 0) {
if(rgb.r == max) {
hsb.h = (rgb.g - rgb.b) / delta
} else if(rgb.g == max) {
hsb.h = 2 + (rgb.b - rgb.r) / delta
} else {
hsb.h = 4 + (rgb.r - rgb.g) / delta
}
} else {
hsb.h = -1
}
hsb.h *= 60;
if(hsb.h < 0) {
hsb.h += 360
}
hsb.s *= 100 / 255;
hsb.b *= 100 / 255;
return hsb
}, HSBToRGB = function (hsb) {
var rgb = {};
var h = Math.round(hsb.h);
var s = Math.round(hsb.s * 255 / 100);
var v = Math.round(hsb.b * 255 / 100);
if(s == 0) {
rgb.r = rgb.g = rgb.b = v
} else {
var t1 = v;
var t2 = (255 - s) * v / 255;
var t3 = (t1 - t2) * (h % 60) / 60;
if(h == 360) h = 0;
if(h < 60) {
rgb.r = t1;
rgb.b = t2;
rgb.g = t2 + t3
} else if(h < 120) {
rgb.g = t1;
rgb.b = t2;
rgb.r = t1 - t3
} else if(h < 180) {
rgb.g = t1;
rgb.r = t2;
rgb.b = t2 + t3
} else if(h < 240) {
rgb.b = t1;
rgb.r = t2;
rgb.g = t1 - t3
} else if(h < 300) {
rgb.b = t1;
rgb.g = t2;
rgb.r = t2 + t3
} else if(h < 360) {
rgb.r = t1;
rgb.g = t2;
rgb.b = t1 - t3
} else {
rgb.r = 0;
rgb.g = 0;
rgb.b = 0
}
}
return {
r: Math.round(rgb.r),
g: Math.round(rgb.g),
b: Math.round(rgb.b)
}
}, RGBToHex = function (rgb) {
var hex = [rgb.r.toString(16), rgb.g.toString(16), rgb.b.toString(16)];
$.each(hex, function (nr, val) {
if(val.length == 1) {
hex[nr] = '0' + val
}
});
return hex.join('')
}, HSBToHex = function (hsb) {
return RGBToHex(HSBToRGB(hsb))
}, restoreOriginal = function () {
var cal = $(this).parent();
var col = cal.data('colorpicker').origColor;
cal.data('colorpicker').color = col;
fillRGBFields(col, cal.get(0));
fillHexFields(col, cal.get(0));
fillHSBFields(col, cal.get(0));
setSelector(col, cal.get(0));
setHue(col, cal.get(0));
setNewColor(col, cal.get(0))
};
return {
init: function (opt) {
opt = $.extend({}, defaults, opt || {});
if(typeof opt.color == 'string') {
opt.color = HexToHSB(opt.color)
} else if(opt.color.r != undefined && opt.color.g != undefined && opt.color.b != undefined) {
opt.color = RGBToHSB(opt.color)
} else if(opt.color.h != undefined && opt.color.s != undefined && opt.color.b != undefined) {
opt.color = fixHSB(opt.color)
} else {
return this
}
return this.each(function () {
if(!$(this).data('colorpickerId')) {
var options = $.extend({}, opt);
options.origColor = opt.color;
var id = 'collorpicker_' + parseInt(Math.random() * 1000);
$(this).data('colorpickerId', id);
var cal = $(tpl).attr('id', id);
if(options.flat) {
cal.appendTo(this).show()
} else {
cal.appendTo(document.body)
}
options.fields = cal.find('input').bind('keyup', keyDown).bind('change', change).bind('blur', blur).bind('focus', focus);
cal.find('span').bind('mousedown', downIncrement).end().find('>div.colorpicker_current_color').bind('click', restoreOriginal);
options.selector = cal.find('div.colorpicker_color').bind('mousedown', downSelector);
options.selectorIndic = options.selector.find('div div');
options.el = this;
options.hue = cal.find('div.colorpicker_hue div');
cal.find('div.colorpicker_hue').bind('mousedown', downHue);
options.newColor = cal.find('div.colorpicker_new_color');
options.currentColor = cal.find('div.colorpicker_current_color');
cal.data('colorpicker', options);
cal.find('div.colorpicker_submit').bind('mouseenter', enterSubmit).bind('mouseleave', leaveSubmit).bind('click', clickSubmit);
fillRGBFields(options.color, cal.get(0));
fillHSBFields(options.color, cal.get(0));
fillHexFields(options.color, cal.get(0));
setHue(options.color, cal.get(0));
setSelector(options.color, cal.get(0));
setCurrentColor(options.color, cal.get(0));
setNewColor(options.color, cal.get(0));
if(options.flat) {
cal.css({
position: 'relative',
display: 'block'
})
} else {
$(this).bind(options.eventName, show)
}
}
})
},
showPicker: function () {
return this.each(function () {
if($(this).data('colorpickerId')) {
show.apply(this)
}
})
},
hidePicker: function () {
return this.each(function () {
if($(this).data('colorpickerId')) {
$('#' + $(this).data('colorpickerId')).hide()
}
})
},
setColor: function (col) {
if(typeof col == 'string') {
col = HexToHSB(col)
} else if(col.r != undefined && col.g != undefined && col.b != undefined) {
col = RGBToHSB(col)
} else if(col.h != undefined && col.s != undefined && col.b != undefined) {
col = fixHSB(col)
} else {
return this
}
return this.each(function () {
if($(this).data('colorpickerId')) {
var cal = $('#' + $(this).data('colorpickerId'));
cal.data('colorpicker').color = col;
cal.data('colorpicker').origColor = col;
fillRGBFields(col, cal.get(0));
fillHSBFields(col, cal.get(0));
fillHexFields(col, cal.get(0));
setHue(col, cal.get(0));
setSelector(col, cal.get(0));
setCurrentColor(col, cal.get(0));
setNewColor(col, cal.get(0))
}
})
}
}
}();
$.fn.extend({
ColorPicker: ColorPicker.init,
ColorPickerHide: ColorPicker.hidePicker,
ColorPickerShow: ColorPicker.showPicker,
ColorPickerSetColor: ColorPicker.setColor
})
})(jQuery);
(function ($) {
$.fn.extend({
leanModal: function (options) {
var defaults = {
top: 100,
overlay: 0.5,
closeButton: null
};
var overlay = $("<div id='lean_overlay'>

Unknown end tag for &lt;/div&gt;

");
$("body").append(overlay);
options = $.extend(defaults, options);
return this.each(function () {
var o = options;
$(this).click(function (e) {
var modal_id = $(this).attr("href");
$("#lean_overlay").click(function () {
close_modal(modal_id)
});
$(o.closeButton).click(function () {
close_modal(modal_id)
});
var modal_height = $(modal_id).outerHeight();
var modal_width = $(modal_id).outerWidth();
$("#lean_overlay").css({
"display": "block",
opacity: 0
});
$("#lean_overlay").fadeTo(200, o.overlay);
$(modal_id).css({
"display": "block",
"position": "fixed",
"opacity": 0,
"z-index": 11000,
"left": 50 + "%",
"margin-left": -(modal_width / 2) + "px",
"top": o.top + "px"
});
$(modal_id).fadeTo(200, 1);
e.preventDefault()
})
});
function close_modal(modal_id) {
$("#lean_overlay").fadeOut(200);
$(modal_id).css({
"display": "none"
})
}
}
})
})(jQuery);

```

CSS

```

/* ---Tùy chọn hình nền Invision--- */
#custom_background{background-image:url(http://i40.servimg.com/u/f40/17/70/31/89/backgr19.jpg)!important;box-shadow:0 0 10px rgba(0,0,0,0.8) inset;color:#FFF;position:relative;padding:15px 0 15px 15px}
#custom_background span{-moz-transition:all .2s ease-in-out 0;background:none no-repeat scroll 50% 50% #000;border-radius:7px 7px 7px 7px;box-shadow:0 1px 7px #000 inset, 0 1px 0 rgba(255,255,255,0.05), 0 0 1px rgba(255,255,255,0.35);cursor:pointer;display:block;float:left;height:90px;margin-right:15px;width:15%}
#custom_background span:hover{box-shadow:0 1px 2px #000 inset, 0 1px 0 rgba(255,255,255,0.05), 0 0 1px rgba(255,255,255,0.35)}
#bg1{background-image:url(http://i40.servimg.com/u/f40/17/70/31/89/bg161011.jpg)!important;background-repeat:repeat-x!important}
#bg2{background-image:url(http://i40.servimg.com/u/f40/17/70/31/89/hinh-n10.jpg)!important}
#bg3{background-image:url(http://i40.servimg.com/u/f40/17/70/31/89/backgr12.jpg)!important}
#bg4{background-image:url(http://i40.servimg.com/u/f40/17/70/31/89/20080911.jpg)!important}
#bg5{background-image:url(http://i40.servimg.com/u/f40/17/70/31/89/backgr13.jpg)!important}
#bg6{background-image:url(http://i40.servimg.com/u/f40/17/70/31/89/backgr14.jpg)!important}
#custom_url{clear:left;padding-top:10px;text-align:center}
#custom_input{background:none repeat scroll 0 0 rgba(0,0,0,0.5);border:0 none;border-radius:4px 4px 4px 4px;box-shadow:0 1px 3px rgba(0,0,0,0.75) inset, 0 1px 0 rgba(255,255,255,0.15);color:#FFF;font-size:20px;height:40px;margin-left:-15px;margin-right:8px;white-space:nowrap;width:780px;padding:0 10px 0 0}
#custom_submit{background:url(http://i40.servimg.com/u/f40/17/70/31/89/highli10.png) repeat-x scroll 0 0 rgba(197,206,213,0.4);border-radius:4px 4px 4px 4px;box-shadow:0 1px 3px rgba(0,0,0,0.6);color:#FFF;cursor:pointer;display:inline-block;font-size:20px;font-weight:400;line-height:40px;text-shadow:0 -1px 0 #4C5057;padding:0 10px}
.bg_custom{background-attachment:fixed 50% 0;background-color:#000;background-repeat:no-repeat}
#nav_background{background-color:#000;border:3px dotted #444!important;border-radius:15px 15px 15px 15px;cursor:pointer;float:right;padding:5px}
#nav_background:hover{background-color:#FFF}
#nav_background:active{background-color:#E71E7B}
.bg_custom{background-attachment:fixed 50% 0;background-color:#000;background-repeat:no-repeat}
.bgSet li{line-height:25px}
.bgSet img{cursor:pointer}
.bgSet ul .saveS,.bgSet ul strong{background:url(http://i38.servimg.com/u/f38/16/58/89/73/tip1010.png) no-repeat scroll 0 -9px transparent;cursor:pointer;height:16px;position:absolute;right:5px;width:16px}
.bgSet ul{background-color:#FFF;border:2px solid #DDD;border-radius:4px 4px 4px 4px;color:#0D8523;display:none;font-family:courier new;left:0;list-style:none outside none;position:absolute;text-align:left;text-shadow:1px 1px 1px #B5B5B5;top:0;width:300px;padding:10px!important}
.bgSet{background:url(http://i48.servimg.com/u/f48/16/58/89/73/highli10.png) repeat-x scroll 0 0 rgba(225,226,227,0.32);border-radius:4px 4px 4px 4px;display:inline-block;height:21px;left:-18px;position:relative;width:35px;top:-2px;padding:10px}

.colorpicker_add_input{cursor:pointer;border:1px solid #000;text-decoration:none;margin-right:2px;background:url(http://illiweb.com/fa/i/bgcolor.png) no-repeat scroll 100% 100%;height:21px;width:30px}
.colorpicker{background:url(http://i40.servimg.com/u/f40/17/70/81/78/colorp10.png);display:none;font-family:Arial, Helvetica, sans-serif;height:176px;overflow:hidden;position:absolute;width:356px}
.colorpicker_color{background:red;cursor:crosshair;height:150px;left:14px;overflow:hidden;position:absolute;top:13px;width:150px}
.colorpicker_color div{background:url(http://i40.servimg.com/u/f40/17/70/81/78/colorp11.png);height:150px;left:0;position:absolute;top:0;width:150px}
.colorpicker_color div div{background:url(http://i40.servimg.com/u/f40/17/70/81/78/colorp10.gif);height:11px;left:0;overflow:hidden;position:absolute;top:0;width:11px;margin:-5px 0 0 -5px}
.colorpicker_hue{cursor:n-resize;height:150px;left:171px;position:absolute;top:13px;width:35px}
.colorpicker_hue div{background:url(http://i40.servimg.com/u/f40/17/70/81/78/colorp11.gif) left top;height:9px;left:0;overflow:hidden;position:absolute;width:35px;margin:-4px 0 0}
.colorpicker_new_color{background:red;height:30px;left:213px;position:absolute;top:13px;width:60px}
.colorpicker_current_color{background:red;height:30px;left:283px;position:absolute;top:13px;width:60px}
.colorpicker input{background-color:transparent!important;border:1px solid transparent!important;color:#898989!important;font-family:Arial, Helvetica, sans-serif!important;font-size:10px!important;height:11px!important;position:absolute!important;right:11px!important;text-align:right!important;top:4px!important;margin:0!important;padding:0!important}
.colorpicker_hex{background:url(http://i40.servimg.com/u/f40/17/70/81/78/colorp12.png) top;height:22px;left:212px;position:absolute;top:142px;width:72px}
.colorpicker_hex input{right:6px}
.colorpicker_field{background-position:top;height:22px;position:absolute;width:62px}
.colorpicker_field span{cursor:n-resize;height:22px;overflow:hidden;position:absolute;right:0;top:0;width:12px}
.colorpicker_rgb_r{background-image:url(http://i40.servimg.com/u/f40/17/70/81/78/colorp13.png);left:212px;top:52px}
.colorpicker_rgb_g{background-image:url(http://i40.servimg.com/u/f40/17/70/81/78/colorp14.png);left:212px;top:82px}
.colorpicker_rgb_b{background-image:url(http://i40.servimg.com/u/f40/17/70/81/78/colorp15.png);left:212px;top:112px}
.colorpicker_hsb_h{background-image:url(http://i40.servimg.com/u/f40/17/70/81/78/colorp16.png);left:282px;top:52px}
.colorpicker_hsb_s{background-image:url(http://i40.servimg.com/u/f40/17/70/81/78/colorp17.png);left:282px;top:82px}
.colorpicker_hsb_b{background-image:url(http://i40.servimg.com/u/f40/17/70/81/78/colorp18.png);left:282px;top:112px}
.colorpicker_submit{background:url(http://i40.servimg.com/u/f40/17/70/81/78/colorp19.png) top;height:22px;left:322px;overflow:hidden;position:absolute;top:142px;width:22px}
.colorpicker_focus{background-position:center}
.colorpicker_hex.colorpicker_focus,.colorpicker_slider,.colorpicker_submit.colorpicker_focus{background-position:bottom}
#modal_box button:hover{border:1px solid rgba(231,45,45,0.44);cursor:pointer}
#modal_box button{background-color:#F5F5F5;background-image:0;border:1px solid rgba(0,0,0,0.1);border-radius:2px 2px 2px 2px;clear:right;color:#444;cursor:default;float:right;font-size:11px;font-weight:700;height:29px;line-height:27px;margin-top:10px;min-width:72px;outline:0 none;padding:0 8px}
#modal_box p.butS{float:left;padding-bottom:10px;text-align:center;width:50%}
.tipSs{background:url(http://i40.servimg.com/u/f40/17/70/81/78/tip10.png) no-repeat scroll 5px center #FFFBCC;border:1px solid #E6DB55;border-radius:3px 3px 3px 3px;clear:both;color:#666452;font-size:.9em;position:relative;text-align:justify;width:auto;margin:10px 0;padding:5px 5px 5px 25px}
#lean_overlay{background:#666;display:none;height:100%;left:0;position:fixed;top:0;width:100%;z-index:100}
.modal_close{background:url(http://i40.servimg.com/u/f40/17/70/81/78/close-10.png) repeat scroll 0 0 transparent;content:"";height:11px;position:absolute;right:17px;top:17px;width:11px}
#modal_box{-moz-box-sizing:border-box;-o-box-sizing:border-box;-webkit-box-sizing:border-box;background:none repeat scroll 0 0 padding-box #FFF;border:1px solid rgba(0,0,0,0.333);box-shadow:0 4px 16px rgba(0,0,0,0.2);color:#000;display:none;outline:0 none;position:absolute;width:500px;padding:40px}

```

By: Miamor