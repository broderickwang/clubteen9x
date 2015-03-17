Bước đầu
Thanh lv thuận 007
B1: theo clip

Code: Chọn Code
> http://www.youtube.com/watch?v=JPrX5h27icg&feature=youtu.be&hd=1


B2: đoạn code cần dán vào view\_topic

```

<script type="text/javascript">
$(document).ready(function(){
$('#menu li p').animate({opacity:0});//ẩn thẻ p ban đâu đi
$('#menu li').hover(function(){
$(this).find('p').css('display','block').stop().an imate({
opacity:1},100);//định dạng hiện lên khi rê chuột
},function(){
$(this).find('p').css('display','none').stop().ani mate({
opacity:0},0);//cho ẩn khi biến out chuột
});
})


Unknown end tag for &lt;/script&gt;


<div id="menu">
<h2><color="red"><a>.†.Linh Thú.†.

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/color&gt;



Unknown end tag for &lt;/h2&gt;


<a>.†.Cấp Bậc.†.

Unknown end tag for &lt;/a&gt;


<div class="fmlevel" align="left">
<span style="font-size:11px;font-family:Tahoma;font-weight:normal; display: none;">
<!-- BEGIN profile_field -->
{postrow.displayed.profile_field.LABEL}{postrow.displayed.profile_field.CONTENT}{postrow.displayed.profile_field.SEPARATOR}
<!-- END profile_field -->
{postrow.displayed.POSTER_RPG}


Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;


<ul>
<li>=====================================
<p>{postrow.displayed.POSTER_RANK}<br><img src="http://1.bp.blogspot.com/-tW3-ghYEpLI/TspwDPdqLgI/AAAAAAAAAXk/VJtB9eP5DC8/s1600/black-018-loading-p.gif"width="150"height="20"/> 

Unknown end tag for &lt;/br&gt;



Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;

 

Unknown end tag for &lt;/div&gt;






<!--end#menu-->


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;



```
tiếp theo
bạn vào display-> quản lý tổng thể->viewtopic\_body
tìm doan code sau

```

<a target="_blank" onClick="javascript:alert('Đang phát triển')" class="Umoney"><img alt="Tài sản" src="http://i48.servimg.com/u/f48/16/58/89/73/table_10.png" />Tài sản

Unknown end tag for &lt;/a&gt;



```
chèn sau đó doan code trên vào .
B3:
Đoạn script

```

function A1level(){
dir="http://s832.photobucket.com/albums/zz244/a1tg3/boom/"
var ip="15"
var ie="100"
var ir="22"
var ine="20"
var maxm="8000"
var maxl=(ine*500)
var aq=[];
var level=[];
var posts=[];
var points=[];
var thanks=[];
var boom = new Array()
x = document.getElementsByTagName('div')
for(y=0;y<x.length;y++){
if(x[y].className == "fmlevel"){
z= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
a= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
tks= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
posts[z]=parseInt(x[y].innerHTML.toLowerCase().split("posts

Unknown end tag for &lt;/span&gt;

: 

Unknown end tag for &lt;/span&gt;

")[1]);
points[a]=parseInt(x[y].innerHTML.toLowerCase().split("points

Unknown end tag for &lt;/span&gt;

: 

Unknown end tag for &lt;/span&gt;

")[1]);
thanks[tks]=parseInt(x[y].innerHTML.toLowerCase().split("thanked

Unknown end tag for &lt;/span&gt;

: 

Unknown end tag for &lt;/span&gt;

")[1]);
if(points[a]>=0){
var xp=[];
var firstchar=[];
xp[z]=Math.floor(posts[z]*ip/10+(points[a]+thanks[tks]*4)*ir/10)
level[z]=(xp[z]/ine)
var exp = Math.floor((level[z]-Math.floor(level[z]))*ie)
var nol = Math.floor(level[z]+parseInt(1));
var title1="Level"
if (nol > 450){(nol = "450")&&(exp = "99")&&(title1="Max-Level")}
var width=(exp-5)
var mag = "100"
if(xp[z]>0){mag = Math.floor(thanks[tks]*19+posts[z]*2+points[a])}
var mperc = (Math.floor((mag/maxm)*100)-6)
if(mag > maxm) {(mag = maxm)&&(mperc = "94")}
var lperc = (Math.floor((xp[z]/maxl)*100)-6)
if(xp[z] > maxl) {(xp[z]= maxl)&&(lperc = "94")}
aq[z]="Unknown"
var medal=[];
var i=1;
while (i>0){
if (nol==i){
boom[i]="<img src='"+dir+"exp_medal_"+i+".gif'>";
medal[z]=boom[i];i=0;} else{i++;}
}
stats="<div align='center'><div valign='bottom' align='left' style='width: 127px;color: gray;font-size: 7pt;'><font style='color: #333;font-size:11px;'>"+title1+": 

Unknown end tag for &lt;/font&gt;

<font style='color: crimson;'><b>"+ nol +"

Unknown end tag for &lt;/b&gt;

  

Unknown end tag for &lt;/font&gt;

<font color='red' style='font-size: 12px'><b> ¤"+medal[z]+"¤

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/font&gt;

<br>Life: "+ xp[z]+" / "+maxl+"<div class='levelbg'><img src='/users/2211/12/43/96/album/orange10.gif' width='"+lperc+"%' height='9px'><img src='/users/2211/12/43/96/album/hp1010.gif' width='2px' height='9px'>

Unknown end tag for &lt;/div&gt;

Magic: " +mag+" / "+maxm+"<div class='levelbg'><img src='/users/2211/12/43/96/album/green110.gif' width='"+mperc+"%' height='9px'><img src='/users/2211/12/43/96/album/mp1010.gif' width='2px' height='9px'>

Unknown end tag for &lt;/div&gt;

Experience: "+exp+"%<div class='levelbg'><img src='/users/2211/12/43/96/album/blue10.gif' width='"+width+"%' height='9px'><img src='/users/2211/12/43/96/album/exp1010.gif' width='2px' height='9px'>

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

 "
x[y].innerHTML +="<span class='gensmall'>" + stats} else{x[y].innerHTML +="<font color=red><br><br><b>Unknown ("+points[a]+" points)

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/font&gt;

"}}}
}
A1level();

```

