function A1pet(){
dir="http://s763.photobucket.com/albums/xx272/thuanoo7/level/" 
var xperpost="15"
var xperexp="100"
var xperreptt="22"
var xpneeded="1000"
var maxability="8000"
var maxstrength=(xpneeded*10)
var aq=[];
var level=[];
var posts=[];
var repts=[];
var ability=[];
var plus=[];
var cts=[];
var firstchar=[];
var petvn = new Array() 
var boom = new Array() 
x = document.getElementsByTagName('ul')
for(y=0;y<x.length;y++){
if(x[y].innerHTML.match(/Age/i) && x[y].className == "petforum"){
nick= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
nic= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
nict= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
tks= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
a1sp= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
cts[nict]=parseInt(x[y].innerHTML.toLowerCase().split("pet</span>: </span>")[1]);
posts[nick]=parseInt(x[y].innerHTML.toLowerCase().split("posts: </span>")[1]);
repts[nic]=parseInt(x[y].innerHTML.toLowerCase().split("points</span>: </span>")[1]);
ability[tks]=parseInt(x[y].innerHTML.toLowerCase().split("thanks: </span>")[1]);
plus[a1sp]=parseInt(x[y].innerHTML.toLowerCase().split("message reputation : 100% (")[1]);
if(repts[nic]>0){var levell=[];
var xp=[];
var firstchar=[];
xp[nick]=Math.floor(posts[nick]*xperpost/10+(repts[nic]+ability[tks]*4)*xperreptt/10)
level[nick]=(xp[nick]/xpneeded)
var exp = Math.floor((level[nick]-Math.floor(level[nick]))*xperexp)
var a1pluslh=(plus[a1sp]*20)
var a1plusexp=Math.floor(plus[a1sp]*xperreptt/10)
if(plus[a1sp] >0){(a1pluslh=(plus[a1sp]*20))&&(a1plusexp=(Math.floor(plus[a1sp]*xperreptt/2)))}
else{(a1pluslh=0)&&(a1plusexp=0)}
var phansonguyen = Math.floor(level[nick]+parseInt(1));
var title1="Level"
if (phansonguyen > 10){(phansonguyen = "10")&&(exp = "99")&&(title1="Max-Level")} 
var width=(exp-1)
var xptogo = "100"
if(xp[nick]>0){xptogo = Math.floor(ability[tks]*19+posts[nick]*2+repts[nic])}
var abilityperc = (Math.floor((xptogo/maxability)*100)-2)
if(xptogo > maxability) {(xptogo = maxability)&&(abilityperc = "98")}
var strengthperc = (Math.floor((xp[nick]/maxstrength)*100)-2)
if(xp[nick] > maxstrength) {(xp[nick]= maxstrength)&&(strengthperc = "98")}
firstchar[nick]=nick.charAt(0);
aq[nick]="Unknown"
var attack= Math.floor(xp[nick]/5)
var defense = Math.floor((xptogo + xp[nick])/20)
var medal=[];
var avatar=[];
var i=1;
while (i>0){
if (phansonguyen==i){
boom[i]="<img src='"+dir+"exp_medal_"+i+".gif'>";
petvn[i]="<img src='"+dir+"p"+cts[nict]+""+i+".jpg'>";
medal[nick]=boom[i];avatar[nick]=petvn[i];
i=0;} else{i++;}
} 
if(a1pluslh!=0){congdiem="<div style='width:420px;font: normal 11px Tahoma; color: #f30000;background-color: #ffeb90;-moz-box-shadow: -2px 2px 2px #c8c8c8;-webkit-box-shadow: -2px 2px 2px #c8c8c8; padding: 4px;'>Đã có "+plus[a1sp]+" người cảm ơn cho bài viết này &nbsp;<font color='blue' size='1'><b>Exp: +"+a1plusexp+"</b></font>&nbsp;-&nbsp;<font color='orange' size='1'><b>Power: +"+a1plusexp+"</b></font>&nbsp;-&nbsp;<font color='green' size='1'><b>Ability: +"+a1pluslh+"</b></font></div>"} else{congdiem=""}
exppet="<img src='http://sinhvienit.net/@forum/images/rpg/blue.gif' width='"+width+"%' height='9px'>";
exppet2="<img src='http://sinhvienit.net/@forum/images/rpg/exp.gif' width='2px' height='9px'>";
expss= "<div class='expbg'><div class='expbg2'><fieldset style='padding: 1px; border: #776b6a 1px solid;'>"+exppet+""+exppet2+"</fieldset></div></div>";
strengthpet="<img src='http://sinhvienit.net/@forum/images/rpg/orange.gif' width='"+strengthperc+"%' height='9px'>";
strengthpet2="<img src='http://sinhvienit.net/@forum/images/rpg/hp.gif' width='2px' height='9px'>";
strengthss= "<div class='strengthbg'><div class='strengthbg2'><fieldset style='padding: 1px; border: #776b6a 1px solid;'>"+strengthpet+""+strengthpet2+"</fieldset></div></div>";
abilitypet="<img src='http://sinhvienit.net/@forum/images/rpg/green.gif' width='"+abilityperc+"%' height='9px'>";
abilitypet2="<img src='http://sinhvienit.net/@forum/images/rpg/mp.gif' width='2px' height='9px'>";
abilityss= "<div class='abilitybg'><div class='abilitybg2'><fieldset style='padding: 1px; border: #776b6a 1px solid;'>"+abilitypet+""+abilitypet2+"</fieldset></div></div>";

stats="<table cellpadding='0' cellspacing='5'><tr><td align='center' class='petfm'>"+avatar[nick]+"<br><img src='http://i832.photobucket.com/albums/zz244/a1tg3/shadow.png'/></td><td width='88px'  style='padding-top: 12px;'><img src='http://i832.photobucket.com/albums/zz244/a1tg3/pet.png'>&nbsp;</td><td><fieldset style='padding: 3px 7px 3px 5px; border: #776b6a 1px dashed;'><table cellpadding='0' cellspacing='3'><tr><td width='150'><div valign='bottom'><span style='padding: 7px 5px 1px 15px;-moz-box-shadow: -2px 2px 2px #c8c8c8;-webkit-box-shadow: -2px 2px 2px #c8c8c8;background-color:#eeeeee;'><font color='red' style='font-size: 12px;'><b>&nbsp;"+title1+": "+ phansonguyen +"&nbsp;&nbsp;&nbsp;&raquo;"+medal[nick]+"&laquo;</b></font></span><br><br><font color='blue' size='1'><b>&nbsp;EXP </b>:&nbsp;"+exp+"%</font>"+expss+"<font color='orange' size='1'><b>&nbsp;POWER </b>:&nbsp;"+ xp[nick]+"&nbsp;/&nbsp;"+maxstrength+"</font>"+strengthss+""+"<font color='green' size='1'><b>&nbsp;ABILITY </b>:&nbsp;" +xptogo+"&nbsp;/&nbsp;"+maxability+"</font>"+abilityss+""+"<font color='red' size='1'><b>&nbsp;Sát thương cơ bản:&nbsp;["+attack+"]</b></font><br>"+"<font color='#4f4f4f' size='1'><b>&nbsp;Phòng thủ:&nbsp;["+defense+"]</b></font></div></td></tr></table></fieldset></td></tr></table>"+congdiem+" "
x[y].innerHTML +="<span class='gensmall'>" + stats} else{x[y].innerHTML +="<font color=red><br><br><br><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Mình nghèo quá <img src='http://a1tinhgia3.co.cc/users/2211/12/43/96/smiles/191838.gif'> . Có "+repts[nic]+" points thì làm sao mua pet đây?? <img src='http://a1tinhgia3.co.cc/users/2211/12/43/96/smiles/43362.gif'></b></font>"}}}
}
A1pet();