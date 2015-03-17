(**) Đôi lời từ tác giả: Một Mod nho nhỏ chỉ đáng miniTUT thôi, chả có gì đâu, cơ mà cứ gọi thế này rồi rôg dài ra cho nó... oai í mắc cỡ
Đây là bài hướg dẫn chi tiết cho cả new mem.
Nên bài hướg dẫn chi tiết trên 1 style.**

Demo: http://invision.chinhphuc.info


Bước 1: Tạo 1 chuyên mục mới:
Choose the kind of forum you want : Blog
Tên diễn đàn : Thông điệp yêu thương.

Bước 2: Lấy mã số box Thông điệp yêu thương:
Ra ngoài diễn đàn, tìm chuyên mục Thông điệp yêu thương vừa tạo ở bước 1,
click vào đó, sẽ dẫn đến đường link dạng http://link4rbạn/f[...]-forum.
Ví dụ link của 4r mình là: http://invision.chinhphuc.info/f42-forum
thì số 42 là mã số box Thông điệp yêu thương của mình.

Bước 3: Tạo phần hiển thị Thông điệp yêu thương:
Vào widget, tạo 1 widget mới:

```

<div class="lovemes"><br><table cellpadding="0" cellspacing="0" style="border:1px solid #ccc;height:55px;">
<tr>
<td width="25%" valign="middle" class="ifcmess">
<a title="Click để gửi thông điệp" href="/h89-"><img src="http://i34.servimg.com/u/f34/15/64/85/86/tdyt11.png" border="0">
<img title="Love Telling" src="http://i34.servimg.com/u/f34/15/64/85/86/tdyt_s11.png" alt="Love Telling" border="0">

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/td&gt;


<td width="75%">
<marquee width="800px" behavior="scroll" onmouseover="this.stop()"
onmouseout="this.start()" scrollamount="3" direction="left">
<div class="ifcmes">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/marquee&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;





Unknown end tag for &lt;/table&gt;

<style>.ifcmess {white-space:nowrap;}

Unknown end tag for &lt;/style&gt;



Unknown end tag for &lt;/div&gt;


```

Bước 4: Tạo javascript hiển thị thông điệp yêu thương:
Tạo 1 file javascript mới:

> Title: Thông điệp yêu thương.
> Placement: In all the pages.
> Content:
```

$(function () {
$(".ifcmes").after("<div class='mes'>

Unknown end tag for &lt;/div&gt;

");
$(".mes").load("/f42-forum .ipbtable:last tbody tr:lt(8)", function () {
var i;
for(i = 0; i < 8; i++) {
var tacgia = $(this).find('tr:eq(' + i + ') td:last .blog_comments .gensmall a:eq(0)').html();
nhan = $(this).find('tr:eq(' + i + ') td:last .topic-title').html();
lovemes = $(this).find('tr:eq(' + i + ') td:last .blog_message').html();
linktg = $(this).find('tr:eq(' + i + ') td:last .blog_comments .gensmall a:eq(0)').attr("href");
$("<span class='ifcmess'><a href='" + linktg + "'>"+tacgia+"

Unknown end tag for &lt;/a&gt;

 nhắn với " + nhan + " : "+lovemes+"                    

Unknown end tag for &lt;/span&gt;

").appendTo(".ifcmes");
}
$(this).remove();
})
});```

Thay số 42 trong code trên bằng mã số box Thông điệp yêu thương đã lấy ở Bước 2.
Thay số 8 trong code trên bằng số Thông điệp yêu thương bạn muốn hiện.
[Để thông điệp yêu thương hiển thị đẹp, bạn cần gửi từng đấy thông điệp yêu thương.]

Bước 5: Tạo trang HTML smiles cho phần gửi thông điệp:
Vào link http://link4rbạn/smilies.forum?action=smilies&js=no&mode=smilies_frame
Ctrl+U Muiten Copy bắt đầu từ đoạn

```

<div class="smiley-element">
```
đến hết.
Dán đoạn đó vào 1 trang HTML mới, xóa đoạn

```

<div class="clear">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/body&gt;



Unknown end tag for &lt;/html&gt;


```
ở cuối đi.
Sau đó, tìm các chỗ emoticonp xóa hết chữ p ở cuối đi.

Bước 6: Lấy mã số trang HTML hình vui:
Trang HTML này của bạn sẽ có dạng http://link4rbạn/h[...]-page.
Ví dụ link trang đó của mình là http://invision.chinhphuc.info/h90-page
thì số 90 là mã số trang HTML trang hình vui của mình.

Bước 7: Tạo trang HTML gửi Thông điệp yêu thương:
Tạo một trang HTML mới với nội dung như sau:

