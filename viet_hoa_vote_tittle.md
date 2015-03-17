Mẹo này giúp bạn thay dòng hiển thị số lần vote đơn điệu bằng cách việt hóa và đóng khung đơn giản Smile

> Demo :
> Mặc định :
> Message not voted
> Message reputation : 100% (1 vote)
> Message reputation : 50% (2 votes)

> Kết quả sau khi thay : ![http://i49.servimg.com/u/f49/11/79/54/63/votede10.jpg](http://i49.servimg.com/u/f49/11/79/54/63/votede10.jpg)

> Bước 1 : vào Templates ~> Viewtopic\_body : chèn đoạn sau vào trên cùng ...

```

<style type="text/css">.c3vote {border:1px solid #C2D5E3;padding:5px 8px;margin:0 3px}

Unknown end tag for &lt;/style&gt;


<script type="text/javascript">
function votetrans(a) {
return a['replace'](/Message not voted/, '<span class=c3vote>Bài viết chưa được vote

Unknown end tag for &lt;/span&gt;

')['replace'](/Message reputation : (.+) \((.+) vote(s?)\)/, '<span class=c3vote>Bài viết được vote $2 lần

Unknown end tag for &lt;/span&gt;

 <span class=c3vote>Chất lượng: $1

Unknown end tag for &lt;/span&gt;

')
}


Unknown end tag for &lt;/script&gt;



```
> Bước 2 : chèn đoạn hiển thị số lần vote này vào vị trí mà bạn muốn hiển thị Smile

```

<!-- BEGIN switch_vote_active --><script type="text/javascript">document.write(votetrans("{postrow.displayed.switch_vote_active.L_VOTE_TITLE}"));

Unknown end tag for &lt;/script&gt;

<!-- END switch_vote_active -->```