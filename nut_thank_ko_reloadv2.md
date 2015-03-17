Code bên dưới là hiển thị số lần thanks: Ví dụ "được cảm ơn 2 lần chẳn hạn":
Chèn vào view\_topic\_body:

```


<!-- BEGIN switch_vote_active -->
<div id="kk{postrow.displayed.U_POST_ID}"> <span class="gensmall"><script type="text/javascript">
var str ='{postrow.displayed.switch_vote_active.L_VOTE_TITLE}';

if (str=="Message not voted")
{str="Bài viết này chưa được cảm ơn.";document.write(str);
}
else {str=str.replace("Message reputation :","Được cảm ơn:");
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
Nút vote:(Cũng vào view\_topic\_body luôn)

```


<!-- BEGIN switch_vote_active --><!-- BEGIN switch_vote -->
<span id="{postrow.displayed.U_POST_ID}">
<a href="{postrow.displayed.switch_vote_active.switch_vote.U_VOTE_PLUS}" target="v{postrow.displayed.U_POST_ID}v" onclick="document.getElementById('{postrow.displayed.U_POST_ID}').innerHTML='<img src=http://i1202.photobucket.com/albums/bb362/tnpu_ilusm/thanked-2.png>';var str ='{postrow.displayed.switch_vote_active.L_VOTE_TITLE}';
if (str=='Message not voted')
{str='Bài viết này chưa được cảm ơn.';
}else {str=str.replace('Message reputation :','Được cảm ơn:');
str=str.replace('100%','');
str=str.replace('(','');
str=str.replace(')','');str=str.replace('vote','lần.');
str=str.replace('s','');
} if(str=='Bài viết này chưa được cảm ơn.')
{str='Được cảm ơn: 1 lần';
}else{
for (i=0; i<=(str.length-1);i++)
{if (str.charCodeAt(i)>=48 && str.charCodeAt(i)<=57 && str.charAt(i+1)==' ')
{str=str.replace(String.fromCharCode(str.charCodeAt(i)),String.fromCharCode((str.charCodeAt(i))+1));}}}document.getElementById('kk{postrow.displayed.U_POST_ID}').innerHTML='<span class=gensmall>'+ str+'

Unknown end tag for &lt;/span&gt;

';
"><img src="http://i1202.photobucket.com/albums/bb362/tnpu_ilusm/post_thanks.gif" id="{postrow.displayed.U_POST_ID}" border="0" alt="Bạn chưa cảm ơn người này" vspace="1" />

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/span&gt;

<!-- END switch_vote --><!-- END switch_vote_active --><iframe name="v{postrow.displayed.U_POST_ID}v" height="0" frameborder="0"width="0"></iframe>

```
Code trên là nút vote + có thể làm tương tự để được nút vote -.
Rồi trang trí + màu mè hay khi click vào nó hiện đang load thì các chú tự nghiên cứu nhé. Chỉ thêm thắt vô thôi.
Cuối cùng nếu các bác muốn thử nút thanks này hiệu quả như thế nào thì click vào nút thanks bên dưới.
Khi click không chuyển trang + Hiển thị số lần thanks ngay sau khi click.
+Ý tưởng và nguyên lí: Sử dụng hàm replace, quét tìm con số, thay thế value bằng script sau khi click.
Viết bởi: tnpu\_ilusm - www.FMvi.tk