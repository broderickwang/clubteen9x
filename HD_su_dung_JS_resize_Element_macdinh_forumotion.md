resizeElement là một javascript plugin mặc định của Forumotion có tác dụng thay đổi chiều cao của phần tử. Cách sử dụng như sau:

```

resizeElement(event,id)

```

[+] Nếu bạn muốn resize phần tử nào thì hãy thược hiện 3 bước sau:

Bước 1: Thêm thuộc tính style sau cho phần tử đó:

```

style="overflow:none;height:300px;"

```
... có thể thêm thuộc tính này trong CSS, trong đó 300 là chiều cao ban đầu của phần tử, bạn có thể thay thế nó bằng số bạn muốn.

Bước 2: Đặt một trong 2 đoạn code dưới đây vào vị trí bên dưới phần tử muốn resize:

> Thanh resize nằm ngang, bên dưới phần tử:

```

<div onmousedown="javascript:resizeElement(event, 'id-Element');" style="background: url("http://i48.servimg.com/u/f48/16/58/89/73/grippi11.png") no-repeat scroll center 2px #EEEEEE; border-color: #DDDDDD; border-style: solid; border-width: 0 1px 1px; cursor: s-resize; height: 9px; overflow: hidden;">

Unknown end tag for &lt;/div&gt;


```

> Thanh resize nằm bên phải, phía dưới phần tử:

```

<div align="right"><b><img style="cursor:se-resize;" onmousedown="javascript:resizeElement(event, 'id-Element');" src="http://illiweb.com/fa/resize.gif">

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/div&gt;




```
Bước 3: Thay id-Element trong bước 2 bằng id của phần tử bạn muốn resize.

Ví dụ: Bạn có một thẻ div có id là FMvi-group và muốn resize:

```

<div class="forum" id="FMvi-group">

Unknown end tag for &lt;/div&gt;



```
...bạn chỉ cần làm theo hướng dẫn trên, thêm CSS, đặt code resize bên dưới, thay đổi id-Element:

```

<div class="forum" id="FMvi-group" style="overflow:none;height:300px;">

Unknown end tag for &lt;/div&gt;


<div onmousedown="javascript:resizeElement(event, 'FMvi-group');" style="background: url("
http://i48.servimg.com/u/f48/16/58/89/73/grippi11.png
") no-repeat scroll center 2px #EEEEEE; border-color: #DDDDDD; border-style: solid; border-width: 0 1px 1px; cursor: s-resize; height: 9px; overflow: hidden;">

Unknown end tag for &lt;/div&gt;


```


Demo: http://www.fmvi.org/h40-demo-resize-element