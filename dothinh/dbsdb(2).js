function petForum(){
dir="http://i795.photobucket.com/albums/yy235/tg3sv/a1_imgs/"
var avatarname="<br>"

var xperpost="15"
var xperexp="100"
var xperreptt="22"
var xpneeded="10000"
var maxability="15000"
var aqname=""
var aq=[];
var display=[];
var level=[];
var posts=[];
var repts=[];
var ability=[];
var firstchar=[];
var boom = new Array()
boom[0]="<img src='"+dir+"exp_medal_045.gif'> AMATEUR";
boom[1]="<img src='"+dir+"exp_medal_090.gif'> AMATEUR";
boom[2]="<img src='"+dir+"exp_medal_135.gif'> KOOL";
boom[3]="<img src='"+dir+"exp_medal_180.gif'> KOOL";
boom[4]="<img src='"+dir+"exp_medal_225.gif'> GOOD";
boom[5]="<img src='"+dir+"exp_medal_270.gif'> GOOD";
boom[6]="<img src='"+dir+"exp_medal_315.gif'> PRO";
boom[7]="<img src='"+dir+"exp_medal_360.gif'> PRO";
boom[8]="<img src='"+dir+"exp_medal_405.gif'> PERFECT";
boom[9]="<img src='"+dir+"exp_medal_450.gif'> PERFECT";
x = document.getElementsByTagName('div')
for(y=0;y<x.length;y++)
{
if(x[y].className == "postprofile"){
nick= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
nic= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
tks= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
posts[nick]=parseInt(x[y].innerHTML.toLowerCase().split("posts</span>: </span>")[1]);
repts[nic]=parseInt(x[y].innerHTML.toLowerCase().split("points</span>: </span>")[1]);
ability[tks]=parseInt(x[y].innerHTML.toLowerCase().split("thanks</span>: </span>")[1]);
var title1="&nbsp;"
var levell=[];
var xp=[];
var firstchar=[];
xp[nick]=Math.floor(posts[nick]*xperpost/10+(repts[nic]+ability[tks]*4)*xperreptt/10)
level[nick]=(xp[nick]/xpneeded)
var exp = Math.floor((level[nick]-Math.floor(level[nick]))*xperexp)
var phansonguyen = Math.floor(level[nick]+parseInt(1));
if (phansonguyen > 50){(phansonguyen = "50")&&(exp = "99")&&(title1="(Max)")}
var width=(exp-100)
var xptogo = "100"
if(xp[nick]>0){xptogo = Math.floor(ability[tks]*19+posts[nick]*2+repts[nic])} else {aqname="none"}
var abilityperc = (Math.floor((xptogo/maxability)*100))
var width2=(abilityperc-100)
if(xptogo > maxability) {(xptogo = maxability)&&(abilityperc = "100")}
firstchar[nick]=nick.charAt(0);
aq[nick]="Unknown"
var attack= Math.floor(xp[nick]/5)
var defense = Math.floor((xptogo + xp[nick])/20)

var avatar=[];
if (phansonguyen==1)
{avatar[nick]=boom[0]}
else if (phansonguyen==2)
{avatar[nick]=boom[1]}
else if (phansonguyen==3)
{avatar[nick]=boom[2]}
else if (phansonguyen==4)
{avatar[nick]=boom[3]}
else if (phansonguyen==5)
{avatar[nick]=boom[4]}
else if (phansonguyen==6)
{avatar[nick]=boom[5]}
else if (phansonguyen==7)
{avatar[nick]=boom[6]}
else if (phansonguyen==8)
{avatar[nick]=boom[7]}
else if (phansonguyen==9)
{avatar[nick]=boom[8]}
else if (phansonguyen==10)
{avatar[nick]=boom[9]}
else {avatar[nick]=boom[0]}
expss= "<div class='exp_tr'><div class='exp_td' style='background:transparent url(http://yega.game4v.vn/level_class/img/ExpBar.gif) "+width+"px 2px no-repeat;' title='EXP: "+exp+"%'>&nbsp;</div></div>";

abilityss= "<div class='exp_tr'><div class='exp_td' style='background:transparent url(http://yega.game4v.vn/level_class/img/SpBar.gif) "+width2+"px 2px no-repeat;' title='SP: " +xptogo+"/"+maxability+" ("+abilityperc+"%)'>&nbsp;</div></div>";

stats="<div class='level_class_legacy' style='display: "+aqname+";'><div class='lv_tr'><div class='lv_td'><font color='red' face='Verdana'>"+ phansonguyen +""+title1+"</font></div></div><div class='class_tr'><div class='class_td' valign='top'><font color='yellow'>"+avatar[nick]+"</font></div></div>"+expss+""+abilityss+" "
x[y].innerHTML +=stats}}
}
window.onload = petForum();