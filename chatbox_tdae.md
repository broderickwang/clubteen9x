![http://img13.imageshack.us/img13/7559/chatboxtdae.png](http://img13.imageshack.us/img13/7559/chatboxtdae.png)
Cập nhật ver 2.0

-Thêm mục online của chatbox
-Tự động hiện thị thành viên online trên danh sách mà không cần F5 lại trang


Hướng dẫn : Đã ẩn

Bước 1 : xóa hết CSS liên quan đến Chatbox cũ
Bước 2 : Thêm vào CSS đoạn mã sau:
```

/*Chatbox T-DAE ver 2  by doannamthai - hotrofm*/
h2.chatbox-title:after { content: "Chatbox"; }
a.chat-title { display: none; }
#chatbox, #chatbox_footer, #chatbox_members {
background: white;
border-top: 1px solid #EAEAEA;
}

#chatbox_header.main-head {
background: #F3F3F3;
border: 1px solid #EBEBEB;
font-weight: 300;
overflow: hidden;
padding: 2px;
text-shadow: white 0 1px 0;
}

.chatbox-title, .chatbox-title a.chat-title {
color: #393939;
font-size: 12px;
font-weight: bold;
}

.chatbox-options li, .chatbox-options li a, .chatbox-options li label {
color: #393939;
}

.chatboxTDAE{
background: #F3F3F3;
border: 1px solid #EBEBEB;
font-weight: 300;
overflow: hidden;
padding: 2px;
text-shadow: white 0 1px 0;
}
.chatboxTDAE:hover {
opacity: 0.9;
}
div.main-content.chatbox.clearfix {
border: 1px solid #EAEAEA;
border-radius: 4px;
}

#chatbox p {
border-bottom: 1px solid #DDD;
border-top: 1px solid white;
line-height: 1.2em;
}

#chatbox_footer {
margin-top: 0px;
width: 285px;
min-width: 230px;
background: #FAFAFA;
float: left;
clear:both;
position: relative;
}
input#message.post {
height: 45px;
width: 235px;
padding: 6px;
border: 1px solid #D4D4D4;
background: #FCFCFC;
color: #363636;
text-shadow: black ;
-webkit-box-shadow: inset rgba(0, 0, 0, 0.1) 0px 1px 3px;
-moz-box-shadow: inset rgba(0,0,0,0.1) 0px 1px 3px;
box-shadow: inset rgba(0, 0, 0, 0.1) 0px 1px 3px;
margin: 20px;
margin-bottom: 0px;
}

#message, #submit_button {
background: #e0e0e0  repeat-x 0 0;
border-color: #13304B;
color: black;
text-shadow: #2B2B2B 0px -1px 0px;
-moz-box-shadow: rgba(0,0,0,0.43) 0px 1px 3px;
-webkit-box-shadow: rgba(0, 0, 0, 0.43) 0px 1px 3px;
box-shadow: rgba(0, 0, 0, 0.43) 0px 1px 3px;
-moz-border-radius: 2px;
-webkit-border-radius: 2px;
border-radius: 2px;
padding: 3px;
display: block;
margin: 10px;
margin-top: 0px;
margin-left: 20px;
}

#message, #submit_button:hover {
opacity: 0.5;
}

.fontbutton {
background: #dbdbdb  repeat-x 0 0;
border: 1px solid #1e345c;
color: white;
text-shadow: #474747 0px -1px 0px;
-moz-box-shadow: rgba(0,0,0,0.43) 0px 1px 3px;
-webkit-box-shadow: rgba(0, 0, 0, 0.43) 0px 1px 3px;
box-shadow: rgba(0, 0, 0, 0.43) 0px 1px 3px;
border-radius: 2px;
color: black;
cursor: pointer;
float: left;
margin: 3px;
padding: 3px;
margin-right: 10px;
text-align: left;
}

.fontbutton:hover {
opacity: 0.5;
}

#divsmilies img + img{visibility:visible!important}

#chatbox_messenger_form div.right img{visibility:hidden}

#simple-wrap {
background:white;
}

#divbold, #divcolor, #divitalic, #divsmilies, #divstrike, #divunderline {
background-position: center;
background-repeat: no-repeat;
}

#divbold {
background-image: url(http://cdn2.iconfinder.com/data/icons/oxygen/16x16/actions/format-text-bold.png);
}

#divitalic {
background-image: url(http://cdn2.iconfinder.com/data/icons/oxygen/16x16/actions/format-text-italic.png);
}

#divunderline {
background-image: url(http://cdn2.iconfinder.com/data/icons/oxygen/16x16/actions/format-text-underline.png);
}

#divstrike {
background-image: url(http://cdn1.iconfinder.com/data/icons/bnw/16x16/actions/text_strike.png);
}

#divcolor {
background-image: url(http://illiweb.com/fa/wysiwyg/color_swatch.png);
}

#divsmilies {
background-image: url(http://i26.servimg.com/u/f26/12/56/56/12/emotic10.png);
}

#chatbox{
background: #f0f0f0;
padding: 8px;
border: 1px solid gainsboro;
left: 290px;
margin-top: 9px;
right: 0px;
}
.left {
clear: both;
float: left;
}

#chatbox_members .member-title {
background: #F8E7DD;
background-color: #F4F9FD;
background-image: none;
border-bottom: 2px solid red;
color: #A30000;
font-family: Verdana,Arial,Helvetica,sans-serif;
font-size: 12px;
padding: .5em .25em;
text-align: center;
text-shadow: 1px 0 0 white;
}

#chatbox_members
{ display : none;}
#chatbox > p span.user > span strong {
display: none;
}
/*Chatbox T-DAE ver2  by doannamthai - hotrofm*/

```

Bước 3 : Vào index\_body tìm đoạn

```

{CHATBOX_TOP}
```

hoặc

```

{CHATBOX_BOTTOM}

```
Thêm dưới nó đoạn code sau :
```

<div class="chatboxTDAE">
{TOTAL_CHATTERS_ONLINE}: {CHATTERS_LIST}


Unknown end tag for &lt;/div&gt;



```

Bước 4 :
Tạo 1 file javascript
Tittle :AutologinCB
Place : In all the page hoặc In the home page đều được
Code :
```

function tautoCB() {
$.get("/", function(a) {
$(".chatboxTDAE").html($(a).find(".chatboxTDAE"));
setTimeout("tautoCB()", 3E3)
})
}
tautoCB();


```