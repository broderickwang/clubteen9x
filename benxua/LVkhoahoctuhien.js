function changeImg(){
x = document.getElementsByTagName('span')
for(i=0;i<x.length;i++){
if(window.onload != 'resize_images()') {
if ((x[i].style.color=="rgb(254, 0, 0)")||(x[i].style.color=="#234587")) {newHTML = "<img src=\"http://images.dailyinfo.vn/archive/photo/fashion/201009/20100919/19281011admin.gif\">" + "</img> " + x[i].innerHTML}
else {newHTML= x[i].innerHTML}
}
x[i].innerHTML = newHTML;
}
}



function changeText3(){
dir="http://www.vnpet.com/images/user_images/opg_1/pets/" 

var title1="Level "
var title2="Tài năng"
var xperpost="10"
var xperexp="100"
var xperreptt="5"
var xpneeded="1500"
var maxstrength="25000"
var maxability="8000"


var display=[];
var level=[];
var posts=[];
var repts=[];
var ability=[];
var cts=[];
var firstchar=[];



x = document.getElementsByTagName('div')
for(y=0;y<x.length;y++)
{
if(x[y].innerHTML.match(/Thanked/i) && x[y].className == "fmlevel"){
nick= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
nic= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
nict= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
tks= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
cts[nict]=parseInt(x[y].innerHTML.toLowerCase().split("pet<\/span\>\: <\/span\>")[1]);
posts[nick]=parseInt(x[y].innerHTML.toLowerCase().split("posts<\/span\>\: <\/span\>")[1]);
repts[nic]=parseInt(x[y].innerHTML.toLowerCase().split("points<\/span\>\: <\/span\>")[1]);
ability[tks]=parseInt(x[y].innerHTML.toLowerCase().split("thanked<\/span\>\: <\/span\>")[1]);

var level=[];


var xp=[];
var firstchar=[];
xp[nick]=posts[nick]*xperpost+repts[nic]*xperreptt
level[nick]=(xp[nick]/xpneeded)


var exp = Math.floor((level[nick]-Math.floor(level[nick]))*xperexp)

var phansonguyen = Math.floor(level[nick]+parseInt(1));
if (phansonguyen > 30){(phansonguyen = "30 - MAX")&&(exp = "99")} 

var width=(exp-1)
var xptogo = Math.floor(ability[tks]*10+posts[nick]*2+repts[nic])
if(xptogo > maxability) {xptogo = maxability}
if(xp[nick] > maxstrength) {(xp[nick] = maxstrength)}




var abilityperc = (Math.floor((xptogo/maxability)*100)-2)
var strengthperc = (Math.floor((xp[nick]/maxstrength)*100)-2)


firstchar[nick]=nick.charAt(0);





exppet="<img src='http://images.dailyinfo.vn/archive/photo/fashion/201010/20101019/19371041blue.gif' width='"+width+"%' height='9px'>";
exppet2="<img src='http://images.dailyinfo.vn/archive/photo/fashion/201010/20101019/19371041exp.gif' width='2px' height='9px'>";
expss= "<\div\ class\=\"\expbg\"\><\div\ class\=\"\expbg2\"\><fieldset style=\"\padding: 1px;border-color:lightblue;\"\>"+exppet+""+exppet2+"<\/fieldset><\/div><\/div>";

strengthpet="<img src='http://images.dailyinfo.vn/archive/photo/fashion/201010/20101019/19371042orange.gif' width='"+strengthperc+"%' height='9px'>";
strengthpet2="<img src='http://images.dailyinfo.vn/archive/photo/fashion/201010/20101019/19371042hp.gif' width='2px' height='9px'>";
strengthss= "<\div\ class\=\"\strengthbg\"\><\div\ class\=\"\strengthbg2\"\><fieldset style=\"\padding: 1px;border-color:orange;\"\>"+strengthpet+""+strengthpet2+"<\/fieldset><\/div><\/div>";

abilitypet="<img src='http://images.dailyinfo.vn/archive/photo/fashion/201010/20101019/19371041green.gif' width='"+abilityperc+"%' height='9px'>";
abilitypet2="<img src='http://images.dailyinfo.vn/archive/photo/fashion/201010/20101019/19371042mp.gif' width='2px' height='9px'>";
abilityss= "<\div\ class\=\"\abilitybg\"\><\div\ class\=\"\abilitybg2\"\><fieldset style=\"\padding: 1px;border-color:green;\"\>"+abilitypet+""+abilitypet2+"<\/fieldset><\/div><\/div>";

stats="<fieldset style='padding:5px;background:#fff;'><legend><font color='red'><b>"+title1+": "+ phansonguyen +"</b></font></legend><b><font color=blue> Kinh nghiệm :</font></b> "+exp+"%"+expss+"<b><font color=orange> "+title2+" : </font></b>("+ xp[nick]+"/"+maxstrength+")"+strengthss+""+"<b><font color=green> Sức mạnh : </font></b>(" +xptogo+"/"+maxability+")"+abilityss 
x[y].innerHTML +="<\span\ class\=\"\gensmall\"\>" + stats}}
}

function start() {changeImg(); changeText3();} window.onload=start();
