chức năng : Gửi bài không chuyển trang up bài lên ngay sau bài cuối cùng mình nhìn thấy
Punbb

```

$(function () {
function d(a) {
a = a.substring(a.indexOf("<a href=") + 9);
b = a.indexOf('"');
return a.substring(0, b)
}
function e(a) {
var c = a.split("#")[1];
$('<br/><div class=postcuoi><div  align=center><img src="http://i43.servimg.com/u/f43/16/03/04/56/icon_l12.gif"/>\u0110ang g\u1eedi b\u00e0i vi\u1ebft.....

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

').appendTo(".mtmybaiviet:last").load(a + " #post" + c, function () {
$("input[name=post]").show().prev().show().next().next().remove()
});
$("#text_editor_textarea").val("");
$("input[name=lt]").val(c);

}
$("input[name=post]").click(function () {
if (2 > $("#text_editor_textarea").val().replace("<br>", "").replace(/ /gi, "").length) alert("N\u1ed9i dung qu\u00e1 ng\u1eafn vui l\u00f2ng nh\u1eadp l\u1ea1i");
else {
$(this).after("<span>\u0110ang g\u1eedi ch\u1edd ch\u00fat...

Unknown end tag for &lt;/span&gt;

");
$(this).hide().prev().hide();
var a = $("form").serialize() + "&post=1";
$.post("/post", a, function (c) {
if (0 < c.indexOf("Flood control")) alert("B\u1ea1n ch\u01b0a g\u1eedi \u0111\u01b0\u1ee3c do b\u1ea1n v\u1eeba g\u1eedi m\u1ed9t b\u00e0i c\u00e1ch \u0111\u00e2y kh\u00f4ng l\u00e2u."),
$("input[name=post]").show().prev().show().next().next().remove();
else if (0 < c.indexOf("A new message")) alert("V\u1eeba c\u00f3 ng\u01b0\u1eddi g\u1eedi tr\u01b0\u1edbc \u0111\u00f3. Vui l\u00f2ng \u1ea5n \u00f4k."), window.location.reload();
else if ("en" == $("html").attr("xml:lang")) {
var a = c.indexOf("has been sent"),
f = c.indexOf("entered successfully");
0 < a || 0 < f ? (c = c.substring(0 < a ? a : f), c = d(c), e(c)) : alert("Error! please press F5 of turn off A/a for send reply.")
} else "vi" == $("html").attr("xml:lang") && (a = c.indexOf("B\u1ea5m chu\u1ed9t"), 0 < a ? (c = c.substring(a), c = d(c), e(c)) : alert("C\u00f3 l\u1ed7i vui l\u00f2ng \u1ea5n F5 ho\u1eb7c t\u1eaft n\u00fat A/A \u0111\u1ec3 g\u1eedi b\u00e0i."))
})
}
return !1
});

});

```
với mtmybaiviet là thẻ class bao ngoài toàn bộ bài viết #post + b chính là thẻ id của mỗi post. b là post id

> <!-- BEGIN postrow -->
nhock.demon9x: ở trước nó có đoạn <div>
nhock.demon9x: thêm cái mtmybaiviet vào<br>
nhock.demon9x: tìm tiếp<br>
nhock.demon9x: <!-- BEGIN displayed --><br>
nhock.demon9x: thêm dưới nó<br>
nhock.demon9x: <div>