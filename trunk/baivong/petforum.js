function init(){
dir="http://s913.photobucket.com/albums/ac332/battuvuong/pet/" 
var avatarname="<br>"
var title1="Level"
var title2="<img src='"+dir+"str-1.jpg' alt='strenght'>";
var title3="<img src='"+dir+"def-1.jpg' alt='defense'>";
var title4="<img src='"+dir+"exp-1.jpg'>";
var xperpost="8"
var xperexp="100"
var xperreptt="12"
var xpneeded="4390"
var aqname="<img src='"+dir+"int-1.jpg' alt='Intelligent'>";
var aqsign=" <img src='"+dir+"point-1.jpg' alt='point'>";
var aq=[];
var display=[];
var level=[];
var posts=[];
var repts=[];
var cts=[];
var firstchar=[];
var petvn = new Array() 
petvn[0]="<img src='"+dir+"120px-Angelic_Cybill.gif'>";
petvn[1]="<img src='"+dir+"120px-Arid_Cybill.gif'>";
petvn[2]="<img src='"+dir+"120px-Chibi_Cybill.gif'>";
petvn[3]="<img src='"+dir+"120px-Cybill.gif'>";
petvn[4]="<img src='"+dir+"120px-Twilight_Cybill.gif'>";
petvn[5]="<img src='"+dir+"120px-Galactic_Cybill.gif'>";
petvn[6]="<img src='"+dir+"120px-Spectrum_Cybill.gif'>";
petvn[7]="<img src='"+dir+"120px-Hydrus_Cybill.gif'>";
petvn[8]="<img src='"+dir+"120px-Graveyard_Cybill.gif'>";
petvn[9]="<img src='"+dir+"120px-Nightmare_Cybill.gif'>";
petvn[10]="<img src='"+dir+"120px-Angelic_Kanis.gif'>";
petvn[11]="<img src='"+dir+"120px-Arid_Kanis.gif'>";
petvn[12]="<img src='"+dir+"120px-Bloodred_Kanis.gif'>";
petvn[13]="<img src='"+dir+"120px-Dusk_Kanis.gif'>";
petvn[14]="<img src='"+dir+"120px-Twilight_Kanis.gif'>";
petvn[15]="<img src='"+dir+"120px-Darkmatter_Kanis.gif'>";
petvn[16]="<img src='"+dir+"120px-Galactic_Kanis.gif'>";
petvn[17]="<img src='"+dir+"120px-Graveyard_Kanis.gif'>";
petvn[18]="<img src='"+dir+"120px-Hydrus_Kanis.gif'>";
petvn[19]="<img src='"+dir+"120px-Nightmare_Kanis.gif'>";
aqperpost="7" 

x = document.getElementsByTagName('div')
for(y=0;y<x.length;y++)
{
if(x[y].className == "postprofile"){
nick= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
posts[nick]=parseInt(x[y].innerHTML.toLowerCase().split("posts</span>: </span>")[1]);

nic= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
repts[nic]=parseInt(x[y].innerHTML.toLowerCase().split("points</span>: </span>")[1]);

nict= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
cts[nict]=parseInt(x[y].innerHTML.toLowerCase().split("pet</span>: </span>")[1]);

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
if (phansonguyen>=10)
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
if (phansonguyen>=10)
{avatar[nick]=petvn[19]}
                            }
                 }
exppet="<img src='http://i913.photobucket.com/albums/ac332/battuvuong/pet/blue.gif' width='"+exp+"%' height='9px'>";
exppet2="<img src='http://i913.photobucket.com/albums/ac332/battuvuong/pet/exp-2.gif' width='2px' height='9px'>";
expss= "<\div\ class\=\"\expbg\"\><\div\ class\=\"\expbg2\"\>"+exppet+""+exppet2+"<\/div><\/div>";
stats=""+avatarname+""+avatar[nick]+"<BR><font color='red'><b>"+title1+": "+ phansonguyen +"</b></font><BR><div align='left'>"+title4+"EXP: <b>"+exp+"%</b>"+expss+"<b>"+title2+": "+ xp[nick]+aqsign+"</b><BR>"+"<b>"+title3+": "+xptogo+aqsign+"</b><BR><b>"+aqname+": "+aq[nick]+aqsign+"</b></div> "

if(x[y].innerHTML.match(/Choice/i)){
x[y].innerHTML +="<br><\span\ class\=\"\gensmall\"\><fieldset><legend><b><font size='2'>My Pet:</font></b></legend><BR>ban chua co thu nuoi<BR><BR>";}
else{x[y].innerHTML +="<br><\span\ class\=\"\gensmall\"\><fieldset><legend><b><font size='2'>My Pet:</font></b></legend><BR>" + stats+"<BR><BR>";}
}}
}
window.onload = init();