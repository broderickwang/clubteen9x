function my_getcookie(c_name)
{
var i,x,y,ARRcookies=document.cookie.split(";");
for (i=0;i<ARRcookies.length;i++)
  {
  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
  x=x.replace(/^\s+|\s+&#36;/g,"");
  if (x==c_name)
    {
    return unescape(y);
    }
  }
}

function setcookie(c_name,value,exdays)
{
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
document.cookie=c_name + "=" + c_value;
}
var offsetfromcursorX = 12;
var offsetfromcursorY = 10;
var offsetdivfrompointerX = 10;
var offsetdivfrompointerY = 13;
document.write('<div id="dhtmltooltip"></div>');
document.write('<img id="dhtmlpointer" src="http://i74.servimg.com/u/f74/14/44/65/97/toolti10.gif">');
var ie = document.all;
var ns6 = document.getElementById && ! document.all;
var enabletip = false;
var  tipobj = document.getElementById("dhtmltooltip");
var pointerobj = document.getElementById("dhtmlpointer");
function ietruebody() {
	return (document.compatMode && document.compatMode != "BackCompat") ? document.documentElement : document.body;
}
String.prototype.trim = function () {
    return this.replace(/^\s*/, "").replace(/\s*&#36;/, "");
}
function showtip(thetext, thewidth, thecolor) {
	if (ns6 || ie) {
		if (typeof thewidth != "undefined")
			tipobj.style.width = thewidth + "px";
		if (typeof thecolor != "undefined" && thecolor != "")
			tipobj.style.backgroundColor = thecolor;
		thetext = thetext.trim();
		var arr = thetext.split(" ");
		for(i=0;i<arr.length;i++)
			if(arr[i].length>=40)
				thetext=thetext.replace(arr[i],arr[i].substr(0,40)+"...");
		tipobj.innerHTML = thetext;		
		enabletip = true;
		return false;
	}
}
function positiontip(e) {
	if (enabletip) {		
		var nondefaultpos = false;
		var curX = (ns6) ? e.pageX : event.clientX + ietruebody().scrollLeft;
		var curY = (ns6) ? e.pageY : event.clientY + ietruebody().scrollTop;
		var winwidth = ie && ! window.opera ? ietruebody().clientWidth : window.innerWidth - 20;
		var winheight = ie && ! window.opera ? ietruebody().clientHeight : window.innerHeight - 20;
		var rightedge = ie && ! window.opera ? winwidth - event.clientX - offsetfromcursorX : winwidth - e.clientX - offsetfromcursorX;
		var bottomedge = ie && ! window.opera ? winheight - event.clientY - offsetfromcursorY : winheight - e.clientY - offsetfromcursorY;
		var leftedge = (offsetfromcursorX < 0) ? offsetfromcursorX * (- 1) : - 1000;
		if (rightedge < tipobj.offsetWidth) {
			tipobj.style.left = curX - tipobj.offsetWidth + "px";
			nondefaultpos = true;
		}
		else if (curX < leftedge)
			tipobj.style.left = "5px";
		else {
			tipobj.style.left = curX + offsetfromcursorX - offsetdivfrompointerX + "px";
			pointerobj.style.left = curX + offsetfromcursorX + "px";
		}
		if (bottomedge < tipobj.offsetHeight) {
			tipobj.style.top = curY - tipobj.offsetHeight - offsetfromcursorY + "px";
			nondefaultpos = true;
		}
		else {
			tipobj.style.top = curY + offsetfromcursorY + offsetdivfrompointerY + "px";
			pointerobj.style.top = curY + offsetfromcursorY + "px";
		}
		tipobj.style.visibility = "visible";
 
		if (! nondefaultpos)
			pointerobj.style.visibility = "visible";
		else
			pointerobj.style.visibility = "hidden";
	}
}
function hidetip() {
	if (ns6 || ie) {
		enabletip = false;
		tipobj.style.visibility = "hidden";
		pointerobj.style.visibility = "hidden";
		tipobj.style.left = "-1000px";
		tipobj.style.backgroundColor = '';
		tipobj.style.width = '';
	}
}
document.onmousemove = positiontip;
