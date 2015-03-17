Demo :
![http://i12.servimg.com/u/f12/17/91/04/74/1icon110.png](http://i12.servimg.com/u/f12/17/91/04/74/1icon110.png)
Hướng dẫn :{Trả lời để thấy nội dung}

Bước 1
ACP >> Modules >> HTML & JAVASCRIPT>> Javascript codes management >> Create a new javascript
Tittle : Số dòng code
Place : in the topic
Code :
```

$(function(){
var codes = document.getElementsByTagName('code');
for(var h = 00, x= codes.length; h<x; h++) codes[h].innerHTML = '<ol id="hotrofmlines"><li>' + codes[h].innerHTML.split(/\<br\s?\/?\>/).join('

Unknown end tag for &lt;/li&gt;

<li>') + '

Unknown end tag for &lt;/li&gt;



Unknown end tag for &lt;/ol&gt;

';
});

```

Bước 2 :

Cho code sau vào CSS

```


#hotrofmlines
{
background : #000000;
padding : -0.5px;
width : 0.5px
}



```
Ghi nguồn hotrofm.com khi copy bài viết
Xong. Nhớ like nhé