đoạn css

```

.levelbg{line-height: 13px;background: url(/users/2211/12/43/96/album/levelc10.png) no-repeat;width: 120px; height: 13px;padding-top: 2px;padding-left: 2px;}
```


đây là link tải

Code: Chọn Code
> http://www.mediafire.com/?4kldm5bno9578fb



Unknown end tag for &lt;/code&gt;



Demo:

```

http://camxucfan9x.one-forum.net/t468-topic```



Member
Bài viết Bài viết: 68
Thanks Thanks: 90
bước tiếp theo
Thanh lv Hình nguời đã share.
Demo:

```

http://camxucfan9x.one-forum.net/t468-topic
```

Cái này mình làm lâu rồi nhưng giờ mới share là bởi vì đầu tiên làm xong lỡ tay mã hoá hết cả rồi một hôm qua rum của cuncon có thấy anh hai rip được nên mình view từ trang đấy ra cười nhăn răng
Hi vọng mọi người không chê mình, thiết kế chỉ là theo anh Thuận thôi đồng ý hai tay
Nhược là không theo giới tính từng bạn nháy mắt
Đầu tiên vào ACP - User & Group\profile:
Bạn nào làm theo tut của anh Thuận sẽ đổi bài gửi thành point nhưng mình thì để nguyên nhá hi hi
Thanked thành Thanks
và Points thành Điểm
Tạo một trang HTML chèn code sau vào

