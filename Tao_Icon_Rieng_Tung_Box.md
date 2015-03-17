![http://i24.servimg.com/u/f24/15/64/85/86/firesh10.png](http://i24.servimg.com/u/f24/15/64/85/86/firesh10.png)
Vào index body tìm:

```

<img title="{catrow.forumrow.L_FORUM_FOLDER_ALT}" src="{catrow.forumrow.FORUM_FOLDER_IMG}" alt="{catrow.forumrow.L_FORUM_FOLDER_ALT}"/>
```


sửa lại thành:

```

<img title="{catrow.forumrow.L_FORUM_FOLDER_ALT}" src="{catrow.forumrow.FORUM_FOLDER_IMG}" alt="{catrow.forumrow.L_FORUM_FOLDER_ALT}" value="{catrow.forumrow.FORUM_NAME}"  />
```


Tìm tiếp:

```

<!-- BEGIN catrow -->

```

thêm bên dưới nó:

```


<script type="text/javascript">
$("[value='Tên box cần thay icon']").replaceWith('<img src="link ảnh thay thế">');


Unknown end tag for &lt;/script&gt;


```


Với mỗi box cần thay thì thêm đoạn này:

```

$("[value='Tên box cần thay icon']").replaceWith('<img src="link ảnh thay thế">');

```