Chức năng: Script này của alopass dùng trong trang donate của Forumotion. Để sử dụng plugin này bạn đặt Script sau vào trong header.

```

if("undefined"===typeof allopassButtons){var headID=document.getElementsByTagName("head")[0],cssNode=document.createElement("link");cssNode.type="text/css";cssNode.rel="stylesheet";cssNode.href="https://payment.allopass.com/static/css/buy-button.css?1";cssNode.media="screen";headID.appendChild(cssNode);var allopassButtons=function(){var k=function(d,b,f){k=document.getElementsByClassName?function(i,a,e){for(var i=(e||document).getElementsByClassName(i),a=a?RegExp("\u0008"+a+"\u0008","i"):null,e=[],
b,c=0,d=i.length;c<d;c+=1)b=i[c],(!a||a.test(b.nodeName))&&e.push(b);return e}:document.evaluate?function(b,a,e){for(var a=a||"*",e=e||document,d=b.split(" "),c="",f="http://www.w3.org/1999/xhtml"===document.documentElement.namespaceURI?"http://www.w3.org/1999/xhtml":null,b=[],j,g=0,h=d.length;g<h;g+=1)c+="[contains(concat(' ', @class, ' '), ' "+d[g]+" ')]";try{j=document.evaluate(".//"+a+c,e,f,0,null)}catch(m){j=document.evaluate(".//"+a+c,e,null,0,null)}for(;a=j.iterateNext();)b.push(a);return b}:
function(b,a,e){var a=a||"*",e=e||document,d=b.split(" "),b=[],a="*"===a&&e.all?e.all:e.getElementsByTagName(a),e=[],c;c=0;for(var f=d.length;c<f;c+=1)b.push(RegExp("(^|s)"+d[c]+"(s|$)"));for(var f=0,h=a.length;f<h;f+=1){d=a[f];c=!1;for(var g=0,l=b.length;g<l&&!(c=b[g].test(d.className),!c);g+=1);c&&e.push(d)}return e};return k(d,b,f)},f;f=function(){var d,b,h,i;return{show:function(a,e,q){h=e;i=q;var c=document.createElement("iframe");c.src=a;c.id="ap-iframe";c.style.width=e-20+"px";c.style.height=
q-20+"px";c.frameBorder=0;var a=document.createElement("div"),k=document.createElement("div"),j=document.createElement("div"),g=document.createElement("div"),l=document.createElement("div"),m=document.createElement("div"),r=document.createElement("div"),n=document.createElement("div"),t=document.createElement("div"),s=document.createElement("div"),u=document.createElement("div");a.id="ap-t";k.id="ap-tl";j.id="ap-tc";g.id="ap-tr";l.id="ap-l";r.id="ap-r";n.id="ap-b";t.id="ap-bl";s.id="ap-bc";u.id="ap-br";
j.style.width=s.style.width=e-20+"px";m.style.height=c.style.height;d=document.createElement("div");b=document.createElement("div");var o=document.createElement("div"),p=document.createElement("a");d.id="ap-mask";b.id="ap-modal";o.id="ap-content";m.id="ap-inside";p.id="ap-close";p.innerHTML="close";p.href="#";document.body.appendChild(d);document.body.appendChild(b);b.appendChild(o);b.appendChild(p);a.appendChild(k);a.appendChild(j);a.appendChild(g);l.appendChild(r);m.appendChild(c);r.appendChild(m);
n.appendChild(t);n.appendChild(s);n.appendChild(u);o.appendChild(a);o.appendChild(l);o.appendChild(n);window.onresize=f.resize;b.style.width=e?e+"px":"auto";b.style.height=q?q+"px":"auto";this.redimMask();this.pos();b.style.display="block";p.onclick=f.hide},hide:function(){document.body.removeChild(d);document.body.removeChild(b);return!1},resize:function(){f.pos();f.redimMask()},redimMask:function(){d.style.display="none";d.style.height=f.pageTheight()+"px";d.style.width=f.pageTwidth()+"px";d.style.display=
"block"},pos:function(){var a=f.pageHeight()/2-i/2;b.style.top=(10>a?10:a)+f.pageTop()+"px";b.style.left=f.pageWidth()/2-h/2+"px"},pageTop:function(){return document.body.scrollTop||document.documentElement.scrollTop},pageWidth:function(){return self.innerWidth||document.documentElement.clientWidth||document.body.clientWidth},pageHeight:function(){return self.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},pageTheight:function(){var a=document,b=a.body,a=a.documentElement;
return Math.max(Math.max(b.scrollHeight,a.scrollHeight),Math.max(b.clientHeight,a.clientHeight))},pageTwidth:function(){var a=document,b=a.body,a=a.documentElement;return Math.max(Math.max(b.scrollWidth,a.scrollWidth),Math.max(b.clientWidth,a.clientWidth))}}}();elts=k("ap-payment-button");for(var v in elts)elts[v].onclick=function(){for(var d=this.className.split(" "),b=0;b<d.length;b++)if(d[b].match("size-[0-9]+-[0-9]+"))var h=d[b].split("-"),i=h[1],h=h[2];f.show(this.href,i,h);return!1}},alreadyrunflag=
0;document.addEventListener&&document.addEventListener("DOMContentLoaded",function(){alreadyrunflag=1;allopassButtons()},!1);if(document.all&&!window.opera){var proto="src='javascript:void(0)'";"https:"==location.protocol&&(proto="src=//:");document.write("<script id=__ie_onload defer "+proto+"><\/script>");var contentloadtag=document.getElementById("__ie_onload");contentloadtag.onreadystatechange=function(){"complete"==this.readyState&&(alreadyrunflag=1,allopassButtons())}}if(/Safari/i.test(navigator.userAgent))var _timer=
setInterval(function(){/loaded|complete/.test(document.readyState)&&(clearInterval(_timer),alreadyrunflag=1,allopassButtons())},10);window.onload=function(){setTimeout("if (!alreadyrunflag) allopassButtons()",0)}};


```
Hướng dẫn: Cách dùng rất đơn giản, bạn chỉ cần thêm vào liên kết thuộc tính class như sau

```

class="ap-payment-button size-1000-700"
```

trong đó size-1000-700 là kích thước của popup bật ra, với thông số tương ứng là chiều rộng và chiều cao, bạn có thể thay đổi các thông số này.
Bạn có thể dùng code này để mở các liên kết như trang web, hình ảnh hay video youtube...

Code ví dụ:

```

<a class="ap-payment-button size-700-700" href="http://www.fmvi.org/">Click here

Unknown end tag for &lt;/a&gt;



```

Phát triển: Sử dụng với liên kết video youtube

```

$(function () {
$("a[href^='http://www.youtube.com']").each(function () {
$(this).replaceWith('<a href="' + this.href.replace(new RegExp("watch\\?v=", "i"), 'v/') + '" class="ap-payment-button size-640-360">' + $(this).text() + '

Unknown end tag for &lt;/a&gt;

');
});
});

```

Demo: http://www.fmvi.org/h55-popup-allopass