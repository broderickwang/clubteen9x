B1: Profile ~~> vào phần Giới tính~~

![http://i41.servimg.com/u/f41/14/31/98/91/untitl13.jpg](http://i41.servimg.com/u/f41/14/31/98/91/untitl13.jpg)



Các bạn để ý 2 dòng đó rồi thay vào 2 dòng ở dưới code đây

```

function c3rank(a, b, c) {
up = 60;
cong = 0;
ten = '';
style = 0;
gt = a;
sex = 'boy/';
if (c.indexOf('|') != -1) {
cat = c.split('|');
if (!isNaN(parseInt(cat[0]))) cong = parseInt(cat[0]);
if (cat[1] != '') ten = '<legend>' + cat[1] + '

Unknown end tag for &lt;/legend&gt;

';
if (!isNaN(parseInt(cat[2])) && cat[2] == '1') {
if (gt.indexOf('Nam') == -1) gt = '<img src="THAY LINK ẢNH 1" alt="Nam" title="Nam">';
else gt = '<img src="THAY LINK ẢNH 2" alt="N\u1EEF" title="N\u1EEF">'
}
if (!isNaN(parseInt(cat[3]))) style = parseInt(cat[3])
}
lv = Math.ceil(b / up) + cong;
exp = Math.round(100 / up * (b % up));
if (gt.indexOf('Nam') == -1) sex = 'girl/';
if (lv > 20) {
lv = 20;
exp = 99
}
document.write('<fieldset align="center" class="c3level">' + ten + '<div class="memchar" style="background-image:url(http://i264.photobucket.com/albums/ii175/kalenv/character/' + sex + lv + '.gif)">

Unknown end tag for &lt;/div&gt;

<div align="center" style="width:120px">' + gt + ' Level: ' + lv + ' (+' + exp + '%)<fieldset class="c3zchar' + style + '" onmouseover="showtip('Exp: ' + exp + '%');" onmouseout="hidetip();"><img src="/users/2611/10/63/87/album/lv1' + style + '.gif" width="' + exp + '%" height="9px"><img src="/users/2611/10/63/87/album/lv21' + style + '.gif" width="2px" height="9px">

Unknown end tag for &lt;/fieldset&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/fieldset&gt;

');

};
```

B3: Lấy đoạn code này vào Javascript codes management
Title: Level LTS
Placement: In the topics
![http://i41.servimg.com/u/f41/14/31/98/91/demo1_11.jpg](http://i41.servimg.com/u/f41/14/31/98/91/demo1_11.jpg)
B4: Đặt vào chỗ nào mún hiện
Trả lời để thấy code
```


<script
type="text/javascript">c3rank('{postrow.displayed.POSTER_GENDER}',{postrow.displayed.POSTER_POSTS},'|{postrow.displayed.POSTER_HOBBIES}|')

Unknown end tag for &lt;/script&gt;

```