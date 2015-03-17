demo : http://bucoi5.forumvi.com/
demo ảnh : ![http://i1129.photobucket.com/albums/m513/nguyenanhdung_2010/rank/2.jpg](http://i1129.photobucket.com/albums/m513/nguyenanhdung_2010/rank/2.jpg)


Các bạn chịu khó đọc kĩ nhá , đọc kĩ sẽ làm được cười nhăn răng

Code này chỉ dành cho Punbb nhá ,
Bắt đầu làm nào :


> Vào widget: Đưa cái News_lên đầu tiên nhé_


Bước 1 : Thay toàn bộ code ở Mod\_New = code sau

```

<div class="main dungyen">
<div class="tieude"><div class="page-title" style="float:left"><h2><span class='thongbao'><a>Gửi SMS

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/h2&gt;



Unknown end tag for &lt;/div&gt;


<div class="noidungthongbao" style="float:right;background:#fff;width: 805px;" width="600px">
<marquee behavior="scroll" onmouseover="this.stop()" onmouseout="this.start()"
scrollamount="1" scrolldelay="20" direction="left" truespeed="truespeed">
<!-- BEGIN post_row -->

<span onmouseover="show_tooltip(this,this.getElementsByTagName('div')[0].innerHTML,'Thông Báo');"
onmouseout="hidetip();" style="color:#2F2F2F; font-size:11px">
<b>
<span class="gensmall" style="font-size: 9pt">
<b>
<span style="color:#FA0000">
<strong>{post_row.POSTER} 

Unknown end tag for &lt;/strong&gt;




Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/b&gt;




Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/b&gt;


<span style="font-size: 9pt"> nhắn với 

Unknown end tag for &lt;/span&gt;


<span style="color:#FF009A;font-weight:bold;font-size: 9pt"> {post_row.TITLE} 

Unknown end tag for &lt;/span&gt;


<div style="display: none;"> gửi vào lúc {post_row.TIME} ...

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/span&gt;

:
<span class="lovemes" style="font-size: 9pt">
<font color="blue"> {post_row.TEXT}

Unknown end tag for &lt;/font&gt;




Unknown end tag for &lt;/span&gt;


<span style="padding: 0px 40px">

Unknown end tag for &lt;/span&gt;



<!-- END post_row -->


Unknown end tag for &lt;/marquee&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;



<!-- BEGIN switch_user_logged_in -->
<div class="chopnhon">

Unknown end tag for &lt;/div&gt;


<div class="main-content" id='noidungne' style='padding:10px; overflow:hidden;display:none'>
<form style="display:none" class="smsfree" action="/post" method="post" name="post" onsubmit="return vB_Editor['text_editor'].prepare_submit(0,0);"
enctype="multipart/form-data">
<table width="100%" border="0" cellspacing="1" cellpadding="0">
<tbody>
<tr align="center"><td colspan="1">

Unknown end tag for &lt;/td&gt;

<td><div style="color:red;float:left">Bạn chỉ có 1 lần gửi SMS trong ngày :D

Unknown end tag for &lt;/div&gt;

<div style="float:right;cursor:pointer" class="dongcua"><img src="http://illiweb.com/fa/cross.png"/>

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;


<tr>
<td width="12%" nowrap="nowrap">
<span class="gen">
<b>Gửi đến :

Unknown end tag for &lt;/b&gt;




Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;


<td width="88%">
<table cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td width="60%">
<input class="post gen" style="width:200px; display:;border:1px solid #ccc;" type="text"
name="subject" value="» Tất cả thành viên" onblur="if(this.value=='') this.value='» Tất cả thành viên';"
onfocus="if(this.value=='» Tất cả thành viên') this.value='';" size="45" maxlength="40"
tabindex="2" title="" onkeypress="if (event.keyCode==13){return false}">


Unknown end tag for &lt;/td&gt;


<td width="40%">

Unknown end tag for &lt;/td&gt;

 <td align="right" width="40">
<input onclick="lovemess_c3z(this.form.elements['subject']);" class="mainoption gen"
style="padding:0px; margin:0px" type="submit" name="post" value=" Gửi ..."
tabindex="6" accesskey="s">


Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td valign="top" nowrap="nowrap">
<span class="gen">
<b>Lời nhắn :

Unknown end tag for &lt;/b&gt;




Unknown end tag for &lt;/span&gt;


<br>


Unknown end tag for &lt;/td&gt;


<td valign="top">
<textarea class="gen vai"style="width:100%;height:110px"
onclick="storeCaret(this)" onkeyup="storeCaret(this)" name="message" rows="1"
cols="35" tabindex="3" onselect="storeCaret(this)" wrap="virtual">

Unknown end tag for &lt;/textarea&gt;




Unknown end tag for &lt;/td&gt;


<td class="emo" valign="top" width="190px" height="112px">



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td id="security">

Unknown end tag for &lt;/td&gt;





Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;


<b>
<input type="hidden" name="lt" value="0">
<input type="hidden" name="mode" value="newtopic">
<input type="hidden" name="f" value="57">


Unknown end tag for &lt;/b&gt;




Unknown end tag for &lt;/form&gt;


<div class="loadding">[Chờ Chút]Đang kiểm tra.....

Unknown end tag for &lt;/div&gt;


<div id='testsms'style="display:none"></div>


Unknown end tag for &lt;/div&gt;



<!-- END switch_user_logged_in -->



<script>

$(function(){$(".thongbao").click(function(){$("#noidungne").slideToggle();var a=$(".laylink strong").text();$("#testsms").load("/search?search_keywords=&search_where=f57&search_time=1&show_results=topics&sort_by=0&sort_dir=DESC&search_author="+a+" table.table td.tcr:contains('Today')",function(){if($("#testsms").html()==''||a=='Admin'){$(".loadding").hide().prev().fadeIn(1000);jQuery("#security").load("/post?f=57&mode=newtopic input[name^=auth]")}else{$("form.smsfree").remove();$(".loadding").html('<b><span style="color:red">Bạn đã hết số lần gửi SMS

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/b&gt;

')}})});$(".dongcua").click(function(){$("#noidungne").slideToggle()})});



Unknown end tag for &lt;/script&gt;



<div id="left" class="boxfmvi main">
<div class="main-head">
<div class="page-title">
<h2>Tình hình diễn đàn

Unknown end tag for &lt;/h2&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div class="main-content">
<!-- 

Unknown end tag for &lt;/td&gt;


```

Bước 2 :

> Thay những số 57 ở những code dưới đây bằng số chuyên mục gửi TDYT ( có 3 chỗ )
```


<input type="hidden" name="f" value="57">
/search?search_keywords=&search_where=f57
/post?f=57&mode=newtopic input[name^=auth]
```

Bước 3 :

> Vào ACP >> Display >> Portal >> Mod\_recent\_topics thêm phía trên cùng đoạn sau:


```

-->```


Bước 4 :

> Vào ACP >> Display >> Templates >> Quản lý tổng thể >> Index\_body tìm đoạn sau và xoá đi.

```

<div id="left" class="boxfmvi main">
<div class="main-head">
<div class="page-title">
<h2>Tình hình diễn đàn

Unknown end tag for &lt;/h2&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div class="main-content">

```

> Chú ý : ở bước 4 mình giải thích như này cho dễ hiểu nhá


nhìn ảnh cho dễ hiểu này
![http://i1129.photobucket.com/albums/m513/nguyenanhdung_2010/rank/4.jpg](http://i1129.photobucket.com/albums/m513/nguyenanhdung_2010/rank/4.jpg)


Đoạn code mình đóng khung màu đỏ + cái code bên dưới là code để hiển thị lasttopic
Các bạn cần xóa đoạn code mình đóng khung màu đỏ đi , còn đoạn bên dưới để nguyên
Nếu các bạn có đoạn code hiển thị lasttopic khác trong ảnh thì xóa đoạn bên trên đi và dữ nguyên đoạn bên dưới ( cố gắng hiểu 1 chút là được , mình hướng dẫn cái này cho Mem mới đỡ nhầm lẫn )

> Bước 5 : Cho đoạn code sau vào css

```

.tentab a.Active:hover {
background-position: 0 -103px!important;
color: blue!important;
}
.tentab a.Active {
background-position: 0 -103px;
color: blue!important;
}
.main-content.lasttopic{
background:#3B5998;
}
.main .tieude .page-title{color:#fff!important;background:#fff;opacity:0.8}
.main .tieude{
height: 28px;
padding: 6px;
border: 1px solid #133783;
-webkit-box-shadow: 0 2px 2px -2px rgba(0,0,0,.52);
font-size: 12px;
font-family: "lucida grande",tahoma,verdana,arial,sans-serif;
font-weight: 700;
background-color: #3B5998;
color: #000;

}
.main .tieude .page-title{padding: 5px;}.noidungthongbao{padding: 0px;height:27px!important}
.dulieu2 hr,hr {
border: 0px;
border-bottom: 2px dashed #666;
height: 2px;

}

```

Ok thế là xong
bạn nào chưa hiểu thì có thể reply tại đây mình sẽ trả lời cười nhăn răng