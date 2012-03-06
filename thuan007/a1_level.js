function A1level(){
dir="http://s832.photobucket.com/albums/zz244/a1tg3/boom/" 
var title2="Ho?t ??ng"
var xperpost="15"
var xperexp="100"
var xperreptt="22"
var xpneeded="20"
var maxability="8000"
var maxstrength=(xpneeded*500)
var aq=[];
var level=[];
var posts=[];
var repts=[];
var ability=[];
var cts=[];
var firstchar=[];
var boom = new Array() 
x = document.getElementsByTagName('div')
for(y=0;y<x.length;y++){
if(x[y].className == "fmlevel"){
nick= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
nic= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
nict= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
tks= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
cts[nict]=parseInt(x[y].innerHTML.toLowerCase().split("pet</span>: </span>")[1]);
posts[nick]=parseInt(x[y].innerHTML.toLowerCase().split("posts</span>: </span>")[1]);
repts[nic]=parseInt(x[y].innerHTML.toLowerCase().split("points</span>: </span>")[1]);
ability[tks]=parseInt(x[y].innerHTML.toLowerCase().split("thanked</span>: </span>")[1]);
if(repts[nic]>=0){var levell=[];
var xp=[];
var firstchar=[];
xp[nick]=Math.floor(posts[nick]*xperpost/10+(repts[nic]+ability[tks]*4)*xperreptt/10)
level[nick]=(xp[nick]/xpneeded)
var exp = Math.floor((level[nick]-Math.floor(level[nick]))*xperexp)
var phansonguyen = Math.floor(level[nick]+parseInt(1));
var title1="Level"
if (phansonguyen > 450){(phansonguyen = "450")&&(exp = "99")&&(title1="Max-Level")} 
var width=(exp-1)
var xptogo = "100"
if(xp[nick]>0){xptogo = Math.floor(ability[tks]*19+posts[nick]*2+repts[nic])}
var abilityperc = (Math.floor((xptogo/maxability)*100)-2)
if(xptogo > maxability) {(xptogo = maxability)&&(abilityperc = "98")}
var strengthperc = (Math.floor((xp[nick]/maxstrength)*100)-2)
if(xp[nick] > maxstrength) {(xp[nick]= maxstrength)&&(strengthperc = "98")}
firstchar[nick]=nick.charAt(0);
aq[nick]="Unknown"
var medal=[];
var i=1;
while (i>0){
if (phansonguyen==i){
boom[i]="<img src='"+dir+"exp_medal_"+i+".gif'>";
medal[nick]=boom[i];i=0;} else{i++;}
} 
exppet="<img src='http://sinhvienit.net/@forum/images/rpg/blue.gif' width='"+width+"%' height='9px'>";
exppet2="<img src='http://sinhvienit.net/@forum/images/rpg/exp.gif' width='2px' height='9px'>";
expss= "<div class='expbg'><div class='expbg2'><fieldset style='padding: 1px; border: #776b6a 1px solid;'>"+exppet+""+exppet2+"</fieldset></div></div>";

strengthpet="<img src='http://sinhvienit.net/@forum/images/rpg/orange.gif' width='"+strengthperc+"%' height='9px'>";
strengthpet2="<img src='http://sinhvienit.net/@forum/images/rpg/hp.gif' width='2px' height='9px'>";
strengthss= "<div class='strengthbg'><div class='strengthbg2'><fieldset style='padding: 1px; border: #776b6a 1px solid;'>"+strengthpet+""+strengthpet2+"</fieldset></div></div>";

abilitypet="<img src='http://sinhvienit.net/@forum/images/rpg/green.gif' width='"+abilityperc+"%' height='9px'>";
abilitypet2="<img src='http://sinhvienit.net/@forum/images/rpg/mp.gif' width='2px' height='9px'>";
abilityss= "<div class='abilitybg'><div class='abilitybg2'><fieldset style='padding: 1px; border: #776b6a 1px solid;'>"+abilitypet+""+abilitypet2+"</fieldset></div></div>";
stats="<div align='left'><table cellpadding='0' cellspacing='0' width='170'><tr><td width='150'><br><fieldset style='padding: 7px 7px 3px 5px; border: #776b6a 1px dashed;'><div valign='bottom' style='padding: 3px;'><font color='red' style='font-size: 12px'><b>&nbsp;"+title1+": "+ phansonguyen +"&nbsp;&nbsp;&nbsp;&raquo;"+medal[nick]+"&laquo;</b></font><br><br><font color='blue' size='1'><b>&nbsp;Kinh nghi?m:&nbsp;"+exp+"%</b></font>"+expss+"<font color='orange' size='1'><b>&nbsp;"+title2+":&nbsp;"+ xp[nick]+"&nbsp;/&nbsp;"+maxstrength+"</b></font>"+strengthss+""+"<font color='green' size='1'><b>&nbsp;Danh v?ng:&nbsp;" +xptogo+"&nbsp;/&nbsp;"+maxability+"</b></font>"+abilityss+"</div></fieldset></td></tr></table></div> "
x[y].innerHTML +="<span class='gensmall'>" + stats} else{x[y].innerHTML +="<font color=red><br><br><b>Unknown ("+repts[nic]+" points)</b></font>"}}}
}
A1level();