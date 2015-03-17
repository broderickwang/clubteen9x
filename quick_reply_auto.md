```
$(function () {
function timlink(a) {
a = a.substring(a.indexOf("<a href=") + 9);
b = a.indexOf('"');
return a.substring(0, b)

};

function upbai(a) {
var b = a.split('#')[1];
$('<br/><div class=postcuoi><div  align=center><img src="http://i43.servimg.com/u/f43/16/03/04/56/icon_l12.gif"/>Đang gửi bài viết.....

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

').appendTo('.mtmybaiviet:last').load(a + " #post" + b,function(){
$('input[name=post]').show().prev().show().next().next().remove();});
$("#text_editor_textarea").val('');
$('input[name=lt]').val(b);
$(".moine").html('');

};




$('input[name=post]').click(function () {
$(this).after('<span>Đang gửi chờ chút...

Unknown end tag for &lt;/span&gt;

');

$(this).hide().prev().hide();
var a = $("form").serialize() + "&post=1";
$.post('/post', a, function (c) {
if (c.indexOf("Flood control") > 0) {
alert('Bạn chưa gửi được do bạn vừa gửi một bài cách đây không lâu.');$('input[name=post]').show().prev().show().next().next().remove();
} else if (c.indexOf('A new message') > 0) {
alert('Vừa có người gửi trước đó. Vui lòng ấn ôk.');
window.location.reload();
} else {
if ($("html").attr("xml:lang") == "en") {

var a = c.indexOf("has been sent"),
e = c.indexOf("entered successfully");

0 < a || 0 < e ? (c = c.substring(0 < a ? a : e), c = timlink(c), upbai(c)) : (alert('Error! please press F5'))
} else if ($("html").attr("xml:lang") == "vi") {
var a = c.indexOf("Bấm chuột");


0 < a ? (c = c.substring(a), c = timlink(c), upbai(c)) : (alert('Có lỗi vui lòng ấn F5'))
}


}
});
return false
});
$('input[name=preview]').click(function () {




$(".moine").html($("form #text_editor_textarea").val()).show();

return false;

});

});```