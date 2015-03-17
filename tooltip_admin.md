muốn hiện thông tin khi rê chuột vô nick thì tạo 1
javascript để in all the pages rùi cho code này vô
..chỉnh sửa theo ý bạn rùi save lại ha...

```

$(function(){$("a[href='/u1']").hover(function(){showtip('NickName: <font color=red>Jack Lagger

Unknown end tag for &lt;/font&gt;

<br>Ghi chú: <font color=#00eeff>Đây là người sáng lập ra

Unknown end tag for &lt;/font&gt;

 <font color=yellow>A1family</font>')},function(){hidetip()})});</code>



cái chọn nội dung code thì cũng tạo 1 java để all the pages
cho code này vô
<code>
function selectCode(a){var e=a.parentNode.parentNode.getElementsByTagName('CODE')[0];if(window.getSelection){var s=window.getSelection();if(s.setBaseAndExtent){s.setBaseAndExtent(e,0,e,e.innerText.length-1)}else{if(window.opera&&e.innerHTML.substring(e.innerHTML.length-4)=='<BR>'){e.innerHTML=e.innerHTML+' '}var r=document.createRange();r.selectNodeContents(e);s.removeAllRanges();s.addRange(r)}}else if(document.getSelection){var s=document.getSelection();var r=document.createRange();r.selectNodeContents(e);s.removeAllRanges();s.addRange(r)}else if(document.selection){var r=document.body.createTextRange();r.moveToElementText(e);r.select()}}if(text){}else{var text='Selecionar todos'}jQuery(document).ready(function(){jQuery("dl.codebox dt").not("dl.spoiler > dt").html('Code: <a href="#" onclick="selectCode(this); return false;"><font face="verdana" color="white">

Unknown end tag for &lt;/font&gt;

<b>Select All

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/a&gt;

')});```

Lưu ý: cái chọn nd code này chỉ áp dụng cho punb thui ha..
cái biểu tượng online kia thì cho đoạn này vào
chỗ bạn muốn trong viewtopic\_body ha
```

<div style="background: url(http://i68.servimg.com/u/f68/16/28/17/28/user_o10.gif); height: 24px; width: 24px; border: 0px;display:inline-block;">{postrow.displayed.ONLINE_IMG}

Unknown end tag for &lt;/div&gt;

```

đc thì vote ha...