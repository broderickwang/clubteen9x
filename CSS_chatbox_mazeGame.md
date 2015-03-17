Theo yêu cầu topic này!
http://www.hotrofm.com/t1614-topic

Nên Bim rip, không biết có đúng ý bạn không, cứ add thử rồi tính sau nhé :))

Bước 1 : vào CSS xóa hết những CSS liên quan tới chatbox cũ!
Bước 2 : vào index\_body thêm code này dưới {CHATBOX\_TOP}

```

<center><img src="http://i43.servimg.com/u/f43/17/03/56/26/think11.png"/>

Unknown end tag for &lt;/center&gt;



```
Bước 3 : Cho code này vào CSS

```

#chatbox_header.main-head {
-webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 1px 0 0 rgba(255, 255, 255, 0.2), inset -1px 0 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.45);
-webkit-font-smoothing: subpixel-antialiased;
background-image: url(http://i34.servimg.com/u/f34/15/64/85/86/forum_11.jpg);
background-position: bottom;
border-bottom-color: #300;
box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 1px 0 0 rgba(255, 255, 255, 0.2), inset -1px 0 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.45);
color: white!important;
font-family: Marmelad, sans-serif!important;
font-size: 13px;
min-height: 20px;
text-decoration: none;
text-shadow: 0 2px 3px black;
}
#chatbox_header.main-head {
background-color: #E3E3E3;
padding: 0 1.3em;
}
#chatbox_header {
height: 30px;
}
.chatbox-title {
float: left;
margin: 0;
padding: 2px 5px 0;
width: 15em;
}
.chatbox-options {
float: right;
font-size: 11px;
list-style: none;
margin: .7em .5em .5em;
}
#chatbox_members {
border: 1px solid #9FBBCE;
border-left: 3px double #9FBBCE;
border-right: 1px solid #9FBBCE;
min-height: 233px;
right: 0;
top: 65px;
width: 19.4%;
}
#chatbox {
border-bottom: 1px solid #9FBBCE;
border-left: 1px solid #9FBBCE;
border-top: 1px solid #9FBBCE;
bottom: 0;
left: 0;
min-height: 220px;
top: 65px;
width: 80%;
background-color: white;
}
#chatbox_footer {
border: 1px solid #9FBBCE;
border-bottom: 0;
min-height: 35px;
position: relative;
}
#chatbox_footer {
border-top: 1px dashed #CCC;
bottom: 0;
left: 0;
right: 0;
}
#chatbox_messenger_form {
margin: 5px 0 0;
}
#chatbox_messenger_form input#message {
min-width: 525px;
padding: 4px;
}
#chatbox p {
line-height: 1.2em;
}
.chatbox_row_1 {
background: url(http://i30.servimg.com/u/f30/17/60/05/62/rmh4p10.png) #F2F6F6 repeat-x top;
border-bottom: 1px solid #EDF1F1;
border-top: 1px solid white;
}
.chatbox_row_1 {
background-color: #FBFBFB;
}
p {
display: block;
-webkit-margin-before: 0.1em;
-webkit-margin-after: 0.1em;
-webkit-margin-start: 0px;
-webkit-margin-end: 0px;
}


```
Rip by cubimtq