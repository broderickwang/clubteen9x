{\rtf1\ansi\ansicpg1252\deff0\deflang1033{\fonttbl{\f0\fswiss\fcharset0 Arial;}}
{\*\generator Msftedit 5.41.15.1507;}\viewkind4\uc1\pard\f0\fs20 function Rankicon()\{\par
x = document.getElementsByTagName('span')\par
for(y=0;y<x.length;y++)\{\par
var oldHTML = x[y].innerHTML;\par
if  ((x[y].style.color=="rgb(250, 0, 0)")||(x[y].style.color=="#fa0000")) \{icon = "<img src='http://i65.servimg.com/u/f65/15/75/59/85/admin110.gif'>";x[y].innerHTML = icon + oldHTML;\}\par
if  ((x[y].style.color=="rgb(255, 102, 0)")||(x[i].style.color=="#ff6600")) \{newHTML = "<img src=\\"http://s1036.photobucket.com/albums/a449/a1tinhgia3/smod.gif'>";x[y].innerHTML = icon + oldHTML;\}\par
if  ((x[y].style.color=="rgb(0, 191, 0)")||(x[i].style.color=="#00bf00")) \{newHTML = "<img src=\\"http://s1036.photobucket.com/albums/a449/a1tinhgia3/mod.gif'>";x[y].innerHTML = icon + oldHTML;\}\par
if  ((x[y].style.color=="rgb(191, 0, 255)")||(x[i].style.color=="#bf00ff")) \{newHTML = "<img src=\\"http://s1036.photobucket.com/albums/a449/a1tinhgia3/vip.gif'>";x[y].innerHTML = icon + oldHTML;\}\par
if  ((x[y].style.color=="rgb(0, 4, 255)")||(x[i].style.color=="#0004ff")) \{newHTML = "<img src=\\"http://s1036.photobucket.com/albums/a449/a1tinhgia3/member.gif'>";x[y].innerHTML = icon + oldHTML;\}\par
\}\par
\}\par
Rankicon();\par
}
 