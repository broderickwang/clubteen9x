Demo:

![http://i21.servimg.com/u/f21/16/41/91/75/logout10.png](http://i21.servimg.com/u/f21/16/41/91/75/logout10.png)
Bước 1: Thêm vào CSS
ACP - Display - Pictures and Colors - Colors - CSS Stylesheet:

```


/* Cảnh báo trước khi thoát - www.FMvi.vn
Confirm User’s Action - webstuffshare.com */
.question,.yes,.cancel{font-family:Georgia,Serif!important;font-style:italic!important;line-height:21px!important;text-align:center}
.question{position:absolute;display:inline;text-align:center;width:174px;height:78px;font-size:13px;line-height:1.5em;background:url(http://i27.servimg.com/u/f27/14/67/90/38/bubble10.png) left top no-repeat;text-shadow:0 1px 0 #fff;margin-left:-10em;margin-top:-6em;opacity:0;padding:10px 0 0}
.yes,.cancel{margin:0.5em 0.5em 0 0!important;padding:0!important;cursor:pointer;display:inline-block;width:63px;height:21px;color:#fff!important;text-shadow:0 1px 0 #000;background:url(http://i27.servimg.com/u/f27/14/67/90/38/button10.png) left top no-repeat}

```

Bước 2: Thêm vào javascript
ACP - Modules - HTML & JAVASCRIPT - Javascript codes management
Add a Javascript Code

> Title **: Cảnh báo trước khi thoát
> Placement : In all the pages
> Javascript Code** :


```

var CopyrightNoticeEn = 'Copyright ©  by FmVi. All Rights Reserved. Use, modification, and/or distribution of this script is not allowed without direct permission from baivong (webmaster@fmvi.vn). This entire copyright notice must remain in the original, copied, or modified script';
var CopyrightNoticeVi = 'Bản quyền © FmVi. Giữ toàn quyền. Việc sử dụng, sửa đổi , và / hoặc phân phối mã này mà không được phép trực tiếp từ baivong (webmaster@fmvi.vn) là không được phép. Toàn bộ thông báo bản quyền này phải được giữ nguyên khi sao chép, hoặc sửa đổi';
$(function () {
$("#logout").live("click", function () {
if (!$(".question").length) {
var a = $(this).attr("href");
$(this).after('<div class="question">Are you sure?<br /><a href="' + a + '" class="yes">Yes

Unknown end tag for &lt;/a&gt;

<a href="javascript:vol(0)" onclick="$(this).parent().remove()" class="cancel">Cancel

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/div&gt;

');
$(".question").animate({
"margin-top": "-=2em",
opacity: 1
}, "slow")
}
return !1
})
});

```

Nguồn tham khảo: Confirm User’s Action (webstuffshare.com)