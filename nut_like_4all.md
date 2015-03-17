![http://i49.servimg.com/u/f49/17/59/35/32/like_b10.jpg](http://i49.servimg.com/u/f49/17/59/35/32/like_b10.jpg)
Sau khi Like

![http://i49.servimg.com/u/f49/17/59/35/32/likexo10.jpg](http://i49.servimg.com/u/f49/17/59/35/32/likexo10.jpg)


Lời cảm ơn : cảm ơn nhà 4allvn - bác batonchinsu đã share bài viết thanks không chuyển trang!
Cảm ơn 4allvn đã cho Bim cái link ảnh Like tuyệt đẹp :ha:

Hướng dẫn
Trước tiên phải kích hoạt nút Like
http://diendan.4allvn.biz/t1700-topic

Tiếp theo vào viewtopic\_body tìm:
```

{postrow.displayed.THANK_IMG} {postrow.displayed.MULTIQUOTE_IMG} {postrow.displayed.QUOTE_IMG} {postrow.displayed.EDIT_IMG} {postrow.displayed.DELETE_IMG} {postrow.displayed.IP_IMG} {postrow.displayed.REPORT_IMG}

```
chèn vào trước nó
```

<!-- BEGIN switch_vote_active -->
<div id="kk{postrow.displayed.U_POST_ID}"> <span class="gensmall"><script type="text/javascript">
var str ='{postrow.displayed.switch_vote_active.L_VOTE_TITLE}';

if (str=="Message not voted")
{str="Bài viết này chưa được Like.";document.write(str);
}
else {str=str.replace("Message reputation :","Được Like:");
str=str.replace("100%","");
str=str.replace("(","");
str=str.replace(")","");str=str.replace("vote","lần.");
str=str.replace("s","");
document.write(str);
}

Unknown end tag for &lt;/script&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;


<!-- END switch_vote_active -->
<!-- BEGIN switch_vote_active --><!-- BEGIN switch_vote -->
<span id="{postrow.displayed.U_POST_ID}">
<a href="{postrow.displayed.switch_vote_active.switch_vote.U_VOTE_PLUS}" target="v{postrow.displayed.U_POST_ID}v" onclick="document.getElementById('{postrow.displayed.U_POST_ID}').innerHTML='<img src=http://i44.servimg.com/u/f44/15/64/85/86/button16.png>';var str ='{postrow.displayed.switch_vote_active.L_VOTE_TITLE}';
if (str=='Message not voted')
{str='Bài viết này chưa được Like.';
}else {str=str.replace('Message reputation :','Được Like:');
str=str.replace('100%','');
str=str.replace('(','');
str=str.replace(')','');str=str.replace('vote','lần.');
str=str.replace('s','');
} if(str=='Bài viết này chưa được Like.')
{str='Được Like: 1 lần';
}else{
for (i=0; i<=(str.length-1);i++)
{if (str.charCodeAt(i)>=48 && str.charCodeAt(i)<=57 && str.charAt(i+1)==' ')
{str=str.replace(String.fromCharCode(str.charCodeAt(i)),String.fromCharCode((str.charCodeAt(i))+1));}}}document.getElementById('kk{postrow.displayed.U_POST_ID}').innerHTML='<span class=gensmall>'+ str+'

Unknown end tag for &lt;/span&gt;

';
"><img src="http://i44.servimg.com/u/f44/13/54/69/46/button10.png" id="{postrow.displayed.U_POST_ID}" border="0" alt="Bạn chưa Like người này" vspace="1" />

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/span&gt;

<!-- END switch_vote --><!-- END switch_vote_active --><iframe name="v{postrow.displayed.U_POST_ID}v" height="0" frameborder="0"width="0"></iframe>

```
Lưu ý : Có 2 đoạn là:
```

<!-- BEGIN switch_vote_active -->
<div id="kk{postrow.displayed.U_POST_ID}"> <span class="gensmall"><script type="text/javascript">
var str ='{postrow.displayed.switch_vote_active.L_VOTE_TITLE}';

if (str=="Message not voted")
{str="Bài viết này chưa được Like.";document.write(str);
}
else {str=str.replace("Message reputation :","Được Like:");
str=str.replace("100%","");
str=str.replace("(","");
str=str.replace(")","");str=str.replace("vote","lần.");
str=str.replace("s","");
document.write(str);
}

Unknown end tag for &lt;/script&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;


<!-- END switch_vote_active -->
```

code này để liển thị số lần like

```

<!-- BEGIN switch_vote_active --><!-- BEGIN switch_vote -->
<span id="{postrow.displayed.U_POST_ID}">
<a href="{postrow.displayed.switch_vote_active.switch_vote.U_VOTE_PLUS}" target="v{postrow.displayed.U_POST_ID}v" onclick="document.getElementById('{postrow.displayed.U_POST_ID}').innerHTML='<img src=http://i44.servimg.com/u/f44/15/64/85/86/button16.png>';var str ='{postrow.displayed.switch_vote_active.L_VOTE_TITLE}';
if (str=='Message not voted')
{str='Bài viết này chưa được Like.';
}else {str=str.replace('Message reputation :','Được Like:');
str=str.replace('100%','');
str=str.replace('(','');
str=str.replace(')','');str=str.replace('vote','lần.');
str=str.replace('s','');
} if(str=='Bài viết này chưa được Like.')
{str='Được Like: 1 lần';
}else{
for (i=0; i<=(str.length-1);i++)
{if (str.charCodeAt(i)>=48 && str.charCodeAt(i)<=57 && str.charAt(i+1)==' ')
{str=str.replace(String.fromCharCode(str.charCodeAt(i)),String.fromCharCode((str.charCodeAt(i))+1));}}}document.getElementById('kk{postrow.displayed.U_POST_ID}').innerHTML='<span class=gensmall>'+ str+'

Unknown end tag for &lt;/span&gt;

';
"><img src="http://i44.servimg.com/u/f44/13/54/69/46/button10.png" id="{postrow.displayed.U_POST_ID}" border="0" alt="Bạn chưa Like người này" vspace="1" />

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/span&gt;

<!-- END switch_vote --><!-- END switch_vote_active --><iframe name="v{postrow.displayed.U_POST_ID}v" height="0" frameborder="0"width="0"></iframe>

```
Code này để hiển thị nút Like.
Các bạn muốn chèn vị trí nào thì tùy ý nghen.hihi

Sau đó ấn chấp nhận và cuối cùng :ok:

Xong lun.hehe
nguồn : diendan.4allvn.biz - CuBimtQ