window.onload = function changeStyle(){

x = document.getElementsByTagName('span')
for(y=0;y<x.length;y++)
{if (x[y].style.color=="rgb(255, 18, 18)") {newHTML = "<img src=\"http://s1036.photobucket.com/albums/a449/a1tinhgia3/admin.gif\">" + "</img>" + x[y].innerHTML}
else if(x[y].style.color=="rgb(255, 5, 247)") {newHTML = "<img src=\"http://i69.servimg.com/u/f69/14/79/14/14/mod13.gif\">" + "</img>" + x[y].innerHTML}
else if(x[y].style.color=="rgb(9, 0, 255)") {newHTML = "<img src=\"http://s1036.photobucket.com/albums/a449/a1tinhgia3/smod.gif\">" + "</img>" + x[y].innerHTML}
else if(x[y].style.color=="rgb(51, 214, 149)") {newHTML = "<img src=\"http://i69.servimg.com/u/f69/14/79/14/14/mod13.gif\">" + "</img>" + x[y].innerHTML}
else if(x[y].style.color=="rgb(99, 189, 99)") {newHTML = "<img src=\"http://i69.servimg.com/u/f69/14/79/14/14/mod13.gif\">" + "</img>" + x[y].innerHTML}
else if(x[y].style.color=="rgb(102, 70, 110)") {newHTML = "<img src=\"http://i21.servimg.com/u/f21/15/61/17/20/member14.gif\">" + "</img>" + x[y].innerHTML}
else {newHTML= x[y].innerHTML}
x[y].innerHTML = newHTML;
}
}
