Chắc hẳn forum các bạn đang sử dụng thông điệp yêu thương bằng colorbox.
==>Khoảng này khỏi phải nói nữa nhĩ.
Còn nếu chưa thì:

```


<link rel="stylesheet" href="http://colorpowered.com/colorbox/core/example5/colorbox.css" type="text/css" />
<script src="http://colorpowered.com/colorbox/core/colorbox/jquery.colorbox.js">

Unknown end tag for &lt;/script&gt;

```



![http://i24.servimg.com/u/f24/15/64/85/86/demo11.jpg](http://i24.servimg.com/u/f24/15/64/85/86/demo11.jpg)

Cho vào header.
Xong đến phần tạo music box:
Vào Admin cp==>display==>portal==>mod\_news
Thay thế toàn bộ code trong đó lại bằng code:

```


<script>
jQuery(document).ready(function(){
jQuery(".guibai").colorbox({inline:true, href:"#form"});
jQuery(".mainoption").click(function(){setTimeout($.colorbox.remove, 1500);});
jQuery(".xemlyric").colorbox({inline:true, href:"#lyric", width:"400px"});
jQuery(".xemtiep").colorbox({inline:true, href:"#xemcm", width:"400px"});
$(".abcxx").fadeIn(5000);
$(".h3").click(function(){$(".abcxx").slideToggle("slow");});
});
function doit(){
if (document.forms["post"]["checkbox"].checked==true)
{
document.forms["post"]["a1"].disabled=true;
document.forms["post"]["a2"].disabled=true;
document.forms["post"]["a3"].disabled=true;
document.forms["post"]["a4"].disabled=true;
x= document.forms["post"]["a1"].value;
x=x.replace("/FLASH", "/flash");
x=x.replace("FLASH", "flash(300,61)");
y= document.forms["post"]["a2"].value;
z= document.forms["post"]["a3"].value;
k= document.forms["post"]["a4"].value;
document.forms["post"]["vnteen123"].value = x+"
"+"<div class='xxx'><marquee behavior='scroll' onmouseover='this.stop()' onmouseout='this.start()' scrollamount='1' scrolldelay='20' direction='left' truespeed='truespeed'>"+""+y+""+"

Unknown end tag for &lt;/marquee&gt;



Unknown end tag for &lt;/div&gt;

"+"<div style='display:none'><div id='lyric' style='display:block'><p>
"+z+"<br/>

Unknown end tag for &lt;/p&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

"+"<div style='display:none'><div id='xemcm' style='display:block'>" + k +"

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

";
}
else{
document.forms["post"]["a1"].disabled=false;
document.forms["post"]["a2"].disabled=false;
document.forms["post"]["a3"].disabled=false;
document.forms["post"]["a4"].disabled=false;
document.forms["post"]["vnteen123"].value = '';
}

}


Unknown end tag for &lt;/script&gt;


<table style="background-image:url('http://pacitaumc.files.wordpress.com/2011/03/197529_1880099320764_1189731094_2359435_2406714_n.jpg');margin:0;" class="chitho">
<tr><td align="center" ><table><tr><td><span class="h3">Music Box

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;

<td>

Unknown end tag for &lt;/tr&gt;




<tr class="abcxx" style="display:none">
<!-- BEGIN post_row -->

<td >
<table><tr>
<td width="300px">

<table>

<tr><td>
<div id="we"><div>Người yêu cầu:<b>{post_row.POSTER}

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;


<tr><td>
<div id="we"><div>Người nhận:<b><font color="red"><a href="{post_row.U_READ_FULL}">{post_row.TITLE}

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;


<tr><td>
<div id="we"><div>Vào lúc:<b><font color="red">{post_row.TIME}

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;


<tr><td>

<input onmouseover="showtip('Gửi bài');" onmouseout="hidetip();" onclick="" class="guibai" name="" value="Gửi Nhạc" type="submit" />


Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/td&gt;



<td width="430px">
<div align="right"><input onmouseover="showtip('Xem bài khác');" onmouseout="hidetip();" onclick="" class="xemtiep" name="joingroup" value="Lời Tâm Sự" type="submit" />

Unknown end tag for &lt;/div&gt;


<div align="center">{post_row.TEXT}

Unknown end tag for &lt;/div&gt;


<div align="right"><input onmouseover="showtip('Xem Lyric');" onmouseout="hidetip();" onclick="" class="xemlyric" name="joingroup" value="Xem Lyric" type="submit" />

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;






Unknown end tag for &lt;/td&gt;



<!-- END post_row -->



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;


<div style="display:none">
<div id="form" style="display:block">
<form target="abcd" action="/posting.forum" method="post" name="post" onsubmit="return vB_Editor['text_editor'].prepare_submit(0,0)" enctype="multipart/form-data"><table width="420px" border="0" cellspacing="1" cellpadding="0"><tr><td width="22%"><span class="gen"><b><font color="#23eb41">Gửi đến

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;

<td>
<input class="post gen" style="width:230px; display:inline" type="text" name="subject" value="Tất cả" onblur="if(this.value=='') this.value='Tất cả';" onfocus="if(this.value=='Tất cả') this.value='';"  size="45" maxlength="40" tabindex="2" title="" onkeypress="if (event.keyCode==13){return false}">

Unknown end tag for &lt;/span&gt;

 <input onclick="set_solved(this.form.elements['subject'],''), vtdyt()" class="mainoption"  type="submit" name="post" value="Gửi" tabindex="6" accesskey="s" />


Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="1"><tr><td><a onmouseover="showtip('<font size=4.5>SOẠN BBCODE THÔNG ĐIỆP</font><br><font color=green>Coppy đoạn mã được tạo ra và paste vào đây!</font>');" onmouseout="hidetip();" ><blink><b>Lấy code

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/blink&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;

<td valign="top"><table border="0" cellspacing="0" cellpadding="0" width="100%"><tr><td colspan="9"><span class="gensmall" style="width:550px;font-size:10px" id="helpbox">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td colspan="9">
<span class="gen">

<input id="a1"  style="width:320px; display:inline" type="text" value="Dán đoạn mã bạn nhìn thấy vào đây!" onblur="if(this.value=='') this.value='Dán đoạn mã bạn nhìn thấy vào đây!';" onfocus="if(this.value=='Dán đoạn mã bạn nhìn thấy vào đây!') this.value='';"  onclick="storeCaret(this)" onkeyup="storeCaret(this)" rows="15" cols="35" tabindex="3" onselect="storeCaret(this)" wrap="virtual" maxlength="777" />
<br/>
<input id="a2"  style="width:320px; display:inline" type="text"  value="Lời muốn nói" onblur="if(this.value=='') this.value='Lời muốn nói';" onfocus="if(this.value=='Lời muốn nói') this.value='';"  onclick="storeCaret(this)" onkeyup="storeCaret(this)" rows="15" cols="35" tabindex="3" onselect="storeCaret(this)" wrap="virtual" maxlength="777" />


<input id="a4"  style="width:320px; display:inline" type="text"  value="Tâm sự của bạn" onblur="if(this.value=='') this.value='Tâm sự của bạn';" onfocus="if(this.value=='Tâm sự của bạn') this.value='';"  onclick="storeCaret(this)" onkeyup="storeCaret(this)" rows="15" cols="35" tabindex="3" onselect="storeCaret(this)" wrap="virtual" maxlength="777" />


<textarea id="a3"  style="width:320px; height:50px;display:inline" type="text"  value="Lyric" onblur="if(this.value=='') this.value='Lyric';" onfocus="if(this.value=='Lyric') this.value='';"  onclick="storeCaret(this)" onkeyup="storeCaret(this)" rows="15" cols="35" tabindex="3" onselect="storeCaret(this)"  >Nhập lyric vào đây

Unknown end tag for &lt;/textarea&gt;






<input id="vnteen123" class="gen" style="width: 270px;display:none" onclick="storeCaret(this)" onkeyup="storeCaret(this)" name="message" rows="1" cols="35" tabindex="3" onselect="storeCaret(this)" wrap="virtual" />
<input type="checkbox" name="checkbox" value="Chấp nhận" onclick="doit()">Chấp nhận

Unknown end tag for &lt;/input&gt;



<span id="counter_number" class="counter">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;


<input type="hidden" name="lt" value="0" /><input type="hidden" name="mode" value="newtopic" /><input type="hidden" name="f" value="4" />

Unknown end tag for &lt;/form&gt;




Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



<iframe height="0" width="0" frameborder="0" name="abcd">

Unknown end tag for &lt;/iframe&gt;


```

Xong music box cơ bản.
Đến phần làm đep...hehe(Rất tiếc cho ai xài trình duyệt web bản củ vì không thấy được cái đẹp của nó)
Cho vào css:

```

/*        Music box      */
#we div {
color: #cdcdcd;
text-transform: uppercase;
font: 100 15px Helvetica, Arial, Sans-Serif;
-webkit-transition: all 0.2s ease-out;
-moz-transition: all 0.2s ease-out;
-o-transition:all 0.2s ease-out;
}
#we div:nth-child(1) { font-size: 12px; letter-spacing: 1px;}
#we div:nth-child(2) { font-size: 12px; letter-spacing: 0.6px}
#we div:nth-child(3) { font-size: 12px; letter-spacing: 0.2px}
#we div:hover {
text-shadow: 3px 3px 3px #000;
-webkit-transform: scale(1.1);
-moz-transform: scale(1.1);
-o-transform: sacle(1.1);
}

.h3 {
padding: 0px 0;
color: #666;
font: 900 35px "Trebuchet MS", Arial, Helvetica, sans-serif;
text-shadow: 1px 1px #000, 2px 2px #000, 3px 3px #000, 4px 4px #000;
-webkit-transition: all 0.2s ease-out;
-moz-transition:all 0.2s ease-out;
-o-tramsition:all 0.2s ease-out
}
.xxx{
background-color: #ffffff;
display: inline-block;
border: solid 1px #000;
overflow: hidden;
-webkit-border-radius: 10px;
-moz-border-radius: 10px;
border-radius: 10px;
-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .4);
-moz-box-shadow: 0 1px 3px rgba(0, 0, 0, .4);
box-shadow: 0 1px 3px rgba(0, 0, 0, .4);

color: #ff0000;
text-shadow: 1px;
}
.h3:hover {
color:#fff;
position:relative; top:-3px; left:-3px;
text-shadow: 1px 1px #409FFF, 2px 2px #409FFF, 3px 3px #409FFF, 4px 4px #409FFF, 5px 5px #FF8080, 6px 6px #FF8080, 7px 7px #FF8080, 8px 8px #FF8080, 9px 9px #F1FB42, 10px 10px #F1FB42, 11px 11px #F1FB42, 12px 12px #F1FB42;}
.chitho {
display: inline-block;
border: solid 1px #000;
overflow: hidden;
-webkit-border-radius: 10px;
-moz-border-radius: 10px;
border-radius: 10px;
-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .4);
-moz-box-shadow: 0 1px 3px rgba(0, 0, 0, .4);
box-shadow: 0 1px 3px rgba(0, 0, 0, .4);
max-width:730px;
margin: 0 auto;
}

```
Xong.
Demo:
Lúc quay quên để tiếng input..hehe
Bà con nên tắt tiếng khi xem:))