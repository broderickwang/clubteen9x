 window.onload = function changeText3(){
dir="http://www.vnpet.com/images/user_images/opg_1/pets/" 
var avatarname="<br>"
var title1="Level"
var title2="Strength"
var xperpost="8"
var xperexp="100"
var xperreptt="12"
var xpneeded="4390"
var aqname="Inteligent"
var aqsign=" AQ"
var aq=[];
var display=[];
var level=[];
var posts=[];
var repts=[];
var cts=[];
var firstchar=[];
var petvn = new Array() 
petvn[0]="<img src='"+dir+"pet_12748.gif' width='120px'>";
petvn[1]="<img src='"+dir+"pet2_2989.gif' width='120px'>";
petvn[2]="<img src='"+dir+"pet2_2990.gif' width='120px'>";
petvn[3]="<img src='"+dir+"pet2_2991.gif' width='120px'>";
petvn[4]="<img src='"+dir+"pet2_2992.gif' width='120px'>";
petvn[5]="<img src='"+dir+"pet2_2993.gif' width='120px'>";
petvn[6]="<img src='"+dir+"pet2_2994.gif' width='120px'>";
petvn[7]="<img src='"+dir+"pet2_2995.gif' width='120px'>";
petvn[8]="<img src='"+dir+"pet2_2996.gif' width='120px'>";
petvn[9]="<img src='"+dir+"pet2_2996.gif' width='120px'>";
petvn[10]="<img src='"+dir+"pet_12145.gif' width='120px'>";
petvn[11]="<img src='"+dir+"pet2_1732.gif' width='120px'>";
petvn[12]="<img src='"+dir+"pet2_2142.gif' width='120px'>";
petvn[13]="<img src='"+dir+"pet2_2153.gif' width='120px'>";
petvn[14]="<img src='"+dir+"pet2_3279.gif' width='120px'>";
petvn[15]="<img src='"+dir+"pet2_3280.gif' width='120px'>";
petvn[16]="<img src='"+dir+"pet2_3281.gif' width='120px'>";
petvn[17]="<img src='"+dir+"pet_12480.gif' width='120px'>";
petvn[18]="<img src='"+dir+"pet2_2021.gif' width='120px'>";
petvn[19]="<img src='"+dir+"pet2_2645.gif' width='120px'>";
aqperpost="7" 

x = document.getElementsByTagName('div')
for(y=0;y<x.length;y++)
{
if(x[y].innerHTML.match(/Age/i) && x[y].className == "postprofile"){
nick= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
posts[nick]=parseInt(x[y].innerHTML.split("Posts<\/span\>\: <\/span\>")[1]);

nic= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
repts[nic]=parseInt(x[y].innerHTML.split("Points<\/span\>\: <\/span\>")[1]);

nict= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
cts[nict]=parseInt(x[y].innerHTML.split("Pet<\/span\>\: <\/span\>")[1]);

var levell=[];
var xp=[];
var firstchar=[];
xp[nick]=posts[nick]*xperpost+repts[nic]*xperreptt
level[nick]=(xp[nick]/xpneeded)
var exp = Math.floor((level[nick]-Math.floor(level[nick]))*xperexp)
var phansonguyen = Math.floor(level[nick]+parseInt(1));
var xptogo = Math.floor(level[nick]+parseInt(1))*xpneeded
firstchar[nick]=nick.charAt(0);

aq[nick]="Unknown"
aq[nick]=(aqperpost*posts[nick])


var avatar=[];
       if (cts[nict] == 1) {
if (phansonguyen==1)
{avatar[nick]=petvn[0]}
if (phansonguyen==2)
{avatar[nick]=petvn[1]}
if (phansonguyen==3)
{avatar[nick]=petvn[2]}
if (phansonguyen==4)
{avatar[nick]=petvn[3]}
if (phansonguyen==5)
{avatar[nick]=petvn[4]}
if (phansonguyen==6)
{avatar[nick]=petvn[5]}
if (phansonguyen==7)
{avatar[nick]=petvn[6]}
if (phansonguyen==8)
{avatar[nick]=petvn[7]}
if (phansonguyen==9)
{avatar[nick]=petvn[8]}
if (phansonguyen==10)
{avatar[nick]=petvn[9]}
      }  else  {
           if (cts[nict] == 2) {
if (phansonguyen==1)
{avatar[nick]=petvn[10]}
if (phansonguyen==2)
{avatar[nick]=petvn[11]}
if (phansonguyen==3)
{avatar[nick]=petvn[12]}
if (phansonguyen==4)
{avatar[nick]=petvn[13]}
if (phansonguyen==5)
{avatar[nick]=petvn[14]}
if (phansonguyen==6)
{avatar[nick]=petvn[15]}
if (phansonguyen==7)
{avatar[nick]=petvn[16]}
if (phansonguyen==8)
{avatar[nick]=petvn[17]}
if (phansonguyen==9)
{avatar[nick]=petvn[18]}
if (phansonguyen==10)
{avatar[nick]=petvn[19]}
                            }
                 }
exppet="<img src='http://i292.photobucket.com/albums/mm30/huylordno1/blue.gif' width='"+exp+"%' height='9px'>";
exppet2="<img src='http://i292.photobucket.com/albums/mm30/huylordno1/exp.gif' width='2px' height='9px'>";
expss= "<\div\ class\=\"\expbg\"\><\div\ class\=\"\expbg2\"\>"+exppet+""+exppet2+"<\/div><\/div>";
stats=""+avatarname+""+avatar[nick]+"<BR><font color='red'><b>"+title1+": "+ phansonguyen +"</b></font><BR>EXP: <b>"+exp+"%</b>"+expss+"<b>"+title2+":</b> "+ xp[nick]+"<BR>"+"<b>Ability: </b>" +xptogo+"<BR><b>"+aqname+": </b>"+aq[nick]+aqsign+" "

x[y].innerHTML +="<\span\ class\=\"\gensmall\"\><fieldset><legend><b>Thú nuôi</b></legend>" + stats }}

p = document.getElementsByTagName('span')
for(i=0;i<p.length;i++)
{if (p[i].innerHTML=="<strong>Thuan007</strong>") {newHTML = "<img src=\"http://i795.photobucket.com/albums/yy235/tg3sv/vip-1.gif\">" + "</img>" + p[i].innerHTML }
else if(p[i].innerHTML=="<strong>Lanhaukt</strong>") {newHTML = "<img src=\"http://i795.photobucket.com/albums/yy235/tg3sv/vip3.gif\">" + "</img>" + p[i].innerHTML }
else if(p[i].innerHTML=="<strong>ngonluahong159</strong>") {newHTML = "<img src=\"http://i795.photobucket.com/albums/yy235/tg3sv/mod.gif\">" + "</img>" + p[i].innerHTML }
else if(p[i].innerHTML=="<strong>gabong4mat</strong>") {newHTML = "<img src=\"http://i795.photobucket.com/albums/yy235/tg3sv/mod.gif\">" + "</img>" + p[i].innerHTML }
else if(p[i].innerHTML=="<strong>No1forever</strong>") {newHTML = "<img src=\"http://i795.photobucket.com/albums/yy235/tg3sv/mod.gif\">" + "</img>" + p[i].innerHTML }
else if(p[i].innerHTML=="<strong>ngotuyetngo</strong>") {newHTML = "<img src=\"http://i795.photobucket.com/albums/yy235/tg3sv/mod.gif\">" + "</img>" + p[i].innerHTML }
else if(p[i].innerHTML=="<strong>hihihuhuhehehaha</strong>") {newHTML = "<img src=\"http://i795.photobucket.com/albums/yy235/tg3sv/mod.gif\">" + "</img>" + p[i].innerHTML }
else {newHTML= p[i].innerHTML}
 x[y].innerHTML = newHTML;
}
}