![http://i48.servimg.com/u/f48/16/28/30/49/fmvi_o10.png](http://i48.servimg.com/u/f48/16/28/30/49/fmvi_o10.png)

Instruction:
Display >Color > Css
Code:Select code

```

.prettyprint .pln{color:#000}.prettyprint .str{color:#080}.prettyprint .kwd{color:#008}.prettyprint .com{color:#800}.prettyprint .typ{color:#606}.prettyprint .lit{color:#066}.prettyprint .fmvip{color:#660}.prettyprint .tag{color:#008}.prettyprint .atn{color:#606}.prettyprint .atv{color:#080}.prettyprint .dec{color:#606}.prettyprint .linenums li{border-left:3px solid #EBEFF9;padding-left:5px}.prettyprint{font-family:Monaco, 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Lucida Console', monospace;font-size:13px;padding:2px}.prettyprint ol.linenums{margin-bottom:0;margin-top:0}ol.linenums:hover{list-style-type:none}
```


Modules HTML & JAVASCRIPT Javascript codes management Tick "In the topic"
For Phpbb3 - Invision - Punbb
Code:Select code

```

$(function () {
if ($("code").filter(function () {
var a = $(this).text().indexOf("["),
b = $(this).text().indexOf("]"),
c = $(this).text().indexOf("[/"),
d = $(this).text().indexOf("<"),
e = $(this).text().indexOf('"'),
f = $(this).text().indexOf("'"),
g = $(this).text().indexOf("/");
return a == -1 || b == -1 || c == -1 || a > b || b > c || d != -1 && d < a || e != -1 && e < a || f != -1 && f < a || g != -1 && g < a
}).each(function () {
$(this).wrapInner('<pre class="prettyprint' + ($(this).text().indexOf("<") == -1 && /[\s\S]+{[\s\S]+:[\s\S]+}/.test($(this).text()) ? " lang-css" : "") + ' linenums" />')
}).length) {
var s = document.createElement("script");
s.type = "text/javascript";
s.async = !0;
s.src = "http://fmvi-group.googlecode.com/files/fmvi-color-code.js";
document.getElementsByTagName("head")[0].appendChild(s)
};
});

```

For Phpbb2
```


Code:
$(function () {
if ($("div.cont_code").filter(function () {
var a = $(this).text().indexOf("["),
b = $(this).text().indexOf("]"),
c = $(this).text().indexOf("[/"),
d = $(this).text().indexOf("<"),
e = $(this).text().indexOf('"'),
f = $(this).text().indexOf("'"),
g = $(this).text().indexOf("/");
return a == -1 || b == -1 || c == -1 || a > b || b > c || d != -1 && d < a || e != -1 && e < a || f != -1 && f < a || g != -1 && g < a
}).each(function () {
$(this).wrapInner('<pre class="prettyprint' + ($(this).text().indexOf("<") == -1 && /[\s\S]+{[\s\S]+:[\s\S]+}/.test($(this).text()) ? " lang-css" : "") + ' linenums" />')
}).length) {
var s = document.createElement("script");
s.type = "text/javascript";
s.async = !0;
s.src = "http://fmvi-group.googlecode.com/files/fmvi-color-code.js";
document.getElementsByTagName("head")[0].appendChild(s)
};
});
```



nguồn fmvi