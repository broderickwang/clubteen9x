![http://i43.servimg.com/u/f43/15/93/66/72/demo_b10.jpg](http://i43.servimg.com/u/f43/15/93/66/72/demo_b10.jpg)


- Lời mở đầu của tác giả:
Trước đây khi vào một forum vbb và nhìn vào button gửi bài mới, gửi trả lời mình cứ tưởng đó là hình ảnh. Định copy về cho về forum FM cho đẹp nhưng không lấy địa chỉ ảnh được. Sau này trình độ lên tay một chút mới đoán ra là nó xài css . Và bây giờ mình lại có ý tưởng làm button này cho FM.
- Mục lục: bao gồm 2 code rất đơn giản, đặt class ở viewtopic\_body và thêm thuộc tính ở css
- Chương I: Viewtopic\_body
Vào viewtopic\_body tìm:





```

<a href="{U_POST_NEW_TOPIC}" rel="nofollow"><img src="{POST_IMG}" id="{POST_IMG_ID}one" alt="{L_POST_NEW_TOPIC}" align="middle" border="0" />

Unknown end tag for &lt;/a&gt;


```


Và thay bằng:

```

<a href="{U_POST_NEW_TOPIC}" rel="nofollow"><span class="newpost"><font color=#FFFFFF>  <b>+

Unknown end tag for &lt;/b&gt;

 Viết chủ đề mới  

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;


```

Tìm tiếp:

```

<a href="{U_POST_REPLY_TOPIC}"><img src="{REPLY_IMG}" id="i_reply" alt="{L_POST_REPLY_TOPIC}" align="middle" border="0" />

Unknown end tag for &lt;/a&gt;



```
Thay bằng:

```

<a href="{U_POST_REPLY_TOPIC}"><span class="newpost"><font color=#FFFFFF>  <b>+

Unknown end tag for &lt;/b&gt;

 Trả lời Chủ đề  

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



```
- Chương II: Css
Vào Css và dán code này vào dưới cùng:

```

span.newpost {
filter:alpha(opacity=50);
-moz-opacity: 1.0;
opacity: 1.0;
-khtml-opacity: 1.0;
padding:6px;
background-color: #488AC7;
-moz-border-radius: 10px;
-webkit-border-radius: 10px;
}
span.newpost:hover{
filter:alpha(opacity=50);
-moz-opacity: 0.7;
opacity: 0.7;
-khtml-opacity: 0.7;}


```


---

- Chú thích:

```

background-color: #488AC7;
```

là nền của button. Thay màu cho phù hợp với 4rum bạn.

```

-moz-border-radius: 10px;
-webkit-border-radius: 10px;

```
Là đoạn code làm bo tròn góc.

Các bạn có thể làm tương tự ở viewforum\_body


Update:
Cái này bạn có thể dùng Script xóa cái ảnh button, như thế đỡ mất công sửa Templates, và có thể áp dụng cho mọi phiên bản forumotion.

Vào Modules > HTML & JAVASCRIPT > Javascript codes management > Creat a new...:

Title **: Button CSS
Placement : In the sub-forums và In the topics
Javascript Code** :

```

$(function(){$("a[href*='/post?f='][href$='&mode=newtopic']").html('<span class="newpost"><font color=#FFFFFF>  <b>+

Unknown end tag for &lt;/b&gt;

 Viết chủ đề mới  

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/span&gt;

');$("a[href*='/post?t='][href$='&mode=reply']").html('<span class="newpost"><font color=#FFFFFF>  <b>+

Unknown end tag for &lt;/b&gt;

 Trả lời Chủ đề  

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/span&gt;

');});

```
nguồn fmvi.org