```

function svrank(){
dir="http://i1097.photobucket.com/albums/g342/lethanhton4r/avatar/boy/"
var xperpost="15"
var xperexp="65"
var xperreptt="45"
var xpneeded="20"
var maxability="8000"
var maxstrength=(xpneeded*800)
var aq=[];
var level=[];
var posts=[];
var repts=[];
var ability=[];
var cts=[];
var firstchar=[];
var boom = new Array()
boom[0]="<img src='"+dir+"0.gif'><br>Vỡ Lòng";
boom[1]="<img src='"+dir+"1.gif'><br>Vỡ Lòng";
boom[2]="<img src='"+dir+"2.gif'> <br>Tập sự";
boom[3]="<img src='"+dir+"3.gif'> <br>Nâng Cao";
boom[4]="<img src='"+dir+"4.gif'> <br>Đường Phố";
boom[5]="<img src='"+dir+"5.gif'> <br>Nghệp Dư";
boom[6]="<img src='"+dir+"6.gif'> <br>Huấn Luyện";
boom[7]="<img src='"+dir+"7.gif'> <br>Chuyên Nghiệp";
boom[8]="<img src='"+dir+"8.gif'> <br>Đẳng Cấp";
boom[9]="<img src='"+dir+"9.gif'> <br>Ưu Tú";
boom[10]="<img src='"+dir+"10.gif'> <br>Bậc thầy";
boom[11]="<img src='"+dir+"11.gif'> <br>Siêu Sao";
boom[12]="<img src='"+dir+"12.gif'> <br>Huyền Thoại";
boom[13]="<img src='"+dir+"13.gif'> <br>Vũ Thần";
boom[14]="<img src='"+dir+"14.gif'> <br>Tinh Anh";
boom[15]="<img src='"+dir+"15.gif'> <br>Xuất Chúng";
boom[16]="<img src='"+dir+"16.gif'> <br>Đỉnh Cao";
boom[17]="<img src='"+dir+"17.gif'> <br>Vĩ Đại";
boom[18]="<img src='"+dir+"18.gif'> <br>Thiên Tài";
boom[19]="<img src='"+dir+"19.gif'> <br>Siêu Cấp";
boom[20]="<img src='"+dir+"20.gif'> <br>Chén Thánh ";
x = document.getElementsByTagName('div')
for(y=0;y<x.length;y++){
if(x[y].className == "huongcoolteen9b"){
nick= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
nic= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
nict= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
tks= x[y].parentNode.parentNode.parentNode.getElementsByTagName("A")[0].innerHTML;
cts[nict]=parseInt(x[y].innerHTML.toLowerCase().split("pet

Unknown end tag for &lt;/span&gt;

: 

Unknown end tag for &lt;/span&gt;

")[1]);
posts[nick]=parseInt(x[y].innerHTML.toLowerCase().split("bài gửi

Unknown end tag for &lt;/span&gt;

: 

Unknown end tag for &lt;/span&gt;

")[1]);
repts[nic]=parseInt(x[y].innerHTML.toLowerCase().split("điểm

Unknown end tag for &lt;/span&gt;

: 

Unknown end tag for &lt;/span&gt;

")[1]);
ability[tks]=parseInt(x[y].innerHTML.toLowerCase().split("thank

Unknown end tag for &lt;/span&gt;

: 

Unknown end tag for &lt;/span&gt;

")[1]);
if(repts[nic]>=0){var levell=[];
var xp=[];
var firstchar=[];
xp[nick]=Math.floor(posts[nick]*xperpost/1000+(repts[nic]+ability[tks]*4)*xperreptt/1000)
level[nick]=(xp[nick]/xpneeded)
var exp = Math.floor((level[nick]-Math.floor(level[nick]))*xperexp)
var phansonguyen = Math.floor(level[nick]+parseInt(1));
var title1=""
if (phansonguyen > 20){(phansonguyen = "20")&&(exp = "99")&&(title1="")}

var width=(exp-1)
var xptogo = "10000"
if(xp[nick]>0){xptogo = Math.floor(ability[tks]*1900+posts[nick]*2+repts[nic])}
var abilityperc = (Math.floor((xptogo/maxability)*1000)-2)
if(xptogo > maxability) {(xptogo = maxability)&&(abilityperc = "9800")}
var strengthperc = (Math.floor((xp[nick]/maxstrength)*1000)-2)
if(xp[nick] > maxstrength) {(xp[nick]= maxstrength)&&(strengthperc = "98")}
firstchar[nick]=nick.charAt(0);
aq[nick]="Unknown"
var medal=[];
var i=1;
while (i>0){
if (phansonguyen==i){
boom[0]="<img src='"+dir+"0.gif'><br>Vỡ Lòng";
boom[1]="<img src='"+dir+"1.gif'><br>Vỡ Lòng";
boom[2]="<img src='"+dir+"2.gif'> <br>Tập sự";
boom[3]="<img src='"+dir+"3.gif'> <br>Nâng Cao";
boom[4]="<img src='"+dir+"4.gif'> <br>Đường Phố";
boom[5]="<img src='"+dir+"5.gif'> <br>Nghệp Dư";
boom[6]="<img src='"+dir+"6.gif'> <br>Huấn Luyện";
boom[7]="<img src='"+dir+"7.gif'> <br>Chuyên Nghiệp";
boom[8]="<img src='"+dir+"8.gif'> <br>Đẳng Cấp";
boom[9]="<img src='"+dir+"9.gif'> <br>Ưu Tú";
boom[10]="<img src='"+dir+"10.gif'> <br>Bậc thầy";
boom[11]="<img src='"+dir+"11.gif'> <br>Siêu Sao";
boom[12]="<img src='"+dir+"12.gif'> <br>Huyền Thoại";
boom[13]="<img src='"+dir+"13.gif'> <br>Vũ Thần";
boom[14]="<img src='"+dir+"14.gif'> <br>Tinh Anh";
boom[15]="<img src='"+dir+"15.gif'> <br>Xuất Chúng";
boom[16]="<img src='"+dir+"16.gif'> <br>Đỉnh Cao";
boom[17]="<img src='"+dir+"17.gif'> <br>Vĩ Đại";
boom[18]="<img src='"+dir+"18.gif'> <br>Thiên Tài";
boom[19]="<img src='"+dir+"19.gif'> <br>Siêu Cấp";
boom[20]="<img src='"+dir+"20.gif'> <br>Siêu Cấp";
medal[nick]=boom[i];i=0;} else{i++;}
}
exppet="<img src='http://sinhvienit.net/@forum/images/rpg/blue.gif' width='"+width+"%' height='7px'>";
exppet2="<img src='http://sinhvienit.net/@forum/images/rpg/exp.gif' width='2px' height='7px'>";
expss= "<div class='expbg'><div class='expbg2'><fieldset style='padding: 1px; border: #776b6a 1px solid;'>"+exppet+""+exppet2+"

Unknown end tag for &lt;/fieldset&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

";

stats="<div align='left'><table cellpadding='0' cellspacing='0' width='100'><tr><td width='150'><fieldset style='padding: 5px 7px 3px 5px; border: #776b6a 1px dashed;-moz-border-radius: 4px; border-radius: 2px;'>"+title1+"<div valign='bottom' style='padding: 3px;'><font color='red' style='font-size: 12px'><b><center>"+medal[nick]+"

Unknown end tag for &lt;/center&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/font&gt;

<font color='blue' size: 10px'><b> Level: "+ phansonguyen +"<br> Experience: "+exp+"%

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/font&gt;

"+expss+"

Unknown end tag for &lt;/fieldset&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/fieldset&gt;



Unknown end tag for &lt;/div&gt;

 "
x[y].innerHTML +="<span class='gensmall'>" + stats} else{x[y].innerHTML +="<font color=red><br><br><b>Unknown ("+repts[nic]+" points)

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/font&gt;

"}}}
}
svrank();

```

