demo : ![http://i43.servimg.com/u/f43/15/93/33/76/anh_ch19.png](http://i43.servimg.com/u/f43/15/93/33/76/anh_ch19.png)



sau đây là cách làm :



Bước 1:
Quản lý người dùng & Quản lý nhóm --> Profiles --> Tạo một mục mới, điền thông tin như sau:
Type : List
Name : gender
Necessarily filled ? Có
Display : Tích hết
Display type : Text
Who can modify the profile field value ? Tích hết tiếp

Bước 2:
Modules --> HTML pages management --> Tạo một trang mới, cho code này vào:

```


function changeImg(){
x = document.getElementsByTagName('span')
for(i=0;i<x.length;i++){
if(window.onload != 'resize_images()'){
if ((x[i].style.color=="rgb(255, 255, 255)")||(x[i].style.color=="#ffffff")) {newHTML = "<img src=\"http://i977.photobucket.com/albums/ae260/bjusuc/Phu%20Nguyen/admin.gif\">" + "

Unknown end tag for &lt;/img&gt;

" + x[i].innerHTML}


else if((x[i].style.color=="rgb(0, 4, 255)")||(x[i].style.color=="#0004ff")) {newHTML = "<img src=\"http://i977.photobucket.com/albums/ae260/bjusuc/Phu%20Nguyen/member.gif\">" + "

Unknown end tag for &lt;/img&gt;

" + x[i].innerHTML}


else {newHTML= x[i].innerHTML}}
x[i].innerHTML = newHTML;
}
}

function init(){
dir="http://i292.photobucket.com/albums/mm30/huylordno1/pet/"
var avatarname=""
var title1="Level"
var title2="<img src='http://i25.servimg.com/u/f25/14/75/71/76/str-110.jpg' alt='strenght'>";
var title3="<img src='http://i25.servimg.com/u/f25/14/75/71/76/def-110.jpg' alt='defense'>";
var title4="<img src='http://i25.servimg.com/u/f25/14/75/71/76/exp-110.jpg'>";
var xperpost="8"
var xperexp="100"
var xperreptt="12"
var xpneeded="4390"
var aqname="<img src='http://i25.servimg.com/u/f25/14/75/71/76/int-110.jpg' alt='Intelligent'>";
var aqsign=" <img src='http://i25.servimg.com/u/f25/14/75/71/76/point-10.jpg' alt='point'>";
var aq=[];
var display=[];
var level=[];
var posts=[];
var repts=[];
var cts=[];
var firstchar=[];
var gendervn = new Array()
gendervn[0]="<img src='http://i1097.photobucket.com/albums/g342/lethanhton4r/avatar/boy/1.gif'>";
gendervn[1]="<img src='http://i1097.photobucket.com/albums/g342/lethanhton4r/avatar/boy/3.gif'>";
gendervn[2]="<img src='http://i1097.photobucket.com/albums/g342/lethanhton4r/avatar/boy/4.gif'>";
gendervn[3]="<img src='http://i1097.photobucket.com/albums/g342/lethanhton4r/avatar/boy/6.gif'>";
gendervn[4]="<img src='http://i1097.photobucket.com/albums/g342/lethanhton4r/avatar/boy/9.gif'>";
gendervn[5]="<img src='http://i1097.photobucket.com/albums/g342/lethanhton4r/avatar/boy/11.gif'>";
gendervn[6]="<img src='http://i1097.photobucket.com/albums/g342/lethanhton4r/avatar/boy/13.gif'>";
gendervn[7]="<img src='http://i1097.photobucket.com/albums/g342/lethanhton4r/avatar/boy/15.gif'>";
gendervn[8]="<img src='http://i1097.photobucket.com/albums/g342/lethanhton4r/avatar/boy/19.gif'>";
gendervn[9]="<img src='http://i1097.photobucket.com/albums/g342/lethanhton4r/avatar/boy/20.gif'>";

gendervn[10]="<img src='http://i1097.photobucket.com/albums/g342/lethanhton4r/avatar/girl/1.gif'>";
gendervn[11]="<img src='http://i1097.photobucket.com/albums/g342/lethanhton4r/avatar/girl/3.gif'>";
gendervn[12]="<img src='http://i1097.photobucket.com/albums/g342/lethanhton4r/avatar/girl/4.gif'>";
gendervn[13]="<img src='http://i1097.photobucket.com/albums/g342/lethanhton4r/avatar/girl/6.gif'>";
gendervn[14]="<img src='http://i1097.photobucket.com/albums/g342/lethanhton4r/avatar/girl/9.gif'>";
gendervn[15]="<img src='http://i1097.photobucket.com/albums/g342/lethanhton4r/avatar/girl/11.gif'>";
gendervn[16]="<img src='http://i1097.photobucket.com/albums/g342/lethanhton4r/avatar/girl/13.gif'>";
gendervn[17]="<img src='http://i1097.photobucket.com/albums/g342/lethanhton4r/avatar/girl/15.gif'>";
gendervn[18]="<img src='http://i1097.photobucket.com/albums/g342/lethanhton4r/avatar/girl/19.gif'>";
gendervn[19]="<img src='http://i1097.photobucket.com/albums/g342/lethanhton4r/avatar/girl/20.gif'>";
aqperpost="7"

x = document.getElementsByTagName('div')
for(y=0;y<x.length;y++)
{
if(x[y].className == "postprofile"){
nick= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
posts[nick]=parseInt(x[y].innerHTML.toLowerCase().split("posts

Unknown end tag for &lt;/span&gt;

: 

Unknown end tag for &lt;/span&gt;

")[1]);

nic= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
repts[nic]=parseInt(x[y].innerHTML.toLowerCase().split("points

Unknown end tag for &lt;/span&gt;

: 

Unknown end tag for &lt;/span&gt;

")[1]);

nict= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
cts[nict]=parseInt(x[y].innerHTML.toLowerCase().split("gender

Unknown end tag for &lt;/span&gt;

: 

Unknown end tag for &lt;/span&gt;

")[1]);

var levell=[];
var xp=[];
var firstchar=[];
xp[nick]=posts[nick]*xperpost+repts[nic]*xperreptt
level[nick]=(xp[nick]/xpneeded)
var exp = Math.floor((level[nick]-Math.floor(level[nick]))*xperexp)
var phansonguyen = Math.floor(level[nick]+parseInt(1));
var xptogo = Math.floor(level[nick]+parseInt(1))*xpneeded
firstchar[nick]=nick.charAt(0);

aq[nick]="YĂªu cáº§u vĂ o lĂ½ lá»‹ch cáº­p nháº­t giá»›i tĂ­nh (gender) cho mĂ¬nh"
aq[nick]=(aqperpost*posts[nick])


var avatar=[];
if (cts[nict] == 1) {
if (phansonguyen==1)
{avatar[nick]=gendervn[0]}
if (phansonguyen==2)
{avatar[nick]=gendervn[1]}
if (phansonguyen==3)
{avatar[nick]=gendervn[2]}
if (phansonguyen==4)
{avatar[nick]=gendervn[3]}
if (phansonguyen==5)
{avatar[nick]=gendervn[4]}
if (phansonguyen==6)
{avatar[nick]=gendervn[5]}
if (phansonguyen==7)
{avatar[nick]=gendervn[6]}
if (phansonguyen==8)
{avatar[nick]=gendervn[7]}
if (phansonguyen==9)
{avatar[nick]=gendervn[8]}
if (phansonguyen>=10)
{avatar[nick]=gendervn[9]}
}  else  {
if (cts[nict] == 2) {
if (phansonguyen==1)
{avatar[nick]=gendervn[10]}
if (phansonguyen==2)
{avatar[nick]=gendervn[11]}
if (phansonguyen==3)
{avatar[nick]=gendervn[12]}
if (phansonguyen==4)
{avatar[nick]=gendervn[13]}
if (phansonguyen==5)
{avatar[nick]=gendervn[14]}
if (phansonguyen==6)
{avatar[nick]=gendervn[15]}
if (phansonguyen==7)
{avatar[nick]=gendervn[16]}
if (phansonguyen==8)
{avatar[nick]=gendervn[17]}
if (phansonguyen==9)
{avatar[nick]=gendervn[18]}
if (phansonguyen>=10)
{avatar[nick]=gendervn[19]}
}
}
expgender="<img src='http://sinhvienit.net/@forum/images/rpg/blue.gif' width='"+exp+"%' height='9px'>";
expgender2="<img src='http://sinhvienit.net/@forum/images/rpg/exp.gif' width='2px' height='9px'>";
expss= "<div class='expbg'><div class='expbg2'><fieldset style='padding: 1px; border: #add8e6 1px solid;'>"+expgender+""+expgender2+"

Unknown end tag for &lt;/fieldset&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

";

stats=""+avatarname+""+avatar[nick]+"<BR><b>"+title1+": "+ phansonguyen +" (+"+exp+"%)

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/center&gt;

"+expss+""

if(x[y].innerHTML.match(/Choice/i)){
x[y].innerHTML +="<span class='gensmall'><fieldset>You do not have genders<fieldset>";}
else{x[y].innerHTML +="<span class='gensmall'><fieldset><center>" + stats+"

Unknown end tag for &lt;/fieldset&gt;

";}
}}
}
function start() {changeImg(); init();} window.onload = start();

```
Bước 3:
Display --> Quản Lý Tổng Thể --> overall\_footer, cho đoạn code này vào đầu hoặc cuối chi cũng ok hết:
Trong đó

```


<script type="text/javascript" src="Link trang HTML vừa tạo">

Unknown end tag for &lt;/script&gt;



```


Chèn code này vào vew topic body ( chèn chỗ nào muốn hiển thị )

```


<div class="postprofile" align="left"><span style="font-size:11px;font-family:Tahoma;font-weight:normal; display: none;">
<!-- BEGIN profile_field -->
{postrow.displayed.profile_field.LABEL}{postrow.displayed.profile_field.CONTENT}{postrow.displayed.profile_field.SEPARATOR}
<!-- END profile_field -->

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;




```

Bước 4:
Giờ bạn phải vào mục thông tin thành viên, cập nhật gender cho thành viên của mình, hoặc bảo mọi người vào lý lịch cập nhật
