![http://i46.servimg.com/u/f46/16/46/16/61/123.png](http://i46.servimg.com/u/f46/16/46/16/61/123.png)
```
var CopyrightNotice = 'Professional like/dislike bar for forumotion phpBB3 boards. Copyright © 2011 by Dion Designs. All Rights Reserved. Use and/or modification of this script is allowed, provided this entire copyright notice remains in the original or modified script. Distribution is not allowed without written consent from Dion Designs.';
$(function() {
$('#main-content').prepend('<style type="text/css">ul.profile-icons li.ddvote{height:20px;line-height:20px;background:#fff;color:#000;border:1px solid #a0b0c0;font-size:12px;font-weight:bold}ul.profile-icons li.ddvote a{display:inline}.postbody ul.profile-icons li.ddvote img{cursor:default;vertical-align:middle}.postbody ul.profile-icons li.ddvote a img{cursor:pointer}

Unknown end tag for &lt;/style&gt;

');
var x=$('.vote').get();
for (i=x.length-1; i>=0; i--) {
var plus='0';
var minus='0';

var vplus='<img style="position:relative;top:-3px;margin-right:3px" title="Like" src="URL for your +/Like image goes here" />';
var vminus='<img style="margin:0px 3px 0px 10px" title="Dislike" src="URL for your -/Dislike image goes here" />';

var y=$(x[i]).find('.vote-button a').get();
for (j=0; j<y.length; j++) {
if (y[j].innerHTML=='+') {vplus='<a href="'+y[j].href+'">'+vplus+'

Unknown end tag for &lt;/a&gt;

';}
else if (y[j].innerHTML=='-') {vminus='<a href="'+y[j].href+'">'+vminus+'

Unknown end tag for &lt;/a&gt;

';}
}
var y=$(x[i]).find('.vote-bar')[0];
if (y) {
var z=y.title.split(' ');
var pct=parseInt(z[3].replace(/%/,''))/100;
var num=parseInt(z[4].replace(/\(/,''));
plus=String(Math.round(num*pct));
minus=String(num-plus);
}
if (x[i].parentNode.parentNode.parentNode.className=='module row1') {
$(x[i].parentNode).find('.profile-icons').prepend('<li class="ddvote"> ' + vplus + plus + vminus + minus + ' <li>');
$(x[i].parentNode).find('.h3').css('border','none');
}
else {
$(x[i].parentNode.childNodes[0]).prepend('<li class="ddvote"> ' + vplus + plus + vminus + minus + ' <li>');
}
x[i].parentNode.removeChild(x[i]);
}
});```