demo :
![http://i43.servimg.com/u/f43/15/93/33/76/221110.png](http://i43.servimg.com/u/f43/15/93/33/76/221110.png)
Tạo một Script mới
Title **: Youtube
Placement : In all the pages
Javascript Code** :



```


$(document).ready(function(){$("#hotvideYoutube td fieldset").hide().after('<p class="fmloadingvideo" align="center"><img border="0" alt="Loading" src="http://i43.servimg.com/u/f43/16/03/04/56/13x13p10.gif" title="Loading"> Đang tải dữ liệu...

Unknown end tag for &lt;/p&gt;

');$("#chixem #nhapurlyoutube").click(function(){jQuery("<div />").load("/post?f=12&mode=newtopic input[name=auth]").appendTo("form#sendtube");$("#chixem").hide();$("#khungnhapurl").fadeIn(1500);my_setcookie('youtubePanel',0,0,1)});if(my_getcookie('youtubePanel')==0){$("#chixem").hide();$("#khungnhapurl").show()};$("form#sendtube").submit(function(){if(Number($("input#titlevideo").val().length)>3&&Number($("input#text_editor_textarea").val().indexOf("http://www.youtube.com/"))==0){alert('Video của bạn đã được chuyển đi, sẽ Cập nhật Ngay Sau khi bạn nhấn OK!');return true}$("input#titlevideo").val("Tiểu đề dài từ 3 - 26 ký tự");$("input#text_editor_textarea").val("Liên kết Youtube trên thanh địa chỉ trình duyệt");alert('Sai cú pháp hoặc tiêu đề và liên kết video Youtube chưa được nhập vào!');return false});$('<span/>').load('/f116-hot-video-youtube .blog_message:eq(0) a',{limit:25},function(){jQuery(this).hide().appendTo('#noidunghot1').fadeIn(1);$('<span id="titletube1"/>').load('/f116-hot-video-youtube .topic-title:eq(0) a',{limit:25},function(){$(this).hide().appendTo('#tenbaihot1').fadeIn(1);var b=$("#tenbaihot1 #titletube1").text();$('#tenbaihot1').text(b);$("#noidunghot1 a[href='http://www.youtube.com']").each(function(){var a=this.href.slice(this.href.indexOf("v=")+2,this.href.indexOf("v=")+13);$('<a rel="videoYoutube" title="'+b+'" href="http://www.youtube.com/embed/'+a+'"><img src="http://img.youtube.com/vi/'+a+'/1.jpg"/>

Unknown end tag for &lt;/a&gt;

').insertAfter(this);$("a[rel='videoYoutube']").colorbox({iframe:true,innerWidth:853,innerHeight:510,current:"video {current} of {total}"});$(this).remove();$("#hotvideYoutube td fieldset:eq(0)").show();$("p.fmloadingvideo:eq(0)").hide()})})});$('<span/>').load('/f116-hot-video-youtube .blog_message:eq(1) a',{limit:25},function(){jQuery(this).hide().appendTo('#noidunghot2').fadeIn(1);$('<span id="titletube2"/>').load('/f116-hot-video-youtube .topic-title:eq(1) a',{limit:25},function(){$(this).hide().appendTo('#tenbaihot2').fadeIn(1);var b=$("#tenbaihot2 #titletube2").text();$('#tenbaihot2').text(b);$("#noidunghot2 a[href='http://www.youtube.com']").each(function(){var a=this.href.slice(this.href.indexOf("v=")+2,this.href.indexOf("v=")+13);$('<a rel="videoYoutube" title="'+b+'" href="http://www.youtube.com/embed/'+a+'"><img src="http://img.youtube.com/vi/'+a+'/1.jpg"/></a>').insertAfter(this);$("a[rel='videoYoutube']").colorbox({iframe:true,innerWidth:853,innerHeight:510,current:"video {current} of {total}"});$(this).remove();$("#hotvideYoutube td fieldset:eq(1)").show();$("p.fmloadingvideo:eq(1)").hide()})})});$('<span/>').load('/f116-hot-video-youtube .blog_message:eq(2) a',{limit:25},function(){jQuery(this).hide().appendTo('#noidunghot3').fadeIn(1);$('<span id="titletube3"/>').load('/f116-hot-video-youtube .topic-title:eq(2) a',{limit:25},function(){$(this).hide().appendTo('#tenbaihot3').fadeIn(1);var b=$("#tenbaihot3 #titletube3").text();$('#tenbaihot3').text(b);$("#noidunghot3 a[href='http://www.youtube.com']").each(function(){var a=this.href.slice(this.href.indexOf("v=")+2,this.href.indexOf("v=")+13);$('<a rel="videoYoutube" title="'+b+'" href="http://www.youtube.com/embed/'+a+'"><img src="http://img.youtube.com/vi/'+a+'/1.jpg"/>

Unknown end tag for &lt;/a&gt;

').insertAfter(this);$("a[rel='videoYoutube']").colorbox({iframe:true,innerWidth:853,innerHeight:510,current:"video {current} of {total}"});$(this).remove();$("#hotvideYoutube td fieldset:eq(2)").show();$("p.fmloadingvideo:eq(2)").hide()})})});$('<span/>').load('/f116-hot-video-youtube .blog_message:eq(3) a',{limit:25},function(){jQuery(this).hide().appendTo('#noidunghot4').fadeIn(1);$('<span id="titletube4"/>').load('/f116-hot-video-youtube .topic-title:eq(3) a',{limit:25},function(){$(this).hide().appendTo('#tenbaihot4').fadeIn(1);var b=$("#tenbaihot4 #titletube4").text();$('#tenbaihot4').text(b);$("#noidunghot4 a[href^='http://www.youtube.com']").each(function(){var a=this.href.slice(this.href.indexOf("v=")+2,this.href.indexOf("v=")+13);$('<a rel="videoYoutube" title="'+b+'" href="http://www.youtube.com/embed/'+a+'"><img src="http://img.youtube.com/vi/'+a+'/1.jpg"/>

Unknown end tag for &lt;/a&gt;

').insertAfter(this);$("a[rel='videoYoutube']").colorbox({iframe:true,innerWidth:853,innerHeight:510,current:"video {current} of {total}"});$(this).remove();$("#hotvideYoutube td fieldset:eq(3)").show();$("p.fmloadingvideo:eq(3)").hide()})})})});



```



Chỉnh toàn Bộ số 116 Trong code trên = Số Chuyên mục chứa Video
Tiếp theo là code chèn vào index\_body

```

<table class="tborder" cellpadding="6" cellspacing="1" border="0" width="930px" align="center"><tbody>
<!-- BEGIN switch_user_logged_in -->
<tr><td id="chixem" class="tcat">Click Vô Hình youtube bên cạnh để gửi video<input  id="nhapurlyoutube" title="Bấm vào đây để gửi bài hát" style="height: 20px;float: center;text-align: center;cursor: pointer;border: 0px!important;font-weight: bold;margin: 0 10px;display:inline !important;width: 64px;color: #FFF;background: #FFF url(http://i44.servimg.com/u/f44/15/64/85/86/youtub10.png) no-repeat 0 0;" type="button">

Unknown end tag for &lt;/td&gt;

<td id="khungnhapurl" class="tcat" style="display:none";><div id="sendvideoFMvi" style="padding: 0 10px;" align="center"><iframe name="videoreload" height="0px" width="0px" frameborder="0">

Unknown end tag for &lt;/iframe&gt;

<form target="videoreload" id="sendtube" class="clearfix" action="/post" method="post" name="post" onsubmit="return vB_Editor['text_editor'].prepare_submit(0,0)" enctype="multipart/form-data"><label class="grey" for="subject">Tiêu đề:

Unknown end tag for &lt;/label&gt;

<input id="titlevideo" width="100px" type="text" class="post" name="subject" value="" maxlength="26" tabindex="2" title="Tiêu đề từ 3 - 26 ký tự" onkeypress="if (event.keyCode==13){return false}" size="23"/>  <label class="grey" for="password">Liên kết Youtube:

Unknown end tag for &lt;/label&gt;

<input style="width:230px!important" id="text_editor_textarea" class="post" onclick="storeCaret(this)" onkeyup="storeCaret(this)" name="message" title="Liên kết video Youtube trên thanh địa chỉ của trình duyệt" onselect="storeCaret(this)" wrap="virtual" value="" size="23"/><input type="hidden" name="lt" value="0"><input type="hidden" name="mode" value="newtopic"><input type="hidden" name="f" value="116">  <input id="guibai" class="bt_Send" onclick="set_solved(this.form.elements['subject'],'»')" class="mainoption" type="submit" name="post" value="Gửi" tabindex="6" accesskey="s">

Unknown end tag for &lt;/form&gt;

<script type="text/javascript">$("form#sendtube input#guibai.bt_Send").click(function(){$('form#sendtube').submit(function(){var t=setTimeout("fmtube()",1000);});});function fmtube(){window.location.reload()}

Unknown end tag for &lt;/script&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;


<!-- END switch_user_logged_in -->
<tr><td class="alt1"><table style="background:#FFF url('http://www.wonderbackgrounds.com/abstract/abstract_background_04.gif') repeat;" width="100%" id="hotvideYoutube" class="stylewhite"><tr><td width="25%"><center><b><span id="noidunghot1" class="mtmyavatar4">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/center&gt;

<br><b><center>• <span id="tenbaihot1" class="videoten">

Unknown end tag for &lt;/span&gt;

 •

Unknown end tag for &lt;/center&gt;



Unknown end tag for &lt;/b&gt;

<center> Click Vô Hình để xem video

Unknown end tag for &lt;/center&gt;



Unknown end tag for &lt;/td&gt;

<td width="25%"><center><b><span id="noidunghot2" class="mtmyavatar4">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/center&gt;

<br><b><center>• <span id="tenbaihot2" class="videoten">

Unknown end tag for &lt;/span&gt;

 •

Unknown end tag for &lt;/center&gt;



Unknown end tag for &lt;/b&gt;

<center> Click Vô Hình để xem video

Unknown end tag for &lt;/center&gt;



Unknown end tag for &lt;/td&gt;

<td width="25%"><center><b><span id="noidunghot3" class="mtmyavatar4">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/center&gt;

<br><b><center>• <span id="tenbaihot3" class="videoten">

Unknown end tag for &lt;/span&gt;

 •

Unknown end tag for &lt;/center&gt;



Unknown end tag for &lt;/b&gt;

<center> Click Vô Hình để xem video

Unknown end tag for &lt;/center&gt;



Unknown end tag for &lt;/td&gt;

<td width="25%"><center><b><span id="noidunghot4" class="mtmyavatar4">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/center&gt;

<br><b><center>• <span id="tenbaihot4" class="videoten">

Unknown end tag for &lt;/span&gt;

 •

Unknown end tag for &lt;/center&gt;



Unknown end tag for &lt;/b&gt;

<center> Click Vô Hình để xem video

Unknown end tag for &lt;/center&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;





```

Bạn tìm trên đoạn code Trên

```

jQuery("<div />").load("/post?f=12&mode=newtopic input[name^=auth]").appendTo("form#sendtube");
```


Sửa số 12 Thành số Chuyên Mục Gửi video
sửa số 116 thành số chuyên mục chứa video

```

[color=#F2BA28][font=Courier]<input type="hidden" name="f" value="116">[/font][/color]

```

Chèn vô CSS



Unknown end tag for &lt;/code&gt;


> .mtmyavatar4 img{
> opacity: 0.7;filter: alpha(opacity=30);
> border-radius:5px;
> background-color: #FFFFFF;
> margin:1px 3px 3px 1px;
> padding:3px;
> border:1px solid #d4d4d4;
> box-shadow: 3px 3px 3px #8A8A8A;
> transform:rotate(0deg); -moz-transform:rotate(0deg); -webkit-transform:rotate(0deg);
> transition: all 2s ease; -webkit-transition: all 2s ease; -moz-transition: all 2s ease;
> }
> .mtmyavatar4 img:hover {
> opacity: 1; filter: alpha(opacity=100);
> transition: all 2s ease; -webkit-transition: all 2s ease; -moz-transition: all 2s ease;
> transform:rotate(0deg); -moz-transform:rotate(0deg); -webkit-transform:rotate(0deg);
> transform: scale(1.5); -webkit-transform: scale(1.5); -moz-transform: scale(1.5);
> position:relative;
> }




Unknown end tag for &lt;/code&gt;




Xong cười nhăn răng