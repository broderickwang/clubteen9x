ACP> Display>
Templates> Overall\_header

tìm đoạn sau:
```

<!-- BEGIN
switch_logo_left -->
<td><a
href="{U_INDEX}"><img src="{LOGO}" id="i_logo" border="0"
alt="{L_INDEX}" vspace="1" />

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;



<!-- END switch_logo_left -->
<td
align="center" width="100%" valign="middle">

<!-- BEGIN switch_logo_center -->
<a
href="{U_INDEX}"><img src="{LOGO}" id="i_logo" border="0"
alt="{L_INDEX}" vspace="1" />

Unknown end tag for &lt;/a&gt;





<!-- END switch_logo_center -->

<div class="maintitle">{MAIN_SITENAME}

Unknown end tag for &lt;/div&gt;





<span
class="gen">{SITE_DESCRIPTION}


Unknown end tag for &lt;/span&gt;





Unknown end tag for &lt;/td&gt;


<!-- BEGIN switch_logo_right
-->
<td><a href="{U_INDEX}"><img
src="{LOGO}" id="i_logo" border="0" alt="{L_INDEX}" vspace="1"
/>

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;


<!-- END
switch_logo_right -->
```

thay
bằng đoạn:
```

<td>
<!-- logo -->
<center><script
type="text/javascript" language="JavaScript">
var xoxo = new
Array(5);
xoxo[0] = '<img
src="http://i61.servimg.com/u/f61/13/61/26/37/1p10.jpg" width="830"
border=0 alt="4ALL - mái nhà tình bạn">

Unknown end tag for &lt;/a&gt;

';
xoxo[1] =
'<img src="http://i61.servimg.com/u/f61/13/61/26/37/8_310.jpg"
width="830"  border=0 alt="4ALL - mái nhà tình bạn">

Unknown end tag for &lt;/a&gt;

';
xoxo[2]
= '<img src="http://i61.servimg.com/u/f61/13/61/26/37/1p10.jpg"
width="830"  border=0 alt="4ALL - mái nhà tình bạn">

Unknown end tag for &lt;/a&gt;

';
xoxo[3]
= '<img src="http://i61.servimg.com/u/f61/13/61/26/37/8_310.jpg"
width="830"  border=0 alt="4ALL - mái nhà tình bạn">

Unknown end tag for &lt;/a&gt;

';
xoxo[4]
= '<img src="http://i61.servimg.com/u/f61/13/61/26/37/mntb10.png"
width="830"  border=0 alt="4ALL - mái nhà tình bạn">

Unknown end tag for &lt;/a&gt;

';


function
pickRandom(range)
{ if (Math.random) return Math.round(Math.random()
* (range-1)); else { var now = new Date(); return (now.getTime() /
1000) % range; } }
var choice = pickRandom(5);


Unknown end tag for &lt;/script&gt;



<table border="0" width="830" cellpadding="0" cellspacing="0"
align="center">
<tr><td
align="center"><script  type="text/javascript"
language="JavaScript">document.write(xoxo[choice]);

Unknown end tag for &lt;/script&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;





Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/center&gt;


<!-- /logo
-->

Unknown end tag for &lt;/td&gt;



```

lưu ý:
trong đó cái khúc codes để cho banner
chuyển mỗi lần F5
là lấy từ skin Hoa và Bướm ra.
- bạn thay link
ảnh của 4ALL bằng những link ảnh của bạn.
- bạn cũng có thể thay bằng
flash khác tùy ý.

```

<!-- logo -->
<center><script
type="text/javascript" language="JavaScript">
var xoxo = new
Array(5);
xoxo[0] = '<img
src="http://i61.servimg.com/u/f61/13/61/26/37/1p10.jpg" width="830"
border=0 alt="4ALL - mái nhà tình bạn">

Unknown end tag for &lt;/a&gt;

';
xoxo[1] =
'<img src="http://i61.servimg.com/u/f61/13/61/26/37/8_310.jpg"
width="830"  border=0 alt="4ALL - mái nhà tình bạn">

Unknown end tag for &lt;/a&gt;

';
xoxo[2]
= '<img src="http://i61.servimg.com/u/f61/13/61/26/37/1p10.jpg"
width="830"  border=0 alt="4ALL - mái nhà tình bạn">

Unknown end tag for &lt;/a&gt;

';
xoxo[3]
= '<img src="http://i61.servimg.com/u/f61/13/61/26/37/8_310.jpg"
width="830"  border=0 alt="4ALL - mái nhà tình bạn">

Unknown end tag for &lt;/a&gt;

';
xoxo[4]
= '<img src="http://i61.servimg.com/u/f61/13/61/26/37/mntb10.png"
width="830"  border=0 alt="4ALL - mái nhà tình bạn">

Unknown end tag for &lt;/a&gt;

';


function
pickRandom(range)
{ if (Math.random) return Math.round(Math.random()
* (range-1)); else { var now = new Date(); return (now.getTime() /
1000) % range; } }
var choice = pickRandom(5);


Unknown end tag for &lt;/script&gt;



<table border="0" width="830" cellpadding="0" cellspacing="0"
align="center">
<tr><td
align="center"><script  type="text/javascript"
language="JavaScript">document.write(xoxo[choice]);

Unknown end tag for &lt;/script&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;





Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/center&gt;


<!-- /logo -->
```