demo: http://www.fmcodes.com/forum

http://ns0.upanh.com/b6.s30.d1/14fa0aefc857d6259fa7141c39cb4e36_50870230.codechat.bmp


chèn vào index body:

```

<script src="http://avacweb.net/FM/Public/lgchatv4.5.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;


<div id="LGchatbtn" class="LGchatBtn" onclick="LGchatShowHide('LGchat');" onmousedown="savelst();"> Chat 

Unknown end tag for &lt;/div&gt;


<span id="chatcount" class="LGchatBtn" onclick="LGchatShowHide('LGchatOnlineUsers');">

Unknown end tag for &lt;/span&gt;


<div id="LGchatOnlineUsers" style="display:none;">

Unknown end tag for &lt;/div&gt;

<div style="display:none;text-align:left;" id="LGchat"><div id="lgchatholder">
<iframe name="LGchat" style="width:100%;height:450px;margin-top:0px;border:none;    border-radius: 3px 3px 3px 3px;" src="/chatbox/index.forum?archives=1" onload="LGchatStart();">

Unknown end tag for &lt;/iframe&gt;




Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



```


Chèn vào css

```


#LGchatOnlineUsers {
height: 400px;
width: 200px;
background:
#FAFAFA url(http://cuul.tk/img/gradient.png) repeat-x 0 0px;
border: 1px solid
#E3E3E3!important;
border-radius: 3px 3px 3px 3px;
position: fixed;
right: 5px;
bottom: 35px;
z-index: 999;
font-size: 12px;
list-style: none;
}
#LGchat {
background:
#FAFAFA url(http://cuul.tk/img/gradient.png) repeat-x 0 0px;
border: 1px solid
#E3E3E3!important;
border-radius: 3px 3px 3px 3px;
padding: 0px!important;
width: 80%;
float: right;
z-index: 999;
position: fixed;
right: 5px;
bottom: 35px;
margin: 0px;
}
#chatcount {
width: 35px;
right: 2px;
height: 24px;
}
.LGchatBtn:hover {
background: white;
background: -moz-linear-gradient(top, white 0%, #EEE 100%);
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,white), color-stop(100%,#EEE));
background: -webkit-linear-gradient(top, white 0%,#EEE 100%);
background: -o-linear-gradient(top, white 0%,#EEE 100%);
background: -ms-linear-gradient(top, white 0%,#EEE 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#eeeeee',GradientType=0 );
background: linear-gradient(top, white 0%,#EEE 100%);
border-color: #BBB;
color: #4C4C4C;
}

#LGchatbtn {
width: 90px;
right: 40px;
height: 24px;
}
.LGchatBtn {
cursor: pointer;
line-height: 22px;
font-weight: bold;
text-align: center;
position: fixed;
bottom: -2px;
text-decoration: none;
font-family: arial, sans-serif!important;
border-width: 1px;
border-style: solid;
padding: 5px;
cursor: pointer;
font-size: 12px!important;
border-radius: 2px;
box-shadow: 0px 1px 0px
rgba(0, 0, 0, 0.05);
box-shadow: 0px 1px 0px
rgba(255, 255, 255, 0.75) background:#F9F9F9;
background: -moz-linear-gradient(top, #F9F9F9 0%, #EEE 100%);
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#F9F9F9), color-stop(100%,#EEE));
background: -webkit-linear-gradient(top, #F9F9F9 0%,#EEE 100%);
background: -o-linear-gradient(top, #F9F9F9 0%,#EEE 100%);
background: -ms-linear-gradient(top, #F9F9F9 0%,#EEE 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f9f9f9', endColorstr='#eeeeee',GradientType=0 );
background: linear-gradient(top, #F9F9F9 0%,#EEE 100%);
border-color: #CCC;
color: #666;
text-shadow: 0px 1px 0px
white;
}
```



Rep để xem tiếp
ga)26