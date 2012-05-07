function changeImg(){
x = document.getElementsByTagName('span')
for(i=0;i<x.length;i++){
if(window.onload != 'resize_images()'){
if ((x[i].style.color=="rgb(255, 0, 0)")||(x[i].style.color=="#ff0000")) {newHTML = "<img src="http://i1198.photobucket.com/albums/aa457/bu21/1.gif">" + "</img>" + x[i].innerHTML}

else if((x[i].style.color=="rgb(140, 0, 255)")||(x[i].style.color=="#8c00ff")) {newHTML = "<img src="http://i1198.photobucket.com/albums/aa457/bu21/4.gif">" + "</img>" + x[i].innerHTML}

else if((x[i].style.color=="rgb(140, 0, 255)")||(x[i].style.color=="#8c00ff")) {newHTML = "<img src="http://i1198.photobucket.com/albums/aa457/bu21/3.gif">" + "</img>" + x[i].innerHTML}

else if((x[i].style.color=="rgb(255, 122, 255)")||(x[i].style.color=="#ff7aff")) {newHTML = "<img src="http://i1198.photobucket.com/albums/aa457/bu21/2.gif">" + "</img>" + x[i].innerHTML}

else if((x[i].style.color=="rgb(117, 64, 0)")||(x[i].style.color=="#754000")) {newHTML = "<img src="http://i1198.photobucket.com/albums/aa457/bu21/7.gif">" + "</img>" + x[i].innerHTML}

else if((x[i].style.color=="rgb(0, 0, 225)")||(x[i].style.color=="#0000ff")) {newHTML = "<img src="http://i1198.photobucket.com/albums/aa457/bu21/5.gif">" + "</img>" + x[i].innerHTML}

else if((x[i].style.color=="rgb(0, 0, 0)")||(x[i].style.color=="#000000")) {newHTML = "<img src="http://i1198.photobucket.com/albums/aa457/bu21/6.gif">" + "</img>" + x[i].innerHTML}

else if((x[i].style.color=="rgb(0, 0, 0)")||(x[i].style.color=="#000000")) {newHTML = "<img src="http://i1198.photobucket.com/albums/aa457/bu21/9.gif">" + "</img>" + x[i].innerHTML}

else if((x[i].style.color=="rgb(0, 0, 0)")||(x[i].style.color=="#000000")) {newHTML = "<img src="http://i1198.photobucket.com/albums/aa457/bu21/20.gif">" + "</img>" + x[i].innerHTML}

else if((x[i].style.color=="rgb(0, 0, 0)")||(x[i].style.color=="#000000")) {newHTML = "<img src="http://i1198.photobucket.com/albums/aa457/bu21/14.gif">" + "</img>" + x[i].innerHTML}

else if((x[i].style.color=="rgb(0, 0, 0)")||(x[i].style.color=="#000000")) {newHTML = "<img src="http://i1198.photobucket.com/albums/aa457/bu21/18.gif">" + "</img>" + x[i].innerHTML}

else if((x[i].style.color=="rgb(0, 0, 0)")||(x[i].style.color=="#000000")) {newHTML = "<img src="http://i1198.photobucket.com/albums/aa457/bu21/15.gif">" + "</img>" + x[i].innerHTML}

else {newHTML= x[i].innerHTML}}
x[i].innerHTML = newHTML;
}
}
window.onload = changeImg(); 