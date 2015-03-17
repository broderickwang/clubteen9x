Thay đổi banner, giới thiệu chương trình, thông báo, quảng cáo...nói chung là tùy các bạn ừng dụng theo óc sáng tạo của các bạn

Mình dùng để giới thiệu các album ảnh do mình nháy. Các bạn sẽ thấy những tấm ảnh nhỏ cùng với tên album sẽ lần lược xuất hiện và dừng lại trong một khoảng thời gian do mình định trước. Khi bạn clik vào thì mở ra cho bạn xem album đó.

Xem thử trước khi mình giới thiệu tiếp: http://hunghsmn.info.vn (Ở ngay góc của lời chào mừng đó)

Các bạn có thể thay tấm ảnh nhỏ bàng những lời giới thiệu cho một chương trình gì đó và khi người ta click vào thì mở ra chương trình đó.

Như code sau đây thay đổi kích thước một chút thì có thể lần lược thay đổi ảnh banner, và khi click vào thì có thể mở ra một trang nào đó.
Xem thử:
http://hsmn.forumvi.com/h95-page

```

<table border="0" width="1000" align="left">
<tr><td width="1000" height="200" style="background:url#FFFFFF;" align="center">
<script language="JavaScript1.2">
var scroller_width='1000px'
var scroller_height='200px'
var bgcolor='#ffffff'
var pause=5000 // Thời gian dừng (1000=1 seconds)

var scrollercontent=new Array()
//Define scroller contents. Extend or contract array as needed


scrollercontent[0]='<a href="http://hunghsmn.info.vn/" target="_blank" title="Mở trang web hunghsmn"><img src="http://i46.servimg.com/u/f46/14/26/60/46/311.jpg" width="1000">

Unknown end tag for &lt;/a&gt;

'

scrollercontent[1]='<a href="http://www.trekhuyettat.org/forum" target="_blank" title="Mở diễn đàn tình thương"><img src="http://i46.servimg.com/u/f46/14/26/60/46/212.jpg" width="1000">

Unknown end tag for &lt;/a&gt;

'

scrollercontent[2]='<a href="http://vavakhanhhoa.ucoz.org" target="_blank"><img src="http://i46.servimg.com/u/f46/14/26/60/46/411.jpg" width="1000" title="Mở trang web của Hội nạn nhân chất độc da cam">

Unknown end tag for &lt;/a&gt;

'

scrollercontent[3]='<a href="http://diendan.chinhphuc.info" target="_blank" title="Mở diễn đàn chinh phục"><img src="http://i46.servimg.com/u/f46/14/26/60/46/110.jpg" width="1000">

Unknown end tag for &lt;/a&gt;

'


////NO need to edit beyond here/////////////

var ie4=document.all
var dom=document.getElementById&&navigator.userAgent.indexOf("Opera")==-1

if (ie4||dom)
document.write('<div style="position:relative;width:'+scroller_width+';height:'+scroller_height+';overflow:hidden"><div id="canvas0" style="position:absolute;background-color:'+bgcolor+';width:'+scroller_width+';height:'+scroller_height+';top:'+scroller_height+';filter:alpha(opacity=20);-moz-opacity:0.2;">

Unknown end tag for &lt;/div&gt;

<div id="canvas1" style="position:absolute;background-color:'+bgcolor+';width:'+scroller_width+';height:'+scroller_height+';top:'+scroller_height+';filter:alpha(opacity=20);-moz-opacity:0.2;">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

')
else if (document.layers){
document.write('<ilayer id=tickernsmain visibility=hide width='+scroller_width+' height='+scroller_height+' bgColor='+bgcolor+'><layer id=tickernssub width='+scroller_width+' height='+scroller_height+' left=0 top=0>'+scrollercontent[0]+'</layer></ilayer>')
}

var curpos=scroller_height*(1)
var degree=10
var curcanvas="canvas0"
var curindex=0
var nextindex=1

function moveslide(){
if (curpos>0){
curpos=Math.max(curpos-degree,0)
tempobj.style.top=curpos+"px"
}
else{
clearInterval(dropslide)
if (crossobj.filters)
crossobj.filters.alpha.opacity=100
else if (crossobj.style.MozOpacity)
crossobj.style.MozOpacity=1
nextcanvas=(curcanvas=="canvas0")? "canvas0" : "canvas1"
tempobj=ie4? eval("document.all."+nextcanvas) : document.getElementById(nextcanvas)
tempobj.innerHTML=scrollercontent[curindex]
nextindex=(nextindex<scrollercontent.length-1)? nextindex+1 : 0
setTimeout("rotateslide()",pause)
}
}

function rotateslide(){
if (ie4||dom){
resetit(curcanvas)
crossobj=tempobj=ie4? eval("document.all."+curcanvas) : document.getElementById(curcanvas)
crossobj.style.zIndex++
if (crossobj.filters)
document.all.canvas0.filters.alpha.opacity=document.all.canvas1.filters.alpha.opacity=20
else if (crossobj.style.MozOpacity)
document.getElementById("canvas0").style.MozOpacity=document.getElementById("canvas1").style.MozOpacity=0.2
var temp='setInterval("moveslide()",50)'
dropslide=eval(temp)
curcanvas=(curcanvas=="canvas0")? "canvas1" : "canvas0"
}
else if (document.layers){
crossobj.document.write(scrollercontent[curindex])
crossobj.document.close()
}
curindex=(curindex<scrollercontent.length-1)? curindex+1 : 0
}

function resetit(what){
curpos=parseInt(scroller_height)*(1)
var crossobj=ie4? eval("document.all."+what) : document.getElementById(what)
crossobj.style.top=curpos+"px"
}

function startit(){
crossobj=ie4? eval("document.all."+curcanvas) : dom? document.getElementById(curcanvas) : document.tickernsmain.document.tickernssub
if (ie4||dom){
crossobj.innerHTML=scrollercontent[curindex]
rotateslide()
}
else{
document.tickernsmain.visibility='show'
curindex++
setInterval("rotateslide()",pause)
}
}

if (ie4||dom||document.layers)
window.onload=startit



Unknown end tag for &lt;/script&gt;




Unknown end tag for &lt;/td&gt;

 

Unknown end tag for &lt;/tr&gt;

 

Unknown end tag for &lt;/table&gt;



```

Nguồn: blog dunghennessy