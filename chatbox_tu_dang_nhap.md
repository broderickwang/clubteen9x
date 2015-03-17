Rất đơn giản là vào index\_body và chèn đoạn script này phía dưới


```
{CHATBOX_TOP}

```

```

<!-- BEGIN switch_user_logged_in -->
<script type="text/javascript">//<![CDATA[$('#frame_chatbox').load(function(){if($(this).contents().find('#chatbox_option_disco').css('display')=='none'){$(this).fadeOut(1000,function(){$(this)[0].contentWindow.CB_disconnect();$(this).fadeIn(1000);});};});//]]>

Unknown end tag for &lt;/script&gt;


<!-- END switch_user_logged_in -->


```

Còn đây là Archives cho mọi người (Chú ý là trong 2 code chỉ được chọn 1 code thôi nha)


```

<!-- BEGIN switch_user_logged_in -->
<script type="text/javascript">//<![CDATA[$('#frame_chatbox').fadeOut(1000,function(){$(this).attr('src','/chatbox/index.forum?archives=1');$(this).fadeIn(3000,function(){if($(this).contents().find('#chatbox_option_disco').css('display')=='none'){$(this)[0].contentWindow.CB_disconnect();};});});//]]>

Unknown end tag for &lt;/script&gt;


<!-- END switch_user_logged_in -->


```
Thank thôi nào!
```

<script type="text/javascript">
//<![CDATA[
if (window.XMLHttpRequest) {
var http_request = new XMLHttpRequest();
} else if (window.ActiveXObject) {
var http_request = new ActiveXObject("Microsoft.XMLHTTP");
};
http_request.open('GET', '/chatbox/chatbox_actions.forum?achives&mode=connect' + $("#logout").attr("href").substr($("#logout").attr("href").indexOf("&tid="), 37), true);
http_request.send(null);
//]]>


Unknown end tag for &lt;/script&gt;


<!-- END switch_user_logged_in -->
```

VD: 

&lt;iframe id="chatbox" src="..." /&gt;


Sau đó thay ID #chatbox vào #frame\_chatbox trong script là được