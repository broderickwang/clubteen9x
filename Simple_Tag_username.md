Nói qua: Khi bạn sử dụng cấu trúc như thế này:

```


@username: nội dung
```
thì khi gửi bài nó sẽ hiển thị như thế này:

```

@[url=link đến pro5 username]username[/url]: nội dung
```

Ví dụ: Khi mình viết

```


@Ruby: nội dung
```
thì khi gửi bài sẽ hiển thị mặc định như thế này: @Ruby: nội dung


Nhét cái này vào 1 file js cho chạy In all the page với nội dung như sau:

```

$(function () {
var send = document.forms['post']['post'];
send.onclick = function () {
var current = document.getElementById('text_editor_textarea');
current.value = current.value.replace(/@(.*):/g, '@[url=http://' + window.location.host + '/profile.forum?mode=viewprofile&u=$1]$1[/url]:');
};
});```



Cái trên rất đơn giản phải không?!
Nói thực ra thì nó chẳng có nghĩa lí gì cả Cười lớn
Để cho vui thôi Mắc cỡ Cho đẹp 4r Mắc cỡ