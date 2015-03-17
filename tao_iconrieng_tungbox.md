vào index\_box tìm:

```

<img title="{catrow.forumrow.L_FORUM_FOLDER_ALT}" src="{catrow.forumrow.FORUM_FOLDER_IMG}" alt="{catrow.forumrow.L_FORUM_FOLDER_ALT}"/>

```

sửa lại thành:

```

<img title="{catrow.forumrow.L_FORUM_FOLDER_ALT}" src="{catrow.forumrow.FORUM_FOLDER_IMG}" alt="{catrow.forumrow.L_FORUM_FOLDER_ALT}" value="{catrow.forumrow.FORUM_NAME}"  />
```

Tiếp tục tìm

```

<!-- BEGIN catrow -->
```

chèn ngay bên dưới nó đoạn script này

```


<script type="text/javascript">
$("[value='Tên box cần thay icon']").replaceWith('<img src="link ảnh thay thế">');



Unknown end tag for &lt;/script&gt;


```

với mỗi box dc thay ta cần sử dụng thêm 1 đoạn

```

$("[value='Tên box cần thay icon']").replaceWith('<img src="link ảnh thay thế">');
```

Lưu ý : kích thước icon thay thế phải bằng kích thước của icon mặc định
![http://i24.servimg.com/u/f24/15/64/85/86/firesh10.png](http://i24.servimg.com/u/f24/15/64/85/86/firesh10.png)
