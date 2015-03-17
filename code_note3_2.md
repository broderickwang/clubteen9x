Từ CSS của Chupy đã share!
Giờ Bim viết js để cái bbcode đó lên thanh công cụ cho anh em sài cho dễ cười nhăn răng
Đỡ phải viết nhiều html khi post bài hay reply
Bắt tay vào việc nào,cmt để thấy bài nhá cười ngoác miệng

Cho cái này vào cuối viewtopic\_body

```

<script type="text/javascript">

$(function(){$("<div style=\"display:inline!important\" id=\"text_editor_select_controls\"><div style=\"visibility:hidden\" class=\"select\" id=\"notes\"><button onclick=\"bbfontstyle('[table class=warning2][tr][td]','[/td][/tr][/table]');selectWysiwyg(this,'notes');return false\"><img src=\"http://i34.servimg.com/u/f34/15/64/85/86/error10.png\">Warning</button>
<button onclick=\"bbfontstyle('[table class=lock2][tr][td]','[/td][/tr][/table]');selectWysiwyg(this,'notes');return false\"><img src=\"http://i34.servimg.com/u/f34/15/64/85/86/lock10.png\">Lock</button>
<button onclick=\"bbfontstyle('[table class=yes2][tr][td]','[/td][/tr][/table]');selectWysiwyg(this,'notes');return false\"><img src=\"http://i34.servimg.com/u/f34/15/64/85/86/accept10.png\">Yes</button>
<button onclick=\"bbfontstyle('[table class=tag2][tr][td]','[/td][/tr][/table]');selectWysiwyg(this,'notes');return false\"><img src=\"http://i34.servimg.com/u/f34/15/64/85/86/link_a10.png\">Tag</button>
<button onclick=\"bbfontstyle('[table class=move2][tr][td]','[/td][/tr][/table]');selectWysiwyg(this,'notes');return false\"><img src=\"http://i34.servimg.com/u/f34/15/64/85/86/page_w10.png\">Move</button>
<button onclick=\"bbfontstyle('[table class=ban2][tr][td]','[/td][/tr][/table]');selectWysiwyg(this,'notes');return false\"><img src=\"http://i34.servimg.com/u/f34/15/64/85/86/set_se10.png\">Band</button>
<button onclick=\"bbfontstyle('[table class=tum2][tr][td]','[/td][/tr][/table]');selectWysiwyg(this,'notes');return false\"><img src=\"http://i34.servimg.com/u/f34/15/64/85/86/thumb_10.png\">Tum</button>


Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<button class=\"button2\" onclick=\"selectWysiwyg(this,'notes')\" onmouseover=\"helpline('BBcode notes')\" type=\"button\"><img src=\"/users/2611/10/63/87/album/inote10.gif\" />

Unknown end tag for &lt;/button&gt;

 <img src=\"http://illiweb.com/fa/wysiwyg/separator.png\" style=\"vertical-align: middle;\"> ").insertBefore("span#text_edit input.button2[value='Others']");});


Unknown end tag for &lt;/script&gt;



```

Cuối cùng cho vào CSS

