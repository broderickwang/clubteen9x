Tùy chỉnh thay đổi rank theo tác giả bài viết.
By: miamor


Demo:

> Tác giả sẽ có rank thay đổi thành
![http://i48.servimg.com/u/f48/16/58/89/73/writer10.png](http://i48.servimg.com/u/f48/16/58/89/73/writer10.png)
> Người đứng đầu Top Posters sẽ có rank đổi thành
![http://i48.servimg.com/u/f48/16/58/89/73/1stpla10.png](http://i48.servimg.com/u/f48/16/58/89/73/1stpla10.png)
> Người đứng thứ 2 Top Posters sẽ có rank đổi thành
![http://i48.servimg.com/u/f48/16/58/89/73/2ndpla10.png](http://i48.servimg.com/u/f48/16/58/89/73/2ndpla10.png)
Demo online: http://invision.chinhphuc.info


Tạo 1 file javascript đặt In the homepage, với nội dung như sau:
[Phần này đã được ẩn, bạn phải reply để xem toàn bộ nội dung]

```


$(function () {
var author = $(".post-container:first .postbody-head:first .author a").attr("href");
var topmot = $("#left .module:first .box-content .row2:first a").attr("href");
var tophai = $("#left .module:first .box-content .row1:first a").attr("href");
$(".postbody-head p.author a").each(function () {
var liuser = $(this).attr("href");
if (liuser === author) {
$(this).parent().parent().parent().children('.postprofile').children('dl').children('dd:first').children('img:last').replaceWith('<img title="Author" alt="Author" src="http://i48.servimg.com/u/f48/16/58/89/73/writer10.png" />');
} else if (liuser === topmot) {
$(this).parent().parent().parent().children('.postprofile').children('dl').children('dd:first').children('img').replaceWith('<img title="1st" alt="1st" src="http://i48.servimg.com/u/f48/16/58/89/73/1stpla10.png" />');
} else if (liuser === tophai) {
$(this).parent().parent().parent().children('.postprofile').children('dl').children('dd:first').children('img').replaceWith('<img title="2nd" alt="2nd" src="http://i48.servimg.com/u/f48/16/58/89/73/2ndpla10.png" />');
} else if (liuser === topba) {
$(this).parent().parent().parent().children('.postprofile').children('dl').children('dd:first').children('img').replaceWith('<img title="3rd" alt="3rd" src="http://i48.servimg.com/u/f48/16/58/89/73/3rdpla10.png" />');
}
});
});
```

CHÚ Ý: Để đổi rank người đứng đầu và Người đứng thứ 2 Top Posters các bạn phải kích hoạt Widget Top Posters ở Cột TRÁI