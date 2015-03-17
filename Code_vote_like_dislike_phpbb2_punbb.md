![http://i48.servimg.com/u/f48/16/58/89/73/flag_r10.png](http://i48.servimg.com/u/f48/16/58/89/73/flag_r10.png) Chức năng:

> Hiển thị số lượt đánh giá chuyên nghiệp.
> Thực hiện nhiều đánh giá một lúc mà không bị chuyển trang.



Ghi chú: Code được viết bởi baivong, tham khảo ý tưởng của ܓܨܓMxTrường và Dion.
Nếu bạn muốn sao chép hướng dẫn này đi nơi khác vui lòng không thay đổi bất kỳ thành phần nào trong code và phải ghi bản quyền thuộc www.FMvi.org

Hướng dẫn: ACP - Display - Templates - Ganeral - viewtopic\_body



Spoiler:
> Bước 1: Tìm đoạn mã sau trong viewtopic\_body và xóa nó đi:

```

<!-- BEGIN switch_vote_active -->
<div class="vote gensmall">
<!-- BEGIN switch_vote -->
<div class="vote-button">
<a href="{postrow.displayed.switch_vote_active.switch_vote.U_VOTE_PLUS}">+

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/div&gt;


<!-- END switch_vote -->
<!-- BEGIN switch_bar -->
<div class="vote-bar" title="{postrow.displayed.switch_vote_active.L_VOTE_TITLE}">
<!-- BEGIN switch_vote_plus -->
<div class="vote-bar-plus" style="height:{postrow.displayed.switch_vote_active.switch_bar.switch_vote_plus.HEIGHT_PLUS}px;">


Unknown end tag for &lt;/div&gt;


<!-- END switch_vote_plus -->
<!-- BEGIN switch_vote_minus -->
<div class="vote-bar-minus" style="height:{postrow.displayed.switch_vote_active.switch_bar.switch_vote_minus.HEIGHT_MINUS}px;">


Unknown end tag for &lt;/div&gt;


<!-- END switch_vote_minus -->


Unknown end tag for &lt;/div&gt;


<!-- END switch_bar -->
<!-- BEGIN switch_no_bar -->
<div title="{postrow.displayed.switch_vote_active.L_VOTE_TITLE}" class="vote-no-bar">
----


Unknown end tag for &lt;/div&gt;


<!-- END switch_no_bar -->
<!-- BEGIN switch_vote -->
<div class="vote-button">
<a href="{postrow.displayed.switch_vote_active.switch_vote.U_VOTE_MINUS}">-

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/div&gt;


<!-- END switch_vote -->


Unknown end tag for &lt;/div&gt;


<!-- END switch_vote_active -->

```

> ... và đặt một trong hai đoạn code dưới đây vào vị trí muốn hiển thị, nếu bạn chưa có kinh nghiệm chỉnh sửa templates thì tốt nhất nên thay đoạn này vào vị trí vừa xóa:

> + Đặt bên phải:

```

<span class="loadFMvi">
<img alt="Loading" src="http://farm04.go.vn/photo/data/20111012/10798851/946D73AB7E9F949624C2BF756D1ED794.gif"
/>


Unknown end tag for &lt;/span&gt;


<div class="voteTopic">
<!-- BEGIN switch_vote_active -->
<div class="vote gensmall">
<!-- BEGIN switch_vote -->
<div class="vote-button">
<a href="{postrow.displayed.switch_vote_active.switch_vote.U_VOTE_PLUS}">+

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/div&gt;


<!-- END switch_vote -->
<!-- BEGIN switch_bar -->
<div class="vote-bar" title="{postrow.displayed.switch_vote_active.L_VOTE_TITLE}">
<!-- BEGIN switch_vote_plus -->
<div class="vote-bar-plus" style="height:{postrow.displayed.switch_vote_active.switch_bar.switch_vote_plus.HEIGHT_PLUS}px;">


Unknown end tag for &lt;/div&gt;


<!-- END switch_vote_plus -->
<!-- BEGIN switch_vote_minus -->
<div class="vote-bar-minus" style="height:{postrow.displayed.switch_vote_active.switch_bar.switch_vote_minus.HEIGHT_MINUS}px;">


Unknown end tag for &lt;/div&gt;


<!-- END switch_vote_minus -->


Unknown end tag for &lt;/div&gt;


<!-- END switch_bar -->
<!-- BEGIN switch_no_bar -->
<div title="{postrow.displayed.switch_vote_active.L_VOTE_TITLE}" class="vote-no-bar">
----


Unknown end tag for &lt;/div&gt;


<!-- END switch_no_bar -->
<!-- BEGIN switch_vote -->
<div class="vote-button">
<a href="{postrow.displayed.switch_vote_active.switch_vote.U_VOTE_MINUS}">-

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/div&gt;


<!-- END switch_vote -->


Unknown end tag for &lt;/div&gt;


<!-- END switch_vote_active -->


Unknown end tag for &lt;/div&gt;



```

> + Đặt bên trái:

```

<div class="voteTopic">
<!-- BEGIN switch_vote_active -->
<div class="vote gensmall">
<!-- BEGIN switch_vote -->
<div class="vote-button">
<a href="{postrow.displayed.switch_vote_active.switch_vote.U_VOTE_PLUS}">+

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/div&gt;


<!-- END switch_vote -->
<!-- BEGIN switch_bar -->
<div class="vote-bar" title="{postrow.displayed.switch_vote_active.L_VOTE_TITLE}">
<!-- BEGIN switch_vote_plus -->
<div class="vote-bar-plus" style="height:{postrow.displayed.switch_vote_active.switch_bar.switch_vote_plus.HEIGHT_PLUS}px;">


Unknown end tag for &lt;/div&gt;


<!-- END switch_vote_plus -->
<!-- BEGIN switch_vote_minus -->
<div class="vote-bar-minus" style="height:{postrow.displayed.switch_vote_active.switch_bar.switch_vote_minus.HEIGHT_MINUS}px;">


Unknown end tag for &lt;/div&gt;


<!-- END switch_vote_minus -->


Unknown end tag for &lt;/div&gt;


<!-- END switch_bar -->
<!-- BEGIN switch_no_bar -->
<div title="{postrow.displayed.switch_vote_active.L_VOTE_TITLE}" class="vote-no-bar">
----


Unknown end tag for &lt;/div&gt;


<!-- END switch_no_bar -->
<!-- BEGIN switch_vote -->
<div class="vote-button">
<a href="{postrow.displayed.switch_vote_active.switch_vote.U_VOTE_MINUS}">-

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/div&gt;


<!-- END switch_vote -->


Unknown end tag for &lt;/div&gt;


<!-- END switch_vote_active -->


Unknown end tag for &lt;/div&gt;


<span class="loadFMvi">
<img alt="Loading" src="http://farm04.go.vn/photo/data/20111012/10798851/946D73AB7E9F949624C2BF756D1ED794.gif"
/>


Unknown end tag for &lt;/span&gt;



```

> Bước 2: Chèn một trong hai đoạn mã sau đây vào cuối viewtopic\_body:


> + Đặt bên phải:

```

<style type="text/css">
.voteTopic {
padding: 4px;
background: #fff;
color: #000;
border:1px solid # a0b0c0;
font - size: 12px;
font - weight: bold;
margin: 0 10px;
height: 17px;
display: inline;
}
.voteTopic a {
cursor: default;
vertical - align:
middle;
}
.voteTopic span, .voteTopic a {
display: inline;
}
.voteTopic .plusFMvi {
background: url(http://i48.servimg.com/u/f48/16/58/89/73/like_b12.png) no-repeat scroll center center transparent;
padding: 0 12px;
}
.voteTopic .xplusFMvi {
background: url(http://i48.servimg.com/u/f48/16/58/89/73/like_n11.png) no-repeat scroll center center transparent;
padding: 0 12px;
}
.xminusFMvi {
background: url(http://i48.servimg.com/u/f48/16/58/89/73/dislik16.png) no-repeat scroll center center transparent;
padding: 0 12px;
}
.voteTopic .minusFMvi{
background: url(http://i48.servimg.com/u/f48/16/58/89/73/dislik15.png) no-repeat scroll center center transparent;
padding: 0 12px;
}
.loadFMvi, .vote {
display:none;
margin: 0;
}


Unknown end tag for &lt;/style&gt;


<script type="text/javascript">
$('.voteTopic').each(function (index) {
$(this).prev().attr('alt', 'vote'+index);
$(this).before('<iframe name="vote' + index + '" height="0px" width="0px" frameborder="0">

Unknown end tag for &lt;/iframe&gt;

');
$(this).attr('alt', 'vote'+index).prepend('<span alt="vote'+index+'" class="xplusFMvi">

Unknown end tag for &lt;/span&gt;

<span class="cong" alt="vote'+index+'">0

Unknown end tag for &lt;/span&gt;

    <span alt="vote'+index+'" class="xminusFMvi">

Unknown end tag for &lt;/span&gt;

<span class="tru" alt="vote'+index+'">0

Unknown end tag for &lt;/span&gt;

');
var altthis = $(this).attr('alt');
var plink = $(this).find('a[href$="eval=plus"]').attr('href');
var mlink = $(this).find('a[href$="eval=minus"]').attr('href');
if ($(this).find('.vote a').length > 0) {
$('.xplusFMvi[alt="'+altthis+'"]').replaceWith('<a style="display: inline-block" target="' + altthis + '" href="'+plink+'"><span alt="'+altthis+'" class="plusFMvi">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;

');
$('.xminusFMvi[alt="'+altthis+'"]').replaceWith('<a target="' + altthis + '" href="'+mlink+'"><span alt="'+altthis+'" class="minusFMvi">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;

');
};
if ($(this).find('.vote-bar').length > 0) {
var z = $(this).find('.vote-bar').attr('title').split(' ');
var m = parseInt(z[3].replace(/%/, '')) / 100;
var n = parseInt(z[4].replace(/\(/, ''));
c = String(Math.round(n * m));
d = String(n - c);
$('.cong[alt="'+altthis+'"]').replaceWith('<span class="cong" alt="'+altthis+'">'+c+'

Unknown end tag for &lt;/span&gt;

');
$('.tru[alt="'+altthis+'"]').replaceWith('<span class="tru" alt="'+altthis+'">'+d+'

Unknown end tag for &lt;/span&gt;

');
};
$('.plusFMvi').click(function () {
var altcong = $(this).attr('alt');
var x = Number($('.cong[alt="'+altcong+'"]').text())+1;
$('.plusFMvi[alt="'+altcong+'"]').replaceWith('<span class="xplusFMvi">

Unknown end tag for &lt;/span&gt;

');
$('.minusFMvi[alt="'+altcong+'"]').replaceWith('<span class="xminusFMvi">

Unknown end tag for &lt;/span&gt;

');
$('.loadFMvi[alt="'+altcong+'"]').show().fadeOut(1000, function(){
$('.cong[alt="'+altcong+'"]').replaceWith('<span class="cong">'+x+'

Unknown end tag for &lt;/span&gt;

');
});
});
$('.minusFMvi').click(function () {
var alttru = $(this).attr('alt');
var y = Number($('.tru[alt="'+alttru+'"]').text())+1;
$('.plusFMvi[alt="'+alttru+'"]').replaceWith('<span class="xplusFMvi">

Unknown end tag for &lt;/span&gt;

');
$('.minusFMvi[alt="'+alttru+'"]').replaceWith('<span class="xminusFMvi">

Unknown end tag for &lt;/span&gt;

');
$('.loadFMvi[alt="'+alttru+'"]').show().fadeOut(1000, function(){
$('.tru[alt="'+alttru+'"]').replaceWith('<span class="cong">'+y+'

Unknown end tag for &lt;/span&gt;

');
});
});
});


Unknown end tag for &lt;/script&gt;



```

> + Đặt bên trái:

```

<style type="text/css">
.voteTopic {
padding: 4px;
background: #fff;
color: #000;
border:1px solid # a0b0c0;
font - size: 12px;
font - weight: bold;
margin: 0 10px;
height: 17px;
display: inline;
}
.voteTopic a {
cursor: default;
vertical - align:
middle;
}
.voteTopic span, .voteTopic a {
display: inline;
}
.voteTopic .plusFMvi {
background: url(http://i48.servimg.com/u/f48/16/58/89/73/like_b12.png) no-repeat scroll center center transparent;
padding: 0 12px;
}
.voteTopic .xplusFMvi {
background: url(http://i48.servimg.com/u/f48/16/58/89/73/like_n11.png) no-repeat scroll center center transparent;
padding: 0 12px;
}
.xminusFMvi {
background: url(http://i48.servimg.com/u/f48/16/58/89/73/dislik16.png) no-repeat scroll center center transparent;
padding: 0 12px;
}
.voteTopic .minusFMvi{
background: url(http://i48.servimg.com/u/f48/16/58/89/73/dislik15.png) no-repeat scroll center center transparent;
padding: 0 12px;
}
.loadFMvi, .vote {
display:none;
margin: 0;
}


Unknown end tag for &lt;/style&gt;


<script type="text/javascript">
$('.voteTopic').each(function (index) {
$(this).next().attr('alt', 'vote'+index);
$(this).before('<iframe name="vote' + index + '" height="0px" width="0px" frameborder="0">

Unknown end tag for &lt;/iframe&gt;

');
$(this).attr('alt', 'vote'+index).prepend('<span alt="vote'+index+'" class="xplusFMvi">

Unknown end tag for &lt;/span&gt;

<span class="cong" alt="vote'+index+'">0

Unknown end tag for &lt;/span&gt;

    <span alt="vote'+index+'" class="xminusFMvi">

Unknown end tag for &lt;/span&gt;

<span class="tru" alt="vote'+index+'">0

Unknown end tag for &lt;/span&gt;

');
var altthis = $(this).attr('alt');
var plink = $(this).find('a[href$="eval=plus"]').attr('href');
var mlink = $(this).find('a[href$="eval=minus"]').attr('href');
if ($(this).find('.vote a').length > 0) {
$('.xplusFMvi[alt="'+altthis+'"]').replaceWith('<a style="display: inline-block" target="' + altthis + '" href="'+plink+'"><span alt="'+altthis+'" class="plusFMvi">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;

');
$('.xminusFMvi[alt="'+altthis+'"]').replaceWith('<a target="' + altthis + '" href="'+mlink+'"><span alt="'+altthis+'" class="minusFMvi">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;

');
};
if ($(this).find('.vote-bar').length > 0) {
var z = $(this).find('.vote-bar').attr('title').split(' ');
var m = parseInt(z[3].replace(/%/, '')) / 100;
var n = parseInt(z[4].replace(/\(/, ''));
c = String(Math.round(n * m));
d = String(n - c);
$('.cong[alt="'+altthis+'"]').replaceWith('<span class="cong" alt="'+altthis+'">'+c+'

Unknown end tag for &lt;/span&gt;

');
$('.tru[alt="'+altthis+'"]').replaceWith('<span class="tru" alt="'+altthis+'">'+d+'

Unknown end tag for &lt;/span&gt;

');
};
$('.plusFMvi').click(function () {
var altcong = $(this).attr('alt');
var x = Number($('.cong[alt="'+altcong+'"]').text())+1;
$('.plusFMvi[alt="'+altcong+'"]').replaceWith('<span class="xplusFMvi">

Unknown end tag for &lt;/span&gt;

');
$('.minusFMvi[alt="'+altcong+'"]').replaceWith('<span class="xminusFMvi">

Unknown end tag for &lt;/span&gt;

');
$('.loadFMvi[alt="'+altcong+'"]').show().fadeOut(1000, function(){
$('.cong[alt="'+altcong+'"]').replaceWith('<span class="cong">'+x+'

Unknown end tag for &lt;/span&gt;

');
});
});
$('.minusFMvi').click(function () {
var alttru = $(this).attr('alt');
var y = Number($('.tru[alt="'+alttru+'"]').text())+1;
$('.plusFMvi[alt="'+alttru+'"]').replaceWith('<span class="xplusFMvi">

Unknown end tag for &lt;/span&gt;

');
$('.minusFMvi[alt="'+alttru+'"]').replaceWith('<span class="xminusFMvi">

Unknown end tag for &lt;/span&gt;

');
$('.loadFMvi[alt="'+alttru+'"]').show().fadeOut(1000, function(){
$('.tru[alt="'+alttru+'"]').replaceWith('<span class="cong">'+y+'

Unknown end tag for &lt;/span&gt;

');
});
});
});


Unknown end tag for &lt;/script&gt;



```