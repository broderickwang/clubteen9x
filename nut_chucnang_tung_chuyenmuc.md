Chức năng:

> Tìm bài viết mới
> Gửi bài mới
> Xem RSS



Ghi chú: Trước đây, để làm các nút chức năng này cho từng chuyên mục, bạn phải làm thủ công bằng cách chèn từng code vào phần mô tả của chuyên mục. Hướng dẫn này sẽ giúp bạn thực hiện nó một cách tự động bằng javascript.

Demo:        ![http://i48.servimg.com/u/f48/16/58/89/73/fmvi10.jpg](http://i48.servimg.com/u/f48/16/58/89/73/fmvi10.jpg)

Hướng dẫn:
ACP - Display - Templates - Ganeral - Index\_box:
Tìm đoạn sau:

```

<a href="{catrow.forumrow.U_VIEWFORUM}" class="forumtitle">{catrow.forumrow.FORUM_NAME}

Unknown end tag for &lt;/a&gt;

```


Đặt vào sau nó:

```

<span style="float:right">
<script type="text/javascript">
var FMvi = "{catrow.forumrow.U_VIEWFORUM}";
if (FMvi.indexOf("/f") == 0) {
var fid = FMvi.slice(2, FMvi.indexOf("-"));
document.write('<a rel="nofollow" href="/search?search_keywords=&search_author=*&search_where=f' + fid + '&search_id=newposts"><img src="http://i44.servimg.com/u/f44/15/44/78/93/newpos10.gif" border="0" width="11" height="11" hspace="2" alt="Xem bài mới nhất!" />

Unknown end tag for &lt;/a&gt;

&nbsp;<a rel="nofollow" href="/post?f=' + fid + '&mode=newtopic"><img src="http://i44.servimg.com/u/f44/15/44/78/93/newthr11.gif" border="0" width="11" height="11" hspace="2" alt="Viết chủ đề mới!" />

Unknown end tag for &lt;/a&gt;

&nbsp;<a rel="nofollow" href="/feed?f=' + fid + '"><img src="http://i44.servimg.com/u/f44/15/44/78/93/rss10.gif" border="0" width="11" height="11" hspace="2" alt="RSS feed!" />

Unknown end tag for &lt;/a&gt;

')
}


Unknown end tag for &lt;/script&gt;




Unknown end tag for &lt;/span&gt;

```


Tuy nhiên bạn cũng có thể đặt vào vị trí khác tùy sở thích (yêu cầu phải hiểu cấu trúc index\_box). Để các nút chức năng nằm bên trái, bạn thay float:right thành float:left