function changeImg(){
x = document.getElementsByTagName('span')
for(i=0;i<x.length;i++){
if(window.onload != 'resize_images()'){
if ((x[i].style.color=="rgb(250, 0, 0)")||(x[i].style.color=="#fa0000")) {newHTML = "<img src=\"http://i22.servimg.com/u/f22/14/32/36/49/adming10.gif\">" + "</img>" + x[i].innerHTML}

else if((x[i].style.color=="rgb(0, 145, 255)")||(x[i].style.color=="#0091ff")) {newHTML = "<img src=\"http://i22.servimg.com/u/f22/14/32/36/49/smod5010.gif\">" + "</img>" + x[i].innerHTML}

else if((x[i].style.color=="rgb(53, 199, 40)")||(x[i].style.color=="#35c728")) {newHTML = "<img src=\"http://i22.servimg.com/u/f22/14/32/36/49/mod50910.gif\">" + "</img>" + x[i].innerHTML}


else {newHTML= x[i].innerHTML}}
x[i].innerHTML = newHTML;
}
}
window.onload = changeImg();