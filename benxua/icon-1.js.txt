function Rankicon(){
x = document.getElementsByTagName('span')
for(y=0;y<x.length;y++){
var oldHTML = x[y].innerHTML;
if ((x[y].style.color=="rgb(250, 0, 0)")||(x[y].style.color=="#fa0000")) {icon = "<img src='http://i65.servimg.com/u/f65/15/75/59/85/admin110.gif'>";x[y].innerHTML = icon + oldHTML;}
if ((x[y].style.color=="rgb(255, 102, 0)")||(x[y].style.color=="#ff6600")) {icon = "<img src='http://i931.photobucket.com/albums/ad152/likilook/smod-1.gif'>";x[y].innerHTML = icon + oldHTML;}
if ((x[y].style.color=="rgb(0, 191, 0)")||(x[y].style.color=="#00bf00")) {icon = "<img src='http://i931.photobucket.com/albums/ad152/likilook/mod-2.gif'>";x[y].innerHTML = icon + oldHTML;}
if ((x[y].style.color=="rgb(191, 0, 255)")||(x[y].style.color=="#bf00ff")) {icon = "<img src='http://i26.servimg.com/u/f26/14/76/87/20/vip1510.gif'>";x[y].innerHTML = icon + oldHTML;}
if ((x[y].style.color=="rgb(0, 4, 255)")||(x[y].style.color=="#0004ff")) {icon = "<img src='http://i931.photobucket.com/albums/ad152/likilook/mem10.gif'>";x[y].innerHTML = icon + oldHTML;}
}
}
Rankicon();
