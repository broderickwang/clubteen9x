![http://i48.servimg.com/u/f48/16/58/89/73/subfor10.jpg](http://i48.servimg.com/u/f48/16/58/89/73/subfor10.jpg)

Hướng dẫn:

Bước 1: ACP >> Display >> Homepage >> Structure and hierarchy:
Sub-level links on index : Có

Bước 2: ACP >> Display >> Templates >> Ganeral >> Index\_box:
Tìm:

```

{catrow.forumrow.L_LINKS}{catrow.forumrow.LINKS}
```

và thay bằng

```

<select style="display:none" onchange="location = this.options[this.selectedIndex].value;">
<option value="{catrow.forumrow.U_VIEWFORUM}">Các Diễn Đàn Con

Unknown end tag for &lt;/option&gt;




Unknown end tag for &lt;/select&gt;


<span style="display:none" class="subforumFMvi">{catrow.forumrow.L_LINKS}{catrow.forumrow.LINKS}

Unknown end tag for &lt;/span&gt;



```

Bước 3: Thêm vào cuối Index\_box:

```

<script type="text/javascript">
$(".subforumFMvi a").each(function () {
$(this).replaceWith('<option value="' + $(this).attr("href") + '">|-- ' + $(this).text() + '

Unknown end tag for &lt;/option&gt;

');
});
$(".subforumFMvi option").each(function () {
$(this).appendTo($(this).parent().prev())
});
$(".subforumFMvi").each(function () {
if ($(this).text() == "") {
$(this).prev().remove();
$(this).remove();
} else {
$(this).prev().show()
}
});


Unknown end tag for &lt;/script&gt;



```

có một số người còn có cả link bài viết mới ở trên mấy cái box con nữa có thể thay thế

```

$(".subforumFMvi a").each(function () {

```
thành

> ```
 $(".subforumFMvi a:odd").each(function () {```