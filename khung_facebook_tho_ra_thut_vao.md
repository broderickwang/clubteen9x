![http://i45.servimg.com/u/f45/15/95/79/74/anh_ch11.png](http://i45.servimg.com/u/f45/15/95/79/74/anh_ch11.png)
Hướng dẫn:
Cho vào css:

```

.w2bslikebox {
background-attachment:scroll !important;
background-color:transparent !important;
background-image:url(http://1.bp.blogspot.com/--tscpVzcBjo/TdUarKtcAlI/AAAAAAAAA3I/qVkypiYO9rc/s150/w2b_facebookbadge.pn) !important;
background-position:0 50% !important;
background-repeat:no-repeat no-repeat !important;
display:block;
float:right;
height:260px;
padding:0 4px 0 46px;
position:fixed;
right:-250px;
top:20%;
width:245px;
z-index:99999;
}

```
tiếp cho vào cuối overall\_footer\_end
```

<script type="text/javascript">
//<!--
$(document).ready(function() {$(".w2bslikebox").hover(function() {$(this).stop().animate({right: "0"}, "medium");}, function() {$(this).stop().animate({right: "-250"}, "medium");}, 500);});
//-->


Unknown end tag for &lt;/script&gt;


<style type="text/css">
.w2bslikebox{background:url("http://1.bp.blogspot.com/--tscpVzcBjo/TdUarKtcAlI/AAAAAAAAA3I/qVkypiYO9rc/s150/w2b_facebookbadge.pn") no-repeat scroll left center transparent!important;display:block;float:right;height:260px;padding:0 4px 0 46px;width:245px;z-index:99999;position:fixed;right:-250px;top:20%;}.w2bslikebox div{border:none;position:relative;display:block;}.w2bslikebox span{bottom:12px;font:8px "lucida grande",tahoma,verdana,arial,sans-serif;position:absolute;right:0px;text-align:right;z-index:99999;}.w2bslikebox span a{color:#808080;text-decoration:none;}.w2bslikebox span a:hover{text-decoration:underline;}


Unknown end tag for &lt;/style&gt;


<div class="w2bslikebox" style="right: -250px;">
<div>
<iframe src="http://www.facebook.com/plugins/likebox.php?href=https://www.facebook.com/Tsuna.Chibi&width=245&colorscheme=light&show_faces=true& connections=9&stream=false&header=false&height=260" scrolling="no" frameborder="0" style="border: medium none; overflow: hidden; height: 260px; width: 240px; background-color: rgb(255, 255, 255); background-position: initial initial; background-repeat: initial initial;"/>


Unknown end tag for &lt;/div&gt;

```