```

.warning2 {
-moz-box-shadow: 1px 1px 10px red;
-webkit-box-shadow: 1px 1px 10px red;
border-color: red;
box-shadow: 1px 1px 10px red;
-moz-border-radius: 10px;
-webkit-border-radius: 10px;
border-radius: 10px;
border: 1px solid;
margin: 10px auto;
padding: 15px 10px 15px 70px;
background-repeat: no-repeat;
background-position: 10px center;
width: 90%;
}
.warning2 {
color: red;
font-family: 'Lobster';
font-style: normal;
font-weight: normal;
font-size: 15px;
background-color: transparent;
background-image: url('http://i47.servimg.com/u/f47/16/97/26/79/error10.png');
}


.lock2 {
-moz-box-shadow: 1px 1px 10px blue;
-webkit-box-shadow: 1px 1px 10px blue;
border-color: blue;
box-shadow: 1px 1px 10px blue;
-moz-border-radius: 10px;
-webkit-border-radius: 10px;
border-radius: 10px;
border: 1px solid;
margin: 10px auto;
padding:15px 10px 15px 70px;
background-repeat: no-repeat;
background-position: 10px center;
width: 90%;
}
.lock2 {
color: blue;
font-family: 'Lobster';
font-style: normal;
font-weight: normal;
font-size: 15px;
background-color: transparent;
background-image: url('http://i47.servimg.com/u/f47/16/97/26/79/lock10.png');
}


.yes2 {
-moz-box-shadow: 1px 1px 10px green;
-webkit-box-shadow: 1px 1px 10px green;
border-color: green;
box-shadow: 1px 1px 10px green;
-moz-border-radius: 10px;
-webkit-border-radius: 10px;
border-radius: 10px;
border: 1px solid;
margin: 10px auto;
padding:15px 10px 15px 70px;
background-repeat: no-repeat;
background-position: 10px center;
width: 90%;
}
.yes2 {
color: green;
font-family: 'Lobster';
font-style: normal;
font-weight: normal;
font-size: 15px;
background-color: transparent;
background-image: url('http://i47.servimg.com/u/f47/16/97/26/79/accept11.png');
}


.tag2 {
-moz-box-shadow: 1px 1px 10px orange;
-webkit-box-shadow: 1px 1px 10px orange;
border-color: orange;
box-shadow: 1px 1px 10px orange;
-moz-border-radius: 10px;
-webkit-border-radius: 10px;
border-radius: 10px;
border: 1px solid;
margin: 10px auto;
padding:15px 10px 15px 70px;
background-repeat: no-repeat;
background-position: 10px center;
width: 90%;
}
.tag2 {
color: orange;
font-family: 'Lobster';
font-style: normal;
font-weight: normal;
font-size: 15px;
background-color: transparent;
background-image: url('http://i47.servimg.com/u/f47/16/97/26/79/link_a10.png');
}


.move2 {
-moz-box-shadow: 1px 1px 10px indigo;
-webkit-box-shadow: 1px 1px 10px indigo;
border-color: indigo;
box-shadow: 1px 1px 10px indigo;
-moz-border-radius: 10px;
-webkit-border-radius: 10px;
border-radius: 10px;
border: 1px solid;
margin: 10px auto;
padding:15px 10px 15px 70px;
background-repeat: no-repeat;
background-position: 10px center;
width: 90%;
}
.move2 {
color: indigo;
font-family: 'Lobster';
font-style: normal;
font-weight: normal;
font-size: 15px;
background-color: transparent;
background-image: url('http://i47.servimg.com/u/f47/16/97/26/79/page_w10.png');
}


.ban2 {
-moz-box-shadow: 1px 1px 10px #000;
-webkit-box-shadow: 1px 1px 10px #000;
border-color: #000;
box-shadow: 1px 1px 10px #000;
-moz-border-radius: 10px;
-webkit-border-radius: 10px;
border-radius: 10px;
border: 1px solid;
margin: 10px auto;
padding:15px 10px 15px 70px;
background-repeat: no-repeat;
background-position: 10px center;
width: 90%;
}
.ban2 {
color: #000;
font-family: 'Lobster';
font-style: normal;
font-weight: normal;
font-size: 15px;
background-color: transparent;
background-image: url('http://i47.servimg.com/u/f47/16/97/26/79/set_se10.png');
}


.tum2 {
-moz-box-shadow: 1px 1px 10px brown;
-webkit-box-shadow: 1px 1px 10px brown;
border-color: brown;
box-shadow: 1px 1px 10px brown;
-moz-border-radius: 10px;
-webkit-border-radius: 10px;
border-radius: 10px;
border: 1px solid;
margin: 10px auto;
padding:15px 10px 15px 70px;
background-repeat: no-repeat;
background-position: 10px center;
width: 90%;
}
.tum2 {
color: brown;
font-family: 'Lobster';
font-style: normal;
font-weight: normal;
font-size: 15px;
background-color: transparent;
background-image: url('http://i47.servimg.com/u/f47/16/97/26/79/thumb_10.png');
}
```


Viết by cubimtq!

tí quên cái đề mâu: đề mâu là các bạn làm đi rồi thấy luôn cười ngoác miệng
Code đã test, thành công 100%