Demo : Xem bên Topic Show nha các bạn !!!

> Bước 1 : Tạo 1 Weidgets

> Vào ACP > Moduels > Portal & Widgets > Forum widgets management > Creat a new Weidtes

> Widget name : Chatbox Ruby

> Use a table type : Chọn Không

> Widget title : Chat Ruby ( ẩn rồi thì phải Huýt sáo )
```

<script src="http://avacweb.net/FM/Public/lgchatv4.5.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;

<div id="userId" style="display:none">{USERLINK}

Unknown end tag for &lt;/div&gt;

<div id="LGchatbtn" class="LGchatBtn" onclick="LGchatShowHide('LGchat');" onmousedown="savelst();"> Chat 

Unknown end tag for &lt;/div&gt;


<span id="chatcount" class="LGchatBtn" onclick="LGchatShowHide('LGchatOnlineUsers');">

Unknown end tag for &lt;/span&gt;

<div id="LGchatOnlineUsers" style="display:none;">

Unknown end tag for &lt;/div&gt;

<div style="display:none;text-align:left;" id="LGchat">To PM a user in the chatbox use this structure: '/pm username: message' for example '/pm LGforum: hi there!'.<div id="lgchatholder"><iframe name="LGchat" style="width:99%;height:450px;margin-top:5px;border:none" src="/chatbox/index.forum?archives=1" onload="LGchatStart();">

Unknown end tag for &lt;/iframe&gt;



Unknown end tag for &lt;/div&gt;

<div id="lgtogglesnd" onclick="togglelgsound();" style="cursor:pointer;">Sound is: <span class="snd" id="sndon">On

Unknown end tag for &lt;/span&gt;


<span class="snd" style="display:none;" id="sndoff">Off

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;


```


> Cho Weidtes Chat Ruby lên và kích hoạt Wei

> Bước 2 : vào Javascript Code management tạo 1 file java
> Placment : All
```

var CopyrightNotice = '////////-------LGchat Version 4 for forumotion boards, made by LGforum. Copyright © by LGforum. All Rights Reserved. Use and/or modification of this script is not allowed without this entire copyright notice in the original, copied, or modified script. Absolutely no distribution without written consent from LGforum.--------\\\\.';

/* LG CHAT OPTIONS */
var LGbgColor = '#CADCEB',
newMsgColor = 'orange',
newMsgSoundSrc='http://www.freesfx.co.uk/rx2/mp3s/2/1305_1256857800.mp3',
updateTime=1500,
PMpermissions='1,2',
savePermissions='1,2',
LGchat_title='Chém gió Danger Zone',
LGautoLog=true,
LG_sticky='Không được chửi bậy';

/* END OF LG CHAT OPTIONS */

```

> Bỏ cái này vào Css nhá :```


/**** LG CHAT STYLING ****/
#LGchat {
background: #e8e8e8; /* EDITABLE - Color of block around outside */
width: 80%;
float: right;
z-index: 999;
position: fixed;
right: 5px;
bottom: 30px;
margin: 0px;
padding: 3px;
}
#LGchatbtn {
width: 90px;
right: 40px;
height: 24px;
}
.LGchatBtn {
background: #CADCEB; /* EDITABLE - Background color of buttons */
cursor: pointer;
line-height: 22px;
color: #105289; /* EDITABLE - Color of border and text of buttons */
font-family: Tahoma,Verdana,Arial;
font-size: 13px;
font-weight: bold;
text-align: center;
-moz-border-radius: 6px;
border-radius: 6px ;
border:1px solid;
position: fixed;
bottom: 1px;
}
.LGchatBtn:hover { color: #d31141;} /* EDITABLE - Color of text and border of buttons on hover */
.chatPM { display: none;border: 1px solid #105289;padding: 3px;margin: 3px;font-size: 13px;}
#LGchatOnlineUsers .online{background-image: none;}
#chatcount {  width: 35px;  right: 2px;  height: 24px;}
#LGchatOnlineUsers {
height: 400px; /* EDITABLE - height of the online box */
width: 200px; /* EDITABLE - width of the online box */
border: 2px solid #105289; /* EDITABLE - border of online box */
border-radius: 6px;
position: fixed;
right: 5px;
bottom: 30px;
z-index: 999;
background: #fff; /* EDITABLE - Background color of online box */
}
#LGchatOnlineUsers h4 {
background-color: #105289;  /* EDITABLE - Background color of header of online box */
font-size: 14px;
text-align: center;
margin-top: 0px;
margin-bottom: 5px;
color: #fff;  /* EDITABLE -  color of text in the header of online box */
padding: 3px 0px;
}
#lgtogglesnd {  font-weight: bold;  color: #000;  /* EDITABLE - color of sound toggling button */
margin: 5px;  width: 100px;}
#LGsticky {
position: absolute;
top: 30px; right: 0px; left: 0px;
border: 1px solid #c05; /* EDITABLE - Border color of sticky message box. */
background: #c71e26; /* EDITABLE - Background color of sticky message box */
padding: 4px;
text-align: center;
}


```
Hình như là ẩn hết rồi đó Huýt sáo