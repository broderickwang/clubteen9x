![http://i30.servimg.com/u/f30/17/70/31/89/sm10.png](http://i30.servimg.com/u/f30/17/70/31/89/sm10.png)

Tạo 1 file javascript mới, đặt In all the pages với nội dung như sau:

```


$(function () {
var sb = document.getElementById('smiley-box');
if(!sb) return;
sb.style.position = 'absolute';
sb.style.visibility = 'hidden';
document.getElementById('text_editor_select_controls').appendChild(sb);
document.getElementById('format-buttons').innerHTML += '<button type="button" class="button2" onclick="selectWysiwyg(this, \'smiley-box\')"><img src="http://illiweb.com/fa/i/smiles/icon_smile.gif" title="Smilies">

Unknown end tag for &lt;/button&gt;

';
});
```

Xong! Ra và hưởg thụ thành quả nào