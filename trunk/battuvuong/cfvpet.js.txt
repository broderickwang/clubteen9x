function changeText3(){
dir="http://www.vnpet.com/images/user_images/opg_1/pets/" 

var title1="Cấp độ"
var title2="Tấn công"
var xperpost="10"
var xperexp="100"
var xperreptt="50"
var xpneeded="1500"
var maxstrength="50000"
var maxability="70000"


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
if(x[y].innerHTML.match(/Thanked/i) && x[y].className == "postprofile"){
nick= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
nic= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
nict= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
tks= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
cts[nict]=parseInt(x[y].innerHTML.toLowerCase().split("pet<\/span\>\: <\/span\>")[1]);
posts[nick]=parseInt(x[y].innerHTML.toLowerCase().split("topics<\/span\>\: <\/span\>")[1]);
repts[nic]=parseInt(x[y].innerHTML.toLowerCase().split("ryo<\/span\>\: <\/span\>")[1]);
ability[tks]=parseInt(x[y].innerHTML.toLowerCase().split("thanked<\/span\>\: <\/span\>")[1]);

var level=[];


var xp=[];
var firstchar=[];
xp[nick]=posts[nick]*xperpost+repts[nic]*xperreptt
level[nick]=(xp[nick]/xpneeded)


var exp = Math.floor((level[nick]-Math.floor(level[nick]))*xperexp)

var phansonguyen = Math.floor(level[nick]+parseInt(1));
if (phansonguyen > 50){(phansonguyen = "50 - KAGE")&&(exp = "99")} 

var width=(exp-1)
var xptogo = Math.floor(ability[tks]*10+posts[nick]*2+repts[nic])
if(xptogo > maxability) {xptogo = maxability}
if(xp[nick] > maxstrength) {(xp[nick] = maxstrength)}




var abilityperc = (Math.floor((xptogo/maxability)*100)-2)
var strengthperc = (Math.floor((xp[nick]/maxstrength)*100)-2)


firstchar[nick]=nick.charAt(0);


exppet="<img src='http://sinhvienit.net/@forum/images/rpg/orange.gif' width='"+width+"%' height='9px'>";
exppet2="<img src='http://sinhvienit.net/@forum/images/rpg/hp.gif' width='2px' height='9px'>";
expss= "<\div\ class\=\"\expbg\"\><\div\ class\=\"\expbg2\"\><fieldset style=\"\padding: 1px;\"\>"+exppet+""+exppet2+"<\/fieldset><\/div><\/div>";

strengthpet="<img src='http://sinhvienit.net/@forum/images/rpg/blue.gif' width='"+strengthperc+"%' height='9px'>";
strengthpet2="<img src='http://sinhvienit.net/@forum/images/rpg/exp.gif' width='2px' height='9px'>";
strengthss= "<\div\ class\=\"\strengthbg\"\><\div\ class\=\"\strengthbg2\"\><fieldset style=\"\padding: 1px;\"\>"+strengthpet+""+strengthpet2+"<\/fieldset><\/div><\/div>";

abilitypet="<img src='http://sinhvienit.net/@forum/images/rpg/green.gif' width='"+abilityperc+"%' height='9px'>";
abilitypet2="<img src='http://sinhvienit.net/@forum/images/rpg/mp.gif' width='2px' height='9px'>";
abilityss= "<\div\ class\=\"\abilitybg\"\><\div\ class\=\"\abilitybg2\"\><fieldset style=\"\padding: 1px;\"\>"+abilitypet+""+abilitypet2+"<\/fieldset><\/div><\/div>";

stats="<fieldset style='padding:5px'><legend><font color='red'><b>"+title1+": "+ phansonguyen +"</b></font></legend><b><font color=orange>Kinh nghiệm :</font></b> "+exp+"%"+expss+"<b><font color=blue>"+title2+" : </font></b>("+ xp[nick]+"/"+maxstrength+")"+strengthss+""+"<b><font color=green>Phòng thủ : </font></b>(" +xptogo+"/"+maxability+")"+abilityss 
x[y].innerHTML +="<\span\ class\=\"\gensmall\"\>" + stats}}
}

function start() {changeImg(); changeText3();} window.onload=start();