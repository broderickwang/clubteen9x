Hiển thị nhiều hơn 1 bài viết cuối hiện ở Index.
Original code: notme.
Edit and share: miamor.


Demo: Không có demo chính xác đâu Smile Mình chia sẻ bản khác của IFC nhé Smile

Thực hiện:
Tạo 1 file js:

> Title: Hiển thị nhiều hơn 1 bài viết cuối hiện ở Index.
> Placement: In the homepage.
> Content: ```
        // More than 1 last post in Index.
// Original code: notme.
// Edit and share: miamor.
$(function () {
$(".row2.icon:eq(0)").after("<div class='mtbox'>

Unknown end tag for &lt;/div&gt;

");
$(".mtbox:eq(0)").after("<div class='dulieu'>

Unknown end tag for &lt;/div&gt;

");
$(".dulieu").load("/f1-forum .ipbtable:eq(1) tbody tr:lt(5)", function () {
var i;
for(i = 0; i < 5; i++) {
var tieude = $(this).find('tr:eq(' + i + ') .row1:eq(2)').text(),
txt = $(this).find('tr:eq(' + i + ') .lastaction').text(),
thoigian = txt.substring(0, txt.indexOf("by")),
linkcuoi = $(this).find('tr:eq(' + i + ') .lastaction a:first').attr("href"),
tacgia = $(this).find('tr:eq(' + i + ') .lastaction strong').html();
$("<div class='thuxem'><span class='linkcuoi'><a href='" + linkcuoi + "' title='" + tieude + "'> " + tieude + "

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;

<span class='thoigian'>"+thoigian+"

Unknown end tag for &lt;/span&gt;

<span class='tacgia'> bởi "+tacgia+"

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;

").appendTo(".mtbox:eq(0)")
}
$(this).remove()
})
});```



Trong code trên có 3 đoạn cần lưu ý:

```


$(".row2.icon:eq(0)").after("<div class='mtbox'>

Unknown end tag for &lt;/div&gt;

");
```
và

```


$(".dulieu").load("/f1-forum .ipbtable:eq(1) tbody tr:lt(5)"
```
và

```


for(i = 0; i < 5; i++)

```
> Đoạn đầu tiên, bạn cần lưu ý số 0, đó là thứ tự của class row2 icon đếm từ 0. Bạn edit theo thứ tự ở 4r bạn. (chỗ này có thể hơi khó hiểu với người mới, ai k làm được thì hỏi mình, mình giúp cho Smile )
> Đoạn thứ 2 bạn cần lưu ý số 1 trong đoạn /f1-forum và số 5.
> > Số 1 là id của box bạn muốn lấy nhiều bài hơn 1.
> > Số 5 là số bài bạn muốn lấy ra ngoài Index\_box.

> Đoạn thứ 3 bạn cần lưu ý số 5. Số 5 là số bài bạn muốn lấy ra ngoài Index\_box.