var curx=0;
var cury=0;
var ie45,ns6,ns4,dom;
if (navigator.appName=="Windows Internet Explorer") ie45=parseInt(navigator.appVersion)>=4;
else if (navigator.appName=="Netscape"){  ns6=parseInt(navigator.appVersion)>=5;  ns4=parseInt(navigator.appVersion)<5;}
dom=ie45 || ns6;
 
var timershow=false;
var win_w=window.innerWidth ? window.innerWidth : document.body.offsetWidth;
var mid_w=win_w/2;
var timershow1=window.setInterval("stayMiddle()",1);
function getobj(id) {
el = document.all ? document.all[id] :  dom ? document.getElementById(id) :  document.layers[id];
return el;
}
 
function moveobj(obj,x,y) {
    obj.style.right=x + "px";
    obj.style.top=y+ "px";
    curx=x;
    cury=y;
}
 
function stayMiddle() {
    if (document.documentElement && document.documentElement.scrollTop)
        var pY =  document.documentElement.scrollTop;
    else if (document.body)
        var pY =  document.body.scrollTop;
 
    obj = getobj('login');
    newy = cury+((pY-cury)/16)+5;
    moveobj(obj,curx,newy);
}