Quà Tặng Âm Nhạc tự cập nhật.
By: vandonstar.
Edit Invision: miamor.


Thực hiện:

> Chèn vào CSS:

```


.ds1vds{display:none;z-index:999;background:#fff url(http://tdnfamily.com/forum/img_music/form/13941788164632566517.gif);overflow:auto;max-height:400px;position:absolute;border:1px solid #ddd;height:150px;width:393px;right:40px;top:115px;padding:3px}
#vds_nhaplieu{font:12pt Tahoma, Arial;opacity:0.9;filter:alpha(opacity=90);position:fixed;left:30%;top:50px;overflow:hidden;background-color:#000;width:400px;border:10px solid #5E9EFF;z-index:999;padding:5px}
.an{display:none}
.khungqtanvds{width:99%;height:62px;font-size:11px;margin:2px}
.qtantdytvds{font:12pt Tahoma, Arial;width:98%;height:110px;position:relative}
.lck1vds{display:none;background:#fff url(http://tdnfamily.com/forum/img_music/form/13941788164632566517.gif);word-wrap:break-word;width:95%;overflow:auto;height:200px;margin-top:20px;position:relative;bottom:15px;border:1px solid #ddd;padding:5px}
.nutbam_vds{z-index:999;position:absolute;right:-5px;bottom:5px;width:30px;height:29px;background-color:#5E9EFF}
.nutlck{z-index:999;position:absolute;right:7px;top:7px;cursor:pointer}
.nutdsn{z-index:999;position:absolute;right:7px;bottom:7px;cursor:pointer}
.qtantdyt_new{cursor:pointer}
a.dsnhac,a.dsnhac:link{font-size:11px;display:block;color:#4317d3;transition:all 1s ease;-webkit-transition:all 1s ease;-moz-transition:all 1s ease;padding:1px 20px}
a.dsnhac:hover{transform:scale(1.1);-webkit-transform:scale(1.1);-moz-transform:scale(1.1)}
#qtloadingvds{z-index:999;position:absolute;left:77px;top:-11px;border:2px solid #000;background-color:red;padding:2px}
.tdyt1vds{font-size:11px}
#vds_tenck,#vds_flash,#vds_nlck,#vds_guiden,#vds_ntdyt,#vds_thoat{background-color:#fbff8f}
#vds_qtgui{background-color:red}
.cao_video{height:300px}

```
> Tạo 2 file js:
> Javascript 1:

