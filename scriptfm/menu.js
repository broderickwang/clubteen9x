{\rtf1\ansi\ansicpg1252\deff0\deflang1033{\fonttbl{\f0\fswiss\fcharset0 Arial;}}
{\*\generator Msftedit 5.41.15.1507;}\viewkind4\uc1\pard\f0\fs20 <!--\par
\par
/*\par
Configure menu styles below\par
NOTE: To edit the link colors, go to the STYLE tags and edit the ssm2Items colors\par
*/\par
YOffset=80; // no quotes!!\par
XOffset=0;\par
staticYOffset=30; // no quotes!!\par
slideSpeed=20 // no quotes!!\par
waitTime=100; // no quotes!! this sets the time the menu stays out for after the mouse goes off it.\par
menuBGColor="black";\par
menuIsStatic="yes"; //this sets whether menu should stay static on the screen\par
menuWidth=150; // Must be a multiple of 10! no quotes!!\par
menuCols=2;\par
hdrFontFamily="verdana";\par
hdrFontSize="2";\par
hdrFontColor="white";\par
hdrBGColor="#000000";\par
hdrAlign="left";\par
hdrVAlign="center";\par
hdrHeight="15";\par
linkFontFamily="Verdana";\par
linkFontSize="2";\par
linkBGColor="white";\par
linkOverBGColor="#FFFF99";\par
linkTarget="_top";\par
linkAlign="Left";\par
barBGColor="#444444";\par
barFontFamily="Verdana";\par
barFontSize="2";\par
barFontColor="white";\par
barVAlign="center";\par
barWidth=15; // no quotes!!\par
barText=" Music Box"; // <IMG> tag supported. Put exact html for an image to show.\par
\par
///////////////////////////\par
\par
// ssmItems[...]=[name, link, target, colspan, endrow?] - leave 'link' and 'target' blank to make a header\par
ssmItems[0]=['<embed src="http://img1.nhaccuatui.com/Flash/NCTplayer10.swf" allowfullscreen="true" allowscriptaccess="always" flashvars="&file=http://www.nhaccuatui.com/GetMusic.ashx?list=00280002006c003b000e000d001a0027001d00220019003f&displayheight=0&backcolor=0x20a3fe&frontcolor=0xFFFFFF&lightcolor=0xFFFFFF&showdigits=true&showeq=true&showfsbutton=true&autostart=false&shuffle=true&repeat=true;volume=100;width=150&height=200" width="150" height="200"/><br> '] //create header\par
buildMenu();\par
buildMenu();\par
\par
//-->\par
}
 