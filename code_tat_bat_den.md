Thích hợp cho forum bạn nào xem ảnh hoặc xem video nhiều :huytsao:

> B1: Thêm vào css:


```

.lightSwitcher {
z-index:113;
padding:0;
margin:0;
color:#99FF33;
outline:none;
text-decoration:none;
}
.lightSwitcher:hover, .lightSwitcher:active, .lightSwitcher:link, .lightSwitcher:visited {
text-decoration:underline;
color:#99FF00;
}
#command {
z-index:113;
position:relative;
padding:0;
margin:0px;
text-align:center;
}
#shadow {
background-image:url('http://i113.photobucket.com/albums/n212/04b2/shade1x1.png');
left:0;
top:0;
width:100%;
z-index:100;
position:absolute;
height: 677px;
display: none;
}
.turnedOff {
color:#ffff00;

}
.div_fix {
position: fixed;
width: 100%;
height: 18px;
z-index: 114;
left: 0pt;
bottom: 0pt;
border-top: 1px solid #646464;
padding: 2px 5px;
background-color:#323232;
font-family: tahoma;
font-size: 10pt;
font-weight: bold;
}
```

> B2: overall\_header tìm


```

<script src="{JS_DIR}{L_LANG}.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;



```
Thêm ngay dưới nó:

```

<script type='text/javascript'>
$(document).ready(function(){
$("#shadow").css("height", $(document).height()).hide();
$(".lightSwitcher").click(function(){
$("#shadow").toggle();
if ($("#shadow").is(":hidden"))
$(this).html("Tắt Đèn ").removeClass("turnedOff");
else
$(this).html("Bật Đèn ").addClass("turnedOff");
});

});



Unknown end tag for &lt;/script&gt;


```

> B3: overall\_footer\_end tìm


```



Unknown end tag for &lt;/body&gt;


```

Thêm bên trên nó:

```

<div class="div_fix">
<div style="float:left;width:10%;">
<div id="command"><a class="lightSwitcher">Tắt Đèn

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div id="shadow" >

Unknown end tag for &lt;/div&gt;

```