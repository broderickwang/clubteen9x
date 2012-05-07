var persistclose=0 //set to 0 or 1. 1 means once the bar is manually closed, it will remain closed for browser session
var startX = 250 //set x offset of bar in pixels
var startY = 3 //set y offset of bar in pixels
var verticalpos="fromtop" //enter "fromtop" or "frombottom"

function iecompattest(){
return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}

function get_cookie(Name) {
var search = Name + "="
var returnvalue = "";
if (document.cookie.length > 0) {
offset = document.cookie.indexOf(search)
if (offset != -1) {
offset += search.length
end = document.cookie.indexOf(";", offset);
if (end == -1) end = document.cookie.length;
returnvalue=unescape(document.cookie.substring(offset, end))
}
}
return returnvalue;
}

function closebar(){
if (persistclose)
document.cookie="remainclosed=1"
document.getElementById("topbar").style.visibility="hidden"
}

function staticbar(){
	barheight=document.getElementById("topbar").offsetHeight
	var ns = (navigator.appName.indexOf("Netscape") != -1) || window.opera;
	var d = document;
	function ml(id){
		var el=d.getElementById(id);
		if (!persistclose || persistclose && get_cookie("remainclosed")=="")
		el.style.visibility="visible"
		if(d.layers)el.style=el;
		el.sP=function(x,y){this.style.left=x+"px";this.style.top=y+"px";};
		el.x = startX;
		if (verticalpos=="fromtop")
		el.y = startY;
		else{
		el.y = ns ? pageYOffset + innerHeight : iecompattest().scrollTop + iecompattest().clientHeight;
		el.y -= startY;
		}
		return el;
	}
	window.stayTopLeft=function(){
		if (verticalpos=="fromtop"){
		var pY = ns ? pageYOffset : iecompattest().scrollTop;
		ftlObj.y += (pY + startY - ftlObj.y)/8;
		}
		else{
		var pY = ns ? pageYOffset + innerHeight - barheight: iecompattest().scrollTop + iecompattest().clientHeight - barheight;
		ftlObj.y += (pY - startY - ftlObj.y)/8;
		}
		ftlObj.sP(ftlObj.x, ftlObj.y);
		setTimeout("stayTopLeft()", 10);
	}
	ftlObj = ml("topbar");
	stayTopLeft();
}

if (window.addEventListener)
window.addEventListener("load", staticbar, false)
else if (window.attachEvent)
window.attachEvent("onload", staticbar)
else if (document.getElementById)
window.onload=staticbar


//Gradual Elements Fader- By Dynamic Drive at http://www.dynamicdrive.com
//Last updated: Nov 8th, 07'

var gradualFader={}

gradualFader.baseopacity=0.6 
gradualFader.increment=0.2 

document.write('<style type="text/css">\n') //write out CSS to enable opacity on "gradualfader" class
document.write('.gradualfader{filter:progid:DXImageTransform.Microsoft.alpha(opacity='+gradualFader.baseopacity*100+'); -moz-opacity:'+gradualFader.baseopacity+'; opacity:'+gradualFader.baseopacity+';}\n')
document.write('</style>')

gradualFader.setopacity=function(obj, value){ //Sets the opacity of targetobject based on the passed in value setting (0 to 1 and in between)
	var targetobject=obj
	if (targetobject && targetobject.filters && targetobject.filters[0]){ //IE syntax
		if (typeof targetobject.filters[0].opacity=="number") //IE6
			targetobject.filters[0].opacity=value*100
		else //IE 5.5
			targetobject.style.filter="alpha(opacity="+value*100+")"
		}
	else if (targetobject && typeof targetobject.style.MozOpacity!="undefined") //Old Mozilla syntax
		targetobject.style.MozOpacity=value
	else if (targetobject && typeof targetobject.style.opacity!="undefined") //Standard opacity syntax
		targetobject.style.opacity=value
	targetobject.currentopacity=value
}

gradualFader.fadeupdown=function(obj, direction){
	var targetobject=obj
	var fadeamount=(direction=="fadeup")? this.increment : -this.increment
	if (targetobject && (direction=="fadeup" && targetobject.currentopacity<1 || direction=="fadedown" && targetobject.currentopacity>this.baseopacity)){
		this.setopacity(obj, targetobject.currentopacity+fadeamount)
		window["opacityfader"+obj._fadeorder]=setTimeout(function(){gradualFader.fadeupdown(obj, direction)}, 50)
	}
}

gradualFader.clearTimer=function(obj){
if (typeof window["opacityfader"+obj._fadeorder]!="undefined")
	clearTimeout(window["opacityfader"+obj._fadeorder])
}

gradualFader.isContained=function(m, e){
	var e=window.event || e
	var c=e.relatedTarget || ((e.type=="mouseover")? e.fromElement : e.toElement)
	while (c && c!=m)try {c=c.parentNode} catch(e){c=m}
	if (c==m)
		return true
	else
		return false
}

gradualFader.fadeinterface=function(obj, e, direction){
	if (!this.isContained(obj, e)){
		gradualFader.clearTimer(obj)
		gradualFader.fadeupdown(obj, direction)
	}
}

gradualFader.collectElementbyClass=function(classname){ //Returns an array containing DIVs with specified classname
	var classnameRE=new RegExp("(^|\\s+)"+classname+"($|\\s+)", "i") //regular expression to screen for classname within element
	var pieces=[]
	var alltags=document.all? document.all : document.getElementsByTagName("*")
	for (var i=0; i<alltags.length; i++){
		if (typeof alltags[i].className=="string" && alltags[i].className.search(classnameRE)!=-1)
			pieces[pieces.length]=alltags[i]
	}
	return pieces
}

gradualFader.init=function(){
	var targetobjects=this.collectElementbyClass("gradualfader")
	for (var i=0; i<targetobjects.length; i++){
		targetobjects[i]._fadeorder=i
		this.setopacity(targetobjects[i], this.baseopacity)
		targetobjects[i].onmouseover=function(e){gradualFader.fadeinterface(this, e, "fadeup")}
		targetobjects[i].onmouseout=function(e){gradualFader.fadeinterface(this, e, "fadedown")}
	}
}
	