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
if (gt.indexOf('Nam') == -1) gt = '<img src="http://illiweb.com/fa/icon_gender_male.gif" alt="Nam" title="Nam">';
else gt = '<img src="http://illiweb.com/fa/icon_gender_female.gif" alt="N\u1EEF" title="N\u1EEF">'
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
if (zdy) document.write('<fieldset align="center" class="c3level">' + ten + '<div class="memchar" h="background-image:url(http://i264.photobucket.com/albums/ii175/kalenv/character/' + I + lv + '.gif)">

Unknown end tag for &lt;/div&gt;

<div align="center" style="width:120px">' + gt + ' Level: ' + lv + ' (+' + exp + '%)<fieldset class="c3zchar' + style + '" onmouseover="showtip(\'Exp: ' + exp + '%\');" onmouseout="hidetip();"><img src="/users/2611/10/63/87/album/lv1' + style + '.gif" width="' + exp + '%" height="9px"><img src="/users/2611/10/63/87/album/lv21' + style + '.gif" width="2px" height="9px">

Unknown end tag for &lt;/fieldset&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/fieldset&gt;

');
else document.write('<img src="/users/2315/72/47/45/album/logo110.png" />')
};


function chvote(p, v) {
if (v == "Message not voted" || !zdy) v = "c3zone z vietk 0% (0 vote)";
var a = parseInt(v.split(" ")[3], 10) / 100;
var b = parseInt(v.split(" ")[4].substr(1), 10);
if (p == 'p') a = (a * b + 1) / (b + 1);
else a = a * b / (b + 1);
v = "Message reputation : " + Math.round(a * 100) + "% (" + (b + 1) + " vote)";
return votetrans(v)
}

function votetrans(v) {
if (v == "Message not voted" || !zdy) return '<span class=qua>B\xE0i vi\u1EBFt ch\u01B0a \u0111\u01B0\u1EE3c vote

Unknown end tag for &lt;/span&gt;

';
var a = parseInt(v.split(" ")[3], 10) / 100;
var b = parseInt(v.split(" ")[4].substr(1), 10);
return '<span class=no>' + ((a != 0) ? '<span class=vop>' + Math.round(a * b) + '+

Unknown end tag for &lt;/span&gt;

' : '') + ((a != 0 && a != 1) ? ' <span style="color:#C2D5E3">|

Unknown end tag for &lt;/span&gt;

 ' : '') + ((a != 1) ? '<span class=vom>' + Math.round(b - a * b) + '-

Unknown end tag for &lt;/span&gt;

' : '') + '

Unknown end tag for &lt;/span&gt;

 <span class=qua>\u0110\xE1nh gi\xE1: ' + Math.round(a * 100) + '%

Unknown end tag for &lt;/span&gt;

'
}```