demo : http://vnashow49.forumvi.com/ ( kéo xuống box )
cách làm

> tạo 1 js in the home page với js code như sau
```

$(function () {
$('div:contains("Legend")').addClass('legend');
$('<style>.ipbtable.index-box{background:#fff}
.topics,.replies{font-size:0!important}
.row2.icon{width:65%;border-left:0px solid #DDD;border-right:0 none!important}
.row2.icon+.row1.centered::before{content:"Chủ đề: "}
.row2.icon+td+.row2.centered::before{content:"Bài gửi: "}
.status.clearfix{position:absolute;margin-left:-47px!important}
.row1.centered{background:transparent;height:10px}
.row2.centered,.row1.centered{float:right;text-align:right;white-space:nowrap}
.ipbtable.index-box .row2,.ipbtable.index-box .row1{border:0!important}
.ipbtable.index-box .row2.centered,.ipbtable.index-box .row1.centered{vertical-align:middle;float:right;text-align:right;white-space:nowrap;width:130px}
.postnguoi img,.postname img,.postname p,.row1.centered + .row1.centered,.replies{display:none}
.ipbtable.index-box tr,.row2.icon+td+td+.row1,.row2.icon+td+td+.row1.centered,.row2.icon,.row2.centered{border-bottom:1px solid #DDD!important}
.last.post-info,.row2.icon+td+td+.row1{width:35%}
thead { display:none;}

Unknown end tag for &lt;/style&gt;

').insertAfter("#content");
});
```

> đã ẩn