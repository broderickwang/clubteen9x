Demo:

![http://i38.servimg.com/u/f38/16/18/15/10/153.jpg](http://i38.servimg.com/u/f38/16/18/15/10/153.jpg)

Vào Modules >> HTML & JAVASCRIPT >> Javascript codes management >> Create a new javascript

Title **: Đặt tùy ý**

Placement : In all the pages

Javascript Code **:**

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