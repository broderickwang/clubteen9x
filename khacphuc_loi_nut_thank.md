Sau đây mình xin trình bày cách làm để khắc phục tình trạng chỉ có Admin mới thấy nút thanks. Khắc phục xong vẫn vota mình thường. Đã test - by ZerO kIng .

Vào Modules - Reputation

-Activate reputation system : Chọn Có
-Activate "Thanks" button : Chọn Có

Vào Display - Temples - View\_topic body: Tìm

```

<!-- BEGIN switch_vote_active -->
<div class="vote gensmall">
<!-- BEGIN switch_vote -->


Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/div&gt;


<!-- END switch_vote -->


```
Chèn code sau dưới <!-- BEGIN switch\_vote -->

```

<div class="vote-button"><a class="thumbnail" href="{postrow.displayed.switch_vote_active.switch_vote.U_VOTE_PLUS}"><img src="http://img.forum.zing.vn/images/bluestyle/buttons/post_thich.gif" id="Thanks button" border="0" alt="Cảm ơn người này" vspace="1" />

Unknown end tag for &lt;/a&gt;



```

Vậy là xong rồi nhé

Demo: http://thekingfc.lovelyforum.net/t182-topic#249