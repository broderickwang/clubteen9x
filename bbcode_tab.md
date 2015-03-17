Demo:
![http://i40.servimg.com/u/f40/17/70/81/78/12-11-10.jpg](http://i40.servimg.com/u/f40/17/70/81/78/12-11-10.jpg)



```

[tab width=500px]
[b]Tên tab 1[/b][b]Tên tab 2[/b][b]Tên tab 3[/b][b]Tên tab 4[/b]
[*]Nội dung tab 1
[*]Nội dung tab 2
[*]Nội dung tab 3
[*]Nội dung tab 4
[/tab]

```

Tester: http://www.fmvi.vn/h159-bbcode

Cấu trúc BBcode:

```

[tab width=XXXy][b]{TEXT1}[/b][*]{TEXT2}[/tab]

```
Trong đó:

```


width=XXXy
```
Phần này xác định độ rộng của tab, có thể có hoặc không. Chỉ nhận 3 ký tự số XXX, còn y là đơn vị px,pt,em,% hoặc không có đơn vị.



Unknown end tag for &lt;/ode&gt;


> [b](b.md){TEXT1}[/b]


Unknown end tag for &lt;/code&gt;


Phần này là tên tab.

```


[*]{TEXT2}
```
Phần này là nội dung tab. Lặp lại theo số tên tab.

Mã xử lý BBcode:

```


str.replace(/\[tab(\swidth=\d{0,3}(pt|em|px|%)?)?\]((\s*?\n*?\[b\](.*)\[\/b\])*)(\s*?\n*?\[\*\](\n|.)*)\[\/tab\]/gi, "[table class=fmvitab$1][tr][td]$4[list]$6[/list][/td][/tr][/table]")
```

Sau khi xử lý xong nó sẽ chuyển về BBcode table, bold và list.

```

[table class=fmvitab width=500px][tr][td][b]{TEXT1}[/b][list][*]{TEXT2}[/list][/td][/tr][/table]
```

Từ đây mình sẽ thêm mã CSS và javascript để đưa nó thành dạng tab sử dụng được.

```


/* CSS BBcode tab */
.fmvitab{display:none;margin:0 auto}
.fmvitab td > strong{cursor:pointer;display:inline-block;padding:5px 10px}
.fmvitab td > strong.active{background-color:#6F6E6E;color:#FFF;cursor:default}
.fmvitab ul{border:1px solid #DDD;list-style:none outside none;width:100%;margin:0!important;padding:0 10px 15px}
.fmvitab li{display:none}
.fmvitab li.active{display:block}

```

```

$(function () {
$(".fmvitab").each(function () {
var $fmvitab = $(this);
$fmvitab.show().find("li:first, td>strong:first").addClass("active");
$fmvitab.find("td>strong").click(function () {
var n = $fmvitab.find("td>strong").index(this);
$fmvitab.find("li, td>strong").removeClass("active");
$fmvitab.find("li:eq(" + n + "), td>strong:eq(" + n + ")").addClass("active");
});
});
});

```

Xem và cho ý kiến nha, nhất là cái mã xử lý BBcode, mình chưa rành dùng Regex lắm.
Hiện đang sử dụng ở chức năng trả lời nhanh.