```


$(function () {
$(".qtantdyt_new").click(function () {
jQuery("<div />").load("/post?f=29&mode=newtopic input[name^=auth]").appendTo("form#form_qtanvds");
});
});


Javascript 2:

Code: Select All

$(document).ready(function () {
$('#qtloadingvds').removeClass('an');
chuyenmuc = $('#cm_qtan').val();
$('#danhsachnhac').load('f' + chuyenmuc + '-forum a.topictitle:not("a.topictitle:contains('[Tổng hợp]'),a.topictitle:contains('Thông báo'),a.topictitle:contains('Chú ý')")', function () {
$('#danhsachnhac img').remove();
$('#danhsachnhac a.topictitle').each(function () {
$(this).replaceWith("<a href=#? class=dsnhac onclick=document.getElementById('linkvds').value='" + $(this).attr('href') + "',loadnhac()>♪ " + $(this).text() + "

Unknown end tag for &lt;/a&gt;

");
});
$('#danhsachnhac a.topictitle').clone().appendTo($('#vds_qtan marquee'));
$('#qtloadingvds').addClass('an');
});
return false;
});
function loadnhac() {
$('#qtloadingvds').removeClass('an');
ab = $('#linkvds').val();
$('#thongtinnguoigui').load(ab + ' div.postprofile dl.postprofile-details dt a:eq(1)');
$('#thuviennhac').load(ab + ' div.postbody:eq(0)', function () {
$('#vds_qtan').html($('#thuviennhac table.qtvds embed').clone().addClass('khungqtanvds'));
if($('#vds_qtan embed').attr('src').search("zing") != -1 && $('#vds_qtan embed').attr('src').search("playlist") == -1 && $('#vds_qtan embed').attr('src').search("video") == -1) {
$('#khungqtanlck').addClass('botrongoc');
$('#vds_qtan').addClass('botrongoc');
} else {
$('#khungqtanlck').removeClass('botrongoc');
$('#vds_qtan').removeClass('botrongoc');
}
if($('#vds_qtan embed').attr('src').search("zing") != -1 && ($('#vds_qtan embed').attr('src').search("playlist") != -1 || $('#vds_qtan embed').attr('src').search("video") != -1)) {
$('#khungqtanlck').addClass('cao_video');
$('#vds_qtan').addClass('cao_video');
$('#vds_qtan embed').css('height', '98%');
} else {
$('#khungqtanlck').removeClass('cao_video');
$('#vds_qtan').removeClass('cao_video');
}
$('#vds_tdyt').html($('#thuviennhac table.tdvds').clone());
$('#vds_lck').html($('#thuviennhac table.lhvds').clone());
$('#vds_nguoinhan').html($('#thuviennhac table.nhan').clone());
$('#vds_cakhuc').html($('#thuviennhac table.cakhuc').clone());
$('#qtloadingvds').addClass('an');
});
return false;
};
function anhienlck() {
$('#vds_lck').slideToggle(1000);
};
function anhiendsn() {
$('#danhsachnhac').slideToggle(500);
};
function offqtantdytnew() {
$('#vds_nhaplieu').fadeOut(1000);
};
function qtantdytnew() {
$('#form_qtanvds')[0].reset();
$('#vds_nhaplieu').fadeIn(1000);
$('#vds_tenck').css('background-color', '#FBFF8F');
$('#vds_flash').css('background-color', '#FBFF8F');
$('#vds_nlck').css('background-color', '#FBFF8F');
$('#vds_guiden').css('background-color', '#FBFF8F');
$('#vds_ntdyt').css('background-color', '#FBFF8F');
$('#vds_qtgui').css('background-color', '#FF0000');
$('#vds_kt_1').val('');
$('#vds_kt_2').val('');
$('#vds_kt_3').val('');
$('#vds_kt_4').val('');
$('#vds_qtgui').attr('disabled', 'disabled');
$('#vds_tenck').blur(function () {
vdsA = $(this).val();
vdsA = vdsA.toLowerCase().replace(/^([a-z])|\s+([a-z])/g, function (letter) {
return letter.toUpperCase();
});
if((vdsA.search(/Điền tên bài hát vào đây!/i) != -1) || (vdsA.length < 5) || (vdsA.search(' ') == -1)) {
$(this).css('background-color', '#FF0000');
$('#vds_kt_1').val('');
} else {
$(this).css('background-color', '#74FF2E');
$('#vds_kt_1').val('O');
}
ok_qtan($('#vds_kt_1').val(), $('#vds_kt_2').val(), $('#vds_kt_3').val(), $('#vds_kt_4').val())
});
$('#vds_flash').blur(function () {
vdsB = $(this).val();
if(vdsB.search('/flash') == -1 || vdsB.indexOf('flash') > 5 || vdsB.search('http://') == -1 || (vdsB.search('zing.vn') == -1 && vdsB.search('nhaccuatui') == -1 && vdsB.search('nhac.vui') == -1)) {
$(this).css('background-color', '#FF0000');
$('#vds_kt_2').val('');
} else {
$(this).css('background-color', '#74FF2E');
$('#vds_kt_2').val('K');
}
ok_qtan($('#vds_kt_1').val(), $('#vds_kt_2').val(), $('#vds_kt_3').val(), $('#vds_kt_4').val())
});
$('#vds_nlck').blur(function () {
vdsC = $(this).val();
if(vdsC.length < 200) {
$(this).css('background-color', '#FBFF8F');
} else {
$(this).css('background-color', '#74FF2E');
}
});
$('#vds_guiden').blur(function () {
vdsD = $(this).val();
if(vdsD.length < 3) {
$(this).css('background-color', '#FF0000');
$('#vds_kt_3').val('');
} else {
$(this).css('background-color', '#74FF2E');
$('#vds_kt_3').val('E');
}
ok_qtan($('#vds_kt_1').val(), $('#vds_kt_2').val(), $('#vds_kt_3').val(), $('#vds_kt_4').val())
});
$('#vds_ntdyt').blur(function () {
vdsE = $(this).val();
vdsE = vdsE.replace(/\n/gi, '... ');
vdsE = vdsE.replace(/    /gi, ' ');
vdsE = vdsE.replace(/  /gi, ' ');
vdsE = vdsE.replace(/  /gi, ' ');
if((vdsE.length < 30) || (vdsE.search(' ') == -1)) {
$(this).css('background-color', '#FF0000');
$('#vds_kt_4').val('');
} else {
$(this).css('background-color', '#74FF2E');
$('#vds_kt_4').val('Y');
}
ok_qtan($('#vds_kt_1').val(), $('#vds_kt_2').val(), $('#vds_kt_3').val(), $('#vds_kt_4').val())
});
};
function ok_qtan(kt1, kt2, kt3, kt4) {
if(kt1 + kt2 + kt3 + kt4 == 'OKEY') {
$('#vds_qtan_tieude').val(vdsA + ' [Tặng ' + vdsD + ']');
$('#vds_qtan_noidung').val('[table class=qtvds][tr][td class=vv]' + vdsB + '[/td][/tr][/table][table class=nhan][tr][td class=tdyt_10][i][font=Verdana][b][color=#ff00ff]Gửi tới:[/color][/b][/font][/i][/td] [td class=tdyt_20][font=Comic Sans Ms][color=orange]' + vdsD + '[/color][/font][/td][/tr][/table][table class=cakhuc][tr][td class=tdyt_11][i][font=Verdana][b][color=#00ff00]Ca khúc: [/color][/b][/font][/i][/td] [td class=tdyt_21][font=Comic Sans Ms][color=#0000ff]' + vdsA + '[/color][/font][/td][/tr][/table][table class=tdvds][tr][td class=tdyt_1][i][font=Verdana][b][color=#7319fa]Lời nhắn tới ' + vdsD + ': [/color][/b][/font][/i][/td] [td class=tdyt_2][i][font=Comic Sans Ms][color=#174f1f]' + vdsE + '[/color][/font][/i][/td][/tr][/table][table class=lhvds][tr][td class=lh][b][color=#ff0000]Lời ca khúc:[/color][/b][hr][i]' + vdsC + '[/i][hr][right][b][size=10]http://hollyland.forumvi.com[/size][/b][/right][/td][/tr][/table]');
$('#vds_qtgui').css('background-color', '#74FF2E');
$('#vds_qtgui').removeAttr('disabled');
} else {
$('#vds_qtan_noidung').val('');
$('#vds_qtan_tieude').val('');
$('#vds_qtgui').css('background-color', '#FF0000');
$('#vds_qtgui').attr('disabled', 'disabled');
}
};
```

