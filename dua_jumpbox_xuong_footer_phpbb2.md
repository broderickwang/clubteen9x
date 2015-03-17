Display - Templates - Quản lý tổng thể - Viewtopic\_body
Tìm code này
![http://i24.servimg.com/u/f24/15/64/85/86/jumbox10.jpg](http://i24.servimg.com/u/f24/15/64/85/86/jumbox10.jpg)

```

<form action="{S_JUMPBOX_ACTION}" method="get" name="jumpbox" onsubmit="if(document.jumpbox.f.value == -1){return false;}">
...


Unknown end tag for &lt;/form&gt;



```

... và bao quanh nó bằng


```

<div id="bvjump">
...


Unknown end tag for &lt;/div&gt;




```
Tìm đoạn code này:


```

<td align="left" valign="middle" nowrap="nowrap" {WIDTH_GALLERY}>
<span class="nav">
<!-- BEGIN switch_user_authpost -->
<a href="{U_POST_NEW_TOPIC}" rel="nofollow"><img src="{POST_IMG}" id="{POST_IMG_ID}Newtopic" alt="{L_POST_NEW_TOPIC}" align="middle" border="0" />

Unknown end tag for &lt;/a&gt;


<!-- END switch_user_authpost -->
<!-- BEGIN switch_user_authreply -->
<a href="{U_POST_REPLY_TOPIC}"><img src="{REPLY_IMG}" alt="{L_POST_REPLY_TOPIC}" align="middle" border="0" />

Unknown end tag for &lt;/a&gt;


<!-- END switch_user_authreply -->


Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;



<!-- BEGIN viewtopic_bottom -->
<td align="right" nowrap="nowrap"><span class="gensmall">{L_JUMP_TO}: {S_JUMPBOX_SELECT} <input class="liteoption" type="submit" value="{L_GO}" />

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;


<!-- END viewtopic_bottom -->

```

...và thay bằng:


```

<td id="j1" align="left" valign="middle" nowrap="nowrap" {WIDTH_GALLERY}>
<span class="nav">
<!-- BEGIN switch_user_authpost -->
<a href="{U_POST_NEW_TOPIC}" rel="nofollow"><img src="{POST_IMG}" id="{POST_IMG_ID}Newtopic" alt="{L_POST_NEW_TOPIC}" align="middle" border="0" />

Unknown end tag for &lt;/a&gt;


<!-- END switch_user_authpost -->
<!-- BEGIN switch_user_authreply -->
<a href="{U_POST_REPLY_TOPIC}"><img src="{REPLY_IMG}" alt="{L_POST_REPLY_TOPIC}" align="middle" border="0" />

Unknown end tag for &lt;/a&gt;


<!-- END switch_user_authreply -->


Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;



<td id="j2" align="right" nowrap="nowrap"><span class="gensmall">{S_JUMPBOX_SELECT} <input class="liteoption" type="submit" value="{L_GO}" />

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;



```
Bây giờ muốn mang nó đi đâu thì chỉ cần dùng code sau:

```

<script type="text/javascript">
jQuery.get('/t1-baivong', function(data) {
html = jQuery('#bvjump', data).html();
jQuery('#jumbox').html(html);
jQuery('#jumbox #j1').remove();
});


Unknown end tag for &lt;/script&gt;

<div id="jumbox">Loading...

Unknown end tag for &lt;/div&gt;



```
Viết bởi baivong - Độtkích.tk