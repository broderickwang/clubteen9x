**Demo
![http://i76.servimg.com/u/f76/15/64/85/86/cp7710.png](http://i76.servimg.com/u/f76/15/64/85/86/cp7710.png)**

**Thông tin
Viết bởi: handsomevip007 - diendan.chinhphuc.info
Phiên bản: thử nghiệm cho Invision
- Ưu điểm: đỡ mắc công phải bấm nút [Viết lên tường]
- Khuyết điểm: Trả lời nhanh nhưng chuyển trang**

**Cài đặt
Vào ACp>>Moudules>>HTML & JAVASCRIPT>>Javascript codes management>>Create a new javascript
Title: CPWallPost
Placement : In all pages
Javascript Code:**


```

$(function () {
if (location.pathname.slice(-4, -1) == 'wal') {
var WULink= location.pathname.slice(2,-4);
$("#new-message-link:eq(0)").after("<div class='WBox'>

Unknown end tag for &lt;/div&gt;

");
$(".WBox:eq(0)").after("<div class='WData'>

Unknown end tag for &lt;/div&gt;

");
$(".WData").load("/privmsg?mode=post_profile&u=" + WULink + " [action='/privmsg?mode=post_profile']", function () {
var WKhungRep = $(this).html();
$(WKhungRep).appendTo(".WBox:eq(0)");
$(this).remove();
$("form .maintitle + fieldset dd").prepend("<input type='text' name='subject' value='Tin nhắn' class='posting-subject' style='display:none'>

Unknown end tag for &lt;/input&gt;

");
$("#smiley-box, .rte-menu-button, .exthelp, .subtitle, .subtitle + fieldset, #text_editor_controls, #helpbox, form .maintitle, form label, .posting-subject + .posting-subject").remove();
$("#text_editor_textarea").css({"padding-left":"34px","background":"white url(http://icons.iconarchive.com/icons/delacro/once-again/32/Message-icon.png) no-repeat left center","border-width":"0 3px 0 0!important","border-left":"3px solid #F40!important","width":"542px","position":"absolute","margin":"56px 0 0 -442px","height":"40px"});
$(".button[name='post']").css({"margin-right":"-478px"});
$(".messaging-box").css({"background":"transparent","border":"0"});
});
}
});

```

**Sửa lỗi
- Vui lòng cung cấp nick test và link forum nếu xảy ra lỗi**
