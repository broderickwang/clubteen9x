Bài viết này viết theo yêu cầu.

Lời bình (Click để xem):

> + Để thực hiện công việc bấm vote thấy nội dung thì đầu tiên phải thực hiện công việc vote mà không reload trang.
> + Sau đó là thực hiện bấm vote => hiện nội dung.
> + Nếu bạn thích cách cũ: 'Hãy bấm vote rồi F5 để xem nội dung' thì công việc phải làm trở nên đơn giản hơn.
> + Có nhiều ý kiến cho rằng: không vote cũng xem được vậy ? Đơn giản là chỉ cần xem source là có thể thấy được nội dung ẩn. Ờ thì cứ xem source đi ) ( Nhưng liệu xem source nhanh hơn hay bấm vote nhanh hơn ? )



Vote hiện nội dung ẩn

1. Đầu tiên là làm 1 nút vote không reload trang:
+Vào ACP (Bảng điều khiển của người quản lý) ----> Display ---> Templates ---> Quản lí tổng thể ---> Viewtopic\_body
Thêm đoạn code sau vào 1 nơi tùy thích, hoặc đối với người mới thì tìm:

```


<td valign="middle">
{postrow.displayed.PROFILE_IMG} {postrow.displayed.PM_IMG} {postrow.displayed.EMAIL_IMG}<!-- BEGIN contact_field --> {postrow.displayed.contact_field.CONTENT}<!-- END contact_field --> {postrow.displayed.ONLINE_IMG}


Unknown end tag for &lt;/td&gt;


```

Thêm vào bên dưới:

```


<td>
<!-- BEGIN switch_vote_active -->
<div id="leosmall{postrow.displayed.U_POST_ID}">
<table>
<tr>
<!-- BEGIN switch_vote -->
<script>jQuery(document).ready(function(){
jQuery('#vote{postrow.displayed.U_POST_ID} .hidetag').hide();
})

Unknown end tag for &lt;/script&gt;


<td><div class='votecong' onClick="voteajax({postrow.displayed.U_POST_ID}, 'plus');">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;


<td><div class='votetru' onClick="voteajax({postrow.displayed.U_POST_ID}, 'minus');">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;


<!-- END switch_vote -->
<td><span class='votetitle'>{postrow.displayed.switch_vote_active.L_VOTE_TITLE}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;


<!-- END switch_vote_active -->


Unknown end tag for &lt;/td&gt;

```


+Vào ACP (Bảng điều khiển của người quản lý) ----> Display ---> Templates ---> Quản lí tổng thể ---> Overall\_header
Tìm 

Unknown end tag for &lt;/head&gt;

 thêm phía trên nó :

```


<script type='text/javascript'>
function voteajax(a, b) {
jQuery.post(location.pathname + "?p_vote=" + a + "&eval=" + b);
jQuery('#vote' + a + ' .hidetag').show();
jQuery('#leosmall' + a).fadeOut('slow');
jQuery('#leosmall' + a).html('Đã vote');
jQuery('#leosmall' + a).fadeIn('slow');
}


Unknown end tag for &lt;/script&gt;


```

+Vào ACP (Bảng điều khiển của người quản lý) ----> Display ---> Pictures and Colors ---> Colors ---> CSS Stylesheet thêm vào:

```


.votecong {
width:29px;
height:29px;
background: url(http://www.servimg.com/u/f30/16/00/79/58/voteba10.png);
background-position: 0px 0px;
cursor: pointer;
}
.votecong:hover {
background-position: 0px -32px;
}
.votetru {
width:29px;
height:29px;
background: url(http://www.servimg.com/u/f30/16/00/79/58/voteba10.png);
background-position: 0px -95px;
cursor:pointer;
}
.votetru:hover {
background-position: 0px -127px;
}
```

Đã xong bước 1 (Tạo nút vote không reload trang)
2. Bấm vote hiện nội dung ẩn:
+ Để bấm vote hiện nội dung ẩn thì trước hết phải ẩn cái nội dung đó đi cái đã )
MXT đã thực hiện công việc ẩn nó đi rồi, có thể xem trong js bên trên:

```


jQuery('#vote{postrow.displayed.U_POST_ID} .hidetag').hide();
```

+Vào lại ACP (Bảng điều khiển của người quản lý) ----> Display ---> Templates ---> Quản lí tổng thể ---> Viewtopic\_body nào:
Tìm cụm từ postbody thì nó sẽ cho kết quả:

```


<div class="postbody">
```

Thêm cho nó 1 id, hay nói 1 cách đơn giản là sửa nó lại thành:

```


<div class="postbody" id='vote{postrow.displayed.U_POST_ID}'>
```

Bực phết, đang viết bài đè trúng con mouse trên bàn phím cái phải viết lại từ đầu ?
Y u play me ????
Bây giờ có thể ẩn nội dung cần ẩn với cách sử dụng thêm class='hidetag'vào cái cần ẩn.
Ví dụ trong khi viết bài muốn ẩn nội dung nào đó thì:
![http://i30.servimg.com/u/f30/16/00/79/58/g-i_ba10.png](http://i30.servimg.com/u/f30/16/00/79/58/g-i_ba10.png)
```

[table border="1" class="hidetag"]
[tr]
[td]ẩn ẩn ẩn maria đề o zá quà ;)) [/td]
[/tr]
[/table]

```
Hoặc cho nó hoành tráng thế này )
www.fmvi.vn
Để tiện lợi hơn thì tạo cho nó 1 button:
+Vào ACP (Bảng điều khiển của người quản lý) ----> Display ---> Templates ---> Post & tin nhắn ---> Posting\_body tìm:

```


<button class="button2" onclick="selectWysiwyg(this,'font')" onmouseover="helpline('ft')" type="button" title="{L_BBCODE_FONT}"><img src="{PATH_IMG_FA}wysiwyg/font.png" alt="{L_BBCODE_FONT}" />

Unknown end tag for &lt;/button&gt;


```

Thêm bên dưới nó:

```


<button onclick="bbfontstyle('[table class=thankan][tr][td]Nội dung đã được ẩn bạn phải [b]Thank[/b] để xem nội dung.[/td][/tr][/table][table class=hidetag][tr][td]Nội dung đây','[/td][/tr][/table]');selectWysiwyg(this,'notes');return false">Thank Tag

Unknown end tag for &lt;/button&gt;



```
Bây giờ post thử 1 bài và sử dụng nút thanktag xem nào
Sẽ phân tích source sau .
Clip:

```


http://www.youtube.com/watch?v=NFIZwhGQ010 ```