> Thêm code này vào 1 widget hoặc Anouncement hoặc Generalities:


```


<table class="tborder" cellpadding="2" cellspacing="5" border="0" width="100%" align="center">
<tbody id="collapseobj_forumbit_3" style=""><tr align="center"><td class="altthinh"><table class="altthinh"><tr><td width="35%" valign="top"><div align="center"><div id="vds_qtan" class="qtan1vds"><img width="350px" src="http://i64.servimg.com/u/f64/15/44/78/93/11361210.gif">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div id="khungqtanlck" class="anhienlck"><div id="vds_qtan" class="qtan1vds">
<marquee id="danhsachnhac" direction="up" scrollamount="1" scrolldelay="100" width="390" height="100" onmouseover="document.getElementById('danhsachnhac').stop();" onmouseout="document.getElementById('danhsachnhac').start();">

Unknown end tag for &lt;/marquee&gt;




Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;


<font color="red"><font face="Georgia"><span style="font-size: 17px; line-height: normal"><strong>HD: 

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/font&gt;

<font face="Comic Sans Ms"><span style="font-size: 17px; line-height: normal"><strong>Chọn 1 ca khúc từ list quà tặng trên.

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/font&gt;




Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;


<td width="65%" valign="top"><div id="thuviennhac" style="display:none;">

Unknown end tag for &lt;/div&gt;

<div class="qtantdytvds"><div class="nutbam_vds"><div class="nutlck"><img src="http://i49.servimg.com/u/f49/16/29/88/81/list_e10.png" title="Ẩn/Hiện Lời ca khúc" onclick="anhienlck()"/>

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;

<div id="danhsachnhac" class="ds1vds">

Unknown end tag for &lt;/div&gt;

<div id="khungqtanlck" class="anhienlck"><div id="qtloadingvds" class="an"><img src="http://i48.servimg.com/u/f48/13/58/60/43/loadin10.gif">

Unknown end tag for &lt;/div&gt;

<div class="tdyt1vds">
<table class="nhan" cellspacing="0"><tr><td align="left" class="tdyt_10"><div class="tdyt1vds"><i><font face="Verdana"><strong><font color="#fff000">Người gửi:

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/i&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;

<td align="left" class="tdyt_20"><font face="Comic Sans Ms"><div id="thongtinnguoigui">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;


<br><div id="vds_nguoinhan" class="tdyt1vds"><div class="tdyt1vds"><i><font face="Verdana"><strong><font color="#ff00ff">Gửi tới:

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/i&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;


<br><div id="vds_cakhuc" class="tdyt1vds"><div class="tdyt1vds"><i><font face="Verdana"><strong><font color="#00ff00">Ca khúc: 

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/i&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;


<br><div id="vds_tdyt" class="tdyt1vds"><div class="tdyt1vds"><i><font face="Verdana"><strong><font color="#7319fa">Lời nhắn: 

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/i&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;


<br>
<font style="font-family: Georgia; font-size:14px;"><div class="qtantdyt_new"><font color="#ff5959"> Bạn muốn yêu cầu ca khúc ?!

Unknown end tag for &lt;/font&gt;

 <span title="Tạo một món quà mới" onclick="qtantdytnew()"><font color="#007DEB"><img src="http://i24.servimg.com/u/f24/15/44/78/93/heart11.png"/> Click here

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/font&gt;


<div id="vds_lck" class="lck1vds">

Unknown end tag for &lt;/div&gt;

<div id="vds_nhaplieu" class="an">
<form id="form_qtanvds" target="bvreload" action="/posting.forum" method="post" name="post" onsubmit="return vB_Editor['text_editor'].prepare_submit(0,0)" enctype="multipart/form-data">
<span class="gen"><b><font color="#23eb41">Tên ca khúc: »

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/span&gt;


<textarea id="vds_tenck" style="width:98%; type="text" rows="1" tabindex="1" wrap="virtual" maxlength="100" onblur="if(this.value=='') this.value='Điền tên bài hát vào đây!';" onfocus="if(this.value=='Điền tên bài hát vào đây!') this.value='';" onkeypress="if (event.keyCode==13){return false}">Điền tên bài hát vào đây!

Unknown end tag for &lt;/textarea&gt;


<span class="gen"><b><font color="#23eb41">Mã flash: »

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/b&gt;

 <i>(Hỗ trợ mp3.zing.vn - nhaccuatui.com - nhac.vui.vn)

Unknown end tag for &lt;/i&gt;



Unknown end tag for &lt;/span&gt;


<textarea id="vds_flash" style="width:98%; type="text" rows="3" tabindex="2" wrap="virtual" maxlength="500" onblur="if(this.value=='') this.value='Dán đoạn mã flash vào đây!';" onfocus="if(this.value=='Dán đoạn mã flash vào đây!') this.value='';" onkeypress="if (event.keyCode==13){return false}">Dán đoạn mã flash vào đây!

Unknown end tag for &lt;/textarea&gt;


<span class="gen"><b><font color="#23eb41">Lời ca khúc: »

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/span&gt;


<textarea id="vds_nlck" style="width:98%; height:150px;" type="text" wrap="hard" rows="30" tabindex="3" maxlength="3000" onblur="if(this.value=='') this.value='Chưa cập nhật lời...';" onfocus="if(this.value=='Chưa cập nhật lời...') this.value='';">Chưa cập nhật lời...

Unknown end tag for &lt;/textarea&gt;


<span class="gen"><b><font color="#23eb41">Gửi đến: »

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/span&gt;


<input class="post" type="text" id="vds_guiden" name="nguoinhan" maxlength="30" value="" size="30" tabindex="4" />
-
<input class="liteoption" type="button" id="find_friend" tabindex="5" value="Tìm thành viên">
<span class="gen"><b><font color="#23eb41">Thông điệp: »

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/b&gt;

 <i>(Ít nhất 30 ký tự)

Unknown end tag for &lt;/i&gt;



Unknown end tag for &lt;/span&gt;


<textarea id="vds_ntdyt" style="width:98%; type="text" rows="2" tabindex="6" wrap="soft" maxlength="255" onblur="if(this.value=='') this.value='Nội dung thông điệp...';" onfocus="if(this.value=='Nội dung thông điệp...') this.value='';" onkeypress="if (event.keyCode==13){return false}">Nội dung thông điệp...

Unknown end tag for &lt;/textarea&gt;


<center>
<input id="vds_qtgui" style="width:50px; height:25px;" class="mainoption"  type="submit" name="post" value="Gửi" tabindex="8" onclick="guiquatang(), offqtantdytnew()" />
<input id="vds_thoat" style="width:50px; height:25px;" type="button" value="Thoát" tabindex="9" onclick="offqtantdytnew()" />


Unknown end tag for &lt;/center&gt;


<input type="hidden" class="post" name="subject" id="vds_qtan_tieude" />
<input type="hidden" name="message" id="vds_qtan_noidung" />
<input type="hidden" name="lt" value="0" />
<input type="hidden" name="mode" value="newtopic" />
<input type="hidden" id="linkvds" value="" />
<input type="hidden" id="vds_kt_1" value="" />
<input type="hidden" id="vds_kt_2" value="" />
<input type="hidden" id="vds_kt_3" value="" />
<input type="hidden" id="vds_kt_4" value="" /><div class="an"><iframe name="bvreload" height="1px" width="1px">

Unknown end tag for &lt;/iframe&gt;



Unknown end tag for &lt;/div&gt;


<script type="text/javascript">
function guiquatang(){var t=setTimeout("trolaitrang()",1000);}
function trolaitrang(){window.location.replace("/forum");}


Unknown end tag for &lt;/script&gt;


<input type="hidden" id="cm_qtan" name="f" value="29" />


Unknown end tag for &lt;/form&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;


```


Thay số 29 trong đoạn Javascript 1 và đoạn trong code ở bước 3 bằng id chuyên mục Quà Tặng Âm Nhạc của bạn.