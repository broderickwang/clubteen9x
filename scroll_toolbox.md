Demo : http://demo.c3zone.net/h7-scroll-toolbox
Chèn vào widget hoặc template ( bất kỳ đâu cho phép HTML Smile )

```

<div style="z-index:99;width:26px;position:fixed;right:1px;top:250px;background:transparent;-moz-border-radius:5px;text-align:center">
<a onclick="javascript:amutop();return false;" href="#" title="Up to TOP"><img border="0" src="http://www.c3zone.net/users/1214/94/30/93/album/up10.png" width="24">

Unknown end tag for &lt;/a&gt;

<br>
<a onclick="javascript:history.back();return false;" href="#" title="Back"><img border="0" src="http://www.c3zone.net/users/1214/94/30/93/album/back10.png" width="24">

Unknown end tag for &lt;/a&gt;

<br>
<a href="/contact" class="OverlayTrigger" title="Contact"><img border="0" src="http://www.c3zone.net/users/1214/94/30/93/album/contac10.png" width="24">

Unknown end tag for &lt;/a&gt;

<br>
<a href="javascript:confirmRefresh();" title="Refresh"><img border="0" src="http://www.c3zone.net/users/1214/94/30/93/album/refres10.png" width="24">

Unknown end tag for &lt;/a&gt;

<br>
<a onclick="javascript:sc();return false;" href="#" title="Stop Scroll"><img border="0" src="http://www.c3zone.net/users/1214/94/30/93/album/pause10.png" width="24">

Unknown end tag for &lt;/a&gt;

<br>
<a onclick="javascript:clearInterval(timer);initialize();return false;" href="#" title="Scroll Down"><img border="0" src="http://www.c3zone.net/users/1214/94/30/93/album/autodo10.png" width="24">

Unknown end tag for &lt;/a&gt;

<br>
<a onclick="javascript:amubutton();return false;" href="#" title="Go to Bottom"><img border="0" src="http://www.c3zone.net/users/1214/94/30/93/album/down10.png" width="24">

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/div&gt;


<script type="text/javascript" src="http://demo.c3zone.net/15012.js">

Unknown end tag for &lt;/script&gt;


```
```
function confirmRefresh(){var okToRefresh=confirm("Do you really want to refresh this page?");if(okToRefresh){setTimeout("location.reload(true);",1000)}}var currentpos,timer;function initialize(){timer=setInterval("scrollwindow ()",30)}function sc(){clearInterval(timer)}function scrollwindow(){currentpos=document.documentElement.scrollTop||document.body.scrollTop;window.scrollTo(0,++currentpos)}function amutop(){window.scrollTo(0,0);clearInterval(timer)}function amubutton(){window.scrollTo(0,80000);clearInterval(timer)}```

Nguồn : từ Xenplaza Toolbox