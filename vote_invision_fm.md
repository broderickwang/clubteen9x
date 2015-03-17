```

//Professional like/dislike bar. Copyright © 2011 by Dion Designs. All Rights Reserved.
$(function () {
$('#main-content').prepend('<style type="text/css">ul.post-info li.ddvote{height:20px;line-height:20px;background:#;font-size:12px;font-weight:bold;}

Unknown end tag for &lt;/style&gt;

');
var x = $('.vote').get();
for (i = x.length - 1; i >= 0; i--) {
var plus = '0';
var minus = '0';

var vplus = '<img style="position:relative;top:-3px;margin-right:3px" title="Like" src="http://i43.servimg.com/u/f43/17/43/09/69/like_n10.png" />';
var vminus = '<img style="margin:0px 3px 0px 10px" title="Dislike" src="http://i43.servimg.com/u/f43/17/43/09/69/dislik11.png" />';

var y = $(x[i]).find('.vote-button a').get();
for (j = 0; j < y.length; j++) {
if (y[j].innerHTML == '+') {
vplus = '<a href="' + y[j].href + '" alt="plus"><img style="position:relative;top:-3px;margin-right:3px" title="Like" src="http://i43.servimg.com/u/f43/17/43/09/69/like_b10.png" />

Unknown end tag for &lt;/a&gt;

';
} else if (y[j].innerHTML == '-') {
vminus = '<a href="' + y[j].href + '" alt="mplus"><img style="margin:0px 3px 0px 10px" title="Dislike" src="http://i43.servimg.com/u/f43/17/43/09/69/dislik10.png" />

Unknown end tag for &lt;/a&gt;

';
}
}
var y = $(x[i]).find('.vote-bar')[0];
if (y) {
var z = y.title.split(' ');
var pct = parseInt(z[3].replace(/%/, '')) / 100;
var num = parseInt(z[4].replace(/\(/, ''));
plus = String(Math.round(num * pct));
minus = String(num - plus);
}
$(x[i].parentNode.previousSibling.childNodes[0]).prepend('<li class="ddvote"> ' + vplus + '<span class="plus">' + plus + '

Unknown end tag for &lt;/span&gt;

' + vminus + '<span class="mplus">' + minus + ' 

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/li&gt;

');
x[i].parentNode.removeChild(x[i]);
}
var vietnam = 'Được Viết Bởi Notme - Fmvi group. Vui lòng không xóa dòng này';
var english= 'Copyright © 2011 by Notme - Fmvi group.Do not delete It.';
var z = $('.ddvote a').get();
for (g = 0; g < z.length; g++) {
$(".ddvote a:eq(" + g + ")").attr("target", "vote" + g);
$(".ddvote a:eq(" + g + ")").after('<iframe name="vote' + g + '" style="display:none"</iframe>');
$(".ddvote a:eq(" + g + ")").click(function () {

var a = $(this).attr("alt");
$(this).parent().find('.' + a).html(Number($(this).parent().find('.' + a).html()) + 1);

if ( a == 'plus'){
$(this).next().next().next().replaceWith('<img style="margin:0px 3px 0px 10px" title="Dislike" src="http://i43.servimg.com/u/f43/17/43/09/69/dislik11.png" />');
$(this).replaceWith('<img style="position:relative;top:-3px;margin-right:3px" title="Like" src="http://i43.servimg.com/u/f43/17/43/09/69/like_n10.png" />');

}else{

$(this).prev().prev().prev().replaceWith('<img style="position:relative;top:-3px;margin-right:3px" title="Like" src="http://i43.servimg.com/u/f43/17/43/09/69/like_n10.png" />');
$(this).replaceWith('<img style="margin:0px 3px 0px 10px" title="Dislike" src="http://i43.servimg.com/u/f43/17/43/09/69/dislik11.png" />');
}
});
}

});```