Js In the topics:
```

function timlink(a) {
a = a.substring(a.indexOf("<a href=") + 9);
b = a.indexOf('"');
return a.substring(0, b)
};

function upbai(a) {
var b = a.split('#')[1];
$('<br/><div class=postcuoi><div align=center><img src="http://i43.servimg.com/u/f43/16/03/04/56/black-10.gif"/>

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

').appendTo('.cleared:last').load(a + " #post" + b, function () {
loadsss();
$('input[name=post]').show().prev().show().next().next().remove()
});
$("#text_editor_textarea").val('');
$('input[name=lt]').val(b);
$(".ruled").html('')
};
$('input[name=post]').click(function () {
if ($("#text_editor_textarea").val().replace('<br>', '').replace(/ /
gi, '').length < 2) {
alert('Nội dung quá ngắn vui lòng nhập lại')
} else {
$(this).after('<span>Đang gửi chờ chút...

Unknown end tag for &lt;/span&gt;

');
$(this).hide().prev().hide();
var a = $("form").serialize() + "&post=1";
$.post('/post', a, function (c) {
if (c.indexOf("Flood control") > 0) {
alert('Bạn chưa gửi được do bạn vừa gửi một bài cách đây không lâu.');
$('input[name=post]').show().prev().show().next().next().remove()
} else if (c.indexOf('A new message') > 0) {
alert('Vừa có người gửi trước đó. Vui lòng nhấn OK.');
window.location.reload()
} else {
if ($("html").attr("xml:lang") == "en") {
var a = c.indexOf("has been sent"),
e = c.indexOf("entered successfully");
0 < a || 0 < e ? (c = c.substring(0 < a ? a : e), c = timlink(c), upbai(c)) : (alert('Error! please press F5 of turn off A/a for send reply.'))
} else if ($("html").attr("xml:lang") == "vi") {
var a = c.indexOf("Bấm chuột");
0 < a ? (c = c.substring(a), c = timlink(c), upbai(c)) : (alert('Có lỗi vui lòng ấn F5 hoặc tắt nút A/A để gửi bài.'))
}
}
})
}
return false
});
$('input[name=preview]').click(function () {
$(".ruled").html($("form #text_editor_textarea").val()).show();
return false
});
$("a[href^='/post?p='][href*='&mode=quote']").click(function () {
$(".Load").show();
$.get($(this).attr("href"), function (c) {
var a = (c.indexOf("width:98%") + 11);
var c = c.substring(a);
var noidung = c.substring(0, c.indexOf("<"));
$("#text_editor_textarea").val($("#text_editor_textarea").val() + noidung).focus();
$(".Load").fadeOut()
});
return false
})
});

```
Css:

```

.ruled { display: none; margin: auto; background-color: white; padding: 10px; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; margin-bottom: 20px; margin-top: 20px; }


```
Tìm:

```

<!-- BEGIN postrow -->

```
Thêm vào trước nó:

```

<div class="main-content-topic cleared">


```
Tìm:

```

<!-- BEGIN displayed -->
```

Thêm vào dưới nó:

```

<div class="main-content-topic" id="post{postrow.displayed.U_POST_ID}">

```

Tìm:

```

<!-- END postrow -->
```

Thêm vào dưới nó:

```



Unknown end tag for &lt;/div&gt;




```
Tìm:

```

<!-- END displayed -->
```

Thêm vào trên nó:

```



Unknown end tag for &lt;/div&gt;

 ```

> [Code](Code.md) Sửa lỗi sử dụng BBcode rep và gửi bài

Tác dụng:
- Khi bạn bôi đen 1 đoạn văn dùng bbcode in đậm, dòng bôi đen đó sẽ mất, để sử dụng tiếp bbcode bạn lại phải bôi đen
- Code có tác dụng bôi đen đoạn văn khi bạn thỏa sức dùng bbcode

ACP - Modules - HTML & JAVASCRIPT - Javascript codes management:

> Title: Trích dẫn bài viết
> Placement: In the page
> Javascript Code:

```

('fix_editor');
('Copyright 2012 Bilde Designs. All rights reserved.');
(function() {
(function(){var a,b,c;c={},a=document.createElement("textarea"),c.createRange=function(a){return(a.ownerDocument||a.document).selection.createRange()},b=function(){document.body.appendChild(a),a.selectionStart===0&&a.selectionEnd===0?c.w3c=c.supported=!0:document.selection&&document.selection.createRange&&a.createTextRange&&(c.msie=c.supported=!0),document.body.removeChild(a),a=null;if(c.w3c)return c.getText=function(a){return a.value.slice(a.selectionStart,a.selectionEnd)},c.getCaret=function(a){return[a.selectionStart,a.selectionEnd]},c.setCaret=function(a,b,c){return a.selectionStart=b,a.selectionEnd=c},c.collapse=function(a,b){return b?a.selectionEnd=a.selectionStart:a.selectionStart=a.selectionEnd};if(c.msie)return c.getText=function(a){var b;b=c.createRange(a);if(b&&b.parentElement()===a)return b.text||""},c.getCaret=function(a){var b,d,e,f,g,h,i;return h=c.createRange(a),i=d=0,h&&h.parentElement()===a&&(f=a.value.length,g=a.value.replace(/\r\n/g,"\n"),b=a.createTextRange(),b.moveToBookmark(h.getBookmark()),e=a.createTextRange(),e.collapse(!1),b.compareEndPoints("StartToEnd",e)<0?(i=-b.moveStart("character",-f),i+=g.slice(0,i).split("\n").length-1,b.compareEndPoints("EndToEnd",e)<0?(d=-b.moveEnd("character",-f),d+=g.slice(0,i).split("\n").length-1):d=f):i=d=f),[i,d]},c.setCaret=function(a,b,c){var d,e,f;return e=a.createTextRange(),f=b-(a.value.slice(0,b).split("\r\n").length-1),d=c-(a.value.slice(0,c).split("\r\n").length-1),e.collapse(!0),b===c?e.moveStart("character",f):(e.moveEnd("character",d),e.moveStart("character",f)),e.select()},c.collapse=function(a,b){var c;return c=a.createTextRange(),c.collapse(b),c.select()}},c.setText=function(a,b){var d;return d=c.getCaret(a),a.value=a.value.slice(0,d[0])+b+a.value.slice(d[1])},c.wrap=function(a,b,d){var e,f;return f=c.getText(a),e=c.getCaret(a)[0]+b.length,c.setText(a,b+f+d),c.setCaret(a,e,e+f.length)},window.attachEvent?window.attachEvent("onload",b):window.addEventListener("load",b,!1),window.selix=c}).call(this);
var editor;
function tag(open, close) {
editor = editor || document.getElementById('text_editor_textarea');
editor.focus();
selix.wrap(editor, open, close, true);
}
bbstyle = function(num) {
var open = bbtags[num], close = bbtags[num + 1];
tag(open, close);
};
bbfontstyle = tag;
})();
```

Viết bởi Bilde