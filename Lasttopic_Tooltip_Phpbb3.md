![http://imageshack.us/a/img14/6365/lasphpbb3.png](http://imageshack.us/a/img14/6365/lasphpbb3.png)
![http://i44.servimg.com/u/f44/15/64/85/86/cp1911.png](http://i44.servimg.com/u/f44/15/64/85/86/cp1911.png)
Bước 2 :
Đưa code sau vào CSS :

```

/* CSS tooltip lasttopic phpbb3*/
.tcat {
font-weight: 900;
color : green;
}
.tauthor {
font-weight: 900;
color : blue;
}
.titlef {
font : 12px;
margin-left : 10;
font-weight: 800;
color : red;
}
dttip {
background-color:#FFF;
border:1px solid #DDD;
border-radius:3px;
color:#131313;
max-width:350px;
padding:10px 20px;
position:absolute;
z-index: 99;
display : none;
margin-top: 20px;
margin-left : 20px;
}

/*Last topic phpbb3 style Invision */
#left{clear:none!important;width:100%!important;float:none!important;counter-reset:stt}
#left .module:nth-child(1){margin-right:920;width:220px;float:right}
#left .module:nth-child(1) .inner{background:white}
#left .module:nth-child(3){width:700px;float:center;}
#left .module:nth-child(3) a + br,#left [style="height:11px"]{display:none}
#left .module:nth-child(3) .inner{overflow:hidden;height:281px;background:white}
#left .module:nth-child(3) .inner a[href^="/t"]{margin-bottom:10px;width:342px;float:left;overflow:hidden;height:14px}
#left .module:nth-child(3) .inner a[href*="/u"]{margin-bottom:15px;margin-left:-30px;background:white;width:157px;display:inline-block;padding-left:15px}
#left .module:nth-child(3) .inner a[href*="/u"] img{margin-top:-16px}
#left .module:nth-child(3) .inner a[href^="/t"]::before{content:counter(stt)".";counter-increment:stt;width:20px;display: inline-block;text-align:right}
[summary*="Top post"] tr{height:25px}
[summary*="Top post"] td{background:#FFF!important;border:0!important}
#left .module{width:957px;float:left}
.module{border:2px solid #DDD;padding:3px!important;}

```

Tạo 1 file Javascript
Tittle : Js Lasttopic phpbb3
Place : In all the page

```


$(function () {
$('#left .module:eq(1)').addClass('tlast').next().remove();
$('#left .module:eq(1) a[href^="/t"]').addClass('tlasttop').next().remove();
});
$(document).on('ready', function () {
$('.tlast a.tlasttop').each(function () {
$(this).prepend('<a href=" ' +  $(this) +  ' " >

Unknown end tag for &lt;/a&gt;

');
$(this).children('a').after('<dttip>'+"Error !"+'

Unknown end tag for &lt;/dttip&gt;

');
$(this).hover(function(){
$(this).find('dttip').show();
},function(){
$(this).find('dttip').hide();
});
});
});
$(function () {$.get('/rss', function (a) {
var m = $(a).find('item');
for (var n = 0, e = 0; n < m.length, e < $('.tlasttop').length; n++, e++) {
var c = $(m).eq(n).find('title').text();
var d = $(m).eq(n).find('description').text();
var t = $(m).eq(n).find('category').text();
var l  =  $(m).eq(n).find('guid').next().text();
var x = $('.tlasttop').eq(e).find('dttip');
$(x).html('<font class= "titlef"> •' + c + '

Unknown end tag for &lt;/font&gt;

' + '<br><br> * ' + d + '<br><br>----------------------------------------------<br><font>Author: 

Unknown end tag for &lt;/font&gt;

' + '<font class="tauthor">' + l + '

Unknown end tag for &lt;/font&gt;

' + '<br><font>Category: 

Unknown end tag for &lt;/font&gt;

' + '<font class="tcat"> ' + t +'

Unknown end tag for &lt;/font&gt;

');
}
})
});

```
Bước 3 : Tùy chỉnh
Vào của recent\_topics rồi chỉnh :
Number of recent topics : 10
Activate the topics scrolling : Không

Tiếp theo vào ACP --> Quản Lí Tổng Thể --> Messages and e-mails --> Cấu hình diễn đàn --> Topics --> Chủ đề trong 1 trang : 10