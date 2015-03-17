Lần trước ngồi update sửa lỗi hộc máu mồm mà được có 4 like chịu
Nay đưa 1 kiểu lên thôi, kiểu vandonstar, k có tooltip.
Lần này mà k được đến 10 like sau nghỉ, chả chia sẻ gì nữa chịu


**Demo: (Hẳn 3 cái đề mâu luôn mắc cỡ Cả 3 cái đều hoạt độg tốt náz. Ai bị lỗi gì thì coi lại náz mắc cỡ)
Pic: ![http://i44.servimg.com/u/f44/15/64/85/86/lastin13.png](http://i44.servimg.com/u/f44/15/64/85/86/lastin13.png) (skin Nice Blue 2)
hoặc ![http://i44.servimg.com/u/f44/15/64/85/86/kkkk10.png](http://i44.servimg.com/u/f44/15/64/85/86/kkkk10.png) (skin CPhuc mới)
hoặc ![http://i44.servimg.com/u/f44/15/64/85/86/source10.jpg](http://i44.servimg.com/u/f44/15/64/85/86/source10.jpg) (skin Source)**

Online: http://thekop.forumvi.com/ (skin Nice Blue 2)
hoặc http://shopbp.forumvi.com/ (skin CPhuc mới)
hoặc http://tomtest.forumvi.com/ (skin Source)


**Thực hiện:
CSS:**

```

/*recent topics cho invision------------------------------*/
#content-container div#left {float: none;width: 100%}
#left .module .box-content a {margin:2px 0}
#left{clear:none!important;width:100%!important;float:none!important;counter-reset:stt}
/*top posters*/
.topposter {float: left; width: 250px; margin-right:10px;} /*hiển thị top posters*/
/*most active topics*/
.hottest {float: left; width:250px; margin-left:-265px; margin-top:230px;} /*hiển thị most active topics*/
.topichot{float:left;height:14px;overflow:hidden;text-overflow:ellipsis; white-space:nowrap; max-width:220px;}
/*recent topics*/
.recent {float: left; width:680px;} /*hiển thị recent topics, bạn phải chỉnh sửa chiều rộng 680px cho phù hợp với 4r*/
/*recent topics cho invision------------------------------*/

#last-posts{width:100%;}
#select-lastpost{
float: left;
margin: 3px 5px;
background-color: #CCC;
padding: 2px 5px;
border-radius: 10px;
cursor:pointer;
width:115px;}
#option-lastpost{height:18px;}

.op-last{float:left;cursor:pointer;height:18px;margin:-5px 2px 0;width:80px;text-align:center;}
.op-last2{height:28px;margin-top:-12px;font-weight:bold;line-height:250%;border-radius:5px 5px 0 0;border-bottom:0;color:red;background-color:#FFF;}
.op-last-bottom{float:left;border:1px solid #999;margin:-1px 2px 0;padding:5px;cursor:pointer;height:15px;background-color:#DDD;}
.op-last-bottom2{height:23px;font-weight:bold;border-radius:0 0 5px 5px;border-top:0;background-color:white;margin-top:-4px;color:red;background-color:#FFF;}
.op-last-select{font-weight:bold!important;color:#0E53FB;}
.op-choice{float:left;display:none;}
.op-change{float:left;margin-left:5px;}
.op-prew,.op-next{width:20px;height:20px;cursor:pointer;float:left;margin:0 2px;}
.op-prew{background:url(http://i48.servimg.com/u/f48/13/58/60/43/contro18.png) 50% 50%;}
.op-next{background:url(http://i48.servimg.com/u/f48/13/58/60/43/contro20.png) 50% 50%;}
#main-lastpost-mi{background: white url(http://i27.servimg.com/u/f27/15/47/59/46/listbg10.gif);min-height:345px;}
#main-lastpost{background: white url(http://i27.servimg.com/u/f27/15/47/59/46/listbg10.gif);min-height:420px;}
#dl-lastpost{display:none;}
#name-lastpost,.name-lastpost {
position: absolute;
padding: 5px 25px;
font-style: italic;
}

.reply, .view, .box, .guicuoi, .tieude{
white-space: nowrap;
text-overflow: ellipsis;
font-size: 11px;
}

.dl-post {
height: 20px;
}
lp1,.lp2,.lp3,.lp4,.lp5,.lp6,.lp7,.lp8,.imglp, .ds1vds{
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
position: absolute;
font-size: 11px;
}
.dl-post:hover{
background-color:#DDD;
}

.lpmi {
width: 100px;
}
.ds1vds {
width: 70px;
}

.lp1 img {
height: 14px;
}
.lp2 {
margin-left: 5px;
width: 160px;
}
.lp3 {
margin-left: 188px;
width: 100px;
}
.lp4 {
margin-left: 308px;
width: 100px;
}
.lp5 {
margin-left: 420px;
width: 100px;
}
.lp6 {
margin-left: 538px;
}
.lp7 {
margin-left: 575px;
}
.lp8 {
margin-left: 618px;
height: 14px;
}
.imglp {
margin-left: 608px;
margin-top:1px;
}
#trang-lastpost {
float: right;
}
.TrangTruoc,.TrangSau,.TrangHT{font:12px Courier;cursor:pointer;color:red;float: left;height:30px;width:30px;opacity:0.6;}
.TrangTruoc:hover,.TrangSau:hover,.TrangHT:hover{opacity:1;}
.TrangTruoc{display:none;background:url(http://i48.servimg.com/u/f48/16/58/89/73/fancy_12.png) no-repeat;}
.TrangSau{background:url(http://i48.servimg.com/u/f48/13/58/60/43/fancy_10.png) no-repeat;}
#SoTrangLT{width:25px;height:22px;text-align:center;font-weight:bold;border:3px dashed white;}
#SoTrangLT:hover{border:3px dashed black;color:red;}

#Load {
display:none;
background: white url(http://i48.servimg.com/u/f48/13/58/60/43/loadaj10.gif) 50% 50% no-repeat;
position: fixed;
left: 50%;
top: 40%;
width: 50px;
height: 50px;
border: 10px solid #82D23D;
border: 20px solid rgba(130, 210, 60, .3);
border-radius: 50px;
margin-left: -25px;
}```


> NOTE: Bảng thống kê này mình viết trên skin Nice Blue 2 của ligerv. Các bạn chú ý trong đoạn CSS trên có đoạn code này:
```

.recent {float: left; width:680px;} /*hiển thị recent topics, bạn phải chỉnh sửa chiều rộng 680px cho phù hợp với 4r*/
```
> mình đã chú thích ở đó, các bạn phải chỉnh lại chiều rộng 680px cho phù hợp với 4r của mình, nếu không sẽ có lỗi xảy ra.

> Ví Dụ: Với nhữg ai sử dụng skin CPhuc mới, khi giữ nguyên code đó last topic sẽ bị xuống dòng. Vì thế, khi sử dụng skin CPhuc mới, bạn phải sửa số 680 thành 670. Khi đó, code trên sẽ trở thành
```

.recent {float: left; width:670px;} /*hiển thị recent topics, bạn phải chỉnh sửa chiều rộng 680px cho phù hợp với 4r*/
```

> Các bạn thông cảm. Chịu khó edit tí. Tớ k có rành về CSS lắm nên chỉ thế được thôi mắc cỡ Chờ hand lên mà hỏi.



Javascript: Tạo 3 file javascript, đặt In the homepage nếu bạn đặt bảng thống kê chỉ ở trang chủ, đặt In all the pages nếu bạn đặt bảng thống kê ở mọi trang.

```

Link = '/search?search_author=*_*&search_keywords';
Start = '&start=';
Where = '';
Trang = 20;

$(function(){

op_choice = Math.floor(Math.random()*4);
OpChoice(op_choice);

$('.op-prew').click(function(){
op_choice -= 1;
if (op_choice < 0) op_choice = 3;
OpChoice(op_choice);
});
$('.op-next').click(function(){
op_choice += 1;
if (op_choice > 3) op_choice = 0;
OpChoice(op_choice);
});

$('#jumpbox-last select').clone().appendTo('#option-lastpost');
$('#option-lastpost select').removeAttr('name').removeAttr('onchange').attr('id','select-lastpost');

$('.op-last-bottom').click(function(){
$('.op-last-bottom').removeClass('op-last-bottom2');
$(this).addClass('op-last-bottom2');
});

$('#option-lastpost .op-last').click(function(){
$('#option-lastpost .op-last').removeClass('op-last2');
$('#select-lastpost').removeClass('op-last-select');
$(this).addClass('op-last2');
});

$('#select-lastpost').live('change',function(){
$('#option-lastpost .op-last').removeClass('op-last2');
$(this).addClass('op-last-select');
if ($(this).val()=='1')
{
Where = '';
LoadLastPost(0);
}
else if ($(this).val()!='-1')
{
Where = '&search_where='+$(this).val();
LoadLastPost(0);
}
});

$('.TrangTruoc').click(function(){
st = parseInt($('#SoTrangLT').val())-1;
$('#SoTrangLT').val(st);
LoadLastPost(st-1);
});

$('.TrangSau').click(function(){
st = parseInt($('#SoTrangLT').val())+1;
$('#SoTrangLT').val(st);
LoadLastPost(st-1);
});

$('#SoTrangLT').change(function(){
ltval = parseInt($(this).val());
if (ltval < 1 || ltval > 20)
{
$(this).val(1);
}
else
{
LoadLastPost(ltval-1);
}
});

});

function LoadLastPost(page){
page > 0 ? $('.TrangTruoc').show() : $('.TrangTruoc').hide();
if (page == 0){$('#SoTrangLT').val(1);}
LinkLastPost = Link + Where + Start + page*Trang;
$('#Load').show();
$('#dl-lastpost').load(LinkLastPost+' form.ipbform .ipbtable tr',function(){
$('#main-lastpost').empty();
$(this).find('tr').length < 20 ? $('.TrangSau').hide() : $('.TrangSau').show();
if ($(this).is(':empty'))
{
$('#main-lastpost').text('Không có dữ liệu');
}
else
{
$(this).find('tr').each(function(){
$('<div class="dl-post">

Unknown end tag for &lt;/div&gt;

').appendTo('#main-lastpost');
$('<span class="lp1" title="'+$(this).find('td:eq(0)').text()+'">

Unknown end tag for &lt;/span&gt;

').html($(this).find('td:eq(0)').html()).appendTo('#main-lastpost .dl-post:last');
$('<span class="lp2">

Unknown end tag for &lt;/span&gt;

').html('<a class="thumbnail" title="'+$(this).find('td:eq(2) a.topictitle').text()+'" href="'+$(this).find('td:last a:last').attr('href')+'">'+$(this).find('td:eq(2) a.topictitle').text()+'

Unknown end tag for &lt;/a&gt;

').appendTo('#main-lastpost .dl-post:last');
$('<span class="lp3" title="'+$(this).find('td:eq(4)').text()+'">

Unknown end tag for &lt;/span&gt;

').html($(this).find('td:eq(4) a.gensmall')).appendTo('#main-lastpost .dl-post:last');
$('<span class="lp4" title="'+$(this).find('td:eq(7)').text()+'">

Unknown end tag for &lt;/span&gt;

').html($(this).find('td:eq(7) a.gensmall')).appendTo('#main-lastpost .dl-post:last');
$('<span class="lp5" title="'+$(this).find('td:eq(3)').text()+'">

Unknown end tag for &lt;/span&gt;

').html($(this).find('td:eq(3)').html()).appendTo('#main-lastpost .dl-post:last');
$('<span class="lp6" title="'+$(this).find('td:eq(5)').text()+'">

Unknown end tag for &lt;/span&gt;

').html($(this).find('td:eq(5)').text()).appendTo('#main-lastpost .dl-post:last');
$('<span class="lp7" title="'+$(this).find('td:eq(6)').text()+'">

Unknown end tag for &lt;/span&gt;

').html($(this).find('td:eq(6)').text()).appendTo('#main-lastpost .dl-post:last');
$('<span class="lp8" title="'+$(this).find('td:eq(1)').text()+'">

Unknown end tag for &lt;/span&gt;

').html($(this).find('td:eq(1)').html()).appendTo('#main-lastpost .dl-post:last');
});
$('#dl-lastpost').empty();
}
$('#Load').fadeOut();
});
}

function OpChoice(eq){
$('#option-lastpost .op-choice').hide();
$('#option-lastpost .op-choice').filter(':eq('+eq+')').show();
}

function Op1Last(forum){
forum =='' ? Where = '' : Where = '&search_where='+forum;
LoadLastPost(0);
}

function Op2Last(op){
Link = op;
LoadLastPost(0);
}

```
```

$(function(){
$('#option-lastpost .op-last:first').addClass('op-last2');
LoadLastPost(0);
});
```

```

$(function(){
$('#left .module:eq(0)').addClass('topposter').next().remove();
$('#left .module:eq(1)').addClass('hottest').next().remove();
$('#left .module:eq(1) a[href^="/t"]').addClass('topichot').next().remove();
$('#left .module:eq(2)').addClass('recent').next().remove();
$('#left .module:eq(2) br').addClass('clear');
});

```

Tạo 1 widget mới: Điền các thông tin như sau:
(**) Widget name : Last mia mắc cỡ
(**) Use a table type : Có
(**) Widget title : Latest topics
(**) Widget source **:**

```

<table border="0" class="lbb" cellpadding="0" cellspacing="0" width="100%">
<tr class="baiguicuoi" style="display: table-row; ">
<td width="100%" valign="top" colspan="2">
<div id="Load">

Unknown end tag for &lt;/div&gt;


<table style="background:#FFF repeat;" width="100%">
<tr>
<td width="100%" valign="top">
<div id="name-lastpost"><span class="lp2">Tiêu đề

Unknown end tag for &lt;/span&gt;

<span class="lp3">Sáng lập

Unknown end tag for &lt;/span&gt;

<span class="lp4">Gửi cuối

Unknown end tag for &lt;/span&gt;

<span class="lp5">Chuyên mục

Unknown end tag for &lt;/span&gt;

<span class="lp6">Bình

Unknown end tag for &lt;/span&gt;

<span class="lp7">Xem

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;


<div id="main-lastpost">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;


<tr><td>
<div id="option2-lastpost">
<div class="op-last-bottom op-last-bottom2" onclick="Op2Last('/search?search_author=*_*&search_keywords')">Lastest

Unknown end tag for &lt;/div&gt;


<div class="op-last-bottom" onclick="Op2Last('/search?search_id=newposts')">From last visit

Unknown end tag for &lt;/div&gt;


<div class="op-last-bottom" onclick="Op2Last('/search?search_id=egosearch')">You have commented

Unknown end tag for &lt;/div&gt;


<div class="op-last-bottom" onclick="Op2Last('/search?search_id=unanswered')">No comment

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;



<select id="select-lastpost">
<option><div class="op-last" onclick="Op1Last('')">All

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/option&gt;

<option value="-1">

Unknown end tag for &lt;/option&gt;

<option txt="01" value="f20">|--Cộng đồng game

Unknown end tag for &lt;/option&gt;

<option txt="01" value="f22">|--QTAN

Unknown end tag for &lt;/option&gt;

<option txt="01" value="f23">|--hot video youtube

Unknown end tag for &lt;/option&gt;




Unknown end tag for &lt;/select&gt;



<div id="trang-lastpost">
<div class="TrangTruoc" title="Tải dữ liệu trang trước">

Unknown end tag for &lt;/div&gt;

<div class="TrangHT"><input id="SoTrangLT" value="1" maxlength="2" title="Trang hiện tại" />

Unknown end tag for &lt;/div&gt;

<div class="TrangSau" title="Tải dữ liệu trang tiếp theo">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div id="dl-lastpost">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;

<div class="clear">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;



```
> NOTE: Cái đoạn

```

<option><div class="op-last" onclick="Op1Last('')">All

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/option&gt;

<option value="-1">

Unknown end tag for &lt;/option&gt;

<option txt="01" value="f20">|--Cộng đồng game

Unknown end tag for &lt;/option&gt;

<option txt="01" value="f22">|--QTAN

Unknown end tag for &lt;/option&gt;

<option txt="01" value="f23">|--hot video youtube

Unknown end tag for &lt;/option&gt;


```
> các bạn viewsource đoạn jumbox của các bạn thay vào, sau đó tìm đoạn

```

<option value="-1">Chọn Diễn Đàn

Unknown end tag for &lt;/option&gt;


```
> sửa thành

```

<option><div class="op-last" onclick="Op1Last('')">All đàn

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/option&gt;



```

Sắp xếp widgets: ![http://i44.servimg.com/u/f44/15/64/85/86/widget16.png](http://i44.servimg.com/u/f44/15/64/85/86/widget16.png)

Cài đặt bài viết: QLTT Muiten Messages and email Muiten Chủ đề trong một trang: 20.


**P/s:**

> Cái CSS của last topics được vác nguyên từ pun qua nên sẽ hơi mất thẩm mĩ mắc cỡ Các bạn tự sửa phần này nhé, lười lắm mắc cỡ
> Trên 15 lượt like tớ update tiếp last topic có tooltip Cười nghiêng ng cơ mà cái nài các bạn tự sửa cũg được., có code mẫu kia rồi.
> Last rất dài, đây là lúc thực hiện câu thành ngữ "Có chí thì nên", "Có công mài sắt có ngày nên kim". Hãy noi gương ông cha ta và thực hiện đến nơi đến chốn nhé ngại quá
> Như thường lệ, Tiếp nhận mọi loại gạch, đá, chai, lọ,... tại topic này. ngại quá (Từ h k hỗ trợ qua Yh nữa ngại quá)
> Và cũg như thườg lệ, Chỉ nhận những loại gạch, đá, chai, lọ,... có văn hóa ngại quá
> Các chai lọ có thể mọc rêu, không dám nói trước điều gì ngại quá




  * Hướng dẫn sửa lỗi cho những ai sử dụng skin CPhuc mới:
> Tìm trog CSS đoạn này:

```

#forum_rules .maintitle,[href="#"]::before,.post img[src="http://illiweb.com/fa/empty.gif"],#chatbox_top+script+div img,.row1.centered + .row1.centered,#userlinks p,a[href="/u"]+br+a[href="/u"],dt+dd+dd>br,td[colspan="2"],.row1 span a+br+br,.ipbtable thead,#left .box-content>a+br{display:none}
```
> và thay bằng đoạn này:

```

#forum_rules .maintitle,[href="#"]::before,.post img[src="http://illiweb.com/fa/empty.gif"],#chatbox_top+script+div img,.row1.centered + .row1.centered,#userlinks p,a[href="/u"]+br+a[href="/u"],dt+dd+dd>br,.row1 span a+br+br,.ipbtable thead{display:none}
```

> TÌm tiếp trong CSS đoạn này:

```

#left{clear:none!important;width:100%!important;float:none!important;counter-reset:stt;}
#left .box-content > a[href*="/t"]::before{content: counter(stt)".";counter-increment: stt;float: left;position: absolute;text-align: right;width: 25px!important;margin-left: -25px;}
#left a[href*="/t"]{width:450px;float:left;margin-right:164px;height:14px;overflow:hidden;padding-left: 16px;}
#left a[href*="/t"]:hover::after{content:"☺ (xem ngay)"}
#left a[href*="/u"]{width:160px;position:absolute;margin-left:-164px;background:#FFF;}
```
> hoặc đoạn này:

```

/*Last topic cho Invision ver.2*/
#left{clear:none!important;width:100%!important;float:none!important;counter-reset:stt}
#left .module.borderwrap:nth-child(1){margin-right:2px;width:220px;float:left}
#left .module.borderwrap:nth-child(1) .box-content{background:white}
#left .module.borderwrap:nth-child(3){width:705px;float:left}
#left .module.borderwrap:nth-child(3) a + br,#left [style="height:11px"]{display:none}
#left .module.borderwrap:nth-child(3) .box-content{overflow:hidden;height:281px;background:white}
#left .module.borderwrap:nth-child(3) .box-content:hover{overflow:auto}
#left .module.borderwrap:nth-child(3) .box-content a[href^="/t"]{margin-bottom:15px;width:342px;float:left;overflow:hidden;height:14px}
#left .module.borderwrap:nth-child(3) .box-content a[href*="/u"]{margin-bottom:15px;margin-left:-30px;background:white;width:157px;display:inline-block;padding-left:15px}
#left .module.borderwrap:nth-child(3) .box-content a[href*="/u"] img{margin-top:-16px}
#left .module.borderwrap:nth-child(3) .box-content a[href^="/t"]::before{content:counter(stt)".";counter-increment:stt;width:20px;display: inline-block;text-align:right}
[summary*="Top post"] tr{height:25px}
[summary*="Top post"] td{background:#FFF!important;border:0!important}
#left .module.borderwrap{width:937px;float:left}

và xóa đi.
```


Được sửa bởi miamor ngày Thu Jul 19, 2012 11:05 am; sửa lần 3.
