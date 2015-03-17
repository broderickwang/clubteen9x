Công dụng:
- Nhẹ
- Có thể kết nối nhiều groupchat (kết nối forum)
- Chat riêng

Hướng dẫn:
- Vào https://jappix.com/ Chọn Register
- Điền đầy đủ thông tin rồi chọn Here we go!
- Chọn Login, điền đầy đủ thông tin rồi chọn Here we go!
![http://a.imageshack.us/img837/9655/jappixcom.png](http://a.imageshack.us/img837/9655/jappixcom.png)
- Nếu tên groupchat chưa ai đăng ký thì sẽ giống như thế này
![http://a.imageshack.us/img850/3338/jappixcom.jpg](http://a.imageshack.us/img850/3338/jappixcom.jpg)
- Làm theo hình bên dưới
![http://a.imageshack.us/img818/9655/jappixcom.png](http://a.imageshack.us/img818/9655/jappixcom.png)
- Cho code bên dưới vào cuối overall\_header và thay chỗ Tên groupchat bằng địa chỉ mới copy ở hình trên
Cho code này vào cuối overall\_header (nếu phpbb3 và invision thì cho vào widget)

```

<script type="text/javascript" src="https://static.jappix.com/php/get.php?l=en&amp;t=js&amp;g=mini.xml">

Unknown end tag for &lt;/script&gt;


<script type="text/javascript">
jQuery(document).ready(function() {
MINI_GROUPCHATS = ["Tên groupchat"];
MINI_NICKNAME =document.getElementById('i_icon_mini_logout').title.replace(/.*?\[(.*)\]/,"$1");
MINI_ANIMATE = true;
launchMini(true, true, "anonymous.jappix.com");
});


Unknown end tag for &lt;/script&gt;


```

- Muốn liên kết forum thì cần phải có địa chỉ groupchat của forum đó. Ví dụ: groupchat của fmvi có địa chỉ là fmvi@muc.jappix.com, mình sẽ có được code như bên dưới:

```

<script type="text/javascript" src="https://static.jappix.com/php/get.php?l=en&amp;t=js&amp;g=mini.xml">

Unknown end tag for &lt;/script&gt;


<script type="text/javascript">
jQuery(document).ready(function() {
MINI_GROUPCHATS = ["Tên groupchat", "fmvi@muc.jappix.com"];
MINI_NICKNAME =document.getElementById('i_icon_mini_logout').title.replace(/.*?\[(.*)\]/,"$1");
MINI_ANIMATE = true;
launchMini(true, true, "anonymous.jappix.com");
});


Unknown end tag for &lt;/script&gt;


```


Note: Nếu bạn không muốn tự động đăng nhập thì thay dòng launchMini(true, true, "anonymous.jappix.com"); bằng launchMini(false, true, "anonymous.jappix.com");

Cách vào webchat

```

https://jappix.com/?r=địa-chỉ-groupchat

```

Help: https://mini.jappix.com/help
Document: http://codingteam.net/project/jappix/doc/JappixMini