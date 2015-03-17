Tác giả: Zero
Quyền lợi: Bạn được quyền sử dụng miễn phí mod nếu bạn tôn trọng công sức của tác giả
Phiên bản: 1.0 hotfix

Chức năng:
- Rất nhẹ (~8kb).
- Gửi bài, sửa bài, quote bài, xem trước, chọn smiley, và chọn màu không chuyển trang
- Nâng cấp chức năng chọn màu của FM
- Cập nhật bài mới không chuyển trang sau khi gửi và chỉnh sửa
- Viết dành cho punBB, phpBB3, và Invision
- Viết đặc biệt dành cho người không chuyên về javascript
- Có thể chỉnh sửa 100% giao diện và thành phần
- Những buttons đang có: Bold, Italic, Underline, Strike, Color, Smily, Tag
- Thích hợp với skin fmvi version 3

Chức năng sắp tới cho phiên bản 1.1:
- Thêm quote vào editor khi chọn "Quote" thay vì thay tất cả nội dung đang có trong editor
- Sửa một vài chi tiết trong css
- Làm chức năng edit load nhanh hơn
- Hỗ trợ chức năng upload ảnh và video
- Giới hạn ký tự tối thiểu?

Chức năng cho những phiên bản tiếp theo:
- Hỗ trợ gửi tin nhắn vào inbox và vào wall
- Hỗ trợ nhiều giao diện (người dùng có thể tự cài và đòi hỏi kiến thức về css)
- Làm bbcode riêng cho chức năng Tag (sử dụng thẻ [tag](tag.md))
- Thêm chức năng upload ảnh (sử dụng host được nhiều người gợi ý nhất)
- Hỗ trợ trong viết tin nhắn (maybe)
- "Tweak" css và javascript
.......... (Ai có ý tưởng gì hay thì comment )

Showcase:

