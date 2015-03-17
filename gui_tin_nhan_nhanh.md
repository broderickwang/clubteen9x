![http://img812.imageshack.us/img812/338/demo111.png](http://img812.imageshack.us/img812/338/demo111.png)
Hướng dẫn :
Code này mình không để ẩn vì nếu để ẩn thì nhiều người chỉ vào reply và lấy code rồi out không giải quyết được việc gì tăng tính spam cho forum
Nên mong ai đã làm được reply hoặc góp ý phía dưới

Vào ACP --> Display --> Templates --> Overall\_header tìm :

```

<ul class="clearfix">
<li>{GENERATED_NAV_BAR}

Unknown end tag for &lt;/li&gt;




```

Đặt ở phía dưới nó code sau

```

<li>
<a class="thai_tab" >
<style type="text/css">


.white_content {
display: none;
position: absolute;
text-align: left;
border: 6px solid #464646;
z-index: 1002;
overflow: hidden;
float: left;
width: 420px;
height: 233px;
border-radius: 5px;
top: 30%;
left: 40%;
}
.topborder{
height: 20px;
background: #6D84B4;
border: 1px solid #3B5998;
border-bottom: none;
padding-top: 5px;
padding-bottom: 5px;
padding-right: 10px;
padding-left: 10px;
}
#bottombuttons{width: 100%;
height: 50px;
background: #F2F2F2;
display: inline-block;
border: 1px solid #CCC;
}
.topborder span{text-align: left;
font-size: 14px;
font-family: 'lucida grande',tahoma,verdana,arial,sans-serif;
color: white;
font-weight: bold;}
.formbody{background:#fff;height:150px;}
.usernameinput{
border: 1px solid #BDC7D8;
width: 400px;
}
.newmessage{height: 100px;
width: 200px;
padding-left: 10px;
padding-right: 10px;
}
#bottombuttons span.button{float:right;padding-top:15px;padding-right:10px;}
.fmbutton{height:20px;background-color: #5B74A8;border-color: #29447E #29447E #1A356E;font-family: 'lucida grande',tahoma,verdana,arial,sans-serif;font-weight:bold;font-size:13px;padding:2px;color:#fff;}
.fm1button {
cursor: pointer;
display: inline-block;
font-size: 11px;
font-weight: bold;
line-height: 13px;
padding: 2px 6px;
text-align: center;
text-decoration: none;
vertical-align: top;
white-space: nowrap;
border: 1px solid #999;
}
.fm2button {
background-image: url(http://static.ak.fbcdn.net/rsrc.php/v2/yK/x/nDEHv4nTejR.png);
background-repeat: no-repeat;
background-size: auto;
background-position: -1px -441px;
background-color: #5B74A8;
border-color: #29447E #29447E #1A356E;
}
.fm3button {
height: 19px;
font-size:13px;
}
textarea {
resize: none;
width: 400px;
height: 100px;
border: 1px solid #BDC7D8;
}

.tPM span {
cursor: pointer;
color : white;
}
.hotrofm_ground{
display: none;
position: fixed;
top: 0%;
left: 0%;
width: 100%;
height: 100%;
z-index:1001;
background:rgba(0,0,0,0.9);
}


Unknown end tag for &lt;/style&gt;


<span class="tPM" onclick = "document.getElementById('light').style.display='block';document.getElementById('fade').style.display='block'"><span>Quick Message

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;

<div id="light" class="white_content"><div class="topborder"><span>Gửi tin nhanh

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;

<div class="formbody">
<form id="tPrivate" onSubmit="document.getElementById('light').style.display='none';document.getElementById('fade').style.display='none';" action="/privmsg" method="post" name="post" class="newmessage">
<input placeholder="Gửi đến:" name="username[]" onfocus="if(this.value == 'Gửi đến:'){this.value = '';}" type="text" onblur="if(this.value == ''){this.value='Gửi đến:';}" type="text" class="usernameinput" required>
<input required placeholder="Tiêu đề:" onkeypress="if (event.keyCode==13){return false}" maxlength="64" name="subject" onfocus="if(this.value == 'Tiêu đề:'){this.value = '';}" type="text" onblur="if(this.value == ''){this.value='Tiêu đề:';}" type="text" class="usernameinput"/>
<textarea required name="message"  onfocus="if(this.value == 'Nhập nội dung tin nhắn...'){this.value = '';}" type="text" onblur="if(this.value == ''){this.value='Nhập nội dung tin nhắn...';}" >Nhập nội dung tin nhắn...

Unknown end tag for &lt;/textarea&gt;




Unknown end tag for &lt;/div&gt;

<div id="bottombuttons">
<span class="button"><input type="submit" value="Submit" name="post" class="fmbutton fm1button fm2button fm3button">

Unknown end tag for &lt;/form&gt;

  <button class="fmbutton fm1button fm2button fm3button" onClick="document.getElementById('light').style.display='none';document.getElementById('fade').style.display='none'"">Cancel</button></span>


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;

<div id="fade" class="hotrofm_ground" onclick="document.getElementById('light').style.display='none';document.getElementById('fade').style.display='none'">

Unknown end tag for &lt;/div&gt;





Unknown end tag for &lt;/li&gt;




```
Vui lòng ghi rõ nguồn www.hotrofm.com khi share bài viết đi nơi khác và đừng ẩn bài viết