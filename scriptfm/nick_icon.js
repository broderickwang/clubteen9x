function Rankicon(){
x = document.getElementsByTagName('span')
for(y=0;y<x.length;y++){
var oldHTML = x[y].innerHTML;
if ((x[y].style.color=="rgb(250, 0, 0)")||(x[y].style.color=="#fa0000")) {icon = "<img src='http://i22.servimg.com/u/f22/14/32/36/49/adming10.gif'>";x[y].innerHTML = icon + oldHTML;}
if ((x[y].style.color=="rgb(0, 145, 255)")||(x[y].style.color=="#0091ff")) {icon = "<img src='http://i22.servimg.com/u/f22/14/32/36/49/smod5010.gif'>";x[y].innerHTML = icon + oldHTML;}
if ((x[y].style.color=="rgb(53, 199, 40)")||(x[y].style.color=="#35c728")) {icon = "<img src='http://i22.servimg.com/u/f22/14/32/36/49/mod50910.gif'>";x[y].innerHTML = icon + oldHTML;}