Nhớ trang HTML đó rồi nhảy qua footer chèn cái này

```

<script src="link trang HTML">

Unknown end tag for &lt;/script&gt;


```

Vào viewtopic chèn vào nơi muốn hiển thị code này
tìm code sau

```

<p class="rankimg" style="padding:11px">{postrow.displayed.RANK_IMAGE}

Unknown end tag for &lt;/p&gt;


```

chèn doạn code vào sau đó.

```

<!--  THANH LEVEL HINH NGUOI -->
<div class="levelhinhnguoi" align="left">
<span style="font-size:11px;font-family:Tahoma;font-weight:normal; display: none;">
<!-- BEGIN profile_field -->
{postrow.displayed.profile_field.LABEL}
{postrow.displayed.profile_field.CONTENT}
{postrow.displayed.profile_field.SEPARATOR}
<!-- END profile_field -->
{postrow.displayed.POSTER_RPG}


Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;


<!--  THANH LEVEL HINH NGUOI-->

```

Chúc thành công đồng ý hai tay
Gặp lỗi bạn reply để mình kịp thời chỉnh sửa nhá :">
còn tiếp

thú nuôi online

như mình đã nói thì cái thú nuôi online này dựa trên cấp bậc của thành viên trong điễn dàn và nó có liên kết với thanh lv của thuận các bạn chỉ làm thế rank cho thành viên thôi .
b1: bạn vào quản lý người dùng và quản lý nhóm-> cấp bậc(rank) thêm code sau vào trên tiêu đề rank

Code: Chọn Code
> ```
†Rồng bấtTử†[Admin]<img src="http://i48.servimg.com/u/f48/14/28/30/23/rong_b10.jpg"width="150">
```

bạn phân thú online theo đúng cấp bậc nhé có thể theo như sau:


![http://i43.servimg.com/u/f43/16/63/20/21/tha_lv10.jpg](http://i43.servimg.com/u/f43/16/63/20/21/tha_lv10.jpg)