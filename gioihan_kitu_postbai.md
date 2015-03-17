Đây là đoạn Jquery + Html .... 8->

```

<p class="testlength" style="display:none;">

Unknown end tag for &lt;/p&gt;


<script type="text/javascript">$(function(){if($("textarea#text_editor_textarea").is(':visible')){$("textarea#text_editor_textarea").keyup(function () {var value = $(this).val();$("p.testlength").text(value);});$("input.mainoption").click(function(){var num =10 - $("p.testlength").text().length; if (num > 0) {alert("Bài viết quá ngắn - Bạn đang thiếu "+num+" ký tự nữa để có thể gửi bài");return false;}});}});

Unknown end tag for &lt;/script&gt;


```


Đối với postbody:
ACP>>Display>>template>>post & tin nhắn>>postbody
dán đoạn code bên trên đầu kia phía trên :

```

<!-- BEGIN switch_roll_dice -->

```

Đối với quick reply

ACP>>Display>>Template>>quản lý tt>>viewtopic

dán đoạn code bên trên đầu kia phía dưới :

```

<!-- BEGIN switch_user_logged_in -->
<a name="quickreply">

Unknown end tag for &lt;/a&gt;


{QUICK_REPLY_FORM}

<!-- END switch_user_logged_in -->

```
demo

Code:
> http://www.tinhgia3sv.tk/forum


Nguồn : CP