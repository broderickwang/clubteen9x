![http://a.imageshack.us/img840/1197/colordemo.jpg](http://a.imageshack.us/img840/1197/colordemo.jpg)

> Cách làm :
> > Chèn đoạn sau vào CSS

```


#color, #wcolor {overflow: visible;}
#colorpicker {position: absolute; top: 20px; left: -225px;}
#grid {border: 1px solid #808080;}
#grid td {padding: 0px;}
#grid td button {height: 12px; width: 12px; padding: 0px; border: 1px solid #808080;}
#grid td button:hover {border: 1px solid #ffffff;}

```


> Vào Javascript codes management tạo Javascript mới :
> Title **: tùy ý bạn
> Placement : In all the pages
> Javascript Code** :

> ```

/*Color-picker for forumotion text editors. Copyright © 2005-2011 by Dion Designs. All Rights Reserved. Use and/or modification of this script is allowed, provided this entire copyright notice remains in the original or modified script. Distribution is not allowed without written consent from Dion Designs.*/
$(function() {
if (document.getElementById('color')) {
var colors=new Array('00','33','66','99','CC','FF');
var x='<div id="colorpicker"><table cellspacing="0" id="grid">';
var y=x;
for (i = 5; i >= 0; i--) {
x=x+'<tr>';
y=y+'<tr>';
for (j = 5; j >= 0; j--) {
for (k= 5; k >= 0; k--) {
var col = colors[j]+colors[i]+colors[k];
x=x+'<td style="background: #'+col+';"><button style="background:#'+col+';" title="#'+col+'" onmouseover="this.className='selectHover';" onmouseout="this.className='';" onclick="bbfontstyle('[color=#'+col+']', '[/color]');selectWysiwyg(this, 'color');return false;">

Unknown end tag for &lt;/button&gt;



Unknown end tag for &lt;/td&gt;

';
y=y+'<td style="background: #'+col+';"><button style="background:#'+col+';" id="text_editor_cmd_constructBBcode_select_color_#'+col+'">

Unknown end tag for &lt;/button&gt;



Unknown end tag for &lt;/td&gt;

';
}
}
x=x+'

Unknown end tag for &lt;/tr&gt;

';
y=y+'

Unknown end tag for &lt;/tr&gt;

';
}
document.getElementById('color').innerHTML=x+'

Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;

';
document.getElementById('wcolor').innerHTML=y+'

Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;

';
}
});


```
Bảng chọn màu cho Forumotion viết bởi jalokim được đơn giản hóa bởi Dion
Nguồn : http://diondesigns.forumotion.com/t1377-