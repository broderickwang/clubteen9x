Chức năng:

> Thay avatar ngay lập tức tại mọi nơi trên diễn đàn.
> Thay bằng URL hình ảnh bằng cách click vào avatar góc trên diễn đàn FMvi.
> Chọn một hình ảnh trong bài viết làm avatar (chưa thử nghiệm).



```

function avatarfmvi() {
var a = prompt("Nh\u1eadp URL h\u00ecnh \u1ea3nh v\u00e0o \u0111\u00e2y!\nCh\u1ea5p nh\u1eadn c\u00e1c \u0111\u1ecbnh d\u1ea1ng jpg, jpeg, gif, png, bmp", "");
change() && null != a && 0 == a.indexOf("http") && (-1 != a.indexOf(".jpg") || -1 != a.indexOf(".png") || -1 != a.indexOf(".gif") || -1 != a.indexOf(".jpeg") || -1 != name.indexOf(".bmp")) && $.post(avatar, {
avatarurl: a,
username: jQuery("#userID").text(),
user_id: jQuery("#numID").text(),
submit: "Ok"
}, function (a) {
2 != $(a).find("#main-content p.message a").length ? alert("Kh\u00f4ng t\u1ea3i \u0111\u01b0\u1ee3c d\u1eef li\u1ec7u. Vui l\u00f2ng ch\u1ecdn h\u00ecnh \u1ea3nh kh\u00e1c") : $.post("/", function (a) {
$("img[src='" + $(".avatarUn img").attr("src") + "']").replaceWith($(a).find(".avatarUn a").html())
})
})
}

```