cái chuyên mục con ni vlt copy từ CP về do vandonstar share.
nên lấy tên chủ nhân và rum đặt tên luôn.
rứa cho gọn vả dễ hình dung
và cũng như một lời thankiu của 4ALL nói chung
và của vlt nói riêng.

demo:   ![http://cc7.upanh.com/27.806.35084116.p0R0/chiacmvds.png](http://cc7.upanh.com/27.806.35084116.p0R0/chiacmvds.png)


hướng dẫn:

1. chỉnh categories và sub-level links:
Spoiler:
ACP> Display> Homepage> Structure and hierarchy
> Split categories on index: Chọn Medium
> Hierarchy
Sub-level links on index : chọn Có


2. thay codes trong index\_box:
Spoiler:
- ACP> Display> Templates> QLTT> index\_box
- thay:
```

{catrow.forumrow.L_LINKS}{catrow.forumrow.LINKS}
```
bằng:
```

<div style="clear:both;">

Unknown end tag for &lt;/div&gt;


<div class="chiacmvds">{catrow.forumrow.L_LINKS}{catrow.forumrow.LINKS}

Unknown end tag for &lt;/div&gt;

```

- bấm save rùi


3. tạo Javascript
Spoiler:
- ACP> Modules> HTML & Javascript>Javascript codes management
> Create a new Javascript
Title: Phân chuyên mục
Placement: In the home page + In the sub-forums
copy và chèn đoạn codes sau vô khung
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
bấm lưu

4. thêm codes trong css

- ACP> Display> Colors & Pics> Colors> CSS
- chèn vào cuối css (rứa cho dễ)
```

.cmvds_trai{float:left;width:40%;height:15px;margin:1px 1px 7px;padding:2px;text-align:left;top:5px;left:5px;background-color:#5e9eff;}
.cmvds_phai{float:right;width:40%;height:15px;margin:1px 1px 7px;padding:2px;text-align:right;top:5px;right:5px;background-color:#ff52f3;}
.imgcmvds_trai{float:left;width:6%;height:15px;margin:1px;padding:4px 2px 0 0;text-align:right;top:5px;left:5px;background-color:#96ff61;}
.imgcmvds_phai{float:right;width:6%;height:15px;margin:1px;padding:4px 0 0 2px;text-align:left;top:5px;right:5px;background-color:#96ff61;}
.cmvds_trai,.cmvds_phai,.imgcmvds_trai,.imgcmvds_phai{position:relative;border:1px solid #8a8a8a;box-shadow: 2px -2px 2px #999;}
.cmvds_trai:hover,.cmvds_phai:hover,.imgcmvds_trai:hover,.imgcmvds_phai:hover{transform: scale(1.2); -webkit-transform: scale(1.2); -moz-transform: scale(1.2);background-color:#fff200;text-align:center;font-weight:bold;font-size:12px;z-index:99;}
```
- bấm submit.