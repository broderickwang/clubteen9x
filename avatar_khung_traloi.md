![http://i12.servimg.com/u/f12/17/91/04/74/ademo10.png](http://i12.servimg.com/u/f12/17/91/04/74/ademo10.png)
Mô tả : Chức năng này sẽ hiện avatar của bạn trong viewtopic\_body

Hướng dẫn : Ẩn rồi đọc sao được!!!
À quên trước khi đọc bài này các bạn chú ý kể cả bạn đặt khung Login ở đâu bên trái hay bên phải thì avatar thành viên cũng sẽ hiện như demo

Bước 1 : Vào Modules >> Widget : đưa khung login lên như hình vẽ

![http://i12.servimg.com/u/f12/17/91/04/74/logo10.png](http://i12.servimg.com/u/f12/17/91/04/74/logo10.png)

Ấn Chấp nhận

Chú ý nếu bạn muốn khung login bên phải thì kéo thả chuột Login vào bên phải rồi nhập :
Width column 3 (right) : 180 pixels

Bước 2. Bạn cần tắt khung Login hiện bên phải forum bằng cách cho code sau vào CSS

```

#left {
display: none;
}
```


hoặc nếu bạn đặt khung Login bên phải trong Widget thì dùng code sau :

```

#right {
display: none;
}

```


Chú ý : Nếu bạn muốn xóa chữ Thông điệp trong khung trả lời thì thêm code này CSS ( xóa đi để cho đẹp thôi)

```

fieldset.frm-set dl dt label {
display:none;
}
```


Bước 3 : ACP >> Display >> Templates >> Overall\_header
Cho code sau vào overall\_header
Code sau áp dụng cho khung Login đặt bên trái trongWidget

```

<script type="text/javascript">
$(function() {
var hotrofmavatar = document.getElementById('left').getElementsByTagName('img')[0].src;
var hotrofm = document.createElement('span');
hotrofm.setAttribute('style', 'position: absolute; margin-left: -80px; margin-top: 0px; ');
hotrofm.innerHTML = '<img src="'+hotrofmavatar+'" style="color: #999393; padding:10px 10px 2px 10px; margin-bottom: -10px; border: 2px solid #d1d1d1;max-width: 55px; max-height: 55px; cursor: pointer;
position: absolute;
background-color: white;" />';
document.getElementById('text_editor_textarea').parentNode.insertBefore(hotrofm, document.getElementById('text_editor_textarea'));
});


Unknown end tag for &lt;/script&gt;



```

Cho khung Login đặt bên phải :

```

<script type="text/javascript">
$(function() {
var hotrofmavatar = document.getElementById('right').getElementsByTagName('img')[0].src;
var hotrofm = document.createElement('span');
hotrofm.setAttribute('style', 'position: absolute; margin-left: -80px; margin-top: 0px; ');
hotrofm.innerHTML = '<img src="'+hotrofmavatar+'" style="color: #999393; padding:10px 10px 2px 10px; margin-bottom: -10px; border: 2px solid #d1d1d1;max-width: 55px; max-height: 55px; cursor: pointer;
position: absolute;
background-color: white;" />';
document.getElementById('text_editor_textarea').parentNode.insertBefore(hotrofm, document.getElementById('text_editor_textarea'));
});


Unknown end tag for &lt;/script&gt;


```

Vui lòng ghi rõ nguồn www.hotrofm.com khi copy bài viết