Chức năng :![http://i35.servimg.com/u/f35/17/75/86/58/1210.jpg](http://i35.servimg.com/u/f35/17/75/86/58/1210.jpg)
Khi ấn vào nút Quote trong 1 topic ( bất kì bài nào thì nó sẽ hiện ra quote ngay ở phía dưới khung trả lời nhanh , ko chuyển trang )
Chú ý : Cái này chỉ dành cho Phpbb3 và PunBB

Cách làm

Vào : MODULES >> HTML & JAVASCRIPT
Javascript codes management : Tạo 1 Script mới
Chọn : In all the pages

```


var CopyrightNotice='Quick Quote in Quick Reply for forumotion boards. Copyright © by AvacWeb. All Rights Reserved. Use and  modification of this script is not allowed without this entire copyright notice in the original, copied, or modified script. No distribution without consent.';
$(function() {
$('.i_icon_quote').click(function(e) { e.preventDefault();
var url=this.parentNode.href;
$('body').append('<div id="LGquote" style="display:none">

Unknown end tag for &lt;/div&gt;

');
var x=$('#LGquote');
x.load(url + ' textarea', function() {
var message=x.find('textarea').val();
var y=document.getElementById('quick_reply').message;
y.value+=message; y.focus();
$('#LGquote').remove();
});
});
});
```

thế là xong