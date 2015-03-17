![http://i12.servimg.com/u/f12/17/91/04/74/10.png](http://i12.servimg.com/u/f12/17/91/04/74/10.png)

Vào Modules >> HTML & JAVASCRIPT >> Javascript codes management >> Create a new javascript

Title**: Quick Quote style Loading**

Placement : In all the pages

Javascript Code **:**



```

$(function() {
var CopyrightNotice = 'Quick Quote Style Loading';
$('.i_icon_quote', document.getElementById('main-content')).click(function(e) {
e.preventDefault();

var selection = (function() {
if (window.getSelection) {
var e = document.activeElement;
return (e && e.tagName.toLowerCase() in {textarea:1, input:1}) ? e.value.substring (e.selectionStart, e.selectionEnd) : window.getSelection().toString();
}
else if(document.selection.createRange) {
return (document.selection.createRange()).text || '';
}
return null;
})();

if(selection) return bbfontstyle('[quote]' + selection + '[/quote]', '');

var x = $('body').append('<div id="LGquote_loading" style="display:none"><img src="http://jimpunk.net/Loading/wp-content/uploads/loading75.gif">

Unknown end tag for &lt;/div&gt;

<div id="LGquote" style="display:none">

Unknown end tag for &lt;/div&gt;

').find('#LGquote');
var loading = document.getElementById('LGquote_loading'), textbox = document.post.message;
textbox.focus();
for(var i in {Width:1,Height:1,Left:1,Top:1}) loading.style[i.toLowerCase()] = textbox['offset' + i] + 'px';
loading.style.display = '';

x.load(this.parentNode.href + ' textarea', function() {
bbfontstyle(x[0].getElementsByTagName('textarea')[0].value, '');
x.add(loading).remove();
});
});
});




```
Cho code sau vào CSS:


```

#LGquote_loading {
background-color: #AAA;
text-align: center;
opacity: 0.6;
-moz-opacity: 0.6;
-webkit-opacity: 0.6;
filter: alpha(opacity=60);
position: absolute;
}
#LGquote_loading img {
margin-top: 30px;
}


```