The holiday season fast approaching and after decorating your tree, it's time to decorate your forums !


1. Create a Javascript page Wink

Administration Panel ![http://i62.servimg.com/u/f62/09/02/12/09/arrow10.gif](http://i62.servimg.com/u/f62/09/02/12/09/arrow10.gif) Modules ![http://i62.servimg.com/u/f62/09/02/12/09/arrow10.gif](http://i62.servimg.com/u/f62/09/02/12/09/arrow10.gif) Javascript codes management ![http://i62.servimg.com/u/f62/09/02/12/09/arrow10.gif](http://i62.servimg.com/u/f62/09/02/12/09/arrow10.gif) Create a new javascript


1. Chose the title of your choice (for example : Christmas)
2. Click on the case where you want to see the script (for example : all the pages)
3. Paste the code

2. Decorations at the top of forums
scripts created by Adam\_sfp

> Bulb 1




```

$(function() {
$.getScript("http://sd-1.archive-host.com/membres/up/37821634957680146/deco/amp22.js");
});


```
> Bulb 2





```

$(function() {
$.getScript("http://sd-1.archive-host.com/membres/up/37821634957680146/deco/amp33.js");
});
```


> Snowman





To the left :

```

$(function() {
$.getScript("http://sd-1.archive-host.com/membres/up/37821634957680146/deco/bn22.js");
});


```
To the right :

```

$(function() {
$.getScript("http://sd-1.archive-host.com/membres/up/37821634957680146/deco/bn22R.js");
});
```


> Christmas boots





To the left :

```

$(function() {
$.getScript("http://sd-1.archive-host.com/membres/up/37821634957680146/deco/botte22.js");
});

```

To the right :

```

$(function() {
$.getScript("http://sd-1.archive-host.com/membres/up/37821634957680146/deco/botte22R.js");
});

```

> Christmas balls





To the left :

```

$(function() {
$.getScript("http://sd-1.archive-host.com/membres/up/37821634957680146/deco/boule22.js");
});


```
To the right :

```

$(function() {
$.getScript("http://sd-1.archive-host.com/membres/up/132720629421430912/deco/boule23.js");
});

```

> Christmas tree





```

$(function() {
$.getScript("http://sd-1.archive-host.com/membres/up/37821634957680146/deco/sapin22.js");
});```



> Top of the page


```

$(function() {
$.getScript("http://perso.numericable.fr/antonywar/NOEL/testhaut.js");
});

```

> Countdown




```

$(function() {
$.getScript("http://perso.numericable.fr/antonywar/NOEL/2013.js");
});
```


> Snowflake




```

$(function() {
$.getScript("http://perso.numericable.fr/antonywar/NOEL/floc.js");
});

```

> Flake 1




```

$(function() {
$.getScript("http://perso.numericable.fr/antonywar/NOEL/floc1.js");
});


```
> Lights





```

$(function() {
$.getScript("http://perso.numericable.fr/antonywar/NOEL/lampe.js");
});
```

> Flocon 2




```

$(function() {
$.getScript("http://perso.numericable.fr/antonywar/NOEL/stars.js");
});


```
> Flocon 3




```

$(function() {
$.getScript("http://perso.numericable.fr/antonywar/NOEL/stars1.js");
});

```



3. Rain of images



```

var snowsrc="http://i42.servimg.com/u/f42/09/02/12/09/mistle11.png";

$(function() {
$.getScript('http://js01.fra.co/20215.js');
});

```



```

var snowsrc="http://i42.servimg.com/u/f42/09/02/12/09/recycl11.png";

$(function() {
$.getScript('http://js01.fra.co/20215.js');
});
```





```

var snowsrc="http://i42.servimg.com/u/f42/09/02/12/09/jingle10.png";

$(function() {
$.getScript('http://js01.fra.co/20215.js');
});

```



```

var snowsrc="http://i42.servimg.com/u/f42/09/02/12/09/candle12.png";

$(function() {
$.getScript('http://js01.fra.co/20215.js');
});


```

```

var snowsrc="http://i42.servimg.com/u/f42/09/02/12/09/snowma11.png";

$(function() {
$.getScript('http://js01.fra.co/20215.js');
});



```

```

var snowsrc="http://i42.servimg.com/u/f42/09/02/12/09/santa_11.png";

$(function() {
$.getScript('http://js01.fra.co/20215.js');
});

```


4. Snow on forums

Preview



```

$(function() {
$.getScript("http://illiweb.com/rsc/10/frm/snow.js");
});
```




```

$(function() {
$.getScript('http://js01.fra.co/21268.js');
});

```

> Nice snow script :


And finally, a last really nice script to add a winter snow on your forum.
Just paste the code here :

Administration Panel Display Homepage Generalities Homepage message


1. Chose the title of your choice (for example : Snow)
2. Paste the code
3. You can change the image, the number of flakes and the speed in the code.

```

<script type="text/javascript">
var speed=20; // Speed/From the less to the more speed
var flakes=20; // Number of flakes
var flake_image="http://i67.servimg.com/u/f67/15/17/71/53/nuevep10.png"; //URL of the image
var swide, shigh;
var dx=new Array();
var xp=new Array();
var yp=new Array();
var am=new Array();
var sty=new Array();
window.onload=function() { if (document.getElementById) {
var k, f, b;
b=document.createElement("div");
b.style.position="absolute";
b.setAttribute("id", "bod");
document.body.appendChild(b);
set_scroll();
set_width();
for (var i=0; i<flakes; i++) {
dx[i]=0;
am[i]=Math.random()*20;
xp[i]=am[i]+Math.random()*(swide-2*am[i]-25);
yp[i]=Math.random()*shigh;
sty[i]=0.75+1.25*Math.random();
f=document.createElement("div");
f.style.position="absolute";
f.setAttribute("id", "flk"+i);
f.style.zIndex=i;
f.style.top=yp[i]+"px";
f.style.left=xp[i]+"px";
k=document.createElement("img");
k.src=flake_image;
f.appendChild(k);
b.appendChild(f);
}
setInterval("winter_snow()", speed);
}}
window.onresize=set_width;
function set_width() {
if (document.documentElement && document.documentElement.clientWidth) {
swide=document.documentElement.clientWidth;
shigh=document.documentElement.clientHeight;
}
else if (typeof(self.innerHeight)=="number") {
swide=self.innerWidth;
shigh=self.innerHeight;
}
else if (document.body.clientWidth) {
swide=document.body.clientWidth;
shigh=document.body.clientHeight;
}
else {
swide=800;
shigh=600
}
}
window.onscroll=set_scroll;
function set_scroll() {
var sleft, sdown;
if (typeof(self.pageYOffset)=="number") {
sdown=self.pageYOffset;
sleft=self.pageXOffset;
}
else if (document.body.scrollTop || document.body.scrollLeft) {
sdown=document.body.scrollTop;
sleft=document.body.scrollLeft;
}
else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
sleft=document.documentElement.scrollLeft;
sdown=document.documentElement.scrollTop;
}
else {
sdown=0;
sleft=0;
}
document.getElementById("bod").style.top=sdown+"px";
document.getElementById("bod").style.left=sleft+"px";
}
function winter_snow() {
for (var i=0; i<flakes; i++) {
yp[i]+=sty[i];
if (yp[i]>shigh-30) {
xp[i]=am[i]+Math.random()*(swide-2*am[i]-25);
yp[i]=0;
sty[i]=0.75+1.25*Math.random();
}
dx[i]+=0.02+Math.random()/10;
document.getElementById("flk"+i).style.top=yp[i]+"px";
document.getElementById("flk"+i).style.left=(xp[i]+am[i]*Math.sin(dx[i]))+"px";
}
}


Unknown end tag for &lt;/script&gt;




```
Compatibility informations :
You can insert several elements of scripts decoration. You can also mix these elements with a rain of images . However, just one rain script at a time can be used.


Wink

Merry Christmas to all santa I love you bye