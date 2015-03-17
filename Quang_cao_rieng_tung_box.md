![http://www.vietvbb.vn/up/demo/ads/subforum.png](http://www.vietvbb.vn/up/demo/ads/subforum.png)
cách làm


tạo 1 js in the home page với javascript code là :

phiên bản punbb

```

$(document).ready(function() {$('.table:eq(0)').after('

<img style="width:731px;height:100px;" src="http://i40.servimg.com/u/f40/17/60/05/62/bn110.jpg">


');});

```

phiên bản invision

```

$(document).ready(function() {$('div.borderwrap:eq(0)').after('<img style="width:731px;height:100px;" src="http://i40.servimg.com/u/f40/17/60/05/62/bn110.jpg"> ');});

```
phiên bản phpbb3

```

$(document).ready(function() {$('.forabg:eq(0)').after('<img style="width:731px;height:100px;" src="http://i40.servimg.com/u/f40/17/60/05/62/bn110.jpg"> ');});

```


đối với phpbb2
vào index\_box tìm

```

<!-- BEGIN catrow --><!-- BEGIN tablehead -->
```
và add sau nó

```

<div class="qcvna">

```
tìm tiếp

```

<!-- END tablefoot --><!-- END catrow -->

```
và thêm trước nó

```



Unknown end tag for &lt;/div&gt;



```
sau đó tạo 1 js in the homepage với javascript code như sau

```

$(document).ready(function() {$('.qcvna:eq(0)').after('<img style="width:731px;height:100px;" src="http://i40.servimg.com/u/f40/17/60/05/62/bn110.jpg"> ');});

```
trong code có

```

eq(0)
```
chính là đoạn code của box muốn hiện
VD eq(0) là box thứ nhất
eq(1) là box thứ hai ! cứ vậy mà nhân lên
còn đoạn

```

<img style="width:731px;height:100px;" src="http://i40.servimg.com/u/f40/17/60/05/62/bn110.jpg">
```
chính là đoạn banner quảng cáo 731px là chiều rộng bắt buộc của banner 100px là chiều dài