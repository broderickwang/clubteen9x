{\rtf1\ansi\ansicpg1252\deff0\deflang1033{\fonttbl{\f0\fswiss\fcharset0 Arial;}}
{\*\generator Msftedit 5.41.15.1507;}\viewkind4\uc1\pard\f0\fs20 function changeImg()\{\par
x = document.getElementsByTagName('span')\par
for(i=0;i<x.length;i++)\{\par
if(window.onload != 'resize_images()')\{\par
if ((x[i].style.color=="rgb(250, 0, 0)")||(x[i].style.color=="#ff0000")) \{newHTML = "<img src=\\"http://s1036.photobucket.com/albums/a449/a1tinhgia3/admin.gif\\">" + "</img>" + x[i].innerHTML\}\par
\par
else if((x[i].style.color=="rgb(255, 102, 0)")||(x[i].style.color=="#ff6600")) \{newHTML = "<img src=\\"http://s1036.photobucket.com/albums/a449/a1tinhgia3/smod.gif\\">" + "</img>" + x[i].innerHTML\}\par
\par
else if((x[i].style.color=="rgb(0, 191, 0)")||(x[i].style.color=="#00bf00")) \{newHTML = "<img src=\\"http://s1036.photobucket.com/albums/a449/a1tinhgia3/mod.gif\\">" + "</img>" + x[i].innerHTML\}\par
\par
else if((x[i].style.color=="rgb(191, 0, 255)")||(x[i].style.color=="#bf00ff")) \{newHTML = "<img src=\\"http://s1036.photobucket.com/albums/a449/a1tinhgia3/vip.gif\\">" + "</img>" + x[i].innerHTML\}\par
\par
else if((x[i].style.color=="rgb(0, 4, 255)")||(x[i].style.color=="#0004ff")) \{newHTML = "<img src=\\"http://s1036.photobucket.com/albums/a449/a1tinhgia3/member.gif\\">" + "</img>" + x[i].innerHTML\}\par
\par
else \{newHTML= x[i].innerHTML\}\}\par
x[i].innerHTML = newHTML;\par
\}\par
\}\par
window.onload = changeImg();\par
}
 