![http://i43.servimg.com/u/f43/15/93/40/94/cp11710.png](http://i43.servimg.com/u/f43/15/93/40/94/cp11710.png)
**CSS (Chèn vào cuối CSS)**

```


a[href*="mode=post_profile"],a[href*="mode=reply"],a[href*="mode=newtopic"],a[href*="merge?t="],a[href*="cp?mode=split"],a[href*="cp?mode=lock"],a[href*="cp?mode=move"],a[href*="cp?mode=trash"],a[href*="cp?mode=delete"],a[href*="cp?mode=unlock"],a[href*="mode=unlock&p"],a[href*="mode=lock&p"],a[href*="mode=report"],a[href*="&mode=delete"],a[href*="mode=editpost"],a[href*="mode=quote"]{background:#7D2252;color:#FFF!important;border-radius:10px;font:11px Arial,sans-serif;margin:2px;padding:2px 9px}
a[href*="mode=post_profile"]:hover,a[href*="mode=reply"]:hover,a[href*="mode=newtopic"]:hover,a[href*="cp?mode=unlock"]:hover,a[href*="merge?t="]:hover,a[href*="cp?mode=split"]:hover,a[href*="cp?mode=lock"]:hover,a[href*="cp?mode=move"]:hover,a[href*="cp?mode=trash"]:hover,a[href*="cp?mode=delete"]:hover,a[href*="mode=unlock&p"]:hover,a[href*="mode=lock&p"]:hover,a[href*="mode=report"]:hover,a[href*="&mode=delete"]:hover,a[href*="mode=editpost"]:hover,a[href*="mode=quote"]:hover{background:#B35A9C;border:1px solid #FFF}
a[href*="mode=reply"],a[href*="mode=newtopic"]{font:13px Arial,sans-serif!important}
a[href*="mode=quote"]:before{content:"Trích dẫn"}
a[href*="mode=editpost"]:before{content:"Sửa"}
a[href*="&mode=delete"]:before{content:"Xóa"}
a[href*="mode=report"]:before{content:"Báo xấu"}
a[href*="mode=lock&p"]:before{content:"Chặn báo xấu"}
a[href*="mode=unlock&p"]:before{content:"Cho phép báo xấu"}
a[href*="cp?mode=delete"]:before{content:"Xóa chủ đề"}
a[href*="cp?mode=trash"]:before{content:"Cho vào sọt"}
a[href*="cp?mode=move"]:before{content:"Di chuyển"}
a[href*="cp?mode=lock"]:before{content:"Khóa chủ đề"}
a[href*="cp?mode=split"]:before{content:"Tách bài viết"}
a[href*="merge?t="]:before{content:"Gộp bài viết"}
a[href*="cp?mode=unlock"]:before{content:"Mở khóa chủ đề"}
a[href*="mode=post_profile"]:before{content:"//Viết lên tường"}
a[href*="mode=newtopic"]:before{content:"* Tạo chủ đề mới"}
a[href*="mode=reply"]:before{content:"+ Trả lời chủ đề"}
img[src="http://illiweb.com/fa/empty.gif"]{display:none}

```