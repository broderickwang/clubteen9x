![http://i46.servimg.com/u/f46/16/96/29/15/level10.png](http://i46.servimg.com/u/f46/16/96/29/15/level10.png)

online demo:
http://a1friend.co.cc/t480-topic#2048


hướng dẫn
Làm tương tự các bước như thanh level của thuan007
tức ngắn gọn là:

1. Chỉnh 3 mục trong mục profile:
Spoiler:
ACP> Ql nhóm và người dùng> QLy người dùng> Profiles
- tổng bài gửi > posts
- điểm> points
- reputation> thanked
Trong phần Points system và Reputation của Modules chỉnh như hình:

![http://ne2.upanh.com/b6.s3.d3/6f6302646882d6416fd2dd505a72d16c_37275472.1.png](http://ne2.upanh.com/b6.s3.d3/6f6302646882d6416fd2dd505a72d16c_37275472.1.png)


![http://ne6.upanh.com/b5.s17.d2/40b57ac2f776d76dcef5cb8dfc0bc033_37275506.2.png](http://ne6.upanh.com/b5.s17.d2/40b57ac2f776d76dcef5cb8dfc0bc033_37275506.2.png)


2. tạo 1 HTML với nội dung sau:
Spoiler:

- ACP> Module> HTML & Javascripts> HTML
- tạo 1 trang HTML và chèn codes sau vào rùi lấy link
```

function A1level(){
var ip="15"
var ie="100"
var ir="22"
var ine="19"
var maxm="15000"
var maxl=(ine*500)
var aq=[];
var level=[];
var posts=[];
var points=[];
var thanks=[];
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
xp[z]=Math.floor(posts[z]*ip/10+(thanks[tks]*4)*ir/10)
level[z]=(xp[z]/ine)
var exp = Math.floor((level[z]-Math.floor(level[z]))*ie)
var nol = Math.floor(level[z]+parseInt(1));
var mtmy= Math.floor(100-exp);
var title1="Level"
if (nol > 100){(nol = "100")&&(exp = "99")&&(title1="Max-Level")}
var width=(exp-5)

if(xp[z]>0){mag = Math.floor(points[a])}
var mperc = (Math.floor((mag/maxm)*100)-6)
if(mag > maxm) {(mag = maxm)&&(mperc = "94")}
var lperc = (Math.floor((xp[z]/maxl)*100)-6)
if(xp[z] > maxl) {(xp[z]= maxl)&&(lperc = "94")}
aq[z]="Unknown"
var i=1;
stats="<div align='center'><div valign='bottom' align='left' style='width: 130px;color: blue;font-size: 7pt;'><font style='font-color:#37f;font-size:11px;'><b>"+title1+":

Unknown end tag for &lt;/b&gt;

 

Unknown end tag for &lt;/font&gt;

<font style='color: crimson;'><b>"+ nol +"

Unknown end tag for &lt;/b&gt;

  

Unknown end tag for &lt;/font&gt;

(+"+exp+"%)<div class='levelbg'><img src='/users/2211/12/43/96/album/blue10.gif' width='"+width+"%' height='9px'><img src='/users/2211/12/43/96/album/exp1010.gif' width='2px' height='9px'>

Unknown end tag for &lt;/div&gt;

<b>SP: " +mag+" / "+maxm+"

Unknown end tag for &lt;/b&gt;

<div class='levelbg'><img src='/users/2211/12/43/96/album/green110.gif' width='"+mperc+"%' height='9px'><img src='/users/2211/12/43/96/album/mp1010.gif' width='2px' height='9px'>

Unknown end tag for &lt;/div&gt;

<font style='color: crimson;'>Còn "+mtmy+" % lên cấp tiếp theo.

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

 "
x[y].innerHTML +="<span class='gensmall'>" + stats} else{x[y].innerHTML +="<font color=red><br><br><b>Ăn Xin : ("+points[a]+" points)

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/font&gt;

"}}}
}
A1level();
```

3. Chèn vào overall\_footer đoạn code và thay link HTML vừa tạo:
Spoiler:
```

<script src="link trang HTML">

Unknown end tag for &lt;/script&gt;


```

4. Chèn code hiển thị thanh level

chèn vào chỗ tùy ý trong viewtopic\_body:
```

<div class="fmlevel" align="left">
<span style="font-size:11px;font-family:Tahoma;font-weight:normal; display: none;">
<!-- BEGIN profile_field -->
{postrow.displayed.profile_field.LABEL}{postrow.displayed.profile_field.CONTENT}{postrow.displayed.profile_field.SEPARATOR}
<!-- END profile_field -->
{postrow.displayed.POSTER_RPG}


Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;



```
5. Chèn thêm code sau vào css:
```

- ACP> Display> Colors & Pics> Colors> CSS
- chèn vào cuối css cho tiện
Code:CHỌN TOÀN BỘ
.levelbg{line-height: 13px;background: url(http://i46.servimg.com/u/f46/16/96/29/15/levelc10.png) no-repeat;width: 120px; height: 13px;padding-top: 2px;padding-left: 2px;}

```