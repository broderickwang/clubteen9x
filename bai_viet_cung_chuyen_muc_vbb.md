![http://img254.imageshack.us/img254/6778/21020258.png](http://img254.imageshack.us/img254/6778/21020258.png)


```
    <script>
$(function () {
$.ajax({
url: "/feed/?f={FORUM_ID}",
success: function (a) {
$(".post-entry:first").after('<div style="width:400px;background:#eee;padding:1px;margin-top:221px;"><div id="cungchuyenmuc" style="padding:10px 20px;background:#fff;border:1px solid #ddd;"><div class="title">B\u00e0i g\u1eedi c\u00f9ng chuy\u00ean m\u1ee5c

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

');
12 < $(a).find("title").length ? so = 7 : so = $(a).find("title").length;
for (i = 2; i < so; i++) $('<a href="' + $(a).find("link:eq(" + i + ")").text() + '" style="overflow: hidden; position: absolute; text-overflow: ellipsis; white-space: nowrap; width: 34%;" >' + $(a).find("title:eq(" + i + ")").text() + "

Unknown end tag for &lt;/a&gt;

<br/>").appendTo("#cungchuyenmuc")
}
})
});


Unknown end tag for &lt;/script&gt;

```