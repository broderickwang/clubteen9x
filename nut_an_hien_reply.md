Demo :![http://i12.servimg.com/u/f12/17/91/04/74/12.png](http://i12.servimg.com/u/f12/17/91/04/74/12.png)
Hướng dẫn :
Bước 1 :
Cho code sau vào Javascript

Title **: NÚt trả lời nhanh
Place : In the topic**

Code

```

$(function() {
$('#quick_reply').before('<div style="text-align: center;"><input onclick="qr_cookie();" value="Trả lời nhanh" style="text-align: center;" type="button">

Unknown end tag for &lt;/div&gt;


');
if (my_getcookie('quick_reply')) {
document.getElementById('quick_reply').style.display = my_getcookie('quick_reply');
}
});
function qr_cookie() {
if (document.getElementById('quick_reply').style.display != 'block') {
document.getElementById('quick_reply').style.display = "block";
var a = document.getElementById('quick_reply').style.display;
my_setcookie('quick_reply', a, false);
} else {
document.getElementById('quick_reply').style.display = "none";
var a = document.getElementById('quick_reply').style.display;
my_setcookie('quick_reply', a, false);
}
}


```
Bước 2 : Vào CSS thêm code sau :

```

#quick_reply {
display: none;
}
```


Hết