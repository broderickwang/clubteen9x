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