> Bình thường
![http://i11.servimg.com/u/f11/16/80/27/29/firesh10.png](http://i11.servimg.com/u/f11/16/80/27/29/firesh10.png)
> Xem trước
![http://i11.servimg.com/u/f11/16/80/27/29/firesh11.png](http://i11.servimg.com/u/f11/16/80/27/29/firesh11.png)
> Color picker
![http://i11.servimg.com/u/f11/16/80/27/29/firesh12.png](http://i11.servimg.com/u/f11/16/80/27/29/firesh12.png)
> Smiley

![http://i11.servimg.com/u/f11/16/80/27/29/firesh13.png](http://i11.servimg.com/u/f11/16/80/27/29/firesh13.png)

Hướng dẫn:
Mod được viết dựa trên phiên bản MẶC ĐỊNH của phpbb3, invision và punbb (mặc định: viewtopic\_body chưa được chỉnh sửa bằng template và script). Chỉ hướng dẫn chỉnh sửa cho skin fmvi ver 3. Mấy skin còn lại tự mò

Cấu trúc mặc định của punbb:
![http://i11.servimg.com/u/f11/16/80/27/29/captur10.png](http://i11.servimg.com/u/f11/16/80/27/29/captur10.png)

Mod này sẽ không bao giờ hỗ trợ phpbb2, ai hỏi = spam -> BAN

- General -> Messages and e-mails -> Configuration -> Allow quick reply: Yes
- General -> Forum -> Security -> Unauthorize unofficial forms to post messages and private messages on the forum: No
- Modules -> HTML & JAVASCRIPT -> Javascript codes management -> Create a new javascript -> Placement: In the topics
```


//  zEditor 1.0 by Zero © FMVI.VN
// Disclaimer: You are free to use this mod as long as you give the credit to the creator
// Quyền lợi: Bạn được quyền sử dụng miễn phí mod nếu bạn tôn trọng công sức của tác giả
var version = 'punbb'; // punbb or phpbb3 or invision
var post = '.post-options'; // .post-options (punbb) or .profile-icons (phpbb3) or .posting-icons (invision)
var post_body = '.entry-content'; // .entry-content (punbb) or .content (phpbb3) or .post-entry (invision)
var post_inbody = 'div div:first'; // div div:first (punbb) or div:first (phpbb3 and invision)
var reply_text = 'Mode: Reply';
var edit_text = 'Mode: Edit';
var quote_text = 'Mode: Quote';
var preview_text = 'Mode: Preview';
var reply_button = 'Reply';
// MODIFY IF YOURE USING CUSTOM PUNBB BOARD AND WANT TO USE TAG FEATURE
var custom_tag = '.postbody';
var custom_tag1 = '.username';
///////////////////////////////////////////////////////////////////////////////
$.getScript('http://misc-scripts.googlecode.com/files/selix-by-blide-design.js');
var editor;
var mode;
var textarea;
var zd_editor = {
ready: function () {
textarea = document.getElementById('editor-textarea');
qreply = document.getElementById('quick_reply');
$('.h3:contains("Quick reply:")').remove();
editor = document.getElementById('zd-editor-form');
mode = document.getElementById('editor-mode');
editor.tid.value = qreply.tid.value;
editor.t.value = qreply.t.value;
editor.lt.value = qreply.lt.value;
editor.notify.value = qreply.notify.value;
zd_editor.button();
},
edit: function () {
$(post + ' a[href*="quote"], ' + post + ' a[href*="editpost"]').click(function (a) {
$('#zd-edit').load(this.href + ' textarea:last', function () {
textarea.value = this.firstChild.value;
textarea.focus();
});
a.preventDefault();
});
},
button: function () {
a = (version == 'punbb' || version == 'phpbb3') ? '.post' : '.post.online';
$(a).each(function () {
var id = $(this).find(post + ' a[href*="quote"]').attr('href').split('p=')[1].replace('&mode=quote', '');
$(this).find(post + ' a[href*="quote"]').attr('onclick', 'zd_editor.start(\'quote\', \'' + id + '\')');
$(this).find(post + ' a[href*="quote"]').before('<a class="editor-reply" href="#reply" onclick="zd_editor.start(\'reply\', \'' + id + '\')">' + reply_button + '

Unknown end tag for &lt;/a&gt;

');
$(this).find(post + ' a[href*="editpost"]').attr('onclick', 'zd_editor.start(\'edit\', \'' + id + '\')');
});
zd_editor.edit();
},
add: function (x, y) {
textarea.focus();
selix.wrap(textarea, x, y, true);
},
find: function (a) {
a = a.substring(a.indexOf("<a href=") + 9);
b = a.indexOf('"');
return a.substring(0, b)
},
newpost: function (a) {
var b = a.split('#')[1];
document.getElementById('zd-editor').style.display = 'none';
if (mode.innerHTML == reply_text || mode.innerHTML == quote_text) {
$('<div class="newreply">

Unknown end tag for &lt;/div&gt;

').insertAfter('.post:last').load(a + " #p" + b, function () {
zd_editor.button();
$('.newreply').hide().fadeIn('2000');
});
}
if (mode.innerHTML == edit_text) {
$("#zd-editor").parents(post_body).find(post_inbody).load(a + " #p" + b + " " + post_body + " " + post_inbody, function () {
$("#zd-editor").parents(post_body).hide().fadeIn('slow');
zd_editor.button();
});
}
textarea.value = '';
editor.lt.value = b;
},
preview: function () {
preview = document.getElementById('zd-preview');
if (preview.style.display == 'block') {
preview.style.display = 'none';
} else {
var form = $("form[name='zd-editor']").serialize() + "&preview=1";
$.post('/post', form, function (data) {
preview.style.display = 'block';
preview.innerHTML = $(data).find(post_body).html();
});
}
},
post: function () {
$.post('/post', $("form[name='zd-editor']").serialize() + '&post=1', function (c) {
if (c.indexOf("Flood control") > 0) {
alert('Bạn chưa gửi được do bạn vừa gửi một bài cách đây không lâu.');
} else if (c.indexOf('A new message') > 0) {
$.post('/post', $(c).find("form[name='post']").serialize() + '&post=1', function (c) {
var a = c.indexOf("has been sent"),
e = c.indexOf("entered successfully");
0 < a || 0 < e ? (c = c.substring(0 < a ? a : e), c = zd_editor.find(c), zd_editor.newpost(c)) : (alert('Error! please press F5'));
});
} else {
if ($("html").attr("xml:lang") == "en") {
var a = c.indexOf("has been sent"),
e = c.indexOf("entered successfully");
0 < a || 0 < e ? (c = c.substring(0 < a ? a : e), c = zd_editor.find(c), zd_editor.newpost(c)) : (alert('Error! please press F5'))
} else if ($("html").attr("xml:lang") == "vi") {
var a = c.indexOf("Bấm chuột");
0 < a ? (c = c.substring(a), c = zd_editor.find(c), zd_editor.newpost(c)) : (alert('Có lỗi vui lòng ấn F5'))
}
}
});
},
start: function (a, b) {
eid = document.getElementById('p' + b);
$('#zd-editor').appendTo($(eid).find(post_body));
document.getElementById('zd-editor').style.display = 'block';
switch (a) {
case "reply":
if (mode.innerHTML == edit_text) {
textarea.value = '';
editor.mode.value = 'reply';
editor.p.value = '';
}
mode.innerHTML = reply_text;
break;
case "quote":
mode.innerHTML = quote_text;
textarea.value = 'Loading...';
break;
case "edit":
mode.innerHTML = edit_text;
editor.mode.value = 'editpost';
editor.p.value = b;
textarea.value = 'Loading...';
break;
case "preview":
mode.innerHTML = preview_text;
break;
}
},
popup: function (a) {
$('#' + a).siblings().hide();
x = document.getElementById(a);
if (x.style.display == 'none') {
x.style.display = 'block';
} else {
x.style.display = 'none';
}

switch (a) {
case "zd-color":
var c = '<table cellspacing="0" id="ddcbcolors">';
var colors = new Array('00', '33', '66', '99', 'CC', 'FF');
for (i = 5; i >= 0; i--) {
c = c + '<tr>';
for (j = 5; j >= 0; j--) {
for (k = 5; k >= 0; k--) {
var col = colors[j] + colors[i] + colors[k];
c = c + '<td style="background: #' + col + '"><div style="background:#' + col + '" onclick="zd_editor.add(\'[color=#' + col + ']\', \'[/color]\');$(\'#zd-color\').hide();$(\'#editor-color\').attr(\'style\', $(this).attr(\'style\'))">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;

';
}
}
c = c + '

Unknown end tag for &lt;/tr&gt;

';
}
document.getElementById('zd-color').innerHTML = c + '

Unknown end tag for &lt;/table&gt;

';
break;
case "zd-smiley":
smiley = document.getElementById('zd-smiley');
if (smiley.innerHTML == '') {
$(smiley).load('/smilies.forum?mode=smilies_frame a', function () {
this.innerHTML = this.innerHTML.replace(/emoticonp/g, 'zd_editor.smiley');
});
}
break;
}
},
smiley: function (smiley) {
textarea.value += smiley;
textarea.focus();
$('#zd-smiley').hide();
},
tag: function (a) {
version == 'punbb' || version == 'phpbb3' ? (version == 'punbb' ? (b = custom_tag, c = custom_tag1) : (b = '.post', c = '.postprofile')) : (b = '.post.online', c = '.postprofile-details.postdetails');
var e = $(a).parents(b).find(c + ' a[href^="/u"]').has('span');
document.getElementById('editor-textarea').value += '[url=' + location.host + $(e).attr('href') + ']' + $(e).text() + '[/url]';
},

};
document.write('<div id="zd-editor" style="display:none"><div id="zd-edit" style="display:none">

Unknown end tag for &lt;/div&gt;

<form id="zd-editor-form" name="zd-editor" method="post" action="/post"><div id="editor-top"><div id="editor-tool"><a onclick="zd_editor.add(\'[b]\',\'[/b]\')" class="editor-button-outer" title="Bold"><span id="editor-bold" class="editor-button">&nbsp;

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;

<a onclick="zd_editor.add(\'[i]\',\'[/i]\')"  class="editor-button-outer" title="Italic"><span id="editor-italic" class="editor-button">&nbsp;

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;

<a onclick="zd_editor.add(\'[u]\',\'[/u]\')"  class="editor-button-outer" title="Underline"><span id="editor-underline" class="editor-button">&nbsp;

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;

<a onclick="zd_editor.add(\'[strike]\',\'[/strike]\')"  class="editor-button-outer" title="Strike"><span id="editor-strike" class="editor-button">&nbsp;

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;


<a class="editor-button-outer" title="Color" onclick="zd_editor.popup(\'zd-color\')"><span id="editor-color" class="editor-button">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;


<a class="editor-button-outer" title="Color" onclick="zd_editor.popup(\'zd-smiley\')"><span id="editor-smiley" class="editor-button">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;

<a class="editor-button-outer" title="Tag" onclick="zd_editor.tag(this)"><span id="editor-tag" class="editor-button">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;

<div><div id="zd-color" style="display:none">

Unknown end tag for &lt;/div&gt;

<div id="zd-smiley" style="display:none">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div id="outer-preview"><div id="zd-preview" ondblclick="$(this).hide()">

Unknown end tag for &lt;/div&gt;

<textarea name="message" id="editor-textarea" style="position: relative; width: 100%; height: 98%;">

Unknown end tag for &lt;/textarea&gt;



Unknown end tag for &lt;/div&gt;

<div id="editor-data"><input type="hidden" value="" name="attach_sig"><input type="hidden" value="reply" name="mode"><input type="hidden" value="" name="tid"><input type="hidden" value="" name="t"><input type="hidden" value="" name="lt"><input type="hidden" value="" name="notify"><input type="hidden" value="" name="p">

Unknown end tag for &lt;/div&gt;

<div id="editor-post-tool"><div id="editor-post-button"><input onclick="zd_editor.preview();return false" id="editor-preview-button" value="Preview" name="preview" type="submit" /><input type="submit" value="Send" name="post"  id="editor-send-button" onclick="zd_editor.post();return false">

Unknown end tag for &lt;/div&gt;

<div id="editor-mode">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/form&gt;



Unknown end tag for &lt;/div&gt;

');

$(function () {
zd_editor.ready();
});
```

Tuỳ chỉnh phiên bản forum của bạn
Vào javascript vừa tạo -> Tìm var version -> Thay giá trị bằng phiên bản forum của bạn (mặc định: punbb)
Nếu bạn muốn 'việt hoá' thì thay giá trị của var reply\_text, var edit\_text, var quote\_text, var preview\_text bằng từ mà bạn muốn (có hỗ trợ html).
Đổi giá trị của var version, var post, var post\_body, var post\_inbody nếu bạn chuyển phiên bản.
Giá trị của var reply\_button là nội dụng của nút reply (có hỗ trợ html).

- Display -> Pictures and Colors -> Colors -> Css Stylesheet

```

/* Editor ------*/
#ddcbcolors div {
height: 12px;
width: 12px;
cursor: pointer;
}

#zd-editor {
background-color: #EFEFEF;
border-radius: 5px 5px 5px 5px;
margin: 15px 40px 15px;
padding: 20px 10px;
}

#outer-preview {
position: relative;
height: 200px;
width: 100%;
}

#editor-mode, #editor-post-button {
display: inline-block;
}

#editor-mode {
float: right;
}

#zd-preview {
background-color: #CCCCCC;
border: 1px solid #6EA2C7;
cursor: pointer;
display: none;
height: 100%;
margin-right: auto;
margin-top: 3px;
max-height: 100%;
max-width: 100%;
overflow: auto;
padding: 1px;
position: absolute;
width: 100%;
z-index: 9;
}

#editor-post-tool {
margin-top: 10px;
}

#zd-editor textarea {
width: 100%;
resize: none;
height: 200px;
}

.editor-button-outer:hover {
background-color: #DCDCDC;
border-radius: 4px;
}

.editor-button {
background-image: url("http://glue.readthedocs.org/en/latest/_images/famfamfam1.png");
background-repeat: no-repeat;
height: 16px;
margin-top: 1px;
width: 16px;
display: block;
}

#zd-smiley, #zd-color {
background-color: #EFEFEF;
border: 1px solid #6EA2C7;
max-width: 500px;
position: absolute;
z-index: 999;
margin-top: 30px;
padding: 5px;
}

#zd-smiley {
margin-left: 130px;
}

.editor-button-outer {
display: block;
float: left;
padding: 4px;
margin-bottom: 4px;
cursor: pointer;
}

#editor-color {
background-image: none !important;
background-color: #000;
border-radius: 4px;
}

#editor-bold {
background-position: -129px -144px;
}

#editor-italic {
background-position: -143px -80px;
}

#editor-underline {
background-position: -128px -64px;
}

#editor-strike {
background-position: -128px -112px;
}

#editor-smiley {
background-position: -224px -384px;
}

#editor-tag {
background-position: -33px -96px;
}

#editor-top {
margin-bottom: 4px;
height: 20px;
margin-top: -15px;
}

#quick_reply {
display: none !important;
}

```

Updates:

  * 15-01-2013
> > Bắt đầu phát triển lại dự án bỏ dở vào hè 2012

  1. -01-2013
> > Thêm chức năng smiley và color
> > Nâng cấp chức năng preview
> > Rút gọn script và css...

  * 21-01-2013
> > Rút gọn 5% của script
> > Viết lại chức năng preview

  * 22-01-2013
> > Thêm một vài functions mới
> > Sửa lại css cho chức năng preview
> > Thêm hỗ trợ cho phpbb3 và invision
> > Thêm vào dòng script cho phpbb3 và invision. Rút gọn tới mức có thể @_@_

  * 25-01-2013
> > Phát hảnh phiên bản 1.0
> > Rút gọn if statement

  * 26-01-2013
> > Cập nhật phiên bản hotfix vì quên thêm nút reply



Hướng dẫn cho skin fmvi ver3:
Làm tất cả bước ở trên -> Vào sửa lại script
Sửa giá trị của những variable sau đây: (Giá trị là thành phần ỡ giữa 2 dấu ')
```

var custom_tag1 -> .writer
var post -> .options-button

```
Bình luận/ Gợi ý: Tại đây
Báo lỗi: http://www.fmvi.vn/t864-bao-loi-zeditor
Hỗ trợ: http://www.fmvi.vn/t865-moi-thac-mac-ve-zeditor