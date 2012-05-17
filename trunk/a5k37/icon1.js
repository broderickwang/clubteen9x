var timeout = 10, offsetfromcursorX = 12, offsetfromcursorY = 10, offsetdivfrompointerX = 10, offsetdivfrompointerY = 15;nt_help='Tạo ghi chú nổi bật trong b� i viết';c3o_help='Một số bbcode khác ...';c3bb_help='Mở trang hướng dẫn bbcode'; 
selectId[25]='notes';document.write('<div id="c3tooltip"></div><img id="c3pointer" src="http://www.c3zone.net/users/2611/10/63/87/album/pointe10.gif">');
var ie = document.all;
var ns6 = document.getElementById && ! document.all;
var enabletip = false;
var  tipobj = document.getElementById("c3tooltip");
var pointerobj = document.getElementById("c3pointer");
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
function backl(str)
{
  return "..."+str.substr(29);
}
var ss = {
  fixAllLinks: function() {
    var allLinks = document.getElementsByTagName('a');
    for (var i=0;i<allLinks.length;i++) { 
      var lnk = allLinks[i]; 
      if ((lnk.href && lnk.href.indexOf('#') != -1) && 
          ( (lnk.pathname == location.pathname) || 
	    ('/'+lnk.pathname == location.pathname) ) && 
          (lnk.search == location.search)) { 
        ss.addEvent(lnk,'click',ss.smoothScroll); 
      } 
    } 
  }, 
  smoothScroll: function(e) { 
    if (window.event) { 
      target = window.event.srcElement; 
    } else if (e) { 
      target = e.target; 
    } else return; 
    if (target.nodeName.toLowerCase() != 'a') { 
      target = target.parentNode; 
    } 
    if (target.nodeName.toLowerCase() != 'a') return; 
    anchor = target.hash.substr(1); 
    var allLinks = document.getElementsByTagName('a'); 
    var destinationLink = null; 
    for (var i=0;i<allLinks.length;i++) { 
      var lnk = allLinks[i]; 
      if (lnk.name && (lnk.name == anchor)) { 
        destinationLink = lnk; 
        break; 
      } 
    } 
    if (!destinationLink) destinationLink = document.getElementById(anchor); 
    if (!destinationLink) return true; 
    var destx = destinationLink.offsetLeft; 
    var desty = destinationLink.offsetTop; 
    var thisNode = destinationLink; 
    while (thisNode.offsetParent && 
          (thisNode.offsetParent != document.body)) { 
      thisNode = thisNode.offsetParent; 
      destx += thisNode.offsetLeft; 
      desty += thisNode.offsetTop; 
    }  
    clearInterval(ss.INTERVAL); 
    cypos = ss.getCurrentYPos(); 
    ss_stepsize = parseInt((desty-cypos)/ss.STEPS); 
    ss.INTERVAL =
setInterval('ss.scrollWindow('+ss_stepsize+','+desty+',"'+anchor+'")',10); 
    if (window.event) { 
      window.event.cancelBubble = true; 
      window.event.returnValue = false; 
    } 
    if (e && e.preventDefault && e.stopPropagation) { 
      e.preventDefault(); 
      e.stopPropagation(); 
    } 
  }, 
  scrollWindow: function(scramount,dest,anchor) { 
    wascypos = ss.getCurrentYPos(); 
    isAbove = (wascypos < dest); 
    window.scrollTo(0,wascypos + scramount); 
    iscypos = ss.getCurrentYPos(); 
    isAboveNow = (iscypos < dest); 
    if ((isAbove != isAboveNow) || (wascypos == iscypos)) { 
      window.scrollTo(0,dest); 
      clearInterval(ss.INTERVAL); 
      location.hash = anchor; 
    } 
  }, 
  getCurrentYPos: function() { 
    if (document.body && document.body.scrollTop) 
      return document.body.scrollTop; 
    if (document.documentElement && document.documentElement.scrollTop) 
      return document.documentElement.scrollTop; 
    if (window.pageYOffset) 
      return window.pageYOffset; 
    return 0; 
  }, 
  addEvent: function(elm, evType, fn, useCapture) { 
    if (elm.addEventListener){ 
      elm.addEventListener(evType, fn, useCapture); 
      return true; 
    } else if (elm.attachEvent){ 
      var r = elm.attachEvent("on"+evType, fn); 
      return r; 
    } else { 
      alert("c3zone"); 
    } 
  } 
} 