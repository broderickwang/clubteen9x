Lần đầu tiên chia sẻ code, có gì sai sót xin được lượng thứ Mắc cỡ
  1. [MOD](MOD.md) Thông báo khi có lời mời kết bạn

Cũng chỉ là TUT nho nhỏ thôi Mắc cỡ
Dùng ajax nên có thể hơi nặng và rất... lag nhé Mắc cỡ



```


$(document).ready(function () {
$.ajax({
url: '/profile?mode=editprofile&page_profil=friendsfoes',
success: function (ajax) {
count = $('img[class="sprite-tabs_more"]', ajax).length;
if(count > 1) {
var b = confirm('Bạn có ' + count + ' lời mời kết bạn mới. Confirm?');
if(b == true) {
location.href = '/profile?mode=editprofile&page_profil=friendsfoes'
};
}
}
});
});

```

Chưa chính thức test nên có thể lỗi Mắc cỡ
Báo lỗi tại đây nhé



2.[MOD](MOD.md) Thông báo khi có người viết lên tường
Cái này mình lấy từ avacweb, nhưng cũng không hiểu gì lắm
Muốn đưa lên hỏi mn có ai có thể giải thích kĩ cho em không
Với lại cái này em add vào 4r em mà chẳng thấy chuyển biến gì
4r em: http://truyenviet.123.st/

Chèn vào CSS:

```


#LGvms {
position: fixed;
top: 20px;
right: 20px;
background: #137ADA;
padding: 20px 40px;
border: 1px solid #1652EC;
font-size: 1.3em;
border-radius: 3px;
-moz-border-radius: 3px;
-webkit-border-radius: 3px;
box-shadow: inset 0 20px 20px #4392E7, -1px 5px 25px #193466;
-moz-box-shadow: inset 0 20px 20px #4392E7, -1px 5px 25px #193466;
-webkit-box-shadow: inset 0 20px 20px #4392E7, -1px 5px 25px #193466;
}
#LGvms a {
color: white;
text-shadow: 0 1px blue;
font-weight: bold;
text-decoration: none;
}
```

Add code sau vô 1 widget hoặc Annoucement kẹo ngon quá

```


<div id="LGvms" style="display:none">{USERLINK*}

Unknown end tag for &lt;/div&gt;


<script type="text/javascript">
(function() {
var holder = document.getElementById('LGvms');
var cookie = my_getcookie('LGvms') || 2000;
var url = holder.firstChild.href + '&page_profil=messages';
if(url.indexOf('&u=-1') > 0) return;
jQuery(holder).load(url + ' #profile-advanced-details h3', function() {
var nums = holder.firstChild.innerHTML.match(/[0-9]+/g);
var totalVMs = parseInt(nums[nums.length-1]);
if(totalVMs > cookie) {
holder.innerHTML = '<a href="' + url + '">You have ' + (totalVMs - cookie) + ' new visitor messages.

Unknown end tag for &lt;/a&gt;

';
holder.style.display = '';
}
my_setcookie('LGvms', totalVMs, 1);
});
})();

Unknown end tag for &lt;/script&gt;



```

Source: http://www.avacweb.com xoa má

P/s: Ai có cách khác không chia sẻ với nhé...
E thử code trên rồi nhưng không được T\_T