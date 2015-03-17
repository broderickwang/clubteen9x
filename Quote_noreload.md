Tạo 1 js đặt In the topics.

```


$(function () {
$('.i_icon_quote', document.getElementById('main-content')).click(function (e) {
e.preventDefault();
var selection = (function () {
if(window.getSelection) {
var e = document.activeElement;
if(e && e.tagName.toLowerCase() in {
textarea: 1,
input: 1
}) {
return e.value.substring(e.selectionStart, e.selectionEnd)
} else {
return window.getSelection().toString()
}
} else if(document.selection.createRange) {
return(document.selection.createRange()).text || ''
}
return null
})();
if(selection) return bbfontstyle('[quote]' + selection + '[/quote]', '');
var x = $('body').append('<div id="ifquote" style="display:none">

Unknown end tag for &lt;/div&gt;

').find('#ifquote');
x.load(this.parentNode.href + ' textarea', function () {
bbfontstyle(x[0].getElementsByTagName('textarea')[0].value, '');
x.remove()
})
})

```