Hướng dẫn:
1. Bạn và phần Admin Panel -> Modules -> Portal & Widgets -> Forum Widgets Management -> Create a widget ->
Widget name: FMChat v3
Use as a table type: No
Widget title: FMChat v3
Widget source (Copy/Paste the code):

```

<script type="text/javascript" src="http://fmquery.com/scripts/FMChat.js">

Unknown end tag for &lt;/script&gt;

<div id="FMChatBase" class="chatbase" onclick="openClose()" ><span style="font-weight: bold; line-height: 2em; font-size: 11px;">ChatBox

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;

<div id="chat" style="display: none;"><iframe id="FMChat" name="FMChat" onload="FMChatLoad();" style="border: none; border-radius: 5px; -moz-border-radius: 5px; -webkit-border-radius: 5px;" src="/chatbox" width="100%" height="100%">

Unknown end tag for &lt;/iframe&gt;



Unknown end tag for &lt;/div&gt;



```

2. Hit Save.
3. Hit "Personal Widgets" and drag "FMChat v3" to whatever side your widgets are on. And hit save.
4. Edit the widgets' permissions by clicking the image on FMChat v3. And select: "Administrators, Moderators, and Members" leave guests unchecked. And hit save.
5. Chèn vào CSS
Admin Panel -> Display -> Pictures and Colors -> Colors -> CSS StyleSheet -> Paste the following in the box:

```

/*FMChat Design*/
.chatbase { /*This can be edited to your liking - (the button)*/
position: fixed;
bottom: 2px;
right: 15px;
background: #56A0D3;
border: 2px solid #7BB92B;
width: 75px;
height: 20px;
border-radius: 5px;
text-align: center !important;
cursor: pointer;
color: #ffffff;
}

.chatbase:hover { /*This can be edited to your liking - (hovering over the button)*/
border-color: #D30C3F;
color: #000000;
}

#chat { /*This can be edited to your liking - (box surrounding the chatbox)*/
border: 2px solid #7BB92B;
width: 65%;
position: fixed;
right: 15px;
bottom: 27px;
height: 50%;
border-radius: 5px;
}
```



Trả lời để thấy tiếp hướng dẫn: fdsfs