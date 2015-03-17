![http://i43.servimg.com/u/f43/15/93/33/76/115.png](http://i43.servimg.com/u/f43/15/93/33/76/115.png)

Hướng dẫn :

Cho đoạn code sau vào : overall\_footer\_begin hoặc chỗ nào muốn hiển thị chatbox






```



<style>
.wmenu {cursor: pointer; float: right; margin-right: 5px; width: 150px; height: 24px; line-height: 22px; background:  #ddd; color: #660066; font-family: Tahoma,Arial; font-size: 13px; font-weight: bold; text-align: center; -moz-border-radius: 6px; border-radius: 6px ;  border:1px solid #848; position: fixed; bottom: 1px; right: 1px;-moz-border-radius: 120px 10px;
-webkit-border-radius: 120px 40px 120px 40px;
border-radius: 220px 30px;
-moz-box-shadow: 0px 0px 20px #000000;
-webkit-box-shadow: 0px 0px 20px #000000;
box-shadow: 0px 0px 20px #000000;
background-image: -moz-linear-gradient(top, #ffffff, #666666);
background-image: -webkit-gradient(linear, center top, center bottom, from(#ffffff), to(#666));
background-image: -o-linear-gradient(top, #ffffff, #666666);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#666666');
-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#666666')";
background-image: linear-gradient(top, #ffffff, #666666);
-moz-background-clip: padding-box;
-webkit-background-clip: padding-box;
background-clip: padding-box;}
.wmenu:hover {color: #d31141;}
.LGmodule {z-index: 999; position: fixed; left:20%; bottom: 30px; width: 79%; margin: 0px; padding: 0px; background: #e8e8e8 color: #000000; border: #804080;}

Unknown end tag for &lt;/style&gt;






<script type="text/javascript">
var CopyrightNotice='Updating chatbox online count for all forumotion boards. Copyright ©  by LeopardGeckoForum. All Rights Reserved. Use, modification, and/or distribution of this script is not allowed without direct permission from jordan@leopardgeckoforum.com. This entire copyright notice must remain in the original, copied, or modified script';

function showhide(elementname) {var displayed=document.getElementById(elementname).style.display;
if (displayed == 'none') { document.getElementById(elementname).style.display='block' }
if (displayed == 'block') { document.getElementById(elementname).style.display='none'}}

var timer=setTimeout('membercount();',1000);

function membercount() {
x=parent.LGchat.document.getElementById('chatbox_members');
z=jQuery(x).find('ul')[0];
if (z) {
y=z.getElementsByTagName('li');
chatno=y.length;
jQuery('#chatcount').html(chatno);
}
else { jQuery('#chatcount').html('0'); }
setTimeout('membercount();',3000);
}


Unknown end tag for &lt;/script&gt;

<div class="wmenu" onclick="showhide('chat');">Chat (<span id="chatcount">

Unknown end tag for &lt;/span&gt;

)

Unknown end tag for &lt;/div&gt;

<div class="LGmodule" style="display:none" id="chat">
<iframe name="LGchat" style="width:99%;height:450px;margin-top:5px;border:none" src="/chatbox/index.forum?archives=1">

Unknown end tag for &lt;/iframe&gt;



Unknown end tag for &lt;/div&gt;



```

Chú ý : chỗ

```

/chatbox/index.forum?archives=1

```
có thể thay = link chat box của bạn