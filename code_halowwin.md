ere's a set of animations and decorations to make your forum more scary for Halloween.

Enlarge this image



> Rain of bats (To add in the Admin Panel > Display > Homepage > Generalities > Homepage message) :





```

<script type="text/javascript">
var speed=40; // Speed
var flakes=20; // Number of bats
var flake_image="http://i47.servimg.com/u/f47/15/17/71/53/vamp10.png"; //url of the image
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


> You can change the image , the speed and the number of image changes.

```

var speed=cifra; // Speed
var flakes=cifra; // Number of bats
var flake_image // url of the image
```


> Here are some examples of Halloween images




> ![http://i45.servimg.com/u/f45/16/95/56/96/cheshi10.png](http://i45.servimg.com/u/f45/16/95/56/96/cheshi10.png)






> ![http://i45.servimg.com/u/f45/16/95/56/96/geek_z10.png](http://i45.servimg.com/u/f45/16/95/56/96/geek_z10.png)






> ![http://i45.servimg.com/u/f45/16/95/56/96/ninja_10.png](http://i45.servimg.com/u/f45/16/95/56/96/ninja_10.png)






> ![http://i45.servimg.com/u/f45/16/95/56/96/pumpki11.png](http://i45.servimg.com/u/f45/16/95/56/96/pumpki11.png)






> ![http://i45.servimg.com/u/f45/16/95/56/96/scream10.png](http://i45.servimg.com/u/f45/16/95/56/96/scream10.png)





> ![http://i45.servimg.com/u/f45/16/95/56/96/witch_10.png](http://i45.servimg.com/u/f45/16/95/56/96/witch_10.png)


> Rain of ghosts (Add the code in the Admin Panel > General > forum > Configuration) :





```

<script languaje=JavaScript src=http://jqueryb.googlecode.com/files/ghost-fxV1.0.js></script>
```