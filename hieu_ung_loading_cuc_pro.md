demo : ![http://i43.servimg.com/u/f43/15/93/33/76/untitl19.jpg](http://i43.servimg.com/u/f43/15/93/33/76/untitl19.jpg)



Hướng dẫn :


Bước 1 : Thêm đoạn sau vào Css :

```


/* Load ding */
#loadlig{background:#000;background-color:rgba(0,0,0,0.5);color:#fff;filter:Alpha(opacity=80);float:left;font-size:22px;height:100%;left:0;position:fixed;text-align:center;text-shadow:0 1px 0 #000;top:0;width:100%;z-index:999}.load1{background:#333;border:5px solid rgba(255,255,255,0.1);border-radius:12px;height:50px;margin:150px auto;width:50px}

```

Bước 2 : Thêm đoạn sau vào fooder\_begin ( hoặc bất kì chỗ nào cũng được )

```



<div id=loadlig><div class=load1><img src=http://www.thismanslife.co.uk/images/loading.gif style='margin-top: 17px;'>

Unknown end tag for &lt;/div&gt;

Loading...

Unknown end tag for &lt;/div&gt;



```

Bước 3 :
Vào MODULES >> HTML & JAVASCRIPT >> Javascript codes management tạo 1 Javascript mới
Title **: Loading pro
Placement : In all the pages
Javascript Code** :

```



$(document).ready(function(){$(window).load(function(){$('#loadlig').fadeOut(2000,function(){$(this).remove})})});
```


Chú ý : Enable Javascript code management : phải được kick hoạt là Có (xem hình dưới)

![http://i43.servimg.com/u/f43/15/93/33/76/117.png](http://i43.servimg.com/u/f43/15/93/33/76/117.png)



Update thêm hiệu ứng load nữa
![http://www.fullyillustrated.com/wp-content/themes/fullyIllustrated/_include/img/fullyillustrated-loader.gif](http://www.fullyillustrated.com/wp-content/themes/fullyIllustrated/_include/img/fullyillustrated-loader.gif)
Cho vào css

```

#loadlig{background:#000;background-color:rgba(0,0,0,0.5);color:#fff;filter:Alpha(opacity=80);float:left;font-size:22px;height:100%;left:0;position:fixed;text-align:center;text-shadow:0 1px 0 #000;top:0;width:100%;z-index:999}.load1{margin-top:300px}
```


Cho vào đâu tùy ý :

```

<div id=loadlig><div class=load1><img src=http://www.fullyillustrated.com/wp-content/themes/fullyIllustrated/_include/img/fullyillustrated-loader.gif style=></div>Loading...</div>
```

Javascript Codes :
tích hết các ô trừ : In all the pages

```


$(document).ready(function(){$(window).load(function(){$('#loadlig').fadeOut(2000,function(){$(this).remove})})});


```

Hết
Thấy hay thì Thank nhá Very Happy