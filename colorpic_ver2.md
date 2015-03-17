![http://i44.servimg.com/u/f44/15/64/85/86/test_t12.png](http://i44.servimg.com/u/f44/15/64/85/86/test_t12.png)
Hướng dẫn cách cài đặt

Bước 1: Vào Modules >> Javascript codes management >> Tạo 1 trang mới tên tuỳ ý chọn In all the pages >> Code sau vào và Save

```

$(function() {if (document.getElementById('color')) {var colors=new Array('00','22','44','88','CC','FF');var x='<div id="colorpickers"><table id="colortd">';var y=x;for (i = 5; i >= 0; i--) {x=x+'<tr>';y=y+'<tr>';for (j = 5; j >= 0; j--) {for (k= 5; k >= 0; k--) {var col = colors[j]+colors[i]+colors[k];x=x+'<td style="background: #'+col+';"><button style="background:#'+col+';" title="#'+col+'" onmouseout="this.className=\'\';" onmouseover="this.className=\'selectHover\';" onclick="bbfontstyle(\'[color=#'+col+']\', \'[/color]\');selectWysiwyg(this, \'color\');return false;">

Unknown end tag for &lt;/button&gt;



Unknown end tag for &lt;/td&gt;

';y=y+'<td style="background: #'+col+';"><button style="background:#'+col+';" id="text_editor_cmd_constructBBcode_select_color_#'+col+'">

Unknown end tag for &lt;/button&gt;



Unknown end tag for &lt;/td&gt;

';}} x=x+'

Unknown end tag for &lt;/tr&gt;

';y=y+'

Unknown end tag for &lt;/tr&gt;

';}document.getElementById('color').innerHTML=x+'

Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;

';document.getElementById('wcolor').innerHTML=y+'

Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;

';
};$("#color, #wcolor").css({"overflow":"visible";})
});

```

Bước 2: (không làm cũng được, chỉ để trang trí cho đẹp thêm Nháy nháy ): Vào Display >> Color >> CSS >> Cho dòng css sau vào cuối và Save
```

#colorpickers {top: 22px; left: -230pxposition: absolute; ;}
#colortd td {padding: 1px;}
#colortd td button { padding: 0px;height: 15px; width: 15px;border: 1px solid #fff;}
#colortd {border: 1px solid #fff;}
#colortd td button:hover {border: 1px solid #fff;}
```