function Rankicon(){
x = document.getElementsByTagName('span')
for(y=0;y<x.length;y++){
var oldHTML = x[y].innerHTML;
if ((x[y].style.color=="rgb(8,218, 255)")||(x[y].style.color=="#08DAFF")) {icon = "<img src='http://cc7.upanh.com/25.728.32898416.2u0/vip1010.gif'>";x[y].innerHTML = icon + oldHTML;}

if ((x[y].style.color=="rgb(30,207, 20)")||(x[y].style.color=="#1ECF14")) {icon = "<img src='http://cc7.upanh.com/26.517.33734416.rEL0/37.gif'>";x[y].innerHTML = icon + oldHTML;}

if ((x[y].style.color=="rgb(247,206, 0)")||(x[y].style.color=="#F7CE00")) {icon = "<img src='http://cc8.upanh.com/26.517.33734217.Ol0/1.gif'>";x[y].innerHTML = icon + oldHTML;}

if ((x[y].style.color=="rgb(235, 9, 209)")||(x[y].style.color=="#EB09D1")) {icon = "<img src='http://i38.servimg.com/u/f38/15/28/02/06/missv10.gif'>";x[y].innerHTML = icon + oldHTML;}

if ((x[y].style.color=="rgb(0, 0, 255)")||(x[y].style.color=="#0000FF")) {icon = "<img src='http://i38.servimg.com/u/f38/15/28/02/06/missv10.gif'>";x[y].innerHTML = icon + oldHTML;}

if ((x[y].style.color=="rgb(235, 150, 229)")||(x[y].style.color=="#EB96E5")) {icon = "<img src='http://i48.servimg.com/u/f48/14/28/30/23/miss10.gif'>";x[y].innerHTML = icon + oldHTML;}

if ((x[y].style.color=="rgb(255, 0, 0)")||(x[y].style.color=="#ff0000")) {icon = "<img src='http://i24.servimg.com/u/f24/15/54/64/05/admin14.gif'>";x[y].innerHTML = icon + oldHTML;}
}
}
Rankicon();