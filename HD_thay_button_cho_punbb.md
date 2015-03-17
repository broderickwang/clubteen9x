Bước 1: Thêm vào CSS

```

/* Text button */
.large_textbutton{background:url(http://i48.servimg.com/u/f48/16/58/89/73/newbtn10.png) repeat-x scroll left top #006BB7;border:0 none;border-radius:10px 10px 10px 10px;box-shadow:0 3px 8px #DDD;clear:left;color:#FFF!important;display:block;float:right;font:14px Arial,sans-serif;margin-left:10px;margin-top:-2px;position:relative;padding:4px 15px}
.small_textbutton{background-color:#006BB7;border:0 none;border-radius:3px 3px 3px 3px;box-shadow:1px 1px 1px #DDD;clear:left;color:#FFF!important;display:block;float:right;font:11px Arial,sans-serif;position:relative;margin:2px!important;padding:2px 4px}
.large_textbutton span{display:inline;font-size:15px;font-weight:700}
.small_textbutton:hover,.large_textbutton:hover{background-color:#037730;text-shadow:1px 1px 1px #000}
.small_textbutton:active,.large_textbutton:active{background-color:#000}
```

Bước 2: Sửa Templates

> viewcomments\_body:
> Tìm:

```

<a href="{U_POST_NEW_TOPIC}" rel="nofollow"><img src="{POST_IMG}" class="{POST_IMG_CLASS}" alt="{L_POST_NEW_TOPIC}" />

Unknown end tag for &lt;/a&gt;


```

> Thay bằng:

```

<a class="large_textbutton" href="{U_POST_NEW_TOPIC}" rel="nofollow"><span>+

Unknown end tag for &lt;/span&gt;

 Viết chủ đề mới

Unknown end tag for &lt;/a&gt;



```
> Tìm:

```

<a href="{U_POST_REPLY_TOPIC}"><img src="{REPLY_IMG}" class="i_reply" alt="{L_POST_REPLY_TOPIC}" />

Unknown end tag for &lt;/a&gt;


```

> Thay bằng:

```

<a class="large_textbutton" href="{U_POST_REPLY_TOPIC}"><span>+

Unknown end tag for &lt;/span&gt;

 Trả lời chủ đề

Unknown end tag for &lt;/a&gt;


```

> Tìm:

```

{comment.displayed.THANK_IMG}{comment.displayed.MULTIQUOTE_IMG}{comment.displayed.QUOTE_IMG}{comment.displayed.EDIT_IMG}{comment.displayed.DELETE_IMG}{comment.displayed.IP_IMG}{comment.displayed.REPORT_IMG}


Thay bằng:

Code:
<span class="options-button">{comment.displayed.THANK_IMG}{comment.displayed.MULTIQUOTE_IMG}{comment.displayed.QUOTE_IMG}{comment.displayed.EDIT_IMG}{comment.displayed.DELETE_IMG}{comment.displayed.IP_IMG}{comment.displayed.REPORT_IMG}

Unknown end tag for &lt;/span&gt;


```

> Thêm vào cuối:

```

<script type="text/javascript">
$(".options-button a").addClass("small_textbutton");
$(".options-button a[href*='?thank=']").text("Cảm ơn");
$(".options-button a[href^='/post?p='][href*='&mode=quote']").text("Trích dẫn");
$(".options-button a[href^='/post?p='][href*='&mode=editpost']").text("Sửa");
$(".options-button a[href^='/post?p='][href*='&mode=delete']").text("Xóa");
$(".options-button a[href^='/modcp?mode=ip']").text("Xem Ip");
$(".options-button a[href^='/report?mode=report']").text("Báo cáo");
$(".options-button a[href^='/report?mode=unlock']").text("Mở báo cáo");
$(".options-button a[href^='/report?mode=lock']").text("Chặn báo cáo");


Unknown end tag for &lt;/script&gt;

```


> viewforum\_body:
> Tìm:

```

<a href="{U_POST_NEW_TOPIC}" accesskey="n" rel="nofollow"><img src="{POST_IMG}" class="{POST_IMG_ID}" alt="{L_POST_NEW_TOPIC}" />

Unknown end tag for &lt;/a&gt;


```

> Thay bằng:

```

<a class="large_textbutton" href="{U_POST_NEW_TOPIC}" accesskey="n" rel="nofollow"><span>+

Unknown end tag for &lt;/span&gt;

 Viết chủ đề mới

Unknown end tag for &lt;/a&gt;



```
> viewtopic\_body: tương tự viewcomments\_body
> Tìm:

```

{postrow.displayed.THANK_IMG}{postrow.displayed.MULTIQUOTE_IMG} {postrow.displayed.QUOTE_IMG}{postrow.displayed.EDIT_IMG} {postrow.displayed.DELETE_IMG} {postrow.displayed.IP_IMG}{postrow.displayed.REPORT_IMG}
```

> Thay bằng:

```

<span class="options-button">{postrow.displayed.THANK_IMG}{postrow.displayed.MULTIQUOTE_IMG} {postrow.displayed.QUOTE_IMG}{postrow.displayed.EDIT_IMG} {postrow.displayed.DELETE_IMG} {postrow.displayed.IP_IMG}{postrow.displayed.REPORT_IMG}

Unknown end tag for &lt;/span&gt;


```

> privmsgs\_body:
> Tìm:

```

{POST_PM_IMG}
```

> Thay bằng:

```

<a class="large_textbutton" href="/privmsg?mode=post"><span>+

Unknown end tag for &lt;/span&gt;

 Soạn thư

Unknown end tag for &lt;/a&gt;


```

> privmsgs\_read\_body:
> Tìm:

```

<div class="post-options">

```
> Thay bằng:

```

<div class="post-options options-button">
```

> Thêm vào cuối:

```

<script type="text/javascript">
$(".repPM a[href^='/privmsg?mode=reply']").addClass("large_textbutton").html("<span>+

Unknown end tag for &lt;/span&gt;

 Trả lời thư");
$(".options-button a").addClass("small_textbutton");
$(".options-button a[href^='/privmsg?mode=quote']").text("Trích dẫn");
$(".options-button a[href^='/privmsg?mode=editpost']").text("Sửa");


Unknown end tag for &lt;/script&gt;

```


> overall\_footer\_end:
> Thêm vào cuối:

```

<script type="text/javascript">
$("#new-message-link a[href^='/privmsg?mode=post_profile']").addClass("large_textbutton").html("<span>+

Unknown end tag for &lt;/span&gt;

 Viết lên tường");


Unknown end tag for &lt;/script&gt;



```
Bước 3: Xóa các ảnh button liên quan trong Pics management >> Buttons
> Post new topic

> Reply to topic

> New posts [Locked ](.md)

> Reply with quote

> Multi-quote unselected

> Multi-quote selected

> "Thanks" button

> Topic already thanked

> Edit post

> Delete this post

> View IP address of poster

> Send a post report

> Post report sent

> Post report locked

> Lock the post report

> Unlock the post report