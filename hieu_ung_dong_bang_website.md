**ACP >> Modules >> HTML & JAVASCRIPT >> Javascript codes management >> Create a new javascript**

  * Title **: Hiệu ứng đóng băng website
  * Placement : In all the pages
  * Javascript Code** :

```


jQuery(document).ready(function (a) {
function e() {
clearInterval(f);
clearTimeout(b);
a.browser.msie ? f = setTimeout(function () {
a("#frozen_ie").html("").hide()
}, 200) : (c.stop(), g.fadeOut(400, function () {
a(this).removeClass("active").removeAttr("style");
c.removeAttr("style");
c.stop().css("opacity", 0)
}))
}
function d() {
a.browser.msie ? a("#frozen_ie").show().html('<embed width="' + a("body").width() + '" height="' + a(window).height() + '" name="plugin" src="http://dl.dropbox.com/u/126946313/froze/flash/frozen.swf" type="application/x-shockwave-flash" wmode="transparent" />') : (g.addClass("active"), h.delay(4E3).animate({
opacity: 0.4
}, 6E3), i.delay(2E3).animate({
opacity: 1
}, 4E3), j.delay(4E3).animate({
opacity: 1
}, 4E3), k.delay(6E3).animate({
opacity: 1
}, 4E3))
}
a("head").append('<style type="text/css">#froze_layers{display:none;margin:0;padding:0}#froze_layers.active{display:block;position:fixed;top:0;left:0;width:100%;height:100%;z-index:9999999}#froze_layers li{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;background-repeat:no-repeat;background-position:top center;background-color:transparent;z-index:9999}#froze_layers #froze_layer_1{background-position:center 340px;background-image:url(http://i40.servimg.com/u/f40/17/70/81/78/froze_10.png)}#froze_layers #froze_layer_2{background-position:center top;background-image:url(http://i40.servimg.com/u/f40/17/70/81/78/froze_11.png)}#froze_layers #froze_layer_3{background-position:0 150px;background-image:url(http://i40.servimg.com/u/f40/17/70/81/78/froze_12.png)}#froze_layers #froze_layer_4{background-position:right 270px;background-image:url(http://i40.servimg.com/u/f40/17/70/81/78/froze_13.png)}#froze_layers #froze_layer_5{background-position:left top;background-image:url(http://i40.servimg.com/u/f40/17/70/81/78/froze_14.png)}#froze_layers #froze_layer_6{background-position:center top;background-image:url(http://i40.servimg.com/u/f40/17/70/81/78/froze_15.png)}#froze_layers #froze_layer_7{background-position:right top;background-image:url(http://i40.servimg.com/u/f40/17/70/81/78/froze_16.png)}#froze_layers #froze_layer_8{background-position:left top;background-image:url(http://i40.servimg.com/u/f40/17/70/81/78/froze_17.png)}#froze_layers #froze_layer_9{background-position:left 350px;background-image:url(http://i40.servimg.com/u/f40/17/70/81/78/froze_18.png)}#froze_layers #froze_layer_main{background:#fff}#frozen_ie{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:1111111}

Unknown end tag for &lt;/style&gt;

');
a("body").prepend('<ul id="froze_layers"><li id="froze_layer_main" class="froze_layer">

Unknown end tag for &lt;/li&gt;

<li id="froze_layer_1" class="froze_layer">

Unknown end tag for &lt;/li&gt;

<li id="froze_layer_2" class="froze_layer">

Unknown end tag for &lt;/li&gt;

<li id="froze_layer_3" class="froze_layer">

Unknown end tag for &lt;/li&gt;

<li id="froze_layer_4" class="froze_layer">

Unknown end tag for &lt;/li&gt;

<li id="froze_layer_5" class="froze_layer">

Unknown end tag for &lt;/li&gt;

<li id="froze_layer_6" class="froze_layer">

Unknown end tag for &lt;/li&gt;

<li id="froze_layer_7" class="froze_layer">

Unknown end tag for &lt;/li&gt;

<li id="froze_layer_8" class="froze_layer">

Unknown end tag for &lt;/li&gt;

<li id="froze_layer_9" class="froze_layer">

Unknown end tag for &lt;/li&gt;



Unknown end tag for &lt;/ul&gt;

<div id="frozen_ie">

Unknown end tag for &lt;/div&gt;

');
var l = null != navigator.userAgent.match(/iPad/i),
m = null != navigator.userAgent.match(/iPhone/i),
n = null != navigator.userAgent.match(/iPod/i);
if (l || m || n) return !1;
a("#froze_layers1").hide();
var b, g = a("#froze_layers"),
c = a(".froze_layer"),
h = a("#froze_layer_main"),
i = a("#froze_layer_2,#froze_layer_5,#froze_layer_7,#froze_layer_9"),
j = a("#froze_layer_3,#froze_layer_4,#froze_layer_6"),
k = a("#froze_layer_1,#froze_layer_8"),
f;
a(document).mousemove(function () {
e();
b = setTimeout(d, 1E4)
}).click(function () {
e();
b = setTimeout(d, 1E4)
});
b = setTimeout(d, 1E4)
});


```
Nguồn: http://www.xf-russia.ru