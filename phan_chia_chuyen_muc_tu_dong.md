Hướng dẫn:

Display :: Homepage :: Structure and hierarchy :: Split categories on index :: Chọn Medium

Vào Quản lý tổng thể :: Index\_box
Tìm đoạn sau:

```

{catrow.forumrow.L_LINKS}{catrow.forumrow.LINKS}

```
Thay code này vào:

```

<div style="clear:both;">

Unknown end tag for &lt;/div&gt;


<div class="chiacmvds">{catrow.forumrow.L_LINKS}{catrow.forumrow.LINKS}

Unknown end tag for &lt;/div&gt;



```

Tiếp theo là:

Modules :: Javascript codes management :: Create a new Javascript

Title: Phân chuyên mục
Placement: In the home page + In the sub-forums

Cho đoạn Jquery này vào:

```

$(document).ready(function(){
$("div.chiacmvds").each(function(index){
cm = $(this).html();
cm = cm.replace(/, /gi,'');
$(this).html(cm);
});
$('div.chiacmvds:nth-child(even) a.gensmall:even').prev().wrap('<div class=imgcmvds_trai></div>');
$('div.chiacmvds:nth-child(even) a.gensmall:odd').prev().wrap('<div class=imgcmvds_phai></div>');
$('div.chiacmvds:nth-child(even) a.gensmall:even').wrap('<div class=cmvds_trai></div>');
$('div.chiacmvds:nth-child(even) a.gensmall:odd').wrap('<div class=cmvds_phai></div>');

$('div.chiacmvds:nth-child(odd) a.gensmall:even').prev().wrap('<div class=imgcmvds_trai></div>');
$('div.chiacmvds:nth-child(odd) a.gensmall:odd').prev().wrap('<div class=imgcmvds_phai></div>');
$('div.chiacmvds:nth-child(odd) a.gensmall:even').wrap('<div class=cmvds_trai></div>');
$('div.chiacmvds:nth-child(odd) a.gensmall:odd').wrap('<div class=cmvds_phai></div>');
});


```
Việc cuối cùng là thêm vào CSS cái này:

```

.cmvds_trai{float:left;width:40%;height:15px;margin:1px 1px 7px;padding:2px;text-align:left;top:5px;left:5px;background-color:#5e9eff;}
.cmvds_phai{float:right;width:40%;height:15px;margin:1px 1px 7px;padding:2px;text-align:right;top:5px;right:5px;background-color:#ff52f3;}
.imgcmvds_trai{float:left;width:6%;height:15px;margin:1px;padding:4px 2px 0 0;text-align:right;top:5px;left:5px;background-color:#96ff61;}
.imgcmvds_phai{float:right;width:6%;height:15px;margin:1px;padding:4px 0 0 2px;text-align:left;top:5px;right:5px;background-color:#96ff61;}
.cmvds_trai,.cmvds_phai,.imgcmvds_trai,.imgcmvds_phai{position:relative;border:1px solid #8a8a8a;box-shadow: 2px -2px 2px #999;}
.cmvds_trai:hover,.cmvds_phai:hover,.imgcmvds_trai:hover,.imgcmvds_phai:hover{transform: scale(1.2); -webkit-transform: scale(1.2); -moz-transform: scale(1.2);background-color:#fff200;text-align:center;font-weight:bold;font-size:12px;z-index:99;}

```

Bây giờ bạn thử vào Forum của mình và bấm F5 nhé!