```

<div id='noidungne' style='padding:10px; overflow:hidden;'>
<form action="/post" method="post" name="post" onsubmit="return vB_Editor['text_editor'].prepare_submit(0,0);"
enctype="multipart/form-data">
<table width="100%" border="0" cellspacing="1" cellpadding="0">
<tbody>
<tr>
<td width="12%" nowrap="nowrap"> <span class="gen">
<b>Gửi đến :

Unknown end tag for &lt;/b&gt;




Unknown end tag for &lt;/span&gt;





Unknown end tag for &lt;/td&gt;


<td width="88%">
<table cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td width="60%">
<input class="post gen" style="width:200px; display:inline" type="text"
name="subject" value="Tất cả thành viên" onblur="if(this.value=='') this.value='Tất cả thành viên';"
onfocus="if(this.value=='Tất cả thành viên') this.value='';" size="45"
maxlength="40" tabindex="2" title="" onkeypress="if (event.keyCode==13){return false}">


Unknown end tag for &lt;/td&gt;


<td width="40%"><a onMouseOver="_tooltip(this, 'Chèn emoticon vào thông điệp, 'Thông báo');"
onMouseOut="hidetip();" id="emoclik" style="font-size:10px" href="#emo"><b>Emoticon

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/a&gt;


<a
onMouseOver="show_tooltip(this, 'Chèn emoticon vào thông điệp, 'Thông báo');"
onMouseOut="hidetip();" id="emoclik2" style="font-size:10px;display:none;"
href="#emo"><b>Ẩn Emo

Unknown end tag for &lt;/b&gt;




Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/td&gt;


<td align="right" width="40">
<input onClick="set_solved(this.form.elements['subject'],'♥ '), dongtimo()"
class="mainoption" style="float:right" type="submit" name="post" value="Gửi ..."
tabindex="6" accesskey="s" />


Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td>

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td nowrap="nowrap" valign="top">
<p style="padding: 2px;">

Unknown end tag for &lt;/p&gt;

<span class="gen"><b>Lời nhắn :

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/span&gt;


<br>


Unknown end tag for &lt;/td&gt;


<br />
<td valign="top">
<p style="padding: 2px;">

Unknown end tag for &lt;/p&gt;


<textarea id="c3z_lovemess" class="gen" style="width: 100%; height: 100px; display: inline;"
onClick="storeCaret(this)" onKeyUp="storeCaret(this)" name="message" rows="1"
cols="35" tabindex="3" onSelect="storeCaret(this)" wrap="virtual">

Unknown end tag for &lt;/textarea&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td>

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td id="security">

Unknown end tag for &lt;/td&gt;


<td>
<div id="xong" style="width: 100%; overflow: auto; margin-top: 6px; display: block;">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;

 <b>
<input type="hidden" name="lt" value="0">
<input type="hidden" name="mode" value="newtopic">
<input type="hidden" name="f" value="42">


Unknown end tag for &lt;/b&gt;





Unknown end tag for &lt;/form&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/p&gt;


<script>
jQuery("#emoclik").click(function () {
jQuery(this).hide();
jQuery("#emoclik2").show();
jQuery("#c3z_lovemess").animate({
height: "-=50"
}, 2000);
jQuery("#xong").animate({
height: "+=250"
}, 2000);
jQuery.ajax({
type: "POST",
url: "/h90-",
success: function (emo) {
jQuery("#xong").html(emo).show("slow");
}
});
});
jQuery("#emoclik2").click(function () {
jQuery(this).hide();
jQuery("#emoclik").show();
jQuery("#c3z_lovemess").animate({
height: "+=50"
}, 2000);
jQuery("#xong").animate({
height: "-=250"
}, 2000);
jQuery.ajax({
type: "POST",
url: "/h90-",
success: function (emo) {
jQuery("#xong").html(emo).hide("slow");
}
});
});


Unknown end tag for &lt;/script&gt;


<script>
function dongtimo() {
var t = setTimeout("reloadgiumcon()", 500);
}

function reloadgiumcon() {
window.location.replace("http://invision.chinhphuc.info/forum")
}
jQuery(document).ready(function () {
jQuery(".thongbao").colorbox({
width: "52%",
innerHeight: "175px",
title: 'Gửi Thông Điệp Yêu Thương',
inline: true,
href: "#noidungne",
onOpen: function () {
jQuery("#security").load("/post?f=42&mode=newtopic input[name^=auth]");
}
});
});


Unknown end tag for &lt;/script&gt;


```
Thay các số 42 trong code trên bằng mã số box Thông điệp yêu thương đã lấy ở Bước 2.
Thay số 90 ở chỗ url:"/h90-" bằng mã số trang HTML hình vui đã lấy ở Bước 6.
Thay đoạn link http://invision.chinhphuc.info/forum trong code trên bằng link 4r bạn.

Bước 8: Lấy mã số trang HTML gửi Thông điệp yêu thương:
Trang HTML ở Bước 7 của bạn sẽ có dạng http://link4rbạn/h[...]-page.
Ví dụ link trang đó của mình là http://invision.chinhphuc.info/h89-page
thì số 89 là mã số trang HTML gửi Thông điệp yêu thương của mình.

Bước 9: Tùy chỉnh lần cuối:
Trong code ở Bước 3 có đoạn như thế này href="/h89-", bạn thay số 89 bằng mã số trang HTML gửi Thông điệp yêu thương đã lấy ở Bước 8.

Bước 10: Hưởng thụ thành quả và báo xấu:
Bạn ra 4r bạn và thử gửi Thông điệp yêu thương.
Nếu có lỗi xảy ra, vui lòng thắc mắc tại topic này.
Nhận mọi loại gạch, đá, chai, lọ,... tại topic này Lo lắng
Chỉ nhận các loại gạch, đá có văn hóa, tôn trọng tác giả chịu
Like đi like đi rồu mình share cái gửi với cơ lơ bóc mắc cỡ Cười nghiêng ng (Thực ra cũg chẳg có gì, giốg mấy ver kia thôi mắc cỡ)