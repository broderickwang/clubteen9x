document.writeln(''); var glyphs=new Array(); document.write('');
document.writeln(''); glyphs[glyphs.length]="http://ca8.upanh.com/15.583.19866466.RZN0/matran1.gif"; document.write('');
document.writeln(''); glyphs[glyphs.length]="http://ca5.upanh.com/15.583.19866467.anB0/matran2.gif"; document.write('');
document.writeln(''); glyphs[glyphs.length]="http://ca7.upanh.com/15.583.19866469.U10/matran3.gif"; document.write('');
// MATRIX BACKGROUND ANIMATION
// By: BRIAN GOSSELIN OF http://scriptasylum.com
// V1.0
// Permission granted to use this script in your webpage provided the
// credit remain intact.

//GLYPH IMAGE FILE NAMES.
var glyphs_b=glyphs;

var glyphCount=100;
var scrollSpeed=60;
var glyphD=15;
var disableColors=false;
var matrbr = 100;
var matrno = 20;

//************ DO NOT EDIT BEYOND HERE *************\\

var w3c=(document.getElementById)?true:false;
var ns4=(document.layers)?true:false;
var ie4=(document.all && !w3c)?true:false;
var ie5=(document.all && w3c)?true:false;
var ns6=(w3c && navigator.appName.indexOf("Netscape")>=0)?true:false;
var ie = (navigator.appVersion.indexOf("MSIE")>=0)?true:false;
var px = (window.opera)?'':'px';
var ids=new Array();
var wWidth, wHeight, colHeight;
var t='';
var counter=0;
var gx=new Array();
var ga=new Array();

for(i=0;i<glyphCount;i++){
gx[i]=Math.floor(Math.random()*glyphs.length);
t+=(ns4)?'<layer name="glyph'+i+'" top="-'+glyphD+'" left="0" width="'+glyphD+'" height="'+glyphD+'" z-index="1">':'<div id="glyph'+i+'" style="position:absolute; top:-'+glyphD+'px; left:0px; width:'+glyphD+'px; height:'+glyphD+'px; z-index:1">';
t+='<img src="'+glyphs[gx[i]]+'" width='+glyphD+' height='+glyphD+' name="g'+i+'" style="filter:alpha(opacity='+matrno+'); -moz-opacity:'+(matrno/100)+'">';
t+=(ns4)?'</layer>':'</div>';
}
document.write(t);

for(i=0;i<glyphs.length;i++){
ga[i]=new Image();
ga[i].src=glyphs_b[i];
}

function matrixInit(){
getWindowDims();
for(i=0;i<glyphCount;i++){
ids[i]=(ns4)?document.layers['glyph'+i]:(ie4)?document.all['glyph'+i]:document.getElementById('glyph'+i);
ids[i].gx=gx[i];
}
gx='';
//setInterval('scrollGlyphs()',10*scrollSpeed);
scrollGlyphs();
}

function brighten(idnum,b){
if (ie) document.images['g'+idnum].filters.alpha.opacity=(b)?matrbr:matrno; else document.images['g'+idnum].style.MozOpacity=((b)?matrbr:matrno)/100;
}

function moveID(idnum,x,y){
var id=ids[idnum];
if(ns4)id.moveTo(x,y);
else{
id.style.left=x+px;
id.style.top=y+px;
}
if(!disableColors){
brighten(idnum,true);
setTimeout('brighten('+idnum+',false)',scrollSpeed*1.3);
}}

function getWindowDims(){
wWidth=((ie4||ie5)&&!window.opera)? document.body.clientWidth:window.innerWidth;
wHeight=((ie4||ie5)&&!window.opera)? document.body.clientHeight:window.innerHeight;
colHeight=Math.min(Math.floor(wHeight/1.5/glyphD)-1,25);
}

function scrollGlyphs(){
var sx=((ie4||ie5)&&!window.opera)? document.body.scrollLeft:window.pageXOffset;
var sy=((ie4||ie5)&&!window.opera)? document.body.scrollTop:window.pageYOffset;
var pixx=Math.floor(Math.random()*wWidth/(glyphD+1))*glyphD+sx;
var pixy=Math.floor(Math.random()*(wHeight-(colHeight*glyphD)))+sy;
for(i=0; i<colHeight; i++){
setTimeout('moveID('+counter+','+pixx+','+(pixy+glyphD*i)+')', scrollSpeed*i);
counter=((counter+colHeight)>glyphCount)?0:counter+1;
}
setTimeout('scrollGlyphs()', scrollSpeed*colHeight/2);
}

window.onload=matrixInit;
window.onresize=getWindowDims;



//DO NOT MODIFY
/*
<APPLETINFO>
appletname=jsmatriximage
applettype=JAVASCRIPT
created=1251363998812
appletfilename=matran.js
</APPLETINFO>
<JAVASCRIPT>
gcount=100
sspeed=60
imdims=15
matrbr=100
matrno=20
</JAVASCRIPT>
<HTMLGENERATOR>
image=-
image_GS=2;images
mystarttag=-
mystarttag_GS=1;-
images_GS=4;-
images0=matran1.gif
images1=matran2.gif
images2=matran3.gif
images3=matran4.gif
images4=matran5.gif
images5=matran6.gif
images6=matran7.gif
images7=matran8.gif
</HTMLGENERATOR>
*/