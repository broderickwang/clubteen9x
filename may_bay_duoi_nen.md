![http://1.bp.blogspot.com/-vJ6EAxaU6Hw/UBJm-MZs8dI/AAAAAAAAJIg/IUAwr8MdheI/s1600/code1k.com-script-may-bay-duoi-nen-web.jpg](http://1.bp.blogspot.com/-vJ6EAxaU6Hw/UBJm-MZs8dI/AAAAAAAAJIg/IUAwr8MdheI/s1600/code1k.com-script-may-bay-duoi-nen-web.jpg)
```
    <style type='text/css'>
#cloud1k{ position:absolute; top:-28px; right:10px; z-index:-8; }
#cloud1k1{ position:absolute; top:10px; left: 0px; z-index:-5; }
#cloud1k2{ position:absolute; top:200px; left: 0px; z-index:-5; }
#cloud1k3{ position:absolute; top:320px; left: 0px; z-index:-5; }
#cloud1k4{ position:absolute; top:60px; left: 0px; z-index:-5; }


Unknown end tag for &lt;/style&gt;



<script src='http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js' type='text/javascript'>

Unknown end tag for &lt;/script&gt;



<script type='text/javascript'>
//<![CDATA[
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
def: 'easeOutQuad',
swing: function (x, t, b, c, d) {
//alert(jQuery.easing.default);
return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
},
easeInQuad: function (x, t, b, c, d) {
return c*(t/=d)*t + b;
},
easeOutQuad: function (x, t, b, c, d) {
return -c *(t/=d)*(t-2) + b;
},
easeInOutQuad: function (x, t, b, c, d) {
if ((t/=d/2) < 1) return c/2*t*t + b;
return -c/2 * ((--t)*(t-2) - 1) + b;
},
easeInCubic: function (x, t, b, c, d) {
return c*(t/=d)*t*t + b;
},
easeOutCubic: function (x, t, b, c, d) {
return c*((t=t/d-1)*t*t + 1) + b;
},
easeInOutCubic: function (x, t, b, c, d) {
if ((t/=d/2) < 1) return c/2*t*t*t + b;
return c/2*((t-=2)*t*t + 2) + b;
},
easeInQuart: function (x, t, b, c, d) {
return c*(t/=d)*t*t*t + b;
},
easeOutQuart: function (x, t, b, c, d) {
return -c * ((t=t/d-1)*t*t*t - 1) + b;
},
easeInOutQuart: function (x, t, b, c, d) {
if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
return -c/2 * ((t-=2)*t*t*t - 2) + b;
},
easeInQuint: function (x, t, b, c, d) {
return c*(t/=d)*t*t*t*t + b;
},
easeOutQuint: function (x, t, b, c, d) {
return c*((t=t/d-1)*t*t*t*t + 1) + b;
},
easeInOutQuint: function (x, t, b, c, d) {
if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
return c/2*((t-=2)*t*t*t*t + 2) + b;
},
easeInSine: function (x, t, b, c, d) {
return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
},
easeOutSine: function (x, t, b, c, d) {
return c * Math.sin(t/d * (Math.PI/2)) + b;
},
easeInOutSine: function (x, t, b, c, d) {
return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
},
easeInExpo: function (x, t, b, c, d) {
return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
},
easeOutExpo: function (x, t, b, c, d) {
return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
},
easeInOutExpo: function (x, t, b, c, d) {
if (t==0) return b;
if (t==d) return b+c;
if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
},
easeInCirc: function (x, t, b, c, d) {
return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
},
easeOutCirc: function (x, t, b, c, d) {
return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
},
easeInOutCirc: function (x, t, b, c, d) {
if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
},
easeInElastic: function (x, t, b, c, d) {
var s=1.70158;var p=0;var a=c;
if (t==0) return b; if ((t/=d)==1) return b+c; if (!p) p=d*.3;
if (a < Math.abs(c)) { a=c; var s=p/4; }
else var s = p/(2*Math.PI) * Math.asin (c/a);
return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
},
easeOutElastic: function (x, t, b, c, d) {
var s=1.70158;var p=0;var a=c;
if (t==0) return b; if ((t/=d)==1) return b+c; if (!p) p=d*.3;
if (a < Math.abs(c)) { a=c; var s=p/4; }
else var s = p/(2*Math.PI) * Math.asin (c/a);
return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
},
easeInOutElastic: function (x, t, b, c, d) {
var s=1.70158;var p=0;var a=c;
if (t==0) return b; if ((t/=d/2)==2) return b+c; if (!p) p=d*(.3*1.5);
if (a < Math.abs(c)) { a=c; var s=p/4; }
else var s = p/(2*Math.PI) * Math.asin (c/a);
if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
},
easeInBack: function (x, t, b, c, d, s) {
if (s == undefined) s = 1.70158;
return c*(t/=d)*t*((s+1)*t - s) + b;
},
easeOutBack: function (x, t, b, c, d, s) {
if (s == undefined) s = 1.70158;
return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
},
easeInOutBack: function (x, t, b, c, d, s) {
if (s == undefined) s = 1.70158;
if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
},
easeInBounce: function (x, t, b, c, d) {
return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
},
easeOutBounce: function (x, t, b, c, d) {
if ((t/=d) < (1/2.75)) {
return c*(7.5625*t*t) + b;
} else if (t < (2/2.75)) {
return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
} else if (t < (2.5/2.75)) {
return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
} else {
return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
}
},
easeInOutBounce: function (x, t, b, c, d) {
if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
}
});
//]]>


Unknown end tag for &lt;/script&gt;


<script type='text/javascript'>
//<![CDATA[
$(document).ready(function() {
setTimeout("animation()",300);
});

function animation(){
cloud1k1();
cloud1k2();
cloud1k3();
cloud1k4();
}

function cloud1k1(){
$("#cloud1k1").animate({left:"+=80%"},50000).animate({left:"-0px"}, 0)
setTimeout("cloud1k1()",30000);
}
function cloud1k2(){
$("#cloud1k2").animate({left:"+=70%"},40000).animate({left:"-0px"}, 0)
setTimeout("cloud1k2()",20000);
}
function cloud1k3(){
$("#cloud1k3").animate({left:"+=70%"},60000).animate({left:"-0px"}, 0)
setTimeout("cloud1k3()",20000);
}
function cloud1k4(){
$("#cloud1k4").animate({left:"+=70%"},75000).animate({left:"-0px"}, 0)
setTimeout("cloud1k4()",75000);
}
//]]>


Unknown end tag for &lt;/script&gt;


<div id='cloud1k'><img src='http://4.bp.blogspot.com/-34RSOJCBoDU/UBJk3jdLl9I/AAAAAAAAJH8/Cv1XN6hQ9Tw/s1600/script-may-bay-duoi-nen-web-1-code1k.com.png' alt=''/>

Unknown end tag for &lt;/div&gt;


<div id='cloud1k1'><img src='http://3.bp.blogspot.com/-g6HcoaRqnzc/UBJk4qBDg6I/AAAAAAAAJIA/rnl0Oh8dPOs/s1600/script-may-bay-duoi-nen-web-2-code1k.com.png' alt=''/>

Unknown end tag for &lt;/div&gt;


<div id='cloud1k2'><img src='http://2.bp.blogspot.com/-VRC22en_Jgs/UBJk5bqYY8I/AAAAAAAAJII/yUNrZIq1e3o/s1600/script-may-bay-duoi-nen-web-3-code1k.com.png' alt=''/>

Unknown end tag for &lt;/div&gt;


<div id='cloud1k3'><img src='http://1.bp.blogspot.com/-ofvewnR69-w/UBJk6Rs1_sI/AAAAAAAAJIU/TIJmqElpIdU/s1600/script-may-bay-duoi-nen-web-4-code1k.com.png' alt=''/>

Unknown end tag for &lt;/div&gt;


<div id='cloud1k4'><img src='http://2.bp.blogspot.com/-VRC22en_Jgs/UBJk5bqYY8I/AAAAAAAAJII/yUNrZIq1e3o/s1600/script-may-bay-duoi-nen-web-3-code1k.com.png' alt=''/>

Unknown end tag for &lt;/div&gt;


<!-- zkcka9cva.forumvi.com -->```