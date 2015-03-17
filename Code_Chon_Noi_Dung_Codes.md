:c: cái ni vlt qua bên CP chôm về nì.
của bác baivong.
codes thì dài lê thê, rê con chuột để copy được hết đống codes
...cũng mỏi hết cái tay.
nhưng nếu có cái ni thì khỏe lắm.
bấm vô chỗ "chọn tòan bộ" - chọn nội dung
rứa là nguyên phần codes sẽ được đánh dấu
mình chỉ cần copy thui. hehe

> demo:          ![http://i28.servimg.com/u/f28/16/48/23/13/chonco10.png](http://i28.servimg.com/u/f28/16/48/23/13/chonco10.png)



:c: nếu và phpbb3, punnbb, invision thì dùng cái ni:
```

<script type="text/javascript" src="http://scriptfm.googlecode.com/files/select.js">

Unknown end tag for &lt;/script&gt;


```


:c: còn phpbb2 thì codes ni:

```

<script src="http://link.08sh.tk/select" type="text/javascript">

Unknown end tag for &lt;/script&gt;

```

>>> cái ni thời gian qua có lúc nó die. hehe



:c: hướng dẫn:

- ACP> Display> Templates> Overall\_header
- copy và dán đọan codes trên trước thẻ
```



Unknown end tag for &lt;/head&gt;

```

- bấm save và

:c: theo gợi ý của bác Hùng thì nên up lại cái
http://link.08sh.tk/select (trong codes dùng cho phpbb2)
để dùng cho ổn định.
nghĩa là,
- click vô link đó
- copy tòan bộ codes
- tạo 1 trang HTML với codes đó
- rùi lấy link HTML mới tạo thay vô.

![http://r22.imgfast.net/users/2213/24/46/69/smiles/2324072929.gif](http://r22.imgfast.net/users/2213/24/46/69/smiles/2324072929.gif)   xem version2 mới hơn nì:


Chức năng:  ![http://i28.servimg.com/u/f28/16/58/89/73/select10.png](http://i28.servimg.com/u/f28/16/58/89/73/select10.png)

Khung code cố định giữa bài viết, rộng 500px.
Click chọn toàn bộ code.
Ẩn/hiện khung code (mặc định là ẩn).
Style chuyên nghiệp.

Hướng dẫn: Display - Templates - General - Overall\_header
Tìm đoạn này:
```

<script src="{JQUERY_PATH}" type="text/javascript">

Unknown end tag for &lt;/script&gt;


```
... và chèn vào bên dưới bằng code sau:
```

<script src="http://fmvi-group.googlecode.com/files/Fmvi-Group-select-code-phpBB2.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;

```

Viết bởi baivong - www.FMvi.tk