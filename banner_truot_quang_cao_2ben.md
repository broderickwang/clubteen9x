+ Banner ban đầu sát với lề trên của trình duyệt.
+ Tốc độ trượt mượt hơn.
+ Khi kích thước trình duyệt có chiều ngang nhỏ hơn 1024px, banner tự động biến mất để tránh che khuất các thành phần khác của giao diện.
+ Khi kích thước trình duyệt có chiều ngang lớn hơn 1024px, banner sẽ tự động canh lề & giữ khoảng cách với mép 2 bên trình duyệt để tránh gây ra khoảng trống vô nghĩa.

```



<Script type="text/javascript">
/* Hoangtuchotkhoc Code1k.com */
function ShowRightAdDiv(){
if (document.body.clientWidth > 900){
document.write("<table width='110' border=0 cellspacing=0 cellpadding=0><tr><td><a href='http://code1k.com' target='_blank' title=''><img border='0' src='http://c.upanh.com/upload/7/290/CS0.11501477_1_1.gif' width='110' style='margin-bottom:4px'>

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;

");
}
}
function ShowLeftAdDiv(){
if (document.body.clientWidth > 900){
document.write("<table width='110' border=0 cellspacing=0 cellpadding=0><tr><td><a href='http://code1k.com' target='_blank' title=''><img border='0' src='http://c.upanh.com/upload/7/290/CS0.11501835_29781_1.gif' width='110' style='margin-bottom:4px'>

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;

");
}
}


Unknown end tag for &lt;/Script&gt;


<DIV id="divAdLeft" style="DISPLAY: none; POSITION: absolute; TOP: 10px"><script language="JavaScript">ShowRightAdDiv();

Unknown end tag for &lt;/script&gt;



Unknown end tag for &lt;/DIV&gt;


<DIV id="divAdRight" style="DISPLAY: none; POSITION: absolute; TOP: 10px"><script language="JavaScript">ShowLeftAdDiv();

Unknown end tag for &lt;/script&gt;



Unknown end tag for &lt;/DIV&gt;


<SCRIPT language=JavaScript>
window.onresize=ShowAdDiv;
function FloatTopDiv()
{

var ns = (navigator.appName.indexOf("Netscape") != -1);

if(!ns)
{
startLX = ((document.body.clientWidth -1215)/2) + 105 , startLY = 0;

startRX = ((document.body.clientWidth)/2) + 391 , startRY = 0;
}
else
{
startLX = ((document.body.clientWidth -1215)/2) + 105 , startLY = 0;
startRX = ((document.body.clientWidth -775)/2) + 778 , startRY = 0;
}
var d = document;

function ml(id)
{
var el=d.getElementById?d.getElementById(id):d.all?d.all[id]:d.layers[id];
el.sP=function(x,y){this.style.left=x;this.style.top=y;};
el.x = startRX;
el.y = startRY;
return el;
}
function m2(id)
{
var e2=d.getElementById?d.getElementById(id):d.all?d.all[id]:d.layers[id];
e2.sP=function(x,y){this.style.left=x;this.style.top=y;};
e2.x = startLX;
e2.y = startLY;
return e2;
}
window.stayTopLeft=function()
{
if (document.documentElement && document.documentElement.scrollTop)
var pY = document.documentElement.scrollTop;
else if (document.body)
var pY = document.body.scrollTop;
if (document.body.scrollTop > 10){startLY = 10;startRY = 10;} else {startLY = 10;startRY = 10;};
ftlObj.y += (pY+startRY-ftlObj.y)/16;
ftlObj.sP(ftlObj.x, ftlObj.y);
ftlObj2.y += (pY+startLY-ftlObj2.y)/16;
ftlObj2.sP(ftlObj2.x, ftlObj2.y);
setTimeout("stayTopLeft()", 1);
}
ftlObj = ml("divAdRight");
ftlObj2 = m2("divAdLeft");
stayTopLeft();
}

function ShowAdDiv()
{
var objAdDivRight = document.getElementById("divAdRight");
var objAdDivLeft = document.getElementById("divAdLeft");


if (document.body.clientWidth < 980)
{
objAdDivRight.style.display = "none";
objAdDivLeft.style.display = "none";
}
else
{

objAdDivRight.style.display = "block";
objAdDivLeft.style.display = "block";
FloatTopDiv();
}

}
ShowAdDiv();


Unknown end tag for &lt;/SCRIPT&gt;


```


an