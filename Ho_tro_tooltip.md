![http://megapic.vn/images/78342547061260150920.gif](http://megapic.vn/images/78342547061260150920.gif)
```
        <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<HTML><HEAD>
<SCRIPT language=javascript type=text/javascript>
/*
Code Rip By BáTu?cTi?uThu | Y!M: RapZone.Info
Mail: Admin@RapZone.Info
*/

/* IMPORTANT: Put script after tooltip div or
put tooltip div just before */

var dom = (document.getElementById) ? true : false;
var ns5 = ((navigator.userAgent.indexOf("Gecko")>-1) && dom) ? true: false;
var ie5 = ((navigator.userAgent.indexOf("MSIE")>-1) && dom) ? true : false;
var ns4 = (document.layers && !dom) ? true : false;
var ie4 = (document.all && !dom) ? true : false;
var nodyn = (!ns5 && !ns4 && !ie4 && !ie5) ? true : false;

// resize fix for ns4
var origWidth, origHeight;
if (ns4) {
origWidth = window.innerWidth; origHeight = window.innerHeight;
window.onresize = function() { if (window.innerWidth != origWidth || window.innerHeight != origHeight) history.go(0); }
}

// avoid error of passing event object in older browsers
if (nodyn) { event = "nope" }

///////////////////////  CUSTOMIZE HERE   ////////////////////
// settings for tooltip
// Do you want tip to move when mouse moves over link?
var tipFollowMouse= true;
// Be sure to set tipWidth wide enough for widest image
var tipWidth= 160;
var offX= 20;   // how far from mouse to show tip
var offY= 12;
var tipFontFamily= "Verdana, arial, helvetica, sans-serif";
var tipFontSize= "8pt";
// set default text color and background color for tooltip here
// individual tooltips can have their own (set in messages arrays)
// but don't have to
var tipFontColor= "#000000";
var tipBgColor= "#DDECFF";
var tipBorderColor= "#000080";
var tipBorderWidth= 3;
var tipBorderStyle= "ridge";
var tipPadding= 4;

// tooltip content goes here (image, description, optional bgColor, optional textcolor)
var messages = new Array();
// multi-dimensional arrays containing:
// image and text for tooltip
// optional: bgColor and color to be sent to tooltip
messages[0] = new Array('','Chào M&#7915;ng Các P&#7841;n &#272;&#7871;n V&#7899;i RapTeen Di&#7877;n &#272;àn Teen Vi&#7879;t N&#259;ng &#272;&#7897;ng',"#FFFFFF");
messages[1] = new Array('linkanh1','Administrator',"#00FF00");
messages[2] = new Array('test.gif','Test description','black','white');
messages[3] = new Array('linkanh2','Supper Mod Babypigkute',"#FF9900");
messages[4] = new Array('linkanh3','Supper Mod Atit',"#FFFF00");
messages[5] = new Array('linkanh4','Supper Mod KSFame',"#00FFFF");




////////////////////  END OF CUSTOMIZATION AREA  ///////////////////

// preload images that are to appear in tooltip
// from arrays above
if (document.images) {
var theImgs = new Array();
for (var i=0; i<messages.length; i++) {
theImgs[i] = new Image();
theImgs[i].src = messages[i][0];
}
}

// to layout image and text, 2-row table, image centered in top cell
// these go in var tip in doTooltip function
// startStr goes before image, midStr goes between image and text
var startStr = '<table width="' + tipWidth + '"><tr><td align="center" width="100%"><img src="';
var midStr = '" border="0">

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td valign="top">';
var endStr = '

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;

';

////////////////////////////////////////////////////////////
//  initTip   - initialization for tooltip.
//      Global variables for tooltip.
//      Set styles for all but ns4.
//      Set up mousemove capture if tipFollowMouse set true.
////////////////////////////////////////////////////////////
var tooltip, tipcss;
function initTip() {
if (nodyn) return;
tooltip = (ns4)? document.tipDiv.document: (ie4)? document.all['tipDiv']: (ie5||ns5)? document.getElementById('tipDiv'): null;
tipcss = (ns4)? document.tipDiv: tooltip.style;
if (ie4||ie5||ns5) {   // ns4 would lose all this on rewrites
tipcss.width = tipWidth+"px";
tipcss.fontFamily = tipFontFamily;
tipcss.fontSize = tipFontSize;
tipcss.color = tipFontColor;
tipcss.backgroundColor = tipBgColor;
tipcss.borderColor = tipBorderColor;
tipcss.borderWidth = tipBorderWidth+"px";
tipcss.padding = tipPadding+"px";
tipcss.borderStyle = tipBorderStyle;
}
if (tooltip&&tipFollowMouse) {
if (ns4) document.captureEvents(Event.MOUSEMOVE);
document.onmousemove = trackMouse;
}
}

window.onload = initTip;

/////////////////////////////////////////////////
//  doTooltip function
//         Assembles content for tooltip and writes
//         it to tipDiv
/////////////////////////////////////////////////
var t1,t2;   // for setTimeouts
var tipOn = false;   // check if over tooltip link
function doTooltip(evt,num) {
if (!tooltip) return;
if (t1) clearTimeout(t1);   if (t2) clearTimeout(t2);
tipOn = true;
// set colors if included in messages array
if (messages[num][2])   var curBgColor = messages[num][2];
else curBgColor = tipBgColor;
if (messages[num][3])   var curFontColor = messages[num][3];
else curFontColor = tipFontColor;
if (ns4) {
var tip = '<table bgcolor="' + tipBorderColor + '" width="' + tipWidth + '" cellspacing="0" cellpadding="' + tipBorderWidth + '" border="0"><tr><td><table bgcolor="' + curBgColor + '" width="100%" cellspacing="0" cellpadding="' + tipPadding + '" border="0"><tr><td>'+ startStr + messages[num][0] + midStr + '<span style="font-family:' + tipFontFamily + '; font-size:' + tipFontSize + '; color:' + curFontColor + ';">' + messages[num][1] + '

Unknown end tag for &lt;/span&gt;

' + endStr + '

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;

';
tooltip.write(tip);
tooltip.close();
} else if (ie4||ie5||ns5) {
var tip = startStr + messages[num][0] + midStr + '<span style="font-family:' + tipFontFamily + '; font-size:' + tipFontSize + '; color:' + curFontColor + ';">' + messages[num][1] + '

Unknown end tag for &lt;/span&gt;

' + endStr;
tipcss.backgroundColor = curBgColor;
tooltip.innerHTML = tip;
}
if (!tipFollowMouse) positionTip(evt);
else t1=setTimeout("tipcss.visibility='visible'",100);
}

var mouseX, mouseY;
function trackMouse(evt) {
mouseX = (ns4||ns5)? evt.pageX: window.event.clientX + document.body.scrollLeft;
mouseY = (ns4||ns5)? evt.pageY: window.event.clientY + document.body.scrollTop;
if (tipOn) positionTip(evt);
}

/////////////////////////////////////////////////////////////
//  positionTip function
//      If tipFollowMouse set false, so trackMouse function
//      not being used, get position of mouseover event.
//      Calculations use mouseover event position,
//      offset amounts and tooltip width to position
//      tooltip within window.
/////////////////////////////////////////////////////////////
function positionTip(evt) {
if (!tipFollowMouse) {
mouseX = (ns4||ns5)? evt.pageX: window.event.clientX + document.body.scrollLeft;
mouseY = (ns4||ns5)? evt.pageY: window.event.clientY + document.body.scrollTop;
}
// tooltip width and height
var tpWd = (ns4)? tooltip.width: (ie4||ie5)? tooltip.clientWidth: tooltip.offsetWidth;
var tpHt = (ns4)? tooltip.height: (ie4||ie5)? tooltip.clientHeight: tooltip.offsetHeight;
// document area in view (subtract scrollbar width for ns)
var winWd = (ns4||ns5)? window.innerWidth-20+window.pageXOffset: document.body.clientWidth+document.body.scrollLeft;
var winHt = (ns4||ns5)? window.innerHeight-20+window.pageYOffset: document.body.clientHeight+document.body.scrollTop;
// check mouse position against tip and window dimensions
// and position the tooltip
if ((mouseX+offX+tpWd)>winWd)
tipcss.left = (ns4)? mouseX-(tpWd+offX): mouseX-(tpWd+offX)+"px";
else tipcss.left = (ns4)? mouseX+offX: mouseX+offX+"px";
if ((mouseY+offY+tpHt)>winHt)
tipcss.top = (ns4)? winHt-(tpHt+offY): winHt-(tpHt+offY)+"px";
else tipcss.top = (ns4)? mouseY+offY: mouseY+offY+"px";
if (!tipFollowMouse) t1=setTimeout("tipcss.visibility='visible'",100);
}

function hideTip() {
if (!tooltip) return;
t2=setTimeout("tipcss.visibility='hidden'",100);
tipOn = false;
}

//-->


Unknown end tag for &lt;/SCRIPT&gt;



<META http-equiv=Content-Type content="text/html; charset=windows-1252">
<META content="MSHTML 6.00.2800.1106" name=GENERATOR>
<META content=FrontPage.Editor.Document name=ProgId></HEAD>
<BODY>
<P align=left>
<b><font color="#FF0000">H&#7895; Tr&#7907; K&#7929; Thu&#7853;t

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/P&gt;


<P align=left>
<font color="#FF0000"><b>Email: tên@yahoo.com - Tên@Gmail.com

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/P&gt;


<P align=left>
<A
onmouseover=doTooltip(event,1) onmouseout=hideTip()
href="ymsgr:sendIM?yahoo1&m= Admin Help Me"><img src="http://mail.opi.yahoo.com/online?u=yahoo1&amp;m=g&amp;t=1">

Unknown end tag for &lt;/A&gt;


<A
onmouseover=doTooltip(event,3) onmouseout=hideTip()
href="ymsgr:sendIM?yahoo2&m= Supper Mod Help Me"><img src="http://mail.opi.yahoo.com/online?u=yahoo2&amp;m=g&amp;t=1">

Unknown end tag for &lt;/A&gt;


<A
onmouseover=doTooltip(event,4) onmouseout=hideTip()
href="ymsgr:sendIM?yahoo3&m= Supper Mod Help Me"><img src="http://mail.opi.yahoo.com/online?u=yahoo3&amp;m=g&amp;t=1">

Unknown end tag for &lt;/A&gt;


<A
onmouseover=doTooltip(event,5) onmouseout=hideTip()
href="ymsgr:sendIM?yahoo4&m= Supper Mod Help Me"><img src="http://mail.opi.yahoo.com/online?u=yahoo4&amp;m=g&amp;t=1">

Unknown end tag for &lt;/A&gt;




Unknown end tag for &lt;/P&gt;



<DIV id=tipDiv
style="Z-INDEX: 100; VISIBILITY: hidden; POSITION: absolute">

Unknown end tag for &lt;/DIV&gt;



Unknown end tag for &lt;/BODY&gt;



Unknown end tag for &lt;/HTML&gt;

```