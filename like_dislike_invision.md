![http://i15.servimg.com/u/f15/17/70/31/89/ifc610.png](http://i15.servimg.com/u/f15/17/70/31/89/ifc610.png)

Cái đánh giá đấy mình tính linh tinh đấy Mắc cỡ Điên rồi
Cái này dạo lâu lâu từ hồi IFC mới thành lập hình như có bạn nào nhờ rồi... mà quên mất Ối mẹ ối
hôm qua em tuấn nhờ mới nhớ ra Điên rồi
Cái này không phải ajax, chức năng chả có gì đặc biệt....
chẳng qua là làm giả cái style cho nó giống với mấy bạn yêu cầu thôi Điên rồi
Ai thích thì làm Smile



Tạo js, nhét cái này vào:

```


$(function () {
var b = $(".vote").get();
for(i = b.length - 1; 0 <= i; i--) {
var c = "0",
d = "0",
e = '',
f = '',
a = $(b[i]).find(".vote-button a").get();
for(j = 0; j < a.length; j++) {
"+" == a[j].innerHTML ? e = ' <div class="vote vote-button"><a href="' + a[j].href + '" alt="plus" alt="iplus" class="iplus lvote"><span style="margin-left: -2px; color: #3B5998;">Like

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/div&gt;

' : "-" == a[j].innerHTML && (f = '<div class="vote vote-button"><a href="' + a[j].href + '" alt="minus" class="iminus lvote"><span style="margin-left: -2px; color: #3B5998;">Dislike

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/div&gt;

')
}
if(a = $(b[i]).find(".vote-bar")[0]) {
c = a.title.split(" "), d = parseInt(c[3].replace(/%/, "")) / 100, a = parseInt(c[4].replace(/\(/, "")), c = String(Math.round(a * d)), d = String(a - c);
a = (c - d) / a * 100
}
$(b[i].parentNode.parentNode.parentNode.nextSibling.childNodes[1]).prepend('<li class="ddvote"><div class="loadding" style="display: none "><img src="http: //i43.servimg.com/u/f43/16/03/04/56/icon_l12.gif"> Chờ chút nhé ^^! 

Unknown end tag for &lt;/div&gt;

 ' + e + '' + f + '       <span class="ivau" style="display: inline; opacity: 1;"><span class="no"><span class="vop"><span class="plus">' + c + '

Unknown end tag for &lt;/span&gt;

 +

Unknown end tag for &lt;/span&gt;

 <span style="color:#C2D5E3">|

Unknown end tag for &lt;/span&gt;

 <span class="vom"><span class="minus">' + d + '

Unknown end tag for &lt;/span&gt;

 -

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;

 <span class="qua">Đánh giá: <span class="qu">' + a + "

Unknown end tag for &lt;/span&gt;

% 

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;

      

Unknown end tag for &lt;/li&gt;

");
b[i].parentNode.removeChild(b[i])
}
c = $(".ddvote a").get();
for(g = 0; g < c.length; g++) {
b = $(".ddvote a:eq(" + g + ")").attr("href"), $(".ddvote a:eq(" + g + ")").attr("href", "javascript:$.post('" + b + "')"), $(".ddvote a:eq(" + g + ")").click(function () {
var a = $(this).attr("alt");
$(this).parent().parent().fadeOut(1000);
$(this).parent().parent().find(".loading").show(1000);
$(this).parent().parent().find(".loading").fadeOut(1000);
$(this).parent().parent().fadeIn(1000);
$(this).parent().parent().children('.ivau').children('.no').find("." + a).html(Number($(this).parent().parent().find("." + a).html()) + 1);
var c = Number($(this).parent().parent().find(".plus").html()),
d = Number($(this).parent().parent().find(".minus").html());
$(this).parent().parent().find(".qu").html(100 * (c - d) / (c + d));
"plus" == a ? ($(this).parent().next().remove(), $(this).remove()) : ($(this).parent().prev().remove(), $(this).remove())
})
}
});

```
Nhét vào CSS:

```


.ivau .qua,.no,.ost,.share{background-position:5px 50%;background-repeat:no-repeat;border:1px solid #C2D5E3!important;margin:6px 2px 0;padding:5px 8px 5px 25px}
.share{background-image:url(http://i43.servimg.com/u/f43/16/03/04/56/fav10.png)}
.qua{background-image:url(http://i43.servimg.com/u/f43/16/03/04/56/no10.gif);padding-left:31px!important}
.no{padding:5px 8px}
.no .vop{background:url(http://i42.servimg.com/u/f42/17/92/41/65/discou10.png) no-repeat left center;padding:0 0 0 18px}
.no .vom{background:url(http://i42.servimg.com/u/f42/17/92/41/65/discou11.png) no-repeat left center;padding:0 0 0 18px}
.vote-button{float:left;width:60px}
.iplus{background:url(http://i42.servimg.com/u/f42/17/92/41/65/discou10.png) no-repeat scroll 0 0 #E0E0E0;background-position:6px 36%;background-repeat:no-repeat;border:1px solid #E0E0E0;border-radius:3px 3px 3px 3px;color:#fff!important;display:block;float:left;height:13px;position:relative;text-align:left;width:25px;margin:-4px 2px 0;padding:4px 4px 5px 24px}
.iminus{background:url(http://i42.servimg.com/u/f42/17/92/41/65/discou11.png) no-repeat scroll #E0E0E0;background-position:6px 36%;background-repeat:no-repeat;border:1px solid #CAD4E7;border-radius:3px 3px 3px 3px;color:#fff!important;display:block;float:left;height:13px;position:relative;text-align:left;width:45px;margin:-4px 0 0;padding:4px 4px 5px 24px}
.iplus:hover,.iminus:hover{background-color:#ebedf4;border-color:#9dacce}
.plus,.minus,.qu{font-weight:700;font-size:12px}
.plus{color:green}.minus{color:red}.qu{color:violet}

```

Được sửa bởi Tiểu Phi Lang ngày Sun Jan 13, 2013 9:55 pm; sửa lần 2.